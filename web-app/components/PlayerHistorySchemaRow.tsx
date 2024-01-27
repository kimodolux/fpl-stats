import {Box} from '@/app/lib/mui-material';


export function PlayerHistorySchemaRow() {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", alignContent: "center"}}>
            <Box sx={{ p: 1,m: 1 }}>
                Round
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                Opp
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                Pts
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                GS
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                Minutes
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                G
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                A
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                xG
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                xA
            </Box>
            <Box sx={{ p: 1,m: 1 }}>
                xGI
            </Box>
        </Box>
    )
}