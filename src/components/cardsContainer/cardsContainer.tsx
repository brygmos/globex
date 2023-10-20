import Card from "../card/Card.tsx";
import {Card as cardType} from "../../types";
import cls from './cardsContainer.module.css'

const CardsContainer = (props: {cards: cardType[], onClick: (card: cardType) => void}) => {
    const {cards, onClick} = props

    return (
        <div className={cls.cardsContainer}>
            {!cards?.length && <h1>Ничего не найдено</h1>}
            <div className={cls.cardsCenter}>
                <div className={cls.cards}>
                    {cards && cards.map(card=><Card key={card.name} card={card} onClick={onClick}/>)}
                </div>
            </div>
        </div>
    );
};

export default CardsContainer;
