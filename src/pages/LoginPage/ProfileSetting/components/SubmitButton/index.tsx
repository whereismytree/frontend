import Button from 'components/common/button';
import { useProfileSettingContext } from '../../provider';

function SubmitButton() {
  const { available } = useProfileSettingContext();
  return available ? <Button.Small type="submit">다음으로</Button.Small> : null;
}

export default SubmitButton;
