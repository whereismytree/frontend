import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '../common/TextInput';
import Label from '../common/Label';

function ExtraInput() {
  const { register } = useFormContext();
  const id = useId();
  return (
    <>
      <Label id={id}>추가 정보</Label>
      <TextInput
        placeholder="ex. 찾아 가는 길, 매장 전화번호, 주변 볼거리 등"
        id={id}
        {...register('additionalInfo')}
      />
    </>
  );
}

export default ExtraInput;
