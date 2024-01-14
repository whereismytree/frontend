import React, { ReactNode, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';
import formatDateWithDayOfWeek from 'utils/formatDateWithDayOfWeek';
import LocationDetailForm from './LocationDetail';
import TreeInformationForm from './TreeInformation';
import * as S from './style';

// "latitude": 37.5665,
// "longitude": 126.9780,
// "registerRoadYn": true,
// "roadAddress": "서울 어쩌구 무슨로12길 123",
// "name": "석촌역 트리",
// "streetAddress": "서울 어쩌구 무슨동 123",
// "detailAddress": "",
// "exhibitionStartDate": "2023-12-01",
// "exhibitionEndDate": "2024-01-15",
// "indoorYn": true,
// "businessDays": [2, 3, 4, 5, 6],
// "petYn": true,
// "additionalInfo": "더현대 서울의 5층에 위치!"

// interface treeRegistAPIBody {
//   latitude: number;
//   longitude: number;
//   registerRoadYn: boolean;
//   roadAddress: string;
//   name: string;
//   streetAddress: string;
//   detailAddress?: string;
// }

function TreeRegiForm({ children }: { children: ReactNode }) {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const { longitude, latitude, addressType } = useSelector((state: TRootState) => state.location);

  const registTree = (data: any) => {
    const registerRoadYn = addressType === 'ROAD';
    const busineesDays = data.busineesDays.filter(Number).map(Number);
    const [exhibitionDate] = data.exhibitionDate ?? [];
    const regex = /\([가-힣]\)/g;

    try {
      const exhibitionStartDate = formatDateWithDayOfWeek(exhibitionDate.startDate, '-').replace(
        regex,
        '',
      );
      const exhibitionEndDate = formatDateWithDayOfWeek(exhibitionDate.endDate, '-').replace(
        regex,
        '',
      );

      delete data.exhibitionDate;

      console.table({
        ...data,
        lng: longitude,
        lat: latitude,
        registerRoadYn,
        busineesDays,
        exhibitionStartDate,
        exhibitionEndDate,
      });
    } catch (e) {
      console.error(e);
      delete data.exhibitionDate;
      console.table({
        ...data,
        lng: longitude,
        lat: latitude,
        registerRoadYn,
        busineesDays,
      });
    }
  };

  useEffect(() => {
    if (Object.values(errors).length) {
      console.log('에러:', errors);
    }
  }, [errors]);

  return (
    <S.Main>
      <form onSubmit={handleSubmit(registTree)}>{children}</form>
    </S.Main>
  );
}

TreeRegiForm.LocationDetail = LocationDetailForm;
TreeRegiForm.Information = TreeInformationForm;

export default TreeRegiForm;
