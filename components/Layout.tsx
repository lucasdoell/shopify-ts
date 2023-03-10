import { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white dark:bg-slate-900">
      <Nav />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
