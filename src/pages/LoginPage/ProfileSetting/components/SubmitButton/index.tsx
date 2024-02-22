import Button from 'components/common/button';
import { useFormContext } from 'react-hook-form';
import { useProfileSettingContext } from '../../provider';

function SubmitButton() {
  const { available, lastCheckedNickname } = useProfileSettingContext();
  const {
    watch,
    formState: { isValid },
  } = useFormContext();
  const nickname = watch('nickname');
  const disabled = !isValid && !(nickname === lastCheckedNickname);
  return available ? (
    <Button.Small type="submit" disabled={disabled}>
      다음으로
    </Button.Small>
  ) : null;
}

export default SubmitButton;
