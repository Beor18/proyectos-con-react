import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import ListSubheader from '@material-ui/core/ListSubheader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faNodeJs, 
  faAngular, 
  faReact,
  faPhoenixFramework
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
      color: '#fff'
  }
};

const tileData = [
    {
        img: 'https://camo.githubusercontent.com/ef22cc754d2a3886dd5dc404f3f3dde97126c247/68747470733a2f2f692e696d6775722e636f6d2f4b6d68723474462e706e67',
        title: 'Login con Elixir y Phoenix Framework',
        stackUno: <FontAwesomeIcon icon={faPhoenixFramework} className="phoenix"/>,
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
        <Grid container item md={12} direction="row" justify="center" alignItems="center">
            <h1 className={classes.heading}>PORTFOLIO</h1>
        </Grid>
        <Grid container className={classes.portFolio} item md={12} direction="row" justify="center" alignItems="center">
            <GridList cellHeight={340} cols={2} spacing={18}>
            
                {tileData.map(tile => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title}/>
                    <GridListTileBar
                        title={<h2 className={classes.tituloProyecto}>{tile.title} {tile.stackUno} {tile.stackDos}</h2>}
                    />
                </GridListTile>
                ))}
        </GridList>
        </Grid>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);