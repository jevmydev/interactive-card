import Cards from "./Cards/Cards";
import Payment from "./Payment/Payment";

import "./layout.scss";

export const Layout = () => {
    return (
        <section className="Main-layout Layout">
            <div className="Layout-inner">
                <Cards />
                <Payment />
            </div>
        </section>
    );
};

export default Layout;
