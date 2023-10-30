"use client"

import Link from 'next/link'
import {Box} from '../../lib/mui';
import {getTeamById} from "../../../utils/team"
import { useEffect, useState } from 'react';
import { Player } from '../../../types/Player';
import { Team } from '../../../types/Team';
import { TeamStanding } from '../../../types/TeamStanding';
  
  export default function Page() {

    const [points_data, setPointsData] = useState<TeamStanding | null>(null)
    const [team_data, setTeamData] = useState<Team | null>(null)
    const [player_data, setPlayerData] = useState<Player[] | null>(null)

    useEffect(() => {
      fetch('/table/api').then((res) => res.json())
      .then((returned_data) => {
        setPointsData(returned_data.data[0])
      })
      fetch('/table/api').then((res) => res.json())
      .then((returned_data) => {
        setTeamData(returned_data.data[0])
      })
      fetch('/table/api').then((res) => res.json())
      .then((returned_data) => {
        setPlayerData(returned_data.data[0])
      })
    }, [])

    if(!points_data || !team_data || !player_data){
        return (
          <Box>
            <p>Loading...</p>      
          </Box>
        )
    }
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
        <h2>Team</h2>
          <h3>Team standing</h3>
          <h4>Wins: {points_data.wins}</h4>
          <h4>Draws: {points_data.draws}</h4>
          <h4>Losses: {points_data.losses}</h4>

          <h3>Team Stats</h3>
          <h4>Overall Strength: {team_data.strength_overall}</h4>
          <h4>Home Strength: {team_data.strength_overall_home}</h4>
          <h4>Away Strength: {team_data.strength_overall_away}</h4>

          <h3>Players</h3>
          List of players
          {player_data.map((player) => {
            return (
              <Box>
                <div>
                  <h4>Name: {player.first_name} {player.last_name}</h4>
                  <h4>Goals: {player.goals}</h4>
                  <h4>Assists: {player.assists}</h4>
                </div>
              </Box>
            )
          })}
        </div>
      </main>
    )
  }
  