import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props){
        super(props)
    }

    renderContent(){
        if(this.props.rankings.length > 0) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Institution</th>
                            <th>Course</th>
                            <th>Institution note</th>
                            <th>Course score</th>
                            <th>Student score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.rankings.map(rank => {
                            return(
                                <tr key={rank.id}>
                                    <th>{rank.institution_name}</th>
                                    <th>{rank.course_name}</th>
                                    <th>{rank.institution_general_note}</th>
                                    <th>{rank.course_score}</th>
                                    <th>{rank.student_score}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
        } else {
            return(               
                <p className="center-align">Nothing found</p>                
            )
        }
    }
    render(){
        return(
            <div className="row">
                {this.renderContent()}
            </div>
        )
    }
}