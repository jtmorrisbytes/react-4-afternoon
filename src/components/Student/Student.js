import React, { Component } from "react";
import Axios from "axios";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {},
    };
    this.goBack = this.goBack.bind(this);
  }
  componentDidMount() {
    let id = ((this.props.match || {}).params || {}).id;
    if (id) {
      Axios.get(`/students/${id}`)
        .then((response) => {
          this.setState({ studentInfo: response.data });
        })
        .catch((error) => {
          if (error.response.status === 404) {
            alert(`The Student with id '${id}' was not found`);
          }
          console.error(error);
          try {
            this.props.history.push("/");
          } catch (e) {}
        });
    }
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    let { first_name, last_name, grade, email } = this.state.studentInfo || {};
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>
          {first_name} {last_name}
        </h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        <button onClick={this.goBack}>back</button>
      </div>
    );
  }
}
