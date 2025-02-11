import React from 'react'
import styled from 'styled-components'
import Content from './Content';

function Projects() {
  return (
    <Section>
    <h1>Here's my Projects</h1>
    <ProjectSection>
      <Content 
        heading='TypingTest' 
        paragraph='A web based application to evaluate typing speed and accuracy.'  
        items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}
        image={
          '/public/Images/TypingTest/TypingTest_1.png'
        }
        backgroundImage="/public/Images/TypingTest/TypingTest_1.png'"
        />
      <Content 
        heading='Pet Store' 
        paragraph='An onlne platform for managing pet,pet products and their accessories.'  
        items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}
        image={
          '/public/Images/PetStore/PetStore_1.png'
        }
        />
    </ProjectSection>
    </Section>
  )
}

export default Projects

const Section = styled.div`
  width: 100%;
  padding: 30px 70px;
  
  h1{
    font-size: max(2vw, 24px);
    font-weight: 600;
  }

`;

const ProjectSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
    /* grid-template-columns: repeat(1, minmax(0, 1fr)); */
    margin-top: 30px;
    gap: 30px;
    row-gap: 50px;

    
`;