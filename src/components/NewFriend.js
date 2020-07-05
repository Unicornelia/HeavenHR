import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import faker from "faker";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "./Header";
import Tooltip from "@material-ui/core/Tooltip";

const NewFriend = props => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [isStarred, setIsStarred] = useState(false);

  const history = useHistory();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleGenderChange = e => {
    setGender(e.target.value);
  };

  const generateId = () => {
    return faker.random.uuid();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name && gender) {
      const newFriend = { id: generateId(), name, gender, isStarred };
      props.onAddFriend(newFriend);
      history.push("/");
    }
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(8)
      }
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Paper className="m-4 mt-0" elevation={4} style={{ margin: "auto 0" }}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-disabled"
              label="name"
              onChange={e => handleNameChange(e)}
            />
            <RadioGroup aria-label="gender" value="male" label="male">
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    checked={gender === "female"}
                    onChange={e => handleGenderChange(e)}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    checked={gender === "male"}
                    onChange={e => handleGenderChange(e)}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    area-label="isStarred"
                    checked={isStarred}
                    size="small"
                    onChange={() => {
                      setIsStarred(!isStarred);
                    }}
                  />
                }
                label="Starred?"
              />
            </RadioGroup>
            <Tooltip
              title="Provide details for name and gender"
              placement="top"
            >
              <Button
                style={{ width: "80px", height: "40px" }}
                variant="outlined"
                color="secondary"
                onClick={e => handleSubmit(e)}
              >
                Submit
              </Button>
            </Tooltip>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default NewFriend;
