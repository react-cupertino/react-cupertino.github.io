import React from "react";
import Sidebar from '../components/Sidebar/Sidebar';
import "./Components.css";

// removes "-" and capitalizes each word
function formatTitle(title){
  title = title.replace(/-/g, ' ');
  title = title.split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  
  return title;
}

function Components(props) {
  let componentName = props.match.params.componentName;
  componentName = formatTitle(componentName);
  return (
    <div className="app-page">
      <article className="app-article">
        <h1>{componentName}</h1>
        <div className="article-content">
          <p>Documentation goes here...</p>
        </div>
      </article>
      <Sidebar />
    </div>
  );
}

export default Components;
