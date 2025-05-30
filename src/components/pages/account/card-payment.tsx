import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, CardExpiryElement, CardCvcElement, CardNumberElement, IdealBankElement, useElements } from "@stripe/react-stripe-js";
import CardDisplay from "./card-display";

interface CardPaymentsProps {
    subOption: any
}

const CardPayments = (props: CardPaymentsProps) => {

    const stripePromise = loadStripe("pk_live_51P7H1MIm53i4JTwU7GVUGY5m0Y2DQghsPkIkGCJRc79mRSgqqf6gH3CVQRYvwnxRD5oSqOrLMKrM722nhDOZkINL00p8GbYPfT");

    return (
        <div>
            <Elements stripe={stripePromise}>
                {/* <CardDisplay subData={subOption} /> */}
                <CardDisplay subData={props.subOption} />
            </Elements>
        </div>
    )
}

export default CardPayments;