import { PlayerHistory } from "@/types/PlayerHistory";
import {Box} from '@/app/lib/mui-material';
import { getTeamById } from "@/utils/lookup";


export function PlayerHistoryRow(props: {history: PlayerHistory}) {
    let {history} = props
    return(
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", alignContent: "center" }}>
            <Box sx={{ p: 1,m: 1 }}>
                {history.round}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.opponent_team}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.total_points}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.starts}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.minutes}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.goals_scored}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.assists}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.expected_goals}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.expected_assists}
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                {history.expected_goal_involvements}
            </Box>
        </Box>
    )
}