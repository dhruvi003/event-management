//Dashboard.jsx
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Dashboard = ({ vulnerabilities }) => {
  return (
    <div>
      <Navbar />
      <h1>Vulnerability Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Vulnerability type</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilities.map((vulnerability, index) => (
            <tr key={index}>
              <td>{vulnerability.id}</td>
              <td>{vulnerability.type}</td>
              <td>{vulnerability.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/add"}>
        <button> Add vulnerabilities </button>
      </Link>
    </div>
  );
}

export default Dashboard;