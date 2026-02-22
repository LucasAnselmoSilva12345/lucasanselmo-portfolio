import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MainNav } from './main-nav';
import { LanguageSwitcher } from './language-switcher';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

export function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="relative w-full md:max-w-3xl md:my-0 md:mx-auto flex items-center justify-between">
        <div className="flex items-start gap-x-2">
          <img
            className="object-cover w-12 h-12 rounded-lg"
            src="https://github.com/LucasAnselmoSilva12345.png"
            alt=""
          />
          <div>
            <h1 className="text-base font-nunito font-bold">
              <Link to="/">Lucas Anselmo</Link>
            </h1>

            <p className="text-sm text-neutral-700 font-nunito font-medium">
              {t('header.position')}
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <MainNav />
          <LanguageSwitcher />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden"
          aria-label="Abrir menu"
        >
          <HamburgerMenuIcon className="w-7 h-7" />
        </button>
      </header>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <img
              className="object-cover w-12 h-12 rounded-lg"
              src="https://github.com/LucasAnselmoSilva12345.png"
              alt=""
            />
            <div>
              <h1 className="text-base font-nunito font-bold">
                <Link to="/">Lucas Anselmo</Link>
              </h1>

              <p className="text-sm text-neutral-700 font-nunito font-medium">
                {t('header.position')}
              </p>
            </div>
          </div>

          <button onClick={closeMenu} aria-label="Fechar menu">
            <Cross1Icon className="w-7 h-7" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col justify-between p-6">
          <nav
            className="flex flex-col gap-6 text-lg font-medium"
            onClick={closeMenu}
          >
            <MainNav />
          </nav>

          {/* Language Switcher no final */}
          <div className="pt-6 border-t">
            <LanguageSwitcher />
          </div>
        </div>
      </aside>
    </>
  );
}
