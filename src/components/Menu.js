import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import decoration1 from '../assets/lob_wiggle_left.png';
import decoration2 from '../assets/lob_wiggle_middle.png';
import decoration3 from '../assets/lob_wiggle_right.png';
import { useTranslation } from "react-i18next";
import WindowContext from '../WindowContext';

export default function Menu() {

  const { t } = useTranslation();
  const { isMobile } = useContext(WindowContext);

  if (isMobile) {
    return (
      <Element id='menu'>
        <div className='menu'>
          <div className='menu__title'>{ t('menu') }</div>
          <div className='menu__card'>
            <div className='menu__section'>
                <ul>
                  <div className='menu__subtitle'>{t('beverages')}</div>
                  <li>{ t('lobsterJuice') }</li>
                  <li>{ t('lobsterCola') }</li>
                  <li>{ t('lobsterWater') }</li>
                  <li>{ t('lobsterLiquid') }</li>
                  <li>{ t('addOns') }</li>
                </ul>
              </div>
              <div className='menu__section'>
                <ul>
                <div className='menu__subtitle'>{t('food')}</div>
                  <li>{ t('lobsterRolls') } (2 { t('count') })</li>
                  <li>{ t('lobsterRolls') } (5 { t('count') })</li>
                  <li>{ t('lobsterRolls') } (10 { t('count') })</li>
                </ul>
              </div>
          </div>
        </div>
      </Element>
    )
  } else {
    return (
      <Element id='menu'>
        <div className='menu'>
          <div className='menu__title'>{ t('menu') }</div>
          <div className='menu__card row'>
            <img src={decoration1} className='menu__decoration menu__decoration--top-right menu__decoration-1' alt='lobster'></img>
            <img src={decoration2} className='menu__decoration menu__decoration--top-right menu__decoration-2' alt='lobster'></img>
            <img src={decoration3} className='menu__decoration menu__decoration--top-right menu__decoration-3' alt='lobster'></img>
            <img src={decoration2} className='menu__decoration menu__decoration--top-right menu__decoration-4' alt='lobster'></img>
            <img src={decoration3} className='menu__decoration menu__decoration--bottom-left menu__decoration-1' alt='lobster'></img>
            <img src={decoration2} className='menu__decoration menu__decoration--bottom-left menu__decoration-2' alt='lobster'></img>
            <img src={decoration1} className='menu__decoration menu__decoration--bottom-left menu__decoration-3' alt='lobster'></img>
            <img src={decoration2} className='menu__decoration menu__decoration--bottom-left menu__decoration-4' alt='lobster'></img>
            <div className='row'>
              <div className='col-1-of-2 menu__section'>
                <ul>
                  <div className='menu__subtitle'>{t('beverages')}</div>
                  <li>{ t('lobsterJuice') }</li>
                  <li>{ t('lobsterCola') }</li>
                  <li>{ t('lobsterWater') }</li>
                  <li>{ t('lobsterLiquid') }</li>
                  <li>{ t('addOns') }</li>
                </ul>
              </div>
              <div className='col-1-of-2 menu__section'>
                <ul>
                <div className='menu__subtitle'>{t('food')}</div>
                  <li>{ t('lobsterRolls') } (2 { t('count') })</li>
                  <li>{ t('lobsterRolls') } (5 { t('count') })</li>
                  <li>{ t('lobsterRolls') } (10 { t('count') })</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}
