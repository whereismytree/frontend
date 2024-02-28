import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '../common/TextInput';
import Label from '../common/Label';

function TreeNameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const id = useId();

  return (
    <>
      <Label id={id} star>
        트리 이름
      </Label>
      <TextInput
        placeholder="장소나 건물명 특징적인 이름을 지어주세요. ex) 더현대 서울 트리"
        id={id}
        {...register('name', {
          required: '트리 이름을 입력해주세요.',
          validate: (value: string): string | true => {
            const patterns = [
              {
                regex: /.+트리$/i,
                message: '장소나 건물명 특징적인 이름을 지어주세요. ex) 더현대 서울 트리',
              },
              { regex: /^[가-힣\s]+$/i, message: '값을 올바르게 입력해주세요.' },
            ];

            for (let i = 0; i < patterns.length; i += 1) {
              const { regex, message } = patterns[i];

              if (!regex.test(value)) return message;
            }

            return true;
          },
        })}
      />
      <p>{errors.name && errors.name.message?.toString()}</p>
    </>
  );
}

export default TreeNameInput;
