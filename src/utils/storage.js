const NOTES_STORAGE_KEY = 'notes';

export const getNotes = () => {
  const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
  return savedNotes ? JSON.parse(savedNotes) : [];
};

export const saveNotes = (notes) => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}; 