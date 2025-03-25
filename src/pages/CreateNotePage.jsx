import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';

function CreateNotePage({ 
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
  const navigate = useNavigate();

  const handleSubmitWithRedirect = (e) => {
    handleSubmit(e);
    navigate('/');
  };

  const handleCancelWithRedirect = () => {
    handleCancelEdit();
    navigate('/');
  };

  return (
    <div className="create-note-page">
      <h2>{editingId !== null ? 'Редактирование заметки' : 'Создание новой заметки'}</h2>
      <div className="form-container">
        <NoteForm 
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          image={image}
          setImage={setImage}
          editingId={editingId}
          handleSubmit={handleSubmitWithRedirect}
          handleCancelEdit={handleCancelWithRedirect}
        />
      </div>
    </div>
  );
}

export default CreateNotePage; 