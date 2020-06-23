import React from 'react';
import { makeStyles } from '@material-ui/styles';
import '../../../../../src/App.css';

const Bubbles = () => {
  return (
    <div
      id="bubbles"
      style={{ borderRadius: '24px', marginTop: '0vh', zIndex: '-10' }}>
      <div class="bubblex2 x2" style={{ padding: '2px', zIndex: '1' }}>
        <div class="items">
          <img
            width="40"
            src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png"
          />
        </div>
        <div class="twitters">
          <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
        </div>
      </div>

      <div class="bubblex3 x3" style={{ padding: '2px', zIndex: '1' }}>
        <div class="items">
          <img
            width="40"
            src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png"
          />
        </div>
        <div class="twitters">
          <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
        </div>
      </div>
      <div class="bubblex4 x4" style={{ padding: '2px', zIndex: '1' }}>
        <div class="items">
          <img
            width="40"
            src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png"
          />
        </div>
        <div class="twitters">
          <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
        </div>
      </div>
      <div class="bubblex5 x5" style={{ padding: '2px', zIndex: '0' }}>
        <div id="outerContainer">
          <div id="container">
            <div class="item">
              <img
                width="40"
                src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png"
              />
            </div>
            <div class="twitter">
              <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
            </div>
            <div class="circle c3"></div>
          </div>
        </div>
      </div>
      <div class="bubblex6 x6" style={{ padding: '2px', zIndex: '0' }}>
        <div class="items">
          <img
            width="40"
            src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png"
          />
        </div>
        <div class="twitters">
          <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
        </div>
      </div>
      <div class="bubblex7 x7" style={{ padding: '2px', zIndex: '0' }}>
        <div class="items">
          <img
            width="40"
            src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png"
          />
        </div>
        <div class="twitters">
          <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
        </div>
      </div>

      <div
        class="bubblex8 x8"
        style={{
          padding: '2px',
          zIndex: '0',
          marginTop: '50px'
        }}>
        <div id="outerContainer">
          <div id="container">
            <div class="item">
              <img
                width="40"
                src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png"
              />
            </div>
            <div class="twitter">
              <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
            </div>
            <div class="circle c3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bubbles;
