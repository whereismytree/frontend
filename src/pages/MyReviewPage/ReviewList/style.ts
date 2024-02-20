import styled from 'styled-components';

export const AdditionalTags = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  border-radius: 5px;
  background-color: var(--grey-light);
  vertical-align: middle;
  padding: 3px 8px;
  margin-left: 6px;
`;

export const Review = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  white-space: normal;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8rem;
  margin: 8px 0;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 35px;
`;

export const Image = styled.img`
  width: 20%;
  aspect-ratio: 1/1;
  border-radius: 5px;
`;

export const ReviewSection = styled.div`
  flex-grow: 1;
`;

export const ReviewList = styled.ul`
  height: calc(100vh - (var(--header-height) + var(--navbar-height)));
  overflow: scroll;
`;

export const ReviewListTitleSection = styled.div`
  padding: 14px 24px;
  border-bottom: 1px solid var(--grey-light);
`;

export const ListItem = styled.li`
  border-bottom: 1px solid var(--grey-light);
  padding: 15px 24px;
`;
