import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class DropDown extends Component {
	state ={value:''}

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity

  render() {
    return (
      <div className='selectParent'>
      <select onChange={e => this.props.onChange(e)}>
		<option value="0"> Choose your industry</option>
		<option value="Accommodation and food services"> Accommodation and food services</option>
		<option value="Administrative and support services"> Administrative and support services</option>
		<option value="Agriculture"> Agriculture</option>
		<option value="Arts and recreation services"> Arts and recreation services</option>
		<option value="Construction"> Construction</option>
		<option value="Education and training"> Education and training</option>
		<option value="6"> Electricity</option>
		<option value="7"> Financial and insurance services</option>
		<option value="8"> Health care and social assistance</option>
		<option value="9"> Information media and telecommunications</option>
		<option value="10"> Manufacturing</option>
		<option value="11"> Mining</option>
		<option value="12"> Other services</option>
		<option value="13"> Professional</option>
		<option value="14"> Public administration (councils) and safety</option>
		<option value="15"> Rental hiring and real estate services</option>
		<option value="16"> Retail trade</option>
		<option value="17"> Transport</option>
		<option value="Wholesale trade"> Wholesale trade</option>
		</select>
      </div>
    );
  }
}

export default DropDown;