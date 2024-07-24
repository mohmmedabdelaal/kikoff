// models/News.ts
import { Schema, models, model, Document } from 'mongoose';

export interface INews extends Document {
  slug: string;
  image: string;
  content: string;
  title: string;
  createdDate: Date;
}

const NewsSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const News = models.News || model<INews>('News', NewsSchema);

export default News;
