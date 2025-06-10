import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Ensure CSS is imported
import Page00 from '../assets/pages2/0.jpg';
import Page01 from '../assets/pages2/1.jpg';
import Page02 from '../assets/pages2/2.jpg';
import Page03 from '../assets/pages2/3.jpg';
import Page04 from '../assets/pages2/4.jpg';
import Page05 from '../assets/pages2/5.jpg';
import Page06 from '../assets/pages2/6.jpg';
import Page07 from '../assets/pages2/7.jpg';
import Page08 from '../assets/pages2/8.jpg';
import Page09 from '../assets/pages2/9.jpg';
import Page10 from '../assets/pages2/10.jpg';
import Page11 from '../assets/pages2/11.jpg';
import Page12 from '../assets/pages2/12.jpg';
import Page13 from '../assets/pages2/13.jpg';
import Page14 from '../assets/pages2/14.jpg';
import Page15 from '../assets/pages2/15.jpg';
import Page16 from '../assets/pages2/16.jpg';
import Page17 from '../assets/pages2/17.jpg';
import Page18 from '../assets/pages2/18.jpg';
import Page19 from '../assets/pages2/19.jpg';
import Page20 from '../assets/pages2/20.jpg';
import Page21 from '../assets/pages2/21.jpg';
import Page22 from '../assets/pages2/22.jpg';
import Page23 from '../assets/pages2/23.jpg';
import Page24 from '../assets/pages2/24.jpg';
import Page25 from '../assets/pages2/25.jpg';
import Page26 from '../assets/pages2/26.jpg';
import Page27 from '../assets/pages2/27.jpg';
import Page28 from '../assets/pages2/28.jpg';
import Page29 from '../assets/pages2/29.jpg';
import Page30 from '../assets/pages2/30.jpg';
import Page31 from '../assets/pages2/31.jpg';
import Page32 from '../assets/pages2/32.jpg';
import Page33 from '../assets/pages2/33.jpg';
import Page34 from '../assets/pages2/34.jpg';
import Page35 from '../assets/pages2/35.jpg';
import Page36 from '../assets/pages2/36.jpg';
import Page37 from '../assets/pages2/37.jpg';
import Page38 from '../assets/pages2/38.jpg';
import Page39 from '../assets/pages2/39.jpg';
import Page40 from '../assets/pages2/40.jpg';
import Page41 from '../assets/pages2/41.jpg';
import Page42 from '../assets/pages2/42.jpg';
import Page43 from '../assets/pages2/43.jpg';
import Page44 from '../assets/pages2/44.jpg';
import Page45 from '../assets/pages2/45.jpg';

const pages = [
  Page00, Page01, Page02, Page03, Page04, Page05, Page06, Page07, Page08, Page09,
  Page10, Page11, Page12, Page13, Page14, Page15, Page16, Page17, Page18, Page19,
  Page20, Page21, Page22, Page23, Page24, Page25, Page26, Page27, Page28, Page29,
  Page30, Page31, Page32, Page33, Page34, Page35, Page36, Page37, Page38, Page39,
  Page40, Page41, Page42, Page43, Page44, Page45,
];

const Dashboard = () => {
  // State to track which image is zoomed (store index or null if none)
  const [zoomedIndex, setZoomedIndex] = useState(null);

  // Handle zoom for a specific image
  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  // Handle unzoom (close zoom container)
  const handleUnzoom = () => {
    setZoomedIndex(null);
  };

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {pages.map((PageComponent, index) => (
        <div
          key={index}
          id={`Page${index}`}
          style={{ marginBottom: '20px', textAlign: 'center' }}
        >
          <Zoom
            isZoomed={zoomedIndex === index} // Control zoom state
            onZoom={() => handleZoom(index)} // Trigger zoom
            onUnzoom={handleUnzoom} // Trigger unzoom
            zoomScale={1.5} // Keep your zoom scale
          >
            <img
              src={PageComponent}
              loading="lazy"
              style={{
                width: index === 0 ? '600px' : '100%',
                margin: 'auto',
                maxWidth: index === 0 ? '600px' : 'none',
              }}
              alt={`Page ${index}`}
            />
          </Zoom>
          {/* Add a close button for each image */}
          {zoomedIndex === index && (
            <button
              onClick={handleUnzoom}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                background: '#ff4d4f',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close Zoom
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;