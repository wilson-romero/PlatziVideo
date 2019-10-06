import React from 'react';
import Header from '../../components/header';
import Search from '../../components/search';
import Categories from '../../components/categories';
import Slider from '../../components/slider';
import SliderItem from '../../components/slider-item';
import Footer from '../../components/footer';

import '../../assets/styles/pages/home.scss';

const HomeLayout = ({ categories, titles }) => (
  <div id='home' className='d-flex flex-column'>
    <Header />
    <main className='flex-grow-1'>
      <Search />
      <Categories>
        {Object.keys(categories).map(
          (key) => categories[key] &&
            categories[key].length > 0 && 
            (
              <Slider key={key} title={titles[key]}>
                {categories[key].map(item => (
                  <SliderItem key={item.id} {...item} />
                ))}
              </Slider>
            )
        )}
      </Categories>
    </main>
    <Footer />
  </div>
);

export default HomeLayout;
