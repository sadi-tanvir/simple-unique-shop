import React from 'react';
import Button from '../re-usable-components/Button';
import CartItem from './CartItem';

const OrderReview = ({cart,removeItem,removeAllItem,qty,incQty,decQty}) => {
    return (
        <div className="bg-slate-100 shadow-2xl px-4 py-10">
            {cart.length <= 0 ? 
            <h1 className='text-red-600 text-2xl font-bold uppercase'>cart is empty. please! add some products.</h1>:
            <h1 className='text-cyan-700 text-3xl font-bold uppercase'>Order review</h1>
        }
            <div>
                {cart.map(item => <CartItem 
                key={item._id} 
                removeItem={removeItem} 
                item={item} 
                qty={qty} 
                incQty={incQty}
                decQty={decQty} />)}
            </div>
            <div className='w-full flex justify-evenly mt-10'>
                {cart.length > 0 && <Button btn_class='bg-cyan-700'>review order</Button> }
                {cart.length < 1 || <Button onClick={removeAllItem} btn_class='bg-red-700'>remove all</Button> }
            </div>
        </div>
    );
};

export default OrderReview;