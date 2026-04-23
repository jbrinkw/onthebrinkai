import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Résumé",
  description: "Résumé for Jeremy Brinkworth.",
  alternates: { canonical: "/resume" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <div className="px-2 pb-4 sm:px-3">
      <h1 className="sr-only">Résumé</h1>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        <object
          data="/Jeremy_Brinkworth_Resume_4_26.pdf"
          type="application/pdf"
          className="h-[calc(100vh-40px)] w-full"
        >
          <p className="p-4 text-sm text-slate-200">
            If the PDF does not display, download it from{" "}
            <a
              href="/Jeremy_Brinkworth_Resume_4_26.pdf"
              className="text-cyan-300 hover:text-cyan-200"
            >
              /Jeremy_Brinkworth_Resume_4_26.pdf
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  );
}

