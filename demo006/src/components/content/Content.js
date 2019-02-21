import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import ListSubheader from '@material-ui/core/ListSubheader';

const styles = {
  divGeneral: {
    background: '#ffff',
    color: "#000",
    paddingTop: 40,
    paddingBottom: 40
  },
  iconos: {
    marginTop: 20,
    marginRight: 10,
    color: '#fff',
    fontSize: 30
  },
  heading: {
    marginTop: 20,
    marginBottom: 0
  },
  portFolio: {
      padding: 40,
      marginTop: 20,
      textShadow: '0px 0px 10px #000'
  },
  lista: {
    border: '1px solid #000'
  }
};

const tileData = [
    {
        img: 'https://camo.githubusercontent.com/ef22cc754d2a3886dd5dc404f3f3dde97126c247/68747470733a2f2f692e696d6775722e636f6d2f4b6d68723474462e706e67',
        title: 'Login con Elixir y Phoenix Framework',
        author: 'author',
    },
    {
        img: 'https://camo.githubusercontent.com/eccdab36b6c7709036f7f2d7815738eac2041561/68747470733a2f2f692e696d6775722e636f6d2f616d31596e377a2e706e67',
        title: 'Desafio almundo.com',
        author: 'author',
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
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                        title={<h2>{tile.title}</h2>}
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