import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Smartphone, ShieldCheck, CheckCircle2, QrCode } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

 const handlePay = async (e) => {
  e.preventDefault();

  if (!window.Razorpay) {
    alert("Razorpay SDK failed to load");
    return;
  }

  setIsProcessing(true);

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY,

    amount: Math.round(cartTotal * 100),

    currency: "INR",

    name: "Your Store",

    description: "Order Payment",

    handler: function (response) {
      console.log(response);

      alert("Payment Successful");

      setIsSuccess(true);

      clearCart();

      navigate("/");
    },

    prefill: {
      name: "Customer",
      email: "customer@gmail.com",
      contact: "9999999999",
    },

    theme: {
      color: "#000000",
    },
  };

  const paymentObject = new window.Razorpay(options);

  paymentObject.on("payment.failed", function (response) {
    console.log(response);

    alert("Payment Failed");

    setIsProcessing(false);
  });

  paymentObject.open();

  setIsProcessing(false);
};

  if (isSuccess) {
    return (
      <motion.div 
        className="checkout-page container success-state"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <CheckCircle2 size={80} className="success-icon" />
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase. Your order is being processed.</p>
        <p className="redirect-text">Redirecting to home page...</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="checkout-page container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="checkout-header">
        <h1>Secure <span className="text-gradient">Checkout</span></h1>
        <p>Complete your purchase securely.</p>
      </div>

      <div className="checkout-layout">
        <div className="payment-box">
          <h3>Select Payment Method</h3>
          
          <div className="payment-options">
            <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <div className="option-content">
                <CreditCard size={24} />
                <span>Credit / Debit Card</span>
              </div>
            </label>
            
            <label className={`payment-option ${paymentMethod === 'paypal' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="payment" 
                value="paypal" 
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
              />
              <div className="option-content">
                <Wallet size={24} />
                <span>PayPal</span>
              </div>
            </label>

            <label className={`payment-option ${paymentMethod === 'applepay' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="payment" 
                value="applepay" 
                checked={paymentMethod === 'applepay'}
                onChange={() => setPaymentMethod('applepay')}
              />
              <div className="option-content">
                <Smartphone size={24} />
                <span>Apple Pay</span>
              </div>
            </label>

            <label className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="payment" 
                value="upi" 
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              <div className="option-content">
                <QrCode size={24} />
                <span>UPI</span>
              </div>
            </label>
          </div>

          <form className="payment-form" onSubmit={handlePay}>
            {paymentMethod === 'card' && (
              <div className="card-details animate-fade-in">
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" required maxLength="19" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" required maxLength="5" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" required maxLength="4" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="alternative-payment animate-fade-in">
                <p>You will be redirected to PayPal to complete your purchase securely.</p>
              </div>
            )}

            {paymentMethod === 'applepay' && (
              <div className="alternative-payment animate-fade-in">
                <p>Click below to authorize payment with your Apple device.</p>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="card-details animate-fade-in">
                <div className="form-group">
                  <label>Enter your UPI ID</label>
                  <input type="text" placeholder="example@upi" required />
                </div>
                <p className="secure-badge" style={{ marginTop: '0', justifyContent: 'flex-start' }}>
                  A payment request will be sent to your UPI app.
                </p>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary pay-now-btn"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
            </button>
            <div className="secure-badge">
              <ShieldCheck size={16} /> <span>256-bit SSL encrypted checkout</span>
            </div>
          </form>
        </div>

        <div className="order-summary-box">
          
          <h3>Order Total</h3>
          <div className="summary-amount">${cartTotal.toFixed(2)}</div>
          <p className="summary-note">Includes all taxes and shipping fees.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
