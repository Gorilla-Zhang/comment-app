import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CommentApp from './CommentApp'
import registerServiceWorker from './registerServiceWorker'


export default class Root extends React.Component {
  render() {
    return (
      <div>
        <CommentApp />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();



