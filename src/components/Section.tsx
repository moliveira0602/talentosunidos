
interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

const Section = ({ id, label, title, children, light, className }: SectionProps) => {
  return (
    <section id={id} className={`py-24 md:py-32 border-b border-slate-50 ${light ? "bg-slate-50/50" : "bg-white"} ${className || ""}`}>
      <div className="container mx-auto max-w-7xl px-6">
        {(label || title) && (
          <div className="mb-20 reveal">
            {label && <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-[var(--accent)] text-black mb-6">{label}</span>}
            {title && <h2 className="text-5xl md:text-6xl font-normal tracking-tighter text-slate-950 leading-tight max-w-4xl">{title}</h2>}
          </div>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};



export default Section;
