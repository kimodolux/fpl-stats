import {Box} from '@/app/lib/mui-material';
import { BadgeType, TeamBadgeOptions } from '@/types/TeamBadge';

export function JerseyBadge(props: {badgeOptions: TeamBadgeOptions}) {
    let {type, primaryColour, secondaryColour} = props.badgeOptions
    switch(type){
        case BadgeType.Full:
            return(
                <Box sx={{ backgroundColor: primaryColour, height: "2.5em", width: "2.5em", border: 3, borderColor: "#ffffff", borderRadius: "50%"}}></Box>
            )

        case BadgeType.Half:
            return(
                <Box sx={{ backgroundColor: secondaryColour, height: "2.5em", width: "2.5em", border: 3, borderColor: "#ffffff", borderRadius: "50%"}}>
                    <Box sx={{ backgroundColor: primaryColour, height: "2.5em", width: "1.25em", borderRadius: "1.25em 0 0 1.25em"}}></Box>
                </Box>
            )
        default:
            return(
                <Box sx={{ backgroundColor: "grey", height: "2.5em", width: "2.5em", border: 3, borderColor: "#ffffff", borderRadius: "50%"}}></Box>
            )
    }
}