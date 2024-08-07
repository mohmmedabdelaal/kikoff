'use server';
import FootballTeam from '@/database/FootballTeam.model';
import { connectToDatabase } from '../db';
import { revalidatePath } from 'next/cache';

export interface CreateFootballTeamParams {
  name: string;
  logo: string;
  country: string;
  league: string;
  stadium: string;
  foundedYear: number;
  coach: string;
}
export async function createTeam(params: CreateFootballTeamParams) {
  try {
    connectToDatabase();
    const { name, logo, country, league, stadium, foundedYear, coach } = params;

    const teams = new FootballTeam({
      name,
      logo,
      country,
      league,
      stadium,
      foundedYear,
      coach,
    });
    await teams.save();
    revalidatePath('/teams');
  } catch (error) {
    console.log(error);
  }
}

export interface GetTeamsParams {
  page?: number;
  pageSize?: number;
}

export async function getTeams(params: GetTeamsParams) {
  try {
    await connectToDatabase();

    // const { page = 1, pageSize = 10 } = params;

    const teams = await FootballTeam.find({}).sort({ name: 1 });

    return { teams };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTeamById(teamId: string) {
  try {
    connectToDatabase();

    const team = await FootballTeam.findById(teamId);

    if (!team) {
      throw new Error('Team not found');
    }

    return team;
  } catch (error) {
    console.error('Error fetching team by ID:', error);
    throw error; // Re-throw the error to handle it further up the stack
  }
}
