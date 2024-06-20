// Example usage of Link component
"use client"
import Link from 'next/link';

export default function Blog () {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link href="/post/first-post">
            First Post
          </Link>
        </li>
        <li>
          <Link href="/post/second-post">
            Second Post
          </Link>
        </li>
      </ul>
    </div>
  );
};
