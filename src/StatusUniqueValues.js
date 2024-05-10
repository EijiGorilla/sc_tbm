// Lot Status
export const lotStatusField = 'StatusLA';
export const lotStatusLabel = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
  'With PTE',
  'For Harmonization',
];

export const lotStatusColor = [
  '#00734d',
  '#0070ff',
  '#ffff00',
  '#ffaa00',
  '#ff0000',
  '#70AD47',
  '#B2B2B2',
];
export const lotStatusQuery = lotStatusLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    color: lotStatusColor[index],
  });
});

export const lotUseArray = [
  'Agricultural',
  'Agricultural & Commercial',
  'Agricultural / Residential',
  'Commercial',
  'Industrial',
  'Irrigation',
  'Residential',
  'Road',
  'Road Lot',
  'Special Exempt',
];

// TBM Status
export const tbmStatusField = 'Status';
export const tbmStatusLabel = ['To be Constructed', 'Excavating (Cutter Head)', 'Segmented'];

export const tbmStatusColor = [
  [225, 225, 225, 0.5],
  [232, 54, 24, 1],
  [0, 112, 255, 0.8],
];

export const tbmTunnelSection = ['North & South', 'North-bound', 'South-bound'];
