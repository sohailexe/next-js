import Navigation from "./components/Navigation";

export const metadata = {
  title: "Sohail Faiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>Copy Right by Sohail Faiz</footer>
      </body>
    </html>
  );
}
