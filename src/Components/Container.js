import { Component } from 'react';
import LeftPane from './LeftPane';
import Header from './Header';
import MainContent from './MainContent';
import { connect } from 'react-redux';

const MapStateToProps = state => {
    return {
        details: state
    }
}

class Container extends Component {
    defaultNav = "Home";
    pageTitle = "Demo Page";

    state = {
        isNested: false,
        createForm: false,
        title: "Main content",
        headerTitle: "",
        content: "Main content",
        user: ''
    }

    createUser = () => {
        this.setState({ createForm: true });
    }

    NavigationClick = (args) => {
        this.setState({ title: args.target.innerText, headerTitle: args.target.innerText });
        this.setState({ Content: args.target.innerText + "Conent" });
    }

    submit = args => {
        this.setState({ user: " " + this.props.details.name });
        args.preventDefault();
        this.setState({ createForm: false });

    }

    render() {
        return (
            <div className="demo-container">
                <Header title={this.pageTitle} welcome={this.state.user} createForm={this.createUser} />
                <div className="demo-content-wrapper">
                    <div className="demo-nav-header">
                        {this.defaultNav}
                        {this.state.headerTitle ? <span> / {this.state.headerTitle}</span> : ""}
                    </div>
                    <LeftPane navLink={this.NavigationClick} />
                    <div className="demo-adjustable">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </div>
                    <form action="POST" onSubmit={this.submit} className="demo-main-content">
                        <MainContent newUser={this.state.createForm} name={this.state.title} content={this.state.title} />
                    </form>
                </div>
            </div>
        )

    }
}

export default connect(MapStateToProps, null)(Container);