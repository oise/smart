import { createContext, useContext } from 'react';

interface ContextValue {
  isActive?: boolean;
  index?: number;
}

export const AccordionItemContext = createContext<ContextValue>({});

export const useAccordionItem = () => useContext(AccordionItemContext);
