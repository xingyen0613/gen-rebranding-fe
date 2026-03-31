import Image from "next/image";

interface ProductCardProps {
  riskLevel: string;
  riskStars: number;
  title: string;
  description: string;
  yieldLabel: string;
  yieldTags: string[];
  rippleImage: string;
}

function ProductCard({
  riskLevel,
  riskStars,
  title,
  description,
  yieldLabel,
  yieldTags,
  rippleImage,
}: ProductCardProps) {
  return (
    <div className="relative flex min-h-[320px] w-full flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-brand-primary px-5 py-5 md:min-w-[280px] lg:px-6 lg:py-6 xl:min-h-[464px]">
      <Image
        src={rippleImage}
        alt=""
        width={800}
        height={400}
        unoptimized
        className="pointer-events-none absolute bottom-0 left-0 max-w-none opacity-60"
        aria-hidden
      />

      {/* Top */}
      <div className="relative z-10 flex flex-col gap-2 lg:gap-3">
        {/* Badge */}
        <div className="flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 lg:gap-3">
          <span className="text-sm">{"★".repeat(riskStars)}</span>
          <span className="text-base font-medium lg:text-xl">
            <span className="text-[#e1e5eb]">{riskLevel}</span>{" "}
            <span className="text-white/60">Risk</span>
          </span>
        </div>

        {/* Title & desc */}
        <h3 className="text-xl font-bold leading-[28px] tracking-[2px] text-white lg:text-[28px] lg:leading-[32px]">
          {title}
        </h3>
        <p className="text-base font-medium leading-[24px] text-[#e1e5eb] lg:text-[28px] lg:leading-[36px]">
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-6 flex flex-col gap-2 lg:mt-0">
        <p className="text-base font-semibold text-[#e1e5eb] lg:text-xl">
          {yieldLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {yieldTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white lg:py-1.5 lg:text-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-16 md:px-6 lg:gap-12 lg:py-36">
      <h2 className="text-center text-[28px] font-semibold leading-[32px] text-white md:text-[40px] md:leading-[44px] xl:text-[52px] xl:leading-[56px]">
        Earn Across Multiple Strategies
      </h2>

      <div className="flex w-full flex-col gap-3 md:flex-row md:flex-wrap md:justify-center">
        <ProductCard
          riskLevel="Low"
          riskStars={1}
          title="Secure Asset Fund for Upside (SAFU)"
          description="Earn lending yield with options upside"
          yieldLabel="Yield Source"
          yieldTags={["Lending", "Options Upside"]}
          rippleImage="/assets/ripple-card-1.svg"
        />
        <ProductCard
          riskLevel="Medium"
          riskStars={2}
          title="Typus Liquidity Pool (TLP)"
          description="Provide liquidity to perps markets and earn trading fees"
          yieldLabel="Yield Source"
          yieldTags={["Perps Trading Fees"]}
          rippleImage="/assets/ripple-card-2.svg"
        />
        <ProductCard
          riskLevel="High"
          riskStars={3}
          title="DeFi Options Vault (DOV)"
          description="Generate return by selling options volatility"
          yieldLabel="Yield Source"
          yieldTags={["Options Premium"]}
          rippleImage="/assets/ripple-card-3.svg"
        />
      </div>
    </section>
  );
}
