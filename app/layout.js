import "./globals.css";

export const metadata = {
  title: "Construction",
  description: "The Best Construction Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  );
}
