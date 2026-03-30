import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-wrap gap-3 px-4 pb-6">
      {/* Left - Headline */}
      <div className="relative flex min-w-[500px] flex-1 flex-col justify-between overflow-hidden rounded-[32px] border-2 border-divider p-8 max-w-[767px]" style={{ height: 690 }}>
        <Image
          src="/assets/ripple-hero-union.svg"
          alt=""
          width={1790}
          height={779}
          className="pointer-events-none absolute -left-[49px] top-[498px] w-[1790px] max-w-none"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col gap-4 text-white">
          <h1 className="font-bold text-[64px] leading-[68px] tracking-[-1px]">
            Trade Perps
            <br />
            &amp; Options with Real Yield
          </h1>
          <p className="text-[28px] leading-[36px]">
            Experience secure and efficient trading on Sui
          </p>
        </div>
        <a
          href="#"
          className="relative z-10 flex h-14 w-[142px] items-center justify-center rounded-full bg-white text-base font-medium text-brand-primary transition-colors hover:bg-white/90"
        >
          Start Trading
        </a>
      </div>

      {/* Right - Stats */}
      <div className="relative min-w-[360px] flex-1 overflow-hidden rounded-[32px] bg-brand-primary" style={{ height: 690 }}>
        <Image
          src="/assets/ripple-lg-union.svg"
          alt=""
          width={1790}
          height={779}
          className="pointer-events-none absolute -left-[780px] top-[469px] w-[1790px] max-w-none"
          aria-hidden
        />
        <div className="absolute left-8 top-8 flex w-[513px] flex-col gap-12 text-white">
          <div className="flex flex-col gap-4">
            <p className="text-[28px] leading-[36px]">Trading Volume</p>
            <p className="font-bold text-[52px] leading-[56px] tracking-[-1px]">
              $898,431,126
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[28px] leading-[36px]">Value Locked</p>
            <p className="font-bold text-[52px] leading-[56px] tracking-[-1px]">
              $18,603,419
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[28px] leading-[36px]">Users</p>
            <p className="font-bold text-[52px] leading-[56px] tracking-[-1px]">
              917,669
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
