import { useState } from "react";
import { INITIAL_CARD_STORE } from "../../constants";
import { useCard } from "../../store/card";

import PaymentSuccess from "./PaymentSuccess";

export const PaymentForm = () => {
    const [isSuccessForm, setIsSuccessForm] = useState<boolean>(false);
    const { name, number, dateMM, dateYY, CVC, updateCard } = useCard();

    const updateSuccess = () => {
        setIsSuccessForm(!isSuccessForm);
        updateCard(INITIAL_CARD_STORE);
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsSuccessForm(!isSuccessForm);
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = evt;
        const { name, value } = target;

        updateCard({
            [name]: value
        });
    };

    return !isSuccessForm ? (
        <form className="Payment-form" onSubmit={handleSubmit}>
            <label className="Payment-label">
                Cardholder name
                <input className="Payment-input" value={name} onChange={handleChange} name="name" type="text" placeholder="e.g. Jane Appleseed" autoFocus required maxLength={20} />
            </label>
            <label className="Payment-label">
                Card number
                <input className="Payment-input" value={number} onChange={handleChange} name="number" type="text" placeholder="e.g. 0000 0000 0000 0000" required minLength={8} maxLength={19} />
            </label>
            <div className="Payment-row">
                <label className="Payment-label">
                    Exp. Date
                    <div className="Payment-row">
                        <input className="Payment-input" value={dateMM} onChange={handleChange} name="dateMM" type="text" placeholder="MM" required minLength={2} maxLength={2} />
                        <input className="Payment-input" value={dateYY} onChange={handleChange} name="dateYY" type="text" placeholder="YY" required minLength={2} maxLength={2} />
                    </div>
                </label>
                <label className="Payment-label">
                    CVC
                    <input className="Payment-input" value={CVC} onChange={handleChange} name="CVC" type="text" placeholder="e.g. 123" required minLength={3} maxLength={3} />
                </label>
            </div>
            <button className="Payment-submit" type="submit">
                Confirm
            </button>
        </form>
    ) : (
        <PaymentSuccess updateSuccess={updateSuccess} />
    );
};

export default PaymentForm;
