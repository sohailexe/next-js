
export const metadata = {
  title: "Sohail Faiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <main>{children}</main>

      </body>
    </html>
  );
}
