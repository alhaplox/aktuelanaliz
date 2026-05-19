import { Metadata } from "next";
import CheckoutArea from "./_components/checkout-area";


export const metadata: Metadata = {
    title: "Checkout - Aktüel Analiz",
}

export default function CheckoutPage() {
    return (
        <main>
            {/* checkout area start */}
            <CheckoutArea />
            {/* checkout area end */}
        </main>
    )
}
