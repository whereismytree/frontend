import React from 'react';

type Action = {
  type: string;
  payload: any;
};

type ReviewDetailContext = {
  state: { isDropdownOpen: boolean };
  dispatch: React.Dispatch<Action>;
};

const reviewDetailContext = React.createContext<ReviewDetailContext>({
  state: { isDropdownOpen: false },
  dispatch: () => {},
});

function reducer(state: ReviewDetailContext['state'], action: Action) {
  switch (action.type) {
    case 'DROPDOWN_OPEN':
      return { ...state, isDropdownOpen: action.payload };
    default:
      throw new Error(`액션의 타입을 제대로 지정해주세요. 에러 휴먼: ${action.type}`);
  }
}

export function ReviewProvider({ children }: { children: JSX.Element[] }) {
  const [state, dispatch] = React.useReducer(reducer, {
    isDropdownOpen: false,
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
