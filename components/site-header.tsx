"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "@/public/logo-transparent.png";

const DIRECTION_THRESHOLD = 6;
const TOP_THRESHOLD = 24;

type SiteHeaderProps = {
  companyName: string;
};

export function SiteHeader({ companyName }: SiteHeaderProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let animationFrame: number | null = null;

    const handleScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const scrollDifference = currentScrollY - lastScrollY.current;

        if (currentScrollY <= TOP_THRESHOLD) {
          setIsHidden(false);
          lastScrollY.current = currentScrollY;
        } else if (scrollDifference > DIRECTION_THRESHOLD) {
          setIsHidden(true);
          lastScrollY.current = currentScrollY;
        } else if (scrollDifference < -DIRECTION_THRESHOLD) {
          setIsHidden(false);
          lastScrollY.current = currentScrollY;
        }

        animationFrame = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isHidden && !isMenuOpen ? " is-hidden" : ""}`}>
      <a className="brand" href="#top" aria-label={`${companyName}, startsida`}>
        <Image
          className="brand-logo"
          src={logo}
          alt="Framra"
          sizes="(max-width: 430px) 120px, 150px"
          priority
        />
      </a>

      <nav aria-label="Huvudmeny" className={isMenuOpen ? "is-open" : ""} id="primary-navigation">
        <a href="#tjanster" onClick={closeMenu}>Erbjudande</a>
        <a href="#sa-fungerar-det" onClick={closeMenu}>Så fungerar det</a>
        <Link href="/saljkurs" onClick={closeMenu}>Säljkurs</Link>
        <a href="#om" onClick={closeMenu}>Om oss</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
      </nav>

      <button
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Stäng menyn" : "Öppna menyn"}
        className="menu-toggle"
        onClick={() => setIsMenuOpen((open) => !open)}
        type="button"
      >
        <span className="menu-toggle-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
    </header>
  );
}
