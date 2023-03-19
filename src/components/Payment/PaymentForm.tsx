import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { INITIAL_CARD_STORE, STRING_PATTERN, NUMBER_PATTERN, NUMBER_WITH_SPACES_PATTERN } from "../../constants";
import { type CardTypes } from "../../types";
import { useCard } from "../../store/card";

import PaymentSuccess from "./PaymentSuccess";

export const PaymentForm = () => {
    const [isSuccessForm, setIsSuccessForm] = useState<boolean>(false);
    const { name, number, dateMM, dateYY, CVC, updateCard } = useCard();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<CardTypes>();

    const updateSuccess = () => {
        setIsSuccessForm(!isSuccessForm);
        updateCard(INITIAL_CARD_STORE);
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = evt;
        const { name, value } = target;

        updateCard({
            [name]: value
        });
    };

    const onSubmit = () => setIsSuccessForm(!isSuccessForm);

    useEffect(() => reset(INITIAL_CARD_STORE), [isSuccessForm]);

    return !isSuccessForm ? (
        <form className="Payment-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="Payment-label">
                Cardholder name
                <input
                    className="Payment-input"
                    value={name}
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    autoFocus
                    maxLength={20}
                    {...register("name", {
                        required: "Can't be blank",
                        maxLength: {
                            value: 20,
                            message: "Max length is 20"
                        },
                        pattern: {
                            value: STRING_PATTERN,
                            message: "String only"
                        },
                        onChange: handleChange
                    })}
                />
                {errors.name && <span className="Payment-error">{errors.name.message}</span>}
            </label>
            <label className="Payment-label">
                Card number
                <input
                    className="Payment-input"
                    value={number}
                    type="text"
                    placeholder="e.g. 0000 0000 0000 0000"
                    minLength={8}
                    maxLength={19}
                    {...register("number", {
                        required: "Can't be blank",
                        minLength: {
                            value: 8,
                            message: "Min length is 8"
                        },
                        maxLength: {
                            value: 19,
                            message: "Max length is 19"
                        },
                        pattern: {
                            value: NUMBER_WITH_SPACES_PATTERN,
                            message: "Numbers only"
                        },
                        onChange: handleChange
                    })}
                />
                {errors.number && <span className="Payment-error">{errors.number.message}</span>}
            </label>
            <div className="Payment-row">
                <label className="Payment-label">
                    Exp. Date
                    <input
                        className="Payment-input"
                        value={dateMM}
                        type="text"
                        placeholder="MM"
                        minLength={2}
                        maxLength={2}
                        {...register("dateMM", {
                            required: "Can't be blank",
                            minLength: {
                                value: 2,
                                message: "Min length is 2"
                            },
                            maxLength: {
                                value: 2,
                                message: "Max length is 2"
                            },
                            pattern: {
                                value: NUMBER_PATTERN,
                                message: "Numbers only"
                            },
                            onChange: handleChange
                        })}
                    />
                    {errors.dateMM && <span className="Payment-error">{errors.dateMM.message}</span>}
                </label>
                <label className="Payment-label">
                    <input
                        className="Payment-input"
                        value={dateYY}
                        type="text"
                        placeholder="YY"
                        minLength={2}
                        maxLength={2}
                        {...register("dateYY", {
                            required: "Can't be blank",
                            minLength: {
                                value: 2,
                                message: "Min length is 2"
                            },
                            maxLength: {
                                value: 2,
                                message: "Max length is 2"
                            },
                            pattern: {
                                value: NUMBER_PATTERN,
                                message: "Numbers only"
                            },
                            onChange: handleChange
                        })}
                    />
                    {errors.dateYY && <span className="Payment-error">{errors.dateYY.message}</span>}
                </label>
                <label className="Payment-label">
                    CVC
                    <input
                        className="Payment-input"
                        value={CVC}
                        type="text"
                        placeholder="e.g. 123"
                        minLength={3}
                        maxLength={3}
                        {...register("CVC", {
                            required: "Can't be blank",
                            minLength: {
                                value: 3,
                                message: "Min length is 3"
                            },
                            maxLength: {
                                value: 3,
                                message: "Max length is 3"
                            },
                            pattern: {
                                value: NUMBER_PATTERN,
                                message: "Numbers only"
                            },
                            onChange: handleChange
                        })}
                    />
                    {errors.CVC && <span className="Payment-error">{errors.CVC.message}</span>}
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
