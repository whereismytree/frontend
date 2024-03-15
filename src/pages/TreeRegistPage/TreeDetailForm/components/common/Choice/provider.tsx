import { createContext, useContext } from 'react';
import { ChoicedValue } from './types';

type initialValue = {
  choicedOption: ChoicedValue;
  setChoicedOption: React.Dispatch<React.SetStateAction<ChoicedValue>>;
};

const choiceContext = createContext<initialValue | undefined>(undefined);

export const useChoiceContext = () => {
  const contextValue = useContext(choiceContext);

  if (!contextValue) {
    throw new Error('Choice 하위 컴포넌트는 Choice 컴포넌트 내부에서 사용되어야 합니다. ');
  }

  return contextValue;
};

const { Provider: ChoiceProvider } = choiceContext;

export default ChoiceProvider;
