import { CardIcon } from "../Icons/Icons";
import { useCard } from "../../store/card";

export const CardsFront = () => {
    const { name, number, dateMM, dateYY } = useCard();

    return (
        <div className="Cards-front">
            <picture className="Cards-picture Cards-picture--front">
                <img className="Cards-image" src="/images/bg-card-front.png" alt="Card front payment" decoding="async" />
            </picture>
            <div className="Cards-inner Cards-inner--front">
                <div className="Cards-icon">
                    <CardIcon />
                </div>
                <div className="Cards-paydata Cards-paydata--front">
                    <div className="Cards-number">
                        <span>{number}</span>
                    </div>
                    <div className="Cards-name">
                        <p>{name}</p>
                        <span>
                            {dateMM}/{dateYY}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsFront;
