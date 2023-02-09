
import React, { useState, useRef, useEffect } from 'react'
import styles from '../src/App.css'
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			gap: "4rem"
		}}>
			<Header/>
			<Body/>

		</div>
	)
}

export default App;
