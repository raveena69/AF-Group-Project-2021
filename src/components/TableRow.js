import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class TableRow extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.obj.guestSpeaker}</td>
                <td>{this.props.obj.time}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.date}</td>
                <td><button className="btn btn-primary"><Link to={"/edit-conf/"+this.props.obj._id}>Edit</Link></button></td>
            </tr>

        );
    }

}

export default TableRow;