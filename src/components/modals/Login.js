import React from 'react';
import { useTranslation } from 'react-i18next';
import FormModal from './FormModal';

export default function Login(props) {

  const { t } = useTranslation();

  return (
    <FormModal title={t('loginForm')} toggleModal={props.toggleShowLogin}>
      <div className="form__group">
        <input type="text" className="form__input" placeholder={t('username')} id="userName" required />
        <label htmlFor="userName" className="form__label">{t('userName')}</label>
      </div>

      <div className="form__group">
        <input type="text" className="form__input" placeholder={t('password')} id="password" required />
        <label htmlFor="password" className="form__label">{t('password')}</label>
      </div>

      <button className='btn btn--primary' onClick={props.toggleShowLogin}>
        {t('loginForm')}
      </button>
    </FormModal>
  )
}
