export type TLocation = {
  latitude: number;
  longitude: number;
};

export const getMyLocation = async (): Promise<TLocation> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
    );
  });
};
