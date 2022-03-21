import './accordion.scss';
import { useAccordionItem } from './accordion-item-context';
import { useAccordion } from './accordion-provider';
import { FC, KeyboardEvent, MouseEvent } from 'react';
import classNames from 'classnames';

interface AccordionHeadProps {
  id?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const AccordionHead: FC<AccordionHeadProps> = ({ children, id, onClick, ...rest }) => {
  const { index, isActive } = useAccordionItem();
  const { toggleOpenIndex } = useAccordion();

  const handleAccessibility = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      toggleOpenIndex(index);
    }
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    toggleOpenIndex(index);
  };

  const accordionHeadClasses = classNames('accordion-head', { active: isActive });

  return (
    <div
      className={accordionHeadClasses}
      tabIndex={0}
      id={`accordion-${id || index}`}
      key={`header-${index}`}
      onClick={handleClick}
      aria-expanded={isActive}
      aria-controls={`section-${id || index}`}
      onKeyDown={handleAccessibility}
      {...rest}
    >
      <div>{children}</div>
      <div className={'accordion-head-icon'} />
    </div>
  );
};
