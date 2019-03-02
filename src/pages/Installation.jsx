import React from "react";
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CODE_EXAMPLE from '../code_examples/installation.js';
import "./Installation.css";

function Installation() {
  return (
    <div className="app-page">
      <article className="app-article">
        <h1>Getting started</h1>
        <div className="article-content">
          <p>Learn how to install React Cupertino to your project.</p>
          <h2>Installation</h2>
          <p>You can install React Cupertino as an npm package:</p>
          <SyntaxHighlighter language="jsx" style={okaidia}>{
            `npm install react-cupertino`
          }
          </SyntaxHighlighter>
          <h2>Basic Usage</h2>
          <p>
            In the following example, you can see how to import{" "}
            <code>PushButton</code> component and render it with title "Agree"
            and green background color.
          </p>
          <SyntaxHighlighter language="jsx" style={okaidia}>{CODE_EXAMPLE}</SyntaxHighlighter>
        </div>
      </article>
    </div>
  );
}

export default Installation;
