import React from 'react';

function LessonCard({ title, description }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default LessonCard;