import React, { Component } from "react";
import Axios from "axios";

import Student from "../Student/Student";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
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
            <h3 key={student.id}>
              {student.first_name} {student.last_name}
            </h3>
          );
        })}
      </div>
    );
  }
}
