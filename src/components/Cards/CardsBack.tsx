import { useCard } from "../../store/card";

export const CardsBack = () => {
    const { CVC } = useCard();

    return (
        <div className="Cards-back">
            <picture className="Cards-picture Cards-picture--back">
                <img className="Cards-image" src="/images/bg-card-back.png" alt="Card back payment" decoding="async" />
            </picture>
            <div className="Cards-inner Cards-inner--back">
                <div className="Cards-paydata Cards-paydata--back">
                    <span>{CVC}</span>
                </div>
            </div>
        </div>
    );
};

export default CardsBack;
