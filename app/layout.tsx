import type {Metadata} from 'next';
import { Roboto } from 'next/font/google';
import './globals.css'; // Global styles

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'A.R. Jamil | Entrepreneur & Strategist',
  description: 'Operating out of the DMU Innovation Centre. Scaling local SMEs with AI-augmented creative strategy and guiding students toward career goals.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased scroll-smooth`}>
      <body className="font-roboto bg-[#0a0a0a] text-[#f5f5f5]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
