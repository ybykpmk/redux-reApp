import React,{Component} from "react";
import { bindActionCreators } from "redux";
import { decreaseByThreeCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class DecreaseByThreeCounter extends Component{
    render(){
        return(
            <div>
                <button onClick={e => {
                    this.props.dispatch(decreaseByThreeCounter());
                }}>3 azaltır
                </button>                                
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(DecreaseByThreeCounter, dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseByThreeCounter);