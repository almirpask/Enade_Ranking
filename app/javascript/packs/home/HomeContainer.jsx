import React, { Component } from 'react'
import Filter from './Filter'
import Table from './Table'
import axios from "axios";
const default_filter = {
    course_id: null,
    institution_id: null,
    institution_general_note: null,
    student_score: null,
    course_score: null
}

export default class HomeContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            filter: {...default_filter},
            courses: [],
            institutions: [],
            rankings: [],
            search_enabled: false,
        }

        this.addFilter = this.addFilter.bind(this)
        this.removeFilter = this.removeFilter.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }

    fetchRankings(filter){
        console.log(filter)
        axios.get('/rankings.json', {params: filter}).then(rankings => {
            this.setState({ rankings: rankings.data })
            console.log(rankings.data)
        })
    }
    componentDidMount(){
        axios.get('/courses.json').then(courses => {
            this.setState({ courses: courses.data })
        })
        axios.get('/institutions.json').then(institutions => {
            this.setState({ institutions: institutions.data })
        })
        this.fetchRankings(this.state.filter)
    }

    addFilter(){
        this.fetchRankings(this.state.filter)
        this.setState({search_enabled: true})
    }
    removeFilter(){
        this.setState({search_enabled: false, filter: default_filter})
        this.fetchRankings(default_filter)
    }
    handleFilter(filter){
        this.setState({
            filter: {...this.state.filter, ...filter}
        })
    }
    render(){
        return (
            <div>
                <Filter 
                    addFilter={this.addFilter}
                    removeFilter={this.removeFilter}
                    filter={this.state.filter}
                    handleFilter={this.handleFilter}
                    institutions={this.state.institutions}
                    courses={this.state.courses}
                    search_enabled={ this.state.search_enabled}
                />
                <Table rankings={this.state.rankings}/>
            </div>
        )
    }
}