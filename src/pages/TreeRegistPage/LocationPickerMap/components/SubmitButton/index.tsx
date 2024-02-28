import Button from 'components/common/button';
import { useNavigate } from 'react-router-dom';
import { AddressType } from 'constants/addressTypes';
import getPath from 'utils/getPath';
import { initialTreeRegistMapState, useTreeRegistMapContext } from '../../provider';

function SubmitButton() {
  const navigate = useNavigate();
  const { address, latLng, isHaveAddress } = useTreeRegistMapContext();
  const refineAddress = parseAddress(address);

  const handleClick = () => {
    navigate(getPath('treePage', 'regist', 'detail'), {
      state: { ...refineAddress, latLng },
    });
  };

  return (
    <Button onClick={handleClick} disabled={!isHaveAddress}>
      이 위치로 트리 등록하기
    </Button>
  );
}

type Address = initialTreeRegistMapState['address'];

const parseAddress = (
  address: Address,
): {
  location: Address['location'];
  address: Address['name']['road'] | Address['name']['street'];
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

const checkAddressValid = (address: Address) => {
  const addressType = address.type.en;

  if (addressType === 'road' && address.name.road === '') {
    return false;
  }

  if (addressType === 'street' && address.name.street === '') {
    return false;
  }

  return true;
};

const getAnotherAddressType = (type: Address['type']['en']): Address['type']['en'] => {
  return type === 'road' ? 'street' : 'road';
};

export default SubmitButton;
