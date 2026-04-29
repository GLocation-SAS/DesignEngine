"use client";

const displayVariants = [
  { name: "Display 2XL", size: "72px", weight: "900", lh: "1.1", ls: "-2.16px", class: "text-[length:var(--font-size-display-2xl)] font-black leading-[var(--line-height-display)] tracking-[var(--letter-spacing-display-2xl)]" },
  { name: "Display XL", size: "60px", weight: "900", lh: "1.1", ls: "-1.8px", class: "text-[length:var(--font-size-display-xl)] font-black leading-[var(--line-height-display)] tracking-[var(--letter-spacing-display-xl)]" },
  { name: "Display LG", size: "48px", weight: "900", lh: "1.1", ls: "-1.44px", class: "text-[length:var(--font-size-display-lg)] font-black leading-[var(--line-height-display)] tracking-[var(--letter-spacing-display-lg)]" },
];

const headingVariants = [
  { name: "Heading 1", size: "40px", weight: "800", lh: "1.2", ls: "-0.8px", class: "text-[length:var(--font-size-h1)] font-extrabold leading-[var(--line-height-heading)] tracking-[var(--letter-spacing-h1)]" },
  { name: "Heading 2", size: "32px", weight: "800", lh: "1.2", ls: "-0.64px", class: "text-[length:var(--font-size-h2)] font-extrabold leading-[var(--line-height-heading)] tracking-[var(--letter-spacing-h2)]" },
  { name: "Heading 3", size: "24px", weight: "800", lh: "1.2", ls: "-0.48px", class: "text-[length:var(--font-size-h3)] font-extrabold leading-[var(--line-height-heading)] tracking-[var(--letter-spacing-h3)]" },
  { name: "Heading 4", size: "20px", weight: "800", lh: "1.2", ls: "-0.4px", class: "text-[length:var(--font-size-h4)] font-extrabold leading-[var(--line-height-heading)] tracking-[var(--letter-spacing-h4)]" },
  { name: "Heading 5", size: "18px", weight: "800", lh: "1.2", ls: "-0.36px", class: "text-[length:var(--font-size-h5)] font-extrabold leading-[var(--line-height-heading)] tracking-[var(--letter-spacing-h5)]" },
  { name: "Heading 6", size: "16px", weight: "800", lh: "1.2", ls: "-0.32px", class: "text-[length:var(--font-size-h6)] font-extrabold leading-[var(--line-height-heading)] tracking-[var(--letter-spacing-h6)]" },
];

const titleVariants = [
  { name: "Title LG", size: "18px", weight: "600", lh: "1.5", ls: "-0.36px", class: "text-[length:var(--font-size-title-lg)] font-semibold leading-[var(--line-height-title)] tracking-[var(--letter-spacing-title-lg)]" },
  { name: "Title MD", size: "16px", weight: "600", lh: "1.5", ls: "-0.32px", class: "text-[length:var(--font-size-title-md)] font-semibold leading-[var(--line-height-title)] tracking-[var(--letter-spacing-title-md)]" },
  { name: "Title SM", size: "14px", weight: "600", lh: "1.5", ls: "-0.28px", class: "text-[length:var(--font-size-title-sm)] font-semibold leading-[var(--line-height-title)] tracking-[var(--letter-spacing-title-sm)]" },
];

const bodyVariants = [
  { name: "Body XL", size: "20px", weight: "400", lh: "1.6", class: "text-[length:var(--font-size-body-xl)] font-normal leading-[var(--line-height-body)]" },
  { name: "Body LG", size: "18px", weight: "400", lh: "1.6", class: "text-[length:var(--font-size-body-lg)] font-normal leading-[var(--line-height-body)]" },
  { name: "Body MD", size: "16px", weight: "400", lh: "1.6", class: "text-[length:var(--font-size-body-md)] font-normal leading-[var(--line-height-body)]" },
  { name: "Body SM", size: "14px", weight: "400", lh: "1.5", class: "text-[length:var(--font-size-body-sm)] font-normal leading-[var(--line-height-body-tight)]" },
  { name: "Body XS", size: "12px", weight: "400", lh: "1.5", class: "text-[length:var(--font-size-body-xs)] font-normal leading-[var(--line-height-body-tight)]" },
];

const labelVariants = [
  { name: "Label LG", size: "14px", weight: "600", lh: "1.6", class: "text-[length:var(--font-size-label-lg)] font-semibold leading-[var(--line-height-label)]" },
  { name: "Label MD", size: "12px", weight: "600", lh: "1.6", class: "text-[length:var(--font-size-label-md)] font-semibold leading-[var(--line-height-label)]" },
  { name: "Label SM", size: "11px", weight: "600", lh: "1.5", class: "text-[length:var(--font-size-label-sm)] font-semibold leading-[var(--line-height-label-tight)]" },
];

export function TypographySection() {
  const renderGroup = (title: string, variants: any[]) => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-l-4 border-primary-500 pl-4">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-900">
          {title}
        </h3>
      </div>
      <div className="space-y-10 pl-5">
        {variants.map((v) => (
          <div key={v.name} className="space-y-2 group">
            <p className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-primary-500 transition-colors">
              {v.name} — {v.size} / {v.weight} / {v.lh}x {v.ls ? `/ ${v.ls}` : ""}
            </p>
            <div className={`${v.class} text-neutral-900`}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="typography" className="space-y-24 mt-8 pb-8 max-w-7xl">
      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">
          Tipografía
        </h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Sistema de tipografía diseñado para máxima legibilidad en todas las plataformas, usando <b>Montserrat</b> para encabezados y elementos UI, y <b>Nunito</b> para cuerpo de texto y párrafos.
        </p>
      </div>

      <div className="space-y-24">
        {renderGroup("Display", displayVariants)}
        {renderGroup("Heading", headingVariants)}
        {renderGroup("Title", titleVariants)}
        {renderGroup("Body", bodyVariants)}
        {renderGroup("Label", labelVariants)}
      </div>
    </section>
  );
}
