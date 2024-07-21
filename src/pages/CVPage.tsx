import React, {useState} from 'react';

const CVPage: React.FC = () => {
    const [lang, setLang] = useState<'en' | 'id'>('en');

    const [biodata, setBiodata] = useState({
        en: {
            bio: 'Informatics Engineering Student at State Polytechnic of Pontianak',
            education: 'EDUCATION',            
            educations: [
                {
                    name: 'State Polytechnic of Pontianak',
                    degree: 'Associate Degree',
                    date: '2022 - Current',
                    major: 'Informatics Engineering',
                    score: 'GPA : 3.47 / 4',
                },
                {
                    name: 'Vocational High School 7 Pontianak',
                    degree: '',
                    date: '2019 - 2022',
                    major: 'Software Engineering',
                    score: 'Score : 8.15 / 10',
                },
            ],
            experience: 'EXPERIENCE',
            experiences: [
                {
                    name: 'Gamelab',
                    type: 'Independent Study',
                    date: 'Feb - June 2024',
                    position: 'Web FullStack Developer',
                    score: 'Score : 9.5 / 10',
                },
                {
                    name: 'Idekite Indonesia',
                    type: 'Internship',
                    date: 'Jan - March 2021',
                    position: 'FullStack Developer',
                    score: '',
                },
            ],
            project: 'PROJECTS',
            projects: [
                {
                    name: 'SiMA',
                    description: 'Informatics System based Web for Mosque using Laravel & Livewire',
                },
                {
                    name: 'Enggar Kratom',
                    description: 'Landing Page for Kratom Products using vite.js',
                },
                {
                    name: 'Furniture Max',
                    description: 'E-Commerce Website for Capstone Project in gamelab.id using Laravel',
                },
                {
                    name: 'Zorastamp',
                    description: 'Landing Page for Mini Project in gamelab.id using Bootstrap, Sass, JS and jQuery',
                },
                {
                    name: 'Portfolio',
                    description: 'My Portfolio Website using vite.js',
                },
            ],
            contact: 'CONTACTS',
        },
        id: {
            bio: 'Mahasiswa Teknik Informatika di Politeknik Negeri Pontianak',
            education: 'PENDIDIKAN',
            educations: [
                {
                  name: 'Politeknik Negeri Pontianak',
                  degree: 'Diploma',
                  date: '2022 - Sekarang',
                  major: 'Teknik Informatika',
                  score: 'IPK : 3.47 / 4',
                },
                {
                  name: 'Sekolah Menengah Kejuruan 7 Pontianak',
                  degree: '',
                  date: '2019 - 2022',
                  major: 'Rekayasa Perangkat Lunak',
                  score: 'Nilai : 8.15 / 10',
                },
              ],
            experience: 'PENGALAMAN',
            experiences: [
                {
                    name: 'Gamelab',
                    type: 'Studi Independent',
                    date: 'Feb - Juni 2024',
                    position: 'Web FullStack Developer',
                    score: 'Nilai : 9.5 / 10',
                },
                {
                    name: 'Idekite Indonesia',
                    type: 'Magang',
                    date: 'Jan - March 2021',
                    position: 'FullStack Developer',
                    score: '',
                },
            ],
            project: 'PROYEK',
            projects: [
                {
                    name: 'SiMA',
                    description: 'Sistem Informasi Berbasis Web untuk Masjid menggunakan Laravel & Livewire'
                },
                {
                    name: 'Enggar Kratom',
                    description: 'Halaman Landing untuk Produk Kratom menggunakan vite.js'
                },
                {
                    name: 'Furniture Max',
                    description: 'Situs E-Commerce untuk Proyek Capstone di gamelab.id menggunakan Laravel'
                },
                {
                    name: 'Zorastamp',
                    description: 'Halaman Landing untuk Proyek Mini di gamelab.id menggunakan Bootstrap, Sass, JS dan jQuery'
                },
                {
                    name: 'Portfolio',
                    description: 'Situs Portfolio saya menggunakan vite.js'
                },
            ],
            contact: 'KONTAK',
        },
    });

    const toggleLang = () => {
        setLang(lang === 'en' ? 'id' : 'en');
        const langIcon = document.getElementById('lang') as HTMLAnchorElement;
        langIcon.classList.toggle('icon-[flag--us-4x3]');
        langIcon.classList.toggle('icon-[flag--id-4x3]');
    };

    const print = () => {
        var section = document.getElementById('curvi') as HTMLAnchorElement;
        var printSection = section.innerHTML;
        var originalContent = document.body.innerHTML;
        document.body.innerHTML = printSection;
        window.print();
        document.body.innerHTML = originalContent;
    }

  return (
    <>
        <div className='w-11/12 md:w-6/12 mx-auto p-4 mt-8 flex justify-between bg-gray-800 border-b-2 items-center animate-fade-up'>
            <div className='flex gap-2 items-center'>
                <a onClick={toggleLang}><span className='icon-[flag--id-4x3] w-6 h-6 align-middle' id='lang'></span></a>
                
            </div>
            <a onClick={print}><span className='text-white icon-[material-symbols--print-outline] hover:icon-[material-symbols--print] w-6 h-6 hover:w-6 hover:h-6'></span></a>
        </div>
        <div className='w-11/12 md:w-6/12 mx-auto mb-8 animate-fade-up animate-delay-1000' id='curvi'>
            <div className='p-4 bg-gray-800 border-b-2'>
                <h1 className='text-4xl my-2 text-white text-center md:text-start font-bold'>OLIVER DILLON</h1>
                <p className='text-center text-white md:text-start'>{biodata[lang].bio}</p>
            </div>
            <div className='flex flex-col-reverse md:flex-row w-full'>
                <div className='w-full md:w-2/6'>

                    <ul className='bg-gray-800 md:border-e-2 border-b-2 px-4 py-2'>
                        <li className='mb-1 text-white text-center text-2xl border-b-2 pb-1 border-white'>
                            <span className='icon-[mdi--contact] align-middle'></span>
                            <span className='align-middle font-bold'> {biodata[lang].contact}</span>
                        </li>
                        <li className='text-white text-md'><a href="mailto:oliversmk7rpl@gmail.com"><span className='icon-[mdi--gmail] align-middle'></span> oliversmk7rpl@gmail.com</a></li>
                        <li className='text-white text-md'><a href="https://instagram.com/oliverkore"><span className='icon-[mdi--instagram] align-middle'></span> oliverkore</a></li>
                        <li className='text-white text-md'><a href="https://linkedin.com/in/oliverkore"><span className='icon-[mdi--linkedin] align-middle'></span> oliverkore</a></li>
                        <li className='text-white text-md'><a href="https://github.com/oliv-e/"><span className='icon-[mdi--github] align-middle'></span> oliv-e</a></li>
                    </ul>
                    
                    <ul className='bg-gray-800 md:border-e-2 px-4 py-2'>
                        <li className='mb-4 text-white text-2xl border-b-2 pb-2 border-white'>
                            <span className='icon-[carbon--result] align-middle'></span>
                            <span className='align-middle font-bold'> {biodata[lang].project}</span>
                        </li>

                        {biodata[lang].projects.map((projects, index) => (
                            <div key={index}>
                                <li className='text-white text-lg my-1'>
                                    <a href="https://github.com/oliv-e/">
                                        <span className="icon-[mdi--link] align-middle"></span>
                                        <span className='align-middle text-justify font-bold'> {projects.name}</span>
                                    </a>
                                </li>
                                <li className='text-white text-md ps-2'><span>{projects.description}</span></li>
                            </div>
                        ))}
                        
                    </ul>
                </div>
                <div className='w-full md:w-4/6 bg-gray-800'>

                    <ul className='bg-gray-800 border-b-2 px-4 py-2'>
                        <li className='mb-4 text-white text-2xl border-b-2 pb-2 border-white'>
                            <span className='icon-[material-symbols--school] align-middle'></span>
                            <span className='align-middle font-bold'> {biodata[lang].education}</span>
                        </li>

                        {biodata[lang].educations.map((education, index) => (
                            <div key={index}>
                                <li className='text-white text-lg my-2'>
                                    <span className='icon-[mdi--location] align-middle'></span>
                                    <span className='align-middle'> {education.name}</span>
                                </li>
                                <li className='text-white text-md ps-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <span className='icon-[uiw--date] align-middle'></span>
                                            <span className='align-middle'> {education.date}</span>
                                        </div>
                                        <span>{education.degree}</span>
                                    </div>
                                </li>
                                <li className='text-white text-md ps-2'>
                                    <div className='flex justify-between'>
                                        <span>{education.score}</span>
                                        <span>{education.major}</span>
                                    </div>
                                </li>
                            </div>
                        ))}

                    </ul>

                    <ul className='bg-gray-800 border-b-2 px-4 py-2'>
                        <li className='mb-4 text-white text-2xl border-b-2 pb-2 border-white'>
                            <span className='icon-[mdi--work] align-middle'></span>
                            <span className='align-middle font-bold'> {biodata[lang].experience}</span>
                        </li>

                        {biodata[lang].experiences.map((experiences, index) => (
                            <div key={index}>
                                <li className='text-white text-lg my-2'>
                                    <span className='icon-[mdi--location] align-middle'></span>
                                    <span className='align-middle'> {experiences.name}</span>
                                </li>
                                <li className='text-white text-md ps-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <span className='icon-[uiw--date] align-middle'></span>
                                            <span className='align-middle'> {experiences.date}</span>
                                        </div>
                                        <span>{experiences.type}</span>
                                    </div>
                                </li>
                                <li className='text-white text-md ps-2'>
                                    <div className='flex justify-between'>
                                        <span>{experiences.score}</span>
                                        <span>{experiences.position}</span>
                                    </div>
                                </li>
                            </div>
                        ))}

                    </ul>

                </div>
            </div>
        </div>
    </>
  );
};

export default CVPage;