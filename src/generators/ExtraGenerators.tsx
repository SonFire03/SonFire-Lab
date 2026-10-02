import {useMemo,useState} from 'react';
import {Check,Copy,Grid2X2,Layers3,Palette,RotateCcw} from 'lucide-react';
import {hexToRgb,makeBoxShadow,makeGridCss,rgbToHsl} from '../lib/generators';

export default function ExtraGenerators({type}:{type:string}){
 const [message,M]=useState('');
 const copy=async(value:string)=>{try{await navigator.clipboard.writeText(value);M('Copié dans le presse-papiers.');}catch{M('Copie indisponible. Sélectionne le code affiché pour le copier.');}};
 if(type==='color')return <ColorPanel copy={copy} message={message}/>;
 if(type==='shadow')return <ShadowPanel copy={copy} message={message}/>;
 return <GridPanel copy={copy} message={message}/>;
}

function ColorPanel({copy,message}:{copy:(value:string)=>void;message:string}){
 const [hex,H]=useState('#67e8f9');
 const rgb=hexToRgb(hex),hsl=useMemo(()=>rgb?rgbToHsl(rgb):null,[hex]);
 const rgbText=rgb?`rgb(${rgb.join(', ')})`:'';
 const hslText=hsl?`hsl(${hsl[0]} ${hsl[1]}% ${hsl[2]}%)`:'';
 const canonical=rgb?`#${rgb.map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase()}`:'';
 return <section className="tool-panel generator-panel">
  <div className="eyebrow"><Palette size={15}/> OUTIL COULEUR · CONVERSION LOCALE</div><h1>Convertisseur HEX · RGB · HSL</h1><p>Choisis une couleur ou saisis un code HEX. Les trois formats se mettent à jour instantanément.</p>
  <div className="color-converter"><div className="color-picker-card"><label htmlFor="color-picker">Aperçu et sélecteur</label><input id="color-picker" type="color" value={canonical||'#67e8f9'} onChange={e=>H(e.target.value)}/><div className="color-sample" style={{background:canonical||'#67e8f9'}}/><small>{rgb?canonical:'Saisis un HEX à 6 chiffres'}</small></div><div className="color-fields"><label>HEX<input value={hex} onChange={e=>H(e.target.value)} aria-invalid={!rgb} placeholder="#67E8F9" spellCheck={false}/></label>{rgb&&<><Output label="RGB" value={rgbText} copy={copy}/><Output label="HSL" value={hslText} copy={copy}/></>}</div></div>
  {!rgb&&<p className="error" role="alert">Format attendu : # suivi de six chiffres hexadécimaux, par exemple #67E8F9.</p>}
  <div className="generator-note"><Check size={16}/> Conversion faite localement, sans requête ni enregistrement de la valeur saisie.</div><p className="status-message" role="status">{message}</p>
 </section>;
}
function Output({label,value,copy}:{label:string;value:string;copy:(value:string)=>void}){return <div className="format-output"><div><span>{label}</span><code>{value}</code></div><button type="button" className="icon-button" aria-label={`Copier ${label}`} onClick={()=>copy(value)}><Copy size={15}/></button></div>}

function ShadowPanel({copy,message}:{copy:(value:string)=>void;message:string}){
 const [x,X]=useState(0),[y,Y]=useState(16),[blur,B]=useState(36),[spread,S]=useState(-8),[opacity,O]=useState(30),[color,C]=useState('#67e8f9'),[inset,I]=useState(false);
 const shadow=makeBoxShadow({x,y,blur,spread,opacity,color,inset}),css=`box-shadow: ${shadow};`;
 return <section className="tool-panel generator-panel"><div className="eyebrow"><Layers3 size={15}/> OUTIL CSS · APERÇU EN DIRECT</div><h1>Constructeur d’ombres</h1><p>Ajuste les paramètres, inspecte le résultat puis récupère la déclaration CSS.</p>
  <div className="shadow-workspace"><div className="shadow-stage"><div className="shadow-preview" style={{boxShadow:shadow}}><span>APERÇU</span><b>Surface</b><small>L’ombre se met à jour avec les réglages.</small></div></div><div className="shadow-controls"><Range label="Décalage horizontal" value={x} min={-40} max={40} onChange={X} unit="px"/><Range label="Décalage vertical" value={y} min={-40} max={50} onChange={Y} unit="px"/><Range label="Flou" value={blur} min={0} max={80} onChange={B} unit="px"/><Range label="Extension" value={spread} min={-24} max={30} onChange={S} unit="px"/><Range label="Opacité" value={opacity} min={0} max={80} onChange={O} unit="%"/><label className="shadow-color">Couleur de l’ombre<input type="color" value={color} onChange={e=>C(e.target.value)}/></label><label className="check inset-check"><input type="checkbox" checked={inset} onChange={e=>I(e.target.checked)}/> Ombre intérieure</label></div></div>
  <div className="generated-code"><div className="generated-code-heading"><span>CSS GÉNÉRÉ</span><button type="button" className="secondary" onClick={()=>{X(0);Y(16);B(36);S(-8);O(30);C('#67e8f9');I(false);}}>Réinitialiser</button></div><pre><code>{css}</code></pre><button type="button" onClick={()=>copy(css)}><Copy size={15}/> Copier le CSS</button></div><p className="status-message" role="status">{message}</p>
 </section>;
}
function Range({label,value,min,max,unit,onChange}:{label:string;value:number;min:number;max:number;unit:string;onChange:(v:number)=>void}){return <label className="range-control"><span>{label}<output>{value}{unit}</output></span><input type="range" min={min} max={max} value={value} onChange={e=>onChange(Number(e.target.value))}/></label>}

function GridPanel({copy,message}:{copy:(value:string)=>void;message:string}){
 const [gap,G]=useState(20),[minWidth,W]=useState(220),[count,N]=useState(6);
 const template=`repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr))`,css=makeGridCss(minWidth,gap);
 return <section className="tool-panel generator-panel"><div className="eyebrow"><Grid2X2 size={15}/> OUTIL CSS · RESPONSIVE PAR DÉFAUT</div><h1>Générateur de grille CSS</h1><p>Compose une grille qui s’adapte à la largeur disponible, sans breakpoint à maintenir.</p>
  <div className="grid-controls"><Range label="Largeur minimale des cartes" value={minWidth} min={140} max={420} onChange={W} unit="px"/><Range label="Espacement" value={gap} min={0} max={48} onChange={G} unit="px"/><Range label="Éléments d’aperçu" value={count} min={3} max={12} onChange={N} unit=""/></div>
  <div className="grid-preview" style={{gridTemplateColumns:template,gap:`${gap}px`}} aria-label={`Aperçu de grille de ${count} éléments`}>{Array.from({length:count},(_,i)=><div key={i}><span>{String(i+1).padStart(2,'0')}</span></div>)}</div>
  <div className="generated-code"><div className="generated-code-heading"><span>CSS RESPONSIVE</span><button type="button" className="secondary" onClick={()=>{G(20);W(220);N(6);}}><RotateCcw size={14}/> Valeurs initiales</button></div><pre><code>{css}</code></pre><button type="button" onClick={()=>copy(css)}><Copy size={15}/> Copier le CSS</button></div><div className="generator-note"><Check size={16}/> <code>min(100%, …)</code> évite le débordement quand l’écran est plus étroit que la carte.</div><p className="status-message" role="status">{message}</p>
 </section>;
}
