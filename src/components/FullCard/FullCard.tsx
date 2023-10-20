import cls from './FullCard.module.css'
import {Card as cardType} from "../../types";

const FullCard = (props: {card: cardType} ) => {
    const {card} = props

    return (
        <div className={cls.cardContainer}>
            <h2>{card.name}</h2>
            <div className={cls.contactsBlock}>
                <div className={cls.contact}>
                    <p className={cls.caption}>Телефон:</p>
                    <p className={cls.value}>{card.phone}</p>
                </div>
                <div className={cls.contact}>
                    <p className={cls.caption}>Почта:</p>
                    <p className={cls.value}>{card.email}</p>
                </div>
                <div className={cls.contact}>
                    <p className={cls.caption}>Дата приема:</p>
                    <p className={cls.value}>{card.hire_date}</p>
                </div>
                <div className={cls.contact}>
                    <p className={cls.caption}>Должность:</p>
                    <p className={cls.value}>{card.position_name}</p>
                </div>
                <div className={cls.contact}>
                    <p className={cls.caption}>Подразделение:</p>
                    <p className={cls.value}>{card.department}</p>
                </div>
            </div>
            <div className={cls.additional}>
                <p className={cls.caption}>Дополнительная информация:</p>
                <p className={cls.value}>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
            </div>
        </div>
    );
};

export default FullCard;
