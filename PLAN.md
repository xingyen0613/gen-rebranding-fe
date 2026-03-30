# Typus Finance Landing Page - 實作計畫

## Context
從 Figma 設計稿生成 Typus Finance 的 rebranding landing page。
目標：React + Next.js (App Router) + Tailwind CSS，單頁 desktop landing page (1440px)。
專案目錄：`/Users/yen/claude/gen-rebrandingFE`（空目錄，全新專案）

**重要限制：絕對不能編輯 Figma 設計稿，僅能唯讀。**

---

## Step 1 — 專案初始化
- `npx create-next-app@latest . --typescript --tailwind --app --eslint`
- 清理預設模板內容

## Step 2 — 設計 Token 與全域樣式
`tailwind.config.ts` + `globals.css`：
- **顏色**：page bg `#0e122a`、brand primary `#5056ea`、divider `rgba(255,255,255,0.12)`、card overlay `rgba(14,18,42,0.7)`、footer block `#bdd6ff` 等
- **字體**：Inter（Google Fonts via `next/font`）；品牌字體 Test Söhne Breit **先用 Inter Bold 替代**（商業付費字體，待取得授權後替換）
- **圓角**：6px / 10px / 12px / 24px / 32px / 999px
- **間距**：依設計稿 token

## Step 3 — 下載資源
從 Figma MCP 取得圖片資源存入 `/public/assets/`：
- Typus logo（whale + text）
- Partner logos（OtterSec、Hyperithm 等）
- Ripple 背景裝飾圖（sm、lg 各版本）
- Social icons（X、Discord、Telegram 等）
- Arrow icon、Caret icon、Star icons

## Step 4 — Component 拆分與實作

### 4.1 Header (`components/Header.tsx`)
- Logo（左）→ Trade / Earn dropdown（中）→ Launch App 按鈕（右）
- `backdrop-blur` 半透明背景
- **Trade dropdown**（hover 展開）：Perps、Options
- **Earn dropdown**（hover 展開）：Perps Liquidity (TLP)、Options Vaults (DOV)、Protected Yield (SAFU)
- Dropdown 和 Trade/Earn 是同一個 component 的不同實例，共用互動邏輯
- 互動：hover 觸發、chevron 翻轉、item hover 高亮

### 4.2 Hero Section (`components/HeroSection.tsx`)
- 左欄：標題 + 副標 + "Start Trading" CTA（白色圓角按鈕）
- 右欄：藍色背景 + 三組數據（Trading Volume / Value Locked / Users）
- ripple 背景裝飾

### 4.3 Product Section (`components/ProductSection.tsx`)
- 標題 "Earn Across Multiple Strategies"
- 3 張 product card（flex wrap，min-w 320px）：
  - SAFU（Low Risk / ★）— Lending + Options Upside
  - TLP（Medium Risk / ★★）— Perps Trading Fees
  - DOV（High Risk / ★★★）— Options Premium
- 每張 card 有 ripple 背景

### 4.4 Features Section (`components/FeaturesSection.tsx`)
- 標題 "Trade with Advanced Strategies"（max-w 860px 居中）
- 01 Perps — No Expiry / Up to 50x Leverage
- 02 Options — 0DTE, Daily, Weekly and Monthly / Up to 1,000x Leverage
- 箭頭 icon 按鈕
- hover 互動效果（從 Figma node 722:42136 確認）

### 4.5 Bottom CTA (`components/BottomCTA.tsx`)
- 紫色圓角容器 + ripple 背景
- "Start Trading Smarter Today" + 副標
- "Continue" 白色圓角按鈕（hover 效果從 Figma node 381:38617 確認）

### 4.6 Footer (`components/Footer.tsx`)
- 兩個 block（淺藍 `#bdd6ff`）：
  - Audited by + Backed by logos（帶漸層遮罩）
  - Powered by TradingView + 說明文字
- 底部 bar：版權 / Powered by logos / Terms / Social icons

## Step 5 — 互動狀態
在實作各 component 時，逐一從 Figma 抓取 hover 狀態截圖確認樣式：
1. Trade/Earn btn hover + dropdown 展開/收起
2. Dropdown item hover 高亮
3. Continue btn hover
4. Features section (Perps) hover

## Step 6 — 組裝頁面
`app/page.tsx` 組裝所有 component

## Step 7 — 驗證
- `npm run dev` 啟動
- 對照 Figma 截圖檢查視覺還原
- 測試所有 hover / dropdown 互動
- 確認 1440px desktop 排版正確
