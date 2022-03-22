import { createContext, FC, useContext, useEffect, useState } from 'react';

interface AccordionProviderProps {
  toggle: boolean;
  defaultIndex: number | number[];
}

interface ContextValue {
  toggle?: boolean;
  openIndexes?: { [key: number]: number };
  toggleOpenIndex?: (value: number) => void;
}

const AccordionContext = createContext<ContextValue>({});

export const AccordionProvider: FC<AccordionProviderProps> = ({ children, toggle, defaultIndex }) => {
  const [openIndexes, setOpenIndexes] = useState<ContextValue['openIndexes']>({});

  useEffect(() => {
    if (Array.isArray(defaultIndex)) {
      const tempIndexes: Record<any, number> = {};

      defaultIndex.forEach((item) => {
        tempIndexes[item] = item;
      });

      setOpenIndexes(tempIndexes);
    } else {
      setOpenIndexes({ [defaultIndex]: defaultIndex });
    }
  }, []);

  const toggleOpenIndex = (index: number) => {
    if (toggle) {
      if (index in openIndexes) {
        delete openIndexes[index];
        setOpenIndexes({});
      } else {
        setOpenIndexes({ [index]: index });
      }
    } else {
      if (index in openIndexes) {
        delete openIndexes[index];
        setOpenIndexes({ ...openIndexes });
      } else {
        openIndexes[index] = index;
        setOpenIndexes({ ...openIndexes });
      }
    }
  };

  const contextValue = {
    toggle,
    openIndexes,
    toggleOpenIndex
  };

  return <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>;
};

export const useAccordion = () => useContext(AccordionContext);
