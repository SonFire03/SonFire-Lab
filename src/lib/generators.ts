export type RGB=[number,number,number];

export function hexToRgb(hex:string):RGB|null{
 const clean=hex.replace(/^#/,'');
 if(!/^[\da-f]{6}$/i.test(clean))return null;
 return [parseInt(clean.slice(0,2),16),parseInt(clean.slice(2,4),16),parseInt(clean.slice(4,6),16)];
}

export function rgbToHsl([red,green,blue]:RGB){
 const [r,g,b]=[red,green,blue].map(v=>v/255),max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min;
 let hue=0;
 if(delta){if(max===r)hue=((g-b)/delta)%6;else if(max===g)hue=(b-r)/delta+2;else hue=(r-g)/delta+4;hue=Math.round(hue*60);if(hue<0)hue+=360;}
 const light=(max+min)/2,saturation=delta?delta/(1-Math.abs(2*light-1)):0;
 return [hue,Math.round(saturation*100),Math.round(light*100)] as const;
}

export function makeBoxShadow({x,y,blur,spread,opacity,color,inset}:{x:number;y:number;blur:number;spread:number;opacity:number;color:string;inset:boolean}){
 const rgb=hexToRgb(color)??[103,232,249];
 return `${inset?'inset ':''}${x}px ${y}px ${blur}px ${spread}px rgba(${rgb.join(', ')}, ${(opacity/100).toFixed(2)})`;
}

export function makeGridCss(minWidth:number,gap:number){
 return `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr));\n  gap: ${gap}px;\n}`;
}
