import React, { useState } from 'react';
import DarkLogo from '../../images/stevenlogodark.png'
import sign from '../../images/signature.png'
import { useSearchParams } from 'react-router-dom';
import Modal from 'react-modal';

const GiftModal = () => {
  const [isModalOpen, setModal] = useState(true);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('gift');

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(55, 65, 81, 0.75)', // Tailwind's gray-700 with opacity
      zIndex: 9999, // Ensure the overlay is on top, though react-modal often handles this
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    content: {
      backgroundColor: 'white',
      borderRadius: '0.5rem', // rounded-lg
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // shadow-xl
    },
  };

  return(
    <Modal
      isOpen={isModalOpen && searchTerm === 'true'}
      style={customStyles} // Apply custom styles
      contentLabel="Campaign Modal" // Important for accessibility
      ariaHideApp={false} // Set to false if you are manually setting appElement
    >
      <div onClick={() => setModal(false)} style={{textAlign: 'right'}}><p>X</p></div>
      {/* Modal Header */}
      <div style={{ textAlign: 'center', padding: '20px'}}><img src={DarkLogo} alt="" /></div>

      <div style={{ padding: '20px'}}>
        <h3>A Personal Thank You</h3>

        {/* Modal Body */}
        <p>You’ve received this gift as a small token of my appreciation — and it was <strong>custom made just for you.</strong></p>
        <p>I’m Steven Tran, candidate for <strong>National President of the Asian Real Estate Association of America</strong>, and in the short video below, I’ll:
          <ul style={{listStyle: 'inside'}}>
            <li>Share how my technical background and attention to detail guide the way I serve,</li>
            <li>Walk you through how to assemble and enjoy your gift,</li>
            <li>Explain why I believe in giving each chapter the individual attention it needs to thrive,</li>
          </ul>
        </p>

        <div style={{ textAlign: 'center'}}>
          <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/BVwQgMvL-T8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>

        <p>After you watch, feel free to explore my website to learn more about me and my vision for AREAA. And if you have any questions or ideas, I’d be honored to hear from you — call me at <a href="tel:971-285-2002">(971) 285-2002</a> or email <a href="mailto:steven@diverserg.com">steven@diverserg.com</a> anytime.</p>
        <p>Thank you,<br />
        Steven Tran</p>
        <div className="signature">
            <img src={sign} alt="" />
        </div>
      </div>


      {/* Optional: Modal Footer for actions */}
      <div>
        <button onClick={() => setModal(false)} className="theme-btn">Learn more about Steven</button>
      </div>
    </Modal>
  )
};

export default GiftModal;