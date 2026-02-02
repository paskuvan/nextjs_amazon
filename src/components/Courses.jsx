import { useState } from 'react';
import { courses } from '../data/data';
import { RiStarFill } from '@remixicon/react';
import Button from './Button';
import { motion } from 'motion/react';
import * as variants from '../motion/animation.js'

export default function Courses() {
    const [activeTab, setActiveTab] = useState('All');
    const filteredCourses = courses.filter(course => {
        if(activeTab === 'All') return true;
        return course.category === activeTab;
    })
  return (
    <section className='py-20 bg-gray-50'>
        <motion.div 
        variants={variants.staggerContainer} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:true}}  
        className='container'>
             {/* Title */}
            <div className='text-center space-y-2.5'>
                <motion.h2 variants={variants.fadeInUp} className='section-title'>Explore courses</motion.h2>
                <motion.p variants={variants.fadeInUp} className='text max-w-2xl mx-auto'>Browse through a wide range of courses to enhance your skills and knowledge.</motion.p>
            </div>

             {/* Wrapper */}
             <div className='mt-7'>
                 {/* Tabs */}
                <motion.div variants={variants.fadeInUp} className='flex flex-wrap justify-center gap-4'>
                    {['All', 'Popular', 'Recent', 'Design', 'Marketing', 'Coding'].map(
                        (tab) => (
                            <button 
                            onClick={() => setActiveTab(tab)}
                            className={`shadow-util px-6 py-2.5 
                                rounded-full font-mediumtransition ${
                                activeTab === tab 
                                ? 'bg-lime-200 hover:bg:lime-300 focus:bg-lime-300!'
                                : 'hover:bg-neutral-100 focus:bg-neutral-100!'
                                }`} 
                            key={tab}>
                                {tab}
                            </button>
                        )
                    )}
                </motion.div>
            {/* Card Wrapper */}
            <motion.div variants={variants.fadeInUp}className='mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {filteredCourses.map(course => (
                        // Card
                        <div className='bg-white rounded-xl border border-neutral-200 overflow-hidden 
                        hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 
                        hover:border-black focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:border-blacktransition'
                        key={course.id}>
                            {/* Img */}
                            <div className='h-48 w-full overflow-hidden flex items-center justify-center relative'>
                                <img 
                                src={course.img} 
                                alt={course.title} 
                                width={course.width} 
                                height={course.height} 
                                className='w-full h-full object-cover'
                                />
                                {course.isNew === true && (
                                    <div className='absolute top-4 right-4 bg-yellow-300 p-1.5 transform rotate-3 shadow-sm'>
                                        <span className='text-xs font-bold'>New</span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className='p-6 space-y-2'>
                                <h3 className='font-bold text-lg'>{course.title}</h3>
                                <p className='text'>{course.author}</p>
                                <div className='flex justify-between items-center'>
                                    {/* Rate */}
                                   <div className='flex items-center gap-1'>
                                     <span className='shrink-0 bg-yellow-100 p-1 text-yellow-600 inline-flex'>
                                       <RiStarFill size={12} />
                                    </span>
                                    <p className='text-sm font-bold'>
                                        {course.rating}
                                    </p>
                                     <p className='text-xs text-neutral-500'>
                                        ({course.reviews})
                                    </p>
                                </div>
                                   </div>
                                <p className='font-bold text-lg'>${course.price}</p>
                            </div>
                        </div>
                    ))}
            </motion.div>

           <motion.div variants={variants.fadeInUp}>
             <Button label={'Explore all courses'} primary classes={`mt-12 mx-auto block`}/>
           </motion.div>
             </div>
        </motion.div>
    </section>
  )
}
