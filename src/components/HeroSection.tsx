import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-3 px-4 pb-6 lg:flex-row">
      {/* Left - Headline */}
      <div className="relative flex min-h-[400px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] border-2 border-divider p-6 lg:min-h-[690px] lg:rounded-[32px] lg:p-8 xl:max-w-[767px]">
        <Image
          src="/assets/ripple-hero-union.svg"
          alt=""
          width={1790}
          height={779}
          unoptimized
          className="pointer-events-none absolute -left-[49px] top-[300px] w-[1790px] max-w-none lg:top-[498px]"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col gap-3 text-white lg:gap-4">
          <h1 className="text-[32px] font-bold leading-[36px] tracking-[-1px] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px] xl:text-[64px] xl:leading-[68px]">
            Trade Perps
            <br />
            &amp; Options with Real Yield
          </h1>
          <p className="text-base leading-[24px] sm:text-lg md:text-xl lg:text-[28px] lg:leading-[36px]">
            Experience secure and efficient trading on Sui
          </p>
        </div>
        <a
          href="#"
          className="relative z-10 mt-6 flex h-12 w-[130px] items-center justify-center rounded-full bg-white text-sm font-medium text-brand-primary transition-colors hover:bg-white/90 lg:mt-0 lg:h-14 lg:w-[142px] lg:text-base"
        >
          Start Trading
        </a>
      </div>

      {/* Right - Stats */}
      <div className="relative flex min-h-[300px] flex-1 flex-col overflow-hidden rounded-[24px] bg-brand-primary lg:min-h-[690px] lg:rounded-[32px]">
        <Image
          src="/assets/ripple-lg-union.svg"
          alt=""
          width={1790}
          height={779}
          unoptimized
          className="pointer-events-none absolute -left-[780px] top-[200px] w-[1790px] max-w-none lg:top-[469px]"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col gap-6 p-6 text-white lg:gap-12 lg:p-8">
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="text-base leading-[24px] lg:text-[28px] lg:leading-[36px]">Trading Volume</p>
            <p className="text-[28px] font-bold leading-[32px] tracking-[-1px] sm:text-[36px] sm:leading-[40px] lg:text-[52px] lg:leading-[56px]">
              $898,431,126
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="text-base leading-[24px] lg:text-[28px] lg:leading-[36px]">Value Locked</p>
            <p className="text-[28px] font-bold leading-[32px] tracking-[-1px] sm:text-[36px] sm:leading-[40px] lg:text-[52px] lg:leading-[56px]">
              $18,603,419
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="text-base leading-[24px] lg:text-[28px] lg:leading-[36px]">Users</p>
            <p className="text-[28px] font-bold leading-[32px] tracking-[-1px] sm:text-[36px] sm:leading-[40px] lg:text-[52px] lg:leading-[56px]">
              917,669
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
