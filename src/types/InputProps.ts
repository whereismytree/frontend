import { RegisterOptions, useForm } from 'react-hook-form';

interface IInputProps {
  name: string;
  children?: string;
  register: ReturnType<typeof useForm>['register'];
  options?: RegisterOptions;
  optional?: boolean;
}

export default IInputProps;
