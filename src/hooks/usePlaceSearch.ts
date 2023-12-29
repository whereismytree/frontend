import { useEffect, useState } from 'react';
import ISearchPlaceData from 'types/SearchPlaceData';

const usePlaceSearch = (keyword: string) => {
  const [result, setResult] = useState<ISearchPlaceData[]>([]);

  useEffect(() => {
    window.kakao.maps.load();
  }, []);

  useEffect(() => {
    if (keyword.replace(/^\s+|\s+$/g, '') !== '') {
      const places = new window.kakao.maps.services.Places();

      places.keywordSearch(keyword, (data: ISearchPlaceData[], status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setResult(data);
        }
      });
    }
  }, [keyword]);

  return result;
};

export default usePlaceSearch;
