import React from 'react'
import { IState as Props } from '../index'
import CardItem from './CardItem'

export interface IProps {
    currView: Props['image']
    onCardClicked: Function
    clicked: String
}

const CardList: React.FC<IProps> = ({ currView, onCardClicked, clicked }) => {
    const renderList = (): JSX.Element[] => {
        return currView.map((curr) => {
            return (
                <CardItem
                    description={curr.description}
                    url={curr.url}
                    key={curr.url}
                    onCardClicked={onCardClicked}
                    clicked={clicked}
                />
            )
        })
    }

    return <>{renderList()}</>
}

export default CardList
