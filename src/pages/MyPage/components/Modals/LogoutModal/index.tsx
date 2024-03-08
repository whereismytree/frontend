import React from 'react';
import Button, { WhiteButton } from 'components/common/button';
import Modal from 'components/common/Modal';
import * as S from '../style';
import { ModalProps } from '../types';

const LogoutModal = React.forwardRef<HTMLDivElement, ModalProps>(({ onSubmit, onCancel }, ref) => {
  return (
    <Modal
      ref={ref}
      title="로그아웃하시겠습니까?"
      footer={
        <S.ButtonsWrapper>
          <WhiteButton.Small onClick={onCancel}>취소</WhiteButton.Small>
          <Button.Small onClick={onSubmit}>로그아웃</Button.Small>
        </S.ButtonsWrapper>
      }
    />
  );
});

export default LogoutModal;
