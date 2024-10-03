import { useEffect, useState } from "react";
import "../orders/Order.css";
import axios from "axios"
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
const Order = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async ()=> {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data)
    }
    else {
      toast.error("error while fetching the orders")
  } 
  };

  const statusHandler = async(e, orderId) =>{
const response = await axios.post(url+"/api/order/status",{
  orderId,
  status:e.target.value
})
if(response.data.success){
  await fetchAllOrders();
} else{
  toast.error("Error while updating the status")
}
  }

  useEffect(() => {
    fetchAllOrders();
  },[])

  return (
    <div className="order add">
      <h3>Orders Page</h3>
      <div className="order_list">
        { orders.map((orders,index) => (
          <>
          <div key={index} className="order_item">
           <img src={assets.parcel_icon} alt="" />
          <div>
          <p className="order_list_food">
            {
              orders.items.map((item, index) => {
                if (index === orders.items.length-1) {
                   return item.name + "x" + item.quantity 
                }
                else {
                  return item.name + "x" + item.quantity+ ","
                }
              })
            }
          </p>
          <p className="order_item_name">
            {orders.address.firstName+ "" +orders.address.lastName }
          </p>
          <div className="order_item_address">
            <p>{orders.address.street+","}</p>
            <p>{orders.address.city+","+orders.address.state+","+orders.address.country+","+orders.address.zipcode}</p>
          </div>
           <p className="order_item_phone">
            {orders.address.phone}
           </p>
           <p>Items : {orders.items.length}</p>
           <p>₹{orders.amount}</p>
          <select onChange={(e) =>statusHandler(e, orders._id)} value={orders.status}>
            <option value="Food Processing">Food Processing</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
           </div>
           </div>
          </>
          
        )

        )}
      </div>
    </div>
  )
}

export default Order