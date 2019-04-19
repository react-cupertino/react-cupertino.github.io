import React from "react";
import { Slider } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/slider.js";

function SliderDocs() {
  return (
    <div className="article-content">
      <p>A switch allows users to make a choice between two states.</p>
      <h2>Example</h2>
      <div style={{ height: "30px", width: "200px" }}>
        <Slider backgroundColor="orange" progressColor="green" />
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
          <td>backgroundColor</td>
          <td>
            string, should be one of: 'blue', 'grey', 'green', 'orange', 'pink',
            'purple', 'red', 'yellow'
          </td>
          <td>'grey'</td>
          <td>Color of the background of the slider.</td>
        </tr>
        <tr>
          <td>progressColor</td>
          <td>
            string, should be one of: 'blue', 'grey', 'green', 'orange', 'pink',
            'purple', 'red', 'yellow'
          </td>
          <td>'blue'</td>
          <td>
            Color of the progress part of the slider (
            <b>only available on Firefox at the moment</b>).
          </td>
        </tr>
        <tr>
          <td>minValue</td>
          <td>number</td>
          <td>0</td>
          <td>Minimal value of the slider input.</td>
        </tr>
        <tr>
          <td>maxValue</td>
          <td>number</td>
          <td>100</td>
          <td>Maximal value of the slider input.</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td>null</td>
          <td>This function is called, when the radio input was changed.</td>
        </tr>
        <tr>
          <td>step</td>
          <td>number</td>
          <td>1</td>
          <td>The granularity that the value must change to.</td>
        </tr>
      </table>
    </div>
  );
}

export default SliderDocs;
