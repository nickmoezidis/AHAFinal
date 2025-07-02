import React from 'react';
import { teacherAvatars } from '../assets/avatars';  // Correct import path

const AvatarLesson = ({ teachers = teacherAvatars }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {Object.keys(teachers).map((teacherKey, index) => {
        const teacher = teachers[teacherKey];
        return (
          <div key={index} className="flex flex-col items-center bg-white shadow rounded-2xl p-4">
            <img
              src={teacher.img}
              alt={teacherKey}
              className="w-40 h-40 object-cover rounded-full border-4 border-gray-200 mb-4"
            />
            <div className="text-center">
              <h2 className="text-lg font-semibold">{teacherKey}</h2>
              <p className="text-gray-600">{teacher.subject} - Grades: {teacher.grades}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvatarLesson;
