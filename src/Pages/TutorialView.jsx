import React, { useState } from 'react';
import './TutorialView.scss';
import Content from './Content';

const TutorialComponent = () => {
  const [content, setContent] = useState('Select a topic from the list to view details.');

  const sections = [
    { title: 'HTML Introduction', content: <Content/> },
    { title: 'HTML Working', content: <Content/> },
    { title: 'HTML Installation', content: <Content/>},
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Page Structure', content: <Content/> },
    { title: 'HTML Tages', content: <Content/> },
    { title: 'HTML Elements', content: <Content/> },
    { title: 'HTML Attributes', content: <Content/> },
    { title: 'HTML ', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
    { title: 'HTML Execution', content: <Content/> },
  
    // Add more sections as needed
  ];

  return (
    <div className="tutorial-container">
      <div className="sidebar">
        <h3>Introduction</h3>
        <ul>
          {sections.map((section, index) => (
            <li key={index} onClick={() => setContent(section.content)}>
              {section.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2></h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TutorialComponent;