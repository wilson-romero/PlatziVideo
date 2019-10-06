import React, { useEffect, useState } from 'react';
import HomeLayout from './home-layout';

const Home = () => {
  const titles = {
    mylist: 'Mi lista',
    trends: 'Tendencias',
    originals: 'Originales PlatziVideo',
  };
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(categories => setCategories(categories));
  }, []);

  return <HomeLayout categories={categories} titles={titles} />;
};

export default Home;
