import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection({ dark = false }) {
  return (
    <section
      id="contact"
      className={`px-4 py-24 sm:px-6 lg:px-8 ${dark ? "bg-[#1e1e1e] text-[#F5F7FC]" : "bg-[#f2eee8] text-[#171717]"}`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-3xl border p-6 shadow-sm md:flex-row md:items-end md:p-8 md:gap-0 ${dark ? "border-[#263247]/12 bg-[#fffef6] text-[#263247]" : "border-black/8 bg-[#fffef6] text-[#263247]"}`}
      >
        <div>
          <p className="font-body text-lg uppercase tracking-[0.28em] text-[#263247]/70">
            Available for opportunities
          </p>
          <h2 className="font-display mt-4 text-xl font-medium tracking-[0.04em] sm:text-2xl">
            Every screen is a playwright. What's your story?
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className={`font-body ${dark ? "bg-[#191b1e] text-[#F5F7FC] hover:bg-[#15171d]" : "bg-[#263247] text-[#F5F7FC] hover:bg-[#1a2035]"}`}
          >
            <a href="mailto:rubio.hernandez.irene@gmail.com">
              <Mail className="h-4 w-4" /> Email
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className={`font-body bg-transparent ${dark ? "border-[#191b1e]/38 text-[#191b1e]/88 hover:bg-[#191b1e] hover:text-[#F5F7FC]" : "border-[#263247]/35 text-[#263247]/85 hover:bg-[#263247] hover:text-white"}`}
          >
            <a
              href="https://github.com/IreneRubio2024"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
