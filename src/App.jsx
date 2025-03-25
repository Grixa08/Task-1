import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { getNotes, saveNotes } from './utils/storage'
import CreateNotePage from './pages/CreateNotePage'
import NotesListPage from './pages/NotesListPage'

function App() {
  const [notes, setNotes] = useState(() => getNotes());
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editingId !== null) {
      setNotes(notes.map(note => 
        note.id === editingId ? { 
          ...note, 
          title, 
          content, 
          image, 
          updatedAt: new Date().toISOString() 
        } : note
      ));
      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        content,
        image,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setNotes([newNote, ...notes]);
    }

    setTitle('');
    setContent('');
    setImage(null);
    document.getElementById('image-upload').value = '';
  };

  const handleEdit = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setImage(note.image);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (editingId === id) {
      handleCancelEdit();
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
    setImage(null);
    document.getElementById('image-upload').value = '';
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="content-container pages-container">
          <Routes>
            <Route 
              path="/" 
              element={
                <NotesListPage 
                  notes={notes} 
                  handleEdit={handleEdit} 
                  handleDelete={handleDelete} 
                />
              } 
            />
            <Route 
              path="/create" 
              element={
                <CreateNotePage 
                  title={title}
                  setTitle={setTitle}
                  content={content}
                  setContent={setContent}
                  image={image}
                  setImage={setImage}
                  editingId={editingId}
                  handleSubmit={handleSubmit}
                  handleCancelEdit={handleCancelEdit}
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
