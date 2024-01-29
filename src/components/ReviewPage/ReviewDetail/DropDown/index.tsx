import KebabButton from 'components/common/KebabButton';
import { useReviewContext } from 'pages/ReviewDetailPage/context';
import * as S from './style';

function ToggleKebabButton() {
  const {
    state: { isDropdownOpen },
    dispatch,
  } = useReviewContext();

  return (
    <KebabButton
      isOpen={isDropdownOpen}
      onClick={() => {
        dispatch({ type: 'DROPDOWN_OPEN', payload: !isDropdownOpen });
      }}
    />
  );
}

function DropDown({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function DropDownList({ children }: { children: JSX.Element[] }) {
  const {
    state: { isDropdownOpen },
  } = useReviewContext();

  return isDropdownOpen ? <S.OptionList>{children}</S.OptionList> : null;
}

function DropDownItem({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <S.Option>
      <button type="button" onClick={() => onClick()}>
        {children}
      </button>
    </S.Option>
  );
}

DropDown.Toggle = ToggleKebabButton;
DropDown.List = DropDownList;
DropDown.Item = DropDownItem;

export default DropDown;
