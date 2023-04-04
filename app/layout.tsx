import "@picocss/pico/css/pico.min.css";

export const metadata = {
  title: "RSC demo",
  description: "Let's talk about React Server Components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
