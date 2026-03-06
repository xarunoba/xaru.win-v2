import { FolderGit, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-primary py-8 px-6 md:px-12 border-t border-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 font-data text-sm">
          <a
            href="https://github.com/xarunoba"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <FolderGit size={16} /> GitHub
          </a>
          <a
            href="mailto:contact@xaru.win"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail size={16} /> E-mail
          </a>
        </div>
        <div className="font-data text-xs text-primary/60 tracking-widest">
          Copright {new Date().getFullYear()} xarunoba.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
