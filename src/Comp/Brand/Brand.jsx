import React from 'react'
import './Brand.css';
// import { google } from './Import';
import { slack } from './Import';
import { atlassian } from './Import';
import { dropbox } from './Import';
import { shopify } from './Import';
import google from '../../assets/google.png';

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt=""/>
      </div>
      <div>
        <img src={slack} alt=""/>
      </div>
      <div>
        <img src={atlassian} alt=""/>
      </div>
      <div>
        <img src={dropbox} alt=""/>
      </div>
      <div>
        <img src={shopify} alt=""/>
      </div>
    </div>
  )
}

export default Brand
