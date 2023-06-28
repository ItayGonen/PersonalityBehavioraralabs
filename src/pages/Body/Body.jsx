import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Timelime from '../../components/Timeline/Timelime';
import Second from '../../components/Second/Second';
import NumbersCounter from '../../components/NumbersCounter/NumbersCounter';
import Footer from '../../components/Footer/Footer';

const Body = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Timelime />
        <Second />
        <NumbersCounter />
        <Footer />
    </div>
  )
}

export default Body;