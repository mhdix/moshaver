import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { logout } from "../../services";

type NavbarType = {
  scrollToSection: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ scrollToSection, menuOpen, setMenuOpen }: NavbarType) => {
  const { isAuthenticated, loading, user } = useAuth();

  const [accountOpen, setAccountOpen] = useState(false);

  if (loading) {
    return <div className="bg-bg">loading</div>;
  }

  const userName = user?.data?.data?.name || "کاربر";
  const userInitial = userName.trim().charAt(0) || "ک";

  const handleLogout = async () => {
    setAccountOpen(false);
    await logout();
  };

  return (
    <header className="fixed top-0 z-20 w-full border-b border-line bg-bg/75 backdrop-blur-[18px]">
      <div className="mx-auto flex h-20.5 w-[min(1160px,calc(100%-48px))] items-center justify-between">
        <nav
          className={`flex items-center gap-7 max-[850px]:absolute max-[850px]:top-20.5 max-[850px]:right-0 max-[850px]:left-0 max-[850px]:hidden max-[850px]:flex-col max-[850px]:items-stretch max-[850px]:gap-1 max-[850px]:bg-bg/95 max-[850px]:px-6 max-[850px]:pt-5 max-[850px]:pb-7 ${
            menuOpen ? "max-[850px]:flex!" : ""
          }`}
        >
          {[
            ["", "صفحه اصلی"],
            ["/need-help", "برانداز مالی"],
            ["/financial-health", "سلامت کسب و کار من"],
            ["#services", "خدمات"],
            ["#method", "رویکرد من"],
            ["#problems", "مسائل کسب‌وکار"],
            ["#about", "درباره من"],
          ].map(([link, label]) => (
            <React.Fragment key={link}>
              {link.startsWith("#") ? (
                <Link
                  to={"/" + link}
                  className="border-0 bg-transparent text-xs text-text-secondary transition hover:text-primary max-[850px]:p-3"
                >
                  {label}
                </Link>
              ) : (
                <Link
                  to={link}
                  className="border-0 bg-transparent text-xs text-text-secondary transition hover:text-primary max-[850px]:p-3"
                  onClick={() => scrollToSection(link)}
                >
                  {label}
                </Link>
              )}
            </React.Fragment>
          ))}

          {/* Actions */}
          <div className="mr-1 flex items-center gap-2 border-r border-line pr-4 max-[850px]:mt-3 max-[850px]:flex-col max-[850px]:items-stretch max-[850px]:gap-2 max-[850px]:border-0 max-[850px]:border-t max-[850px]:pt-4 max-[850px]:pr-0">
            {/* CTA */}
            <button
              type="button"
              className="rounded-sm border border-primary/50 bg-transparent px-4.5 py-2.75 text-xs text-primary transition hover:bg-primary hover:text-bg max-[850px]:w-full max-[850px]:p-3"
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
            >
              شروع گفتگو
            </button>

            {!isAuthenticated ? (
              /* Login */
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-sm border border-line bg-surface/40 px-4.5 py-2.75 text-xs text-text-secondary transition hover:border-primary/50 hover:bg-surface hover:text-primary max-[850px]:w-full max-[850px]:p-3"
              >
                <span>ورود</span>

                <span
                  aria-hidden="true"
                  className="text-[11px] opacity-50 transition-transform group-hover:-translate-x-0.5"
                >
                  ←
                </span>
              </Link>
            ) : (
              /* Account */
              <div className="relative max-[850px]:w-full">
                <button
                  type="button"
                  aria-expanded={accountOpen}
                  aria-haspopup="menu"
                  onClick={() => setAccountOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-sm border border-line bg-surface/40 px-3.5 py-2.25 text-xs text-text-secondary transition hover:border-primary/40 hover:bg-surface hover:text-text max-[850px]:w-full max-[850px]:justify-between max-[850px]:p-3"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-[10px] text-primary">
                      {userInitial}
                    </span>

                    <span className="max-w-32 truncate max-[850px]:max-w-none">
                      {userName}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`text-[10px] text-muted transition-transform duration-200 ${
                      accountOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {accountOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full z-30 mt-2 min-w-36 rounded-sm border border-line bg-card p-1.5 shadow-xl max-[850px]:static max-[850px]:mt-1 max-[850px]:w-full"
                  >
                    <div className="border-b border-line px-3 py-2.5">
                      <p className="truncate text-xs text-text">{userName}</p>

                      <p className="mt-1 text-[9px] text-muted">حساب کاربری</p>
                    </div>

                    <button
                      type="button"
                      role="menuitem"
                      onClick={logout}
                      className="mt-1 w-full rounded-sm px-3 py-2 text-right text-xs text-text-secondary transition hover:bg-red-500/10 hover:text-red-400"
                    >
                      خروج از حساب
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2.75 border-0 bg-transparent text-right text-text"
          onClick={() => {
            scrollToSection("home");
            setMenuOpen(false);
          }}
          aria-label="خانه"
        >
          <span className="grid h-10 w-10 place-items-center border border-primary/60 text-md tracking-[1px] text-primary">
            JD
          </span>

          <span>
            <strong className="block text-sm">جواد دومانلو</strong>

            <small className="mt-0.5 block text-[9px] text-muted">
              مشاور مالی و عملیاتی
            </small>

            {isAuthenticated && (
              <small className="mt-1 block max-w-32 truncate text-[9px] text-primary">
                سلام {userName}
              </small>
            )}
          </span>
        </button>

        {/* Mobile menu */}
        <button
          type="button"
          className="hidden border-0 bg-transparent text-2xl text-primary max-[850px]:block"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setAccountOpen(false);
          }}
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
