import { Option } from '../Choice/types';

export type ChoiceChangeEvent = {
  target: EventTarget & HTMLInputElement;
  choiced: string[];
};

export interface MultiChoiceProps {
  options: Option[];
  onChoiceChange?: (e: ChoiceChangeEvent) => void;
}
