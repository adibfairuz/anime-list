import type { AnimeTrendsQuery } from 'generated/graphql';
import { getSdk } from 'generated/graphql';
import { useCallback, useEffect, useRef, useState } from 'react';
import { client } from '~/utils/graphqlClient';
import useMounted from '~/hooks/useMounted';
import Card from '~/components/Card';
import { Link } from '@remix-run/react';

interface Props {
    data: AnimeTrendsQuery['Page']
}

const AnimeList: React.FC<Props> = (props) => {
    const [data, setData] = useState(props.data)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const mounted = useMounted()
    const loadingRef = useRef<HTMLDivElement>(null)

    const handleObserver = useCallback<IntersectionObserverCallback>((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const sdk = getSdk(client)
            const res = await sdk.AnimeTrends({
                page,
                perPage: 10
            })
            const temp = {
                ...res.Page
            }
            temp.mediaTrends = [
                ...data?.mediaTrends || [],
                ...res.Page?.mediaTrends || []
            ]
            setData(temp)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (mounted) {
            fetchData()
        }
    }, [page])

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loadingRef.current) observer.observe(loadingRef.current);
    }, [handleObserver]);

    return (
        <div>
            <div className="grid grid-cols-2 gap-3 p-3">
                {
                    data?.mediaTrends?.map(item => (
                        <Link
                            key={item?.media?.id}
                            to={`/${item?.media?.id}`}
                        >
                            <Card
                                title={item?.media?.title?.english as string}
                                imageUrl={item?.media?.coverImage?.large as string}
                            />
                        </Link>
                    ))
                }
            </div>
            <div ref={loadingRef} className="flex justify-center w-full py-4">
                { isLoading && <div>Loading...</div> }
            </div>
        </div>
    )
}

export default AnimeList