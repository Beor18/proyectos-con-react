import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNodeJs, faAngular, faReact, faPython, faPhoenixFramework } from '@fortawesome/free-brands-svg-icons'

const styles = {
  divGeneral: {
    background: '#697689',
    color: "#fff",
    textShadow: '0px 0px 5px #000',
    paddingTop: 140,
    paddingBottom: 140,
    maxHeight: '100%'
  },
  bigAvatar: {
    marginTop: 0,
    width: 150,
    height: 150,
  },
  textoObjetivo: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
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
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.divGeneral}>
        <Grid container item md={12} direction="row" justify="center" alignItems="center">
        <Avatar alt="Fernando Lopez" src="https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-1/p160x160/46990143_10215645184434995_1980031029271855104_n.jpg?_nc_cat=107&_nc_ht=scontent.faep5-1.fna&oh=25e1ad9a1e86b9e8ba240bb45aba899e&oe=5CF3C03A" className={classes.bigAvatar} />
        </Grid>
        <Grid container item md={12} direction="column" justify="center" alignItems="center">
            <h1 className={classes.heading}>Fernando López</h1>
            <h3 className={classes.heading}>Fullstack Developer </h3>
            <p className={classes.textoObjetivo}>
                Poder crecer profesionalmente. Autodidacta y colaborativo, nunca dejo de aprender. Padre de 2 hijos.
            </p>
        </Grid>
        <Grid container item md={12} justify="center" alignItems="center">
          <a href="https://www.github.com/Beor18">
            <FontAwesomeIcon icon={faGithub} size="lg" className={classes.iconos} />
            <FontAwesomeIcon icon={faNodeJs} size="lg" className={classes.iconos} />
            <FontAwesomeIcon icon={faAngular} size="lg" className={classes.iconos} />
            <FontAwesomeIcon icon={faReact} size="lg" className={classes.iconos} />
          </a>
        </Grid>
    </div>
  );
}

Headers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);