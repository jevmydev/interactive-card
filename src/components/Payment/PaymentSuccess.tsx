import { CompleteIcon } from "../Icons/Icons";

interface PaymentSuccessProps {
    updateSuccess: () => void;
}

export const PaymentSuccess = ({ updateSuccess }: PaymentSuccessProps) => {
    return (
        <div className="Payment-success">
            <CompleteIcon />
            <span>Thank you!</span>
            <p className="Payment-message">We've added your card details.</p>
            <button className="Payment-button" onClick={updateSuccess}>
                Continue
            </button>
        </div>
    );
};

export default PaymentSuccess;
