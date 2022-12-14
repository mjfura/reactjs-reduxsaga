import { ListResponse } from './types/responses'

export const LIST_MOCK: ListResponse = {
    total: 1,
    entries: [
        {
            id: 7,
            title: 'American History X',
            description:
                'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
            images: {
                posterArt: {
                    url: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg',
                    width: 497,
                    height: 736
                }
            },
            releaseYear: 1998
        }
    ],
    links: [
        {
            active: true,
            label: '1',
            link: 'https://miapi.com/api/movies/page?=1'
        }
    ]
}
