import React from 'react';

const Banner = () => (
  <div className="banner">
    <div className="slider" style={{ '--quantity': 11 }}>
      <div className="item" style={{ '--position': 1 }}><img src="1.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 2 }}><img src="2.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 3 }}><img src="4.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 4 }}><img src="5.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 5 }}><img src="6.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 6 }}><img src="7.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 7 }}><img src="8.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 8 }}><img src="9.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 9 }}><img src="10.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 10 }}><img src="11.jpg" alt="" /></div>
      <div className="item" style={{ '--position': 11 }}><img src="12.jpg" alt="" /></div>
    </div>
  </div>
);

export default Banner;
