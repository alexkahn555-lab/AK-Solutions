"use client";

import Script from "next/script";

interface CalendlyEmbedProps {
  url?: string;
}

export default function CalendlyEmbed({
  url = "https://calendly.com/alex-kahn-ak-solution/30min",
}: CalendlyEmbedProps) {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: 320, height: 680 }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
