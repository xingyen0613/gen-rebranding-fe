"use client";

import Image from "next/image";

interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

function FeatureItem({ number, title, description, tags }: FeatureItemProps) {
  return (
    <a
      href="#"
      className="group flex gap-8 border-t border-divider py-12 transition-colors hover:rounded-2xl hover:bg-[#1a1f3a]"
    >
      <span className="w-10 shrink-0 text-[28px] leading-[36px] text-white">
        {number}
      </span>

      <div className="flex flex-1 flex-col gap-3 pt-1">
        <h3 className="font-bold text-[28px] leading-[32px] tracking-[2px] text-white">
          {title}
        </h3>
        <p className="text-[28px] leading-[36px] text-white/60">
          {description}
        </p>
        <div className="flex items-start gap-2.5">
          <span className="w-[98px] shrink-0 text-base text-white/60">
            Key Features
          </span>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 px-3 py-1.5 text-base text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="size-10 shrink-0 overflow-hidden rounded-full transition-colors group-hover:bg-brand-primary">
        <Image
          src="/assets/arrow-diagonal.svg"
          alt="Go"
          width={40}
          height={40}
          className="size-full group-hover:brightness-0 group-hover:invert"
        />
      </div>
    </a>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center px-6 py-36">
      <div className="flex w-full max-w-[860px] flex-col items-center gap-12">
        <h2 className="text-center text-[52px] font-semibold leading-[56px] text-white">
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
