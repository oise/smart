import { FC } from 'react';
import { AccordionItemContext } from './accordion-item-context';
import { useAccordion } from './accordion-provider';

export const AccordionItem: FC<{ index: number }> = ({ children, index }) => {
  const { openIndexes } = useAccordion();

  const isActive = index in openIndexes;

  return <AccordionItemContext.Provider value={{ index, isActive }}>{children}</AccordionItemContext.Provider>;
};
