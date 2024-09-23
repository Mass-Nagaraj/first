import React from 'react';
import './variants_page.css';
import myImage from '../../assets/pizza.jpg';
// import '../../styles/global.css'


const VariantsAndAddons = () => {
  return (
    <div className="variants-addons">
      <h3>Variants & Add-ons</h3>
      <div className="product-info">
        <img src={myImage} alt="Pizza" />
        <p>Chicken BBQ pizza with Mexican flavored toppings</p>
      </div>
      <div className="quantity">
        <h4>Quantity</h4>
        <label>
          <input type="radio" name="size" value="large" defaultChecked /> Pizza (Large) - SAR 800.00
        </label>
        <label>
          <input type="radio" name="size" value="medium" /> Pizza (Medium) - SAR 500.00
        </label>
        <label>
          <input type="radio" name="size" value="medium" /> Pizza (Small) - SAR 200.00
        </label>
        <label>
        </label>

        
        <div className="bottom-contents">
            <p>Item total SAR 4,100.00</p>
            <p> SAR 4,100</p>
              <div className="quantity-control">
                <button>-</button>
                <input type="number" value="1" readOnly />
                <button>+</button>
              </div>
            <button>Add to order</button>
            </div>
        </div>


    </div>
  );
};

export default VariantsAndAddons;
