import React from 'react';
import Categories from '../Categories/Categories';
import Services from './Services/Services';
import SlideShow from './SlideShow/SlideShow';

const Home = () => {
    return (
        <div className='mb-60'>
            <SlideShow></SlideShow>
            <Services></Services>
            <Categories></Categories>
        </div>
    );
};

export default Home;