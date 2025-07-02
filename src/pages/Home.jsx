import React from 'react';
import AvatarPreview from '../Components/AvatarPreview';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">Welcome to American Homeschool Academy</h1>
      <p className="text-lg mb-6">Explore our curriculum, meet your AI teachers, and see how AHA is reimagining homeschool education.</p>
      <AvatarPreview />
    </div>
  );
}

export default Home;
