import React, {Component} from 'react';
import './App.css';
import data from './data';
import languages from './languages';
import {IntlProvider, injectIntl} from 'react-intl';
import Home from './Home';

class App extends Component {

    state = {
        configurationContext: {
            lang: 'es',
            filter: {
                search: ''
            }
        },
        search: '',
        items: data,
        start: Date.now()
    }

    onChangeSearch = search => {
        const items = data.filter(this.matchSearch(search));
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

    matchSearch(search) {
        return item => item
            .title
            .toLowerCase()
            .includes(search.toLowerCase());
    }

    render() {
        const {lang} = this.state.configurationContext;
        //const {language} = navigator;
        return (
            <IntlProvider locale={lang} messages={languages[lang]}>
                <Home
                    {...this.state}
                    lang={lang}
                    onChangeSearch={this.onChangeSearch}
                    onChangeLang={this.onChangeLang}/>
            </IntlProvider>
        );
    }
}

export default injectIntl(App);
