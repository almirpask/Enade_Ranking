import React, { Component } from "react";

export default class FooterModal extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        M.Modal.init(document.getElementById('modal_footer'))
    }
    render() {
        return (
            <div>
                <div id="modal_footer" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4 className="align-center">{this.props.course.edit? 'Edit' : 'New' } Course</h4>
                        <div className="row">
                            <div className="input-field col s6 m6">
                                <select 
                                    className="browser-default"
                                    value={this.props.course.course_id || ''}
                                    id="course_id"
                                    onChange={(e) => this.props.handleCourse({course_id: e.target.value})}
                                >
                                    <option value="" key="0" disabled>Choose your option</option>
                                    {this.props.courses.map(course => {
                                        return(
                                            <option value={course.id} key={course.id}>{course.name}</option>                                
                                        )
                                    })}
                                </select>
                                {/* <label>Courses Select</label> */}
                            </div>
                            <div className="input-field col s3 m3">
                                <input
                                    type="number"
                                    name="student_core"
                                    id="student_core"
                                    value={this.props.course.student_score || ''}
                                    onChange={(e) => this.props.handleCourse({student_score: e.target.value})}
                                />
                                <label htmlFor="student_core">Student core</label>
                            </div>
                            <div className="input-field col s3 m3">
                                <input 
                                    type="number"
                                    name="course_score"
                                    id="course_score"
                                    value={this.props.course.course_score || ''}
                                    onChange={(e) => this.props.handleCourse({course_score: e.target.value})}
                                />
                                <label htmlFor="course_score">Course Score</label>
                            </div>
                        </div> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="modal-close waves-effect waves-green btn-flat" onClick={ () => this.props.course.edit? this.props.updateEvaluation() : this.props.addEvalutation()}>{this.props.course.edit? 'Edit' : 'Add'} </button>
                    </div>
                </div>
            </div>
        )
    }
}