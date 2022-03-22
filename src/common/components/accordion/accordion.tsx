import { FC } from 'react';
import { AccordionItem } from './accordion-item';
import { AccordionBody } from './accordion-body';
import { AccordionHead } from './accordion-head';
import { AccordionProvider } from './accordion-provider';

const Accordion: FC<AccordionProps> = ({ children, toggle, defaultIndex, ...rest }) => {
  return (
    <AccordionProvider toggle={toggle} defaultIndex={defaultIndex}>
      <div {...rest}>{children}</div>
    </AccordionProvider>
  );
};

Accordion.defaultProps = {
  toggle: true
};

interface AccordionProps {
  /**
   *Default Accordion index(es)
   */
  defaultIndex?: number | number[];
  /**
   *
   */
  toggle?: boolean;
}

export default Object.assign(Accordion, { Item: AccordionItem, Head: AccordionHead, Body: AccordionBody });
