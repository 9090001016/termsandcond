import React, { useState } from 'react';

function TermsAndConditionsCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isChecked) {
      console.log('Terms and conditions accepted');
      // Perform any necessary action here
    } else {
      console.log('Terms and conditions not accepted');
      // Display an error message or take other action as needed
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          I have read and agree to the <a href="#">terms and conditions</a>
        </label>
        <br />
        <button type="submit" disabled={!isChecked}>Submit</button>
      </form>
    </div>
  );
}

export default TermsAndConditionsCheckbox;
