import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import faker from "faker";

import {
  Paper,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Tooltip
} from "@material-ui/core";

import Header from "../Header";
import { useStyles } from "./styles";

const NewFriend = props => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [isStarred, setIsStarred] = useState(false);
  const history = useHistory();
  const classes = useStyles();

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

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Paper className="m-4 mt-0" elevation={4} style={{ margin: "auto 0" }}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="standard-disabled"
              label="name"
              onChange={e => handleNameChange(e)}
            />
            <RadioGroup required aria-label="gender" value="male" label="male">
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

NewFriend.displayName = "NewFriend";

export default NewFriend;
