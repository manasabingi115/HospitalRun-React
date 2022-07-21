import { useSelector } from "react-redux";

export default function PatientsList() {
  const patientData = useSelector((state) => state.patientData);

  const { data } = patientData;
  console.log(data);

  return (
    <div className="main-div">
      {/* {data.map((obj, index) => (
        <td key={index}>{obj?.patientName}</td>
      ))} */}
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
          {data.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.PatientCode}</td>
              <td>{obj?.patientName}</td>
              <td>{obj?.familyName}</td>
              <td>{obj?.sex}</td>
              <td>{obj?.DOB}</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
          <td>$100</td>
          <td>$100</td> */}
        {/* <td>$100</td> */}
        {/* </tr> */}
        {/* <tr>
          <td>Lois</td>
          <td>Griffin</td>
          <td>$150</td>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>$300</td>
        </tr>
        <tr>
          <td>Cleveland</td>
          <td>Brown</td>
          <td>$250</td>
        </tr> */}
      </table>
    </div>
  );
}
