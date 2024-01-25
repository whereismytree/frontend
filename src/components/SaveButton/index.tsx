import React from 'react';
import saveIcon from 'assets/save-icon.svg';
import fullSaveIcon from 'assets/full-save-icon.svg';
// import useApiMutation from 'hooks/useApiMutation';
import * as S from './style';

interface ISaveButtonProps {
  treeId: number;
  isSave: boolean;
  setIsSave: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveButton = ({ treeId, isSave, setIsSave }: ISaveButtonProps) => {
  const imgSrc = isSave ? fullSaveIcon : saveIcon;
  const handleSaveButton = () => {
    setIsSave((prev) => !prev);
  };
  // const { mutate } = useApiMutation(`/v1/reviews?treeId=${treeId}&isFavorite=${isSave}`, 'POST');

  return (
    <S.Wrapper onClick={handleSaveButton}>
      <S.Img src={imgSrc} alt={`${treeId} 저장`} />
      <S.Text>저장</S.Text>
    </S.Wrapper>
  );
};

export default SaveButton;
