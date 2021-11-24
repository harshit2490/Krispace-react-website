import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i0.wp.com/adventurediary.co/wp-content/uploads/2019/08/stefan-stefancik-0wMmxNB6Xzc-unsplash.jpg?resize=768%2C513&ssl=1'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://c.pxhere.com/photos/a0/ad/photo-1390942.jpg!d'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://c.wallhere.com/photos/be/4d/nature_water_boat-1849083.jpg!d'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://sport.wwddesigns.com/wp-content/uploads/2019/01/o_gjakckjmm.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://miro.medium.com/max/12506/0*aiDI0NiXsAwFLN1-'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
