import React from 'react';
import ReactDOM from 'react-dom';
import InstitutionContainer from "./InstitutionContainer";

ReactDOM.render (
    <InstitutionContainer institutionId={window.institutionId}/>,
    document.getElementById('insitution_form'),
)
