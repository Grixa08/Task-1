import React from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <div className="note-content">{note.content}</div>
      {note.image && (
        <div className="note-image">
          <img 
            src={note.image} 
            alt={note.title}
          />
        </div>
      )}
      <div className="note-actions">
        <button onClick={() => onEdit(note)}>Редактировать</button>
        <button onClick={() => onDelete(note.id)} className="delete-button">
          Удалить
        </button>
      </div>
    </div>
  );
}

export default NoteItem; 