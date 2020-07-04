import React from "react";
import classnames from "classnames";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

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
        }
      </TableCell>
      <TableCell>
        <IconButton area-label="delete" onClick={() => console.log("delete")}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default FriendItem;
