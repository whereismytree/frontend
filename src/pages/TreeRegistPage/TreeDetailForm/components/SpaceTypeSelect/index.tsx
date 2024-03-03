import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from '../common/Select';
import Label from '../common/Label';

function SpaceTypeSelect() {
  const formKey = 'spaceType';
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(formKey, null);
  }, [setValue]);

  const handleSelectChange = (changeValue: string | null) => {
    setValue(formKey, changeValue);
  };

  return (
    <>
      <Label optional>트리 공간</Label>
      <Select
        options={[
          { text: '야외', value: 'OUTDOOR' },
          { text: '실내', value: 'INDOOR' },
        ]}
        onSelectChange={handleSelectChange}
      />
    </>
  );
}
export default SpaceTypeSelect;
