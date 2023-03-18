import CardsFront from "./CardsFront";
import CardsBack from "./CardsBack";

import "./cards.scss";

export const Cards = () => {
    return (
        <aside className="Layout-cards Cards">
            <picture className="Cards-picture">
                <source className="Cards-bg" media="(max-width: 880px)" srcSet="/images/bg-main-mobile.png" />
                <img className="Cards-bg" src="/images/bg-main-desktop.png" alt="Background gradient principal desktop" decoding="async" />
            </picture>
            <div className="Cards-inner">
                <CardsFront />
                <CardsBack />
            </div>
        </aside>
    );
};

export default Cards;
