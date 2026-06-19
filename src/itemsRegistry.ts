import { ItemDefinition } from './types';

export const CITY_ITEMS: ItemDefinition[] = [
  // Structures
  {
    id: 'residential-low',
    name: 'Low-Rise House',
    category: 'Structures',
    color: '#8d6e63', // Warm brown
    secondaryColor: '#e0f2f1', // Pastel roof
    gridWidth: 1,
    gridLength: 1,
    height: 1.2,
    description: 'Cozy suburban housing with an angled gabled roof.'
  },
  {
    id: 'skyscraper-modern',
    name: 'Modern Skyscraper',
    category: 'Structures',
    color: '#263238', // Dark slate
    secondaryColor: '#00e5ff', // Neon cyan accents
    gridWidth: 1,
    gridLength: 1,
    height: 4.5,
    emissiveColor: '#00e5ff',
    description: 'A towering office cylinder with panoramic glass grids.'
  },
  {
    id: 'cyberpunk-tower',
    name: 'Cyberpunk Tower',
    category: 'Structures',
    color: '#1a1a24', // Jet black
    secondaryColor: '#ec407a', // Hot pink
    gridWidth: 1,
    gridLength: 1,
    height: 5.5,
    emissiveColor: '#ec407a',
    description: 'A neon-lit megalithic tower with antenna transmitters.'
  },
  {
    id: 'factory',
    name: 'Industrial Factory',
    category: 'Structures',
    color: '#757575', // Metallic grey
    secondaryColor: '#d84315', // Rust orange
    gridWidth: 2,
    gridLength: 1,
    height: 2.0,
    emissiveColor: '#ffb300',
    description: 'A heavy industrial facility with smoke vents and boilers.'
  },
  {
    id: 'power-plant',
    name: 'Nuclear Reactor',
    category: 'Structures',
    color: '#cfd8dc', // Light concrete
    secondaryColor: '#ff1744', // Danger red
    gridWidth: 2,
    gridLength: 2,
    height: 3.2,
    emissiveColor: '#00ff66',
    description: 'A dual cooling tower array for clean grid generation.'
  },
  {
    id: 'bridge',
    name: 'Suspension Bridge',
    category: 'Structures',
    color: '#b0bec5',
    secondaryColor: '#01579b',
    gridWidth: 1,
    gridLength: 3,
    height: 2.5,
    emissiveColor: '#00ffd8',
    description: 'An elevated spanning bridge system.'
  },
  {
    id: 'hospital',
    name: 'Medical Center',
    category: 'Structures',
    color: '#ffffff', // White
    secondaryColor: '#f44336', // Red Cross
    gridWidth: 2,
    gridLength: 2,
    height: 2.8,
    emissiveColor: '#f44336',
    description: 'A high-capacity civic medical facility.'
  },
  {
    id: 'police-station',
    name: 'Police Precinct',
    category: 'Structures',
    color: '#1a237e', // Indigo blue
    secondaryColor: '#29b6f6', // Light blue lights
    gridWidth: 1,
    gridLength: 1,
    height: 2.2,
    emissiveColor: '#29b6f6',
    description: 'A structured local law enforcement headquarters.'
  },
  {
    id: 'supermarket',
    name: 'Mega Mall',
    category: 'Structures',
    color: '#fbc02d', // Bright gold
    secondaryColor: '#4caf50', // Eco green logo
    gridWidth: 2,
    gridLength: 2,
    height: 1.6,
    description: 'A wide-spread shopping center with canopy glass fronts.'
  },
  {
    id: 'wind-turbine',
    name: 'Wind Turbine',
    category: 'Structures',
    color: '#eceff1',
    secondaryColor: '#78909c',
    gridWidth: 1,
    gridLength: 1,
    height: 4.8,
    description: 'Clean energy generation with revolving rotor design.'
  },

  // Infrastructure
  {
    id: 'road-2lane',
    name: 'Asphalt 2-Lane Road',
    category: 'Infrastructure',
    color: '#37474f', // Deep dark grey
    secondaryColor: '#ffeb3b', // Yellow lines
    gridWidth: 1,
    gridLength: 1,
    height: 0.05,
    isFloorTile: true,
    description: 'Standard roadway tile with dual safety dividers.'
  },
  {
    id: 'road-crossing',
    name: '4-Way Intersection',
    category: 'Infrastructure',
    color: '#263238',
    secondaryColor: '#ffffff', // White crosswalk indicators
    gridWidth: 1,
    gridLength: 1,
    height: 0.05,
    isFloorTile: true,
    description: 'A fully signalized traffic connection node.'
  },
  {
    id: 'road-t-junction',
    name: 'T-Junction Connection',
    category: 'Infrastructure',
    color: '#263238',
    secondaryColor: '#ffffff',
    gridWidth: 1,
    gridLength: 1,
    height: 0.05,
    isFloorTile: true,
    description: 'A split highway junction connector.'
  },
  {
    id: 'train-tracks',
    name: 'High-Speed Railway',
    category: 'Infrastructure',
    color: '#4e342e', // Timber ties
    secondaryColor: '#90a4ae', // Steel lines
    gridWidth: 1,
    gridLength: 1,
    height: 0.1,
    isFloorTile: true,
    description: 'Ballasted train tracks supporting regional rail systems.'
  },
  {
    id: 'streetlight',
    name: 'Eco Streetlight',
    category: 'Infrastructure',
    color: '#455a64',
    secondaryColor: '#ffe082',
    gridWidth: 1,
    gridLength: 1,
    height: 2.0,
    emissiveColor: '#ffeb3b',
    description: 'A curved solar-powered lamppost casting cones of warm light.'
  },
  {
    id: 'power-grid-pole',
    name: 'High-Voltage Utility Pole',
    category: 'Infrastructure',
    color: '#5d4037',
    secondaryColor: '#cfd8dc',
    gridWidth: 1,
    gridLength: 1,
    height: 3.5,
    description: 'High tension electricity tower linking generator feeds.'
  },

  // Decor
  {
    id: 'park-grid',
    name: 'Public Botanical Park',
    category: 'Decor',
    color: '#2e7d32', // Deep grass green
    secondaryColor: '#81c784',
    gridWidth: 2,
    gridLength: 2,
    height: 0.05,
    isFloorTile: true,
    description: 'A grassy city block with cobblestone walking trails.'
  },
  {
    id: 'oak-trees',
    name: 'Oak Tree Cluster',
    category: 'Decor',
    color: '#388e3c',
    secondaryColor: '#5d4037',
    gridWidth: 1,
    gridLength: 1,
    height: 1.8,
    description: 'Dense grouping of mature, shade-providing deciduous trees.'
  },
  {
    id: 'water-fountain',
    name: 'Municipal Fountain',
    category: 'Decor',
    color: '#b0bec5',
    secondaryColor: '#29b6f6', // Sparkly water blue
    gridWidth: 1,
    gridLength: 1,
    height: 0.6,
    emissiveColor: '#00e5ff',
    description: 'A tiered marble fountain with programmable aqua emitters.'
  },
  {
    id: 'parking-lot',
    name: 'Commercial Parking Lot',
    category: 'Decor',
    color: '#455a64',
    secondaryColor: '#ffffff',
    gridWidth: 1,
    gridLength: 1,
    height: 0.05,
    isFloorTile: true,
    description: 'Asphalt parking layout with white lines and wheel stops.'
  },
  {
    id: 'billboard-neon',
    name: 'Dynamic Advertising Board',
    category: 'Decor',
    color: '#212121',
    secondaryColor: '#aa00ff', // Vivid violet neon
    gridWidth: 1,
    gridLength: 1,
    height: 3.2,
    emissiveColor: '#aa00ff',
    description: 'An elevated commercial panel projecting vibrant media.'
  },
  {
    id: 'river-flow',
    name: 'Crystalline Cyber River',
    category: 'Infrastructure',
    color: '#0d47a1',
    secondaryColor: '#00ffd8',
    gridWidth: 1,
    gridLength: 1,
    height: 0.05,
    isFloorTile: true,
    emissiveColor: '#00b0ff',
    description: 'A beautifully illuminated flowing river segment. Emits a cool aquatic neon glow.'
  },
  {
    id: 'ai-data-center',
    name: 'Quantum AI Data Center',
    category: 'Structures',
    color: '#1a1d24',
    secondaryColor: '#39ff14',
    gridWidth: 2,
    gridLength: 2,
    height: 2.8,
    emissiveColor: '#30ffd8',
    description: 'A state-of-the-art supercomputing facility packed with blinking mainframe racks and liquid cooling channels.'
  },
  {
    id: 'grand-hotel',
    name: 'Apex Hotel Resort',
    category: 'Structures',
    color: '#34495e',
    secondaryColor: '#ec008b',
    gridWidth: 2,
    gridLength: 2,
    height: 5.2,
    emissiveColor: '#ff007f',
    description: 'A luxurious multi-story hotel tower with glass-bottom infinity pool and spire neon displays.'
  },
  {
    id: 'neon-park',
    name: 'Bioluminescent Zen Park',
    category: 'Decor',
    color: '#1b5e20',
    secondaryColor: '#39ff14',
    gridWidth: 2,
    gridLength: 2,
    height: 0.1,
    isFloorTile: true,
    emissiveColor: '#39ff14',
    description: 'A recreational reserve featuring engineered flora that glows with gorgeous bio-luminescence at night.'
  },
  {
    id: 'rainbow-tree',
    name: 'Neon Tree Sentinel',
    category: 'Decor',
    color: '#2e303d',
    secondaryColor: '#e040fb',
    gridWidth: 1,
    gridLength: 1,
    height: 2.2,
    emissiveColor: '#e040fb',
    description: 'A modified specimen with colorful artificial light-reactive leaves that shine beautifully in the dark.'
  }
];

export const FLOOR_ITEMS: ItemDefinition[] = [
  // Walls
  {
    id: 'wall-concrete',
    name: 'Concrete Exterior Wall',
    category: 'Walls',
    color: '#90a4ae', // Raw concrete grey
    gridWidth: 1,
    gridLength: 1,
    height: 2.4,
    description: 'Load-bearing concrete perimeter wall block.'
  },
  {
    id: 'wall-drywall',
    name: 'Interior dry partition',
    category: 'Walls',
    color: '#eceff1', // Soft drywall white
    gridWidth: 1,
    gridLength: 1,
    height: 2.4,
    description: 'Lightweight interior partition separating living spaces.'
  },
  {
    id: 'wall-window',
    name: 'Windowed Wall Panel',
    category: 'Walls',
    color: '#cfd8dc',
    secondaryColor: '#80deea', // Soft cyan glass
    gridWidth: 1,
    gridLength: 1,
    height: 2.4,
    description: 'Steel framework with built-in thermal-insulated glass pane.'
  },
  {
    id: 'wall-archway',
    name: 'Architectural Archway',
    category: 'Walls',
    color: '#e0e0e0',
    gridWidth: 1,
    gridLength: 1,
    height: 2.4,
    description: 'An open-concept bricked architectural gateway.'
  },
  {
    id: 'wall-sliding-door',
    name: 'Glass Sliding Door',
    category: 'Walls',
    color: '#37474f',
    secondaryColor: '#e0f7fa',
    gridWidth: 1,
    gridLength: 1,
    height: 2.4,
    description: 'An elegant sliding patio entrance.'
  },

  // Flooring
  {
    id: 'floor-hardwood',
    name: 'Oak Hardwood Flooring',
    category: 'Flooring',
    color: '#a1887f', // Deep wood tone
    secondaryColor: '#8d6e63',
    gridWidth: 1,
    gridLength: 1,
    height: 0.05,
    isFloorTile: true,
    description: 'Warm, interlocking natural oak wooden planks.'
  },
  {
    id: 'floor-tile',
    name: 'Ceramic Grid Tile',
    category: 'Flooring',
    color: '#e0e0e0', // Pale grey with grid grouting
    secondaryColor: '#bdbdbd',
    gridWidth: 1,
    gridLength: 1,
    height: 0.05,
    isFloorTile: true,
    description: 'High-durability grout lines and non-slip tiles.'
  },
  {
    id: 'floor-rug',
    name: 'Sultana Area Rug',
    category: 'Flooring',
    color: '#c62828', // Royal crimson pattern
    secondaryColor: '#fbc02d',
    gridWidth: 2,
    gridLength: 2,
    height: 0.06,
    isFloorTile: true,
    description: 'Ornate, high-pile decorative floor tapestry.'
  },

  // Fixtures & Lighting
  {
    id: 'fixture-spotlight',
    name: 'Ceiling Spotlight',
    category: 'Fixtures',
    color: '#212121',
    secondaryColor: '#ffeb3b',
    gridWidth: 1,
    gridLength: 1,
    height: 2.4,
    emissiveColor: '#ffea00',
    description: 'Overhead recessed spotlight aiming sharp light indicators downwards.'
  },
  {
    id: 'fixture-sconce',
    name: 'Wall Sconce Fixture',
    category: 'Fixtures',
    color: '#757575',
    secondaryColor: '#ffb300',
    gridWidth: 1,
    gridLength: 1,
    height: 1.5,
    emissiveColor: '#ffb300',
    description: 'A wall-mounted ambient light casting an upwards wash glow.'
  },
  {
    id: 'fixture-counter',
    name: 'Marble Kitchen Console',
    category: 'Fixtures',
    color: '#f5f5f5', // Carrara white marble
    secondaryColor: '#424242', // Chrome faucets
    gridWidth: 2,
    gridLength: 1,
    height: 0.9,
    description: 'Multi-functional island console with high-end integrated sink.'
  },
  {
    id: 'fixture-refrigerator',
    name: 'Smart Refrigerator',
    category: 'Fixtures',
    color: '#b0bec5', // Brushed silver
    secondaryColor: '#00e5ff', // Neon status screen
    gridWidth: 1,
    gridLength: 1,
    height: 2.0,
    emissiveColor: '#00e5ff',
    description: 'Double-french door tall silver cooling appliance.'
  },
  {
    id: 'fixture-toilet',
    name: 'Porcelain Toiletry Unit',
    category: 'Fixtures',
    color: '#ffffff',
    gridWidth: 1,
    gridLength: 1,
    height: 0.8,
    description: 'Vitreous china plumbing fixture.'
  },
  {
    id: 'fixture-bathtub',
    name: 'Deep-Soak Bathtub',
    category: 'Fixtures',
    color: '#ffffff',
    secondaryColor: '#80deea', // Water shimmer
    gridWidth: 2,
    gridLength: 1,
    height: 0.7,
    description: 'Free-standing luxury ergonomic soaking tub.'
  },
  {
    id: 'fixture-tv',
    name: 'Home Entertainment Hub',
    category: 'Fixtures',
    color: '#212121',
    secondaryColor: '#455a64',
    gridWidth: 2,
    gridLength: 1,
    height: 1.2,
    emissiveColor: '#29b6f6',
    description: 'A wide solid wooden console carrying a thin glowing display panel.'
  },

  // Furniture
  {
    id: 'furniture-sofa',
    name: 'L-Shape Sectional Sofa',
    category: 'Furniture',
    color: '#3e2723', // Espresso mahogany leather
    secondaryColor: '#5d4037',
    gridWidth: 2,
    gridLength: 2,
    height: 0.8,
    description: 'Expansive padded leather lounge modules with corner brackets.'
  },
  {
    id: 'furniture-table',
    name: 'Mid-Century Dining Table',
    category: 'Furniture',
    color: '#8d6e63',
    gridWidth: 2,
    gridLength: 1,
    height: 0.75,
    description: 'Warm walnut breakfast table.'
  },
  {
    id: 'furniture-chair',
    name: 'Ergonomic Task Chair',
    category: 'Furniture',
    color: '#1565c0', // Royal blue mesh
    secondaryColor: '#37474f',
    gridWidth: 1,
    gridLength: 1,
    height: 1.0,
    description: 'High-backed swivel chair with lumbar contour pads.'
  },
  {
    id: 'furniture-bookshelf',
    name: 'Hardwood Library Tower',
    category: 'Furniture',
    color: '#5d4037',
    secondaryColor: '#90caf9', // Book clusters
    gridWidth: 1,
    gridLength: 1,
    height: 2.1,
    description: 'Vertical shelving filled with assorted books and ornaments.'
  },
  {
    id: 'furniture-monstera',
    name: 'Potted Broadleaf Monstera',
    category: 'Furniture',
    color: '#1b5e20', // Forest green foliage
    secondaryColor: '#8d6e63', // Clay terracotta pot
    gridWidth: 1,
    gridLength: 1,
    height: 1.2,
    description: 'A lush potted houseplant with iconic leaf shapes.'
  },
  {
    id: 'furniture-coffee-table',
    name: 'Minimalist Coffee Table',
    category: 'Furniture',
    color: '#d7ccc8',
    secondaryColor: '#795548',
    gridWidth: 1,
    gridLength: 1,
    height: 0.45,
    description: 'Low-profile circular tabletop resting on wooden legs.'
  },
  {
    id: 'furniture-bed',
    name: 'Deluxe King Bed Unit',
    category: 'Furniture',
    color: '#cfd8dc', // Light grey linen
    secondaryColor: '#0d47a1', // Velvet blue throw
    gridWidth: 2,
    gridLength: 2,
    height: 0.9,
    description: 'Sturdy padded frame with memory foam mattress and soft pillows.'
  }
];
