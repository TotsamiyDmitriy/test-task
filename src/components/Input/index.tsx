import React, { useContext } from 'react';
import styles from './input.module.scss';
import { FormContext } from '../PostTeammate';
import { validationRules } from '../../utils/validation';

interface IInput {
  type?: string;
  id: 'name' | 'position_id' | 'email' | 'phone' | 'photo';
  value?: string;
  children?: string;
  className?: string;
}

const Input: React.FC<IInput> = ({
  id,
  type = 'text',
  className,
  children = 'Name',
  value = 0,
}) => {
  const [fileName, setFileName] = React.useState('Upload your photo');

  const controller = useContext(FormContext);

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.target.files) {
      try {
        setFileName(e.target.files[0].name);
      } catch {
        setFileName(fileName);
      }
    }
  };

  switch (type) {
    case 'text':
      return (
        <div className={`${styles.main} ${className && className}`}>
          <div className={styles.text}>
            <input
              {...controller?.register(id, validationRules[`${id}`])}
              className={`${styles.input} ${controller?.errors[`${id}`] ? styles.error : ''}`}
              id="input0"
              type={type}
              required
            />
            <label className={styles.label} htmlFor="input0">
              {children}
            </label>
          </div>
          <p className={styles.errormsg}>
            {controller?.errors[`${id}`] && controller.errors[`${id}`]?.message}
          </p>
        </div>
      );

    case 'radio':
      return (
        <div className={`${styles.main} ${className && className}`}>
          <div className={styles.radio}>
            <input
              {...controller?.register('position_id')}
              className={styles.input}
              id={`${value}`}
              type={type}
              value={value}
              required
            />
            <label className={styles.label} htmlFor={`${value}`}>
              {children}
            </label>
          </div>
        </div>
      );

    case 'file':
      return (
        <div className={`${styles.main} ${className && className}`}>
          <div className={`${styles.file} ${controller?.errors[`${id}`] ? styles.error : ''}`}>
            <input
              {...controller?.register('photo', {
                required: 'Photo is required',
                onChange: onChangeFile,
              })}
              className={styles.input}
              type="file"
              id="file"
            />
            <label className={styles.label} htmlFor="file">
              Upload
            </label>
            <span className={styles.fileName}>{fileName}</span>
          </div>
          <p className={styles.errormsg}>
            {controller?.errors ? controller.errors.photo?.message : ''}
          </p>
        </div>
      );

    default:
      return (
        <div className={styles.main}>
          <div className={styles.text}>
            <input
              {...controller?.register(id, validationRules[`${id}`])}
              className={`${styles.input} ${controller?.errors[`${id}`] ? styles.error : ''}`}
              id="input0"
              type={type}
              size={5000000}
              accept="image/jpg, image/jpeg"
              required
            />
            <label className={styles.label} htmlFor="input0">
              {children}
            </label>
          </div>
          <p className={styles.errormsg}>
            {controller?.errors[`${id}`] && controller.errors[`${id}`]?.message}
          </p>
        </div>
      );
  }
};

export default Input;
