import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Topbar from 'components/Topbar';
import TreeItem from 'components/TreeItem';
import Button from 'components/common/button';
import useApiMutation from 'hooks/useApiMutation';
import useApiQuery from 'hooks/useApiQuery';
import { IGetReview } from 'types/apiResponse';
import { HTTPError } from 'error/HTTPError';
import convertImageFileToUrl from 'utils/imageUtils/convertImageFileToUrl';
import useModal from 'hooks/useModal';
import Modal from 'components/common/Modal';
import TagSelector from './components/TagSelector';
import ReviewForm from './components/ReviewForm';
import * as S from './style';

const validateTreeData = (treeData: any) => {
  if (!treeData || !treeData.treeName || !treeData.location) {
    throw new Error('리뷰 상세 페이지를 렌더링하기 위해 Navigate 객체에 state를 전달해주세요.');
  }

  return treeData as { treeName: string; location: string; type: string };
};

const ReviewRegistAndEditPage = () => {
  const { pathname, state: treeData } = useLocation();
  const { treeName, location, type } = validateTreeData(treeData);
  const id = Number(pathname.split('/')[3]);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [tagIds, setTagIds] = useState<number[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
  const navigate = useNavigate();
  const { open, close, ref: modalRef } = useModal();

  const { data, isError, error } = useApiQuery<IGetReview>(
    `v1/reviews/${id}?reviewId=${id}`,
    type === 'edit',
  );

  if (isError) {
    throw new HTTPError(`트리 정보를 불러오는데 오류가 발생했습니다. ${error}`);
  }

  const { mutate: registMutate } = useApiMutation<{ reviewId: number }>('v1/reviews', 'POST', {
    onSuccess: (data) => console.log(data),
    onError: (e, data) => {
      console.error(e);
      console.log(data);
    },
  });

  const handleReviewRegistButton = async () => {
    if (!validateTagsLength()) return;

    let convertUrl: string | null = null;
    if (selectedFiles) convertUrl = await convertImageFileToUrl(selectedFiles);
    const data = {
      treeId: id,
      tagIds,
      content: contentRef.current?.value,
      imageUrl: convertUrl,
    };

    registMutate(data, {
      onSuccess: (response) => {
        console.log('### 리뷰 등록! ###');
        navigate(`/review/${response.reviewId}`, {
          state: { treeName, location },
        });
      },
    });
  };

  const { mutate: editMutate } = useApiMutation(`v1/reviews/${id}?reviewId=${id}`, 'PUT', {
    onSuccess: (data) => console.log(data),
    onError: (e) => console.error(e),
  });

  const handleReviewEditButton = async () => {
    if (!validateTagsLength()) return;

    let convertUrl: string | null = null;
    if (selectedFiles) convertUrl = await convertImageFileToUrl(selectedFiles);
    editMutate(
      {
        tagIds,
        content: contentRef.current?.value,
        imageUrl: convertUrl,
      },
      {
        onSuccess: () => {
          navigate(`/review/${id}`, {
            state: { treeName, location },
          });
        },
      },
    );
  };

  const validateTagsLength = () => {
    if (!tagIds.length) {
      open();
      return false;
    }
    return true;
  };

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Wrapper>
        <S.TreeInfo>
          <TreeItem location={location}>{treeName}</TreeItem>
        </S.TreeInfo>
        <TagSelector tagIds={tagIds} setTagIds={setTagIds} data={data} />
        <ReviewForm
          contentRef={contentRef}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
          data={data}
        />
        <S.Button>
          {type === 'regist' ? (
            <Button onClick={handleReviewRegistButton}>후기 등록하기</Button>
          ) : (
            <Button onClick={handleReviewEditButton}>후기 수정하기</Button>
          )}
        </S.Button>
        <Modal
          ref={modalRef}
          title="입력값 오류"
          content={<p>코멘트 리뷰를 1개 이상 선택해주세요!</p>}
          footer={
            <button type="button" onClick={close}>
              닫기
            </button>
          }
        />
      </S.Wrapper>
    </>
  );
};

export default ReviewRegistAndEditPage;
