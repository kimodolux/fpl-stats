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
    element_type: number;
    position: Position,
    team: number,
    team_name: string | undefined,
    total_points: number;
    minutes: number;
    goals_scored: number;
    assists: number;
    now_cost: number;
    now_cost_rank: number;
    selected_by_percent: number;
    selected_rank: number;
    points_per_game_rank: number;
    points_per_game: number;
    form: number;
    form_rank: number;
    bonus: number;
}

    // gameweek_stats: [Gameweek];
    // expected_gameweek_stats: [ExpectedGameweek];