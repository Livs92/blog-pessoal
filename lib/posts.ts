export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  content: string;
  tags?: string[];
};

const posts: Post[] = [
  {
    slug: "minha-jornada-na-tecnologia",
    title: "🚀 Minha jornada na tecnologia",
    date: "2025-09-01",
    excerpt:
      "Como iniciei minha jornada na tecnologia",
    content:
      "Comecei minha graduação em Análise e Desenvolvimento de Sistemas em 2023, movida pela vontade de entender como a tecnologia realmente funciona nos bastidores. Sempre gostei de explorar ferramentas digitais, mas entrar no mundo do código foi como abrir uma nova dimensão. Logo nos primeiros semestres mergulhei em lógica de programação, estruturas básicas e projetos pequenos que já mostravam o quanto programação é, ao mesmo tempo, desafiante e recompensadora. Nem tudo foram flores. Teve muito erro no terminal, configuração quebrada, commits errados no Git e noites tentando entender por que o CSS não aplicava. Mas foi exatamente nesses momentos que descobri a importância da persistência e como cada bug corrigido traz um gosto de vitória. Agora, caminhando para a reta final da graduação em 2025, sinto que cada linha de código, cada projeto publicado no GitHub e cada feedback recebido faz parte de uma história que ainda está em construção. Agora, caminhando para a reta final da graduação em 2025, sinto que cada linha de código, cada projeto publicado no GitHub e cada feedback recebido faz parte de uma história que ainda está em construção. Em junho deste ano conquistei minha primeira oportunidade real de trabalhar com tecnologia, e desde então tenho amado fazer parte desse universo que me ensina algo novo todos os dias.",
    tags: ["ADS", "Tecnologia", "TransicaoDeCarreira"],
  },
  {
    slug: "programa-desenvolve",
    title: "💻 Programa Desenvolve",
    date: "2025-09-05",
    excerpt: "Minha Experiência no Programa Desenvolve",
    content:
      "Participar do Programa Desenvolve, do Grupo Boticário em parceria com a Koru, tem sido uma das experiências mais marcantes da minha jornada em tecnologia. Quero registrar como foram as fases que vivi até agora, porque cada etapa me trouxe aprendizados técnicos e pessoais que levarei para sempre. Na primeira fase o foco foi em dados e inteligência artificial. Tive contato com fundamentos de análise, manipulação e visualização de dados, além de conceitos iniciais de IA. Essa etapa me mostrou a força que a informação bem tratada pode ter e abriu meus olhos para o impacto da inteligência artificial em diferentes contextos. Na segunda fase o foco passou a ser o desenvolvimento de software. Aqui os desafios foram ainda mais práticos, envolvendo a criação de projetos, trabalho em equipe e aplicação de boas práticas de programação. Essa experiência me ajudou a consolidar conhecimentos que já vinha aprendendo na graduação e a entender melhor como é colaborar em soluções de verdade.",
    tags: ["ProgramaDesenvolve", "Boticario", "Koru"],
  },
  {
    slug: "maior-desafio-api",
    title: "🛠️ Construindo uma API ",
    date: "2025-09-10",
    excerpt: "To-Do List utilizando Java e Spring Boot",
    content:
      "Esse projeto representou um grande desafio porque foi a primeira vez que precisei estruturar uma aplicação back-end completa, pensando em cada detalhe para que ela fosse robusta, segura e utilizável.Esse projeto foi um divisor de águas. Ele não apenas me mostrou a complexidade de um back-end real, mas também me deu confiança para continuar explorando essa área. Hoje vejo a To-Do List não apenas como um exercício, mas como uma prova de que é possível construir soluções completas com dedicação, estudo e persistência. Ainda tenho muito a aprender, mas encarar esse desafio me mostrou que cada erro é uma oportunidade de evolução e que estar no mundo da tecnologia é viver em constante aprendizado.",
    tags: ["Java", "SpringBoot", "API"],
  },
];

export async function getPosts(): Promise<Post[]> {
  await new Promise((r) => setTimeout(r, 50));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  await new Promise((r) => setTimeout(r, 20));
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
