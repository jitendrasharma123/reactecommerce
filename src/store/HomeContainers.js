import { connect } from 'react-redux';
import {addToCart} from '../actions/actions'

export { default as Catproduct } from '../components/catProducts';


const mapStateToProps = state=>({
    

})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Catproduct)





