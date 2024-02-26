import * as S from './style';

export type ButtonType = 'button' | 'submit' | 'reset' | 'cancel';

interface IButtonProps {
  children: string;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
}

const nomalizeButtonType = (type: ButtonType) => (type === 'cancel' ? 'button' : type);

function Button({ children, onClick = () => {}, type = 'button', disabled = false }: IButtonProps) {
  return (
    <S.Button
      type={nomalizeButtonType(type)}
      $type={type}
      onClick={() => onClick()}
      disabled={disabled}
    >
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
    <S.SmallButton
      type={nomalizeButtonType(type)}
      $type={type}
      onClick={() => onClick()}
      disabled={disabled}
    >
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
    <S.MediumButton
      type={nomalizeButtonType(type)}
      $type={type}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </S.MediumButton>
  );
}

Button.Small = SmallButton;
Button.Medium = MediumButton;

export default Button;
