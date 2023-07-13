import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getAllQuantityCount, getSumOfallPizza } from "./cartSlice";

function CartOverview() {
  const getAllPizzasQuantity=useSelector(getAllQuantityCount)
  const getAllPizzasTotalPrice=useSelector(getSumOfallPizza)

  if(!getAllPizzasQuantity) return null

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{getAllPizzasQuantity} pizzas</span>
        <span>{formatCurrency(getAllPizzasTotalPrice)}</span>
      </p>
      <Link to="/cart"><span>Open cart &rarr;</span></Link>
    </div>
  );
}

export default CartOverview;
