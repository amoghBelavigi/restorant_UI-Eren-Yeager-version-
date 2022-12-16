import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We welcome you  to sit back, unwind and appreciate the lovely 
                                  wine & food that comes with determination merits and uncommon notice, 
                                  both quaffer and specialist are all around provided for. 
                                  The determination has clearly been picked in light of the menu, 
                                  and numerous a wine darling’s heart will be heartened to see the decisions accessible.
                                  Founded by the greate Eldian prince, We promise to deliver an impeccable experience</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Late into the history of the Eldian Empire, Karl Fritz,
                                  the 145th monarch of the Fritz family, chose to abandon the conflict over the 
                                  Nine Titans between the subservient Eldian families on the continental mainland 
                                  and moved the capital of Eldia to Paradis Island, a remote island at the time. 
                                  In the King's absence, the Great Titan War continued to cripple the Eldian Empire 
                                  as the eight Titan families would engage in an endless cycle of conspiracy and 
                                  betrayal. As Eldia lost more and more territory to the Marleyans, the King 
                                  gathered as many Eldians and members of the royal family as was possible and started 
                                  'WINE N' DINE'</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;