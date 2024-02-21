import React, { createContext, useContext, useMemo, useState } from 'react';
import KebabButton from 'components/common/KebabButton';
import * as S from './style';

type ToggleContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ToggleContext = createContext<ToggleContext>({ open: false, setOpen: () => {} });

function ToggleKebabButton() {
  const { open, setOpen } = useContext(ToggleContext);

  return <KebabButton active={open} onClick={() => setOpen((prev) => !prev)} />;
}

function KebabDropDown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => {
    return { open, setOpen };
  }, [open]);

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
}

function DropDownList({ children }: { children: JSX.Element[] }) {
  const { open } = useContext(ToggleContext);

  return open ? <S.List>{children}</S.List> : null;
}

function DropDownItem({ children, onClick }: { children: string; onClick: () => void }) {
  const { setOpen } = useContext(ToggleContext);

  return (
    <S.Item>
      <button
        type="button"
        onClick={() => {
          setOpen(false);
          onClick();
        }}
      >
        {children}
      </button>
    </S.Item>
  );
}

KebabDropDown.Toggle = ToggleKebabButton;
KebabDropDown.List = DropDownList;
KebabDropDown.Item = DropDownItem;

export default KebabDropDown;
