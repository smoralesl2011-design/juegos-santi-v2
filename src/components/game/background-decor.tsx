import { Cloud, Sparkles, Sun } from "lucide-react";

const BackgroundDecor = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-10 -top-12 h-44 w-44 rounded-blob bg-panel-2/25 blur-[2px]" />
    <div className="absolute -right-12 top-24 h-56 w-56 rounded-blob bg-panel-3/20 blur-[2px]" />
    <div className="absolute -bottom-16 left-1/4 h-52 w-52 rounded-blob bg-secondary/25 blur-[2px]" />

    <Sun className="absolute right-6 top-6 h-20 w-20 animate-[float_9s_ease-in-out_infinite] text-secondary motion-reduce:animate-none" />
    <Cloud className="absolute left-[8%] top-[18%] h-16 w-16 animate-float text-card motion-reduce:animate-none" />
    <Cloud className="absolute right-[16%] bottom-[12%] h-20 w-20 animate-float-slow text-card motion-reduce:animate-none" />

    <Sparkles className="absolute left-[6%] bottom-[22%] hidden h-9 w-9 animate-wiggle text-panel-1 motion-reduce:animate-none sm:block" />
    <Sparkles className="absolute right-[30%] top-[10%] h-7 w-7 animate-wiggle text-panel-3 motion-reduce:animate-none" />
    <Sparkles className="absolute left-[38%] bottom-[6%] hidden h-8 w-8 animate-wiggle text-panel-2 motion-reduce:animate-none sm:block" />
  </div>
);

export default BackgroundDecor;
