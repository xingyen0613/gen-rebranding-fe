import Image from "next/image";

function FooterIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} className="relative size-8 shrink-0 transition-opacity hover:opacity-70">
      {children}
    </a>
  );
}

export default function BottomCTA() {
  return (
    <section className="px-3 pb-3">
      <div className="relative flex flex-col items-center gap-16 overflow-hidden rounded-[24px] bg-brand-primary pt-12 lg:gap-36 lg:rounded-[32px] lg:pt-24">
        {/* Ripple decorations */}
        <Image
          src="/assets/ripple-sm-union.svg"
          alt=""
          width={1108}
          height={1215}
          unoptimized
          className="pointer-events-none absolute -right-[789px] -top-[127px] max-w-none rotate-[-2.27deg]"
          aria-hidden
        />
        <Image
          src="/assets/ripple-sm-union.svg"
          alt=""
          width={1108}
          height={1215}
          unoptimized
          className="pointer-events-none absolute -left-[1166px] -top-[745px] max-w-none rotate-[142.82deg]"
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1152px] flex-col items-center gap-16 px-4 lg:gap-36 lg:px-6">
          {/* CTA Text */}
          <div className="flex flex-col items-center gap-8 px-2 text-center lg:gap-12 lg:px-6">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[28px] font-semibold leading-[32px] text-white md:text-[40px] md:leading-[44px] xl:text-[52px] xl:leading-[56px]">
                Start Trading Smarter Today
              </h2>
              <p className="text-base leading-[24px] text-[#e1e5eb] md:text-xl md:leading-[28px] lg:text-[28px] lg:leading-[36px]">
                Discover a full suite of yield and trading products designed for
                every level of crypto investor
              </p>
            </div>
            <a
              href="#"
              className="flex h-12 w-[130px] items-center justify-center rounded-full bg-white text-sm font-medium text-brand-primary transition-all hover:bg-white/90 lg:h-14 lg:w-[142px] lg:text-base"
            >
              Continue
            </a>
          </div>

          {/* Footer blocks */}
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
              {/* Audited & Backed */}
              <div className="flex min-h-[280px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-[#bdd6ff] md:min-w-[280px] md:max-w-[538px] lg:min-h-[320px]">
                <div className="flex flex-col gap-3 px-6 pt-6 lg:gap-4 lg:px-8 lg:pt-8">
                  <p className="text-lg font-medium text-[#0e122a] lg:text-xl">Audited by</p>
                  <div className="flex gap-4 lg:gap-8">
                    <Image src="/assets/logo-movebit.png" alt="MoveBit" width={141} height={52} className="h-[40px] w-auto object-contain lg:h-[52px]" />
                    <Image src="/assets/logo-ottersec.png" alt="OtterSec" width={152} height={52} className="h-[40px] w-auto object-contain lg:h-[52px]" />
                  </div>
                </div>
                <Image src="/assets/divider-wave.svg" alt="" width={538} height={64} unoptimized className="w-full" aria-hidden />
                <div className="flex flex-col gap-3 px-6 pb-6 lg:gap-4 lg:px-8 lg:pb-8">
                  <p className="text-lg font-medium text-[#0e122a] lg:text-xl">Backed by</p>
                  <div className="relative flex gap-4 overflow-hidden lg:gap-8">
                    <Image src="/assets/logo-movebit.png" alt="MoveBit Labs" width={141} height={52} className="h-[40px] w-auto shrink-0 object-contain lg:h-[52px]" />
                    <Image src="/assets/logo-hyperithm.png" alt="Hyperithm" width={158} height={52} className="h-[40px] w-auto shrink-0 object-contain lg:h-[52px]" />
                    <Image src="/assets/logo-hashed.png" alt="Hashed" width={118} height={52} className="h-[40px] w-auto shrink-0 object-contain lg:h-[52px]" />
                    <Image src="/assets/logo-ottersec.png" alt="OtterSec" width={152} height={52} className="hidden h-[40px] w-auto shrink-0 object-contain lg:block lg:h-[52px]" />
                    <Image src="/assets/logo-cms.png" alt="CMS" width={135} height={52} className="hidden h-[40px] w-auto shrink-0 object-contain lg:block lg:h-[52px]" />
                    <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, #bdd6ff 0%, transparent 10%, transparent 90%, #bdd6ff 100%)" }} />
                  </div>
                </div>
              </div>

              {/* Powered by */}
              <div className="flex min-h-[280px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-[#bdd6ff] p-6 md:min-w-[280px] md:max-w-[538px] lg:min-h-[320px] lg:p-8">
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-lg font-medium text-[#0e122a] lg:text-xl">Powered by</p>
                  <Image src="/assets/logo-tradingview.png" alt="TradingView" width={204} height={52} className="h-[40px] w-auto object-contain lg:h-[52px]" />
                </div>
                <p className="text-sm text-[#0e122a] lg:text-base">
                  By integrating TradingView, Typus Finance will offer users
                  state-of-the-art visual tools to better make informed trading
                  decisions through access to real-time data such as the BTC/USD
                  Superchart, Crypto Screener, and Economic Calendar
                </p>
              </div>
            </div>

            {/* Footer bar */}
            <div className="flex flex-col gap-4 rounded-tl-[24px] rounded-tr-[24px] bg-[#bdd6ff] px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
              {/* Left */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <span className="text-xs font-medium text-[#0e122a]">&copy; 2026 Typus Finance</span>

                {/* TradingView + Pyth logos - hidden on mobile */}
                <div className="hidden items-center gap-2 md:flex">
                  <span className="text-xs font-medium text-[#0e122a]">Powered by</span>
                  <div className="relative h-[14.21px] w-[101px] overflow-clip">
                    <div className="absolute" style={{ inset: "7.69% 80.81% 23.08% 0" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/5743c9bd-0bc3-417b-aec9-365e84fca3df" />
                    </div>
                    <div className="absolute" style={{ inset: "7.69% 87.03% 61.54% 8.65%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/c1fc749a-116c-4e31-ba8a-fda25da90c89" />
                    </div>
                    <div className="absolute" style={{ inset: "3.29% -0.04% 1.92% 21.08%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/57379a66-7436-466f-93e9-0049bb547f77" />
                    </div>
                  </div>
                  <div className="relative h-[14px] w-[60px] overflow-clip">
                    <div className="absolute" style={{ inset: "22.52% 57.37% 22.54% 28.15%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/dd584924-de70-44d8-afc0-57558a68ded2" />
                    </div>
                    <div className="absolute" style={{ inset: "22.52% 0.04% 22.54% 85.54%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/f4cf7480-362d-4935-af6d-5f5c7627cf53" />
                    </div>
                    <div className="absolute" style={{ inset: "22.52% 38.27% 22.55% 47.32%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/42afab9d-9300-4bf3-a10e-42e44c87c8ff" />
                    </div>
                    <div className="absolute" style={{ inset: "22.52% 19.15% 22.54% 66.43%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/45a4297b-b03a-4b33-a98b-af2ab7df3061" />
                    </div>
                    <div className="absolute" style={{ inset: "20% 85.93% 0.01% 4.69%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/7257c343-54f8-457f-9a8a-912167ee22be" />
                    </div>
                    <div className="absolute" style={{ inset: "0 81.24% 20.01% 0" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="https://www.figma.com/api/mcp/asset/80e08ad6-e88d-4039-92f7-b3c0e209fc57" />
                    </div>
                  </div>
                </div>

                <a href="#" className="text-xs font-medium text-[#0e122a] hover:underline">Terms</a>
              </div>

              {/* Right — social icons */}
              <div className="flex gap-2">
                <FooterIcon href="#" label="YouTube">
                  <div className="absolute" style={{ inset: "27.5% 17.5% 26.45% 17.5%" }}>
                    <img alt="" className="absolute block size-full max-w-none" src="/assets/icon-youtube.svg" />
                  </div>
                </FooterIcon>
                <FooterIcon href="#" label="GitBook">
                  <div className="absolute inset-0 overflow-clip">
                    <div className="absolute" style={{ bottom: "19.44%", left: "25%", right: "25%", top: "19.44%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="/assets/icon-gitbook.svg" />
                    </div>
                  </div>
                </FooterIcon>
                <FooterIcon href="#" label="Discord">
                  <div className="absolute" style={{ inset: "25.55% 17.01% 25.56% 16.99%" }}>
                    <img alt="" className="absolute block size-full max-w-none" src="/assets/icon-discord.svg" />
                  </div>
                </FooterIcon>
                <FooterIcon href="#" label="Medium">
                  <div className="absolute" style={{ inset: "26.11% 44.65% 26.12% 8.33%" }}>
                    <img alt="" className="absolute block size-full max-w-none" src="/assets/icon-medium-1.svg" />
                  </div>
                  <div className="absolute" style={{ inset: "27.5% 18.89% 27.51% 57.57%" }}>
                    <img alt="" className="absolute block size-full max-w-none" src="/assets/icon-medium-2.svg" />
                  </div>
                  <div className="absolute" style={{ inset: "29.86% 8.34% 29.88% 83.4%" }}>
                    <img alt="" className="absolute block size-full max-w-none" src="/assets/icon-medium-3.svg" />
                  </div>
                </FooterIcon>
                <FooterIcon href="#" label="X">
                  <div className="absolute inset-0 overflow-clip">
                    <div className="absolute" style={{ bottom: "24.93%", left: "25%", right: "25%", top: "25%" }}>
                      <img alt="" className="absolute block size-full max-w-none" src="/assets/icon-x.svg" />
                    </div>
                  </div>
                </FooterIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
