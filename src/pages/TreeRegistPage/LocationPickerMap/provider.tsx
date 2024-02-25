import { ReactNode, createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { TAddressType } from 'types/addressType';

type initialState = {
  latLng: {
    lat: number;
    lng: number;
  };

  address: {
    name: {
      [key in initialState['address']['type']['en']]: string;
    };
    location: string;
    type: TAddressType;
  };

  setAddress: (address: {
    latLng: initialState['latLng'];
    road: initialState['address']['name']['road'];
    street: initialState['address']['name']['street'];
    location: initialState['address']['location'];
  }) => void;

  toggleAddressType: () => void;
};

const initialState: initialState = {
  latLng: {
    lat: 0,
    lng: 0,
  },

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
      payload: Parameters<initialState['setAddress']>[0];
    };

const reducer = (state: initialState, action: Actions) => {
  switch (action.type) {
    case SET_ADDRESS: {
      const { street, road, location } = action.payload;
      const updateState: initialState = {
        ...state,
        address: {
          ...state.address,
          name: { street, road },
          location,
        },
      };

      return updateState;
    }

    case TOGGLE_ADDRESS_TYPE: {
      const changeAddressTypeEn: initialState['address']['type']['en'] =
        state.address.type.en === 'road' ? 'street' : 'road';
      const changeAddressTypeKo: initialState['address']['type']['ko'] =
        state.address.type.ko === '지번' ? '도로명' : '지번';
      const updateState: initialState = {
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

const TreeRegistMapContext = createContext<initialState>(initialState);

export const useTreeRegistMapContext = () => useContext(TreeRegistMapContext);

function TreeRegistMapProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAddress = useCallback((address: Parameters<initialState['setAddress']>[0]) => {
    dispatch({ type: SET_ADDRESS, payload: address });
  }, []);

  const toggleAddressType = useCallback(() => dispatch({ type: TOGGLE_ADDRESS_TYPE }), []);

  const memoAddress = useMemo(() => state.address, [state.address]);
  const memoLatLng = useMemo(() => state.latLng, [state.latLng]);

  return (
    <TreeRegistMapContext.Provider
      value={useMemo(
        () => ({
          address: memoAddress,
          latLng: memoLatLng,
          setAddress,
          toggleAddressType,
        }),
        [memoAddress, memoLatLng, setAddress, toggleAddressType],
      )}
    >
      {children}
    </TreeRegistMapContext.Provider>
  );
}

export default TreeRegistMapProvider;
