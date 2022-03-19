import './preview.scss';
import { FC } from 'react';

interface PreviewProps {
  actorImage: string;
  alignment: 'left' | 'right' | 'center';
  background: {
    type: 'image' | 'colour' | 'video';
    value: string;
  };
}

const Preview: FC<PreviewProps> = () => {
  return <div className='preview-container'>Preview window</div>;
};

export default Preview;
