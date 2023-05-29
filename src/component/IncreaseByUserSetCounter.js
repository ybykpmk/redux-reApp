import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseByUserSetCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class IncreaseByUserSetCounter extends Component {
    render() {
        return (
            <div>
                <input type="text" id="textUserSet"></input>
                <button onClick={e => {
                    this.props.dispatch(increaseByUserSetCounter(document.getElementById('textUserSet').value));
                }}>arttır
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(IncreaseByUserSetCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseByUserSetCounter);