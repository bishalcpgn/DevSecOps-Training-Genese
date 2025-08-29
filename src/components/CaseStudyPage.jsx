import React from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from '../data/caseStudies.json';

function CaseStudyPage() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return <div className="min-h-screen flex items-center justify-center text-gray-700">Case study not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{study.title}</h1>
        <p className="text-gray-600 text-lg mb-8">{study.date}</p>
        <div className="prose prose-lg max-w-none text-gray-800">
          <p>{study.content}</p>
          {/* Add more detailed content here if available in JSON */}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyPage;

