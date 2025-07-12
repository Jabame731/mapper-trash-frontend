export const badgeOpts = [
  {
    name: 'all',
    label: 'All',
    icon: null,
  },
  {
    name: 'platic',
    label: 'Plastic',
    icon: 'wine',
  },
  {
    name: 'glass',
    label: 'Glass',
  },
  {
    name: 'metal',
    label: 'Metal',
  },
  {
    name: 'organic',
    label: 'Organic',
  },
];

export const reports: any[] = [
  {
    id: '1',
    title: 'Plastic bottles scattered',
    description:
      'Multiple plastic bottles and containers scattered around the playground area. Appears to be from a recent event or gathering.',
    location: 'Central Park, near playground',
    coordinates: { lat: 40.7829, lng: -73.9654 },
    status: 'pending',
    priority: 'medium',
    category: 'Plastic Waste',
    reportedBy: 'John D.',
    reportedDate: new Date('2024-01-15T10:30:00'),
    images: ['bottle1.jpg', 'bottle2.jpg'],
    upvotes: 12,
    downvotes: 1,
    estimatedCleanupTime: 30,
    hazardous: false,
  },
  {
    id: '2',
    title: 'Food containers dumped',
    description:
      'Large pile of takeout containers and food waste dumped near the beach entrance. Strong odor present.',
    location: 'Beach boardwalk, section B',
    coordinates: { lat: 40.7589, lng: -73.9851 },
    status: 'resolved',
    priority: 'high',
    category: 'Food Waste',
    reportedBy: 'Sarah M.',
    reportedDate: new Date('2024-01-14T14:15:00'),
    resolvedDate: new Date('2024-01-15T09:00:00'),
    images: ['food1.jpg'],
    upvotes: 8,
    downvotes: 0,
    assignedTo: 'City Cleanup Crew',
    estimatedCleanupTime: 45,
    hazardous: false,
  },
  {
    id: '3',
    title: 'Hazardous chemical containers',
    description:
      'Several unmarked chemical containers found behind the industrial building. Potential environmental hazard.',
    location: 'Industrial District, Building 42',
    coordinates: { lat: 40.7505, lng: -73.9934 },
    status: 'in-progress',
    priority: 'urgent',
    category: 'Hazardous Waste',
    reportedBy: 'Mike R.',
    reportedDate: new Date('2024-01-13T16:45:00'),
    images: ['chemical1.jpg', 'chemical2.jpg', 'chemical3.jpg'],
    upvotes: 25,
    downvotes: 2,
    assignedTo: 'Hazmat Team',
    estimatedCleanupTime: 120,
    hazardous: true,
  },
  {
    id: '4',
    title: 'Cigarette butts accumulation',
    description:
      'Heavy accumulation of cigarette butts around bus stop area. Regular cleaning needed.',
    location: 'Main Street Bus Stop',
    coordinates: { lat: 40.7614, lng: -73.9776 },
    status: 'pending',
    priority: 'low',
    category: 'Cigarette Waste',
    reportedBy: 'Lisa K.',
    reportedDate: new Date('2024-01-12T08:20:00'),
    images: ['cigarettes1.jpg'],
    upvotes: 5,
    downvotes: 0,
    estimatedCleanupTime: 15,
    hazardous: false,
  },
  {
    id: '5',
    title: 'Construction debris pile',
    description:
      'Large pile of construction materials and debris left on sidewalk after renovation work.',
    location: 'Oak Avenue, near school',
    coordinates: { lat: 40.758, lng: -73.9855 },
    status: 'verified',
    priority: 'high',
    category: 'Construction Waste',
    reportedBy: 'David L.',
    reportedDate: new Date('2024-01-11T12:00:00'),
    images: ['debris1.jpg', 'debris2.jpg'],
    upvotes: 18,
    downvotes: 1,
    assignedTo: 'Public Works',
    estimatedCleanupTime: 90,
    hazardous: false,
  },
];

export const stats = {
  total: 0,
  pending: 0,
  inProgress: 0,
  resolved: 0,
  myReports: 0,
};

export const filters = {
  status: 'all',
  category: 'all',
  priority: 'all',
  dateRange: 'all',
  location: 'all',
  showMyReports: false,
};

export const categories = [
  'All Categories',
  'Plastic Waste',
  'Food Waste',
  'Cigarette Waste',
  'Construction Waste',
  'Hazardous Waste',
  'Electronic Waste',
  'Glass & Metal',
  'Paper Waste',
  'Other',
];

export const priorities = ['All Priorities', 'Low', 'Medium', 'High', 'Urgent'];
export const statuses = [
  'All Status',
  'Pending',
  'In Progress',
  'Resolved',
  'Verified',
];
