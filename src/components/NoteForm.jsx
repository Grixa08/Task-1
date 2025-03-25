import React from 'react';
import ImageUpload from './ImageUpload';

function NoteForm({ 
  title, 
  setTitle, 
  content, 
  setContent, 
  image, 
  setImage, 
  editingId, 
  handleSubmit, 
  handleCancelEdit 
}) {
  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Содержание заметки"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows="5"
      />
      <ImageUpload image={image} setImage={setImage} />
      <button type="submit">
        {editingId !== null ? 'Сохранить изменения' : 'Создать заметку'}
      </button>
      {editingId !== null && (
        <button 
          type="button" 
          onClick={handleCancelEdit}
          className="cancel-button"
        >
          Отменить редактирование
        </button>
      )}
    </form>
    
  );
}

export default NoteForm; 