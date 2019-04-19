import React from "react";
import { Textbox } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/textbox.js";

function TextboxDocs() {
  return (
    <div className="article-content">
      <p>A textbox is an input field that allows users to type text.</p>
      <h2>Example</h2>
      <div>
        <Textbox label="Login" />
        <Textbox label="Password" type="password" />
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
          <td>type</td>
          <td>string, it should be one of: 'email', 'text', 'password', 'number', 'search'</td>
          <td>'text'</td>
          <td>This prop defines the type of the input field.</td>
        </tr>
        <tr>
          <td>label</td>
          <td>string</td>
          <td>""</td>
          <td>Text value of the title label inside the textbox.</td>
        </tr>
        <tr>
          <td>invalid</td>
          <td>bool</td>
          <td>false</td>
          <td>This prop is responsible for the valid/invalid state of the component. If it is set to true, the Textbox will have invalid styles.</td>
        </tr>
      </table>
    </div>
  );
}

export default TextboxDocs;
