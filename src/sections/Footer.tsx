import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Instagram, href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <section className="c-space pb-4">
      <div className="h-px w-full mb-4" style={{ background: "linear-gradient(to right, transparent, hsl(var(--muted-foreground) / 0.3), transparent)" }} />
      <div className="flex flex-wrap items-center justify-between gap-5 text-sm text-muted-foreground">
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p>© 2025 Ali. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
