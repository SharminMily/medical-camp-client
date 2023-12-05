import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GET_PK);

const PaymentHistory = () => {
    return (
        <div>
            <Helmet>
                <title>Participant | Payment History</title>                
            </Helmet>
            <SectionTitle heading="Payment" subHeading="Please pay to Camp"></SectionTitle>

            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default PaymentHistory;