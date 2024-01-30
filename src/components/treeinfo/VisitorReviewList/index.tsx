import React from 'react';
import Tag from 'components/common/tag';
import * as S from '../style';

const VisitorReviewList = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.SubTitle>방문자 후기</S.SubTitle>
        <S.Count>5</S.Count>
      </S.TitleContainer>
      <S.ReviewList>
        <S.Review>
          <S.ReviewCard hasPhotoReview={false}>
            <S.Profile>
              <S.ProfileImg src="https://i.ibb.co/Z6rZLgn/Group-58-1.png" />
              <S.Nickname>
                쿠쿠123
                <S.PostedDate>22.12.15.일</S.PostedDate>
              </S.Nickname>
            </S.Profile>
            <S.TextReview>
              데이트 장소로 최적! 예쁘고 보기도 좋고 사람은 많지만 실내라서 따뜻하고 백화점이라서
              실내에서 모든 걸 해결할 수 있어요. 아이들...
            </S.TextReview>
            <S.Tags>
              <Tag id={1} />
              <S.TagCount>+ 2</S.TagCount>
            </S.Tags>
          </S.ReviewCard>
        </S.Review>
        <S.Review>
          <S.ReviewCard hasPhotoReview>
            <S.Profile>
              <S.ProfileImg src="https://i.ibb.co/Z6rZLgn/Group-58-1.png" />
              <S.Nickname>
                쿠쿠123
                <S.PostedDate>22.12.15.일</S.PostedDate>
              </S.Nickname>
            </S.Profile>
            <S.TextReview>
              데이트 장소로 최적! 예쁘고 보기도 좋고 사람은 많지만 실내라서 따뜻하고 백화점이라서
              실내에서 모든 걸 해결할 수 있어요. 아이들...
            </S.TextReview>
            <S.Tags>
              <Tag id={1} />
              <S.TagCount>+ 2</S.TagCount>
            </S.Tags>
            <S.PhotoReview src="https://i.ibb.co/MsfVvWh/image-3.png" />
          </S.ReviewCard>
        </S.Review>
      </S.ReviewList>
      <S.ReviewMoreButton>더보기</S.ReviewMoreButton>
    </S.Wrapper>
  );
};

export default VisitorReviewList;
