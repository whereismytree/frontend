import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Label from '../common/Label';
import Select from '../common/Select';

function PetAllowSelect() {
  const formKey = 'isPet';
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(formKey, null);
  }, [setValue]);

  const handleSelectChange = (value: string | null) => {
    setValue(formKey, value);
  };

  return (
    <>
      <Label optional>반려동물 동반</Label>
      <Select
        options={[
          { text: '동반 가능', value: 'true' },
          { text: '동반 불가', value: 'false' },
        ]}
        onSelectChange={handleSelectChange}
      />
    </>
  );
}

export default PetAllowSelect;
