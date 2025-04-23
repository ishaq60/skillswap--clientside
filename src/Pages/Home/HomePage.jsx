import React from 'react';
import Banner from '../../Components/HomePageComponents/LifeSuccessSection/Banner/Banner';
import LifeSuccessSection from '../../Components/HomePageComponents/LifeSuccessSection/LifeSuccessSection';
import Browsedatacategory from '../../Components/HomePageComponents/BrowsedataCategory/Browsedatacategory';
import TrendingCourses from '../../Components/HomePageComponents/TrendingCourses/TrendingCourses';
import Demand from '../../Components/HomePageComponents/Demand/Demand';
import CoursesSection from '../../Components/HomePageComponents/CoursesSection';
import MentorSection from '../../Components/HomePageComponents/MentorSection';
import FAQSection from '../../Components/HomePageComponents/FAQSection';
import BlogSection from '../../Components/HomePageComponents/BlogSection';
import Review from '../../Components/HomePageComponents/Review';

const HomePage = () => {
    return (
        <div>
       <Banner/>
         <div className='mt-20'>
     <LifeSuccessSection></LifeSuccessSection>
     </div>
     <div className='mt-20'>
     <Browsedatacategory></Browsedatacategory>
     </div>
     <div className='mt-20'>
     <TrendingCourses/>
     </div>
     <div className='mt-20'>
     <Demand/>
     </div>
     <div className='mt-20'>
     <CoursesSection/>
     </div>
     <div className='mt-20'>
     <MentorSection/>
     </div>
     <div className='mt-20'>
     <FAQSection/>
     </div>
     <div className='mt-20'>
     <BlogSection/>
     </div>
     <div className='mt-20'>
     <Review/>
     </div>
        </div>
    );
};

export default HomePage;