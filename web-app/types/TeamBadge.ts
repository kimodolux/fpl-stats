export enum BadgeType {
    Full = "full",
    Half = "half"
}

export type TeamBadgeOptions = {
    type: BadgeType,
    primaryColour: string,
    secondaryColour: string | undefined
} 