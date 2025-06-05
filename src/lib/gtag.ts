// lib/gtag.ts
export const GA_TRACKING_ID = 'G-QKQRE3WQPF'; // Replace with your GA4 ID

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};