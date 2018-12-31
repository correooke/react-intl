import { Component } from 'react';
import messages from './../languages/messages';
import { injectIntl } from 'react-intl';

class PageTitle extends Component {

    updateLanguage = () => {
        document.title = this
            .props
            .intl
            .formatMessage(messages.learnTitle);            
    }

    componentDidMount() {
        this.updateLanguage();
    }

    componentDidUpdate(prevProps, prevState) {
        this.updateLanguage();    
    }

    render() {
        return (
            null
        );
    }
}

export default injectIntl(PageTitle);