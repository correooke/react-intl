import React, {Component} from 'react';
import './App.css';
import data from './data';
import Search from './components/Search';
import List from './components/List';
import Configuration from './components/Configuration';
import languages from './languages';
import {IntlProvider, FormattedMessage} from 'react-intl';
import messages from './languages/messages';

class App extends Component {

    state = {
        configurationContext: {
            lang: 'es',
            filter: {
                search: ''
            }
        },
        search: '',
        items: data
    }

    onChangeSearch = search => {
        const items = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        this.setState({items, search});
    }

    onChangeLang = e => {
        this.setState({
            configurationContext: {
                ...this.state.configurationContext,
                lang: e.target.value
            }
        });
    }

    render() {
        const {theme, lang} = this.state.configurationContext;
        const {language} = navigator;
        return (
            <IntlProvider locale={language} messages={languages[lang]}>
                <div className={`app ${theme}`}>
                    <div className="header">
                        <h1><FormattedMessage {...messages.learnTitle}/></h1>
                        <h2>i18n / ReactIntl</h2>
                    </div>
                    <Configuration lang={lang} onChangeLang={this.onChangeLang}/>
                    <Search search={this.state.search} onChangeSearch={this.onChangeSearch}/>
                    <h2 className="results"><FormattedMessage {...messages.results}/></h2>
                    <List items={this.state.items}/>
                </div>
            </IntlProvider>

        );
    }
}

export default App;
