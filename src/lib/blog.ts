import { desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { blogPosts, type BlogPost, type BlogTranslations } from "@/db/schema";

export type PublicPost = Pick<BlogPost, "slug" | "author" | "coverEmoji" | "publishedAt" | "translations">;

export const SEED_POSTS: PublicPost[] = [
  {
    slug: "introducing-lobot-llc",
    author: "LoBot LLC Team",
    coverEmoji: "🚀",
    publishedAt: "2026-10-28",
    translations: {
      en: {
        title: "Introducing LoBot LLC: building future-ready decision tools",
        excerpt:
          "From an open-source energy forecasting app to an AI-native company — here's why we founded LoBot LLC and what comes next.",
        body: [
          "Today we're proud to officially introduce LoBot LLC — an AI-native startup that creates business solutions enabling enterprises to make future-ready strategic decisions.",
          "Our story began in September 2026 with TecnoIndicator, an open-source web app that forecasts global oil, electricity and water prices accurately up to ten years ahead. We built it because the business and logistics managers we talked to were committing budgets, contracts and routes years in advance — while the forecasts they needed were locked behind expensive enterprise subscriptions, buried in long reports, or simply too short-term to be useful.",
          "TecnoIndicator quickly grew a passionate, fast-moving community. Human developers and AI agents contributed hundreds of commits and dozens of pull requests, improving everything from regional intelligence and multi-currency support to AI-curated price drivers and strategy recommendations. That momentum made one thing clear: this was bigger than a single project.",
          "In October 2026 we began officially forming the company as LoBot LLC. Our mission is simple: empower businesses of every size with robust logistics and productivity solutions, accelerate innovation with AI built on open-source foundations, keep open source at our core, and design architectures that scale from startups to large enterprises.",
          "We're fast-moving, AI-native, human-centric and transparency-first. We believe trust is our number-one priority, that outcomes matter more than volume, and that technology must benefit everyone — which is why we have zero tolerance for monopolistic behavior and keep our code open.",
          "What's next? We'll keep continuously improving TecnoIndicator and building similar useful tools for business and logistics managers. Don't forget to try the latest and best products from LoBot to boost your company's performance!\nIf you want to build and grow together with the LoBot community, isn't this the perfect moment to apply to LoBot right away?\n\nWELCOME TO LOBOT LLC!!!!!",
        ],
      },
      es: {
        title: "Presentamos LoBot LLC: herramientas de decisión preparadas para el futuro",
        excerpt:
          "De una app open source de pronóstico energético a una empresa nativa en IA: por qué fundamos LoBot LLC y lo que viene.",
        body: [
          "Hoy nos enorgullece presentar oficialmente LoBot LLC, una startup nativa en IA que crea soluciones empresariales para que las empresas tomen decisiones estratégicas preparadas para el futuro.",
          "Nuestra historia comenzó en septiembre de 2026 con TecnoIndicator, una app web de código abierto que pronostica con precisión los precios globales del petróleo, la electricidad y el agua hasta diez años. La creamos porque los gerentes de negocio y logística con los que hablamos comprometían presupuestos, contratos y rutas con años de antelación, mientras que los pronósticos que necesitaban estaban tras costosas suscripciones, enterrados en largos informes o eran demasiado cortoplacistas.",
          "TecnoIndicator creó rápidamente una comunidad apasionada y dinámica. Desarrolladores humanos y agentes de IA aportaron cientos de commits y decenas de pull requests, mejorando desde la inteligencia regional y el soporte multimoneda hasta los factores curados por IA y las recomendaciones estratégicas. Ese impulso dejó algo claro: esto era más grande que un solo proyecto.",
          "En octubre de 2026 comenzamos a formar oficialmente la empresa como LoBot LLC. Nuestra misión es sencilla: empoderar a empresas de todos los tamaños con soluciones robustas de logística y productividad, acelerar la innovación con IA sobre bases open source, mantener el código abierto como núcleo y diseñar arquitecturas que escalen de startups a grandes empresas.",
          "Somos ágiles, nativos en IA, centrados en las personas y transparentes. Creemos que la confianza es nuestra prioridad número uno, que los resultados importan más que el volumen y que la tecnología debe beneficiar a todos; por eso tenemos tolerancia cero con el comportamiento monopolístico y mantenemos nuestro código abierto.",
          "¿Qué sigue? Seguiremos mejorando TecnoIndicator y creando herramientas útiles similares para gerentes de negocio y logística. ¡No olviden usar los productos más nuevos y mejores de LoBot para impulsar el rendimiento de su empresa!\nSi quieren crecer y construir junto a la comunidad de LoBot, ¿no es este el momento perfecto para postularse a LoBot ahora mismo?\n\n¡BIENVENIDOS A LOBOT LLC!!!!!",
        ],
      },
      vi: {
        title: "Giới thiệu LoBot LLC: xây dựng công cụ ra quyết định cho tương lai",
        excerpt:
          "Từ một ứng dụng dự báo năng lượng mã nguồn mở đến một công ty AI-native — lý do chúng tôi thành lập LoBot LLC và chặng đường phía trước.",
        body: [
          "Hôm nay, chúng tôi tự hào chính thức giới thiệu LoBot LLC — startup AI-native tạo ra các giải pháp kinh doanh giúp doanh nghiệp đưa ra quyết định chiến lược sẵn sàng cho tương lai.",
          "Câu chuyện bắt đầu vào tháng 9/2026 với TecnoIndicator, ứng dụng web mã nguồn mở dự báo giá dầu, điện và nước toàn cầu chính xác lên đến mười năm. Chúng tôi xây dựng nó vì các nhà quản lý kinh doanh và logistics phải cam kết ngân sách, hợp đồng và tuyến đường trước nhiều năm — trong khi dự báo họ cần lại nằm sau các gói doanh nghiệp đắt đỏ, bị chôn vùi trong báo cáo dài, hoặc quá ngắn hạn.",
          "TecnoIndicator nhanh chóng hình thành một cộng đồng đầy nhiệt huyết và năng động. Lập trình viên và tác nhân AI đã đóng góp hàng trăm commit và hàng chục pull request, cải thiện từ thông tin khu vực, hỗ trợ đa tiền tệ đến các yếu tố giá do AI chọn lọc và khuyến nghị chiến lược. Động lực đó cho thấy: đây không chỉ là một dự án.",
          "Tháng 10/2026, chúng tôi chính thức bắt đầu thành lập công ty LoBot LLC. Sứ mệnh rất đơn giản: trao quyền cho doanh nghiệp ở mọi quy mô bằng giải pháp logistics và năng suất mạnh mẽ, tăng tốc đổi mới bằng AI trên nền tảng mã nguồn mở, giữ mã nguồn mở là cốt lõi và thiết kế kiến trúc mở rộng từ startup đến tập đoàn.",
          "Chúng tôi chuyển động nhanh, AI-native, lấy con người làm trung tâm và minh bạch trước tiên. Chúng tôi tin niềm tin là ưu tiên số một, kết quả quan trọng hơn số lượng và công nghệ phải phục vụ mọi người — vì thế chúng tôi không khoan nhượng với hành vi độc quyền và luôn giữ mã nguồn mở.",
          "Tiếp theo là gì? Chúng tôi sẽ liên tục cải tiến TecnoIndicator và xây dựng các công cụ hữu ích tương tự cho nhà quản lý kinh doanh và logistics. Các bạn hãy nhớ đừng quên sử dụng các sản phẩm mới nhất và tốt nhất đến từ LoBot để có thể boost hiệu suất của doanh nghiệp của bạn nhé!\nNếu các bạn muốn cùng nhau phát triển chung với cộng đồng LoBot, phải chăng đây có phải là thời điểm rất phù hợp để apply ngay vô LoBot, phải không nào?\n\nWELCOME TO LOBOT LLC!!!!!",
        ],
      },
    } satisfies BlogTranslations,
  },
];

let ready: Promise<void> | null = null;

/** Ensures the table exists and seed posts are present (idempotent, runs once per process). */
function ensureReady(): Promise<void> {
  if (!ready) {
    ready = (async () => {
      await db.execute(sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
          id serial PRIMARY KEY,
          slug text NOT NULL UNIQUE,
          author text NOT NULL DEFAULT 'LoBot LLC Team',
          cover_emoji text NOT NULL DEFAULT '🚀',
          published_at date NOT NULL,
          translations jsonb NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now()
        )`);
      await db.insert(blogPosts).values(SEED_POSTS).onConflictDoNothing({ target: blogPosts.slug });
      // The code owns the seeded editorial posts: keep existing rows in sync with copy changes.
      for (const post of SEED_POSTS) {
        await db
          .update(blogPosts)
          .set({ translations: post.translations, publishedAt: post.publishedAt, coverEmoji: post.coverEmoji })
          .where(eq(blogPosts.slug, post.slug));
      }
    })().catch((err) => {
      ready = null;
      throw err;
    });
  }
  return ready;
}

const select = {
  slug: blogPosts.slug,
  author: blogPosts.author,
  coverEmoji: blogPosts.coverEmoji,
  publishedAt: blogPosts.publishedAt,
  translations: blogPosts.translations,
};

export async function listPosts(): Promise<PublicPost[]> {
  try {
    await ensureReady();
    return await db.select(select).from(blogPosts).orderBy(desc(blogPosts.publishedAt), desc(blogPosts.id));
  } catch (err) {
    console.error("[blog] falling back to seed posts:", err);
    return SEED_POSTS;
  }
}

export async function getPost(slug: string): Promise<PublicPost | null> {
  try {
    await ensureReady();
    const rows = await db.select(select).from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return rows[0] ?? null;
  } catch (err) {
    console.error("[blog] falling back to seed posts:", err);
    return SEED_POSTS.find((p) => p.slug === slug) ?? null;
  }
}
