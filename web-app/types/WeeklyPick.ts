type PlayerPick = {
    element: number,
    is_captain: boolean,
    is_vice_captain: boolean,
    multiplier: number,
    position: number
}

type PickStats = {
    bank: number,
    event: number,
    event_transfers: number,
    event_transfers_cost: number,
    overall_rank: number,
    percentile_rank: number,
    points: number,
    points_on_bench: number,
    rank: number,
    rank_sort: number,
    total_points: number,
    value: number
}

export type WeeklyPick = {
    automatic_subs: [],
    entry_history: PickStats,
    picks: PlayerPick[]
}