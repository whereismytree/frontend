import { createContext, useContext } from 'react';
import { MultiChoicedValues } from './types';

type initialValue = {
  choicedOptions: MultiChoicedValues;
  setChoicedOptions: React.Dispatch<React.SetStateAction<MultiChoicedValues>>;
};

const multiChoiceContext = createContext<initialValue | undefined>(undefined);

export const useMultiChoiceContext = () => {
  const contextValue = useContext(multiChoiceContext);

  if (!contextValue) {
    throw new Error(
      'MultiChoice 하위 컴포넌트는 MultiChoice 컴포넌트 내부에서 사용되어야 합니다. ',
    );
  }

  return contextValue;
};

const { Provider: MultiChoiceProvider } = multiChoiceContext;

export default MultiChoiceProvider;
