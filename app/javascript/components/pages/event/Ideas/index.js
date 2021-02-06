import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { postWithAxios } from '../../../../utils/useAxios';

const Ideas = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  const [checked, setChecked] = useState([1]);
  const [formTitle, setFormTitle] = useState('Submit your idea');
  const [idea, setIdea] = useState({ title: '', description: '' });

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    currentIndex === -1
      ? newChecked.push(value)
      : newChecked.splice(currentIndex, 1)

    setChecked(newChecked);
  };

  const handleChangeIdea = e => {
    const target = e.target;
    const property = target.id;
    const value = target.value;
    setIdea({ ...idea, [property]: value });
  };

  const handleSubmitIdea = () => {
    console.log('idea', idea);
    postWithAxios('/api/v1/organizations/1/events/1/activities', {
      title: idea.title,
      description: idea.description,
      event_id: 1,
    })
    .then(response => {
      console.log('response', response);
      setIdea({ title: '', description: '' });
      setFormTitle('Your idea has been submitted!');
    })
  };

  return(
    <div className="flex justify-between">
      <List dense className={classes.root}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemAvatar>
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://eu.ui-avatars.com/api/?name=Jhon+Doe`}
                  alt=""
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>

      <form className="flex flex-column flex-grow-1 border rounded-xl p-3 mx-10">
        <Typography className='pb-2' variant="h6">
          {formTitle}
        </Typography>
        <FormControl className='w-50'>
          <InputLabel htmlFor="my-input">Title</InputLabel>
          <Input value={idea.title} onChange={handleChangeIdea} id="title" />
        </FormControl>
        <FormControl className='w-50'>
          <InputLabel htmlFor="my-input">Description</InputLabel>
          <Input value={idea.description} onChange={handleChangeIdea} id="description" />
        </FormControl>
        <Button className='w-25 mt-4' variant="contained" color="primary" onClick={handleSubmitIdea}>
          Submit
        </Button>
      </form>
    </div>
  )
};

export default Ideas;
