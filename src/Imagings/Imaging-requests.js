import React from "react";

export default function ImagingRequests() {
  return (
    <div className="main-div">
      <h2>Imaging Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Type</th>
            <th>Visit</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.patient}</td>
              <td>{obj?.medication}</td>
              <td>{obj?.status}</td>
              <td>{obj?.priority}</td>
              <td>
                <Link to="/medications/medication-details">
                  <button onClick={() => FindIndex(obj, index)}>View</button>
                </Link>
                <button onClick={() => removeSelectedItem(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
