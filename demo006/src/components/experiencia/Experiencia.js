import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
      padding: 40
  },
  roots: {
      padding: 20,
      marginRight: 20,
      width: '100%'
  },
  heading: {
    paddingBottom: 40
  },
  chip: {
    marginTop: 15,
    marginLeft: 0,
    paddingLeft: 0,
    marginRight: 10
  },
  puesto: {
    fontSize: 21,
    marginBottom: 15
  },
  lugar: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: 400
  },
  linea: {
      marginTop: 0,
      marginBottom: 40
  },
  cuadro: {
      marginLeft: 0,
      marginTop: 10,
      paddingRight: 0
  },
  small: {
      fontSize: 14,
      fontWeight: 600
  },
  containerPrincipal: {
      paddingBottom: 20
  }
};

function Experiencia(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Grid container item xs={12} sm={6} lg={12} direction="row" justify="center" alignItems="center">
            <h1 className={classes.heading}>EXPERIENCIA LABORAL</h1>
        </Grid>
        {/* <Divider variant="middle" className={classes.linea} /> */}
        <Grid container item xs={12} sm={6} lg={12} className={classes.containerPrincipal}>
            <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                <Paper className={classes.roots} elevation={1}>
                    <Typography component="h3" className={classes.puesto}>
                        DESARROLLADOR WEB
                    </Typography>
                    <Typography variant="h5" component="h5" className={classes.lugar}>
                        Flybynet - <small className={classes.small}>Desde Abril 2017 - Actualidad</small>
                    </Typography>
                     <Typography component="p">
                        Desarrollador de sistemas de gestión utilizando angular (5,6,7) con nodejs. Base de datos 
                        mongodb y MySQL. Sistema Operativos Linux. Páginas web Wordpress.
                    </Typography>
                    <Chip className={classes.chip} label="Node.js" />
                    <Chip className={classes.chip} label="MongoDb" />
                    <Chip className={classes.chip} label="MySQL" />
                    <Chip className={classes.chip} label="React" />
                    <Chip className={classes.chip} label="Angular" />
                    <Chip className={classes.chip} label="Wordpress" />
                </Paper>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                <Paper className={classes.roots} elevation={1}>
                    <Typography variant="h3" component="h3" className={classes.puesto}>
                    FREELANCE SOFTWARE DEVELOPER
                    </Typography>
                    <Typography variant="h5" component="h5" className={classes.lugar}>
                        Freelance - <small className={classes.small}>Desde Mayo 2014 - Actualidad</small>
                    </Typography>
                    <Typography component="p">
                        Desarrollo de web apps. Api rest y CRUD en nodejs, angular (1 a 7), mongodb y mysql. React y
                        redux. Elixir con phoenix framework. Aplicaciones en ionic y react native. 
                    </Typography>
                    <Chip className={classes.chip} label="Elixir y Phoenix" />
                    <Chip className={classes.chip} label="Node.js" />
                    <Chip className={classes.chip} label="MongoDb" />
                    <Chip className={classes.chip} label="React y Redux" />
                    <Chip className={classes.chip} label="Angular" />
                    <Chip className={classes.chip} label="Api Rest" />
                    <Chip className={classes.chip} label="Ionic" />
                    <Chip className={classes.chip} label="React Native" />
                </Paper>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                <Paper className={classes.roots} elevation={1}>
                    <Typography variant="h3" component="h3" className={classes.puesto}>
                        DESARROLLADOR WEB
                    </Typography>
                    <Typography variant="h5" component="h5" className={classes.lugar}>
                        Conectar Igualdad - <small className={classes.small}>Desde Abril 2014 - Abril 2016</small>
                    </Typography>
                     <Typography component="p">
                     Ministerio de Educación de la Nación Argentina. Desarrollo de web apps con nodejs, mongodb y
                        angular (1 y 2). Desarrollo de páginas web institucionales Wordpress y Drupal. Aplicaciones
                        para sistema operativo Huayra Primaria.
                    </Typography>
                    <Chip className={classes.chip} label="Node.js" />
                    <Chip className={classes.chip} label="MongoDb" />
                    <Chip className={classes.chip} label="Angular" />
                    <Chip className={classes.chip} label="Drupal" />
                </Paper>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                <Paper className={classes.roots} elevation={1}>
                    <Typography variant="h3" component="h3" className={classes.puesto}>
                        MAQUETADOR WEB
                    </Typography>
                    <Typography variant="h5" component="h5" className={classes.lugar}>
                        Frontaly - <small className={classes.small}>Desde Enero 2014 - Abril 2014</small>
                    </Typography>
                     <Typography component="p">
                        Maquetación en html, css y js para medios digitales.
                    </Typography>
                    <Chip className={classes.chip} label="Html" />
                    <Chip className={classes.chip} label="Css" />
                    <Chip className={classes.chip} label="Js" />
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}

Experiencia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experiencia);