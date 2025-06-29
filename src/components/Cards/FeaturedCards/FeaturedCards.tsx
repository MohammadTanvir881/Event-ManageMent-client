import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function FeatureCard({
  icon,
  title,
  description,
  step,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  step?: string;
}) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-indigo-400/30 transition-all h-full group">
      <CardHeader className="items-center relative">
        {step && (
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            {step}
          </div>
        )}
        <div className="p-4 bg-slate-700/50 rounded-full group-hover:bg-indigo-500/20 transition-colors">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="text-center px-6 pb-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </CardContent>
    </Card>
  );
}