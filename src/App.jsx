import React from "react";

export default function App(){
  const COUPLE = "Antonio & Isabella";
  const CEREMONY_DATE_ISO = "2025-12-13T10:30:00-03:00";
  const VENUE = "Espaço de Festas Quintal do Zé Alencar";
  const ADDRESS = "Tv. Maria Gomes - Madruga, Vassouras - RJ, 27700-000";
  const PIX_KEY = "185.848.267-42";
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbym9Laz53Yap0gCmRNV6_xyrxPyxhEIXLrZczYz9CatN2asZwk6ztRkjgweq55kTZE/exec";

  const gifts = [
    {
      id: "50",
      title: "Toma aqui uns 50,00",
      price: 50.00,
      img: "/images/50.png",
      pix: {
        payload: "00020126330014BR.GOV.BCB.PIX01111462755976352040000530398654041.005802BR5925Antonio Paulo de Oliveira6009SAO PAULO62140510e3KmNczbBZ6304BB01",
      },
      card: { url: "https://seu.link/pagar/50" },
    },
    {
      id: "aluguel",
      title: "Aluguel de bebê para treinamento",
      price: 180.00,
      img: "/images/aluguel.png",
      card: { url: "https://seu.link/pagar/aluguel" },
    },
    {
      id: "alexa",
      title: "Alexa (para a noiva não mandar só no noivo)",
      price: 240.00,
      img: "/images/alexa.png",
      card: { url: "https://seu.link/pagar/alexa" },
    },
    {
      id: "aposentadoria",
      title: "Ajuda para aposentadoria dos noivos",
      price: 190.00,
      img: "/images/aposentadoria.png",
      card: { url: "https://seu.link/pagar/aposentadoria" },
    },
    {
      id: "ar",
      title: "Cofrinho para o casal comprar um ar-condicionado (e salvar o verão)",
      price: 250.00,
      img: "/images/ar.png",
      card: { url: "https://seu.link/pagar/ar" },
    },
    {
      id: "boleto",
      title: "Adote um boleto vencido",
      price: 160.00,
      img: "/images/boleto.png",
      card: { url: "https://seu.link/pagar/boleto" },
    },
    {
      id: "buffet",
      title: "Primeiro lugar na fila do buffet",
      price: 310.00,
      img: "/images/buffet.png",
      card: { url: "https://seu.link/pagar/buffet" },
    },
    {
      id: "churrasco",
      title: "Contribuição para o kit churrasco do noivo (e da galera)",
      price: 140.00,
      img: "/images/churrasco.png",
      card: { url: "https://seu.link/pagar/churrasco" },
    },
    {
      id: "delivery",
      title: "Fundo para o delivery quando ninguém quiser cozinhar",
      price: 150.00,
      img: "/images/delivery.png",
      card: { url: "https://seu.link/pagar/delivery" },
    },
    {
      id: "deus",
      title: "Deus tocou no seu coração",
      price: 510.00,
      img: "/images/deus.png",
      card: { url: "https://seu.link/pagar/deus" },
    },
    {
      id: "divina",
      title: "Se por uma intervenção divina você se sentir tocado",
      price: 800.00,
      img: "/images/divina.png",
      card: { url: "https://seu.link/pagar/divina" },
    },
    {
      id: "filhos",
      title: "Cota para perguntar quando vem os filhos",
      price: 250.00,
      img: "/images/filhos.png",
      card: { url: "https://seu.link/pagar/filhos" },
    },
    {
      id: "lava",
      title: "Kit lava e seca (porque a máquina não seca sozinha)",
      price: 220.00,
      img: "/images/lava.png",
      card: { url: "https://seu.link/pagar/lava" },
    },
    {
      id: "look",
      title: "Amo vocês, mas gastei o dinheiro no look",
      price: 60.00,
      img: "/images/look.png",
      card: { url: "https://seu.link/pagar/look" },
    },
    {
      id: "junto",
      title: "Poder ir junto com os noivos para a lua de mel",
      price: 20000,
      img: "/images/junto.png",
      card: { url: "https://seu.link/pagar/junto" },
    },
    {
      id: "lua",
      title: "Ajuda para os noivos pagarem a lua de mel",
      price: 400.00,
      img: "/images/lua.png",
      card: { url: "https://seu.link/pagar/lua" },
    },
    {
      id: "luz",
      title: "Ajuda para o casal pagar a conta de luz do ar-condicionado no verão",
      price: 210.00,
      img: "/images/divina.png",
      card: { url: "https://seu.link/pagar/luz" },
    },
    {
      id: "massagem",
      title: "Massagem relaxante para o noivo depois de ver a conta do casamento",
      price: 200.00,
      img: "/images/massagem.png",
      card: { url: "https://seu.link/pagar/massagem" },
    },
    {
      id: "nada",
      title: "Só para não dizer que não dei nada",
      price: 52.00,
      img: "/images/nada.png",
      card: { url: "https://seu.link/pagar/nada" },
    },
    {
      id: "razao",
      title: "Cobertor para o noivo estar coberto de razão",
      price: 70.00,
      img: "/images/razao.png",
      card: { url: "https://seu.link/pagar/razao" },
    },
    {
      id: "ronco",
      title: "Kit tampão de ouvidos para a noiva não ouvir o ronco do noivo",
      price: 80.00,
      img: "/images/ronco.png",
      card: { url: "https://seu.link/pagar/ronco" },
    },
    {
      id: "aviao",
      title: "Olha o aviãozinho...",
      price: 90.00,
      img: "/images/aviao.png",
      card: { url: "https://seu.link/pagar/aviao" },
    },
    {
      id: "roupa",
      title: "Ajuda para a noiva renovar o guarda-roupa do noivo (since 2015)",
      price: 170.00,
      img: "/images/roupa.png",
      card: { url: "https://seu.link/pagar/roupa" },
    },
    {
      id: "shopee",
      title: "Vale compras da Shopee para a noiva",
      price: 100.00,
      img: "/images/shopee.png",
      card: { url: "https://seu.link/pagar/shopee" },
    },
    {
      id: "visita",
      title: "Fundo emergencial para visitas inesperadas (Brincadeira)",
      price: 130.00,
      img: "/images/visita.png",
      card: { url: "https://seu.link/pagar/visita" },
    },
  ];

  const [copied, setCopied] = React.useState(false);
  const [rsvpSent, setRsvpSent] = React.useState(false);
  const [giftListOpen, setGiftListOpen] = React.useState(false);
  const [giftOptGift, setGiftOptGift] = React.useState(null);
  const [peopleCount, setPeopleCount] = React.useState(1);

  const [pixOpen, setPixOpen] = React.useState(false);
  const [pixGift, setPixGift] = React.useState(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    const header = document.querySelector(".navbar");
    const headerHeight = header ? header.offsetHeight : 0;
    if (el) {
      window.scrollTo({ top: el.offsetTop - headerHeight, behavior: "smooth" });
    }
  };

  const payPix = async (gift) => {
    if (gift?.pix?.payload) {
      setPixGift(gift);
      setPixOpen(true);
      return;
    }
    if (!PIX_KEY) {
      alert("Defina o Pix Copia e Cola no presente (pix.payload) ou a CHAVE PIX (PIX_KEY).");
      return;
    }
    try {
      const msg = `${COUPLE} — Presente: ${gift.title} (${formatBRL(gift.price)}) — CHAVE PIX: ${PIX_KEY}`;
      await navigator.clipboard.writeText(msg);
      setCopied(true);
      setTimeout(()=>setCopied(false), 2000);
      alert("Chave PIX copiada! Cole no app do seu banco para concluir o pagamento.");
    } catch (e) {
      alert(`Chave PIX: ${PIX_KEY}\n\nPresente: ${gift.title} — ${formatBRL(gift.price)}`);
    }
  };

  const payCard = (gift) => {
    const url = gift?.card?.url;
    if (!url) {
      alert("Link de pagamento por cartão não configurado para este presente.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const onSubmitRSVP = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        body: fd,
        cache: "no-cache",
        redirect: "follow",
      });
      setRsvpSent(true);
      setGiftListOpen(true);
    } catch (err) {
      console.error("Erro ao enviar os dados:", err);
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  };

  React.useEffect(() => {
    const ids = ["presenteie", "rsvp", "convite", "como-chegar"];
    const entries = ids.map((id) => ({ id, el: document.getElementById(id), btn: null }));
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
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });

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
      {pixOpen && (
        <PixModal
          gift={pixGift}
          couple={COUPLE}
          onClose={()=>{ setPixOpen(false); setPixGift(null); }}
        />
      )}

      {giftListOpen && (
        <GiftListModal
          gifts={gifts}
          onClose={()=>setGiftListOpen(false)}
          onChoose={(g)=>{ setGiftOptGift(g); setGiftListOpen(false); }}
        />
      )}

      {giftOptGift && (
        <GiftOptionsModal
          gift={giftOptGift}
          onClose={()=>setGiftOptGift(null)}
          onPix={()=>{ payPix(giftOptGift); setGiftOptGift(null); }}
          onCard={()=>{ payCard(giftOptGift); }}
        />
      )}

      <header className="navbar">
        <div className="navwrap">
          <button onClick={()=>scrollToId("convite")} className="brand" aria-label="Ir ao topo">
            <img src="/images/favicon.ico" alt="" className="brand-icon" />
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
              <span className="text-oliva">{COUPLE}</span><br/>
              <span className="title-date">13 de dezembro de 2025</span>
            </h1>
            <p className="lead">
              Com o coração cheio de amor e gratidão, convidamos nossos queridos amigos e familiares
              para compartilharem conosco um momento único e inesquecível:
              <br/>
              <b className="lead-highlight">O nosso casamento!</b>
            </p>

            <div className="countdown" aria-label="Contagem regressiva">
              <CdBox n={remaining.days} label="dias" />
              <CdBox n={remaining.hours} label="horas" />
              <CdBox n={remaining.minutes} label="min" />
              <CdBox n={remaining.seconds} label="seg" />
            </div>

            <div className="row gap-3">
              <a href="#rsvp" onClick={(e)=>{e.preventDefault(); scrollToId("rsvp");}} className="btn btn-primary">Confirmar Presença</a>
              <a href="#presenteie" onClick={(e)=>{e.preventDefault(); scrollToId("presenteie");}} className="btn btn-primary">Presentear</a>
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
                  <p className="gift-price">{formatBRL(g.price)}</p>
                  <div className="gift-actions">
                    <button
                      className="btn btn-primary"
                      onClick={()=>setGiftOptGift(g)}
                    >
                      Presentear
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
          <p>Por favor, preencha seus dados.</p>

          {rsvpSent ? (
            <div className="notice">
              <p className="ok">🎉 Obrigado! Sua presença foi registrada.</p>
            </div>
          ) : (
            <form onSubmit={onSubmitRSVP} className="grid2 gap-4">
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

              <fieldset className="span2" style={{border:0, padding:0, margin:0}}>
                <legend className="muted">Quantidade de pessoas (incluindo você)</legend>
                <div className="row gap-3 mt-1" role="radiogroup" aria-label="Quantidade de pessoas">
                  {[1,2,3,4,5].map(n=>(
                    <label key={n} style={{display:"inline-flex", alignItems:"center", gap:".4rem"}}>
                      <input
                        type="radio"
                        name="qtd"
                        value={n}
                        checked={peopleCount===n}
                        onChange={()=>setPeopleCount(n)}
                        required
                      />
                      <span>{n}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="span2" style={{display:"contents"}}>
                {Array.from({length: peopleCount}).map((_, i)=>(
                  <label key={i} className="muted span2">
                    Nome do Convidado {i+1}
                    <input
                      name={`convidado${i+1}`}
                      required
                      className="input mt-1"
                      placeholder="Nome do Convidado"
                    />
                  </label>
                ))}
              </div>

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
          <p>A cerimônia e a recepção serão no <strong>{VENUE}</strong>.</p>

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

function GiftOptionsModal({ gift, onClose, onPix, onCard }) {
  React.useEffect(()=>{
    const onEsc = (e)=> e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return ()=> document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Escolher forma de pagamento"
      className="pix-modal-overlay"
      onClick={(e)=>{ if(e.target.classList.contains("pix-modal-overlay")) onClose(); }}
      style={{position:"fixed", inset:0, background:"rgba(0,0,0,.45)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000}}
    >
      <div className="pix-modal" style={{background:"#fff", borderRadius:12, padding:24, width:"min(560px, 92vw)", boxShadow:"0 10px 30px rgba(0,0,0,.25)"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
          <h3 style={{margin:0}}>Presentear — {gift?.title}</h3>
          <button className="btn btn-ghost" onClick={onClose} aria-label="Fechar">Fechar</button>
        </div>

        <div className="row gap-3" style={{marginTop:8}}>
          <button className="btn btn-primary" onClick={onPix}>Pagar com Pix</button>
          <button className="btn btn-ghost" onClick={onCard}>Pagar com Cartão</button>
        </div>

        <div className="card" style={{marginTop:16}}>
          <div className="row gap-2" style={{alignItems:"center"}}>
            <img src={gift?.img} alt="" style={{width:64, height:64, objectFit:"cover", borderRadius:8}} />
            <div>
              <div style={{fontWeight:600}}>{gift?.title}</div>
              <div className="muted">Valor: {formatBRL(gift?.price)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GiftListModal({ gifts, onClose, onChoose }) {
  React.useEffect(()=>{
    const onEsc = (e)=> e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return ()=> document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Lista de presentes"
      className="pix-modal-overlay"
      onClick={(e)=>{ if(e.target.classList.contains("pix-modal-overlay")) onClose(); }}
      style={{position:"fixed", inset:0, background:"rgba(0,0,0,.45)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000}}
    >
      <div className="pix-modal" style={{background:"#fff", borderRadius:12, padding:24, width:"min(900px, 95vw)", maxHeight:"90vh", overflow:"auto", boxShadow:"0 10px 30px rgba(0,0,0,.25)"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
          <h3 style={{margin:0}}>Escolha um presente</h3>
          <button className="btn btn-ghost" onClick={onClose} aria-label="Fechar">Fechar</button>
        </div>

        <div className="giftlist-banner" role="status" aria-live="polite">
          <span className="emoji" aria-hidden>🎉</span>
          Presença confirmada! Agora que tal presentear os noivos?
        </div>

        <div className="grid3 gap-6">
          {gifts.map(g => (
            <article key={g.id} className="gift-card">
              <img className="gift-media" src={g.img} alt={g.title} loading="lazy" />
              <div className="gift-body">
                <h4 className="gift-title">{g.title}</h4>
                <p className="gift-price">{formatBRL(g.price)}</p>
                <div className="gift-actions">
                  <button className="btn btn-primary" onClick={()=>onChoose(g)}>Presentear</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function PixModal({ gift, couple, onClose }){
  const payload = gift?.pix?.payload || "";

  const copy = async (text) => {
    try{
      await navigator.clipboard.writeText(text);
      alert("Copiado!");
    }catch(e){
      const ok = window.confirm("Não foi possível copiar automaticamente.\n\nDeseja ver o texto para copiar manualmente?");
      if(ok) prompt("Selecione e copie:", text);
    }
  };

  React.useEffect(()=>{
    const onEsc = (e)=> e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return ()=> document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pagamento via Pix"
      className="pix-modal-overlay"
      onClick={(e)=>{ if(e.target.classList.contains("pix-modal-overlay")) onClose(); }}
      style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.45)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000 }}
    >
      <div className="pix-modal"
        style={{background:"#fff", borderRadius:12, padding:24, width:"min(720px, 92vw)", boxShadow:"0 10px 30px rgba(0,0,0,.25)", maxHeight:"90vh", overflow:"auto"}}
      >
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
          <h3 style={{margin:0}}>Pagar com Pix — {gift?.title}</h3>
          <button className="btn btn-ghost" onClick={onClose} aria-label="Fechar">Fechar</button>
        </div>

        <div className="pix-modal-grid" style={{display:"grid", gap:12}}>
          <div className="card pix-card">
            <strong>Pix Copia e Cola</strong>
            <textarea readOnly value={payload} rows={5} style={{width:"100%", marginTop:8, fontFamily:"monospace"}} />
            <div className="pix-modal-actions">
              <button className="btn btn-primary" onClick={()=>copy(payload)}>Copiar código</button>
            </div>
          </div>

          <div className="card pix-card">
            <strong>Resumo</strong>
            <p className="muted" style={{marginTop:6}}>
              {couple} — Presente: {gift?.title} — Valor: {formatBRL(gift?.price)}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function InvitationCard({ couple }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const header = document.querySelector(".navbar");
    const headerHeight = header ? header.offsetHeight : 0;
    if (el) {
      window.scrollTo({ top: el.offsetTop - headerHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="card center" style={{ textAlign: "center" }}>
      <img src="/images/favicon.ico" alt="" style={{ width: 48, height: 48, margin: "0 auto 1rem", display:"block" }} />
      <h2>Cerimônia e Recepção</h2>
      <div style={{ width: 96, height: 1, background: "var(--areia)", margin: "16px auto" }} />
      <p className="muted">
        Local: Espaço de Festas Quintal do Zé Alencar — Tv. Maria Gomes -
        Madruga, Vassouras - RJ
      </p>
      <div className="row gap-3 center" style={{ marginTop: 16 }}>
        <button onClick={() => scrollToSection("rsvp")} className="btn btn-ghost">Confirmar Presença</button>
        <button onClick={() => scrollToSection("como-chegar")} className="btn btn-ghost">Como Chegar</button>
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

function formatBRL(n){
  return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(n||0));
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
