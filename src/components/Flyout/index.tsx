import React, { createContext, useContext, useState } from 'react';

type FlyoutValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FlyoutContext = createContext<FlyoutValue | undefined>(undefined);

const useFlyoutContext = () => {
  const context = useContext(FlyoutContext);

  if (!context) {
    throw new Error('Flyout 컴포넌트 내부에서만 사용해주세요.');
  }

  return context;
};

const Flyout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = React.useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return <FlyoutContext.Provider value={value}>{children}</FlyoutContext.Provider>;
};

const FlyoutToggle = ({
  children,
}: {
  children: ({ isOpen, setIsOpen }: FlyoutValue) => JSX.Element;
}) => {
  const { isOpen, setIsOpen } = useFlyoutContext();

  return children({ isOpen, setIsOpen });
};

const FlyoutMenu = ({ children }: { children: JSX.Element }) => {
  const { isOpen } = useFlyoutContext();

  if (isOpen) return children;

  return null;
};

Flyout.Toggle = FlyoutToggle;
Flyout.Menu = FlyoutMenu;

export default Flyout;
