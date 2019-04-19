export default `import React, { useState } from "react";
import { Tag } from "react-cupertino";
import icon from "../../assets/react-logo.png";

function Example() {
  const [checked, setChecked] = useState(false);

  return(
    <div>
      <Tag
        title="React"
        checked={checked}
        onClick={() => setChecked(!checked)}
        icon={icon}
      />
    </div>
  );
}`;