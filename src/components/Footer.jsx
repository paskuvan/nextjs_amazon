import Logo from './Logo'
import { 
  RiFacebookFill, 
  RiInstagramFill, 
  RiLinkedinFill, 
  RiTwitterFill } 
  from '@remixicon/react'
  import { footerLinks } from '../data/data'
import { motion } from 'motion/react';
import * as variants from '../motion/animation.js'


export default function Footer() {
  return (
    <footer className='bg-neutral-900 text-white pt-16 pb-9'>
      <motion.div variants={variants.staggerContainer} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:true}}  className='container space-y-14 sm:space-y-20 lg:space-y-24'>
        {/* Footer top*/}
        <motion.div variants={variants.fadeInUp} className='grid gap-5 lg-gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_0.7fr_0.8fr_0.8fr]'>
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
              <motion.div variants={variants.fadeInUp} className='space-y-3' key={item.id}>
                <p className='font-bold text-lg'>{item.title}</p>
                <ul className='space-y-2'>
                  {item.links.map((link) => (
                    <li className='' key={link}>
                      <a href="#" className='text-neutral-400 hover:text-lime-600 focus:text-lime-600 transition-colors'>{link}</a>
                    </li>
                  ))}
                 
                </ul>
              </motion.div>
            ))}
        </motion.div>

         {/* Footer bottom*/}
        <div className='flex flex-wrap items-center justify-between gap-x-8 gap-y-3'>
            <motion.p variants={variants.fadeIn} className='text-neutral-600'>
              &copy; {new Date().getFullYear()} Brischo. All rights reserved.
            </motion.p>

            {/* Links */}
            <motion.div variants={variants.fadeIn} className='flex gap-5 flex-wrap'>
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
                (label) => (
                  <a 
                  href="#" 
                  key={label} 
                  className='text-neutral-400 hover:text-lime-600 focus:text-lime-600 transition-colors'>
                    {label}
                    </a>
                ))}
            </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
