import React, {Component} from "react";

class Box extends Component{
	render() {
        return(
        <div className="box">
				<img src={this.props.img} height="360px" width="300px"/>
				<center>{this.props.name}</center>
				<p>{this.props.des1}</p>
				<p>{this.props.des2}</p>
			</div>
			);
	}
}

export default Box;