import React, { Component } from "react";
import InstitutionModal from './InstitutionModal';
import InstitutionForm from "./InstitutionForm";
import EvaluationList from "./EvaluationList";
import axios from 'axios';

let counter = 1;
const default_course = {
    course_name: null,
    course_score: null,
    student_score: null,
    course_id: null,
    edit: false
}
export default class InstitutionContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            courses: [],
            current_course: {
                course_name: null,
                course_score: null,
                student_score: null,
                course_id: null,
                edit: false,
            },
            evaluations: [],
            data: {
                name: null,
                general_note: null,
                evaluations: []
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleData = this.handleData.bind(this);
        this.handleCourse = this.handleCourse.bind(this);
        this.updateEvaluation = this.updateEvaluation.bind(this);
        this.removeEvaluation = this.removeEvaluation.bind(this);
        this.addEvalutation = this.addEvalutation.bind(this);
        this.setEvaluation = this.setEvaluation.bind(this);
    }
    componentDidMount(){
        axios.get('/courses.json').then(resp => {
            this.setState({ courses: resp.data })
        }).then(()=>{
            if(this.props.institutionId){
                axios.get(`/institutions/${this.props.institutionId}.json`).then( resp => {
                    console.log(resp.data)
                    this.setState({data: { ...this.state.data, ...resp.data}, evaluations: resp.data.rankings.map(rank => {
                        let course = this.state.courses.find( course => {
                            return course.id == rank.course_id
                        })
                        return {
                            ...rank,
                            course_name: course.name,
                            eid: counter++
                        }
                    })})
                })
            }
            M.FormSelect.init(document.getElementById('course_id'));
        })
    }
    handleSubmit(){
        event.preventDefault();
        const csrfToken = document.querySelector('[name="csrf-token"]').content;

        axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
        let data = {
            name: this.state.data.name,
            general_note: this.state.data.general_note,
            rankings_attributes: this.state.evaluations
        }

        if(this.props.institutionId){
            axios.put(`/institutions/${this.props.institutionId}.json`, data).then( resp => {
                if (resp.status == 200) {
                    window.location= "/institutions"
                }
            })
        } else {
            axios.post('/institutions.json', data).then( resp => {
                if (resp.status == 201) {
                    window.location= "/institutions"
                }
            })
        }
    }
    handleData(data){
        this.setState({
            data: { ...this.state.data, ...data }
        })
    }
    handleCourse(course){
        this.setState({
            current_course: { ...this.state.current_course, ...course }
        })
    }
    updateEvaluation(){
        let evaluations = this.state.evaluations.map(evaluation => {
            if (evaluation.eid === this.state.current_course.eid) {
                return { ...evaluation, ...this.state.current_course }
            } else {
                return evaluation
            }
        })
        this.setState({
            evaluations: evaluations
        })
    }
    addEvalutation(){
        let course = this.state.courses.find( course => {
            return course.id == this.state.current_course.course_id
        })
        this.setState({
            evaluations: this.state.evaluations.concat(
                {   
                    eid: counter++,  
                    course_name: course.name,
                    course_id: this.state.current_course.course_id,
                    student_score: this.state.current_course.student_score,
                    course_score: this.state.current_course.course_score,
                }
            ) 
        })
    }
    removeEvaluation(id){ 
        let evaluations = this.state.evaluations.map(evaluation => {
            if (evaluation.eid == id){
                return {
                    ...evaluation, 
                    _destroy: true
                }
            } else {
                return evaluation
            }
        })
        this.setState({ 
            evaluations: evaluations 
        })
    }

    setEvaluation(evaluation) {
        evaluation.edit = true;
        this.setState({ current_course: evaluation })
        document.getElementById('modal_footer').M_Modal.open()
    }
    openModal(){
        this.setState({ current_course:  default_course})
        document.getElementById('modal_footer').M_Modal.open()
    }
    render(){
        return (
            <div>
                <InstitutionForm 
                    data={this.state.data} 
                    handleSubmit={this.handleSubmit} 
                    handleData={this.handleData}
                />
                <div className="divider"></div>
                <div className="row">
                    <br/>
                    <div className="col m12">
                        <a className="waves-effect waves-light btn right" onClick={() => this.openModal()}> Add course</a>
                    </div>
                </div>
                {this.state.evaluations.length > 0 &&
                    <EvaluationList 
                        evaluations={this.state.evaluations}
                        setEvaluation={this.setEvaluation}
                        removeEvaluation={this.removeEvaluation}
                    />
                }
                <InstitutionModal
                    course={this.state.current_course}
                    courses={this.state.courses}
                    handleCourse={this.handleCourse}
                    addEvalutation={this.addEvalutation}
                    updateEvaluation={this.updateEvaluation}
                />
                <button className="btn" type="button" onClick={() => this.handleSubmit()}>{this.props.institutionId? 'Edit': 'Create'}</button>
            </div>
            
        )
    }
}