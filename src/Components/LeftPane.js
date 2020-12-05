import { useState } from 'react';

const LeftPane = (props) => {

    const [isUp, iconUpdate] = useState(true);
    const [isdownUp, iconDownUpdate] = useState(true);
    const [isFirstShow, firstShow] = useState(true);
    const [isSecondShow, secondShow] = useState(true);


    const popupHide = args => {
        const isCheck = args.target.getAttribute('class').indexOf('angle-up') > -1;
        if (args.target.getAttribute("id") === "first") {
            firstShow(isCheck);
            iconUpdate(isCheck);
        } else {
            secondShow(isCheck);
            iconDownUpdate(isCheck);
        }
    }
    return (
        <div className="demo-left-pane">
            <div className="demo-row-wrapper">
                <div className="demo-row">
                    <div className="demo-nav-title">
                        <div className="menu-header">Menu Group<span id="first" onClick={(e) => popupHide(e)} className={!isUp ? "fa fa-angle-up" : "fa fa-angle-down"} /> </div>
                        <div className={isFirstShow ? "show" : "fade"}>
                            <span onClick={props.navLink}>Menu Item1</span>
                            <span onClick={props.navLink}>Menu Item2</span>
                            <span onClick={props.navLink}>Menu Item3</span>
                        </div>
                    </div>
                </div>

                <div className="demo-row">
                    <div className="demo-nav-title">
                        <div className="menu-header">Menu Group<span id="second" onClick={(e) => { popupHide(e) }} className={!isdownUp ? "fa fa-angle-up" : "fa fa-angle-down"} /> </div>
                        <div className={isSecondShow ? "show" : "fade"}>
                            <span onClick={props.navLink}>Menu Item1</span>
                            <span onClick={props.navLink}>Menu Item2</span>
                            <span onClick={props.navLink}>Menu Item3</span>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default LeftPane;