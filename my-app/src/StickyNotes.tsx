import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

import { ThemeContext, themes } from "./themeContext";
import { useContext } from 'react';

import React, { useState, useEffect } from 'react'

export const StickyNotes = () => {
    // your code from App.tsx

    const [notes, setNotes] = useState(dummyNotesList); 
    const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
    favorite: false,
    };
    const [createNote, setCreateNote] = useState(initialNote);
    const createNoteHandler = (event: React.FormEvent) => {
  
  
       event.preventDefault();
       console.log("title: ", createNote.title);
       console.log("content: ", createNote.content);
       createNote.id = notes.length + 1;
       setNotes([createNote, ...notes]);
       setCreateNote(initialNote);
    
     };
  
  
     const deleteNote = (note_id: number) => {
  
          console.log("removing note");
          console.log(notes);
          const temp = notes.filter( (note) => ( note.id != note_id));
          for (let i = 0; i < temp.length; i++){
  
                temp[i].id = i+1;
          }
          setNotes(temp.concat([]));
  
    
     };
  
  
  function FavoriteButton(note_id: number){
  
          
          function handleClick(){
            if (notes[note_id-1].favorite){
  
              notes[note_id-1].favorite= false;
            }
            else{
              notes[note_id-1].favorite = true;
            }
            setNotes(notes.concat([]));
          }
         // console.log(note_id);
          console.log("printing note data")
          console.log(notes)
       //   console.log(notes[note_id-1].favorite);
       
          return (
              
              <button onClick={handleClick}> { notes[note_id-1].favorite ? '❤️': '♡' } </button>
  
          );
          
   
    }
  
    function favoriteElement(note_id:number){
  
        if (notes[note_id-1].favorite){
  
          return <li> {notes[note_id-1].title} </li>
        }
        return null;
  
  
    }
  
  
  
    const [currentTheme, setCurrentTheme] = useState(themes.light);
  
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
  
    const theme = useContext(ThemeContext);
    return (
  
      <ThemeContext.Provider value={currentTheme}>
      <div style={{ background: currentTheme.background, color: currentTheme.foreground }}  className='app-container'>
        <form className="note-form" onSubmit={createNoteHandler}>
          <div >
            <input
              placeholder="Note Title"
              onChange={(event) =>
                setCreateNote({ ...createNote, title: event.target.value })}
              required>
            </input>
          </div>
    
          <div>
            <textarea
              placeholder="Note Content"
              onChange={(event) =>
                setCreateNote({ ...createNote, content: event.target.value })}
              required>
            </textarea>
          </div>
    
      <div>
           <select
             onChange={(event) =>
               setCreateNote({ ...createNote, label: event.target.value as Label })}
             required>
             <option value={Label.personal}>Personal</option>
             <option value={Label.study}>Study</option>
             <option value={Label.work}>Work</option>
             <option value={Label.other}>Other</option>
           </select>
         </div>
    
          <div><button type="submit">Create Note</button></div>
       
        </form>
  
         
        <div className="notes-grid">
          {notes.map((note) => (
            <div style={{ background: currentTheme.background, color: currentTheme.foreground }}
              key={note.id}
              className="note-item"
            >
              <div className="notes-header">
              {FavoriteButton(note.id)}
              <button onClick={() => deleteNote(note.id)}>x</button>
            
              </div>
              <h2 contentEditable="true"> {note.title} </h2>
              <p contentEditable="true"> {note.content} </p>
              <p contentEditable="true"> {note.label} </p>
            </div>   
  
          ))}
        </div>
       
        <div>
  
        <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <ul>
              {favoriteElement(note.id)}
            </ul>
            
          ))}
    
        </div>
         
  
  
      </div>        
      </ThemeContext.Provider> );
    

}