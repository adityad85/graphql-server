import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  authorId: String,
  genre: String,
});

const BookModel = mongoose.model('book', bookSchema);

export default BookModel;
