import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/50 to-indigo-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6">
          Ready to Transform Your Event Experience?
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Whether you're looking to attend inspiring events or host your own,
          Eventify provides all the tools you need for success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-indigo-600 hover:bg-indigo-700 transition-colors">
            Join Now - It's Free
          </Button>
          <Button
            variant="outline"
            className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-none hover:bg-slate-900 hover:text-white transition-colors"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}