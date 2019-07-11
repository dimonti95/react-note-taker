import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editing: false
      };
  }

  edit = () => {
    this.setState({editing: true});
  }

  save = () => {
    this.setState({editing: false});
    this.props.updateNote(this.props.index, this.refs.textBox.value);
  }

  remove = () => {
    this.props.removeNote(this.props.index);
  }

  renderNormal() {
    return(
      <div>
        <div> {this.props.children} </div>
        <button onClick={this.edit}> Edit </button>
        <button onClick={this.remove}> Remove </button>
      </div>
    );
  }

  renderEdit() {
    return(
      <div>
        <div>
          <textarea ref="textBox" defaultValue={this.props.children}></textarea>
        </div>
        <button onClick={this.save}> Save </button>
      </div>
    );
  }

  render() {
    if(this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderNormal();
    }
  }
}

export default Note;