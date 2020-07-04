import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center"
  },
  li: {
    margin: theme.spacing(1)
  }
}));

const Pagination = ({ itemsPerPage, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const classes = useStyles();

  return (
    <nav>
      <ul className={classes.ul}>
        {pageNumbers.map(number => (
          <li className={classes.li} key={number}>
            <Link color="secondary"
              onClick={() => {
                paginate(number);
              }}
              href={"#"}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
