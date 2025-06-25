import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Ensure CSS is imported
import Page00 from '../assets/final/0.jpg';
import Page01 from '../assets/final/1.jpg';
import Page02 from '../assets/final/2.jpg';
import Page03 from '../assets/final/3.jpg';
import Page04 from '../assets/final/4.jpg';
import Page05 from '../assets/final/5.jpg';
import Page06 from '../assets/final/6.jpg';
import Page07 from '../assets/final/7.jpg';
import Page08 from '../assets/final/8.jpg';
import Page09 from '../assets/final/9.jpg';
import Page10 from '../assets/final/10.jpg';
import Page11 from '../assets/final/11.jpg';
import Page12 from '../assets/final/12.jpg';
import Page13 from '../assets/final/13.jpg';
import Page14 from '../assets/final/14.jpg';
import Page15 from '../assets/final/15.jpg';
import Page16 from '../assets/final/16.jpg';
import Page17 from '../assets/final/17.jpg';
import Page18 from '../assets/final/18.jpg';
import Page19 from '../assets/final/19.jpg';
import Page20 from '../assets/final/20.jpg';
import Page21 from '../assets/final/21.jpg';
import Page22 from '../assets/final/22.jpg';
import Page23 from '../assets/final/23.jpg';
import Page24 from '../assets/final/24.jpg';
import Page25 from '../assets/final/25.jpg';
import Page26 from '../assets/final/26.jpg';
import Page27 from '../assets/final/27.jpg';
import Page28 from '../assets/final/28.jpg';
import Page29 from '../assets/final/29.jpg';
import Page30 from '../assets/final/30.jpg';
import Page31 from '../assets/final/31.jpg';
import Page32 from '../assets/final/32.jpg';
import Page33 from '../assets/final/33.jpg';
import Page34 from '../assets/final/34.jpg';
import Page35 from '../assets/final/35.jpg';
import Page36 from '../assets/final/36.jpg';
import Page37 from '../assets/final/37.jpg';
import Page38 from '../assets/final/38.jpg';
import Page39 from '../assets/final/39.jpg';
import Page40 from '../assets/final/40.jpg';
import Page41 from '../assets/final/41.jpg';
import Page42 from '../assets/final/42.jpg';
import Page43 from '../assets/final/43.jpg';
import Page44 from '../assets/final/44.jpg';
import Page45 from '../assets/final/45.jpg';

import Page46 from '../assets/final/46.jpg';
import Page47 from '../assets/final/47.jpg';
import Page48 from '../assets/final/48.jpg';
import Page49 from '../assets/final/49.jpg';
import Page50 from '../assets/final/50.jpg';
import Page51 from '../assets/final/51.jpg';
import Page52 from '../assets/final/52.jpg';
import Page53 from '../assets/final/53.jpg';
import Page54 from '../assets/final/54.jpg';
import Page55 from '../assets/final/55.jpg';
import Page56 from '../assets/final/56.jpg';
import Page57 from '../assets/final/57.jpg';
import Page58 from '../assets/final/58.jpg';
import Page59 from '../assets/final/59.jpg';
import Page60 from '../assets/final/60.jpg';
import Page61 from '../assets/final/61.jpg';
import Page62 from '../assets/final/62.jpg';
import Page63 from '../assets/final/63.jpg';
import Page64 from '../assets/final/64.jpg';
import Page65 from '../assets/final/65.jpg';
import Page66 from '../assets/final/66.jpg';
import Page67 from '../assets/final/67.jpg';
import Page68 from '../assets/final/68.jpg';
import Page69 from '../assets/final/69.jpg';
import Page70 from '../assets/final/70.jpg';
import Page71 from '../assets/final/71.jpg';
import Page72 from '../assets/final/72.jpg';
import Page73 from '../assets/final/73.jpg';
import Page74 from '../assets/final/74.jpg';
import Page75 from '../assets/final/75.jpg';
import Page76 from '../assets/final/76.jpg';
import Page77 from '../assets/final/77.jpg';
import Page78 from '../assets/final/78.jpg';
import Page79 from '../assets/final/79.jpg';
import Page80 from '../assets/final/80.jpg';
import Page81 from '../assets/final/81.jpg';
import Page82 from '../assets/final/82.jpg';
import Page83 from '../assets/final/83.jpg';
import Page84 from '../assets/final/84.jpg';
import Page85 from '../assets/final/85.jpg';
import Page86 from '../assets/final/86.jpg';
import Page87 from '../assets/final/87.jpg';
import Page88 from '../assets/final/88.jpg';
import Page89 from '../assets/final/89.jpg';

const pages = [
  Page00, Page01, Page02, Page03, Page04, Page05, Page06, Page07, Page08, Page09,
  Page10, Page11, Page12, Page13, Page14, Page15, Page16, Page17, Page18, Page19,
  Page20, Page21, Page22, Page23, Page24, Page25, Page26, Page27, Page28, Page29,
  Page30, Page31, Page32, Page33, Page34, Page35, Page36, Page37, Page38, Page39,
  Page40, Page41, Page42, Page43, Page44, Page45,
  Page46, Page47, Page48, Page49, Page50, Page51, Page52, Page53, Page54, Page55,
  Page56, Page57, Page58, Page59, Page60, Page61, Page62, Page63, Page64, Page65,
  Page66, Page67, Page68, Page69, Page70, Page71, Page72, Page73, Page74, Page75,
  Page76, Page77, Page78, Page79, Page80, Page81, Page82, Page83, Page84,Page85,Page86, Page87, Page88, Page89
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