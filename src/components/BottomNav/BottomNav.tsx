import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/Schedule';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { makeStyles } from '@material-ui/core';
import { Link  } from 'react-router-dom'

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    bottom: 0,
    position: "fixed",
  },
});

const BottomNav = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
      setValue(newValue);
      
    };

    return (
        <div>
        <BottomNavigation
        value={value} onChange={handleChange}
        // showLabels
        className={classes.stickToBottom}
        >
          <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/upcoming" label="Upcoming" icon={<ScheduleIcon />} />
          <BottomNavigationAction component={Link} to="/latest" label="Latest" icon={<NewReleasesIcon />} />
        </BottomNavigation>
        </div>
    )
}

export default BottomNav
