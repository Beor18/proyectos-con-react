import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import moment from 'moment';
require('moment/locale/es');


class HotelListaItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        actualizarTiempo :  moment(this.props.lista.created_at).locale('es').fromNow()}
  }

  componentDidMount(){
    // agregado el interval
    this.interval = setInterval(this.updateActualizarTiempo.bind(this), 3000);
  }

  componentWillUnmount(){
    // remover el interval
    clearInterval(this.interval);
  }

  updateActualizarTiempo(){
    this.setState({
      actualizarTiempo : moment(this.props.lista.created_at).locale('es').fromNow()})
  }
  
  mediaCard() {
    return (
        <Card key={this.props.lista._id}>
          <CardActionArea>
            <CardMedia
              image="http://forbes.es/app/uploads/2017/05/2017626105313_3.jpg"
              title="Contemplative Reptile"
              style={{height: 140}}
            />
            <CardContent className="card-content-fondo">
              <Typography className="titulo-card" gutterBottom variant="h5" component="h2">
                {this.props.lista.title}
              </Typography>
              <Typography component="p">
                {/* {this.props.lista.content} */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <p>{this.state.actualizarTiempo}</p>
          </CardActions>
        </Card>
    );
  }
  render() {
    return(
      <div onClick={this.props.selectNote}>
        {this.mediaCard()}
      </div>

    )
  }
}

function mapStateToProps(state, props) {
  return {
    nota: state.nota.hotels,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelListaItem)