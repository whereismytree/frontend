import { Option } from '../Choice/types';

export interface MultiChoiceProps {
  options: Option[];
  onChoiceChange?: (e: MultiChoicedValues) => void;
}

export type MultiChoicedValues = string[];
