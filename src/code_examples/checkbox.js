export default `import React from "react";
import { Checkbox } from "react-cupertino";

function Example() {
  return(
    <div>
      <Checkbox checked />
      <Checkbox size="medium" colorUnchecked="grey" colorChecked="pink" />
      <Checkbox size="large" colorChecked="green" />
    </div>
  );
}`;