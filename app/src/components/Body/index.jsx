import React, { useState, useRef, useEffect } from 'react'
import Header from '../Header';
function Body() {
  const clearTimer = (e) => {
		setTimer('03:00:00');
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}
  const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + 15);
		return deadline;
	}
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}
  const [theme, setTheme] = useState(false)
  const handelTheme=()=>{
  setTheme(!theme)
  console.log(theme)
  if(theme){
    document.body.style.backgroundColor="#242424"
    document.getElementById('label').style.color="#ffff"

  }else{
    document.body.style.backgroundColor="#ffff"
    document.getElementById('label').style.color="#242424"
  }
  }
  return (
    
    <div>
			<input type="checkbox" onChange={handelTheme}  />
			<span id='label'>change theme</span>
    </div>
  )
}

export default Body