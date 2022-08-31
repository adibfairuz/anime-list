import { GraphQLClient } from "graphql-request";
import { API_URL } from "~/config/url";

export const client = new GraphQLClient(API_URL)