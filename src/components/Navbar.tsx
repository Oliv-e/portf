import React from 'react';

const Navbar: React.FC = () => {
    const showResMenu = () => {
        const resMenu = document.getElementById("res-menu");
        if (resMenu) {
            resMenu.classList.toggle("hidden");
        }
    };
  return (
    <>
        <nav className="hidden md:block w-full px-4 pt-1">
            <div className="w-10/12 mx-auto navbar-container flex flex-row justify-between items-center text-[#30475E]">
                <h1 className="font-bold ml-8 text-blue-300">オリバー</h1>
                <ul className="flex gap-4 items-center">
                    <li><a href="https://github.com/oliv-e/" target="_blank" rel="noreferrer"><span className="hover:text-gray-500 icon-[mingcute--github-line] mt-1 w-6 h-6 hover:icon-[mingcute--github-fill] hover:w-6 hover:h-6"></span></a></li>
                    <li><a href="https://linkedin.com/in/oliverkore/"><span className="hover:text-blue-500 icon-[mingcute--linkedin-line] mt-1 w-6 h-6 hover:icon-[mingcute--linkedin-fill] hover:w-6 hover:h-6"></span></a></li>
                    <li><a href="https://instagram.com/oliverkore/"><span className="hover:text-orange-500 icon-[ri--instagram-line] mt-1 w-6 h-6 hover:icon-[ri--instagram-fill] hover:w-6 hover:h-6"></span></a></li>
                    <li><a href="mailto:oliversmk7rpl@gmail.com"><span className="hover:text-red-500 icon-[mdi--email-outline] mt-1 w-6 h-6 hover:icon-[mdi--email] hover:w-6 hover:h-6"></span></a></li>
                </ul>
            </div>
        </nav>
        <nav className="w-full px-4">
            <div className="w-full md:w-10/12 mx-auto navbar-container flex flex-row justify-between items-center">
                <span className="ml-8 font-edu absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-violet-500 to-red-500 bg-clip-text text-2xl box-content font-extrabold text-transparent text-center select-none">
                    OLIVER DILLON
                </span>
                <h1 className="ml-8 font-edu relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-violet-500 to-red-500 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto">
                    OLIVER DILLON
                </h1>
                <span></span>
                <ul className="hidden md:flex items-center gap-4">
                    <li><a className="font-edu text-xl text-gray-400 font-bold">HOME</a></li>
                    <li><a className="font-edu text-xl text-gray-400 font-bold">BLOG</a></li>
                    <li><a className="font-edu text-xl text-gray-400 font-bold">TO DO LIST</a></li>
                    <li><a href="#" className="font-edu text-xl text-[#30475E] font-bold hover:animate-pulse">CV</a></li>
                </ul>
                <button className="block md:hidden" onClick={showResMenu}>
                    <span className="icon-[mdi--menu] align-middle w-6 h-6 animate-jump-in animate-once"></span>
                </button>
            </div>
        </nav>
        <div className='h-screen w-full hidden md:hidden z-10 absolute top-0 left-0' id="res-menu">
            <nav className="w-full bg-gray-800 p-4 py-6">
                <div className="w-full mx-auto navbar-container flex flex-row justify-between items-center text-black">
                    <h1 className="text-xl font-bold text-white">オリバー</h1>
                    <button className="block" onClick={showResMenu}>
                        <span className="icon-[mdi--close] text-white align-middle w-6 h-6 animate-spin animate-once"></span>
                    </button>
                </div>
            </nav>
            <div className='w-full p-4 bg-white/50 h-screen'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    {/* <a href="#" className="p-4 w-full bg-gray-800 opacity-100">HOME</a>
                    <a href="#" className="p-4 w-full bg-gray-800 opacity-100">BLOG</a>
                    <a href="#" className="p-4 w-full bg-gray-800 opacity-100">TO DO LIST</a> */}
                    <a href="#" className="p-4 w-full bg-gray-800 text-white opacity-100">CV</a>
                </div>
            </div>
        </div>
    </>
  );
};

export default Navbar;