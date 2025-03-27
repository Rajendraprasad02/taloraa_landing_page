import logoLight from "../assets/logo/taloraa.png";
import logoDark from "../assets/logo/taloraalight.png";

import { useTheme } from "./theme-provider";

export const Footer = () => {
  const { theme } = useTheme(); // Get current theme
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img
              src={theme === "dark" ? logoDark : logoLight}
              className="w-2/6 md:w-2/12 lg:w-1/3"
            />
          </a>
        </div>
        <div className="flex flex-col gap-2"></div>
        <div className="flex flex-col gap-2"></div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.instagram.com/talent_takeaways/?igsh=cmptOTZqbGN5eHg3#"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/company/talent-takeaways-infotech-private-limited/posts/?feedView=all"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61558281760096"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://x.com/Talenttakeaways?t=l0UyQpU-qx6kDF9Zz_eEZA&s=08"
              className="opacity-60 hover:opacity-100"
            >
              X
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          Copyright &copy;
          <span>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.talentakeaways.com/"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              talentakeaways
            </a>
          </span>{" "}
          2025. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
