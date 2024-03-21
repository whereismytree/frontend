/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import saveIcon from 'assets/save-icon.svg';
import fullSaveIcon from 'assets/full-save-icon.svg';
import useApiMutation from 'hooks/useApiMutation';
import * as S from './style';

interface ISaveButtonProps {
  treeId: number;
  isFavorite: boolean;
  onSaved?: () => void;
}

const SaveButton = ({ treeId, isFavorite: initialIsFavorite, onSaved }: ISaveButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialIsFavorite);
  const imgSrc = isFavorite ? fullSaveIcon : saveIcon;

  const { mutate } = useApiMutation<{ treeId: number; isFavorite: boolean }>(
    'v1/favorites/trees',
    'POST',
  );

  React.useEffect(() => {
    setIsFavorite(initialIsFavorite);
  }, [treeId]);

  const handleSaveButton = () => {
    setIsFavorite((prev) => !prev);
    mutate(
      { treeId, isFavorite: !isFavorite },
      {
        onSuccess: () => {
          if (onSaved) onSaved();
        },
      },
    );
  };

  return (
    <S.Wrapper onClick={handleSaveButton}>
      <S.Img src={imgSrc} alt={`${treeId} 저장`} />
      <S.Text>저장</S.Text>
    </S.Wrapper>
  );
};

export default SaveButton;
