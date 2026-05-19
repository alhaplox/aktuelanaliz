import { Metadata } from "next";
import CartArea from "./_components/cart-area";


export const metadata: Metadata = {
  title: "Cart - Aktüel Analiz",
}

export default function CartPage() {
  return (
    <main>
      {/* cart area start */}
      <CartArea />
      {/* cart area end */}
    </main>
  )
}
