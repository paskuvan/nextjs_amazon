import { categoriesItems} from '../data/data';
import { motion } from 'motion/react';
import * as variants from '../motion/animation.js'

export default function CourseCategories() {
  return (
   <section className='py-20'>
     <motion.div
     variants={variants.staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='container'>
        <motion.h2 variants={variants.fadeUp} className='section-title text-center'>
            Explore 4000+ Free <br /> Online Courses
        </motion.h2>
        
         {/* Wrapper */}
         <motion.div variants={variants.fadeInUp} className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-11'>
            {categoriesItems.map((item) => (
                // Card
                <div 
                className='p-6 border border-neutral-200 bg-white cursor-pointer hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl hover:border-black focus:border-black transition'
                key={item.id}>
                     {/* Icon */}
                    <span className='text-neutral-700 inline-flex'>
                        <item.icon size={30} />
                    </span>
                    <h3 className='text-xl font-bold mb-3'>
                        {item.title}
                    </h3>
                    <p className='text'>
                        {item.desc}
                    </p>
                </div>
            ))}
         </motion.div>
    </motion.div>
   </section>
  )
}
