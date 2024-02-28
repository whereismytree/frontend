import { useFormContext } from 'react-hook-form';
import TextInput from '../common/TextInput';

function DetailAddressInput() {
  const { register } = useFormContext();

  return <TextInput placeholder="상세 주소 입력 (선택)" {...register('detailAddress')} />;
}

export default DetailAddressInput;
