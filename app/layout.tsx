import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white">
        {/* 모든 섹션이 중앙을 잡을 수 있게 전체를 감싸는 main만 둡니다. */}
        <main className="relative w-full">
          {children}
        </main>
      </body>
    </html>
  );
}