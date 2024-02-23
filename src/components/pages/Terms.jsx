import React from 'react';
import "./terms.css"

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      <main>
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

        <p>If you have any questions about these terms, please <a href="">contact us</a>.</p>
    </main>

    <footer>
        <p>&copy; 2024 Nutrimate. All Rights Reserved.</p>
    </footer>
    </div>
  );
};

export default Terms;
