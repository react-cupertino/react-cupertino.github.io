import React from "react";
import { RadioButton } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/radiobutton.js";

function RadioButtonDocs() {
  return (
    <div className="article-content">
      <p>A checkbox allows users to make a choice between two states.</p>
      <h2>Example</h2>
      <div>
        <RadioButton id="1" title="Red" color="red" checked />
        <RadioButton id="2" title="Orange" color="orange" />
        <RadioButton id="3" title="Green" color="green" />
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
          <td>color</td>
          <td>
            string, should be one of: 'blue', 'grey', 'green', 'orange', 'pink',
            'purple', 'red', 'yellow'
          </td>
          <td>'blue'</td>
          <td>Color of the checkbox when it is checked.</td>
        </tr>
        <tr>
          <td>id</td>
          <td>
            string, required
          </td>
          <td>-</td>
          <td>You should specify a unique id value for each RadioButton component.</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td>null</td>
          <td>This function is called, when the radio input was changed.</td>
        </tr>
        <tr>
          <td>size</td>
          <td>string, it should be one of: 'small', 'medium', 'large'</td>
          <td>'small'</td>
          <td>Defines the size of the component.</td>
        </tr>
        <tr>
          <td>theme</td>
          <td>string, it should be one of: 'light', 'dark'</td>
          <td>'dark'</td>
          <td>It changes the color of the title depending on the value. If it is 'light' mode, the title will have a white text color. Otherwise, the text color will be black.</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>""</td>
          <td>The label description of the RadioButton.</td>
        </tr>
      </table>
    </div>
  );
}

export default RadioButtonDocs;
