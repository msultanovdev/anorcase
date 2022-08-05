import React from 'react';
import './Case.css';

const Case = ({ actionTitle, caseImage }) => {
    return(
        <div>
            <div className="case">
                <div className="case__img">
                    <img alt="case pic" className="case__image" src={caseImage} />
                    <h1 className="case__title">{actionTitle}</h1>
                </div>
            </div>
        </div>
    );
}

export default Case;