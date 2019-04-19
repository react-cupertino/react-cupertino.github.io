export default `import React, { useState } from "react";
import { Alert, PushButton } from "react-cupertino";

function Example() {
  const [dialogVisibility, setDialogVisibility] = useState(false);

  return (
    <div>
      <PushButton title="Open Dialog" click={() => setDialogVisibility(true)} />
      <Alert
        show={dialogVisibility}
        onClose={() => setDialogVisibility(false)}
        title="Success!"
      >
        Click OK to close.
      </Alert>
    </div>
}`;