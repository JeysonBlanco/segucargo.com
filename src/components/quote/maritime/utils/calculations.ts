import { MaritimeQuoteData } from '../types';

interface CostBreakdown {
  freight: number;
  localCharges: number;
  customs: number;
  taxes: number;
}

export const calculateTotalCost = (data: MaritimeQuoteData): CostBreakdown => {
  // Base rates per container type
  const baseRates = {
    '20ST': 2000,
    '40ST': 3000,
    '40HC': 3500,
    'LCL': 85 // per CBM
  };

  // Local charges per port
  const localCharges = {
    'CLSAI': 500,
    'CLVAP': 550,
    'CLIQQ': 600
  };

  // Calculate freight cost
  let freight = 0;
  if (data.shipmentType === 'FCL' && data.containerType) {
    freight = baseRates[data.containerType as keyof typeof baseRates] || 0;
  } else if (data.shipmentType === 'LCL') {
    const volume = calculateVolume(data.dimensions);
    freight = baseRates.LCL * volume;
  }

  // Calculate local charges
  const portCharges = localCharges[data.destination as keyof typeof localCharges] || 0;

  // Calculate customs and taxes
  const customsRate = 0.06; // 6% of CIF value
  const taxRate = 0.19; // 19% VAT
  const cargoValue = parseFloat(data.cargo.value) || 0;
  
  const customs = cargoValue * customsRate;
  const taxes = (cargoValue + customs) * taxRate;

  return {
    freight,
    localCharges: portCharges,
    customs,
    taxes
  };
};

const calculateVolume = (dimensions: { length: string; width: string; height: string }) => {
  const length = parseFloat(dimensions.length) || 0;
  const width = parseFloat(dimensions.width) || 0;
  const height = parseFloat(dimensions.height) || 0;
  return (length * width * height) / 1000000; // Convert to cubic meters
};