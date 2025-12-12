
'use client'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';


export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <header className=' flex items-center justify-between md:justify-evenly h-20 border rounded-lg mt-4 w-10/12 m-auto bg-white text-black'>
                {/* left-side */}
                <div className='flex items-center gap-10 ml-4 md:ml-0'>
                    <h1 className='text-lg font-bold cursor-pointer'>Blip</h1>
                    <nav className='hidden md:flex items-center gap-4 font-semibold text-lg list-none'>
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Enterprise</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </nav>
                </div>
                {/* right-side */}
                <div className='flex items-center gap-3 mr-2 md:mr-0'>
                    <button className=' bg-purple-500 text-white font-bold w-33  md:w-44 md:h-12 h-10 rounded-md'>GET STARTED</button>
                    <Menu onClick={() => setIsNavOpen(true)} className='md:hidden cursor-pointer' />

                </div>


                {/* mobleNa */}
                <div className={`border min-h-screen absolute transition-all duration-500  w-full bg-white md:hidden px-4 py-6 top-0 ${isNavOpen ? ' left-0' : 'left-full'}`}>
                    <div className=' flex flex-row-reverse mb-10 justify-between items-center '>
                        <X onClick={() => setIsNavOpen(false)} className=' cursor-pointer border ' />
                        <h1 className='text-xl font-bold cursor-pointer'>Blip</h1>

                    </div>
                    <nav className='flex  flex-col md:hidden items-start gap-4 font-semibold text-lg list-none'>
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Enterprise</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </nav>
                </div>
            </header>
        </>
    )
}
