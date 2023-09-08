import React from 'react';

const ProgressSteps = ({ steps, progressPercent }) => {
  const totalSteps = steps.length;
  const showCheckButton = progressPercent === 100;
  const activeStepIndex = Math.floor((progressPercent / 100) * totalSteps);

  return (
    <div className="progress-steps">
      <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
      <div className="steps">
      {steps.map((step, index) => (
          <div key={index} className={`step ${index < activeStepIndex ? 'completed' : ''}`}>
            <span className="step-number"><a className='ch'>✔</a></span> 
            {step}
            {/* {index < activeStepIndex && <div className="checkmark">✔</div>} */}
          </div>
        ))}
      
      </div>
      
    </div>
  );
};

export default ProgressSteps;
