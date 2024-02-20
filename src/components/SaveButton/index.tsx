import React from 'react';
import saveIcon from 'assets/save-icon.svg';
import fullSaveIcon from 'assets/full-save-icon.svg';
import useApiMutation from 'hooks/useApiMutation';
import * as S from './style';

interface ISaveButtonProps {
  treeId: number;
  isSave: boolean;
  setIsSave: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveButton = ({ treeId, isSave, setIsSave }: ISaveButtonProps) => {
  const imgSrc = isSave ? fullSaveIcon : saveIcon;

  const { mutate } = useApiMutation<{ treeId: number; isFavorite: boolean }>(
    'v1/favorites/trees',
    'POST',
    {
      onSuccess: (data) => console.log(data),
      onError: (e) => console.error(e),
    },
  );

  console.log(mutate);

  const handleSaveButton = () => {
    setIsSave((prev) => !prev);
    // TODO: 추후 서버상태 변경으로 수정
    // mutate(
    //   { treeId, isFavorite: !isSave },
    //   {
    //     onSuccess: () => {
    //       console.log('저장 상태 변경!');
    //       setIsSave((prev) => !prev);
    //     },
    //   },
    // );
  };

  return (
    <S.Wrapper onClick={handleSaveButton}>
      <S.Img src={imgSrc} alt={`${treeId} 저장`} />
      <S.Text>저장</S.Text>
    </S.Wrapper>
  );
};

export default SaveButton;
