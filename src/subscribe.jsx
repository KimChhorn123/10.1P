import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    // Extract the part before the "@" to use as the name
    const name = email.split('@')[0]; // This gets the part before the '@'

    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: email,
          firstName: name, // Use the extracted name
          lastName: '',    
        }),
      });

      // Check if the response is OK
      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      alert(result); // Notify the user about the subscription result
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div id="subscribemain">
      <div className="Subscribe">
        <h2>Subscribe for our daily insider</h2>
        <input
          id="email"
          type="text"
          placeholder="Enter Your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="subscribe"
          type="button"
          value="Subscribe"
          onClick={handleSubscribe}
        />
      </div>
    </div>
  );
}

export default Subscribe;
