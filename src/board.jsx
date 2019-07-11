import React, { Component } from 'react';
import Note from '../src/note';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        "Sample note 1.",
        "Sample note 2.",
        "Sample note 3."
      ]
    };  
  }

  addNote = (text) => {
    const notesArr = this.state.notes;
    notesArr.push(text);
    this.setState({notes: notesArr});
  }

  removeNote = (i) => {
    // where i = index of a note
    console.log("Removing Note at index: " + i);
    const notesArr = this.state.notes;
    notesArr.splice(i, 1);
    this.setState({notes: notesArr});
  }

  updateNote = (i, newText) => {
    // where i = index of a note
    console.log("Updating Note at index: " + i);
    const notesArr = this.state.notes;
    notesArr[i] = newText;
    this.setState({notes: notesArr});
  }

  renderNotes(text, i) {
    return (
      <Note key={i} index={i} removeNote={this.removeNote} updateNote={this.updateNote}>
        {text}
      </Note>
    );
  }

  render() {
    return(
      <div>
        <button> New Note </button> 
        <div>
          {this.state.notes.map(this.renderNotes, this)}
        </div>
      </div>
    );
  }
}

export default Board;