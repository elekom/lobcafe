import React from 'react';
import { animateScroll } from 'react-scroll';
export default function Top() {

  // function scrollToTop() {
  //   Scroll.scrollToTop();
  // }

  return (
    <div className='navigation__top'>
      <button className='btn btn--white btn--round' onClick={animateScroll.scrollToTop}>^</button>
    </div>
  )
}
