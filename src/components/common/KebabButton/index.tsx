import vertical from 'assets/vertical_ellipsis.svg';
import * as S from './style';

function KebabButton({
  isOpen,
  onClick = () => {},
}: {
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <S.VerticalButton isOpen={isOpen} onClick={(e) => onClick(e)}>
      <img src={vertical} alt="더보기" />
    </S.VerticalButton>
  );
}

export default KebabButton;
