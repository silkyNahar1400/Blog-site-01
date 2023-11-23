import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/Header';
import MainBody from './components/body/mainBody';
import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import Post from './components/routes/post';

export const MyContext = createContext("");
function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() =>{
    fetch('https://pixabay.com/api/?key=40830798-b276f19db689ffa165a775b1c&q=yellow+flowers&image_type=photo&pretty=true')
  .then(res => res.json())
  .then (data => setPhotos(data.hits));
 
}, []);
  return (
      <MyContext.Provider value={photos}>
      <Header/>
      <Routes>
    <Route exact path="/" element = {<MainBody/>} />
    <Route  path="/home" element = {<MainBody/>} />
    <Route  path="/post/:id" element = { <Post/>} />
      </Routes>
      </MyContext.Provider>
  
  );
}

export default App;