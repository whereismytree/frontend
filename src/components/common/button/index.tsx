import { StyleButton, StyleCancelButton, StyleMediumButton } from './style';

interface IButtonProps {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

type TPartialButtonProps = Partial<IButtonProps>;

type TCancelButtonProps = Pick<TPartialButtonProps, 'children' | 'onClick'>;

function Button({ children, onClick = () => {}, type = 'button', disabled = false }: IButtonProps) {
  return (
    <StyleButton type={type} onClick={() => onClick()} disabled={disabled}>
      {children}
    </StyleButton>
  );
}

function MediumButton({
  children,
  onClick = () => {},
  type = 'button',
  disabled = false,
}: IButtonProps) {
  return (
    <StyleMediumButton type={type} onClick={() => onClick()} disabled={disabled}>
      {children}
    </StyleMediumButton>
  );
}

function CancelButton({ children, onClick = () => {} }: TCancelButtonProps) {
  return (
    <StyleCancelButton type="button" onClick={() => onClick()}>
      {children || '취소하기'}
    </StyleCancelButton>
  );
}

Button.MD = MediumButton;
Button.Cancel = CancelButton;

export default Button;
