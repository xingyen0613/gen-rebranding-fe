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
    <div className="relative flex min-w-[320px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-brand-primary px-6 py-6 max-w-full" style={{ height: 464 }}>
      <Image
        src={rippleImage}
        alt=""
        width={800}
        height={400}
        className="pointer-events-none absolute bottom-0 left-0 max-w-none opacity-60"
        aria-hidden
      />

      {/* Top */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* Badge */}
        <div className="flex w-fit items-center gap-3 rounded-full bg-white/10 px-3 py-1.5">
          <span className="text-sm">
            {"★".repeat(riskStars)}
          </span>
          <span className="text-xl font-medium">
            <span className="text-text-on-brand-secondary">{riskLevel}</span>{" "}
            <span className="text-white/60">Risk</span>
          </span>
        </div>

        {/* Title & desc */}
        <h3 className="font-bold text-[28px] leading-[32px] tracking-[2px] text-white">
          {title}
        </h3>
        <p className="text-[28px] font-medium leading-[36px] text-text-on-brand-secondary">
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex flex-col gap-2">
        <p className="text-xl font-semibold text-text-on-brand-secondary">
          {yieldLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {yieldTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1.5 text-xl font-medium text-white"
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
    <section className="flex flex-col items-center gap-12 px-6 py-36">
      <h2 className="text-center text-[52px] font-semibold leading-[56px] text-white">
        Earn Across Multiple Strategies
      </h2>

      <div className="flex w-full flex-wrap justify-center gap-3">
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
