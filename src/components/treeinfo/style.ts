import styled from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

// common
export const Wrapper = styled.section`
  border-bottom: 0.1rem solid var(--grey-light);
  &:last-child {
    border-bottom: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid var(--grey-light);
  height: 4.1rem;
  padding: 0 2.4rem;
`;

export const SubTitle = styled.h3`
  color: var(--main-black);
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Count = styled.span`
  color: var(--main-green);
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 1rem;
`;

// TreeTitle
export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.4rem 1rem 2.4rem;
  border-bottom: 0.1rem solid var(--grey-light);
  box-sizing: border-box;
  box-shadow: 0px -4px 4px 0px #0000000d;
  position: relative;
`;

export const Btns = styled.div`
  display: flex;
  gap: 1.6rem;
`;

// TreeDetails
export const EditInfoButton = styled.button`
  color: var(--main-green);
  font-size: 1.2rem;
  margin-left: auto;
`;

export const Details = styled.ul``;

export const DetailItem = styled.li`
  display: flex;
  align-items: center;
  height: 3.6rem;
  font-size: 1.2rem;
  padding: 0 2.4rem;
  border-bottom: 0.1rem solid var(--grey-light);
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemTitle = styled.p`
  color: var(--main-green);
  width: 4.6rem;
  margin-right: 2.1rem;
`;

export const ItemContent = styled.p`
  color: var(--main-black);
`;

// VisitorPhotoList
export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 1.6rem 2.3rem 0 2.3rem;
  margin-bottom: 1.6rem;
`;

export const Photo = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const PhotoMoreButton = styled.button`
  cursor: pointer;
  display: block;
  background-color: var(--grey-light);
  width: calc(100% - 2.3rem - 2.3rem);
  margin: 1.2rem 2.3rem;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
  color: var(--main-black);
  font-size: 1.4rem;
  font-weight: 400;
`;

// VisitorReviewList
export const ReviewList = styled.ul``;

export const Review = styled.li`
  border-bottom: 0.1rem solid var(--grey-light);
  &:last-child {
    border-bottom: none;
  }
`;

interface ReviewCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  hasPhotoReview: boolean;
}

export const ReviewCard = styled.article<ReviewCardProps>`
  margin: 1.6rem 2.4rem;
  display: ${(props) => (props.hasPhotoReview ? 'grid' : 'block')};
  grid-template-columns: ${(props) => (props.hasPhotoReview ? '1fr 11.6rem' : 'none')};
  grid-column-gap: ${(props) => (props.hasPhotoReview ? '4.2rem' : 'none')};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ProfileImg = styled.img`
  grid-row: 1/ 2;
  width: 4rem;
`;

export const Nickname = styled.p`
  color: var(--main-black);
  font-size: 1.2rem;
  font-weight: 700;
`;

export const PostedDate = styled.span`
  display: block;
  color: var(--grey-medium);
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const TextReview = styled.p`
  grid-row: 2/ 3;
  color: var(--main-black);
  font-size: 1.2rem;
  font-weight: 350;
  line-height: 1.8rem;
  margin: 1.5rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tags = styled.div`
  grid-row: 3/ 4;
  display: flex;
  gap: 0.6rem;
`;

export const TagCount = styled.p`
  width: 3rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--grey-dark);
  background-color: var(--grey-light);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoReview = styled.img`
  grid-column: 2/3;
  grid-row: 1/ 4;
  margin-top: 1rem;
  width: 11.6rem;
  height: 11.6rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

export const ReviewMoreButton = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: var(--grey-light);
  padding: 0.7rem 0;
  font-size: 1.4rem;
  font-weight: 400;
  &::after {
    content: '';
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-left: 0.15rem solid var(--main-black);
    border-bottom: 0.15rem solid var(--main-black);
    transform: rotate(-45deg);
    margin-left: 1rem;
    margin-bottom: 0.3rem;
    border-radius: 0.1rem;
  }
`;
