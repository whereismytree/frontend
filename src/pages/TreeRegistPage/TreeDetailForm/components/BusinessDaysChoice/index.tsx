import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import MultiChoice from '../common/MultiChoice';
import Label from '../common/Label';
import { MultiChoicedValues } from '../common/MultiChoice/types';

function BusinessDaysChoice() {
  const formKey = 'businessDays';
  const { setValue } = useFormContext();
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    setValue(formKey, []);
  }, [setValue]);

  const handleChoiceChange = (choiced: MultiChoicedValues) => {
    setValue(
      formKey,
      choiced.sort((a, b) => Number(a) - Number(b)).map((value) => days[Number(value)]),
    );
  };

  return (
    <>
      <Label optional>영업일</Label>
      <MultiChoice onChoiceChange={handleChoiceChange}>
        <MultiChoice.Option value="0">일</MultiChoice.Option>
        <MultiChoice.Option value="1">월</MultiChoice.Option>
        <MultiChoice.Option value="2">화</MultiChoice.Option>
        <MultiChoice.Option value="3">수</MultiChoice.Option>
        <MultiChoice.Option value="4">목</MultiChoice.Option>
        <MultiChoice.Option value="5">금</MultiChoice.Option>
        <MultiChoice.Option value="6">토</MultiChoice.Option>
      </MultiChoice>
    </>
  );
}

export default BusinessDaysChoice;
