import './accordion.scss';
import { useAccordionItem } from './accordion-item-context';
import classNames from 'classnames';
import { FC } from 'react';

interface AccordionBodyProps {
  id?: string;
}

export const AccordionBody: FC<AccordionBodyProps> = ({ id, children, ...rest }) => {
  const { index, isActive } = useAccordionItem();
  const accordionBodyClasses = classNames('accordion-body', { active: isActive });

  return (
    <div
      className={accordionBodyClasses}
      id={`section-${id || index}`}
      role='region'
      aria-labelledby={`accordion-${id || index}`}
      aria-expanded={isActive}
      {...rest}
    >
      {children}
    </div>
  );
};
