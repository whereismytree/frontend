import { useReviewContext } from '../../../../pages/ReviewDetailPage/context';
import * as S from './style';

function Option({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: string }) {
  const { onClick } = props;

  return (
    <S.Option>
      <button type="button" onClick={(e) => onClick && onClick(e)}>
        {children}
      </button>
    </S.Option>
  );
}

export default function OptionList() {
  const {
    state: { optionOpen },
    dispatch,
  } = useReviewContext();

  const closeOptionList = () => {
    dispatch({ type: 'OPTION_OPEN', payload: false });
  };

  const handleShareButtonClick = () => {
    closeOptionList();
  };

  return optionOpen ? (
    <S.OptionList>
      <Option
        onClick={() => {
          handleShareButtonClick();
        }}
      >
        공유하기
      </Option>
      <Option>수정하기</Option>
      <Option>삭제하기</Option>
    </S.OptionList>
  ) : null;
}
