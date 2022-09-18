import { gql } from "graphql-request"

export const getAnimeDetails = gql`
    query AnimeDetails($id: Int) {
        Media(id: $id){
            id,
            title {
                romaji
                english
                native
                userPreferred
            },
            status,
            genres,
            type,
            episodes,
            source,
            description,
            bannerImage,
            coverImage {
                extraLarge
                large
                medium
                color
            },
            startDate {
                year
                month
                day
            },
            endDate {
                year
                month
                day
            },
            meanScore
        }
    }
`