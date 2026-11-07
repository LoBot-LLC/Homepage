import { desc, eq, sql } from "drizzle-orm";
import { getDb } from "@/db";
import { blogPosts, type BlogPost, type BlogTranslations } from "@/db/schema";

export type PublicPost = Pick<
  BlogPost,
  "slug" | "author" | "coverEmoji" | "coverImage" | "publishedAt" | "translations"
>;

export const SEED_POSTS: PublicPost[] = [
  {
    slug: "how-operation-epic-fury-inspired-lobot-tecnoindicator",
    author: "LoBot LLC Team",
    coverEmoji: "🛢️",
    coverImage: "/images/blog/operation epic fury.png",
    publishedAt: "2026-11-07",
    translations: {
      en: {
        title:
          "How Operation Epic Fury and the ongoing Middle East wars greatly inspired the launch of LoBot TecnoIndicator",
        excerpt:
          "The 2026 Middle East conflict and the historic disruption of global oil flows exposed how fragile planning can be. Here is how those events shaped LoBot TecnoIndicator and how it helps leaders prepare for volatility.",
        body: [
          "In early 2026, a new wave of conflict in the Middle East turned energy markets into a real-time stress test for the global economy [1], [8]. For LoBot LLC, the turmoil was not just headline news — it was a clear signal that business and logistics leaders need faster, clearer, and more explainable ways to understand commodity risk. That urgency strongly inspired the launch of LoBot TecnoIndicator [10], our AI-powered energy intelligence product built to help teams make future-ready decisions when markets become unpredictable.",
          "__IMAGE__:/images/blog/oil rigs.png|Military and regional escalation imagery associated with the 2026 conflict|Conflict escalation and shipping disruption became a catalyst for energy-market volatility.",
          "Operation Epic Fury began on 28 February 2026, when the United States and Israel launched coordinated strikes against Iranian targets [1], [9]. Iran responded with missile and drone attacks across the region, and the conflict quickly expanded beyond isolated military exchanges [1], [9]. Shipping through the Strait of Hormuz — a narrow passage that normally carries a large share of the world’s seaborne oil, refined products, and liquefied natural gas — was severely disrupted [1], [4], [9]. By March 2026, the International Energy Agency described the situation as the largest supply disruption in the history of the global oil market [1], [2], [7], with crude and product flows through the Strait plunging from around 20 million barrels per day (mb/d) before the war to a fraction of normal levels and Gulf producers curtailing output as storage filled and export routes became unsafe [1], [2], [4], [9].",
          "The following months showed how quickly a regional war can ripple through global energy systems [1], [8]. Attacks and threats affected not only crude production but also refineries, pipelines, shipping, and insurance [1], [3], [6], [8]. The IEA and other market observers reported repeated shocks: tanker movements slowed or rerouted, freight and insurance costs surged, alternative pipelines were used where possible, and emergency stock releases were coordinated to cushion the market [1], [3], [4], [6]. Even when some exports recovered through ship-to-ship transfers and bypass routes, renewed attacks and risks in the Gulf and Red Sea kept markets tense [1], [3], [4]. By late 2026, refined-product markets — especially diesel and jet fuel — remained strained because refinery outages, constrained shipping, and lost export flows made it harder to deliver usable fuels, not just crude oil [1], [3], [5], [6].",
          "__IMAGE__:/images/blog/oil price rise.png|Oil infrastructure and market volatility concept|When supply routes are disrupted, price spikes can move faster than business plans.",
          "Oil prices responded with historic volatility [1], [2], [6]. Before the conflict, Brent crude traded near the low-$70s per barrel range in early 2026 market context; after the outbreak, prices spiked sharply, with major benchmarks surging and physical markets showing even larger swings [1], [2], [6]. Across 2026, agencies and analysts reported periods where Brent moved above $100 and, at times, much higher in intraday or physical-market stress, while diesel and other refined fuels often rose faster than crude because of bottlenecks in refining and transport [1], [3], [5], [6]. The World Bank, IMF, EIA, and IEA all highlighted the same pattern: constrained supply, depleted inventories, expensive freight, and fragile confidence can keep prices elevated and unpredictable even when some shipments resume [3], [5], [6].",
          "These price changes were not abstract numbers on a trading screen. They affected millions of people in everyday ways. Higher oil and fuel prices raise transportation costs, which can increase the price of food, medicine, construction materials, and consumer goods [5], [8]. Airlines, trucking companies, manufacturers, farmers, and small businesses face higher operating costs [8]. Governments in fuel-importing countries may spend more on subsidies or imports, leaving less room for social services [5]. Households feel the impact at the pump, in electricity bills where fuel costs matter, and through inflation that quietly reduces purchasing power [5], [8]. In conflict-affected and import-dependent regions, fuel shortages and price spikes can also disrupt access to essential services [5].",
          "For decision-makers, the crisis raised difficult but necessary questions: How exposed is our cost structure to a single shipping chokepoint such as the Strait of Hormuz [1], [4], [9]? Do our budgets assume stable fuel prices when history shows sudden shocks [2], [6]? Which suppliers, routes, and contracts would fail first if freight rates double [6], [8]? Are we reacting to yesterday’s headlines, or planning with scenarios for the next 1, 3, 5, or 10 years? And when prices move overnight, do our teams have a shared, trustworthy view of what changed and why?",
          "__IMAGE__:/images/blog/logistics.png|Global logistics and supply-chain operations|Business and logistics leaders face pressure when fuel, freight, and timing all change at once.",
          "It is understandable why many businessmen and logistics managers have felt panic during this period. Operations depend on timing, margins, and reliable delivery. When oil prices jump, freight contracts become harder to price, fuel surcharges change, inventory planning becomes uncertain, and customers may delay orders [6], [8]. A manufacturer may struggle to forecast production costs; a logistics operator may need to reroute cargo around risky corridors [4], [8]; a retailer may face higher landed costs; and a finance team may watch cash-flow assumptions break in weeks. The pain is not only the high price — it is the uncertainty. Leaders are forced to make high-stakes decisions with incomplete, fast-changing information [1], [5].",
          "This is exactly the gap LoBot TecnoIndicator was designed to address [10]. TecnoIndicator helps users explore energy-price scenarios, understand key market drivers, and turn complex signals into decision support [10]. Instead of asking teams to stitch together scattered news, raw charts, and static spreadsheets, TecnoIndicator aims to provide a clearer view of where prices may go, what factors could move them, and how businesses can respond [10]. For logistics and operations teams, that means better planning for fuel budgets, routing assumptions, contract timing, and risk discussions. For executives and analysts, it means a more structured way to evaluate optimistic, baseline, and pessimistic outcomes before volatility becomes a crisis.",
          "__IMAGE__:/images/blog/tecnoindicator promotion.png|LoBot TecnoIndicator concept graphic|TecnoIndicator turns energy-market complexity into actionable planning insight.",
          "Operation Epic Fury and the broader Middle East conflict reminded us that global markets are interconnected: a military escalation, a threatened chokepoint, or damaged infrastructure can reshape costs for people and companies thousands of miles away [1], [8], [9]. LoBot TecnoIndicator was inspired by that reality [10]. Our goal is not to predict the future with false certainty — it is to give business and logistics leaders practical intelligence, transparent scenarios, and AI-assisted analysis so they can plan with more confidence, act earlier, and protect the people and operations that depend on them.",
        ],
        references: [
          {
            label:
              "International Energy Agency, “The Middle East and Global Energy Markets,” IEA, 2026. [Online]. Available: https://www.iea.org/topics/the-middle-east-and-global-energy-markets (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/topics/the-middle-east-and-global-energy-markets",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - March 2026,” IEA, Mar. 12, 2026. [Online]. Available: https://www.iea.org/reports/oil-market-report-march-2026 (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-march-2026",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - October 2026,” IEA, Oct. 14, 2026. [Online]. Available: https://www.iea.org/reports/oil-market-report-october-2026 (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-october-2026",
          },
          {
            label:
              "International Energy Agency, “Middle East Maritime Chokepoints Shipping Monitor,” IEA, 2026. [Online]. Available: https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor",
          },
          {
            label:
              "World Bank, “Depleted inventories leave oil markets exposed to further supply disruptions,” World Bank Blogs, Nov. 5, 2026. [Online]. Available: https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply (accessed Nov. 7, 2026).",
            url: "https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply",
          },
          {
            label:
              "U.S. Energy Information Administration, “Short-Term Energy Outlook: Global Oil,” EIA, 2026. [Online]. Available: https://www.eia.gov/outlooks/steo/report/global_oil.php (accessed Nov. 7, 2026).",
            url: "https://www.eia.gov/outlooks/steo/report/global_oil.php",
          },
          {
            label:
              "Reuters, “World faces largest-ever oil supply disruption on Middle East war, IEA says,” Reuters, Mar. 12, 2026. [Online]. Available: https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/ (accessed Nov. 7, 2026).",
            url: "https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/",
          },
          {
            label:
              "Reuters, “U.S.-Israel war with Iran sends shockwaves through global business,” Reuters, Mar. 6, 2026. [Online]. Available: https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/ (accessed Nov. 7, 2026).",
            url: "https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/",
          },
          {
            label:
              "Congressional Research Service, “The Strait of Hormuz: Security Developments and Impacts on Oil,” U.S. Congress, 2026. [Online]. Available: https://www.congress.gov/crs-product/R45281 (accessed Nov. 7, 2026).",
            url: "https://www.congress.gov/crs-product/R45281",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [Online]. Available: https://tecnoindicator.vercel.app/ (accessed Nov. 7, 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
      es: {
        title:
          "Cómo la Operación Furia Épica, las guerras en curso en Oriente Medio y sus efectos mundiales sobre los precios del petróleo inspiraron el lanzamiento de LoBot TecnoIndicator",
        excerpt:
          "El conflicto de Oriente Medio en 2026 y la histórica interrupción de los flujos mundiales de petróleo mostraron lo frágil que puede ser la planificación. Así influyeron esos hechos en LoBot TecnoIndicator y cómo ayuda a prepararse ante la volatilidad.",
        body: [
          "A comienzos de 2026, una nueva ola de conflicto en Oriente Medio convirtió los mercados energéticos en una prueba de resistencia en tiempo real para la economía mundial [1], [8]. Para LoBot LLC, la turbulencia no fue solo un titular: fue una señal clara de que los líderes empresariales y logísticos necesitan formas más rápidas, claras y explicables de entender el riesgo de las materias primas. Esa urgencia inspiró en gran medida el lanzamiento de LoBot TecnoIndicator [10], nuestro producto de inteligencia energética con IA diseñado para ayudar a los equipos a tomar decisiones preparadas para el futuro cuando los mercados se vuelven impredecibles.",
          "__IMAGE__:/images/blog/epic-fury-timeline.png|Imagen asociada a la escalada militar y regional del conflicto de 2026|La escalada del conflicto y la interrupción del transporte marítimo impulsaron la volatilidad energética.",
          "La Operación Furia Épica comenzó el 28 de febrero de 2026, cuando Estados Unidos e Israel lanzaron ataques coordinados contra objetivos iraníes [1], [9]. Irán respondió con misiles y drones en toda la región, y el conflicto se amplió rápidamente más allá de intercambios militares aislados [1], [9]. El transporte marítimo por el estrecho de Ormuz —un paso estrecho que normalmente transporta una gran parte del petróleo, los productos refinados y el gas natural licuado que se mueven por mar— sufrió graves interrupciones [1], [4], [9]. En marzo de 2026, la Agencia Internacional de la Energía describió la situación como la mayor interrupción del suministro en la historia del mercado mundial del petróleo [1], [2], [7]: los flujos de crudo y productos por el estrecho cayeron desde unos 20 millones de barriles diarios (mb/d) antes de la guerra a una fracción de los niveles normales, mientras los productores del Golfo reducían la producción al llenarse los almacenamientos y volverse inseguras las rutas de exportación [1], [2], [4], [9].",
          "Los meses siguientes mostraron con qué rapidez una guerra regional puede propagarse por los sistemas energéticos mundiales [1], [8]. Los ataques y las amenazas afectaron no solo a la producción de crudo, sino también a refinerías, oleoductos, transporte marítimo y seguros [1], [3], [6], [8]. La AIE y otros observadores informaron de choques repetidos: los buques cisterna redujeron su actividad o cambiaron de ruta, los costos de flete y seguro se dispararon, se utilizaron oleoductos alternativos cuando fue posible y se coordinaron liberaciones de reservas de emergencia para amortiguar el mercado [1], [3], [4], [6]. Incluso cuando algunas exportaciones se recuperaron mediante transferencias barco a barco y rutas alternativas, los nuevos ataques y riesgos en el Golfo y el mar Rojo mantuvieron la tensión [1], [3], [4]. A finales de 2026, los mercados de productos refinados —especialmente el diésel y el combustible de aviación— seguían bajo presión porque las paradas de refinerías, las limitaciones marítimas y la pérdida de flujos de exportación dificultaban la entrega de combustibles utilizables, no solo de crudo [1], [3], [5], [6].",
          "__IMAGE__:/images/blog/oil-price-impact.png|Concepto de infraestructura petrolera y volatilidad del mercado|Cuando se interrumpen las rutas de suministro, los precios pueden cambiar más rápido que los planes empresariales.",
          "Los precios del petróleo respondieron con una volatilidad histórica [1], [2], [6]. Antes del conflicto, el Brent cotizaba en un contexto cercano a los 70 dólares por barril a comienzos de 2026; tras el estallido, los precios subieron con fuerza y los mercados físicos mostraron oscilaciones aún mayores [1], [2], [6]. Durante 2026, agencias y analistas informaron de periodos en los que el Brent superó los 100 dólares y, en momentos de tensión, alcanzó niveles mucho más altos, mientras que el diésel y otros combustibles refinados a menudo subieron más rápido que el crudo debido a los cuellos de botella en refino y transporte [1], [3], [5], [6]. El Banco Mundial, el FMI, la EIA y la AIE señalaron el mismo patrón: oferta limitada, inventarios agotados, fletes caros y confianza frágil pueden mantener los precios elevados e impredecibles incluso cuando se reanudan algunos envíos [3], [5], [6].",
          "Estos cambios de precios no fueron cifras abstractas. Afectaron a millones de personas en la vida cotidiana. Los precios más altos del petróleo y los combustibles elevan los costos de transporte, lo que puede encarecer alimentos, medicinas, materiales de construcción y bienes de consumo [5], [8]. Las aerolíneas, las empresas de transporte, los fabricantes, los agricultores y las pequeñas empresas enfrentan mayores costos operativos [8]. Los gobiernos de países importadores pueden gastar más en subsidios o importaciones, dejando menos margen para servicios sociales [5]. Los hogares lo sienten en el surtidor, en las facturas de energía cuando importa el costo del combustible y mediante una inflación que reduce el poder adquisitivo [5], [8]. En regiones dependientes de las importaciones o afectadas por conflictos, la escasez de combustible y las subidas de precios también pueden interrumpir servicios esenciales [5].",
          "Para quienes toman decisiones, la crisis planteó preguntas difíciles pero necesarias: ¿Cuán expuesta está nuestra estructura de costos a un único punto crítico marítimo como el estrecho de Ormuz [1], [4], [9]? ¿Nuestros presupuestos asumen precios estables del combustible cuando la historia muestra choques repentinos [2], [6]? ¿Qué proveedores, rutas y contratos fallarían primero si las tarifas de flete se duplican [6], [8]? ¿Estamos reaccionando a los titulares de ayer o planificando con escenarios para los próximos 1, 3, 5 o 10 años? Y cuando los precios cambian de la noche a la mañana, ¿nuestros equipos tienen una visión compartida y confiable de lo que cambió y por qué?",
          "__IMAGE__:/images/blog/logistics-supply-chain.png|Operaciones logísticas y de cadena de suministro global|Los líderes empresariales y logísticos sienten presión cuando cambian a la vez el combustible, el flete y los plazos.",
          "Es comprensible que muchos empresarios y gerentes de logística hayan sentido pánico en este periodo. Las operaciones dependen del tiempo, los márgenes y la entrega confiable. Cuando los precios del petróleo suben, los contratos de flete son más difíciles de calcular, cambian los recargos por combustible, la planificación de inventarios se vuelve incierta y los clientes pueden retrasar pedidos [6], [8]. Un fabricante puede tener dificultades para prever los costos de producción; un operador logístico puede necesitar desviar cargas por corredores más seguros [4], [8]; un minorista puede enfrentar costos de importación más altos; y un equipo financiero puede ver cómo los supuestos de flujo de caja se rompen en pocas semanas. El problema no es solo el precio alto: es la incertidumbre. Los líderes deben tomar decisiones de alto impacto con información incompleta y cambiante [1], [5].",
          "Precisamente esa brecha es la que LoBot TecnoIndicator fue diseñado para cubrir [10]. TecnoIndicator ayuda a explorar escenarios de precios energéticos, comprender los factores clave del mercado y convertir señales complejas en apoyo para la toma de decisiones [10]. En lugar de obligar a los equipos a unir noticias dispersas, gráficos sin contexto y hojas de cálculo estáticas, TecnoIndicator busca ofrecer una visión más clara de hacia dónde pueden ir los precios, qué factores podrían moverlos y cómo pueden responder las empresas [10]. Para logística y operaciones, eso significa planificar mejor presupuestos de combustible, supuestos de rutas, tiempos de contratación y discusiones de riesgo. Para directivos y analistas, ofrece una forma más estructurada de evaluar resultados optimistas, base y pesimistas antes de que la volatilidad se convierta en crisis.",
          "__IMAGE__:/images/blog/tecnoindicator-solution.png|Gráfico conceptual de LoBot TecnoIndicator|TecnoIndicator convierte la complejidad del mercado energético en información práctica para planificar.",
          "La Operación Furia Épica y el conflicto más amplio en Oriente Medio nos recordaron que los mercados globales están interconectados: una escalada militar, un punto crítico marítimo amenazado o una infraestructura dañada pueden cambiar los costos de personas y empresas a miles de kilómetros [1], [8], [9]. LoBot TecnoIndicator nació inspirado por esa realidad [10]. Nuestro objetivo no es predecir el futuro con una certeza falsa, sino ofrecer inteligencia práctica, escenarios transparentes y análisis asistido por IA para que los líderes empresariales y logísticos planifiquen con más confianza, actúen antes y protejan a las personas y operaciones que dependen de ellos.",
        ],
        references: [
          {
            label:
              "International Energy Agency, “The Middle East and Global Energy Markets,” IEA, 2026. [En línea]. Disponible: https://www.iea.org/topics/the-middle-east-and-global-energy-markets (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/topics/the-middle-east-and-global-energy-markets",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - March 2026,” IEA, 12 mar. 2026. [En línea]. Disponible: https://www.iea.org/reports/oil-market-report-march-2026 (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/reports/oil-market-report-march-2026",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - October 2026,” IEA, 14 oct. 2026. [En línea]. Disponible: https://www.iea.org/reports/oil-market-report-october-2026 (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/reports/oil-market-report-october-2026",
          },
          {
            label:
              "International Energy Agency, “Middle East Maritime Chokepoints Shipping Monitor,” IEA, 2026. [En línea]. Disponible: https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor",
          },
          {
            label:
              "World Bank, “Depleted inventories leave oil markets exposed to further supply disruptions,” World Bank Blogs, 5 nov. 2026. [En línea]. Disponible: https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply (consultado: 7 nov. 2026).",
            url: "https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply",
          },
          {
            label:
              "U.S. Energy Information Administration, “Short-Term Energy Outlook: Global Oil,” EIA, 2026. [En línea]. Disponible: https://www.eia.gov/outlooks/steo/report/global_oil.php (consultado: 7 nov. 2026).",
            url: "https://www.eia.gov/outlooks/steo/report/global_oil.php",
          },
          {
            label:
              "Reuters, “World faces largest-ever oil supply disruption on Middle East war, IEA says,” Reuters, 12 mar. 2026. [En línea]. Disponible: https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/ (consultado: 7 nov. 2026).",
            url: "https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/",
          },
          {
            label:
              "Reuters, “U.S.-Israel war with Iran sends shockwaves through global business,” Reuters, 6 mar. 2026. [En línea]. Disponible: https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/ (consultado: 7 nov. 2026).",
            url: "https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/",
          },
          {
            label:
              "Congressional Research Service, “The Strait of Hormuz: Security Developments and Impacts on Oil,” U.S. Congress, 2026. [En línea]. Disponible: https://www.congress.gov/crs-product/R45281 (consultado: 7 nov. 2026).",
            url: "https://www.congress.gov/crs-product/R45281",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [En línea]. Disponible: https://tecnoindicator.vercel.app/ (consultado: 7 nov. 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
      vi: {
        title:
          "Chiến dịch Epic Fury, các cuộc chiến đang diễn ra ở Trung Đông và tác động toàn cầu lên giá dầu đã truyền cảm hứng mạnh mẽ cho sự ra mắt của LoBot TecnoIndicator như thế nào",
        excerpt:
          "Xung đột Trung Đông năm 2026 và sự gián đoạn lịch sử của dòng chảy dầu mỏ toàn cầu cho thấy việc hoạch định có thể mong manh đến mức nào. Đây là cách những sự kiện đó định hình LoBot TecnoIndicator và cách công cụ này hỗ trợ ứng phó biến động.",
        body: [
          "Đầu năm 2026, một làn sóng xung đột mới tại Trung Đông đã biến thị trường năng lượng thành bài kiểm tra sức chịu đựng theo thời gian thực của nền kinh tế toàn cầu [1], [8]. Với LoBot LLC, biến động ấy không chỉ là tin tức — đó là tín hiệu rõ ràng rằng các nhà lãnh đạo doanh nghiệp và logistics cần những cách nhanh hơn, rõ ràng hơn và dễ giải thích hơn để hiểu rủi ro hàng hóa. Sự cấp bách đó đã truyền cảm hứng mạnh mẽ cho việc ra mắt LoBot TecnoIndicator [10], sản phẩm trí tuệ năng lượng ứng dụng AI của chúng tôi, được xây dựng để giúp các đội ngũ đưa ra quyết định sẵn sàng cho tương lai khi thị trường trở nên khó lường.",
          "__IMAGE__:/images/blog/epic-fury-timeline.png|Hình ảnh gợi liên tưởng đến leo thang quân sự và khu vực trong xung đột năm 2026|Leo thang xung đột và gián đoạn vận tải biển trở thành chất xúc tác cho biến động thị trường năng lượng.",
          "Chiến dịch Epic Fury bắt đầu vào ngày 28 tháng 2 năm 2026, khi Hoa Kỳ và Israel tiến hành các cuộc tấn công phối hợp nhằm vào các mục tiêu của Iran [1], [9]. Iran đáp trả bằng tên lửa và máy bay không người lái trên khắp khu vực, và xung đột nhanh chóng lan rộng vượt ra ngoài các cuộc trao đổi quân sự riêng lẻ [1], [9]. Hoạt động vận tải qua eo biển Hormuz — tuyến đường hẹp thường vận chuyển một phần lớn dầu thô, sản phẩm tinh chế và khí tự nhiên hóa lỏng đi bằng đường biển của thế giới — bị gián đoạn nghiêm trọng [1], [4], [9]. Đến tháng 3 năm 2026, Cơ quan Năng lượng Quốc tế (IEA) mô tả đây là sự gián đoạn nguồn cung lớn nhất trong lịch sử thị trường dầu mỏ toàn cầu [1], [2], [7]: dòng chảy dầu thô và sản phẩm qua eo biển giảm từ khoảng 20 triệu thùng/ngày (mb/d) trước chiến tranh xuống chỉ còn một phần nhỏ so với mức bình thường, trong khi các nhà sản xuất vùng Vịnh phải cắt giảm sản lượng khi kho chứa đầy và tuyến xuất khẩu trở nên không an toàn [1], [2], [4], [9].",
          "Những tháng tiếp theo cho thấy một cuộc chiến khu vực có thể lan sang hệ thống năng lượng toàn cầu nhanh đến mức nào [1], [8]. Các cuộc tấn công và đe dọa không chỉ ảnh hưởng đến sản xuất dầu thô mà còn tác động đến nhà máy lọc dầu, đường ống, vận tải biển và bảo hiểm [1], [3], [6], [8]. IEA cùng các tổ chức theo dõi thị trường ghi nhận nhiều cú sốc liên tiếp: tàu chở dầu giảm tốc hoặc đổi tuyến, chi phí vận chuyển và bảo hiểm tăng vọt, các đường ống thay thế được sử dụng khi có thể, và các đợt xả kho dự trữ khẩn cấp được phối hợp để hạ nhiệt thị trường [1], [3], [4], [6]. Dù một số hoạt động xuất khẩu phục hồi nhờ chuyển tải ngoài khơi và các tuyến vòng, các cuộc tấn công mới cùng rủi ro tại Vịnh Ba Tư và Biển Đỏ vẫn khiến thị trường căng thẳng [1], [3], [4]. Đến cuối năm 2026, thị trường sản phẩm tinh chế — đặc biệt là dầu diesel và nhiên liệu hàng không — vẫn chịu áp lực vì nhà máy lọc dầu ngừng hoạt động, vận tải bị hạn chế và dòng xuất khẩu sụt giảm khiến việc cung ứng nhiên liệu sử dụng được khó khăn hơn, không chỉ là dầu thô [1], [3], [5], [6].",
          "__IMAGE__:/images/blog/oil-price-impact.png|Khái niệm hạ tầng dầu mỏ và biến động thị trường|Khi các tuyến cung ứng bị gián đoạn, giá có thể biến động nhanh hơn kế hoạch kinh doanh.",
          "Giá dầu phản ứng bằng mức biến động lịch sử [1], [2], [6]. Trước xung đột, dầu Brent giao dịch quanh vùng đầu 70 USD/thùng trong bối cảnh đầu năm 2026; sau khi chiến sự bùng phát, giá tăng mạnh, các chỉ báo chính tăng vọt và thị trường thực tế còn dao động lớn hơn [1], [2], [6]. Trong năm 2026, các cơ quan và chuyên gia ghi nhận nhiều giai đoạn Brent vượt 100 USD/thùng và có lúc còn cao hơn nhiều trong các nhịp căng thẳng, trong khi diesel và các nhiên liệu tinh chế khác thường tăng nhanh hơn dầu thô do tắc nghẽn ở khâu lọc và vận chuyển [1], [3], [5], [6]. Ngân hàng Thế giới, IMF, EIA và IEA đều chỉ ra cùng một quy luật: nguồn cung bị hạn chế, tồn kho cạn dần, cước vận tải đắt đỏ và niềm tin mong manh có thể giữ giá ở mức cao và khó đoán ngay cả khi một phần hàng hóa được nối lại [3], [5], [6].",
          "Những thay đổi về giá không phải là con số trừu tượng. Chúng ảnh hưởng đến hàng triệu người trong đời sống hằng ngày. Giá dầu và nhiên liệu tăng làm chi phí vận chuyển tăng theo, từ đó có thể đẩy giá thực phẩm, thuốc men, vật liệu xây dựng và hàng tiêu dùng lên cao [5], [8]. Hãng hàng không, doanh nghiệp vận tải, nhà sản xuất, nông dân và doanh nghiệp nhỏ phải đối mặt với chi phí vận hành lớn hơn [8]. Chính phủ ở các nước nhập khẩu nhiên liệu có thể phải chi nhiều hơn cho trợ giá hoặc nhập khẩu, làm giảm dư địa cho dịch vụ xã hội [5]. Hộ gia đình cảm nhận tác động tại trạm xăng, trong hóa đơn năng lượng khi chi phí nhiên liệu tăng, và qua lạm phát làm giảm sức mua [5], [8]. Ở những khu vực phụ thuộc nhập khẩu hoặc bị ảnh hưởng bởi xung đột, tình trạng thiếu nhiên liệu và giá tăng đột biến còn có thể làm gián đoạn các dịch vụ thiết yếu [5].",
          "Với người ra quyết định, cuộc khủng hoảng đặt ra những câu hỏi khó nhưng cần thiết: Cơ cấu chi phí của chúng ta phụ thuộc vào một điểm nghẽn vận tải như eo biển Hormuz đến mức nào [1], [4], [9]? Ngân sách có đang giả định giá nhiên liệu ổn định trong khi lịch sử cho thấy những cú sốc bất ngờ [2], [6]? Nhà cung cấp, tuyến đường và hợp đồng nào sẽ gặp rủi ro đầu tiên nếu cước vận tải tăng gấp đôi [6], [8]? Chúng ta đang phản ứng theo tin tức hôm qua hay đang hoạch định bằng các kịch bản cho 1, 3, 5 hay 10 năm tới? Và khi giá thay đổi chỉ sau một đêm, các đội ngũ có cùng một bức tranh đáng tin cậy về điều gì đã thay đổi và vì sao không?",
          "__IMAGE__:/images/blog/logistics-supply-chain.png|Hoạt động logistics và chuỗi cung ứng toàn cầu|Các nhà lãnh đạo doanh nghiệp và logistics chịu áp lực khi nhiên liệu, cước phí và thời gian đều thay đổi cùng lúc.",
          "Có thể hiểu vì sao nhiều doanh nhân và nhà quản lý logistics cảm thấy hoang mang trong giai đoạn này. Hoạt động kinh doanh phụ thuộc vào thời gian, biên lợi nhuận và khả năng giao hàng đáng tin cậy. Khi giá dầu tăng, hợp đồng vận chuyển khó định giá hơn, phụ phí nhiên liệu thay đổi, kế hoạch tồn kho trở nên bất định và khách hàng có thể trì hoãn đơn hàng [6], [8]. Một nhà sản xuất có thể gặp khó khi dự báo chi phí sản xuất; một đơn vị logistics có thể phải đổi tuyến hàng hóa để tránh hành lang rủi ro [4], [8]; một nhà bán lẻ có thể chịu chi phí đầu vào cao hơn; và đội tài chính có thể thấy các giả định dòng tiền bị phá vỡ chỉ trong vài tuần. Nỗi đau không chỉ nằm ở mức giá cao — mà còn ở sự bất định. Các nhà lãnh đạo buộc phải đưa ra quyết định lớn với thông tin không đầy đủ và thay đổi liên tục [1], [5].",
          "Đó chính là khoảng trống mà LoBot TecnoIndicator được tạo ra để giải quyết [10]. TecnoIndicator giúp người dùng khám phá các kịch bản giá năng lượng, hiểu các động lực thị trường quan trọng và chuyển tín hiệu phức tạp thành hỗ trợ ra quyết định [10]. Thay vì buộc các đội ngũ phải ghép nối tin tức rời rạc, biểu đồ thô và bảng tính tĩnh, TecnoIndicator hướng tới việc cung cấp cái nhìn rõ hơn về xu hướng giá, những yếu tố có thể tác động và cách doanh nghiệp ứng phó [10]. Với đội ngũ logistics và vận hành, điều đó có nghĩa là lập kế hoạch tốt hơn cho ngân sách nhiên liệu, giả định tuyến đường, thời điểm ký hợp đồng và thảo luận rủi ro. Với lãnh đạo và chuyên viên phân tích, đó là cách tiếp cận có cấu trúc hơn để đánh giá các kịch bản lạc quan, cơ sở và bi quan trước khi biến động trở thành khủng hoảng.",
          "__IMAGE__:/images/blog/tecnoindicator-solution.png|Đồ họa khái niệm LoBot TecnoIndicator|TecnoIndicator biến sự phức tạp của thị trường năng lượng thành thông tin hoạch định có thể hành động.",
          "Chiến dịch Epic Fury và xung đột Trung Đông rộng hơn đã nhắc chúng tôi rằng các thị trường toàn cầu có liên kết chặt chẽ: một đợt leo thang quân sự, một điểm nghẽn vận tải bị đe dọa hay hạ tầng bị tấn công có thể làm thay đổi chi phí của con người và doanh nghiệp ở cách xa hàng nghìn kilomet [1], [8], [9]. LoBot TecnoIndicator được truyền cảm hứng từ thực tế đó [10]. Mục tiêu của chúng tôi không phải dự đoán tương lai với sự chắc chắn sai lầm — mà là cung cấp trí tuệ thực tiễn, kịch bản minh bạch và phân tích hỗ trợ bởi AI để các nhà lãnh đạo doanh nghiệp và logistics có thể hoạch định tự tin hơn, hành động sớm hơn và bảo vệ những con người cùng hoạt động phụ thuộc vào họ.",
        ],
        references: [
          {
            label:
              "International Energy Agency, “The Middle East and Global Energy Markets,” IEA, 2026. [Trực tuyến]. Có tại: https://www.iea.org/topics/the-middle-east-and-global-energy-markets (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/topics/the-middle-east-and-global-energy-markets",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - March 2026,” IEA, 12 thg. 3, 2026. [Trực tuyến]. Có tại: https://www.iea.org/reports/oil-market-report-march-2026 (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-march-2026",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - October 2026,” IEA, 14 thg. 10, 2026. [Trực tuyến]. Có tại: https://www.iea.org/reports/oil-market-report-october-2026 (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-october-2026",
          },
          {
            label:
              "International Energy Agency, “Middle East Maritime Chokepoints Shipping Monitor,” IEA, 2026. [Trực tuyến]. Có tại: https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor",
          },
          {
            label:
              "World Bank, “Depleted inventories leave oil markets exposed to further supply disruptions,” World Bank Blogs, 5 thg. 11, 2026. [Trực tuyến]. Có tại: https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply (truy cập: 7 thg. 11, 2026).",
            url: "https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply",
          },
          {
            label:
              "U.S. Energy Information Administration, “Short-Term Energy Outlook: Global Oil,” EIA, 2026. [Trực tuyến]. Có tại: https://www.eia.gov/outlooks/steo/report/global_oil.php (truy cập: 7 thg. 11, 2026).",
            url: "https://www.eia.gov/outlooks/steo/report/global_oil.php",
          },
          {
            label:
              "Reuters, “World faces largest-ever oil supply disruption on Middle East war, IEA says,” Reuters, 12 thg. 3, 2026. [Trực tuyến]. Có tại: https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/ (truy cập: 7 thg. 11, 2026).",
            url: "https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/",
          },
          {
            label:
              "Reuters, “U.S.-Israel war with Iran sends shockwaves through global business,” Reuters, 6 thg. 3, 2026. [Trực tuyến]. Có tại: https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/ (truy cập: 7 thg. 11, 2026).",
            url: "https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/",
          },
          {
            label:
              "Congressional Research Service, “The Strait of Hormuz: Security Developments and Impacts on Oil,” U.S. Congress, 2026. [Trực tuyến]. Có tại: https://www.congress.gov/crs-product/R45281 (truy cập: 7 thg. 11, 2026).",
            url: "https://www.congress.gov/crs-product/R45281",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [Trực tuyến]. Có tại: https://tecnoindicator.vercel.app/ (truy cập: 7 thg. 11, 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
    } satisfies BlogTranslations,
  },
  {
    slug: "introducing-lobot-llc",
    author: "LoBot LLC Team",
    coverEmoji: "🚀",
    coverImage: null,
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
          "We began officially forming the company as LoBot LLC in October of this year, with a simple mission: empower businesses of every size with robust logistics and productivity solutions, accelerate innovation with AI built on open-source foundations, keep open source at our core, and design architectures that scale from startups to large enterprises.",
          "We're highly agile, AI-native, human-centric and transparent-first company. We believe trust is our priority number one, that quality matters more than volume, and that technology must benefit everyone in the 4.0 tech era today — which is why we're always ready to share valuable resources so that everyone can access.",
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
          "Comenzamos oficialmente a formar la empresa LoBot LLC en octubre de este año, con una misión sencilla: empoderar a empresas de todos los tamaños con soluciones robustas de logística y productividad, acelerar la innovación con IA sobre bases open source, mantener el código abierto como núcleo y diseñar arquitecturas que escalen de startups a grandes empresas.",
          "Somos una empresa excesivamente ágil, AI-native, centradas en las personas y con \"transparencia\" como nuestra prioridad número uno. También creemos que la tecnología debe servir a todas las personas que están accediendo a la era de la tecnología 4.0 hoy en día, y al mismo tiempo la calidad del producto que las personas aportan es más importante que la cantidad de productos — por lo tanto, siempre estamos listos para compartir recursos valiosos para que todo el mundo pueda acceder.",
          "¿Cuáles serán los próximos pasos que debemos tomar en el futuro? Seguiremos mejorando TecnoIndicator y creando herramientas útiles similares para gerentes de negocio y logística. ¡No olviden usar los productos más nuevos y mejores de LoBot para impulsar el rendimiento de su empresa!\nSi quieren crecer y construir junto a la comunidad de LoBot, ¿no es este el momento perfecto para postularse a LoBot ahora mismo?\n\n¡BIENVENIDOS A LOBOT LLC!!!!!",
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
          "chúng tôi chính thức bắt đầu thành lập công ty LoBot LLC vào tháng 10 năm nay, với một sứ mệnh rất đơn giện: trao quyền cho doanh nghiệp ở mọi quy mô bằng giải pháp logistics và năng suất mạnh mẽ, tăng tốc đổi mới bằng AI trên nền tảng mã nguồn mở, giữ mã nguồn mở là cốt lõi và thiết kế kiến trúc mở rộng từ startup đến tập đoàn.",
          "Chúng tôi là một công ty hết sức linh hoạt, AI-native, lấy con người làm trung tâm và đặt hai chữ \"Minh bạch\" là ưu tiên hàng đầu số một của chúng tôi. Chúng tôi cũng tin rằng, công nghệ cần phải phục vụ mọi người đang tiếp cận với thời đại công nghệ 4.0 ngày nay, đồng thời chất lượng sản phẩm mà mọi người mang lại còn quan trọng hơn cả số lượng sản phẩm — vì thế chúng tôi luôn sẵn sàng chia sẻ các tài nguyên quý giá để tất cả mọi người ai cũng có thể tiếp cận.",
          "Thế thì bước tiếp theo của chúng ta sẽ cần phải làm gì trong tương lai? Chúng tôi sẽ liên tục cải tiến TecnoIndicator và xây dựng các công cụ hữu ích tương tự cho nhà quản lý kinh doanh và logistics. Các bạn hãy nhớ đừng quên sử dụng các sản phẩm mới nhất và tốt nhất đến từ LoBot để có thể boost hiệu suất của doanh nghiệp của bạn nhé!\nNếu các bạn muốn cùng nhau phát triển chung với cộng đồng LoBot, phải chăng đây có phải là thời điểm rất phù hợp để apply ngay vô LoBot, phải không nào?\n\nWELCOME TO LOBOT LLC!!!!!",
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
      const d = getDb();
      await d.execute(sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
          id serial PRIMARY KEY,
          slug text NOT NULL UNIQUE,
          author text NOT NULL DEFAULT 'LoBot LLC Team',
          cover_emoji text NOT NULL DEFAULT '🚀',
          cover_image text,
          published_at date NOT NULL,
          translations jsonb NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now()
        )`);
      await d.execute(sql`ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS cover_image text`);
      await d.insert(blogPosts).values(SEED_POSTS).onConflictDoNothing({ target: blogPosts.slug });
      // The code owns the seeded editorial posts: keep existing rows in sync with copy changes.
      for (const post of SEED_POSTS) {
        await d
          .update(blogPosts)
          .set({
            translations: post.translations,
            publishedAt: post.publishedAt,
            coverEmoji: post.coverEmoji,
            coverImage: post.coverImage ?? null,
          })
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
  coverImage: blogPosts.coverImage,
  publishedAt: blogPosts.publishedAt,
  translations: blogPosts.translations,
};

export async function listPosts(): Promise<PublicPost[]> {
  try {
    await ensureReady();
    return await getDb().select(select).from(blogPosts).orderBy(desc(blogPosts.publishedAt), desc(blogPosts.id));
  } catch (err) {
    console.error("[blog] falling back to seed posts:", err);
    return SEED_POSTS;
  }
}

export async function getPost(slug: string): Promise<PublicPost | null> {
  try {
    await ensureReady();
    const rows = await getDb().select(select).from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return rows[0] ?? null;
  } catch (err) {
    console.error("[blog] falling back to seed posts:", err);
    return SEED_POSTS.find((p) => p.slug === slug) ?? null;
  }
}
