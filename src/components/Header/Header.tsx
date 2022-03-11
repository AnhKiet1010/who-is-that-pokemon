import { useTranslation } from 'next-i18next'
import React from 'react'

const Header = () => {
  const { t } = useTranslation('common')

  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">{t('header')}</a>
          </div>
          <div className="space-x-4">
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
