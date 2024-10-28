import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/image.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/pos.png';
import image4 from '../../assets/checkout.png';
import image5 from '../../assets/ongkir.png';
import image6 from '../../assets/billing addres.png';
import image7 from '../../assets/myorders.png';
import image8 from '../../assets/datapesanan.jpg';
import image9 from '../../assets/payments.png';
import image10 from '../../assets/laporan.png';
import image11 from '../../assets/elk.png';

export default function Projects() {
    const [expanded, setExpanded] = useState(false); // State to manage expansion

    const listProjects = [
        { 
            id: 1, 
            image: image, 
            cornerTitle: 'Matching Fund PT Agrofilia Permata (Team)', // New corner title
            title: 'Dashboard Admin Kebun Vanili', 
            description: 'Dashboard ini dirancang untuk memberikan gambaran menyeluruh mengenai aktivitas penyiraman air dan pupuk pada kebun tertentu. Pengguna dapat memilih kebun dan blok spesifik untuk menampilkan data yang relevan. Selain itu, terdapat grafik yang menunjukkan total penyiraman air dan pupuk yang dilakukan dalam sehari.', 
            year: '2024' 
        },
        { 
            id: 2, 
            image: image2, 
            cornerTitle: 'Matching Fund PT Agrofilia Permata (Team)', // New corner title
            title: 'Tabel Admin Kebun Vanili', 
            description: 'Tabel ini digunakan untuk menampilkan grafik data sensor yang dikirim oleh perangkat IoT, mencakup informasi mengenai suhu, kelembaban udara, cahaya, dan kelembaban tanah, beserta keterangan waktu pengukuran. Grafik ini memungkinkan pengguna untuk memantau perubahan data secara visual.', 
            year: '2024' 
        },
        { 
            id: 3, 
            image: image3, 
            cornerTitle: 'Mini Project POS Admin (Individual)', // New corner title
            title: 'Admin Point of Sales', 
            description: 'Aplikasi Point of Sale (POS) ini dirancang khusus untuk admin toko buku, memberikan solusi yang efisien dan praktis dalam mengelola penjualan dan inventaris. Dengan antarmuka yang intuitif, admin dapat dengan mudah mencatat transaksi penjualan', 
            year: '2024' 
        },
        { 
            id: 11, 
            image: image11, 
            cornerTitle: 'Project ELK Stack', // New corner title
            title: 'Interface Kibana', 
            description: 'Saya dan tim magang merancang dan membangun sistem pemantauan log akses dan log error dari sebuah server website menggunakan ELK Stack, dengan Elasticsearch untuk menyimpan dan mengindeks data log, Logstash untuk memproses dan mentransformasikan data log, serta Kibana untuk menampilkan data tersebut melalui visualisasi yang interaktif.', 
            year: '2023' 
        },
        { 
            id: 4, 
            image: image4, 
            cornerTitle: 'Mini Project E-commerce (Individual)', // New corner title
            title: 'Pembelian (Pengguna)', 
            description: 'Halaman checkout memungkinkan pengguna untuk memilih berbagai opsi, seperti warna produk, ukuran produk, dan jumlah produk yang ingin dibeli.  ', 
            year: '2023' 
        },
        { 
            id: 5, 
            image: image5, 
            cornerTitle: 'Mini Project E-commerce (Individual)', // New corner title
            title: 'Keranjang (Pengguna)', 
            description: 'Dalam halaman keranjang, pengguna dapat melihat ringkasan pesanan, seperti total keseluruhan, menghitung biaya ongkos kirim memanfaatkan API dari RajaOngkir, dan menjumlahkan semua total harga produk sebelum melanjutkan ke proses pembayaran.  ', 
            year: '2023' 
        },
        { 
            id: 6, 
            image: image6, 
            cornerTitle: 'Mini Project E-commerce (Individual)', // New corner title
            title: 'Pembayaran (Pengguna)', 
            description: 'Dalam halaman pembayaran, pengguna akan menemukan formulir yang harus diisi dengan informasi penting. Formulir ini mencakup detail seperti alamat pengiriman, nomor rekening, dan jumlah total yang telah ditransfer ke rekening admin. Di sisi kanan halaman, terdapat informasi mengenai rekening admin yang akan memudahkan pengguna dalam melakukan transfer.', 
            year: '2023' 
        },
        { 
            id: 7, 
            image: image7, 
            cornerTitle: 'Mini Project E-commerce (Individual)', // New corner title
            title: 'Pembelian Saya (Pengguna)', 
            description: 'Halaman ini bertujuan untuk menyediakan riwayat pembelian bagi pengguna, sehingga mereka dapat dengan mudah melacak setiap transaksi yang telah dilakukan. Selain itu, halaman ini juga memberikan informasi mengenai status pembelian dan pembayaran, apakah sudah disetujui oleh admin atau belum. Dengan adanya fitur ini, pengguna dapat mengetahui dengan jelas perkembangan pesanan mereka.', 
            year: '2023' 
        },
        { 
            id: 8, 
            image: image8, 
            cornerTitle: 'Mini Project E-commerce (Individual)', // New corner title
            title: 'Data Pesanan (Admin)', 
            description: 'Data pesanan di halaman ini berfungsi untuk memungkinkan admin mengambil tindakan terhadap pesanan pengguna. Admin dapat memperbarui status pesanan sesuai dengan tahapannya, seperti mengonfirmasi pesanan, menandai sebagai sedang dikemas, mengindikasikan bahwa pesanan telah dikirim, atau menandakan bahwa pesanan telah diterima dan selesai.', 
            year: '2023' 
        },
        { 
            id: 9, 
            image: image9, 
            cornerTitle: 'Mini Project E-commerce (Individual)', // New corner title
            title: 'Data Pembayaran (Admin)', 
            description: 'Data pembayaran di halaman ini juga berfungsi untuk memperbarui status pembayaran yang telah dilakukan oleh pengguna. Melalui informasi ini, admin dapat mengonfirmasi apakah pembayaran telah diterima dan memvalidasi transaksi sebelum memproses pesanan lebih lanjut. sistem ini memungkinkan pengguna untuk melihat riwayat pembayaran mereka, ehingga memberikan transparansi dalam setiap langkah transaksi.', 
            year: '2023' 
        },
        { 
            id: 10, 
            image: image10, 
            cornerTitle: 'Mini Project E-commerce (Individual)', // New corner title
            title: 'Laporan Pesanan (Admin)', 
            description: 'Laporan Pesanan dibuat untuk admin dapat melihat pendapatan berdasarkan riwayat pembelian produk. Laporan ini juga memudahkan admin dalam melacak transaksi secara lebih detail dan mengelola data penjualan dengan lebih efisien.', 
            year: '2023' 
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12'>Proyek Saya</h2>
                <Slider {...settings}>
                    {/* Group ID 1 and 2 */}
                    <div className='p-4 relative'>
                        <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[0].cornerTitle}
                            </div>
                            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[0].year}
                            </div>
                            <img src={listProjects[0].image} alt={listProjects[0].title} className='w-full h-80 object-contain' />
                            <div className='p-6'>
                                <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{listProjects[0].title}</h2>
                                <p className='leading-relaxed mb-3'>{listProjects[0].description}</p>
                            </div>
                        </div>
                        <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[1].cornerTitle}
                            </div>
                            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[1].year}
                            </div>
                            <img src={listProjects[1].image} alt={listProjects[1].title} className='w-full h-80 object-contain' />
                            <div className='p-6'>
                                <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{listProjects[1].title}</h2>
                                <p className='leading-relaxed mb-3'>{listProjects[1].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* ID 3 */}
                    <div className='p-4 relative'>
                        <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[2].cornerTitle}
                            </div>
                            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[2].year}
                            </div>
                            <img src={listProjects[2].image} alt={listProjects[2].title} className='w-full h-80 object-contain' />
                            <div className='p-6'>
                                <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{listProjects[2].title}</h2>
                                <p className='leading-relaxed mb-3'>{listProjects[2].description}</p>
                            </div>
                        </div>
                    </div>
                    {/* ID 4 */}
                    <div className='p-4 relative'>
                        <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[3].cornerTitle}
                            </div>
                            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                {listProjects[3].year}
                            </div>
                            <img src={listProjects[3].image} alt={listProjects[3].title} className='w-full h-80 object-contain' />
                            <div className='p-6'>
                                <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{listProjects[3].title}</h2>
                                <p className='leading-relaxed mb-3'>{listProjects[3].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Group ID 4 to 10 */}
                    <div className='p-4 relative'>
                        <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                            <h2 className="cursor-pointer" onClick={() => setExpanded(!expanded)}> 
                                {expanded ? 'Sembunyikan Proyek' : 'Tampilkan lebih proyek...'} 
                            </h2>
                            {expanded && (
                                <div className="grid grid-cols-2 gap-4">
                                    {listProjects.slice(4).map((project) => (
                                        <div key={project.id} className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                                {project.cornerTitle}
                                            </div>
                                            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg text-sm font-medium">
                                                {project.year}
                                            </div>
                                            <img src={project.image} alt={project.title} className='w-full h-80 object-contain' />
                                            <div className='p-6'>
                                                <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                                <p className='leading-relaxed mb-3'>{project.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}
