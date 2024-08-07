import { Schema, models, model, Document } from 'mongoose';

export interface IReplay extends Document {
  content: string;
  author: Schema.Types.ObjectId;
  likes: Schema.Types.ObjectId[];
  dislikes: Schema.Types.ObjectId[];
  news: Schema.Types.ObjectId;
  createdAt: Date;
}

const ReplaySchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  news: {
    type: Schema.Types.ObjectId,
    ref: 'News',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Replay = models.Replay || model('Replay', ReplaySchema);

export default Replay;
