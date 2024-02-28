import * as S from './style';

function Label({
  star,
  optional,
  children,
  ...rest
}: {
  star?: boolean;
  optional?: boolean;
  children: string;
} & React.HTMLAttributes<HTMLLabelElement>) {
  return (
    <S.Label {...rest}>
      {children}
      {optional && <S.OptionalText>(선택)</S.OptionalText>}
      {star && <S.RequiredStar />}
    </S.Label>
  );
}

export default Label;
