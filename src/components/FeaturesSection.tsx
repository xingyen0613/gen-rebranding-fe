"use client";

interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

function FeatureItem({ number, title, description, tags }: FeatureItemProps) {
  return (
    <div className="border-t border-white/[0.12]">
      <a
        href="#"
        className="group flex flex-col gap-3 rounded-2xl px-4 py-8 transition-all hover:bg-[#1a1f3a] md:flex-row md:gap-8 md:py-12"
      >
        {/* Number - hidden on mobile */}
        <span className="hidden w-10 shrink-0 text-[28px] leading-[36px] text-white md:block">
          {number}
        </span>

        <div className="flex flex-1 flex-col gap-2 md:gap-3 md:pt-1">
          {/* Title row with arrow on mobile */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold leading-[28px] tracking-[2px] text-white md:text-[28px] md:leading-[32px]">
              {title}
            </h3>
            {/* Arrow - shown inline on mobile, separate on desktop */}
            <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full transition-colors group-hover:bg-brand-primary md:hidden">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-white">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="text-base leading-[24px] text-white/60 md:text-[28px] md:leading-[36px]">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-2 md:gap-2.5">
            <span className="hidden w-[98px] shrink-0 text-base text-white/60 md:block">
              Key Features
            </span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/20 px-3 py-1 text-sm text-white md:py-1.5 md:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow icon - desktop only */}
        <div className="hidden size-10 shrink-0 items-center justify-center overflow-hidden rounded-full transition-colors group-hover:bg-brand-primary md:flex">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center px-4 py-16 md:px-6 lg:py-36">
      <div className="flex w-full max-w-full flex-col items-center gap-8 lg:max-w-[860px] lg:gap-12">
        <h2 className="text-center text-[28px] font-semibold leading-[32px] text-white md:text-[40px] md:leading-[44px] xl:text-[52px] xl:leading-[56px]">
          Trade with Advanced Strategies
        </h2>

        <div className="flex w-full flex-col">
          <FeatureItem
            number="01"
            title="Perps"
            description="Trade perpetual contracts with deep liquidity and low fees"
            tags={["No Expiry", "Up to 50x Leverage"]}
          />
          <FeatureItem
            number="02"
            title="Options"
            description="Trade volatility with flexible expiries and defined downside risk"
            tags={["0DTE, Daily, Weekly and Monthly", "Up to 1,000x Leverage"]}
          />
        </div>
      </div>
    </section>
  );
}
