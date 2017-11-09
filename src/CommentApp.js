import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends React.Component {
  handleSubmitComment(comment) {
    console.log(comment)
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList />
      </div>
    )
  }
}