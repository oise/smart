import './script-box.scss';

const ScriptBox = () => {
  return (
    <div className='script-container'>
      <textarea
        placeholder='Type or paste your videoscript here. You can also request a translation of
an English script to any of 27 other languages'
      />
      <div className='script-footer'>
        <button className='button button-neutral'>Listen</button>
        <div className='script-counter'>0 Char</div>
      </div>
    </div>
  );
};

export default ScriptBox;
