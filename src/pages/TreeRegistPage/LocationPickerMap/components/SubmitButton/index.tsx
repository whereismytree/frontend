import Button from 'components/common/button';
import { useNavigate } from 'react-router-dom';
import getPath from 'utils/getPath';
import { AddressType } from 'constants/addressTypes';
import { useTreeRegistMapContext } from '../../provider';

function SubmitButton() {
  const navigate = useNavigate();
  const { address, latLng } = useTreeRegistMapContext();
  type address = typeof address;
  type latLng = typeof latLng;

  const checkAddressValid = (address: address) => {
    const addressType = address.type.en;

    if (addressType === 'road' && address.name.road === '') {
      return false;
    }

    if (addressType === 'street' && address.name.street === '') {
      return false;
    }

    return true;
  };

  const getAnotherAddressType = (
    type: (typeof address)['type']['en'],
  ): (typeof address)['type']['en'] => {
    return type === 'road' ? 'street' : 'road';
  };

  const parseAddress = (
    address: address,
  ): {
    location: address['location'];
    address: address['name']['road'] | address['name']['street'];
    addressType: AddressType;
  } => {
    const isValidAddress = checkAddressValid(address);

    if (!isValidAddress) {
      const anotherAddressType = getAnotherAddressType(address.type.en);

      return {
        location: address.location,
        address: address.name[anotherAddressType],
        addressType: anotherAddressType.toUpperCase() as AddressType,
      };
    }

    return {
      location: address.location,
      address: address.name[address.type.en],
      addressType: address.type.en.toUpperCase() as AddressType,
    };
  };

  const refineAddress = parseAddress(address);

  const handleClick = () => {
    navigate(getPath('treePage', 'regist', 'detail'), {
      state: { ...refineAddress, addressType: refineAddress.addressType, latLng },
    });
  };

  return <Button onClick={handleClick}>이 위치로 트리 등록하기</Button>;
}

export default SubmitButton;
