// BackgroundContainer.js
import React from 'react';

const BackgroundContainer = ({ children }) => {
  const desktopImage = 'path-to-desktop-image.jpg';
  const mobileImage = 'path-to-mobile-image.jpg';

  // Determine which image to use based on screen size (you can use media queries here)
  const backgroundImage = window.innerWidth >= 768 ? desktopImage : mobileImage;

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
};




// App.js
// import React from 'react';
// import BackgroundContainer from './BackgroundContainer';
// import ReusableComponent1 from './ReusableComponent1';
// import ReusableComponent2 from './ReusableComponent2';

// const App = () => {
//   return (
//     <BackgroundContainer>
//       <ReusableComponent1 />
//       <ReusableComponent2 />
//       {/* Other components */}
//     </BackgroundContainer>
//   );
// };


// export default App;

// ReusableComponent1.js
// import React from 'react';

// const ReusableComponent1 = ({ backgroundImage }) => {
//   return (
//     <div className="reusable-component">
//       {/* Use backgroundImage prop if needed */}
//     </div>
//   );
// };

// export default ReusableComponent1;



export default BackgroundContainer;
