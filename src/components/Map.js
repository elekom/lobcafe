import React from 'react'
import { Element } from 'react-scroll';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Map() {

  const { t } = useTranslation();

  return (
    <Element id='map'>
      <div className='map'>
        <div className='map__title'>{ t('map') }</div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='map__details'>
              <h1>{ t('addressValue') }</h1>
            </div>
          </div>
          <div className='col-1-of-2'>
            <LoadScript
              googleMapsApiKey="AIzaSyChR10_DAOlKQ8a1m1p_Uori3jZU1KWzPE"
            >
              <GoogleMap
                mapContainerClassName='map__box'
                center={center}
                zoom={10}
              >
                { /* Child components, such as markers, info windows, etc. */ }
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </Element>
  )
}
