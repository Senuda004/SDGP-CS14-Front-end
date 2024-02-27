import React, { useState } from 'react';
import './terms.css';  

const TermsAndConditions = () => {
  const [activeTab, setActiveTab] = useState('tab_item_1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="wrapper flex_align_justify">
      <div className="tc_wrap">
        <div className="tabs_list">
          <ul>
            <li
              onClick={() => handleTabClick('tab_item_1')}
              className={activeTab === 'tab_item_1' ? 'active' : ''}
            >
              Terms of Service
            </li>
            <li
              onClick={() => handleTabClick('tab_item_2')}
              className={activeTab === 'tab_item_2' ? 'active' : ''}
            >
              Privacy Policy
            </li>
            
          </ul>
        </div>
        <div className="tabs_content">
          <div className="tab_head">
            <h2>Terms & Conditions</h2>
          </div>
          <div className="tab_body">
            <div className={`tab_item ${activeTab}`} style={{ display: activeTab === 'tab_item_1' ? 'block' : 'none' }}>
              <h3>Terms of Service</h3>
              <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.</p>

              <p>The term 'us' or 'we' refers to the owner of the website.</p>

              <p>The term 'you' refers to the user or viewer of our website.</p>

              <p>The use of this website is subject to the following terms of use:</p>

              <ul>
                  <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                  <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
                  <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.</li>
                  <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
                  <li>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
              </ul>
              <br></br>

              <p>If you have any questions about these terms, please <a href="">contact us</a>.</p>
            </div>
            <div className={`tab_item ${activeTab}`} style={{ display: activeTab === 'tab_item_2' ? 'block' : 'none' }}>
              <h3>Privacy Policy</h3>
              <p>Your privacy is important to us. It is Nutrimate's policy to respect your privacy regarding any information we may collect from you across our website, mobile application, and other sites we own and operate.</p>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
              <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
              <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
              <p>Our website and mobile application may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
              <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
              <p>Your continued use of our website and mobile application will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
              <p>This policy is effective as of 18 February 2024.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

