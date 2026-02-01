import { categoriesItems} from '../data/data';

export default function CourseCategories() {
  return (
   <section className='py-20'>
     <div className='container'>
        <h2 className='section-title text-center'>
            Explore 4000+ Free <br /> Online Courses
        </h2>
        
         {/* Wrapper */}
         <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-11'>
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
         </div>
    </div>
   </section>
  )
}
