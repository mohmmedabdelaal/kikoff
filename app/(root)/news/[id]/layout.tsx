import React from 'react';

function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}

export default NewsLayout;
