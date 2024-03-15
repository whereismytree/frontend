import React from 'react';
import Flyout from 'components/Flyout';
import KebabButton from 'components/common/KebabButton';
import * as S from './style';

function ToggleKebabButton() {
  return (
    <Flyout.Toggle>
      {({ isOpen, setIsOpen }) => (
        <KebabButton active={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      )}
    </Flyout.Toggle>
  );
}

function KebabFlyout({ children }: { children: React.ReactNode }) {
  return <Flyout>{children}</Flyout>;
}

function MenuList({ children }: { children: JSX.Element[] }) {
  return (
    <Flyout.Menu>
      <S.List>{children}</S.List>
    </Flyout.Menu>
  );
}

function MenuListItem({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <Flyout.Toggle>
      {({ setIsOpen }) => (
        <S.Item>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onClick();
            }}
          >
            {children}
          </button>
        </S.Item>
      )}
    </Flyout.Toggle>
  );
}

KebabFlyout.Toggle = ToggleKebabButton;
KebabFlyout.List = MenuList;
KebabFlyout.Item = MenuListItem;

export default KebabFlyout;
