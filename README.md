# 🇧🇷 Template - React + @govbr-ds/webcomponents-react

[![npm (next)](https://img.shields.io/npm/v/@govbr-ds/webcomponents-react/next.svg)](https://www.npmjs.com/package/@govbr-ds/webcomponents-react)

Um **template prático e funcional** para começar a desenvolver aplicações React usando os componentes do **GovBR-DS** (Design System do Governo Federal Brasileiro).

## 🎯 O que é este template?

Este projeto serve como **ponto de partida** para:

- ✅ Aprender a usar os componentes da biblioteca `@govbr-ds/webcomponents-react`
- ✅ Implementar interfaces seguindo os padrões e boas práticas do Gov BR DS
- ✅ Consultar exemplos de componentes e sua integração com React
- ✅ Evoluir e adaptar o projeto conforme suas necessidades

## 🚀 Quick Start

### 1. Instalação das Dependências

```bash
npm install
```

Ou manualmente, instale os pacotes principais:

```bash
npm install @govbr-ds/core @govbr-ds/webcomponents @govbr-ds/webcomponents-react
npm install --save-dev vite @vitejs/plugin-react
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

O servidor iniciará em `http://localhost:5173/`

### 3. Fazer Build para Produção

```bash
npm run build
```

---

## 📚 Estrutura do Projeto

```
teste-govbr-ds/
├── src/
│   ├── App.tsx           # Componente raiz da aplicação
│   ├── App.css           # Estilos da aplicação
│   ├── main.tsx          # Entry point (importações de estilos)
│   ├── index.css         # Estilos globais
│   ├── insights.md       # 📖 DOCUMENTAÇÃO COMPLETA DE COMPONENTES
│   └── styles/
│       └── govbr.css     # Estilos customizados Gov BR DS
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
├── vite.config.ts        # Configuração Vite
└── tsconfig.json         # Configuração TypeScript
```

---

## 💡 Dicas de Uso

### 1. Estrutura de Estilos CSS (Refatorada)

O projeto usa uma **arquitetura CSS organizada em 3 camadas**:

#### **`src/index.css` - Base Global** 
- Define variáveis CSS (cores, tipografia, espaçamento)
- Reset CSS unificado e consistente
- Importado automaticamente no `main.tsx`

```css
:root {
  --primary-color: #0050f0;
  --light-bg: #f5f5f5;
  /* ... outros tokens ... */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

#### **`src/styles/govbr.css` - Imports Centralizados**
- Importa `@govbr-ds/core/dist/core-tokens.min.css`
- Importa `@fortawesome/fontawesome-free/css/all.min.css`
- Único ponto de entrada para bibliotecas externas

#### **`src/App.css` - Estilos da Aplicação**
- Importa `./styles/govbr.css` (uma única vez)
- Contém estilos específicos (Header, Menu, Layout, etc.)
- Usa variáveis definidas em `index.css`

**Fluxo de imports:**
```
main.tsx
  ↓
index.css (variáveis + reset)
  ↓
App.css
  ↓
styles/govbr.css (core-tokens + fontawesome)
```

### 2. Importar Estilos no Projeto

No arquivo `src/main.tsx`, importe apenas:

```typescript
import "./index.css";  // Base global (inclui tudo via App.css)
import App from "./App";
```

> **Nota:** Os imports de `@govbr-ds/core` e FontAwesome são gerenciados automaticamente via `styles/govbr.css` → `App.css`.

### 3. Usar Componentes Gov BR DS

No seu componente React, importe e use normalmente:

```tsx
import { BrButton, BrCard, BrInput } from "@govbr-ds/webcomponents-react";

export default function Exemplo() {
  const handleClick = (ev: CustomEvent) => {
    console.log("Botão clicado:", ev.detail);
  };

  return (
    <div>
      <BrButton 
        emphasis="primary" 
        onBrClick={handleClick}
      >
        Clique aqui
      </BrButton>

      <BrCard hover={true}>
        <div slot="content">Conteúdo do card</div>
      </BrCard>

      <BrInput 
        label="Seu nome" 
        placeholder="Digite seu nome" 
      />
    </div>
  );
}
```

### 4. Acessar Eventos Customizados

Os componentes Gov BR DS disparam eventos customizados. Use o prefixo `onBr`:

```tsx
// Evento: br-click → onBrClick
<BrButton onBrClick={handleClick}>Botão</BrButton>

// Evento: br-change → onBrChange  
<BrInput onBrChange={(ev) => console.log(ev.detail.value)} />
```

### 5. Props e Atributos

Consulte os tipos TypeScript disponíveis no seu IDE:

```tsx
import type { BrButtonProps } from "@govbr-ds/webcomponents-react";

const buttonProps: BrButtonProps = {
  emphasis: "primary",
  disabled: false,
  size: "md",
};
```

### 6. Usar Slots para Conteúdo

Alguns componentes usam `slots` para permitir conteúdo customizado:

```tsx
import { BrCard } from "@govbr-ds/webcomponents-react";

export default function CardExemplo() {
  return (
    <BrCard>
      <h3 slot="title">Título do Card</h3>
      <p slot="content">Conteúdo principal</p>
      <div slot="footer">Rodapé</div>
    </BrCard>
  );
}
```

---

## 📖 Documentação Detalhada

### 🔍 Consulte o arquivo [insights.md](./src/insights.md)

Este arquivo contém:

- **Referência completa de componentes** por categoria (entrada, saída, navegação, etc.)
- **Props e eventos** de cada componente
- **Exemplos de uso** detalhados
- **Padrões e boas práticas** do Gov BR DS
- **Estrutura de layouts** comuns (Header, Menu, Footer, etc.)

### 🌐 Recursos Externos

- **Storybook Oficial**: [gov.br/ds/webcomponents](https://gov.br/ds/webcomponents) - Visualize todos os componentes, props e exemplos interativos
- **Wiki Dev**: [gov.br/ds/wiki/desenvolvimento](https://gov.br/ds/wiki/desenvolvimento) - Padrões, acessibilidade e boas práticas
- **Documentação React**: [Stencil React Bindings](https://stenciljs.com/docs/react) - Como funcionam os wrappers React
- **Custom Elements Everywhere**: [custom-elements-everywhere.com/#react](https://custom-elements-everywhere.com/#react) - Compatibilidade de Web Components com React

---

## 🎨 Guia de Evolução do Projeto

### Fase 1: Aprendizado (Este Template) ✅

- [ ] Explorar componentes básicos (Button, Input, Card)
- [ ] Entender como importar estilos e usar eventos
- [ ] Revisar o `insights.md` para referência completa
- [ ] Testar slots e eventos customizados

### Fase 2: Estrutura e Organização

- [ ] Criar pasta `src/components/` para componentes reutilizáveis
- [ ] Criar pasta `src/pages/` para páginas da aplicação
- [ ] Separar `src/styles/` para estilos customizados
- [ ] Implementar layouts comuns (Header, Menu, Footer, Sidebar)

**Exemplo de estrutura:**

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   └── Header.types.ts
│   ├── Menu/
│   ├── Footer/
│   └── common/
│       ├── Button.tsx
│       └── Card.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── FormPage.tsx
│   └── NotFound.tsx
├── styles/
│   ├── variables.css
│   ├── globals.css
│   └── theme.css
└── hooks/
    ├── useForm.ts
    └── useApi.ts
```

### Fase 3: Escalabilidade

- [ ] Adicionar roteamento (React Router v6+)
- [ ] Configurar estado global (Context API, Zustand ou Redux)
- [ ] Integrar com APIs/backend
- [ ] Adicionar validação de formulários
- [ ] Testes unitários (Vitest) e E2E (Playwright)

### Fase 4: Produção

- [ ] Otimizar bundle e tree-shaking
- [ ] Implementar PWA (se necessário)
- [ ] Configurar CI/CD (GitHub Actions, GitLab CI)
- [ ] Configurar SEO e meta tags
- [ ] Deploy (Vercel, GitHub Pages, servidores gov)

---

## ⚙️ Configuração Avançada

### pnpm e Tree-Shaking

Se usar `pnpm` e notar que o código não utilizado não está sendo removido, crie um `.npmrc`:

```properties
node-linker=hoisted
```

### Tema Dark Mode

Os componentes do Gov BR DS suportam tema escuro. Adicione ao seu CSS:

```css
:root {
  --color-scheme: light; /* ou 'dark' */
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-scheme: dark;
  }
}
```

### Customização de Tokens CSS

Você pode sobrescrever tokens de cores, espaçamento, tipografia:

```css
:root {
  --color-primary: #004687;
  --spacing-unit: 8px;
  --font-family-base: "Raleway", sans-serif;
}
```

Consulte a documentação oficial para a lista completa de tokens.

---

## 🐛 Troubleshooting

| Problema                   | Solução                                                                           |
| -------------------------- | --------------------------------------------------------------------------------- |
| Estilos não carregando     | Verifique se importou `@govbr-ds/core/dist/core-tokens.min.css` em `src/main.tsx` |
| Eventos não funcionam      | Use o prefixo `onBr` em camelCase (ex: `onBrClick`, `onBrChange`)                 |
| Ícones não aparecem        | Certifique-se de importar `@fortawesome/fontawesome-free/css/all.min.css`         |
| TypeScript com erros       | Execute `npm install` novamente ou delete `node_modules` e `.lock`                |
| Build lento                | Use `npm run build` e verifique se o tree-shaking está funcionando                |
| Componentes não renderizam | Certifique-se de estar dentro de um elemento React (não em HTML puro)             |

---

## 📝 Padrões de Desenvolvimento

### Commits Semânticos

Siga o padrão Gov BR DS e Conventional Commits:

```bash
# Feature nova
git checkout -b feat/nome-da-feature
git commit -m "feat: descrição breve da funcionalidade"

# Bugfix
git checkout -b fix/nome-do-bug
git commit -m "fix: descrição breve da correção"

# Documentação
git commit -m "docs: descrição do documento"

# Refatoração
git commit -m "refactor: descrição breve"

# Testes
git commit -m "test: descrição do teste"
```

### Estrutura de Componentes React

```tsx
import { FC, useState } from "react";
import { BrButton, BrInput } from "@govbr-ds/webcomponents-react";
import styles from "./MeuComponente.module.css";

interface MeuComponenteProps {
  titulo: string;
  onSubmit?: (dados: any) => void;
  disabled?: boolean;
}

const MeuComponente: FC<MeuComponenteProps> = ({
  titulo,
  onSubmit,
  disabled = false,
}) => {
  const [valor, setValor] = useState("");

  const handleClick = (ev: CustomEvent) => {
    console.log("Clicado:", ev.detail);
    onSubmit?.({ valor });
  };

  return (
    <div className={styles.container}>
      <h2>{titulo}</h2>

      <BrInput
        label="Entrada"
        onBrChange={(ev: CustomEvent) => setValor(ev.detail.value)}
        disabled={disabled}
      />

      <BrButton emphasis="primary" onBrClick={handleClick} disabled={disabled}>
        Enviar
      </BrButton>
    </div>
  );
};

export default MeuComponente;
```

### Tipagem com TypeScript

```tsx
// types.ts
export interface Usuario {
  id: string;
  nome: string;
  email: string;
}

export interface FormDados {
  nome: string;
  email: string;
  telefone?: string;
}

// MeuComponente.tsx
import type { Usuario, FormDados } from "./types";

interface MeuComponenteProps {
  usuario: Usuario;
  onSave: (dados: FormDados) => Promise<void>;
}

const MeuComponente: FC<MeuComponenteProps> = ({ usuario, onSave }) => {
  // ...
};
```

---

## 🎨 Boas Práticas do Gov BR DS

### Acessibilidade

- Sempre use `label` em inputs
- Forneça `aria-label` quando necessário
- Use `role` apropriado em elementos customizados
- Teste com leitores de tela

```tsx
<BrInput
  label="Email"
  placeholder="seu@email.com"
  aria-describedby="email-help"
/>
<span id="email-help">Seu e-mail será usado para login</span>
```

### Responsividade

Os componentes do Gov BR DS já são responsivos. Use classes CSS para adaptar layouts:

```css
/* Mobile first */
.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* Tablet e acima */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    gap: var(--spacing-xl);
  }
}
```

### Performance

- Importe apenas os componentes que usar
- Use code splitting para rotas
- Lazy load componentes pesados
- Monitore o tamanho do bundle com `npm run build`

```tsx
import { lazy, Suspense } from "react";

const FormavelsComponente = lazy(() => import("./FormavelsComponente"));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <FormavelsComponente />
    </Suspense>
  );
}
```

---

## 🤝 Contribuindo e Estendendo

Ao estender este template:

1. **Siga os padrões Gov BR DS** (cores, tipografia, spacing)
2. **Mantenha a acessibilidade** (WCAG 2.1 Level AA minimum)
3. **Use TypeScript** para melhor segurança de tipos
4. **Docummente** suas mudanças e novas features
5. **Faça commits semânticos** com prefixos (feat, fix, docs, etc)
6. **Teste** seus componentes em diferentes navegadores
7. **Revise** a documentação em `insights.md`

---

## 📚 Referências

- **Site Gov BR DS**: [gov.br/ds](https://gov.br/ds)
- **Storybook Interativo**: [gov.br/ds/webcomponents](https://gov.br/ds/webcomponents)
- **Wiki Desenvolvimento**: [gov.br/ds/wiki/desenvolvimento/web-components](https://gov.br/ds/wiki/desenvolvimento/web-components)
- **Padrões de Design**: [gov.br/ds/wiki/padroes](https://gov.br/ds/wiki/padroes/)
- **Acessibilidade**: [gov.br/ds/wiki/acessibilidade](https://gov.br/ds/wiki/acessibilidade/)
- **Custom Elements Everywhere**: [custom-elements-everywhere.com/#react](https://custom-elements-everywhere.com/#react)
- **React 18 Docs**: [react.dev](https://react.dev)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Discord Comunidade**: [discord.gg/U5GwPfqhUP](https://discord.gg/U5GwPfqhUP)

---

## 🆘 Precisa de Ajuda?

- 📖 **Documentação completa**: Veja o arquivo `src/insights.md`
- 🎨 **Exemplos interativos**: Consulte o [Storybook oficial](https://gov.br/ds/webcomponents)
- 💬 **Comunidade**: Converse no [Discord](https://discord.gg/U5GwPfqhUP)
- 🐛 **Reportar bugs**: Use [GitLab do projeto](https://gitlab.com/govbr-ds)
- 📧 **Contato**: Visite [gov.br/ds](https://gov.br/ds) para mais informações

---

## 📄 Licença

Este template segue a mesma licença do [Gov BR DS](https://gov.br/ds).

Desenvolvido com ❤️ para a comunidade do Governo Federal Brasileiro.

**Baseado em:** [GovBR-DS Web Components React](https://www.npmjs.com/package/@govbr-ds/webcomponents-react)

---

## 📝 Histórico de Mudanças

- **v1.0.0** - Template inicial com exemplos de uso e documentação completa
- Veja o git log para mais detalhes: `git log --oneline`
