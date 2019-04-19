export default `import React from "react";
import { PullDownButton } from "react-cupertino";

const options = [
    {
      value: "react",
      label: "React"
    },
  
    {
      value: "vue",
      label: "Vue"
    },
  
    {
      value: "angular",
      label: "Angular"
    }
];

function Example() {
  return(
    <div>
        <PullDownButton options={options} />
    </div>
  );
}`;