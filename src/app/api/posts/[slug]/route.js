// app/api/posts/[slug]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;

  // Simulated data, replace with your database or API logic
  const posts = {
    'some-slug': {
      title: 'My First Post',
      content: 'This is the content of the first post.',
      author: 'John Doe'
    },
    'another-slug': {
      title: 'Another Post',
      content: 'This is the content of another post.',
      author: 'Jane Doe'
    },
  };

  const post = posts[slug];

  if (post) {
    return NextResponse.json(post, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }
}