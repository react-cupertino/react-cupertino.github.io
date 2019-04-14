export default `import React from "react";
import { Accordion } from "react-cupertino";
import ReactLogo from '../../assets/react-logo.png';
import AngularLogo from '../../assets/angular-logo.png';
import VueLogo from '../../assets/vue-logo.png';

const items = [
    {
      id: 1,
      title: 'React',
      icon: ReactLogo,
      description: 'React is a JavaScript library for building user interfaces'
    },
  
    {
      id: 2,
      title: 'Angular',
      icon: AngularLogo,
      description: 'Angular is a TypeScript-based open-source web application framework.'
    },
  
    {
      id: 3,
      title: 'Vue',
      icon: VueLogo,
      description: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.'
    }
];

function Example() {
  return <Accordion items={items} />;
}`;