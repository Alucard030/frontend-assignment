import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ row, columns, renderCell: TableCell }) => {
  return (
    <tr role="row">
      {columns.map((col) => (
        <TableCell key={col.key} value={row[col.key]} header={col.header} />
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
    })
  ).isRequired,
  renderCell: PropTypes.func.isRequired,
};

export default TableRow;
