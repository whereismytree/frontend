/* eslint-disable no-empty-pattern */
import React from 'react';
import Button, { WhiteButton } from 'components/common/button';
import Modal from 'components/common/Modal';
import { ModalProps } from '../types';
import * as CS from '../style';
import * as S from './style';

const WithrawModal = React.forwardRef<HTMLDivElement, ModalProps>(({ onSubmit, onCancel }, ref) => {
  return (
    <Modal
      ref={ref}
      title="탈퇴하시겠습니까?"
      content={
        <>
          탈퇴한 이후 <S.redText>재가입이 불가</S.redText>합니다.
        </>
      }
      footer={
        <CS.ButtonsWrapper>
          <WhiteButton.Small onClick={onCancel}>취소</WhiteButton.Small>
          <Button.Small onClick={onSubmit}>탈퇴할게요</Button.Small>
        </CS.ButtonsWrapper>
      }
    />
  );
});

export default WithrawModal;
