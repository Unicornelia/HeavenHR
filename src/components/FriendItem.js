import TableCell from "@material-ui/core/TableCell";
import classnames from "classnames";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const FriendItem = ({ id, name, gender, isStarred }) => {
  return (
    <TableRow key={id}>
      <TableCell className="text-secondary"> {id} </TableCell>
      <TableCell className="text-secondary"> {name} </TableCell>
      <TableCell>
        <i
          className={classnames(`fa`, "text-primary", {
            "fa-female": gender === "female",
            "fa-male": gender === "male"
          })}
        />
      </TableCell>
      <TableCell>
        {
          <button type="button" className="btn btn-light text-primary">
            <i
              className={classnames("fa", {
                "fa-star": isStarred,
                "fa-star-o": !isStarred
              })}
            />
          </button>
        }{" "}
      </TableCell>
    </TableRow>
  );
};

export default FriendItem;
