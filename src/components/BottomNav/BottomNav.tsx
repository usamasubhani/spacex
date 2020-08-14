import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/Schedule';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    bottom: 0,
    position: "fixed",
  },
});

const BottomNav = () => {
    const classes = useStyles();

    return (
        <div>
        <BottomNavigation
        // value={}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        showLabels
        className={classes.stickToBottom}
        >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Upcoming" icon={<ScheduleIcon />} />
        <BottomNavigationAction label="Latest" icon={<NewReleasesIcon />} />
        </BottomNavigation>
        </div>
    )
}

export default BottomNav
