import { AnimeDetailsQuery } from 'generated/graphql'
import moment from 'moment'
import React from 'react'

interface Props {
    data: AnimeDetailsQuery['Media']
}

const AnimeDetails: React.FC<Props> = ({ data }) => {
    return (
        <div className="py-7 px-5">
            <div className="flex">
                <div className="w-40">
                    <img
                        className="object-cover h-52 w-full rounded-md"
                        src={data?.coverImage?.large || ''}
                        alt={data?.title?.english || ''}
                    />
                </div>
                <div className="ml-4">
                    <h1 className="text-lg font-bold mb-2">
                        {data?.title?.english}
                    </h1>
                    <div className="flex mb-1">
                        <div className="text-sm mr-1 font-semibold">Type: </div>
                        <div className="text-sm">
                            {data?.type}
                        </div>
                    </div>
                    <div className="flex mb-1">
                        <div className="text-sm mr-1 font-semibold">Aired: </div>
                        <div className="text-sm">
                            {moment(`${data?.startDate?.month}-${data?.startDate?.day}-${data?.startDate?.year}`).format('MMM DD, YYYY')}
                            <span className="mx-1">to</span>
                            {moment(`${data?.endDate?.month}-${data?.endDate?.day}-${data?.endDate?.year}`).format('MMM DD, YYYY')}
                        </div>
                    </div>
                    <div className="flex mb-1">
                        <div className="text-sm mr-1 font-semibold">Status: </div>
                        <div className="text-sm">
                            {data?.status}
                        </div>
                    </div>
                    <div className="flex mb-1">
                        <div className="text-sm mr-1 font-semibold">Episodes: </div>
                        <div className="text-sm">
                            {data?.episodes}
                        </div>
                    </div>
                    <div className="flex mb-1">
                        <div className="text-sm mr-1 font-semibold">Genres: </div>
                        <div className="text-sm">
                            {data?.genres?.join(', ')}
                        </div>
                    </div>
                    <div className="flex mb-1">
                        <div className="text-sm mr-1 font-semibold">Source: </div>
                        <div className="text-sm">
                            {data?.source}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="text-sm mr-1 font-semibold">Score: </div>
                        <div className="text-sm">
                            {data?.meanScore}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div dangerouslySetInnerHTML={{__html: data?.description || ''}} />
            </div>
        </div>
    )
}

export default AnimeDetails