import React, { useState } from 'react';
import saveIcon from 'assets/save-icon.svg';
import fullSaveIcon from 'assets/full-save-icon.svg';
import useApiMutation from 'hooks/useApiMutation';
import * as S from './style';

interface ISaveButtonProps {
  treeId: number;
  isFavorite: boolean;
}

const SaveButton = ({ treeId, isFavorite: initialIsFavorite }: ISaveButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialIsFavorite);
  const imgSrc = isFavorite ? fullSaveIcon : saveIcon;

  const { mutate } = useApiMutation<{ treeId: number; isFavorite: boolean }>(
    'v1/favorites/trees',
    'POST',
  );

  const handleSaveButton = () => {
    setIsFavorite((prev) => !prev);
    mutate({ treeId, isFavorite: !isFavorite });
  };

  return (
    <S.Wrapper onClick={handleSaveButton}>
      <S.Img src={imgSrc} alt={`${treeId} 저장`} />
      <S.Text>저장</S.Text>
    </S.Wrapper>
  );
};

export default SaveButton;
