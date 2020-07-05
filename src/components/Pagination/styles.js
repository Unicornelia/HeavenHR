import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center"
  },
  li: {
    margin: theme.spacing(1)
  }
}));