import { ReactTyped as Typed } from 'react-typed';

import {LabelHeader } from './style.js'

const HeaderTitle = () => {
    return (
      <div className="hero-container" data-aos="fade-in" >
        <LabelHeader>
          <Typed
            strings={['Walty Photos Engine']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </LabelHeader>
      </div>
    );
  };  
export default HeaderTitle;