import React, { Component } from 'react';

export default class InstitutionForm extends Component {
    render(){
        return(
            <div className="row">
                <div className="input-field col s12 m6">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={this.props.data.name || ''}
                        onChange={(e) => this.props.handleData({name: e.target.value})}
                    />
                    <label htmlFor="name" className={this.props.data.name? 'active': ''}>Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input 
                        type="text" 
                        name="general_note" 
                        id="general_note" value={this.props.data.general_note || ''}
                        onChange={(e) => this.props.handleData({general_note: e.target.value})}
                    />
                    <label htmlFor="general_note" className={this.props.data.general_note? 'active': ''}>general note</label>
                </div>
            </div>
        )
    }
}