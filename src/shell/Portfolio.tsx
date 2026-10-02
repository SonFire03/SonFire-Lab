import {useState} from 'react';
import {ArrowUpRight,ExternalLink,Github,GraduationCap} from 'lucide-react';
import {projects,tryHackMeCertificates,tryHackMeCertificatesUrl} from '../data/projects';

export default function Portfolio(){
 const [filter,F]=useState('Tous'),[active,A]=useState('');
 const tags=['Tous',...new Set(projects.flatMap(x=>x.tags))];
 const list=projects.filter(p=>filter==='Tous'||p.tags.includes(filter));
 const featured=list.filter(p=>p.featured),other=list.filter(p=>!p.featured);
 const chosen=projects.find(p=>p.name===active);
 return <div className="portfolio-page">
  <section className="portfolio-intro tool-panel">
   <div className="eyebrow">PORTFOLIO · PROJETS PUBLICS</div>
   <h1>Sofiane Dehimi</h1>
   <p className="portfolio-lead">Des projets autour de Linux, de la cybersécurité et du développement — conçus pour apprendre, tester des idées et rendre les outils plus lisibles.</p>
   <div className="portfolio-actions"><a className="button" href="https://github.com/SonFire03" target="_blank" rel="noreferrer"><Github size={16}/> Profil GitHub <ArrowUpRight size={15}/></a><span className="portfolio-note">Sélection éditoriale parmi mes dépôts publics</span></div>
  </section>
  <section className="training-panel" aria-labelledby="training-title">
   <div className="training-copy"><span className="training-icon"><GraduationCap size={21}/></span><div><div className="eyebrow">APPRENTISSAGE · TRYHACKME</div><h2 id="training-title">Parcours et certificats</h2><p>Formations pratiques en cybersécurité, avec les certificats consultables depuis mon portfolio.</p><a href={tryHackMeCertificatesUrl} target="_blank" rel="noreferrer">Voir les certificats vérifiables <ExternalLink size={14}/></a></div></div>
   <div className="certificate-list">{tryHackMeCertificates.map(cert=><span className="certificate-chip" key={cert}>{cert}</span>)}</div>
  </section>
  <section className="portfolio-projects" aria-labelledby="projects-title">
   <div className="portfolio-section-heading"><div><div className="eyebrow">LAB · SÉLECTION</div><h2 id="projects-title">Projets à explorer</h2></div><span className="project-count">{list.length} projets</span></div>
   <div className="portfolio-filters" role="group" aria-label="Filtrer les projets">{tags.map(tag=><button key={tag} type="button" className={filter===tag?'filter-chip active':'filter-chip'} aria-pressed={filter===tag} onClick={()=>F(tag)}>{tag}</button>)}</div>
   {featured.length>0&&<><div className="eyebrow portfolio-group-label">À LA UNE</div><div className="project-grid project-grid-featured">{featured.map(p=><ProjectCard key={p.name} project={p} onDetails={()=>A(p.name)}/>)}</div></>}
   {other.length>0&&<><div className="eyebrow portfolio-group-label">AUTRES PROJETS PUBLICS</div><div className="project-grid">{other.map(p=><ProjectCard key={p.name} project={p} onDetails={()=>A(p.name)}/>)}</div></>}
   {list.length===0&&<p className="portfolio-empty">Aucun projet ne correspond à ce filtre.</p>}
  </section>
  {chosen&&<div className="modal-backdrop" role="presentation" onClick={()=>A('')}><section className="tool-panel modal project-dialog" role="dialog" aria-modal="true" aria-label={`Détails : ${chosen.name}`} onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>A('')}>Fermer</button><div className="eyebrow">{chosen.tags.join(' · ')}</div><h2>{chosen.name}</h2><p>{chosen.detail}</p><div className="tech-stack" aria-label="Technologies documentées">{chosen.tech.map(tech=><span key={tech}>{tech}</span>)}</div><a className="button" href={chosen.url} target="_blank" rel="noreferrer">Ouvrir le dépôt GitHub <ArrowUpRight size={15}/></a></section></div>}
 </div>;
}

function ProjectCard({project,onDetails}:{project:(typeof projects)[number];onDetails:()=>void}){
 const initials=project.name.split(/\s+/).map(part=>part[0]).join('').replace(/[^a-z\d]/gi,'').slice(0,3);
 return <article className={`project-card${project.featured?' project-card-featured':''}`}>
  <div className="project-art" aria-hidden="true"><span>{initials}</span><i className="project-art-orbit"/></div>
  <div className="eyebrow">{project.tags.join(' · ')}</div><h3>{project.name}</h3><p>{project.summary}</p>
  <div className="project-card-actions"><button type="button" className="secondary" onClick={onDetails}>Découvrir le projet</button><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${project.name} sur GitHub`}><ArrowUpRight size={17}/></a></div>
 </article>;
}
