import { Schema, models, model, Document } from 'mongoose';

export interface IFootballTeam extends Document {
  name: string; // Team name (e.g., "Manchester United")
  logo: string; // URL or path to the team's logo image
  country: string; // Country of origin (e.g., "England")
  league: string; // League the team competes in (e.g., "Premier League")
  stadium: string; // Name of the team's home stadium
  foundedYear: number; // Year the team was founded
  coach: string; // Name of the current head coach
}

const FootballTeamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
  stadium: {
    type: String,
    required: true,
  },
  foundedYear: {
    type: Number,
    required: true,
  },
  coach: {
    type: String,
    required: true,
  },
});

const FootballTeam =
  models.FootballTeam ||
  model<IFootballTeam>('FootballTeam', FootballTeamSchema);

export default FootballTeam;
