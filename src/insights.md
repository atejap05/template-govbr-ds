# GovBR-DS - Guia Completo de Componentes e Boas Práticas

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Instalação e Configuração](#instalação-e-configuração)
3. [Componentes por Categoria](#componentes-por-categoria)
4. [Referência de Props e Eventos](#referência-de-props-e-eventos)
5. [Exemplos de Uso](#exemplos-de-uso)
6. [Padrões e Boas Práticas](#padrões-e-boas-práticas)
7. [Recursos Úteis](#recursos-úteis)

---

## 🎯 Visão Geral

O **GovBR-DS** (Design System do Governo) é uma biblioteca de componentes web modernos que segue os padrões visuais e de usabilidade do Governo Federal Brasileiro.

### Características Principais

- ✅ Web Components baseados em **Stencil.js**
- ✅ Suporte nativo para **React** via wrappers
- ✅ Tipagem completa com **TypeScript**
- ✅ Acessibilidade (WCAG 2.1 Level AA)
- ✅ Responsividade mobile-first
- ✅ Suporte a temas (light/dark mode)

### Estrutura de Pacotes

```
@govbr-ds/core              (estilos, tokens, documentação)
@govbr-ds/webcomponents     (componentes Web Components)
@govbr-ds/webcomponents-react (wrappers React)
```

---

## ⚙️ Instalação e Configuração

### 1. Instalar Dependências

```bash
npm install @govbr-ds/core @govbr-ds/webcomponents @govbr-ds/webcomponents-react
npm install @stencil/react-output-target  # Para bindings React
npm install --save-dev @fortawesome/fontawesome-free  # Ícones
```

### 2. Importar Estilos Global (main.tsx)

```typescript
import "@govbr-ds/core/dist/core-tokens.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
```

### 3. Usar Componentes em React

```tsx
import { BrButton, BrCard, BrInput } from "@govbr-ds/webcomponents-react";

export default function App() {
  return (
    <>
      <BrButton emphasis="primary">Clique aqui</BrButton>
      <BrCard hover={true}>
        <div slot="content">Conteúdo</div>
      </BrCard>
    </>
  );
}
```

---

## 📦 Componentes por Categoria

### 🎨 **Componentes Estruturais**

Utilizados para criar o layout base da aplicação.

#### **BrHeader** (Header/Cabeçalho)

Cabeçalho governamental com logo, título e ações.

**Props:**

- `class="br-header"` — Classe obrigatória
- `data-sticky` — Fixar no topo

**Estrutura HTML esperada:**

```tsx
<header className="br-header">
  <div className="header-top">
    <div className="header-logo">
      <img src="logo.svg" alt="Logo" />
      <span className="header-sign">Assinatura</span>
    </div>
    <div className="header-actions">{/* Ações do header */}</div>
  </div>
  <div className="header-bottom">
    <div className="header-menu">
      <button className="menu-trigger">
        <i className="fas fa-bars"></i>
      </button>
      <h1 className="header-title">Título</h1>
      <p className="header-subtitle">Subtítulo</p>
    </div>
  </div>
</header>
```

#### **BrMenu** (Menu Lateral)

Menu de navegação responsivo com suporte a itens aninhados.

**Props:**

- `class="br-menu"` — Classe obrigatória
- `class="open"` — Abrir/fechar menu
- `id` — Identificador único

**Estrutura:**

```tsx
<div className="br-menu open" id="main-menu">
  <div className="menu-container">
    <div className="menu-scrim"></div>
    <nav className="menu-panel">
      <div className="menu-header">
        <h2>Menu</h2>
      </div>
      <nav className="menu-body">
        <div className="menu-item">Item 1</div>
        <div className="menu-item active">Item 2</div>
      </nav>
    </nav>
  </div>
</div>
```

---

### 🔘 **Componentes de Entrada (Formulários)**

Componentes para captura e validação de dados.

#### **BrInput** (Campo de Entrada)

Campo de texto simples com suporte a validação.

**Props:**

- `label: string` — Rótulo do campo
- `placeholder: string` — Placeholder
- `type: string` — Tipo (text, email, password, etc)
- `state: 'info' | 'warning' | 'danger' | 'success'` — Estado visual
- `disabled: boolean` — Desabilitar
- `required: boolean` — Campo obrigatório
- `value: string` — Valor

**Eventos:**

- `onValueChange` — Quando o valor muda

**Exemplo:**

```tsx
<BrInput
  label="Email"
  placeholder="seu.email@gov.br"
  type="email"
  state="info"
/>
```

#### **BrCheckbox** (Caixa de Seleção)

Componente para seleção múltipla.

**Props:**

- `label: string` — Rótulo
- `name: string` — Nome do campo
- `checked: boolean` — Selecionado?
- `disabled: boolean` — Desabilitar
- `state: 'valid' | 'invalid'` — Validação

**Exemplo:**

```tsx
<BrCheckbox label="Aceito os termos" name="terms" checked={false} />
```

#### **BrSelect** (Seleção/Dropdown)

Dropdown para seleção de opções.

**Props:**

- `label: string` — Rótulo
- `options: Array` — Opções disponíveis
- `isMultiple: boolean` — Múltipla seleção?
- `value: string | string[]` — Valor selecionado

**Exemplo:**

```tsx
<BrSelect
  label="Estado"
  options={[
    { label: "São Paulo", value: "sp" },
    { label: "Rio de Janeiro", value: "rj" },
  ]}
/>
```

#### **BrRadio** (Botão de Rádio)

Seleção exclusiva entre opções.

**Props:**

- `label: string` — Rótulo
- `name: string` — Nome do grupo
- `checked: boolean` — Selecionado?
- `value: string` — Valor

---

### 🎯 **Componentes de Apresentação**

Componentes para exibir conteúdo.

#### **BrButton** (Botão)

Botão com múltiplas ênfases e estilos.

**Props:**

- `emphasis: 'primary' | 'secondary' | 'tertiary'` — Ênfase visual
- `shape: 'circle' | 'block' | 'pill'` — Formato
- `density: 'small' | 'medium' | 'large'` — Densidade
- `disabled: boolean` — Desabilitar
- `type: 'button' | 'submit' | 'reset'` — Tipo
- `onClick: function` — Função ao clicar

**Exemplo:**

```tsx
<BrButton
  emphasis="primary"
  density="medium"
  onClick={() => console.log("Clicado!")}
>
  Clique Aqui
</BrButton>
```

#### **BrCard** (Cartão)

Container para apresentação de conteúdo estruturado.

**Props:**

- `hover: boolean` — Efeito hover?
- `disabled: boolean` — Desabilitar

**Slots:**

- `header` — Cabeçalho
- `content` — Conteúdo principal
- `footer` — Rodapé (opcional)

**Exemplo:**

```tsx
<BrCard hover={true}>
  <div slot="header">
    <h3>Título</h3>
  </div>
  <div slot="content">
    <p>Conteúdo do card</p>
  </div>
</BrCard>
```

#### **BrMessage** (Mensagem)

Componente para exibir mensagens de feedback.

**Props:**

- `message: string` — Texto da mensagem
- `messageTitle: string` — Título (opcional)
- `state: 'info' | 'warning' | 'danger' | 'success'` — Tipo
- `showIcon: boolean` — Mostrar ícone?
- `isClosable: boolean` — Pode fechar?

**Exemplo:**

```tsx
<BrMessage
  message="Operação realizada com sucesso!"
  messageTitle="Sucesso"
  state="success"
  showIcon={true}
/>
```

#### **BrAvatar** (Avatar)

Imagem de perfil ou ícone do usuário.

**Props:**

- `text: string` — Texto exibido
- `src: string` — URL da imagem
- `isIconic: boolean` — Forçar ícone?
- `density: 'small' | 'medium' | 'large'` — Tamanho
- `bgColor: string` — Cor de fundo

---

### 🗂️ **Componentes de Navegação**

Componentes para navegação entre seções/páginas.

#### **BrItem** (Item de Lista/Menu)

Item individual em listas ou menus.

**Props:**

- `href: string` — URL do link
- `isActive: boolean` — Está ativo?
- `isInteractive: boolean` — Interativo?
- `isButton: boolean` — Comportar como botão?
- `disabled: boolean` — Desabilitar

**Exemplo:**

```tsx
<BrItem href="/dashboard" isActive={true}>
  Dashboard
</BrItem>
```

#### **BrList** (Lista)

Container para múltiplos `BrItem`.

**Props:**

- `header: string` — Título da lista
- `isHorizontal: boolean` — Horizontal?
- `collapse: boolean` — Com collapse?
- `accordion: string` — ID do grupo accordion

**Exemplo:**

```tsx
<BrList header="Menu">
  <BrItem href="#home" isActive>
    Home
  </BrItem>
  <BrItem href="#about">Sobre</BrItem>
  <BrItem href="#contact">Contato</BrItem>
</BrList>
```

#### **BrTab & BrTabItem** (Abas)

Navegação por abas.

**BrTab Props:**

- `label: string` — Rótulo de acessibilidade
- `density: 'small' | 'medium' | 'large'` — Densidade

**BrTabItem Props:**

- `tabItemTitle: string` — Título da aba
- `isActive: boolean` — Aba ativa?
- `icon: string` — Ícone (opcional)

**Exemplo:**

```tsx
<BrTab label="Navegação">
  <BrTabItem tabItemTitle="Tab 1" isActive={true}>
    <p>Conteúdo da tab 1</p>
  </BrTabItem>
  <BrTabItem tabItemTitle="Tab 2">
    <p>Conteúdo da tab 2</p>
  </BrTabItem>
</BrTab>
```

#### **BrPagination** (Paginação)

Navegação entre páginas de conteúdo.

**Props:**

- `current: number` — Página atual
- `total: number` — Total de páginas
- `perPage: number` — Itens por página
- `variant: 'default' | 'contextual'` — Tipo de exibição

---

### 📊 **Componentes de Dados**

Componentes para exibir e editar dados estruturados.

#### **BrTable, BrTableRow, BrTableCell** (Tabela)

Componentes para criar tabelas estruturadas.

**Exemplo:**

```tsx
<BrTable>
  <BrTableHeaderRow>
    <BrTableHeaderCell>Nome</BrTableHeaderCell>
    <BrTableHeaderCell>Email</BrTableHeaderCell>
  </BrTableHeaderRow>
  <BrTableRow>
    <BrTableCell>João Silva</BrTableCell>
    <BrTableCell>joao@gov.br</BrTableCell>
  </BrTableRow>
</BrTable>
```

---

### ⚠️ **Componentes de Feedback**

Componentes para feedback ao usuário.

#### **BrLoading** (Carregamento)

Indicador de carregamento.

**Props:**

- `label: string` — Texto exibido
- `isProgress: boolean` — Barra de progresso?
- `progressPercent: number` — Percentual (0-100)
- `isMedium: boolean` — Tamanho médio?

**Exemplo:**

```tsx
<BrLoading label="Carregando..." isProgress={true} progressPercent={45} />
```

#### **BrModal** (Modal)

Diálogo modal para conteúdo importante.

**Props:**

- `show: boolean` — Visível?
- `titleText: string` — Título
- `size: 'xsmall' | 'small' | 'medium' | 'large'` — Tamanho
- `scrollable: boolean` — Rolável?

---

### 🏷️ **Componentes Utilitários**

#### **BrTag** (Rótulo/Badge)

Rótulo para categorizar ou marcar conteúdo.

**Props:**

- `label: string` — Texto
- `bgColor: string` — Cor de fundo
- `density: 'small' | 'medium' | 'large'` — Tamanho
- `status: boolean` — Modo status?
- `shape: 'default' | 'rounded' | 'circle'` — Forma

#### **BrIcon** (Ícone)

Ícone via biblioteca Iconify.

**Props:**

- `iconName: string` — Nome do ícone (ex: `fa6-solid:home`)
- `width: string` — Largura
- `height: string` — Altura
- `rotate: '90deg' | '180deg' | '270deg'` — Rotação
- `flip: 'horizontal' | 'vertical'` — Espelhamento

#### **BrDivider** (Divisor)

Separador visual.

**Props:**

- `orientation: 'horizontal' | 'vertical'` — Orientação
- `thickness: 'small' | 'medium' | 'large'` — Espessura
- `color: string` — Cor

---

## 📖 Referência de Props e Eventos

### Props Comuns em Componentes

| Propriedade | Tipo                                         | Padrão   | Descrição              |
| ----------- | -------------------------------------------- | -------- | ---------------------- |
| `customId`  | string                                       | Auto     | ID único do componente |
| `disabled`  | boolean                                      | false    | Desabilitar componente |
| `density`   | 'small' \| 'medium' \| 'large'               | 'medium' | Tamanho/espaçamento    |
| `state`     | 'info' \| 'warning' \| 'danger' \| 'success' | 'info'   | Estado visual          |

### Eventos Comuns

```typescript
// Eventos de mudança
onValueChange; // Valor mudou
onCheckedChange; // Checkbox/Radio mudou
onStateChange; // Estado mudou

// Eventos de interação
onClick; // Clicado
onFocus; // Recebeu foco
onBlur; // Perdeu foco

// Eventos customizados (BrButton, BrItem, etc)
onBrClick; // Clique no componente
onBrDidClick; // Clique confirmado
onBrDidSelect; // Item selecionado
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Formulário Simples

```tsx
import { BrInput, BrButton, BrMessage } from "@govbr-ds/webcomponents-react";
import { useState } from "react";

export function SimpleForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <BrInput
        label="Email"
        type="email"
        value={email}
        state={email ? "success" : "info"}
      />

      <BrButton emphasis="primary" onClick={handleSubmit}>
        Enviar
      </BrButton>

      {submitted && (
        <BrMessage
          message="Enviado com sucesso!"
          state="success"
          showIcon={true}
        />
      )}
    </div>
  );
}
```

### Exemplo 2: Dashboard com Navegação

```tsx
import {
  BrCard,
  BrButton,
  BrList,
  BrItem,
} from "@govbr-ds/webcomponents-react";
import { useState } from "react";

export function Dashboard() {
  const [section, setSection] = useState("overview");

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <BrList header="Navegação">
        <BrItem
          onClick={() => setSection("overview")}
          isActive={section === "overview"}
        >
          Visão Geral
        </BrItem>
        <BrItem
          onClick={() => setSection("analytics")}
          isActive={section === "analytics"}
        >
          Análise
        </BrItem>
      </BrList>

      <main>
        {section === "overview" && (
          <BrCard>
            <div slot="header">
              <h2>Visão Geral</h2>
            </div>
            <div slot="content">
              <p>Dados gerais do sistema</p>
            </div>
          </BrCard>
        )}

        {section === "analytics" && (
          <BrCard>
            <div slot="header">
              <h2>Análise</h2>
            </div>
            <div slot="content">
              <p>Gráficos e estatísticas</p>
            </div>
          </BrCard>
        )}
      </main>
    </div>
  );
}
```

---

## 🎨 Padrões e Boas Práticas

### 1. **Sempre use Slots para Conteúdo Complexo**

❌ Não recomendado:

```tsx
<BrCard>Conteúdo direto</BrCard>
```

✅ Recomendado:

```tsx
<BrCard>
  <div slot="content">Conteúdo estruturado</div>
</BrCard>
```

### 2. **Use TypeScript para Tipagem**

```tsx
interface ButtonProps {
  emphasis: "primary" | "secondary" | "tertiary";
  onClick: () => void;
  children: React.ReactNode;
}
```

### 3. **Organize Componentes por Pasta**

```
src/
├── components/
│   ├── Header/
│   ├── Menu/
│   ├── Forms/
│   └── Dashboard/
├── pages/
├── hooks/
└── styles/
```

### 4. **Use Custom Hooks para Lógica Compartilhada**

```typescript
// hooks/useMenu.ts
export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
}
```

### 5. **Respeite a Responsividade**

```tsx
// Use classes CSS para responsividade
<div className="responsive-grid">
  <BrCard>...</BrCard>
  <BrCard>...</BrCard>
</div>
```

```css
@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔗 Recursos Úteis

### Documentação Oficial

- **Site GovBR-DS**: https://gov.br/ds
- **Storybook**: https://webcomponent-ds.estaleiro.serpro.gov.br/
- **Repositório**: https://gitlab.com/govbr-ds/

### Ícones

- **Font Awesome**: https://fontawesome.com
- **Iconify**: https://iconify.design/

### Aprendizado

- **Web Components MDN**: https://developer.mozilla.org/Web_Components
- **Stencil Docs**: https://stenciljs.com/
- **React Docs**: https://react.dev/

### Comunidade

- **Discord GovBR-DS**: https://discord.gg/U5GwPfqhUP
- **Issues**: Reporte bugs no GitLab

---

## ✅ Checklist de Implementação

- [ ] Instalar todas as dependências
- [ ] Importar estilos em `main.tsx`
- [ ] Estruturar layout com `BrHeader` e `BrMenu`
- [ ] Implementar formulários com validação
- [ ] Criar páginas/seções usando `BrTab`
- [ ] Adicionar feedback com `BrMessage` e `BrLoading`
- [ ] Testar responsividade em mobile
- [ ] Verificar acessibilidade (teclado, leitores de tela)
- [ ] Implementar dark mode
- [ ] Documentar componentes customizados

---

**Última atualização**: 21 de janeiro de 2026
**Versão GovBR-DS**: 2.0.0-next.57
