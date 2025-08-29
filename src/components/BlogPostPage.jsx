import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';

function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-gray-700">Blog post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-600 text-lg mb-8">{post.date}</p>
        <div className="prose prose-lg max-w-none text-gray-800">
          <p>{post.content}</p>
          {/* Add more detailed content here if available in JSON */}
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;

