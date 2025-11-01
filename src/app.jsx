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
