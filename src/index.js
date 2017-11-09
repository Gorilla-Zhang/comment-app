import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        ppp
    </div>
    )
  }

}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
