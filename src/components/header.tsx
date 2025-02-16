'use client';

import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <h1 className='font-header text-lg text-primary'>Radio Vibe</h1>
    </header>
  );
}