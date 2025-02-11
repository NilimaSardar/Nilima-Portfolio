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
        images={[
          '/public/Images/TypingTest/TypingTest_1.png',
          '/public/Images/TypingTest/TypingTest_2.png',
          '/public/Images/TypingTest/TypingTest_3.png',
          '/public/Images/TypingTest/TypingTest_4.png',
          '/public/Images/TypingTest/TypingTest_5.png'
        ]}
        backgroundImage="/public/Images/TypingTest/TypingTest_1.png'"
        />
      <Content 
        heading='Pet Store' 
        paragraph='An onlne platform for managing pet,pet products and their accessories.'  
        items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}
        images={[
          '/public/Images/PetStore/PetStore_1.png',
          '/public/Images/PetStore/PetStore_2.png',
          '/public/Images/PetStore/PetStore_3.png',
          '/public/Images/PetStore/PetStore_4.png'
        ]}
        />
      <Content 
        heading='Pet Store' 
        paragraph='An onlne platform for managing pet,pet products and their accessories.'  
        items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}
        images={[
          '/public/Images/PetStore/PetStore_1.png',
          '/public/Images/PetStore/PetStore_2.png',
          '/public/Images/PetStore/PetStore_3.png',
          '/public/Images/PetStore/PetStore_4.png'
        ]}
        />
        <Content 
        heading='TypingTest' 
        paragraph='A web based application to evaluate typing speed and accuracy.'  
        items ={ ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL']}
        images={[
          '/public/Images/TypingTest/TypingTest_1.png',
          '/public/Images/TypingTest/TypingTest_2.png',
          '/public/Images/TypingTest/TypingTest_3.png',
          '/public/Images/TypingTest/TypingTest_4.png',
          '/public/Images/TypingTest/TypingTest_5.png'
        ]}
        backgroundImage="/public/Images/TypingTest/TypingTest_1.png'"
        />
    </ProjectSection>
    </Section>
  )
}

export default Projects

const Section = styled.div`
  width: 100%;
  padding: 30px 70px;

`;

const ProjectSection = styled.div`
  /* height: calc(100vh - 64.4px); */
  display: grid;
  grid-template-columns: 1fr; /* 2 columns, one larger (3fr) */
  grid-template-rows: auto 1fr; /* 3 rows (auto for header/footer, 1fr for main content) */
  gap: 20px;

    
`;