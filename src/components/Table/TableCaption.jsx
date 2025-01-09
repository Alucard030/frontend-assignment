import React from "react";
import PropTypes from "prop-types";

const TableCaption = ({ caption }) => {
  return <h3 className="caption">{caption}</h3>;
};

TableCaption.propTypes = {
  caption: PropTypes.string.isRequired,
};

export default TableCaption;
