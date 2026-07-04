# TokenHub AI - Next.js Landing Page

Landing page Next.js cho website bán gói token LLM dành cho các model GPT, Claude, Gemini và Grok.

## Công nghệ

- Next.js App Router
- React
- TypeScript
- CSS thuần trong `app/globals.css`

## Tính năng

- Hero section hiện đại với CTA mua token
- Section so sánh model GPT, Claude, Gemini, Grok
- Bảng giá mẫu: Starter, Pro, Business
- Tính năng quản lý token, usage real-time và hạn mức team
- FAQ và disclaimer pháp lý cơ bản
- Responsive cho desktop, tablet và mobile

## Cấu trúc project

```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Chạy local

Cài dependencies:

```bash
npm install
```

Chạy development server:

```bash
npm run dev
```

Mở trình duyệt tại:

```text
http://localhost:3000
```

Build production:

```bash
npm run build
npm run start
```

## Ghi chú triển khai thật

Trang này là demo frontend. Nếu bán token thật, cần tích hợp backend, thanh toán, quản lý số dư, xác thực người dùng, log usage và đảm bảo tuân thủ điều khoản của từng nhà cung cấp model. Dự án demo này không phải sản phẩm chính thức của OpenAI, Anthropic, Google hay xAI.
