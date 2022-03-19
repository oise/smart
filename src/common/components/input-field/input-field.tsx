import { ChangeEvent } from 'react';
import classNames from 'classnames';

interface InputFieldProps {
  name: string;
  label: string;
  onChange(value: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  value?: string;
  error?: string | boolean;
  [k: string]: any;
}

const InputField = ({ label, name, onChange, value, placeholder, error, ...rest }: InputFieldProps): JSX.Element => {
  const inputClasses = classNames('form-control', {
    'has-error': error
  });

  return (
    <div className={'form-group'}>
      <label>
        {label}
        <input name={name} className={inputClasses} placeholder={placeholder} onChange={onChange} value={value} {...rest} />
        {error && <div className='form-error'>{error}</div>}
      </label>
    </div>
  );
};

export default InputField;
