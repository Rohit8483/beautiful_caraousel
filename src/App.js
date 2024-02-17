import React from 'react';
import Navbar from "./components/navbar";
import Carousel from "./components/myCarousel";

function App() {
  const images = [
    'https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png',
    'https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg',
    'https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png',
    'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png'
  ];
  return (
    <div >
      <Navbar />
      <Carousel images={images}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

