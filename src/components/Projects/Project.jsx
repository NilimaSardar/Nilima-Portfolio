import React from 'react'
import styled from 'styled-components'
import Content from './Content';

function Projects() {
  return (
    <Section>
    <h1>&lt;Projects/&gt;</h1>
    <ProjectSection>
      <Content 
        heading='TypingTest' 
        paragraph='A web based application to evaluate typing speed and accuracy.'  
        items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}
        image={
          '/Images/TypingTest/TypingTest_1.png'
        }
        />
      <Content 
        heading='Pet Store' 
        paragraph='An onlne platform for managing pet,pet products and their accessories.'  
        items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}
        image={
          '/Images/PetStore/PetStore_1.png'
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const ProjectSection = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-content: center;
    align-items: center;
    place-items: cente; 
    margin-top: 20px;
    gap: 30px;
    row-gap: 30px;
`;