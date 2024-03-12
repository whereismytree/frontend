import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import MultiChoice from '../common/MultiChoice';
import Label from '../common/Label';
import { ChoiceChangeEvent } from '../common/MultiChoice/types';

function BusinessDaysChoice() {
  const formKey = 'businessDays';
  const { setValue } = useFormContext();
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    setValue(formKey, []);
  }, [setValue]);

  const handleChoiceChange = (e: ChoiceChangeEvent) => {
    setValue(
      formKey,
      e.choiced.sort((a, b) => Number(a) - Number(b)).map((value) => days[Number(value)]),
    );
  };

  return (
    <>
      <Label optional>영업일</Label>
      <MultiChoice
        options={[
          { text: '일', value: '0' },
          { text: '월', value: '1' },
          { text: '화', value: '2' },
          { text: '수', value: '3' },
          { text: '목', value: '4' },
          { text: '금', value: '5' },
          { text: '토', value: '6' },
        ]}
        onChoiceChange={handleChoiceChange}
      />
    </>
  );
}

export default BusinessDaysChoice;
