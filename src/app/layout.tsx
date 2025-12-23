import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { getChapters } from "@/lib/markdown";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeScript } from "@/components/theme-script";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SmoothScroll } from "@/components/smooth-scroll";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeetCode Cookbook - Analysis in Go",
  description: "LeetCode Cookbook with algorithm analysis in Go",
  icons: {
    icon: '/golang-vertical.svg',
  },
};

// Cache layout data - revalidate every hour
export const revalidate = 3600;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const chapters = await getChapters();

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeScript />
        <NextTopLoader
          color="#3b82f6"
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #3b82f6,0 0 5px #3b82f6"
        />
        <SidebarProvider>
          <AppSidebar chapters={chapters} />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-zinc-200 dark:border-border px-4 bg-background">
              <SidebarTrigger className="-ml-1" />
              <ThemeToggle />
            </header>
            <div className="flex flex-1 flex-col gap-4 p-3 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6 overflow-x-hidden">
              <div className="mx-auto w-full max-w-full min-w-0">
                {children}
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
        <ScrollToTop />
        <SmoothScroll />
      </body>
    </html>
  );
}
