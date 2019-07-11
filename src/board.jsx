import React, { Component } from 'react';
import Note from '../src/note';
import './App.css';

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
      <div className="App-note-div" key={i}>
        <Note key={i} index={i} removeNote={this.removeNote} updateNote={this.updateNote}>
          {text}
        </Note>
      </div>
    );
  }

  render() {
    return(
      <div>
        <button className="Add-note-button" onClick={this.addNote.bind(null, "Sample note")}> New Note </button> 
        {this.state.notes.map(this.renderNotes, this)}
      </div>
    );
  }
}

export default Board;