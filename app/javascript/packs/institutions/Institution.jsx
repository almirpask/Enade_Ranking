import React, { Component } from "react";

export default class Institution extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <select defaultValue="">
                        <option defaultValue="" disabled>Choose your option</option>
                        <option defaultValue="1">Option 1</option>
                        <option defaultValue="2">Option 2</option>
                        <option defaultValue="3">Option 3</option>
                        <option defaultValue="3">Option 4</option>
                        <option defaultValue="3">Option 5</option>
                    </select>
                    <label>Courses Select</label>
                </div>
            </div> 
        )
    }
}