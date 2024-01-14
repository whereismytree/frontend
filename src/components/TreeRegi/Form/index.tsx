import { useFormContext } from 'react-hook-form';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';
import formatDateWithDayOfWeek from 'utils/formatDateWithDayOfWeek';
import useApiMutation from 'hooks/useApiMutation';
import LocationDetailForm from './LocationDetail';
import TreeInformationForm from './TreeInformation';
import * as S from './style';

interface treeRegistAPIBody {
  name: string;
  latitude: number;
  longitude: number;
  registerRoadYn: boolean;
  roadAddress?: string;
  streetAddress?: string;
  detailAddress?: string;
  exhibitionStartDate?: string;
  exhibitionEndDate?: string;
  indoorYn?: boolean;
  businessDays?: 1 | 2 | 3 | 4 | 5 | 6[];
  petYn?: boolean;
  additionalInfo?: string;
}

function TreeRegiForm({ children }: { children: ReactNode }) {
  const { handleSubmit } = useFormContext();

  const { longitude, latitude, addressType } = useSelector((state: TRootState) => state.location);

  const { mutate } = useApiMutation<treeRegistAPIBody>('v1/trees', 'POST', {
    onSuccess: (data) => console.log(data),
    onError: (e) => console.error(e),
  });

  const filterObject = (object: object) => {
    return Object.entries(object)
      .filter(([, value]) => {
        if (Array.isArray(value)) {
          return value.length;
        }
        return value;
      })
      .reduce((obj, cur) => {
        const [key, value] = cur;
        return { ...obj, [key]: value };
      }, {});
  };

  const registTree = (data: any) => {
    const busineesDays = data.busineesDays.filter(Number).map(Number);
    const [exhibitionDate] = data.exhibitionDate ?? [];
    delete data.exhibitionDate;
    const replaceDayOfWeek = (dateString: string) => dateString.replace(/\([가-힣]\)/g, '');

    try {
      const exhibitionStartDate = replaceDayOfWeek(
        formatDateWithDayOfWeek(exhibitionDate.startDate, '-'),
      );
      const exhibitionEndDate = replaceDayOfWeek(
        formatDateWithDayOfWeek(exhibitionDate.endDate, '-'),
      );

      const bodyData = filterObject({
        ...data,
        lng: longitude,
        lat: latitude,
        busineesDays,
        addressType,
        exhibitionStartDate,
        exhibitionEndDate,
      });

      mutate(bodyData);
    } catch (e) {
      const bodyData = filterObject({
        ...data,
        lng: longitude,
        lat: latitude,
        addressType,
        busineesDays,
      });

      mutate(bodyData);
    }
  };

  return (
    <S.Main>
      <form onSubmit={handleSubmit(registTree)}>{children}</form>
    </S.Main>
  );
}

TreeRegiForm.LocationDetail = LocationDetailForm;
TreeRegiForm.Information = TreeInformationForm;

export default TreeRegiForm;
