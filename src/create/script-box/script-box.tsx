import './script-box.scss';
import { ChangeEventHandler, VFC } from 'react';

interface ScriptBoxProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const ScriptBox: VFC<ScriptBoxProps> = ({ value, onChange, ...rest }) => {
  return (
    <div className='script-container'>
      <textarea
        value={value}
        onChange={onChange}
        placeholder='Type or paste your videoscript here. You can also request a translation of
an English script to any of 27 other languages'
        {...rest}
      />
      <div className='script-footer'>
        <button className='button button-neutral'>Listen</button>
        <div className='script-counter'>0 Char</div>
      </div>
    </div>
  );
};

export default ScriptBox;
