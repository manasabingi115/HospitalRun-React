import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

export default function PatientsList({
  setSelectedPatient,
  setRemoveItem,
  Menu
}) {
  const patientDataFromStore = useSelector((state) => state.patientData);

  const { data } = patientDataFromStore;
  console.log(data);

  const dispatch = useDispatch();

  function FindSelectedData(obj) {
    setSelectedPatient(obj);
  }

  function removeSelectedItem(index) {
    dispatch(setRemoveItem(index));
  }

  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div list">
        <h2>Patient List</h2>
        <Table>
          <Thead>
            <Tr>
              <Th>Patient Code</Th>
              <Th>Patient Name</Th>
              <Th>Family Name</Th>
              <Th>Sex</Th>
              <Th>DOB</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((obj, index) => (
              <Tr key={index}>
                <Td>{obj?.PatientCode}</Td>
                <Td>{obj?.patientName}</Td>
                <Td>{obj?.familyName}</Td>
                <Td>{obj?.sex}</Td>
                <Td>{obj?.DOB}</Td>

                <td>
                  <Link to="/patients/patient-details">
                    <button onClick={() => FindSelectedData(obj, index)}>
                      View
                    </button>
                  </Link>
                  <button onClick={() => removeSelectedItem(index)}>
                    Delete
                  </button>
                </td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
