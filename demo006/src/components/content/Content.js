import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faNodeJs, 
  faAngular
} from '@fortawesome/free-brands-svg-icons'

const styles = {
  divGeneral: {
    background: '#efefef',
    color: "#000",
    paddingTop: 40,
    paddingBottom: 40
  },
  heading: {
    marginTop: 20,
    marginBottom: 0
  },
  portFolio: {
      padding: 40,
      marginTop: 20,
      textShadow: '0px 0px 8px #000'
  },
  tituloProyecto: {
      fontSize: 23,
      color: '#000'
  },
  card: {
      marginTop: 25
  }
};

const tileData = [
    // {
    //     img: 'https://camo.githubusercontent.com/ef22cc754d2a3886dd5dc404f3f3dde97126c247/68747470733a2f2f692e696d6775722e636f6d2f4b6d68723474462e706e67',
    //     title: 'Login con Elixir y Phoenix Framework',
    //     stackUno: <FontAwesomeIcon icon={faPhoenixFramework} className="phoenix"/>,
    // },
    {
        img: 'https://i.imgur.com/9esjpn1.jpg',
        title: 'Desafio almundo.com',
        stackUno: <FontAwesomeIcon icon={faNodeJs} className="nodejs stack"/>,
        stackDos: <FontAwesomeIcon icon={faAngular} className="angular stack"/>
    },
    {
        img: 'https://i.imgur.com/9esjpn1.jpg',
        title: 'Desafio almundo.com',
        stackUno: <FontAwesomeIcon icon={faNodeJs} className="nodejs stack"/>,
        stackDos: <FontAwesomeIcon icon={faAngular} className="angular stack"/>
    },
    {
        img: 'https://i.imgur.com/9esjpn1.jpg',
        title: 'Desafio almundo.com',
        stackUno: <FontAwesomeIcon icon={faNodeJs} className="nodejs stack"/>,
        stackDos: <FontAwesomeIcon icon={faAngular} className="angular stack"/>
    },
    {
        img: 'https://i.imgur.com/9esjpn1.jpg',
        title: 'Desafio almundo.com',
        stackUno: <FontAwesomeIcon icon={faNodeJs} className="nodejs stack"/>,
        stackDos: <FontAwesomeIcon icon={faAngular} className="angular stack"/>
    }
 ];

function Content(props) {
  const { classes } = props;
  return (
    <div className={classes.divGeneral}>
        <Grid container item xs={12} sm={6} lg={12} direction="row" justify="center" alignItems="center">
            <h1 className={classes.heading}>PORTFOLIO</h1>
        </Grid>
        <Grid container className={classes.portFolio} item xs={12} sm={6} lg={12} direction="row" justify="center" alignItems="center">
            {tileData.map(tile => (
                <Grid container item xs={12} sm={6} lg={6} spacing={16} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            height="340"
                            image={tile.img}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.tituloProyecto}>
                                    {tile.title} {tile.stackUno} {tile.stackDos}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions> */}
                    </Card>
                </Grid>         
            ))}
        </Grid>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);