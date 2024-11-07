import React, { Component } from "react";
import "./Home.css";

const Home = (props) => {
  //   console.log("is checked", props, props.isChecked, props.checked);
  return (
    <React.Fragment>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <p>Before using this symptom checker, please read carefully and accept our Terms and Services:</p>
        <ul>
          <li>This checkup is not a diagnosis.</li>
          <li>This checkup is for informational purposes and is not a qualified medical opinion.</li>
          <li>Information that you provide is anonymous and not shared with anyone. We also do not store any information on our server.</li>
        </ul>
        <form style={{maxWidth: '100%'}} class="usa-form TermsCheckbox">
          <div class="usa-checkbox">
            <input style={{width: "16px", height: "16px", marginRight: "8px", outline: "none"}} checked={props.isChecked} onChange={props.checked} id="truth" type="checkbox" name="historical-figures-1" value="truth" />
            <label  for="truth">
              I agree to the ChatHealth <a style={{color: 'black'}} href="https://chathealth.com.au/terms-and-conditions"> terms and conditions</a>
            </label>
          </div>
        </form>
      </div>

      <div className="tablet:grid-col">{/* <img src="/images/TOS.png" /> */}</div>
    </React.Fragment>
  );
};

export default Home;
