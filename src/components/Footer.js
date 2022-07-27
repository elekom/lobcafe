import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {

  const { t } = useTranslation();

  return (
    <div className='footer row'>
      <div className='col-1-of-2'>{ t('designedBy') }</div>
      <div className='col-1-of-2'>{ t('implementedBy') }</div>
    </div>
  )
}
