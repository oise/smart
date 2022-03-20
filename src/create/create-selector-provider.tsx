import { createContext, FC, useContext, useState } from 'react';

export interface SelectedPreview {
  actorImage?: string;
  alignment?: 'left' | 'right' | 'center';
  background?: {
    type: 'image' | 'colour' | 'video';
    value: string;
  };
}

const CreateSelectorContext = createContext<{ selectedValues?: SelectedPreview; addValues?: (key: keyof SelectedPreview, value: any) => void }>({});

export const CreateSelectorProvider: FC = ({ children }) => {
  const [selectedValues, setSelectedValues] = useState<SelectedPreview>();

  const addValues = (key: keyof SelectedPreview, value: any) => {
    setSelectedValues({ ...selectedValues, [key]: value });
  };

  const contextValue = {
    selectedValues,
    addValues
  };

  return <CreateSelectorContext.Provider value={contextValue}> {children} </CreateSelectorContext.Provider>;
};

export const useSelector = () => useContext(CreateSelectorContext);
