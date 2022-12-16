import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg  app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} aalt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Hear me, Subjects of Ymir. My name is Eren Yeager. I'm adressing my fellow Subjects of Ymir, speaking to you directly through the power of the Founder. All the walls on the island of Paradis have crumbled to the ground, and the legions of Titans burried with in have begun their march. My only goal is to protect the lives of the people of Paradis the island where I was born</p>
        </div>
        <p className='p__opensans'> Right now, the nations of the world are united in the desire to exterminate my people. It won't end with our island. They won't be satsified until every last Subject of Ymir is dead. I won't let them have their way. The Titans of the walls, will continue their march until every trace of life beyond our shores is trampled flat, and the people of Paradis are all that remains of humanity.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Eren Yeager</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
      <div className='app__chef-video'>
        <p className='p__opensans'>Get an insight of what our chef is upto</p>
          <div class="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3PIm3onlmss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>
    </div>
  </div>
);

export default Chef;
