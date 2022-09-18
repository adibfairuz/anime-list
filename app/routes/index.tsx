import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import type { AnimeTrendsQuery } from "generated/graphql";
import { getSdk } from "generated/graphql";
import Page from "~/components/Page"
import Title from "~/components/Title";
import AnimeList from "~/features/AnimeList"
import { client } from "~/utils/graphqlClient";

const Home = () => {
	const rawData = useLoaderData<AnimeTrendsQuery['Page']>()

    return (
		<Page>
			<Title>Anime List</Title>
			<AnimeList data={rawData} />
		</Page>
    )
}

const loader: LoaderFunction = async () => {
	const sdk = getSdk(client)
	const data = await sdk.AnimeTrends({
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