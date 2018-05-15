import React, { Component } from 'react';

class IssueEntry extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.issue.title}</h2>
        <span>{this.props.issue.issueNum}</span>
        <span>{this.props.issue.status}</span>
        <span>{this.props.issue.author}</span>
        {this.props.issue.labels.map((label, i) => <span key={i}>{label}</span>)}
        <span>{this.props.issue.milestone}</span>
        {this.props.issue.assignees.map((assignee, i) => <span key={i}>{assignee}</span>)}
        <span>{this.props.issue.timeStamp}</span>
      </div>
    );
  }
}

export default IssueEntry;
