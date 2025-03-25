import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, handleEdit, handleDelete }) {
  return (
    <div className="notes-container">
      {notes.length === 0 ? (
        <div className="empty-notes-container">
          <p className="no-notes">У вас пока нет заметок. Создайте первую!</p>
        </div>
      ) : (
        <div className="notes-scroll-container">
          {notes.map(note => (
            <NoteItem 
              key={note.id} 
              note={note} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NoteList; 