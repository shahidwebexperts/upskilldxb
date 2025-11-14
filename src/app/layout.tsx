import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UpskillDXB - 3-Month Backend + MERN Bootcamp',
  description: 'Master backend and full-stack web development through real-world projects, hands-on coding, and daily 1-hour live sessions designed for early working professionals in Dubai.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
