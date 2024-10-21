import React, { useState } from 'react';
import SubscribeForm from '../small components/FormSubscribe.js'
import '../../style/sections-style/Subscribe.css'

export const Subscribe = () => {
  const [agreeContact, setAgreeContact] = useState(false); // State for checkbox

  return (
    <section className='subscribe' id='subscribe'>
        <div className='subscribe-content'>
            <h2 className='subscribe-title'>SAVE 20% ON YOUR FIRST ORDER!</h2>
            <p className='subscribe-text'>Subscribe to receive product updates and exclusive restock Resellers coupon codes.</p>
            <SubscribeForm/>
            
            <label className="contact-checkbox-label-subscribe">
              <input
                type="checkbox"
                checked={agreeContact}
                onChange={(e) => setAgreeContact(e.target.checked)}
                className="contact-checkbox-subscribe"
              />
              Agree to be contacted via WhatsApp or Telegram to send the coupon
          </label>
        </div>

        <div className='subscribe-hero'>

        </div>
    </section>
  )
}

export default Subscribe
