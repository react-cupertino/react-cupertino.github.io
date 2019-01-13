import React from "react";
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
          <pre className="codeblock">npm install react-cupertino</pre>
          <h2>Basic Usage</h2>
          <p>
            In the following example, you can see how to import{" "}
            <code>PushButton</code> component and render it with title "Agree"
            and green background color.
          </p>
          <pre className="codeblock">
            <span className="code-line">
              <span className="token keyword">import</span>
              {" React "}
              <span className="token keyword">from</span>{" "}
              <span className="token string">'react'</span>;
            </span>
            <span className="code-line">
              <span className="token keyword">import</span>
              {" ReactDOM "}
              <span className="token keyword">from</span>{" "}
              <span className="token string">'react-dom'</span>;
            </span>
            <span className="code-line">
              <span className="token keyword">import</span>{" "}
              <span className="token punctuation">{"{"}</span> PushButton{" "}
              <span className="token punctuation">{"}"}</span>{" "}
              <span className="token keyword">from</span>{" "}
              <span className="token string">'react-cupertino'</span>;
            </span>
            <br />
            <span className="code-line">
              {"ReactDOM."}
              <span className="token func">render</span>
              <span className="token punctuation">(</span>
            </span>
            <span className="code-line">
              <span className="token punctuation">{"  <"}</span>
              <span className="token element">PushButton</span>{" "}
              <span className="token prop">title</span>=
              <span className="token string">"Agree"</span>{" "}
              <span className="token prop">color</span>=
              <span className="token string">"green"</span>
              <span className="token punctuation">{" />"}</span>,
            </span>
            <span className="code-line">
              {"  "}document.
              <span className="token func">getElementById</span>(
              <span className="token string">'app'</span>)
            </span>
            <span className="code-line">{");"}</span>
          </pre>
        </div>
      </article>
    </div>
  );
}

export default Installation;
