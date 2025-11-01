import React, { useMemo, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, Navigate } from "react-router-dom";
import { Menu, Home, ArrowLeft, ExternalLink } from "lucide-react";

// =====================
// Textos introdutórios por área (cartões largos)
// =====================
const INTRO = {
  discriminacao: {
    titulo: "Sobre discriminação e preconceitos",
    texto:
      "A discriminação assenta em estereótipos e resulta em tratamento desigual de pessoas ou grupos. Pode ser direta (atos e políticas explícitas) ou indireta/estrutural, quando regras aparentemente neutras criam barreiras. Combater a discriminação exige consciência crítica, educação, participação e práticas que removam obstáculos à igualdade real."
  },
  direitos: {
    titulo: "Sobre direitos e igualdade",
    texto:
      "Direitos e igualdade significam garantir, na prática, oportunidades e dignidade para todas as pessoas. Para lá das leis, é essencial promover acessibilidade, representatividade e processos transparentes. Organizações públicas e privadas têm um papel decisivo na criação de ambientes seguros e inclusivos."
  }
};

// =====================
// Dados do site
// =====================

const AREAS = [
  {
    id: "discriminacao",
    slug: "discriminacao-preconceitos",
    titulo: "Discriminação / Preconceitos",
    descricao: "Informação clara sobre diferentes formas de preconceito e discriminação.",
    itens: [
      {
        slug: "idadismo",
        titulo: "Idadismo",
        imagem: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Preconceito baseado na idade, que afeta pessoas mais velhas e mais jovens e limita oportunidades.",
        conteudo: {
          definicao:
            "O idadismo é o preconceito baseado na idade, que pode afetar tanto pessoas mais velhas quanto mais jovens. Esse tipo de discriminação se manifesta em diferentes contextos, como no mercado de trabalho, na mídia e na saúde, restringindo oportunidades e reforçando estereótipos negativos.",
          consequencias:
            "O idadismo pode gerar isolamento social, dificuldades financeiras e impacto na autoestima das pessoas afetadas. Para os mais velhos, pode resultar em dificuldade para acessar empregos, serviços de saúde e participação ativa na sociedade. Para os mais jovens, pode significar a invalidação de suas opiniões e desafios na construção de suas carreiras.",
          exemplos: [
            "Empresas que evitam contratar funcionários acima de uma certa idade, alegando menor capacidade de aprendizado.",
            "Jovens que não são levados a sério em espaços profissionais e políticos por serem considerados 'inexperientes'.",
            "Representações na mídia que reforçam a ideia de que envelhecer é algo negativo ou vergonhoso.",
          ],
          atitudes: [
            "Desafiar estereótipos ao valorizar a experiência de pessoas mais velhas e a inovação dos mais jovens.",
            "Incentivar a contratação de profissionais de diferentes faixas etárias.",
            "Criar espaços de diálogo intergeracional para troca de conhecimento.",
          ],
          mudar:
            "É necessário um esforço coletivo para quebrar os estereótipos relacionados à idade. Isto inclui mudanças nas políticas públicas, práticas empresariais e consciencialização social. O envelhecimento deve ser visto como um processo natural e positivo, e os jovens devem ser respeitados como agentes de mudança.",
          empresas: [
            "Implementar programas de diversidade etária no recrutamento.",
            "Oferecer formação para reduzir o preconceito intergeracional no trabalho.",
            "Criar políticas de aprendizagem contínua para todas as idades.",
          ],
          livros: [
            "A Revolução da Longevidade – Ken Dychtwald",
            "Ageism Unmasked – Tracey Gendron",
          ],
          artigos: [
            "O impacto do idadismo no mercado de trabalho – Revista Sociológica",
            "Como a mídia reforça estereótipos etários? – Jornal de Estudos Sociais",
          ],
        },
      },
      {
        slug: "racismo",
        titulo: "Racismo",
        imagem: "https://images.unsplash.com/photo-1516924962500-2b4b3b83a6b6?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Discriminação baseada na cor da pele ou origem étnica, presente de forma individual e estrutural.",
        conteudo: {
          definicao:
            "O racismo é a discriminação baseada na cor da pele ou na origem étnica de uma pessoa. Ele pode ser explícito, como insultos e ataques físicos, ou estrutural, quando uma sociedade cria barreiras que dificultam o acesso de determinados grupos a oportunidades.",
          consequencias:
            "Afeta oportunidades de emprego, acesso à educação, saúde e bem-estar emocional. Perpetua desigualdades económicas e sociais e dificulta a mobilidade social e o reconhecimento de identidades culturais.",
          exemplos: [
            "Perfilamento racial em abordagens policiais.",
            "Menor representatividade de pessoas negras e indígenas em cargos de liderança.",
            "Estereótipos negativos sobre grupos étnicos na mídia.",
          ],
          atitudes: [
            "Não tolerar piadas e comentários racistas.",
            "Consumir e promover conteúdos de autores e criadores negros e indígenas.",
            "Questionar desigualdades raciais em espaços de poder.",
          ],
          mudar:
            "Combater o racismo exige educação, políticas públicas e ações afirmativas para garantir acesso equitativo a oportunidades. O reconhecimento de desigualdades históricas é essencial para uma sociedade mais justa.",
          empresas: [
            "Criar programas de inclusão e equidade racial.",
            "Oferecer formação sobre diversidade e preconceito inconsciente.",
            "Contratar e promover profissionais de grupos sub-representados.",
          ],
          livros: [
            "Pequeno Manual Antirracista – Djamila Ribeiro",
            "Entre o Mundo e Eu – Ta-Nehisi Coates",
          ],
          artigos: [
            "O impacto do racismo estrutural na economia – Instituto de Estudos Sociais",
            "Como o racismo afeta a saúde mental? – Jornal de Psicologia Social",
          ],
        },
      },
      {
        slug: "sexismo",
        titulo: "Sexismo",
        imagem: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Tratamento desigual com base no sexo ou género, limitando escolhas e participação social.",
        conteudo: {
          definicao:
            "Sexismo é a discriminação baseada no sexo ou género, expressa em estereótipos, exclusão e violência.",
          consequencias:
            "Afeta rendimentos, segurança, participação política e bem-estar. Gera teto de vidro e desigualdade salarial.",
          exemplos: [
            "Interrupções constantes a mulheres em reuniões (manterrupting).",
            "Expectativa de que tarefas de cuidado recaíam só sobre mulheres.",
            "Piadas que sexualizam ou diminuem pessoas por género.",
          ],
          atitudes: [
            "Partilhar responsabilidades de cuidado e tarefas domésticas.",
            "Adotar linguagem inclusiva.",
            "Implementar políticas de igualdade salarial.",
          ],
          mudar:
            "Educação para igualdade de género, políticas públicas e responsabilização por assédio e violência.",
          empresas: [
            "Auditorias salariais e transparência.",
            "Canais seguros de denúncia de assédio.",
            "Mentoria e programas de liderança para mulheres e pessoas trans.",
          ],
        },
      },
      {
        slug: "lgbtqfobia",
        titulo: "LGBTQ+fobia",
        imagem: "https://images.unsplash.com/photo-1523588048872-2d0fabf9a3a5?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Preconceito e violência contra pessoas LGBTQ+, afetando direitos, segurança e saúde.",
        conteudo: {
          definicao:
            "Conjunto de atitudes e práticas discriminatórias contra pessoas lésbicas, gays, bissexuais, trans e queer.",
          consequencias:
            "Eleva riscos de violência, depressão e exclusão familiar e escolar; limita acesso a emprego e saúde.",
          exemplos: [
            "Assédio a casais do mesmo sexo em espaços públicos.",
            "Rejeição a pessoas trans em processos de recrutamento.",
            "Bullying homofóbico/transfóbico em escolas.",
          ],
          atitudes: [
            "Usar nomes e pronomes corretos.",
            "Apoiar políticas de igualdade e proteção.",
            "Criar espaços seguros em escolas e locais de trabalho.",
          ],
          mudar:
            "Garantir direitos, proteção legal e educação sexual inclusiva para reduzir estigma e violência.",
          empresas: [
            "Benefícios que incluam parceiros do mesmo sexo.",
            "Planos de saúde que incluam cuidados trans-afirmativos.",
            "Grupos de afinidade e formação contínua.",
          ],
        },
      },
      {
        slug: "pcd",
        titulo: "Discriminação contra pessoas com deficiência",
        imagem: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Barreiras físicas, comunicacionais e atitudes que excluem pessoas com deficiência.",
        conteudo: {
          definicao:
            "O capacitismo subestima capacidades e nega acessos. A deficiência resulta da interação entre limitações e barreiras do meio.",
          consequencias:
            "Exclusão escolar e laboral, dependência forçada e perda de autonomia.",
          exemplos: [
            "Edifícios sem rampas ou elevadores.",
            "Conteúdos digitais sem alternativas acessíveis.",
            "Processos seletivos que excluem por estereótipo.",
          ],
          atitudes: [
            "Perguntar antes de ajudar e respeitar autonomia.",
            "Garantir acessibilidade digital e arquitetónica.",
            "Usar linguagem centrada na pessoa.",
          ],
          mudar:
            "Aplicar o desenho universal, remover barreiras e cumprir legislação de acessibilidade.",
          empresas: [
            "Adaptações razoáveis e tecnologias assistivas.",
            "Recrutamento inclusivo e metas de contratação.",
            "Teste de acessibilidade em produtos.",
          ],
        },
      },
      {
        slug: "gordofobia",
        titulo: "Gordofobia e preconceito contra corpos não normativos",
        imagem: "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Estigma e tratamento desigual baseados no tamanho e forma do corpo.",
        conteudo: {
          definicao:
            "Conjunto de estereótipos e políticas que penalizam corpos fora de padrões estreitos de beleza.",
          consequencias:
            "Impacto na saúde mental, acesso a cuidados e oportunidades profissionais.",
          exemplos: [
            "Assentos e equipamentos sem tamanhos diversos.",
            "Piadas e comentários ofensivos.",
            "Discriminação em contratações e promoções.",
          ],
          atitudes: [
            "Respeitar corpos em todas as formas e tamanhos.",
            "Evitar comentários sobre corpos alheios.",
            "Modelos inclusivos em comunicação.",
          ],
          mudar:
            "Promover saúde sem estigma e incluir medidas de acessibilidade e conforto.",
          empresas: [
            "Políticas anti-assédio claras.",
            "Uniformes e EPI em tamanhos variados.",
            "Comunicação sem estereótipos.",
          ],
        },
      },
      {
        slug: "classismo",
        titulo: "Classismo e desigualdade socioeconómica",
        imagem: "https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Preconceito e barreiras baseadas em classe social e rendimento.",
        conteudo: {
          definicao:
            "Classismo é a desvalorização e exclusão de pessoas por origem socioeconómica.",
          consequencias:
            "Ciclo de pobreza, segregação territorial e acesso desigual a serviços.",
          exemplos: [
            "Estigma a quem vive em bairros periféricos.",
            "Recrutamento por 'fit' social.",
            "Expulsão por gentrificação sem alternativas.",
          ],
          atitudes: [
            "Combater preconceitos sobre sotaques, roupas e endereços.",
            "Apoiar políticas redistributivas.",
            "Transparência em critérios de seleção.",
          ],
          mudar:
            "Reduzir desigualdade via educação, saúde e rendimentos mínimos adequados.",
          empresas: [
            "Estágios pagos e bolsas.",
            "Recrutamento cego a dados socioeconómicos.",
            "Mapeamento de barreiras internas.",
          ],
        },
      },
      {
        slug: "religiao",
        titulo: "Discriminação religiosa e intolerância",
        imagem: "https://images.unsplash.com/photo-1470909752002-c74e9fe2e8fd?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Hostilidade ou exclusão em função de crenças religiosas ou ausência delas.",
        conteudo: {
          definicao:
            "Inclui ataques, estereótipos e restrições a práticas religiosas ou convicções não religiosas.",
          consequencias:
            "Violência, marginalização e autocensura.",
          exemplos: [
            "Proibir símbolos religiosos sem critério proporcional.",
            "Vandalismo a locais de culto.",
            "Estigma a pessoas sem religião.",
          ],
          atitudes: [
            "Respeitar liberdade de crença e de não crer.",
            "Acomodar práticas quando razoável.",
            "Promover diálogo inter-religioso.",
          ],
          mudar:
            "Educação para diversidade de crenças e proteção legal contra crimes de ódio.",
          empresas: [
            "Salas de recolhimento e flexibilidade de horários.",
            "Políticas contra assédio religioso.",
            "Calendários inclusivos.",
          ],
        },
      },
      {
        slug: "profissoes-estigmatizadas",
        titulo:
          "Preconceito contra profissionais (trabalho informal, trabalho sexual, entre outros)",
        imagem: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Estigmas que desvalorizam certas ocupações e expõem trabalhadores a riscos e exclusão.",
        conteudo: {
          definicao:
            "Preconceito dirigido a quem trabalha em setores informais, sexuais ou precarizados.",
          consequencias:
            "Barreiras a serviços, violência e invisibilidade institucional.",
          exemplos: [
            "Negar abertura de conta bancária.",
            "Abordagens policiais abusivas.",
            "Exclusão de programas de formação.",
          ],
          atitudes: [
            "Usar terminologia não estigmatizante.",
            "Defender direitos laborais e de saúde.",
            "Ouvir organizações representativas.",
          ],
          mudar:
            "Reconhecer direitos, reduzir criminalização e ampliar proteção social.",
          empresas: [
            "Políticas de acesso sem preconceito a serviços.",
            "Formação de equipas de segurança e atendimento.",
            "Parcerias com ONGs para inclusão.",
          ],
        },
      },
    ],
  },
  {
    id: "direitos",
    slug: "direitos-e-igualdade",
    titulo: "Direitos e Igualdade",
    descricao: "Temas de promoção de direitos, inclusão e justiça social.",
    itens: [
      {
        slug: "igualdade-de-oportunidades",
        titulo: "Igualdade de oportunidades",
        imagem: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Garantir que todas as pessoas possam aceder às mesmas oportunidades, sem barreiras injustas.",
        conteudo: {
          definicao:
            "Conjunto de políticas e práticas que removem barreiras e permitem competição justa.",
          atitudes: [
            "Transparência em concursos e recrutamento.",
            "Apoio a quem parte de contextos desfavorecidos.",
            "Acessibilidade universal.",
          ],
        },
      },
      {
        slug: "inclusao-no-trabalho",
        titulo: "Inclusão no trabalho",
        imagem: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Ambientes laborais onde todas as pessoas se sentem seguras, valorizadas e com pertença.",
        conteudo: {
          definicao:
            "Práticas de diversidade, equidade e inclusão na cultura, processos e liderança.",
          atitudes: [
            "Metas de diversidade e planos de ação.",
            "Canais de denúncia confiáveis.",
            "Formação contínua.",
          ],
        },
      },
      {
        slug: "participacao-politica",
        titulo: "Participação política",
        imagem: "https://images.unsplash.com/photo-1552250575-e508473b0903?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Direito de votar, ser eleito e participar na vida pública sem discriminação.",
        conteudo: {
          definicao:
            "Envolve acesso à informação, educação cívica e processos eleitorais inclusivos.",
          atitudes: [
            "Facilitar inscrição eleitoral.",
            "Promover representatividade.",
            "Garantir acessibilidade nas assembleias de voto.",
          ],
        },
      },
      {
        slug: "acessibilidade",
        titulo: "Acessibilidade digital e arquitetónica",
        imagem: "https://images.unsplash.com/photo-1529733905113-027ed85d7e2a?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Ambientes, serviços e conteúdos utilizáveis por todas as pessoas, sem exceção.",
        conteudo: {
          definicao:
            "Aplica princípios de desenho universal e normas WCAG e acessibilidade do edificado.",
          atitudes: [
            "Legendas, contraste e navegação por teclado.",
            "Rampas, elevadores e sinalização tátil.",
            "Testes com pessoas com deficiência.",
          ],
        },
      },
      {
        slug: "educacao",
        titulo: "Direito à educação de qualidade",
        imagem: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Acesso universal à educação inclusiva, segura e relevante.",
        conteudo: {
          definicao:
            "Abrange financiamento adequado, inclusão e combate ao abandono escolar.",
        },
      },
      {
        slug: "saude",
        titulo: "Direito à saúde e a serviços básicos",
        imagem: "https://images.unsplash.com/photo-1581594693700-8158b3868fd1?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Acesso a cuidados de saúde, água, saneamento e proteção social sem discriminação.",
        conteudo: {
          definicao:
            "Serviços centrados na pessoa, culturalmente competentes e financeiramente acessíveis.",
        },
      },
      {
        slug: "representacao",
        titulo: "Representação na mídia e cultura",
        imagem: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Diversidade de vozes e histórias nos meios de comunicação e artes.",
        conteudo: {
          definicao:
            "Representações dignas e não estereotipadas que refletem a sociedade real.",
        },
      },
      {
        slug: "moradia",
        titulo: "Direito à moradia digna",
        imagem: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c54a?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Habitação segura, acessível e adequada para todas as pessoas.",
        conteudo: {
          definicao:
            "Inclui segurança de posse, serviços essenciais e localização adequada.",
        },
      },
      {
        slug: "liberdade-de-expressao",
        titulo: "Direito à liberdade de expressão",
        imagem: "https://images.unsplash.com/photo-1525856891289-1f1f1a4c3f45?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Expressar ideias sem repressão, respeitando direitos de terceiros.",
        conteudo: {
          definicao:
            "Proteção contra censura e violência, com responsabilidade no discurso público.",
        },
      },
      {
        slug: "protecao-contra-violencia",
        titulo: "Proteção contra a violência e assédio",
        imagem: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Direito a viver livre de violência em casa, na rua e no trabalho.",
        conteudo: {
          definicao:
            "Abrange prevenção, resposta rápida e apoio às vítimas.",
        },
      },
      {
        slug: "justica-marginalizados",
        titulo: "Justiça para grupos historicamente marginalizados",
        imagem: "https://images.unsplash.com/photo-1528747045269-390fe33c19b7?q=80&w=1400&auto=format&fit=crop",
        resumo:
          "Reparação de desigualdades, acesso à justiça e participação efetiva.",
        conteudo: {
          definicao:
            "Medidas de justiça restaurativa, quotas e políticas afirmativas quando necessárias.",
        },
      },
    ],
  },
];

// =====================
// Utilitários
// =====================

const findAreaBySlug = (areaSlug) => AREAS.find((a) => a.slug === areaSlug);
const findTema = (areaSlug, temaSlug) => {
  const area = findAreaBySlug(areaSlug);
  if (!area) return null;
  const tema = area.itens.find((i) => i.slug === temaSlug);
  return tema ? { area, tema } : null;
};

const sample3 = (arr, excludeSlug) => {
  const filtered = arr.filter((i) => i.slug !== excludeSlug);
  const picked = [];
  const pool = [...filtered];
  while (picked.length < Math.min(3, pool.length)) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return picked;
};

// =====================
// Componentes UI
// =====================

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "#discriminacao", label: "Discriminação" },
    { href: "#direitos", label: "Direitos & Igualdade" },
    { href: "#sobre", label: "Sobre" },
  ];

  const NavLinks = ({ onClick }) => (
    <>
      {navItems.map((n) => (
        <a
          key={n.href}
          href={n.href}
          onClick={() => onClick?.()}
          className="block px-3 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100"
        >
          {n.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <Home className="w-5 h-5" aria-hidden="true" />
          <span className="font-semibold">Responsabilidade Social</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1 text-sm">
          <NavLinks />
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden p-2 rounded-xl border border-slate-200"
        >
          <Menu className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="sm:hidden" onClick={() => setOpen(false)}>
          <div className="fixed inset-0 bg-black/20" />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed top-2 right-2 left-2 rounded-2xl border border-slate-200 bg-white shadow-xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-sm font-semibold text-slate-900">Menu</span>
              <button
                type="button"
                className="p-2 rounded-xl hover:bg-slate-100"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>
            <nav className="grid gap-1 py-1">
              <NavLinks onClick={() => setOpen(false)} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="mt-16 border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row gap-2 sm:gap-6 items-center justify-between">
      <p>© {new Date().getFullYear()} Responsabilidade Social — Projeto educativo.</p>
      <p>Feito com <span className="font-semibold">React</span> & <span className="font-semibold">Tailwind</span>.</p>
    </div>
  </footer>
);

// >>> NOVO AreaBlock: título da área + definição DENTRO do cartão <<<
const AreaBlock = ({ area }) => {
  const intro = INTRO[area.id];
  const definicao = intro?.texto ?? area.descricao;

  return (
    <section id={area.id} className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Cartão largo com TÍTULO DA ÁREA + DEFINIÇÃO */}
        <div className="md:col-span-2 xl:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{area.titulo}</h2>
            {definicao && (
              <p className="mt-2 text-slate-700 leading-relaxed">{definicao}</p>
            )}
          </div>
        </div>

        {/* Cartões dos temas */}
        {area.itens.map((item) => (
          <Link
            key={item.slug}
            to={`/${area.slug}/${item.slug}`}
            className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={item.imagem}
                alt={item.titulo}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-900">{item.titulo}</h3>
              <p className="mt-1 text-sm text-slate-600 line-clamp-3">{item.resumo}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-sky-700 text-sm">
                <span>Ler mais</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const RandomLine = ({ itens, currentSlug, areaSlug }) => {
  const sugestoes = useMemo(() => sample3(itens, currentSlug), [itens, currentSlug]);
  return (
    <div className="mt-12">
      <h4 className="text-base font-semibold text-slate-900 mb-4">Também pode interessar</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sugestoes.map((s) => (
          <Link
            key={s.slug}
            to={`/${areaSlug}/${s.slug}`}
            className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition-shadow"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={s.imagem} alt={s.titulo} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-3">
              <h5 className="font-medium text-slate-900">{s.titulo}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const TemaPage = () => {
  const { areaSlug, slug } = useParams();
  const data = findTema(areaSlug, slug);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (!data) return <Navigate to="/" replace />;

  const { area, tema } = data;
  const c = tema.conteudo || {};

  return (
    <main>
      <Header />
      <article className="min-h-screen">
        <div className="w-full aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/4] overflow-hidden bg-slate-100">
          <img src={tema.imagem} alt={tema.titulo} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <div className="-mt-10 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{tema.titulo}</h1>
                <Link to={`/${area.slug}`} className="hidden"></Link>
                <Link to="/" className="whitespace-nowrap inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                  <ArrowLeft className="w-5 h-5" /> Voltar à página inicial
                </Link>
              </div>
              {c.definicao && (
                <section className="mt-5">
                  <h2 className="text-lg font-semibold text-slate-900">Definição</h2>
                  <p className="mt-2 text-slate-700 leading-relaxed">{c.definicao}</p>
                </section>
              )}
              {c.consequencias && (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">Consequências</h2>
                  <p className="mt-2 text-slate-700 leading-relaxed">{c.consequencias}</p>
                </section>
              )}
              {Array.isArray(c.exemplos) && c.exemplos.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">Exemplos</h2>
                  <ul className="mt-2 space-y-2 list-disc pl-6 text-slate-700">
                    {c.exemplos.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </section>
              )}
              {Array.isArray(c.atitudes) && c.atitudes.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">Pequenas atitudes que fazem diferença</h2>
                  <ul className="mt-2 space-y-2 list-disc pl-6 text-slate-700">
                    {c.atitudes.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </section>
              )}
              {c.mudar && (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">O que tem de mudar na sociedade</h2>
                  <p className="mt-2 text-slate-700 leading-relaxed">{c.mudar}</p>
                </section>
              )}
              {Array.isArray(c.empresas) && c.empresas.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">O que as empresas podem fazer</h2>
                  <ul className="mt-2 space-y-2 list-disc pl-6 text-slate-700">
                    {c.empresas.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </section>
              )}
              {Array.isArray(c.livros) && c.livros.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">Sugestão de livros</h2>
                  <ul className="mt-2 space-y-2 list-disc pl-6 text-slate-700">
                    {c.livros.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </section>
              )}
              {Array.isArray(c.artigos) && c.artigos.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">Artigos</h2>
                  <ul className="mt-2 space-y-2 list-disc pl-6 text-slate-700">
                    {c.artigos.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </section>
              )}
            </div>
          </div>

          <RandomLine itens={area.itens} currentSlug={tema.slug} areaSlug={area.slug} />
        </div>
      </article>
      <Footer />
    </main>
  );
};

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <Header />
      {/* Página inicial sem hero */}
      <div className="max-w-6xl mx-auto px-4 pt-6" />
      {AREAS.map((area) => (
        <AreaBlock key={area.id} area={area} />
      ))}
      <section id="sobre" className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-slate-200 p-6 bg-white">
          <h2 className="text-2xl font-bold text-slate-900">Sobre este projeto</h2>
          <p className="mt-2 text-slate-700">
            Este é um site simples e moderno, pronto para ser publicado no GitHub Pages. Os cartões são
            responsivos (1 por ecrã pequeno, 2 em médio e 3 em ecrãs grandes). Cada cartão leva a uma página
            dedicada com imagem de largura total, texto explicativo e sugestões de temas relacionados.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

// =====================
// Roteamento
// =====================

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":areaSlug/:slug" element={<TemaPage />} />
      </Routes>
    </BrowserRouter>
  );
}
