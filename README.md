# React – @govbr-ds/webcomponents-react

[![npm (next)](https://img.shields.io/npm/v/@govbr-ds/webcomponents-react/next.svg)](https://www.npmjs.com/package/@govbr-ds/webcomponents-react)

Este é um wrapper React que encapsula os [Web Components GovBR-DS](https://gov.br/ds/webcomponents), permitindo seu uso como componentes nativos do React.

## Por que usar este wrapper? 🤔

- **Bindings JSX** para props/eventos.
- **Tipagens e autocomplete** nos IDEs.
- **Soluciona limitações** de passagem de objetos/arrays e captura de eventos em custom elements no React.

Para mais detalhes, consulte a [documentação oficial do Stencil](https://stenciljs.com/docs/react) e o [Custom Elements Everywhere](https://custom-elements-everywhere.com/#react).

## Instalação 📦

```bash
npm install @govbr-ds/core @govbr-ds/webcomponents @govbr-ds/webcomponents-react
# ou
pnpm add @govbr-ds/core @govbr-ds/webcomponents @govbr-ds/webcomponents-react
# ou
yarn add @govbr-ds/core @govbr-ds/webcomponents @govbr-ds/webcomponents-react
```

## Nota importante: pnpm e tree-shaking

Se ao consumir estes pacotes você notar que o bundler não está removendo código não utilizado (tree‑shaking), pode haver uma incompatibilidade com o layout padrão do pnpm.

Solução rápida (opcional, somente se precisar): crie um arquivo `.npmrc` na raiz do seu projeto com:

```properties
node-linker=hoisted
```

Por que isso ajuda: por padrão, o pnpm organiza as dependências em pastas isoladas com symlinks. Alguns bundlers/otimizadores se baseiam na estrutura de `node_modules` e no campo `sideEffects` para decidir o que pode ser eliminado. O layout hoisted aproxima o formato “achatado” (similar ao npm/yarn), facilitando essa análise e, em muitos casos, restaurando o tree‑shaking.

Observações:

- Use apenas se o tree‑shaking realmente não estiver funcionando.
- Pode aumentar o uso de disco e alterar a resolução de dependências do seu projeto.

## Uso 📚

### Fontes e ícones

Importe os estilos base no CSS global do app:

```css
@import '~@govbr-ds/core/dist/core-tokens.min.css';
```

### Exemplo

```tsx
import React from 'react'
import { BrButton } from '@govbr-ds/webcomponents-react'

function App() {
  const handleButtonClick = (ev: CustomEvent) => {
    console.log(ev.detail)
  }

  return (
    <BrButton emphasis="primary" onBrClick={handleButtonClick}>
      Clique aqui
    </BrButton>
  )
}

export default App
```

## Desenvolvimento 👨‍💻

### Estrutura do projeto

```plaintext
├── 📁 src
│   ├── 📁 stencil-generated
│   └── 📄 index.ts
├── 📁 ssr
│   ├── 📁 stencil-generated
│   └── 📄 index.ts
```

> [!WARNING]
> Tudo dentro de `stencil-generated` é sobrescrito ao gerar o build de Web Components.

### Scripts/Build

Gere os Web Components antes de compilar o wrapper:

```bash
nx build webcomponents
nx build react
```

**Gerenciar baseline de tamanho:**

```bash
# Da raiz do monorepo:
pnpm run baseline:update:react    # Atualizar baseline
pnpm run baseline:compare:react   # Comparar com baseline atual
```

## Documentações Complementares 📖

- Wiki: [gov.br/ds/wiki/desenvolvimento/web-components](https://gov.br/ds/wiki/desenvolvimento/web-components)
- MDN Web Components: [developer.mozilla.org/Web_Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)

## Contribuindo 🤝

- Padrões e boas práticas: [gov.br/ds/wiki](https://gov.br/ds/wiki/)
- Como contribuir: [contribuindo com o DS](https://gov.br/ds/wiki/comunidade/contribuindo-com-o-ds/)

## Reportar Bugs/Problemas 🐛

Abra uma issue: [gitlab.com/.../issues/new](https://gitlab.com/govbr-ds/bibliotecas/wbc/govbr-ds-wbc/-/issues/new)

## Commits 📝

Padrões de branches e commits: [gov.br/ds/wiki](https://gov.br/ds/wiki/)

## Precisa de ajuda? 🆘

- Site: [gov.br/ds](http://gov.br/ds)
- Web Components: [gov.br/ds/webcomponents](https://gov.br/ds/webcomponents)
- Discord: [discord.gg/U5GwPfqhUP](https://discord.gg/U5GwPfqhUP)

## Créditos 🎉

Desenvolvido pelo [SERPRO](https://www.serpro.gov.br/) com a comunidade.
