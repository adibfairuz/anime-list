import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { AnimeDetailsQuery, getSdk } from 'generated/graphql'
import Page from '~/components/Page'
import AnimeDetails from '~/features/AnimeDetails'
import { client } from '~/utils/graphqlClient'

const Details = () => {
    const data = useLoaderData<AnimeDetailsQuery['Media']>()
    return (
        <Page>
            <AnimeDetails data={data} />
        </Page>
    )
}

const loader: LoaderFunction = async ({ params }) => {
	const sdk = getSdk(client)
	const data = await sdk.AnimeDetails({
		id: parseInt(params?.slug as string)
	})
    console.log(data)
    return json(data.Media)
}

export {
    loader
}

export default Details