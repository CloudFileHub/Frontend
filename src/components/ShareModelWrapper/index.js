import React from "react";
import {connect} from "react-redux";
import ShareModel from "../ShareModel";
import { withRouter } from "../../routers/utils";

class ShareModelWrapper extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.shareSelected !== "" ? <ShareModel/> : undefined}
            </div>
        )
    }
}

const connectPropToStore = (state) => ({
    shareSelected: state.selectedItem.shareSelected
})

export default connect(connectPropToStore)(withRouter(ShareModelWrapper))