import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import BrandBanner from './components/BrandBanner.jsx';
import CourseCategories from './components/CourseCategories.jsx';
import Courses from './components/Courses.jsx';
import WhyLearnLive from './components/WhyLearnLive.jsx';
import Testimonials from './components/Testimonials.jsx';

export default function App () {
  return <>
  <Header />
  <main>
    <Hero />
    <BrandBanner/>
    <CourseCategories/>
    <Courses />
    <WhyLearnLive />
    <Testimonials />
  </main>
  <Footer />
  </>;
  
}