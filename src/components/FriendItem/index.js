import React, { useState } from "react";
import classnames from "classnames";
import { connect } from "react-redux";

import {
  TableCell,
  TableRow,
  IconButton,
  Tooltip,
  Modal,
  TextField,
  Button
} from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";

import { updateFriend } from "../../actions";
import { getModalStyle, useStyles } from "./styles";

const FriendItem = props => {
  const { id, name, gender, isStarred } = props;
  const classes = useStyles();
  const [itemStar, setItemStar] = useState(isStarred);
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(name);

  const [modalStyle] = React.useState(getModalStyle);

  //TODO needs fixing
  const toggleItemStar = () => {
    setItemStar(!itemStar);
  };

  const handleStarClick = () => {
    toggleItemStar();
    const updatedFriend = { id, name, gender, isStarred: itemStar };
    props.onUpdateFriend(updatedFriend);
  };

  const handleUpdateName = e => {
    setItemName(e.target.value);
  };

  const handleSubmitUpdatedName = () => {
    const updatedFriend = { id, name: itemName, gender, isStarred };
    props.onUpdateFriend(updatedFriend);
    setIsEditing(false);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <TableRow key={id} className="tableRow">
      <TableCell className="text-secondary">{id}</TableCell>
      <TableCell className="text-secondary">
        {name}
        <Tooltip title={"Update name"}>
          <IconButton
            className="iconButton"
            area-label="update"
            fontSize="small"
            onClick={() => setIsEditing(true)}
          >
            <BorderColorIcon />
          </IconButton>
        </Tooltip>
        {isEditing ? (
          <Modal
            open={isEditing}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <TextField
                id="standard-disabled"
                label="name"
                defaultValue={itemName}
                onChange={e => handleUpdateName(e)}
              />
              <span className={classes.buttons}>
                <Button
                  id="submit"
                  variant="outlined"
                  color="secondary"
                  onClick={e => handleSubmitUpdatedName(e)}
                >
                  Submit
                </Button>
                <Button
                  id="cancel"
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </span>
            </div>
          </Modal>
        ) : null}
      </TableCell>
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
          <Button
            id="star"
            type="button"
            className="btn btn-light text-primary"
            onClick={handleStarClick}
          >
            {itemStar ? (
              <i className={"fa fa-star"} />
            ) : (
              <i className={"fa fa-star-o"} />
            )}
          </Button>
        }
      </TableCell>
    </TableRow>
  );
};

const mapStateToProps = friends => ({
  friends: friends
});

const mapDispatchToProps = dispatch => {
  return {
    onUpdateFriend: friend => {
      dispatch(updateFriend(friend));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendItem);
