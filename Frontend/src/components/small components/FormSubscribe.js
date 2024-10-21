import React, { useState } from 'react'; // Import useState

export const FormSubscribe = () => {
    // State to store phone number
    const [phoneNumber, setPhoneNumber] = useState(''); // To store the phone number input

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const fullPhoneNumber = `+49 ${phoneNumber}`;
        alert(`Full phone number: ${fullPhoneNumber}`);
        // You can process the form data here (e.g., send it to the server)
    };

    return (
        <form onSubmit={handleSubmit} className='subscribe-form'>
            <div className="input-container">
                {/* Input for phone number with placeholder */}
                <span className="country-code">+49</span>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} // Update phone number state
                    placeholder="Enter your phone number"
                    required
                    className='subscribe-input-form'
                />
               
            </div>

            {/* Submit Button */}
            <button type="submit" className='submit-button'>Submit</button>
        </form>
    );
}

export default FormSubscribe;
