import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/_component/Header';
import { LocationProvider } from '@/contexts/LocationContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} text-white bg-black`}>
				<LocationProvider>
					<Header />
					{children}
				</LocationProvider>
			</body>
		</html>
	);
}
