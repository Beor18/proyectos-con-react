import { connect } from 'react-redux';
import { crearNota } from '../actions';
import { NuevoPost } from '../components/NuevoPost';

// Se ha conectado el componente NuevoPost a la store Redux.

const mapDispatchToProps = dispatch => {
    return {
        onAgregarNota: post => {
            dispatch(crearNota(post))
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NuevoPost);