import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from '../languages/messages';

const Item = ({image, title, details}) => {
    return (
        <div className={`item`}>
            <img src={image} alt=""/>
            <div className="text">
                <h3>{title}</h3>
                <p>
                    <strong>
                        <FormattedMessage {...messages.details}/>
                    </strong>
                    {details}</p>
            </div>
        </div>
    );
};

export default Item;