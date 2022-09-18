import { gql } from "graphql-request"

export const getAnimeTrends = gql`
    query AnimeTrends($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage){
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            mediaTrends{
                media{
                    id
                    title {
                        romaji
                        english
                        native
                        userPreferred
                    }
                    genres
                    description
                    coverImage {
                        extraLarge
                        large
                        medium
                        color
                    }
                }
            }
        }
    }
`