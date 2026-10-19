'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';

const pad = (n: number) => String(n + 1).padStart(2, '0');

export function ResultGallery() {
  const [active, setActive] = useState<number | null>(null);
  const [compare, setCompare] = useState(false);
  const [value, setValue] = useState(50);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const items = site.results.items;
  const item = active === null ? null : items[active];
  const cropShare = item ? Math.min(item.beforeShare, 1 - item.beforeShare) : .5;
  const ratio = item ? item.orientation === 'vertical' ? item.comparisonRatio / cropShare : item.comparisonRatio * cropShare : 1;

  useEffect(() => {
    if (active !== null) {
      if (!dialog.current?.open) dialog.current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.current?.close();
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  const close = () => { setActive(null); opener.current?.focus(); };
  const move = (delta: number) => {
    setActive(i => i === null ? 0 : (i + delta + items.length) % items.length);
    setValue(50);
    setCompare(false);
  };

  return <section id="resultados" className="gallery-chapter">
    <div className="gallery-top"><p className="chapter-tag">O cuidado, em imagens</p><span>{String(items.length).padStart(2, '0')} REGISTROS REAIS</span></div>
    <div className="gallery-heading" data-reveal><h2>Resultados reais.<br /><em>Beleza singular.</em></h2><p>Traços valorizados, identidade preservada. Explore os registros e observe cada detalhe.</p></div>
    <div className="gallery-grid">
      {items.map((r, i) => <figure className={`gallery-item gallery-item-${i}`} key={r.image} data-reveal>
        <button onClick={e => { opener.current = e.currentTarget; setCompare(false); setValue(50); setActive(i); }} aria-label={`Ampliar resultado ${pad(i)}: ${r.label}`}>
          <div className="gallery-photo"><Image unoptimized src={r.image} alt={r.alt} fill sizes="(max-width:700px) 88vw, 42vw" /></div>
          <span className="gallery-open"><ArrowUpRight size={23} /></span>
        </button>
        <figcaption><span><small>{pad(i)} /</small> {r.label}</span><span>{r.orientation === 'single' ? 'REGISTRO' : 'ANTES & DEPOIS'}</span></figcaption>
      </figure>)}
    </div>
    <div className="gallery-end"><p>Registros reais da Dra. {site.name}.<br />Resultados individuais. Cada pessoa tem características próprias.</p><a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer">O seu primeiro passo<ArrowUpRight size={22} /></a></div>
    <dialog ref={dialog} className="result-dialog" aria-labelledby="viewer-title" onCancel={close} onClose={() => setActive(null)} onKeyDown={e => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
    }}>
      {item && <>
        <div className="viewer-top"><div><p className="chapter-tag">Um olhar mais próximo</p><h3 id="viewer-title">{item.label}</h3></div><button className="viewer-icon" onClick={close} aria-label="Fechar resultado"><X /></button></div>
        <div className="viewer-stage">
          {compare && item.orientation !== 'single' ? <div className={`comparison ${item.orientation === 'vertical' ? 'vertical' : ''}`} style={{ aspectRatio: ratio, width: `min(100%, calc((100dvh - 280px) * ${ratio}))`, height: 'auto' }} role="img" aria-label={`Comparação interativa: ${item.label}`}>
            <div className="compare-half after" style={{ backgroundImage: `url(${item.image})`, backgroundSize: item.orientation === 'vertical' ? `100% ${100 / cropShare}%` : `${100 / cropShare}% 100%` }} />
            <div className="compare-half before" style={{ backgroundImage: `url(${item.image})`, backgroundSize: item.orientation === 'vertical' ? `100% ${100 / cropShare}%` : `${100 / cropShare}% 100%`, clipPath: `inset(0 ${100 - value}% 0 0)` }} />
            <div className="comparison-line" style={{ left: `${value}%` }}><span>↔</span></div><span className="compare-label left">Antes</span><span className="compare-label right">Depois</span>
          </div> : <Image unoptimized src={item.image} alt={item.alt} fill sizes="90vw" />}
        </div>
        {compare && <label className="viewer-range">Deslize para comparar<input type="range" min="0" max="100" value={value} onChange={e => setValue(+e.target.value)} aria-label="Proporção entre antes e depois" /></label>}
        <div className="viewer-bottom"><button className="viewer-icon" aria-label="Resultado anterior" onClick={() => move(-1)}><ArrowLeft /></button><span aria-live="polite">{pad(active!)} / {String(items.length).padStart(2, '0')}</span>{item.orientation !== 'single' && <button className="viewer-mode" aria-pressed={compare} onClick={() => { setCompare(!compare); setValue(50); }}>{compare ? 'Ver foto original' : 'Comparar antes e depois'}</button>}<button className="viewer-icon" aria-label="Próximo resultado" onClick={() => move(1)}><ArrowRight /></button></div>
        {compare && <p className="viewer-note">Recortes do registro original. Enquadramentos podem variar.</p>}
      </>}
    </dialog>
  </section>;
}
