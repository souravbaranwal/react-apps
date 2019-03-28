import React, {Component} from "react";
import PropTypes from "prop-types";
var api = require('./utils/api');

function SelectLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="language">
      {languages.map(function(lang) {
        return (
          <li
            style={lang === props.selecedLanguage ? { color: "#d0021b" } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
}
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}



class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedLanguage: 'All',
            repos: null
         };
         this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang,
            }
        })
    }

    render() {
        return (
            <div>
                <SelectLanguage 
                selectedLanguage = {this.state.selectedLanguage}
                onSelect = {this.updateLanguage}
                />
            </div>
        );
    }
}

export default Popular;

