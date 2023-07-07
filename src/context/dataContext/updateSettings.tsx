import { useContext } from 'react';
import { DataContext } from './DataContext';
import { DataContextSettings } from './dataContextTypes';

export const useSetSettings = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error('useSetSettings must be used within a DataContextProvider');
  }

  const { setSettings } = dataContext;

  const updateSettings = (newSettings: Partial<DataContextSettings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...newSettings,
    }));
  };

  return updateSettings;
};
