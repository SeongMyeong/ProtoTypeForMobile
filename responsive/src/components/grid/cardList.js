import React, { Component } from 'react';

import CardItem from './cardItem';
import DummyCardItems from '../../common/dummyCardItems.json'

import './cardList.css';

class CardList extends Component {
    ////////////////////
    //< Constant

    ////////////////////
    //< React LifeCycle
    constructor(props) {
        super(props);

        this.state = {
            cardItems: DummyCardItems
        }
    }
    ////////////////////
    //< Handler (include focus manager)

    ////////////////////
    //< private functions

    ////////////////////
    //< Rendering
    render() {
        const { cardItems } = this.state;
        return (
            <div >
                <div className={'cardList'}>
                    {
                        cardItems.map((cardItem, i) => (
                            <CardItem key={i}
                                data={cardItem}
                            />
                        ))
                    }
                </div>
                <div className={'cardList'}>
                    {
                        cardItems.map((cardItem, i) => (
                            <CardItem key={i}
                                data={cardItem}
                            />
                        ))
                    }
                </div>
                <div className={'cardList'}>
                    {
                        cardItems.map((cardItem, i) => (
                            <CardItem key={i}
                                data={cardItem}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default CardList;