import { useState } from 'react';

function ImageUpload({ image, setImage }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    document.getElementById('image-upload').value = '';
  };

  return (
    <div className="image-upload">
      <label htmlFor="image-upload">Добавить изображение (опционально)</label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div className="image-preview">
          <img src={image} alt="Предпросмотр" />
          <button type="button" onClick={handleRemoveImage}>
            Удалить изображение
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUpload; 