import TAG, { TagId } from 'constants/tag';

const parseCommentToTagID = (tagComment: (typeof TAG)[TagId]['comment']) => {
  const tagData = TAG.find((tag) => tag.comment === tagComment);

  if (!tagData) {
    throw new Error('올바르지 않은 태그 코멘트가 전달되었습니다.');
  }

  return tagData.id;
};

export default parseCommentToTagID;
