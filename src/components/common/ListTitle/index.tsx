import * as S from './style';

function ListTitle({ count, children }: { count: number; children: string | string[] }) {
  return (
    <S.Title>
      {children}
      <S.GreenText>{count}</S.GreenText>
    </S.Title>
  );
}

export default ListTitle;
