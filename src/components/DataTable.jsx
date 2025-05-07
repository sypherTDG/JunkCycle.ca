import React from 'react';

const DataTable = ({ entries, headers, startIndex = 0 }) => (
  <table border="1" cellPadding="8" style={{ marginTop: "20px", width: "100%" }}>
    <thead>
      <tr>
        {headers.map(h => <th key={h.key}>{h.label}</th>)}
      </tr>
    </thead>
    <tbody>
  {entries.map((entry, idx) => (
    <tr key={idx}>
      <td>{startIndex + idx + 1}</td> {/* this is the index column */}
      {headers.slice(1).map(h => ( // skip "index" key
        <td key={h.key}>{entry[h.key]}</td>
      ))}
    </tr>
  ))}
</tbody>
  </table>
);

export default DataTable;
