import { ExpectedGameweek, Gameweek } from "./Gameweek";

enum Position {
    FORWARD="forward",
    MIDFIELD="midfield",
    DEFENDER="defender",
    GOALKEEPER="goalkeeper"
} 

export type Player = {
    id: number,
    first_name: string,
    last_name: string,
    position: Position,
    team_id: number,
    total_points: number;
    minutes: number;
    goals: number;
    assists: number;
    cost: number;
    gameweek_stats: [Gameweek];
    expected_gameweek_stats: [ExpectedGameweek];
}