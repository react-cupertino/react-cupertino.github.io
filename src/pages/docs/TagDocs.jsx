import React, { useState } from "react";
import { Tag } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/tag.js";
import icon from "../../assets/react-logo.png";

function TagDocs() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="article-content">
      <p>A switch allows users to make a choice between two states.</p>
      <h2>Example</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "325px"
        }}
      >
        <Tag
          title="React"
          checked={checked}
          onClick={() => setChecked(!checked)}
          icon={icon}
        />
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
      <p>
        This code uses a new Hooks API (available in React 16.8), but you are
        not required to use Hooks.
      </p>
      <table style={{ textAlign: "left", width: "95%" }}>
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
          <td>icon</td>
          <td>string</td>
          <td>default checkmark icon</td>
          <td>Provides a path to a custom icon image.</td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>function</td>
          <td>null</td>
          <td>This function is called, when the tag was clicked.</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>""</td>
          <td>The label description of the tag.</td>
        </tr>
      </table>
    </div>
  );
}

export default TagDocs;
