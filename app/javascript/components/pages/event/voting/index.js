import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import { getWithAxios, postWithAxios } from '../../../../utils/useAxios';

const Voting = () => {

  const [ideas, setIdeas] = useState([]);
  const [mostVoted, setMostVoted] = useState({});
  const [voted, setVoted] = useState(0);

  useEffect(() => {

    getWithAxios('/api/v1/organizations/1/events/1/activities')
      .then(response => {
        const data = response.data.data;
        setIdeas(data.map(idea => idea.attributes));
      })

    getWithAxios('/api/v1/organizations/1/events/1/activities/most_voted_idea')
      .then(response => {
        setMostVoted(response.data.data.attributes);
      })

  }, []);

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

  const handleVote = id => {
    postWithAxios(`/api/v1/organizations/1/events/1/activities/${id}/votes`)
      .then(response => {
        setVoted(response.data.data.attributes.activity_id);
      })
  };

  return(
    <>
      <div className="grid gap-4 grid-cols-2 mb-4 border-bottom pb-10">

        {/* RULES */}
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

        {/* MOST VOTED */}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className='pb-2' variant="h6">
              {mostVoted ? 'Best proposition so far!' : 'No best proposition so far.'}
            </Typography>
            <Typography className='pb-2' component="p">
              {mostVoted ? `Title: ${mostVoted.title}` : 'Title:'}
            </Typography>
            <Typography className='pb-2' component="p">
              Description:
            </Typography>
            <Typography component="p">
              {mostVoted && mostVoted.description}
            </Typography>
          </CardContent>
          <CardActions className='flex justify-end'>
            {mostVoted && (
              <StarBorderOutlinedIcon onClick={() => handleVote(mostVoted.id)} />
            )}
          </CardActions>
        </Card>

      </div>
    <div className="grid gap-4 grid-cols-2">
        {ideas.map(idea => {
          return (
          <Card key={idea.id} className={classes.root} variant="outlined">
            <CardContent>
              <Typography className='pb-2' component="p">
                {`Title: ${idea.title}`}
              </Typography>
              <Typography className='pb-2' component="p">
                Description:
              </Typography>
              <Typography component="p">
                {idea.description}
              </Typography>
            </CardContent>
            <CardActions className='flex justify-end'>
              {voted === idea.id
                ? <StarIcon onClick={() => handleVote(idea.id)} />
                : <StarBorderOutlinedIcon onClick={() => handleVote(idea.id)} />
              }
            </CardActions>
          </Card>
        )})}
    </div>
  </>
  )
};

export default Voting;
