import { RiCheckboxCircleLine } from '@remixicon/react'
import { benefits } from '../data/data'

export default function WhyLearnLive() {
  return (
    <section className='py-20'>
        <div className='container grid gap-16 lg:grid-cols-[0.7fr_1fr] lg:items-center'>
            {/* Image */}
             <div className='relative mx-auto p-5 order-1 lg:order-first'>
            <div className='max-w-92.5 w-full shadow-img mx-auto rounded-t-full bg-lime-600 flex items-center justify-center overflow-hidden pt-9 px-2.5'>
                <img 
                src="/images/section-img.png"
                alt="hero image"
                width={440}
                height={592}
                />
            </div>
         

         {/* Decorations */}   
         <img
         src="/images/star-icon.png"
         alt="star icon"
         width={64}
         height={64}
         className='absolute top-20 right-0'
         /> 

         
        </div>

         {/* Content */}   

         <div>
            <h2 className='section-title mb-2'>
                Why learn live with Brischo?
            </h2>
            <p className='text'>
                Join live classes led by expert instructors, engage in real-time discussions, and collaborate with peers to enhance your learning experience.
            </p>

             {/* Content */}   

             <ul className='mt-8 space-y-4'>
                {benefits.map((benefit) => (
                    <li className='flex items-start gap-3' key={benefit}>
                        <span className='text-lime-600 shrink-0'>
                            <RiCheckboxCircleLine />
                        </span>
                        <p className='text font-medium'>
                            {benefit}
                        </p>
                    </li>
                ))}
             </ul>
         </div>
        </div>
    </section>
  )
}
