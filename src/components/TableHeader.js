import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

export default ({first, second, third, fourth, fifth}) => (
  <TableHead>
    <TableRow>
      <TableCell className="text-uppercase">{first}</TableCell>
      <TableCell className="text-uppercase">{second}</TableCell>
      <TableCell className="text-uppercase">{third}</TableCell>
      <TableCell className="text-uppercase">{fourth}</TableCell>
      <TableCell className="text-uppercase">{fifth}</TableCell>
    </TableRow>
  </TableHead>
);
