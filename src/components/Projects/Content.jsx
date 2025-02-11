import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Home/Button';

function Content({ heading, paragraph, items = [], images = [] }) {
  const [currentImage, setCurrentImage] = useState(images[0]); // Start with the first image
  const [imageIndex, setImageIndex] = useState(0);

  // Cycle through the images using an interval
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to start
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval); // Clear interval on unmount
    }
  }, [images]);

  // Update the current image when the index changes
  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex, images]);

  return (
    <ContentSection style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="content">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <div className="tool-used">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="button-used">
          <Button text="VIEW LIVE" color="color" />
          <Button text="GITHUB" color="color" />
        </div>
      </div>
    </ContentSection>
  );
}

export default Content;

const ContentSection = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  margin: 30px 0;
  transition: background-image 1s ease; /* Smooth transition between images */

  .content {
    padding: 10px;
    width: 100%;
    height: 100%;
    white-space: wrap;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.697);
    color: #bbb7b7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    gap: 10px;
    opacity: 0;
    transition: 0.6s;
  }

  .content h3 {
    font-size: 36px;
  }

  .content p {
    font-size: 18px;
  }

  .content:hover {
    opacity: 1;
  }

  .content > * {
    transform: translateY(25px);
    transition: transform 0.6s;
  }

  .content:hover > * {
    transform: translate(0px);
  }

  .content .tool-used{
    white-space: wrap;

  }
  .content .tool-used ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    gap: 10px;
  }

  .content .tool-used ul li {
    flex-shrink: 1;
    background-color: #bbb7b7;
    color: #ffffff;
    padding: 5px;
    border-radius: 15px;
  }

  .content .button-used {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }
`;
