'use client';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { EssenceChapter } from './essence-chapter';
import { AuthorChapter } from './author-chapter';
import { ExperienceStatement } from './experience-statement';
import { ResultGallery } from './result-gallery';

const pad = (n:number) => String(n+1).padStart(2,'0');
function Tag({children}:{children:React.ReactNode}){return <p className="chapter-tag">{children}</p>}
function ContactLink({children='Agendar consulta'}:{children?:React.ReactNode}){return <a className="chapter-link" href={appointmentUrl} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={22}/></a>}

export function Chapters(){return <>
  <EssenceChapter/>
  <AuthorChapter/>
  {site.results.enabled&&<ResultGallery/>}
  <ExperienceStatement/>
  <section id="experiencia" className="ritual-chapter"><div className="ritual-intro"><Tag>O seu tempo / Sua experiência</Tag><h2>Cada encontro.<br/>Um novo<br/><em>cuidado.</em></h2><p>E ele começa com você.</p></div><div className="ritual-list">{[['Escuta','Um momento para compartilhar o que você procura. Para conversar, perguntar e se sentir à vontade.'],['Planejamento','Suas necessidades orientam as escolhas. Cada etapa é conversada, cada detalhe tem um propósito.'],['Cuidado','Atenção ao seu conforto e à sua individualidade, do começo ao fim.'],['Acompanhamento','O encontro termina. O cuidado continua, com orientações e espaço para suas dúvidas.']].map(([title,copy],i)=><article key={title} data-reveal><span>{pad(i)}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={22} strokeWidth={1}/></article>)}</div></section>
  <RealTestimonials/>
  <section className="social-chapter"><Tag>Mais perto, todos os dias.</Tag><a href={site.instagram} target="_blank" rel="noreferrer"><span>Acompanhe<br/><em>o nosso olhar.</em></span><ArrowUpRight strokeWidth={.7}/></a><div><span>{site.instagramHandle}</span><span>INSTAGRAM</span></div></section>
  <section id="contato" className="closing-chapter"><Tag>O próximo passo é seu.</Tag><h2 data-reveal>Sua beleza<br/>merece uma<br/><em>conversa.</em></h2><div className="closing-bottom"><p>Vamos conversar sobre o que você deseja?<br/>Agende sua avaliação pelo WhatsApp.</p><ContactLink/><span>{site.instagramHandle}</span></div><span className="closing-monogram" aria-hidden="true">{site.monogram.toLowerCase()}.</span></section>
</>}

function RealTestimonials(){const[index,setIndex]=useState(0);if(!site.testimonials.length)return null;return <section className="voices-chapter"><Tag>Palavras de quem viveu</Tag><blockquote>“{site.testimonials[index].quote}”</blockquote><p>{site.testimonials[index].name}</p><button className="chapter-link" onClick={()=>setIndex((index+1)%site.testimonials.length)}>Próximo relato<ArrowRight/></button></section>}
