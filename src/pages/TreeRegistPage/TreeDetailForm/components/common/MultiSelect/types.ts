import { Option } from '../Select/types';

export type SelectChangeEvent = {
  target: EventTarget & HTMLInputElement;
  selected: string[];
};

export interface MultiSelectProps {
  options: Option[];
  onSelectChange?: (e: SelectChangeEvent) => void;
}
