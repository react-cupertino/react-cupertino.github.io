import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AccordionDocs from "./docs/AccordionDocs";
import AlertDocs from './docs/AlertDocs';
import CheckboxDocs from "./docs/CheckboxDocs";
import PullDownButtonDocs from './docs/PullDownButtonDocs';
import RadioButtonDocs from './docs/RadioButtonDocs';
import SliderDocs from './docs/SliderDocs';
import SwitchDocs from './docs/SwitchDocs';
import "./Components.css";

// removes "-" and capitalizes each word
function formatTitle(title) {
  title = title.replace(/-/g, " ");
  title = title
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  return title;
}

function getDocFor(componentName) {
  switch (componentName) {
    case 'accordion':
      return <AccordionDocs />;
    case 'alert':
      return <AlertDocs />
    case 'checkbox':
      return <CheckboxDocs />
    case 'pull-down-button':
      return <PullDownButtonDocs />
    case 'radio-button':
      return <RadioButtonDocs />
    case 'slider':
      return <SliderDocs />
    case 'switch':
      return <SwitchDocs />
    default:
      return (
        <p>
          Documentation for this component is not available at the moment. Sorry{" "}
          <span role="img" aria-label="Sad smiley">
            🙁
          </span>
        </p>
      );
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
        <div className="article-content">{doc}</div>
      </article>
      <Sidebar />
    </div>
  );
}

export default Components;
