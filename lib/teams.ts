import axios from 'axios';

export async function fullTeams() {
  const response = await axios.get('https://api.football-data.org/v4/teams/', {
    headers: {
      'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_DATA,
    },
  });
  const teams = response.data.teams;
  return teams;
}
