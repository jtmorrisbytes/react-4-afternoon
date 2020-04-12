import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Student from "../Student/Student";

export default class ClassList extends Component {
  constructor() {
    super();
    this.previous;
    this.state = {
      students: [],
    };
    this.goBack = this.goBack.bind(this);
  }
  getStudents() {
    let { params } = this.props.match;
    console.log("match parameters", params);
    if (
      params.class === "MATH1010" ||
      params.class === "ENG2010" ||
      params.class === "BIO2020"
    ) {
      Axios.get(`/students?class=${params.class}`).then((response) => {
        this.setState({ students: response.data });
      });
    }
  }
  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    this.getStudents();
  }
  render() {
    console.log("render students", this.state.students);
    return (
      <div className="box">
        <h1>{((this.props.match || {}).params || {}).class || ""}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((student) => {
          return (
            <Link key={student.id} to={`/student/${student.id}`}>
              <h3>
                {student.first_name} {student.last_name}
              </h3>
            </Link>
          );
        })}
        <button onClick={this.goBack}>Back </button>
      </div>
    );
  }
}
