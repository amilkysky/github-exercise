import React, { Component } from 'react';
import IssueEntry from './IssueEntry';
import Author from './Author';
import Labels from './Labels';
import Milestones from './Milestones';
import Assignee from './Assignee';
import Sort from './Sort';

class IssueTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.renderOpenFilter = this.renderOpenFilter.bind(this);
    this.renderClosedFilter = this.renderClosedFilter.bind(this);
    this.renderAuthorsFilter = this.renderAuthorsFilter.bind(this);
    this.renderLabelsFilter = this.renderLabelsFilter.bind(this);
    this.renderMilestonesFilter = this.renderMilestonesFilter.bind(this);
    this.renderAssigneesFilter = this.renderAssigneesFilter.bind(this);
    this.renderSortFilter = this.renderSortFilter.bind(this);
  }

  handleUserInputChange(event) {
    console.log('userinput event chek ', event.target.value)
    this.setState({
      userInput: event.target.value
    })
  }

  // this method is called in the render method below
  // if filterMode is set to authors it will render someting

  renderOpenFilter() {
    if(this.props.filterMode === 'open') {
      return (
        <div>
          <p>Open</p>
        </div>
      );
    } else {
      return null
    }
  }

  renderClosedFilter() {
    if(this.props.filterMode === 'closed') {
      return (
        <div>
          <p>Closed</p>
        </div>
      );
    } else {
      return null
    }
  }

  renderAuthorsFilter() {
    if(this.props.filterMode === 'authors') {
      return (
        <div>
          <p>Authors</p>
          <textarea value={this.state.userInput} onChange={this.handleUserInputChange}></textarea>
        </div>
      );
    } else {
      return null
    }
  }


  // this method is called in the render method below
  // if filterMode is set to labels it will render someting
  renderLabelsFilter() {
    if(this.props.filterMode === 'labels') {
      return (
        <div>
          <p>Labels</p>
          <textarea value={this.state.userInput} onChange={this.handleUserInputChange}></textarea>
        </div>
      );
    } else {
      return null
    }
  }

  // this method is called in the render method below
  // if filterMode is set to milestones it will render someting
  renderMilestonesFilter() {
    if(this.props.filterMode === 'milestones') {
      return (
        <div>
          <p>Milestones</p>
          <textarea value={this.state.userInput} onChange={this.handleUserInputChange}></textarea>
        </div>
      );
    } else {
      return null
    }
  }

  // this method is called in the render method below
  // if filterMode is set to assignees it will render someting
  renderAssigneesFilter() {
    if(this.props.filterMode === 'assignees') {
      return (
        <div>
          <p>Assignees</p>
          <textarea value={this.state.userInput} onChange={this.handleUserInputChange}></textarea>
        </div>
      );
    } else {
      return null
    }
  }

  // this method is called in the render method below
  // if filterMode is set to sort it will render someting
  renderSortFilter() {
    if (this.props.filterMode === 'sort') {
      return (
        <div>
          <p>Sort</p>
          <textarea value={this.state.userInput} onChange={this.handleUserInputChange}></textarea>
        </div>
      );
    } else {
      return null
    }
  }

  render() {

    return (
      <div className="IssueTable">
        <button onClick={() => this.props.filterModeUpdate('open')} className="open">Open</button>
        <button onClick={() => this.props.filterModeUpdate('closed')} className="closed">Closed</button>
        <button onClick={() => this.props.filterModeUpdate('authors')} className="authors">Authors</button>
        <button onClick={() => this.props.filterModeUpdate('labels')} className="labels">Labels</button>
        <button onClick={() => this.props.filterModeUpdate('milestones')} className="milestones">Milestones</button>
        <button onClick={() => this.props.filterModeUpdate('assignees')} className="assignees">Assignees</button>
        <button onClick={() => this.props.filterModeUpdate('sort')} className="sort">Sort</button>


        <ul>
        <h1>Issues List</h1>

          {this.props.issues.map((issue, i) => {
            return <li key={i}>
              <IssueEntry issue={issue}/>
            </li>
          })}
        </ul>

      <p>Filter box collects user input, but filter method not yet implemented</p>

      {this.renderAuthorsFilter()}
      {this.renderLabelsFilter()}
      {this.renderMilestonesFilter()}
      {this.renderAssigneesFilter()}
      {this.renderSortFilter()}

      </div>
    );
  }
}

export default IssueTable;
