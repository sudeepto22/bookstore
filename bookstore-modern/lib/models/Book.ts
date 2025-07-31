import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBook {
  title: string;
  genre: string;
  description?: string;
  author: string;
  publisher?: string;
  pages?: string;
  image_url?: string;
  buy_url?: string;
  create_date?: Date;
}

export interface IBookDocument extends IBook, Document {
  _id: mongoose.Types.ObjectId;
}

const bookSchema = new Schema<IBookDocument>({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  image_url: {
    type: String
  },
  buy_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Book: Model<IBookDocument> = mongoose.models.Book || mongoose.model<IBookDocument>('Book', bookSchema);

export default Book;