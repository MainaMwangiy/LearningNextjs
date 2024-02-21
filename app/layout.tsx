import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: 'Lango Dashboard',
        default: 'Lango Dashboard',
    },
    description: 'Lango database management',
    metadataBase: new URL('https://lango-dashboard.vercel.app/'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
