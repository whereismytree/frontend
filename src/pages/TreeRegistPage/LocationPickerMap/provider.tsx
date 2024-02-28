import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { TAddressType } from 'types/addressType';

export type initialTreeRegistMapState = {
  latLng: {
    lat: number;
    lng: number;
  };

  address: {
    name: {
      [key in initialTreeRegistMapState['address']['type']['en']]: string;
    };
    location: string;
    type: TAddressType;
  };

  isHaveAddress: boolean;

  setAddress: (address: {
    latLng: initialTreeRegistMapState['latLng'];
    road: initialTreeRegistMapState['address']['name']['road'];
    street: initialTreeRegistMapState['address']['name']['street'];
    location: initialTreeRegistMapState['address']['location'];
  }) => void;

  toggleAddressType: () => void;
};

const initialTreeRegistMapState: initialTreeRegistMapState = {
  latLng: {
    lat: 0,
    lng: 0,
  },

  isHaveAddress: false,

  address: {
    name: {
      road: '',
      street: '',
    },
    location: '',
    type: { en: 'road', ko: '도로명' },
  },

  setAddress: () => {},
  toggleAddressType: () => {},
};

const SET_ADDRESS = 'registMap/SET_ADDRESS' as const;
const TOGGLE_ADDRESS_TYPE = 'registMap/TOGGLE_ADDRESS_TYPE' as const;

type Actions =
  | {
      type: typeof TOGGLE_ADDRESS_TYPE;
    }
  | {
      type: typeof SET_ADDRESS;
      payload: Parameters<initialTreeRegistMapState['setAddress']>[0];
    };

const reducer = (state: initialTreeRegistMapState, action: Actions) => {
  switch (action.type) {
    case SET_ADDRESS: {
      const { latLng, street, road, location } = action.payload;

      const updateState: initialTreeRegistMapState = {
        ...state,
        latLng,
        address: {
          ...state.address,
          name: { street, road },
          location,
        },
      };

      return updateState;
    }

    case TOGGLE_ADDRESS_TYPE: {
      const changeAddressTypeEn: initialTreeRegistMapState['address']['type']['en'] =
        state.address.type.en === 'road' ? 'street' : 'road';
      const changeAddressTypeKo: initialTreeRegistMapState['address']['type']['ko'] =
        state.address.type.ko === '지번' ? '도로명' : '지번';
      const updateState: initialTreeRegistMapState = {
        ...state,
        address: {
          ...state.address,
          type: {
            ko: changeAddressTypeKo,
            en: changeAddressTypeEn,
          },
        },
      };

      return updateState;
    }

    default:
      return state;
  }
};

const TreeRegistMapContext = createContext<initialTreeRegistMapState>(initialTreeRegistMapState);

export const useTreeRegistMapContext = () => useContext(TreeRegistMapContext);

function TreeRegistMapProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialTreeRegistMapState);
  const [isHaveAddress, setIsHaveAddress] = useState(false);

  useEffect(() => {
    setIsHaveAddress(!!(state.latLng.lat && state.latLng.lng));
  }, [state.address, state.latLng]);

  const setAddress = useCallback(
    (address: Parameters<initialTreeRegistMapState['setAddress']>[0]) => {
      dispatch({ type: SET_ADDRESS, payload: address });
    },
    [],
  );

  const toggleAddressType = useCallback(() => dispatch({ type: TOGGLE_ADDRESS_TYPE }), []);

  const memoAddress = useMemo(() => state.address, [state.address]);
  const memoLatLng = useMemo(() => state.latLng, [state.latLng]);

  return (
    <TreeRegistMapContext.Provider
      value={useMemo(
        () => ({
          address: memoAddress,
          latLng: memoLatLng,
          isHaveAddress,
          setAddress,
          toggleAddressType,
        }),
        [memoAddress, memoLatLng, isHaveAddress, setAddress, toggleAddressType],
      )}
    >
      {children}
    </TreeRegistMapContext.Provider>
  );
}

export default TreeRegistMapProvider;
