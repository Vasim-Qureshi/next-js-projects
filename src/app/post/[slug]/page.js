"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Post() {
  const [post, setPost] = useState(null); // State to hold post data
  const [loading, setLoading] = useState(true); // State to manage loading
  const params = useParams();

  useEffect(() => {
    const fetchPostData = async (slug) => {
      try {
        // Simulate fetching data from an API or database
        const response = await fetch(`/api/posts/${slug}`);
        const data = await response.json();
        setPost(data); // Set the fetched post data
      } catch (error) {
        console.error("Error fetching post data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    if (params.slug) {
      fetchPostData(params.slug); // Fetch data based on slug
    }
  }, [params.slug]); // Run effect when the slug changes

  if (loading) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  if (!post) {
    return <div>Post not found</div>; // Show this if post data is null
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      {/* Display more dynamic data as needed */}
    </div>
  );
}