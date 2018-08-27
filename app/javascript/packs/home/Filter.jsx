import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row">
                <div className="input-field col s12 m2">
                    <select 
                        className="browser-default" 
                        value={this.props.filter.institution_id || ''}
                        onChange={(e) => this.props.handleFilter({institution_id: e.target.value})}
                    >
                        <option value="" key="0" disabled>Institution</option>
                        {this.props.institutions.map(institutions => {
                            return (
                                <option value={institutions.id} key={institutions.id}>{institutions.name}</option>        
                            )
                        })}
                    </select>
                </div>
                <div className="input-field col s12 m2">
                    <select 
                        className="browser-default" 
                        value={this.props.filter.course_id || ''}
                        onChange={(e) => this.props.handleFilter({course_id: e.target.value})}>
                        <option value="" key="0" disabled>Course</option>
                        {this.props.courses.map(course => {
                            return (
                                <option value={course.id} key={course.id}>{course.name}</option>        
                            )
                        })}
                    </select>
                </div>
                <div className="input-field col s12 m2">
                    <input 
                        type="number" 
                        name="institution_note" 
                        id="institution_note"
                        value={this.props.filter.institution_general_note || ''}
                        onChange={(e) => this.props.handleFilter({institution_general_note: e.target.value})}
                        />
                    <label htmlFor="institution_note">institution note</label>
                </div>
                <div className="input-field col s12 m2">
                    <input 
                        type="number" 
                        name="course_score" 
                        id="course_score"
                        value={this.props.filter.course_score || ''}
                        onChange={(e) => this.props.handleFilter({course_score: e.target.value})}/>
                    <label htmlFor="course_score">course score</label>
                </div>
                <div className="input-field col s12 m2">
                    <input 
                        type="number"
                        name="student_score"
                        id="student_score"
                        value={this.props.filter.student_score || ''}
                        onChange={(e) => this.props.handleFilter({student_score: e.target.value})}/>
                    <label htmlFor="student_score">student score</label>
                </div>
                <div className="input-field col s12 m1">
                    <button type="button" className="btn-flat green-text" onClick={() => this.props.addFilter()}><i className="material-icons">search</i></button>
                </div>
                <div className="input-field col s12 m1">
                    {this.props.search_enabled == true &&
                        <button type="button" className="btn-flat red-text" onClick={() => this.props.removeFilter()}><i className="material-icons">clear</i></button>
                    }
                </div>
            </div>
        )
    }
}