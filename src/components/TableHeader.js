import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className="text-uppercase">id</TableCell>
        <TableCell className="text-uppercase">name</TableCell>
        <TableCell className="text-uppercase">gender</TableCell>
        <TableCell className="text-uppercase">status</TableCell>
        <TableCell className="text-uppercase" />
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
