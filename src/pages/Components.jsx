import React from "react";
import Sidebar from '../components/Sidebar/Sidebar';
import AccordionDocs from './docs/AccordionDocs';
import "./Components.css";

// removes "-" and capitalizes each word
function formatTitle(title) {
  title = title.replace(/-/g, ' ');
  title = title.split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  
  return title;
}

function getDocFor(componentName) {
  console.log(componentName);
  switch(componentName) {
    case 'accordion':
      return <AccordionDocs />;
    default:
      return 'Documentation for this component is not available at the moment. Sorry 🙁';
  }
}

function Components(props) {
  let componentName = props.match.params.componentName;
  let doc = getDocFor(componentName);
  componentName = formatTitle(componentName);

  return (
    <div className="app-page">
      <article className="app-article">
        <h1>{componentName}</h1>
        <div className="article-content">
          {doc}
        </div>
      </article>
      <Sidebar />
    </div>
  );
}

export default Components;
