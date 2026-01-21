import { useState } from "react";
import {
  BrButton,
  BrCard,
  BrInput,
  BrMessage,
  BrTab,
  BrTabItem,
} from "@govbr-ds/webcomponents-react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app-container">
      {/* HEADER GOVBR */}
      <header className="br-header">
        <div className="header-bottom">
          <div className="header-menu">
            <button
              className="menu-trigger fas-btn"
              onClick={handleMenuToggle}
              aria-label="Abrir menu"
            >
              <i className={`fas fa-${menuOpen ? "times" : "bars"}`}></i>
            </button>
            <h1 className="header-title">Template GovBR-DS</h1>
            <p className="header-subtitle">Exemplos de componentes e padrões</p>
          </div>
        </div>
      </header>

      {/* MENU LATERAL */}
      <div className={`br-menu ${menuOpen ? "open" : ""}`} id="main-menu">
        <div className="menu-container">
          <div className="menu-scrim" onClick={handleMenuToggle}></div>
          <nav className="menu-panel">
            <div className="menu-header">
              <div className="menu-close">
                <button
                  className="menu-close-btn fas-btn"
                  onClick={handleMenuToggle}
                  aria-label="Fechar menu"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <h2 className="menu-title">Menu Principal</h2>
            </div>

            <nav className="menu-body">
              <div className="menu-folder">
                <div
                  className={`menu-item ${
                    activeSection === "dashboard" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveSection("dashboard");
                    setMenuOpen(false);
                  }}
                >
                  <span className="icon">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="content">Dashboard</span>
                </div>
              </div>
              <div className="menu-folder">
                <div
                  className={`menu-item ${
                    activeSection === "components" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveSection("components");
                    setMenuOpen(false);
                  }}
                >
                  <span className="icon">
                    <i className="fas fa-cube"></i>
                  </span>
                  <span className="content">Componentes</span>
                </div>
              </div>
              <div className="menu-folder">
                <div
                  className={`menu-item ${
                    activeSection === "forms" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveSection("forms");
                    setMenuOpen(false);
                  }}
                >
                  <span className="icon">
                    <i className="fas fa-wpforms"></i>
                  </span>
                  <span className="content">Formulários</span>
                </div>
              </div>
              <div className="menu-folder">
                <div
                  className={`menu-item ${
                    activeSection === "insights" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveSection("insights");
                    setMenuOpen(false);
                  }}
                >
                  <span className="icon">
                    <i className="fas fa-book"></i>
                  </span>
                  <span className="content">Documentação</span>
                </div>
              </div>
            </nav>
          </nav>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="app-content">
        <main className="main-content">
          {/* DASHBOARD */}
          {activeSection === "dashboard" && (
            <section className="section-dashboard">
              <div className="section-header">
                <h2>Dashboard</h2>
                <p>Visão geral do projeto e componentes disponíveis</p>
              </div>

              <BrMessage
                message="Este é um template funcional usando componentes do GovBR-DS com React"
                messageTitle="Bem-vindo ao GovBR-DS!"
                state="info"
              ></BrMessage>

              <div className="cards-grid">
                <BrCard hover={true}>
                  <div slot="header">
                    <h3>Web Components</h3>
                  </div>
                  <div slot="content">
                    <p>Componentes baseados em Stencil.js com suporte React</p>
                    <BrButton
                      emphasis="secondary"
                      onClick={() => setActiveSection("components")}
                    >
                      Explorar
                    </BrButton>
                  </div>
                </BrCard>

                <BrCard hover={true}>
                  <div slot="header">
                    <h3>Formulários</h3>
                  </div>
                  <div slot="content">
                    <p>Entrada de dados com validação e feedback</p>
                    <BrButton
                      emphasis="secondary"
                      onClick={() => setActiveSection("forms")}
                    >
                      Exemplos
                    </BrButton>
                  </div>
                </BrCard>

                <BrCard hover={true}>
                  <div slot="header">
                    <h3>Documentação</h3>
                  </div>
                  <div slot="content">
                    <p>Referência completa de componentes e padrões</p>
                    <BrButton
                      emphasis="secondary"
                      onClick={() => setActiveSection("insights")}
                    >
                      Consultar
                    </BrButton>
                  </div>
                </BrCard>
              </div>
            </section>
          )}

          {/* COMPONENTES */}
          {activeSection === "components" && (
            <section className="section-components">
              <div className="section-header">
                <h2>Componentes GovBR-DS</h2>
                <p>Explorar e testar componentes disponíveis</p>
              </div>

              <BrTab label="Abas de Navegação">
                <BrTabItem tabItemTitle="Botões" isActive={true}>
                  <div className="tab-content">
                    <h3>Botões</h3>
                    <div className="button-grid">
                      <div className="button-group">
                        <p>Primary</p>
                        <BrButton emphasis="primary">Primário</BrButton>
                      </div>
                      <div className="button-group">
                        <p>Secondary</p>
                        <BrButton emphasis="secondary">Secundário</BrButton>
                      </div>
                      <div className="button-group">
                        <p>Tertiary</p>
                        <BrButton emphasis="tertiary">Terciário</BrButton>
                      </div>
                    </div>

                    <h4 style={{ marginTop: "2rem" }}>Densidades</h4>
                    <div className="button-grid">
                      <div className="button-group">
                        <p>Small</p>
                        <BrButton emphasis="primary" density="small">
                          Small
                        </BrButton>
                      </div>
                      <div className="button-group">
                        <p>Medium</p>
                        <BrButton emphasis="primary" density="medium">
                          Medium
                        </BrButton>
                      </div>
                      <div className="button-group">
                        <p>Large</p>
                        <BrButton emphasis="primary" density="large">
                          Large
                        </BrButton>
                      </div>
                    </div>
                  </div>
                </BrTabItem>

                <BrTabItem tabItemTitle="Cards">
                  <div className="tab-content">
                    <h3>Cards</h3>
                    <div className="cards-grid">
                      <BrCard hover={true}>
                        <div slot="header">
                          <h4>Card Normal</h4>
                        </div>
                        <div slot="content">
                          <p>Exemplo de card com conteúdo</p>
                        </div>
                      </BrCard>

                      <BrCard hover={true} disabled={false}>
                        <div slot="header">
                          <h4>Card com Ações</h4>
                        </div>
                        <div slot="content">
                          <p>Card interativo com botões</p>
                          <BrButton emphasis="secondary" density="small">
                            Ação
                          </BrButton>
                        </div>
                      </BrCard>
                    </div>
                  </div>
                </BrTabItem>

                <BrTabItem tabItemTitle="Mensagens">
                  <div className="tab-content">
                    <h3>Mensagens</h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BrMessage
                        message="Mensagem informativa do sistema"
                        messageTitle="Informação"
                        state="info"
                      ></BrMessage>
                      <BrMessage
                        message="Atenção: verifique as configurações"
                        messageTitle="Aviso"
                        state="warning"
                      ></BrMessage>
                      <BrMessage
                        message="Operação realizada com sucesso!"
                        messageTitle="Sucesso"
                        state="success"
                      ></BrMessage>
                    </div>
                  </div>
                </BrTabItem>
              </BrTab>
            </section>
          )}

          {/* FORMULÁRIOS */}
          {activeSection === "forms" && (
            <section className="section-forms">
              <div className="section-header">
                <h2>Formulários</h2>
                <p>Exemplos de entrada de dados e validação</p>
              </div>

              <BrCard>
                <div slot="header">
                  <h3>Formulário Exemplo</h3>
                </div>
                <div slot="content">
                  <form className="form-group">
                    <BrInput
                      label="Nome Completo"
                      placeholder="Digite seu nome"
                      type="text"
                      state="info"
                    ></BrInput>

                    <BrInput
                      label="Email"
                      placeholder="seu.email@gov.br"
                      type="email"
                      state="info"
                    ></BrInput>

                    <BrInput
                      label="Telefone"
                      placeholder="(11) 98765-4321"
                      type="tel"
                      state="info"
                    ></BrInput>

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "2rem",
                      }}
                    >
                      <BrButton emphasis="primary" type="submit">
                        Enviar
                      </BrButton>
                      <BrButton emphasis="secondary" type="reset">
                        Limpar
                      </BrButton>
                    </div>
                  </form>
                </div>
              </BrCard>
            </section>
          )}

          {/* DOCUMENTAÇÃO */}
          {activeSection === "insights" && (
            <section className="section-insights">
              <div className="section-header">
                <h2>Documentação & Insights</h2>
                <p>Referência completa de componentes e boas práticas</p>
              </div>

              <BrCard>
                <div slot="header">
                  <h3>Guia de Componentes</h3>
                </div>
                <div slot="content">
                  <p>
                    Consulte o arquivo <code>src/insights.md</code> para uma
                    documentação completa incluindo:
                  </p>
                  <ul>
                    <li>Lista de todos os componentes disponíveis</li>
                    <li>Props e eventos de cada componente</li>
                    <li>Exemplos de uso em React</li>
                    <li>Padrões de layout e boas práticas</li>
                    <li>Temas e customização de estilos</li>
                  </ul>
                </div>
              </BrCard>

              <BrCard style={{ marginTop: "2rem" }}>
                <div slot="header">
                  <h3>Recuros Úteis</h3>
                </div>
                <div slot="content">
                  <ul>
                    <li>
                      <strong>Documentação Oficial:</strong>{" "}
                      <a
                        href="https://gov.br/ds"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        gov.br/ds
                      </a>
                    </li>
                    <li>
                      <strong>Storybook:</strong>{" "}
                      <a
                        href="https://webcomponent-ds.estaleiro.serpro.gov.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        webcomponent-ds.estaleiro.serpro.gov.br
                      </a>
                    </li>
                    <li>
                      <strong>Font Awesome:</strong>{" "}
                      <a
                        href="https://fontawesome.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        fontawesome.com
                      </a>
                    </li>
                  </ul>
                </div>
              </BrCard>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
