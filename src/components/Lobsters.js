import React from 'react';
import { Element } from 'react-scroll';
import alice from '../assets/alice.jpeg';
import jeremiah from '../assets/jeremiah.jpeg';
import sasaki from '../assets/sasaki.jpeg';
import { useTranslation } from 'react-i18next';

export default function Lobsters() {

  const { t } = useTranslation();

  return (
    <Element id='lobsters'>
      <div className='lobsters'>
        <div className='lobsters__title'>{ t('lobsters') }</div>
        <div className='row lobsters__row'>
          <div className='col-1-of-3'>
          <div className='lobsters__subtitle'>{t('alice')}</div>
            <div className='lobsters__card'>
              <div className='lobsters__card__side lobsters__card__side--front'>
                <img src={alice} className='lobsters__card__picture' alt='Lobster Alice Headshot'></img>
              </div>
              <div className='lobsters__card__side lobsters__card__side--back'>
                <div className='lobsters__details'>
                  { t('aliceBio') }
                </div>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='lobsters__subtitle'>{t('jeremiah')}</div>
            <div className='lobsters__card'>
              <div className='lobsters__card__side lobsters__card__side--front'>
                <img src={jeremiah} className='lobsters__card__picture' alt='Lobster Jeremiah Headshot'></img>
              </div>
              <div className='lobsters__card__side lobsters__card__side--back'>
                <div className='lobsters__details'>
                  { t('jeremiahBio') }
                </div>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='lobsters__subtitle'>{t('sasaki')}</div>
            <div className='lobsters__card'>
              <div className='lobsters__card__side lobsters__card__side--front'>
                <img src={sasaki} className='lobsters__card__picture' alt='Lobster Sasaki Headshot'></img>
              </div>
              <div className='lobsters__card__side lobsters__card__side--back'>
                <div className='lobsters__details'>
                  { t('sasakiBio') }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}
