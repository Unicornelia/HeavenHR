import React from "react";

import { Link } from "@material-ui/core";
import { useStyles } from "./styles";

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
            <Link
              id="pages"
              color="secondary"
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
