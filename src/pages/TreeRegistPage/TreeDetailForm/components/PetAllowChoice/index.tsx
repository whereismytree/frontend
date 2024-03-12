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
      <Choice
        options={[
          { text: '동반 가능', value: 'true' },
          { text: '동반 불가', value: 'false' },
        ]}
        onChoiceChange={handleChoiceChange}
      />
    </>
  );
}

export default PetAllowChoice;
