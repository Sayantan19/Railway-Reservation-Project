import React, { Component } from "react";

export default class admin_deleteTrain extends Component {
  constructor(props) {
    super(props);
    this.state  = ({
      t_no: "",
      data:[]  
    });
  }

  handleTrainNumberChange = (e) => {
    this.setState({ t_no: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //TODO: check whether train number exist
    console.log("Submitted Train Number:", this.state.trainNumber);
    this.setState({ trainNumber: "" });
    alert("Operation Successful");
  };

  render() {
    return (
      <div>
        <div className="mb-3">
          <div className="container" id="hrm">
            <form onSubmit={this.handleSubmit}>
              <label className="form-label my-3">
                Train Number:
                <input
                  type="text"
                  value={this.state.trainNumber}
                  onChange={this.handleTrainNumberChange}
                />
              </label>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}