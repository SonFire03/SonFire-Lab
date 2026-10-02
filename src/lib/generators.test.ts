import {describe,expect,it} from 'vitest';
import {hexToRgb,makeBoxShadow,makeGridCss,rgbToHsl} from './generators';

describe('générateurs de styles',()=>{
 it('convertit les couleurs HEX en RGB et rejette les saisies incorrectes',()=>{
  expect(hexToRgb('#67E8F9')).toEqual([103,232,249]);
  expect(hexToRgb('ff0000')).toEqual([255,0,0]);
  expect(hexToRgb('#fff')).toBeNull();
  expect(hexToRgb('#gg0000')).toBeNull();
 });
 it('convertit RGB en HSL avec les primaires de référence',()=>{
  expect(rgbToHsl([255,0,0])).toEqual([0,100,50]);
  expect(rgbToHsl([0,255,0])).toEqual([120,100,50]);
  expect(rgbToHsl([0,0,255])).toEqual([240,100,50]);
  expect(rgbToHsl([128,128,128])).toEqual([0,0,50]);
 });
 it('construit une ombre CSS explicite et une grille responsive',()=>{
  expect(makeBoxShadow({x:0,y:12,blur:24,spread:-4,opacity:25,color:'#67e8f9',inset:false}))
   .toBe('0px 12px 24px -4px rgba(103, 232, 249, 0.25)');
  expect(makeGridCss(220,20)).toContain('repeat(auto-fit, minmax(min(100%, 220px), 1fr))');
  expect(makeGridCss(220,20)).toContain('gap: 20px;');
 });
});
