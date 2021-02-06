import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';


const SimpleCard = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
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

  const classesCards = useStyles();

  return (
    <Card className={classesCards.root} variant="outlined">
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
  );
}

export default SimpleCard;
