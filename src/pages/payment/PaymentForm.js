import React from 'react';
import mc from '../mc.png';
import vi from '../vi.png';
import pp from '../pp.png';

function PaymentForm() {
  return (
    <div className="container mx-auto mt-8 p-2 max-w-md border border-gray-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-2">Payment Confirmation</h1>

      <div className="flex flex-col space-y-2">
        <div className="w-full mb-2">
          <label className="text-base font-semibold block mb-1">Cardholder's Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="John Doe"
          />
        </div>

        <div className="w-full mb-2">
          <label className="text-base font-semibold block mb-1">CVV</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="123"
          />
        </div>

        <div className="w-full mb-2">
          <label className="text-base font-semibold block mb-1">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="**** **** **** ****"
          />
        </div>

        <div className="w-full mb-2">
          <label className="text-base font-semibold block mb-1">Expiration Date</label>
          <div className="flex items-center space-x-2">
            <select name="months" id="months" className="p-2 rounded border border-gray-300">
              <option value="Jan">Jan</option>
              <option value="Jan">Feb</option>
              <option value="Jan">Mar</option>
              <option value="Jan">Apr</option>
              <option value="Jan">May</option>
              <option value="Jan">Jun</option>
              <option value="Jan">Jul</option>
              <option value="Jan">Aug</option>
              <option value="Jan">Sep</option>
              <option value="Jan">Oct</option>
              <option value="Jan">Nov</option>
              <option value="Jan">Dec</option>
              {/* Add other month options */}
            </select>
            <select name="years" id="years" className="p-2 rounded border border-gray-300">
              <option value="2020">2022</option>
               <option value="2020">2023</option>
                <option value="2020">2024</option>
                 <option value="2020">2025</option>
                  <option value="2020">2026</option>
                   <option value="2020">2027</option>
              {/* Add other year options */}
            </select>
          </div>
        </div>

        <div className="w-full mb-2">
          <label className="text-base font-semibold block mb-1">Card Type</label>
          <div className="flex items-center space-x-2">
            <img src={mc} alt="MasterCard" className="w-8" />
            <img src={vi} alt="Visa" className="w-8" />
            <img src={pp} alt="PayPal" className="w-8" />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-500 text-white text-center uppercase text-decoration-none p-2 text-base hover:bg-green-600 rounded">
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
