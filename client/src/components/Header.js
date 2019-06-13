import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        //this.props.auth tells us wether or not the user is signed in
        switch (this.props.auth) {
            case null:
              return;
            case false:
              return (
                <li><a href="/auth/google">Login With Google</a></li>
            );
            default:
            //Whenever your return an array React expects a list of elements,
            //Therefore, react expects each list item in the array to have a unique key
              return [
                <li key="1"><Payments /></li>,
                <li key="3" style={{ margin: '0 10px' }}>
                  Credits: {this.props.auth.credits}
                </li>,
                <li key="2"><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper" style={{ backgroundColor:"#404449"}} >
                    <Link
                    //if this.props.auth = true, return '/surveys'
                    //if this.props.auth = null || false, return '/'
                    to={this.props.auth ? '/surveys' : '/'} 
                    className="left brand-logo"
                    >
                        MailGrid
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);