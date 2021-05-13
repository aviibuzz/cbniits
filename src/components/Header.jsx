import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className="header">
        <Toolbar variant="dense">
       <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
            <SwipeableDrawer
            // anchor={anchor}
            // open={state[anchor]}
            // onClose={toggleDrawer(anchor, false)}
            // onOpen={toggleDrawer(anchor, true)} {list(anchor)}
          >
hello
          
          </SwipeableDrawer>
          <Typography variant="h6" color="inherit">
            Hello world
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
