import React from 'react'
import BlogCard from './BlogCard';

const Blog = () => {
    const blogPosts = [
        {
          image: '/assets/Frame 60-2.svg', // Use images from the "public" folder
          category: 'UI/UX Design',
          author: 'Jayesh Patil',
          date: '10 Nov, 2023',
          title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
          description: '',
        },
        {
          image: '/assets/Rectangle 6.svg',
          category: 'App Design',
          author: 'Jayesh Patil',
          date: '09 Oct, 2023',
          title: 'Sugee: Loan Management System for Rural Sector.',
          description: '',
        },
        {
          image: '/assets/Rectangle 6-2.svg',
          category: 'App Design',
          author: 'Jayesh Patil',
          date: '13 Aug, 2023',
          title: 'Cinetrade: Innovative way to invest in Digital Media',
          description: '',
        },
      ];
    
      return (
        <div className="mx-8 my-8">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">From my blog post</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-3xl">
              See All
            </button>
          </div>
    
          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      );
}

export default Blog