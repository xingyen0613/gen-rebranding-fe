import Image from "next/image";

export default function BottomCTA() {
  return (
    <section className="px-3 pb-3">
      <div className="relative flex flex-col items-center gap-36 overflow-hidden rounded-[32px] bg-brand-primary pt-24">
        {/* Ripple decorations */}
        <Image
          src="/assets/ripple-sm-union.svg"
          alt=""
          width={1108}
          height={1215}
          className="pointer-events-none absolute -right-[789px] -top-[127px] max-w-none rotate-[-2.27deg]"
          aria-hidden
        />
        <Image
          src="/assets/ripple-sm-union.svg"
          alt=""
          width={1108}
          height={1215}
          className="pointer-events-none absolute -left-[1166px] -top-[745px] max-w-none rotate-[142.82deg]"
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1152px] flex-col items-center gap-36 px-6">
          {/* CTA Text */}
          <div className="flex flex-col items-center gap-12 px-6 text-center">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[52px] font-semibold leading-[56px] text-white">
                Start Trading Smarter Today
              </h2>
              <p className="text-[28px] leading-[36px] text-text-on-brand-secondary">
                Discover a full suite of yield and trading products designed for
                every level of crypto investor
              </p>
            </div>
            <a
              href="#"
              className="flex h-14 w-[142px] items-center justify-center rounded-full bg-white text-base font-medium text-brand-primary transition-all hover:shadow-lg hover:shadow-white/20"
            >
              Continue
            </a>
          </div>

          {/* Footer blocks */}
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              {/* Audited & Backed */}
              <div className="flex min-w-[302px] max-w-[538px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-footer-block" style={{ height: 320 }}>
                <div className="flex flex-col gap-4 px-8 pt-8">
                  <p className="text-xl font-medium text-text-inverse">
                    Audited by
                  </p>
                  <div className="flex gap-8">
                    <Image src="/assets/logo-movebit.png" alt="MoveBit" width={141} height={52} className="object-contain" />
                    <Image src="/assets/logo-ottersec.png" alt="OtterSec" width={152} height={52} className="object-contain" />
                  </div>
                </div>
                <Image src="/assets/divider-wave.svg" alt="" width={538} height={64} className="w-full" aria-hidden />
                <div className="flex flex-col gap-4 px-8 pb-8">
                  <p className="text-xl font-medium text-text-inverse">
                    Backed by
                  </p>
                  <div className="relative flex gap-8 overflow-hidden">
                    <Image src="/assets/logo-movebit.png" alt="MoveBit Labs" width={141} height={52} className="object-contain" />
                    <Image src="/assets/logo-hyperithm.png" alt="Hyperithm" width={158} height={52} className="object-contain" />
                    <Image src="/assets/logo-hashed.png" alt="Hashed" width={118} height={52} className="object-contain" />
                    <Image src="/assets/logo-ottersec.png" alt="OtterSec" width={152} height={52} className="object-contain" />
                    <Image src="/assets/logo-cms.png" alt="CMS" width={135} height={52} className="object-contain" />
                    {/* Gradient fade */}
                    <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, #bdd6ff 0%, transparent 10%, transparent 90%, #bdd6ff 100%)" }} />
                  </div>
                </div>
              </div>

              {/* Powered by */}
              <div className="flex min-w-[302px] max-w-[538px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-footer-block p-8" style={{ height: 320 }}>
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-medium text-text-inverse">
                    Powered by
                  </p>
                  <Image src="/assets/logo-tradingview.png" alt="TradingView" width={204} height={52} className="object-contain" />
                </div>
                <p className="text-base text-text-inverse">
                  By integrating TradingView, Typus Finance will offer users
                  state-of-the-art visual tools to better make informed trading
                  decisions through access to real-time data such as the BTC/USD
                  Superchart, Crypto Screener, and Economic Calendar
                </p>
              </div>
            </div>

            {/* Footer bar */}
            <div className="flex items-center justify-between rounded-t-[24px] bg-footer-block px-8 py-6" style={{ height: 80 }}>
              <div className="flex flex-wrap items-center gap-6">
                <span className="text-xs font-medium text-text-inverse">
                  &copy; 2026 Typus Finance
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-text-inverse">
                    Powered by
                  </span>
                  <Image src="/assets/logo-tradingview.png" alt="TradingView" width={101} height={14} className="object-contain" />
                </div>
                <a href="#" className="text-xs font-medium text-text-inverse hover:underline">
                  Terms
                </a>
              </div>
              <div className="flex gap-2">
                {/* X / Twitter */}
                <a href="#" className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-black/10" aria-label="X">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0e122a">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Discord */}
                <a href="#" className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-black/10" aria-label="Discord">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0e122a">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                {/* Telegram */}
                <a href="#" className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-black/10" aria-label="Telegram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0e122a">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                {/* Medium */}
                <a href="#" className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-black/10" aria-label="Medium">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0e122a">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="#" className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-black/10" aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0e122a">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
