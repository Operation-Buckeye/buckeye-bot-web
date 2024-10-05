import React from 'react';

import CheckoutSteps from '../Payment/CheckoutSteps';

function PaymentScreen() {

    const submitHandler = () => {
        alert("Payment processing...")
    };

    return (
        <div>
            <CheckoutSteps stepl step2 step3></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li> 
                            <h2>Payment</h2>
                        </li>
                        
                        <li>
                            <div>
                                <input
                                    type="radio"
                                    name="payment Method"
                                    id="payment Method"
                                    value="paypal"
                                ></input>
                                <label htmlFor="paymentMethod">Paypal</label>
                                <input
                                    name="payment Method"
                                    type="radio"
                                    id="payment Method"
                                    value="bitcoin"
                                ></input>
                                <label htmlFor="payment Method">Bitcoin</label>
                            </div>
                        </li>

                        <li>
                            <button type="submit" className="button primary">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}
export default PaymentScreen;