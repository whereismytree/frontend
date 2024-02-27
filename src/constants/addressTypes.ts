export type AddressType = keyof typeof ADDRESS_TYPES;

const ADDRESS_TYPES = {
  STREET: {
    ko: '지번',
    en: 'street',
  },
  ROAD: {
    ko: '도로명',
    en: 'road',
  },
} as const;

export default ADDRESS_TYPES;
