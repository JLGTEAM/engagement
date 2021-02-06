import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';


// utils
import SimpleCard from '../../../ui/cards';
import { getWithAxios } from '../../../../utils/useAxios';


const Guessing = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  const [checked, setChecked] = useState([1]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getWithAxios(`/api/v1/organizations/1/users`)
    .then(response => {
        setUsers(response.data.data);
      })
      .catch(response => console.log(response));
  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    currentIndex === -1
      ? newChecked.push(value)
      : newChecked.splice(currentIndex, 1)

    setChecked(newChecked);
  };

  return (
    <>
      <div className="mb-4">
        <SimpleCard />
      </div>

      <List dense className={classes.root}>
        {users.map((user) => {
          const labelId = `checkbox-list-secondary-label-${user.id}`;
          return (
            <ListItem key={user.id} button>
              <ListItemAvatar>
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://eu.ui-avatars.com/api/?name=${user.attributes.first_name}+${user.attributes.last_name}`}
                  alt=""
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${user.attributes.first_name} ${user.attributes.last_name}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(user)}
                  checked={checked.indexOf(user) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default Guessing;
