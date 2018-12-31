import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from '../languages/messages';

const Search = ({search, onChangeSearch}) => {

    return (
        <div className={`search`}>
            <FormattedMessage {...messages.search}/>
            <input
                type="text"
                value={search}
                onChange={e => {
                const {value} = e.target;
                onChangeSearch(value);
            }}/>
        </div>
    );
};

export default Search;