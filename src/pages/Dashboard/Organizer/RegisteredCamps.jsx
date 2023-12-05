import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const RegisteredCamps = () => {
    const [cart] = useCart();
    const totalFree = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    return (
        <div>
            <Helmet>
                <title>Organizer | Registered Camps</title>
            </Helmet>
           

        </div>
    );
};

export default RegisteredCamps;