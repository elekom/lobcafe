import React, { useContext, useState } from 'react';
import { MENU_ITEMS } from '../RoutePaths';
import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import LocaleContext from '../LocaleContext';
import Booking from './modals/Booking';
import Login from './modals/Login';

export default function MobileMenu() {

  const { locale } = useContext(LocaleContext);
  const { t } = useTranslation();

  const [selected, setSelected] = useState(locale !== 'en');
  const [showBooking, setShowBooking] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function changeLocale(e) {
    setSelected(!selected);
    if (locale !== (e.target.textContent).toLowerCase()) {
      i18n.changeLanguage((e.target.textContent).toLowerCase());
    }
  }

  function toggleShowBooking() {
    setShowBooking(!showBooking);
  }

  function toggleShowLogin() {
    setShowLogin(!showLogin);
  }

  return (
    <div className='mobile-menu'>
       <div className=''>
          <ul className='mobile-menu__list'>
            <li className='mobile-menu__item'>
              <button>
                <Link smooth={true} to={'home'}>
                  <i className="header__icon icon-basic-home"></i>
                  {t('home')}
                </Link>
              </button>
            </li>
            {
              MENU_ITEMS.map( (component) => {
                return <li className='mobile-menu__item'>
                  <button>
                    <Link smooth={true} to={component.id}>{t(component.id)}</Link>
                  </button>
                </li>
              })
            }
          </ul>
        </div>
        <div className='header__col-right'>
          <ul className='header__list'>
            <li><button className='header__button header__button--1' onClick={toggleShowBooking}>{t('booking')}</button></li>
            <li>
              <button className='header__button header__button--2' onClick={changeLocale}>
                { selected ? 'en' : 'jp'}
              </button>
            </li>
            <li><button className='header__button header__button--3' onClick={toggleShowLogin}>{t('login')}</button></li>
          </ul>      
        </div>
        <div>
          { showBooking && <Booking toggleShowBooking={toggleShowBooking} />}
        </div>
        <div>
          { showLogin && <Login toggleShowLogin={toggleShowLogin} />}
        </div>
    </div>
  )
}
