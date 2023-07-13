import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, getCartItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch()
  function handleClick(){
    const newCartItem={
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice:unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addToCart(newCartItem))
  }

  // check wether the item is in cart or not  
  const cartItemQuantity=useSelector(getCartItemQuantity(id))

  const isIteminCart=cartItemQuantity>0

  return (
    <li className="py-2 flex gap-4 ">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}/>
      <div className="flex grow flex-col pt-0.5">
        <p className="font-mediumm">{name}</p>
        <p className="text-sm italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
          {isIteminCart && <div className="flex items-center gap-3 sm:gap-8">
             <UpdateItemQuantity pizzaId={id} cartItemQuantity={cartItemQuantity}/>
             <DeleteItem pizzaId={id}/>
            </div>}
          {!soldOut && !isIteminCart && <Button type="small" onClick={handleClick}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
