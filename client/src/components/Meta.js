import React from 'react';
import {Helmet} from 'react-helmet';
const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keyword" content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to SHOPPER',
    keywords: 'electronics, buy electronics, iphone, sony, airpods',
    description: 'We sell the best products in the world'
}

export default Meta;
