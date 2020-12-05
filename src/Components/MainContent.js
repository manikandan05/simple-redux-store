import CreateUser from './CreateUser';

const Detail = (props) => {
    return (
        <div className="demo-main-wrapper">
            <div className="demo-main-header">
                {props.name}
            </div>
            <div className="demo-content">
                {props.content}
            </div>
        </div>
    )
}

const MainContent = (props) => {
    return (
        <div>
            {!props.newUser ? <Detail name={props.name} content={props.content} /> : <CreateUser />}
        </div>
    )
}

export default MainContent;