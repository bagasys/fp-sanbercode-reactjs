import React, { Fragment, useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GithubContext from "../../context/github/githubContext";

const useStyles = makeStyles((theme) => ({
  clearButton: {
    width: "100%",
    margin: "0.5em 0",
  },
}));

const Search = () => {
  const classes = useStyles();
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Fragment>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
        <OutlinedInput
          placeholder="Search..."
          id="outlined-adornment-amount"
          value={text}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        className={classes.clearButton}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
      {githubContext.users.length > 0 && (
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          className={classes.clearButton}
          variant="outlined"
          color="secondary"
        >
          Clear
        </Button>
      )}
    </Fragment>
  );
};

export default Search;
