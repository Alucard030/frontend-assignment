import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ columns, data }) => {
  return (
    <tbody>
      {data.length > 0 ? (
        data.map((row, index) => (
          <TableRow
            key={index}
            row={row}
            columns={columns}
            // we're using renderProps here to keep the UI seperate from rendering logic
            renderCell={({ value, header }) => (
              <td data-label={header} role="cell" aria-label={header}>
                {value}
              </td>
            )}
          />
        ))
      ) : (
        <tr role="row" aria-live="polite">
          <td colSpan={columns.length} role="cell" aria-describedby="no-data">
            <div class="no-data">No data available</div>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
