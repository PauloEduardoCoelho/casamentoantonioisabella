import React from "react";

export default function App(){
  const COUPLE = "Isabella & Antonio";
  const CEREMONY_DATE_ISO = "2025-12-13T10:00:00-03:00";
  const VENUE = "Espaço de Festas Quintal do Zé Alencar";
  const ADDRESS = "Tv. Maria Gomes - Madruga, Vassouras - RJ, 27700-000";
  const PIX_KEY = "185.848.267-42";

  const gifts = [
    {
      id: "50",
      title: "Toma aqui uns 50,00",
      price: 50.00,
      img: "/images/50.png",
    },
    {
      id: "aluguel",
      title: "Aluguel de bebê para treinamento",
      price: 150.00,
      img: "/images/aluguel.png",
    },
    {
      id: "aposentadoria",
      title: "Ajuda para aposentadoria dos noivos",
      price: 190.00,
      img: "/images/aposentadoria.png",
    },
    {
      id: "ar",
      title: "Cofrinho para o casal comprar um ar-condicionado (e salvar o verão)",
      price: 250.00,
      img: "/images/ar.png",
    },
    {
      id: "boleto",
      title: "Adote um boleto vencido",
      price: 160.00,
      img: "/images/boleto.png",
    },
    {
      id: "buffet",
      title: "Primeiro lugar na fila do buffet",
      price: 310.00,
      img: "/images/buffet.png",
    },
    {
      id: "churrasco",
      title: "Contribuição para o kit churrasco do noivo (e da galera)",
      price: 230.00,
      img: "/images/churrasco.png",
    },
    {
      id: "delivery",
      title: "Fundo para o delivery quando ninguém quiser cozinhar",
      price: 180.00,
      img: "/images/delivery.png",
    },
    {
      id: "deus",
      title: "Deus tocou no seu coração",
      price: 510.00,
      img: "/images/deus.png",
    },
    {
      id: "divina",
      title: "Se por uma intervenção divina você se sentir tocado",
      price: 1000.00,
      img: "/images/divina.png",
    },
    {
      id: "filhos",
      title: "Cota para perguntar quando vem os filhos",
      price: 290.00,
      img: "/images/filhos.png",
    },
    {
      id: "lava",
      title: "Kit lava e seca (porque a máquina não seca sozinha)",
      price: 270.00,
      img: "/images/lava.png",
    },
    {
      id: "look",
      title: "Amo vocês, mas gastei o dinheiro no look",
      price: 70.00,
      img: "/images/look.png",
    },
    {
      id: "lua",
      title: "Ajuda para os noivos pagarem a lua de mel",
      price: 390.00,
      img: "/images/lua.png",
    },
    {
      id: "luz",
      title: "Ajuda para o casal pagar a conta de luz do ar-condicionado no verão",
      price: 210.00,
      img: "/images/divina.png",
    },
    {
      id: "nada",
      title: "Só para não dizer que não dei nada",
      price: 52.00,
      img: "/images/nada.png",
    },
    {
      id: "razao",
      title: "Cobertor para o noivo estar coberto de razão",
      price: 90.00,
      img: "/images/razao.png",
    },
    {
      id: "ronco",
      title: "Kit tampão de ouvidos para a noiva não ouvir o ronco do noivo",
      price: 70.00,
      img: "/images/ronco.png",
    },
    {
      id: "roupa",
      title: "Ajuda para a noiva renovar o guarda-roupa do noivo (since 2015)",
      price: 170.00,
      img: "/images/roupa.png",
    },
    {
      id: "shopee",
      title: "Vale compras da Shopee para a noiva",
      price: 110.00,
      img: "/images/shopee.png",
    },
    {
      id: "visita",
      title: "Fundo emergencial para visitas inesperadas (Brincadeira)",
      price: 130.00,
      img: "/images/visita.png",
    },
  ];

  const [copied, setCopied] = React.useState(false);
  const [rsvpSent, setRsvpSent] = React.useState(false);

  const scrollToId = (id) => {
  const el = document.getElementById(id);
  const headerHeight = document.querySelector(".navbar").offsetHeight;
  if (el) {
    window.scrollTo({
      top: el.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
};

  const payPix = async (gift) => {
    if (!PIX_KEY) {
      alert("Defina a sua CHAVE PIX no topo do arquivo (const PIX_KEY) para habilitar este botão.");
      return;
    }
    try{
      const msg = `${COUPLE} — Presente: ${gift.title} (R$ ${gift.price.toFixed(2)}) — CHAVE PIX: ${PIX_KEY}`;
      await navigator.clipboard.writeText(msg);
      setCopied(true);
      setTimeout(()=>setCopied(false), 2000);
      alert("Chave PIX copiada! Cole no app do seu banco para concluir o pagamento.");
    }catch(e){
      alert(`Chave PIX: ${PIX_KEY}\n\nPresente: ${gift.title} — R$ ${gift.price.toFixed(2)}`);
    }
  };

  const payCard = (gift) => {
    alert(`Pagamento por cartão em breve.\n\nPresente: ${gift.title} — R$ ${gift.price.toFixed(2)}`);
  };

  const onSubmitRSVP = async (e) => {
    e.preventDefault();

    const nomeConvite = e.target.nomeConvite.value;
    const email = e.target.email.value;
    const telefone = e.target.telefone.value;
    const adultos = e.target.adultos.value;
    const criancas = e.target.criancas.value;
    const mensagem = e.target.mensagem.value;

    const formData = new URLSearchParams();
    formData.append("nomeConvite", nomeConvite);
    formData.append("email", email);
    formData.append("telefone", telefone);
    formData.append("adultos", adultos);
    formData.append("criancas", criancas);
    formData.append("mensagem", mensagem);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwaLVG-c7xQhGRsHPukpVkbdVKNY8Tugilb2iTfn3emmNoi4qI8tA_NVaBY__d8K64/exec", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.result === "success") {
        setRsvpSent(true);
      } else {
        alert("Erro ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao enviar os dados.");
    }
  };

  React.useEffect(() => {
    const ids = ["presenteie", "rsvp", "convite", "como-chegar"];
    const entries = ids.map((id) => ({
      id,
      el: document.getElementById(id),
      btn: null,
    }));
    const btns = document.querySelectorAll(".nav-link");
    entries.forEach((ent) => {
      ent.btn = Array.from(btns).find((b) => (b.onclick?.toString() || "").includes(ent.id));
    });

    const obs = new IntersectionObserver((obsEntries) => {
      obsEntries.forEach((e) => {
        const ent = entries.find((x) => x.el === e.target);
        if (!ent || !ent.btn) return;
        if (e.isIntersecting) {
          document.querySelectorAll(".nav-link").forEach((b) => b.classList.remove("is-active"));
          ent.btn.classList.add("is-active");
        }
      });
    }, {
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0.01,
    });

    entries.forEach((ent) => ent.el && obs.observe(ent.el));
    return () => obs.disconnect();
  }, []);

  const [remaining, setRemaining] = React.useState(calcRemaining(CEREMONY_DATE_ISO));
  React.useEffect(()=>{
    const t = setInterval(()=> setRemaining(calcRemaining(CEREMONY_DATE_ISO)), 1000);
    return ()=>clearInterval(t);
  }, [CEREMONY_DATE_ISO]);

  return (
    <div>
      <header className="navbar">
        <div className="navwrap">
          <button onClick={()=>scrollToId("convite")} className="brand" aria-label="Ir ao topo">
            <span className="brand-dot" />
            <span>{COUPLE}</span>
          </button>

          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            onClick={()=>{
              const nav = document.getElementById("main-nav");
              nav.classList.toggle("is-open");
            }}
          >
            <span></span>
          </button>

          <ul id="main-nav" className="nav">
            <li><button onClick={()=>scrollToId("presenteie")} className="nav-link">Presenteie o Casal</button></li>
            <li><button onClick={()=>scrollToId("rsvp")} className="nav-link">Confirme a Presença</button></li>
            <li><button onClick={()=>scrollToId("convite")} className="nav-link">Convite</button></li>
            <li><button onClick={()=>scrollToId("como-chegar")} className="nav-link">Como Chegar</button></li>
          </ul>
        </div>
      </header>

      <section id="convite" className="hero">
        <div className="container grid2 gap-6 section">
          <div>
            <h1 className="title">
              <span className="text-oliva">{COUPLE}</span><br/>13 de dezembro de 2025
            </h1>
            <p className="lead">
              É com enorme alegria que convidamos você para celebrar o amor
              conosco. Venha brindar, dançar e viver esse dia inesquecível.
            </p>

            <div className="countdown" aria-label="Contagem regressiva">
              <CdBox n={remaining.days} label="dias" />
              <CdBox n={remaining.hours} label="horas" />
              <CdBox n={remaining.minutes} label="min" />
              <CdBox n={remaining.seconds} label="seg" />
            </div>

            <div className="row gap-3">
              <a href="#rsvp" onClick={(e)=>{e.preventDefault(); scrollToId("rsvp");}} className="btn btn-primary">Confirmar Presença</a>
              <a href="#presenteie" onClick={(e)=>{e.preventDefault(); scrollToId("presenteie");}} className="btn btn-ghost">Presentear</a>
            </div>
          </div>
          <div>
            <div className="card-hero">
              <InvitationCard couple={COUPLE} />
            </div>
          </div>
        </div>
      </section>

      <section id="presenteie" className="section bg-white">
        <div className="container">
          <h2 className="h2 mb-2">Presenteie o Casal</h2>
          <p className="mb-8">Escolha um presente para Isabella e Antonio. Ao clicar, você poderá pagar via Pix ou cartão.</p>

          <div className="grid3 gap-6">
            {gifts.map(g => (
              <article key={g.id} className="gift-card">
                <img className="gift-media" src={g.img} alt={g.title} loading="lazy" />
                <div className="gift-body">
                  <h3 className="gift-title">{g.title}</h3>
                  <p className="gift-price">R$ {g.price.toFixed(2)}</p>
                  <div className="gift-actions">
                    <button className="btn btn-primary" onClick={()=>payPix(g)}>
                      Pagar com Pix {copied ? "✓" : ""}
                    </button>
                    <button className="btn btn-ghost" onClick={()=>payCard(g)}>
                      Pagar com Cartão
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="section">
        <div className="container narrow">
          <h2 className="h2 mb-2">Confirme a Presença</h2>
          <p>Por favor, preencha seus dados. Entraremos em contato com mais informações e detalhes próximos à data.</p>

          {rsvpSent ? (
            <div className="notice">
              <p className="ok">🎉 Obrigado! Sua presença foi registrada.</p>
            </div>
          ) : (
            <form onSubmit={onSubmitRSVP} className="grid2 gap-4">
              <label className="muted span2">Nome do convite (Ex.: Tia Ana e Família)
                <input name="nomeConvite" required className="input mt-1" />
              </label>

              <label className="muted">E-mail
                <input 
                  type="email" 
                  name="email"
                  required 
                  className="input mt-1" 
                  placeholder="email@exemplo.com" 
                />
              </label>
              
              <label className="muted">Telefone para contato
                <input 
                  type="tel" 
                  name="telefone"
                  required 
                  className="input mt-1" 
                  placeholder="(24) 99123-4567" 
                />
              </label>
              
              <label className="muted">Quantidade de adultos incluindo você
                <input 
                  type="number" 
                  name="adultos"
                  min={0} 
                  defaultValue={0} 
                  className="input mt-1" 
                />
              </label>
              
              <label className="muted">Quantidade de crianças
                <input 
                  type="number" 
                  name="criancas"
                  min={0} 
                  defaultValue={0} 
                  className="input mt-1" 
                />
              </label>
              
              <label className="muted span2">Mensagem (opcional)
                <textarea 
                  rows={4} 
                  name="mensagem"
                  className="textarea mt-1" 
                />
              </label>
              <div className="span2">
                <button type="submit" className="btn btn-primary full">Enviar Confirmação</button>
              </div>
            </form>

          )}
        </div>
      </section>

      <section id="como-chegar" className="section bg-white">
        <div className="container">
          <h2 className="h2 mb-2">Como Chegar</h2>
          <p>A cerimônia e a recepção serão no <strong>{VENUE}</strong>. Chegue com 30 minutos de antecedência para acomodação.</p>

          <div className="grid2 gap-6">
            <div className="card">
              <h3 className="mb-2">Endereço</h3>
              <p className="muted">{ADDRESS}</p>
              <div className="row gap-2 mt-3">
                <a className="btn btn-ghost"
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                   target="_blank" rel="noreferrer">Abrir no Google Maps</a>
                <a className="btn btn-ghost" href="https://waze.com/ul" target="_blank" rel="noreferrer">Abrir no Waze</a>
              </div>
            </div>

            <div className="map">
              <iframe
                title="Mapa"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container row between">
          <p className="muted">© {new Date().getFullYear()} {COUPLE}</p>
          <p className="muted"></p>
        </div>
      </footer>
    </div>
  );
}

function InvitationCard({ couple }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const headerHeight = document.querySelector(".navbar").offsetHeight;
    if (el) {
      window.scrollTo({
        top: el.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="card center" style={{ textAlign: "center" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "999px",
          margin: "0 auto 1rem",
          background: "color-mix(in srgb, var(--oliva) 15%, transparent)",
        }}
      />
      <h2>Convite</h2>
      <p className="muted">
        Com as bênçãos de nossas famílias, convidamos você para celebrar o
        casamento de <strong>{couple.split("&")[0].trim()}</strong> e{" "}
        <strong>{couple.split("&")[1].trim()}</strong> no dia
        <strong> 13/12/2025</strong>, às <strong>10h</strong>.
      </p>
      <div
        style={{
          width: 96,
          height: 1,
          background: "var(--areia)",
          margin: "16px auto",
        }}
      />
      <p className="muted">
        Local: Espaço de Festas Quintal do Zé Alencar — Tv. Maria Gomes -
        Madruga, Vassouras - RJ
      </p>
      <div className="row gap-3 center" style={{ marginTop: 16 }}>
        <button
          onClick={() => scrollToSection("rsvp")}
          className="btn btn-ghost"
        >
          Confirmar Presença
        </button>
        <button
          onClick={() => scrollToSection("como-chegar")}
          className="btn btn-primary"
        >
          Como Chegar
        </button>
      </div>
    </div>
  );
}

function CdBox({n,label}){
  const val = String(n ?? 0).padStart(2,"0");
  return (
    <div className="cd-box" role="status" aria-live="polite">
      <div className="cd-num">{val}</div>
      <div className="cd-label">{label}</div>
    </div>
  );
}

function calcRemaining(targetISO){
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  let diff = Math.max(0, target - now);
  const days = Math.floor(diff / (24*60*60*1000)); diff -= days*24*60*60*1000;
  const hours = Math.floor(diff / (60*60*1000)); diff -= hours*60*60*1000;
  const minutes = Math.floor(diff / (60*1000)); diff -= minutes*60*1000;
  const seconds = Math.floor(diff / 1000);
  return {days,hours,minutes,seconds};
}
