import React, { createContext, useContext, useState } from 'react';
import * as S from './style';

type initialValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValue: initialValue = {
  isOpen: false,
  setIsOpen: () => {},
};

const SlideBoxContext = createContext<initialValue>(initialValue);
const { Provider } = SlideBoxContext;

const SlideBox = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const value = { isOpen, setIsOpen };

  return <Provider value={value}>{children}</Provider>;
};

const SlideBoxToggle = ({ children }: { children: (isOpen: initialValue['isOpen']) => string }) => {
  const { isOpen, setIsOpen } = useContext(SlideBoxContext);

  return (
    <S.ToggleButton onClick={() => setIsOpen((prev) => !prev)}>{children(isOpen)}</S.ToggleButton>
  );
};

const SlideBoxMenu = ({
  maxHeight,
  children,
}: {
  maxHeight?: string;
  children: React.ReactNode;
}) => {
  const { isOpen } = useContext(SlideBoxContext);

  return (
    <S.Box $isOpen={isOpen} style={{ maxHeight }}>
      {children}
    </S.Box>
  );
};

SlideBox.Toggle = SlideBoxToggle;
SlideBox.Menu = SlideBoxMenu;

export default SlideBox;
