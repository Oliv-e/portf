import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <div className='w-full'>
        <div className='w-10/12 pt-24 pb-52 mx-auto'>
          <div className='flex flex-col gap-8 items-center'>
            <img src="/aku.jpg" className='w-52 animate-fade-up h-52 object-cover rounded-full border-4 border-s-blue-500 border-t-purple-500 border-e-red-500 border-b-orange-500' alt="my-img" />
            <div className='p-4 rounded-xl text-gray-800'>
              <h1 className="text-5xl font-roboto pb-1 animate-fade-up text-center animate-delay-1000 border-b border-gray-800">OLIVER DILLON</h1>
              <h1 className="text-xl font-roboto pt-2 animate-fade-up animate-delay-[2000ms] text-center">Web Developer</h1>
              <div className='text-center animate-fade-up animate-delay-[3000ms] md:hidden'>
                <a href="https://github.com/oliv-e/" target="_blank" rel="noreferrer"><span className="hover:text-gray-500 icon-[mingcute--github-line] mt-1 w-12 h-12 hover:icon-[mingcute--github-fill] hover:w-12 hover:h-12"></span></a>
                <a href="https://linkedin.com/in/oliverkore/"><span className="hover:text-blue-500 icon-[mingcute--linkedin-line] mt-1 w-12 h-12 hover:icon-[mingcute--linkedin-fill] hover:w-12 hover:h-12"></span></a>
                <a href="https://instagram.com/oliverkore/"><span className="hover:text-orange-500 icon-[ri--instagram-line] mt-1 w-12 h-12 hover:icon-[ri--instagram-fill] hover:w-12 hover:h-12"></span></a>
                <a href="mailto:oliversmk7rpl@gmail.com"><span className="hover:text-red-500 icon-[mdi--email-outline] mt-1 w-12 h-12 hover:icon-[mdi--email] hover:w-12 hover:h-12"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-8 text-white bg-gray-800">
        <div className='w-10/12 mx-auto'>
            <h2 className='text-4xl font-roboto'>こんにちは👋!</h2>
            <h2 className="text-xl font-edu mt-1 mb-4">Konnichiwa</h2>
            <p className='text-lg md:text-2xl font-roboto'>I’m Oliver Dillon from Indonesia! <br />
            I love programming, as well as designs and learning new things! <br />
            Feel free to get in touch or take a look at my past work below.</p>
        </div>
      </div>
      <div className="w-full py-12 text-white bg-black/[0.5]">
        <div className='w-10/12 mx-auto'>
            <h2 className='text-4xl text-center font-edu'>PORTFOLIO</h2>
          </div>
      </div>
      <div className="w-full py-8 text-white bg-gray-800">
        <div className='w-10/12 mx-auto text-center'>
            <h2 className='text-4xl font-roboto'>My Highlights</h2>
            <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
              <div className='flex flex-col items-center relative justify-center'>
                <img src="/sima.png" alt="SiMA" className='h-56 rounded-lg' />
                <a href='https://github.com/oliv-e/ProjectMasjid' className='text-2xl absolute top-[85px] bg-gray-800 p-2 rounded-lg'>SiMA</a>
              </div>
              <div className='flex flex-col items-center relative justify-center'>
                <img src="/furnituremax.png" alt="FurnitureMax" className='h-56 rounded-lg' />
                <a href='https://github.com/oliv-e/Capstone1_BarangG2FS' className='text-2xl absolute top-[85px] bg-gray-800 p-2 rounded-lg'>Furniture Max</a>
              </div>
              <div className='flex flex-col items-center relative justify-center'>
                <img src="/enggarkratom.png" alt="Enggar Kratom" className='h-56 rounded-lg' />
                <a href='https://github.com/oliv-e/en-kratom' className='text-2xl absolute top-[85px] bg-gray-800 p-2 rounded-lg'>Enggar Kratom</a>
              </div>
            </div>
        </div>
      </div>
      <div className="w-full py-12 text-white bg-black/[0.5]">
        <div className='w-10/12 mx-auto'>
          <h2 className='text-4xl text-center font-edu'>TIMELINE</h2>
        </div>
      </div>
      <div className="w-full py-10 text-white bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className='w-10/12 mx-auto text-center font-roboto'>
            <div className='mt-10'>

              <div className='animate-fade-up grid grid-cols-1 md:grid-cols-2'data-twe-animation-start="onScroll">
                <div className='border-e-2 pb-20 relative text-end pe-16 md:pe-20 border-white me-10 md:me-0'>
                  <div className='absolute -right-[43px] -top-[30px] border bg-white z-10 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNcRutn6T4Zalp8JdwFoq6_hoc_l38kuOVA&s" className='w-20 h-20 p-3 rounded-xl' alt="" />
                  </div>
                  <div className='bg-gray-700 p-2 md:p-4 rounded-lg'>
                    <span className='text-xl md:hidden'>August, 2019 <br /></span>
                    <span className='text-sm md:text-xl'>At this time, I started to have some interest in coding. In Aug 2019, I am a new Vocational High School student at SMK 7 Pontianak, Majoring in software engineering, started learning Web Basics and created my landing page website.</span>
                  </div>
                </div>
                <div className='hidden md:block border-s-2 pb-20 text-start ps-20 border-white'>
                  <span className='text-xl'>August, 2019</span>
                </div>
              </div>

              <div className='animate-fade-up animate-delay-1000 grid md:grid-cols-2'>
                <div className='border-e-2 pb-20 relative text-end pe-16 md:pe-20 border-white me-10 md:me-0'>
                  <div className='absolute -right-[43px] -top-[30px] border bg-white z-10 rounded-full'>
                    <img src="https://bnsp.go.id/assets/img/favicon.png" className='w-20 h-20 p-3 rounded-xl' alt="" />
                  </div>
                  <div>
                    <span className='text-xl hidden md:block'>March, 2022</span>
                    <div className='bg-gray-700 md:hidden p-2 md:p-4 rounded-lg'>
                      <span className='text-xl'>March, 2022 <br /></span>
                      <span className='text-sm'>I graduated from SMK 7 Pontianak with a BNSP KKNI Professional Level II Software Engineering Certificate.</span>
                    </div>
                  </div>
                </div>
                <div className='border-e-2 hidden md:block md:border-s-2 md:border-e-0 pb-20 text-end md:text-start pe-16 md:ps-20 border-white'>
                  <div className='bg-gray-700 p-2 md:p-4 rounded-lg'>
                    <span className='text-xl'>I graduated from SMK 7 Pontianak with a BNSP KKNI Professional Level II Software Engineering Certificate.</span>
                  </div>
                </div>
              </div>
              
              <div className='animate-fade-up animate-delay-[2000ms] grid grid-cols-1 md:grid-cols-2'data-twe-animation-start="onScroll">
                <div className='border-e-2 pb-20 relative text-end pe-16 md:pe-20 border-white me-10 md:me-0'>
                  <div className='absolute -right-[43px] -top-[30px] border bg-white z-10 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZF0J0SSTgH41ySdaez1CSZkdZSl5YdTgh0Q&s" className='w-20 h-20 p-3 rounded-xl' alt="" />
                  </div>
                  
                  <div className='bg-gray-700 p-4 rounded-lg'>
                  <span className='text-xl md:hidden'>Sept, 2022 <br /></span>
                    <span className='text-sm md:text-xl'>I continued my education at <a href="https://polnep.ac.id" className='underline'>State Polytechnic of Pontianak</a> majoring in Informatics Engineering.</span>
                  </div>
                </div>
                <div className='hidden md:block border-s-2 pb-20 text-start ps-20 border-white'>
                  <span className='text-xl'>Sept, 2022</span>
                </div>
              </div>

              <div className='animate-fade-up animate-delay-[3000ms] grid md:grid-cols-2'>
                <div className='border-e-2 pb-20 relative text-end pe-16 md:pe-20 border-white me-10 md:me-0'>
                  <div className='absolute -right-[43px] -top-[30px] border bg-white z-10 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDtNA-t0NYUFeM9BgLieAQ52nhOr4_VW4Hg&s" className='w-20 h-20 p-3 rounded-xl' alt="" />
                  </div>
                  <div>
                    <span className='text-xl hidden md:block'>Feb, 2023</span>
                    <div className='bg-gray-700 md:hidden p-2 md:p-4 rounded-lg'>
                      <span className='text-xl'>Feb, 2023 <br /></span>
                      <span className='text-sm'>I took part in an independent study program organized by Kampus Merdeka, studying advanced websites under the auspices of <a href="https://gamelab.id" className='underline'>gamelab.id</a> for 1 semester.</span>
                    </div>
                  </div>
                </div>
                <div className='border-e-2 hidden md:block md:border-s-2 md:border-e-0 pb-20 text-end md:text-start pe-16 md:ps-20 border-white'>
                  <div className='bg-gray-700 p-2 md:p-4 rounded-lg'>
                    <span className='text-xl'>I took part in an independent study program organized by Kampus Merdeka, studying advanced websites under the auspices of <a href="https://gamelab.id" className='underline'>gamelab.id</a> for 1 semester.</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className='text-xl my-4 text-end md:text-center text-gray-300 font-edu'>To Be Continue..</h2>
        </div>
      </div>
      <div className="w-full py-12 text-white bg-black/[0.5]">
        <div className='w-10/12 mx-auto'>
            <h2 className='text-4xl text-center font-edu'>THE END.</h2>
          </div>
      </div>
    </>
  );
};

export default HomePage;