import * as S from './style';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

function Button({ children, type = 'button', ...rest }: IButtonProps) {
  return (
    <S.Button type={type} {...rest}>
      {children}
    </S.Button>
  );
}

function MediumButton({ children, type = 'button', ...rest }: IButtonProps) {
  return (
    <S.MediumButton type={type} {...rest}>
      {children}
    </S.MediumButton>
  );
}

function SmallButton({ children, type = 'button', ...rest }: IButtonProps) {
  return (
    <S.SmallButton type={type} {...rest}>
      {children}
    </S.SmallButton>
  );
}

function WhiteButton({ children, ...rest }: IButtonProps) {
  return <S.WhiteButton {...rest}>{children}</S.WhiteButton>;
}

function WhiteMediumButton({ children, ...rest }: IButtonProps) {
  return <S.WhiteMediumButton {...rest}>{children}</S.WhiteMediumButton>;
}

function WhiteSmallButton({ children, ...rest }: IButtonProps) {
  return <S.WhiteSmallButton {...rest}>{children}</S.WhiteSmallButton>;
}

Button.Small = SmallButton;
Button.Medium = MediumButton;
WhiteButton.Medium = WhiteMediumButton;
WhiteButton.Small = WhiteSmallButton;

export { WhiteButton };

export default Button;
