import './tag.scss';
import { FC } from 'react';

interface TagProps {
  /**
   * Used to turn off role=button when the Tag is not toggleable
   */
  viewOnly?: boolean;
}

const Tag: FC<TagProps> = ({ children, viewOnly }) => {
  return (
    <div role={viewOnly ? '' : 'button'} className='tag-container'>
      {children}
    </div>
  );
};

export default Tag;
