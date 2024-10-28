import React from 'react'

export default function Navbar() {
    const listNavbar = [
        {name: 'Beranda', link:'#home'},
        {name: 'Keahlian', link:'#skills'},
        {name: 'Pengalaman', link:'#experience'},
        {name: 'Bahasa', link:'#language'},
        {name: 'Proyek', link:'#projects'},
    ];
  return (
    <header data-aos='fade-up' className='text-gray-600 body-font z-10'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                <span className='ml-3 text-3xl font-bold text-white '>Portofolio</span>
            </a>
            <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center'>
                {
                    listNavbar.map((item, index) =>(
                        <a key={index} href={item.link} className='mr-5 hover:text-yellow-300'>
                            {item.name}
                        </a>
                    ))
                }
            </nav>
            <button className='inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4
             md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900'>
                <a href='#contact'>Kontak Saya</a>
            </button>
        </div>
    </header>
  )
}
