import cls from './Card.module.css'
import phoneIcon from '../../assets/phone.svg'
import mailIcon from '../../assets/mail.svg'
import {Card as cardType} from "../../types";

const Card = (props: {card: cardType, onClick: (card: cardType) => void} ) => {
    const {card, onClick} = props

    return (
        <div className={cls.cardContainer} onClick={() => {onClick(card)}}>
            <h2>{card.name}</h2>
            <div className={cls.contactsBlock}>
                <div className={cls.contact}>
                    <div className={cls.iconContainer}>
                        <img src={phoneIcon} alt="phoneIcon"/>
                    </div>
                    <p>{card.phone}</p>
                </div>
                <div className={cls.contact}>
                    <div className={cls.iconContainer}>
                        <img src={mailIcon} alt="mailIcon"/>
                    </div>
                    <p>{card.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
