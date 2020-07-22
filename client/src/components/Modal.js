import React, {useContext} from 'react';
import Context from "../state/StateContext"
import ReactDOM from 'react-dom'


const Modal = props => {
    const context = useContext(Context)
    const display = context.displayModalReducer.status ? "active" : ""    
    const handleClick=()=>{
        context.displayModalReducer.setDisplayModalAction()
    }
    return ReactDOM.createPortal(
        <div 
            className={`ui dimmer ${display}`} 
            onClick={handleClick}
        >
            <div 
                className="ui modal active" 
                onClick={e=>e.stopPropagation()}
            >
                <div className="header">
                    <i className="hand point down icon"></i>
                </div>
                    <div className="content">
                    <p>{context.displayModalReducer.message}</p>
                </div>
                <div className="actions">
                    <div 
                        className="ui primary basic button"
                        onClick={()=>handleClick()}
                    >
                        Hide
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
};

export default Modal