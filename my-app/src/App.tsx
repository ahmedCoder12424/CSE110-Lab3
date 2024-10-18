import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

import { ThemeContext, themes } from "./themeContext";
import { useContext } from 'react';

import React, { useState, useEffect } from 'react'

import { ToDoList } from "./toDoList";
import { Route, Routes } from "react-router-dom";
import { StickyNotes } from "./StickyNotes";
import { Navbar } from "./navbar";





function App() {
  return (
    <div>
       <Navbar />

      <Routes>
        <Route path="/" element={<StickyNotes />} />
        <Route path="/todolist/:name" element={<ToDoList />} />

      </Routes>
    </div>
  );

}

export default App;
