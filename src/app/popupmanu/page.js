// pages/index.js
"use client"
import Head from 'next/head';
import PopupMenu from '../_components/popupMenu';
import { use } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Next.js Popup Menu</title>
      </Head>
      <main className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Next.js 13!</h1>
        <PopupMenu />
      </main>
    </div>
  );
}