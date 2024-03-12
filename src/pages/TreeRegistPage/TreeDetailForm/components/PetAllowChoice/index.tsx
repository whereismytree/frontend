import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Label from '../common/Label';
import Choice from '../common/Choice';

function PetAllowChoice() {
  const formKey = 'isPet';
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(formKey, null);
  }, [setValue]);

  const handleChoiceChange = (value: string | null) => {
    setValue(formKey, value);
  };

  return (
    <>
      <Label optional>반려동물 동반</Label>
      <Choice onChoiceChange={handleChoiceChange}>
        <Choice.Option value="true">동반 가능</Choice.Option>
        <Choice.Option value="false">동반 불가</Choice.Option>
      </Choice>
    </>
  );
}

export default PetAllowChoice;
