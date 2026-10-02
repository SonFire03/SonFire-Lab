import {describe,it,expect} from 'vitest';import {b64Decode,b64Encode,ipv4,unixDate,password,contrast,readStore} from './core';
describe('fonctions métier SonFire Lab',()=>{
 it('encode et décode les chaînes UTF-8',()=>{const s='Café 🧪';expect(b64Decode(b64Encode(s))).toBe(s);expect(()=>b64Decode('***')).toThrow();});
 it('analyse et refuse le JSON invalide au parseur de l’outil',()=>{expect(JSON.parse('{"a":1}')).toEqual({a:1});expect(()=>JSON.parse('{')).toThrow();});
 it('calcule les frontières CIDR IPv4',()=>{expect(ipv4('192.168.1.4/24')).toMatchObject({network:'192.168.1.0',broadcast:'192.168.1.255',count:256});expect(ipv4('10.2.3.4/31')).toMatchObject({first:'10.2.3.4',last:'10.2.3.5',count:2});expect(ipv4('10.2.3.4/32').count).toBe(1);expect(ipv4('1.2.3.4/0').network).toBe('0.0.0.0');expect(()=>ipv4('999.2.3.4/24')).toThrow();});
 it('crée un mot de passe avec catégories garanties',()=>{const p=password(20,['abc','ABC','123','!?'],false);expect(p).toHaveLength(20);for(const c of ['abc','ABC','123','!?'])expect([...p].some(x=>c.includes(x))).toBe(true);expect(()=>password(12,[],false)).toThrow();});
 it('traite explicitement les unités Unix',()=>{expect(unixDate('0','s').utc).toBe('1970-01-01T00:00:00.000Z');expect(unixDate('0','ms').utc).toBe('1970-01-01T00:00:00.000Z');});
 it('ignore un stockage illisible',()=>{const old=globalThis.localStorage;Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{getItem(){throw Error('blocked')}}});expect(readStore('x',[1])).toEqual([1]);Object.defineProperty(globalThis,'localStorage',{configurable:true,value:old});});
 it('calcule le contraste de référence noir/blanc',()=>{expect(contrast('#000000','#FFFFFF')).toBeCloseTo(21,5);});
});
