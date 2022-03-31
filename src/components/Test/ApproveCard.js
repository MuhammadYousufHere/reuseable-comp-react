import React from 'react'
import "./ApproveCard.scss";

const ApproveCard = props => {

    return (
        <div className="approve-container">
            <div className="content">{props.children}</div>
            <hr />
            <div className="buttons-card">
                <button className='btn green btn-effect'>Approve</button>
                <button className='btn red btn-effect'>Reject</button>
            </div>

        </div>
    )
}
export default ApproveCard;
