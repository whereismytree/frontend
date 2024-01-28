import Item from 'components/common/Item';
import * as S from './style';

function TreeInformation({
  treeName,
  location,
  src,
}: {
  treeName: string;
  location: string;
  src: string;
}) {
  return (
    <>
      <Item>
        <Item.Title>{treeName}</Item.Title>
        <Item.SubTitle>{location}</Item.SubTitle>
      </Item>
      <S.ImageWrapper>
        <S.Image src={src} alt="트리 이미지" />
      </S.ImageWrapper>
    </>
  );
}

export default TreeInformation;
