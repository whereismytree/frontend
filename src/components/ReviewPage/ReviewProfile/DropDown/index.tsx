import React from 'react';
import KebabButton from 'components/common/KebabButton';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'store';
import { setDropDownView } from 'store/modules/toggleSlice';
import * as S from './style';

function ToggleKebabButton() {
  const {
    dropDown: { view },
  } = useSelector((state: TRootState) => state.toggle);
  const dispatch = useDispatch();

  return (
    <KebabButton
      isOpen={view}
      onClick={() => {
        dispatch(setDropDownView(!view));
      }}
    />
  );
}

function DropDown({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function DropDownList({ children }: { children: JSX.Element[] }) {
  const {
    dropDown: { view },
  } = useSelector((state: TRootState) => state.toggle);

  return view ? <S.OptionList>{children}</S.OptionList> : null;
}

function DropDownItem({ children, onClick }: { children: string; onClick: () => void }) {
  const dispatch = useDispatch();

  const closeDropDown = () => {
    dispatch(setDropDownView(false));
  };

  return (
    <S.Option>
      <button
        type="button"
        onClick={() => {
          closeDropDown();
          onClick();
        }}
      >
        {children}
      </button>
    </S.Option>
  );
}

DropDown.Toggle = ToggleKebabButton;
DropDown.List = DropDownList;
DropDown.Item = DropDownItem;

export default DropDown;
