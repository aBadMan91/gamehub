import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LayoutMain() {
  return (
    <div className="flex flex-col min-h-svh text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-16 pb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
