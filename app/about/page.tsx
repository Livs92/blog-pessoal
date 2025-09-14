import Image from "next/image";

export const metadata = {
  title: "Sobre | Blog da Lívia",
};

export default function AboutPage() {
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-start">
      {/* Card principal com foto + bio */}
      <section className="card p-6 flex flex-col md:flex-row items-start gap-6">
        <Image
          src="/about/foto-livia.png"
          alt="Foto de Lívia"
          width={260}
          height={260}
          priority
          className="rounded-full border-b-4 border-[#d1d9e0] object-cover shadow-[var(--shadow-soft)]"
          style={{ aspectRatio: "1 / 1" }}
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--color-mauve)]">
            Oi! Eu sou a Lívia 👋
          </h2>

          <p className="text-base leading-relaxed text-[color:var(--color-ink)]/90">
            Estou criando bugs desde 2023 (e corrigindo com café e
            persistência!). Atualmente estou no 5º semestre do curso de Análise
            e Desenvolvimento de Sistemas, com previsão de conclusão em dezembro
            de 2025. Sou apaixonada por tecnologia, aprendizado contínuo e pelo
            desenvolvimento de soluções que realmente fazem a diferença no dia a
            dia das pessoas.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--color-muted)]">
            <li>
              <strong>Foco atual:</strong> HTML, CSS, JavaScript e UX/UI
              Designer.
            </li>
            <li>
              <strong>Projetos:</strong> To-Do List, Cadastro de Produtos,
              Assistente de IA, Lista de Tarefas, Registro de Biblioteca.
            </li>
            <li>
              <strong>Programas:</strong> Programa Desenvolve (Boticário/Koru),
              Santander Bootcamp (DIO).
            </li>
          </ul>
        </div>
      </section>

      {/* Card de contato */}
      <aside className="card p-6">
        <h3 className="text-lg font-semibold mb-1 text-[var(--color-mauve)]">
          Contato
        </h3>
        <p className="text-muted text-sm mb-4">Conecte-se comigo 👇</p>

        <ul className="space-y-3">
          {/* Email */}
          <li>
            <a
              className="group flex items-center gap-3 rounded-xl px-3 py-2 border border-[var(--color-ring)] hover:border-[var(--color-mauve)] transition"
              href="mailto:livia.rosa92@gmail.com"
            >
              {/* ícone */}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-mauve)]/10 text-[var(--color-mauve)]">
                {/* Mail */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16v12H4z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M4 7l8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <div className="font-medium leading-none group-hover:text-[var(--color-mauve)]">
                  E-mail
                </div>
                <div className="text-sm text-muted">livia.rosa92@gmail.com</div>
              </div>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              className="group flex items-center gap-3 rounded-xl px-3 py-2 border border-[var(--color-ring)] hover:border-[var(--color-mauve)] transition"
              href="https://github.com/Livs92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-mauve)]/10 text-[var(--color-mauve)]">
                {/* GitHub */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.23-3.24-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.85 1.23 1.93 1.23 3.24 0 4.61-2.8 5.63-5.47 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z" />
                </svg>
              </span>
              <div className="flex-1">
                <div className="font-medium leading-none group-hover:text-[var(--color-mauve)]">
                  GitHub
                </div>
                <div className="text-sm text-muted">Livs92</div>
              </div>
              <span className="text-muted group-hover:text-[var(--color-mauve)]">
                ↗
              </span>
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              className="group flex items-center gap-3 rounded-xl px-3 py-2 border border-[var(--color-ring)] hover:border-[var(--color-mauve)] transition"
              href="https://www.linkedin.com/in/l%C3%ADvia-silveira-da-rosa-01a629267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-mauve)]/10 text-[var(--color-mauve)]">
                {/* LinkedIn */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5zM3 8.98h3.96V21H3V8.98zM9.49 8.98H13v1.63h.05c.49-.93 1.7-1.91 3.5-1.91 3.75 0 4.44 2.46 4.44 5.66V21h-3.96v-4.82c0-1.15-.02-2.64-1.61-2.64-1.61 0-1.86 1.25-1.86 2.55V21H9.49V8.98z" />
                </svg>
              </span>
              <div className="flex-1">
                <div className="font-medium leading-none group-hover:text-[var(--color-mauve)]">
                  LinkedIn
                </div>
                <div className="text-sm text-muted">Lívia Rosa</div>
              </div>
              <span className="text-muted group-hover:text-[var(--color-mauve)]">
                ↗
              </span>
            </a>
          </li>
        </ul>

        {/* rodapé do card */}
        <div className="mt-4 text-xs text-muted"></div>
      </aside>
    </div>
  );
}
