import { useEffect, useState } from 'react';

interface ISearchPlaceData {
  id: string;
  place_name: string;
  address_name: string;
  road_address_name: string;
  x: string;
  y: string;
}

const usePlaceSearch = (keyword: string) => {
  const [result, setResult] = useState<ISearchPlaceData[]>([]);

  useEffect(() => {
    const keywordSearch = () => {
      const places = new window.kakao.maps.services.Places();

      places.keywordSearch(keyword, (data: ISearchPlaceData[], status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setResult(data);
        }
      });
    };

    if (keyword.replace(/^\s+|\s+$/g, '') !== '') {
      window.kakao.maps.load(keywordSearch);
    }
  }, [keyword]);

  return result;
};

export default usePlaceSearch;
