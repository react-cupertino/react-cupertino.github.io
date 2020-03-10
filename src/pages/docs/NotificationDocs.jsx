import React from "react";
import { Notification } from "react-cupertino";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/notification.js";

function NotificationDocs() {
  return (
    <div className="article-content">
      <p>A notification can display a brief message.</p>
      <h2>Example</h2>
      <p>A notification was displayed in the bottom left corner.</p>
      <div>
        <Notification
          message="You have 1 new message!"
          position="bottom-left"
          timeout={10000}
        />
      </div>
      <h2>Code</h2>
      <SyntaxHighlighter
        language="jsx"
        style={xonokai}
        customStyle={{ width: "90%", zIndex: "-1" }}
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
          <td>dismissLabel</td>
          <td>string</td>
          <td>'DISMISS'</td>
          <td>A text value of the dismiss label in the notification.</td>
        </tr>
        <tr>
          <td>dismissLabelColor</td>
          <td>
            string, should be one of: 'blue', 'grey', 'green', 'orange', 'pink',
            'purple', 'red', 'yellow'
          </td>
          <td>'red'</td>
          <td>Color of the dismiss label.</td>
        </tr>
        <tr>
          <td>handleClick</td>
          <td>function</td>
          <td>null</td>
          <td>
            This function will be called when the notification's message is
            clicked.
          </td>
        </tr>
        <tr>
          <td>message</td>
          <td>string</td>
          <td>'Notification!'</td>
          <td>The message inside the notification.</td>
        </tr>
        <tr>
          <td>position</td>
          <td>
            string, should be one of: 'bottom-left', 'bottom-right', 'top-left',
            'top-right'
          </td>
          <td>'bottom-left'</td>
          <td>This props defines the position of the notification.</td>
        </tr>
        <tr>
          <td>timeout</td>
          <td>number</td>
          <td>5000</td>
          <td>
            Number of milliseconds which is the time, when notification is
            visible.
          </td>
        </tr>
        <tr>
          <td>visible</td>
          <td>bool</td>
          <td>true</td>
          <td>
            If this prop is true, a notification will be visible. If it is
            false, the notification will not be visible.
          </td>
        </tr>
      </table>
    </div>
  );
}

export default NotificationDocs;
