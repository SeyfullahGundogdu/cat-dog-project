import React from 'react';
import './mysass.scss';
import { Helmet } from 'react-helmet';

//generate a unique ID each time the page gets refreshed
//https://dustinpfister.github.io/2018/10/03/lodash_uniqueid/
const TITLE = 'Demo Page'
let uniqueId = (function () {
	let c = 0,
	st = new Date();
	return function (prefix) {
    	var t = new Date() - st,
    	r = Math.floor(Math.random() * 1000),
		str;
		prefix = String(prefix) || '';
		str = '-' + c + '-' + t + '-' + r;
		c += 1;
		return prefix + str;
  	}
}
  	());

class MyComponent extends React.Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
        	count: 0,
        	src:""
      	};
      	this.handleClickDog=this.handleClickDog.bind(this);
      	this.handleClickCat=this.handleClickCat.bind(this);
    }
	idH1 = uniqueId('id');
	idButtonOne = uniqueId('id');
	idButtonTwo = uniqueId('id');
	idDiv = uniqueId('id');

	handleClickDog() {
		fetch('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
		.then(data => this.setState(state => ({
			src: data.message,
			count: state.count + 1
			}))
		);
	}
	handleClickCat() {
		fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => this.setState(state => ({
			src: data[0].url,
			count: state.count + 1
			}))
		);
	}
	render() {

		return (
		<div>
			
        		<title>{ TITLE }</title>
      		
			
			<body>
				<div className="div-img" style={{ backgroundImage: `url(${this.state.src})`}} id={this.idDiv} />
				<button className="button-props" onClick={this.handleClickDog} style={this.button} id={this.idButtonOne}>
				Dog Person {/*id={this.idButtonOne}*/}
				</button>
				<button className="button-props" onClick={this.handleClickCat} style={this.button} id={this.idButtonTwo}>
				Cat Person {/*id={this.idButtonTwo}*/}
				</button>
			</body>
		</div>
		);
	}
};
export default MyComponent;