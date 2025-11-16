import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Review from './Reviews';

const reviewsPromise = fetch('/review.json').then(res => res.json());

const Home = () => {
    console.log(reviewsPromise);
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Review reviewsPromise={reviewsPromise}></Review>
        </div>
    );
};

export default Home;