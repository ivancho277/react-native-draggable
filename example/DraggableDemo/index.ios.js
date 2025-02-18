/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
//import Draggable from 'react-native-draggable';
import Draggable from './Draggable';//first, run "npm run source" to get Draggable.js
import MyComponent from './MyComponent';
export default class DraggableDemo extends Component {
	constructor(props) {
		super(props);
		this._changeFace = this._changeFace.bind(this);
		this.state = {
			source: require('./img/trump1.png')
		};
	}
	_changeFace() {
		console.log("drag release");
		this.setState({source:require('./img/trump2.png')});
	}
	_getMyDraggablePosition(ref) {
		console.log(ref.getPosition());
	}
	render() {
		let i = 1;
		let child = ()=>(<Text> hello </Text>);
		return (
			<View >
				<Draggable x={0} y={0} />
				<Draggable x={50} y={0}>
					<MyComponent/>
				</Draggable>
				<Draggable 
					reverse={false} 
					ref={(draggable) => {this.exampleRef= {};this.exampleRef[i] = draggable;}} 
					pressDrag={()=>this._getMyDraggablePosition(this.exampleRef[i])} 
					renderShape='square' 
					renderColor='red' 
					x={111} y={222} 
					renderText='B'/>
				<Draggable 
					renderSize={56} 
					renderColor='black' 
					offsetX={-100} 
					offsetY={-200} 
					renderText='A' 
					pressDrag={()=>alert('touched!!')}/> 
				<Draggable renderShape='image' imageSource={this.state.source} renderSize={80} 
					offsetY={0}
					pressDragRelease={this._changeFace}
					longPressDrag={()=>console.log('long press')}
					pressDrag={()=>console.log('press drag')}
					pressInDrag={()=>console.log('in press')}
					pressOutDrag={()=>console.log('out press')}
				/>
			</View>
		);
	}
}

AppRegistry.registerComponent('DraggableDemo', () => DraggableDemo);
