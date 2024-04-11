import React, { useEffect, useState } from 'react';
import MetaData from '../layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutSteps from './CheckOutSteps';
import { calCulateOrderCost } from '../../helpers/helpers';
import { useCreateNewOrderMutation, useStripeCheckoutSessionMutation } from '../../redux/api/orderApi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/features/cartSlice';

const PaymentMethod = () => {
    const [method, setMethod] = useState("");
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [createNewOrder, {  error: createOrderError, isSuccess: createOrderSuccess }] = useCreateNewOrderMutation();
    const [stripeCheckoutSession, { data: checkoutData, error: checkoutError, isLoading }] = useStripeCheckoutSessionMutation();

    useEffect(() => {
        if (checkoutData && checkoutData.url) {
            window.location.href = checkoutData.url;
        }
        if (checkoutError) {
            toast.error(checkoutError?.data?.message);
        }
    }, [checkoutData, checkoutError]);


    useEffect(() => {
        if (createOrderError) {
            toast.error(createOrderError?.data?.message);
        }
        if (createOrderSuccess) {
            dispatch(clearCart());
            navigate("/me/orders?order_success=true");
        }
    }, [createOrderError, createOrderSuccess, dispatch, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!method) {
            toast.error("Please select a payment method");
            return;
        }
        const { itemsPrice, shippingPrice, taxPrice, totalPrice } = calCulateOrderCost(cartItems);

        if (method === "COD") {
            const orderData = {
                shippingInfo,
                orderItems: cartItems,
                itemsPrice,
                shippingAmount: shippingPrice,
                taxAmount: taxPrice,
                totalAmount: totalPrice,
                paymentInfo: {
                    status: "Not Paid",
                },
                PaymentMethod: "COD",
            };
            createNewOrder(orderData);
        }

        if (method === "Card") {
            const orderData = {
                shippingInfo,
                orderItems: cartItems,
                itemsPrice,
                shippingAmount: shippingPrice,
                taxAmount: taxPrice,
                totalAmount: totalPrice,
                
            };
           
            stripeCheckoutSession(orderData);
        }
    };

    return (
        <>
            <MetaData title={"Payment Method"} />
            <CheckOutSteps shipping confirmOrder payment />
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form
                        className="shadow rounded bg-body"
                        onSubmit={submitHandler}
                    >
                        <h2 className="mb-4">Select Payment Method</h2>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment_mode"
                                id="codradio"
                                value="COD"
                                checked={method === "COD"}
                                onChange={(e) => setMethod("COD")}
                            />
                            <label className="form-check-label" htmlFor="codradio">
                                Cash on Delivery
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment_mode"
                                id="cardradio"
                                value="Card"
                                checked={method === "Card"}
                                onChange={(e) => setMethod("Card")}
                            />
                            <label className="form-check-label" htmlFor="cardradio">
                                Card - VISA, MasterCard
                            </label>
                        </div>

                        <button id="shipping_btn" type="submit" className="btn py-2 w-100" disabled={isLoading}>
                            CONTINUE
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PaymentMethod;
