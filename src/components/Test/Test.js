import React from "react";
import CommentPost from "./CommentPost";
import ApproveCard from "./ApproveCard";
import './Test.scss'

const Test = (props) => {
    return (
        <React.Fragment>

            <div className="card-container">
                <ApproveCard>
                    <div className="div">
                        <h3>WARNING!</h3>
                        <h4>  Are you sure you want to do this?</h4>
                    </div>

                </ApproveCard>
                <ApproveCard>
                    <CommentPost
                        author="Akbar"
                        timeAgo="Yesterday at 1:12 am"
                        comment="Informative Post, loved the effort!"
                    />
                </ApproveCard>
                <ApproveCard>
                    <CommentPost
                        author="Asad"
                        timeAgo="Today at 10:12 pm"
                        comment="Amazing details! can I copy it?"
                    />
                </ApproveCard>
            </div>
        </React.Fragment>
    );
};

export default Test;
