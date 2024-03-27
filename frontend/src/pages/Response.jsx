import React from "react";

const ResponsePage = ({ responseData }) => {
  return (
    <div className="response-page">
      <h1>Response from Backend</h1>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Field 1</td>
            <td>{responseData.field1}</td>
          </tr>
          <tr>
            <td>Field 2</td>
            <td>{responseData.field2}</td>
          </tr>
          {/* Add more rows for other fields as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsePage;
