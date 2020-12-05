import { connect } from 'react-redux';
import { Component } from 'react';
import { CountryData } from './data';

const UserName = (e) => {
    return {
        type: "USERNAME",
        value: e.target.value
    }
}

const Password = (e) => {
    return {
        type: "PASSWORD",
        value: e.target.value
    }
}

const ConfirmPWD = (e) => {
    return {
        type: "CONFIRMPWD",
        value: e.target.value
    }
}

const Name = (e) => {
    return {
        type: "NAME",
        value: e.target.value
    }
}

const Country = (e) => {
    return {
        type: "COUNTRY",
        value: e.target.value
    }
}

const DOB = (e) => {
    return {
        type: "DOB",
        value: e.target.value
    }
}

const Citizen = (e) => {
    return {
        type: "CITIZEN",
        value: e.target.value
    }
}

const MapStateToProps = state => {
    return {
        details: state
    }
}

class CreateUser extends Component {

    state = {
        usermessage: '',
        pwdmessage: '',
        confirmpwdmessage: '',
        namemessage: '',
        password: ''
    }

    Validate = (args) => {
        const value = args.target.value;
        if (value.length === 0) {
            this.setState({ usermessage: "Username Field Required" });
        }
        else if (!value.match(/^[a-zA-Z0-9]+$/)) {
            this.setState({ usermessage: "Alpha numeric characters allowed" });
        }
        else if (value.length > 15) {
            this.setState({ usermessage: "Maximum 15 character allowed" });
        } else {
            this.setState({ usermessage: "" });
        }
    }
    ValidatePwd = (args) => {
        const value = args.target.value;
        this.setState({ password: value });
        if (value.length > 18) {
            this.setState({ pwdmessage: "Maximum 18 character allowed" });
        }
        else {
            this.setState({ pwdmessage: "" });
        }
    }

    ConfirmPwd = (args) => {
        const value = args.target.value;
        if (value.length > 18) {
            this.setState({ confirmpwdmessage: "Maximum 18 character allowed" });
        }
        else if (value !== this.state.password) {
            this.setState({ confirmpwdmessage: "Password does not match" });
        }
        else {
            this.setState({ confirmpwdmessage: "" });
        }
    }

    ValidateName = (args) => {
        const value = args.target.value;
        if (!value.match(/^[a-zA-Z0-9]+$/)) {
            this.setState({ namemessage: "Alpha numeric characters allowed" });
        }
        else {
            this.setState({ namemessage: "" });
        }
    }


    render() {
        return (
            <div className="demo-main-wrapper">
                <div className="demo-user-details">
                    <div className="demo-row">
                        <div className="demo-label">Username</div>
                        <div className="demo-widget">
                            <input type="text" required onBlur={(e) => this.Validate(e)} onInput={(e) => this.Validate(e)} name="username" onChange={(e) => { this.props.dispatch(UserName(e)) }}></input>
                            {this.state.usermessage && <span className="text-danger">{this.state.usermessage}</span>}
                        </div>
                    </div>
                    <div className="demo-row">
                        <div className="demo-label">Password</div>
                        <div className="demo-widget">
                            <input type="password" onInput={(e) => this.ValidatePwd(e)} required name="password" onChange={(e) => { this.props.dispatch(Password(e)) }}></input>
                            {this.state.pwdmessage && <span className="text-danger">{this.state.pwdmessage}</span>}
                        </div>
                    </div>
                    <div className="demo-row">
                        <div className="demo-label">Confirm Password</div>
                        <div className="demo-widget">
                            <input type="password" onBlur={(e) => this.ConfirmPwd(e)} required name="confirmpwd" onChange={(e) => { this.props.dispatch(ConfirmPWD(e)) }}></input>
                            {this.state.confirmpwdmessage && <span className="text-danger">{this.state.confirmpwdmessage}</span>}
                        </div>
                    </div>
                    <div className="demo-row">
                        <div className="demo-label">Display name</div>
                        <div className="demo-widget">
                            <input type="text" onInput={(e) => this.ValidateName(e)} required name="name" onChange={(e) => { this.props.dispatch(Name(e)) }}></input>
                            {this.state.namemessage && <span className="text-danger">{this.state.namemessage}</span>}
                        </div>
                    </div>
                    <div className="demo-row">
                        <div className="demo-label">DOB</div>
                        <div className="demo-widget">
                            <input type="date" required name="dob" onChange={(e) => { this.props.dispatch(DOB(e)) }}></input>
                        </div>
                    </div>
                    <div className="demo-row">
                        <div className="demo-label">Country</div>
                        <div className="demo-widget">
                            <select onChange={(e) => { this.props.dispatch(Country(e)) }}>
                                {CountryData.map((option, key) => <option key={key} id={option.id} >{option.value}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="demo-row">
                        <div className="demo-label">CitizenShip</div>
                        <div className="demo-widget">
                            <input className="radio" required type="radio" name="citizen" onChange={(e) => { this.props.dispatch(Citizen(e)) }}></input> <label>Yes</label>
                            <input className="radio" required type="radio" name="citizen" onChange={(e) => { this.props.dispatch(Citizen(e)) }}></input> <label>No</label>
                        </div>
                    </div>
                    <div className="demo-row">
                        <button type="submit">Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

//export default CreateUser;

export default connect(MapStateToProps, null)(CreateUser);


