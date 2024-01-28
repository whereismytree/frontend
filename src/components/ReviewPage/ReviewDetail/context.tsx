import React from 'react';

type Action = {
  type: string;
  payload: any;
};

type ReviewDetailContext = {
  state: { optionOpen: boolean };
  dispatch: React.Dispatch<Action>;
};

const reviewDetailContext = React.createContext<ReviewDetailContext>({
  state: { optionOpen: false },
  dispatch: () => {},
});

function reducer(state: ReviewDetailContext['state'], action: Action) {
  switch (action.type) {
    case 'OPTION_OPEN':
      return { ...state, optionOpen: action.payload };
    default:
      throw new Error('액션의 타입을 제대로 지정해주세요.');
  }
}

export function ReviewProvider({ children }: { children: JSX.Element[] }) {
  const [state, dispatch] = React.useReducer(reducer, {
    optionOpen: false,
  });

  const memorizeValue = React.useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <reviewDetailContext.Provider value={memorizeValue}>{children}</reviewDetailContext.Provider>
  );
}

export function useReviewContext() {
  const context = React.useContext(reviewDetailContext);

  if (context === undefined) {
    throw new Error('ReviewProvider 컴포넌트 내부에서만 사용할 수 있습니다.');
  }

  return context;
}

export default reviewDetailContext;
