import { Helmet } from "react-helmet-async";

const RegisteredCamps = () => {
    return (
        <div>
            <Helmet>
                <title>Organizer | Registered Camps</title>
            </Helmet>
            Payment Handling:
            ○ Implement the Stripe.js integration to securely manage participant
            payments.
            ○ Initialize the payment status as Unpaid, indicating pending
            payments.
            ○ Upon successful payment via Stripe.js, seamlessly update the
            payment status to Paid.
        </div>
    );
};

export default RegisteredCamps;