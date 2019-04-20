import React from "react";
import { PushButton } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/pushbutton.js";

function PushButtonDocs() {
  return (
    <div className="article-content">
      <p>
        A push button represents a clickable button.
      </p>
      <h2>Example</h2>
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "150px"
      }}>
        <PushButton  color="green" size="small" title="Submit" />
        <PushButton  color="pink" title="Beautiful button" />
        <PushButton  size="large" title="Large button" />
      </div>
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
          <td>color</td>
          <td>
            string, should be one of: 'blue', 'grey', 'green', 'orange', 'pink',
            'purple', 'red', 'yellow'
          </td>
          <td>'blue'</td>
          <td>Background color of the button.</td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>
            function
          </td>
          <td>null</td>
          <td>This function will be called when the PushButton is clicked.</td>
        </tr>
        <tr>
          <td>style</td>
          <td>Object of shape: {"{ fontFamily: string, fontSize: string }"}</td>
          <td>-</td>
          <td>You can specify font-family and font-size properties in this prop.</td>
        </tr>
        <tr>
          <td>size</td>
          <td>string, it should be one of: 'small', 'medium', 'large'</td>
          <td>'small'</td>
          <td>Defines the size of the component.</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>""</td>
          <td>A text value of the label in the button.</td>
        </tr>
      </table>
    </div>
  );
}

export default PushButtonDocs;
