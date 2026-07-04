const models = [
  {
    icon: "G",
    name: "GPT",
    description: "Mạnh cho chatbot, coding, reasoning và tác vụ sản phẩm cần độ ổn định cao."
  },
  {
    icon: "C",
    name: "Claude",
    description: "Phù hợp phân tích tài liệu dài, viết nội dung, hỗ trợ khách hàng và research."
  },
  {
    icon: "Gem",
    name: "Gemini",
    description: "Linh hoạt cho xử lý đa phương thức, tìm kiếm tri thức và tác vụ doanh nghiệp."
  },
  {
    icon: "X",
    name: "Grok",
    description: "Tối ưu cho trải nghiệm hội thoại nhanh, cập nhật ngữ cảnh và sản phẩm realtime."
  }
];

const features = [
  {
    number: "01",
    title: "Nạp token tức thì",
    description: "Chọn gói, thanh toán và nhận token trong tài khoản nhanh chóng."
  },
  {
    number: "02",
    title: "Theo dõi usage real-time",
    description: "Biết model nào đang tiêu thụ nhiều token và tối ưu workflow ngay."
  },
  {
    number: "03",
    title: "Hạn mức cho team",
    description: "Gán ngân sách theo user, project hoặc loại model để tránh vượt chi phí."
  }
];

const plans = [
  {
    name: "Starter",
    description: "Dành cho cá nhân thử nghiệm.",
    price: "$19",
    cta: "Mua Starter",
    href: "mailto:sales@example.com?subject=Buy%20Starter%20Token%20Plan",
    items: ["1M token tổng hợp", "GPT + Gemini", "Dashboard usage"]
  },
  {
    name: "Pro",
    description: "Cho creator, dev và startup nhỏ.",
    price: "$79",
    cta: "Mua Pro",
    href: "mailto:sales@example.com?subject=Buy%20Pro%20Token%20Plan",
    items: ["6M token tổng hợp", "GPT, Claude, Gemini, Grok", "Ưu tiên xử lý giao dịch"],
    featured: true
  },
  {
    name: "Business",
    description: "Cho team cần kiểm soát ngân sách.",
    price: "$199",
    cta: "Mua Business",
    href: "mailto:sales@example.com?subject=Buy%20Business%20Token%20Plan",
    items: ["20M token tổng hợp", "Phân quyền team", "Báo cáo chi phí nâng cao"]
  }
];

const usage = [
  ["GPT", "38%"],
  ["Claude", "27%"],
  ["Gemini", "21%"],
  ["Grok", "14%"]
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="#top" aria-label="TokenHub AI home">
            <span className="brand-mark">AI</span>
            <span>TokenHub</span>
          </a>
          <div className="nav-links">
            <a href="#models">Models</a>
            <a href="#pricing">Bảng giá</a>
            <a href="#features">Tính năng</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="btn btn-small" href="#pricing">Mua token</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Token marketplace cho LLM builders</p>
              <h1>Mua token GPT, Claude, Gemini, Grok trong một dashboard duy nhất.</h1>
              <p className="hero-text">
                Nạp nhanh, quản lý chi phí rõ ràng và dùng token cho các workflow AI: chatbot,
                content, coding, phân tích dữ liệu và tự động hóa.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#pricing">Xem gói token</a>
                <a className="btn btn-ghost" href="#models">So sánh model</a>
              </div>
              <div className="trust-row" aria-label="Trust badges">
                <span>Không phí ẩn</span>
                <span>Dashboard real-time</span>
                <span>Hỗ trợ team</span>
              </div>
            </div>

            <div className="hero-card" aria-label="Token dashboard preview">
              <div className="card-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="balance-card">
                <p>Số dư token</p>
                <strong>12.8M</strong>
                <span>+2.4M tuần này</span>
              </div>
              <div className="usage-list">
                {usage.map(([name, value]) => (
                  <div key={name}>
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section logo-strip" id="models">
          <div className="container">
            <p className="section-kicker">Hỗ trợ nhiều hệ sinh thái model</p>
            <div className="model-grid">
              {models.map((model) => (
                <article className="model-card" key={model.name}>
                  <span className="model-icon">{model.icon}</span>
                  <h3>{model.name}</h3>
                  <p>{model.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section split-section" id="features">
          <div className="container split-grid">
            <div>
              <p className="section-kicker">Tại sao chọn TokenHub?</p>
              <h2>Quản lý token đơn giản như quản lý ví điện tử.</h2>
              <p className="muted">
                Một nơi để theo dõi usage, phân quyền team, đặt hạn mức và tối ưu ngân sách AI theo từng model.
              </p>
            </div>
            <div className="feature-list">
              {features.map((feature) => (
                <div className="feature-item" key={feature.number}>
                  <span>{feature.number}</span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Bảng giá mẫu</p>
              <h2>Chọn gói token phù hợp với nhu cầu.</h2>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                  {plan.featured ? <div className="badge">Phổ biến</div> : null}
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <strong>{plan.price}</strong>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="btn btn-card" href={plan.href}>{plan.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-card">
            <div>
              <p className="section-kicker">Sẵn sàng scale sản phẩm AI?</p>
              <h2>Bắt đầu với gói token đầu tiên hôm nay.</h2>
            </div>
            <a className="btn" href="mailto:sales@example.com?subject=Need%20LLM%20Token%20Plan">Liên hệ tư vấn</a>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">FAQ</p>
              <h2>Câu hỏi thường gặp</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Token có dùng chung cho mọi model không?</summary>
                <p>
                  Landing page này mô phỏng marketplace token tổng hợp. Khi triển khai thật, nên định nghĩa tỷ lệ quy đổi
                  hoặc ví riêng cho từng nhà cung cấp.
                </p>
              </details>
              <details>
                <summary>Website này có liên kết chính thức với OpenAI, Anthropic, Google hay xAI không?</summary>
                <p>
                  Không. Đây là landing page mẫu. Khi kinh doanh thật, bạn cần đảm bảo quyền phân phối, điều khoản API và pháp lý
                  của từng nhà cung cấp.
                </p>
              </details>
              <details>
                <summary>Có thể thêm thanh toán online không?</summary>
                <p>
                  Có. Bạn có thể tích hợp Stripe, PayPal, Momo hoặc cổng thanh toán nội địa và kết nối backend để phát hành token.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <p>© 2026 TokenHub AI. Landing page demo.</p>
          <div>
            <a href="#models">Models</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </>
  );
}
