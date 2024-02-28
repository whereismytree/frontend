import ADDRESS_TYPE from 'constants/addressTypes';
import * as S from './style';

function AddressType({ type }: { type: keyof typeof ADDRESS_TYPE }) {
  return <S.AddressType>{ADDRESS_TYPE[type].ko}</S.AddressType>;
}

export default AddressType;
