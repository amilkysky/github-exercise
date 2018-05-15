import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueTable from './IssueTable';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [
        {
          title: 'Issue 1',
          issueNum: 1,
          status: 'open',
          author: 'Me',
          labels: ['Urgent', 'Important', 'Bug'],
          milestone: 'Complete',
          assignees: ['Bob', 'Rob', 'Frank'],
          timeStamp: 'Yesterday',
        },
        {
          title: 'Issue 2',
          issueNum: 2,
          status: 'closed',
          author: 'You',
          labels: ['Not Urgent', 'Unimportant', 'Plant'],
          milestone: 'Incomplete',
          assignees: ['Susie', 'Barbara', 'Mildred'],
          timeStamp: 'A Couple Days Ago',
        }
      ],
      owner: 'amilkysky',
      repo: 'github-exercise',
      filterMode: 'authors',
    };
    this.filterModeUpdate = this.filterModeUpdate.bind(this)
  }

  filterModeUpdate(mode) {
    this.setState({
      filterMode: mode
    })
  }

  githubApiCall() {
    axios.get(`/https://github.com/${this.state.owner}/${this.state.repo}/issues`)
      .then((daphsIssues) => {
        this.setState({
          issues: daphsIssues
        });
      })
      .catch(() => {
        console.log('API Error');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Github Issues</h1>
        </header>
        <IssueTable issues={this.state.issues} filterMode={this.state.filterMode} filterModeUpdate={this.filterModeUpdate}/>
      </div>
    );
  }
}

export default App;
