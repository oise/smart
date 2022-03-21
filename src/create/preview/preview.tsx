import './preview.scss';
import { useSelector } from '../create-selector-provider';

const Preview = () => {
  const { selectedValues } = useSelector();

  return (
    <div className='preview-container'>
      <img src={selectedValues?.actorImage} alt='actor preview image' />
    </div>
  );
};

export default Preview;
