
import NavBar from "./NavBar";
import { useFont } from '../hooks/useFont';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontClassName] = useFont();
  return (
    <body className={fontClassName}>
      <NavBar />
      {children}
    </body>
  );
}
