import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon,
  title,
  description,
  step,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  step?: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "bg-slate-800 border-slate-700/80 hover:border-indigo-400/50",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        "group relative overflow-hidden h-full",
        className
      )}
    >
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/30 z-0" />

      {/* Step indicator */}
      {step && (
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm z-10">
          {step}
        </div>
      )}

      <CardHeader className="items-center pt-12 pb-4 px-6 relative z-10">
        <div className="p-4 bg-slate-700/50 rounded-xl group-hover:bg-indigo-500/10 transition-colors duration-300 border border-slate-700/50 group-hover:border-indigo-400/30">
          {icon}
        </div>
      </CardHeader>

      <CardContent className="text-center px-6 pb-8 relative z-10">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-slate-300/90 leading-relaxed">{description}</p>
      </CardContent>

      {/* Hover effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl" />
      </div>
    </Card>
  );
}
