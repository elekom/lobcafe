import React from 'react';
import { useTranslation } from 'react-i18next';
import FormModal from './FormModal';

export default function Booking(props) {

  const { t } = useTranslation();

  return (
    <FormModal title={t('bookingForm')} toggleModal={props.toggleShowBooking}>
      <div className="form__group">
        <input type="text" className="form__input" placeholder={t('firstName')} id="firstName" required />
        <label htmlFor="firstName" className="form__label">{t('firstName')}</label>
      </div>

      <div className="form__group">
        <input type="text" className="form__input" placeholder={t('lastName')} id="lastName" required />
        <label htmlFor="lastName" className="form__label">{t('lastName')}</label>
      </div>

      <div className="form__group">
        <input type="email" className="form__input" placeholder={t('email')} id="email" required />
        <label htmlFor="email" className="form__label">{t('email')}</label>
      </div>

      <button className='btn btn--primary' onClick={props.toggleShowBooking}>
        {t('booking')}
      </button>
    </FormModal>
  )
}
