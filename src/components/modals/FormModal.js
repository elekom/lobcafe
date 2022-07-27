import React, { useContext } from 'react';
import logo from '../../assets/lobcafe_logo_white.png';
import WindowContext from '../../WindowContext';

export default function FormModal(props) {
  const { isMobile } = useContext(WindowContext);

  if(isMobile) {
    return (
      <div className='modal'>
        <div className='modal__content'>
          <div className='modal__right'>
            <button className="modal__close" onClick={props.toggleModal}>&times;</button>
            <div className='modal__title'>
              {props.title}
            </div>
            {props.children}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='modal'>
        <div className='modal__content'>
          <div className='modal__left'>
            <img className='modal__image' src={logo} alt='home'></img>
          </div>
          
          <div className='modal__right'>
            <button className="modal__close" onClick={props.toggleModal}>&times;</button>
            <div className='modal__title'>
              {props.title}
            </div>
            {props.children}
          </div>
        </div>
      </div>   
    )
  }
}
