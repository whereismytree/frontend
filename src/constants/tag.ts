import coldOutside from 'assets/tag-coldoutside.svg';
import picture from 'assets/tag-camera.svg';
import withAnother from 'assets/tag-heart.svg';
import baby from 'assets/tag-baby.svg';
import coffee from 'assets/tag-cafe.svg';

export type TagId = 1 | 2 | 3 | 4 | 5;

interface Tag {
  id: TagId;
  comment: string;
  image: string;
}

const TAG: Tag[] = [
  { id: 1, comment: '추우니까 따뜻하게 입어요', image: coldOutside },
  { id: 2, comment: '분위기가 좋아 사진 찍기 좋아요', image: picture },
  { id: 3, comment: '연인/가족과 가기 좋아요', image: withAnother },
  { id: 4, comment: '어린 아이들도 좋아해요', image: baby },
  { id: 5, comment: '커피 한 잔 하기 좋아요', image: coffee },
];

export default TAG;
