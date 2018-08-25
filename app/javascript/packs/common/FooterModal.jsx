import React, { Component } from "react";

export default class FooterModal extends Component {
    constructor(props){
        super(props)
        this.openModal = this.openModal.bind(this)
        this.state = { openModal: '' }
    }
    componentDidMount(){
        
        let elem = document.getElementById('modal_footer');
        let instance = M.Modal.init(elem, {})
        this.setState({ openModal:  instance })
    
    }

    openModal(){
        console.log(this.state.openModal.open())
    }
    render() {
        return (
            <div>
                {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
                <a className="waves-effect waves-light btn right" onClick={this.openModal}>Add Course</a>
                <div id="modal_footer" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        
                    </div>
                    <div className="modal-action">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}