import ReviewLayout from "@/layout/reviewsLayout/ReviewLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReviewLayout>{children}</ReviewLayout>
      </body>
    </html>
  );
}
