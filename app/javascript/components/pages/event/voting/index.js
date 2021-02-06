import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <div className="flex justify-between">
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            From
          </Typography>
          <Typography variant="h5" component="h2">
            Where
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            When
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Best proposition so far!
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            title
          </Typography>
          <Typography variant="body2" component="p">
            description
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    <div className="p-2 flex-wrap">
      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Best proposition so far!
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          title
        </Typography>
        <Typography variant="body2" component="p">
          description
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Best proposition so far!
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          title
        </Typography>
        <Typography variant="body2" component="p">
          description
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Best proposition so far!
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          title
        </Typography>
        <Typography variant="body2" component="p">
          description
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  </>
  )
};

export default Voting;