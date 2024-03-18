import { useContext, createContext, useState, useMemo } from 'react';

export const profileData = {
  available: false,
  setAvailable: () => {},
  lastCheckedNickname: '',
  setLastCheckedNickname: () => {},
};

interface ContextType {
  available: boolean;
  setAvailable: (available: boolean) => void;
  lastCheckedNickname: string;
  setLastCheckedNickname: (nickname: string) => void;
}

const ProfileSettingContext = createContext<ContextType>(profileData);

export const useProfileSettingContext = () => useContext(ProfileSettingContext);

function ProfileSettingProvider({ children }: { children: React.ReactNode }) {
  const [lastCheckedNickname, setLastCheckedNickname] = useState('');
  const [available, setAvailable] = useState(false);

  return (
    <ProfileSettingContext.Provider
      value={useMemo(
        () => ({ lastCheckedNickname, available, setAvailable, setLastCheckedNickname }),
        [lastCheckedNickname, available],
      )}
    >
      {children}
    </ProfileSettingContext.Provider>
  );
}

export default ProfileSettingProvider;
