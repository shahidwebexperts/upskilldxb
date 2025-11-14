import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="text-center px-4">
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="text-3xl mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Please check the URL or go back to the homepage.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
