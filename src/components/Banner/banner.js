import React from 'react';

function Banner(props) {


  
  return (
    <div className='banner-container'>
      {props.children}
    </div>
  );
}
export default Banner;