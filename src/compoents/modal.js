 
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
title:'',
image:"",
rating:"",


      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

handleChange=(event)=>{
    this.setState({
       [event.target.name] : event.target.value
    })

}
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>+{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
    title:<input name="title"  onChange={this.handleChange} type="text"></input>
    image:<input name="image"  onChange={this.handleChange} type="url"></input>
    rating:<input name="rating" onChange={this.handleChange} type="text"></input>


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.props.add(this.state.title,this.state.image,this.state.rating)}>VALID</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;