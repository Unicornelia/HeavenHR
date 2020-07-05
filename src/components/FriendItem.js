import React, { useState } from "react";
import classnames from "classnames";
import { useHistory } from "react-router-dom";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { makeStyles, Tooltip } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { updateFriend } from '../actions'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const FriendItem = props => {
  const { id, name, gender, isStarred } = props;
  const classes = useStyles();
  const history = useHistory();
  const [status, setStatus] = useState(isStarred);
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(name);

  //TODO fix this
  const handleStarClick = () => {
    setStatus(!status);
  };

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const [modalStyle] = React.useState(getModalStyle);

  const handleUpdateName = e => {
    setItemName(e.target.value);
  };

  const handleSubmitUpdatedName = () => {
    const updatedFriend = { id, name: itemName, gender, isStarred };
    props.onUpdateFriend(updatedFriend)
    setIsEditing(false)
    history.push("/");
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <TableRow key={id}>
      <TableCell className="text-secondary">{id}</TableCell>
      <TableCell className="text-secondary">
        {name}
        <Tooltip title={"Update name"}>
          <IconButton
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
              <Button
                style={{ width: "40px", height: "30px" }}
                variant="outlined"
                color="secondary"
                onClick={e => handleSubmitUpdatedName(e)}
              >
                Submit
              </Button>
              <Button
                style={{ width: "40px", height: "30px" }}
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
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
          <button
            type="button"
            className="btn btn-light text-primary"
            onClick={handleStarClick}
          >
            {status ? (
              <i className={"fa fa-star"} />
            ) : (
              <i className={"fa fa-star-o"} />
            )}
          </button>
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
