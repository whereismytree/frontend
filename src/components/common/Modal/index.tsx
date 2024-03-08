import React, { ReactNode } from 'react';
import * as S from './style';

type AlertModalProps = {
  title?: string;
  content?: ReactNode;
  footer?: ReactNode;
};

const AlertModal = React.forwardRef<HTMLDivElement, AlertModalProps>(
  ({ title, content, footer }, ref) => {
    return (
      <S.Modal ref={ref}>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
        <S.Footer>{footer}</S.Footer>
      </S.Modal>
    );
  },
);

export default AlertModal;
