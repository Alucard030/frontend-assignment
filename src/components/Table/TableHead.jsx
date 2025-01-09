import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ columns, renderHeader: Header }) => {
  return (
    <thead>
      <tr role="row">
        {columns.map((col) => (
          <Header key={col.key} {...{ col }} />
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
    })
  ).isRequired,
  renderHeader: PropTypes.func.isRequired,
};

export default TableHead;
