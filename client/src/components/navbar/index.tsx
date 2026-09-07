import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

type Props = {
  scrollToSection: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navItems = {
  services: "خدمات",
  method: "رویکرد من",
  problems: "مسائل کسب‌وکار",
  about: "درباره من",
};

const Navbar = ({ scrollToSection, menuOpen, setMenuOpen }: Props) => {
  const { isAuthenticated, loading, user } = useAuth();
  console.log('navbar ',user)
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <header className="fixed top-0 z-20 w-full border-b border-line bg-bg/75 backdrop-blur-[18px]">
      <div className="mx-auto flex h-20.5 w-[min(1160px,calc(100%-48px))] items-center justify-between">
        <nav
          className={`flex items-center gap-7 max-[850px]:absolute max-[850px]:top-20.5 max-[850px]:right-0 max-[850px]:left-0 max-[850px]:hidden max-[850px]:flex-col max-[850px]:items-stretch max-[850px]:bg-bg/95 max-[850px]:px-6 max-[850px]:pt-5 max-[850px]:pb-7 ${menuOpen ? "max-[850px]:flex!" : ""}`}
        >
          {[
            ["", "صفحه اصلی"],
            ["/need-help", "برانداز مالی"],
            ["/services", "خدمات"],
            ["/method", "رویکرد من"],
            ["/problems", "مسائل کسب‌وکار"],
            ["/about", "درباره من"],
          ].map(([link, label]) => (
            <Link
              to={link}
              key={link}
              className="border-0 bg-transparent text-xs text-text-secondary transition hover:text-primary max-[850px]:p-3"
              onClick={() => scrollToSection(link)}
            >
              {label}
            </Link>
          ))}
          <button
            className="border border-primary/50 bg-transparent px-4.5 py-2.75 text-xs text-primary transition hover:bg-primary hover:text-bg max-[850px]:p-3"
            onClick={() => scrollToSection("contact")}
          >
            شروع گفتگو
          </button>
        </nav>
        <button
          className="flex items-center gap-2.75 border-0 bg-transparent text-right text-text"
          onClick={() => scrollToSection("home")}
          aria-label="خانه"
        >
          <span className="grid h-10 w-10 place-items-center border border-primary/60 text-md tracking-[1px] text-primary">
            JD
          </span>
          <span>
            <strong className="block text-sm">جواد دومانلو</strong>
            <small>سلام {user?.name}</small>
            <small className="mt-0.5 block text-[9px] text-muted">
              مشاور مالی و عملیاتی
            </small>
          </span>
        </button>
        <button
          className="hidden border-0 bg-transparent text-2xl text-primary max-[850px]:block"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="منو"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
