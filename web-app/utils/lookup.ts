import { BadgeType, TeamBadgeOptions } from "@/types/TeamBadge"

export const getPositionNameByType = (element_type: number) => {
    switch(element_type){
        case 1:
            return "Goalkeeper"
        case 2:
            return "Defender"
        case 3:
            return "Midfielder"
        case 4:
            return "Forward"

    }
}

export const getPositionShortNameByType = (element_type: number) => {
    switch(element_type){
        case 1:
            return "GKP"
        case 2:
            return "DEF"
        case 3:
            return "MID"
        case 4:
            return "FWD"

    }
}

export const getTeamById = (team_id: number) => {
    switch(team_id){
        case 1:
            return "Arsenal"
        case 2:
            return "Aston Villa"
        case 3:
            return "Bournmouth"
        case 4:
            return "Brentford"
        case 5:                        
            return "Brighton"
        case 6:
            return "Burnley"
        case 7:
            return "Chelsea"
        case 8:
            return "Crystal Palace"
        case 9:
            return "Everton"
        case 10:                        
            return "Fulham"
        case 11:
            return "Liverpool"
        case 12:
            return "Luton"
        case 13:
            return "Man City"
        case 14:
            return "Man Utd"
        case 15:                        
            return "Newcastle"
        case 16:
            return "Nottingham Forrest"
        case 17:
            return "Shefield Utd"
        case 18:
            return "Spurs"
        case 19:                        
            return "West Ham"
        case 20:
            return "Wolves"
    }
}

export const getTeamBadgeById = (team_id: number) => {
    switch(team_id){
        case 1:
            return {
                type: BadgeType.Full,
                primaryColour: "red",
                secondaryColour: undefined
            } as TeamBadgeOptions
        case 2:
            return {
                type: BadgeType.Half,
                primaryColour: "#670E36",
                secondaryColour: "#95BFE5"
            } as TeamBadgeOptions
        case 3:
            return {
                type: BadgeType.Half,
                primaryColour: "red",
                secondaryColour: "black"
            } as TeamBadgeOptions
        case 4:
            return {
                type: BadgeType.Half,
                primaryColour: "white",
                secondaryColour: "red"
            } as TeamBadgeOptions
        case 5:                        
        return {
            type: BadgeType.Half,
            primaryColour: "#0057B8",
            secondaryColour: "white"
        } as TeamBadgeOptions
        case 6:
            return {
                type: BadgeType.Full,
                primaryColour: "maroon",
                secondaryColour: undefined
            } as TeamBadgeOptions
        case 7:
            return {
                type: BadgeType.Full,
                primaryColour: "#034694",
                secondaryColour: undefined
            } as TeamBadgeOptions
        case 8:
            return {
                type: BadgeType.Half,
                primaryColour: "red",
                secondaryColour: "blue"
            } as TeamBadgeOptions
        case 9:
            return {
                type: BadgeType.Half,
                primaryColour: "dark blue",
                secondaryColour: "blue"
            } as TeamBadgeOptions
        case 10:                        
        return {
            type: BadgeType.Half,
            primaryColour: "white",
            secondaryColour: "black"
        } as TeamBadgeOptions
        case 11:
            return {
                type: BadgeType.Half,
                primaryColour: "#C8102E",
                secondaryColour: "#00B2A9"
            } as TeamBadgeOptions
        case 12:
            return {
                type: BadgeType.Half,
                primaryColour: "orange",
                secondaryColour: "white"
            } as TeamBadgeOptions
        case 13:
            return {
                type: BadgeType.Half,
                primaryColour: "#6CABDD",
                secondaryColour: "#FFC659"
            } as TeamBadgeOptions
        case 14:
            return {
                type: BadgeType.Full,
                primaryColour: "dark red",
                secondaryColour: "undefined"
            } as TeamBadgeOptions
        case 15:                        
        return {
            type: BadgeType.Half,
            primaryColour: "black",
            secondaryColour: "white"
        } as TeamBadgeOptions
        case 16:
            return {
                type: BadgeType.Full,
                primaryColour: "red",
                secondaryColour: undefined
            } as TeamBadgeOptions
        case 17:
            return {
                type: BadgeType.Half,
                primaryColour: "red",
                secondaryColour: "white"
            } as TeamBadgeOptions
        case 18:
            return {
                type: BadgeType.Full,
                primaryColour: "white",
                secondaryColour: undefined
            } as TeamBadgeOptions
        case 19:                        
        return {
            type: BadgeType.Half,
            primaryColour: "#7A263A",
            secondaryColour: "#F3D459"
        } as TeamBadgeOptions
        case 20:
            return {
                type: BadgeType.Full,
                primaryColour: "orange",
                secondaryColour: undefined
            } as TeamBadgeOptions
        default:
            return {
                type: BadgeType.Full,
                primaryColour: "grey",
                secondaryColour: undefined
            } as TeamBadgeOptions
    }
}