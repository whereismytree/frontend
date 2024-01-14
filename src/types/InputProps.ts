import { RegisterOptions, useForm } from 'react-hook-form';

interface IInputProps {
  name: string;
  children?: string;
  register: ReturnType<typeof useForm>['register'];
  options?: RegisterOptions;
  required?: boolean;
}

export default IInputProps;
