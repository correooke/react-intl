import React from 'react';
import {
    FormattedMessage,
    FormattedNumber,
    FormattedPlural,
    FormattedDate,
    FormattedRelative,
    FormattedTime,
} from 'react-intl';
import messages from './languages/messages';
import Search from './components/Search';
import List from './components/List';
import Configuration from './components/Configuration';
import PageTitle from './components/PageTitle';

const Home = ({start, search, items, lang, onChangeLang, onChangeSearch}) => {
    return (
        <div className={`app`}>
            <PageTitle />
            <div className="timer">
                <FormattedDate value={Date.now()}/>
                <FormattedTime value={Date.now()}/>
            </div>
            <div className="timer start">
                <FormattedRelative value={start} updateInterval={1000}/>
            </div>
            <div className="header">
                <h1><FormattedMessage {...messages.learnTitle}/></h1>
                <h2>i18n / ReactIntl</h2>
            </div>
            <Configuration lang={lang} onChangeLang={onChangeLang}/>
            <Search search={search} onChangeSearch={onChangeSearch}/>
            <div className="results">
                <FormattedMessage {...messages.results}>
                    {text => <h2>{text}</h2>}
                </FormattedMessage>
                <h4>
                    <FormattedNumber value={items.length}/>
                    <span> </span>
                    <FormattedPlural
                        value={items.length}
                        one={< FormattedMessage {
                        ...messages.technology
                    } />}
                        other={< FormattedMessage {
                        ...messages.technologies
                    } />}/>
                </h4>
            </div>
            <List items={items}/>
        </div>
    );
};

export default Home;