import { useTreeRegistMapContext } from '../../provider';
import * as S from './style';

function AddressInfo() {
  const { address, toggleAddressType } = useTreeRegistMapContext();
  const currentAddress = `${address.name[address.type.en]} ${address.location || ''}`;
  const exchangeType: (typeof address)['type']['ko'] =
    address.type.ko === '도로명' ? '지번' : '도로명';

  return (
    <>
      <S.Address>
        {address.name[address.type.en] ? currentAddress : `${address.type.ko}이 존재하지 않습니다`}
      </S.Address>
      <S.AddressTypeButton onClick={toggleAddressType}>{exchangeType}으로 보기</S.AddressTypeButton>
    </>
  );
}

export default AddressInfo;
