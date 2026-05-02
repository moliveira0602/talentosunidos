import { ArrowUpRight } from "lucide-react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  dark?: boolean;
  link?: string;
  linkText?: string;
}

const FeatureCard = ({ title, description, icon, dark, link, linkText = "Saiba mais" }: FeatureCardProps) => {
  const content = (
    <div className={`group p-10 rounded-3xl border transition-all duration-500 h-full flex flex-col reveal ${
      dark 
        ? "bg-[var(--deep-blue)] border-[var(--deep-blue)] text-white shadow-2xl" 
        : "bg-white border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-slate-200"
    }`}>
      {icon && (
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
          dark ? "bg-[var(--accent)] text-[var(--deep-blue)]" : "bg-slate-50 text-[var(--deep-blue)] group-hover:bg-[var(--accent)] group-hover:text-[var(--deep-blue)]"
        }`}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className={`text-[16px] leading-relaxed font-light ${dark ? "text-slate-300" : "text-slate-500"}`}>
        {description}
      </p>
      <div className={`mt-auto pt-8 flex items-center gap-2 text-sm font-semibold transition-all opacity-0 group-hover:opacity-100 ${
        dark ? "text-[var(--accent)]" : "text-[var(--deep-blue)]"
      }`}>
        {linkText} <ArrowUpRight className="size-4" />
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};



export default FeatureCard;
