import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-200 py-12 mt-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-slate-600 font-light">© {currentYear} <span className="font-medium text-slate-700">Bilguunnaran Uurtsaikh</span>. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8">
            <Link href="https://www.linkedin.com/in/bilguunnaran-uurtsaikh-84150725b/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-700 transition-colors">
              LinkedIn
            </Link>
            <Link href="mailto:your.email@example.com" className="text-slate-500 hover:text-indigo-700 transition-colors">
              Email
            </Link>
            <Link href="/resume.pdf" target="_blank" className="text-slate-500 hover:text-indigo-700 transition-colors">
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

