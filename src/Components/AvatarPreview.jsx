import React from 'react';

function AvatarPreview({ name, image }) {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="mx-auto w-24 h-24 rounded-full mb-2" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}

export default AvatarPreview;