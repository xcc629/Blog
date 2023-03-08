import Header from "./Header";
import ReactQueryProvider from "./provider";
import "./globals.css";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
