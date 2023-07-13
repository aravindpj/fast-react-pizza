import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, incraseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId,cartItemQuantity}) {
    const dispatch=useDispatch()
    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
             <span className="text-sm font-medium">{cartItemQuantity}</span>
            <Button type="round" onClick={()=>dispatch(incraseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
