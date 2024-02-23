import React from 'react';
import "./QApage.css"

const QAPage = () => {
  return (
    <div className="qa-container">
      <h1>Q&A</h1>
      <div className="question">
      <h2>How do I sign up for Nutrimate?</h2>
      <p>Signing up for Nutrimate is easy. Just go to our homepage and click on the "Sign Up" button. Follow the instructions to create your account.</p>
      </div>
      <div className="question">
      <h2>How do I scan a food item?</h2>
      <p>To scan a food item, open the Nutrimate app and select the "Scan" option. Point your camera at the barcode on the food item and wait for the app to recognize it. The app will then display the nutritional information for the food item.</p>
      </div>
      <div className="question">
      <h2>Can I track my daily calorie intake with Nutrimate?</h2>
      <p>Yes, you can track your daily calorie intake with Nutrimate. The app allows you to log the foods you eat throughout the day and displays the total calorie count for each meal and the entire day. This can help you stay on track with your calorie goals.</p>
      </div>
      <div className="question">
      <h2>How do I contact Nutrimate support?</h2>
      <p>If you have any questions or issues with Nutrimate, you can contact our support team by emailing support@nutrimate.com or by using the "Contact Us" form on our website. Our team will be happy to assist you.</p>
      </div>
      <div className="question">
      <h2>What type of content can I find on Nutrimate's blog page?</h2>
      <p>Nutrimate's blog page features a variety of content related to nutrition, health, and fitness. You can find articles on topics such as healthy eating habits, tips for staying active, information about different types of diets, and much more. Our blog is updated regularly with new and informative content to help you make informed decisions about your health and well-being.</p>
      </div>
      <div className="question">
      <h2>Can I ask Nutrimate's AI chatbot for personalized nutrition advice?</h2>
      <p>Yes, Nutrimate's AI chatbot is designed to provide you with personalized nutrition advice based on your specific goals and dietary preferences. You can ask the chatbot questions about nutrition, weight loss, healthy eating, and more, and it will provide you with accurate and helpful information. The chatbot also has a feature that allows you to track your food intake and receive personalized meal recommendations based on your nutritional needs.</p>
      </div>
      <div className="question">
      <h2>How can I access Nutrimate's blog page?</h2>
      <p>You can access Nutrimate's blog page by clicking on the "Blog" tab in the app's navigation menu. This will take you to the blog page, where you can browse through our latest articles and read content that interests you. You can also search for specific topics using the search bar at the top of the page.</p>
      </div>
      <div className="question">
      <h2>Can I contribute my own articles to Nutrimate's blog?</h2>
      <p>Yes, we welcome contributions from our users! If you have a topic that you're passionate about and would like to share your knowledge with our community, you can submit your article for consideration using the "Post" button on our website. Our editorial team will review your submission and, if it meets our quality standards, we'll publish it on our blog.</p>
      </div>
      <div className="question">
      <h2>What if the ingredients on my food item is not recognized by Nutrimate scanner?</h2>
      <p>If the ingredients on your food item is not recognized by Nutrimate, you can manually enter the nutritional information for that food item into the app. Simply select the "Manual Entry" option and follow the prompts to enter the serving size, calorie content, and other relevant information for the food item. This will allow you to still track your food intake and monitor your nutritional goals, even if the ingredients is not recognized.</p>
      </div>
    </div>
  );
};

export default QAPage;