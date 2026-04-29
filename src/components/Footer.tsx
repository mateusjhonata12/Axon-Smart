import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-32 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex flex-col items-center md:items-start gap-8">
          <Link to="/" className="block hover:opacity-70 transition-opacity">
            <img 
              src="/logo.png" 
              alt="AXON SMART" 
              className="h-6 w-auto brightness-0" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-sm font-bold tracking-luxury uppercase">AXON SMART</span>';
              }}
            />
          </Link>
          <a 
            href="https://wa.me/5579996294087" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-nero text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-cold-gray transition-all shadow-xl"
          >
            Falar com Especialista
          </a>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-8">
          <div className="flex gap-12 text-[10px] uppercase tracking-luxury text-cold-gray">
            <a href="#" className="hover:text-nero transition-colors">Privacidade</a>
            <a href="#" className="hover:text-nero transition-colors">Termos</a>
            <a href="#" className="hover:text-nero transition-colors">Contato</a>
          </div>
          
          <div className="text-[10px] uppercase tracking-luxury text-cold-gray/60">
            © {currentYear} AXON SMART. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
