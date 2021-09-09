import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 40,
  },
  inner: {
    display: 'flex',
    padding: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  actions: {
    alignItems: 'flex-end',
  },
});

const HeroCard = ({ hero }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <div className={classes.inner}>
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {hero.publisher}
          </Typography>
          <Typography variant="h5" component="h2" paragraph>
            {hero.title}
          </Typography>
          <Typography variant="body1" component="p">
            Height:
            {hero.height}
          </Typography>
          <Typography variant="body1" component="p">
            Weight:
            {hero.weight}
          </Typography>
          <Typography variant="body1" component="p">
            Gender:
            {hero.gender}
          </Typography>
          <Typography variant="body1" component="p">
            Eye color:
            {hero.eye_color}
          </Typography>
          <Typography variant="body1" component="p">
            Race:
            {hero.race}
          </Typography>
          <Typography variant="body1" component="p">
            Hair color:
            {hero.hair_color}
          </Typography>
          <Typography variant="body1" component="p">
            Skin color:
            {hero.skin_color}
          </Typography>
          <Typography variant="body1" component="p">
            Alignment:
            {hero.alignment}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            href={hero.url}
          >
            Learn More
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default HeroCard;
