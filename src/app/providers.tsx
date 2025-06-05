// app/providers.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as gtag from '@/lib/gtag';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname) gtag.pageview(pathname);
    }, [pathname]);

    return <>{ children }</>;
}
