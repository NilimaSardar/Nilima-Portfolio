import React from 'react';
import styled from 'styled-components';
import Button from '../Home/Button';

function Content({ heading, paragraph, items = [], image }) {
  return (
    <ContentSection style={{ backgroundImage: `url(${image})` }}>
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
  height: 250px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  margin: 30px 0;

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
    text-align: center;
    flex-direction: column;
    border-radius: 20px;
    gap: 8px;
    opacity: 0;
    transition: 0.6s;
  }

  .content h3 {
    /* font-size: 36px; */
    font-size: max(1vw, 28px);
  }

  .content p {
    /* font-size: 18px; */
    font-size: max(1vw, 14px);
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
    font-size: max(1vw, 12px);
    width: 100%;
    overflow: hidden;
  }

  .content .tool-used ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    margin: 0 auto;
    max-width: 100%;
  }

  .content .tool-used ul li {
    flex-shrink: 0;
    background-color: #bbb7b7;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 15px;
    text-align: center;
    min-width: 60px; /* Prevents being too small */
    max-width: 150px; /* Prevents being too large */
    word-wrap: break-word;
    font-size: max(1vw, 14px);
  }

  .content .button-used {
    display: flex;
    gap: 10px;
    /* margin-top: 5px; */
  }
`;
