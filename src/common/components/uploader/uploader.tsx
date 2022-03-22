import './uploader.scss';
import uploadImg from '/src/assets/upload.svg';
import { ChangeEventHandler, useRef, VFC } from 'react';
import classNames from 'classnames';

interface UploaderProps {
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Uploader: VFC<UploaderProps> = ({ className, onChange, ...rest }) => {
  const uploadWrapperClasses = classNames('uploader-wrapper', className);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input type='file' className={'uploader-input'} onChange={onChange} ref={inputRef} />
      <div className={uploadWrapperClasses} {...rest} onClick={handleOnClick}>
        <img src={uploadImg} className={'uploader-image'} />
      </div>
    </>
  );
};

export default Uploader;
