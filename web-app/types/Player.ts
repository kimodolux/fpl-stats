// import { ExpectedGameweek, Gameweek } from "./Gameweek";

enum Position {
    FORWARD="forward",
    MIDFIELD="midfield",
    DEFENDER="defender",
    GOALKEEPER="goalkeeper"
} 

export type Player = {
    id: number,
    first_name: string,
    second_name: string,
    web_name: string,
    position: Position,
    team: number,
    team_name: string | undefined,
    total_points: number;
    minutes: number;
    goals_scored: number;
    assists: number;
    now_cost: number;
}

    // gameweek_stats: [Gameweek];
    // expected_gameweek_stats: [ExpectedGameweek];