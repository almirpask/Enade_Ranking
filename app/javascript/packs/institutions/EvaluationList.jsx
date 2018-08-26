import React, { Component } from 'react';

export default class InstitutionList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="row">
                <h2>Evaluations</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Students score</th>
                            <th>Course score</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.evaluations.filter(evaluations => !evaluations._destroy).map(evaluation => {
                        
                            return (
                                <tr key={evaluation.eid}>
                                    <td>{`${evaluation.course_name}`}</td>
                                    <td>{evaluation.student_score}</td>
                                    <td>{evaluation.course_score}</td>
                                    <td onClick={ () => this.props.setEvaluation(evaluation)}>Edit</td>
                                    <td onClick={ () => this.props.removeEvaluation(evaluation.eid) }>Remove</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}