import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        console.log(SHOP_DATA);
        this.state = {
            collections: SHOP_DATA
        };

    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
            }
            </div>
        )
    }
}

export default ShopPage;