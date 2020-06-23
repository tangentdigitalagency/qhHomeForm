import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import '../../../../../src/App.css';
import Button from '@material-ui/core/Button';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const ButtonGoogle = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      id="transition"
      style={{
        background: 'white',
        width: '220px',
        zIndex: '4',
        height: '85px',
        fontWeight: '600',
        borderRadius: '15px'
      }}>
      <svg
        style={{ width: '45px' }}
        width="2.3px,4px"
        height="3.5px,4px"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="sc-bZQynM dQJoOP">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.93205 0.847113C0.542115 1.2669 0.316895 1.90833 0.316895 2.7479V32.5258C0.316895 33.3653 0.542115 34.0068 0.945496 34.4098L1.0497 34.5004L17.7497 17.8165V17.4437L1.03626 0.756439L0.93205 0.847113Z"
          fill="#6E7898"></path>
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.3063 23.3946L17.7363 17.8299V17.4404L23.3063 11.8757L23.4274 11.9496L30.0159 15.6907C31.9017 16.7519 31.9017 18.5049 30.0159 19.5796L23.4274 23.3207L23.3063 23.3946Z"
          fill="#6E7898"></path>
        <path
          opacity="0.9"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.4268 23.3207L17.7358 17.6352L0.931641 34.4232C1.5468 35.0814 2.57878 35.1553 3.73177 34.5139L23.4268 23.3207Z"
          fill="#6E7898"></path>
        <path
          opacity="0.7"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.4268 11.9496L3.73177 0.773236C2.57878 0.115013 1.54343 0.205687 0.931641 0.86391L17.7358 17.6352L23.4268 11.9496Z"
          fill="#6E7898"></path>
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.3061 23.1998L3.74545 34.3023C2.65296 34.9303 1.67812 34.8866 1.04952 34.3157L0.945312 34.4198L1.04952 34.5105C1.67812 35.0781 2.65296 35.1251 3.74545 34.4971L23.4405 23.3207L23.3061 23.1998Z"
          fill="white"
          fill-opacity="0.2"></path>
      </svg>

      <Typography
        style={{
          fontSize: '18px',
          paddingLeft: '3vh',
          color: 'grey',
          textAlign: 'left',
          textTransform: 'none'
        }}>
        Get it on
        <br />
        <b>Google Play</b>
      </Typography>
    </Button>
  );
};
export default ButtonGoogle;
