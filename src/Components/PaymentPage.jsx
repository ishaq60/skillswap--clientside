import { useState } from "react";
import { CreditCard, CheckCircle, ArrowLeft, Shield, AlertCircle } from "lucide-react";
import { useLoaderData } from "react-router-dom";

const PaymentPageUI = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const course=useLoaderData()
  console.log(course)
 


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-blue-500 font-medium mb-4">
            <ArrowLeft size={16} className="mr-1" /> Back to course
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Complete Your Purchase</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Payment Methods Section */}
          <div className="md:w-2/3">
            {/* Payment Method Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Select Payment Method</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button 
                  className={`border rounded-lg p-4 flex items-center justify-center ${paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                  onClick={() => setPaymentMethod('stripe')}
                >
                  <CreditCard size={20} className={`mr-2 ${paymentMethod === 'stripe' ? 'text-blue-500' : 'text-gray-500'}`} />
                  <span className={paymentMethod === 'stripe' ? 'text-blue-600 font-medium' : 'text-gray-700'}>Credit Card</span>
                </button>
                <button 
                  className={`border rounded-lg p-4 flex items-center justify-center ${paymentMethod === 'bkash' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'}`}
                  onClick={() => setPaymentMethod('bkash')}
                >
                  <span className={`font-bold mr-2 ${paymentMethod === 'bkash' ? 'text-pink-600' : 'text-gray-500'}`}>bKash</span>
                  <span className={paymentMethod === 'bkash' ? 'text-pink-600 font-medium' : 'text-gray-700'}>Mobile Banking</span>
                </button>
              </div>

              {/* Stripe Payment Form */}
              {paymentMethod === 'stripe' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Date <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVC <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        placeholder="123"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Cardholder Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="John Smith"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center bg-blue-50 text-blue-700 p-3 rounded-lg mt-4">
                    <Shield size={16} className="mr-2 flex-shrink-0" />
                    <p className="text-sm">Your payment information is secure and encrypted</p>
                  </div>
                  <button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Pay $149.99
                  </button>
                </div>
              )}

              {/* bKash Payment Form */}
              {paymentMethod === 'bkash' && (
                <div>
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-pink-800 mb-2">bKash Payment Instructions:</h3>
                    <ol className="list-decimal list-inside text-sm text-pink-700 space-y-2">
                      <li>Dial *247# from your bKash registered mobile number</li>
                      <li>Select "Payment" option by pressing 3</li>
                      <li>Enter merchant number: 01XXXXXXXXX</li>
                      <li>Enter amount: $149.99</li>
                      <li>Enter reference: COURSE123</li>
                      <li>Enter counter number: 1</li>
                      <li>Enter your bKash PIN to confirm</li>
                      <li>Come back here and enter your bKash number and Transaction ID</li>
                    </ol>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">bKash Number <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        placeholder="01XXXXXXXXX"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Transaction ID <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        placeholder="8N7A6TXHQR"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div className="flex items-center bg-yellow-50 text-yellow-700 p-3 rounded-lg mt-4">
                      <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                      <p className="text-sm">Please make sure to enter the correct Transaction ID. Your payment will be verified before enrollment is confirmed.</p>
                    </div>
                    <button 
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      Verify Payment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="mb-4">
                <img 
                  src={course.thumbnail} 
                  alt="Course thumbnail"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-medium">{course.title}</h3>
              </div>
              
              <div className="border-t border-b py-4 my-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Original Price</span>
                  <span>${course.price}</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-6">
                <span className="font-bold">Total</span>
                <span className="font-bold">${course.price}</span>
              </div>
              
              <div className="text-xs text-gray-500">
                <p>By completing your purchase, you agree to our Terms of Service and Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPageUI;