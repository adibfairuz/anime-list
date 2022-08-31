import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import type { ListAnimeTrendsQuery } from "generated/graphql";
import { getSdk } from "generated/graphql";
import Page from "~/components/Page"
import Title from "~/components/Title";
import AnimeList from "~/features/AnimeList"
import { client } from "~/utils/graphqlClient";

const Home = () => {
	const rawData: ListAnimeTrendsQuery['Page'] = useLoaderData()

    return (
		<Page>
			<Title>Anime List</Title>
			<AnimeList data={rawData} />
		</Page>
    )
}

const loader: LoaderFunction = async () => {
	const sdk = getSdk(client)
	const data = await sdk.ListAnimeTrends({
		page: 1,
		perPage: 10
	})
	const res = {
		mediaTrends: data.Page?.mediaTrends,
		pageInfo: data.Page?.pageInfo,
	}
    return json(res)
}

export {
    loader
}

export default Home