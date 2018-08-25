import React, { Component } from "react";
import Institution from './Institution';
import FooterModal from '../common/FooterModal';
import Form from "./Form";
import axios from 'axios';
import { routes } from '../routes';

export default class InstitutionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: {
                name: null,
                general_note: null
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleData = this.handleData.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.data)
        const csrfToken = document.querySelector('[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
        
        axios.post('/institutions.json', this.state.data)
    }
    handleData(data){        
        this.setState({
            data: { ...this.state.data, ...data }
        })
    }
    
    render(){
        return (
            <div>
                <Form 
                    data={this.state.data} 
                    handleSubmit={this.handleSubmit} 
                    handleData={this.handleData}
                />
                <FooterModal>
                    <Institution/>
                </FooterModal>
            </div>
            
        )
    }
}