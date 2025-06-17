 'use client';

import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">naše firma</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-indigo-600 transition-colors duration-200">Domů</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors duration-200">O nás</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors duration-200">Služby</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors duration-200">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-2">
            <a href="#home" onClick={toggleMobileMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Domů</a>
            <a href="#about" onClick={toggleMobileMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">O nás</a>
            <a href="#services" onClick={toggleMobileMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Služby</a>
            <a href="#contact" onClick={toggleMobileMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Kontakt</a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-indigo-700 text-white" style={{ paddingTop: '80px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-900 opacity-90"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Vítejte u naše firma</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">Vaše řešení pro budoucnost.</p>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">O nás</h2>
            <div className="max-w-3xl mx-auto leading-relaxed text-lg text-gray-700">
              <p className="mb-4">Naše firma je lídrem v <span className="font-semibold text-indigo-600">inovativních řešeních</span> pro moderní podnikání. Jsme tým vášnivých profesionálů, kteří sdílejí společnou vizi: poskytovat špičkové služby a produkty, které přesahují očekávání našich klientů.</p>
              <p className="mb-4">Naše hodnoty jsou zakotveny v <span className="font-semibold text-indigo-600">kvalitě, integritě a spokojenosti zákazníků</span>. Věříme, že partnerství s našimi klienty je klíčem k oboustrannému úspěchu, a proto se vždy snažíme porozumět jejich jedinečným potřebám a nabídnout řešení na míru.</p>
              <p>Zakládáme si na transparentnosti, etice a neustálém zlepšování. Naši klienti nám důvěřují pro naši <span className="font-semibold text-indigo-600">spolehlivost a odbornost</span> v rychle se měnícím tržním prostředí.</p>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Naše služby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9.75 16.5M9.75 16.5M9.75 16.5L9.75 16.5M12 17L12 17M12 17L12 17M12 17L12 17M14.25 17L14.25 16.5M14.25 16.5L14.25 16.5M14.25 16.5L14.25 16.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Inovativní Konzultace</h3>
                <p className="text-gray-600">Poskytujeme strategické poradenství pro optimalizaci vašich obchodních procesů.</p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 01-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 01-2-2H5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8V6a2 2 0 012-2h14a2 2 0 012 2v2M5 11h14M5 14h14M5 17h14"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Vývoj Software</h3>
                <p className="text-gray-600">Tvoříme na míru šitá softwarová řešení, efektivní a škálovatelná.</p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Digitální Marketing</h3>
                <p className="text-gray-600">Pomáháme vám oslovit správné publikum a budovat silnou online přítomnost.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">Kontaktujte nás</h2>
            <div className="max-w-xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 text-center">
              <p className="text-lg mb-4 text-gray-700">Máte dotaz nebo zájem o naše služby? Neváhejte se ozvat!</p>
              <div className="space-y-4 text-left inline-block">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-gray-700">info@nasefirma.cz</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z"></path></svg>
                  <span className="text-gray-700">+420 777 123 456</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <address className="not-italic text-gray-700">
                    Naše Ulice 123/45<br />
                    100 00 Praha 10<br />
                    Česká republika
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} naše firma. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
}