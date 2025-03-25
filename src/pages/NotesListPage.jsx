import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';

function NotesListPage({ notes, handleEdit, handleDelete }) {
  const navigate = useNavigate();

  const handleEditWithNavigation = (note) => {
    handleEdit(note);
    navigate('/create');
  };

  return (
    <div className="notes-page">
      <h2>Ваши заметки</h2>
      <div className="notes-list-container">
        <NoteList 
          notes={notes} 
          handleEdit={handleEditWithNavigation} 
          handleDelete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default NotesListPage; 