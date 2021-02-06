import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const Voting = () => {

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return(
    <>
      <div className="grid gap-4 grid-cols-2 mb-4 border-bottom pb-10">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className='pb-2' variant="h6">
              Rules:
            </Typography>
            <Typography className='pb-2' component="p">
              Where: online
            </Typography>
            <Typography className='pb-2' component="p">
              When: 23/02/2021
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className='pb-2' variant="h6">
              Best proposition so far!
            </Typography>
            <Typography className='pb-2' component="p">
              Title: Online Drinking Game
            </Typography>
            <Typography className='pb-2' component="p">
              Description:
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
          <CardActions className='flex justify-end'>
            <StarBorderOutlinedIcon />
          </CardActions>
        </Card>
      </div>
    <div className="grid gap-4 grid-cols-2">
        {[{ id: 1 }, { id: 2 }, { id: 3 }].map(idea => (
          <Card key={idea.id} className={classes.root} variant="outlined">
            <CardContent>
              <Typography className='pb-2' component="p">
                Title: Stip poker
              </Typography>
              <Typography className='pb-2' component="p">
                Description:
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
            <CardActions className='flex justify-end'>
              <StarBorderOutlinedIcon />
            </CardActions>
          </Card>
        ))}
    </div>
  </>
  )
};

export default Voting;
