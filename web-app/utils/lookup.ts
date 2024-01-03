export const getPositionByType = (element_type: number) => {
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