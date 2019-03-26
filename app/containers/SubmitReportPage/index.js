import React from 'react';

import SideNavigation from 'components/SideNavigation';
import Button from 'components/Button';

class SubmitReportPage extends React.Component {
  state = {
    offendersName: '',
    date: '',
    location: '',
    details: '',
  };

  handleSubmitReportClick = () => {};

  render() {
    return (
      <div className="page-wrapper-sidebar">
        <SideNavigation />
        <div className="page-body">
          <h1>Submit Report</h1>
          <p className="body-text">
            Submit an anonymous report viewed only by police officers in your area. We will investigate your cases and let you know the status of the case.
          </p>
          <p className="input-label">Offenders Name</p>
          <input
            placeholder="Enter offender's full name"
            type="text"
            value={this.state.offendersName}
            onChange={e => this.setState({ offendersName: e.target.value })}
          />
          <p className="input-label">Date</p>
          <input
            placeholder="Enter offender's full name"
            type="text"
            value={this.state.date}
            onChange={e => this.setState({ date: e.target.value })}
          />
          <p className="input-label">Location</p>
          <input
            placeholder="Enter location"
            type="text"
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
          />
          <p className="input-label">Details</p>
          <textarea
            placeholder="Enter a description of the case. Enter as much detail as you remember and are comfortable with."
            type="text"
            value={this.state.details}
            onChange={e => this.setState({ details: e.target.value })}
          />
          <Button
            title="Submit Report"
            onClick={this.handleSubmitReportClick}
          />
        </div>
      </div>
    );
  }
}

export default SubmitReportPage;
