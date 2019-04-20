import React from "react";
import { Switch } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/switch.js";

function SwitchDocs() {
  return (
    <div className="article-content">
      <p>A switch allows users to make a choice between two states.</p>
      <h2>Example</h2>
      <div>
        <Switch colorChecked="red" checked />
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
      <table style={{textAlign:"left", width: "95%"}}>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>checked</td>
          <td>bool</td>
          <td>false</td>
          <td>Switches the state of the component depending on value.</td>
        </tr>
        <tr>
          <td>colorChecked</td>
          <td>
            string, should be one of: 'blue', 'grey', 'green', 'orange', 'pink',
            'purple', 'red', 'yellow'
          </td>
          <td>'green'</td>
          <td>Color of the switch when it is checked.</td>
        </tr>
        <tr>
          <td>colorUnchecked</td>
          <td>
            string, it should be one of: 'blue', 'grey', 'green', 'orange', 'pink',
            'purple', 'red', 'yellow'
          </td>
          <td>'grey'</td>
          <td>Color of the switch when it is unchecked.</td>
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

export default SwitchDocs;
