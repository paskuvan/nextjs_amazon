import Logo from './Logo'
import { 
  RiFacebookFill, 
  RiInstagramFill, 
  RiLinkedinFill, 
  RiTwitterFill } 
  from '@remixicon/react'
  import { footerLinks } from '../data/data'


export default function Footer() {
  return (
    <footer className='bg-neutral-900 text-white pt-16 pb-9'>
      <div className='container space-y-14 sm:space-y-20 lg:space-y-24'>
        {/* Footer top*/}
        <div className='grid gap-5 lg-gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_0.7fr_0.8fr_0.8fr]'>
         {/* Footer logo*/}
         <div className='space-y-4'>
          <Logo />
          <p className='text-neutral-400'>
            Empowering learners worldwide through accessible education.
          </p>
           {/* Social Link*/}
           <div className='flex items-center gap-4'>
            {[
              RiFacebookFill,
              RiTwitterFill,
              RiInstagramFill,
              RiLinkedinFill
            ].map((Icon) => (
              <a href="#" className='bg-neutral-800 p-2 rounded-full hover:bg-lime-600 focus:bg-lime-600 transition-colors'>
                <Icon />
              </a>
            ))}
           </div>
         </div>

          {/* List*/}
            {footerLinks.map((item) => (
              <div className='space-y-3' key={item.id}>
                <p className='font-bold text-lg'>{item.title}</p>
                <ul className='space-y-2'>
                  {item.links.map((link) => (
                    <li className='' key={link}>
                      <a href="#" className='text-neutral-400 hover:text-lime-600 focus:text-lime-600 transition-colors'>{link}</a>
                    </li>
                  ))}
                 
                </ul>
              </div>
            ))}
        </div>

         {/* Footer bottom*/}
        <div className='flex flex-wrap items-center justify-between gap-x-8 gap-y-3'>
            <p className='text-neutral-600'>
              &copy; {new Date().getFullYear()} Brischo. All rights reserved.
            </p>

            {/* Links */}
            <div className='flex gap-5 flex-wrap'>
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
                (label) => (
                  <a 
                  href="#" 
                  key={label} 
                  className='text-neutral-400 hover:text-lime-600 focus:text-lime-600 transition-colors'>
                    {label}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  )
}
