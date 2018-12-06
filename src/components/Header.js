import React, { Component } from 'react';
import ToggleSearchType from '../components/ToggleSearchType';

/**
* The header component of the application
*/
class Header extends Component {

  /**
  * Function that handles the change of vehicle Type
  * and calls the callback function from the App component
  *
  * @param selectedOption the selectedOption (Consumer or PCO)
  */
  handleChange = (selectedOption) => {
    this.props.callback({ vehicle_type: selectedOption });
  }

  /**
  * Function that renders the JSX to the header
  */
  render () {
    return <div className='d-flex align-items-center header-title'>
      <div className='col-xs-12 col-sm-6 col-lg-8'>
        <a className='d-flex icon-area' href='https://www.joindrover.com/cars/search'>
          <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 542.4 96.48' width='140px' height='25px'>
            <title>Drover logo</title>
            <path fill='#000000' d='M157.11,94.55l-33-36.91h-13.4V94.55H95.88V1.94h43.54q14.24,0,23,7.67t8.78,20.25q0,11.88-8,19.42T142,57.5l33.45,37.05ZM139.42,44.23q7.61,0,12.3-3.94a12.93,12.93,0,0,0,4.7-10.43,13.16,13.16,0,0,0-4.7-10.51q-4.69-4-12.3-4H110.67V44.23Z'></path>
            <path fill='#000000' d='M262.45,14.1a46.78,46.78,0,0,1,14,34.28q0,20.17-14,34.14t-34.35,14q-20.32,0-34.28-14t-14-34.14q0-20.33,14-34.35T228.1,0Q248.41,0,262.45,14.1ZM251.87,72.71q9.67-9.82,9.68-24.33,0-14.66-9.68-24.54a33.46,33.46,0,0,0-47.48,0q-9.6,9.89-9.6,24.54,0,14.5,9.6,24.33a33.63,33.63,0,0,0,47.48,0Z'></path>
            <path fill='#000000' d='M329.16,94.55H314.92L274.7,1.94H291L322,74.5l31-72.56h16.45Z'></path>
            <path fill='#000000' d='M449.72,94.55h-69V1.94h68.83v13.4h-54V41.47h49.9V54.74h-49.9v26.4h54.18Z'></path>
            <path fill='#000000' d='M524,94.55,491,57.64H477.57V94.55H462.78V1.94h43.54q14.23,0,23,7.67t8.78,20.25q0,11.88-8,19.42T509,57.5L542.4,94.55ZM506.32,44.23q7.6,0,12.3-3.94a12.9,12.9,0,0,0,4.7-10.43,13.13,13.13,0,0,0-4.7-10.51q-4.7-4-12.3-4H477.57V44.23Z'></path>
            <path fill='#000000' d='M69.6,14.86Q55.71,1.93,32.35,1.94H0V15.35H0l17,32.9h0L0,81.14H0V94.55H32.35q23.35,0,37.25-12.93T83.49,48.24Q83.49,27.78,69.6,14.86ZM58.75,72q-9.82,9.13-26.4,9.13H15.25l17-32.89-17-32.91H32.35q16.57,0,26.4,9.13t9.81,23.77Q68.56,62.9,58.75,72Z'></path>
          </svg>
        </a>
      </div>
      <div className='col-xs-12 col-sm-6 col-lg-4'>
        <ToggleSearchType
          vehicleType={this.props.vehicleType}
          callback={this.props.callback}
          />
      </div>
    </div>
  }
}
export default Header;