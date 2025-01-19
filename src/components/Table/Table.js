import React from "react";
import PropTypes from "prop-types";

import { Table as ReactTable } from "antd";

import useStyle from "./useStyle";
import columns from "./columns";

const Table = ({ data }) => {
  const { styles } = useStyle();

  return (
    <ReactTable
      dataSource={data}
      columns={columns}
      className={styles.customTable}
      scroll={{
        y: 50 * 14,
      }}
      pagination={{
        pageSize: 5,
        pageSizeOptions: [5],
      }}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
