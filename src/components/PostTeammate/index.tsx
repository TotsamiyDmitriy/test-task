import React from 'react';
import { Input, Button } from '..';
import { FieldErrors, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { AppDispatch } from '../../redux';
import { fetchUsersData, postForm } from '../../redux/slices/mainSlice';
import { ControllerForm, PositionType, StatusTypes } from '../../types/redux';

import SuccessSVG from '/success-image.svg?url';
import styles from './postteammate.module.scss';
import Preloader from '../Preloader';

interface PostTeammateProps {
  token: string;
  dispatch: AppDispatch;
  tokenStatus: StatusTypes;
  positions: PositionType[];
  positionsStatus: StatusTypes;
  page: number;
}

type ContextType = {
  register: UseFormRegister<ValuesForm>;
  errors: FieldErrors<ValuesForm>;
};

export const FormContext = React.createContext<ContextType | null>(null);

const PostTeammate: React.FC<PostTeammateProps> = ({
  tokenStatus,
  positionsStatus,
  positions,
  dispatch,
  page,
}) => {
  const [loading, setLoading] = React.useState(false);

  const [success, setSuccess] = React.useState(false);

  const [error, setError] = React.useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ValuesForm>();

  const SubmitHandler: SubmitHandler<ValuesForm> = (data, event) => {
    const controller: ControllerForm = { data, setSuccess, setError };
    event?.preventDefault();
    setLoading(true);
    dispatch(postForm(controller));
  };

  React.useEffect(() => {
    dispatch(fetchUsersData(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, success]);

  return (
    <FormContext.Provider value={{ register, errors }}>
      <div className={styles.postTeammate} id="postTeammates">
        {positionsStatus === StatusTypes.PENDING ||
        (tokenStatus === StatusTypes.PENDING && loading) ? (
          <Preloader className="submit"></Preloader>
        ) : success ? (
          <div className={styles.success}>
            <h1 className={styles.title}>User successfully registered</h1>
            <img className={styles.successSVG} src={SuccessSVG} alt="Success logo" />
          </div>
        ) : (
          <>
            <h1 className={styles.title}>Working with POST request</h1>
            <form className={styles.form} onSubmit={handleSubmit(SubmitHandler)}>
              <Input className={styles.textInput} type="text" id="name">
                Your name
              </Input>
              <Input className={styles.textInput} type="text" id="email">
                Email
              </Input>
              <Input className={styles.textInput} type="text" id="phone">
                Phone
              </Input>

              <div className={styles.radioBlock}>
                <p className={styles.radioTitle}>Select your position</p>
                {positions.map(({ id, name }) => (
                  <Input
                    key={`${name}_${id}`}
                    className={styles.radioInput}
                    type="radio"
                    id="position_id"
                    value={`${id}`}>
                    {name}
                  </Input>
                ))}
              </div>
              <Input type="file" id="photo"></Input>

              <p className={styles.error}>{error && error}</p>
              <Button className={styles.submit} disabled={!isDirty}>
                Submit
              </Button>
            </form>
          </>
        )}
      </div>
    </FormContext.Provider>
  );
};

export default PostTeammate;

export interface ValuesForm {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: FileList;
}
