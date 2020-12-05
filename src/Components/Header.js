const Header = (props) => {
    return (
        <div className="demo-header">
            <span className="demo-title">{props.title}</span>
            <div className="user-btn">
                <button onClick={props.createForm}>Create User</button>
            </div>
            {props.welcome &&
                <div className="user"> Welcome  
                    {props.welcome}
                </div>
            }

        </div>
    )
}

export default Header;