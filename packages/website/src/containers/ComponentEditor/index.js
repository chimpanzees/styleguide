import React from 'react';
import { Link } from 'react-router';
import Playground from 'component-playground';
import './index.styl';

const ComponentEditor = ({ component, title, name, examples, url, params }) => {
  let selectedExample = examples.find(example => example.url === params.example);
  if (!selectedExample) selectedExample = examples[0];

  return (
    <div className="component-editor">
      <div className="component-editor-content">

        <header className="component-editor-header">
          <h2 className="component-editor-title">
            Component editor > {title} > {selectedExample.title}
          </h2>
          <Link to={`${url}`}>
            <button className="close-btn">
              <i className="icon-budicon-471" />
            </button>
          </Link>
        </header>

        <Playground
          codeText={selectedExample.code}
          scope={{ React, [name]: component }}
          theme="auth0"
        />
      </div>
    </div>
  );
};

export default ComponentEditor;
