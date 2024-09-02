import React, { useState } from 'react';
import ProgressSteps from '../elements/ProgressSteps';
const steps = ['Order Confirmed', 'Shipped', 'Delivered'];


const UserSingleOrderInfo = () => {

  const [progressPercent, setProgressPercent] = useState(33); 
  const handleInputChange = (e) => {
    const percent = parseInt(e.target.value);
    if (!isNaN(percent) && percent >= 0 && percent <= 66) {
      setProgressPercent(percent);
    }
  };


  return (
    <div>
      <ProgressSteps steps={steps} progressPercent={progressPercent} />
    </div>
  );
}

export default UserSingleOrderInfo;
