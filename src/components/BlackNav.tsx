'use client'

import logo from '@/assets/images/logo-dark.png'
import logow from '@/assets/images/logo-white.png'
import Gumshoe from 'gumshoejs'
import IconifyIcon from './wrappers/IconifyIcon'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useScrollEvent from '@/hooks/useScrollEvent'

const BlackNav = () => {
  const navRef = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useScrollEvent()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (navRef.current) {
      new Gumshoe('.navbar-nav a', { offset: 80 })
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrollY >= 50 ? 'is-sticky' : ''
        } fixed top-0 start-0 end-0 z-999 transition-all duration-500 py-5 items-center shadow-md lg:shadow-none bg-white lg:bg-transparent group [&.is-sticky]:bg-white [&.is-sticky]:shadow-md`}
      id="navbar"
    >
      <div className="container">
        <div className="flex lg:flex-nowrap flex-wrap items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center" onClick={closeMenu}>
            {/* Mobile: Dark Logo */}
            <Image
              src={logo}
              className="h-9 w-auto block lg:hidden"
              alt="Aktüel Analiz Logo"
              width={118}
              height={60}
              priority
            />

            {/* Desktop Normal: White Logo */}
            <Image
              src={logow}
              className="h-9 w-auto hidden lg:block group-[&.is-sticky]:hidden"
              alt="Aktüel Analiz Logo"
              width={118}
              height={60}
              priority
            />

            {/* Desktop Sticky: Dark Logo */}
            <Image
              src={logo}
              className="h-9 w-auto hidden lg:group-[&.is-sticky]:block"
              alt="Aktüel Analiz Logo"
              width={118}
              height={60}
              priority
            />
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ms-auto px-2.5">
            <button
              onClick={toggleMenu}
              className="hs-collapse-toggle"
              type="button"
              id="hs-unstyled-collapse"
              aria-label="Menüyü aç/kapat"
              aria-expanded={isOpen}
              aria-controls="navbarCollapse"
            >
              <IconifyIcon
                icon={isOpen ? 'mdi:close' : 'mdi:menu'}
                className="h-8 w-8 text-black"
              />
            </button>
          </div>

          {/* Navigation */}
          <div
            className={`navigation hs-collapse transition-all duration-300 lg:basis-auto basis-full grow items-center justify-center lg:flex mx-auto overflow-hidden mt-6 lg:mt-0 nav-light ${isOpen ? 'flex' : 'hidden'
              }`}
            id="navbarCollapse"
          >
            <ul
              className="navbar-nav flex-col lg:flex-row gap-y-2 flex lg:items-center justify-center"
              id="navbar-navlist"
            >
              <li className="nav-item mx-1.5 transition-all text-dark lg:text-white group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                <a
                  className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2"
                  href="#home"
                  onClick={closeMenu}
                >
                  Anasayfa
                </a>
              </li>

              <li className="nav-item mx-1.5 transition-all text-dark lg:text-white group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                <a
                  className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2"
                  href="#services"
                  onClick={closeMenu}
                >
                  Eğitimler
                </a>
              </li>

              <li className="nav-item mx-1.5 transition-all text-dark lg:text-white group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                <a
                  className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2"
                  href="#about"
                  onClick={closeMenu}
                >
                  Hakkımızda
                </a>
              </li>

              <li className="nav-item mx-1.5 transition-all text-dark lg:text-white group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary">
                <a
                  className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2"
                  href="#contact"
                  onClick={closeMenu}
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Right Button */}
          <div className="ms-auto shrink hidden lg:inline-flex gap-2">
            <a
              href="#contact"
              className="py-2 px-6 inline-flex items-center gap-2 rounded-md text-base text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
            >
              <IconifyIcon icon="lucide:user-plus" className="h-4 w-4 text-white" />
              <span className="hidden sm:block">Kayıt Ol</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default BlackNav