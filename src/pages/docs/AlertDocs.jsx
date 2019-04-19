import React, { useState } from "react";
import { Alert, PushButton } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/alert.js";

function AlertDocs() {
  const [dialogVisibility, setDialogVisibility] = useState(false);

  return (
    <div className="article-content">
      <p>An alert component is a kind of dialog window, which is usually used to show some important information.</p>
      <h2>Example</h2>
      <PushButton title="Open Dialog" click={() => setDialogVisibility(true)} />
      <Alert
        show={dialogVisibility}
        onClose={() => setDialogVisibility(false)}
        title="Success!"
      >
        Click OK to close.
      </Alert>
      <h2>Code</h2>
      <p>This code uses a new Hooks API (available in React 16.8), but you are not required to use Hooks.</p>
      <SyntaxHighlighter
        language="jsx"
        style={xonokai}
        customStyle={{ width: "90%", zIndex: "-1" }}
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
          <td>children</td>
          <td>node</td>
          <td>-</td>
          <td>It contains the content of your alert. It is also required. You specify this prop inside the Alert tag body. In the example above, "Click OK to close." is children prop.</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>
            function
          </td>
          <td>null</td>
          <td>This function is called, when user clicks "OK" button.</td>
        </tr>
        <tr>
          <td>show</td>
          <td>
            bool
          </td>
          <td>false</td>
          <td>If it is true, the component is visible. Otherwise, it is not visible.</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>""</td>
          <td>The title of the alert.</td>
        </tr>
      </table>
    </div>
  );
}

export default AlertDocs;
