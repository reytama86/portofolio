import React from 'react'
import javascript from '../../assets/javascript.png'
import nodejs from '../../assets/nodejs.png'
import php from '../../assets/php.png'
import mysql from '../../assets/mysql.png'
import laravel from '../../assets/laravel.png'
import react from '../../assets/react.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Keahlian</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                Saya memiliki keterampilan dalam pengembangan aplikasi web, khususnya dengan menggunakan Laravel dan Node.js. Saya menguasai bahasa pemrograman seperti PHP dan JavaScript, serta memiliki pengalaman dalam bekerja dengan basis data seperti MySQL dan PostgreSQL. Dengan pemahaman tentang arsitektur MVC, saya mampu mengembangkan sistem yang terstruktur dan efisien, memastikan integrasi data yang optimal dalam aplikasi yang saya buat.


                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={php} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={javascript} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={laravel} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={nodejs} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={mysql} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}
