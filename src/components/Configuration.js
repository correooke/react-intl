import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import messages from '../languages/messages';

const Configuration = ({lang, onChangeLang, intl}) => {
    return (
        <div className="configuration">
            <div>
                <span><FormattedMessage {...messages.language}/></span>
                <select onChange={onChangeLang}>
                    <option value="es">{intl.formatMessage(messages.es)}</option>
                    <option value="en">{intl.formatMessage(messages.en)}</option>
                </select>
                <span> </span>
                { 
                    lang === 'es' ? 
                        <FormattedMessage 
                            {...messages.selectedLanguage} 
                            values={{ language: intl.formatMessage(messages.es)}} /> :
                        <FormattedMessage 
                            {...messages.selectedLanguage} 
                            values={{ language: intl.formatMessage(messages.en)}} /> 
                }
            </div>
        </div>
    );
};

export default injectIntl(Configuration);