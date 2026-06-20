import { useCallback, useRef, useState } from 'react';

/**
 * Gates rapid-fire actions so they can't pile up faster than the UI can
 * actually process them.
 *
 * - `runOrDrop`: for fast, frequent triggers (canvas clicks). If something
 *   is already processing, the new action is silently dropped — exactly
 *   the spam-click case. Only ONE action is "in flight" at a time, and the
 *   busy window briefly locks input so the user gets visible feedback
 *   instead of a queue silently building up.
 *
 * - `enqueueLatest`: for discrete button presses (Save, Randomize, Switch
 *   Mode). Rapid repeats COLLAPSE into the most recent call rather than
 *   stacking — so mashing "Save" 10 times just runs it once, after things
 *   settle.
 */
export function useProcessingGate(minLockMs = 150) {
    const [isBusy, setIsBusy] = useState(false);
    const lockedRef = useRef(false);
    const pendingRef = useRef<(() => void) | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const release = useCallback(() => {
        const next = pendingRef.current;
        pendingRef.current = null;

        if (next) {
            // A newer action arrived while we were locked — run it now,
            // then re-arm the lock for its own settle window.
            requestAnimationFrame(() => {
                next();
                timerRef.current = setTimeout(release, minLockMs);
            });
        } else {
            lockedRef.current = false;
            setIsBusy(false);
        }
    }, [minLockMs]);

    const beginLock = useCallback(() => {
        lockedRef.current = true;
        setIsBusy(true);
        timerRef.current = setTimeout(release, minLockMs);
    }, [minLockMs, release]);

    const runOrDrop = useCallback(
        (fn: () => void) => {
            if (lockedRef.current) return false; // drop — UI is already catching up
            beginLock();
            requestAnimationFrame(fn);
            return true;
        },
        [beginLock]
    );

    const enqueueLatest = useCallback(
        (fn: () => void) => {
            if (lockedRef.current) {
                pendingRef.current = fn; // replace any earlier pending call
                return;
            }
            beginLock();
            requestAnimationFrame(fn);
        },
        [beginLock]
    );

    return { isBusy, runOrDrop, enqueueLatest };
}