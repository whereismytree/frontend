import { useFormContext } from 'react-hook-form';
import Button from 'components/common/button';
import ButtonsInput from '../common/ButtonsInput';
import DateRangeInput from '../common/DateRangeInput';
import TextInput from '../common/TextInput';
import * as S from '../common/style';

const treeNameData = {
  placeholder: '장소나 건물명 특징적인 이름을 지어주세요. ex) 더현대 서울 트리',

  rules: {
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
  },
};

interface IFormData {
  title: string;
  name: string;
  required: boolean;
  selectData: { text: string; value: number | boolean }[];
  multipleSelect: boolean;
}

const formData: IFormData[] = [
  {
    title: '영업일',
    name: 'busineesDays',
    required: false,
    selectData: [
      { text: '일', value: 1 },
      { text: '월', value: 2 },
      { text: '화', value: 3 },
      { text: '수', value: 4 },
      { text: '목', value: 5 },
      { text: '금', value: 6 },
      { text: '토', value: 7 },
    ],
    multipleSelect: true,
  },

  {
    title: '트리 공간',
    name: 'spaceType',
    required: false,
    selectData: [
      { text: '야외', value: false },
      { text: '실내', value: true },
    ],
    multipleSelect: false,
  },

  {
    title: '반려동물 동반',
    name: 'isPet',
    required: false,
    selectData: [
      { text: '동반 가능', value: true },
      { text: '동반 불가', value: false },
    ],
    multipleSelect: false,
  },
];

function TreeInformationForm() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <>
      <S.FormTitle>트리 정보</S.FormTitle>
      <S.FormSection>
        <TextInput
          placeholder={treeNameData.placeholder}
          name="name"
          register={register}
          options={treeNameData.rules}
          required
        >
          트리 이름
        </TextInput>
        <p>{errors.name && errors.name.message?.toString()}</p>
        <DateRangeInput name="exhibitionDate" register={register} setValue={setValue}>
          전시 기간
        </DateRangeInput>
        {formData.map((data) => (
          <ButtonsInput
            key={data.title}
            values={data.selectData}
            name={data.name}
            required={data.required}
            multiple={data.multipleSelect}
            register={register}
            setValue={setValue}
            options={{ value: null }}
          >
            {data.title}
          </ButtonsInput>
        ))}

        <TextInput
          placeholder="ex. 찾아 가는 길, 매장 전화번호, 주변 볼거리 등"
          name="extraInfo"
          register={register}
        >
          추가 정보
        </TextInput>
        <Button type="submit">트리 등록하기</Button>
      </S.FormSection>
    </>
  );
}

export default TreeInformationForm;
