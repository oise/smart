import './create-name.scss';
import CreateNameOverlay from './create-name-overlay';
import Tag from '@common/components/tag';
import { useEffect, useRef, useState, VFC } from 'react';

const CreateName: VFC<{ heading: string }> = ({ heading }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <>
      <div className='create-name-heading'>
        <div className='create-name-heading-content'>{heading}</div>
        <div className='create-name-heading-icon icon-arrow' onClick={() => setIsOverlayOpen(true)} />
      </div>
      {isOverlayOpen && (
        <CreateNameOverlay>
          <form className='create-name-form'>
            <input className='create-name-form-input' ref={inputRef} />
            <div className='create-name-form-subtext'>
              Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper
            </div>
            <div className='create-name-form-tags'>
              <Tag>Email</Tag>
              <Tag>Marketing</Tag>
              <Tag>Greeting</Tag>
              <Tag>Email</Tag>
              <Tag>Marketing</Tag>
              <Tag>Greeting</Tag>
            </div>
            <div>
              <button className={'button button-primary'} onClick={() => setIsOverlayOpen(false)}>
                Save
              </button>
            </div>
          </form>
        </CreateNameOverlay>
      )}
    </>
  );
};

export default CreateName;
