import mongoose from 'mongoose';

const { Schema } = mongoose;

const authorSchema = new Schema({
  name: String,
  age: String,
});

const AuthorModel = mongoose.model('author', authorSchema);

export default AuthorModel;
