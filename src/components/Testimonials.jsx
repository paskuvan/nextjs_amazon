import { RiDoubleQuotesR } from '@remixicon/react';
import { testimonials } from '../data/data';
import { motion } from 'motion/react';
import * as variants from '../motion/animation.js'

export default function Testimonials() {
  return (
    <section className='py-20'>
        <motion.div variants={variants.staggerContainer} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:true}} className='container'>
            {/* Title */}
            <div className='space-y-1.5'>
                <motion.h2 variants={variants.fadeInUp} className='section-title'>What learners are saying</motion.h2>
                <motion.p variants={variants.fadeInUp} className='text'>
                    Hear from our community of learners about their experiences and success stories.
                </motion.p>
            </div>

            {/* Card Wrapper */}
            <motion.div variants={variants.fadeIn} className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {testimonials.map((testimonial) => (
                    // Card
                    <div className='bg-white border border-neutral-200 shadow-sm p-8 rounded-xl space-y-3.5 lg:nth-[2]:rotate-2' 
                    key={testimonial.id}>
                         {/* Icon */}
                        <span className="size-8 bg-yellow-400 inline-flex items-center justify-center rounded-xl">
                          <RiDoubleQuotesR />
                        </span>
                        <p className='text'>{testimonial.text}</p>
                        <div className='flex items-center gap-3'>
                             {/* Avatar */}
                           <div className='size-10'>
                             <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            width={150} 
                            height={150} 
                            className='rounded-full w-full h-full object-cover'
                            />
                           </div>
                        {/* Author */}
                        <div>
                            <p className='text-bold'>{testimonial.author}</p>
                            <p className='text truncate text-sm'>{testimonial.role}</p>
                        </div>
                        </div>
                        
                    </div>
                ))} 
            </motion.div>
        </motion.div>
    </section>
  )
}
