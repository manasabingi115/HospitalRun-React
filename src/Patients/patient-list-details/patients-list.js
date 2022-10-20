import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function PatientsList({
  setSelectedPatient,
  setRemoveItem
  // setPatientDetailsPage
}) {
  const patientDataFromStore = useSelector((state) => state.patientData);
  // const [selectedPatient, setSelectedPatient] = React.useState();

  const { data } = patientDataFromStore;
  console.log(data);

  const dispatch = useDispatch();

  function FindSelectedData(obj) {
    // setPatientDetailsPage(true);
    setSelectedPatient(obj);
  }

  function removeSelectedItem(index) {
    // console.log(index);
    dispatch(setRemoveItem(index));
  }

  return (
    <div className="main-div">
      <h2>Patient List</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Code</th>
            <th>Patient Name</th>
            <th>Family Name</th>
            <th>Sex</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tr> */}
        <tbody>
          {data?.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.PatientCode}</td>
              <td>{obj?.patientName}</td>
              <td>{obj?.familyName}</td>
              <td>{obj?.sex}</td>
              <td>{obj?.DOB}</td>

              <td>
                <Link to="/patients/patient-details">
                  <button onClick={() => FindSelectedData(obj, index)}>
                    View
                  </button>
                </Link>
                <button onClick={() => removeSelectedItem(index)}>
                  Delete
                </button>
                {/* <button onClick={() => FindIndex(obj, index)}>View</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
