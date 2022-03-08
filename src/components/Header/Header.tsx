import { useTranslation } from 'next-i18next'
import React from 'react'

const Header = () => {
  const { t } = useTranslation('common')

  return <header>{t('header')}</header>
}

export default Header
