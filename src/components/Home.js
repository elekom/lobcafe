import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import home from '../assets/home1.jpeg';
import Booking from './modals/Booking';

export default function Home() {

  const { t } = useTranslation();
  const [showBooking, setShowBooking] = useState(false);

  function toggleShowBooking() {
    setShowBooking(!showBooking);
  }

  return (
    <Element id='home'>
      <div className='home row'>
        <img className='home__picture' src={home} alt='home'></img>
        <div className='home__card'>
          <div>{ t('tagline') }</div>
          <div className='home__divider'></div>
          <div className='home__title'>Lob Cafe</div>
          <div className='home__details'>
            <ul>
              <li>{t('hours')}: xx -xx</li>
              <li>{t('phone')}: xxxxxxxxxxx</li>
              <li>{t('address')}: 1 Ocean Way</li>
            </ul>
          </div>
        </div>
        <button className='home__button' onClick={toggleShowBooking}>{t('booking')}</button>
      </div>
      <div>
        { showBooking && <Booking toggleShowBooking={toggleShowBooking} />}
      </div>
    </Element>
  )

}
