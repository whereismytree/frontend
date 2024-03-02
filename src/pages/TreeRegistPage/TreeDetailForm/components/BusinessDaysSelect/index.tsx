import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import MultiSelect from '../common/MultiSelect';
import Label from '../common/Label';
import { SelectChangeEvent } from '../common/MultiSelect/types';

function BusinessDaysSelect() {
  const formKey = 'businessDays';
  const { setValue } = useFormContext();
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    setValue(formKey, []);
  }, [setValue]);

  const handleSelectChange = (e: SelectChangeEvent) => {
    setValue(
      formKey,
      e.selected.sort((a, b) => Number(a) - Number(b)).map((value) => days[Number(value)]),
    );
  };

  return (
    <>
      <Label optional>영업일</Label>
      <MultiSelect
        options={[
          { text: '일', value: '0' },
          { text: '월', value: '1' },
          { text: '화', value: '2' },
          { text: '수', value: '3' },
          { text: '목', value: '4' },
          { text: '금', value: '5' },
          { text: '토', value: '6' },
        ]}
        onSelectChange={handleSelectChange}
      />
    </>
  );
}

export default BusinessDaysSelect;
