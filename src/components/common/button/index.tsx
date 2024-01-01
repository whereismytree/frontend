import * as S from './style';

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
    <S.Button type={type} onClick={() => onClick()} disabled={disabled}>
      {children}
    </S.Button>
  );
}

function SmallButton({
  children,
  onClick = () => {},
  type = 'button',
  disabled = false,
}: IButtonProps) {
  return (
    <S.SmallButton type={type} onClick={() => onClick()} disabled={disabled}>
      {children}
    </S.SmallButton>
  );
}

function MediumButton({
  children,
  onClick = () => {},
  type = 'button',
  disabled = false,
}: IButtonProps) {
  return (
    <S.MediumButton type={type} onClick={() => onClick()} disabled={disabled}>
      {children}
    </S.MediumButton>
  );
}

function CancelButton({ children, onClick = () => {} }: TCancelButtonProps) {
  return (
    <S.CancelButton type="button" onClick={() => onClick()}>
      {children || '취소하기'}
    </S.CancelButton>
  );
}

Button.Small = SmallButton;
Button.Medium = MediumButton;
Button.Cancel = CancelButton;

export default Button;
