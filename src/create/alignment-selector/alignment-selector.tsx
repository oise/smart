import './alignment-selector.scss';
import { SelectedPreview, useSelector } from '../create-selector-provider';
import classNames from 'classnames';

const AlignmentSelector = () => {
  const { addValues, selectedValues } = useSelector();

  const selectAlignment = (alignment: SelectedPreview['alignment']) => {
    addValues?.('alignment', alignment);
  };

  return (
    <div className='alignment-items'>
      <div className={classNames('alignment-item', { active: selectedValues?.alignment === 'left' })} onClick={() => selectAlignment('left')}>
        Left
      </div>
      <div className={classNames('alignment-item', { active: selectedValues?.alignment === 'center' })} onClick={() => selectAlignment('center')}>
        Center
      </div>
      <div className={classNames('alignment-item', { active: selectedValues?.alignment === 'right' })} onClick={() => selectAlignment('right')}>
        Right
      </div>
    </div>
  );
};

export default AlignmentSelector;
