import React from 'react'
import img_experience from '../../assets/img_experience.png'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 '>Pengalaman</h1>
            <h2 className='title-font font-bold text-white sm:text-2xl '>2023 :</h2>
            <p className='mb-8 text-white leading-relaxed '>Magang PT. Global Intermedia Nusantara - Saya mengembangkan aplikasi web menggunakan Laravel yang didukung oleh basis data MySQL atau PostgreSQL. Dalam pengelolaan lingkungan deployment, saya menerapkan Docker untuk memastikan efisiensi. Salah satu proyek yang saya bangun adalah aplikasi e-commerce yang memungkinkan admin untuk mengelola produk, melihat laporan pembelian, dan memberikan pengguna kemampuan untuk melakukan pembelian, menghitung total belanja, serta memperkirakan biaya pengiriman. Selain itu, saya berkontribusi dalam penelitian perusahaan terkait pemanfaatan ELK stack untuk pemantauan dan analisis log akses pada situs web Diskominfo Kalimantan Tengah. Dalam bidang jaringan, saya melakukan konfigurasi VPN menggunakan MikroTik untuk memastikan keamanan dan efisiensi komunikasi data dalam infrastruktur jaringan berskala kecil. Saya juga mengelola server virtualisasi dengan Proxmox untuk meningkatkan efisiensi dan fleksibilitas dalam penggunaan sumber daya server di lingkungan TI.</p>
            <h2 className='title-font font-bold text-white sm:text-2xl '>2024 :</h2>
            <p className='mb-8 text-white leading-relaxed '>Matching Fund PT. Agrofilia Permata - Saya mengelola API menggunakan protokol HTTP untuk mengintegrasikan perangkat IoT dengan aplikasi web dan mobile, sehingga dapat menjamin komunikasi data yang efisien. Dalam pengembangan aplikasi, saya merancang dan membangun website dengan menggunakan arsitektur MVC (Model-View-Controller) untuk memastikan struktur kode yang terorganisir dan berfungsi dengan baik. Selain itu, saya juga bertanggung jawab untuk memelihara lingkungan hosting di platform Hostinger, termasuk melakukan pembaruan kode dan pemeliharaan. Untuk pengelolaan data yang efisien dan mendukung fungsionalitas sistem, saya merancang struktur basis data menggunakan MySQL.</p>
        </div>
        </div>
    </section>

  )
}
