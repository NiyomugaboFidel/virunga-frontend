interface Router {
    name: string
    href: string
}

export const navrouter:Router[] =  [
    {
        name:'Best Sellers',
        href:'/bestsellers'
    },
    {
        name:'Today’s Deals',
        href:'/deals'
    },
    {
        name:'New Arrivals',
        href:'/new'
    },

    {
        name:'Gift Cards',
        href:'/gift'
    },
    {
        name:'Help Center',
        href:'/help'
    },
]