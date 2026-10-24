'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-12 bg-[#05050C] border-t border-[#1F1D3D] text-[#8E8EA8] font-mono text-xs">
      <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© 2025 PRASHANT STUDIO. ALL RIGHTS RESERVED. PARIS</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-[#8E8EA8] hover:text-[#00F0FF] transition-colors cursor-pointer tracking-wider uppercase font-bold"
        >
          <span>BACK TO TOP</span>
          <span>^</span>
        </button>
      </div>
    </footer>
  );
}
