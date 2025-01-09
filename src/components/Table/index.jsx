import React, { useState } from "react";
import PropTypes from "prop-types";
import TableCaption from "./TableCaption";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import "./Table.css";
import Pagination from "../Pagination";
import { getDataForPage } from "../../utils.js/tableUtils";

const Table = ({ caption, columns, data, itemsPerPage }) => {
  const [paginatedData, setPaginatedData] = useState(
    getDataForPage(data, 1, itemsPerPage)
  );
  return (
    <div role="table" aria-label={caption} className="table-container">
      <TableCaption caption={caption} />
      <table>
        <TableHead
          columns={columns}
          // we're using renderProps here to keep the UI seperate from rendering logic
          renderHeader={({ col: { header } }) => {
            return (
              <th scope="col" role="columnheader" aria-sort="none">
                {header}
              </th>
            );
          }}
        />
        <TableBody columns={columns} data={paginatedData} />
      </table>
      <Pagination
        totalItems={data?.length ?? 0}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => {
          setPaginatedData(getDataForPage(data, page, itemsPerPage));
        }}
      />
    </div>
  );
};

Table.propTypes = {
  caption: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
