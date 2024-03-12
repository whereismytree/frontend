import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Choice from '../common/Choice';
import Label from '../common/Label';

function SpaceTypeChoice() {
  const formKey = 'spaceType';
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(formKey, null);
  }, [setValue]);

  const handleChoiceChange = (changeValue: string | null) => {
    setValue(formKey, changeValue);
  };

  return (
    <>
      <Label optional>트리 공간</Label>
      <Choice onChoiceChange={handleChoiceChange}>
        <Choice.Option value="OUTDOOR">야외</Choice.Option>
        <Choice.Option value="INDOOR">실내</Choice.Option>
      </Choice>
    </>
  );
}
export default SpaceTypeChoice;
