import { useState } from 'react';

interface NewItem {
  name: string;
  description: string;
  price: number;
  image: File | null;
}

interface NewItemFormProps {
  onSubmit: (item: NewItem) => Promise<void>;
}

const NewItemForm: React.FC<NewItemFormProps> = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState<NewItem>({
    name: '',
    description: '',
    price: 0,
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null; // Ensure the image is either a File object or null
    setNewItem(prevItem => ({
      ...prevItem,
      image: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onSubmit(newItem);
      console.log('New item created successfully');
      // Optionally, you can redirect the user or display a success message
    } catch (error) {
      console.error('Failed to create new item:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={newItem.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <br />
      <button type="submit">Create Item</button>
    </form>
  );
}

export default NewItemForm;
