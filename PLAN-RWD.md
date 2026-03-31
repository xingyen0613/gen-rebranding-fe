# Typus Finance Landing Page - RWD 實作計畫

## Context
Desktop 版本已完成（>=1440px），現在需要加入 RWD 支援。
用戶提供了 4 個斷點的 Figma 設計稿，需要逐一實作。

**斷點定義：**
| 名稱 | 範圍 | Figma node |
|---|---|---|
| Desktop (XL) | >= 1440px | 已完成 (379:31034) |
| Desktop (LG) | 1024–1439px | 1246:86009 |
| Tablet (MD) | 768–1023px | 3183:11137 |
| Mobile (SM) | 0–767px | 1246:86604 |
| Mobile Menu | — | 359:32049 |

**重要限制：絕對不能編輯 Figma 設計稿，僅能唯讀。**

---

## 程式碼結構策略

**混合策略**：大部分 component 用 Tailwind responsive classes 處理，Header 拆成 Desktop/Mobile 兩個版本。

**原因**：
- HeroSection / ProductSection / FeaturesSection / BottomCTA 的 RWD 變化主要是：排版方向（row↔col）、字體大小、間距。用 `sm:`/`md:`/`lg:` class 就能處理。
- Header 在 mobile 是完全不同的結構（hamburger → 全螢幕 overlay menu），拆開更好維護。

---

## Step 1 — Tailwind 斷點配置

在 `globals.css` 的 `@theme inline` 區塊加入自定義斷點：
```css
--breakpoint-sm: 480px;   /* small mobile */
--breakpoint-md: 768px;   /* tablet */
--breakpoint-lg: 1024px;  /* small desktop */
--breakpoint-xl: 1440px;  /* full desktop */
```

**開發方向**：Mobile-first（基礎樣式為 mobile，往上疊加）。

## Step 2 — Header RWD

### 檔案變更：
- `src/components/Header.tsx` — 加上 `hidden md:flex` 只在 >= 768px 顯示
- `src/components/HeaderMobile.tsx` — **新建**，只在 < 768px 顯示

### HeaderMobile 結構（from Figma 359:32049）：
- 頂部：Logo（左）+ X 關閉按鈕（右）
- 內容：Trade 分類標題 → Perps / Options（粗體大字）
- Earn 分類標題 → DOV / TLP / SAFU（粗體大字）
- 底部：QUICK LINKS + 社群 icon（Discord、Medium、X）
- 背景：深色 + ripple 裝飾
- 觸發：hamburger icon（三橫線）

### page.tsx：
```jsx
<Header />        {/* 自帶 hidden md:flex */}
<HeaderMobile />  {/* 自帶 md:hidden */}
```

## Step 3 — HeroSection RWD

### 檔案：`src/components/HeroSection.tsx`

### 各斷點變化（from Figma screenshots）：
| 斷點 | 排版 | 標題字體 | 高度 |
|---|---|---|---|
| XL (1440+) | 雙欄並排 | 64px | 690px |
| LG (1024–1439) | 雙欄並排（更窄） | 64px → 稍小 | 自適應 |
| MD (768–1023) | **上下堆疊**（標題上、數據下） | 較小 | auto |
| SM (0–767) | 上下堆疊、緊湊 | ~36px | auto |

### 關鍵 class 變化：
- `flex-col` (mobile default) → `md:flex-row` (tablet/desktop)
- 移除固定 height，改用 `min-h-[400px] lg:min-h-[690px]`
- 字體：`text-[36px] md:text-[48px] xl:text-[64px]`
- 移除 `min-w-[500px]`，改用 `w-full md:flex-1 md:max-w-[767px]`

## Step 4 — ProductSection RWD

### 檔案：`src/components/ProductSection.tsx`

### 各斷點變化：
| 斷點 | 排版 | Card 高度 |
|---|---|---|
| XL | 三欄 | 464px |
| LG | 兩欄（前兩張）+ 一欄（第三張獨立一行） | 自適應 |
| MD | 同 LG | 自適應 |
| SM | **全部單欄堆疊** | auto |

### 關鍵 class 變化：
- 標題：`text-[28px] md:text-[40px] xl:text-[52px]`
- Card 高度：移除固定 height，改用 `min-h-[300px] xl:min-h-[464px]`
- Card 內文：`text-[20px] xl:text-[28px]`

## Step 5 — FeaturesSection RWD

### 檔案：`src/components/FeaturesSection.tsx`

### 各斷點變化：
| 斷點 | 排版 | 特殊變化 |
|---|---|---|
| XL/LG | 居中 860px，01/02 編號+文字+箭頭 | 無 |
| MD | 全寬，文字居中，無編號列 | 文字置中、arrow 在標題下方 |
| SM | 同 MD 但字體更小，且 Feature 描述文字可能更簡潔 | CTA 按鈕變寬 |

### 關鍵 class 變化：
- 標題：`text-[28px] md:text-[40px] xl:text-[52px]`
- 編號：`hidden md:block`（mobile 不顯示 01/02）
- 內文：`text-[20px] xl:text-[28px]`
- Max-width：`max-w-full lg:max-w-[860px]`

## Step 6 — BottomCTA + Footer RWD

### 檔案：`src/components/BottomCTA.tsx`

### 各斷點變化：
| 斷點 | CTA 文字 | Footer blocks | Footer bar |
|---|---|---|---|
| XL | 52px 標題 | 雙欄（Audited + Powered） | 一行 |
| LG | 同上但略窄 | 同上 | 同上 |
| MD | 較小字體 | 雙欄但更窄 | 可能換行 |
| SM | 28px 標題 | **單欄堆疊** | 垂直堆疊（logo 上、social 下）|

### 關鍵 class 變化：
- CTA 標題：`text-[28px] md:text-[40px] xl:text-[52px]`
- Footer blocks：`flex-col md:flex-row`
- Footer blocks 高度：移除固定值，改 `min-h-[280px]`
- Footer bar：`flex-col gap-4 md:flex-row md:justify-between`

---

## 實作順序

1. **Tailwind 斷點配置** — globals.css
2. **HeaderMobile** — 新建 + 調整 Header 顯示邏輯
3. **HeroSection RWD** — 影響最大的區塊
4. **ProductSection RWD** — card grid 調整
5. **FeaturesSection RWD** — 文字排版調整
6. **BottomCTA + Footer RWD** — 底部區塊
7. **逐斷點驗證** — 在瀏覽器 DevTools 切換 viewport 驗證

---

## Figma 資料提供方式

實作每個 step 時，會用 `get_design_context` 或 `get_screenshot` 從對應的 Figma node 抓取各斷點的具體數值（間距、字體大小等），確保與設計稿一致。

**注意**：Figma MCP 有 rate limit，如果遇到限制，會基於截圖推斷合理的 responsive 值。

---

## 驗證方式

1. `npm run dev` 啟動
2. 在瀏覽器開啟 DevTools → Responsive mode
3. 逐一驗證：375px / 768px / 1024px / 1440px
4. 檢查各斷點的排版、字體、間距是否與 Figma 截圖一致
5. 測試 mobile hamburger menu 開關互動
