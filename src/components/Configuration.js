import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from '../languages/messages';

const Configuration = ({lang, onChangeLang}) => {
    return (
        <div className="configuration">
            <div>
                <span><FormattedMessage {...messages.language}/></span>
                <select onChange={onChangeLang}>
                    <option value="es"><FormattedMessage {...messages.es}/></option>
                    <option value="en"><FormattedMessage {...messages.en}/></option>
                </select>
                <FormattedMessage {...messages.selectedLanguage}/>{lang}
            </div>
        </div>
    );
};

export default Configuration;