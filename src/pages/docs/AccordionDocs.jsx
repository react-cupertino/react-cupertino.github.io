import React from "react";
import { Accordion } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/accordion.js";
import ReactLogo from "../../assets/react-logo.png";
import AngularLogo from "../../assets/angular-logo.png";
import VueLogo from "../../assets/vue-logo.png";

const items = [
  {
    id: 1,
    title: "React",
    icon: ReactLogo,
    description: "React is a JavaScript library for building user interfaces"
  },

  {
    id: 2,
    title: "Angular",
    icon: AngularLogo,
    description:
      "Angular is a TypeScript-based open-source web application framework."
  },

  {
    id: 3,
    title: "Vue",
    icon: VueLogo,
    description:
      "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces."
  }
];

function AccordionDocs() {
  return (
    <div className="article-content">
      <p>An accordion lets users hide and show HTML content.</p>
      <h2>Example</h2>
      <Accordion items={items} />
      <SyntaxHighlighter
        language="jsx"
        style={okaidia}
        customStyle={{ width: "90%" }}
      >
        {CODE_EXAMPLE}
      </SyntaxHighlighter>
      <h2>API</h2>
      <p>
        <code>Accordion</code> takes a single prop <code>items</code>, which is
        an array of JSON objects. Each item inside <code>items</code> should
        contain:
        <ul>
          <li>id (number, required)</li>
          <li>title (string, required)</li>
          <li>icon (a path to the image, <b>not</b> required)</li>
          <li>description (string, required)</li>
        </ul>
      </p>
    </div>
  );
}

export default AccordionDocs;
