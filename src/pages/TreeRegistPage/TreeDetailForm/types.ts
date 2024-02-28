import ADDRESS_TYPES from 'constants/addressTypes';

export type TAddress = {
  address: string;
  location: string;
  addressType: keyof typeof ADDRESS_TYPES;
  latLng: {
    lat: number;
    lng: number;
  };
};

type AddressType = keyof typeof ADDRESS_TYPES;

type Address = {
  [K in AddressType]: K extends 'ROAD'
    ? { addressType: K; roadAddress: string; streetAddress?: never }
    : { addressType: K; streetAddress: string; roadAddress?: never };
}[AddressType];

// 트리 등록시 서버에 전송되어야 하는 Body 데이터의 타입

type TreeDatas = Address & {
  name: string;
  lat: number;
  lng: number;
};

export type TreeRegistFormDatas = {
  imageUrl?: string;
  detailAddress?: string;
  exhibitionStartDate?: Date;
  exhibitionEndDate?: Date;
  businessDays?: string[];
  spaceType?: 'true' | 'false';
  isPet?: 'true' | 'false';
  extraInfo?: string;
};
// 클라이언트에서 받는 데이터의 타입과 서버가 기대하는 데이터의 타입이 상이한 데이터의 keys
type differentFormDataTypeKeys =
  | 'businessDays'
  | 'exhibitionStartDate'
  | 'exhibitionEndDate'
  | 'spaceType'
  | 'isPet';

// 서버가 기대하는 폼에서 입력받은 데이터의 타입
export type ServerExpectedFormData = Omit<TreeRegistFormDatas, differentFormDataTypeKeys> & {
  businessDays?: string;
  exhibitionStartDate?: string;
  exhibitionEndDate?: string;
  spaceType?: boolean;
  isPet?: boolean;
};

export type TreeRegistAPIBody = TreeDatas & ServerExpectedFormData;

// 정제되지 않은 타입, 유저에게 입력받는 폼에서 받는 데이터는 모두 optional인 타입.
export type UnrefinedTreeRegistApiBody = TreeDatas & TreeRegistFormDatas;
