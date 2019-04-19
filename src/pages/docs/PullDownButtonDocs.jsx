import React from "react";
import { PullDownButton } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/pulldownbutton.js";

const options = [
  {
    value: "react",
    label: "React"
  },

  {
    value: "vue",
    label: "Vue"
  },

  {
    value: "angular",
    label: "Angular"
  }
];

function PullDownButtonDocs() {
  return (
    <div className="article-content">
      <p>
        A pull down button lets users select an option from a drop-down menu.
      </p>
      <h2>Example</h2>
      <PullDownButton options={options} />
      <h2>Code</h2>
      <SyntaxHighlighter
        language="jsx"
        style={xonokai}
        customStyle={{ width: "90%" }}
      >
        {CODE_EXAMPLE}
      </SyntaxHighlighter>
      <h2>API</h2>
      <table style={{ textAlign: "left", width: "95%" }}>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td>null</td>
          <td>This function is called, when the input value was changed.</td>
        </tr>
        <tr>
          <td>options</td>
          <td>array of {"{value: string, label: string}"}, required</td>
          <td>-</td>
          <td>
            This prop provides a list of options to display in the drop-down
            menu.
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>string, it should be one of: 'small', 'medium', 'large'</td>
          <td>'small'</td>
          <td>Defines the size of the component.</td>
        </tr>
      </table>
    </div>
  );
}

export default PullDownButtonDocs;
