(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="160",In={ROTATE:0,DOLLY:1,PAN:2},Nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wl=0,ja=1,Cl=2,Do=1,Io=2,Qe=3,mn=0,Ee=1,Be=2,dn=0,ni=1,Ka=2,Ja=3,Qa=4,Rl=5,En=100,Pl=101,Ll=102,tr=103,er=104,Ul=200,Dl=201,Il=202,Nl=203,ma=204,ga=205,Ol=206,Fl=207,kl=208,zl=209,Bl=210,Hl=211,Gl=212,Vl=213,Wl=214,ql=0,Xl=1,Yl=2,us=3,Zl=4,$l=5,jl=6,Kl=7,No=0,Jl=1,Ql=2,fn=0,tc=1,ec=2,nc=3,ic=4,sc=5,ac=6,Oo=300,si=301,ai=302,va=303,_a=304,_s=306,xa=1e3,He=1001,ya=1002,Se=1003,nr=1004,Cs=1005,De=1006,rc=1007,Ei=1008,pn=1009,oc=1010,lc=1011,Pa=1012,Fo=1013,hn=1014,un=1015,Ti=1016,ko=1017,zo=1018,An=1020,cc=1021,Ge=1023,hc=1024,uc=1025,wn=1026,ri=1027,dc=1028,Bo=1029,fc=1030,Ho=1031,Go=1033,Rs=33776,Ps=33777,Ls=33778,Us=33779,ir=35840,sr=35841,ar=35842,rr=35843,Vo=36196,or=37492,lr=37496,cr=37808,hr=37809,ur=37810,dr=37811,fr=37812,pr=37813,mr=37814,gr=37815,vr=37816,_r=37817,xr=37818,yr=37819,Sr=37820,Mr=37821,Ds=36492,br=36494,Er=36495,pc=36283,Tr=36284,Ar=36285,wr=36286,Wo=3e3,Cn=3001,mc=3200,gc=3201,qo=0,vc=1,Oe="",pe="srgb",nn="srgb-linear",La="display-p3",xs="display-p3-linear",ds="linear",Kt="srgb",fs="rec709",ps="p3",On=7680,Cr=519,_c=512,xc=513,yc=514,Xo=515,Sc=516,Mc=517,bc=518,Ec=519,Rr=35044,Pr="300 es",Sa=1035,en=2e3,ms=2001;class Dn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_i=Math.PI/180,Ma=180/Math.PI;function li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Tc(i,t){return(i%t+t)%t}function Is(i,t,e){return(1-e)*i+e*t}function Lr(i){return(i&i-1)===0&&i!==0}function ba(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ac={DEG2RAD:_i};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*s+t.x,this.y=a*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,a,o,r,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,c,l)}set(t,e,n,s,a,o,r,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=a,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],v=s[0],d=s[3],p=s[6],A=s[1],x=s[4],M=s[7],I=s[2],R=s[5],w=s[8];return a[0]=o*v+r*A+c*I,a[3]=o*d+r*x+c*R,a[6]=o*p+r*M+c*w,a[1]=l*v+h*A+u*I,a[4]=l*d+h*x+u*R,a[7]=l*p+h*M+u*w,a[2]=f*v+m*A+g*I,a[5]=f*d+m*x+g*R,a[8]=f*p+m*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-n*a*h+n*r*c+s*a*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],u=h*o-r*l,f=r*c-h*a,m=l*a-o*c,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(r*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*a-r*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*r)+o+t,-s*l,s*c,-s*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new qt;function Yo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wc(){const i=gs("canvas");return i.style.display="block",i}const Ur={};function xi(i){i in Ur||(Ur[i]=!0,console.warn(i))}const Dr=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ir=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ui={[nn]:{transfer:ds,primaries:fs,toReference:i=>i,fromReference:i=>i},[pe]:{transfer:Kt,primaries:fs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xs]:{transfer:ds,primaries:ps,toReference:i=>i.applyMatrix3(Ir),fromReference:i=>i.applyMatrix3(Dr)},[La]:{transfer:Kt,primaries:ps,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ir),fromReference:i=>i.applyMatrix3(Dr).convertLinearToSRGB()}},Cc=new Set([nn,xs]),jt={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Cc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ui[t].toReference,s=Ui[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ui[i].primaries},getTransfer:function(i){return i===Oe?ds:Ui[i].transfer}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fn;class Zo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fn===void 0&&(Fn=gs("canvas")),Fn.width=t.width,Fn.height=t.height;const n=Fn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=ii(a[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rc=0;class $o{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=li(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(Fs(s[o].image)):a.push(Fs(s[o]))}else a=Fs(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pc=0;class Ce extends Dn{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=He,s=He,a=De,o=Ei,r=Ge,c=pn,l=Ce.DEFAULT_ANISOTROPY,h=Oe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=li(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Cn?pe:Oe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xa:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xa:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Cn:Wo}set encoding(t){xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Cn?pe:Oe}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Oo;Ce.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],v=c[2],d=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(m+1)/2,I=(p+1)/2,R=(h+f)/4,w=(u+v)/4,q=(g+d)/4;return x>M&&x>I?x<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(x),s=R/n,a=w/n):M>I?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=R/s,a=q/s):I<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(I),n=w/a,s=q/a),this.set(n,s,a,e),this}let A=Math.sqrt((d-g)*(d-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(d-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lc extends Dn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cn?pe:Oe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jo extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,o,r){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==m||h!==g){let d=1-r;const p=c*f+l*m+h*g+u*v,A=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),R=Math.atan2(I,p*A);d=Math.sin(d*R)/I,r=Math.sin(r*R)/I}const M=r*A;if(c=c*d+f*M,l=l*d+m*M,h=h*d+g*M,u=u*d+v*M,d===1-r){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,o){const r=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[o],f=a[o+1],m=a[o+2],g=a[o+3];return t[e]=r*g+h*u+c*m-l*f,t[e+1]=c*g+h*f+l*u-r*m,t[e+2]=l*g+h*m+r*f-c*u,t[e+3]=h*g-r*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(s/2),u=r(a/2),f=c(n/2),m=c(s/2),g=c(a/2);switch(o){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+r+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(a-l)*m,this._z=(o-s)*m}else if(n>r&&n>u){const m=2*Math.sqrt(1+n-r-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(a+l)/m}else if(r>u){const m=2*Math.sqrt(1+r-n-u);this._w=(a-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-r);this._w=(o-s)/m,this._x=(a+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*r+s*l-a*c,this._y=s*h+o*c+a*r-n*l,this._z=a*h+o*l+n*c-s*r,this._w=o*h-n*r-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,o=this._w;let r=o*t._w+n*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(a),n*Math.cos(a),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*s-r*n),h=2*(r*e-a*s),u=2*(a*n-o*e);return this.x=e+c*l+o*u-r*h,this.y=n+c*h+r*l-a*u,this.z=s+c*u+a*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=s*c-a*r,this.y=a*o-n*c,this.z=n*r-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new O,Nr=new Pn;class ci{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Fe):Fe.fromBufferAttribute(a,o),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Di.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Di.copy(n.boundingBox)),Di.applyMatrix4(t.matrixWorld),this.union(Di)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pi),Ii.subVectors(this.max,pi),kn.subVectors(t.a,pi),zn.subVectors(t.b,pi),Bn.subVectors(t.c,pi),sn.subVectors(zn,kn),an.subVectors(Bn,zn),_n.subVectors(kn,Bn);let e=[0,-sn.z,sn.y,0,-an.z,an.y,0,-_n.z,_n.y,sn.z,0,-sn.x,an.z,0,-an.x,_n.z,0,-_n.x,-sn.y,sn.x,0,-an.y,an.x,0,-_n.y,_n.x,0];return!zs(e,kn,zn,Bn,Ii)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,kn,zn,Bn,Ii))?!1:(Ni.crossVectors(sn,an),e=[Ni.x,Ni.y,Ni.z],zs(e,kn,zn,Bn,Ii))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ye=[new O,new O,new O,new O,new O,new O,new O,new O],Fe=new O,Di=new ci,kn=new O,zn=new O,Bn=new O,sn=new O,an=new O,_n=new O,pi=new O,Ii=new O,Ni=new O,xn=new O;function zs(i,t,e,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){xn.fromArray(i,a);const r=s.x*Math.abs(xn.x)+s.y*Math.abs(xn.y)+s.z*Math.abs(xn.z),c=t.dot(xn),l=e.dot(xn),h=n.dot(xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const Dc=new ci,mi=new O,Bs=new O;class ys{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dc.setFromPoints(t).getCenter(n);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mi.subVectors(t,this.center);const e=mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mi.copy(t.center).add(Bs)),this.expandByPoint(mi.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new O,Hs=new O,Oi=new O,rn=new O,Gs=new O,Fi=new O,Vs=new O;class Ua{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hs.copy(t).add(e).multiplyScalar(.5),Oi.copy(e).sub(t).normalize(),rn.copy(this.origin).sub(Hs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(Oi),r=rn.dot(this.direction),c=-rn.dot(Oi),l=rn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*c-r,f=o*r-c,g=a*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,m=u*(u+o*f+2*r)+f*(o*u+f+2*c)+l}else f=a,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*c)+l;else f=-a,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*a+r)),f=u>0?-a:Math.min(Math.max(-a,-c),a),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(u=Math.max(0,-(o*a+r)),f=u>0?a:Math.min(Math.max(-a,-c),a),m=-u*u+f*(f+2*c)+l);else f=o>0?-a:a,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hs).addScaledVector(Oi,f),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),s=Ze.dot(Ze)-n*n,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=n-o,c=n+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,o,r,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(a=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),u>=0?(r=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(r=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||r>s)||((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,s,a){Gs.subVectors(e,t),Fi.subVectors(n,t),Vs.crossVectors(Gs,Fi);let o=this.direction.dot(Vs),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;rn.subVectors(this.origin,t);const c=r*this.direction.dot(Fi.crossVectors(rn,Fi));if(c<0)return null;const l=r*this.direction.dot(Gs.cross(rn));if(l<0||c+l>o)return null;const h=-r*rn.dot(Vs);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,a,o,r,c,l,h,u,f,m,g,v,d){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,c,l,h,u,f,m,g,v,d)}set(t,e,n,s,a,o,r,c,l,h,u,f,m,g,v,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=o,p[9]=r,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=g,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Hn.setFromMatrixColumn(t,0).length(),a=1/Hn.setFromMatrixColumn(t,1).length(),o=1/Hn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const f=o*h,m=o*u,g=r*h,v=r*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=f-v*l,e[9]=-r*c,e[2]=v-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,m=c*u,g=l*h,v=l*u;e[0]=f+v*r,e[4]=g*r-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=v+f*r,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,m=c*u,g=l*h,v=l*u;e[0]=f-v*r,e[4]=-o*u,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=v-f*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=r*h,v=r*u;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=m*l-g,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=r*c,v=r*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=m*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*c,m=o*l,g=r*c,v=r*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=r*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ic,t,Nc)}lookAt(t,e,n){const s=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),on.crossVectors(n,Ae),on.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),on.crossVectors(n,Ae)),on.normalize(),ki.crossVectors(Ae,on),s[0]=on.x,s[4]=ki.x,s[8]=Ae.x,s[1]=on.y,s[5]=ki.y,s[9]=Ae.y,s[2]=on.z,s[6]=ki.z,s[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],v=n[6],d=n[10],p=n[14],A=n[3],x=n[7],M=n[11],I=n[15],R=s[0],w=s[4],q=s[8],y=s[12],E=s[1],k=s[5],Y=s[9],nt=s[13],U=s[2],H=s[6],N=s[10],X=s[14],K=s[3],tt=s[7],C=s[11],T=s[15];return a[0]=o*R+r*E+c*U+l*K,a[4]=o*w+r*k+c*H+l*tt,a[8]=o*q+r*Y+c*N+l*C,a[12]=o*y+r*nt+c*X+l*T,a[1]=h*R+u*E+f*U+m*K,a[5]=h*w+u*k+f*H+m*tt,a[9]=h*q+u*Y+f*N+m*C,a[13]=h*y+u*nt+f*X+m*T,a[2]=g*R+v*E+d*U+p*K,a[6]=g*w+v*k+d*H+p*tt,a[10]=g*q+v*Y+d*N+p*C,a[14]=g*y+v*nt+d*X+p*T,a[3]=A*R+x*E+M*U+I*K,a[7]=A*w+x*k+M*H+I*tt,a[11]=A*q+x*Y+M*N+I*C,a[15]=A*y+x*nt+M*X+I*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],v=t[7],d=t[11],p=t[15];return g*(+a*c*u-s*l*u-a*r*f+n*l*f+s*r*m-n*c*m)+v*(+e*c*m-e*l*f+a*o*f-s*o*m+s*l*h-a*c*h)+d*(+e*l*u-e*r*m-a*o*u+n*o*m+a*r*h-n*l*h)+p*(-s*r*h-e*c*u+e*r*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],v=t[13],d=t[14],p=t[15],A=u*d*l-v*f*l+v*c*m-r*d*m-u*c*p+r*f*p,x=g*f*l-h*d*l-g*c*m+o*d*m+h*c*p-o*f*p,M=h*v*l-g*u*l+g*r*m-o*v*m-h*r*p+o*u*p,I=g*u*c-h*v*c-g*r*f+o*v*f+h*r*d-o*u*d,R=e*A+n*x+s*M+a*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=A*w,t[1]=(v*f*a-u*d*a-v*s*m+n*d*m+u*s*p-n*f*p)*w,t[2]=(r*d*a-v*c*a+v*s*l-n*d*l-r*s*p+n*c*p)*w,t[3]=(u*c*a-r*f*a-u*s*l+n*f*l+r*s*m-n*c*m)*w,t[4]=x*w,t[5]=(h*d*a-g*f*a+g*s*m-e*d*m-h*s*p+e*f*p)*w,t[6]=(g*c*a-o*d*a-g*s*l+e*d*l+o*s*p-e*c*p)*w,t[7]=(o*f*a-h*c*a+h*s*l-e*f*l-o*s*m+e*c*m)*w,t[8]=M*w,t[9]=(g*u*a-h*v*a-g*n*m+e*v*m+h*n*p-e*u*p)*w,t[10]=(o*v*a-g*r*a+g*n*l-e*v*l-o*n*p+e*r*p)*w,t[11]=(h*r*a-o*u*a-h*n*l+e*u*l+o*n*m-e*r*m)*w,t[12]=I*w,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*d+e*u*d)*w,t[14]=(g*r*s-o*v*s-g*n*c+e*v*c+o*n*d-e*r*d)*w,t[15]=(o*u*s-h*r*s+h*n*c-e*u*c-o*n*f+e*r*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,o=t.x,r=t.y,c=t.z,l=a*o,h=a*r;return this.set(l*o+n,l*r-s*c,l*c+s*r,0,l*r+s*c,h*r+n,h*c-s*o,0,l*c-s*r,h*c+s*o,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,o){return this.set(1,n,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,h=o+o,u=r+r,f=a*l,m=a*h,g=a*u,v=o*h,d=o*u,p=r*u,A=c*l,x=c*h,M=c*u,I=n.x,R=n.y,w=n.z;return s[0]=(1-(v+p))*I,s[1]=(m+M)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(m-M)*R,s[5]=(1-(f+p))*R,s[6]=(d+A)*R,s[7]=0,s[8]=(g+x)*w,s[9]=(d-A)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=Hn.set(s[0],s[1],s[2]).length();const o=Hn.set(s[4],s[5],s[6]).length(),r=Hn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],ke.copy(this);const l=1/a,h=1/o,u=1/r;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=h,ke.elements[5]*=h,ke.elements[6]*=h,ke.elements[8]*=u,ke.elements[9]*=u,ke.elements[10]*=u,e.setFromRotationMatrix(ke),n.x=a,n.y=o,n.z=r,this}makePerspective(t,e,n,s,a,o,r=en){const c=this.elements,l=2*a/(e-t),h=2*a/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(r===en)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===ms)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,o,r=en){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-a),f=(e+t)*l,m=(n+s)*h;let g,v;if(r===en)g=(o+a)*u,v=-2*u;else if(r===ms)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hn=new O,ke=new ae,Ic=new O(0,0,0),Nc=new O(1,1,1),on=new O,ki=new O,Ae=new O,Or=new ae,Fr=new Pn;class Ss{constructor(t=0,e=0,n=0,s=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],o=s[4],r=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Or.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Or,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fr.setFromEuler(this),this.setFromQuaternion(Fr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oc=0;const kr=new O,Gn=new Pn,$e=new ae,zi=new O,gi=new O,Fc=new O,kc=new Pn,zr=new O(1,0,0),Br=new O(0,1,0),Hr=new O(0,0,1),zc={type:"added"},Bc={type:"removed"};class ge extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new O,e=new Ss,n=new Pn,s=new O(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new qt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(zr,t)}rotateY(t){return this.rotateOnAxis(Br,t)}rotateZ(t){return this.rotateOnAxis(Hr,t)}translateOnAxis(t,e){return kr.copy(t).applyQuaternion(this.quaternion),this.position.add(kr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zr,t)}translateY(t){return this.translateOnAxis(Br,t)}translateZ(t){return this.translateOnAxis(Hr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zi.copy(t):zi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(gi,zi,this.up):$e.lookAt(zi,gi,this.up),this.quaternion.setFromRotationMatrix($e),s&&($e.extractRotation(s.matrixWorld),Gn.setFromRotationMatrix($e),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,t,Fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const a=e[n];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++){const r=s[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(t.shapes,u)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];s.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new O(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new O,je=new O,Ws=new O,Ke=new O,Vn=new O,Wn=new O,Gr=new O,qs=new O,Xs=new O,Ys=new O;let Bi=!1;class Ie{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ze.subVectors(t,e),s.cross(ze);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){ze.subVectors(s,e),je.subVectors(n,e),Ws.subVectors(t,e);const o=ze.dot(ze),r=ze.dot(je),c=ze.dot(Ws),l=je.dot(je),h=je.dot(Ws),u=o*l-r*r;if(u===0)return a.set(0,0,0),null;const f=1/u,m=(l*c-r*h)*f,g=(o*h-r*c)*f;return a.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getUV(t,e,n,s,a,o,r,c){return Bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bi=!0),this.getInterpolation(t,e,n,s,a,o,r,c)}static getInterpolation(t,e,n,s,a,o,r,c){return this.getBarycoord(t,e,n,s,Ke)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ke.x),c.addScaledVector(o,Ke.y),c.addScaledVector(r,Ke.z),c)}static isFrontFacing(t,e,n,s){return ze.subVectors(n,e),je.subVectors(t,e),ze.cross(je).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),je.subVectors(this.a,this.b),ze.cross(je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,a){return Bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bi=!0),Ie.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}getInterpolation(t,e,n,s,a){return Ie.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let o,r;Vn.subVectors(s,n),Wn.subVectors(a,n),qs.subVectors(t,n);const c=Vn.dot(qs),l=Wn.dot(qs);if(c<=0&&l<=0)return e.copy(n);Xs.subVectors(t,s);const h=Vn.dot(Xs),u=Wn.dot(Xs);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Vn,o);Ys.subVectors(t,a);const m=Vn.dot(Ys),g=Wn.dot(Ys);if(g>=0&&m<=g)return e.copy(a);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(n).addScaledVector(Wn,r);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return Gr.subVectors(a,s),r=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Gr,r);const p=1/(d+v+f);return o=v*p,r=f*p,e.copy(n).addScaledVector(Vn,o).addScaledVector(Wn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Tc(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=Zs(o,a,t+1/3),this.g=Zs(o,a,t),this.b=Zs(o,a,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const n=Jo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return jt.fromWorkingColorSpace(xe.copy(this),t),Math.round(me(xe.r*255,0,255))*65536+Math.round(me(xe.g*255,0,255))*256+Math.round(me(xe.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,s=xe.g,a=xe.b,o=Math.max(n,s,a),r=Math.min(n,s,a);let c,l;const h=(r+o)/2;if(r===o)c=0,l=0;else{const u=o-r;switch(l=h<=.5?u/(o+r):u/(2-o-r),o){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=pe){jt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,s=xe.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(Hi);const n=Is(ln.h,Hi.h,e),s=Is(ln.s,Hi.s,e),a=Is(ln.l,Hi.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Xt;Xt.NAMES=Jo;let Hc=0;class hi extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ni,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vs extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new O,Gi=new mt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gi.fromBufferAttribute(this,e),Gi.applyMatrix3(t),this.setXY(e,Gi.x,Gi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rr&&(t.usage=this.usage),t}}class Qo extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tl extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gc=0;const Le=new ae,$s=new ge,qn=new O,we=new ci,vi=new ci,ue=new O;class Me extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yo(t)?tl:Qo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return $s.lookAt(t),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];we.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];vi.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(we.min,vi.min),we.expandByPoint(ue),ue.addVectors(we.max,vi.max),we.expandByPoint(ue)):(we.expandByPoint(vi.min),we.expandByPoint(vi.max))}we.getCenter(n);let s=0;for(let a=0,o=t.count;a<o;a++)ue.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(ue));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)ue.fromBufferAttribute(r,l),c&&(qn.fromBufferAttribute(t,l),ue.add(qn)),s=Math.max(s,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,a=e.normal.array,o=e.uv.array,r=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<r;E++)l[E]=new O,h[E]=new O;const u=new O,f=new O,m=new O,g=new mt,v=new mt,d=new mt,p=new O,A=new O;function x(E,k,Y){u.fromArray(s,E*3),f.fromArray(s,k*3),m.fromArray(s,Y*3),g.fromArray(o,E*2),v.fromArray(o,k*2),d.fromArray(o,Y*2),f.sub(u),m.sub(u),v.sub(g),d.sub(g);const nt=1/(v.x*d.y-d.x*v.y);isFinite(nt)&&(p.copy(f).multiplyScalar(d.y).addScaledVector(m,-v.y).multiplyScalar(nt),A.copy(m).multiplyScalar(v.x).addScaledVector(f,-d.x).multiplyScalar(nt),l[E].add(p),l[k].add(p),l[Y].add(p),h[E].add(A),h[k].add(A),h[Y].add(A))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,k=M.length;E<k;++E){const Y=M[E],nt=Y.start,U=Y.count;for(let H=nt,N=nt+U;H<N;H+=3)x(n[H+0],n[H+1],n[H+2])}const I=new O,R=new O,w=new O,q=new O;function y(E){w.fromArray(a,E*3),q.copy(w);const k=l[E];I.copy(k),I.sub(w.multiplyScalar(w.dot(k))).normalize(),R.crossVectors(q,k);const nt=R.dot(h[E])<0?-1:1;c[E*4]=I.x,c[E*4+1]=I.y,c[E*4+2]=I.z,c[E*4+3]=nt}for(let E=0,k=M.length;E<k;++E){const Y=M[E],nt=Y.start,U=Y.count;for(let H=nt,N=nt+U;H<N;H+=3)y(n[H+0]),y(n[H+1]),y(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new O,a=new O,o=new O,r=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),v=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),o.fromBufferAttribute(e,d),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,d),r.add(h),c.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,u=r.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let v=0,d=c.length;v<d;v++){r.isInterleavedBufferAttribute?m=c[v]*r.data.stride+r.offset:m=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[m++]}return new Re(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const r in s){const c=s[r],l=t(c,n);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],u=a[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vr=new ae,yn=new Ua,Vi=new ys,Wr=new O,Xn=new O,Yn=new O,Zn=new O,js=new O,Wi=new O,qi=new mt,Xi=new mt,Yi=new mt,qr=new O,Xr=new O,Yr=new O,Zi=new O,$i=new O;class de extends ge{constructor(t=new Me,e=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(a&&r){Wi.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=r[c],u=a[c];h!==0&&(js.fromBufferAttribute(u,t),o?Wi.addScaledVector(js,h):Wi.addScaledVector(js.sub(e),h))}e.add(Wi)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(a),yn.copy(t.ray).recast(t.near),!(Vi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Vi,Wr)===null||yn.origin.distanceToSquared(Wr)>(t.far-t.near)**2))&&(Vr.copy(a).invert(),yn.copy(t.ray).applyMatrix4(Vr),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,m=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const d=f[g],p=o[d.materialIndex],A=Math.max(d.start,m.start),x=Math.min(r.count,Math.min(d.start+d.count,m.start+m.count));for(let M=A,I=x;M<I;M+=3){const R=r.getX(M),w=r.getX(M+1),q=r.getX(M+2);s=ji(this,p,t,n,l,h,u,R,w,q),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(r.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const A=r.getX(d),x=r.getX(d+1),M=r.getX(d+2);s=ji(this,o,t,n,l,h,u,A,x,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const d=f[g],p=o[d.materialIndex],A=Math.max(d.start,m.start),x=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let M=A,I=x;M<I;M+=3){const R=M,w=M+1,q=M+2;s=ji(this,p,t,n,l,h,u,R,w,q),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const A=d,x=d+1,M=d+2;s=ji(this,o,t,n,l,h,u,A,x,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Vc(i,t,e,n,s,a,o,r){let c;if(t.side===Ee?c=n.intersectTriangle(o,a,s,!0,r):c=n.intersectTriangle(s,a,o,t.side===mn,r),c===null)return null;$i.copy(r),$i.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo($i);return l<e.near||l>e.far?null:{distance:l,point:$i.clone(),object:i}}function ji(i,t,e,n,s,a,o,r,c,l){i.getVertexPosition(r,Xn),i.getVertexPosition(c,Yn),i.getVertexPosition(l,Zn);const h=Vc(i,t,e,n,Xn,Yn,Zn,Zi);if(h){s&&(qi.fromBufferAttribute(s,r),Xi.fromBufferAttribute(s,c),Yi.fromBufferAttribute(s,l),h.uv=Ie.getInterpolation(Zi,Xn,Yn,Zn,qi,Xi,Yi,new mt)),a&&(qi.fromBufferAttribute(a,r),Xi.fromBufferAttribute(a,c),Yi.fromBufferAttribute(a,l),h.uv1=Ie.getInterpolation(Zi,Xn,Yn,Zn,qi,Xi,Yi,new mt),h.uv2=h.uv1),o&&(qr.fromBufferAttribute(o,r),Xr.fromBufferAttribute(o,c),Yr.fromBufferAttribute(o,l),h.normal=Ie.getInterpolation(Zi,Xn,Yn,Zn,qr,Xr,Yr,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:r,b:c,c:l,normal:new O,materialIndex:0};Ie.getNormal(Xn,Yn,Zn,u.normal),h.face=u}return h}class Ue extends Me{constructor(t=1,e=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,a,0),g("z","y","x",1,-1,n,e,-t,o,a,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(v,d,p,A,x,M,I,R,w,q,y){const E=M/w,k=I/q,Y=M/2,nt=I/2,U=R/2,H=w+1,N=q+1;let X=0,K=0;const tt=new O;for(let C=0;C<N;C++){const T=C*k-nt;for(let G=0;G<H;G++){const F=G*E-Y;tt[v]=F*A,tt[d]=T*x,tt[p]=U,l.push(tt.x,tt.y,tt.z),tt[v]=0,tt[d]=0,tt[p]=R>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(G/w),u.push(1-C/q),X+=1}}for(let C=0;C<q;C++)for(let T=0;T<w;T++){const G=f+T+H*C,F=f+T+H*(C+1),W=f+(T+1)+H*(C+1),et=f+(T+1)+H*C;c.push(G,F,et),c.push(F,W,et),K+=6}r.addGroup(m,K,y),m+=K,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ye(i){const t={};for(let e=0;e<i.length;e++){const n=oi(i[e]);for(const s in n)t[s]=n[s]}return t}function Wc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function el(i){return i.getRenderTarget()===null?i.outputColorSpace:jt.workingColorSpace}const qc={clone:oi,merge:ye};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=Yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oi(t.uniforms),this.uniformsGroups=Wc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=en}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ne extends nl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_i*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(_i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_i*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,jn=1;class Zc extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ne($n,jn,t,e);s.layers=this.layers,this.add(s);const a=new Ne($n,jn,t,e);a.layers=this.layers,this.add(a);const o=new Ne($n,jn,t,e);o.layers=this.layers,this.add(o);const r=new Ne($n,jn,t,e);r.layers=this.layers,this.add(r);const c=new Ne($n,jn,t,e);c.layers=this.layers,this.add(c);const l=new Ne($n,jn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class il extends Ce{constructor(t,e,n,s,a,o,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:si,super(t,e,n,s,a,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $c extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Cn?pe:Oe),this.texture=new il(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ue(5,5,5),a=new Ln({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:dn});a.uniforms.tEquirect.value=e;const o=new de(s,a),r=e.minFilter;return e.minFilter===Ei&&(e.minFilter=De),new Zc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(a)}}const Ks=new O,jc=new O,Kc=new qt;class tn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ks.subVectors(n,e).cross(jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ks),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kc.getNormalMatrix(t),s=this.coplanarPoint(Ks).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new ys,Ki=new O;class Da{constructor(t=new tn,e=new tn,n=new tn,s=new tn,a=new tn,o=new tn){this.planes=[t,e,n,s,a,o]}set(t,e,n,s,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en){const n=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],v=s[10],d=s[11],p=s[12],A=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-a,f-l,d-m,M-p).normalize(),n[1].setComponents(c+a,f+l,d+m,M+p).normalize(),n[2].setComponents(c+o,f+h,d+g,M+A).normalize(),n[3].setComponents(c-o,f-h,d-g,M-A).normalize(),n[4].setComponents(c-r,f-u,d-v,M-x).normalize(),e===en)n[5].setComponents(c+r,f+u,d+v,M+x).normalize();else if(e===ms)n[5].setComponents(r,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(t){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ki.x=s.normal.x>0?t.max.x:t.min.x,Ki.y=s.normal.y>0?t.max.y:t.min.y,Ki.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sl(){let i=null,t=!1,e=null,n=null;function s(a,o){e(a,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Jc(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const u=l.array,f=l.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function a(l,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let v=0,d=g.length;v<d;v++){const p=g[v];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,l,h),u.version=l.version}}return{get:o,remove:r,update:c}}class Ia extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,o=e/2,r=Math.floor(n),c=Math.floor(s),l=r+1,h=c+1,u=t/r,f=e/c,m=[],g=[],v=[],d=[];for(let p=0;p<h;p++){const A=p*f-o;for(let x=0;x<l;x++){const M=x*u-a;g.push(M,-A,0),v.push(0,0,1),d.push(x/r),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<r;A++){const x=A+l*p,M=A+l*(p+1),I=A+1+l*(p+1),R=A+1+l*p;m.push(x,M,R),m.push(M,I,R)}this.setIndex(m),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,du=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Du=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ou=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,od=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Qc,alphahash_pars_fragment:th,alphamap_fragment:eh,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:rh,batching_pars_vertex:oh,batching_vertex:lh,begin_vertex:ch,beginnormal_vertex:hh,bsdfs:uh,iridescence_fragment:dh,bumpmap_pars_fragment:fh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:vh,color_fragment:_h,color_pars_fragment:xh,color_pars_vertex:yh,color_vertex:Sh,common:Mh,cube_uv_reflection_fragment:bh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Th,displacementmap_vertex:Ah,emissivemap_fragment:wh,emissivemap_pars_fragment:Ch,colorspace_fragment:Rh,colorspace_pars_fragment:Ph,envmap_fragment:Lh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Dh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:Xh,envmap_vertex:Nh,fog_vertex:Oh,fog_pars_vertex:Fh,fog_fragment:kh,fog_pars_fragment:zh,gradientmap_pars_fragment:Bh,lightmap_fragment:Hh,lightmap_pars_fragment:Gh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Wh,lights_pars_begin:qh,lights_toon_fragment:Yh,lights_toon_pars_fragment:Zh,lights_phong_fragment:$h,lights_phong_pars_fragment:jh,lights_physical_fragment:Kh,lights_physical_pars_fragment:Jh,lights_fragment_begin:Qh,lights_fragment_maps:tu,lights_fragment_end:eu,logdepthbuf_fragment:nu,logdepthbuf_pars_fragment:iu,logdepthbuf_pars_vertex:su,logdepthbuf_vertex:au,map_fragment:ru,map_pars_fragment:ou,map_particle_fragment:lu,map_particle_pars_fragment:cu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:uu,morphcolor_vertex:du,morphnormal_vertex:fu,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:gu,normal_fragment_maps:vu,normal_pars_fragment:_u,normal_pars_vertex:xu,normal_vertex:yu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Mu,clearcoat_normal_fragment_maps:bu,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:Tu,opaque_fragment:Au,packing:wu,premultiplied_alpha_fragment:Cu,project_vertex:Ru,dithering_fragment:Pu,dithering_pars_fragment:Lu,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Du,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Nu,shadowmap_vertex:Ou,shadowmask_pars_fragment:Fu,skinbase_vertex:ku,skinning_pars_vertex:zu,skinning_vertex:Bu,skinnormal_vertex:Hu,specularmap_fragment:Gu,specularmap_pars_fragment:Vu,tonemapping_fragment:Wu,tonemapping_pars_fragment:qu,transmission_fragment:Xu,transmission_pars_fragment:Yu,uv_pars_fragment:Zu,uv_pars_vertex:$u,uv_vertex:ju,worldpos_vertex:Ku,background_vert:Ju,background_frag:Qu,backgroundCube_vert:td,backgroundCube_frag:ed,cube_vert:nd,cube_frag:id,depth_vert:sd,depth_frag:ad,distanceRGBA_vert:rd,distanceRGBA_frag:od,equirect_vert:ld,equirect_frag:cd,linedashed_vert:hd,linedashed_frag:ud,meshbasic_vert:dd,meshbasic_frag:fd,meshlambert_vert:pd,meshlambert_frag:md,meshmatcap_vert:gd,meshmatcap_frag:vd,meshnormal_vert:_d,meshnormal_frag:xd,meshphong_vert:yd,meshphong_frag:Sd,meshphysical_vert:Md,meshphysical_frag:bd,meshtoon_vert:Ed,meshtoon_frag:Td,points_vert:Ad,points_frag:wd,shadow_vert:Cd,shadow_frag:Rd,sprite_vert:Pd,sprite_frag:Ld},_t={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},We={basic:{uniforms:ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ye([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ye([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ye([_t.points,_t.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ye([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ye([_t.common,_t.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ye([_t.sprite,_t.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ye([_t.common,_t.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ye([_t.lights,_t.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};We.physical={uniforms:ye([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Ji={r:0,b:0,g:0};function Ud(i,t,e,n,s,a,o){const r=new Xt(0);let c=a===!0?0:1,l,h,u=null,f=0,m=null;function g(d,p){let A=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?v(r,c):x&&x.isColor&&(v(x,1),A=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_s)?(h===void 0&&(h=new de(new Ue(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:oi(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=jt.getTransfer(x.colorSpace)!==Kt,(u!==x||f!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new de(new Ia(2,2),new Ln({name:"BackgroundMaterial",uniforms:oi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=jt.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function v(d,p){d.getRGB(Ji,el(i)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,p,o)}return{getClearColor:function(){return r},setClearColor:function(d,p=1){r.set(d),c=p,v(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,v(r,c)},render:g}}function Dd(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,r={},c=d(null);let l=c,h=!1;function u(U,H,N,X,K){let tt=!1;if(o){const C=v(X,N,H);l!==C&&(l=C,m(l.object)),tt=p(U,X,N,K),tt&&A(U,X,N,K)}else{const C=H.wireframe===!0;(l.geometry!==X.id||l.program!==N.id||l.wireframe!==C)&&(l.geometry=X.id,l.program=N.id,l.wireframe=C,tt=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(tt||h)&&(h=!1,q(U,H,N,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(U){return n.isWebGL2?i.bindVertexArray(U):a.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):a.deleteVertexArrayOES(U)}function v(U,H,N){const X=N.wireframe===!0;let K=r[U.id];K===void 0&&(K={},r[U.id]=K);let tt=K[H.id];tt===void 0&&(tt={},K[H.id]=tt);let C=tt[X];return C===void 0&&(C=d(f()),tt[X]=C),C}function d(U){const H=[],N=[],X=[];for(let K=0;K<s;K++)H[K]=0,N[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:N,attributeDivisors:X,object:U,attributes:{},index:null}}function p(U,H,N,X){const K=l.attributes,tt=H.attributes;let C=0;const T=N.getAttributes();for(const G in T)if(T[G].location>=0){const W=K[G];let et=tt[G];if(et===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),W===void 0||W.attribute!==et||et&&W.data!==et.data)return!0;C++}return l.attributesNum!==C||l.index!==X}function A(U,H,N,X){const K={},tt=H.attributes;let C=0;const T=N.getAttributes();for(const G in T)if(T[G].location>=0){let W=tt[G];W===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));const et={};et.attribute=W,W&&W.data&&(et.data=W.data),K[G]=et,C++}l.attributes=K,l.attributesNum=C,l.index=X}function x(){const U=l.newAttributes;for(let H=0,N=U.length;H<N;H++)U[H]=0}function M(U){I(U,0)}function I(U,H){const N=l.newAttributes,X=l.enabledAttributes,K=l.attributeDivisors;N[U]=1,X[U]===0&&(i.enableVertexAttribArray(U),X[U]=1),K[U]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,H),K[U]=H)}function R(){const U=l.newAttributes,H=l.enabledAttributes;for(let N=0,X=H.length;N<X;N++)H[N]!==U[N]&&(i.disableVertexAttribArray(N),H[N]=0)}function w(U,H,N,X,K,tt,C){C===!0?i.vertexAttribIPointer(U,H,N,K,tt):i.vertexAttribPointer(U,H,N,X,K,tt)}function q(U,H,N,X){if(n.isWebGL2===!1&&(U.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const K=X.attributes,tt=N.getAttributes(),C=H.defaultAttributeValues;for(const T in tt){const G=tt[T];if(G.location>=0){let F=K[T];if(F===void 0&&(T==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),T==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),F!==void 0){const W=F.normalized,et=F.itemSize,ot=e.get(F);if(ot===void 0)continue;const Q=ot.buffer,ut=ot.type,xt=ot.bytesPerElement,pt=n.isWebGL2===!0&&(ut===i.INT||ut===i.UNSIGNED_INT||F.gpuType===Fo);if(F.isInterleavedBufferAttribute){const yt=F.data,L=yt.stride,it=F.offset;if(yt.isInstancedInterleavedBuffer){for(let V=0;V<G.locationSize;V++)I(G.location+V,yt.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let V=0;V<G.locationSize;V++)M(G.location+V);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let V=0;V<G.locationSize;V++)w(G.location+V,et/G.locationSize,ut,W,L*xt,(it+et/G.locationSize*V)*xt,pt)}else{if(F.isInstancedBufferAttribute){for(let yt=0;yt<G.locationSize;yt++)I(G.location+yt,F.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let yt=0;yt<G.locationSize;yt++)M(G.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let yt=0;yt<G.locationSize;yt++)w(G.location+yt,et/G.locationSize,ut,W,et*xt,et/G.locationSize*yt*xt,pt)}}else if(C!==void 0){const W=C[T];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(G.location,W);break;case 3:i.vertexAttrib3fv(G.location,W);break;case 4:i.vertexAttrib4fv(G.location,W);break;default:i.vertexAttrib1fv(G.location,W)}}}}R()}function y(){Y();for(const U in r){const H=r[U];for(const N in H){const X=H[N];for(const K in X)g(X[K].object),delete X[K];delete H[N]}delete r[U]}}function E(U){if(r[U.id]===void 0)return;const H=r[U.id];for(const N in H){const X=H[N];for(const K in X)g(X[K].object),delete X[K];delete H[N]}delete r[U.id]}function k(U){for(const H in r){const N=r[H];if(N[U.id]===void 0)continue;const X=N[U.id];for(const K in X)g(X[K].object),delete X[K];delete N[U.id]}}function Y(){nt(),h=!0,l!==c&&(l=c,m(l.object))}function nt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:nt,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function Id(i,t,e,n){const s=n.isWebGL2;let a;function o(h){a=h}function r(h,u){i.drawArrays(a,h,u),e.update(u,a,1)}function c(h,u,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,h,u,f),e.update(u,a,f)}function l(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(a,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];e.update(g,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Nd(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||t.has("OES_texture_float"),I=x&&M,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:R}}function Od(i){const t=this;let e=null,n=0,s=!1,a=!1;const o=new tn,r=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,v=u.clipIntersection,d=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!d)a?h(null):l();else{const A=a?0:n,x=A*4;let M=p.clippingState||null;c.value=M,M=h(g,f,x,m);for(let I=0;I!==x;++I)M[I]=e[I];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const v=u!==null?u.length:0;let d=null;if(v!==0){if(d=c.value,g!==!0||d===null){const p=m+v*4,A=f.matrixWorldInverse;r.getNormalMatrix(A),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,M=m;x!==v;++x,M+=4)o.copy(u[x]).applyMatrix4(A,r),o.normal.toArray(d,M),d[M+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function Fd(i){let t=new WeakMap;function e(o,r){return r===va?o.mapping=si:r===_a&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===va||r===_a)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $c(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class al extends nl{constructor(t=-1,e=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,o=n+t,r=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Jn=4,Zr=[.125,.215,.35,.446,.526,.582],Tn=20,Js=new al,$r=new Xt;let Qs=null,ta=0,ea=0;const bn=(1+Math.sqrt(5))/2,Kn=1/bn,jr=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,bn,Kn),new O(0,bn,-Kn),new O(Kn,0,bn),new O(-Kn,0,bn),new O(bn,Kn,0),new O(-bn,Kn,0)];class Kr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qs=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=to(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,ta,ea),t.scissorTest=!1,Qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===si||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Ti,format:Ge,colorSpace:nn,depthBuffer:!1},s=Jr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jr(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kd(a)),this._blurMaterial=zd(a,t,e)}return s}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,s){const r=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($r),h.toneMapping=fn,h.autoClear=!1;const m=new vs({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new de(new Ue,m);let v=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,v=!0):(m.color.copy($r),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(r.up.set(0,c[p],0),r.lookAt(l[p],0,0)):A===1?(r.up.set(0,0,c[p]),r.lookAt(0,l[p],0)):(r.up.set(0,c[p],0),r.lookAt(0,0,l[p]));const x=this._cubeSize;Qi(s,A*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===si||t.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=to()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qr());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;Qi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jr[(s-1)%jr.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",a),this._halfBlur(o,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new de(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Tn-1),v=a/g,d=isFinite(a)?1+Math.floor(h*v):Tn;d>Tn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Tn}`);const p=[];let A=0;for(let w=0;w<Tn;++w){const q=w/v,y=Math.exp(-q*q/2);p.push(y),w===0?A+=y:w<d&&(A+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[s],I=3*M*(s>x-Jn?s-x+Jn:0),R=4*(this._cubeSize-M);Qi(e,I,R,3*M,2*M),c.setRenderTarget(e),c.render(u,Js)}}function kd(i){const t=[],e=[],n=[];let s=i;const a=i-Jn+1+Zr.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let c=1/r;o>i-Jn?c=Zr[o-i+Jn-1]:o===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,d=2,p=1,A=new Float32Array(v*g*m),x=new Float32Array(d*g*m),M=new Float32Array(p*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,q=R>2?0:-1,y=[w,q,0,w+2/3,q,0,w+2/3,q+1,0,w,q,0,w+2/3,q+1,0,w,q+1,0];A.set(y,v*g*R),x.set(f,d*g*R);const E=[R,R,R,R,R,R];M.set(E,p*g*R)}const I=new Me;I.setAttribute("position",new Re(A,v)),I.setAttribute("uv",new Re(x,d)),I.setAttribute("faceIndex",new Re(M,p)),t.push(I),s>Jn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jr(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zd(i,t,e){const n=new Float32Array(Tn),s=new O(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Qr(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function to(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bd(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===va||c===_a,h=c===si||c===ai;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new Kr(i)),u=l?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Kr(i));const f=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,f),r.addEventListener("dispose",a),f.texture}else return null}}}return r}function s(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gd(i,t,e,n){const s={},a=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let d=0,p=v.length;d<p;d++)t.remove(v[d])}f.removeEventListener("dispose",o),delete s[f.id];const m=a.get(f);m&&(t.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function r(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let d=0,p=v.length;d<p;d++)t.update(v[d],i.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let x=0,M=A.length;x<M;x+=3){const I=A[x+0],R=A[x+1],w=A[x+2];f.push(I,R,R,w,w,I)}}else if(g!==void 0){const A=g.array;v=g.version;for(let x=0,M=A.length/3-1;x<M;x+=3){const I=x+0,R=x+1,w=x+2;f.push(I,R,R,w,w,I)}}else return;const d=new(Yo(f)?tl:Qo)(f,1);d.version=v;const p=a.get(u);p&&t.remove(p),a.set(u,d)}function h(u){const f=a.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return a.get(u)}return{get:r,update:c,getWireframeAttribute:h}}function Vd(i,t,e,n){const s=n.isWebGL2;let a;function o(m){a=m}let r,c;function l(m){r=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(a,g,r,m*c),e.update(g,a,1)}function u(m,g,v){if(v===0)return;let d,p;if(s)d=i,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,g,r,m*c,v),e.update(g,a,v)}function f(m,g,v){if(v===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<v;p++)this.render(m[p]/c,g[p]);else{d.multiDrawElementsWEBGL(a,g,0,r,m,0,v);let p=0;for(let A=0;A<v;A++)p+=g[A];e.update(p,a,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Wd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=r*(a/3);break;case i.LINES:e.lines+=r*(a/2);break;case i.LINE_STRIP:e.lines+=r*(a-1);break;case i.LINE_LOOP:e.lines+=r*a;break;case i.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qd(i,t){return i[0]-t[0]}function Xd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Yd(i,t,e){const n={},s=new Float32Array(8),a=new WeakMap,o=new fe,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let d=a.get(h);if(d===void 0||d.count!==v){let H=function(){nt.dispose(),a.delete(h),h.removeEventListener("dispose",H)};var m=H;d!==void 0&&d.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],q=h.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),I===!0&&(y=3);let E=h.attributes.position.count*y,k=1;E>t.maxTextureSize&&(k=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const Y=new Float32Array(E*k*4*v),nt=new jo(Y,E,k,v);nt.type=un,nt.needsUpdate=!0;const U=y*4;for(let N=0;N<v;N++){const X=R[N],K=w[N],tt=q[N],C=E*k*4*N;for(let T=0;T<X.count;T++){const G=T*U;x===!0&&(o.fromBufferAttribute(X,T),Y[C+G+0]=o.x,Y[C+G+1]=o.y,Y[C+G+2]=o.z,Y[C+G+3]=0),M===!0&&(o.fromBufferAttribute(K,T),Y[C+G+4]=o.x,Y[C+G+5]=o.y,Y[C+G+6]=o.z,Y[C+G+7]=0),I===!0&&(o.fromBufferAttribute(tt,T),Y[C+G+8]=o.x,Y[C+G+9]=o.y,Y[C+G+10]=o.z,Y[C+G+11]=tt.itemSize===4?o.w:1)}}d={count:v,texture:nt,size:new mt(E,k)},a.set(h,d),h.addEventListener("dispose",H)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const A=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",A),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let M=0;M<g;M++)v[M]=[M,0];n[h.id]=v}for(let M=0;M<g;M++){const I=v[M];I[0]=M,I[1]=f[M]}v.sort(Xd);for(let M=0;M<8;M++)M<g&&v[M][1]?(r[M][0]=v[M][0],r[M][1]=v[M][1]):(r[M][0]=Number.MAX_SAFE_INTEGER,r[M][1]=0);r.sort(qd);const d=h.morphAttributes.position,p=h.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const I=r[M],R=I[0],w=I[1];R!==Number.MAX_SAFE_INTEGER&&w?(d&&h.getAttribute("morphTarget"+M)!==d[R]&&h.setAttribute("morphTarget"+M,d[R]),p&&h.getAttribute("morphNormal"+M)!==p[R]&&h.setAttribute("morphNormal"+M,p[R]),s[M]=w,A+=w):(d&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}const x=h.morphTargetsRelative?1:1-A;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Zd(i,t,e,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class rl extends Ce{constructor(t,e,n,s,a,o,r,c,l,h){if(h=h!==void 0?h:wn,h!==wn&&h!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wn&&(n=hn),n===void 0&&h===ri&&(n=An),super(null,s,a,o,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Se,this.minFilter=c!==void 0?c:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ol=new Ce,ll=new rl(1,1);ll.compareFunction=Xo;const cl=new jo,hl=new Uc,ul=new il,eo=[],no=[],io=new Float32Array(16),so=new Float32Array(9),ao=new Float32Array(4);function ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=eo[s];if(a===void 0&&(a=new Float32Array(s),eo[s]=a),t!==0){n.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,i[o].toArray(a,r)}return a}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ms(i,t){let e=no[t];e===void 0&&(e=new Int32Array(t),no[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function Qd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;ao.set(n),i.uniformMatrix2fv(this.addr,!1,ao),ce(e,n)}}function tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;so.set(n),i.uniformMatrix3fv(this.addr,!1,so),ce(e,n)}}function ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;io.set(n),i.uniformMatrix4fv(this.addr,!1,io),ce(e,n)}}function nf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function of(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function uf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?ll:ol;e.setTexture2D(t||a,s)}function df(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hl,s)}function ff(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ul,s)}function pf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cl,s)}function mf(i){switch(i){case 5126:return $d;case 35664:return jd;case 35665:return Kd;case 35666:return Jd;case 35674:return Qd;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return af;case 35669:case 35673:return rf;case 5125:return of;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}function gf(i,t){i.uniform1fv(this.addr,t)}function vf(i,t){const e=ui(t,this.size,2);i.uniform2fv(this.addr,e)}function _f(i,t){const e=ui(t,this.size,3);i.uniform3fv(this.addr,e)}function xf(i,t){const e=ui(t,this.size,4);i.uniform4fv(this.addr,e)}function yf(i,t){const e=ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sf(i,t){const e=ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mf(i,t){const e=ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bf(i,t){i.uniform1iv(this.addr,t)}function Ef(i,t){i.uniform2iv(this.addr,t)}function Tf(i,t){i.uniform3iv(this.addr,t)}function Af(i,t){i.uniform4iv(this.addr,t)}function wf(i,t){i.uniform1uiv(this.addr,t)}function Cf(i,t){i.uniform2uiv(this.addr,t)}function Rf(i,t){i.uniform3uiv(this.addr,t)}function Pf(i,t){i.uniform4uiv(this.addr,t)}function Lf(i,t,e){const n=this.cache,s=t.length,a=Ms(e,s);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ol,a[o])}function Uf(i,t,e){const n=this.cache,s=t.length,a=Ms(e,s);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hl,a[o])}function Df(i,t,e){const n=this.cache,s=t.length,a=Ms(e,s);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ul,a[o])}function If(i,t,e){const n=this.cache,s=t.length,a=Ms(e,s);le(n,a)||(i.uniform1iv(this.addr,a),ce(n,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cl,a[o])}function Nf(i){switch(i){case 5126:return gf;case 35664:return vf;case 35665:return _f;case 35666:return xf;case 35674:return yf;case 35675:return Sf;case 35676:return Mf;case 5124:case 35670:return bf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return Af;case 5125:return wf;case 36294:return Cf;case 36295:return Rf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return If}}class Of{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mf(e.type)}}class Ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nf(e.type)}}class kf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(t,e[r.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function ro(i,t){i.seq.push(t),i.map[t.id]=t}function zf(i,t,e){const n=i.name,s=n.length;for(na.lastIndex=0;;){const a=na.exec(n),o=na.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===s){ro(e,l===void 0?new Of(r,i,t):new Ff(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new kf(r),ro(e,u)),e=u}}}class cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);zf(a,o,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function oo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bf=37297;let Hf=0;function Gf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function Vf(i){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i);let n;switch(t===e?n="":t===ps&&e===fs?n="LinearDisplayP3ToLinearSRGB":t===fs&&e===ps&&(n="LinearSRGBToLinearDisplayP3"),i){case nn:case xs:return[n,"LinearTransferOETF"];case pe:case La:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function lo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Gf(i.getShaderSource(t),o)}else return s}function Wf(i,t){const e=Vf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qf(i,t){let e;switch(t){case tc:e="Linear";break;case ec:e="Reinhard";break;case nc:e="OptimizedCineon";break;case ic:e="ACESFilmic";break;case ac:e="AgX";break;case sc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qn).join(`
`)}function Yf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qn).join(`
`)}function Zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $f(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),o=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:r}}return e}function Qn(i){return i!==""}function co(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ho(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(i){return i.replace(jf,Jf)}const Kf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jf(i,t){let e=Ht[t];if(e===void 0){const n=Kf.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const Qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uo(i){return i.replace(Qf,tp)}function tp(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function fo(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ep(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Do?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qe&&(t="SHADOWMAP_TYPE_VSM"),t}function np(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case si:case ai:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ip(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:t="ENVMAP_MODE_REFRACTION";break}return t}function sp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case No:t="ENVMAP_BLENDING_MULTIPLY";break;case Jl:t="ENVMAP_BLENDING_MIX";break;case Ql:t="ENVMAP_BLENDING_ADD";break}return t}function ap(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rp(i,t,e,n){const s=i.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=ep(e),l=np(e),h=ip(e),u=sp(e),f=ap(e),m=e.isWebGL2?"":Xf(e),g=Yf(e),v=Zf(a),d=s.createProgram();let p,A,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qn).join(`
`),p.length>0&&(p+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qn).join(`
`),A.length>0&&(A+=`
`)):(p=[fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),A=[m,fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==fn?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Wf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qn).join(`
`)),o=Ea(o),o=co(o,e),o=ho(o,e),r=Ea(r),r=co(r,e),r=ho(r,e),o=uo(o),r=uo(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const M=x+p+o,I=x+A+r,R=oo(s,s.VERTEX_SHADER,M),w=oo(s,s.FRAGMENT_SHADER,I);s.attachShader(d,R),s.attachShader(d,w),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function q(Y){if(i.debug.checkShaderErrors){const nt=s.getProgramInfoLog(d).trim(),U=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(w).trim();let N=!0,X=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,R,w);else{const K=lo(s,R,"vertex"),tt=lo(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+K+`
`+tt)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(U===""||H==="")&&(X=!1);X&&(Y.diagnostics={runnable:N,programLog:nt,vertexShader:{log:U,prefix:p},fragmentShader:{log:H,prefix:A}})}s.deleteShader(R),s.deleteShader(w),y=new cs(s,d),E=$f(s,d)}let y;this.getUniforms=function(){return y===void 0&&q(this),y};let E;this.getAttributes=function(){return E===void 0&&q(this),E};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(d,Bf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hf++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=R,this.fragmentShader=w,this}let op=0;class lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cp(t),e.set(t,n)),n}}class cp{constructor(t){this.id=op++,this.code=t,this.usedTimes=0}}function hp(i,t,e,n,s,a,o){const r=new Ko,c=new lp,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function d(y,E,k,Y,nt){const U=Y.fog,H=nt.geometry,N=y.isMeshStandardMaterial?Y.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||N),K=X&&X.mapping===_s?X.image.height:null,tt=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const C=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,T=C!==void 0?C.length:0;let G=0;H.morphAttributes.position!==void 0&&(G=1),H.morphAttributes.normal!==void 0&&(G=2),H.morphAttributes.color!==void 0&&(G=3);let F,W,et,ot;if(tt){const ie=We[tt];F=ie.vertexShader,W=ie.fragmentShader}else F=y.vertexShader,W=y.fragmentShader,c.update(y),et=c.getVertexShaderID(y),ot=c.getFragmentShaderID(y);const Q=i.getRenderTarget(),ut=nt.isInstancedMesh===!0,xt=nt.isBatchedMesh===!0,pt=!!y.map,yt=!!y.matcap,L=!!X,it=!!y.aoMap,V=!!y.lightMap,st=!!y.bumpMap,J=!!y.normalMap,bt=!!y.displacementMap,gt=!!y.emissiveMap,S=!!y.metalnessMap,_=!!y.roughnessMap,z=y.anisotropy>0,ct=y.clearcoat>0,lt=y.iridescence>0,at=y.sheen>0,wt=y.transmission>0,vt=z&&!!y.anisotropyMap,Mt=ct&&!!y.clearcoatMap,Rt=ct&&!!y.clearcoatNormalMap,Ot=ct&&!!y.clearcoatRoughnessMap,rt=lt&&!!y.iridescenceMap,Vt=lt&&!!y.iridescenceThicknessMap,zt=at&&!!y.sheenColorMap,Nt=at&&!!y.sheenRoughnessMap,Lt=!!y.specularMap,Et=!!y.specularColorMap,P=!!y.specularIntensityMap,dt=wt&&!!y.transmissionMap,Ct=wt&&!!y.thicknessMap,At=!!y.gradientMap,ht=!!y.alphaMap,D=y.alphaTest>0,ft=!!y.alphaHash,St=!!y.extensions,Dt=!!H.attributes.uv1,Ut=!!H.attributes.uv2,Yt=!!H.attributes.uv3;let Zt=fn;return y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Zt=i.toneMapping),{isWebGL2:h,shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:F,fragmentShader:W,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:xt,instancing:ut,instancingColor:ut&&nt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:nn,map:pt,matcap:yt,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:K,aoMap:it,lightMap:V,bumpMap:st,normalMap:J,displacementMap:f&&bt,emissiveMap:gt,normalMapObjectSpace:J&&y.normalMapType===vc,normalMapTangentSpace:J&&y.normalMapType===qo,metalnessMap:S,roughnessMap:_,anisotropy:z,anisotropyMap:vt,clearcoat:ct,clearcoatMap:Mt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ot,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:Vt,sheen:at,sheenColorMap:zt,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Et,specularIntensityMap:P,transmission:wt,transmissionMap:dt,thicknessMap:Ct,gradientMap:At,opaque:y.transparent===!1&&y.blending===ni,alphaMap:ht,alphaTest:D,alphaHash:ft,combine:y.combine,mapUv:pt&&v(y.map.channel),aoMapUv:it&&v(y.aoMap.channel),lightMapUv:V&&v(y.lightMap.channel),bumpMapUv:st&&v(y.bumpMap.channel),normalMapUv:J&&v(y.normalMap.channel),displacementMapUv:bt&&v(y.displacementMap.channel),emissiveMapUv:gt&&v(y.emissiveMap.channel),metalnessMapUv:S&&v(y.metalnessMap.channel),roughnessMapUv:_&&v(y.roughnessMap.channel),anisotropyMapUv:vt&&v(y.anisotropyMap.channel),clearcoatMapUv:Mt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(y.sheenRoughnessMap.channel),specularMapUv:Lt&&v(y.specularMap.channel),specularColorMapUv:Et&&v(y.specularColorMap.channel),specularIntensityMapUv:P&&v(y.specularIntensityMap.channel),transmissionMapUv:dt&&v(y.transmissionMap.channel),thicknessMapUv:Ct&&v(y.thicknessMap.channel),alphaMapUv:ht&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(J||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ut,vertexUv3s:Yt,pointsUvs:nt.isPoints===!0&&!!H.attributes.uv&&(pt||ht),fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:G,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:pt&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===Kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Be,flipSided:y.side===Ee,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:St&&y.extensions.derivatives===!0,extensionFragDepth:St&&y.extensions.fragDepth===!0,extensionDrawBuffers:St&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)E.push(k),E.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(A(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function A(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){r.disableAll(),E.isWebGL2&&r.enable(0),E.supportsVertexTextures&&r.enable(1),E.instancing&&r.enable(2),E.instancingColor&&r.enable(3),E.matcap&&r.enable(4),E.envMap&&r.enable(5),E.normalMapObjectSpace&&r.enable(6),E.normalMapTangentSpace&&r.enable(7),E.clearcoat&&r.enable(8),E.iridescence&&r.enable(9),E.alphaTest&&r.enable(10),E.vertexColors&&r.enable(11),E.vertexAlphas&&r.enable(12),E.vertexUv1s&&r.enable(13),E.vertexUv2s&&r.enable(14),E.vertexUv3s&&r.enable(15),E.vertexTangents&&r.enable(16),E.anisotropy&&r.enable(17),E.alphaHash&&r.enable(18),E.batching&&r.enable(19),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.skinning&&r.enable(4),E.morphTargets&&r.enable(5),E.morphNormals&&r.enable(6),E.morphColors&&r.enable(7),E.premultipliedAlpha&&r.enable(8),E.shadowMapEnabled&&r.enable(9),E.useLegacyLights&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),y.push(r.mask)}function M(y){const E=g[y.type];let k;if(E){const Y=We[E];k=qc.clone(Y.uniforms)}else k=y.uniforms;return k}function I(y,E){let k;for(let Y=0,nt=l.length;Y<nt;Y++){const U=l[Y];if(U.cacheKey===E){k=U,++k.usedTimes;break}}return k===void 0&&(k=new rp(i,E,y,a),l.push(k)),k}function R(y){if(--y.usedTimes===0){const E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),y.destroy()}}function w(y){c.remove(y)}function q(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:q}}function up(){let i=new WeakMap;function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function e(a){i.delete(a)}function n(a,o,r){i.get(a)[o]=r}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function dp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function po(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mo(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,m,g,v,d){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:d},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=d),t++,p}function r(u,f,m,g,v,d){const p=o(u,f,m,g,v,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(u,f,m,g,v,d){const p=o(u,f,m,g,v,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||dp),n.length>1&&n.sort(f||po),s.length>1&&s.sort(f||po)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:r,unshift:c,finish:h,sort:l}}function fp(){let i=new WeakMap;function t(n,s){const a=i.get(n);let o;return a===void 0?(o=new mo,i.set(n,[o])):s>=a.length?(o=new mo,a.push(o)):o=a[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Xt};break;case"SpotLight":e={position:new O,direction:new O,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function mp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gp=0;function vp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _p(i,t){const e=new pp,n=mp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);const a=new O,o=new ae,r=new ae;function c(h,u){let f=0,m=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let v=0,d=0,p=0,A=0,x=0,M=0,I=0,R=0,w=0,q=0,y=0;h.sort(vp);const E=u===!0?Math.PI:1;for(let Y=0,nt=h.length;Y<nt;Y++){const U=h[Y],H=U.color,N=U.intensity,X=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=H.r*N*E,m+=H.g*N*E,g+=H.b*N*E;else if(U.isLightProbe){for(let tt=0;tt<9;tt++)s.probe[tt].addScaledVector(U.sh.coefficients[tt],N);y++}else if(U.isDirectionalLight){const tt=e.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){const C=U.shadow,T=n.get(U);T.shadowBias=C.bias,T.shadowNormalBias=C.normalBias,T.shadowRadius=C.radius,T.shadowMapSize=C.mapSize,s.directionalShadow[v]=T,s.directionalShadowMap[v]=K,s.directionalShadowMatrix[v]=U.shadow.matrix,M++}s.directional[v]=tt,v++}else if(U.isSpotLight){const tt=e.get(U);tt.position.setFromMatrixPosition(U.matrixWorld),tt.color.copy(H).multiplyScalar(N*E),tt.distance=X,tt.coneCos=Math.cos(U.angle),tt.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),tt.decay=U.decay,s.spot[p]=tt;const C=U.shadow;if(U.map&&(s.spotLightMap[w]=U.map,w++,C.updateMatrices(U),U.castShadow&&q++),s.spotLightMatrix[p]=C.matrix,U.castShadow){const T=n.get(U);T.shadowBias=C.bias,T.shadowNormalBias=C.normalBias,T.shadowRadius=C.radius,T.shadowMapSize=C.mapSize,s.spotShadow[p]=T,s.spotShadowMap[p]=K,R++}p++}else if(U.isRectAreaLight){const tt=e.get(U);tt.color.copy(H).multiplyScalar(N),tt.halfWidth.set(U.width*.5,0,0),tt.halfHeight.set(0,U.height*.5,0),s.rectArea[A]=tt,A++}else if(U.isPointLight){const tt=e.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity*E),tt.distance=U.distance,tt.decay=U.decay,U.castShadow){const C=U.shadow,T=n.get(U);T.shadowBias=C.bias,T.shadowNormalBias=C.normalBias,T.shadowRadius=C.radius,T.shadowMapSize=C.mapSize,T.shadowCameraNear=C.camera.near,T.shadowCameraFar=C.camera.far,s.pointShadow[d]=T,s.pointShadowMap[d]=K,s.pointShadowMatrix[d]=U.shadow.matrix,I++}s.point[d]=tt,d++}else if(U.isHemisphereLight){const tt=e.get(U);tt.skyColor.copy(U.color).multiplyScalar(N*E),tt.groundColor.copy(U.groundColor).multiplyScalar(N*E),s.hemi[x]=tt,x++}}A>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const k=s.hash;(k.directionalLength!==v||k.pointLength!==d||k.spotLength!==p||k.rectAreaLength!==A||k.hemiLength!==x||k.numDirectionalShadows!==M||k.numPointShadows!==I||k.numSpotShadows!==R||k.numSpotMaps!==w||k.numLightProbes!==y)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=A,s.point.length=d,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+w-q,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=y,k.directionalLength=v,k.pointLength=d,k.spotLength=p,k.rectAreaLength=A,k.hemiLength=x,k.numDirectionalShadows=M,k.numPointShadows=I,k.numSpotShadows=R,k.numSpotMaps=w,k.numLightProbes=y,s.version=gp++)}function l(h,u){let f=0,m=0,g=0,v=0,d=0;const p=u.matrixWorldInverse;for(let A=0,x=h.length;A<x;A++){const M=h[A];if(M.isDirectionalLight){const I=s.directional[f];I.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(p),f++}else if(M.isSpotLight){const I=s.spot[g];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const I=s.rectArea[v];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(p),r.identity(),o.copy(M.matrixWorld),o.premultiply(p),r.extractRotation(o),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(r),I.halfHeight.applyMatrix4(r),v++}else if(M.isPointLight){const I=s.point[m];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const I=s.hemi[d];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(p),d++}}}return{setup:c,setupView:l,state:s}}function go(i,t){const e=new _p(i,t),n=[],s=[];function a(){n.length=0,s.length=0}function o(u){n.push(u)}function r(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function xp(i,t){let e=new WeakMap;function n(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new go(i,t),e.set(a,[c])):o>=r.length?(c=new go(i,t),r.push(c)):c=r[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class yp extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sp extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ep(i,t,e){let n=new Da;const s=new mt,a=new mt,o=new fe,r=new yp({depthPacking:gc}),c=new Sp,l={},h=e.maxTextureSize,u={[mn]:Ee,[Ee]:mn,[Be]:Be},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Mp,fragmentShader:bp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new de(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let p=this.type;this.render=function(R,w,q){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(dn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const nt=p!==Qe&&this.type===Qe,U=p===Qe&&this.type!==Qe;for(let H=0,N=R.length;H<N;H++){const X=R[H],K=X.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const tt=K.getFrameExtents();if(s.multiply(tt),a.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/tt.x),s.x=a.x*tt.x,K.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/tt.y),s.y=a.y*tt.y,K.mapSize.y=a.y)),K.map===null||nt===!0||U===!0){const T=this.type!==Qe?{minFilter:Se,magFilter:Se}:{};K.map!==null&&K.map.dispose(),K.map=new Rn(s.x,s.y,T),K.map.texture.name=X.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const C=K.getViewportCount();for(let T=0;T<C;T++){const G=K.getViewport(T);o.set(a.x*G.x,a.y*G.y,a.x*G.z,a.y*G.w),Y.viewport(o),K.updateMatrices(X,T),n=K.getFrustum(),M(w,q,K.camera,X,this.type)}K.isPointLightShadow!==!0&&this.type===Qe&&A(K,q),K.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(y,E,k)};function A(R,w){const q=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,q,f,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,q,m,v,null)}function x(R,w,q,y){let E=null;const k=q.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)E=k;else if(E=q.isPointLight===!0?c:r,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=E.uuid,nt=w.uuid;let U=l[Y];U===void 0&&(U={},l[Y]=U);let H=U[nt];H===void 0&&(H=E.clone(),U[nt]=H,w.addEventListener("dispose",I)),E=H}if(E.visible=w.visible,E.wireframe=w.wireframe,y===Qe?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=i.properties.get(E);Y.light=q}return E}function M(R,w,q,y,E){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Qe)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld);const nt=t.update(R),U=R.material;if(Array.isArray(U)){const H=nt.groups;for(let N=0,X=H.length;N<X;N++){const K=H[N],tt=U[K.materialIndex];if(tt&&tt.visible){const C=x(R,tt,y,E);R.onBeforeShadow(i,R,w,q,nt,C,K),i.renderBufferDirect(q,null,nt,C,R,K),R.onAfterShadow(i,R,w,q,nt,C,K)}}}else if(U.visible){const H=x(R,U,y,E);R.onBeforeShadow(i,R,w,q,nt,H,null),i.renderBufferDirect(q,null,nt,H,R,null),R.onAfterShadow(i,R,w,q,nt,H,null)}}const Y=R.children;for(let nt=0,U=Y.length;nt<U;nt++)M(Y[nt],w,q,y,E)}function I(R){R.target.removeEventListener("dispose",I);for(const q in l){const y=l[q],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Tp(i,t,e){const n=e.isWebGL2;function s(){let D=!1;const ft=new fe;let St=null;const Dt=new fe(0,0,0,0);return{setMask:function(Ut){St!==Ut&&!D&&(i.colorMask(Ut,Ut,Ut,Ut),St=Ut)},setLocked:function(Ut){D=Ut},setClear:function(Ut,Yt,Zt,te,ie){ie===!0&&(Ut*=te,Yt*=te,Zt*=te),ft.set(Ut,Yt,Zt,te),Dt.equals(ft)===!1&&(i.clearColor(Ut,Yt,Zt,te),Dt.copy(ft))},reset:function(){D=!1,St=null,Dt.set(-1,0,0,0)}}}function a(){let D=!1,ft=null,St=null,Dt=null;return{setTest:function(Ut){Ut?xt(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Ut){ft!==Ut&&!D&&(i.depthMask(Ut),ft=Ut)},setFunc:function(Ut){if(St!==Ut){switch(Ut){case ql:i.depthFunc(i.NEVER);break;case Xl:i.depthFunc(i.ALWAYS);break;case Yl:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case jl:i.depthFunc(i.GREATER);break;case Kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=Ut}},setLocked:function(Ut){D=Ut},setClear:function(Ut){Dt!==Ut&&(i.clearDepth(Ut),Dt=Ut)},reset:function(){D=!1,ft=null,St=null,Dt=null}}}function o(){let D=!1,ft=null,St=null,Dt=null,Ut=null,Yt=null,Zt=null,te=null,ie=null;return{setTest:function($t){D||($t?xt(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function($t){ft!==$t&&!D&&(i.stencilMask($t),ft=$t)},setFunc:function($t,re,Ve){(St!==$t||Dt!==re||Ut!==Ve)&&(i.stencilFunc($t,re,Ve),St=$t,Dt=re,Ut=Ve)},setOp:function($t,re,Ve){(Yt!==$t||Zt!==re||te!==Ve)&&(i.stencilOp($t,re,Ve),Yt=$t,Zt=re,te=Ve)},setLocked:function($t){D=$t},setClear:function($t){ie!==$t&&(i.clearStencil($t),ie=$t)},reset:function(){D=!1,ft=null,St=null,Dt=null,Ut=null,Yt=null,Zt=null,te=null,ie=null}}}const r=new s,c=new a,l=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,v=[],d=null,p=!1,A=null,x=null,M=null,I=null,R=null,w=null,q=null,y=new Xt(0,0,0),E=0,k=!1,Y=null,nt=null,U=null,H=null,N=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,tt=0;const C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(C)[1]),K=tt>=1):C.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),K=tt>=2);let T=null,G={};const F=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),et=new fe().fromArray(F),ot=new fe().fromArray(W);function Q(D,ft,St,Dt){const Ut=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(D,Yt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<St;Zt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(ft+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return Yt}const ut={};ut[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ut[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),xt(i.DEPTH_TEST),c.setFunc(us),gt(!1),S(ja),xt(i.CULL_FACE),J(dn);function xt(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function pt(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function yt(D,ft){return m[D]!==ft?(i.bindFramebuffer(D,ft),m[D]=ft,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ft),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function L(D,ft){let St=v,Dt=!1;if(D)if(St=g.get(ft),St===void 0&&(St=[],g.set(ft,St)),D.isWebGLMultipleRenderTargets){const Ut=D.texture;if(St.length!==Ut.length||St[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,Zt=Ut.length;Yt<Zt;Yt++)St[Yt]=i.COLOR_ATTACHMENT0+Yt;St.length=Ut.length,Dt=!0}}else St[0]!==i.COLOR_ATTACHMENT0&&(St[0]=i.COLOR_ATTACHMENT0,Dt=!0);else St[0]!==i.BACK&&(St[0]=i.BACK,Dt=!0);Dt&&(e.isWebGL2?i.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function it(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const V={[En]:i.FUNC_ADD,[Pl]:i.FUNC_SUBTRACT,[Ll]:i.FUNC_REVERSE_SUBTRACT};if(n)V[tr]=i.MIN,V[er]=i.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(V[tr]=D.MIN_EXT,V[er]=D.MAX_EXT)}const st={[Ul]:i.ZERO,[Dl]:i.ONE,[Il]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[Bl]:i.SRC_ALPHA_SATURATE,[kl]:i.DST_COLOR,[Ol]:i.DST_ALPHA,[Nl]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[zl]:i.ONE_MINUS_DST_COLOR,[Fl]:i.ONE_MINUS_DST_ALPHA,[Hl]:i.CONSTANT_COLOR,[Gl]:i.ONE_MINUS_CONSTANT_COLOR,[Vl]:i.CONSTANT_ALPHA,[Wl]:i.ONE_MINUS_CONSTANT_ALPHA};function J(D,ft,St,Dt,Ut,Yt,Zt,te,ie,$t){if(D===dn){p===!0&&(pt(i.BLEND),p=!1);return}if(p===!1&&(xt(i.BLEND),p=!0),D!==Rl){if(D!==A||$t!==k){if((x!==En||R!==En)&&(i.blendEquation(i.FUNC_ADD),x=En,R=En),$t)switch(D){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.ONE,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,I=null,w=null,q=null,y.set(0,0,0),E=0,A=D,k=$t}return}Ut=Ut||ft,Yt=Yt||St,Zt=Zt||Dt,(ft!==x||Ut!==R)&&(i.blendEquationSeparate(V[ft],V[Ut]),x=ft,R=Ut),(St!==M||Dt!==I||Yt!==w||Zt!==q)&&(i.blendFuncSeparate(st[St],st[Dt],st[Yt],st[Zt]),M=St,I=Dt,w=Yt,q=Zt),(te.equals(y)===!1||ie!==E)&&(i.blendColor(te.r,te.g,te.b,ie),y.copy(te),E=ie),A=D,k=!1}function bt(D,ft){D.side===Be?pt(i.CULL_FACE):xt(i.CULL_FACE);let St=D.side===Ee;ft&&(St=!St),gt(St),D.blending===ni&&D.transparent===!1?J(dn):J(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),r.setMask(D.colorWrite);const Dt=D.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(D){Y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Y=D)}function S(D){D!==wl?(xt(i.CULL_FACE),D!==nt&&(D===ja?i.cullFace(i.BACK):D===Cl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),nt=D}function _(D){D!==U&&(K&&i.lineWidth(D),U=D)}function z(D,ft,St){D?(xt(i.POLYGON_OFFSET_FILL),(H!==ft||N!==St)&&(i.polygonOffset(ft,St),H=ft,N=St)):pt(i.POLYGON_OFFSET_FILL)}function ct(D){D?xt(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function lt(D){D===void 0&&(D=i.TEXTURE0+X-1),T!==D&&(i.activeTexture(D),T=D)}function at(D,ft,St){St===void 0&&(T===null?St=i.TEXTURE0+X-1:St=T);let Dt=G[St];Dt===void 0&&(Dt={type:void 0,texture:void 0},G[St]=Dt),(Dt.type!==D||Dt.texture!==ft)&&(T!==St&&(i.activeTexture(St),T=St),i.bindTexture(D,ft||ut[D]),Dt.type=D,Dt.texture=ft)}function wt(){const D=G[T];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(D){et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function dt(D){ot.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function Ct(D,ft){let St=u.get(ft);St===void 0&&(St=new WeakMap,u.set(ft,St));let Dt=St.get(D);Dt===void 0&&(Dt=i.getUniformBlockIndex(ft,D.name),St.set(D,Dt))}function At(D,ft){const Dt=u.get(ft).get(D);h.get(ft)!==Dt&&(i.uniformBlockBinding(ft,Dt,D.__bindingPointIndex),h.set(ft,Dt))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},T=null,G={},m={},g=new WeakMap,v=[],d=null,p=!1,A=null,x=null,M=null,I=null,R=null,w=null,q=null,y=new Xt(0,0,0),E=0,k=!1,Y=null,nt=null,U=null,H=null,N=null,et.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:xt,disable:pt,bindFramebuffer:yt,drawBuffers:L,useProgram:it,setBlending:J,setMaterial:bt,setFlipSided:gt,setCullFace:S,setLineWidth:_,setPolygonOffset:z,setScissorTest:ct,activeTexture:lt,bindTexture:at,unbindTexture:wt,compressedTexImage2D:vt,compressedTexImage3D:Mt,texImage2D:Lt,texImage3D:Et,updateUBOMapping:Ct,uniformBlockBinding:At,texStorage2D:zt,texStorage3D:Nt,texSubImage2D:Rt,texSubImage3D:Ot,compressedTexSubImage2D:rt,compressedTexSubImage3D:Vt,scissor:P,viewport:dt,reset:ht}}function Ap(i,t,e,n,s,a,o){const r=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):gs("canvas")}function v(S,_,z,ct){let lt=1;if((S.width>ct||S.height>ct)&&(lt=ct/Math.max(S.width,S.height)),lt<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const at=_?ba:Math.floor,wt=at(lt*S.width),vt=at(lt*S.height);u===void 0&&(u=g(wt,vt));const Mt=z?g(wt,vt):u;return Mt.width=wt,Mt.height=vt,Mt.getContext("2d").drawImage(S,0,0,wt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+wt+"x"+vt+")."),Mt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function d(S){return Lr(S.width)&&Lr(S.height)}function p(S){return r?!1:S.wrapS!==He||S.wrapT!==He||S.minFilter!==Se&&S.minFilter!==De}function A(S,_){return S.generateMipmaps&&_&&S.minFilter!==Se&&S.minFilter!==De}function x(S){i.generateMipmap(S)}function M(S,_,z,ct,lt=!1){if(r===!1)return _;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let at=_;if(_===i.RED&&(z===i.FLOAT&&(at=i.R32F),z===i.HALF_FLOAT&&(at=i.R16F),z===i.UNSIGNED_BYTE&&(at=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.R8UI),z===i.UNSIGNED_SHORT&&(at=i.R16UI),z===i.UNSIGNED_INT&&(at=i.R32UI),z===i.BYTE&&(at=i.R8I),z===i.SHORT&&(at=i.R16I),z===i.INT&&(at=i.R32I)),_===i.RG&&(z===i.FLOAT&&(at=i.RG32F),z===i.HALF_FLOAT&&(at=i.RG16F),z===i.UNSIGNED_BYTE&&(at=i.RG8)),_===i.RGBA){const wt=lt?ds:jt.getTransfer(ct);z===i.FLOAT&&(at=i.RGBA32F),z===i.HALF_FLOAT&&(at=i.RGBA16F),z===i.UNSIGNED_BYTE&&(at=wt===Kt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function I(S,_,z){return A(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==Se&&S.minFilter!==De?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){return S===Se||S===nr||S===Cs?i.NEAREST:i.LINEAR}function w(S){const _=S.target;_.removeEventListener("dispose",w),y(_),_.isVideoTexture&&h.delete(_)}function q(S){const _=S.target;_.removeEventListener("dispose",q),k(_)}function y(S){const _=n.get(S);if(_.__webglInit===void 0)return;const z=S.source,ct=f.get(z);if(ct){const lt=ct[_.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(S),Object.keys(ct).length===0&&f.delete(z)}n.remove(S)}function E(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const z=S.source,ct=f.get(z);delete ct[_.__cacheKey],o.memory.textures--}function k(S){const _=S.texture,z=n.get(S),ct=n.get(_);if(ct.__webglTexture!==void 0&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(z.__webglFramebuffer[lt]))for(let at=0;at<z.__webglFramebuffer[lt].length;at++)i.deleteFramebuffer(z.__webglFramebuffer[lt][at]);else i.deleteFramebuffer(z.__webglFramebuffer[lt]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[lt])}else{if(Array.isArray(z.__webglFramebuffer))for(let lt=0;lt<z.__webglFramebuffer.length;lt++)i.deleteFramebuffer(z.__webglFramebuffer[lt]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let lt=0;lt<z.__webglColorRenderbuffer.length;lt++)z.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[lt]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let lt=0,at=_.length;lt<at;lt++){const wt=n.get(_[lt]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(_[lt])}n.remove(_),n.remove(S)}let Y=0;function nt(){Y=0}function U(){const S=Y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),Y+=1,S}function H(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function N(S,_){const z=n.get(S);if(S.isVideoTexture&&bt(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){const ct=S.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(z,S,_);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function X(S,_){const z=n.get(S);if(S.version>0&&z.__version!==S.version){et(z,S,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function K(S,_){const z=n.get(S);if(S.version>0&&z.__version!==S.version){et(z,S,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function tt(S,_){const z=n.get(S);if(S.version>0&&z.__version!==S.version){ot(z,S,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const C={[xa]:i.REPEAT,[He]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},T={[Se]:i.NEAREST,[nr]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[rc]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},G={[_c]:i.NEVER,[Ec]:i.ALWAYS,[xc]:i.LESS,[Xo]:i.LEQUAL,[yc]:i.EQUAL,[bc]:i.GEQUAL,[Sc]:i.GREATER,[Mc]:i.NOTEQUAL};function F(S,_,z){if(z?(i.texParameteri(S,i.TEXTURE_WRAP_S,C[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,C[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,C[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,T[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,T[_.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==He||_.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,R(_.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==Se&&_.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,G[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===Se||_.minFilter!==Cs&&_.minFilter!==Ei||_.type===un&&t.has("OES_texture_float_linear")===!1||r===!1&&_.type===Ti&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(S,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function W(S,_){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",w));const ct=_.source;let lt=f.get(ct);lt===void 0&&(lt={},f.set(ct,lt));const at=H(_);if(at!==S.__cacheKey){lt[at]===void 0&&(lt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),lt[at].usedTimes++;const wt=lt[S.__cacheKey];wt!==void 0&&(lt[S.__cacheKey].usedTimes--,wt.usedTimes===0&&E(_)),S.__cacheKey=at,S.__webglTexture=lt[at].texture}return z}function et(S,_,z){let ct=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ct=i.TEXTURE_3D);const lt=W(S,_),at=_.source;e.bindTexture(ct,S.__webglTexture,i.TEXTURE0+z);const wt=n.get(at);if(at.version!==wt.__version||lt===!0){e.activeTexture(i.TEXTURE0+z);const vt=jt.getPrimaries(jt.workingColorSpace),Mt=_.colorSpace===Oe?null:jt.getPrimaries(_.colorSpace),Rt=_.colorSpace===Oe||vt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ot=p(_)&&d(_.image)===!1;let rt=v(_.image,Ot,!1,s.maxTextureSize);rt=gt(_,rt);const Vt=d(rt)||r,zt=a.convert(_.format,_.colorSpace);let Nt=a.convert(_.type),Lt=M(_.internalFormat,zt,Nt,_.colorSpace,_.isVideoTexture);F(ct,_,Vt);let Et;const P=_.mipmaps,dt=r&&_.isVideoTexture!==!0&&Lt!==Vo,Ct=wt.__version===void 0||lt===!0,At=I(_,rt,Vt);if(_.isDepthTexture)Lt=i.DEPTH_COMPONENT,r?_.type===un?Lt=i.DEPTH_COMPONENT32F:_.type===hn?Lt=i.DEPTH_COMPONENT24:_.type===An?Lt=i.DEPTH24_STENCIL8:Lt=i.DEPTH_COMPONENT16:_.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===wn&&Lt===i.DEPTH_COMPONENT&&_.type!==Pa&&_.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=hn,Nt=a.convert(_.type)),_.format===ri&&Lt===i.DEPTH_COMPONENT&&(Lt=i.DEPTH_STENCIL,_.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=An,Nt=a.convert(_.type))),Ct&&(dt?e.texStorage2D(i.TEXTURE_2D,1,Lt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,rt.width,rt.height,0,zt,Nt,null));else if(_.isDataTexture)if(P.length>0&&Vt){dt&&Ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,P[0].width,P[0].height);for(let ht=0,D=P.length;ht<D;ht++)Et=P[ht],dt?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Et.width,Et.height,zt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,ht,Lt,Et.width,Et.height,0,zt,Nt,Et.data);_.generateMipmaps=!1}else dt?(Ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,zt,Nt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,rt.width,rt.height,0,zt,Nt,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){dt&&Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Lt,P[0].width,P[0].height,rt.depth);for(let ht=0,D=P.length;ht<D;ht++)Et=P[ht],_.format!==Ge?zt!==null?dt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Et.width,Et.height,rt.depth,zt,Et.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Lt,Et.width,Et.height,rt.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Et.width,Et.height,rt.depth,zt,Nt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Lt,Et.width,Et.height,rt.depth,0,zt,Nt,Et.data)}else{dt&&Ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,P[0].width,P[0].height);for(let ht=0,D=P.length;ht<D;ht++)Et=P[ht],_.format!==Ge?zt!==null?dt?e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Et.width,Et.height,zt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Lt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Et.width,Et.height,zt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,ht,Lt,Et.width,Et.height,0,zt,Nt,Et.data)}else if(_.isDataArrayTexture)dt?(Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Lt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,zt,Nt,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,rt.width,rt.height,rt.depth,0,zt,Nt,rt.data);else if(_.isData3DTexture)dt?(Ct&&e.texStorage3D(i.TEXTURE_3D,At,Lt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,zt,Nt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,rt.width,rt.height,rt.depth,0,zt,Nt,rt.data);else if(_.isFramebufferTexture){if(Ct)if(dt)e.texStorage2D(i.TEXTURE_2D,At,Lt,rt.width,rt.height);else{let ht=rt.width,D=rt.height;for(let ft=0;ft<At;ft++)e.texImage2D(i.TEXTURE_2D,ft,Lt,ht,D,0,zt,Nt,null),ht>>=1,D>>=1}}else if(P.length>0&&Vt){dt&&Ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,P[0].width,P[0].height);for(let ht=0,D=P.length;ht<D;ht++)Et=P[ht],dt?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,zt,Nt,Et):e.texImage2D(i.TEXTURE_2D,ht,Lt,zt,Nt,Et);_.generateMipmaps=!1}else dt?(Ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Nt,rt)):e.texImage2D(i.TEXTURE_2D,0,Lt,zt,Nt,rt);A(_,Vt)&&x(ct),wt.__version=at.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ot(S,_,z){if(_.image.length!==6)return;const ct=W(S,_),lt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+z);const at=n.get(lt);if(lt.version!==at.__version||ct===!0){e.activeTexture(i.TEXTURE0+z);const wt=jt.getPrimaries(jt.workingColorSpace),vt=_.colorSpace===Oe?null:jt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Oe||wt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ot=_.image[0]&&_.image[0].isDataTexture,rt=[];for(let ht=0;ht<6;ht++)!Rt&&!Ot?rt[ht]=v(_.image[ht],!1,!0,s.maxCubemapSize):rt[ht]=Ot?_.image[ht].image:_.image[ht],rt[ht]=gt(_,rt[ht]);const Vt=rt[0],zt=d(Vt)||r,Nt=a.convert(_.format,_.colorSpace),Lt=a.convert(_.type),Et=M(_.internalFormat,Nt,Lt,_.colorSpace),P=r&&_.isVideoTexture!==!0,dt=at.__version===void 0||ct===!0;let Ct=I(_,Vt,zt);F(i.TEXTURE_CUBE_MAP,_,zt);let At;if(Rt){P&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Et,Vt.width,Vt.height);for(let ht=0;ht<6;ht++){At=rt[ht].mipmaps;for(let D=0;D<At.length;D++){const ft=At[D];_.format!==Ge?Nt!==null?P?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D,Et,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D,0,0,ft.width,ft.height,Nt,Lt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D,Et,ft.width,ft.height,0,Nt,Lt,ft.data)}}}else{At=_.mipmaps,P&&dt&&(At.length>0&&Ct++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Et,rt[0].width,rt[0].height));for(let ht=0;ht<6;ht++)if(Ot){P?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,rt[ht].width,rt[ht].height,Nt,Lt,rt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Et,rt[ht].width,rt[ht].height,0,Nt,Lt,rt[ht].data);for(let D=0;D<At.length;D++){const St=At[D].image[ht].image;P?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D+1,0,0,St.width,St.height,Nt,Lt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D+1,Et,St.width,St.height,0,Nt,Lt,St.data)}}else{P?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt,Lt,rt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Et,Nt,Lt,rt[ht]);for(let D=0;D<At.length;D++){const ft=At[D];P?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D+1,0,0,Nt,Lt,ft.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,D+1,Et,Nt,Lt,ft.image[ht])}}}A(_,zt)&&x(i.TEXTURE_CUBE_MAP),at.__version=lt.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Q(S,_,z,ct,lt,at){const wt=a.convert(z.format,z.colorSpace),vt=a.convert(z.type),Mt=M(z.internalFormat,wt,vt,z.colorSpace);if(!n.get(_).__hasExternalTextures){const Ot=Math.max(1,_.width>>at),rt=Math.max(1,_.height>>at);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,at,Mt,Ot,rt,_.depth,0,wt,vt,null):e.texImage2D(lt,at,Mt,Ot,rt,0,wt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),J(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,lt,n.get(z).__webglTexture,0,st(_)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,lt,n.get(z).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(S,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let ct=r===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||J(_)){const lt=_.depthTexture;lt&&lt.isDepthTexture&&(lt.type===un?ct=i.DEPTH_COMPONENT32F:lt.type===hn&&(ct=i.DEPTH_COMPONENT24));const at=st(_);J(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,ct,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,ct,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){const ct=st(_);z&&J(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,_.width,_.height):J(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const ct=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let lt=0;lt<ct.length;lt++){const at=ct[lt],wt=a.convert(at.format,at.colorSpace),vt=a.convert(at.type),Mt=M(at.internalFormat,wt,vt,at.colorSpace),Rt=st(_);z&&J(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Mt,_.width,_.height):J(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Mt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),N(_.depthTexture,0);const ct=n.get(_.depthTexture).__webglTexture,lt=st(_);if(_.depthTexture.format===wn)J(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(_.depthTexture.format===ri)J(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function pt(S){const _=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");xt(_.__webglFramebuffer,S)}else if(z){_.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ct]),_.__webglDepthbuffer[ct]=i.createRenderbuffer(),ut(_.__webglDepthbuffer[ct],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),ut(_.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(S,_,z){const ct=n.get(S);_!==void 0&&Q(ct.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&pt(S)}function L(S){const _=S.texture,z=n.get(S),ct=n.get(_);S.addEventListener("dispose",q),S.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=_.version,o.memory.textures++);const lt=S.isWebGLCubeRenderTarget===!0,at=S.isWebGLMultipleRenderTargets===!0,wt=d(S)||r;if(lt){z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(r&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<_.mipmaps.length;Mt++)z.__webglFramebuffer[vt][Mt]=i.createFramebuffer()}else z.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(r&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let vt=0;vt<_.mipmaps.length;vt++)z.__webglFramebuffer[vt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){const vt=S.texture;for(let Mt=0,Rt=vt.length;Mt<Rt;Mt++){const Ot=n.get(vt[Mt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&S.samples>0&&J(S)===!1){const vt=at?_:[_];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Mt=0;Mt<vt.length;Mt++){const Rt=vt[Mt];z.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Mt]);const Ot=a.convert(Rt.format,Rt.colorSpace),rt=a.convert(Rt.type),Vt=M(Rt.internalFormat,Ot,rt,Rt.colorSpace,S.isXRRenderTarget===!0),zt=st(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Vt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,z.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(z.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),F(i.TEXTURE_CUBE_MAP,_,wt);for(let vt=0;vt<6;vt++)if(r&&_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)Q(z.__webglFramebuffer[vt][Mt],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else Q(z.__webglFramebuffer[vt],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);A(_,wt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const vt=S.texture;for(let Mt=0,Rt=vt.length;Mt<Rt;Mt++){const Ot=vt[Mt],rt=n.get(Ot);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),F(i.TEXTURE_2D,Ot,wt),Q(z.__webglFramebuffer,S,Ot,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),A(Ot,wt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(r?vt=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ct.__webglTexture),F(vt,_,wt),r&&_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)Q(z.__webglFramebuffer[Mt],S,_,i.COLOR_ATTACHMENT0,vt,Mt);else Q(z.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,vt,0);A(_,wt)&&x(vt),e.unbindTexture()}S.depthBuffer&&pt(S)}function it(S){const _=d(S)||r,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ct=0,lt=z.length;ct<lt;ct++){const at=z[ct];if(A(at,_)){const wt=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(at).__webglTexture;e.bindTexture(wt,vt),x(wt),e.unbindTexture()}}}function V(S){if(r&&S.samples>0&&J(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,ct=S.height;let lt=i.COLOR_BUFFER_BIT;const at=[],wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(S),Mt=S.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Rt=0;Rt<_.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Rt=0;Rt<_.length;Rt++){at.push(i.COLOR_ATTACHMENT0+Rt),S.depthBuffer&&at.push(wt);const Ot=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Ot===!1&&(S.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]),Ot===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[wt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[wt])),Mt){const rt=n.get(_[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,z,ct,0,0,z,ct,lt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Rt=0;Rt<_.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]);const Ot=n.get(_[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function st(S){return Math.min(s.maxSamples,S.samples)}function J(S){const _=n.get(S);return r&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function gt(S,_){const z=S.colorSpace,ct=S.format,lt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Sa||z!==nn&&z!==Oe&&(jt.getTransfer(z)===Kt?r===!1?t.has("EXT_sRGB")===!0&&ct===Ge?(S.format=Sa,S.minFilter=De,S.generateMipmaps=!1):_=Zo.sRGBToLinear(_):(ct!==Ge||lt!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}this.allocateTextureUnit=U,this.resetTextureUnits=nt,this.setTexture2D=N,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=yt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=J}function wp(i,t,e){const n=e.isWebGL2;function s(a,o=Oe){let r;const c=jt.getTransfer(o);if(a===pn)return i.UNSIGNED_BYTE;if(a===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(a===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(a===oc)return i.BYTE;if(a===lc)return i.SHORT;if(a===Pa)return i.UNSIGNED_SHORT;if(a===Fo)return i.INT;if(a===hn)return i.UNSIGNED_INT;if(a===un)return i.FLOAT;if(a===Ti)return n?i.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===cc)return i.ALPHA;if(a===Ge)return i.RGBA;if(a===hc)return i.LUMINANCE;if(a===uc)return i.LUMINANCE_ALPHA;if(a===wn)return i.DEPTH_COMPONENT;if(a===ri)return i.DEPTH_STENCIL;if(a===Sa)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===dc)return i.RED;if(a===Bo)return i.RED_INTEGER;if(a===fc)return i.RG;if(a===Ho)return i.RG_INTEGER;if(a===Go)return i.RGBA_INTEGER;if(a===Rs||a===Ps||a===Ls||a===Us)if(c===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ir||a===sr||a===ar||a===rr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===rr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Vo)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===or||a===lr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===or)return c===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===lr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===cr||a===hr||a===ur||a===dr||a===fr||a===pr||a===mr||a===gr||a===vr||a===_r||a===xr||a===yr||a===Sr||a===Mr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===cr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ur)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===dr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===gr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===vr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===_r)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Sr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mr)return c===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ds||a===br||a===Er)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Ds)return c===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===br)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Er)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===pc||a===Tr||a===Ar||a===wr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Ds)return r.COMPRESSED_RED_RGTC1_EXT;if(a===Tr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===An?n?i.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class Cp extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ti extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,n),p=this._getHandJoint(l,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return r!==null&&(r.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Pp extends Dn{constructor(t,e){super();const n=this;let s=null,a=1,o=null,r="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null;const v=e.getContextAttributes();let d=null,p=null;const A=[],x=[],M=new mt;let I=null;const R=new Ne;R.layers.enable(1),R.viewport=new fe;const w=new Ne;w.layers.enable(2),w.viewport=new fe;const q=[R,w],y=new Cp;y.layers.enable(1),y.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let W=A[F];return W===void 0&&(W=new ia,A[F]=W),W.getTargetRaySpace()},this.getControllerGrip=function(F){let W=A[F];return W===void 0&&(W=new ia,A[F]=W),W.getGripSpace()},this.getHand=function(F){let W=A[F];return W===void 0&&(W=new ia,A[F]=W),W.getHandSpace()};function Y(F){const W=x.indexOf(F.inputSource);if(W===-1)return;const et=A[W];et!==void 0&&(et.update(F.inputSource,F.frame,l||o),et.dispatchEvent({type:F.type,data:F.inputSource}))}function nt(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",U);for(let F=0;F<A.length;F++){const W=x[F];W!==null&&(x[F]=null,A[F].disconnect(W))}E=null,k=null,t.setRenderTarget(d),m=null,f=null,u=null,s=null,p=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Rn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,et=null,ot=null;v.depth&&(ot=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=v.stencil?ri:wn,et=v.stencil?An:hn);const Q={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:a};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Rn(f.textureWidth,f.textureHeight,{format:Ge,type:pn,depthTexture:new rl(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const ut=t.properties.get(p);ut.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(r),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(F){for(let W=0;W<F.removed.length;W++){const et=F.removed[W],ot=x.indexOf(et);ot>=0&&(x[ot]=null,A[ot].disconnect(et))}for(let W=0;W<F.added.length;W++){const et=F.added[W];let ot=x.indexOf(et);if(ot===-1){for(let ut=0;ut<A.length;ut++)if(ut>=x.length){x.push(et),ot=ut;break}else if(x[ut]===null){x[ut]=et,ot=ut;break}if(ot===-1)break}const Q=A[ot];Q&&Q.connect(et)}}const H=new O,N=new O;function X(F,W,et){H.setFromMatrixPosition(W.matrixWorld),N.setFromMatrixPosition(et.matrixWorld);const ot=H.distanceTo(N),Q=W.projectionMatrix.elements,ut=et.projectionMatrix.elements,xt=Q[14]/(Q[10]-1),pt=Q[14]/(Q[10]+1),yt=(Q[9]+1)/Q[5],L=(Q[9]-1)/Q[5],it=(Q[8]-1)/Q[0],V=(ut[8]+1)/ut[0],st=xt*it,J=xt*V,bt=ot/(-it+V),gt=bt*-it;W.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(gt),F.translateZ(bt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const S=xt+bt,_=pt+bt,z=st-gt,ct=J+(ot-gt),lt=yt*pt/_*S,at=L*pt/_*S;F.projectionMatrix.makePerspective(z,ct,lt,at,S,_),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function K(F,W){W===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(W.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;y.near=w.near=R.near=F.near,y.far=w.far=R.far=F.far,(E!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,k=y.far);const W=F.parent,et=y.cameras;K(y,W);for(let ot=0;ot<et.length;ot++)K(et[ot],W);et.length===2?X(y,R,w):y.projectionMatrix.copy(R.projectionMatrix),tt(F,y,W)};function tt(F,W,et){et===null?F.matrix.copy(W.matrixWorld):(F.matrix.copy(et.matrixWorld),F.matrix.invert(),F.matrix.multiply(W.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(W.projectionMatrix),F.projectionMatrixInverse.copy(W.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ma*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let C=null;function T(F,W){if(h=W.getViewerPose(l||o),g=W,h!==null){const et=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let ot=!1;et.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Q=0;Q<et.length;Q++){const ut=et[Q];let xt=null;if(m!==null)xt=m.getViewport(ut);else{const yt=u.getViewSubImage(f,ut);xt=yt.viewport,Q===0&&(t.setRenderTargetTextures(p,yt.colorTexture,f.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(p))}let pt=q[Q];pt===void 0&&(pt=new Ne,pt.layers.enable(Q),pt.viewport=new fe,q[Q]=pt),pt.matrix.fromArray(ut.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ut.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(xt.x,xt.y,xt.width,xt.height),Q===0&&(y.matrix.copy(pt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(pt)}}for(let et=0;et<A.length;et++){const ot=x[et],Q=A[et];ot!==null&&Q!==void 0&&Q.update(ot,W,l||o)}C&&C(F,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const G=new sl;G.setAnimationLoop(T),this.setAnimationLoop=function(F){C=F},this.dispose=function(){}}}function Lp(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,el(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,A,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(d,p):p.isMeshToonMaterial?(a(d,p),u(d,p)):p.isMeshPhongMaterial?(a(d,p),h(d,p)):p.isMeshStandardMaterial?(a(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,M)):p.isMeshMatcapMaterial?(a(d,p),g(d,p)):p.isMeshDepthMaterial?a(d,p):p.isMeshDistanceMaterial?(a(d,p),v(d,p)):p.isMeshNormalMaterial?a(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&r(d,p)):p.isPointsMaterial?c(d,p,A,x):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ee&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ee&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const A=t.get(p).envMap;if(A&&(d.envMap.value=A,d.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function r(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,A,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*A,d.scale.value=x*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,A){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ee&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){const A=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Up(i,t,e,n){let s={},a={},o=[];const r=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,x){const M=x.program;n.uniformBlockBinding(A,M)}function l(A,x){let M=s[A.id];M===void 0&&(g(A),M=h(A),s[A.id]=M,A.addEventListener("dispose",d));const I=x.program;n.updateUBOMapping(A,I);const R=t.render.frame;a[A.id]!==R&&(f(A),a[A.id]=R)}function h(A){const x=u();A.__bindingPointIndex=x;const M=i.createBuffer(),I=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let A=0;A<r;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const x=s[A.id],M=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,w=M.length;R<w;R++){const q=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,E=q.length;y<E;y++){const k=q[y];if(m(k,R,y,I)===!0){const Y=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value];let U=0;for(let H=0;H<nt.length;H++){const N=nt[H],X=v(N);typeof N=="number"||typeof N=="boolean"?(k.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,Y+U,k.__data)):N.isMatrix3?(k.__data[0]=N.elements[0],k.__data[1]=N.elements[1],k.__data[2]=N.elements[2],k.__data[3]=0,k.__data[4]=N.elements[3],k.__data[5]=N.elements[4],k.__data[6]=N.elements[5],k.__data[7]=0,k.__data[8]=N.elements[6],k.__data[9]=N.elements[7],k.__data[10]=N.elements[8],k.__data[11]=0):(N.toArray(k.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,x,M,I){const R=A.value,w=x+"_"+M;if(I[w]===void 0)return typeof R=="number"||typeof R=="boolean"?I[w]=R:I[w]=R.clone(),!0;{const q=I[w];if(typeof R=="number"||typeof R=="boolean"){if(q!==R)return I[w]=R,!0}else if(q.equals(R)===!1)return q.copy(R),!0}return!1}function g(A){const x=A.uniforms;let M=0;const I=16;for(let w=0,q=x.length;w<q;w++){const y=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,k=y.length;E<k;E++){const Y=y[E],nt=Array.isArray(Y.value)?Y.value:[Y.value];for(let U=0,H=nt.length;U<H;U++){const N=nt[U],X=v(N),K=M%I;K!==0&&I-K<X.boundary&&(M+=I-K),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=X.storage}}}const R=M%I;return R>0&&(M+=I-R),A.__size=M,A.__cache={},this}function v(A){const x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function d(A){const x=A.target;x.removeEventListener("dispose",d);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function p(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},a={}}return{bind:c,update:l,dispose:p}}class dl{constructor(t={}){const{canvas:e=wc(),context:n=null,depth:s=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,d=null;const p=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const x=this;let M=!1,I=0,R=0,w=null,q=-1,y=null;const E=new fe,k=new fe;let Y=null;const nt=new Xt(0);let U=0,H=e.width,N=e.height,X=1,K=null,tt=null;const C=new fe(0,0,H,N),T=new fe(0,0,H,N);let G=!1;const F=new Da;let W=!1,et=!1,ot=null;const Q=new ae,ut=new mt,xt=new O,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return w===null?X:1}let L=n;function it(b,B){for(let $=0;$<b.length;$++){const j=b[$],Z=e.getContext(j,B);if(Z!==null)return Z}return null}try{const b={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),L=it(B,b),L===null)throw it(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let V,st,J,bt,gt,S,_,z,ct,lt,at,wt,vt,Mt,Rt,Ot,rt,Vt,zt,Nt,Lt,Et,P,dt;function Ct(){V=new Hd(L),st=new Nd(L,V,t),V.init(st),Et=new wp(L,V,st),J=new Tp(L,V,st),bt=new Wd(L),gt=new up,S=new Ap(L,V,J,gt,st,Et,bt),_=new Fd(x),z=new Bd(x),ct=new Jc(L,st),P=new Dd(L,V,ct,st),lt=new Gd(L,ct,bt,P),at=new Zd(L,lt,ct,bt),zt=new Yd(L,st,S),Ot=new Od(gt),wt=new hp(x,_,z,V,st,P,Ot),vt=new Lp(x,gt),Mt=new fp,Rt=new xp(V,st),Vt=new Ud(x,_,z,J,at,f,c),rt=new Ep(x,at,st),dt=new Up(L,bt,st,J),Nt=new Id(L,V,bt,st),Lt=new Vd(L,V,bt,st),bt.programs=wt.programs,x.capabilities=st,x.extensions=V,x.properties=gt,x.renderLists=Mt,x.shadowMap=rt,x.state=J,x.info=bt}Ct();const At=new Pp(x,L);this.xr=At,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=V.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=V.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(H,N,!1))},this.getSize=function(b){return b.set(H,N)},this.setSize=function(b,B,$=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,N=B,e.width=Math.floor(b*X),e.height=Math.floor(B*X),$===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(H*X,N*X).floor()},this.setDrawingBufferSize=function(b,B,$){H=b,N=B,X=$,e.width=Math.floor(b*$),e.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,B,$,j){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,B,$,j),J.viewport(E.copy(C).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(T)},this.setScissor=function(b,B,$,j){b.isVector4?T.set(b.x,b.y,b.z,b.w):T.set(b,B,$,j),J.scissor(k.copy(T).multiplyScalar(X).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(b){J.setScissorTest(G=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(b=!0,B=!0,$=!0){let j=0;if(b){let Z=!1;if(w!==null){const Tt=w.texture.format;Z=Tt===Go||Tt===Ho||Tt===Bo}if(Z){const Tt=w.texture.type,Pt=Tt===pn||Tt===hn||Tt===Pa||Tt===An||Tt===ko||Tt===zo,It=Vt.getClearColor(),Ft=Vt.getClearAlpha(),Gt=It.r,kt=It.g,Bt=It.b;Pt?(m[0]=Gt,m[1]=kt,m[2]=Bt,m[3]=Ft,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Gt,g[1]=kt,g[2]=Bt,g[3]=Ft,L.clearBufferiv(L.COLOR,0,g))}else j|=L.COLOR_BUFFER_BIT}B&&(j|=L.DEPTH_BUFFER_BIT),$&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Mt.dispose(),Rt.dispose(),gt.dispose(),_.dispose(),z.dispose(),at.dispose(),P.dispose(),dt.dispose(),wt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ie),At.removeEventListener("sessionend",$t),ot&&(ot.dispose(),ot=null),re.stop()};function ht(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=bt.autoReset,B=rt.enabled,$=rt.autoUpdate,j=rt.needsUpdate,Z=rt.type;Ct(),bt.autoReset=b,rt.enabled=B,rt.autoUpdate=$,rt.needsUpdate=j,rt.type=Z}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function St(b){const B=b.target;B.removeEventListener("dispose",St),Dt(B)}function Dt(b){Ut(b),gt.remove(b)}function Ut(b){const B=gt.get(b).programs;B!==void 0&&(B.forEach(function($){wt.releaseProgram($)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,j,Z,Tt){B===null&&(B=pt);const Pt=Z.isMesh&&Z.matrixWorld.determinant()<0,It=bl(b,B,$,j,Z);J.setMaterial(j,Pt);let Ft=$.index,Gt=1;if(j.wireframe===!0){if(Ft=lt.getWireframeAttribute($),Ft===void 0)return;Gt=2}const kt=$.drawRange,Bt=$.attributes.position;let se=kt.start*Gt,Te=(kt.start+kt.count)*Gt;Tt!==null&&(se=Math.max(se,Tt.start*Gt),Te=Math.min(Te,(Tt.start+Tt.count)*Gt)),Ft!==null?(se=Math.max(se,0),Te=Math.min(Te,Ft.count)):Bt!=null&&(se=Math.max(se,0),Te=Math.min(Te,Bt.count));const he=Te-se;if(he<0||he===1/0)return;P.setup(Z,j,It,$,Ft);let Xe,Jt=Nt;if(Ft!==null&&(Xe=ct.get(Ft),Jt=Lt,Jt.setIndex(Xe)),Z.isMesh)j.wireframe===!0?(J.setLineWidth(j.wireframeLinewidth*yt()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(Z.isLine){let Wt=j.linewidth;Wt===void 0&&(Wt=1),J.setLineWidth(Wt*yt()),Z.isLineSegments?Jt.setMode(L.LINES):Z.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else Z.isPoints?Jt.setMode(L.POINTS):Z.isSprite&&Jt.setMode(L.TRIANGLES);if(Z.isBatchedMesh)Jt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Jt.renderInstances(se,he,Z.count);else if($.isInstancedBufferGeometry){const Wt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Es=Math.min($.instanceCount,Wt);Jt.renderInstances(se,he,Es)}else Jt.render(se,he)};function Yt(b,B,$){b.transparent===!0&&b.side===Be&&b.forceSinglePass===!1?(b.side=Ee,b.needsUpdate=!0,Li(b,B,$),b.side=mn,b.needsUpdate=!0,Li(b,B,$),b.side=Be):Li(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),d=Rt.get($),d.init(),A.push(d),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),b!==$&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),d.setupLights(x._useLegacyLights);const j=new Set;return b.traverse(function(Z){const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Pt=0;Pt<Tt.length;Pt++){const It=Tt[Pt];Yt(It,$,Z),j.add(It)}else Yt(Tt,$,Z),j.add(Tt)}),A.pop(),d=null,j},this.compileAsync=function(b,B,$=null){const j=this.compile(b,B,$);return new Promise(Z=>{function Tt(){if(j.forEach(function(Pt){gt.get(Pt).currentProgram.isReady()&&j.delete(Pt)}),j.size===0){Z(b);return}setTimeout(Tt,10)}V.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Zt=null;function te(b){Zt&&Zt(b)}function ie(){re.stop()}function $t(){re.start()}const re=new sl;re.setAnimationLoop(te),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(b){Zt=b,At.setAnimationLoop(b),b===null?re.stop():re.start()},At.addEventListener("sessionstart",ie),At.addEventListener("sessionend",$t),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(B),B=At.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,w),d=Rt.get(b,A.length),d.init(),A.push(d),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),F.setFromProjectionMatrix(Q),et=this.localClippingEnabled,W=Ot.init(this.clippingPlanes,et),v=Mt.get(b,p.length),v.init(),p.push(v),Ve(b,B,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,tt),this.info.render.frame++,W===!0&&Ot.beginShadows();const $=d.state.shadowsArray;if(rt.render($,b,B),W===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Vt.render(v,b),d.setupLights(x._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let Z=0,Tt=j.length;Z<Tt;Z++){const Pt=j[Z];Wa(v,b,Pt,Pt.viewport)}}else Wa(v,b,B);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(x,b,B),P.resetDefaultState(),q=-1,y=null,A.pop(),A.length>0?d=A[A.length-1]:d=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ve(b,B,$,j){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||F.intersectsSprite(b)){j&&xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const Pt=at.update(b),It=b.material;It.visible&&v.push(b,Pt,It,$,xt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||F.intersectsObject(b))){const Pt=at.update(b),It=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),xt.copy(Pt.boundingSphere.center)),xt.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(It)){const Ft=Pt.groups;for(let Gt=0,kt=Ft.length;Gt<kt;Gt++){const Bt=Ft[Gt],se=It[Bt.materialIndex];se&&se.visible&&v.push(b,Pt,se,$,xt.z,Bt)}}else It.visible&&v.push(b,Pt,It,$,xt.z,null)}}const Tt=b.children;for(let Pt=0,It=Tt.length;Pt<It;Pt++)Ve(Tt[Pt],B,$,j)}function Wa(b,B,$,j){const Z=b.opaque,Tt=b.transmissive,Pt=b.transparent;d.setupLightsView($),W===!0&&Ot.setGlobalState(x.clippingPlanes,$),Tt.length>0&&Ml(Z,Tt,B,$),j&&J.viewport(E.copy(j)),Z.length>0&&Pi(Z,B,$),Tt.length>0&&Pi(Tt,B,$),Pt.length>0&&Pi(Pt,B,$),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ml(b,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Tt=st.isWebGL2;ot===null&&(ot=new Rn(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")?Ti:pn,minFilter:Ei,samples:Tt?4:0})),x.getDrawingBufferSize(ut),Tt?ot.setSize(ut.x,ut.y):ot.setSize(ba(ut.x),ba(ut.y));const Pt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(nt),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const It=x.toneMapping;x.toneMapping=fn,Pi(b,$,j),S.updateMultisampleRenderTarget(ot),S.updateRenderTargetMipmap(ot);let Ft=!1;for(let Gt=0,kt=B.length;Gt<kt;Gt++){const Bt=B[Gt],se=Bt.object,Te=Bt.geometry,he=Bt.material,Xe=Bt.group;if(he.side===Be&&se.layers.test(j.layers)){const Jt=he.side;he.side=Ee,he.needsUpdate=!0,qa(se,$,j,Te,he,Xe),he.side=Jt,he.needsUpdate=!0,Ft=!0}}Ft===!0&&(S.updateMultisampleRenderTarget(ot),S.updateRenderTargetMipmap(ot)),x.setRenderTarget(Pt),x.setClearColor(nt,U),x.toneMapping=It}function Pi(b,B,$){const j=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Tt=b.length;Z<Tt;Z++){const Pt=b[Z],It=Pt.object,Ft=Pt.geometry,Gt=j===null?Pt.material:j,kt=Pt.group;It.layers.test($.layers)&&qa(It,B,$,Ft,Gt,kt)}}function qa(b,B,$,j,Z,Tt){b.onBeforeRender(x,B,$,j,Z,Tt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(x,B,$,j,b,Tt),Z.transparent===!0&&Z.side===Be&&Z.forceSinglePass===!1?(Z.side=Ee,Z.needsUpdate=!0,x.renderBufferDirect($,B,j,Z,b,Tt),Z.side=mn,Z.needsUpdate=!0,x.renderBufferDirect($,B,j,Z,b,Tt),Z.side=Be):x.renderBufferDirect($,B,j,Z,b,Tt),b.onAfterRender(x,B,$,j,Z,Tt)}function Li(b,B,$){B.isScene!==!0&&(B=pt);const j=gt.get(b),Z=d.state.lights,Tt=d.state.shadowsArray,Pt=Z.state.version,It=wt.getParameters(b,Z.state,Tt,B,$),Ft=wt.getProgramCacheKey(It);let Gt=j.programs;j.environment=b.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||j.environment),Gt===void 0&&(b.addEventListener("dispose",St),Gt=new Map,j.programs=Gt);let kt=Gt.get(Ft);if(kt!==void 0){if(j.currentProgram===kt&&j.lightsStateVersion===Pt)return Ya(b,It),kt}else It.uniforms=wt.getUniforms(b),b.onBuild($,It,x),b.onBeforeCompile(It,x),kt=wt.acquireProgram(It,Ft),Gt.set(Ft,kt),j.uniforms=It.uniforms;const Bt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=Ot.uniform),Ya(b,It),j.needsLights=Tl(b),j.lightsStateVersion=Pt,j.needsLights&&(Bt.ambientLightColor.value=Z.state.ambient,Bt.lightProbe.value=Z.state.probe,Bt.directionalLights.value=Z.state.directional,Bt.directionalLightShadows.value=Z.state.directionalShadow,Bt.spotLights.value=Z.state.spot,Bt.spotLightShadows.value=Z.state.spotShadow,Bt.rectAreaLights.value=Z.state.rectArea,Bt.ltc_1.value=Z.state.rectAreaLTC1,Bt.ltc_2.value=Z.state.rectAreaLTC2,Bt.pointLights.value=Z.state.point,Bt.pointLightShadows.value=Z.state.pointShadow,Bt.hemisphereLights.value=Z.state.hemi,Bt.directionalShadowMap.value=Z.state.directionalShadowMap,Bt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Bt.spotShadowMap.value=Z.state.spotShadowMap,Bt.spotLightMatrix.value=Z.state.spotLightMatrix,Bt.spotLightMap.value=Z.state.spotLightMap,Bt.pointShadowMap.value=Z.state.pointShadowMap,Bt.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.currentProgram=kt,j.uniformsList=null,kt}function Xa(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=cs.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ya(b,B){const $=gt.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function bl(b,B,$,j,Z){B.isScene!==!0&&(B=pt),S.resetTextureUnits();const Tt=B.fog,Pt=j.isMeshStandardMaterial?B.environment:null,It=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:nn,Ft=(j.isMeshStandardMaterial?z:_).get(j.envMap||Pt),Gt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,kt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Bt=!!$.morphAttributes.position,se=!!$.morphAttributes.normal,Te=!!$.morphAttributes.color;let he=fn;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(he=x.toneMapping);const Xe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Jt=Xe!==void 0?Xe.length:0,Wt=gt.get(j),Es=d.state.lights;if(W===!0&&(et===!0||b!==y)){const Pe=b===y&&j.id===q;Ot.setState(j,b,Pe)}let ee=!1;j.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Es.state.version||Wt.outputColorSpace!==It||Z.isBatchedMesh&&Wt.batching===!1||!Z.isBatchedMesh&&Wt.batching===!0||Z.isInstancedMesh&&Wt.instancing===!1||!Z.isInstancedMesh&&Wt.instancing===!0||Z.isSkinnedMesh&&Wt.skinning===!1||!Z.isSkinnedMesh&&Wt.skinning===!0||Z.isInstancedMesh&&Wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Wt.instancingColor===!1&&Z.instanceColor!==null||Wt.envMap!==Ft||j.fog===!0&&Wt.fog!==Tt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ot.numPlanes||Wt.numIntersection!==Ot.numIntersection)||Wt.vertexAlphas!==Gt||Wt.vertexTangents!==kt||Wt.morphTargets!==Bt||Wt.morphNormals!==se||Wt.morphColors!==Te||Wt.toneMapping!==he||st.isWebGL2===!0&&Wt.morphTargetsCount!==Jt)&&(ee=!0):(ee=!0,Wt.__version=j.version);let gn=Wt.currentProgram;ee===!0&&(gn=Li(j,B,Z));let Za=!1,di=!1,Ts=!1;const ve=gn.getUniforms(),vn=Wt.uniforms;if(J.useProgram(gn.program)&&(Za=!0,di=!0,Ts=!0),j.id!==q&&(q=j.id,di=!0),Za||y!==b){ve.setValue(L,"projectionMatrix",b.projectionMatrix),ve.setValue(L,"viewMatrix",b.matrixWorldInverse);const Pe=ve.map.cameraPosition;Pe!==void 0&&Pe.setValue(L,xt.setFromMatrixPosition(b.matrixWorld)),st.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ve.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,di=!0,Ts=!0)}if(Z.isSkinnedMesh){ve.setOptional(L,Z,"bindMatrix"),ve.setOptional(L,Z,"bindMatrixInverse");const Pe=Z.skeleton;Pe&&(st.floatVertexTextures?(Pe.boneTexture===null&&Pe.computeBoneTexture(),ve.setValue(L,"boneTexture",Pe.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(ve.setOptional(L,Z,"batchingTexture"),ve.setValue(L,"batchingTexture",Z._matricesTexture,S));const As=$.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&st.isWebGL2===!0)&&zt.update(Z,$,gn),(di||Wt.receiveShadow!==Z.receiveShadow)&&(Wt.receiveShadow=Z.receiveShadow,ve.setValue(L,"receiveShadow",Z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(vn.envMap.value=Ft,vn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),di&&(ve.setValue(L,"toneMappingExposure",x.toneMappingExposure),Wt.needsLights&&El(vn,Ts),Tt&&j.fog===!0&&vt.refreshFogUniforms(vn,Tt),vt.refreshMaterialUniforms(vn,j,X,N,ot),cs.upload(L,Xa(Wt),vn,S)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(cs.upload(L,Xa(Wt),vn,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ve.setValue(L,"center",Z.center),ve.setValue(L,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(L,"normalMatrix",Z.normalMatrix),ve.setValue(L,"modelMatrix",Z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Pe=j.uniformsGroups;for(let ws=0,Al=Pe.length;ws<Al;ws++)if(st.isWebGL2){const $a=Pe[ws];dt.update($a,gn),dt.bind($a,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function El(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Tl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,B,$){gt.get(b.texture).__webglTexture=B,gt.get(b.depthTexture).__webglTexture=$;const j=gt.get(b);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const $=gt.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){w=b,I=B,R=$;let j=!0,Z=null,Tt=!1,Pt=!1;if(b){const Ft=gt.get(b);Ft.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(L.FRAMEBUFFER,null),j=!1):Ft.__webglFramebuffer===void 0?S.setupRenderTarget(b):Ft.__hasExternalTextures&&S.rebindTextures(b,gt.get(b.texture).__webglTexture,gt.get(b.depthTexture).__webglTexture);const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Pt=!0);const kt=gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?Z=kt[B][$]:Z=kt[B],Tt=!0):st.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?Z=gt.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?Z=kt[$]:Z=kt,E.copy(b.viewport),k.copy(b.scissor),Y=b.scissorTest}else E.copy(C).multiplyScalar(X).floor(),k.copy(T).multiplyScalar(X).floor(),Y=G;if(J.bindFramebuffer(L.FRAMEBUFFER,Z)&&st.drawBuffers&&j&&J.drawBuffers(b,Z),J.viewport(E),J.scissor(k),J.setScissorTest(Y),Tt){const Ft=gt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ft.__webglTexture,$)}else if(Pt){const Ft=gt.get(b.texture),Gt=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,$||0,Gt)}q=-1},this.readRenderTargetPixels=function(b,B,$,j,Z,Tt,Pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){J.bindFramebuffer(L.FRAMEBUFFER,It);try{const Ft=b.texture,Gt=Ft.format,kt=Ft.type;if(Gt!==Ge&&Et.convert(Gt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=kt===Ti&&(V.has("EXT_color_buffer_half_float")||st.isWebGL2&&V.has("EXT_color_buffer_float"));if(kt!==pn&&Et.convert(kt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===un&&(st.isWebGL2||V.has("OES_texture_float")||V.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-j&&$>=0&&$<=b.height-Z&&L.readPixels(B,$,j,Z,Et.convert(Gt),Et.convert(kt),Tt)}finally{const Ft=w!==null?gt.get(w).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(b,B,$=0){const j=Math.pow(2,-$),Z=Math.floor(B.image.width*j),Tt=Math.floor(B.image.height*j);S.setTexture2D(B,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,b.x,b.y,Z,Tt),J.unbindTexture()},this.copyTextureToTexture=function(b,B,$,j=0){const Z=B.image.width,Tt=B.image.height,Pt=Et.convert($.format),It=Et.convert($.type);S.setTexture2D($,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,$.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,b.x,b.y,Z,Tt,Pt,It,B.image.data):B.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Pt,B.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,j,b.x,b.y,Pt,It,B.image),j===0&&$.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(b,B,$,j,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=b.max.x-b.min.x+1,Pt=b.max.y-b.min.y+1,It=b.max.z-b.min.z+1,Ft=Et.convert(j.format),Gt=Et.convert(j.type);let kt;if(j.isData3DTexture)S.setTexture3D(j,0),kt=L.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)S.setTexture2DArray(j,0),kt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const Bt=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Te=L.getParameter(L.UNPACK_SKIP_PIXELS),he=L.getParameter(L.UNPACK_SKIP_ROWS),Xe=L.getParameter(L.UNPACK_SKIP_IMAGES),Jt=$.isCompressedTexture?$.mipmaps[Z]:$.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Jt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?L.texSubImage3D(kt,Z,B.x,B.y,B.z,Tt,Pt,It,Ft,Gt,Jt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(kt,Z,B.x,B.y,B.z,Tt,Pt,It,Ft,Jt.data)):L.texSubImage3D(kt,Z,B.x,B.y,B.z,Tt,Pt,It,Ft,Gt,Jt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,he),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe),Z===0&&j.generateMipmaps&&L.generateMipmap(kt),J.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),J.unbindTexture()},this.resetState=function(){I=0,R=0,w=null,J.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===La?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===xs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Cn:Wo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Cn?pe:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Dp extends dl{}Dp.prototype.isWebGL1Renderer=!0;class Oa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ip extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Fa extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new O,_o=new O,xo=new ae,sa=new Ua,ts=new ys;class Np extends ge{constructor(t=new Me,e=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)vo.fromBufferAttribute(e,s-1),_o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vo.distanceTo(_o);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ts.radius+=a,t.ray.intersectsSphere(ts)===!1)return;xo.copy(s).invert(),sa.copy(t.ray).applyMatrix4(xo);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new O,h=new O,u=new O,f=new O,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let x=p,M=A-1;x<M;x+=m){const I=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(d,I),h.fromBufferAttribute(d,R),sa.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const q=t.ray.origin.distanceTo(f);q<t.near||q>t.far||e.push({distance:q,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),A=Math.min(d.count,o.start+o.count);for(let x=p,M=A-1;x<M;x+=m){if(l.fromBufferAttribute(d,x),h.fromBufferAttribute(d,x+1),sa.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}const yo=new O,So=new O;class fl extends Np{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)yo.fromBufferAttribute(e,s),So.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yo.distanceTo(So);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let o;e?o=e:o=t*n[a-1];let r=0,c=a-1,l;for(;r<=c;)if(s=Math.floor(r+(c-r)/2),l=n[s]-o,l<0)r=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(a-1);const h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),r=this.getPoint(a),c=e||(o.isVector2?new mt:new O);return c.copy(r).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,s=[],a=[],o=[],r=new O,c=new ae;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new O)}a[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let m=1;m<=t;m++){if(a[m]=a[m-1].clone(),o[m]=o[m-1].clone(),r.crossVectors(s[m-1],s[m]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(me(s[m-1].dot(s[m]),-1,1));a[m].applyMatrix4(c.makeRotationAxis(r,g))}o[m].crossVectors(s[m],a[m])}if(e===!0){let m=Math.acos(me(a[0].dot(a[t]),-1,1));m/=t,s[0].dot(r.crossVectors(a[0],a[t]))>0&&(m=-m);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ka extends qe{constructor(t=0,e=0,n=1,s=1,a=0,o=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=c}getPoint(t,e){const n=e||new mt,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);const r=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(r),l=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Op extends ka{constructor(t,e,n,s,a,o){super(t,e,n,n,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function za(){let i=0,t=0,e=0,n=0;function s(a,o,r,c){i=a,t=r,e=-3*a+3*o-2*r-c,n=2*a-2*o+r+c}return{initCatmullRom:function(a,o,r,c,l){s(o,r,l*(r-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,r,c,l,h,u){let f=(o-a)/l-(r-a)/(l+h)+(r-o)/h,m=(r-o)/h-(c-o)/(h+u)+(c-r)/u;f*=h,m*=h,s(o,r,f,m)},calc:function(a){const o=a*a,r=o*a;return i+t*a+e*o+n*r}}}const es=new O,aa=new za,ra=new za,oa=new za;class Fp extends qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,a=s.length,o=(a-(this.closed?0:1))*t;let r=Math.floor(o),c=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:c===0&&r===a-1&&(r=a-2,c=1);let l,h;this.closed||r>0?l=s[(r-1)%a]:(es.subVectors(s[0],s[1]).add(s[0]),l=es);const u=s[r%a],f=s[(r+1)%a];if(this.closed||r+2<a?h=s[(r+2)%a]:(es.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=es),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),d<1e-4&&(d=v),aa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,d),ra.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,d),oa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,d)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ra.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),oa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(aa.calc(c),ra.calc(c),oa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mo(i,t,e,n,s){const a=(n-t)*.5,o=(s-e)*.5,r=i*i,c=i*r;return(2*e-2*n+a+o)*c+(-3*e+3*n-2*a-o)*r+a*i+e}function kp(i,t){const e=1-i;return e*e*t}function zp(i,t){return 2*(1-i)*i*t}function Bp(i,t){return i*i*t}function yi(i,t,e,n){return kp(i,t)+zp(i,e)+Bp(i,n)}function Hp(i,t){const e=1-i;return e*e*e*t}function Gp(i,t){const e=1-i;return 3*e*e*i*t}function Vp(i,t){return 3*(1-i)*i*i*t}function Wp(i,t){return i*i*i*t}function Si(i,t,e,n,s){return Hp(i,t)+Gp(i,e)+Vp(i,n)+Wp(i,s)}class pl extends qe{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(Si(t,s.x,a.x,o.x,r.x),Si(t,s.y,a.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qp extends qe{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(Si(t,s.x,a.x,o.x,r.x),Si(t,s.y,a.y,o.y,r.y),Si(t,s.z,a.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ml extends qe{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xp extends qe{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gl extends qe{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,a=this.v1,o=this.v2;return n.set(yi(t,s.x,a.x,o.x),yi(t,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yp extends qe{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,a=this.v1,o=this.v2;return n.set(yi(t,s.x,a.x,o.x),yi(t,s.y,a.y,o.y),yi(t,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vl extends qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,a=(s.length-1)*t,o=Math.floor(a),r=a-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mo(r,c.x,l.x,h.x,u.x),Mo(r,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:Op,CatmullRomCurve3:Fp,CubicBezierCurve:pl,CubicBezierCurve3:qp,EllipseCurve:ka,LineCurve:ml,LineCurve3:Xp,QuadraticBezierCurve:gl,QuadraticBezierCurve3:Yp,SplineCurve:vl});class Zp extends qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const o=s[a]-n,r=this.curves[a],c=r.getLength(),l=c===0?0:1-o/c;return r.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const o=a[s],r=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(r);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}}class cn extends Zp{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ml(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new gl(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,o){const r=new pl(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,o){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,n,s,a,o),this}absarc(t,e,n,s,a,o){return this.absellipse(t,e,n,n,s,a,o),this}ellipse(t,e,n,s,a,o,r,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,a,o,r,c),this}absellipse(t,e,n,s,a,o,r,c){const l=new ka(t,e,n,s,a,o,r,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ai extends Me{constructor(t=1,e=1,n=1,s=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],f=[],m=[];let g=0;const v=[],d=n/2;let p=0;A(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(m,2));function A(){const M=new O,I=new O;let R=0;const w=(e-t)/n;for(let q=0;q<=a;q++){const y=[],E=q/a,k=E*(e-t)+t;for(let Y=0;Y<=s;Y++){const nt=Y/s,U=nt*c+r,H=Math.sin(U),N=Math.cos(U);I.x=k*H,I.y=-E*n+d,I.z=k*N,u.push(I.x,I.y,I.z),M.set(H,w,N).normalize(),f.push(M.x,M.y,M.z),m.push(nt,1-E),y.push(g++)}v.push(y)}for(let q=0;q<s;q++)for(let y=0;y<a;y++){const E=v[y][q],k=v[y+1][q],Y=v[y+1][q+1],nt=v[y][q+1];h.push(E,k,nt),h.push(k,Y,nt),R+=6}l.addGroup(p,R,0),p+=R}function x(M){const I=g,R=new mt,w=new O;let q=0;const y=M===!0?t:e,E=M===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,d*E,0),f.push(0,E,0),m.push(.5,.5),g++;const k=g;for(let Y=0;Y<=s;Y++){const U=Y/s*c+r,H=Math.cos(U),N=Math.sin(U);w.x=y*N,w.y=d*E,w.z=y*H,u.push(w.x,w.y,w.z),f.push(0,E,0),R.x=H*.5+.5,R.y=N*.5*E+.5,m.push(R.x,R.y),g++}for(let Y=0;Y<s;Y++){const nt=I+Y,U=k+Y;M===!0?h.push(U,U+1,nt):h.push(U+1,U,nt),q+=3}l.addGroup(p,q,M===!0?1:2),p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ba extends Ai{constructor(t=1,e=1,n=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,n,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new Ba(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ns=new O,is=new O,la=new O,ss=new Ie;class $p extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),a=Math.cos(_i*e),o=t.getIndex(),r=t.getAttribute("position"),c=o?o.count:r.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:d,c:p}=ss;if(v.fromBufferAttribute(r,l[0]),d.fromBufferAttribute(r,l[1]),p.fromBufferAttribute(r,l[2]),ss.getNormal(la),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let A=0;A<3;A++){const x=(A+1)%3,M=u[A],I=u[x],R=ss[h[A]],w=ss[h[x]],q=`${M}_${I}`,y=`${I}_${M}`;y in f&&f[y]?(la.dot(f[y].normal)<=a&&(m.push(R.x,R.y,R.z),m.push(w.x,w.y,w.z)),f[y]=null):q in f||(f[q]={index0:l[A],index1:l[x],normal:la.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:d}=f[g];ns.fromBufferAttribute(r,v),is.fromBufferAttribute(r,d),m.push(ns.x,ns.y,ns.z),m.push(is.x,is.y,is.z)}this.setAttribute("position",new ne(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class hs extends cn{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new cn().fromJSON(s))}return this}}const jp={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let a=_l(i,0,s,e,!0);const o=[];if(!a||a.next===a.prev)return o;let r,c,l,h,u,f,m;if(n&&(a=em(i,t,a,e)),i.length>80*e){r=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<r&&(r=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);m=Math.max(l-r,h-c),m=m!==0?32767/m:0}return wi(a,o,e,r,c,m,0),o}};function _l(i,t,e,n,s){let a,o;if(s===dm(i,t,e,n)>0)for(a=t;a<e;a+=n)o=bo(a,i[a],i[a+1],o);else for(a=e-n;a>=t;a-=n)o=bo(a,i[a],i[a+1],o);return o&&bs(o,o.next)&&(Ri(o),o=o.next),o}function Un(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||Qt(e.prev,e,e.next)===0)){if(Ri(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wi(i,t,e,n,s,a,o){if(!i)return;!o&&a&&rm(i,n,s,a);let r=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,a?Jp(i,n,s,a):Kp(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ri(i),i=l.next,r=l.next;continue}if(i=l,i===r){o?o===1?(i=Qp(Un(i),t,e),wi(i,t,e,n,s,a,2)):o===2&&tm(i,t,e,n,s,a):wi(Un(i),t,e,n,s,a,1);break}}}function Kp(i){const t=i.prev,e=i,n=i.next;if(Qt(t,e,n)>=0)return!1;const s=t.x,a=e.x,o=n.x,r=t.y,c=e.y,l=n.y,h=s<a?s<o?s:o:a<o?a:o,u=r<c?r<l?r:l:c<l?c:l,f=s>a?s>o?s:o:a>o?a:o,m=r>c?r>l?r:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&ei(s,r,a,c,o,l,g.x,g.y)&&Qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jp(i,t,e,n){const s=i.prev,a=i,o=i.next;if(Qt(s,a,o)>=0)return!1;const r=s.x,c=a.x,l=o.x,h=s.y,u=a.y,f=o.y,m=r<c?r<l?r:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,v=r>c?r>l?r:l:c>l?c:l,d=h>u?h>f?h:f:u>f?u:f,p=Aa(m,g,t,e,n),A=Aa(v,d,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=A;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&ei(r,h,c,u,l,f,x.x,x.y)&&Qt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=m&&M.x<=v&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&ei(r,h,c,u,l,f,M.x,M.y)&&Qt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&ei(r,h,c,u,l,f,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=A;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&ei(r,h,c,u,l,f,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Qp(i,t,e){let n=i;do{const s=n.prev,a=n.next.next;!bs(s,a)&&xl(s,n,n.next,a)&&Ci(s,a)&&Ci(a,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(a.i/e|0),Ri(n),Ri(n.next),n=i=a),n=n.next}while(n!==i);return Un(n)}function tm(i,t,e,n,s,a){let o=i;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&cm(o,r)){let c=yl(o,r);o=Un(o,o.next),c=Un(c,c.next),wi(o,t,e,n,s,a,0),wi(c,t,e,n,s,a,0);return}r=r.next}o=o.next}while(o!==i)}function em(i,t,e,n){const s=[];let a,o,r,c,l;for(a=0,o=t.length;a<o;a++)r=t[a]*n,c=a<o-1?t[a+1]*n:i.length,l=_l(i,r,c,n,!1),l===l.next&&(l.steiner=!0),s.push(lm(l));for(s.sort(nm),a=0;a<s.length;a++)e=im(s[a],e);return e}function nm(i,t){return i.x-t.x}function im(i,t){const e=sm(i,t);if(!e)return t;const n=yl(e,i);return Un(n,n.next),Un(e,e.next)}function sm(i,t){let e=t,n=-1/0,s;const a=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=a&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===a))return s}e=e.next}while(e!==t);if(!s)return null;const r=s,c=s.x,l=s.y;let h=1/0,u;e=s;do a>=e.x&&e.x>=c&&a!==e.x&&ei(o<l?a:n,o,c,l,o<l?n:a,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(a-e.x),Ci(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&am(s,e)))&&(s=e,h=u)),e=e.next;while(e!==r);return s}function am(i,t){return Qt(i.prev,i,t.prev)<0&&Qt(t.next,i,i.next)<0}function rm(i,t,e,n){let s=i;do s.z===0&&(s.z=Aa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,om(s)}function om(i){let t,e,n,s,a,o,r,c,l=1;do{for(e=i,i=null,a=null,o=0;e;){for(o++,n=e,r=0,t=0;t<l&&(r++,n=n.nextZ,!!n);t++);for(c=l;r>0||c>0&&n;)r!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,r--):(s=n,n=n.nextZ,c--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;e=n}a.nextZ=null,l*=2}while(o>1);return i}function Aa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ei(i,t,e,n,s,a,o,r){return(s-o)*(t-r)>=(i-o)*(a-r)&&(i-o)*(n-r)>=(e-o)*(t-r)&&(e-o)*(a-r)>=(s-o)*(n-r)}function cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hm(i,t)&&(Ci(i,t)&&Ci(t,i)&&um(i,t)&&(Qt(i.prev,i,t.prev)||Qt(i,t.prev,t))||bs(i,t)&&Qt(i.prev,i,i.next)>0&&Qt(t.prev,t,t.next)>0)}function Qt(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bs(i,t){return i.x===t.x&&i.y===t.y}function xl(i,t,e,n){const s=rs(Qt(i,t,e)),a=rs(Qt(i,t,n)),o=rs(Qt(e,n,i)),r=rs(Qt(e,n,t));return!!(s!==a&&o!==r||s===0&&as(i,e,t)||a===0&&as(i,n,t)||o===0&&as(e,i,n)||r===0&&as(e,t,n))}function as(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rs(i){return i>0?1:i<0?-1:0}function hm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ci(i,t){return Qt(i.prev,i,i.next)<0?Qt(i,t,i.next)>=0&&Qt(i,i.prev,t)>=0:Qt(i,t,i.prev)<0||Qt(i,i.next,t)<0}function um(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,a=(i.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yl(i,t){const e=new wa(i.i,i.x,i.y),n=new wa(t.i,t.x,t.y),s=i.next,a=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function bo(i,t,e,n){const s=new wa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ri(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dm(i,t,e,n){let s=0;for(let a=t,o=e-n;a<e;a+=n)s+=(i[o]-i[a])*(i[a+1]+i[o+1]),o=a;return s}class Mi{static area(t){const e=t.length;let n=0;for(let s=e-1,a=0;a<e;s=a++)n+=t[s].x*t[a].y-t[a].x*t[s].y;return n*.5}static isClockWise(t){return Mi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],a=[];Eo(t),To(n,t);let o=t.length;e.forEach(Eo);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,To(n,e[c]);const r=jp.triangulate(n,s);for(let c=0;c<r.length;c+=3)a.push(r.slice(c,c+3));return a}}function Eo(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function To(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class bi extends Me{constructor(t=new hs([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],a=[];for(let r=0,c=t.length;r<c;r++){const l=t[r];o(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(a,2)),this.computeVertexNormals();function o(r){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:fm;let x,M=!1,I,R,w,q;p&&(x=p.getSpacedPoints(h),M=!0,f=!1,I=p.computeFrenetFrames(h,!1),R=new O,w=new O,q=new O),f||(d=0,m=0,g=0,v=0);const y=r.extractPoints(l);let E=y.shape;const k=y.holes;if(!Mi.isClockWise(E)){E=E.reverse();for(let L=0,it=k.length;L<it;L++){const V=k[L];Mi.isClockWise(V)&&(k[L]=V.reverse())}}const nt=Mi.triangulateShape(E,k),U=E;for(let L=0,it=k.length;L<it;L++){const V=k[L];E=E.concat(V)}function H(L,it,V){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(it,V)}const N=E.length,X=nt.length;function K(L,it,V){let st,J,bt;const gt=L.x-it.x,S=L.y-it.y,_=V.x-L.x,z=V.y-L.y,ct=gt*gt+S*S,lt=gt*z-S*_;if(Math.abs(lt)>Number.EPSILON){const at=Math.sqrt(ct),wt=Math.sqrt(_*_+z*z),vt=it.x-S/at,Mt=it.y+gt/at,Rt=V.x-z/wt,Ot=V.y+_/wt,rt=((Rt-vt)*z-(Ot-Mt)*_)/(gt*z-S*_);st=vt+gt*rt-L.x,J=Mt+S*rt-L.y;const Vt=st*st+J*J;if(Vt<=2)return new mt(st,J);bt=Math.sqrt(Vt/2)}else{let at=!1;gt>Number.EPSILON?_>Number.EPSILON&&(at=!0):gt<-Number.EPSILON?_<-Number.EPSILON&&(at=!0):Math.sign(S)===Math.sign(z)&&(at=!0),at?(st=-S,J=gt,bt=Math.sqrt(ct)):(st=gt,J=S,bt=Math.sqrt(ct/2))}return new mt(st/bt,J/bt)}const tt=[];for(let L=0,it=U.length,V=it-1,st=L+1;L<it;L++,V++,st++)V===it&&(V=0),st===it&&(st=0),tt[L]=K(U[L],U[V],U[st]);const C=[];let T,G=tt.concat();for(let L=0,it=k.length;L<it;L++){const V=k[L];T=[];for(let st=0,J=V.length,bt=J-1,gt=st+1;st<J;st++,bt++,gt++)bt===J&&(bt=0),gt===J&&(gt=0),T[st]=K(V[st],V[bt],V[gt]);C.push(T),G=G.concat(T)}for(let L=0;L<d;L++){const it=L/d,V=m*Math.cos(it*Math.PI/2),st=g*Math.sin(it*Math.PI/2)+v;for(let J=0,bt=U.length;J<bt;J++){const gt=H(U[J],tt[J],st);Q(gt.x,gt.y,-V)}for(let J=0,bt=k.length;J<bt;J++){const gt=k[J];T=C[J];for(let S=0,_=gt.length;S<_;S++){const z=H(gt[S],T[S],st);Q(z.x,z.y,-V)}}}const F=g+v;for(let L=0;L<N;L++){const it=f?H(E[L],G[L],F):E[L];M?(w.copy(I.normals[0]).multiplyScalar(it.x),R.copy(I.binormals[0]).multiplyScalar(it.y),q.copy(x[0]).add(w).add(R),Q(q.x,q.y,q.z)):Q(it.x,it.y,0)}for(let L=1;L<=h;L++)for(let it=0;it<N;it++){const V=f?H(E[it],G[it],F):E[it];M?(w.copy(I.normals[L]).multiplyScalar(V.x),R.copy(I.binormals[L]).multiplyScalar(V.y),q.copy(x[L]).add(w).add(R),Q(q.x,q.y,q.z)):Q(V.x,V.y,u/h*L)}for(let L=d-1;L>=0;L--){const it=L/d,V=m*Math.cos(it*Math.PI/2),st=g*Math.sin(it*Math.PI/2)+v;for(let J=0,bt=U.length;J<bt;J++){const gt=H(U[J],tt[J],st);Q(gt.x,gt.y,u+V)}for(let J=0,bt=k.length;J<bt;J++){const gt=k[J];T=C[J];for(let S=0,_=gt.length;S<_;S++){const z=H(gt[S],T[S],st);M?Q(z.x,z.y+x[h-1].y,x[h-1].x+V):Q(z.x,z.y,u+V)}}}W(),et();function W(){const L=s.length/3;if(f){let it=0,V=N*it;for(let st=0;st<X;st++){const J=nt[st];ut(J[2]+V,J[1]+V,J[0]+V)}it=h+d*2,V=N*it;for(let st=0;st<X;st++){const J=nt[st];ut(J[0]+V,J[1]+V,J[2]+V)}}else{for(let it=0;it<X;it++){const V=nt[it];ut(V[2],V[1],V[0])}for(let it=0;it<X;it++){const V=nt[it];ut(V[0]+N*h,V[1]+N*h,V[2]+N*h)}}n.addGroup(L,s.length/3-L,0)}function et(){const L=s.length/3;let it=0;ot(U,it),it+=U.length;for(let V=0,st=k.length;V<st;V++){const J=k[V];ot(J,it),it+=J.length}n.addGroup(L,s.length/3-L,1)}function ot(L,it){let V=L.length;for(;--V>=0;){const st=V;let J=V-1;J<0&&(J=L.length-1);for(let bt=0,gt=h+d*2;bt<gt;bt++){const S=N*bt,_=N*(bt+1),z=it+st+S,ct=it+J+S,lt=it+J+_,at=it+st+_;xt(z,ct,lt,at)}}}function Q(L,it,V){c.push(L),c.push(it),c.push(V)}function ut(L,it,V){pt(L),pt(it),pt(V);const st=s.length/3,J=A.generateTopUV(n,s,st-3,st-2,st-1);yt(J[0]),yt(J[1]),yt(J[2])}function xt(L,it,V,st){pt(L),pt(it),pt(st),pt(it),pt(V),pt(st);const J=s.length/3,bt=A.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);yt(bt[0]),yt(bt[1]),yt(bt[3]),yt(bt[1]),yt(bt[2]),yt(bt[3])}function pt(L){s.push(c[L*3+0]),s.push(c[L*3+1]),s.push(c[L*3+2])}function yt(L){a.push(L.x),a.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pm(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,o=t.shapes.length;a<o;a++){const r=e[t.shapes[a]];n.push(r)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ta[s.type]().fromJSON(s)),new bi(n,t.options)}}const fm={generateTopUV:function(i,t,e,n,s){const a=t[e*3],o=t[e*3+1],r=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new mt(a,o),new mt(r,c),new mt(l,h)]},generateSideWallUV:function(i,t,e,n,s,a){const o=t[e*3],r=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],v=t[a*3],d=t[a*3+1],p=t[a*3+2];return Math.abs(r-h)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-u),new mt(f,1-g),new mt(v,1-p)]:[new mt(r,1-c),new mt(h,1-u),new mt(m,1-g),new mt(d,1-p)]}};function pm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ha extends Me{constructor(t=.5,e=1,n=32,s=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const r=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,m=new O,g=new mt;for(let v=0;v<=s;v++){for(let d=0;d<=n;d++){const p=a+d/n*o;m.x=u*Math.cos(p),m.y=u*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const d=v*(n+1);for(let p=0;p<n;p++){const A=p+d,x=A,M=A+n+1,I=A+n+2,R=A+1;r.push(x,M,R),r.push(M,I,R)}}this.setIndex(r),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class os extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ao={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mm{constructor(t,e,n){const s=this;let a=!1,o=0,r=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){r++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,r),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,r),o===r&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const gm=new mm;class Ga{constructor(t){this.manager=t!==void 0?t:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";const Je={};class vm extends Error{constructor(t,e){super(t),this.response=e}}class _m extends Ga{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Ao.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(Je[t]!==void 0){Je[t].push({onLoad:e,onProgress:n,onError:s});return}Je[t]=[],Je[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Je[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let v=0;const d=new ReadableStream({start(p){A();function A(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{v+=M.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let R=0,w=h.length;R<w;R++){const q=h[R];q.onProgress&&q.onProgress(I)}p.enqueue(M),A()}})}}});return new Response(d)}else throw new vm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,r));case"json":return l.json();default:if(r===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Ao.add(t,l);const h=Je[t];delete Je[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Je[t];if(h===void 0)throw this.manager.itemError(t),l;delete Je[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Sl extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ca=new ae,wo=new O,Co=new O;class xm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wo.setFromMatrixPosition(t.matrixWorld),e.position.copy(wo),Co.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Co),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ym extends xm{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ha extends Sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new ym}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sm extends Sl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ro{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mm extends fl{constructor(t=10,e=10,n=4473924,s=8947848){n=new Xt(n),s=new Xt(s);const a=e/2,o=t/e,r=t/2,c=[],l=[];for(let f=0,m=0,g=-r;f<=e;f++,g+=o){c.push(-r,0,g,r,0,g),c.push(g,0,-r,g,0,r);const v=f===a?n:s;v.toArray(l,m),m+=3,v.toArray(l,m),m+=3,v.toArray(l,m),m+=3,v.toArray(l,m),m+=3}const h=new Me;h.setAttribute("position",new ne(c,3)),h.setAttribute("color",new ne(l,3));const u=new Fa({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);const Po={type:"change"},ua={type:"start"},Lo={type:"end"},ls=new Ua,Uo=new tn,bm=Math.cos(70*Ac.DEG2RAD);class Em extends Dn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:Nn.ROTATE,TWO:Nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Rt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Po),n.update(),a=s.NONE},this.update=function(){const P=new O,dt=new Pn().setFromUnitVectors(t.up,new O(0,1,0)),Ct=dt.clone().invert(),At=new O,ht=new Pn,D=new O,ft=2*Math.PI;return function(Dt=null){const Ut=n.object.position;P.copy(Ut).sub(n.target),P.applyQuaternion(dt),r.setFromVector3(P),n.autoRotate&&a===s.NONE&&Y(E(Dt)),n.enableDamping?(r.theta+=c.theta*n.dampingFactor,r.phi+=c.phi*n.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let Yt=n.minAzimuthAngle,Zt=n.maxAzimuthAngle;isFinite(Yt)&&isFinite(Zt)&&(Yt<-Math.PI?Yt+=ft:Yt>Math.PI&&(Yt-=ft),Zt<-Math.PI?Zt+=ft:Zt>Math.PI&&(Zt-=ft),Yt<=Zt?r.theta=Math.max(Yt,Math.min(Zt,r.theta)):r.theta=r.theta>(Yt+Zt)/2?Math.max(Yt,r.theta):Math.min(Zt,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?r.radius=C(r.radius):r.radius=C(r.radius*l),P.setFromSpherical(r),P.applyQuaternion(Ct),Ut.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let te=!1;if(n.zoomToCursor&&R){let ie=null;if(n.object.isPerspectiveCamera){const $t=P.length();ie=C($t*l);const re=$t-ie;n.object.position.addScaledVector(M,re),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $t=new O(I.x,I.y,0);$t.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),te=!0;const re=new O(I.x,I.y,0);re.unproject(n.object),n.object.position.sub(re).add($t),n.object.updateMatrixWorld(),ie=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ie).add(n.object.position):(ls.origin.copy(n.object.position),ls.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ls.direction))<bm?t.lookAt(n.target):(Uo.setFromNormalAndCoplanarPoint(n.object.up,n.target),ls.intersectPlane(Uo,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),te=!0);return l=1,R=!1,te||At.distanceToSquared(n.object.position)>o||8*(1-ht.dot(n.object.quaternion))>o||D.distanceToSquared(n.target)>0?(n.dispatchEvent(Po),At.copy(n.object.position),ht.copy(n.object.quaternion),D.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Vt),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",at),n.domElement.removeEventListener("pointermove",_),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const o=1e-6,r=new Ro,c=new Ro;let l=1;const h=new O,u=new mt,f=new mt,m=new mt,g=new mt,v=new mt,d=new mt,p=new mt,A=new mt,x=new mt,M=new O,I=new mt;let R=!1;const w=[],q={};let y=!1;function E(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function k(P){const dt=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*dt)}function Y(P){c.theta-=P}function nt(P){c.phi-=P}const U=function(){const P=new O;return function(Ct,At){P.setFromMatrixColumn(At,0),P.multiplyScalar(-Ct),h.add(P)}}(),H=function(){const P=new O;return function(Ct,At){n.screenSpacePanning===!0?P.setFromMatrixColumn(At,1):(P.setFromMatrixColumn(At,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Ct),h.add(P)}}(),N=function(){const P=new O;return function(Ct,At){const ht=n.domElement;if(n.object.isPerspectiveCamera){const D=n.object.position;P.copy(D).sub(n.target);let ft=P.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),U(2*Ct*ft/ht.clientHeight,n.object.matrix),H(2*At*ft/ht.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(Ct*(n.object.right-n.object.left)/n.object.zoom/ht.clientWidth,n.object.matrix),H(At*(n.object.top-n.object.bottom)/n.object.zoom/ht.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(P,dt){if(!n.zoomToCursor)return;R=!0;const Ct=n.domElement.getBoundingClientRect(),At=P-Ct.left,ht=dt-Ct.top,D=Ct.width,ft=Ct.height;I.x=At/D*2-1,I.y=-(ht/ft)*2+1,M.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function C(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function T(P){u.set(P.clientX,P.clientY)}function G(P){tt(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function F(P){g.set(P.clientX,P.clientY)}function W(P){f.set(P.clientX,P.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const dt=n.domElement;Y(2*Math.PI*m.x/dt.clientHeight),nt(2*Math.PI*m.y/dt.clientHeight),u.copy(f),n.update()}function et(P){A.set(P.clientX,P.clientY),x.subVectors(A,p),x.y>0?X(k(x.y)):x.y<0&&K(k(x.y)),p.copy(A),n.update()}function ot(P){v.set(P.clientX,P.clientY),d.subVectors(v,g).multiplyScalar(n.panSpeed),N(d.x,d.y),g.copy(v),n.update()}function Q(P){tt(P.clientX,P.clientY),P.deltaY<0?K(k(P.deltaY)):P.deltaY>0&&X(k(P.deltaY)),n.update()}function ut(P){let dt=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?nt(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),dt=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?nt(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),dt=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),dt=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),dt=!0;break}dt&&(P.preventDefault(),n.update())}function xt(P){if(w.length===1)u.set(P.pageX,P.pageY);else{const dt=Et(P),Ct=.5*(P.pageX+dt.x),At=.5*(P.pageY+dt.y);u.set(Ct,At)}}function pt(P){if(w.length===1)g.set(P.pageX,P.pageY);else{const dt=Et(P),Ct=.5*(P.pageX+dt.x),At=.5*(P.pageY+dt.y);g.set(Ct,At)}}function yt(P){const dt=Et(P),Ct=P.pageX-dt.x,At=P.pageY-dt.y,ht=Math.sqrt(Ct*Ct+At*At);p.set(0,ht)}function L(P){n.enableZoom&&yt(P),n.enablePan&&pt(P)}function it(P){n.enableZoom&&yt(P),n.enableRotate&&xt(P)}function V(P){if(w.length==1)f.set(P.pageX,P.pageY);else{const Ct=Et(P),At=.5*(P.pageX+Ct.x),ht=.5*(P.pageY+Ct.y);f.set(At,ht)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const dt=n.domElement;Y(2*Math.PI*m.x/dt.clientHeight),nt(2*Math.PI*m.y/dt.clientHeight),u.copy(f)}function st(P){if(w.length===1)v.set(P.pageX,P.pageY);else{const dt=Et(P),Ct=.5*(P.pageX+dt.x),At=.5*(P.pageY+dt.y);v.set(Ct,At)}d.subVectors(v,g).multiplyScalar(n.panSpeed),N(d.x,d.y),g.copy(v)}function J(P){const dt=Et(P),Ct=P.pageX-dt.x,At=P.pageY-dt.y,ht=Math.sqrt(Ct*Ct+At*At);A.set(0,ht),x.set(0,Math.pow(A.y/p.y,n.zoomSpeed)),X(x.y),p.copy(A);const D=(P.pageX+dt.x)*.5,ft=(P.pageY+dt.y)*.5;tt(D,ft)}function bt(P){n.enableZoom&&J(P),n.enablePan&&st(P)}function gt(P){n.enableZoom&&J(P),n.enableRotate&&V(P)}function S(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",_),n.domElement.addEventListener("pointerup",z)),zt(P),P.pointerType==="touch"?Ot(P):ct(P))}function _(P){n.enabled!==!1&&(P.pointerType==="touch"?rt(P):lt(P))}function z(P){Nt(P),w.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",_),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(Lo),a=s.NONE}function ct(P){let dt;switch(P.button){case 0:dt=n.mouseButtons.LEFT;break;case 1:dt=n.mouseButtons.MIDDLE;break;case 2:dt=n.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case In.DOLLY:if(n.enableZoom===!1)return;G(P),a=s.DOLLY;break;case In.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;F(P),a=s.PAN}else{if(n.enableRotate===!1)return;T(P),a=s.ROTATE}break;case In.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;T(P),a=s.ROTATE}else{if(n.enablePan===!1)return;F(P),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(ua)}function lt(P){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;W(P);break;case s.DOLLY:if(n.enableZoom===!1)return;et(P);break;case s.PAN:if(n.enablePan===!1)return;ot(P);break}}function at(P){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(P.preventDefault(),n.dispatchEvent(ua),Q(wt(P)),n.dispatchEvent(Lo))}function wt(P){const dt=P.deltaMode,Ct={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(dt){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return P.ctrlKey&&!y&&(Ct.deltaY*=10),Ct}function vt(P){P.key==="Control"&&(y=!0,document.addEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Mt(P){P.key==="Control"&&(y=!1,document.removeEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Rt(P){n.enabled===!1||n.enablePan===!1||ut(P)}function Ot(P){switch(Lt(P),w.length){case 1:switch(n.touches.ONE){case Nn.ROTATE:if(n.enableRotate===!1)return;xt(P),a=s.TOUCH_ROTATE;break;case Nn.PAN:if(n.enablePan===!1)return;pt(P),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case Nn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(P),a=s.TOUCH_DOLLY_PAN;break;case Nn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(P),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(ua)}function rt(P){switch(Lt(P),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;V(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;st(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;bt(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(P),n.update();break;default:a=s.NONE}}function Vt(P){n.enabled!==!1&&P.preventDefault()}function zt(P){w.push(P.pointerId)}function Nt(P){delete q[P.pointerId];for(let dt=0;dt<w.length;dt++)if(w[dt]==P.pointerId){w.splice(dt,1);return}}function Lt(P){let dt=q[P.pointerId];dt===void 0&&(dt=new mt,q[P.pointerId]=dt),dt.set(P.pageX,P.pageY)}function Et(P){const dt=P.pointerId===w[0]?w[1]:w[0];return q[dt]}n.domElement.addEventListener("contextmenu",Vt),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",at,{passive:!1}),document.addEventListener("keydown",vt,{passive:!0,capture:!0}),this.update()}}class Tm extends Ga{constructor(t){super(t)}load(t,e,n,s){const a=this,o=new _m(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(r){try{e(a.parse(r))}catch(c){s?s(c):console.error(c),a.manager.itemError(t)}},n,s)}parse(t){function e(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*u===h.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(n(g,h,v))return!1;return!0}function n(l,h,u){for(let f=0,m=l.length;f<m;f++)if(l[f]!==h.getUint8(u+f))return!1;return!0}function s(l){const h=new DataView(l),u=h.getUint32(80,!0);let f,m,g,v=!1,d,p,A,x,M;for(let k=0;k<70;k++)h.getUint32(k,!1)==1129270351&&h.getUint8(k+4)==82&&h.getUint8(k+5)==61&&(v=!0,d=new Float32Array(u*3*3),p=h.getUint8(k+6)/255,A=h.getUint8(k+7)/255,x=h.getUint8(k+8)/255,M=h.getUint8(k+9)/255);const I=84,R=12*4+2,w=new Me,q=new Float32Array(u*3*3),y=new Float32Array(u*3*3),E=new Xt;for(let k=0;k<u;k++){const Y=I+k*R,nt=h.getFloat32(Y,!0),U=h.getFloat32(Y+4,!0),H=h.getFloat32(Y+8,!0);if(v){const N=h.getUint16(Y+48,!0);N&32768?(f=p,m=A,g=x):(f=(N&31)/31,m=(N>>5&31)/31,g=(N>>10&31)/31)}for(let N=1;N<=3;N++){const X=Y+N*12,K=k*3*3+(N-1)*3;q[K]=h.getFloat32(X,!0),q[K+1]=h.getFloat32(X+4,!0),q[K+2]=h.getFloat32(X+8,!0),y[K]=nt,y[K+1]=U,y[K+2]=H,v&&(E.set(f,m,g).convertSRGBToLinear(),d[K]=E.r,d[K+1]=E.g,d[K+2]=E.b)}}return w.setAttribute("position",new Re(q,3)),w.setAttribute("normal",new Re(y,3)),v&&(w.setAttribute("color",new Re(d,3)),w.hasColors=!0,w.alpha=M),w}function a(l){const h=new Me,u=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,d=new RegExp("vertex"+v+v+v,"g"),p=new RegExp("normal"+v+v+v,"g"),A=[],x=[],M=[],I=new O;let R,w=0,q=0,y=0;for(;(R=u.exec(l))!==null;){q=y;const E=R[0],k=(R=m.exec(E))!==null?R[1]:"";for(M.push(k);(R=f.exec(E))!==null;){let U=0,H=0;const N=R[0];for(;(R=p.exec(N))!==null;)I.x=parseFloat(R[1]),I.y=parseFloat(R[2]),I.z=parseFloat(R[3]),H++;for(;(R=d.exec(N))!==null;)A.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),x.push(I.x,I.y,I.z),U++,y++;H!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),U!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const Y=q,nt=y-q;h.userData.groupNames=M,h.addGroup(Y,nt,w),w++}return h.setAttribute("position",new ne(A,3)),h.setAttribute("normal",new ne(x,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function r(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=r(t);return e(c)?s(c):a(o(t))}}class Am{constructor(t,e={}){this.container=t,this.options=e,this.currentMesh=null,this.wireframeMesh=null,this.nozzleGroup=null,this.infillGroup=null,this.currentBbox=new ci,this.slicePercent=100,this.isWireframe=!1,this.currentColor=e.initialColor||"#ff6600",this.currentMaterialType=e.initialMaterial||"PETG",this.init(),this.createBuildPlate(),this.createNozzleHead(),this.loadModelPreset("gear"),this.animate=this.animate.bind(this),this.animate(),window.addEventListener("resize",this.onResize.bind(this))}init(){const t=this.container.clientWidth||600,e=this.container.clientHeight||450;this.scene=new Ip,this.scene.background=new Xt(725280),this.scene.fog=new Oa(725280,.0035),this.camera=new Ne(45,t/e,1,2e3),this.camera.position.set(160,140,180),this.renderer=new dl({antialias:!0,alpha:!0}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Io,this.renderer.localClippingEnabled=!0,this.container.appendChild(this.renderer.domElement),this.controls=new Em(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2+.05,this.controls.minDistance=40,this.controls.maxDistance=500,this.controls.target.set(0,30,0);const n=new Sm(16777215,.7);this.scene.add(n);const s=new ha(16777215,1.2);s.position.set(120,200,100),s.castShadow=!0,s.shadow.mapSize.width=2048,s.shadow.mapSize.height=2048,s.shadow.bias=-1e-4,this.scene.add(s);const a=new ha(62206,1.5);a.position.set(-120,80,-120),this.scene.add(a);const o=new ha(1096065,.6);o.position.set(0,-50,120),this.scene.add(o),this.clippingPlane=new tn(new O(0,-1,0),1e3)}createBuildPlate(){const e=new Ue(256,4,256),n=new os({color:1976635,roughness:.8,metalness:.2}),s=new de(e,n);s.position.y=-2,s.receiveShadow=!0,this.scene.add(s);const a=new Mm(256,25.6,62206,3359061);a.position.y=.1,this.scene.add(a);const o=new $p(new Ue(256,.5,256)),r=new Fa({color:3718648,linewidth:2}),c=new fl(o,r);c.position.y=.2,this.scene.add(c)}createNozzleHead(){this.nozzleGroup=new ti;const t=new Ba(4,8,16),e=new os({color:16096779,metalness:.8,roughness:.2,emissive:16729088,emissiveIntensity:.4}),n=new de(t,e);n.rotation.x=Math.PI,n.position.y=4,this.nozzleGroup.add(n);const s=new Ue(10,8,10),a=new os({color:9741240,metalness:.9,roughness:.2}),o=new de(s,a);o.position.y=12,this.nozzleGroup.add(o);const r=new Ha(.5,6,32),c=new vs({color:62206,side:Be,transparent:!0,opacity:.8}),l=new de(r,c);l.rotation.x=Math.PI/2,l.position.y=.1,this.nozzleGroup.add(l),this.nozzleGroup.visible=!1,this.scene.add(this.nozzleGroup)}getMaterial(t,e=!1){let n=.35,s=.1,a=!1,o=1;return this.currentMaterialType==="PETG"?(n=.25,s=.15):this.currentMaterialType==="PLA-SILK"?(n=.2,s=.65):this.currentMaterialType==="TPU"?(n=.5,a=!0,o=.88):this.currentMaterialType==="ABS-P1S"&&(n=.6,s=.05),new os({color:new Xt(t),roughness:n,metalness:s,transparent:a,opacity:o,wireframe:e,clippingPlanes:[this.clippingPlane],clipShadows:!0,side:Be})}loadModelPreset(t){let e;t==="gear"?e=this.generateGearGeometry(45,18,24,12,5):t==="drone-arm"?e=this.generateDroneArmGeometry():t==="tower"?e=this.generateTowerGeometry():t==="gripper"?e=this.generateGripperGeometry():t==="planter"?e=this.generatePlanterGeometry():e=this.generateGearGeometry(40,15,20,10,4),this.setModelGeometry(e)}setModelGeometry(t){this.currentMesh&&(this.scene.remove(this.currentMesh),this.currentMesh.geometry&&this.currentMesh.geometry.dispose(),this.currentMesh.material&&this.currentMesh.material.dispose()),this.wireframeMesh&&(this.scene.remove(this.wireframeMesh),this.wireframeMesh.geometry&&this.wireframeMesh.geometry.dispose(),this.wireframeMesh.material&&this.wireframeMesh.material.dispose()),t.computeVertexNormals(),t.center(),t.computeBoundingBox(),this.currentBbox.copy(t.boundingBox);const e=this.currentBbox.max.y-this.currentBbox.min.y,n=this.getMaterial(this.currentColor,!1);this.currentMesh=new de(t,n),this.currentMesh.position.y=e/2,this.currentMesh.castShadow=!0,this.currentMesh.receiveShadow=!0,this.scene.add(this.currentMesh);const s=new vs({color:62206,wireframe:!0,transparent:!0,opacity:.25,clippingPlanes:[this.clippingPlane]});this.wireframeMesh=new de(t,s),this.wireframeMesh.position.copy(this.currentMesh.position),this.wireframeMesh.visible=this.isWireframe,this.scene.add(this.wireframeMesh),this.updateSliceClipping(this.slicePercent)}generateGearGeometry(t,e,n,s,a){const o=new hs,r=Math.PI*2/n;for(let v=0;v<n;v++){const d=v*r,p=d,A=d+r*.25,x=d+r*.55,M=d+r*.8,I=t-s,R=t,w=Math.cos(p)*I,q=Math.sin(p)*I,y=Math.cos(A)*R,E=Math.sin(A)*R,k=Math.cos(x)*R,Y=Math.sin(x)*R,nt=Math.cos(M)*I,U=Math.sin(M)*I;v===0?o.moveTo(w,q):o.lineTo(w,q),o.lineTo(y,E),o.lineTo(k,Y),o.lineTo(nt,U)}o.closePath();const c=new cn,l=e;c.absarc(0,0,l,0,Math.PI*2,!0);const h=l*.4,u=l*.3,f=new cn;f.moveTo(-h/2,l-.5),f.lineTo(-h/2,l+u),f.lineTo(h/2,l+u),f.lineTo(h/2,l-.5),o.holes.push(c);const m={steps:2,depth:a,bevelEnabled:!0,bevelThickness:1.5,bevelSize:1,bevelSegments:3},g=new bi(o,m);return g.rotateX(Math.PI/2),g}generateDroneArmGeometry(){const t=new hs;t.moveTo(-12,-45),t.lineTo(12,-45),t.lineTo(8,30),t.lineTo(18,45),t.absarc(0,45,18,0,Math.PI,!1),t.lineTo(-8,30),t.lineTo(-12,-45);const e=new cn;e.absarc(0,45,8,0,Math.PI*2,!0),t.holes.push(e);const n=new cn;n.moveTo(-4,-15),n.lineTo(4,-15),n.lineTo(3,10),n.lineTo(-3,10),n.closePath(),t.holes.push(n);const s=new cn;s.moveTo(-6,-38),s.lineTo(6,-38),s.lineTo(5,-22),s.lineTo(-5,-22),s.closePath(),t.holes.push(s);const a={steps:1,depth:14,bevelEnabled:!0,bevelThickness:1.2,bevelSize:1,bevelSegments:2},o=new bi(t,a);return o.rotateX(Math.PI/2),o}generateTowerGeometry(){const t=new Ue(45,40,45),e=new Ue(32,50,32),n=new Ue(20,40,20),s=new Ai(1,3,30,8);e.translate(0,45,0),n.translate(0,90,0),s.translate(0,125,0);const a=new ti,o=new de(t),r=new de(e),c=new de(n),l=new de(s);return a.add(o),a.add(r),a.add(c),a.add(l),new Ue(42,110,42)}generateGripperGeometry(){const t=new hs;t.moveTo(-15,-20),t.lineTo(15,-20),t.lineTo(12,10),t.lineTo(25,35),t.lineTo(20,45),t.lineTo(5,25),t.lineTo(-5,25),t.lineTo(-20,45),t.lineTo(-25,35),t.lineTo(-12,10),t.closePath();const e=new cn;e.absarc(0,-5,6,0,Math.PI*2,!0),t.holes.push(e);const n={steps:1,depth:16,bevelEnabled:!0,bevelThickness:1.5,bevelSize:1,bevelSegments:2},s=new bi(t,n);return s.rotateX(Math.PI/2),s}generatePlanterGeometry(){const t=new Ai(26,18,48,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const a=e.getY(n)/48*.6,o=e.getX(n),r=e.getZ(n);e.setX(n,o*Math.cos(a)-r*Math.sin(a)),e.setZ(n,o*Math.sin(a)+r*Math.cos(a))}return t.computeVertexNormals(),t}loadSTLFile(t,e,n){const s=new FileReader;s.onload=a=>{try{const r=new Tm().parse(a.target.result);this.setModelGeometry(r),e&&e(r)}catch(o){console.error("Error parsing STL file:",o),n&&n(o)}},s.readAsArrayBuffer(t)}setColor(t){this.currentColor=t,this.currentMesh&&this.currentMesh.material.color.set(t)}setMaterialType(t){if(this.currentMaterialType=t,this.currentMesh){const e=this.getMaterial(this.currentColor,!1);this.currentMesh.material=e}}toggleWireframe(t){this.isWireframe=t,this.wireframeMesh&&(this.wireframeMesh.visible=t)}updateSliceClipping(t){if(this.slicePercent=t,!this.currentMesh)return;const e=this.currentBbox.max.y-this.currentBbox.min.y,n=t/100*e;this.clippingPlane.constant=n,t<99&&t>1?(this.nozzleGroup.visible=!0,this.nozzleGroup.position.set(0,n,0)):this.nozzleGroup.visible=!1}resetCamera(){this.camera.position.set(160,140,180),this.controls.target.set(0,30,0),this.controls.update()}onResize(){if(!this.container)return;const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}animate(){requestAnimationFrame(this.animate),this.controls.update(),this.nozzleGroup&&this.nozzleGroup.visible&&(this.nozzleGroup.position.x=Math.sin(Date.now()*.008)*12,this.nozzleGroup.position.z=Math.cos(Date.now()*.008)*12),this.renderer.render(this.scene,this.camera)}destroy(){window.removeEventListener("resize",this.onResize),this.renderer&&this.renderer.domElement&&this.container.removeChild(this.renderer.domElement)}}const da=[{id:"functional-part",title:"Funktsional va Ehtiyot Qismlar",uzTitle:"Ta’mirlash va Nostandart Qismlar",icon:"⚙️",badge:"B2B Yuqori Talab",badgeColor:"emerald",shortDesc:"Singan shesternalar, kraniklar, kronshteynlar, uskunalar korpusi va avtomobil plastmassa detallari.",targetCustomer:"Ta’mirlash ustaxonalari, maishiy texnika egalari, avtomobil egalari, sexlar",recommendedMaterial:"PETG",defaultInfill:60,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:45e3,modelPreset:"gear",features:["Singan jismoniy qism yoki o‘lchamlardan qayta chizma (revers-injiniring)","PETG va Neylon orqali yuqori mustahkamlik va yeyilishga chidamlilik","Muhandislik aniqligi: ±0.05 mm gacha bardoshlik","Chet eldan qimmat va uzoq kutishga nisbatan 80% tejamkorlik"],presets:[{name:"Oshxona Kombayni Shesternasi",weightG:32,timeHrs:1.8,modelingFeeUZS:5e4},{name:"Konditsioner Jalyuzi Qisqichi",weightG:12,timeHrs:.8,modelingFeeUZS:3e4},{name:"Og‘ir Yuk Kronshteyni (Devorga)",weightG:75,timeHrs:3.5,modelingFeeUZS:4e4},{name:"Uskunalar Regulyator Tutqichi (Knob)",weightG:22,timeHrs:1.2,modelingFeeUZS:3e4}]},{id:"rapid-prototype",title:"Tezkor Prototip va Muhandislik Korpuslari",uzTitle:"Startaplar va Muhandislar Uchun",icon:"🚀",badge:"Muhandislik va Startap",badgeColor:"cyan",shortDesc:"IoT korpuslari, elektronika qutilari, dron romlari va robototexnika qismlarini seriyadan oldin sinash.",targetCustomer:"Apparat startaplari, muhandislar, mahsulot dizaynerlari, IoT dasturchilari",recommendedMaterial:"PLA-TOUGH",defaultInfill:30,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24–48 Soat",basePriceUZS:85e3,modelPreset:"drone-arm",features:["Qimmat metall qoliplar yasatishdan oldin 24 soat ichida sinov prototipi","Latun rezbali vtulka (heat-set insert) o‘rnatish imkoniyati","Platalar (PCB) va qisqichli birikmalar (snap-fit) uchun mos","Ergonomika va o‘lchamlarni minimal xarajat bilan tekshirish"],presets:[{name:"Dron (Kvadrkopter) Motor Yelkasi",weightG:48,timeHrs:2.5,modelingFeeUZS:6e4},{name:"Aqlli Uy Sensori Devor Qutisi",weightG:65,timeHrs:3.2,modelingFeeUZS:8e4},{name:"Qo‘l Diagnostika Qurilmasi Korpusi",weightG:95,timeHrs:4.5,modelingFeeUZS:9e4},{name:"DIN-Reyka Sanoat Rele Qutisi",weightG:55,timeHrs:2.8,modelingFeeUZS:5e4}]},{id:"architectural-model",title:"Arxitektura va Shaharsozlik Maketlari",uzTitle:"Bino va Loyihalar Taqdimoti",icon:"🏛️",badge:"Arxitektura va Qurilish",badgeColor:"amber",shortDesc:"Toshkent City turar-joy majmualari, zamonaviy villalar, master-reja va interyer masshtab maketlari.",targetCustomer:"Arxitektorlar, qurilish kompaniyalari, dizaynerlar, shaharsozlar",recommendedMaterial:"PLA-MATTE-WHITE",defaultInfill:15,defaultLayerHeight:.16,defaultQuantity:1,typicalTurnaround:"48–72 Soat",basePriceUZS:25e4,modelPreset:"tower",features:["Mukammal oppoq matoviy yuza va aniq fassad chiziqlari","1:100, 1:200, 1:500 masshtabdagi modulli yig‘iluvchi qismlar","Investorlar va shaharsozlik kengashi taqdimotlari uchun ideal","Bambu printeridan katta ob’ektlar uchun ko‘p qismli yig‘ish"],presets:[{name:"Zamonaviy Osmono‘par Bino (1:200)",weightG:210,timeHrs:9.5,modelingFeeUZS:15e4},{name:"Shahar Tashqarisidagi Villa Maketi",weightG:180,timeHrs:8,modelingFeeUZS:12e4},{name:"Turar-Joy Kvartali Bosh Rejasi",weightG:340,timeHrs:14,modelingFeeUZS:2e5},{name:"Xonadon Rejasi va Interyer Kesimi",weightG:130,timeHrs:6,modelingFeeUZS:1e5}]},{id:"educational-project",title:"Talabalar va Ta’lim Loyihalari (ToshTech)",uzTitle:"Robototexnika va Diplom Ishtirokchilari",icon:"🎓",badge:"20% Talabalar Chegirmasi",badgeColor:"purple",shortDesc:"Robot klublari shassisi, diplom va kurs ishlari detallari, anatomik va ilmiy o‘quv maketlari.",targetCustomer:"ToshTech, TATU, Turin, Inha, Vestminster talabalari va to‘garaklar",recommendedMaterial:"PLA",defaultInfill:25,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:35e3,modelPreset:"gripper",features:["Talaba guvohnomasi bilan barcha buyurtmalarga 20% chegirma","Xakatonlar va diplom topshirish muddatlarida tezkor navbat","3D chop etish uchun chizmani bepul optimallashtirish bo‘yicha maslahat","Universitet laboratoriyalari uchun paketli narxlar"],presets:[{name:"2-Barmoqli Robot Tutqichi (Servo Gripper)",weightG:45,timeHrs:2.2,modelingFeeUZS:3e4},{name:"Formula Student Aerodinamik Qanotchasi",weightG:60,timeHrs:3,modelingFeeUZS:4e4},{name:"Ko‘rgazmali Reduktor Mexanizmi",weightG:90,timeHrs:4.2,modelingFeeUZS:5e4},{name:"Biomeditsina Yurak Anatomik Maketi",weightG:70,timeHrs:3.8,modelingFeeUZS:4e4}]},{id:"custom-merch",title:"Esdalik Sovg‘alari, Art va Merch",uzTitle:"Shaxsiy Buyurtmalar va Korporativ Sovg‘a",icon:"🎨",badge:"Ijodiy va Chakana",badgeColor:"pink",shortDesc:"Stol aksessuarlari, anime figuralari, kompaniya logotipli breloklar, litofaniya fotosuratli tungi chiroqlar.",targetCustomer:"Aholisi, brendlar, sovg‘a izlovchilar, Instagram va Telegram xaridorlari",recommendedMaterial:"PLA-SILK-GOLD",defaultInfill:20,defaultLayerHeight:.16,defaultQuantity:1,typicalTurnaround:"24–48 Soat",basePriceUZS:4e4,modelPreset:"planter",features:["Tillarang ipak, marmarsimon va ikki rangli yaltiroq filamentlar","Buyum yuzasiga shaxsiy ism yoki kompaniya logotipini bosib chiqarish","Chiroyli qadoqlash va sovg‘a qutisi","Dona holatda ham buyurtma qabul qilinadi"],presets:[{name:"Low-Poly Geometrik Kaktus Idishi",weightG:50,timeHrs:2.4,modelingFeeUZS:25e3},{name:"Toshkent Teleminorasi Stol Suveniri",weightG:40,timeHrs:2,modelingFeeUZS:3e4},{name:"Litofaniya Fotosuratli Yorug‘lik Kubigi",weightG:85,timeHrs:4.8,modelingFeeUZS:4e4},{name:"10 dona Kompaniya Logotipli Brelok",weightG:90,timeHrs:3.6,modelingFeeUZS:3e4}]},{id:"b2b-batch",title:"Kichik Seriyali B2B Ishlab Chiqarish (10–100+ dona)",uzTitle:"Kichik Partiyada Tayyorlash",icon:"🏭",badge:"35% Gacha Ulgurji Chegirma",badgeColor:"blue",shortDesc:"50 million so‘mlik qimmat po‘lat qoliplarsiz plastmassa qismlarni tezkor seriyada chop etish.",targetCustomer:"Elektronika sexlari, mebel ishlab chiqaruvchilar, montajchilar",recommendedMaterial:"PETG",defaultInfill:40,defaultLayerHeight:.24,defaultQuantity:25,typicalTurnaround:"3–5 Kun",basePriceUZS:45e4,modelPreset:"gear",features:["Pillapoyali chegirma: 10-24 dona (-15%), 25-49 dona (-25%), 50+ dona (-35%)","Birinchi namuna bepul chop etilib, tasdiqlangach to‘liq partiya ishga tushadi","Barcha qismlarda rang va o‘lcham bir xilligi kafolatlanadi","Qolip tayyorlashga oylar sarflamay, ertagayoq ishlab chiqarishni boshlash"],presets:[{name:"25 dona Kabel Qisqichi (Clip)",weightG:250,timeHrs:11,modelingFeeUZS:4e4},{name:"50 dona Elektronika Prokladkasi",weightG:200,timeHrs:8.5,modelingFeeUZS:3e4},{name:"20 dona Dastgoh Uskunasi Tutqichi",weightG:600,timeHrs:22,modelingFeeUZS:5e4}]},{id:"cad-modeling-only",title:"3D Chizma va Revers-Injiniring Xizmati",uzTitle:"Faqat Chizma va Modellashtirish",icon:"📐",badge:"Muhandislik Chizmasi",badgeColor:"teal",shortDesc:"Faylingiz yo‘qmi? Singan detalni Chilonzor ustaxonamizga olib keling yoki fotosuratini yuboring — 3D model chizib beramiz.",targetCustomer:"3D modeli bo‘lmagan mijozlar, ustalar, kashfiyotchilar, korxonalar",recommendedMaterial:"PETG",defaultInfill:50,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:8e4,modelPreset:"gear",features:["Elektron shtangensirkul bilan mikron darajasida aniq o‘lchash",".STEP, .STL, .OBJ va SolidWorks formatlarida tayyor fayl berish","Kuchlanish va 3D bosmaga mosligini tahlil qilish","Ustaxonamizda 1 dona bepul sinov nusxasini chop etib tekshirish"],presets:[{name:"Oddiy Tutqich yoki Qopqoqni Modellashtirish",weightG:25,timeHrs:1,modelingFeeUZS:6e4},{name:"Singan Shesterna Tishlarini Qayta Tiklash",weightG:35,timeHrs:1.5,modelingFeeUZS:9e4},{name:"Murakkab Egri Chiziqli Korpus Chizmasi",weightG:70,timeHrs:3,modelingFeeUZS:15e4}]}],fa=[{id:"PETG",name:"PETG Mustahkam (3DShef Chilonzor)",uzName:"PETG Muhandislik Polimeri",type:"Mustahkam Texnik Polimer",densityGcm3:1.27,costPerKgUZS:22e4,costPerGUZS:220,bestFor:"Shesternalar, kronshteynlar, tashqi detallar, 75°C gacha issiqqa chidamli",colors:[{name:"Signal Zarg‘aldoq",hex:"#ff6600",rough:.25},{name:"Yarim Shaffof Kulrang",hex:"#4a5568",rough:.2,transparent:!0,opacity:.85},{name:"Yaltiroq Qora",hex:"#111111",rough:.15},{name:"Sanoat Oqi",hex:"#e2e8f0",rough:.2}]},{id:"PLA",name:"PLA Standart (Sunlu / eSun)",uzName:"PLA Bioplastik",type:"Ekologik Toza Polimer",densityGcm3:1.24,costPerKgUZS:18e4,costPerGUZS:180,bestFor:"Prototip, ko‘rgazmali maketlar, talabalar loyihalari, dekorativ buyumlar",colors:[{name:"Qop-Qora",hex:"#1a1a1a",rough:.4},{name:"Opppoq Oq",hex:"#f0f0f0",rough:.3},{name:"Yorqin Moviy",hex:"#00c3ff",rough:.35},{name:"Qizil",hex:"#e62429",rough:.35}]},{id:"PLA-SILK",name:"Ipak PLA Metall Yaltiroq",uzName:"Ipak Yaltiroq Premium",type:"Dekorativ Premium",densityGcm3:1.25,costPerKgUZS:26e4,costPerGUZS:260,bestFor:"Sovg‘alar, mukofotlar, shaxsiy suvenirlar, Toshkent yodgorliklari",colors:[{name:"Zar Tillarang",hex:"#d4af37",metal:.6,rough:.25},{name:"Kumushrang",hex:"#c0c0c0",metal:.65,rough:.25},{name:"Misrang",hex:"#b76e79",metal:.55,rough:.28}]},{id:"TPU",name:"TPU 95A Egiluvchan Rezina",uzName:"Rezinasimon Elastomer",type:"Elastomer Rezina",densityGcm3:1.21,costPerKgUZS:32e4,costPerGUZS:320,bestFor:"Zichlagichlar, bamperlar, zarbani yutuvchi muftalar, elastik qismlar",colors:[{name:"Neon Yashil",hex:"#39ff14",rough:.4},{name:"Qora Rezina",hex:"#222222",rough:.5},{name:"Shaffof Rezina",hex:"#e0f2fe",rough:.2,transparent:!0,opacity:.7}]},{id:"ABS-P1S",name:"ABS / ASA Termobardosh (Bambu P1S)",uzName:"Yuqori Haroratga Chidamli",type:"Yopiq Kamera Polimeri",densityGcm3:1.05,costPerKgUZS:25e4,costPerGUZS:250,bestFor:"Avtomobil kapot osti detallari, 95°C gacha issiqqa chidamli qismlar",colors:[{name:"Matoviy Qora",hex:"#18181b",rough:.6},{name:"Texnik Kulrang",hex:"#64748b",rough:.55}]}],pa=[{id:"0.28",label:"0.28 mm — Tezkor Qoralama",speedMultiplier:.75,desc:"Eng tez bosish, o‘lchamlarni sinab ko‘rish uchun qulay"},{id:"0.20",label:"0.20 mm — Standart (Tavsiya etiladi)",speedMultiplier:1,desc:"Mustahkamlik, silliqlik va tezlikning ideal balansi"},{id:"0.12",label:"0.12 mm — Yuqori Aniqlik",speedMultiplier:1.5,desc:"Deyarli ko‘rinmas qatlamlar, mayda shesternalar va ko‘rgazmali buyumlar uchun"}],wm=[{value:15,label:"15% — Yengil / Ko‘rgazmali",desc:"Haykalchalar, vizual arxitektura maketlari"},{value:30,label:"30% — Standart Prototip",desc:"Elektronika korpuslari, qutilar"},{value:60,label:"60% — Yuqori Mustahkam",desc:"Shesternalar, mexanik kronshteynlar, ehtiyot qismlar"},{value:100,label:"100% — Monolit Muhandislik",desc:"Og‘ir yuk tushadigan qismlar, kraniklar"}],Ca=12650;var Va={};(function i(t,e,n,s){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",r=function(){if(!t.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),T=C.getContext("2d");T.fillRect(0,0,1,1);var G=C.transferToImageBitmap();T.createPattern(G,"no-repeat")}catch{return!1}return!0}();function c(){}function l(C){var T=e.exports.Promise,G=T!==void 0?T:t.Promise;return typeof G=="function"?new G(C):(C(c,c),null)}var h=function(C,T){return{transform:function(G){if(C)return G;if(T.has(G))return T.get(G);var F=new OffscreenCanvas(G.width,G.height),W=F.getContext("2d");return W.drawImage(G,0,0),T.set(G,F),F},clear:function(){T.clear()}}}(r,new Map),u=function(){var C=Math.floor(16.666666666666668),T,G,F={},W=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(et){var ot=Math.random();return F[ot]=requestAnimationFrame(function Q(ut){W===ut||W+C-1<ut?(W=ut,delete F[ot],et()):F[ot]=requestAnimationFrame(Q)}),ot},G=function(et){F[et]&&cancelAnimationFrame(F[et])}):(T=function(et){return setTimeout(et,C)},G=function(et){return clearTimeout(et)}),{frame:T,cancel:G}}(),f=function(){var C,T,G={};function F(W){function et(ot,Q){W.postMessage({options:ot||{},callback:Q})}W.init=function(Q){var ut=Q.transferControlToOffscreen();W.postMessage({canvas:ut},[ut])},W.fire=function(Q,ut,xt){if(T)return et(Q,null),T;var pt=Math.random().toString(36).slice(2);return T=l(function(yt){function L(it){it.data.callback===pt&&(delete G[pt],W.removeEventListener("message",L),T=null,h.clear(),xt(),yt())}W.addEventListener("message",L),et(Q,pt),G[pt]=L.bind(null,{data:{callback:pt}})}),T},W.reset=function(){W.postMessage({reset:!0});for(var Q in G)G[Q](),delete G[Q]}}return function(){if(C)return C;if(!n&&a){var W=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([W])))}catch(et){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",et),null}F(C)}return C}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(C,T){return T?T(C):C}function v(C){return C!=null}function d(C,T,G){return g(C&&v(C[T])?C[T]:m[T],G)}function p(C){return C<0?0:Math.floor(C)}function A(C,T){return Math.floor(Math.random()*(T-C))+C}function x(C){return parseInt(C,16)}function M(C){return C.map(I)}function I(C){var T=String(C).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:x(T.substring(0,2)),g:x(T.substring(2,4)),b:x(T.substring(4,6))}}function R(C){var T=d(C,"origin",Object);return T.x=d(T,"x",Number),T.y=d(T,"y",Number),T}function w(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function q(C){var T=C.getBoundingClientRect();C.width=T.width,C.height=T.height}function y(C){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=C,T}function E(C,T,G,F,W,et,ot,Q,ut){C.save(),C.translate(T,G),C.rotate(et),C.scale(F,W),C.arc(0,0,1,ot,Q,ut),C.restore()}function k(C){var T=C.angle*(Math.PI/180),G=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-T+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function Y(C,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var G=T.tick++/T.totalTicks,F=T.x+T.random*T.tiltCos,W=T.y+T.random*T.tiltSin,et=T.wobbleX+T.random*T.tiltCos,ot=T.wobbleY+T.random*T.tiltSin;if(C.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-G)+")",C.beginPath(),o&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))C.fill(X(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(et-F)*.1,Math.abs(ot-W)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var Q=Math.PI/10*T.wobble,ut=Math.abs(et-F)*.1,xt=Math.abs(ot-W)*.1,pt=T.shape.bitmap.width*T.scalar,yt=T.shape.bitmap.height*T.scalar,L=new DOMMatrix([Math.cos(Q)*ut,Math.sin(Q)*ut,-Math.sin(Q)*xt,Math.cos(Q)*xt,T.x,T.y]);L.multiplySelf(new DOMMatrix(T.shape.matrix));var it=C.createPattern(h.transform(T.shape.bitmap),"no-repeat");it.setTransform(L),C.globalAlpha=1-G,C.fillStyle=it,C.fillRect(T.x-pt/2,T.y-yt/2,pt,yt),C.globalAlpha=1}else if(T.shape==="circle")C.ellipse?C.ellipse(T.x,T.y,Math.abs(et-F)*T.ovalScalar,Math.abs(ot-W)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):E(C,T.x,T.y,Math.abs(et-F)*T.ovalScalar,Math.abs(ot-W)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var V=Math.PI/2*3,st=4*T.scalar,J=8*T.scalar,bt=T.x,gt=T.y,S=5,_=Math.PI/S;S--;)bt=T.x+Math.cos(V)*J,gt=T.y+Math.sin(V)*J,C.lineTo(bt,gt),V+=_,bt=T.x+Math.cos(V)*st,gt=T.y+Math.sin(V)*st,C.lineTo(bt,gt),V+=_;else C.moveTo(Math.floor(T.x),Math.floor(T.y)),C.lineTo(Math.floor(T.wobbleX),Math.floor(W)),C.lineTo(Math.floor(et),Math.floor(ot)),C.lineTo(Math.floor(F),Math.floor(T.wobbleY));return C.closePath(),C.fill(),T.tick<T.totalTicks}function nt(C,T,G,F,W){var et=T.slice(),ot=C.getContext("2d"),Q,ut,xt=l(function(pt){function yt(){Q=ut=null,ot.clearRect(0,0,F.width,F.height),h.clear(),W(),pt()}function L(){n&&!(F.width===s.width&&F.height===s.height)&&(F.width=C.width=s.width,F.height=C.height=s.height),!F.width&&!F.height&&(G(C),F.width=C.width,F.height=C.height),ot.clearRect(0,0,F.width,F.height),et=et.filter(function(it){return Y(ot,it)}),et.length?Q=u.frame(L):yt()}Q=u.frame(L),ut=yt});return{addFettis:function(pt){return et=et.concat(pt),xt},canvas:C,promise:xt,reset:function(){Q&&u.cancel(Q),ut&&ut()}}}function U(C,T){var G=!C,F=!!d(T||{},"resize"),W=!1,et=d(T,"disableForReducedMotion",Boolean),ot=a&&!!d(T||{},"useWorker"),Q=ot?f():null,ut=G?w:q,xt=C&&Q?!!C.__confetti_initialized:!1,pt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,yt;function L(V,st,J){for(var bt=d(V,"particleCount",p),gt=d(V,"angle",Number),S=d(V,"spread",Number),_=d(V,"startVelocity",Number),z=d(V,"decay",Number),ct=d(V,"gravity",Number),lt=d(V,"drift",Number),at=d(V,"colors",M),wt=d(V,"ticks",Number),vt=d(V,"shapes"),Mt=d(V,"scalar"),Rt=!!d(V,"flat"),Ot=R(V),rt=bt,Vt=[],zt=C.width*Ot.x,Nt=C.height*Ot.y;rt--;)Vt.push(k({x:zt,y:Nt,angle:gt,spread:S,startVelocity:_,color:at[rt%at.length],shape:vt[A(0,vt.length)],ticks:wt,decay:z,gravity:ct,drift:lt,scalar:Mt,flat:Rt}));return yt?yt.addFettis(Vt):(yt=nt(C,Vt,ut,st,J),yt.promise)}function it(V){var st=et||d(V,"disableForReducedMotion",Boolean),J=d(V,"zIndex",Number);if(st&&pt)return l(function(_){_()});G&&yt?C=yt.canvas:G&&!C&&(C=y(J),document.body.appendChild(C)),F&&!xt&&ut(C);var bt={width:C.width,height:C.height};Q&&!xt&&Q.init(C),xt=!0,Q&&(C.__confetti_initialized=!0);function gt(){if(Q){var _={getBoundingClientRect:function(){if(!G)return C.getBoundingClientRect()}};ut(_),Q.postMessage({resize:{width:_.width,height:_.height}});return}bt.width=bt.height=null}function S(){yt=null,F&&(W=!1,t.removeEventListener("resize",gt)),G&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,xt=!1)}return F&&!W&&(W=!0,t.addEventListener("resize",gt,!1)),Q?Q.fire(V,bt,S):L(V,bt,S)}return it.reset=function(){Q&&Q.reset(),yt&&yt.reset()},it}var H;function N(){return H||(H=U(null,{useWorker:!0,resize:!0})),H}function X(C,T,G,F,W,et,ot){var Q=new Path2D(C),ut=new Path2D;ut.addPath(Q,new DOMMatrix(T));var xt=new Path2D;return xt.addPath(ut,new DOMMatrix([Math.cos(ot)*W,Math.sin(ot)*W,-Math.sin(ot)*et,Math.cos(ot)*et,G,F])),xt}function K(C){if(!o)throw new Error("path confetti are not supported in this browser");var T,G;typeof C=="string"?T=C:(T=C.path,G=C.matrix);var F=new Path2D(T),W=document.createElement("canvas"),et=W.getContext("2d");if(!G){for(var ot=1e3,Q=ot,ut=ot,xt=0,pt=0,yt,L,it=0;it<ot;it+=2)for(var V=0;V<ot;V+=2)et.isPointInPath(F,it,V,"nonzero")&&(Q=Math.min(Q,it),ut=Math.min(ut,V),xt=Math.max(xt,it),pt=Math.max(pt,V));yt=xt-Q,L=pt-ut;var st=10,J=Math.min(st/yt,st/L);G=[J,0,0,J,-Math.round(yt/2+Q)*J,-Math.round(L/2+ut)*J]}return{type:"path",path:T,matrix:G}}function tt(C){var T,G=1,F="#000000",W='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?T=C:(T=C.text,G="scalar"in C?C.scalar:G,W="fontFamily"in C?C.fontFamily:W,F="color"in C?C.color:F);var et=10*G,ot=""+et+"px "+W,Q=new OffscreenCanvas(et,et),ut=Q.getContext("2d");ut.font=ot;var xt=ut.measureText(T),pt=Math.ceil(xt.actualBoundingBoxRight+xt.actualBoundingBoxLeft),yt=Math.ceil(xt.actualBoundingBoxAscent+xt.actualBoundingBoxDescent),L=2,it=xt.actualBoundingBoxLeft+L,V=xt.actualBoundingBoxAscent+L;pt+=L+L,yt+=L+L,Q=new OffscreenCanvas(pt,yt),ut=Q.getContext("2d"),ut.font=ot,ut.fillStyle=F,ut.fillText(T,it,V);var st=1/G;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[st,0,0,st,-pt*st/2,-yt*st/2]}}e.exports=function(){return N().apply(this,arguments)},e.exports.reset=function(){N().reset()},e.exports.create=U,e.exports.shapeFromPath=K,e.exports.shapeFromText=tt})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Va,!1);const Cm=Va.exports;Va.exports.create;class Rm{constructor(t,e,n){this.mount=t,this.studio=e,this.onOrderSubmitted=n,this.state={orderTypeId:"functional-part",presetIndex:0,materialId:"PETG",colorHex:"#ff6600",infill:60,layerHeight:"0.20",quantity:1,modelingService:"none",turnaround:"standard",delivery:"pickup",isStudent:!1,studentId:"",currency:"UZS",customerName:"",customerPhone:"+998 ",customerTelegram:"",orderNotes:"",uploadedFileName:null,receiptImage:null,slicePercent:100,wireframe:!1},this.render()}getCurrentOrderType(){return da.find(t=>t.id===this.state.orderTypeId)||da[0]}getCurrentMaterial(){return fa.find(t=>t.id===this.state.materialId)||fa[0]}formatPrice(t){return this.state.currency==="USD"?`$${(t/Ca).toFixed(2)}`:`${t.toLocaleString("ru-RU")} so‘m`}calculatePricing(){const t=this.getCurrentOrderType(),e=this.getCurrentMaterial(),n=t.presets[this.state.presetIndex]||t.presets[0],s=pa.find(I=>I.id===this.state.layerHeight)||pa[1],a=.5+this.state.infill/100*.7,o=Math.round(n.weightG*a),r=o*e.costPerGUZS,c=+(n.timeHrs*s.speedMultiplier*a).toFixed(1),l=Math.round(c*2665),h=12e3;let u=0;this.state.modelingService==="broken-part"?u=n.modelingFeeUZS||8e4:this.state.modelingService==="sketch"&&(u=5e4);const f=r+l+h,m=Math.max(t.basePriceUZS,Math.round(f*2.3/5e3)*5e3);let g=0;this.state.quantity>=50?g=35:this.state.quantity>=25?g=25:this.state.quantity>=10&&(g=15);const v=Math.round(m*(1-g/100));let d=v*this.state.quantity,p=0;this.state.turnaround==="rush24"&&(p=Math.round(d*.25));let A=0;this.state.isStudent&&(A=Math.round(d*.2));const x=this.state.delivery==="yandex"?25e3:0,M=Math.max(0,d+u+p-A+x);return{estWeightG:o,estTimeHrs:c,rawMaterialCost:r,directUnitCost:f,baseUnitPrice:m,unitPriceAfterVolume:v,volumeDiscountPercent:g,partsSubtotal:d,designFee:u,rushSurcharge:p,studentDiscount:A,deliveryFee:x,grandTotalUZS:M}}setCurrency(t){this.state.currency=t,this.render()}selectOrderType(t){this.state.orderTypeId=t,this.state.presetIndex=0;const e=this.getCurrentOrderType();if(this.state.materialId=e.recommendedMaterial.startsWith("PLA")?"PLA":e.recommendedMaterial,e.recommendedMaterial==="PLA-SILK"&&(this.state.materialId="PLA-SILK"),e.recommendedMaterial==="ABS-P1S"&&(this.state.materialId="ABS-P1S"),this.state.infill=e.defaultInfill,this.state.layerHeight=e.defaultLayerHeight.toFixed(2),this.state.quantity=e.defaultQuantity,t==="educational-project"&&(this.state.isStudent=!0),this.studio){this.studio.loadModelPreset(e.modelPreset);const n=this.getCurrentMaterial();this.state.colorHex=n.colors[0].hex,this.studio.setMaterialType(this.state.materialId),this.studio.setColor(this.state.colorHex)}this.render()}render(){var a;const t=this.getCurrentOrderType(),e=this.getCurrentMaterial(),n=this.calculatePricing();this.mount.innerHTML=`
      <div class="configurator-wrapper">
        <!-- 1-Qadam: Buyurtma Turini Tanlash -->
        <section class="section-block" id="order-type-selection">
          <div class="section-header">
            <div class="step-tag"><span class="step-num">1-Qadam</span> Buyurtma Turini Tanlang</div>
            <h2 class="section-title">Sizga qanday 3D bosma xizmati kerak?</h2>
            <p class="section-subtitle">Toshkentdagi ehtiyojingizga mos maxsus materiallar, muhandislik parametrlari va shaffof narxlar.</p>
          </div>

          <div class="order-type-grid" id="order-types-container">
            ${da.map(o=>`
              <div class="order-type-card ${o.id===this.state.orderTypeId?"active":""}" data-type-id="${o.id}">
                <div class="card-top-row">
                  <span class="type-icon">${o.icon}</span>
                  <span class="type-badge badge-${o.badgeColor}">${o.badge}</span>
                </div>
                <h3 class="type-title">${o.title}</h3>
                <div class="type-uz">${o.uzTitle}</div>
                <p class="type-desc">${o.shortDesc}</p>
                <div class="type-footer">
                  <div class="type-price">Boshlang‘ich: <strong>${this.formatPrice(o.basePriceUZS)}</strong></div>
                  <div class="type-turnaround">⏱️ ${o.typicalTurnaround}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- Asosiy Ish Maydoni: Chapda Sozlamalar, O'ngda 3D Studio -->
        <div class="workspace-grid">
          <!-- Chap Ustun: Parametrlarni Sozlash -->
          <div class="specs-panel">
            <div class="panel-header">
              <div class="step-tag"><span class="step-num">2-Qadam</span> Parametrlarni Sozlang</div>
              <h3 class="panel-title">${t.icon} ${t.title}</h3>
            </div>

            <!-- Namunaviy Buyumlar -->
            <div class="form-group">
              <label class="group-label">Namunaviy Buyum Shabloni</label>
              <div class="preset-pill-row">
                ${t.presets.map((o,r)=>`
                  <button type="button" class="preset-pill ${r===this.state.presetIndex?"active":""}" data-preset-idx="${r}">
                    ${o.name}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Material Tanlash -->
            <div class="form-group">
              <div class="label-row">
                <label class="group-label">Material va Polimer Turi</label>
                <span class="spec-info-badge">${e.type}</span>
              </div>
              <div class="material-card-row">
                ${fa.map(o=>`
                  <div class="material-chip ${o.id===this.state.materialId?"active":""}" data-mat-id="${o.id}">
                    <div class="mat-name">${o.name.split(" (")[0]}</div>
                    <div class="mat-prop">${o.bestFor.split(",")[0]}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Rang Tanlash -->
            <div class="form-group">
              <label class="group-label">Filament Rangi (3D Modeldan Ko‘ring)</label>
              <div class="color-picker-row">
                ${e.colors.map(o=>`
                  <button type="button" class="color-dot ${o.hex===this.state.colorHex?"active":""}" 
                          data-color="${o.hex}" 
                          style="background-color: ${o.hex};" 
                          title="${o.name}">
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Zichlik va Qatlam Qalinligi -->
            <div class="form-row-dual">
              <div class="form-group">
                <div class="label-row">
                  <label class="group-label">Ichki Zichlik (Infill)</label>
                  <span class="value-highlight">${this.state.infill}%</span>
                </div>
                <div class="segmented-control">
                  ${wm.map(o=>`
                    <button type="button" class="segment-btn ${o.value===this.state.infill?"active":""}" data-infill="${o.value}">
                      ${o.value}%
                    </button>
                  `).join("")}
                </div>
              </div>

              <div class="form-group">
                <div class="label-row">
                  <label class="group-label">Qatlam Qalinligi (Aniqlik)</label>
                  <span class="value-highlight">${this.state.layerHeight} mm</span>
                </div>
                <div class="segmented-control">
                  ${pa.map(o=>`
                    <button type="button" class="segment-btn ${o.id===this.state.layerHeight?"active":""}" data-layer="${o.id}">
                      ${o.id}
                    </button>
                  `).join("")}
                </div>
              </div>
            </div>

            <!-- 3D Chizma / Revers-Injiniring Xizmati -->
            <div class="form-group">
              <label class="group-label">3D Chizma va Fayl Tayyorlash Xizmati</label>
              <div class="radio-option-list">
                <label class="radio-card ${this.state.modelingService==="none"?"active":""}">
                  <input type="radio" name="modeling" value="none" ${this.state.modelingService==="none"?"checked":""}>
                  <div class="radio-content">
                    <div class="radio-title">Menda 3D Fayl Bor (.STL, .STEP, .OBJ)</div>
                    <div class="radio-desc">Faylni bosmaga tayyorlash va geometriyasini tekshirish bepul</div>
                  </div>
                  <span class="fee-tag free">Bepul</span>
                </label>

                <label class="radio-card ${this.state.modelingService==="broken-part"?"active":""}">
                  <input type="radio" name="modeling" value="broken-part" ${this.state.modelingService==="broken-part"?"checked":""}>
                  <div class="radio-content">
                    <div class="radio-title">Singan Detaldan Qayta Chizma Tayyorlash</div>
                    <div class="radio-desc">Singan namunani Chilonzorga olib keling yoki fotosuratlarni yuboring</div>
                  </div>
                  <span class="fee-tag">+${this.formatPrice(((a=t.presets[this.state.presetIndex])==null?void 0:a.modelingFeeUZS)||8e4)}</span>
                </label>

                <label class="radio-card ${this.state.modelingService==="sketch"?"active":""}">
                  <input type="radio" name="modeling" value="sketch" ${this.state.modelingService==="sketch"?"checked":""}>
                  <div class="radio-content">
                    <div class="radio-title">Qog‘ozdagi Eskiz / O‘lchamlardan 3D Chizish</div>
                    <div class="radio-desc">Chizilgan o‘lchamlarni kompyuterda aniq 3D shaklga aylantiramiz</div>
                  </div>
                  <span class="fee-tag">+${this.formatPrice(5e4)}</span>
                </label>
              </div>
            </div>

            <!-- Soni va Ulgurji Chegirma -->
            <div class="form-group">
              <div class="label-row">
                <label class="group-label">Buyurtma Soni (Dona)</label>
                <div class="qty-counter">
                  <button type="button" class="qty-btn" id="btn-qty-minus">-</button>
                  <span class="qty-num">${this.state.quantity}</span>
                  <button type="button" class="qty-btn" id="btn-qty-plus">+</button>
                </div>
              </div>
              <input type="range" class="custom-slider" id="qty-slider" min="1" max="100" value="${this.state.quantity}">
              <div class="discount-pills">
                <span class="disc-pill ${this.state.quantity>=10&&this.state.quantity<25?"highlight":""}">10+ dona: -15%</span>
                <span class="disc-pill ${this.state.quantity>=25&&this.state.quantity<50?"highlight":""}">25+ dona: -25%</span>
                <span class="disc-pill ${this.state.quantity>=50?"highlight":""}">50+ dona: -35% B2B</span>
              </div>
            </div>

            <!-- Talaba Chegirmasi va Tezkor Navbat -->
            <div class="form-row-dual">
              <div class="checkbox-box ${this.state.isStudent?"active":""}">
                <label class="checkbox-label">
                  <input type="checkbox" id="student-toggle" ${this.state.isStudent?"checked":""}>
                  <div>
                    <div class="check-title">🎓 Talaba Chegirmasi (-20%)</div>
                    <div class="check-sub">ToshTech, TATU, Turin va boshqalar</div>
                  </div>
                </label>
              </div>

              <div class="checkbox-box ${this.state.turnaround==="rush24"?"active":""}">
                <label class="checkbox-label">
                  <input type="checkbox" id="rush-toggle" ${this.state.turnaround==="rush24"?"checked":""}>
                  <div>
                    <div class="check-title">⚡ Ekspress VIP 24 Soat</div>
                    <div class="check-sub">+25% navbatsiz zudlik bilan</div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Qabul Qilish va Yetkazib Berish -->
            <div class="form-group">
              <label class="group-label">Toshkent Bo‘ylab Olib Ketish va Yetkazib Berish</label>
              <div class="delivery-segmented">
                <button type="button" class="deliv-btn ${this.state.delivery==="pickup"?"active":""}" data-delivery="pickup">
                  🏬 Ustaxonadan Bepul Olib Ketish (Chilonzor)
                </button>
                <button type="button" class="deliv-btn ${this.state.delivery==="yandex"?"active":""}" data-delivery="yandex">
                  🚀 Yandex Go / BTS Kuryer (+25,000 so‘m)
                </button>
              </div>
            </div>
          </div>

          <!-- O'ng Ustun: 3D Interaktiv Studio va Slicer -->
          <div class="viewport-panel">
            <div class="viewport-header">
              <div class="viewport-title-group">
                <span class="live-dot"></span>
                <h4 class="viewport-heading">Interaktiv 3D Studio (Bambu Lab 256mm Stol)</h4>
              </div>
              <div class="viewport-tools">
                <button type="button" class="tool-btn ${this.state.wireframe?"active":""}" id="btn-toggle-wire" title="CAD To‘r Ko‘rinishi">
                  🕸️ To‘r
                </button>
                <button type="button" class="tool-btn" id="btn-reset-cam" title="Kamerani Tiklash">
                  🔄 Markazga
                </button>
                <label class="tool-btn upload-btn" title="O‘z .STL faylingizni yuklang">
                  📁 .STL Yuklash
                  <input type="file" id="stl-file-input" accept=".stl,.obj" style="display:none;">
                </label>
              </div>
            </div>

            <!-- 3D Canvas -->
            <div class="three-canvas-frame" id="three-viewport-mount"></div>

            <!-- Slicer Simulyatsiyasi -->
            <div class="slicer-control-bar">
              <div class="slicer-info">
                <span class="slicer-label">🖨️ Qatlamlar Slicer Simulyatsiyasi:</span>
                <span class="slicer-val" id="slice-val-text">${this.state.slicePercent}%</span>
              </div>
              <input type="range" class="slicer-slider" id="slicer-slider" min="5" max="100" value="${this.state.slicePercent}">
              <div class="slicer-stats">
                <span>Vazni: ~<strong>${n.estWeightG*this.state.quantity} gramm</strong></span>
                <span>Vaqti: ~<strong>${(n.estTimeHrs*this.state.quantity).toFixed(1)} soat</strong></span>
                <span>Qatlamlar: ~<strong>${Math.round(n.estTimeHrs*120)}</strong></span>
              </div>
            </div>

            <!-- Shaffof Narx Hisob-Kitob Kartasi -->
            <div class="pricing-summary-card">
              <div class="pricing-card-header">
                <div class="quote-tag">Rasmiy Tezkor Hisob-Kitob</div>
                <div class="pricing-rule-formula">
                  Qoida: <code>Narx = Xomashyo + Dastgoh Vaqti + Chizma + Qayta Ishlash + Marja</code>
                </div>
              </div>

              <div class="pricing-rows">
                <div class="price-row">
                  <span>Mahsulotni Chop Etish (${this.state.quantity} × ${this.formatPrice(n.unitPriceAfterVolume)})</span>
                  <span>${this.formatPrice(n.partsSubtotal)}</span>
                </div>
                ${n.volumeDiscountPercent>0?`
                  <div class="price-row discount-row">
                    <span>Ulgurji Chegirma (${n.volumeDiscountPercent}%)</span>
                    <span>-${n.volumeDiscountPercent}% Qo‘llandi</span>
                  </div>
                `:""}
                ${n.designFee>0?`
                  <div class="price-row">
                    <span>3D Muhandislik Chizmasi</span>
                    <span>+${this.formatPrice(n.designFee)}</span>
                  </div>
                `:""}
                ${n.rushSurcharge>0?`
                  <div class="price-row">
                    <span>Ekspress VIP 24 Soatlik Navbat</span>
                    <span>+${this.formatPrice(n.rushSurcharge)}</span>
                  </div>
                `:""}
                ${n.studentDiscount>0?`
                  <div class="price-row student-discount-row">
                    <span>🎓 Talaba Chegirmasi (-20%)</span>
                    <span class="neg-price">-${this.formatPrice(n.studentDiscount)}</span>
                  </div>
                `:""}
                ${n.deliveryFee>0?`
                  <div class="price-row">
                    <span>Yandex Go Kuryer Xizmati</span>
                    <span>+${this.formatPrice(n.deliveryFee)}</span>
                  </div>
                `:""}
              </div>

              <div class="grand-total-row">
                <div class="total-label-group">
                  <span class="total-label">Jami To‘lov:</span>
                  <span class="approx-usd">Taqriban ${(n.grandTotalUZS/Ca).toFixed(2)} USD</span>
                </div>
                <div class="total-amount">${this.formatPrice(n.grandTotalUZS)}</div>
              </div>

              <!-- Buyurtma Tugmalari -->
              <div class="order-action-buttons">
                <button type="button" class="btn-primary-order" id="btn-submit-order-flow">
                  🚀 Hisob-faktura Chiqarish va Buyurtma Berish
                </button>
                <button type="button" class="btn-secondary-telegram" id="btn-direct-telegram">
                  ✈️ Telegram Orqali Buyurtma
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Buyurtma Modali (Hisob-faktura) -->
        <div class="order-modal-backdrop" id="order-modal" style="display: none;">
          <div class="order-modal-card">
            <button type="button" class="modal-close-btn" id="modal-close">&times;</button>
            <div class="modal-header">
              <div class="success-icon-badge">✅</div>
              <h3 class="modal-title">Buyurtmani Ishga Tushirishga Tayyormiz</h3>
              <p class="modal-desc">Buyurtma parametrlarini tasdiqlang va Chilonzor ustaxonamiz navbatiga qo‘shing.</p>
            </div>

            <div class="modal-body">
              <div class="order-invoice-preview" id="invoice-printable-area">
                <div class="invoice-top">
                  <div>
                    <h4 class="invoice-company">Toshkent 3D Bosma va Prototip Ustaxonasi</h4>
                    <div class="invoice-district">Chilonzor tumani, Toshkent shahri | Tel: +998 (90) 123-45-67</div>
                  </div>
                  <div class="invoice-meta">
                    <div class="order-num" id="inv-order-num">#T3D-UZ-8492</div>
                    <div class="order-date">${new Date().toLocaleDateString("uz-UZ")}</div>
                  </div>
                </div>

                <div class="invoice-details-grid">
                  <div class="inv-col">
                    <span class="inv-k">Buyurtma Turi:</span>
                    <strong class="inv-v">${t.title}</strong>
                  </div>
                  <div class="inv-col">
                    <span class="inv-k">Material:</span>
                    <strong class="inv-v">${e.name}</strong>
                  </div>
                  <div class="inv-col">
                    <span class="inv-k">Zichlik va Qatlam:</span>
                    <strong class="inv-v">${this.state.infill}% Zichlik | ${this.state.layerHeight}mm</strong>
                  </div>
                  <div class="inv-col">
                    <span class="inv-k">Soni:</span>
                    <strong class="inv-v">${this.state.quantity} dona</strong>
                  </div>
                  <div class="inv-col">
                    <span class="inv-k">Taxminiy Vazni:</span>
                    <strong class="inv-v">${n.estWeightG*this.state.quantity} gramm</strong>
                  </div>
                  <div class="inv-col">
                    <span class="inv-k">Tayyor Bo‘lish Vaqti:</span>
                    <strong class="inv-v">${this.state.turnaround==="rush24"?"⚡ Ekspress 24 Soat":"48 Soat Standart"}</strong>
                  </div>
                </div>

                <div class="invoice-total-box">
                  <span>Jami To‘lanadigan Summa:</span>
                  <strong class="inv-sum">${this.formatPrice(n.grandTotalUZS)}</strong>
                </div>
              </div>

              <!-- Mijoz Ma'lumotlari Formasi -->
              <form class="order-checkout-form" id="checkout-form" onsubmit="return false;">
                <div class="form-row-dual">
                  <div class="form-field">
                    <label>Ism va Familiyangiz *</label>
                    <input type="text" id="cust-name" placeholder="Muhammad Rizo" required value="${this.state.customerName}">
                  </div>
                  <div class="form-field">
                    <label>Telefon Raqamingiz *</label>
                    <input type="tel" id="cust-phone" placeholder="+998 90 123 45 67" required value="${this.state.customerPhone}">
                  </div>
                </div>

                <div class="form-row-dual">
                  <div class="form-field">
                    <label>Telegram Username (Ixtiyoriy)</label>
                    <input type="text" id="cust-tg" placeholder="@username" value="${this.state.customerTelegram}">
                  </div>
                  <div class="form-field">
                    <label>Yetkazib Berish Manzili</label>
                    <input type="text" id="cust-addr" placeholder="Chilonzor 9-kvartal yoki Olib ketish">
                  </div>
                </div>

                <div class="form-field">
                  <label>Qo‘shimcha Izoh / Singan Detal Tavsifi</label>
                  <textarea id="cust-notes" rows="2" placeholder="Masalan: Oshxona mikserining singan shesternasi, issiqqa chidamli bo‘lishi lozim">${this.state.orderNotes}</textarea>
                </div>

                <!-- To'lov Karta va Chek Yuklash Maydoni -->
                <div class="payment-upload-card">
                  <div class="payment-card-header">
                    <span class="pay-badge">💳 To‘lov Usuli & Kvitansiya</span>
                    <h4 class="pay-title">To‘lov qiling va chek skrinshotini yuklang</h4>
                    <p class="pay-desc">Buyurtmangiz zudlik bilan navbatga qo‘yilishi uchun Click, Payme yoki karta orqali to‘lov chekini yuklang:</p>
                  </div>

                  <div class="card-details-box">
                    <div class="card-top-info">
                      <span class="card-brand">HUMO • UZCARD • CLICK • PAYME</span>
                      <button type="button" class="btn-copy-card" id="btn-copy-card">📋 Karta Raqamini Nusxalash</button>
                    </div>
                    <div class="card-number-display" id="card-num-text">8600 4904 8219 7750</div>
                    <div class="card-holder-name">Any3D Ustaxonasi (Muhammad Rizo X.)</div>
                  </div>

                  <!-- Chek yuklash maydoni -->
                  <div class="receipt-dropzone-wrapper">
                    <input type="file" id="receipt-file-input" accept="image/*" style="display: none;">
                    
                    <div class="receipt-prompt-area" id="receipt-prompt-area">
                      <div class="receipt-icon">📸</div>
                      <div class="receipt-text-bold">To‘lov cheki yoki skrinshotini yuklang</div>
                      <div class="receipt-text-muted">Click, Payme yoki bank chekining rasmini biriktiring</div>
                      <button type="button" class="btn-select-receipt" id="btn-select-receipt">
                        📁 Chek Rasmini Tanlash
                      </button>
                    </div>

                    <div class="receipt-preview-area" id="receipt-preview-area" style="display: none;">
                      <img id="receipt-img-preview" src="" alt="To'lov cheki">
                      <div class="receipt-preview-info">
                        <span class="receipt-badge-ok">✅ Chek biriktirildi</span>
                        <button type="button" class="btn-clear-receipt" id="btn-clear-receipt">✕ Boshqa rasm tanlash</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-actions">
                  <button type="submit" class="btn-confirm-order" id="btn-final-confirm">
                    🚀 Buyurtmani Tasdiqlash va Yuborish
                  </button>
                  <button type="button" class="btn-print-invoice" id="btn-print-inv">
                    🖨️ PDF / Chekni Chop Etish
                  </button>
                </div>
              </form>

              <!-- Muvaffaqiyatli Qabul Qilindi Ekrani -->
              <div class="order-success-card" id="order-success-screen" style="display: none;">
                <div class="success-icon-anim">🎉</div>
                <h2 class="success-title">Buyurtmangiz qabul qilindi!</h2>
                <div class="success-order-badge" id="success-order-num">#T3D-UZ-8492</div>
                <p class="success-sub">
                  To‘lov chekingiz va buyurtma parametrlari Any3D ustaxonamizga muvaffaqiyatli yetkazildi.
                </p>
                
                <div class="live-bot-banner">
                  <span class="live-dot-pulse"></span>
                  <div class="live-banner-text">
                    <strong>Buyurtmangizni botda LIVE (jonli) ko‘ra olasiz!</strong>
                    <span>Dastgoh harorati, chop etish tezligi va tayyor bo‘lish vaqti real vaqtda yangilanadi.</span>
                  </div>
                </div>

                <div class="success-btn-group">
                  <button type="button" class="btn-success-tracker" id="btn-goto-tracker">
                    📦 Jonli Telemetriyani Ko‘rish (Saytda)
                  </button>
                  <a href="https://t.me/Any3dCubic_bot" target="_blank" class="btn-success-tg" id="btn-goto-bot">
                    🤖 Botda Live Ko‘rish (@Any3dCubic_bot)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;const s=this.mount.querySelector("#three-viewport-mount");s&&this.studio&&this.studio.renderer&&(s.appendChild(this.studio.renderer.domElement),this.studio.onResize()),this.attachEventListeners()}attachEventListeners(){this.mount.querySelectorAll(".order-type-card").forEach(N=>{N.addEventListener("click",()=>{const X=N.getAttribute("data-type-id");this.selectOrderType(X)})}),this.mount.querySelectorAll(".preset-pill").forEach(N=>{N.addEventListener("click",()=>{this.state.presetIndex=parseInt(N.getAttribute("data-preset-idx"),10),this.render()})}),this.mount.querySelectorAll(".material-chip").forEach(N=>{N.addEventListener("click",()=>{const X=N.getAttribute("data-mat-id");this.state.materialId=X;const K=this.getCurrentMaterial();this.state.colorHex=K.colors[0].hex,this.studio&&(this.studio.setMaterialType(X),this.studio.setColor(this.state.colorHex)),this.render()})}),this.mount.querySelectorAll(".color-dot").forEach(N=>{N.addEventListener("click",()=>{const X=N.getAttribute("data-color");this.state.colorHex=X,this.studio&&this.studio.setColor(X),this.render()})}),this.mount.querySelectorAll("[data-infill]").forEach(N=>{N.addEventListener("click",()=>{this.state.infill=parseInt(N.getAttribute("data-infill"),10),this.render()})}),this.mount.querySelectorAll("[data-layer]").forEach(N=>{N.addEventListener("click",()=>{this.state.layerHeight=N.getAttribute("data-layer"),this.render()})}),this.mount.querySelectorAll('input[name="modeling"]').forEach(N=>{N.addEventListener("change",X=>{this.state.modelingService=X.target.value,this.render()})});const c=this.mount.querySelector("#btn-qty-minus"),l=this.mount.querySelector("#btn-qty-plus"),h=this.mount.querySelector("#qty-slider");c&&c.addEventListener("click",()=>{this.state.quantity>1&&(this.state.quantity--,this.render())}),l&&l.addEventListener("click",()=>{this.state.quantity++,this.render()}),h&&h.addEventListener("input",N=>{this.state.quantity=parseInt(N.target.value,10);const X=this.mount.querySelector(".qty-num");X&&(X.textContent=this.state.quantity),this.render()});const u=this.mount.querySelector("#student-toggle");u&&u.addEventListener("change",N=>{this.state.isStudent=N.target.checked,this.render()});const f=this.mount.querySelector("#rush-toggle");f&&f.addEventListener("change",N=>{this.state.turnaround=N.target.checked?"rush24":"standard",this.render()}),this.mount.querySelectorAll(".deliv-btn").forEach(N=>{N.addEventListener("click",()=>{this.state.delivery=N.getAttribute("data-delivery"),this.render()})});const g=this.mount.querySelector("#btn-toggle-wire");g&&g.addEventListener("click",()=>{this.state.wireframe=!this.state.wireframe,this.studio&&this.studio.toggleWireframe(this.state.wireframe),g.classList.toggle("active",this.state.wireframe)});const v=this.mount.querySelector("#btn-reset-cam");v&&v.addEventListener("click",()=>{this.studio&&this.studio.resetCamera()});const d=this.mount.querySelector("#stl-file-input");d&&d.addEventListener("change",N=>{const X=N.target.files[0];X&&this.studio&&(this.state.uploadedFileName=X.name,this.studio.loadSTLFile(X,()=>{alert(`✅ "${X.name}" fayli Bambu Lab stoliga muvaffaqiyatli yuklandi!`)}))});const p=this.mount.querySelector("#slicer-slider"),A=this.mount.querySelector("#slice-val-text");p&&p.addEventListener("input",N=>{const X=parseInt(N.target.value,10);this.state.slicePercent=X,A&&(A.textContent=`${X}%`),this.studio&&this.studio.updateSliceClipping(X)});const x=this.mount.querySelector("#btn-submit-order-flow"),M=this.mount.querySelector("#order-modal"),I=this.mount.querySelector("#modal-close");x&&M&&x.addEventListener("click",()=>{const N=Math.floor(1e3+Math.random()*9e3),X=this.mount.querySelector("#inv-order-num");X&&(X.textContent=`#T3D-UZ-${N}`),M.style.display="flex"}),I&&M&&I.addEventListener("click",()=>{M.style.display="none"});const R=this.mount.querySelector("#btn-print-inv");R&&R.addEventListener("click",()=>{window.print()});const w=this.mount.querySelector("#btn-copy-card");w&&w.addEventListener("click",()=>{var N;(N=navigator.clipboard)==null||N.writeText("8600490482197750"),w.textContent="✓ Nusxalandi!",setTimeout(()=>{w.textContent="📋 Karta Raqamini Nusxalash"},2e3)});const q=this.mount.querySelector("#btn-select-receipt"),y=this.mount.querySelector("#receipt-file-input"),E=this.mount.querySelector("#receipt-prompt-area"),k=this.mount.querySelector("#receipt-preview-area"),Y=this.mount.querySelector("#receipt-img-preview"),nt=this.mount.querySelector("#btn-clear-receipt");q&&y&&q.addEventListener("click",()=>y.click()),y&&y.addEventListener("change",N=>{const X=N.target.files[0];if(!X)return;const K=new FileReader;K.onload=tt=>{const C=new Image;C.onload=()=>{const T=document.createElement("canvas");let G=C.width,F=C.height;const W=1e3;(G>W||F>W)&&(G>F?(F=Math.round(F*W/G),G=W):(G=Math.round(G*W/F),F=W)),T.width=G,T.height=F,T.getContext("2d").drawImage(C,0,0,G,F);const ot=T.toDataURL("image/jpeg",.82);this.state.receiptImage=ot,Y&&(Y.src=ot),E&&(E.style.display="none"),k&&(k.style.display="flex")},C.src=tt.target.result},K.readAsDataURL(X)}),nt&&nt.addEventListener("click",()=>{this.state.receiptImage=null,y&&(y.value=""),k&&(k.style.display="none"),E&&(E.style.display="block")});const U=this.mount.querySelector("#checkout-form");U&&U.addEventListener("submit",N=>{var ut,xt,pt,yt,L;N.preventDefault();const X=this.mount.querySelector("#cust-name").value||"Mijoz",K=this.mount.querySelector("#cust-phone").value||"+998",tt=this.calculatePricing(),C=this.getCurrentOrderType(),T=((ut=this.mount.querySelector("#inv-order-num"))==null?void 0:ut.textContent)||"#T3D-UZ-8492";Cm({particleCount:120,spread:70,origin:{y:.6}});const G={orderId:T,customerName:X,customerPhone:K,customerTelegram:((xt=this.mount.querySelector("#cust-tg"))==null?void 0:xt.value)||"",deliveryAddress:((pt=this.mount.querySelector("#cust-addr"))==null?void 0:pt.value)||"",orderNotes:((yt=this.mount.querySelector("#cust-notes"))==null?void 0:yt.value)||"",orderTypeTitle:C.title,material:this.getCurrentMaterial().name,quantity:this.state.quantity,grandTotal:this.formatPrice(tt.grandTotalUZS),turnaround:this.state.turnaround,receiptImage:this.state.receiptImage,createdAt:new Date().toISOString()};if(fetch("/api/submit-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)}).then(it=>it.json()).then(it=>{console.log("✅ Telegram botga jo‘natildi:",it)}).catch(it=>{console.warn("Telegram API jo‘natishda ogohlantirish:",it)}),(L=window.Telegram)!=null&&L.WebApp&&typeof window.Telegram.WebApp.sendData=="function")try{window.Telegram.WebApp.sendData(JSON.stringify({orderId:G.orderId,customerName:G.customerName,customerPhone:G.customerPhone,orderTypeTitle:G.orderTypeTitle,material:G.material,grandTotal:G.grandTotal,hasReceipt:!!G.receiptImage}))}catch(it){console.log("Telegram sendData info:",it)}const F=this.mount.querySelector("#invoice-printable-area"),W=this.mount.querySelector("#order-success-screen"),et=this.mount.querySelector("#success-order-num"),ot=this.mount.querySelector(".modal-header");U&&(U.style.display="none"),F&&(F.style.display="none"),ot&&(ot.style.display="none"),et&&(et.textContent=T),W&&(W.style.display="block");const Q=this.mount.querySelector("#btn-goto-tracker");Q&&Q.addEventListener("click",()=>{M&&(M.style.display="none"),this.onOrderSubmitted&&this.onOrderSubmitted(G)})});const H=this.mount.querySelector("#btn-direct-telegram");H&&H.addEventListener("click",()=>{const N=this.calculatePricing(),X=this.getCurrentOrderType();encodeURIComponent(`Assalomu alaykum! 3D bosmaga buyurtma bermoqchiman:

• Buyurtma Turi: ${X.title}
• Material: ${this.getCurrentMaterial().name}
• Soni: ${this.state.quantity} dona
• Zichlik: ${this.state.infill}% | Qatlam: ${this.state.layerHeight}mm
• Taxminiy Summa: ${this.formatPrice(N.grandTotalUZS)}

Chilonzor ustaxonangizda qachon tayyor bo‘ladi?`),window.open(`https://t.me/Any3dCubic_bot?start=order_${Date.now()}`,"_blank")})}}const Mn={electricity:{tariffRatePerKwhUZS:1100},locations:[{id:"chilonzor",name:"Chilonzor tumani",uzName:"Chilonzor tumani (Tavsiya etiladi)",isRecommended:!0,tag:"Tavsiya Etiladigan Asosiy Markaz",targetRentUZS:"2,500,000 – 3,500,000 so‘m / oy",spaceSize:"25 – 35 m²",pros:["Chilonzorda 3DShef rasmiy shourumi joylashgan: material va ehtiyot qismlarni zudlik bilan, yetkazib berish kunini kutmasdan olish mumkin","Toshkent bo‘ylab Yandex Go va BTS orqali buyurtmalarni tezkor yetkazib berish uchun qulay logistika tuguni","Avtoservislar, maishiy texnika va elektronika ustaxonalarining yuqori zichligi","Shahar markazidagi savdo nuqtalariga nisbatan arzon va maqbul ijara"],cons:["Shartnoma imzolashdan oldin binoning elektr simlari quvvatini tekshirish lozim"],verdict:"Yetkazib beruvchi yaqinligi, past doimiy xarajat va tezkor logistikaning eng maqbul balansi."},{id:"mirzo-ulugbek",name:"Mirzo Ulug‘bek tumani",uzName:"Mirzo Ulug‘bek tumani (Talabalar markazi)",isRecommended:!1,tag:"IT va Universitetlar Qamrovi",targetRentUZS:"3,500,000 – 5,000,000 so‘m / oy",spaceSize:"20 – 30 m²",pros:["ToshTech, TATU, Inha va Turin universitetlariga yaqin","Sanoat 3D bosmachisi Additive Technology ham shu tumanda joylashgan","Muhandislik talabalarining bevosita oqimi"],cons:["Kvadrat metr uchun tijorat ijarasi ancha baland","Toshkent bo‘ylab kuryerlar harakati uchun tirbandlik yuqori"],verdict:"Universitetlar bilan rasmiy shartnomalar tuzilgach kengayish uchun ikkinchi bosqich."},{id:"yangihayot",name:"Yangihayot tumani",uzName:"Yangihayot tumani (Byudjet varianti)",isRecommended:!1,tag:"Minimal Doimiy Xarajat",targetRentUZS:"2,000,000 so‘m / oy (OLX dagi 20 m² ofis e’loni)",spaceSize:"20 m²",pros:["Eng past oylik ijara xarajati (oyiga 2 mln so‘m)","Barcha buyurtmalar 100% onlayn yetkazib berish orqali bo‘lsa, boshlang‘ich pulni tejaydi"],cons:["Xomashyo do‘konlari (3DShef) va talabalardan uzoq","Mijozlar uchun Yandex Go yetkazib berish narxi va vaqti oshadi"],verdict:"Boshlang‘ich grant yoki sarmoya 15 mln so‘mdan kam bo‘lsa zaxira varianti."}],swot:{strengths:[{title:"Kam Boshlang‘ich Sarmoya",desc:"Zamonaviy Bambu Lab printerlari hamyonbop: 15–20 mln so‘m bilan ish boshlash mumkin."},{title:"Yuqori Foyda Marjasi",desc:"Xomashyo 1 grammi 200 so‘m turadi; tayyor maxsus buyum 1,200–2,500 so‘m/grammga sotiladi."},{title:"Qolip Xarajatining Yo‘qligi",desc:"5,000 dollarlik metall qoliplarsiz 1 dona yoki 50 dona mahsulotni darhol chiqarish mumkin."},{title:"24–48 Soatlik Tezkorlik",desc:"Mijoz Xitoy yoki Turkiyadan 1 oy kutmasdan Toshkentda ertagayoq tayyor qismni oladi."}],weaknesses:[{title:"Qolipli Quyishga Nisbatan Sekinroq",desc:"FDM bosma 1 dona detal uchun 1 dan 4 soatgacha vaqt oladi, 200 tadan ortiq ommaviy seriyada cheklangan."},{title:"Texnik Xizmat va Kalibrlash",desc:"Aniq ±0.05 mm o‘lcham uchun soploni tozalash, tasmalar tarangligi va stol sathini doimiy sozlash kerak."},{title:"Qo‘lda Ishlov Berish",desc:"Qo‘llab-quvvatlovchi elementlarni (support) tozalash va yuzani silliqlash vaqt talab qiladi."},{title:"Qatlamlararo Bog‘liqlik",desc:"Z o‘qi bo‘yicha mustahkamlik bir oz pastroq, qism yo‘nalishini to‘g‘ri joylashtirish muhim."}],opportunities:[{title:"IT Park va ToshTech Rivoji",desc:"Toshkentda yangi texnologiya markazlari va universitet to‘garaklariga prototiplar zarur."},{title:"Ustaxonalar Bilan B2B Hamkorlik",desc:"Chilonzordagi maishiy texnika va avtoservislar bilan topilmaydigan shesternalarni yetkazish bo‘yicha shartnomalar."},{title:"Telegram va Instagram Orqali Sotuv",desc:"Shaxsiy buyurtmalar, anime figuralari va avtomobil klipslarini to‘g‘ridan-to‘g‘ri messenjerda sotish."},{title:"3D Modellashtirish Mahorat Darslari",desc:"Maktab o‘quvchilari va havaskorlar uchun dam olish kunlari 3D bosma to‘garaklari tashkil etish."}],threatsAndSolutions:[{threat:"Material Importi Kechikishi",detail:"Filament narxi va keltirilishi xalqaro yuk tashishga bog‘liq.",solution:"Chilonzordagi 3DShef orqali doimo 2 oylik xomashyo (PLA va PETG) zaxirasini saqlash."},{threat:"Elektr Energiyasidagi Kutilmagan Uzilishlar",detail:"Elektr o‘chishi 8 soatlik qimmat buyurtmani yaroqsiz qilib qo‘yishi mumkin.",solution:"1500VA quvvatli UPS batareyasi va Bambu Lab printerining elektr qaytganda davom ettirish funksiyasini qo‘llash."},{threat:"Yangi Havaskor Raqobatchilar",detail:"Har kim uyiga arzon printer sotib olib buyurtma olishga urinishi mumkin.",solution:"Biz professional CAD muhandislik chizmasi, kafolatlangan aniqlik va yuridik B2B shartnomalar bilan ajralib turamiz."}]},roadmap:[{month:"1-Oy",title:"Talabni Tekshirish va Sinov Buyurtmalari",icon:"🎯",actions:["Chilonzordagi 25 ta ustaxona va ToshTech talabalar to‘garaklari bilan yuzma-yuz suhbat o‘tkazish","Uzoq muddatli ijara shartnomasi tuzishdan oldin kamida 10 ta dastlabki pullik buyurtma olish","Tanlangan Chilonzor binosida elektr shartnomasini (1,100 so‘mlik tarif) tekshirish","Telegram buyurtma boti va Instagram portfoliolarini ishga tushirish"]},{month:"2-Oy",title:"Ustaxonani Jihozlash va Ishlab Chiqarish",icon:"🖨️",actions:["Mahalliy 3DShef dileridan 2 ta Bambu Lab A1 printeri va 15 kg filament sotib olish","1500VA UPS elektr himoya tizimi va maxsus tebranishga qarshi stellajlarni o‘rnatish","Buyurtmalarni 24 soat ichida topshirish sifat nazorati qoidalarini joriy qilish","Dastlabki 40 ta tijorat buyurtmasini 98% sifat ko‘rsatkichi bilan mijozlarga yetkazish"]},{month:"3-Oy",title:"Doimiy B2B Shartnomalar va Kengayish",icon:"📈",actions:["Toshkentdagi 5 ta yirik maishiy texnika servisi bilan doimiy ehtiyot qism yetkazish shartnomasini imzolash","ToshTech universiteti bilan diplom ishlari uchun 20% maxsus chegirma dasturini rasmiylashtirish","Zararsizlik chegarasiga erishish (oyiga 50+ buyurtma)","ABS/ASA qismlari uchun 3-printer (Bambu Lab P1S Yopiq Kamerali)ni xarid qilish"]}]};class Pm{constructor(t,e){this.mount=t,this.onSwitchToOrderPortal=e,this.simState={bambuA1Count:2,bambuP1SCount:1,filamentAllowanceUZS:22e5,pcAllowanceUZS:55e5,upsFurnitureUZS:18e5,dailyOperatingHours:8,printersActive:3,monthlyRentUZS:3e6,monthlyElectricityUZS:5e5,monthlyFilamentConsumablesUZS:2e6,monthlyMiscInternetUZS:5e5,monthlyMarketingUZS:8e5,avgContributionMarginPerOrderUZS:1e5,isSlideModalOpen:!1,currentSlideIndex:0},this.render()}formatPrice(t){return`${t.toLocaleString("ru-RU")} so‘m`}formatUSD(t){return`$${Math.round(t/Ca)}`}calculateCapex(){const t=this.simState.bambuA1Count*35e5,e=this.simState.bambuP1SCount*38e5,n=9e5,s=t+e+this.simState.filamentAllowanceUZS+n+this.simState.pcAllowanceUZS+this.simState.upsFurnitureUZS;return{a1Cost:t,p1sCost:e,toolsCost:n,totalCapexUZS:s}}calculateElectricity(){const t=Mn.electricity.tariffRatePerKwhUZS,e=+(this.simState.printersActive*.15*this.simState.dailyOperatingHours).toFixed(2),n=+(e*26).toFixed(1),s=Math.round(n*t),a=s+35e4;return{dailyKwh:e,monthlyKwh:n,printerElecCostUZS:s,totalWorkshopElecUZS:a}}calculateBreakEven(){const t=this.simState.monthlyRentUZS+this.simState.monthlyElectricityUZS+this.simState.monthlyMiscInternetUZS+this.simState.monthlyMarketingUZS,e=Math.ceil(t/this.simState.avgContributionMarginPerOrderUZS),n=+(e/26).toFixed(1),s=e*12e4,a=Math.round(80*this.simState.avgContributionMarginPerOrderUZS-t);return{fixedExpensesUZS:t,breakEvenOrders:e,ordersPerDay:n,breakEvenRevenueUZS:s,targetProfitUZS:a}}render(){const t=this.calculateCapex(),e=this.calculateElectricity(),n=this.calculateBreakEven();this.mount.innerHTML=`
      <div class="pitch-container">
        <!-- Pitch Bosh Banneri -->
        <header class="pitch-hero-banner">
          <div class="pitch-hero-badge">Maktablararo Tanlov Pitchi & Biznes Taklif</div>
          <h1 class="pitch-main-title">Toshkentda 3D Bosma Biznesi</h1>
          <p class="pitch-tagline">Raqamli 3D Modellarni Mahalliy Talab Uchun Real Mahsulotga Aylantirish • Maxsus Muhandislik Ishlab Chiqarishi</p>
          
          <div class="pitch-stats-ticker">
            <div class="ticker-item">
              <span class="ticker-val">~19.9M so‘m</span>
              <span class="ticker-lbl">Boshlang‘ich Sarmoya (3 ta Printer)</span>
            </div>
            <div class="ticker-item">
              <span class="ticker-val">1,100 so‘m/kVt</span>
              <span class="ticker-lbl">Tarif (Rasmiy 2026-yil Narxi)</span>
            </div>
            <div class="ticker-item">
              <span class="ticker-val">${n.breakEvenOrders} ta Buyurtma</span>
              <span class="ticker-lbl">Zararsizlik Nuqtasi (~1.9 ta/kun)</span>
            </div>
            <div class="ticker-item">
              <span class="ticker-val">80% Arzonroq</span>
              <span class="ticker-lbl">Chet Eldan Buyurtma Qilishga Qaraganda</span>
            </div>
          </div>

          <div class="pitch-cta-actions">
            <button type="button" class="btn-present-slides" id="btn-launch-slides">
              🖥️ Tanlov Slaydlarini Ko‘rsatish
            </button>
            <button type="button" class="btn-to-order-portal" id="btn-switch-portal">
              🛒 Mijoz Buyurtma Portali va 3D Studiyani Sinash
            </button>
          </div>
        </header>

        <!-- 1-Bo'lim: Biznes Kontseptsiya -->
        <section class="pitch-section">
          <div class="section-badge-pill">1-Bo‘lim • Amaliy Yondashuv</div>
          <h2 class="pitch-sec-title">🎯 Biznes Kontseptsiya: Biz Aynan Nimani Sotyapmiz?</h2>
          <p class="pitch-sec-lead">
            Asosiy maqsad balandparvoz so‘zlardan iborat taqdimot qilish emas. Maqsad — hakamlarga biznesning aniq mijozlari, real xarajatlari, oqilona joylashuvi va daromad keltiruvchi ishonchli mexanizmi borligini isbotlashdir.
          </p>

          <div class="concept-cards-grid">
            <div class="concept-card">
              <div class="concept-icon">⚙️</div>
              <h4>Funktsional Qismlar</h4>
              <p class="concept-customers"><strong>Mijozlar:</strong> Ta’mirlash ustaxonalari, maishiy texnika egalari, kichik sexlar</p>
              <p class="concept-examples">Kronshteynlar, regulyator tutqichlari, reduktor korpuslari, tishli g‘ildiraklar, qisqichlar.</p>
            </div>
            <div class="concept-card">
              <div class="concept-icon">🚀</div>
              <h4>Prototiplar</h4>
              <p class="concept-customers"><strong>Mijozlar:</strong> Startaplar, muhandislar va mahsulot dizaynerlari</p>
              <p class="concept-examples">Qimmat quyma qolip yasatishdan oldin apparat vositalarini sinab ko‘rish.</p>
            </div>
            <div class="concept-card">
              <div class="concept-icon">🎓</div>
              <h4>Ta’lim Maketlari</h4>
              <p class="concept-customers"><strong>Mijozlar:</strong> Maktablar, universitetlar (ToshTech), talabalar</p>
              <p class="concept-examples">Robototexnika shassisi, muhandislik mexanizmlari, anatomik modellar.</p>
            </div>
            <div class="concept-card">
              <div class="concept-icon">🎨</div>
              <h4>Maxsus Mahsulotlar</h4>
              <p class="concept-customers"><strong>Mijozlar:</strong> Aholi va mahalliy brendlar</p>
              <p class="concept-examples">Shaxsiy sovg‘alar, stol aksessuarlari, brendli breloklar, anime suvenirlari.</p>
            </div>
          </div>

          <div class="edge-limit-grid">
            <div class="callout-box advantage-box">
              <div class="callout-title">🏆 Bizning Asosiy Raqobat Ustunligimiz</div>
              <p>Mijozlarimiz <strong>50+ million so‘mlik qimmat po‘lat qoliplar yasatmasdan</strong> kichik miqdordagi maxsus buyumlarga buyurtma berishlari mumkin. Toshkentda 24–48 soatda topshiramiz.</p>
            </div>
            <div class="callout-box limitation-box">
              <div class="callout-title">⚠️ Muhim Amaliy Cheklov</div>
              <p>Oddiy FDM printerlar har qanday material va o‘ta yuqori xavfsizlik talab qilinadigan qismlar uchun to‘g‘ri kelmaydi. Biz hamma narsani va’da qilmay, <strong>muhandislik prototiplari va nostandart plastmassa detallariga</strong> ixtisoslashamiz.</p>
            </div>
          </div>
        </section>

        <!-- 2-Bo'lim: Uskunalar va Boshlang'ich Sarmoya Simulyatori -->
        <section class="pitch-section">
          <div class="section-badge-pill">2-Bo‘lim • Boshlang‘ich Sarmoya (CAPEX)</div>
          <h2 class="pitch-sec-title">🖨️ Uskunalar va Boshlang‘ich Xarajatlar Simulyatori</h2>
          <p class="pitch-sec-lead">
            Biz <strong>10 ta emas, 3 ta printer bilan</strong> boshlaymiz. Katta printerlar armiyasini sotib olishdan oldin talabni isbotlash kerak. 3 ta printer bir vaqtda parallel ishlash, sifatni taqqoslash va ta’mirlash paytida ish to‘xtab qolmasligini ta’minlaydi.
          </p>

          <div class="simulator-layout">
            <div class="sim-controls-panel">
              <h4 class="sim-panel-title">Ustaxona Uskunalarini Sozlang</h4>

              <div class="sim-input-row">
                <label>Bambu Lab A1 Printerlari (${this.simState.bambuA1Count} dona)</label>
                <input type="range" class="custom-slider" id="slider-a1-count" min="1" max="4" value="${this.simState.bambuA1Count}">
                <div class="sim-val-hint">Dona narxi: ~3.5 mln so‘m (256mm³ hajm)</div>
              </div>

              <div class="sim-input-row">
                <label>Bambu Lab P1S Yopiq Kamera (${this.simState.bambuP1SCount} dona)</label>
                <input type="range" class="custom-slider" id="slider-p1s-count" min="0" max="3" value="${this.simState.bambuP1SCount}">
                <div class="sim-val-hint">Dona narxi: ~3.8 mln so‘m (ABS/ASA uchun)</div>
              </div>

              <div class="sim-input-row">
                <label>Filament Zaxirasi: ${this.formatPrice(this.simState.filamentAllowanceUZS)}</label>
                <input type="range" class="custom-slider" id="slider-filament-stock" min="1500000" max="4000000" step="250000" value="${this.simState.filamentAllowanceUZS}">
                <div class="sim-val-hint">~10-15 g‘altak PLA, PETG, TPU xomashyosi</div>
              </div>

              <div class="sim-input-row">
                <label>CAD Ishchi Kompyuteri: ${this.formatPrice(this.simState.pcAllowanceUZS)}</label>
                <input type="range" class="custom-slider" id="slider-pc-cost" min="3000000" max="8000000" step="500000" value="${this.simState.pcAllowanceUZS}">
                <div class="sim-val-hint">3D modellashtirish uchun GPU noutbuk</div>
              </div>

              <div class="sim-input-row">
                <label>Stellaj, Stol va 1500VA UPS: ${this.formatPrice(this.simState.upsFurnitureUZS)}</label>
                <input type="range" class="custom-slider" id="slider-ups-cost" min="1000000" max="3000000" step="200000" value="${this.simState.upsFurnitureUZS}">
                <div class="sim-val-hint">Elektr o‘chishidan himoya qiluvchi UPS</div>
              </div>
            </div>

            <div class="sim-results-card">
              <div class="capex-total-header">
                <span>Hisoblangan Boshlang‘ich Sarmoya:</span>
                <div class="capex-big-num">${this.formatPrice(t.totalCapexUZS)}</div>
                <div class="capex-usd-sub">Taqriban ${this.formatUSD(t.totalCapexUZS)} USD</div>
              </div>

              <div class="capex-breakdown-table">
                <div class="capex-row">
                  <span>${this.simState.bambuA1Count} × Bambu Lab A1</span>
                  <span>${this.formatPrice(t.a1Cost)}</span>
                </div>
                <div class="capex-row">
                  <span>${this.simState.bambuP1SCount} × Bambu Lab P1S</span>
                  <span>${this.formatPrice(t.p1sCost)}</span>
                </div>
                <div class="capex-row">
                  <span>Filament Xomashyo Zaxirasi</span>
                  <span>${this.formatPrice(this.simState.filamentAllowanceUZS)}</span>
                </div>
                <div class="capex-row">
                  <span>Soplolar, Asboblar va Kalibrator</span>
                  <span>${this.formatPrice(t.toolsCost)}</span>
                </div>
                <div class="capex-row">
                  <span>Kompyuter va Dasturiy Ta’minot</span>
                  <span>${this.formatPrice(this.simState.pcAllowanceUZS)}</span>
                </div>
                <div class="capex-row">
                  <span>Mebel va 1500VA UPS Himoyasi</span>
                  <span>${this.formatPrice(this.simState.upsFurnitureUZS)}</span>
                </div>
              </div>

              <div class="capex-insight-pill">
                💡 <strong>Hakamlar Uchun Izoh:</strong> Boshlang‘ich sarmoya kamtar va real. Oylik 50 ta doimiy buyurtma bilan uskunalar o‘zini 3–4 oyda to‘liq qoplaydi.
              </div>
            </div>
          </div>
        </section>

        <!-- 3-Bo'lim: Elektr Energiyasi va Ishlatilish Koeffitsienti -->
        <section class="pitch-section">
          <div class="section-badge-pill">3-Bo‘lim • Foydalanish Iqtisodiyoti</div>
          <h2 class="pitch-sec-title">⚡️ Elektr Energiyasi va Mashina Yuklamasi Tahlili</h2>
          <p class="pitch-sec-lead">
            O‘zbekiston Respublikasining e’lon qilingan rasmiy tijorat tarifi: <strong>1 kVt*soat = 1,100 so‘m</strong> (2026-yil 1-iyundan). Elektr asosiy muammo emas — <strong>printerlarning bo‘sh turishi (past yuklama) biznesni xarajatga botiradi</strong>.
          </p>

          <div class="elec-calculator-grid">
            <div class="elec-card">
              <div class="elec-card-header">
                <span class="elec-icon">⚡</span>
                <div>
                  <h4>Oylik Elektr Hisoblagichi</h4>
                  <div class="elec-rate">Tarif: 1,100 so‘m / kVt*soat</div>
                </div>
              </div>

              <div class="elec-slider-control">
                <div class="label-row">
                  <label>Kunlik O‘rtacha Ish Vaqti:</label>
                  <strong class="highlight-val">${this.simState.dailyOperatingHours} soat/kun</strong>
                </div>
                <input type="range" class="custom-slider" id="slider-elec-hours" min="4" max="24" value="${this.simState.dailyOperatingHours}">
              </div>

              <div class="elec-stats-grid">
                <div class="elec-stat-box">
                  <span class="es-val">${e.monthlyKwh} kVt*soat</span>
                  <span class="es-lbl">Printerlar Sarfi / Oy</span>
                </div>
                <div class="elec-stat-box">
                  <span class="es-val">${this.formatPrice(e.printerElecCostUZS)}</span>
                  <span class="es-lbl">Printer Elektr Xarajati</span>
                </div>
                <div class="elec-stat-box">
                  <span class="es-val">${this.formatPrice(e.totalWorkshopElecUZS)}</span>
                  <span class="es-lbl">Jami Ustaxona (Konditsioner/Chiroq)</span>
                </div>
              </div>

              <div class="elec-formula-bar">
                <code>${this.simState.printersActive} ta printer × 0.15 kVt × ${this.simState.dailyOperatingHours} soat × 26 kun × 1,100 so‘m = ${this.formatPrice(e.printerElecCostUZS)}</code>
              </div>
            </div>

            <div class="elec-insight-card">
              <div class="insight-badge">Hakamlar Uchun Asosiy Xulosa</div>
              <h3>Nega Bo‘sh Turish Elektrdan Ko‘ra Xavfliroq?</h3>
              <p>
                1,100 so‘mlik tarifda 3 ta Bambu printerini kuniga 8 soatdan ishlatish oyiga atigi <strong>~103,000 so‘m</strong> elektr sarflaydi. Konditsioner va kompyuterni qo‘shganda ham 700,000 so‘mdan oshmaydi.
              </p>
              <div class="highlight-quote">
                "Ishsiz turgan printer elektr hisobi nol bo‘lgani uchungina foyda keltirmaydi. Mashina sovuq turganda ham ijara va eskirish soat sayin hisoblanaveradi."
              </div>
            </div>
          </div>
        </section>

        <!-- 4-Bo'lim: Joylashuv Strategiyasi -->
        <section class="pitch-section">
          <div class="section-badge-pill">4-Bo‘lim • Ustaxona Joylashuvi</div>
          <h2 class="pitch-sec-title">📍 Toshkent Shahridagi Joylashuv Strategiyasi</h2>
          <p class="pitch-sec-lead">
            Bizga shahar markazidagi qimmat vitrina kerak emas. Mijozlar buyurtmani onlayn beradi va qismlarni kuryer orqali qabul qiladi. Bizga 20–35 m² o‘lchamdagi barqaror 220V elektr va ventilyatsiyaga ega xona kifoya.
          </p>

          <div class="district-cards-grid">
            ${Mn.locations.map(s=>`
              <div class="district-card ${s.isRecommended?"recommended":""}">
                <div class="district-top">
                  <div>
                    <h3 class="district-name">${s.name}</h3>
                    <div class="district-uz">${s.uzName}</div>
                  </div>
                  <span class="district-tag ${s.isRecommended?"tag-green":"tag-gray"}">${s.tag}</span>
                </div>
                <div class="district-rent">
                  Mo‘ljaldagi Ijara: <strong>${s.targetRentUZS}</strong> (${s.spaceSize})
                </div>
                <div class="district-pros-list">
                  <strong>Strategik Afzalliklari:</strong>
                  <ul>
                    ${s.pros.map(a=>`<li>${a}</li>`).join("")}
                  </ul>
                </div>
                <div class="district-verdict">
                  <strong>Xulosa:</strong> ${s.verdict}
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- 5-Bo'lim: Real Hayotiy Keys (Shesterna) -->
        <section class="pitch-section">
          <div class="section-badge-pill">5-Bo‘lim • Amaliy Isbot</div>
          <h2 class="pitch-sec-title">🔬 Real Hayotiy Keys: Oshxona Kombayni Shesternasi</h2>
          <p class="pitch-sec-lead">
            Kichik 3D bosma ustaxonasi Toshkentdagi real muammolarni qanday hal qilishi va mijozlarga katta mablag‘ tejashi bo‘yicha aniq misol.
          </p>

          <div class="case-study-hero-card">
            <div class="case-study-image-wrapper">
              <img src="/assets/broken_gear.jpg" alt="Singan Shesterna vs Yangi Chop Etilgan PETG Shesterna" class="case-study-img">
              <div class="img-badge">Makro Surat • Singan Eski Shesterna vs Biz Chop Etgan Oq PETG Detal</div>
            </div>

            <div class="case-study-content">
              <h3 class="case-title">Oshxona Kombayni Plastmassa Shesternasini Tiklash</h3>
              <p class="case-problem-desc">
                Mijozning qimmat mikserida ichki yetaklovchi tishli g‘ildirak sinib qoldi. Rasmiy servis ehtiyot qism O‘zbekistonga olib kelinmasligini aytib, ta’mirlashdan bosh tortdi.
              </p>

              <div class="comparison-dual-box">
                <div class="comp-col old-way">
                  <div class="comp-header">❌ Eski Usul (Chet Eldan Buyurtma)</div>
                  <div class="comp-metric"><span class="cm-lbl">Vaqt:</span> <strong>3–4 Hafta kutish</strong></div>
                  <div class="comp-metric"><span class="cm-lbl">Narx:</span> <strong>$30 USD (~380,000 so‘m)</strong></div>
                  <div class="comp-metric"><span class="cm-lbl">Xavf:</span> Noto‘g‘ri model kelishi, pochta yo‘qolishi</div>
                </div>

                <div class="comp-col new-way">
                  <div class="comp-header">✅ Bizning Toshkent3D Yechimimiz</div>
                  <div class="comp-metric"><span class="cm-lbl">Vaqt:</span> <strong>Jami 2 Soat (Shu Kunning O‘zida)</strong></div>
                  <div class="comp-metric"><span class="cm-lbl">Narx:</span> <strong>$6 USD (~75,000 so‘m)</strong></div>
                  <div class="comp-metric"><span class="cm-lbl">Natija:</span> <strong>80% Pul va 95% Vaqt Tejaldi!</strong></div>
                </div>
              </div>

              <div class="workflow-steps-row">
                <div class="w-step">
                  <span class="step-circle">1</span>
                  <span>Shtangensirkulda o‘lchash (15 min)</span>
                </div>
                <div class="w-step">
                  <span class="step-circle">2</span>
                  <span>SolidWorks da 3D chizish (30 min)</span>
                </div>
                <div class="w-step">
                  <span class="step-circle">3</span>
                  <span>Oq PETG da bosib chiqarish (1s 15m)</span>
                </div>
                <div class="w-step">
                  <span class="step-circle">4</span>
                  <span>O‘rnatildi va sinovdan o‘tdi (Ishlayapti!)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 6-Bo'lim: Oylik Xarajatlar va Zararsizlik Simulyatori -->
        <section class="pitch-section">
          <div class="section-badge-pill">6-Bo‘lim • Moliyaviy Model</div>
          <h2 class="pitch-sec-title">📊 Oylik Xarajatlar va Zararsizlik Nuqtasi (Break-Even)</h2>
          <p class="pitch-sec-lead">
            Hakamlar uchun birlik iqtisodiyoti (Unit Economics) va xarajatlarga sezgirlik hisob-kitobi.
          </p>

          <div class="breakeven-grid">
            <div class="be-inputs-panel">
              <h4>Oylik Xarajat Ko‘rsatkichlarini O‘zgartiring</h4>

              <div class="be-slider-field">
                <div class="label-row">
                  <label>Ustaxona Ijarasi (Chilonzor):</label>
                  <span>${this.formatPrice(this.simState.monthlyRentUZS)}</span>
                </div>
                <input type="range" class="custom-slider" id="slider-be-rent" min="2000000" max="4500000" step="250000" value="${this.simState.monthlyRentUZS}">
              </div>

              <div class="be-slider-field">
                <div class="label-row">
                  <label>Buyurtmadan Qoladigan O‘rtacha Marja:</label>
                  <span class="highlight-val">${this.formatPrice(this.simState.avgContributionMarginPerOrderUZS)}</span>
                </div>
                <input type="range" class="custom-slider" id="slider-be-margin" min="60000" max="160000" step="10000" value="${this.simState.avgContributionMarginPerOrderUZS}">
                <div class="sim-val-hint">Buyurtma narxi (120k) minus xomashyo/eskirish (20k)</div>
              </div>

              <div class="be-slider-field">
                <div class="label-row">
                  <label>Elektr Energiyasi Limit:</label>
                  <span>${this.formatPrice(this.simState.monthlyElectricityUZS)}</span>
                </div>
                <input type="range" class="custom-slider" id="slider-be-elec" min="300000" max="800000" step="50000" value="${this.simState.monthlyElectricityUZS}">
              </div>

              <div class="be-slider-field">
                <div class="label-row">
                  <label>Marketing va Logistika Ko‘magi:</label>
                  <span>${this.formatPrice(this.simState.monthlyMarketingUZS)}</span>
                </div>
                <input type="range" class="custom-slider" id="slider-be-mkt" min="400000" max="1500000" step="100000" value="${this.simState.monthlyMarketingUZS}">
              </div>
            </div>

            <div class="be-results-panel">
              <div class="be-formula-box">
                <div class="math-eq">
                  <code>Zararsizlik Nuqtasi = Jami Doimiy Xarajat ÷ Buyurtma Marjasi</code>
                </div>
                <div class="math-calc">
                  <code>${this.formatPrice(n.fixedExpensesUZS)} ÷ ${this.formatPrice(this.simState.avgContributionMarginPerOrderUZS)} = <strong>${n.breakEvenOrders} ta buyurtma / oy</strong></code>
                </div>
              </div>

              <div class="be-metrics-row">
                <div class="be-metric-card primary">
                  <span class="bm-title">Oylik Zararsizlik Marrasi</span>
                  <div class="bm-num">${n.breakEvenOrders} ta buyurtma</div>
                  <span class="bm-sub">~${n.ordersPerDay} ta buyurtma kuniga</span>
                </div>
                <div class="be-metric-card">
                  <span class="bm-title">Jami Oylik Doimiy Xarajat</span>
                  <div class="bm-num">${this.formatPrice(n.fixedExpensesUZS)}</div>
                  <span class="bm-sub">Ijara + Elektr + Net + Mkt</span>
                </div>
                <div class="be-metric-card green">
                  <span class="bm-title">Oyiga 80 Ta Buyurtmada Sof Foyda</span>
                  <div class="bm-num">+${this.formatPrice(n.targetProfitUZS)}</div>
                  <span class="bm-sub">Asoschilar uchun daromad</span>
                </div>
              </div>

              <div class="judge-economic-clarity">
                ⚠️ <strong>Hakamlar Uchun Shaffof Izoh:</strong> Ushbu model dastlabki 1–3 oyda asoschilarning o‘zlari modellashtirish va dastgohlarni boshqarishini nazarda tutadi. Hajm 80 tadan oshganda yordamchi operator maoshi qo‘shiladi.
              </div>
            </div>
          </div>
        </section>

        <!-- 7-Bo'lim: SWOT Tahlili -->
        <section class="pitch-section">
          <div class="section-badge-pill">7-Bo‘lim • Strategik Tahlil</div>
          <h2 class="pitch-sec-title">🧩 SWOT Tahlili Matritsasi va Amaliy Yechimlar</h2>
          <p class="pitch-sec-lead">
            Ichki va tashqi omillarning batafsil tahlili hamda har bir xavfga qarshi aniq amaliy chora-tadbirlar.
          </p>

          <div class="swot-matrix-grid">
            <div class="swot-quadrant q-strengths">
              <div class="swot-badge">Ijobiy & Ichki</div>
              <h3 class="swot-quad-title">Kuchli Tomonlar (S)</h3>
              <ul class="swot-item-list">
                ${Mn.swot.strengths.map(s=>`
                  <li>
                    <strong>${s.title}:</strong> ${s.desc}
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="swot-quadrant q-weaknesses">
              <div class="swot-badge red">Salbiy & Ichki</div>
              <h3 class="swot-quad-title">Zaif Tomonlar (W)</h3>
              <ul class="swot-item-list">
                ${Mn.swot.weaknesses.map(s=>`
                  <li>
                    <strong>${s.title}:</strong> ${s.desc}
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="swot-quadrant q-opportunities">
              <div class="swot-badge blue">Ijobiy & Tashqi</div>
              <h3 class="swot-quad-title">Imkoniyatlar (O) — Toshkentda O‘sish</h3>
              <ul class="swot-item-list">
                ${Mn.swot.opportunities.map(s=>`
                  <li>
                    <strong>${s.title}:</strong> ${s.desc}
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="swot-quadrant q-threats">
              <div class="swot-badge orange">Salbiy & Tashqi</div>
              <h3 class="swot-quad-title">Xavflar (T) va Amaliy Yechimlar</h3>
              <div class="threat-solution-list">
                ${Mn.swot.threatsAndSolutions.map(s=>`
                  <div class="threat-box">
                    <div class="threat-head">⚠️ ${s.threat}</div>
                    <div class="threat-detail">${s.detail}</div>
                    <div class="threat-solution">
                      <strong>Yechim:</strong> ${s.solution}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </section>

        <!-- 8-Bo'lim: 90 Kunlik Yo'l Xaritasi -->
        <section class="pitch-section">
          <div class="section-badge-pill">8-Bo‘lim • Amalga Oshirish Rejasi</div>
          <h2 class="pitch-sec-title">🚀 90 Kunlik Ishga Tushirish Yo‘l Xaritasi</h2>
          <p class="pitch-sec-lead">
            Talabni tekshirishdan boshlab doimiy B2B shartnomalarigacha bo‘lgan bosqichma-bosqich reja.
          </p>

          <div class="roadmap-timeline-grid">
            ${Mn.roadmap.map(s=>`
              <div class="roadmap-card">
                <div class="rm-header">
                  <span class="rm-icon">${s.icon}</span>
                  <div>
                    <span class="rm-month">${s.month}</span>
                    <h4 class="rm-title">${s.title}</h4>
                  </div>
                </div>
                <ul class="rm-actions">
                  ${s.actions.map(a=>`<li>${a}</li>`).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- Slayd Taqdimoti Modali -->
        <div class="slides-modal-backdrop" id="slides-modal" style="display: ${this.simState.isSlideModalOpen?"flex":"none"};">
          <div class="slides-modal-content">
            <div class="slides-modal-bar">
              <div class="slides-modal-title">
                <span>Maktablararo Tanlov Taqdimoti</span> • Slayd <strong id="slide-num-text">1 dan 10</strong>
              </div>
              <div class="slides-nav-tools">
                <button type="button" class="btn-slide-nav" id="btn-slide-prev">◀ Oldingi</button>
                <button type="button" class="btn-slide-nav" id="btn-slide-next">Keyingi ▶</button>
                <button type="button" class="btn-slide-close" id="btn-slide-close">&times;</button>
              </div>
            </div>

            <div class="slide-viewport-stage" id="slide-stage"></div>
          </div>
        </div>
      </div>
    `,this.attachEventListeners(),this.simState.isSlideModalOpen&&this.renderSlide(this.simState.currentSlideIndex)}attachEventListeners(){const t=this.mount.querySelector("#slider-a1-count");t&&t.addEventListener("input",d=>{this.simState.bambuA1Count=parseInt(d.target.value,10),this.render()});const e=this.mount.querySelector("#slider-p1s-count");e&&e.addEventListener("input",d=>{this.simState.bambuP1SCount=parseInt(d.target.value,10),this.render()});const n=this.mount.querySelector("#slider-filament-stock");n&&n.addEventListener("input",d=>{this.simState.filamentAllowanceUZS=parseInt(d.target.value,10),this.render()});const s=this.mount.querySelector("#slider-pc-cost");s&&s.addEventListener("input",d=>{this.simState.pcAllowanceUZS=parseInt(d.target.value,10),this.render()});const a=this.mount.querySelector("#slider-ups-cost");a&&a.addEventListener("input",d=>{this.simState.upsFurnitureUZS=parseInt(d.target.value,10),this.render()});const o=this.mount.querySelector("#slider-elec-hours");o&&o.addEventListener("input",d=>{this.simState.dailyOperatingHours=parseInt(d.target.value,10),this.render()});const r=this.mount.querySelector("#slider-be-rent");r&&r.addEventListener("input",d=>{this.simState.monthlyRentUZS=parseInt(d.target.value,10),this.render()});const c=this.mount.querySelector("#slider-be-margin");c&&c.addEventListener("input",d=>{this.simState.avgContributionMarginPerOrderUZS=parseInt(d.target.value,10),this.render()});const l=this.mount.querySelector("#slider-be-elec");l&&l.addEventListener("input",d=>{this.simState.monthlyElectricityUZS=parseInt(d.target.value,10),this.render()});const h=this.mount.querySelector("#slider-be-mkt");h&&h.addEventListener("input",d=>{this.simState.monthlyMarketingUZS=parseInt(d.target.value,10),this.render()});const u=this.mount.querySelector("#btn-switch-portal");u&&this.onSwitchToOrderPortal&&u.addEventListener("click",()=>{this.onSwitchToOrderPortal()});const f=this.mount.querySelector("#btn-launch-slides");f&&f.addEventListener("click",()=>{this.simState.isSlideModalOpen=!0,this.simState.currentSlideIndex=0,this.render()});const m=this.mount.querySelector("#btn-slide-close");m&&m.addEventListener("click",()=>{this.simState.isSlideModalOpen=!1,this.render()});const g=this.mount.querySelector("#btn-slide-prev"),v=this.mount.querySelector("#btn-slide-next");g&&g.addEventListener("click",()=>{this.simState.currentSlideIndex>0&&(this.simState.currentSlideIndex--,this.renderSlide(this.simState.currentSlideIndex))}),v&&v.addEventListener("click",()=>{this.simState.currentSlideIndex<9&&(this.simState.currentSlideIndex++,this.renderSlide(this.simState.currentSlideIndex))}),window.onkeydown=d=>{this.simState.isSlideModalOpen&&(d.key==="ArrowRight"||d.key===" "?this.simState.currentSlideIndex<9&&(this.simState.currentSlideIndex++,this.renderSlide(this.simState.currentSlideIndex)):d.key==="ArrowLeft"?this.simState.currentSlideIndex>0&&(this.simState.currentSlideIndex--,this.renderSlide(this.simState.currentSlideIndex)):d.key==="Escape"&&(this.simState.isSlideModalOpen=!1,this.render()))}}renderSlide(t){const e=this.mount.querySelector("#slide-stage"),n=this.mount.querySelector("#slide-num-text");if(n&&(n.textContent=`${t+1} dan 10`),!e)return;const s=[`
        <div class="slide-card slide-title-theme">
          <div class="slide-badge-top">MAKTABLARARO BIZNES TANLOVI</div>
          <h1 class="slide-hero-heading">Toshkentda 3D Bosma Biznesi</h1>
          <p class="slide-hero-sub">Raqamli 3D Modellarni Mahalliy Talab Uchun Real Mahsulotga Aylantirish</p>
          <div class="slide-tags-row">
            <span>🛡️ Maxsus Ishlab Chiqarish</span>
            <span>📊 SWOT Biznes Tahlili</span>
          </div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">BOZOR EHTIYOJI</div>
          <h2 class="slide-heading">Bizning Biznes G‘oyamiz Nimada?</h2>
          <div class="slide-body-split">
            <div class="slide-bullet-column">
              <div class="slide-bullet-item cyan">
                <h4>Mahalliy Ishlab Chiqarish</h4>
                <p>Qimmat qoliplarsiz Toshkentning o‘zida nostandart plastmassa detallar tayyorlash.</p>
              </div>
              <div class="slide-bullet-item emerald">
                <h4>Tezkorlik (Turnaround)</h4>
                <p>Tayyor prototip va ehtiyot qismlarni 24 dan 48 soatgacha bo‘lgan vaqtda yetkazish.</p>
              </div>
              <div class="slide-bullet-item purple">
                <h4>Maqsadli Auditoriya</h4>
                <p>Muhandislik talabalari, mahalliy ustaxonalar, dizaynerlar va havaskorlar.</p>
              </div>
            </div>
            <div class="slide-image-column">
              <img src="/assets/broken_gear.jpg" alt="Mahalliy 3D Bosma" class="slide-inner-img">
            </div>
          </div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">SWOT TAHLILI: 1-QISM</div>
          <div class="slide-badge-corner green">Ijobiy & Ichki</div>
          <h2 class="slide-heading">Kuchli Tomonlar (S) — Asosiy Afzalliklar</h2>
          <div class="slide-three-cards">
            <div class="swot-slide-box">
              <div class="swot-s-icon">💰</div>
              <h3>Kam Boshlang‘ich Xarajat</h3>
              <p>Stolustki 3D printerlari arzon. Dastlabki kam sarmoya kifoya (~15–20m so‘m).</p>
            </div>
            <div class="swot-slide-box">
              <div class="swot-s-icon">📈</div>
              <h3>Yuqori Foyda Marjasi</h3>
              <p>Xom plastmassa filament arzon (~200 so‘m/g). Maxsus buyum esa 1,200–2,500 so‘m/g sotiladi.</p>
            </div>
            <div class="swot-slide-box">
              <div class="swot-s-icon">⚙️</div>
              <h3>Cheksiz Moslashuvchanlik</h3>
              <p>Dastgohni o‘zgartirmasdan, dasturda mahsulot dizaynini bir zumda yangilash imkoni.</p>
            </div>
          </div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">SWOT TAHLILI: 2-QISM</div>
          <div class="slide-badge-corner red">Salbiy & Ichki</div>
          <h2 class="slide-heading">Zaif Tomonlar (W) — Ichki Cheklovlar</h2>
          <div class="slide-vertical-stack">
            <div class="swot-stack-item">
              <span class="stack-icon">⏱️</span>
              <div>
                <strong>Ishlab Chiqarish Tezligi:</strong> Murakkab modellarni bosish bir necha soat vaqt oladi. 100 donadan ortiq ommaviy seriyada cheklangan.
              </div>
            </div>
            <div class="swot-stack-item">
              <span class="stack-icon">🔧</span>
              <div>
                <strong>Texnik Kalibrlash:</strong> 3D printerlar soplosini tozalash, tasmalar tarangligi va doimiy texnik nazorat talab qiladi.
              </div>
            </div>
            <div class="swot-stack-item">
              <span class="stack-icon">🖌️</span>
              <div>
                <strong>Qo‘lda Ishlov Berish:</strong> Tayanchlarni ajratish va yuzani silliqlash qo‘l mehnatini talab etadi.
              </div>
            </div>
          </div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">SWOT TAHLILI: 3-QISM</div>
          <div class="slide-badge-corner blue">Ijobiy & Tashqi</div>
          <h2 class="slide-heading">Imkoniyatlar (O) — Toshkentda O‘sish</h2>
          <div class="slide-four-grid">
            <div class="opp-box">
              <span class="opp-num">01</span>
              <h4>Texnologik Startaplar</h4>
              <p>Toshkentdagi IT Park va ToshTech klublariga jismoniy prototiplar zarur.</p>
            </div>
            <div class="opp-box">
              <span class="opp-num">02</span>
              <h4>Ijtimoiy Tarmoqlar</h4>
              <p>Esdalik sovg‘alari va anime figuralarini Telegram va Instagram orqali to‘g‘ridan-to‘g‘ri sotish.</p>
            </div>
            <div class="opp-box">
              <span class="opp-num">03</span>
              <h4>Ustaxonalar Hamkorligi</h4>
              <p>Chilonzordagi servislar bilan kamyob plastmassa shesternalarni yetkazish kelishuvi.</p>
            </div>
            <div class="opp-box">
              <span class="opp-num">04</span>
              <h4>O‘quv To‘garaklari</h4>
              <p>Maktab o‘quvchilari uchun 3D modellashtirish va bosma bo‘yicha mahorat darslari.</p>
            </div>
          </div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">SWOT TAHLILI: 4-QISM</div>
          <div class="slide-badge-corner orange">Salbiy & Tashqi</div>
          <h2 class="slide-heading">Xavflar (T) va Amaliy Yechimlar</h2>
          <div class="slide-threat-rows">
            <div class="threat-row-item">
              <div class="tr-problem">
                <strong>Material Importi Kechikishi</strong>
                <span>Filament narxlari xalqaro yetkazib berishga bog‘liq.</span>
              </div>
              <div class="tr-solution">
                <span>Yechim: Chilonzordagi 3DShef orqali 2 oylik zaxira saqlash</span>
              </div>
            </div>
            <div class="threat-row-item">
              <div class="tr-problem">
                <strong>Elektrdagi Kutilmagan Uzilishlar</strong>
                <span>Elektr o‘chishi bir necha soatlik ishni yaroqsiz qilib qo‘yishi mumkin.</span>
              </div>
              <div class="tr-solution">
                <span>Yechim: 1500VA UPS uzluksiz quvvat manbaini o‘rnatish</span>
              </div>
            </div>
            <div class="threat-row-item">
              <div class="tr-problem">
                <strong>Yangi Raqobatchilar Paydo Bo‘lishi</strong>
                <span>Boshqalar ham osonlikcha 3D printer sotib olishi mumkin.</span>
              </div>
              <div class="tr-solution">
                <span>Yechim: Aniq muhandislik chizmasi, tezkorlik va mijozga yo‘naltirilganlik</span>
              </div>
            </div>
          </div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">AMALIY ISBOT</div>
          <h2 class="slide-heading">Real Misol: Singan Shesternani Tiklash</h2>
          <div class="slide-four-steps-grid">
            <div class="step-card">
              <div class="sc-badge">1</div>
              <h4>Muammo</h4>
              <p>Mijozning oshxona kombaynidagi kichik plastmassa tishli g‘ildirak sinib qoldi.</p>
            </div>
            <div class="step-card">
              <div class="sc-badge">2</div>
              <h4>Eski Usul</h4>
              <p>Chet eldan buyurtma qilish. 3 hafta kutish va narxi $30.</p>
            </div>
            <div class="step-card">
              <div class="sc-badge">3</div>
              <h4>Bizning Yechim</h4>
              <p>3D dasturda singan qismni 45 daqiqada aniq chizib chiqdik.</p>
            </div>
            <div class="step-card highlight-green">
              <div class="sc-badge green">4</div>
              <h4>Yakuniy Natija</h4>
              <p>2 soatda bosib chiqarildi. Jami xarajat: $6. Mijoz vaqt va pulini tejadi!</p>
            </div>
          </div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">UMUMIY MATRITSA</div>
          <h2 class="slide-heading">SWOT Tahlili Matritsasi</h2>
          <div class="slide-matrix-grid">
            <div class="mat-cell green-bg">
              <h4 class="green-text">KUCHLI TOMONLAR (Ichki)</h4>
              <ul>
                <li>Kam boshlang‘ich xarajat</li>
                <li>Yuqori foyda marjasi</li>
                <li>Tezkor dizayn o‘zgarishlari</li>
              </ul>
            </div>
            <div class="mat-cell red-bg">
              <h4 class="red-text">ZAIF TOMONLAR (Ichki)</h4>
              <ul>
                <li>Sekinroq bosish tezligi</li>
                <li>Qo‘lda yuzaga ishlov berish</li>
                <li>Dastgohga texnik xizmat</li>
              </ul>
            </div>
            <div class="mat-cell blue-bg">
              <h4 class="blue-text">IMKONIYATLAR (Tashqi)</h4>
              <ul>
                <li>Toshkentdagi texnologik markazlar</li>
                <li>Instagram/Telegram to‘g‘ridan sotuv</li>
                <li>Ustaxonalar bilan hamkorlik</li>
              </ul>
            </div>
            <div class="mat-cell orange-bg">
              <h4 class="orange-text">XAVFLAR (Tashqi)</h4>
              <ul>
                <li>Material importi kechikishi</li>
                <li>Elektr uzilishlari</li>
                <li>Yangi raqobatchilar</li>
              </ul>
            </div>
          </div>
        </div>
      `,`
        <div class="slide-card slide-title-theme">
          <div class="slide-icon-large">🚀</div>
          <h1 class="slide-hero-heading">Kelajakni Birga Quramiz!</h1>
          <p class="slide-hero-sub">Raqamli innovatsiyalarni Toshkentning o‘zida jismoniy haqiqatga aylantiramiz.</p>
          <div class="slide-button-pill">E’tiboringiz uchun rahmat! Savollaringiz bormi?</div>
        </div>
      `,`
        <div class="slide-card">
          <div class="slide-category-header">ISBOTLAR VA MANBALAR</div>
          <h2 class="slide-heading">Toshkent Bo‘yicha Tasdiqlangan Manbalar</h2>
          <div class="slide-sources-list">
            <div class="source-item">
              <strong>O‘zbekiston Respublikasi Hukumat Portali:</strong> 2026-yil 1-iyundan tijorat guruhlari uchun 1,100 so‘m/kVt*soat tarifi. (gov.uz)
            </div>
            <div class="source-item">
              <strong>Bambu Lab Shourumi va Filamentlar:</strong> Chilonzor tumanidagi 3DShef rasmiy shourumi (3dshef.uz) va Bambu.uz
            </div>
            <div class="source-item">
              <strong>Mahalliy Bozor Ishtirokchilari:</strong> Additive Technology (Mirzo Ulug‘bek, minimal 400,000 so‘m), 3dBozor Toshkent, Codex 3D Print.
            </div>
            <div class="source-item">
              <strong>Ta’lim Muhiti:</strong> ToshTech Universiteti tashkil etilishi va IT Park Toshkent muhandislik tashabbuslari.
            </div>
          </div>
        </div>
      `];e.innerHTML=s[t]}}class Lm{constructor(t,e=null,n){this.mount=t,this.currentOrder=e||{orderId:"#T3D-UZ-8492",customerName:"Muhammad Rizo",customerPhone:"+998 90 123 45 67",orderTypeTitle:"Funktsional va Ehtiyot Qismlar (Oshxona Kombayni Shesternasi)",material:"PETG Mustahkam (Signal Zarg‘aldoq)",quantity:1,grandTotal:"75,000 so‘m",turnaround:"standard",createdAt:new Date().toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})},this.onBackToConfigurator=n,this.render()}setOrder(t){this.currentOrder=t,this.render()}render(){this.mount.innerHTML=`
      <div class="tracker-wrapper">
        <div class="tracker-header">
          <button type="button" class="btn-back-link" id="btn-tracker-back">
            ← Buyurtma Portali va Studiyaga Qaytish
          </button>
          <div class="tracker-title-row">
            <div>
              <div class="step-tag"><span class="step-num">Jonli Kuzatuv</span> Bambu Farm Telemetriyasi</div>
              <h2 class="section-title">Buyurtma Holati va Ustaxona Telemetriyasi</h2>
            </div>
            <div class="tracker-search-box">
              <input type="text" id="track-id-input" value="${this.currentOrder.orderId}" placeholder="Buyurtma #">
              <button type="button" class="btn-track-lookup" id="btn-lookup">Tekshirish</button>
            </div>
          </div>
        </div>

        <!-- Buyurtma Qisqacha Qatori -->
        <div class="tracker-summary-strip">
          <div class="tss-item">
            <span class="tss-lbl">Buyurtma Raqami:</span>
            <strong class="tss-val highlight">${this.currentOrder.orderId}</strong>
          </div>
          <div class="tss-item">
            <span class="tss-lbl">Mijoz:</span>
            <strong class="tss-val">${this.currentOrder.customerName}</strong>
          </div>
          <div class="tss-item">
            <span class="tss-lbl">Mahsulot:</span>
            <strong class="tss-val">${this.currentOrder.orderTypeTitle}</strong>
          </div>
          <div class="tss-item">
            <span class="tss-lbl">Material va Soni:</span>
            <strong class="tss-val">${this.currentOrder.material} (${this.currentOrder.quantity} dona)</strong>
          </div>
          <div class="tss-item">
            <span class="tss-lbl">Summasi:</span>
            <strong class="tss-val">${this.currentOrder.grandTotal}</strong>
          </div>
          <div class="tss-item">
            <span class="tss-lbl">To‘lov Cheki:</span>
            <strong class="tss-val" style="color: var(--accent-emerald);">
              ${this.currentOrder.receiptImage?"✅ Kvitansiya biriktirilgan":"💳 Click / Payme"}
            </strong>
          </div>
          <div class="tss-item">
            <span class="tss-lbl">Ustaxona:</span>
            <strong class="tss-val">Chilonzor Markazi</strong>
          </div>
        </div>

        <!-- Bosqichlar Zanjiri -->
        <div class="pipeline-card">
          <h3 class="pipeline-heading">Ishlab Chiqarish Jarayoni (Jonli Telemetriya)</h3>

          <div class="timeline-steps">
            <div class="t-step completed">
              <div class="t-circle">✓</div>
              <div class="t-content">
                <h4>1. Buyurtma & To‘lov Cheki Qabul Qilindi</h4>
                <p>${this.currentOrder.receiptImage?"To‘lov chekingiz muvaffaqiyatli qabul qilindi va 3D model navbatga qo‘yildi.":"Raqamli model geometrik nuqsonlarsiz tekshirildi va bosmaga yo‘naltirildi."}</p>
                <span class="t-time">Bajarildi: Bugun</span>
              </div>
            </div>

            <div class="t-step completed">
              <div class="t-circle">✓</div>
              <div class="t-content">
                <h4>2. Bambu Lab Printeri Uchun Slicer Tayyorlandi</h4>
                <p>G-kod Bambu Lab A1 uchun generatsiya qilindi (0.20mm qatlam, 60% giroid to‘ldirish).</p>
                <span class="t-time">Navbatdagi o‘rni: #1</span>
              </div>
            </div>

            <div class="t-step current">
              <div class="t-circle pulse">⚡</div>
              <div class="t-content">
                <h4>3. Chop Etish Jarayoni Ketmoqda (Chilonzor Ustaxonasi)</h4>
                <p>2-raqamli dastgoh faol. 320 qatlamdan 214-qatlam bosilmoqda. Sirt silliqligi a’lo.</p>
                
                <!-- Jonli Telemetriya Qutisi -->
                <div class="telemetry-box">
                  <div class="tel-grid">
                    <div class="tel-metric">
                      <span class="tm-lbl">Soplo Harorati</span>
                      <strong class="tm-val cyan">220°C / 220°C</strong>
                    </div>
                    <div class="tel-metric">
                      <span class="tm-lbl">Stol Harorati</span>
                      <strong class="tm-val orange">60°C / 60°C</strong>
                    </div>
                    <div class="tel-metric">
                      <span class="tm-lbl">Bosish Tezligi</span>
                      <strong class="tm-val green">250 mm/s</strong>
                    </div>
                    <div class="tel-metric">
                      <span class="tm-lbl">Bajarildi</span>
                      <strong class="tm-val highlight">68% Tayyor</strong>
                    </div>
                  </div>
                  <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: 68%;"></div>
                  </div>
                  <div class="eta-text">⏱️ Taxminan 28 daqiqada tugaydi</div>
                </div>
              </div>
            </div>

            <div class="t-step future">
              <div class="t-circle">4</div>
              <div class="t-content">
                <h4>4. Sifat Nazorati va Shtangensirkul Tekshiruvi</h4>
                <p>Tishlar qadami va o‘q diametri elektron shtangensirkulda tekshiriladi (±0.05 mm).</p>
                <span class="t-time">Bosma tugagach</span>
              </div>
            </div>

            <div class="t-step future">
              <div class="t-circle">5</div>
              <div class="t-content">
                <h4>5. Olib Ketishga Tayyor / Yandex Go Orqali Yuboriladi</h4>
                <p>Himoya qutisiga qadoqlanib, texnik moylash bo‘yicha qo‘llanma bilan beriladi.</p>
                <span class="t-time">Bugun 18:30 gacha kutilmoqda</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Aloqa Kartasi -->
        <div class="workshop-contact-card">
          <div class="wc-info">
            <span class="wc-badge">🏬 Jismoniy Ustaxona Manzili</span>
            <h4>Toshkent 3D Bosma va Prototip Ustaxonasi</h4>
            <p>Toshkent shahri, Chilonzor tumani, 9-kvartal (3DShef shourumi yonida)</p>
            <p>Ish vaqti: Dush – Shan, 09:00 – 19:00 | Tel: +998 (90) 123-45-67</p>
          </div>
          <div class="wc-actions">
            <a href="https://t.me/Any3dCubic_bot" target="_blank" class="btn-telegram-contact">
              ✈️ Ustaxonaga Telegramdan Yozish (@Any3dCubic_bot)
            </a>
            <button type="button" class="btn-yandex-call" id="btn-courier-alert">
              📍 Yandex Go Kuryerini Kuzatish
            </button>
          </div>
        </div>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){const t=this.mount.querySelector("#btn-tracker-back");t&&this.onBackToConfigurator&&t.addEventListener("click",()=>{this.onBackToConfigurator()});const e=this.mount.querySelector("#btn-lookup"),n=this.mount.querySelector("#track-id-input");e&&n&&e.addEventListener("click",()=>{const a=n.value.trim();a&&(this.currentOrder.orderId=a,this.render())});const s=this.mount.querySelector("#btn-courier-alert");s&&s.addEventListener("click",()=>{alert(`📍 Yandex Go: #${this.currentOrder.orderId} raqamli buyurtma bosma tugashi bilan Chilonzor ustaxonasidan yetkazib beriladi!`)})}}class Um{constructor(){this.appContainer=document.querySelector("#app"),this.currentView="configurator",this.currency="UZS",this.threeStudio=null,this.configurator=null,this.pitchDeck=null,this.orderTracker=null,this.latestOrder=null,this.init()}init(){this.initTelegramWebApp(),this.renderShell(),this.mountView(),this.attachNavListeners()}initTelegramWebApp(){var t;if((t=window.Telegram)!=null&&t.WebApp)try{const e=window.Telegram.WebApp;e.ready(),e.expand(),typeof e.requestFullscreen=="function"&&e.requestFullscreen(),typeof e.enableClosingConfirmation=="function"&&e.enableClosingConfirmation(),typeof e.setHeaderColor=="function"&&e.setHeaderColor("#090e1a"),typeof e.setBackgroundColor=="function"&&e.setBackgroundColor("#090e1a")}catch(e){console.warn("Telegram WebApp init error:",e)}}renderShell(){this.appContainer.innerHTML=`
      <!-- Global Navigatsiya Paneli -->
      <nav class="app-navbar">
        <div class="brand-group" id="nav-brand">
          <div class="brand-icon">🖨️</div>
          <div class="brand-text">
            <h1>Toshkent 3D Ustaxonasi</h1>
            <div class="brand-sub">
              <span>●</span> Tezkor Mahalliy 3D Bosma & Prototip Xizmati
            </div>
          </div>
        </div>

        <!-- Rejimlar Almashinuvi -->
        <div class="mode-switcher-nav">
          <button type="button" class="nav-tab-btn ${this.currentView==="configurator"?"active":""}" data-view="configurator" id="tab-config">
            <span class="tab-icon">🛒</span>
            <span class="tab-text-full">Buyurtma Portali va 3D Studiya</span>
            <span class="tab-text-short">Buyurtma</span>
          </button>
          <button type="button" class="nav-tab-btn ${this.currentView==="pitch"?"active-pitch":""}" data-view="pitch" id="tab-pitch">
            <span class="tab-icon">💼</span>
            <span class="tab-text-full">Tanlov Pitchi & Moliyaviy Model</span>
            <span class="tab-text-short">Pitch & Model</span>
          </button>
          <button type="button" class="nav-tab-btn ${this.currentView==="tracker"?"active":""}" data-view="tracker" id="tab-tracker">
            <span class="tab-icon">📦</span>
            <span class="tab-text-full">Buyurtmani Kuzatish</span>
            <span class="tab-text-short">Kuzatish</span>
          </button>
        </div>

        <!-- O'ng Tomondagi Qo'shimcha Tugmalar -->
        <div class="header-right-tools">
          <button type="button" class="btn-fullscreen-toggle" id="btn-fullscreen" title="Brauzer tepasini yashirish (To'liq ekran)">
            ⛶ <span>To‘liq Ekran</span>
          </button>
          <div class="currency-toggle">
            <button type="button" class="curr-btn ${this.currency==="UZS"?"active":""}" data-curr="UZS">SO‘M</button>
            <button type="button" class="curr-btn ${this.currency==="USD"?"active":""}" data-curr="USD">USD</button>
          </div>
          <div class="badge-location">
            <span>📍</span> Chilonzor, Toshkent
          </div>
        </div>
      </nav>

      <!-- Asosiy Dinamik Maydon -->
      <main id="main-content"></main>
    `}mountView(){const t=this.appContainer.querySelector("#main-content");if(!t)return;if(t.innerHTML="",this.appContainer.querySelectorAll(".nav-tab-btn").forEach(n=>{const s=n.getAttribute("data-view");n.classList.remove("active","active-pitch"),s===this.currentView&&(s==="pitch"?n.classList.add("active-pitch"):n.classList.add("active"))}),this.currentView==="configurator"){const n=document.createElement("div");if(t.appendChild(n),!this.threeStudio){const s=document.createElement("div");this.threeStudio=new Am(s,{initialMaterial:"PETG",initialColor:"#ff6600"})}this.configurator=new Rm(n,this.threeStudio,s=>{this.latestOrder=s,this.currentView="tracker",this.mountView()}),this.configurator.setCurrency(this.currency),setTimeout(()=>{this.threeStudio&&this.threeStudio.onResize()},50)}else if(this.currentView==="pitch"){const n=document.createElement("div");t.appendChild(n),this.pitchDeck=new Pm(n,()=>{this.currentView="configurator",this.mountView()})}else if(this.currentView==="tracker"){const n=document.createElement("div");t.appendChild(n),this.orderTracker=new Lm(n,this.latestOrder,()=>{this.currentView="configurator",this.mountView()})}}attachNavListeners(){const t=this.appContainer.querySelector(".mode-switcher-nav");t&&t.addEventListener("click",a=>{const o=a.target.closest(".nav-tab-btn");if(o){const r=o.getAttribute("data-view");r&&r!==this.currentView&&(this.currentView=r,this.mountView(),window.scrollTo({top:0,behavior:"smooth"}))}});const e=this.appContainer.querySelector("#nav-brand");e&&e.addEventListener("click",()=>{this.currentView="configurator",this.mountView(),window.scrollTo({top:0,behavior:"smooth"})});const n=this.appContainer.querySelector(".currency-toggle");n&&n.addEventListener("click",a=>{const o=a.target.closest(".curr-btn");if(o){const r=o.getAttribute("data-curr");r&&r!==this.currency&&(this.currency=r,n.querySelectorAll(".curr-btn").forEach(l=>l.classList.remove("active")),o.classList.add("active"),this.currentView==="configurator"&&this.configurator&&this.configurator.setCurrency(r))}});const s=this.appContainer.querySelector("#btn-fullscreen");s&&(s.addEventListener("click",()=>{var a;if((a=window.Telegram)!=null&&a.WebApp)try{window.Telegram.WebApp.expand(),typeof window.Telegram.WebApp.requestFullscreen=="function"&&window.Telegram.WebApp.requestFullscreen()}catch{}document.fullscreenElement?(document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),s.innerHTML="⛶ <span>To‘liq Ekran</span>"):(document.documentElement.requestFullscreen().catch(()=>{}),s.innerHTML="🗗 <span>Oddiy Ekran</span>")}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?s.innerHTML="🗗 <span>Oddiy Ekran</span>":s.innerHTML="⛶ <span>To‘liq Ekran</span>"}))}}new Um;
