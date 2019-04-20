export default `import React from "react";
import { Notification } from "react-cupertino";

function Example() {
  return(
    <div>
        <Notification
            message="You have 1 new message!"
            position="bottom-left"
            timeout={10000}
        />
    </div>
  );
}`;