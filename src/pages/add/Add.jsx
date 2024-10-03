/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/assets";
import "../add/Add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = async(e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("name",data.name);
     formData.append("description", data.description);
     formData.append("price",Number(data.price));
     formData.append("category", data.category);
     formData.append("image",image );

     const response = await axios.post(`${url}/api/food/add`,formData);
     if (response.data.success){
        setData({
            name: "",
        description: "",
        price:"",
        category:"Salad"
        })
        setImage(false);
        toast.success(response.data.message);
     } else {
        toast.error(response.data.message);
     }
    };
   /* useEffect(() => {
        console.log(data);
    },[data])*/

  return (
    <>
    <div className="add">
        <form onSubmit={onSubmitHandler} className="flex-col">
            <div className="add_img_upload flex_col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload_area" />
                </label>
                <input type="file" id="image" hidden required 
                onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
           <div className="add_product_name flex_col">
            <p>Product name</p>
            <input type="text" name="name" placeholder="Type here" 
            onChange={onChangeHandler} value={data.name}
            />
           </div>
           <div className="add_product_description flex-col">
            <p>Product description</p>
            <textarea name="description" rows="6" placeholder="Write content here" required
            onChange={onChangeHandler} value={data.description}
            ></textarea>
           </div>
           <div className="add_category_price">
            <div className="add_category flex_col">
                <p>Product cateory</p>
                <select name="category"
                onChange={onChangeHandler} 
                >
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add_price flex_col">
                <p>Product price</p>
                <input type="Number" name="price" placeholder="₹20"
                onChange={onChangeHandler} value={data.price}
                />
            </div>
           </div>
           <button type="sumbit" className="add_btn">ADD</button>
        </form>
    </div>
    </>
  )
}

export default Add