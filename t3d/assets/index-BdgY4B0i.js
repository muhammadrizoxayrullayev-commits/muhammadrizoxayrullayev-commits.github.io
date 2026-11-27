(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ls="160",Ui={ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pl=0,Qs=1,Rl=2,Io=1,No=2,ti=3,mi=0,Te=1,qe=2,ui=0,nn=1,Js=2,tr=3,er=4,Ll=5,Ti=100,kl=101,Dl=102,ir=103,nr=104,Ul=200,Il=201,Nl=202,Ol=203,gs=204,vs=205,zl=206,Fl=207,Bl=208,ql=209,Hl=210,Gl=211,Vl=212,Wl=213,Xl=214,$l=0,jl=1,Yl=2,ua=3,Zl=4,Kl=5,Ql=6,Jl=7,Oo=0,tc=1,ec=2,pi=0,ic=1,nc=2,ac=3,sc=4,rc=5,oc=6,zo=300,sn=301,rn=302,ys=303,_s=304,_a=306,bs=1e3,He=1001,xs=1002,xe=1003,ar=1004,Pa=1005,Ue=1006,lc=1007,En=1008,fi=1009,cc=1010,dc=1011,ks=1012,Fo=1013,di=1014,hi=1015,An=1016,Bo=1017,qo=1018,Ai=1020,hc=1021,Ge=1023,uc=1024,pc=1025,wi=1026,on=1027,fc=1028,Ho=1029,mc=1030,Go=1031,Vo=1033,Ra=33776,La=33777,ka=33778,Da=33779,sr=35840,rr=35841,or=35842,lr=35843,Wo=36196,cr=37492,dr=37496,hr=37808,ur=37809,pr=37810,fr=37811,mr=37812,gr=37813,vr=37814,yr=37815,_r=37816,br=37817,xr=37818,Sr=37819,Mr=37820,Tr=37821,Ua=36492,Er=36494,Ar=36495,gc=36283,wr=36284,Cr=36285,Pr=36286,Xo=3e3,Ci=3001,vc=3200,yc=3201,$o=0,_c=1,Oe="",fe="srgb",ni="srgb-linear",Ds="display-p3",ba="display-p3-linear",pa="linear",Kt="srgb",fa="rec709",ma="p3",Ni=7680,Rr=519,bc=512,xc=513,Sc=514,jo=515,Mc=516,Tc=517,Ec=518,Ac=519,Lr=35044,kr="300 es",Ss=1035,ii=2e3,ga=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_n=Math.PI/180,Ms=180/Math.PI;function cn(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[a&255]+ye[a>>8&255]+ye[a>>16&255]+ye[a>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function me(a,t,e){return Math.max(t,Math.min(e,a))}function wc(a,t){return(a%t+t)%t}function Ia(a,t,e){return(1-e)*a+e*t}function Dr(a){return(a&a-1)===0&&a!==0}function Ts(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function fn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Me(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Cc={DEG2RAD:_n};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,n,s,r,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,l,c)}set(t,e,i,n,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=n,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],p=i[2],m=i[5],g=i[8],v=n[0],u=n[3],f=n[6],A=n[1],_=n[4],S=n[7],O=n[2],P=n[5],C=n[8];return s[0]=r*v+o*A+l*O,s[3]=r*u+o*_+l*P,s[6]=r*f+o*S+l*C,s[1]=c*v+d*A+h*O,s[4]=c*u+d*_+h*P,s[7]=c*f+d*S+h*C,s[2]=p*v+m*A+g*O,s[5]=p*u+m*_+g*P,s[8]=p*f+m*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*r*d-e*o*c-i*s*d+i*o*l+n*s*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*r-o*c,p=o*l-d*s,m=c*s-r*l,g=e*h+i*p+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(n*c-d*i)*v,t[2]=(o*i-n*r)*v,t[3]=p*v,t[4]=(d*e-n*l)*v,t[5]=(n*s-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(r*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Wt;function Yo(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function va(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Pc(){const a=va("canvas");return a.style.display="block",a}const Ur={};function bn(a){a in Ur||(Ur[a]=!0,console.warn(a))}const Ir=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nr=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ni]:{transfer:pa,primaries:fa,toReference:a=>a,fromReference:a=>a},[fe]:{transfer:Kt,primaries:fa,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ba]:{transfer:pa,primaries:ma,toReference:a=>a.applyMatrix3(Nr),fromReference:a=>a.applyMatrix3(Ir)},[Ds]:{transfer:Kt,primaries:ma,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Nr),fromReference:a=>a.applyMatrix3(Ir).convertLinearToSRGB()}},Rc=new Set([ni,ba]),Zt={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Rc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return Dn[a].primaries},getTransfer:function(a){return a===Oe?pa:Dn[a].transfer}};function an(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Oa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Oi;class Zo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=va("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=va("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=an(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(an(e[i]/255)*255):e[i]=an(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lc=0;class Ko{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=cn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(za(n[r].image)):s.push(za(n[r]))}else s=za(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function za(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Zo.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kc=0;class Pe extends Di{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,i=He,n=He,s=Ue,r=En,o=Ge,l=fi,c=Pe.DEFAULT_ANISOTROPY,d=Oe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=cn(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ci?fe:Oe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bs:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case xs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bs:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case xs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Ci:Xo}set encoding(t){bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ci?fe:Oe}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=zo;Pe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,n=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],v=l[2],u=l[6],f=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-v)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+v)<.1&&Math.abs(g+u)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,S=(m+1)/2,O=(f+1)/2,P=(d+p)/4,C=(h+v)/4,X=(g+u)/4;return _>S&&_>O?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=P/i,s=C/i):S>O?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=P/n,s=X/n):O<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(O),i=C/s,n=X/s),this.set(i,n,s,e),this}let A=Math.sqrt((u-g)*(u-g)+(h-v)*(h-v)+(p-d)*(p-d));return Math.abs(A)<.001&&(A=1),this.x=(u-g)/A,this.y=(h-v)/A,this.z=(p-d)/A,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dc extends Di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(bn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ci?fe:Oe),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Dc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Qo extends Pe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xe,this.minFilter=xe,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends Pe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xe,this.minFilter=xe,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,o){let l=i[n+0],c=i[n+1],d=i[n+2],h=i[n+3];const p=s[r+0],m=s[r+1],g=s[r+2],v=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==p||c!==m||d!==g){let u=1-o;const f=l*p+c*m+d*g+h*v,A=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const O=Math.sqrt(_),P=Math.atan2(O,f*A);u=Math.sin(u*P)/O,o=Math.sin(o*P)/O}const S=o*A;if(l=l*u+p*S,c=c*u+m*S,d=d*u+g*S,h=h*u+v*S,u===1-o){const O=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=O,c*=O,d*=O,h*=O}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,s,r){const o=i[n],l=i[n+1],c=i[n+2],d=i[n+3],h=s[r],p=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+d*h+l*m-c*p,t[e+1]=l*g+d*p+c*h-o*m,t[e+2]=c*g+d*m+o*p-l*h,t[e+3]=d*g-o*h-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(n/2),h=o(s/2),p=l(i/2),m=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=p*d*h+c*m*g,this._y=c*m*h-p*d*g,this._z=c*d*g+p*m*h,this._w=c*d*h-p*m*g;break;case"YXZ":this._x=p*d*h+c*m*g,this._y=c*m*h-p*d*g,this._z=c*d*g-p*m*h,this._w=c*d*h+p*m*g;break;case"ZXY":this._x=p*d*h-c*m*g,this._y=c*m*h+p*d*g,this._z=c*d*g+p*m*h,this._w=c*d*h-p*m*g;break;case"ZYX":this._x=p*d*h-c*m*g,this._y=c*m*h+p*d*g,this._z=c*d*g-p*m*h,this._w=c*d*h+p*m*g;break;case"YZX":this._x=p*d*h+c*m*g,this._y=c*m*h+p*d*g,this._z=c*d*g-p*m*h,this._w=c*d*h-p*m*g;break;case"XZY":this._x=p*d*h-c*m*g,this._y=c*m*h-p*d*g,this._z=c*d*g+p*m*h,this._w=c*d*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],p=i+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(r-n)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(r-n)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+r*o+n*c-s*l,this._y=n*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-n*o,this._w=r*d-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=r*h+this._w*p,this._x=i*h+this._x*p,this._y=n*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Or.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Or.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),d=2*(o*e-s*n),h=2*(s*i-r*e);return this.x=e+l*c+r*h-o*d,this.y=i+l*d+o*c-s*h,this.z=n+l*h+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new z,Or=new Ri;class dn{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ze):ze.fromBufferAttribute(s,r),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Un.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Un.copy(i.boundingBox)),Un.applyMatrix4(t.matrixWorld),this.union(Un)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mn),In.subVectors(this.max,mn),zi.subVectors(t.a,mn),Fi.subVectors(t.b,mn),Bi.subVectors(t.c,mn),ai.subVectors(Fi,zi),si.subVectors(Bi,Fi),yi.subVectors(zi,Bi);let e=[0,-ai.z,ai.y,0,-si.z,si.y,0,-yi.z,yi.y,ai.z,0,-ai.x,si.z,0,-si.x,yi.z,0,-yi.x,-ai.y,ai.x,0,-si.y,si.x,0,-yi.y,yi.x,0];return!Ba(e,zi,Fi,Bi,In)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,zi,Fi,Bi,In))?!1:(Nn.crossVectors(ai,si),e=[Nn.x,Nn.y,Nn.z],Ba(e,zi,Fi,Bi,In))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new z,new z,new z,new z,new z,new z,new z,new z],ze=new z,Un=new dn,zi=new z,Fi=new z,Bi=new z,ai=new z,si=new z,yi=new z,mn=new z,In=new z,Nn=new z,_i=new z;function Ba(a,t,e,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){_i.fromArray(a,s);const o=n.x*Math.abs(_i.x)+n.y*Math.abs(_i.y)+n.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),d=i.dot(_i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ic=new dn,gn=new z,qa=new z;class xa{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ic.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gn.subVectors(t,this.center);const e=gn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(gn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gn.copy(t.center).add(qa)),this.expandByPoint(gn.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new z,Ha=new z,On=new z,ri=new z,Ga=new z,zn=new z,Va=new z;class Us{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.origin).addScaledVector(this.direction,e),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ha.copy(t).add(e).multiplyScalar(.5),On.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ha);const s=t.distanceTo(e)*.5,r=-this.direction.dot(On),o=ri.dot(this.direction),l=-ri.dot(On),c=ri.lengthSq(),d=Math.abs(1-r*r);let h,p,m,g;if(d>0)if(h=r*l-o,p=r*o-l,g=s*d,h>=0)if(p>=-g)if(p<=g){const v=1/d;h*=v,p*=v,m=h*(h+r*p+2*o)+p*(r*h+p+2*l)+c}else p=s,h=Math.max(0,-(r*p+o)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(r*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-r*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(r*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=r>0?-s:s,h=Math.max(0,-(r*p+o)),m=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ha).addScaledVector(On,p),m}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const i=Ye.dot(this.direction),n=Ye.dot(Ye)-i*i,s=t.radius*t.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,n=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,n=(t.min.x-p.x)*c),d>=0?(s=(t.min.y-p.y)*d,r=(t.max.y-p.y)*d):(s=(t.max.y-p.y)*d,r=(t.min.y-p.y)*d),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,i,n,s){Ga.subVectors(e,t),zn.subVectors(i,t),Va.crossVectors(Ga,zn);let r=this.direction.dot(Va),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ri.subVectors(this.origin,t);const l=o*this.direction.dot(zn.crossVectors(ri,zn));if(l<0)return null;const c=o*this.direction.dot(Ga.cross(ri));if(c<0||l+c>r)return null;const d=-o*ri.dot(Va);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,n,s,r,o,l,c,d,h,p,m,g,v,u){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,l,c,d,h,p,m,g,v,u)}set(t,e,i,n,s,r,o,l,c,d,h,p,m,g,v,u){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=p,f[3]=m,f[7]=g,f[11]=v,f[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/qi.setFromMatrixColumn(t,0).length(),s=1/qi.setFromMatrixColumn(t,1).length(),r=1/qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=r*d,m=r*h,g=o*d,v=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=p-v*c,e[9]=-o*l,e[2]=v-p*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const p=l*d,m=l*h,g=c*d,v=c*h;e[0]=p+v*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*h,e[5]=r*d,e[9]=-o,e[2]=m*o-g,e[6]=v+p*o,e[10]=r*l}else if(t.order==="ZXY"){const p=l*d,m=l*h,g=c*d,v=c*h;e[0]=p-v*o,e[4]=-r*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*d,e[9]=v-p*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const p=r*d,m=r*h,g=o*d,v=o*h;e[0]=l*d,e[4]=g*c-m,e[8]=p*c+v,e[1]=l*h,e[5]=v*c+p,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const p=r*l,m=r*c,g=o*l,v=o*c;e[0]=l*d,e[4]=v-p*h,e[8]=g*h+m,e[1]=h,e[5]=r*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+g,e[10]=p-v*h}else if(t.order==="XZY"){const p=r*l,m=r*c,g=o*l,v=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=p*h+v,e[5]=r*d,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*d,e[10]=v*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nc,t,Oc)}lookAt(t,e,i){const n=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),oi.crossVectors(i,Ae),oi.lengthSq()===0&&(Math.abs(i.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),oi.crossVectors(i,Ae)),oi.normalize(),Fn.crossVectors(Ae,oi),n[0]=oi.x,n[4]=Fn.x,n[8]=Ae.x,n[1]=oi.y,n[5]=Fn.y,n[9]=Ae.y,n[2]=oi.z,n[6]=Fn.z,n[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],p=i[9],m=i[13],g=i[2],v=i[6],u=i[10],f=i[14],A=i[3],_=i[7],S=i[11],O=i[15],P=n[0],C=n[4],X=n[8],b=n[12],M=n[1],F=n[5],V=n[9],at=n[13],U=n[2],q=n[6],N=n[10],W=n[14],K=n[3],it=n[7],w=n[11],E=n[15];return s[0]=r*P+o*M+l*U+c*K,s[4]=r*C+o*F+l*q+c*it,s[8]=r*X+o*V+l*N+c*w,s[12]=r*b+o*at+l*W+c*E,s[1]=d*P+h*M+p*U+m*K,s[5]=d*C+h*F+p*q+m*it,s[9]=d*X+h*V+p*N+m*w,s[13]=d*b+h*at+p*W+m*E,s[2]=g*P+v*M+u*U+f*K,s[6]=g*C+v*F+u*q+f*it,s[10]=g*X+v*V+u*N+f*w,s[14]=g*b+v*at+u*W+f*E,s[3]=A*P+_*M+S*U+O*K,s[7]=A*C+_*F+S*q+O*it,s[11]=A*X+_*V+S*N+O*w,s[15]=A*b+_*at+S*W+O*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],p=t[10],m=t[14],g=t[3],v=t[7],u=t[11],f=t[15];return g*(+s*l*h-n*c*h-s*o*p+i*c*p+n*o*m-i*l*m)+v*(+e*l*m-e*c*p+s*r*p-n*r*m+n*c*d-s*l*d)+u*(+e*c*h-e*o*m-s*r*h+i*r*m+s*o*d-i*c*d)+f*(-n*o*d-e*l*h+e*o*p+n*r*h-i*r*p+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],p=t[10],m=t[11],g=t[12],v=t[13],u=t[14],f=t[15],A=h*u*c-v*p*c+v*l*m-o*u*m-h*l*f+o*p*f,_=g*p*c-d*u*c-g*l*m+r*u*m+d*l*f-r*p*f,S=d*v*c-g*h*c+g*o*m-r*v*m-d*o*f+r*h*f,O=g*h*l-d*v*l-g*o*p+r*v*p+d*o*u-r*h*u,P=e*A+i*_+n*S+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=A*C,t[1]=(v*p*s-h*u*s-v*n*m+i*u*m+h*n*f-i*p*f)*C,t[2]=(o*u*s-v*l*s+v*n*c-i*u*c-o*n*f+i*l*f)*C,t[3]=(h*l*s-o*p*s-h*n*c+i*p*c+o*n*m-i*l*m)*C,t[4]=_*C,t[5]=(d*u*s-g*p*s+g*n*m-e*u*m-d*n*f+e*p*f)*C,t[6]=(g*l*s-r*u*s-g*n*c+e*u*c+r*n*f-e*l*f)*C,t[7]=(r*p*s-d*l*s+d*n*c-e*p*c-r*n*m+e*l*m)*C,t[8]=S*C,t[9]=(g*h*s-d*v*s-g*i*m+e*v*m+d*i*f-e*h*f)*C,t[10]=(r*v*s-g*o*s+g*i*c-e*v*c-r*i*f+e*o*f)*C,t[11]=(d*o*s-r*h*s-d*i*c+e*h*c+r*i*m-e*o*m)*C,t[12]=O*C,t[13]=(d*v*n-g*h*n+g*i*p-e*v*p-d*i*u+e*h*u)*C,t[14]=(g*o*n-r*v*n-g*i*l+e*v*l+r*i*u-e*o*u)*C,t[15]=(r*h*n-d*o*n+d*i*l-e*h*l-r*i*p+e*o*p)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,d*o+i,d*l-n*r,0,c*l-n*o,d*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,d=r+r,h=o+o,p=s*c,m=s*d,g=s*h,v=r*d,u=r*h,f=o*h,A=l*c,_=l*d,S=l*h,O=i.x,P=i.y,C=i.z;return n[0]=(1-(v+f))*O,n[1]=(m+S)*O,n[2]=(g-_)*O,n[3]=0,n[4]=(m-S)*P,n[5]=(1-(p+f))*P,n[6]=(u+A)*P,n[7]=0,n[8]=(g+_)*C,n[9]=(u-A)*C,n[10]=(1-(p+v))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=qi.set(n[0],n[1],n[2]).length();const r=qi.set(n[4],n[5],n[6]).length(),o=qi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Fe.copy(this);const c=1/s,d=1/r,h=1/o;return Fe.elements[0]*=c,Fe.elements[1]*=c,Fe.elements[2]*=c,Fe.elements[4]*=d,Fe.elements[5]*=d,Fe.elements[6]*=d,Fe.elements[8]*=h,Fe.elements[9]*=h,Fe.elements[10]*=h,e.setFromRotationMatrix(Fe),i.x=s,i.y=r,i.z=o,this}makePerspective(t,e,i,n,s,r,o=ii){const l=this.elements,c=2*s/(e-t),d=2*s/(i-n),h=(e+t)/(e-t),p=(i+n)/(i-n);let m,g;if(o===ii)m=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===ga)m=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,r,o=ii){const l=this.elements,c=1/(e-t),d=1/(i-n),h=1/(r-s),p=(e+t)*c,m=(i+n)*d;let g,v;if(o===ii)g=(r+s)*h,v=-2*h;else if(o===ga)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const qi=new z,Fe=new se,Nc=new z(0,0,0),Oc=new z(1,1,1),oi=new z,Fn=new z,Ae=new z,zr=new se,Fr=new Ri;class Sa{constructor(t=0,e=0,i=0,n=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],r=n[4],o=n[8],l=n[1],c=n[5],d=n[9],h=n[2],p=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fr.setFromEuler(this),this.setFromQuaternion(Fr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zc=0;const Br=new z,Hi=new Ri,Ze=new se,Bn=new z,vn=new z,Fc=new z,Bc=new Ri,qr=new z(1,0,0),Hr=new z(0,1,0),Gr=new z(0,0,1),qc={type:"added"},Hc={type:"removed"};class ge extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new z,e=new Sa,i=new Ri,n=new z(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new se},normalMatrix:{value:new Wt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(qr,t)}rotateY(t){return this.rotateOnAxis(Hr,t)}rotateZ(t){return this.rotateOnAxis(Gr,t)}translateOnAxis(t,e){return Br.copy(t).applyQuaternion(this.quaternion),this.position.add(Br.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qr,t)}translateY(t){return this.translateOnAxis(Hr,t)}translateZ(t){return this.translateOnAxis(Gr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Bn.copy(t):Bn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(vn,Bn,this.up):Ze.lookAt(Bn,vn,this.up),this.quaternion.setFromRotationMatrix(Ze),n&&(Ze.extractRotation(n.matrixWorld),Hi.setFromRotationMatrix(Ze),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,t,Fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,Bc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),p=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ge.DEFAULT_UP=new z(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Be=new z,Ke=new z,Wa=new z,Qe=new z,Gi=new z,Vi=new z,Vr=new z,Xa=new z,$a=new z,ja=new z;let qn=!1;class Ie{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Be.subVectors(t,e),n.cross(Be);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Be.subVectors(n,e),Ke.subVectors(i,e),Wa.subVectors(t,e);const r=Be.dot(Be),o=Be.dot(Ke),l=Be.dot(Wa),c=Ke.dot(Ke),d=Ke.dot(Wa),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(c*l-o*d)*p,g=(r*d-o*l)*p;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Qe)===null?!1:Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getUV(t,e,i,n,s,r,o,l){return qn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qn=!0),this.getInterpolation(t,e,i,n,s,r,o,l)}static getInterpolation(t,e,i,n,s,r,o,l){return this.getBarycoord(t,e,i,n,Qe)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qe.x),l.addScaledVector(r,Qe.y),l.addScaledVector(o,Qe.z),l)}static isFrontFacing(t,e,i,n){return Be.subVectors(i,e),Ke.subVectors(t,e),Be.cross(Ke).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),Be.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return qn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qn=!0),Ie.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return Ie.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let r,o;Gi.subVectors(n,i),Vi.subVectors(s,i),Xa.subVectors(t,i);const l=Gi.dot(Xa),c=Vi.dot(Xa);if(l<=0&&c<=0)return e.copy(i);$a.subVectors(t,n);const d=Gi.dot($a),h=Vi.dot($a);if(d>=0&&h<=d)return e.copy(n);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return r=l/(l-d),e.copy(i).addScaledVector(Gi,r);ja.subVectors(t,s);const m=Gi.dot(ja),g=Vi.dot(ja);if(g>=0&&m<=g)return e.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Vi,o);const u=d*g-m*h;if(u<=0&&h-d>=0&&m-g>=0)return Vr.subVectors(s,n),o=(h-d)/(h-d+(m-g)),e.copy(n).addScaledVector(Vr,o);const f=1/(u+v+p);return r=v*f,o=p*f,e.copy(i).addScaledVector(Gi,r).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function Ya(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Zt.workingColorSpace){if(t=wc(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Ya(r,s,t+1/3),this.g=Ya(r,s,t),this.b=Ya(r,s,t-1/3)}return Zt.toWorkingColorSpace(this,n),this}setStyle(t,e=fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const i=tl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Zt.fromWorkingColorSpace(_e.copy(this),t),Math.round(me(_e.r*255,0,255))*65536+Math.round(me(_e.g*255,0,255))*256+Math.round(me(_e.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(_e.copy(this),e);const i=_e.r,n=_e.g,s=_e.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=fe){Zt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,i=_e.g,n=_e.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Hn);const i=Ia(li.h,Hn.h,e),n=Ia(li.s,Hn.s,e),s=Ia(li.l,Hn.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Xt;Xt.NAMES=tl;let Gc=0;class hn extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=nn,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=vs,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nn&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gs&&(i.blendSrc=this.blendSrc),this.blendDst!==vs&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ya extends hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new z,Gn=new yt;class Re{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gn.fromBufferAttribute(this,e),Gn.applyMatrix3(t),this.setXY(e,Gn.x,Gn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lr&&(t.usage=this.usage),t}}class el extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class il extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Vc=0;const ke=new se,Za=new ge,Wi=new z,we=new dn,yn=new dn,he=new z;class Se extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yo(t)?il:el)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,i){return ke.makeTranslation(t,e,i),this.applyMatrix4(ke),this}scale(t,e,i){return ke.makeScale(t,e,i),this.applyMatrix4(ke),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];we.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(we.min,yn.min),we.expandByPoint(he),he.addVectors(we.max,yn.max),we.expandByPoint(he)):(we.expandByPoint(yn.min),we.expandByPoint(yn.max))}we.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)he.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(he));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)he.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),he.add(Wi)),n=Math.max(n,i.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,r=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let M=0;M<o;M++)c[M]=new z,d[M]=new z;const h=new z,p=new z,m=new z,g=new yt,v=new yt,u=new yt,f=new z,A=new z;function _(M,F,V){h.fromArray(n,M*3),p.fromArray(n,F*3),m.fromArray(n,V*3),g.fromArray(r,M*2),v.fromArray(r,F*2),u.fromArray(r,V*2),p.sub(h),m.sub(h),v.sub(g),u.sub(g);const at=1/(v.x*u.y-u.x*v.y);isFinite(at)&&(f.copy(p).multiplyScalar(u.y).addScaledVector(m,-v.y).multiplyScalar(at),A.copy(m).multiplyScalar(v.x).addScaledVector(p,-u.x).multiplyScalar(at),c[M].add(f),c[F].add(f),c[V].add(f),d[M].add(A),d[F].add(A),d[V].add(A))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let M=0,F=S.length;M<F;++M){const V=S[M],at=V.start,U=V.count;for(let q=at,N=at+U;q<N;q+=3)_(i[q+0],i[q+1],i[q+2])}const O=new z,P=new z,C=new z,X=new z;function b(M){C.fromArray(s,M*3),X.copy(C);const F=c[M];O.copy(F),O.sub(C.multiplyScalar(C.dot(F))).normalize(),P.crossVectors(X,F);const at=P.dot(d[M])<0?-1:1;l[M*4]=O.x,l[M*4+1]=O.y,l[M*4+2]=O.z,l[M*4+3]=at}for(let M=0,F=S.length;M<F;++M){const V=S[M],at=V.start,U=V.count;for(let q=at,N=at+U;q<N;q+=3)b(i[q+0]),b(i[q+1]),b(i[q+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new z,s=new z,r=new z,o=new z,l=new z,c=new z,d=new z,h=new z;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),v=t.getX(p+1),u=t.getX(p+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,u),d.subVectors(r,s),h.subVectors(n,s),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,u),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)n.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),d.subVectors(r,s),h.subVectors(n,s),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,u=l.length;v<u;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let f=0;f<d;f++)p[g++]=c[m++]}return new Re(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],m=t(p,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(n[l]=d,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wr=new se,bi=new Us,Vn=new xa,Xr=new z,Xi=new z,$i=new z,ji=new z,Ka=new z,Wn=new z,Xn=new yt,$n=new yt,jn=new yt,$r=new z,jr=new z,Yr=new z,Yn=new z,Zn=new z;class ue extends ge{constructor(t=new Se,e=new ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Wn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Ka.fromBufferAttribute(h,t),r?Wn.addScaledVector(Ka,d):Wn.addScaledVector(Ka.sub(e),d))}e.add(Wn)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vn.copy(i.boundingSphere),Vn.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Vn.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Vn,Xr)===null||bi.origin.distanceToSquared(Xr)>(t.far-t.near)**2))&&(Wr.copy(s).invert(),bi.copy(t.ray).applyMatrix4(Wr),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let n;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const u=p[g],f=r[u.materialIndex],A=Math.max(u.start,m.start),_=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let S=A,O=_;S<O;S+=3){const P=o.getX(S),C=o.getX(S+1),X=o.getX(S+2);n=Kn(this,f,t,i,c,d,h,P,C,X),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=u.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let u=g,f=v;u<f;u+=3){const A=o.getX(u),_=o.getX(u+1),S=o.getX(u+2);n=Kn(this,r,t,i,c,d,h,A,_,S),n&&(n.faceIndex=Math.floor(u/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const u=p[g],f=r[u.materialIndex],A=Math.max(u.start,m.start),_=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let S=A,O=_;S<O;S+=3){const P=S,C=S+1,X=S+2;n=Kn(this,f,t,i,c,d,h,P,C,X),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=u.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let u=g,f=v;u<f;u+=3){const A=u,_=u+1,S=u+2;n=Kn(this,r,t,i,c,d,h,A,_,S),n&&(n.faceIndex=Math.floor(u/3),e.push(n))}}}}function Wc(a,t,e,i,n,s,r,o){let l;if(t.side===Te?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,t.side===mi,o),l===null)return null;Zn.copy(o),Zn.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Zn);return c<e.near||c>e.far?null:{distance:c,point:Zn.clone(),object:a}}function Kn(a,t,e,i,n,s,r,o,l,c){a.getVertexPosition(o,Xi),a.getVertexPosition(l,$i),a.getVertexPosition(c,ji);const d=Wc(a,t,e,i,Xi,$i,ji,Yn);if(d){n&&(Xn.fromBufferAttribute(n,o),$n.fromBufferAttribute(n,l),jn.fromBufferAttribute(n,c),d.uv=Ie.getInterpolation(Yn,Xi,$i,ji,Xn,$n,jn,new yt)),s&&(Xn.fromBufferAttribute(s,o),$n.fromBufferAttribute(s,l),jn.fromBufferAttribute(s,c),d.uv1=Ie.getInterpolation(Yn,Xi,$i,ji,Xn,$n,jn,new yt),d.uv2=d.uv1),r&&($r.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),Yr.fromBufferAttribute(r,c),d.normal=Ie.getInterpolation(Yn,Xi,$i,ji,$r,jr,Yr,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};Ie.getNormal(Xi,$i,ji,h.normal),d.face=h}return d}class De extends Se{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,i,e,t,r,s,0),g("z","y","x",1,-1,i,e,-t,r,s,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(h,2));function g(v,u,f,A,_,S,O,P,C,X,b){const M=S/C,F=O/X,V=S/2,at=O/2,U=P/2,q=C+1,N=X+1;let W=0,K=0;const it=new z;for(let w=0;w<N;w++){const E=w*F-at;for(let $=0;$<q;$++){const k=$*M-V;it[v]=k*A,it[u]=E*_,it[f]=U,c.push(it.x,it.y,it.z),it[v]=0,it[u]=0,it[f]=P>0?1:-1,d.push(it.x,it.y,it.z),h.push($/C),h.push(1-w/X),W+=1}}for(let w=0;w<X;w++)for(let E=0;E<C;E++){const $=p+E+q*w,k=p+E+q*(w+1),D=p+(E+1)+q*(w+1),j=p+(E+1)+q*w;l.push($,k,j),l.push(k,D,j),K+=6}o.addGroup(m,K,b),m+=K,p+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ln(a){const t={};for(const e in a){t[e]={};for(const i in a[e]){const n=a[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function be(a){const t={};for(let e=0;e<a.length;e++){const i=ln(a[e]);for(const n in i)t[n]=i[n]}return t}function Xc(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function nl(a){return a.getRenderTarget()===null?a.outputColorSpace:Zt.workingColorSpace}const $c={clone:ln,merge:be};var jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jc,this.fragmentShader=Yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ln(t.uniforms),this.uniformsGroups=Xc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class al extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ne extends al{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_n*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(_n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_n*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,Zi=1;class Zc extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ne(Yi,Zi,t,e);n.layers=this.layers,this.add(n);const s=new Ne(Yi,Zi,t,e);s.layers=this.layers,this.add(s);const r=new Ne(Yi,Zi,t,e);r.layers=this.layers,this.add(r);const o=new Ne(Yi,Zi,t,e);o.layers=this.layers,this.add(o);const l=new Ne(Yi,Zi,t,e);l.layers=this.layers,this.add(l);const c=new Ne(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,o,l]=e;for(const c of e)this.remove(c);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,d),t.setRenderTarget(h,p,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sl extends Pe{constructor(t,e,i,n,s,r,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:sn,super(t,e,i,n,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kc extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(bn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ci?fe:Oe),this.texture=new sl(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new De(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:ln(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Te,blending:ui});s.uniforms.tEquirect.value=e;const r=new ue(n,s),o=e.minFilter;return e.minFilter===En&&(e.minFilter=Ue),new Zc(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}}const Qa=new z,Qc=new z,Jc=new Wt;class ei{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Qa.subVectors(i,e).cross(Qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Qa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Jc.getNormalMatrix(t),n=this.coplanarPoint(Qa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new xa,Qn=new z;class Is{constructor(t=new ei,e=new ei,i=new ei,n=new ei,s=new ei,r=new ei){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii){const i=this.planes,n=t.elements,s=n[0],r=n[1],o=n[2],l=n[3],c=n[4],d=n[5],h=n[6],p=n[7],m=n[8],g=n[9],v=n[10],u=n[11],f=n[12],A=n[13],_=n[14],S=n[15];if(i[0].setComponents(l-s,p-c,u-m,S-f).normalize(),i[1].setComponents(l+s,p+c,u+m,S+f).normalize(),i[2].setComponents(l+r,p+d,u+g,S+A).normalize(),i[3].setComponents(l-r,p-d,u-g,S-A).normalize(),i[4].setComponents(l-o,p-h,u-v,S-_).normalize(),e===ii)i[5].setComponents(l+o,p+h,u+v,S+_).normalize();else if(e===ga)i[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Qn.x=n.normal.x>0?t.max.x:t.min.x,Qn.y=n.normal.y>0?t.max.y:t.min.y,Qn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Qn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rl(){let a=null,t=!1,e=null,i=null;function n(s,r){e(s,r),i=a.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=a.requestAnimationFrame(n),t=!0)},stop:function(){a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function td(a,t){const e=t.isWebGL2,i=new WeakMap;function n(c,d){const h=c.array,p=c.usage,m=h.byteLength,g=a.createBuffer();a.bindBuffer(d,g),a.bufferData(d,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=a.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=a.SHORT;else if(h instanceof Uint32Array)v=a.UNSIGNED_INT;else if(h instanceof Int32Array)v=a.INT;else if(h instanceof Int8Array)v=a.BYTE;else if(h instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const p=d.array,m=d._updateRange,g=d.updateRanges;if(a.bindBuffer(h,c),m.count===-1&&g.length===0&&a.bufferSubData(h,0,p),g.length!==0){for(let v=0,u=g.length;v<u;v++){const f=g[v];e?a.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):a.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}d.clearUpdateRanges()}m.count!==-1&&(e?a.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):a.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(a.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,n(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:r,remove:o,update:l}}class Ns extends Se{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,d=l+1,h=t/o,p=e/l,m=[],g=[],v=[],u=[];for(let f=0;f<d;f++){const A=f*p-r;for(let _=0;_<c;_++){const S=_*h-s;g.push(S,-A,0),v.push(0,0,1),u.push(_/o),u.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const _=A+c*f,S=A+c*(f+1),O=A+1+c*(f+1),P=A+1+c*f;m.push(_,S,P),m.push(S,O,P)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.widthSegments,t.heightSegments)}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Td=`#define PI 3.141592653589793
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
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ad=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`
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
}`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
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
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,th=`struct PhysicalMaterial {
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
}`,eh=`
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
#endif`,ih=`#if defined( RE_IndirectDiffuse )
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
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hh=`#if defined( USE_POINTS_UV )
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
#endif`,uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ph=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
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
#endif`,gh=`#ifdef USE_MORPHTARGETS
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
#endif`,vh=`#ifdef USE_MORPHTARGETS
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
#endif`,yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_h=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mh=`#ifdef USE_NORMALMAP
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
#endif`,Th=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ah=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ch=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ph=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ih=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fh=`float getShadowMask() {
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
}`,Bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qh=`#ifdef USE_SKINNING
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
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gh=`#ifdef USE_SKINNING
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
#endif`,Vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jh=`#ifdef USE_TRANSMISSION
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
#endif`,Yh=`#ifdef USE_TRANSMISSION
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
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eu=`uniform sampler2D t2D;
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
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ru=`#include <common>
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
}`,ou=`#if DEPTH_PACKING == 3200
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
}`,lu=`#define DISTANCE
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
}`,cu=`#define DISTANCE
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`uniform float scale;
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
}`,pu=`uniform vec3 diffuse;
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
}`,fu=`#include <common>
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
}`,mu=`uniform vec3 diffuse;
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
}`,gu=`#define LAMBERT
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
}`,vu=`#define LAMBERT
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
}`,yu=`#define MATCAP
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
}`,_u=`#define MATCAP
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
}`,bu=`#define NORMAL
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
}`,xu=`#define NORMAL
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
}`,Su=`#define PHONG
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
}`,Mu=`#define PHONG
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
}`,Tu=`#define STANDARD
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
}`,Eu=`#define STANDARD
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
}`,Au=`#define TOON
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
}`,wu=`#define TOON
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
}`,Cu=`uniform float size;
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
}`,Pu=`uniform vec3 diffuse;
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
}`,Ru=`#include <common>
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
}`,Lu=`uniform vec3 color;
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
}`,ku=`uniform float rotation;
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
}`,Du=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:ed,alphahash_pars_fragment:id,alphamap_fragment:nd,alphamap_pars_fragment:ad,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:dd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:pd,iridescence_fragment:fd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:vd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:_d,color_fragment:bd,color_pars_fragment:xd,color_pars_vertex:Sd,color_vertex:Md,common:Td,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Ad,displacementmap_pars_vertex:wd,displacementmap_vertex:Cd,emissivemap_fragment:Pd,emissivemap_pars_fragment:Rd,colorspace_fragment:Ld,colorspace_pars_fragment:kd,envmap_fragment:Dd,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Id,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:jd,envmap_vertex:Od,fog_vertex:zd,fog_pars_vertex:Fd,fog_fragment:Bd,fog_pars_fragment:qd,gradientmap_pars_fragment:Hd,lightmap_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:$d,lights_toon_fragment:Yd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Qd,lights_physical_fragment:Jd,lights_physical_pars_fragment:th,lights_fragment_begin:eh,lights_fragment_maps:ih,lights_fragment_end:nh,logdepthbuf_fragment:ah,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:rh,logdepthbuf_vertex:oh,map_fragment:lh,map_pars_fragment:ch,map_particle_fragment:dh,map_particle_pars_fragment:hh,metalnessmap_fragment:uh,metalnessmap_pars_fragment:ph,morphcolor_vertex:fh,morphnormal_vertex:mh,morphtarget_pars_vertex:gh,morphtarget_vertex:vh,normal_fragment_begin:yh,normal_fragment_maps:_h,normal_pars_fragment:bh,normal_pars_vertex:xh,normal_vertex:Sh,normalmap_pars_fragment:Mh,clearcoat_normal_fragment_begin:Th,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:Ah,iridescence_pars_fragment:wh,opaque_fragment:Ch,packing:Ph,premultiplied_alpha_fragment:Rh,project_vertex:Lh,dithering_fragment:kh,dithering_pars_fragment:Dh,roughnessmap_fragment:Uh,roughnessmap_pars_fragment:Ih,shadowmap_pars_fragment:Nh,shadowmap_pars_vertex:Oh,shadowmap_vertex:zh,shadowmask_pars_fragment:Fh,skinbase_vertex:Bh,skinning_pars_vertex:qh,skinning_vertex:Hh,skinnormal_vertex:Gh,specularmap_fragment:Vh,specularmap_pars_fragment:Wh,tonemapping_fragment:Xh,tonemapping_pars_fragment:$h,transmission_fragment:jh,transmission_pars_fragment:Yh,uv_pars_fragment:Zh,uv_pars_vertex:Kh,uv_vertex:Qh,worldpos_vertex:Jh,background_vert:tu,background_frag:eu,backgroundCube_vert:iu,backgroundCube_frag:nu,cube_vert:au,cube_frag:su,depth_vert:ru,depth_frag:ou,distanceRGBA_vert:lu,distanceRGBA_frag:cu,equirect_vert:du,equirect_frag:hu,linedashed_vert:uu,linedashed_frag:pu,meshbasic_vert:fu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:vu,meshmatcap_vert:yu,meshmatcap_frag:_u,meshnormal_vert:bu,meshnormal_frag:xu,meshphong_vert:Su,meshphong_frag:Mu,meshphysical_vert:Tu,meshphysical_frag:Eu,meshtoon_vert:Au,meshtoon_frag:wu,points_vert:Cu,points_frag:Pu,shadow_vert:Ru,shadow_frag:Lu,sprite_vert:ku,sprite_frag:Du},bt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},We={basic:{uniforms:be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:be([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:be([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:be([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:be([bt.points,bt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:be([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:be([bt.common,bt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:be([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:be([bt.sprite,bt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:be([bt.common,bt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:be([bt.lights,bt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};We.physical={uniforms:be([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Jn={r:0,b:0,g:0};function Uu(a,t,e,i,n,s,r){const o=new Xt(0);let l=s===!0?0:1,c,d,h=null,p=0,m=null;function g(u,f){let A=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),A=!0);const S=a.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(a.autoClear||A)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_a)?(d===void 0&&(d=new ue(new De(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:ln(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=Zt.getTransfer(_.colorSpace)!==Kt,(h!==_||p!==_.version||m!==a.toneMapping)&&(d.material.needsUpdate=!0,h=_,p=_.version,m=a.toneMapping),d.layers.enableAll(),u.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ue(new Ns(2,2),new Li({name:"BackgroundMaterial",uniforms:ln(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==Kt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,m=a.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null))}function v(u,f){u.getRGB(Jn,nl(a)),i.buffers.color.setClear(Jn.r,Jn.g,Jn.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(u,f=1){o.set(u),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,v(o,l)},render:g}}function Iu(a,t,e,i){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=u(null);let c=l,d=!1;function h(U,q,N,W,K){let it=!1;if(r){const w=v(W,N,q);c!==w&&(c=w,m(c.object)),it=f(U,W,N,K),it&&A(U,W,N,K)}else{const w=q.wireframe===!0;(c.geometry!==W.id||c.program!==N.id||c.wireframe!==w)&&(c.geometry=W.id,c.program=N.id,c.wireframe=w,it=!0)}K!==null&&e.update(K,a.ELEMENT_ARRAY_BUFFER),(it||d)&&(d=!1,X(U,q,N,W),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function p(){return i.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?a.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?a.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function v(U,q,N){const W=N.wireframe===!0;let K=o[U.id];K===void 0&&(K={},o[U.id]=K);let it=K[q.id];it===void 0&&(it={},K[q.id]=it);let w=it[W];return w===void 0&&(w=u(p()),it[W]=w),w}function u(U){const q=[],N=[],W=[];for(let K=0;K<n;K++)q[K]=0,N[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:N,attributeDivisors:W,object:U,attributes:{},index:null}}function f(U,q,N,W){const K=c.attributes,it=q.attributes;let w=0;const E=N.getAttributes();for(const $ in E)if(E[$].location>=0){const D=K[$];let j=it[$];if(j===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),D===void 0||D.attribute!==j||j&&D.data!==j.data)return!0;w++}return c.attributesNum!==w||c.index!==W}function A(U,q,N,W){const K={},it=q.attributes;let w=0;const E=N.getAttributes();for(const $ in E)if(E[$].location>=0){let D=it[$];D===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(D=U.instanceColor));const j={};j.attribute=D,D&&D.data&&(j.data=D.data),K[$]=j,w++}c.attributes=K,c.attributesNum=w,c.index=W}function _(){const U=c.newAttributes;for(let q=0,N=U.length;q<N;q++)U[q]=0}function S(U){O(U,0)}function O(U,q){const N=c.newAttributes,W=c.enabledAttributes,K=c.attributeDivisors;N[U]=1,W[U]===0&&(a.enableVertexAttribArray(U),W[U]=1),K[U]!==q&&((i.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,q),K[U]=q)}function P(){const U=c.newAttributes,q=c.enabledAttributes;for(let N=0,W=q.length;N<W;N++)q[N]!==U[N]&&(a.disableVertexAttribArray(N),q[N]=0)}function C(U,q,N,W,K,it,w){w===!0?a.vertexAttribIPointer(U,q,N,K,it):a.vertexAttribPointer(U,q,N,W,K,it)}function X(U,q,N,W){if(i.isWebGL2===!1&&(U.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const K=W.attributes,it=N.getAttributes(),w=q.defaultAttributeValues;for(const E in it){const $=it[E];if($.location>=0){let k=K[E];if(k===void 0&&(E==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),E==="instanceColor"&&U.instanceColor&&(k=U.instanceColor)),k!==void 0){const D=k.normalized,j=k.itemSize,et=e.get(k);if(et===void 0)continue;const tt=et.buffer,st=et.type,mt=et.bytesPerElement,ht=i.isWebGL2===!0&&(st===a.INT||st===a.UNSIGNED_INT||k.gpuType===Fo);if(k.isInterleavedBufferAttribute){const _t=k.data,R=_t.stride,ct=k.offset;if(_t.isInstancedInterleavedBuffer){for(let G=0;G<$.locationSize;G++)O($.location+G,_t.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let G=0;G<$.locationSize;G++)S($.location+G);a.bindBuffer(a.ARRAY_BUFFER,tt);for(let G=0;G<$.locationSize;G++)C($.location+G,j/$.locationSize,st,D,R*mt,(ct+j/$.locationSize*G)*mt,ht)}else{if(k.isInstancedBufferAttribute){for(let _t=0;_t<$.locationSize;_t++)O($.location+_t,k.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let _t=0;_t<$.locationSize;_t++)S($.location+_t);a.bindBuffer(a.ARRAY_BUFFER,tt);for(let _t=0;_t<$.locationSize;_t++)C($.location+_t,j/$.locationSize,st,D,j*mt,j/$.locationSize*_t*mt,ht)}}else if(w!==void 0){const D=w[E];if(D!==void 0)switch(D.length){case 2:a.vertexAttrib2fv($.location,D);break;case 3:a.vertexAttrib3fv($.location,D);break;case 4:a.vertexAttrib4fv($.location,D);break;default:a.vertexAttrib1fv($.location,D)}}}}P()}function b(){V();for(const U in o){const q=o[U];for(const N in q){const W=q[N];for(const K in W)g(W[K].object),delete W[K];delete q[N]}delete o[U]}}function M(U){if(o[U.id]===void 0)return;const q=o[U.id];for(const N in q){const W=q[N];for(const K in W)g(W[K].object),delete W[K];delete q[N]}delete o[U.id]}function F(U){for(const q in o){const N=o[q];if(N[U.id]===void 0)continue;const W=N[U.id];for(const K in W)g(W[K].object),delete W[K];delete N[U.id]}}function V(){at(),d=!0,c!==l&&(c=l,m(c.object))}function at(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:at,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:S,disableUnusedAttributes:P}}function Nu(a,t,e,i){const n=i.isWebGL2;let s;function r(d){s=d}function o(d,h){a.drawArrays(s,d,h),e.update(h,s,1)}function l(d,h,p){if(p===0)return;let m,g;if(n)m=a,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,d,h,p),e.update(h,s,p)}function c(d,h,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(d[g],h[g]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v];e.update(g,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ou(a,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),u=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),f=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,S=r||t.has("OES_texture_float"),O=_&&S,P=r?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:u,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:O,maxSamples:P}}function zu(a){const t=this;let e=null,i=0,n=!1,s=!1;const r=new ei,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||n;return n=p,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=d(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,v=h.clipIntersection,u=h.clipShadows,f=a.get(h);if(!n||g===null||g.length===0||s&&!u)s?d(null):c();else{const A=s?0:i,_=A*4;let S=f.clippingState||null;l.value=S,S=d(g,p,_,m);for(let O=0;O!==_;++O)S[O]=e[O];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,p,m,g){const v=h!==null?h.length:0;let u=null;if(v!==0){if(u=l.value,g!==!0||u===null){const f=m+v*4,A=p.matrixWorldInverse;o.getNormalMatrix(A),(u===null||u.length<f)&&(u=new Float32Array(f));for(let _=0,S=m;_!==v;++_,S+=4)r.copy(h[_]).applyMatrix4(A,o),r.normal.toArray(u,S),u[S+3]=r.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,u}}function Fu(a){let t=new WeakMap;function e(r,o){return o===ys?r.mapping=sn:o===_s&&(r.mapping=rn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===ys||o===_s)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Kc(l.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ol extends al{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,Zr=[.125,.215,.35,.446,.526,.582],Ei=20,Ja=new ol,Kr=new Xt;let ts=null,es=0,is=0;const Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,Qr=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Mi,Ki),new z(0,Mi,-Ki),new z(Ki,0,Mi),new z(-Ki,0,Mi),new z(Mi,Ki,0),new z(-Mi,Ki,0)];class Jr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ts=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ts,es,is),t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sn||t.mapping===rn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ts=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:An,format:Ge,colorSpace:ni,depthBuffer:!1},n=to(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=to(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bu(s)),this._blurMaterial=qu(s,t,e)}return n}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,i,n){const o=new Ne(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Kr),d.toneMapping=pi,d.autoClear=!1;const m=new ya({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new ue(new De,m);let v=!1;const u=t.background;u?u.isColor&&(m.color.copy(u),t.background=null,v=!0):(m.color.copy(Kr),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):A===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;ta(n,A*_,f>2?_:0,_,_),d.setRenderTarget(n),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=u}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===sn||t.mapping===rn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eo());const s=n?this._cubemapMaterial:this._equirectMaterial,r=new ue(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ta(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Ja)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Qr[(n-1)%Qr.length];this._blur(t,n-1,n,s,r)}e.autoClear=i}_blur(t,e,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",s),this._halfBlur(r,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ue(this._lodPlanes[n],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),v=s/g,u=isFinite(s)?1+Math.floor(d*v):Ei;u>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Ei}`);const f=[];let A=0;for(let C=0;C<Ei;++C){const X=C/v,b=Math.exp(-X*X/2);f.push(b),C===0?A+=b:C<u&&(A+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/A;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=f,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-i;const S=this._sizeLods[n],O=3*S*(n>_-Qi?n-_+Qi:0),P=4*(this._cubeSize-S);ta(e,O,P,3*S,2*S),l.setRenderTarget(e),l.render(h,Ja)}}function Bu(a){const t=[],e=[],i=[];let n=a;const s=a-Qi+1+Zr.length;for(let r=0;r<s;r++){const o=Math.pow(2,n);e.push(o);let l=1/o;r>a-Qi?l=Zr[r-a+Qi-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,v=3,u=2,f=1,A=new Float32Array(v*g*m),_=new Float32Array(u*g*m),S=new Float32Array(f*g*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,X=P>2?0:-1,b=[C,X,0,C+2/3,X,0,C+2/3,X+1,0,C,X,0,C+2/3,X+1,0,C,X+1,0];A.set(b,v*g*P),_.set(p,u*g*P);const M=[P,P,P,P,P,P];S.set(M,f*g*P)}const O=new Se;O.setAttribute("position",new Re(A,v)),O.setAttribute("uv",new Re(_,u)),O.setAttribute("faceIndex",new Re(S,f)),t.push(O),n>Qi&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function to(a,t,e){const i=new Pi(a,t,e);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(a,t,e,i,n){a.viewport.set(t,e,i,n),a.scissor.set(t,e,i,n)}function qu(a,t,e){const i=new Float32Array(Ei),n=new z(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Os(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function eo(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function io(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Os(){return`

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
	`}function Hu(a){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ys||l===_s,d=l===sn||l===rn;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Jr(a)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&n(h)){e===null&&(e=new Jr(a));const p=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Gu(a){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Vu(a,t,e,i){const n={},s=new WeakMap;function r(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let u=0,f=v.length;u<f;u++)t.remove(v[u])}p.removeEventListener("dispose",r),delete n[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return n[p.id]===!0||(p.addEventListener("dispose",r),n[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)t.update(p[g],a.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let u=0,f=v.length;u<f;u++)t.update(v[u],a.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let _=0,S=A.length;_<S;_+=3){const O=A[_+0],P=A[_+1],C=A[_+2];p.push(O,P,P,C,C,O)}}else if(g!==void 0){const A=g.array;v=g.version;for(let _=0,S=A.length/3-1;_<S;_+=3){const O=_+0,P=_+1,C=_+2;p.push(O,P,P,C,C,O)}}else return;const u=new(Yo(p)?il:el)(p,1);u.version=v;const f=s.get(h);f&&t.remove(f),s.set(h,u)}function d(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Wu(a,t,e,i){const n=i.isWebGL2;let s;function r(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,g){a.drawElements(s,g,o,m*l),e.update(g,s,1)}function h(m,g,v){if(v===0)return;let u,f;if(n)u=a,f="drawElementsInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,g,o,m*l,v),e.update(g,s,v)}function p(m,g,v){if(v===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<v;f++)this.render(m[f]/l,g[f]);else{u.multiDrawElementsWEBGL(s,g,0,o,m,0,v);let f=0;for(let A=0;A<v;A++)f+=g[A];e.update(f,s,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function Xu(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function $u(a,t){return a[0]-t[0]}function ju(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Yu(a,t,e){const i={},n=new Float32Array(8),s=new WeakMap,r=new pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let u=s.get(d);if(u===void 0||u.count!==v){let q=function(){at.dispose(),s.delete(d),d.removeEventListener("dispose",q)};var m=q;u!==void 0&&u.texture.dispose();const _=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,O=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],X=d.morphAttributes.color||[];let b=0;_===!0&&(b=1),S===!0&&(b=2),O===!0&&(b=3);let M=d.attributes.position.count*b,F=1;M>t.maxTextureSize&&(F=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const V=new Float32Array(M*F*4*v),at=new Qo(V,M,F,v);at.type=hi,at.needsUpdate=!0;const U=b*4;for(let N=0;N<v;N++){const W=P[N],K=C[N],it=X[N],w=M*F*4*N;for(let E=0;E<W.count;E++){const $=E*U;_===!0&&(r.fromBufferAttribute(W,E),V[w+$+0]=r.x,V[w+$+1]=r.y,V[w+$+2]=r.z,V[w+$+3]=0),S===!0&&(r.fromBufferAttribute(K,E),V[w+$+4]=r.x,V[w+$+5]=r.y,V[w+$+6]=r.z,V[w+$+7]=0),O===!0&&(r.fromBufferAttribute(it,E),V[w+$+8]=r.x,V[w+$+9]=r.y,V[w+$+10]=r.z,V[w+$+11]=it.itemSize===4?r.w:1)}}u={count:v,texture:at,size:new yt(M,F)},s.set(d,u),d.addEventListener("dispose",q)}let f=0;for(let _=0;_<p.length;_++)f+=p[_];const A=d.morphTargetsRelative?1:1-f;h.getUniforms().setValue(a,"morphTargetBaseInfluence",A),h.getUniforms().setValue(a,"morphTargetInfluences",p),h.getUniforms().setValue(a,"morphTargetsTexture",u.texture,e),h.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}else{const g=p===void 0?0:p.length;let v=i[d.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];i[d.id]=v}for(let S=0;S<g;S++){const O=v[S];O[0]=S,O[1]=p[S]}v.sort(ju);for(let S=0;S<8;S++)S<g&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort($u);const u=d.morphAttributes.position,f=d.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const O=o[S],P=O[0],C=O[1];P!==Number.MAX_SAFE_INTEGER&&C?(u&&d.getAttribute("morphTarget"+S)!==u[P]&&d.setAttribute("morphTarget"+S,u[P]),f&&d.getAttribute("morphNormal"+S)!==f[P]&&d.setAttribute("morphNormal"+S,f[P]),n[S]=C,A+=C):(u&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),f&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),n[S]=0)}const _=d.morphTargetsRelative?1:1-A;h.getUniforms().setValue(a,"morphTargetBaseInfluence",_),h.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:l}}function Zu(a,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=t.get(l,d);if(n.get(h)!==c&&(t.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return h}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class ll extends Pe{constructor(t,e,i,n,s,r,o,l,c,d){if(d=d!==void 0?d:wi,d!==wi&&d!==on)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===wi&&(i=di),i===void 0&&d===on&&(i=Ai),super(null,n,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xe,this.minFilter=l!==void 0?l:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cl=new Pe,dl=new ll(1,1);dl.compareFunction=jo;const hl=new Qo,ul=new Uc,pl=new sl,no=[],ao=[],so=new Float32Array(16),ro=new Float32Array(9),oo=new Float32Array(4);function un(a,t,e){const i=a[0];if(i<=0||i>0)return a;const n=t*e;let s=no[n];if(s===void 0&&(s=new Float32Array(n),no[n]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function le(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function ce(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function Ma(a,t){let e=ao[t];e===void 0&&(e=new Int32Array(t),ao[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function Ku(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Qu(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;a.uniform2fv(this.addr,t),ce(e,t)}}function Ju(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;a.uniform3fv(this.addr,t),ce(e,t)}}function tp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;a.uniform4fv(this.addr,t),ce(e,t)}}function ep(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;oo.set(i),a.uniformMatrix2fv(this.addr,!1,oo),ce(e,i)}}function ip(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;ro.set(i),a.uniformMatrix3fv(this.addr,!1,ro),ce(e,i)}}function np(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;so.set(i),a.uniformMatrix4fv(this.addr,!1,so),ce(e,i)}}function ap(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function sp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;a.uniform2iv(this.addr,t),ce(e,t)}}function rp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;a.uniform3iv(this.addr,t),ce(e,t)}}function op(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;a.uniform4iv(this.addr,t),ce(e,t)}}function lp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function cp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;a.uniform2uiv(this.addr,t),ce(e,t)}}function dp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;a.uniform3uiv(this.addr,t),ce(e,t)}}function hp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;a.uniform4uiv(this.addr,t),ce(e,t)}}function up(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);const s=this.type===a.SAMPLER_2D_SHADOW?dl:cl;e.setTexture2D(t||s,n)}function pp(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ul,n)}function fp(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||pl,n)}function mp(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||hl,n)}function gp(a){switch(a){case 5126:return Ku;case 35664:return Qu;case 35665:return Ju;case 35666:return tp;case 35674:return ep;case 35675:return ip;case 35676:return np;case 5124:case 35670:return ap;case 35667:case 35671:return sp;case 35668:case 35672:return rp;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return dp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return mp}}function vp(a,t){a.uniform1fv(this.addr,t)}function yp(a,t){const e=un(t,this.size,2);a.uniform2fv(this.addr,e)}function _p(a,t){const e=un(t,this.size,3);a.uniform3fv(this.addr,e)}function bp(a,t){const e=un(t,this.size,4);a.uniform4fv(this.addr,e)}function xp(a,t){const e=un(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Sp(a,t){const e=un(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Mp(a,t){const e=un(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Tp(a,t){a.uniform1iv(this.addr,t)}function Ep(a,t){a.uniform2iv(this.addr,t)}function Ap(a,t){a.uniform3iv(this.addr,t)}function wp(a,t){a.uniform4iv(this.addr,t)}function Cp(a,t){a.uniform1uiv(this.addr,t)}function Pp(a,t){a.uniform2uiv(this.addr,t)}function Rp(a,t){a.uniform3uiv(this.addr,t)}function Lp(a,t){a.uniform4uiv(this.addr,t)}function kp(a,t,e){const i=this.cache,n=t.length,s=Ma(e,n);le(i,s)||(a.uniform1iv(this.addr,s),ce(i,s));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||cl,s[r])}function Dp(a,t,e){const i=this.cache,n=t.length,s=Ma(e,n);le(i,s)||(a.uniform1iv(this.addr,s),ce(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||ul,s[r])}function Up(a,t,e){const i=this.cache,n=t.length,s=Ma(e,n);le(i,s)||(a.uniform1iv(this.addr,s),ce(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||pl,s[r])}function Ip(a,t,e){const i=this.cache,n=t.length,s=Ma(e,n);le(i,s)||(a.uniform1iv(this.addr,s),ce(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||hl,s[r])}function Np(a){switch(a){case 5126:return vp;case 35664:return yp;case 35665:return _p;case 35666:return bp;case 35674:return xp;case 35675:return Sp;case 35676:return Mp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ep;case 35668:case 35672:return Ap;case 35669:case 35673:return wp;case 5125:return Cp;case 36294:return Pp;case 36295:return Rp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Ip}}class Op{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class zp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Np(e.type)}}class Fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function lo(a,t){a.seq.push(t),a.map[t.id]=t}function Bp(a,t,e){const i=a.name,n=i.length;for(ns.lastIndex=0;;){const s=ns.exec(i),r=ns.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){lo(e,c===void 0?new Op(o,a,t):new zp(o,a,t));break}else{let h=e.map[o];h===void 0&&(h=new Fp(o),lo(e,h)),e=h}}}class da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),r=t.getUniformLocation(e,s.name);Bp(s,r,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function co(a,t,e){const i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}const qp=37297;let Hp=0;function Gp(a,t){const e=a.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function Vp(a){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(a);let i;switch(t===e?i="":t===ma&&e===fa?i="LinearDisplayP3ToLinearSRGB":t===fa&&e===ma&&(i="LinearSRGBToLinearDisplayP3"),a){case ni:case ba:return[i,"LinearTransferOETF"];case fe:case Ds:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function ho(a,t,e){const i=a.getShaderParameter(t,a.COMPILE_STATUS),n=a.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Gp(a.getShaderSource(t),r)}else return n}function Wp(a,t){const e=Vp(t);return`vec4 ${a}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xp(a,t){let e;switch(t){case ic:e="Linear";break;case nc:e="Reinhard";break;case ac:e="OptimizedCineon";break;case sc:e="ACESFilmic";break;case oc:e="AgX";break;case rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $p(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function jp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ji).join(`
`)}function Yp(a){const t=[];for(const e in a){const i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zp(a,t){const e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(t,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Ji(a){return a!==""}function uo(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function po(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Es(a){return a.replace(Kp,Jp)}const Qp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jp(a,t){let e=Ht[t];if(e===void 0){const i=Qp.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Es(e)}const tf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(a){return a.replace(tf,ef)}function ef(a,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function mo(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nf(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===No?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function af(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case sn:case rn:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sf(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case rn:t="ENVMAP_MODE_REFRACTION";break}return t}function rf(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case tc:t="ENVMAP_BLENDING_MIX";break;case ec:t="ENVMAP_BLENDING_ADD";break}return t}function of(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function lf(a,t,e,i){const n=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=nf(e),c=af(e),d=sf(e),h=rf(e),p=of(e),m=e.isWebGL2?"":$p(e),g=jp(e),v=Yp(s),u=n.createProgram();let f,A,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ji).join(`
`),f.length>0&&(f+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ji).join(`
`),A.length>0&&(A+=`
`)):(f=[mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),A=[m,mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==pi?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Wp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),r=Es(r),r=uo(r,e),r=po(r,e),o=Es(o),o=uo(o,e),o=po(o,e),r=fo(r),o=fo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===kr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const S=_+f+r,O=_+A+o,P=co(n,n.VERTEX_SHADER,S),C=co(n,n.FRAGMENT_SHADER,O);n.attachShader(u,P),n.attachShader(u,C),e.index0AttributeName!==void 0?n.bindAttribLocation(u,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(u,0,"position"),n.linkProgram(u);function X(V){if(a.debug.checkShaderErrors){const at=n.getProgramInfoLog(u).trim(),U=n.getShaderInfoLog(P).trim(),q=n.getShaderInfoLog(C).trim();let N=!0,W=!0;if(n.getProgramParameter(u,n.LINK_STATUS)===!1)if(N=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,u,P,C);else{const K=ho(n,P,"vertex"),it=ho(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(u,n.VALIDATE_STATUS)+`

Program Info Log: `+at+`
`+K+`
`+it)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(U===""||q==="")&&(W=!1);W&&(V.diagnostics={runnable:N,programLog:at,vertexShader:{log:U,prefix:f},fragmentShader:{log:q,prefix:A}})}n.deleteShader(P),n.deleteShader(C),b=new da(n,u),M=Zp(n,u)}let b;this.getUniforms=function(){return b===void 0&&X(this),b};let M;this.getAttributes=function(){return M===void 0&&X(this),M};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(u,qp)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(u),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hp++,this.cacheKey=t,this.usedTimes=1,this.program=u,this.vertexShader=P,this.fragmentShader=C,this}let cf=0;class df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hf(t),e.set(t,i)),i}}class hf{constructor(t){this.id=cf++,this.code=t,this.usedTimes=0}}function uf(a,t,e,i,n,s,r){const o=new Jo,l=new df,c=[],d=n.isWebGL2,h=n.logarithmicDepthBuffer,p=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function u(b,M,F,V,at){const U=V.fog,q=at.geometry,N=b.isMeshStandardMaterial?V.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),K=W&&W.mapping===_a?W.image.height:null,it=g[b.type];b.precision!==null&&(m=n.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const w=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,E=w!==void 0?w.length:0;let $=0;q.morphAttributes.position!==void 0&&($=1),q.morphAttributes.normal!==void 0&&($=2),q.morphAttributes.color!==void 0&&($=3);let k,D,j,et;if(it){const ne=We[it];k=ne.vertexShader,D=ne.fragmentShader}else k=b.vertexShader,D=b.fragmentShader,l.update(b),j=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);const tt=a.getRenderTarget(),st=at.isInstancedMesh===!0,mt=at.isBatchedMesh===!0,ht=!!b.map,_t=!!b.matcap,R=!!W,ct=!!b.aoMap,G=!!b.lightMap,rt=!!b.bumpMap,Q=!!b.normalMap,xt=!!b.displacementMap,gt=!!b.emissiveMap,x=!!b.metalnessMap,y=!!b.roughnessMap,B=b.anisotropy>0,ot=b.clearcoat>0,lt=b.iridescence>0,nt=b.sheen>0,St=b.transmission>0,pt=B&&!!b.anisotropyMap,Mt=ot&&!!b.clearcoatMap,Pt=ot&&!!b.clearcoatNormalMap,Nt=ot&&!!b.clearcoatRoughnessMap,dt=lt&&!!b.iridescenceMap,Bt=lt&&!!b.iridescenceThicknessMap,zt=nt&&!!b.sheenColorMap,Dt=nt&&!!b.sheenRoughnessMap,Rt=!!b.specularMap,Et=!!b.specularColorMap,L=!!b.specularIntensityMap,ft=St&&!!b.transmissionMap,Ct=St&&!!b.thicknessMap,At=!!b.gradientMap,ut=!!b.alphaMap,I=b.alphaTest>0,vt=!!b.alphaHash,Tt=!!b.extensions,Ut=!!q.attributes.uv1,kt=!!q.attributes.uv2,$t=!!q.attributes.uv3;let jt=pi;return b.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(jt=a.toneMapping),{isWebGL2:d,shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:D,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:mt,instancing:st,instancingColor:st&&at.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:tt===null?a.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ni,map:ht,matcap:_t,envMap:R,envMapMode:R&&W.mapping,envMapCubeUVHeight:K,aoMap:ct,lightMap:G,bumpMap:rt,normalMap:Q,displacementMap:p&&xt,emissiveMap:gt,normalMapObjectSpace:Q&&b.normalMapType===_c,normalMapTangentSpace:Q&&b.normalMapType===$o,metalnessMap:x,roughnessMap:y,anisotropy:B,anisotropyMap:pt,clearcoat:ot,clearcoatMap:Mt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Nt,iridescence:lt,iridescenceMap:dt,iridescenceThicknessMap:Bt,sheen:nt,sheenColorMap:zt,sheenRoughnessMap:Dt,specularMap:Rt,specularColorMap:Et,specularIntensityMap:L,transmission:St,transmissionMap:ft,thicknessMap:Ct,gradientMap:At,opaque:b.transparent===!1&&b.blending===nn,alphaMap:ut,alphaTest:I,alphaHash:vt,combine:b.combine,mapUv:ht&&v(b.map.channel),aoMapUv:ct&&v(b.aoMap.channel),lightMapUv:G&&v(b.lightMap.channel),bumpMapUv:rt&&v(b.bumpMap.channel),normalMapUv:Q&&v(b.normalMap.channel),displacementMapUv:xt&&v(b.displacementMap.channel),emissiveMapUv:gt&&v(b.emissiveMap.channel),metalnessMapUv:x&&v(b.metalnessMap.channel),roughnessMapUv:y&&v(b.roughnessMap.channel),anisotropyMapUv:pt&&v(b.anisotropyMap.channel),clearcoatMapUv:Mt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&v(b.sheenRoughnessMap.channel),specularMapUv:Rt&&v(b.specularMap.channel),specularColorMapUv:Et&&v(b.specularColorMap.channel),specularIntensityMapUv:L&&v(b.specularIntensityMap.channel),transmissionMapUv:ft&&v(b.transmissionMap.channel),thicknessMapUv:Ct&&v(b.thicknessMap.channel),alphaMapUv:ut&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Q||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:kt,vertexUv3s:$t,pointsUvs:at.isPoints===!0&&!!q.attributes.uv&&(ht||ut),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:at.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:jt,useLegacyLights:a._useLegacyLights,decodeVideoTexture:ht&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===Kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qe,flipSided:b.side===Te,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Tt&&b.extensions.derivatives===!0,extensionFragDepth:Tt&&b.extensions.fragDepth===!0,extensionDrawBuffers:Tt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Tt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Tt&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)M.push(F),M.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(A(M,b),_(M,b),M.push(a.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function A(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function S(b){const M=g[b.type];let F;if(M){const V=We[M];F=$c.clone(V.uniforms)}else F=b.uniforms;return F}function O(b,M){let F;for(let V=0,at=c.length;V<at;V++){const U=c[V];if(U.cacheKey===M){F=U,++F.usedTimes;break}}return F===void 0&&(F=new lf(a,M,b,s),c.push(F)),F}function P(b){if(--b.usedTimes===0){const M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function X(){l.dispose()}return{getParameters:u,getProgramCacheKey:f,getUniforms:S,acquireProgram:O,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:X}}function pf(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function i(s,r,o){a.get(s)[r]=o}function n(){a=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function ff(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function go(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function vo(){const a=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(h,p,m,g,v,u){let f=a[t];return f===void 0?(f={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:u},a[t]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=u),t++,f}function o(h,p,m,g,v,u){const f=r(h,p,m,g,v,u);m.transmission>0?i.push(f):m.transparent===!0?n.push(f):e.push(f)}function l(h,p,m,g,v,u){const f=r(h,p,m,g,v,u);m.transmission>0?i.unshift(f):m.transparent===!0?n.unshift(f):e.unshift(f)}function c(h,p){e.length>1&&e.sort(h||ff),i.length>1&&i.sort(p||go),n.length>1&&n.sort(p||go)}function d(){for(let h=t,p=a.length;h<p;h++){const m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:d,sort:c}}function mf(){let a=new WeakMap;function t(i,n){const s=a.get(i);let r;return s===void 0?(r=new vo,a.set(i,[r])):n>=s.length?(r=new vo,s.push(r)):r=s[n],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function gf(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Xt};break;case"SpotLight":e={position:new z,direction:new z,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new z,halfWidth:new z,halfHeight:new z};break}return a[t.id]=e,e}}}function vf(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let yf=0;function _f(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function bf(a,t){const e=new gf,i=vf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new z);const s=new z,r=new se,o=new se;function l(d,h){let p=0,m=0,g=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let v=0,u=0,f=0,A=0,_=0,S=0,O=0,P=0,C=0,X=0,b=0;d.sort(_f);const M=h===!0?Math.PI:1;for(let V=0,at=d.length;V<at;V++){const U=d[V],q=U.color,N=U.intensity,W=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=q.r*N*M,m+=q.g*N*M,g+=q.b*N*M;else if(U.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(U.sh.coefficients[it],N);b++}else if(U.isDirectionalLight){const it=e.get(U);if(it.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const w=U.shadow,E=i.get(U);E.shadowBias=w.bias,E.shadowNormalBias=w.normalBias,E.shadowRadius=w.radius,E.shadowMapSize=w.mapSize,n.directionalShadow[v]=E,n.directionalShadowMap[v]=K,n.directionalShadowMatrix[v]=U.shadow.matrix,S++}n.directional[v]=it,v++}else if(U.isSpotLight){const it=e.get(U);it.position.setFromMatrixPosition(U.matrixWorld),it.color.copy(q).multiplyScalar(N*M),it.distance=W,it.coneCos=Math.cos(U.angle),it.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),it.decay=U.decay,n.spot[f]=it;const w=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,w.updateMatrices(U),U.castShadow&&X++),n.spotLightMatrix[f]=w.matrix,U.castShadow){const E=i.get(U);E.shadowBias=w.bias,E.shadowNormalBias=w.normalBias,E.shadowRadius=w.radius,E.shadowMapSize=w.mapSize,n.spotShadow[f]=E,n.spotShadowMap[f]=K,P++}f++}else if(U.isRectAreaLight){const it=e.get(U);it.color.copy(q).multiplyScalar(N),it.halfWidth.set(U.width*.5,0,0),it.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=it,A++}else if(U.isPointLight){const it=e.get(U);if(it.color.copy(U.color).multiplyScalar(U.intensity*M),it.distance=U.distance,it.decay=U.decay,U.castShadow){const w=U.shadow,E=i.get(U);E.shadowBias=w.bias,E.shadowNormalBias=w.normalBias,E.shadowRadius=w.radius,E.shadowMapSize=w.mapSize,E.shadowCameraNear=w.camera.near,E.shadowCameraFar=w.camera.far,n.pointShadow[u]=E,n.pointShadowMap[u]=K,n.pointShadowMatrix[u]=U.shadow.matrix,O++}n.point[u]=it,u++}else if(U.isHemisphereLight){const it=e.get(U);it.skyColor.copy(U.color).multiplyScalar(N*M),it.groundColor.copy(U.groundColor).multiplyScalar(N*M),n.hemi[_]=it,_++}}A>0&&(t.isWebGL2?a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==v||F.pointLength!==u||F.spotLength!==f||F.rectAreaLength!==A||F.hemiLength!==_||F.numDirectionalShadows!==S||F.numPointShadows!==O||F.numSpotShadows!==P||F.numSpotMaps!==C||F.numLightProbes!==b)&&(n.directional.length=v,n.spot.length=f,n.rectArea.length=A,n.point.length=u,n.hemi.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=O,n.pointShadowMap.length=O,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=O,n.spotLightMatrix.length=P+C-X,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=X,n.numLightProbes=b,F.directionalLength=v,F.pointLength=u,F.spotLength=f,F.rectAreaLength=A,F.hemiLength=_,F.numDirectionalShadows=S,F.numPointShadows=O,F.numSpotShadows=P,F.numSpotMaps=C,F.numLightProbes=b,n.version=yf++)}function c(d,h){let p=0,m=0,g=0,v=0,u=0;const f=h.matrixWorldInverse;for(let A=0,_=d.length;A<_;A++){const S=d[A];if(S.isDirectionalLight){const O=n.directional[p];O.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(f),p++}else if(S.isSpotLight){const O=n.spot[g];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const O=n.rectArea[v];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),O.halfWidth.set(S.width*.5,0,0),O.halfHeight.set(0,S.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const O=n.point[m];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const O=n.hemi[u];O.direction.setFromMatrixPosition(S.matrixWorld),O.direction.transformDirection(f),u++}}}return{setup:l,setupView:c,state:n}}function yo(a,t){const e=new bf(a,t),i=[],n=[];function s(){i.length=0,n.length=0}function r(h){i.push(h)}function o(h){n.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function xf(a,t){let e=new WeakMap;function i(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new yo(a,t),e.set(s,[l])):r>=o.length?(l=new yo(a,t),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class Sf extends hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mf extends hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ef=`uniform sampler2D shadow_pass;
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
}`;function Af(a,t,e){let i=new Is;const n=new yt,s=new yt,r=new pe,o=new Sf({depthPacking:yc}),l=new Mf,c={},d=e.maxTextureSize,h={[mi]:Te,[Te]:mi,[qe]:qe},p=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Tf,fragmentShader:Ef}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(P,C,X){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||P.length===0)return;const b=a.getRenderTarget(),M=a.getActiveCubeFace(),F=a.getActiveMipmapLevel(),V=a.state;V.setBlending(ui),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const at=f!==ti&&this.type===ti,U=f===ti&&this.type!==ti;for(let q=0,N=P.length;q<N;q++){const W=P[q],K=W.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const it=K.getFrameExtents();if(n.multiply(it),s.copy(K.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(s.x=Math.floor(d/it.x),n.x=s.x*it.x,K.mapSize.x=s.x),n.y>d&&(s.y=Math.floor(d/it.y),n.y=s.y*it.y,K.mapSize.y=s.y)),K.map===null||at===!0||U===!0){const E=this.type!==ti?{minFilter:xe,magFilter:xe}:{};K.map!==null&&K.map.dispose(),K.map=new Pi(n.x,n.y,E),K.map.texture.name=W.name+".shadowMap",K.camera.updateProjectionMatrix()}a.setRenderTarget(K.map),a.clear();const w=K.getViewportCount();for(let E=0;E<w;E++){const $=K.getViewport(E);r.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),V.viewport(r),K.updateMatrices(W,E),i=K.getFrustum(),S(C,X,K.camera,W,this.type)}K.isPointLightShadow!==!0&&this.type===ti&&A(K,X),K.needsUpdate=!1}f=this.type,u.needsUpdate=!1,a.setRenderTarget(b,M,F)};function A(P,C){const X=t.update(v);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pi(n.x,n.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(C,null,X,p,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(C,null,X,m,v,null)}function _(P,C,X,b){let M=null;const F=X.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)M=F;else if(M=X.isPointLight===!0?l:o,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,at=C.uuid;let U=c[V];U===void 0&&(U={},c[V]=U);let q=U[at];q===void 0&&(q=M.clone(),U[at]=q,C.addEventListener("dispose",O)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,b===ti?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,X.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=a.properties.get(M);V.light=X}return M}function S(P,C,X,b,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===ti)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld);const at=t.update(P),U=P.material;if(Array.isArray(U)){const q=at.groups;for(let N=0,W=q.length;N<W;N++){const K=q[N],it=U[K.materialIndex];if(it&&it.visible){const w=_(P,it,b,M);P.onBeforeShadow(a,P,C,X,at,w,K),a.renderBufferDirect(X,null,at,w,P,K),P.onAfterShadow(a,P,C,X,at,w,K)}}}else if(U.visible){const q=_(P,U,b,M);P.onBeforeShadow(a,P,C,X,at,q,null),a.renderBufferDirect(X,null,at,q,P,null),P.onAfterShadow(a,P,C,X,at,q,null)}}const V=P.children;for(let at=0,U=V.length;at<U;at++)S(V[at],C,X,b,M)}function O(P){P.target.removeEventListener("dispose",O);for(const X in c){const b=c[X],M=P.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function wf(a,t,e){const i=e.isWebGL2;function n(){let I=!1;const vt=new pe;let Tt=null;const Ut=new pe(0,0,0,0);return{setMask:function(kt){Tt!==kt&&!I&&(a.colorMask(kt,kt,kt,kt),Tt=kt)},setLocked:function(kt){I=kt},setClear:function(kt,$t,jt,te,ne){ne===!0&&(kt*=te,$t*=te,jt*=te),vt.set(kt,$t,jt,te),Ut.equals(vt)===!1&&(a.clearColor(kt,$t,jt,te),Ut.copy(vt))},reset:function(){I=!1,Tt=null,Ut.set(-1,0,0,0)}}}function s(){let I=!1,vt=null,Tt=null,Ut=null;return{setTest:function(kt){kt?mt(a.DEPTH_TEST):ht(a.DEPTH_TEST)},setMask:function(kt){vt!==kt&&!I&&(a.depthMask(kt),vt=kt)},setFunc:function(kt){if(Tt!==kt){switch(kt){case $l:a.depthFunc(a.NEVER);break;case jl:a.depthFunc(a.ALWAYS);break;case Yl:a.depthFunc(a.LESS);break;case ua:a.depthFunc(a.LEQUAL);break;case Zl:a.depthFunc(a.EQUAL);break;case Kl:a.depthFunc(a.GEQUAL);break;case Ql:a.depthFunc(a.GREATER);break;case Jl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Tt=kt}},setLocked:function(kt){I=kt},setClear:function(kt){Ut!==kt&&(a.clearDepth(kt),Ut=kt)},reset:function(){I=!1,vt=null,Tt=null,Ut=null}}}function r(){let I=!1,vt=null,Tt=null,Ut=null,kt=null,$t=null,jt=null,te=null,ne=null;return{setTest:function(Yt){I||(Yt?mt(a.STENCIL_TEST):ht(a.STENCIL_TEST))},setMask:function(Yt){vt!==Yt&&!I&&(a.stencilMask(Yt),vt=Yt)},setFunc:function(Yt,re,Ve){(Tt!==Yt||Ut!==re||kt!==Ve)&&(a.stencilFunc(Yt,re,Ve),Tt=Yt,Ut=re,kt=Ve)},setOp:function(Yt,re,Ve){($t!==Yt||jt!==re||te!==Ve)&&(a.stencilOp(Yt,re,Ve),$t=Yt,jt=re,te=Ve)},setLocked:function(Yt){I=Yt},setClear:function(Yt){ne!==Yt&&(a.clearStencil(Yt),ne=Yt)},reset:function(){I=!1,vt=null,Tt=null,Ut=null,kt=null,$t=null,jt=null,te=null,ne=null}}}const o=new n,l=new s,c=new r,d=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,v=[],u=null,f=!1,A=null,_=null,S=null,O=null,P=null,C=null,X=null,b=new Xt(0,0,0),M=0,F=!1,V=null,at=null,U=null,q=null,N=null;const W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,it=0;const w=a.getParameter(a.VERSION);w.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(w)[1]),K=it>=1):w.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),K=it>=2);let E=null,$={};const k=a.getParameter(a.SCISSOR_BOX),D=a.getParameter(a.VIEWPORT),j=new pe().fromArray(k),et=new pe().fromArray(D);function tt(I,vt,Tt,Ut){const kt=new Uint8Array(4),$t=a.createTexture();a.bindTexture(I,$t),a.texParameteri(I,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(I,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let jt=0;jt<Tt;jt++)i&&(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)?a.texImage3D(vt,0,a.RGBA,1,1,Ut,0,a.RGBA,a.UNSIGNED_BYTE,kt):a.texImage2D(vt+jt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,kt);return $t}const st={};st[a.TEXTURE_2D]=tt(a.TEXTURE_2D,a.TEXTURE_2D,1),st[a.TEXTURE_CUBE_MAP]=tt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(st[a.TEXTURE_2D_ARRAY]=tt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),st[a.TEXTURE_3D]=tt(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),mt(a.DEPTH_TEST),l.setFunc(ua),gt(!1),x(Qs),mt(a.CULL_FACE),Q(ui);function mt(I){p[I]!==!0&&(a.enable(I),p[I]=!0)}function ht(I){p[I]!==!1&&(a.disable(I),p[I]=!1)}function _t(I,vt){return m[I]!==vt?(a.bindFramebuffer(I,vt),m[I]=vt,i&&(I===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=vt),I===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=vt)),!0):!1}function R(I,vt){let Tt=v,Ut=!1;if(I)if(Tt=g.get(vt),Tt===void 0&&(Tt=[],g.set(vt,Tt)),I.isWebGLMultipleRenderTargets){const kt=I.texture;if(Tt.length!==kt.length||Tt[0]!==a.COLOR_ATTACHMENT0){for(let $t=0,jt=kt.length;$t<jt;$t++)Tt[$t]=a.COLOR_ATTACHMENT0+$t;Tt.length=kt.length,Ut=!0}}else Tt[0]!==a.COLOR_ATTACHMENT0&&(Tt[0]=a.COLOR_ATTACHMENT0,Ut=!0);else Tt[0]!==a.BACK&&(Tt[0]=a.BACK,Ut=!0);Ut&&(e.isWebGL2?a.drawBuffers(Tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Tt))}function ct(I){return u!==I?(a.useProgram(I),u=I,!0):!1}const G={[Ti]:a.FUNC_ADD,[kl]:a.FUNC_SUBTRACT,[Dl]:a.FUNC_REVERSE_SUBTRACT};if(i)G[ir]=a.MIN,G[nr]=a.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(G[ir]=I.MIN_EXT,G[nr]=I.MAX_EXT)}const rt={[Ul]:a.ZERO,[Il]:a.ONE,[Nl]:a.SRC_COLOR,[gs]:a.SRC_ALPHA,[Hl]:a.SRC_ALPHA_SATURATE,[Bl]:a.DST_COLOR,[zl]:a.DST_ALPHA,[Ol]:a.ONE_MINUS_SRC_COLOR,[vs]:a.ONE_MINUS_SRC_ALPHA,[ql]:a.ONE_MINUS_DST_COLOR,[Fl]:a.ONE_MINUS_DST_ALPHA,[Gl]:a.CONSTANT_COLOR,[Vl]:a.ONE_MINUS_CONSTANT_COLOR,[Wl]:a.CONSTANT_ALPHA,[Xl]:a.ONE_MINUS_CONSTANT_ALPHA};function Q(I,vt,Tt,Ut,kt,$t,jt,te,ne,Yt){if(I===ui){f===!0&&(ht(a.BLEND),f=!1);return}if(f===!1&&(mt(a.BLEND),f=!0),I!==Ll){if(I!==A||Yt!==F){if((_!==Ti||P!==Ti)&&(a.blendEquation(a.FUNC_ADD),_=Ti,P=Ti),Yt)switch(I){case nn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Js:a.blendFunc(a.ONE,a.ONE);break;case tr:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case er:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case nn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Js:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case tr:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case er:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,O=null,C=null,X=null,b.set(0,0,0),M=0,A=I,F=Yt}return}kt=kt||vt,$t=$t||Tt,jt=jt||Ut,(vt!==_||kt!==P)&&(a.blendEquationSeparate(G[vt],G[kt]),_=vt,P=kt),(Tt!==S||Ut!==O||$t!==C||jt!==X)&&(a.blendFuncSeparate(rt[Tt],rt[Ut],rt[$t],rt[jt]),S=Tt,O=Ut,C=$t,X=jt),(te.equals(b)===!1||ne!==M)&&(a.blendColor(te.r,te.g,te.b,ne),b.copy(te),M=ne),A=I,F=!1}function xt(I,vt){I.side===qe?ht(a.CULL_FACE):mt(a.CULL_FACE);let Tt=I.side===Te;vt&&(Tt=!Tt),gt(Tt),I.blending===nn&&I.transparent===!1?Q(ui):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Ut=I.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),B(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?mt(a.SAMPLE_ALPHA_TO_COVERAGE):ht(a.SAMPLE_ALPHA_TO_COVERAGE)}function gt(I){V!==I&&(I?a.frontFace(a.CW):a.frontFace(a.CCW),V=I)}function x(I){I!==Pl?(mt(a.CULL_FACE),I!==at&&(I===Qs?a.cullFace(a.BACK):I===Rl?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ht(a.CULL_FACE),at=I}function y(I){I!==U&&(K&&a.lineWidth(I),U=I)}function B(I,vt,Tt){I?(mt(a.POLYGON_OFFSET_FILL),(q!==vt||N!==Tt)&&(a.polygonOffset(vt,Tt),q=vt,N=Tt)):ht(a.POLYGON_OFFSET_FILL)}function ot(I){I?mt(a.SCISSOR_TEST):ht(a.SCISSOR_TEST)}function lt(I){I===void 0&&(I=a.TEXTURE0+W-1),E!==I&&(a.activeTexture(I),E=I)}function nt(I,vt,Tt){Tt===void 0&&(E===null?Tt=a.TEXTURE0+W-1:Tt=E);let Ut=$[Tt];Ut===void 0&&(Ut={type:void 0,texture:void 0},$[Tt]=Ut),(Ut.type!==I||Ut.texture!==vt)&&(E!==Tt&&(a.activeTexture(Tt),E=Tt),a.bindTexture(I,vt||st[I]),Ut.type=I,Ut.texture=vt)}function St(){const I=$[E];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pt(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(I){j.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function ft(I){et.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function Ct(I,vt){let Tt=h.get(vt);Tt===void 0&&(Tt=new WeakMap,h.set(vt,Tt));let Ut=Tt.get(I);Ut===void 0&&(Ut=a.getUniformBlockIndex(vt,I.name),Tt.set(I,Ut))}function At(I,vt){const Ut=h.get(vt).get(I);d.get(vt)!==Ut&&(a.uniformBlockBinding(vt,Ut,I.__bindingPointIndex),d.set(vt,Ut))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),p={},E=null,$={},m={},g=new WeakMap,v=[],u=null,f=!1,A=null,_=null,S=null,O=null,P=null,C=null,X=null,b=new Xt(0,0,0),M=0,F=!1,V=null,at=null,U=null,q=null,N=null,j.set(0,0,a.canvas.width,a.canvas.height),et.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:mt,disable:ht,bindFramebuffer:_t,drawBuffers:R,useProgram:ct,setBlending:Q,setMaterial:xt,setFlipSided:gt,setCullFace:x,setLineWidth:y,setPolygonOffset:B,setScissorTest:ot,activeTexture:lt,bindTexture:nt,unbindTexture:St,compressedTexImage2D:pt,compressedTexImage3D:Mt,texImage2D:Rt,texImage3D:Et,updateUBOMapping:Ct,uniformBlockBinding:At,texStorage2D:zt,texStorage3D:Dt,texSubImage2D:Pt,texSubImage3D:Nt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Bt,scissor:L,viewport:ft,reset:ut}}function Cf(a,t,e,i,n,s,r){const o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,y){return m?new OffscreenCanvas(x,y):va("canvas")}function v(x,y,B,ot){let lt=1;if((x.width>ot||x.height>ot)&&(lt=ot/Math.max(x.width,x.height)),lt<1||y===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const nt=y?Ts:Math.floor,St=nt(lt*x.width),pt=nt(lt*x.height);h===void 0&&(h=g(St,pt));const Mt=B?g(St,pt):h;return Mt.width=St,Mt.height=pt,Mt.getContext("2d").drawImage(x,0,0,St,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+St+"x"+pt+")."),Mt}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function u(x){return Dr(x.width)&&Dr(x.height)}function f(x){return o?!1:x.wrapS!==He||x.wrapT!==He||x.minFilter!==xe&&x.minFilter!==Ue}function A(x,y){return x.generateMipmaps&&y&&x.minFilter!==xe&&x.minFilter!==Ue}function _(x){a.generateMipmap(x)}function S(x,y,B,ot,lt=!1){if(o===!1)return y;if(x!==null){if(a[x]!==void 0)return a[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let nt=y;if(y===a.RED&&(B===a.FLOAT&&(nt=a.R32F),B===a.HALF_FLOAT&&(nt=a.R16F),B===a.UNSIGNED_BYTE&&(nt=a.R8)),y===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(nt=a.R8UI),B===a.UNSIGNED_SHORT&&(nt=a.R16UI),B===a.UNSIGNED_INT&&(nt=a.R32UI),B===a.BYTE&&(nt=a.R8I),B===a.SHORT&&(nt=a.R16I),B===a.INT&&(nt=a.R32I)),y===a.RG&&(B===a.FLOAT&&(nt=a.RG32F),B===a.HALF_FLOAT&&(nt=a.RG16F),B===a.UNSIGNED_BYTE&&(nt=a.RG8)),y===a.RGBA){const St=lt?pa:Zt.getTransfer(ot);B===a.FLOAT&&(nt=a.RGBA32F),B===a.HALF_FLOAT&&(nt=a.RGBA16F),B===a.UNSIGNED_BYTE&&(nt=St===Kt?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(nt=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(nt=a.RGB5_A1)}return(nt===a.R16F||nt===a.R32F||nt===a.RG16F||nt===a.RG32F||nt===a.RGBA16F||nt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function O(x,y,B){return A(x,B)===!0||x.isFramebufferTexture&&x.minFilter!==xe&&x.minFilter!==Ue?Math.log2(Math.max(y.width,y.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?y.mipmaps.length:1}function P(x){return x===xe||x===ar||x===Pa?a.NEAREST:a.LINEAR}function C(x){const y=x.target;y.removeEventListener("dispose",C),b(y),y.isVideoTexture&&d.delete(y)}function X(x){const y=x.target;y.removeEventListener("dispose",X),F(y)}function b(x){const y=i.get(x);if(y.__webglInit===void 0)return;const B=x.source,ot=p.get(B);if(ot){const lt=ot[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&M(x),Object.keys(ot).length===0&&p.delete(B)}i.remove(x)}function M(x){const y=i.get(x);a.deleteTexture(y.__webglTexture);const B=x.source,ot=p.get(B);delete ot[y.__cacheKey],r.memory.textures--}function F(x){const y=x.texture,B=i.get(x),ot=i.get(y);if(ot.__webglTexture!==void 0&&(a.deleteTexture(ot.__webglTexture),r.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(B.__webglFramebuffer[lt]))for(let nt=0;nt<B.__webglFramebuffer[lt].length;nt++)a.deleteFramebuffer(B.__webglFramebuffer[lt][nt]);else a.deleteFramebuffer(B.__webglFramebuffer[lt]);B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[lt])}else{if(Array.isArray(B.__webglFramebuffer))for(let lt=0;lt<B.__webglFramebuffer.length;lt++)a.deleteFramebuffer(B.__webglFramebuffer[lt]);else a.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let lt=0;lt<B.__webglColorRenderbuffer.length;lt++)B.__webglColorRenderbuffer[lt]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[lt]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let lt=0,nt=y.length;lt<nt;lt++){const St=i.get(y[lt]);St.__webglTexture&&(a.deleteTexture(St.__webglTexture),r.memory.textures--),i.remove(y[lt])}i.remove(y),i.remove(x)}let V=0;function at(){V=0}function U(){const x=V;return x>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+n.maxTextures),V+=1,x}function q(x){const y=[];return y.push(x.wrapS),y.push(x.wrapT),y.push(x.wrapR||0),y.push(x.magFilter),y.push(x.minFilter),y.push(x.anisotropy),y.push(x.internalFormat),y.push(x.format),y.push(x.type),y.push(x.generateMipmaps),y.push(x.premultiplyAlpha),y.push(x.flipY),y.push(x.unpackAlignment),y.push(x.colorSpace),y.join()}function N(x,y){const B=i.get(x);if(x.isVideoTexture&&xt(x),x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){const ot=x.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,x,y);return}}e.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+y)}function W(x,y){const B=i.get(x);if(x.version>0&&B.__version!==x.version){j(B,x,y);return}e.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+y)}function K(x,y){const B=i.get(x);if(x.version>0&&B.__version!==x.version){j(B,x,y);return}e.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+y)}function it(x,y){const B=i.get(x);if(x.version>0&&B.__version!==x.version){et(B,x,y);return}e.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+y)}const w={[bs]:a.REPEAT,[He]:a.CLAMP_TO_EDGE,[xs]:a.MIRRORED_REPEAT},E={[xe]:a.NEAREST,[ar]:a.NEAREST_MIPMAP_NEAREST,[Pa]:a.NEAREST_MIPMAP_LINEAR,[Ue]:a.LINEAR,[lc]:a.LINEAR_MIPMAP_NEAREST,[En]:a.LINEAR_MIPMAP_LINEAR},$={[bc]:a.NEVER,[Ac]:a.ALWAYS,[xc]:a.LESS,[jo]:a.LEQUAL,[Sc]:a.EQUAL,[Ec]:a.GEQUAL,[Mc]:a.GREATER,[Tc]:a.NOTEQUAL};function k(x,y,B){if(B?(a.texParameteri(x,a.TEXTURE_WRAP_S,w[y.wrapS]),a.texParameteri(x,a.TEXTURE_WRAP_T,w[y.wrapT]),(x===a.TEXTURE_3D||x===a.TEXTURE_2D_ARRAY)&&a.texParameteri(x,a.TEXTURE_WRAP_R,w[y.wrapR]),a.texParameteri(x,a.TEXTURE_MAG_FILTER,E[y.magFilter]),a.texParameteri(x,a.TEXTURE_MIN_FILTER,E[y.minFilter])):(a.texParameteri(x,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(x,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(x===a.TEXTURE_3D||x===a.TEXTURE_2D_ARRAY)&&a.texParameteri(x,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(y.wrapS!==He||y.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(x,a.TEXTURE_MAG_FILTER,P(y.magFilter)),a.texParameteri(x,a.TEXTURE_MIN_FILTER,P(y.minFilter)),y.minFilter!==xe&&y.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(a.texParameteri(x,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(x,a.TEXTURE_COMPARE_FUNC,$[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===xe||y.minFilter!==Pa&&y.minFilter!==En||y.type===hi&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===An&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(a.texParameterf(x,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function D(x,y){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,y.addEventListener("dispose",C));const ot=y.source;let lt=p.get(ot);lt===void 0&&(lt={},p.set(ot,lt));const nt=q(y);if(nt!==x.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,B=!0),lt[nt].usedTimes++;const St=lt[x.__cacheKey];St!==void 0&&(lt[x.__cacheKey].usedTimes--,St.usedTimes===0&&M(y)),x.__cacheKey=nt,x.__webglTexture=lt[nt].texture}return B}function j(x,y,B){let ot=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ot=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ot=a.TEXTURE_3D);const lt=D(x,y),nt=y.source;e.bindTexture(ot,x.__webglTexture,a.TEXTURE0+B);const St=i.get(nt);if(nt.version!==St.__version||lt===!0){e.activeTexture(a.TEXTURE0+B);const pt=Zt.getPrimaries(Zt.workingColorSpace),Mt=y.colorSpace===Oe?null:Zt.getPrimaries(y.colorSpace),Pt=y.colorSpace===Oe||pt===Mt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Nt=f(y)&&u(y.image)===!1;let dt=v(y.image,Nt,!1,n.maxTextureSize);dt=gt(y,dt);const Bt=u(dt)||o,zt=s.convert(y.format,y.colorSpace);let Dt=s.convert(y.type),Rt=S(y.internalFormat,zt,Dt,y.colorSpace,y.isVideoTexture);k(ot,y,Bt);let Et;const L=y.mipmaps,ft=o&&y.isVideoTexture!==!0&&Rt!==Wo,Ct=St.__version===void 0||lt===!0,At=O(y,dt,Bt);if(y.isDepthTexture)Rt=a.DEPTH_COMPONENT,o?y.type===hi?Rt=a.DEPTH_COMPONENT32F:y.type===di?Rt=a.DEPTH_COMPONENT24:y.type===Ai?Rt=a.DEPTH24_STENCIL8:Rt=a.DEPTH_COMPONENT16:y.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===wi&&Rt===a.DEPTH_COMPONENT&&y.type!==ks&&y.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=di,Dt=s.convert(y.type)),y.format===on&&Rt===a.DEPTH_COMPONENT&&(Rt=a.DEPTH_STENCIL,y.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ai,Dt=s.convert(y.type))),Ct&&(ft?e.texStorage2D(a.TEXTURE_2D,1,Rt,dt.width,dt.height):e.texImage2D(a.TEXTURE_2D,0,Rt,dt.width,dt.height,0,zt,Dt,null));else if(y.isDataTexture)if(L.length>0&&Bt){ft&&Ct&&e.texStorage2D(a.TEXTURE_2D,At,Rt,L[0].width,L[0].height);for(let ut=0,I=L.length;ut<I;ut++)Et=L[ut],ft?e.texSubImage2D(a.TEXTURE_2D,ut,0,0,Et.width,Et.height,zt,Dt,Et.data):e.texImage2D(a.TEXTURE_2D,ut,Rt,Et.width,Et.height,0,zt,Dt,Et.data);y.generateMipmaps=!1}else ft?(Ct&&e.texStorage2D(a.TEXTURE_2D,At,Rt,dt.width,dt.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,dt.width,dt.height,zt,Dt,dt.data)):e.texImage2D(a.TEXTURE_2D,0,Rt,dt.width,dt.height,0,zt,Dt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ft&&Ct&&e.texStorage3D(a.TEXTURE_2D_ARRAY,At,Rt,L[0].width,L[0].height,dt.depth);for(let ut=0,I=L.length;ut<I;ut++)Et=L[ut],y.format!==Ge?zt!==null?ft?e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,dt.depth,zt,Et.data,0,0):e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ut,Rt,Et.width,Et.height,dt.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage3D(a.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,dt.depth,zt,Dt,Et.data):e.texImage3D(a.TEXTURE_2D_ARRAY,ut,Rt,Et.width,Et.height,dt.depth,0,zt,Dt,Et.data)}else{ft&&Ct&&e.texStorage2D(a.TEXTURE_2D,At,Rt,L[0].width,L[0].height);for(let ut=0,I=L.length;ut<I;ut++)Et=L[ut],y.format!==Ge?zt!==null?ft?e.compressedTexSubImage2D(a.TEXTURE_2D,ut,0,0,Et.width,Et.height,zt,Et.data):e.compressedTexImage2D(a.TEXTURE_2D,ut,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage2D(a.TEXTURE_2D,ut,0,0,Et.width,Et.height,zt,Dt,Et.data):e.texImage2D(a.TEXTURE_2D,ut,Rt,Et.width,Et.height,0,zt,Dt,Et.data)}else if(y.isDataArrayTexture)ft?(Ct&&e.texStorage3D(a.TEXTURE_2D_ARRAY,At,Rt,dt.width,dt.height,dt.depth),e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,zt,Dt,dt.data)):e.texImage3D(a.TEXTURE_2D_ARRAY,0,Rt,dt.width,dt.height,dt.depth,0,zt,Dt,dt.data);else if(y.isData3DTexture)ft?(Ct&&e.texStorage3D(a.TEXTURE_3D,At,Rt,dt.width,dt.height,dt.depth),e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,zt,Dt,dt.data)):e.texImage3D(a.TEXTURE_3D,0,Rt,dt.width,dt.height,dt.depth,0,zt,Dt,dt.data);else if(y.isFramebufferTexture){if(Ct)if(ft)e.texStorage2D(a.TEXTURE_2D,At,Rt,dt.width,dt.height);else{let ut=dt.width,I=dt.height;for(let vt=0;vt<At;vt++)e.texImage2D(a.TEXTURE_2D,vt,Rt,ut,I,0,zt,Dt,null),ut>>=1,I>>=1}}else if(L.length>0&&Bt){ft&&Ct&&e.texStorage2D(a.TEXTURE_2D,At,Rt,L[0].width,L[0].height);for(let ut=0,I=L.length;ut<I;ut++)Et=L[ut],ft?e.texSubImage2D(a.TEXTURE_2D,ut,0,0,zt,Dt,Et):e.texImage2D(a.TEXTURE_2D,ut,Rt,zt,Dt,Et);y.generateMipmaps=!1}else ft?(Ct&&e.texStorage2D(a.TEXTURE_2D,At,Rt,dt.width,dt.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,zt,Dt,dt)):e.texImage2D(a.TEXTURE_2D,0,Rt,zt,Dt,dt);A(y,Bt)&&_(ot),St.__version=nt.version,y.onUpdate&&y.onUpdate(y)}x.__version=y.version}function et(x,y,B){if(y.image.length!==6)return;const ot=D(x,y),lt=y.source;e.bindTexture(a.TEXTURE_CUBE_MAP,x.__webglTexture,a.TEXTURE0+B);const nt=i.get(lt);if(lt.version!==nt.__version||ot===!0){e.activeTexture(a.TEXTURE0+B);const St=Zt.getPrimaries(Zt.workingColorSpace),pt=y.colorSpace===Oe?null:Zt.getPrimaries(y.colorSpace),Mt=y.colorSpace===Oe||St===pt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,Nt=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let ut=0;ut<6;ut++)!Pt&&!Nt?dt[ut]=v(y.image[ut],!1,!0,n.maxCubemapSize):dt[ut]=Nt?y.image[ut].image:y.image[ut],dt[ut]=gt(y,dt[ut]);const Bt=dt[0],zt=u(Bt)||o,Dt=s.convert(y.format,y.colorSpace),Rt=s.convert(y.type),Et=S(y.internalFormat,Dt,Rt,y.colorSpace),L=o&&y.isVideoTexture!==!0,ft=nt.__version===void 0||ot===!0;let Ct=O(y,Bt,zt);k(a.TEXTURE_CUBE_MAP,y,zt);let At;if(Pt){L&&ft&&e.texStorage2D(a.TEXTURE_CUBE_MAP,Ct,Et,Bt.width,Bt.height);for(let ut=0;ut<6;ut++){At=dt[ut].mipmaps;for(let I=0;I<At.length;I++){const vt=At[I];y.format!==Ge?Dt!==null?L?e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I,0,0,vt.width,vt.height,Dt,vt.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I,Et,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I,0,0,vt.width,vt.height,Dt,Rt,vt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I,Et,vt.width,vt.height,0,Dt,Rt,vt.data)}}}else{At=y.mipmaps,L&&ft&&(At.length>0&&Ct++,e.texStorage2D(a.TEXTURE_CUBE_MAP,Ct,Et,dt[0].width,dt[0].height));for(let ut=0;ut<6;ut++)if(Nt){L?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,dt[ut].width,dt[ut].height,Dt,Rt,dt[ut].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Et,dt[ut].width,dt[ut].height,0,Dt,Rt,dt[ut].data);for(let I=0;I<At.length;I++){const Tt=At[I].image[ut].image;L?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I+1,0,0,Tt.width,Tt.height,Dt,Rt,Tt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I+1,Et,Tt.width,Tt.height,0,Dt,Rt,Tt.data)}}else{L?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Dt,Rt,dt[ut]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Et,Dt,Rt,dt[ut]);for(let I=0;I<At.length;I++){const vt=At[I];L?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I+1,0,0,Dt,Rt,vt.image[ut]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ut,I+1,Et,Dt,Rt,vt.image[ut])}}}A(y,zt)&&_(a.TEXTURE_CUBE_MAP),nt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}x.__version=y.version}function tt(x,y,B,ot,lt,nt){const St=s.convert(B.format,B.colorSpace),pt=s.convert(B.type),Mt=S(B.internalFormat,St,pt,B.colorSpace);if(!i.get(y).__hasExternalTextures){const Nt=Math.max(1,y.width>>nt),dt=Math.max(1,y.height>>nt);lt===a.TEXTURE_3D||lt===a.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,Mt,Nt,dt,y.depth,0,St,pt,null):e.texImage2D(lt,nt,Mt,Nt,dt,0,St,pt,null)}e.bindFramebuffer(a.FRAMEBUFFER,x),Q(y)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ot,lt,i.get(B).__webglTexture,0,rt(y)):(lt===a.TEXTURE_2D||lt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ot,lt,i.get(B).__webglTexture,nt),e.bindFramebuffer(a.FRAMEBUFFER,null)}function st(x,y,B){if(a.bindRenderbuffer(a.RENDERBUFFER,x),y.depthBuffer&&!y.stencilBuffer){let ot=o===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(B||Q(y)){const lt=y.depthTexture;lt&&lt.isDepthTexture&&(lt.type===hi?ot=a.DEPTH_COMPONENT32F:lt.type===di&&(ot=a.DEPTH_COMPONENT24));const nt=rt(y);Q(y)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,nt,ot,y.width,y.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,nt,ot,y.width,y.height)}else a.renderbufferStorage(a.RENDERBUFFER,ot,y.width,y.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,x)}else if(y.depthBuffer&&y.stencilBuffer){const ot=rt(y);B&&Q(y)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ot,a.DEPTH24_STENCIL8,y.width,y.height):Q(y)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ot,a.DEPTH24_STENCIL8,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,x)}else{const ot=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let lt=0;lt<ot.length;lt++){const nt=ot[lt],St=s.convert(nt.format,nt.colorSpace),pt=s.convert(nt.type),Mt=S(nt.internalFormat,St,pt,nt.colorSpace),Pt=rt(y);B&&Q(y)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Pt,Mt,y.width,y.height):Q(y)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Pt,Mt,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,Mt,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function mt(x,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,x),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),N(y.depthTexture,0);const ot=i.get(y.depthTexture).__webglTexture,lt=rt(y);if(y.depthTexture.format===wi)Q(y)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ot,0,lt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ot,0);else if(y.depthTexture.format===on)Q(y)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ot,0,lt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function ht(x){const y=i.get(x),B=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,x)}else if(B){y.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[ot]),y.__webglDepthbuffer[ot]=a.createRenderbuffer(),st(y.__webglDepthbuffer[ot],x,!1)}else e.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=a.createRenderbuffer(),st(y.__webglDepthbuffer,x,!1);e.bindFramebuffer(a.FRAMEBUFFER,null)}function _t(x,y,B){const ot=i.get(x);y!==void 0&&tt(ot.__webglFramebuffer,x,x.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&ht(x)}function R(x){const y=x.texture,B=i.get(x),ot=i.get(y);x.addEventListener("dispose",X),x.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=a.createTexture()),ot.__version=y.version,r.memory.textures++);const lt=x.isWebGLCubeRenderTarget===!0,nt=x.isWebGLMultipleRenderTargets===!0,St=u(x)||o;if(lt){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)B.__webglFramebuffer[pt][Mt]=a.createFramebuffer()}else B.__webglFramebuffer[pt]=a.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)B.__webglFramebuffer[pt]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(nt)if(n.drawBuffers){const pt=x.texture;for(let Mt=0,Pt=pt.length;Mt<Pt;Mt++){const Nt=i.get(pt[Mt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&Q(x)===!1){const pt=nt?y:[y];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Mt=0;Mt<pt.length;Mt++){const Pt=pt[Mt];B.__webglColorRenderbuffer[Mt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[Mt]);const Nt=s.convert(Pt.format,Pt.colorSpace),dt=s.convert(Pt.type),Bt=S(Pt.internalFormat,Nt,dt,Pt.colorSpace,x.isXRRenderTarget===!0),zt=rt(x);a.renderbufferStorageMultisample(a.RENDERBUFFER,zt,Bt,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Mt,a.RENDERBUFFER,B.__webglColorRenderbuffer[Mt])}a.bindRenderbuffer(a.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),st(B.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(lt){e.bindTexture(a.TEXTURE_CUBE_MAP,ot.__webglTexture),k(a.TEXTURE_CUBE_MAP,y,St);for(let pt=0;pt<6;pt++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)tt(B.__webglFramebuffer[pt][Mt],x,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else tt(B.__webglFramebuffer[pt],x,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);A(y,St)&&_(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const pt=x.texture;for(let Mt=0,Pt=pt.length;Mt<Pt;Mt++){const Nt=pt[Mt],dt=i.get(Nt);e.bindTexture(a.TEXTURE_2D,dt.__webglTexture),k(a.TEXTURE_2D,Nt,St),tt(B.__webglFramebuffer,x,Nt,a.COLOR_ATTACHMENT0+Mt,a.TEXTURE_2D,0),A(Nt,St)&&_(a.TEXTURE_2D)}e.unbindTexture()}else{let pt=a.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?pt=x.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,ot.__webglTexture),k(pt,y,St),o&&y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)tt(B.__webglFramebuffer[Mt],x,y,a.COLOR_ATTACHMENT0,pt,Mt);else tt(B.__webglFramebuffer,x,y,a.COLOR_ATTACHMENT0,pt,0);A(y,St)&&_(pt),e.unbindTexture()}x.depthBuffer&&ht(x)}function ct(x){const y=u(x)||o,B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ot=0,lt=B.length;ot<lt;ot++){const nt=B[ot];if(A(nt,y)){const St=x.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,pt=i.get(nt).__webglTexture;e.bindTexture(St,pt),_(St),e.unbindTexture()}}}function G(x){if(o&&x.samples>0&&Q(x)===!1){const y=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],B=x.width,ot=x.height;let lt=a.COLOR_BUFFER_BIT;const nt=[],St=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pt=i.get(x),Mt=x.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){nt.push(a.COLOR_ATTACHMENT0+Pt),x.depthBuffer&&nt.push(St);const Nt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Nt===!1&&(x.depthBuffer&&(lt|=a.DEPTH_BUFFER_BIT),x.stencilBuffer&&(lt|=a.STENCIL_BUFFER_BIT)),Mt&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,pt.__webglColorRenderbuffer[Pt]),Nt===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[St]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[St])),Mt){const dt=i.get(y[Pt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,dt,0)}a.blitFramebuffer(0,0,B,ot,0,0,B,ot,lt,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Mt)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.RENDERBUFFER,pt.__webglColorRenderbuffer[Pt]);const Nt=i.get(y[Pt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.TEXTURE_2D,Nt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function rt(x){return Math.min(n.maxSamples,x.samples)}function Q(x){const y=i.get(x);return o&&x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(x){const y=r.render.frame;d.get(x)!==y&&(d.set(x,y),x.update())}function gt(x,y){const B=x.colorSpace,ot=x.format,lt=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Ss||B!==ni&&B!==Oe&&(Zt.getTransfer(B)===Kt?o===!1?t.has("EXT_sRGB")===!0&&ot===Ge?(x.format=Ss,x.minFilter=Ue,x.generateMipmaps=!1):y=Zo.sRGBToLinear(y):(ot!==Ge||lt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=U,this.resetTextureUnits=at,this.setTexture2D=N,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=it,this.rebindTextures=_t,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Q}function Pf(a,t,e){const i=e.isWebGL2;function n(s,r=Oe){let o;const l=Zt.getTransfer(r);if(s===fi)return a.UNSIGNED_BYTE;if(s===Bo)return a.UNSIGNED_SHORT_4_4_4_4;if(s===qo)return a.UNSIGNED_SHORT_5_5_5_1;if(s===cc)return a.BYTE;if(s===dc)return a.SHORT;if(s===ks)return a.UNSIGNED_SHORT;if(s===Fo)return a.INT;if(s===di)return a.UNSIGNED_INT;if(s===hi)return a.FLOAT;if(s===An)return i?a.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===hc)return a.ALPHA;if(s===Ge)return a.RGBA;if(s===uc)return a.LUMINANCE;if(s===pc)return a.LUMINANCE_ALPHA;if(s===wi)return a.DEPTH_COMPONENT;if(s===on)return a.DEPTH_STENCIL;if(s===Ss)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===fc)return a.RED;if(s===Ho)return a.RED_INTEGER;if(s===mc)return a.RG;if(s===Go)return a.RG_INTEGER;if(s===Vo)return a.RGBA_INTEGER;if(s===Ra||s===La||s===ka||s===Da)if(l===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===La)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sr||s===rr||s===or||s===lr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===sr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===or)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wo)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cr||s===dr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===cr)return l===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===dr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hr||s===ur||s===pr||s===fr||s===mr||s===gr||s===vr||s===yr||s===_r||s===br||s===xr||s===Sr||s===Mr||s===Tr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===hr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ur)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_r)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===br)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ua||s===Er||s===Ar)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ua)return l===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Er)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ar)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gc||s===wr||s===Cr||s===Pr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ua)return o.COMPRESSED_RED_RGTC1_EXT;if(s===wr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?i?a.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:n}}class Rf extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tn extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const u=e.getJointPose(v,i),f=this._getHandJoint(c,v);u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=u.radius),f.visible=u!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class kf extends Di{constructor(t,e){super();const i=this;let n=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,g=null;const v=e.getContextAttributes();let u=null,f=null;const A=[],_=[],S=new yt;let O=null;const P=new Ne;P.layers.enable(1),P.viewport=new pe;const C=new Ne;C.layers.enable(2),C.viewport=new pe;const X=[P,C],b=new Rf;b.layers.enable(1),b.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let D=A[k];return D===void 0&&(D=new as,A[k]=D),D.getTargetRaySpace()},this.getControllerGrip=function(k){let D=A[k];return D===void 0&&(D=new as,A[k]=D),D.getGripSpace()},this.getHand=function(k){let D=A[k];return D===void 0&&(D=new as,A[k]=D),D.getHandSpace()};function V(k){const D=_.indexOf(k.inputSource);if(D===-1)return;const j=A[D];j!==void 0&&(j.update(k.inputSource,k.frame,c||r),j.dispatchEvent({type:k.type,data:k.inputSource}))}function at(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",at),n.removeEventListener("inputsourceschange",U);for(let k=0;k<A.length;k++){const D=_[k];D!==null&&(_[k]=null,A[k].disconnect(D))}M=null,F=null,t.setRenderTarget(u),m=null,p=null,h=null,n=null,f=null,$.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(u=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",at),n.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(S),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const D={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(n,e,D),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Pi(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let D=null,j=null,et=null;v.depth&&(et=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=v.stencil?on:wi,j=v.stencil?Ai:di);const tt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:s};h=new XRWebGLBinding(n,e),p=h.createProjectionLayer(tt),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),f=new Pi(p.textureWidth,p.textureHeight,{format:Ge,type:fi,depthTexture:new ll(p.textureWidth,p.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const st=t.properties.get(f);st.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),$.setContext(n),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(k){for(let D=0;D<k.removed.length;D++){const j=k.removed[D],et=_.indexOf(j);et>=0&&(_[et]=null,A[et].disconnect(j))}for(let D=0;D<k.added.length;D++){const j=k.added[D];let et=_.indexOf(j);if(et===-1){for(let st=0;st<A.length;st++)if(st>=_.length){_.push(j),et=st;break}else if(_[st]===null){_[st]=j,et=st;break}if(et===-1)break}const tt=A[et];tt&&tt.connect(j)}}const q=new z,N=new z;function W(k,D,j){q.setFromMatrixPosition(D.matrixWorld),N.setFromMatrixPosition(j.matrixWorld);const et=q.distanceTo(N),tt=D.projectionMatrix.elements,st=j.projectionMatrix.elements,mt=tt[14]/(tt[10]-1),ht=tt[14]/(tt[10]+1),_t=(tt[9]+1)/tt[5],R=(tt[9]-1)/tt[5],ct=(tt[8]-1)/tt[0],G=(st[8]+1)/st[0],rt=mt*ct,Q=mt*G,xt=et/(-ct+G),gt=xt*-ct;D.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(gt),k.translateZ(xt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const x=mt+xt,y=ht+xt,B=rt-gt,ot=Q+(et-gt),lt=_t*ht/y*x,nt=R*ht/y*x;k.projectionMatrix.makePerspective(B,ot,lt,nt,x,y),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function K(k,D){D===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(D.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;b.near=C.near=P.near=k.near,b.far=C.far=P.far=k.far,(M!==b.near||F!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,F=b.far);const D=k.parent,j=b.cameras;K(b,D);for(let et=0;et<j.length;et++)K(j[et],D);j.length===2?W(b,P,C):b.projectionMatrix.copy(P.projectionMatrix),it(k,b,D)};function it(k,D,j){j===null?k.matrix.copy(D.matrixWorld):(k.matrix.copy(j.matrixWorld),k.matrix.invert(),k.matrix.multiply(D.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(D.projectionMatrix),k.projectionMatrixInverse.copy(D.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ms*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let w=null;function E(k,D){if(d=D.getViewerPose(c||r),g=D,d!==null){const j=d.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let et=!1;j.length!==b.cameras.length&&(b.cameras.length=0,et=!0);for(let tt=0;tt<j.length;tt++){const st=j[tt];let mt=null;if(m!==null)mt=m.getViewport(st);else{const _t=h.getViewSubImage(p,st);mt=_t.viewport,tt===0&&(t.setRenderTargetTextures(f,_t.colorTexture,p.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(f))}let ht=X[tt];ht===void 0&&(ht=new Ne,ht.layers.enable(tt),ht.viewport=new pe,X[tt]=ht),ht.matrix.fromArray(st.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(st.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(mt.x,mt.y,mt.width,mt.height),tt===0&&(b.matrix.copy(ht.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),et===!0&&b.cameras.push(ht)}}for(let j=0;j<A.length;j++){const et=_[j],tt=A[j];et!==null&&tt!==void 0&&tt.update(et,D,c||r)}w&&w(k,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const $=new rl;$.setAnimationLoop(E),this.setAnimationLoop=function(k){w=k},this.dispose=function(){}}}function Df(a,t){function e(u,f){u.matrixAutoUpdate===!0&&u.updateMatrix(),f.value.copy(u.matrix)}function i(u,f){f.color.getRGB(u.fogColor.value,nl(a)),f.isFog?(u.fogNear.value=f.near,u.fogFar.value=f.far):f.isFogExp2&&(u.fogDensity.value=f.density)}function n(u,f,A,_,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(u,f):f.isMeshToonMaterial?(s(u,f),h(u,f)):f.isMeshPhongMaterial?(s(u,f),d(u,f)):f.isMeshStandardMaterial?(s(u,f),p(u,f),f.isMeshPhysicalMaterial&&m(u,f,S)):f.isMeshMatcapMaterial?(s(u,f),g(u,f)):f.isMeshDepthMaterial?s(u,f):f.isMeshDistanceMaterial?(s(u,f),v(u,f)):f.isMeshNormalMaterial?s(u,f):f.isLineBasicMaterial?(r(u,f),f.isLineDashedMaterial&&o(u,f)):f.isPointsMaterial?l(u,f,A,_):f.isSpriteMaterial?c(u,f):f.isShadowMaterial?(u.color.value.copy(f.color),u.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(u,f){u.opacity.value=f.opacity,f.color&&u.diffuse.value.copy(f.color),f.emissive&&u.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(u.map.value=f.map,e(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.bumpMap&&(u.bumpMap.value=f.bumpMap,e(f.bumpMap,u.bumpMapTransform),u.bumpScale.value=f.bumpScale,f.side===Te&&(u.bumpScale.value*=-1)),f.normalMap&&(u.normalMap.value=f.normalMap,e(f.normalMap,u.normalMapTransform),u.normalScale.value.copy(f.normalScale),f.side===Te&&u.normalScale.value.negate()),f.displacementMap&&(u.displacementMap.value=f.displacementMap,e(f.displacementMap,u.displacementMapTransform),u.displacementScale.value=f.displacementScale,u.displacementBias.value=f.displacementBias),f.emissiveMap&&(u.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,u.emissiveMapTransform)),f.specularMap&&(u.specularMap.value=f.specularMap,e(f.specularMap,u.specularMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest);const A=t.get(f).envMap;if(A&&(u.envMap.value=A,u.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=f.reflectivity,u.ior.value=f.ior,u.refractionRatio.value=f.refractionRatio),f.lightMap){u.lightMap.value=f.lightMap;const _=a._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,u.lightMapTransform)}f.aoMap&&(u.aoMap.value=f.aoMap,u.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,u.aoMapTransform))}function r(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,f.map&&(u.map.value=f.map,e(f.map,u.mapTransform))}function o(u,f){u.dashSize.value=f.dashSize,u.totalSize.value=f.dashSize+f.gapSize,u.scale.value=f.scale}function l(u,f,A,_){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.size.value=f.size*A,u.scale.value=_*.5,f.map&&(u.map.value=f.map,e(f.map,u.uvTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function c(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.rotation.value=f.rotation,f.map&&(u.map.value=f.map,e(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function d(u,f){u.specular.value.copy(f.specular),u.shininess.value=Math.max(f.shininess,1e-4)}function h(u,f){f.gradientMap&&(u.gradientMap.value=f.gradientMap)}function p(u,f){u.metalness.value=f.metalness,f.metalnessMap&&(u.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,u.metalnessMapTransform)),u.roughness.value=f.roughness,f.roughnessMap&&(u.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,u.roughnessMapTransform)),t.get(f).envMap&&(u.envMapIntensity.value=f.envMapIntensity)}function m(u,f,A){u.ior.value=f.ior,f.sheen>0&&(u.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),u.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(u.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,u.sheenColorMapTransform)),f.sheenRoughnessMap&&(u.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,u.sheenRoughnessMapTransform))),f.clearcoat>0&&(u.clearcoat.value=f.clearcoat,u.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(u.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,u.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(u.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&u.clearcoatNormalScale.value.negate())),f.iridescence>0&&(u.iridescence.value=f.iridescence,u.iridescenceIOR.value=f.iridescenceIOR,u.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(u.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,u.iridescenceMapTransform)),f.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),f.transmission>0&&(u.transmission.value=f.transmission,u.transmissionSamplerMap.value=A.texture,u.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(u.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,u.transmissionMapTransform)),u.thickness.value=f.thickness,f.thicknessMap&&(u.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=f.attenuationDistance,u.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(u.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(u.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=f.specularIntensity,u.specularColor.value.copy(f.specularColor),f.specularColorMap&&(u.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,u.specularColorMapTransform)),f.specularIntensityMap&&(u.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,f){f.matcap&&(u.matcap.value=f.matcap)}function v(u,f){const A=t.get(f).light;u.referencePosition.value.setFromMatrixPosition(A.matrixWorld),u.nearDistance.value=A.shadow.camera.near,u.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Uf(a,t,e,i){let n={},s={},r=[];const o=e.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,_){const S=_.program;i.uniformBlockBinding(A,S)}function c(A,_){let S=n[A.id];S===void 0&&(g(A),S=d(A),n[A.id]=S,A.addEventListener("dispose",u));const O=_.program;i.updateUBOMapping(A,O);const P=t.render.frame;s[A.id]!==P&&(p(A),s[A.id]=P)}function d(A){const _=h();A.__bindingPointIndex=_;const S=a.createBuffer(),O=A.__size,P=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,O,P),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,_,S),S}function h(){for(let A=0;A<o;A++)if(r.indexOf(A)===-1)return r.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const _=n[A.id],S=A.uniforms,O=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let P=0,C=S.length;P<C;P++){const X=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,M=X.length;b<M;b++){const F=X[b];if(m(F,P,b,O)===!0){const V=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let U=0;for(let q=0;q<at.length;q++){const N=at[q],W=v(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,a.bufferSubData(a.UNIFORM_BUFFER,V+U,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,U),U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,V,F.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function m(A,_,S,O){const P=A.value,C=_+"_"+S;if(O[C]===void 0)return typeof P=="number"||typeof P=="boolean"?O[C]=P:O[C]=P.clone(),!0;{const X=O[C];if(typeof P=="number"||typeof P=="boolean"){if(X!==P)return O[C]=P,!0}else if(X.equals(P)===!1)return X.copy(P),!0}return!1}function g(A){const _=A.uniforms;let S=0;const O=16;for(let C=0,X=_.length;C<X;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,F=b.length;M<F;M++){const V=b[M],at=Array.isArray(V.value)?V.value:[V.value];for(let U=0,q=at.length;U<q;U++){const N=at[U],W=v(N),K=S%O;K!==0&&O-K<W.boundary&&(S+=O-K),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=W.storage}}}const P=S%O;return P>0&&(S+=O-P),A.__size=S,A.__cache={},this}function v(A){const _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),_}function u(A){const _=A.target;_.removeEventListener("dispose",u);const S=r.indexOf(_.__bindingPointIndex);r.splice(S,1),a.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function f(){for(const A in n)a.deleteBuffer(n[A]);r=[],n={},s={}}return{bind:l,update:c,dispose:f}}class fl{constructor(t={}){const{canvas:e=Pc(),context:i=null,depth:n=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=r;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,u=null;const f=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const _=this;let S=!1,O=0,P=0,C=null,X=-1,b=null;const M=new pe,F=new pe;let V=null;const at=new Xt(0);let U=0,q=e.width,N=e.height,W=1,K=null,it=null;const w=new pe(0,0,q,N),E=new pe(0,0,q,N);let $=!1;const k=new Is;let D=!1,j=!1,et=null;const tt=new se,st=new yt,mt=new z,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _t(){return C===null?W:1}let R=i;function ct(T,H){for(let Z=0;Z<T.length;Z++){const J=T[Z],Y=e.getContext(J,H);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ls}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",vt,!1),R===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),R=ct(H,T),R===null)throw ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let G,rt,Q,xt,gt,x,y,B,ot,lt,nt,St,pt,Mt,Pt,Nt,dt,Bt,zt,Dt,Rt,Et,L,ft;function Ct(){G=new Gu(R),rt=new Ou(R,G,t),G.init(rt),Et=new Pf(R,G,rt),Q=new wf(R,G,rt),xt=new Xu(R),gt=new pf,x=new Cf(R,G,Q,gt,rt,Et,xt),y=new Fu(_),B=new Hu(_),ot=new td(R,rt),L=new Iu(R,G,ot,rt),lt=new Vu(R,ot,xt,L),nt=new Zu(R,lt,ot,xt),zt=new Yu(R,rt,x),Nt=new zu(gt),St=new uf(_,y,B,G,rt,L,Nt),pt=new Df(_,gt),Mt=new mf,Pt=new xf(G,rt),Bt=new Uu(_,y,B,Q,nt,p,l),dt=new Af(_,nt,rt),ft=new Uf(R,xt,rt,Q),Dt=new Nu(R,G,xt,rt),Rt=new Wu(R,G,xt,rt),xt.programs=St.programs,_.capabilities=rt,_.extensions=G,_.properties=gt,_.renderLists=Mt,_.shadowMap=dt,_.state=Q,_.info=xt}Ct();const At=new kf(_,R);this.xr=At,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=G.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=G.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(q,N,!1))},this.getSize=function(T){return T.set(q,N)},this.setSize=function(T,H,Z=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,N=H,e.width=Math.floor(T*W),e.height=Math.floor(H*W),Z===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(q*W,N*W).floor()},this.setDrawingBufferSize=function(T,H,Z){q=T,N=H,W=Z,e.width=Math.floor(T*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(w)},this.setViewport=function(T,H,Z,J){T.isVector4?w.set(T.x,T.y,T.z,T.w):w.set(T,H,Z,J),Q.viewport(M.copy(w).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(E)},this.setScissor=function(T,H,Z,J){T.isVector4?E.set(T.x,T.y,T.z,T.w):E.set(T,H,Z,J),Q.scissor(F.copy(E).multiplyScalar(W).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(T){Q.setScissorTest($=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let J=0;if(T){let Y=!1;if(C!==null){const wt=C.texture.format;Y=wt===Vo||wt===Go||wt===Ho}if(Y){const wt=C.texture.type,Lt=wt===fi||wt===di||wt===ks||wt===Ai||wt===Bo||wt===qo,It=Bt.getClearColor(),Ot=Bt.getClearAlpha(),Gt=It.r,Ft=It.g,qt=It.b;Lt?(m[0]=Gt,m[1]=Ft,m[2]=qt,m[3]=Ot,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Gt,g[1]=Ft,g[2]=qt,g[3]=Ot,R.clearBufferiv(R.COLOR,0,g))}else J|=R.COLOR_BUFFER_BIT}H&&(J|=R.DEPTH_BUFFER_BIT),Z&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),Pt.dispose(),gt.dispose(),y.dispose(),B.dispose(),nt.dispose(),L.dispose(),ft.dispose(),St.dispose(),At.dispose(),At.removeEventListener("sessionstart",ne),At.removeEventListener("sessionend",Yt),et&&(et.dispose(),et=null),re.stop()};function ut(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=xt.autoReset,H=dt.enabled,Z=dt.autoUpdate,J=dt.needsUpdate,Y=dt.type;Ct(),xt.autoReset=T,dt.enabled=H,dt.autoUpdate=Z,dt.needsUpdate=J,dt.type=Y}function vt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){const H=T.target;H.removeEventListener("dispose",Tt),Ut(H)}function Ut(T){kt(T),gt.remove(T)}function kt(T){const H=gt.get(T).programs;H!==void 0&&(H.forEach(function(Z){St.releaseProgram(Z)}),T.isShaderMaterial&&St.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,J,Y,wt){H===null&&(H=ht);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,It=El(T,H,Z,J,Y);Q.setMaterial(J,Lt);let Ot=Z.index,Gt=1;if(J.wireframe===!0){if(Ot=lt.getWireframeAttribute(Z),Ot===void 0)return;Gt=2}const Ft=Z.drawRange,qt=Z.attributes.position;let ae=Ft.start*Gt,Ee=(Ft.start+Ft.count)*Gt;wt!==null&&(ae=Math.max(ae,wt.start*Gt),Ee=Math.min(Ee,(wt.start+wt.count)*Gt)),Ot!==null?(ae=Math.max(ae,0),Ee=Math.min(Ee,Ot.count)):qt!=null&&(ae=Math.max(ae,0),Ee=Math.min(Ee,qt.count));const de=Ee-ae;if(de<0||de===1/0)return;L.setup(Y,J,It,Z,Ot);let $e,Qt=Dt;if(Ot!==null&&($e=ot.get(Ot),Qt=Rt,Qt.setIndex($e)),Y.isMesh)J.wireframe===!0?(Q.setLineWidth(J.wireframeLinewidth*_t()),Qt.setMode(R.LINES)):Qt.setMode(R.TRIANGLES);else if(Y.isLine){let Vt=J.linewidth;Vt===void 0&&(Vt=1),Q.setLineWidth(Vt*_t()),Y.isLineSegments?Qt.setMode(R.LINES):Y.isLineLoop?Qt.setMode(R.LINE_LOOP):Qt.setMode(R.LINE_STRIP)}else Y.isPoints?Qt.setMode(R.POINTS):Y.isSprite&&Qt.setMode(R.TRIANGLES);if(Y.isBatchedMesh)Qt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Qt.renderInstances(ae,de,Y.count);else if(Z.isInstancedBufferGeometry){const Vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ea=Math.min(Z.instanceCount,Vt);Qt.renderInstances(ae,de,Ea)}else Qt.render(ae,de)};function $t(T,H,Z){T.transparent===!0&&T.side===qe&&T.forceSinglePass===!1?(T.side=Te,T.needsUpdate=!0,kn(T,H,Z),T.side=mi,T.needsUpdate=!0,kn(T,H,Z),T.side=qe):kn(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),u=Pt.get(Z),u.init(),A.push(u),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),T!==Z&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),u.setupLights(_._useLegacyLights);const J=new Set;return T.traverse(function(Y){const wt=Y.material;if(wt)if(Array.isArray(wt))for(let Lt=0;Lt<wt.length;Lt++){const It=wt[Lt];$t(It,Z,Y),J.add(It)}else $t(wt,Z,Y),J.add(wt)}),A.pop(),u=null,J},this.compileAsync=function(T,H,Z=null){const J=this.compile(T,H,Z);return new Promise(Y=>{function wt(){if(J.forEach(function(Lt){gt.get(Lt).currentProgram.isReady()&&J.delete(Lt)}),J.size===0){Y(T);return}setTimeout(wt,10)}G.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let jt=null;function te(T){jt&&jt(T)}function ne(){re.stop()}function Yt(){re.start()}const re=new rl;re.setAnimationLoop(te),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(T){jt=T,At.setAnimationLoop(T),T===null?re.stop():re.start()},At.addEventListener("sessionstart",ne),At.addEventListener("sessionend",Yt),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(H),H=At.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,H,C),u=Pt.get(T,A.length),u.init(),A.push(u),tt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),k.setFromProjectionMatrix(tt),j=this.localClippingEnabled,D=Nt.init(this.clippingPlanes,j),v=Mt.get(T,f.length),v.init(),f.push(v),Ve(T,H,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(K,it),this.info.render.frame++,D===!0&&Nt.beginShadows();const Z=u.state.shadowsArray;if(dt.render(Z,T,H),D===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Bt.render(v,T),u.setupLights(_._useLegacyLights),H.isArrayCamera){const J=H.cameras;for(let Y=0,wt=J.length;Y<wt;Y++){const Lt=J[Y];Xs(v,T,Lt,Lt.viewport)}}else Xs(v,T,H);C!==null&&(x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,H),L.resetDefaultState(),X=-1,b=null,A.pop(),A.length>0?u=A[A.length-1]:u=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ve(T,H,Z,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||k.intersectsSprite(T)){J&&mt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);const Lt=nt.update(T),It=T.material;It.visible&&v.push(T,Lt,It,Z,mt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||k.intersectsObject(T))){const Lt=nt.update(T),It=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),mt.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),mt.copy(Lt.boundingSphere.center)),mt.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(It)){const Ot=Lt.groups;for(let Gt=0,Ft=Ot.length;Gt<Ft;Gt++){const qt=Ot[Gt],ae=It[qt.materialIndex];ae&&ae.visible&&v.push(T,Lt,ae,Z,mt.z,qt)}}else It.visible&&v.push(T,Lt,It,Z,mt.z,null)}}const wt=T.children;for(let Lt=0,It=wt.length;Lt<It;Lt++)Ve(wt[Lt],H,Z,J)}function Xs(T,H,Z,J){const Y=T.opaque,wt=T.transmissive,Lt=T.transparent;u.setupLightsView(Z),D===!0&&Nt.setGlobalState(_.clippingPlanes,Z),wt.length>0&&Tl(Y,wt,H,Z),J&&Q.viewport(M.copy(J)),Y.length>0&&Ln(Y,H,Z),wt.length>0&&Ln(wt,H,Z),Lt.length>0&&Ln(Lt,H,Z),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Tl(T,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const wt=rt.isWebGL2;et===null&&(et=new Pi(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")?An:fi,minFilter:En,samples:wt?4:0})),_.getDrawingBufferSize(st),wt?et.setSize(st.x,st.y):et.setSize(Ts(st.x),Ts(st.y));const Lt=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(at),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();const It=_.toneMapping;_.toneMapping=pi,Ln(T,Z,J),x.updateMultisampleRenderTarget(et),x.updateRenderTargetMipmap(et);let Ot=!1;for(let Gt=0,Ft=H.length;Gt<Ft;Gt++){const qt=H[Gt],ae=qt.object,Ee=qt.geometry,de=qt.material,$e=qt.group;if(de.side===qe&&ae.layers.test(J.layers)){const Qt=de.side;de.side=Te,de.needsUpdate=!0,$s(ae,Z,J,Ee,de,$e),de.side=Qt,de.needsUpdate=!0,Ot=!0}}Ot===!0&&(x.updateMultisampleRenderTarget(et),x.updateRenderTargetMipmap(et)),_.setRenderTarget(Lt),_.setClearColor(at,U),_.toneMapping=It}function Ln(T,H,Z){const J=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,wt=T.length;Y<wt;Y++){const Lt=T[Y],It=Lt.object,Ot=Lt.geometry,Gt=J===null?Lt.material:J,Ft=Lt.group;It.layers.test(Z.layers)&&$s(It,H,Z,Ot,Gt,Ft)}}function $s(T,H,Z,J,Y,wt){T.onBeforeRender(_,H,Z,J,Y,wt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(_,H,Z,J,T,wt),Y.transparent===!0&&Y.side===qe&&Y.forceSinglePass===!1?(Y.side=Te,Y.needsUpdate=!0,_.renderBufferDirect(Z,H,J,Y,T,wt),Y.side=mi,Y.needsUpdate=!0,_.renderBufferDirect(Z,H,J,Y,T,wt),Y.side=qe):_.renderBufferDirect(Z,H,J,Y,T,wt),T.onAfterRender(_,H,Z,J,Y,wt)}function kn(T,H,Z){H.isScene!==!0&&(H=ht);const J=gt.get(T),Y=u.state.lights,wt=u.state.shadowsArray,Lt=Y.state.version,It=St.getParameters(T,Y.state,wt,H,Z),Ot=St.getProgramCacheKey(It);let Gt=J.programs;J.environment=T.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(T.isMeshStandardMaterial?B:y).get(T.envMap||J.environment),Gt===void 0&&(T.addEventListener("dispose",Tt),Gt=new Map,J.programs=Gt);let Ft=Gt.get(Ot);if(Ft!==void 0){if(J.currentProgram===Ft&&J.lightsStateVersion===Lt)return Ys(T,It),Ft}else It.uniforms=St.getUniforms(T),T.onBuild(Z,It,_),T.onBeforeCompile(It,_),Ft=St.acquireProgram(It,Ot),Gt.set(Ot,Ft),J.uniforms=It.uniforms;const qt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Nt.uniform),Ys(T,It),J.needsLights=wl(T),J.lightsStateVersion=Lt,J.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ft,J.uniformsList=null,Ft}function js(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=da.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Ys(T,H){const Z=gt.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function El(T,H,Z,J,Y){H.isScene!==!0&&(H=ht),x.resetTextureUnits();const wt=H.fog,Lt=J.isMeshStandardMaterial?H.environment:null,It=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ni,Ot=(J.isMeshStandardMaterial?B:y).get(J.envMap||Lt),Gt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ft=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qt=!!Z.morphAttributes.position,ae=!!Z.morphAttributes.normal,Ee=!!Z.morphAttributes.color;let de=pi;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=_.toneMapping);const $e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qt=$e!==void 0?$e.length:0,Vt=gt.get(J),Ea=u.state.lights;if(D===!0&&(j===!0||T!==b)){const Le=T===b&&J.id===X;Nt.setState(J,T,Le)}let ee=!1;J.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ea.state.version||Vt.outputColorSpace!==It||Y.isBatchedMesh&&Vt.batching===!1||!Y.isBatchedMesh&&Vt.batching===!0||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Vt.envMap!==Ot||J.fog===!0&&Vt.fog!==wt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Nt.numPlanes||Vt.numIntersection!==Nt.numIntersection)||Vt.vertexAlphas!==Gt||Vt.vertexTangents!==Ft||Vt.morphTargets!==qt||Vt.morphNormals!==ae||Vt.morphColors!==Ee||Vt.toneMapping!==de||rt.isWebGL2===!0&&Vt.morphTargetsCount!==Qt)&&(ee=!0):(ee=!0,Vt.__version=J.version);let gi=Vt.currentProgram;ee===!0&&(gi=kn(J,H,Y));let Zs=!1,pn=!1,Aa=!1;const ve=gi.getUniforms(),vi=Vt.uniforms;if(Q.useProgram(gi.program)&&(Zs=!0,pn=!0,Aa=!0),J.id!==X&&(X=J.id,pn=!0),Zs||b!==T){ve.setValue(R,"projectionMatrix",T.projectionMatrix),ve.setValue(R,"viewMatrix",T.matrixWorldInverse);const Le=ve.map.cameraPosition;Le!==void 0&&Le.setValue(R,mt.setFromMatrixPosition(T.matrixWorld)),rt.logarithmicDepthBuffer&&ve.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ve.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,pn=!0,Aa=!0)}if(Y.isSkinnedMesh){ve.setOptional(R,Y,"bindMatrix"),ve.setOptional(R,Y,"bindMatrixInverse");const Le=Y.skeleton;Le&&(rt.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),ve.setValue(R,"boneTexture",Le.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(ve.setOptional(R,Y,"batchingTexture"),ve.setValue(R,"batchingTexture",Y._matricesTexture,x));const wa=Z.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&rt.isWebGL2===!0)&&zt.update(Y,Z,gi),(pn||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,ve.setValue(R,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(vi.envMap.value=Ot,vi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(R,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&Al(vi,Aa),wt&&J.fog===!0&&pt.refreshFogUniforms(vi,wt),pt.refreshMaterialUniforms(vi,J,W,N,et),da.upload(R,js(Vt),vi,x)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(da.upload(R,js(Vt),vi,x),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ve.setValue(R,"center",Y.center),ve.setValue(R,"modelViewMatrix",Y.modelViewMatrix),ve.setValue(R,"normalMatrix",Y.normalMatrix),ve.setValue(R,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Le=J.uniformsGroups;for(let Ca=0,Cl=Le.length;Ca<Cl;Ca++)if(rt.isWebGL2){const Ks=Le[Ca];ft.update(Ks,gi),ft.bind(Ks,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Al(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function wl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,H,Z){gt.get(T.texture).__webglTexture=H,gt.get(T.depthTexture).__webglTexture=Z;const J=gt.get(T);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const Z=gt.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){C=T,O=H,P=Z;let J=!0,Y=null,wt=!1,Lt=!1;if(T){const Ot=gt.get(T);Ot.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(R.FRAMEBUFFER,null),J=!1):Ot.__webglFramebuffer===void 0?x.setupRenderTarget(T):Ot.__hasExternalTextures&&x.rebindTextures(T,gt.get(T.texture).__webglTexture,gt.get(T.depthTexture).__webglTexture);const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Lt=!0);const Ft=gt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[H])?Y=Ft[H][Z]:Y=Ft[H],wt=!0):rt.isWebGL2&&T.samples>0&&x.useMultisampledRTT(T)===!1?Y=gt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?Y=Ft[Z]:Y=Ft,M.copy(T.viewport),F.copy(T.scissor),V=T.scissorTest}else M.copy(w).multiplyScalar(W).floor(),F.copy(E).multiplyScalar(W).floor(),V=$;if(Q.bindFramebuffer(R.FRAMEBUFFER,Y)&&rt.drawBuffers&&J&&Q.drawBuffers(T,Y),Q.viewport(M),Q.scissor(F),Q.setScissorTest(V),wt){const Ot=gt.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ot.__webglTexture,Z)}else if(Lt){const Ot=gt.get(T.texture),Gt=H||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,Z||0,Gt)}X=-1},this.readRenderTargetPixels=function(T,H,Z,J,Y,wt,Lt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It){Q.bindFramebuffer(R.FRAMEBUFFER,It);try{const Ot=T.texture,Gt=Ot.format,Ft=Ot.type;if(Gt!==Ge&&Et.convert(Gt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=Ft===An&&(G.has("EXT_color_buffer_half_float")||rt.isWebGL2&&G.has("EXT_color_buffer_float"));if(Ft!==fi&&Et.convert(Ft)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===hi&&(rt.isWebGL2||G.has("OES_texture_float")||G.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&Z>=0&&Z<=T.height-Y&&R.readPixels(H,Z,J,Y,Et.convert(Gt),Et.convert(Ft),wt)}finally{const Ot=C!==null?gt.get(C).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(T,H,Z=0){const J=Math.pow(2,-Z),Y=Math.floor(H.image.width*J),wt=Math.floor(H.image.height*J);x.setTexture2D(H,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,T.x,T.y,Y,wt),Q.unbindTexture()},this.copyTextureToTexture=function(T,H,Z,J=0){const Y=H.image.width,wt=H.image.height,Lt=Et.convert(Z.format),It=Et.convert(Z.type);x.setTexture2D(Z,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Z.unpackAlignment),H.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,J,T.x,T.y,Y,wt,Lt,It,H.image.data):H.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,J,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Lt,H.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,J,T.x,T.y,Lt,It,H.image),J===0&&Z.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z,J,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=T.max.x-T.min.x+1,Lt=T.max.y-T.min.y+1,It=T.max.z-T.min.z+1,Ot=Et.convert(J.format),Gt=Et.convert(J.type);let Ft;if(J.isData3DTexture)x.setTexture3D(J,0),Ft=R.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)x.setTexture2DArray(J,0),Ft=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,J.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,J.unpackAlignment);const qt=R.getParameter(R.UNPACK_ROW_LENGTH),ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ee=R.getParameter(R.UNPACK_SKIP_PIXELS),de=R.getParameter(R.UNPACK_SKIP_ROWS),$e=R.getParameter(R.UNPACK_SKIP_IMAGES),Qt=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,T.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,T.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?R.texSubImage3D(Ft,Y,H.x,H.y,H.z,wt,Lt,It,Ot,Gt,Qt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ft,Y,H.x,H.y,H.z,wt,Lt,It,Ot,Qt.data)):R.texSubImage3D(Ft,Y,H.x,H.y,H.z,wt,Lt,It,Ot,Gt,Qt),R.pixelStorei(R.UNPACK_ROW_LENGTH,qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),R.pixelStorei(R.UNPACK_SKIP_ROWS,de),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$e),Y===0&&J.generateMipmaps&&R.generateMipmap(Ft),Q.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),Q.unbindTexture()},this.resetState=function(){O=0,P=0,C=null,Q.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ds?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Ci:Xo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ci?fe:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class If extends fl{}If.prototype.isWebGL1Renderer=!0;class zs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new zs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nf extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Fs extends hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _o=new z,bo=new z,xo=new se,ss=new Us,ea=new xa;class Of extends ge{constructor(t=new Se,e=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)_o.fromBufferAttribute(e,n-1),bo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=_o.distanceTo(bo);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(n),ea.radius+=s,t.ray.intersectsSphere(ea)===!1)return;xo.copy(n).invert(),ss.copy(t.ray).applyMatrix4(xo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new z,d=new z,h=new z,p=new z,m=this.isLineSegments?2:1,g=i.index,u=i.attributes.position;if(g!==null){const f=Math.max(0,r.start),A=Math.min(g.count,r.start+r.count);for(let _=f,S=A-1;_<S;_+=m){const O=g.getX(_),P=g.getX(_+1);if(c.fromBufferAttribute(u,O),d.fromBufferAttribute(u,P),ss.distanceSqToSegment(c,d,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const X=t.ray.origin.distanceTo(p);X<t.near||X>t.far||e.push({distance:X,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,r.start),A=Math.min(u.count,r.start+r.count);for(let _=f,S=A-1;_<S;_+=m){if(c.fromBufferAttribute(u,_),d.fromBufferAttribute(u,_+1),ss.distanceSqToSegment(c,d,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(p);P<t.near||P>t.far||e.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const So=new z,Mo=new z;class ml extends Of{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)So.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+So.distanceTo(Mo);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-r,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===r)return n/(s-1);const d=i[n],p=i[n+1]-d,m=(r-d)/p;return(n+m)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const r=this.getPoint(n),o=this.getPoint(s),l=e||(r.isVector2?new yt:new z);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new z,n=[],s=[],r=[],o=new z,l=new se;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new z)}s[0]=new z,r[0]=new z;let c=Number.MAX_VALUE;const d=Math.abs(n[0].x),h=Math.abs(n[0].y),p=Math.abs(n[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),r[0].crossVectors(n[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(n[m-1],n[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(me(n[m-1].dot(n[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}r[m].crossVectors(n[m],s[m])}if(e===!0){let m=Math.acos(me(s[0].dot(s[t]),-1,1));m/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),r[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bs extends Xe{constructor(t=0,e=0,i=1,n=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new yt,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*h+this.aX,c=p*h+m*d+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zf extends Bs{constructor(t,e,i,n,s,r){super(t,e,i,i,n,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function qs(){let a=0,t=0,e=0,i=0;function n(s,r,o,l){a=s,t=o,e=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){n(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,d,h){let p=(r-s)/c-(o-s)/(c+d)+(o-r)/d,m=(o-r)/d-(l-r)/(d+h)+(l-o)/h;p*=d,m*=d,n(r,o,p,m)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+i*o}}}const ia=new z,rs=new qs,os=new qs,ls=new qs;class Ff extends Xe{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new z){const i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=n[(o-1)%s]:(ia.subVectors(n[0],n[1]).add(n[0]),c=ia);const h=n[o%s],p=n[(o+1)%s];if(this.closed||o+2<s?d=n[(o+2)%s]:(ia.subVectors(n[s-1],n[s-2]).add(n[s-1]),d=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(p),m),u=Math.pow(p.distanceToSquared(d),m);v<1e-4&&(v=1),g<1e-4&&(g=v),u<1e-4&&(u=v),rs.initNonuniformCatmullRom(c.x,h.x,p.x,d.x,g,v,u),os.initNonuniformCatmullRom(c.y,h.y,p.y,d.y,g,v,u),ls.initNonuniformCatmullRom(c.z,h.z,p.z,d.z,g,v,u)}else this.curveType==="catmullrom"&&(rs.initCatmullRom(c.x,h.x,p.x,d.x,this.tension),os.initCatmullRom(c.y,h.y,p.y,d.y,this.tension),ls.initCatmullRom(c.z,h.z,p.z,d.z,this.tension));return i.set(rs.calc(l),os.calc(l),ls.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new z().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function To(a,t,e,i,n){const s=(i-t)*.5,r=(n-e)*.5,o=a*a,l=a*o;return(2*e-2*i+s+r)*l+(-3*e+3*i-2*s-r)*o+s*a+e}function Bf(a,t){const e=1-a;return e*e*t}function qf(a,t){return 2*(1-a)*a*t}function Hf(a,t){return a*a*t}function xn(a,t,e,i){return Bf(a,t)+qf(a,e)+Hf(a,i)}function Gf(a,t){const e=1-a;return e*e*e*t}function Vf(a,t){const e=1-a;return 3*e*e*a*t}function Wf(a,t){return 3*(1-a)*a*a*t}function Xf(a,t){return a*a*a*t}function Sn(a,t,e,i,n){return Gf(a,t)+Vf(a,e)+Wf(a,i)+Xf(a,n)}class gl extends Xe{constructor(t=new yt,e=new yt,i=new yt,n=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new yt){const i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Sn(t,n.x,s.x,r.x,o.x),Sn(t,n.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $f extends Xe{constructor(t=new z,e=new z,i=new z,n=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new z){const i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Sn(t,n.x,s.x,r.x,o.x),Sn(t,n.y,s.y,r.y,o.y),Sn(t,n.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vl extends Xe{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jf extends Xe{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yl extends Xe{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(xn(t,n.x,s.x,r.x),xn(t,n.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yf extends Xe{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){const i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(xn(t,n.x,s.x,r.x),xn(t,n.y,s.y,r.y),xn(t,n.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _l extends Xe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const i=e,n=this.points,s=(n.length-1)*t,r=Math.floor(s),o=s-r,l=n[r===0?r:r-1],c=n[r],d=n[r>n.length-2?n.length-1:r+1],h=n[r>n.length-3?n.length-1:r+2];return i.set(To(o,l.x,c.x,d.x,h.x),To(o,l.y,c.y,d.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new yt().fromArray(n))}return this}}var As=Object.freeze({__proto__:null,ArcCurve:zf,CatmullRomCurve3:Ff,CubicBezierCurve:gl,CubicBezierCurve3:$f,EllipseCurve:Bs,LineCurve:vl,LineCurve3:jf,QuadraticBezierCurve:yl,QuadraticBezierCurve3:Yf,SplineCurve:_l});class Zf extends Xe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new As[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const r=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const r=s[n],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new As[n.type]().fromJSON(n))}return this}}class ci extends Zf{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new vl(this.currentPoint.clone(),new yt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new yl(this.currentPoint.clone(),new yt(t,e),new yt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,r){const o=new gl(this.currentPoint.clone(),new yt(t,e),new yt(i,n),new yt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new _l(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,r),this}absarc(t,e,i,n,s,r){return this.absellipse(t,e,i,i,n,s,r),this}ellipse(t,e,i,n,s,r,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,i,n,s,r,o,l),this}absellipse(t,e,i,n,s,r,o,l){const c=new Bs(t,e,i,n,s,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wn extends Se{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const d=[],h=[],p=[],m=[];let g=0;const v=[],u=i/2;let f=0;A(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(m,2));function A(){const S=new z,O=new z;let P=0;const C=(e-t)/i;for(let X=0;X<=s;X++){const b=[],M=X/s,F=M*(e-t)+t;for(let V=0;V<=n;V++){const at=V/n,U=at*l+o,q=Math.sin(U),N=Math.cos(U);O.x=F*q,O.y=-M*i+u,O.z=F*N,h.push(O.x,O.y,O.z),S.set(q,C,N).normalize(),p.push(S.x,S.y,S.z),m.push(at,1-M),b.push(g++)}v.push(b)}for(let X=0;X<n;X++)for(let b=0;b<s;b++){const M=v[b][X],F=v[b+1][X],V=v[b+1][X+1],at=v[b][X+1];d.push(M,F,at),d.push(F,V,at),P+=6}c.addGroup(f,P,0),f+=P}function _(S){const O=g,P=new yt,C=new z;let X=0;const b=S===!0?t:e,M=S===!0?1:-1;for(let V=1;V<=n;V++)h.push(0,u*M,0),p.push(0,M,0),m.push(.5,.5),g++;const F=g;for(let V=0;V<=n;V++){const U=V/n*l+o,q=Math.cos(U),N=Math.sin(U);C.x=b*N,C.y=u*M,C.z=b*q,h.push(C.x,C.y,C.z),p.push(0,M,0),P.x=q*.5+.5,P.y=N*.5*M+.5,m.push(P.x,P.y),g++}for(let V=0;V<n;V++){const at=O+V,U=F+V;S===!0?d.push(U,U+1,at):d.push(U+1,U,at),X+=3}c.addGroup(f,X,S===!0?1:2),f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hs extends wn{constructor(t=1,e=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Hs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const na=new z,aa=new z,cs=new z,sa=new Ie;class Kf extends Se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),s=Math.cos(_n*e),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),p={},m=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:u,c:f}=sa;if(v.fromBufferAttribute(o,c[0]),u.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),sa.getNormal(cs),h[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,h[1]=`${Math.round(u.x*n)},${Math.round(u.y*n)},${Math.round(u.z*n)}`,h[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const _=(A+1)%3,S=h[A],O=h[_],P=sa[d[A]],C=sa[d[_]],X=`${S}_${O}`,b=`${O}_${S}`;b in p&&p[b]?(cs.dot(p[b].normal)<=s&&(m.push(P.x,P.y,P.z),m.push(C.x,C.y,C.z)),p[b]=null):X in p||(p[X]={index0:c[A],index1:c[_],normal:cs.clone()})}}for(const g in p)if(p[g]){const{index0:v,index1:u}=p[g];na.fromBufferAttribute(o,v),aa.fromBufferAttribute(o,u),m.push(na.x,na.y,na.z),m.push(aa.x,aa.y,aa.z)}this.setAttribute("position",new ie(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ha extends ci{constructor(t){super(t),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new ci().fromJSON(n))}return this}}const Qf={triangulate:function(a,t,e=2){const i=t&&t.length,n=i?t[0]*e:a.length;let s=bl(a,0,n,e,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c,d,h,p,m;if(i&&(s=nm(a,t,s,e)),a.length>80*e){o=c=a[0],l=d=a[1];for(let g=e;g<n;g+=e)h=a[g],p=a[g+1],h<o&&(o=h),p<l&&(l=p),h>c&&(c=h),p>d&&(d=p);m=Math.max(c-o,d-l),m=m!==0?32767/m:0}return Cn(s,r,e,o,l,m,0),r}};function bl(a,t,e,i,n){let s,r;if(n===fm(a,t,e,i)>0)for(s=t;s<e;s+=i)r=Eo(s,a[s],a[s+1],r);else for(s=e-i;s>=t;s-=i)r=Eo(s,a[s],a[s+1],r);return r&&Ta(r,r.next)&&(Rn(r),r=r.next),r}function ki(a,t){if(!a)return a;t||(t=a);let e=a,i;do if(i=!1,!e.steiner&&(Ta(e,e.next)||Jt(e.prev,e,e.next)===0)){if(Rn(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Cn(a,t,e,i,n,s,r){if(!a)return;!r&&s&&lm(a,i,n,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?tm(a,i,n,s):Jf(a)){t.push(l.i/e|0),t.push(a.i/e|0),t.push(c.i/e|0),Rn(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=em(ki(a),t,e),Cn(a,t,e,i,n,s,2)):r===2&&im(a,t,e,i,n,s):Cn(ki(a),t,e,i,n,s,1);break}}}function Jf(a){const t=a.prev,e=a,i=a.next;if(Jt(t,e,i)>=0)return!1;const n=t.x,s=e.x,r=i.x,o=t.y,l=e.y,c=i.y,d=n<s?n<r?n:r:s<r?s:r,h=o<l?o<c?o:c:l<c?l:c,p=n>s?n>r?n:r:s>r?s:r,m=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=d&&g.x<=p&&g.y>=h&&g.y<=m&&en(n,o,s,l,r,c,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tm(a,t,e,i){const n=a.prev,s=a,r=a.next;if(Jt(n,s,r)>=0)return!1;const o=n.x,l=s.x,c=r.x,d=n.y,h=s.y,p=r.y,m=o<l?o<c?o:c:l<c?l:c,g=d<h?d<p?d:p:h<p?h:p,v=o>l?o>c?o:c:l>c?l:c,u=d>h?d>p?d:p:h>p?h:p,f=ws(m,g,t,e,i),A=ws(v,u,t,e,i);let _=a.prevZ,S=a.nextZ;for(;_&&_.z>=f&&S&&S.z<=A;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=u&&_!==n&&_!==r&&en(o,d,l,h,c,p,_.x,_.y)&&Jt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=u&&S!==n&&S!==r&&en(o,d,l,h,c,p,S.x,S.y)&&Jt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=u&&_!==n&&_!==r&&en(o,d,l,h,c,p,_.x,_.y)&&Jt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=A;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=u&&S!==n&&S!==r&&en(o,d,l,h,c,p,S.x,S.y)&&Jt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function em(a,t,e){let i=a;do{const n=i.prev,s=i.next.next;!Ta(n,s)&&xl(n,i,i.next,s)&&Pn(n,s)&&Pn(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Rn(i),Rn(i.next),i=a=s),i=i.next}while(i!==a);return ki(i)}function im(a,t,e,i,n,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&hm(r,o)){let l=Sl(r,o);r=ki(r,r.next),l=ki(l,l.next),Cn(r,t,e,i,n,s,0),Cn(l,t,e,i,n,s,0);return}o=o.next}r=r.next}while(r!==a)}function nm(a,t,e,i){const n=[];let s,r,o,l,c;for(s=0,r=t.length;s<r;s++)o=t[s]*i,l=s<r-1?t[s+1]*i:a.length,c=bl(a,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(dm(c));for(n.sort(am),s=0;s<n.length;s++)e=sm(n[s],e);return e}function am(a,t){return a.x-t.x}function sm(a,t){const e=rm(a,t);if(!e)return t;const i=Sl(e,a);return ki(i,i.next),ki(e,e.next)}function rm(a,t){let e=t,i=-1/0,n;const s=a.x,r=a.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=s&&p>i&&(i=p,n=e.x<e.next.x?e:e.next,p===s))return n}e=e.next}while(e!==t);if(!n)return null;const o=n,l=n.x,c=n.y;let d=1/0,h;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&en(r<c?s:i,r,l,c,r<c?i:s,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(s-e.x),Pn(e,a)&&(h<d||h===d&&(e.x>n.x||e.x===n.x&&om(n,e)))&&(n=e,d=h)),e=e.next;while(e!==o);return n}function om(a,t){return Jt(a.prev,a,t.prev)<0&&Jt(t.next,a,a.next)<0}function lm(a,t,e,i){let n=a;do n.z===0&&(n.z=ws(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==a);n.prevZ.nextZ=null,n.prevZ=null,cm(n)}function cm(a){let t,e,i,n,s,r,o,l,c=1;do{for(e=a,a=null,s=null,r=0;e;){for(r++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:a=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(r>1);return a}function ws(a,t,e,i,n){return a=(a-e)*n|0,t=(t-i)*n|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function dm(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function en(a,t,e,i,n,s,r,o){return(n-r)*(t-o)>=(a-r)*(s-o)&&(a-r)*(i-o)>=(e-r)*(t-o)&&(e-r)*(s-o)>=(n-r)*(i-o)}function hm(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!um(a,t)&&(Pn(a,t)&&Pn(t,a)&&pm(a,t)&&(Jt(a.prev,a,t.prev)||Jt(a,t.prev,t))||Ta(a,t)&&Jt(a.prev,a,a.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function Ta(a,t){return a.x===t.x&&a.y===t.y}function xl(a,t,e,i){const n=oa(Jt(a,t,e)),s=oa(Jt(a,t,i)),r=oa(Jt(e,i,a)),o=oa(Jt(e,i,t));return!!(n!==s&&r!==o||n===0&&ra(a,e,t)||s===0&&ra(a,i,t)||r===0&&ra(e,a,i)||o===0&&ra(e,t,i))}function ra(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function oa(a){return a>0?1:a<0?-1:0}function um(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&xl(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function Pn(a,t){return Jt(a.prev,a,a.next)<0?Jt(a,t,a.next)>=0&&Jt(a,a.prev,t)>=0:Jt(a,t,a.prev)<0||Jt(a,a.next,t)<0}function pm(a,t){let e=a,i=!1;const n=(a.x+t.x)/2,s=(a.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==a);return i}function Sl(a,t){const e=new Cs(a.i,a.x,a.y),i=new Cs(t.i,t.x,t.y),n=a.next,s=t.prev;return a.next=t,t.prev=a,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Eo(a,t,e,i){const n=new Cs(a,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Rn(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Cs(a,t,e){this.i=a,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fm(a,t,e,i){let n=0;for(let s=t,r=e-i;s<e;s+=i)n+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return n}class Mn{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return Mn.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];Ao(t),wo(i,t);let r=t.length;e.forEach(Ao);for(let l=0;l<e.length;l++)n.push(r),r+=e[l].length,wo(i,e[l]);const o=Qf.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ao(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function wo(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}class Tn extends Se{constructor(t=new ha([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new ie(n,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,u=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:mm;let _,S=!1,O,P,C,X;f&&(_=f.getSpacedPoints(d),S=!0,p=!1,O=f.computeFrenetFrames(d,!1),P=new z,C=new z,X=new z),p||(u=0,m=0,g=0,v=0);const b=o.extractPoints(c);let M=b.shape;const F=b.holes;if(!Mn.isClockWise(M)){M=M.reverse();for(let R=0,ct=F.length;R<ct;R++){const G=F[R];Mn.isClockWise(G)&&(F[R]=G.reverse())}}const at=Mn.triangulateShape(M,F),U=M;for(let R=0,ct=F.length;R<ct;R++){const G=F[R];M=M.concat(G)}function q(R,ct,G){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(ct,G)}const N=M.length,W=at.length;function K(R,ct,G){let rt,Q,xt;const gt=R.x-ct.x,x=R.y-ct.y,y=G.x-R.x,B=G.y-R.y,ot=gt*gt+x*x,lt=gt*B-x*y;if(Math.abs(lt)>Number.EPSILON){const nt=Math.sqrt(ot),St=Math.sqrt(y*y+B*B),pt=ct.x-x/nt,Mt=ct.y+gt/nt,Pt=G.x-B/St,Nt=G.y+y/St,dt=((Pt-pt)*B-(Nt-Mt)*y)/(gt*B-x*y);rt=pt+gt*dt-R.x,Q=Mt+x*dt-R.y;const Bt=rt*rt+Q*Q;if(Bt<=2)return new yt(rt,Q);xt=Math.sqrt(Bt/2)}else{let nt=!1;gt>Number.EPSILON?y>Number.EPSILON&&(nt=!0):gt<-Number.EPSILON?y<-Number.EPSILON&&(nt=!0):Math.sign(x)===Math.sign(B)&&(nt=!0),nt?(rt=-x,Q=gt,xt=Math.sqrt(ot)):(rt=gt,Q=x,xt=Math.sqrt(ot/2))}return new yt(rt/xt,Q/xt)}const it=[];for(let R=0,ct=U.length,G=ct-1,rt=R+1;R<ct;R++,G++,rt++)G===ct&&(G=0),rt===ct&&(rt=0),it[R]=K(U[R],U[G],U[rt]);const w=[];let E,$=it.concat();for(let R=0,ct=F.length;R<ct;R++){const G=F[R];E=[];for(let rt=0,Q=G.length,xt=Q-1,gt=rt+1;rt<Q;rt++,xt++,gt++)xt===Q&&(xt=0),gt===Q&&(gt=0),E[rt]=K(G[rt],G[xt],G[gt]);w.push(E),$=$.concat(E)}for(let R=0;R<u;R++){const ct=R/u,G=m*Math.cos(ct*Math.PI/2),rt=g*Math.sin(ct*Math.PI/2)+v;for(let Q=0,xt=U.length;Q<xt;Q++){const gt=q(U[Q],it[Q],rt);tt(gt.x,gt.y,-G)}for(let Q=0,xt=F.length;Q<xt;Q++){const gt=F[Q];E=w[Q];for(let x=0,y=gt.length;x<y;x++){const B=q(gt[x],E[x],rt);tt(B.x,B.y,-G)}}}const k=g+v;for(let R=0;R<N;R++){const ct=p?q(M[R],$[R],k):M[R];S?(C.copy(O.normals[0]).multiplyScalar(ct.x),P.copy(O.binormals[0]).multiplyScalar(ct.y),X.copy(_[0]).add(C).add(P),tt(X.x,X.y,X.z)):tt(ct.x,ct.y,0)}for(let R=1;R<=d;R++)for(let ct=0;ct<N;ct++){const G=p?q(M[ct],$[ct],k):M[ct];S?(C.copy(O.normals[R]).multiplyScalar(G.x),P.copy(O.binormals[R]).multiplyScalar(G.y),X.copy(_[R]).add(C).add(P),tt(X.x,X.y,X.z)):tt(G.x,G.y,h/d*R)}for(let R=u-1;R>=0;R--){const ct=R/u,G=m*Math.cos(ct*Math.PI/2),rt=g*Math.sin(ct*Math.PI/2)+v;for(let Q=0,xt=U.length;Q<xt;Q++){const gt=q(U[Q],it[Q],rt);tt(gt.x,gt.y,h+G)}for(let Q=0,xt=F.length;Q<xt;Q++){const gt=F[Q];E=w[Q];for(let x=0,y=gt.length;x<y;x++){const B=q(gt[x],E[x],rt);S?tt(B.x,B.y+_[d-1].y,_[d-1].x+G):tt(B.x,B.y,h+G)}}}D(),j();function D(){const R=n.length/3;if(p){let ct=0,G=N*ct;for(let rt=0;rt<W;rt++){const Q=at[rt];st(Q[2]+G,Q[1]+G,Q[0]+G)}ct=d+u*2,G=N*ct;for(let rt=0;rt<W;rt++){const Q=at[rt];st(Q[0]+G,Q[1]+G,Q[2]+G)}}else{for(let ct=0;ct<W;ct++){const G=at[ct];st(G[2],G[1],G[0])}for(let ct=0;ct<W;ct++){const G=at[ct];st(G[0]+N*d,G[1]+N*d,G[2]+N*d)}}i.addGroup(R,n.length/3-R,0)}function j(){const R=n.length/3;let ct=0;et(U,ct),ct+=U.length;for(let G=0,rt=F.length;G<rt;G++){const Q=F[G];et(Q,ct),ct+=Q.length}i.addGroup(R,n.length/3-R,1)}function et(R,ct){let G=R.length;for(;--G>=0;){const rt=G;let Q=G-1;Q<0&&(Q=R.length-1);for(let xt=0,gt=d+u*2;xt<gt;xt++){const x=N*xt,y=N*(xt+1),B=ct+rt+x,ot=ct+Q+x,lt=ct+Q+y,nt=ct+rt+y;mt(B,ot,lt,nt)}}}function tt(R,ct,G){l.push(R),l.push(ct),l.push(G)}function st(R,ct,G){ht(R),ht(ct),ht(G);const rt=n.length/3,Q=A.generateTopUV(i,n,rt-3,rt-2,rt-1);_t(Q[0]),_t(Q[1]),_t(Q[2])}function mt(R,ct,G,rt){ht(R),ht(ct),ht(rt),ht(ct),ht(G),ht(rt);const Q=n.length/3,xt=A.generateSideWallUV(i,n,Q-6,Q-3,Q-2,Q-1);_t(xt[0]),_t(xt[1]),_t(xt[3]),_t(xt[1]),_t(xt[2]),_t(xt[3])}function ht(R){n.push(l[R*3+0]),n.push(l[R*3+1]),n.push(l[R*3+2])}function _t(R){s.push(R.x),s.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return gm(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new As[n.type]().fromJSON(n)),new Tn(i,t.options)}}const mm={generateTopUV:function(a,t,e,i,n){const s=t[e*3],r=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],d=t[n*3+1];return[new yt(s,r),new yt(o,l),new yt(c,d)]},generateSideWallUV:function(a,t,e,i,n,s){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],d=t[i*3+1],h=t[i*3+2],p=t[n*3],m=t[n*3+1],g=t[n*3+2],v=t[s*3],u=t[s*3+1],f=t[s*3+2];return Math.abs(o-d)<Math.abs(r-c)?[new yt(r,1-l),new yt(c,1-h),new yt(p,1-g),new yt(v,1-f)]:[new yt(o,1-l),new yt(d,1-h),new yt(m,1-g),new yt(u,1-f)]}};function gm(a,t,e){if(e.shapes=[],Array.isArray(a))for(let i=0,n=a.length;i<n;i++){const s=a[i];e.shapes.push(s.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Gs extends Se{constructor(t=.5,e=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],d=[];let h=t;const p=(e-t)/n,m=new z,g=new yt;for(let v=0;v<=n;v++){for(let u=0;u<=i;u++){const f=s+u/i*r;m.x=h*Math.cos(f),m.y=h*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,d.push(g.x,g.y)}h+=p}for(let v=0;v<n;v++){const u=v*(i+1);for(let f=0;f<i;f++){const A=f+u,_=A,S=A+i+1,O=A+i+2,P=A+1;o.push(_,S,P),o.push(S,O,P)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class la extends hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Co={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class vm{constructor(t,e,i){const n=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(d){o++,s===!1&&n.onStart!==void 0&&n.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,n.onProgress!==void 0&&n.onProgress(d,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(d){n.onError!==void 0&&n.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=c.length;h<p;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const ym=new vm;class Vs{constructor(t){this.manager=t!==void 0?t:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Je={};class _m extends Error{constructor(t,e){super(t),this.response=e}}class bm extends Vs{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Co.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Je[t]!==void 0){Je[t].push({onLoad:e,onProgress:i,onError:n});return}Je[t]=[],Je[t].push({onLoad:e,onProgress:i,onError:n});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Je[t],h=c.body.getReader(),p=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=p?parseInt(p):0,g=m!==0;let v=0;const u=new ReadableStream({start(f){A();function A(){h.read().then(({done:_,value:S})=>{if(_)f.close();else{v+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let P=0,C=d.length;P<C;P++){const X=d[P];X.onProgress&&X.onProgress(O)}f.enqueue(S),A()}})}}});return new Response(u)}else throw new _m(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Co.add(t,c);const d=Je[t];delete Je[t];for(let h=0,p=d.length;h<p;h++){const m=d[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=Je[t];if(d===void 0)throw this.manager.itemError(t),c;delete Je[t];for(let h=0,p=d.length;h<p;h++){const m=d[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ml extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ds=new se,Po=new z,Ro=new z;class xm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Po.setFromMatrixPosition(t.matrixWorld),e.position.copy(Po),Ro.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ro),e.updateMatrixWorld(),ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sm extends xm{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hs extends Ml{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mm extends Ml{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lo{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tm extends ml{constructor(t=10,e=10,i=4473924,n=8947848){i=new Xt(i),n=new Xt(n);const s=e/2,r=t/e,o=t/2,l=[],c=[];for(let p=0,m=0,g=-o;p<=e;p++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=p===s?i:n;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const d=new Se;d.setAttribute("position",new ie(l,3)),d.setAttribute("color",new ie(c,3));const h=new Fs({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ls}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ls);const ko={type:"change"},us={type:"start"},Do={type:"end"},ca=new Us,Uo=new ei,Em=Math.cos(70*Cc.DEG2RAD);class Am extends Di{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Pt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ko),i.update(),s=n.NONE},this.update=function(){const L=new z,ft=new Ri().setFromUnitVectors(t.up,new z(0,1,0)),Ct=ft.clone().invert(),At=new z,ut=new Ri,I=new z,vt=2*Math.PI;return function(Ut=null){const kt=i.object.position;L.copy(kt).sub(i.target),L.applyQuaternion(ft),o.setFromVector3(L),i.autoRotate&&s===n.NONE&&V(M(Ut)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let $t=i.minAzimuthAngle,jt=i.maxAzimuthAngle;isFinite($t)&&isFinite(jt)&&($t<-Math.PI?$t+=vt:$t>Math.PI&&($t-=vt),jt<-Math.PI?jt+=vt:jt>Math.PI&&(jt-=vt),$t<=jt?o.theta=Math.max($t,Math.min(jt,o.theta)):o.theta=o.theta>($t+jt)/2?Math.max($t,o.theta):Math.min(jt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&P||i.object.isOrthographicCamera?o.radius=w(o.radius):o.radius=w(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Ct),kt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let te=!1;if(i.zoomToCursor&&P){let ne=null;if(i.object.isPerspectiveCamera){const Yt=L.length();ne=w(Yt*c);const re=Yt-ne;i.object.position.addScaledVector(S,re),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Yt=new z(O.x,O.y,0);Yt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),te=!0;const re=new z(O.x,O.y,0);re.unproject(i.object),i.object.position.sub(re).add(Yt),i.object.updateMatrixWorld(),ne=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ne).add(i.object.position):(ca.origin.copy(i.object.position),ca.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ca.direction))<Em?t.lookAt(i.target):(Uo.setFromNormalAndCoplanarPoint(i.object.up,i.target),ca.intersectPlane(Uo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),te=!0);return c=1,P=!1,te||At.distanceToSquared(i.object.position)>r||8*(1-ut.dot(i.object.quaternion))>r||I.distanceToSquared(i.target)>0?(i.dispatchEvent(ko),At.copy(i.object.position),ut.copy(i.object.quaternion),I.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Bt),i.domElement.removeEventListener("pointerdown",x),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",nt),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Pt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const r=1e-6,o=new Lo,l=new Lo;let c=1;const d=new z,h=new yt,p=new yt,m=new yt,g=new yt,v=new yt,u=new yt,f=new yt,A=new yt,_=new yt,S=new z,O=new yt;let P=!1;const C=[],X={};let b=!1;function M(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function F(L){const ft=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*ft)}function V(L){l.theta-=L}function at(L){l.phi-=L}const U=function(){const L=new z;return function(Ct,At){L.setFromMatrixColumn(At,0),L.multiplyScalar(-Ct),d.add(L)}}(),q=function(){const L=new z;return function(Ct,At){i.screenSpacePanning===!0?L.setFromMatrixColumn(At,1):(L.setFromMatrixColumn(At,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ct),d.add(L)}}(),N=function(){const L=new z;return function(Ct,At){const ut=i.domElement;if(i.object.isPerspectiveCamera){const I=i.object.position;L.copy(I).sub(i.target);let vt=L.length();vt*=Math.tan(i.object.fov/2*Math.PI/180),U(2*Ct*vt/ut.clientHeight,i.object.matrix),q(2*At*vt/ut.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(Ct*(i.object.right-i.object.left)/i.object.zoom/ut.clientWidth,i.object.matrix),q(At*(i.object.top-i.object.bottom)/i.object.zoom/ut.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function it(L,ft){if(!i.zoomToCursor)return;P=!0;const Ct=i.domElement.getBoundingClientRect(),At=L-Ct.left,ut=ft-Ct.top,I=Ct.width,vt=Ct.height;O.x=At/I*2-1,O.y=-(ut/vt)*2+1,S.set(O.x,O.y,1).unproject(i.object).sub(i.object.position).normalize()}function w(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function E(L){h.set(L.clientX,L.clientY)}function $(L){it(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function k(L){g.set(L.clientX,L.clientY)}function D(L){p.set(L.clientX,L.clientY),m.subVectors(p,h).multiplyScalar(i.rotateSpeed);const ft=i.domElement;V(2*Math.PI*m.x/ft.clientHeight),at(2*Math.PI*m.y/ft.clientHeight),h.copy(p),i.update()}function j(L){A.set(L.clientX,L.clientY),_.subVectors(A,f),_.y>0?W(F(_.y)):_.y<0&&K(F(_.y)),f.copy(A),i.update()}function et(L){v.set(L.clientX,L.clientY),u.subVectors(v,g).multiplyScalar(i.panSpeed),N(u.x,u.y),g.copy(v),i.update()}function tt(L){it(L.clientX,L.clientY),L.deltaY<0?K(F(L.deltaY)):L.deltaY>0&&W(F(L.deltaY)),i.update()}function st(L){let ft=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?at(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?at(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),ft=!0;break}ft&&(L.preventDefault(),i.update())}function mt(L){if(C.length===1)h.set(L.pageX,L.pageY);else{const ft=Et(L),Ct=.5*(L.pageX+ft.x),At=.5*(L.pageY+ft.y);h.set(Ct,At)}}function ht(L){if(C.length===1)g.set(L.pageX,L.pageY);else{const ft=Et(L),Ct=.5*(L.pageX+ft.x),At=.5*(L.pageY+ft.y);g.set(Ct,At)}}function _t(L){const ft=Et(L),Ct=L.pageX-ft.x,At=L.pageY-ft.y,ut=Math.sqrt(Ct*Ct+At*At);f.set(0,ut)}function R(L){i.enableZoom&&_t(L),i.enablePan&&ht(L)}function ct(L){i.enableZoom&&_t(L),i.enableRotate&&mt(L)}function G(L){if(C.length==1)p.set(L.pageX,L.pageY);else{const Ct=Et(L),At=.5*(L.pageX+Ct.x),ut=.5*(L.pageY+Ct.y);p.set(At,ut)}m.subVectors(p,h).multiplyScalar(i.rotateSpeed);const ft=i.domElement;V(2*Math.PI*m.x/ft.clientHeight),at(2*Math.PI*m.y/ft.clientHeight),h.copy(p)}function rt(L){if(C.length===1)v.set(L.pageX,L.pageY);else{const ft=Et(L),Ct=.5*(L.pageX+ft.x),At=.5*(L.pageY+ft.y);v.set(Ct,At)}u.subVectors(v,g).multiplyScalar(i.panSpeed),N(u.x,u.y),g.copy(v)}function Q(L){const ft=Et(L),Ct=L.pageX-ft.x,At=L.pageY-ft.y,ut=Math.sqrt(Ct*Ct+At*At);A.set(0,ut),_.set(0,Math.pow(A.y/f.y,i.zoomSpeed)),W(_.y),f.copy(A);const I=(L.pageX+ft.x)*.5,vt=(L.pageY+ft.y)*.5;it(I,vt)}function xt(L){i.enableZoom&&Q(L),i.enablePan&&rt(L)}function gt(L){i.enableZoom&&Q(L),i.enableRotate&&G(L)}function x(L){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",y),i.domElement.addEventListener("pointerup",B)),zt(L),L.pointerType==="touch"?Nt(L):ot(L))}function y(L){i.enabled!==!1&&(L.pointerType==="touch"?dt(L):lt(L))}function B(L){Dt(L),C.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(Do),s=n.NONE}function ot(L){let ft;switch(L.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case Ui.DOLLY:if(i.enableZoom===!1)return;$(L),s=n.DOLLY;break;case Ui.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;k(L),s=n.PAN}else{if(i.enableRotate===!1)return;E(L),s=n.ROTATE}break;case Ui.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;E(L),s=n.ROTATE}else{if(i.enablePan===!1)return;k(L),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(us)}function lt(L){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;D(L);break;case n.DOLLY:if(i.enableZoom===!1)return;j(L);break;case n.PAN:if(i.enablePan===!1)return;et(L);break}}function nt(L){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(L.preventDefault(),i.dispatchEvent(us),tt(St(L)),i.dispatchEvent(Do))}function St(L){const ft=L.deltaMode,Ct={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ft){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return L.ctrlKey&&!b&&(Ct.deltaY*=10),Ct}function pt(L){L.key==="Control"&&(b=!0,document.addEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Mt(L){L.key==="Control"&&(b=!1,document.removeEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Pt(L){i.enabled===!1||i.enablePan===!1||st(L)}function Nt(L){switch(Rt(L),C.length){case 1:switch(i.touches.ONE){case Ii.ROTATE:if(i.enableRotate===!1)return;mt(L),s=n.TOUCH_ROTATE;break;case Ii.PAN:if(i.enablePan===!1)return;ht(L),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case Ii.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;R(L),s=n.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ct(L),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(us)}function dt(L){switch(Rt(L),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;G(L),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;rt(L),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xt(L),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;gt(L),i.update();break;default:s=n.NONE}}function Bt(L){i.enabled!==!1&&L.preventDefault()}function zt(L){C.push(L.pointerId)}function Dt(L){delete X[L.pointerId];for(let ft=0;ft<C.length;ft++)if(C[ft]==L.pointerId){C.splice(ft,1);return}}function Rt(L){let ft=X[L.pointerId];ft===void 0&&(ft=new yt,X[L.pointerId]=ft),ft.set(L.pageX,L.pageY)}function Et(L){const ft=L.pointerId===C[0]?C[1]:C[0];return X[ft]}i.domElement.addEventListener("contextmenu",Bt),i.domElement.addEventListener("pointerdown",x),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",nt,{passive:!1}),document.addEventListener("keydown",pt,{passive:!0,capture:!0}),this.update()}}class wm extends Vs{constructor(t){super(t)}load(t,e,i,n){const s=this,r=new bm(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{e(s.parse(o))}catch(l){n?n(l):console.error(l),s.manager.itemError(t)}},i,n)}parse(t){function e(c){const d=new DataView(c),h=32/8*3+32/8*3*3+16/8,p=d.getUint32(80,!0);if(80+32/8+p*h===d.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(g,d,v))return!1;return!0}function i(c,d,h){for(let p=0,m=c.length;p<m;p++)if(c[p]!==d.getUint8(h+p))return!1;return!0}function n(c){const d=new DataView(c),h=d.getUint32(80,!0);let p,m,g,v=!1,u,f,A,_,S;for(let F=0;F<70;F++)d.getUint32(F,!1)==1129270351&&d.getUint8(F+4)==82&&d.getUint8(F+5)==61&&(v=!0,u=new Float32Array(h*3*3),f=d.getUint8(F+6)/255,A=d.getUint8(F+7)/255,_=d.getUint8(F+8)/255,S=d.getUint8(F+9)/255);const O=84,P=12*4+2,C=new Se,X=new Float32Array(h*3*3),b=new Float32Array(h*3*3),M=new Xt;for(let F=0;F<h;F++){const V=O+F*P,at=d.getFloat32(V,!0),U=d.getFloat32(V+4,!0),q=d.getFloat32(V+8,!0);if(v){const N=d.getUint16(V+48,!0);N&32768?(p=f,m=A,g=_):(p=(N&31)/31,m=(N>>5&31)/31,g=(N>>10&31)/31)}for(let N=1;N<=3;N++){const W=V+N*12,K=F*3*3+(N-1)*3;X[K]=d.getFloat32(W,!0),X[K+1]=d.getFloat32(W+4,!0),X[K+2]=d.getFloat32(W+8,!0),b[K]=at,b[K+1]=U,b[K+2]=q,v&&(M.set(p,m,g).convertSRGBToLinear(),u[K]=M.r,u[K+1]=M.g,u[K+2]=M.b)}}return C.setAttribute("position",new Re(X,3)),C.setAttribute("normal",new Re(b,3)),v&&(C.setAttribute("color",new Re(u,3)),C.hasColors=!0,C.alpha=S),C}function s(c){const d=new Se,h=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,u=new RegExp("vertex"+v+v+v,"g"),f=new RegExp("normal"+v+v+v,"g"),A=[],_=[],S=[],O=new z;let P,C=0,X=0,b=0;for(;(P=h.exec(c))!==null;){X=b;const M=P[0],F=(P=m.exec(M))!==null?P[1]:"";for(S.push(F);(P=p.exec(M))!==null;){let U=0,q=0;const N=P[0];for(;(P=f.exec(N))!==null;)O.x=parseFloat(P[1]),O.y=parseFloat(P[2]),O.z=parseFloat(P[3]),q++;for(;(P=u.exec(N))!==null;)A.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),_.push(O.x,O.y,O.z),U++,b++;q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),U!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const V=X,at=b-X;d.userData.groupNames=S,d.addGroup(V,at,C),C++}return d.setAttribute("position",new ie(A,3)),d.setAttribute("normal",new ie(_,3)),d}function r(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let h=0;h<c.length;h++)d[h]=c.charCodeAt(h)&255;return d.buffer||d}else return c}const l=o(t);return e(l)?n(l):s(r(t))}}class Cm{constructor(t,e={}){this.container=t,this.options=e,this.currentMesh=null,this.wireframeMesh=null,this.nozzleGroup=null,this.infillGroup=null,this.currentBbox=new dn,this.slicePercent=100,this.isWireframe=!1,this.currentColor=e.initialColor||"#ff6600",this.currentMaterialType=e.initialMaterial||"PETG",this.init(),this.createBuildPlate(),this.createNozzleHead(),this.loadModelPreset("gear"),this.animate=this.animate.bind(this),this.animate(),window.addEventListener("resize",this.onResize.bind(this))}init(){const t=this.container.clientWidth||600,e=this.container.clientHeight||450;this.scene=new Nf,this.scene.background=new Xt(725280),this.scene.fog=new zs(725280,.0035),this.camera=new Ne(45,t/e,1,2e3),this.camera.position.set(160,140,180),this.renderer=new fl({antialias:!0,alpha:!0}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=No,this.renderer.localClippingEnabled=!0,this.container.appendChild(this.renderer.domElement),this.controls=new Am(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2+.05,this.controls.minDistance=40,this.controls.maxDistance=500,this.controls.target.set(0,30,0);const i=new Mm(16777215,.7);this.scene.add(i);const n=new hs(16777215,1.2);n.position.set(120,200,100),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.bias=-1e-4,this.scene.add(n);const s=new hs(62206,1.5);s.position.set(-120,80,-120),this.scene.add(s);const r=new hs(1096065,.6);r.position.set(0,-50,120),this.scene.add(r),this.clippingPlane=new ei(new z(0,-1,0),1e3)}createBuildPlate(){const e=new De(256,4,256),i=new la({color:1976635,roughness:.8,metalness:.2}),n=new ue(e,i);n.position.y=-2,n.receiveShadow=!0,this.scene.add(n);const s=new Tm(256,25.6,62206,3359061);s.position.y=.1,this.scene.add(s);const r=new Kf(new De(256,.5,256)),o=new Fs({color:3718648,linewidth:2}),l=new ml(r,o);l.position.y=.2,this.scene.add(l)}createNozzleHead(){this.nozzleGroup=new tn;const t=new Hs(4,8,16),e=new la({color:16096779,metalness:.8,roughness:.2,emissive:16729088,emissiveIntensity:.4}),i=new ue(t,e);i.rotation.x=Math.PI,i.position.y=4,this.nozzleGroup.add(i);const n=new De(10,8,10),s=new la({color:9741240,metalness:.9,roughness:.2}),r=new ue(n,s);r.position.y=12,this.nozzleGroup.add(r);const o=new Gs(.5,6,32),l=new ya({color:62206,side:qe,transparent:!0,opacity:.8}),c=new ue(o,l);c.rotation.x=Math.PI/2,c.position.y=.1,this.nozzleGroup.add(c),this.nozzleGroup.visible=!1,this.scene.add(this.nozzleGroup)}getMaterial(t,e=!1){let i=.35,n=.1,s=!1,r=1;return this.currentMaterialType==="PETG"?(i=.25,n=.15):this.currentMaterialType==="PLA-SILK"?(i=.2,n=.65):this.currentMaterialType==="TPU"?(i=.5,s=!0,r=.88):this.currentMaterialType==="ABS-P1S"&&(i=.6,n=.05),new la({color:new Xt(t),roughness:i,metalness:n,transparent:s,opacity:r,wireframe:e,clippingPlanes:[this.clippingPlane],clipShadows:!0,side:qe})}loadModelPreset(t){let e;t==="gear"?e=this.generateGearGeometry(45,18,24,12,5):t==="drone-arm"?e=this.generateDroneArmGeometry():t==="tower"?e=this.generateTowerGeometry():t==="gripper"?e=this.generateGripperGeometry():t==="planter"?e=this.generatePlanterGeometry():e=this.generateGearGeometry(40,15,20,10,4),this.setModelGeometry(e)}setModelGeometry(t){this.currentMesh&&(this.scene.remove(this.currentMesh),this.currentMesh.geometry&&this.currentMesh.geometry.dispose(),this.currentMesh.material&&this.currentMesh.material.dispose()),this.wireframeMesh&&(this.scene.remove(this.wireframeMesh),this.wireframeMesh.geometry&&this.wireframeMesh.geometry.dispose(),this.wireframeMesh.material&&this.wireframeMesh.material.dispose()),t.computeVertexNormals(),t.center(),t.computeBoundingBox(),this.currentBbox.copy(t.boundingBox);const e=this.currentBbox.max.y-this.currentBbox.min.y,i=this.getMaterial(this.currentColor,!1);this.currentMesh=new ue(t,i),this.currentMesh.position.y=e/2,this.currentMesh.castShadow=!0,this.currentMesh.receiveShadow=!0,this.scene.add(this.currentMesh);const n=new ya({color:62206,wireframe:!0,transparent:!0,opacity:.25,clippingPlanes:[this.clippingPlane]});this.wireframeMesh=new ue(t,n),this.wireframeMesh.position.copy(this.currentMesh.position),this.wireframeMesh.visible=this.isWireframe,this.scene.add(this.wireframeMesh),this.updateSliceClipping(this.slicePercent)}generateGearGeometry(t,e,i,n,s){const r=new ha,o=Math.PI*2/i;for(let v=0;v<i;v++){const u=v*o,f=u,A=u+o*.25,_=u+o*.55,S=u+o*.8,O=t-n,P=t,C=Math.cos(f)*O,X=Math.sin(f)*O,b=Math.cos(A)*P,M=Math.sin(A)*P,F=Math.cos(_)*P,V=Math.sin(_)*P,at=Math.cos(S)*O,U=Math.sin(S)*O;v===0?r.moveTo(C,X):r.lineTo(C,X),r.lineTo(b,M),r.lineTo(F,V),r.lineTo(at,U)}r.closePath();const l=new ci,c=e;l.absarc(0,0,c,0,Math.PI*2,!0);const d=c*.4,h=c*.3,p=new ci;p.moveTo(-d/2,c-.5),p.lineTo(-d/2,c+h),p.lineTo(d/2,c+h),p.lineTo(d/2,c-.5),r.holes.push(l);const m={steps:2,depth:s,bevelEnabled:!0,bevelThickness:1.5,bevelSize:1,bevelSegments:3},g=new Tn(r,m);return g.rotateX(Math.PI/2),g}generateDroneArmGeometry(){const t=new ha;t.moveTo(-12,-45),t.lineTo(12,-45),t.lineTo(8,30),t.lineTo(18,45),t.absarc(0,45,18,0,Math.PI,!1),t.lineTo(-8,30),t.lineTo(-12,-45);const e=new ci;e.absarc(0,45,8,0,Math.PI*2,!0),t.holes.push(e);const i=new ci;i.moveTo(-4,-15),i.lineTo(4,-15),i.lineTo(3,10),i.lineTo(-3,10),i.closePath(),t.holes.push(i);const n=new ci;n.moveTo(-6,-38),n.lineTo(6,-38),n.lineTo(5,-22),n.lineTo(-5,-22),n.closePath(),t.holes.push(n);const s={steps:1,depth:14,bevelEnabled:!0,bevelThickness:1.2,bevelSize:1,bevelSegments:2},r=new Tn(t,s);return r.rotateX(Math.PI/2),r}generateTowerGeometry(){const t=new De(45,40,45),e=new De(32,50,32),i=new De(20,40,20),n=new wn(1,3,30,8);e.translate(0,45,0),i.translate(0,90,0),n.translate(0,125,0);const s=new tn,r=new ue(t),o=new ue(e),l=new ue(i),c=new ue(n);return s.add(r),s.add(o),s.add(l),s.add(c),new De(42,110,42)}generateGripperGeometry(){const t=new ha;t.moveTo(-15,-20),t.lineTo(15,-20),t.lineTo(12,10),t.lineTo(25,35),t.lineTo(20,45),t.lineTo(5,25),t.lineTo(-5,25),t.lineTo(-20,45),t.lineTo(-25,35),t.lineTo(-12,10),t.closePath();const e=new ci;e.absarc(0,-5,6,0,Math.PI*2,!0),t.holes.push(e);const i={steps:1,depth:16,bevelEnabled:!0,bevelThickness:1.5,bevelSize:1,bevelSegments:2},n=new Tn(t,i);return n.rotateX(Math.PI/2),n}generatePlanterGeometry(){const t=new wn(26,18,48,6,4),e=t.attributes.position;for(let i=0;i<e.count;i++){const s=e.getY(i)/48*.6,r=e.getX(i),o=e.getZ(i);e.setX(i,r*Math.cos(s)-o*Math.sin(s)),e.setZ(i,r*Math.sin(s)+o*Math.cos(s))}return t.computeVertexNormals(),t}loadSTLFile(t,e,i){const n=new FileReader;n.onload=s=>{try{const o=new wm().parse(s.target.result);this.setModelGeometry(o),e&&e(o)}catch(r){console.error("Error parsing STL file:",r),i&&i(r)}},n.readAsArrayBuffer(t)}setColor(t){this.currentColor=t,this.currentMesh&&this.currentMesh.material.color.set(t)}setMaterialType(t){if(this.currentMaterialType=t,this.currentMesh){const e=this.getMaterial(this.currentColor,!1);this.currentMesh.material=e}}toggleWireframe(t){this.isWireframe=t,this.wireframeMesh&&(this.wireframeMesh.visible=t)}updateSliceClipping(t){if(this.slicePercent=t,!this.currentMesh)return;const e=this.currentBbox.max.y-this.currentBbox.min.y,i=t/100*e;this.clippingPlane.constant=i,t<99&&t>1?(this.nozzleGroup.visible=!0,this.nozzleGroup.position.set(0,i,0)):this.nozzleGroup.visible=!1}resetCamera(){this.camera.position.set(160,140,180),this.controls.target.set(0,30,0),this.controls.update()}onResize(){if(!this.container)return;const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}animate(){requestAnimationFrame(this.animate),this.controls.update(),this.nozzleGroup&&this.nozzleGroup.visible&&(this.nozzleGroup.position.x=Math.sin(Date.now()*.008)*12,this.nozzleGroup.position.z=Math.cos(Date.now()*.008)*12),this.renderer.render(this.scene,this.camera)}destroy(){window.removeEventListener("resize",this.onResize),this.renderer&&this.renderer.domElement&&this.container.removeChild(this.renderer.domElement)}}const ps=[{id:"functional-part",title:"Funktsional va Ehtiyot Qismlar",uzTitle:"Ta’mirlash va Nostandart Qismlar",icon:"⚙️",badge:"B2B Yuqori Talab",badgeColor:"emerald",shortDesc:"Singan shesternalar, kraniklar, kronshteynlar, uskunalar korpusi va avtomobil plastmassa detallari.",targetCustomer:"Ta’mirlash ustaxonalari, maishiy texnika egalari, avtomobil egalari, sexlar",recommendedMaterial:"PETG",defaultInfill:60,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:45e3,modelPreset:"gear",features:["Singan jismoniy qism yoki o‘lchamlardan qayta chizma (revers-injiniring)","PETG va Neylon orqali yuqori mustahkamlik va yeyilishga chidamlilik","Muhandislik aniqligi: ±0.05 mm gacha bardoshlik","Chet eldan qimmat va uzoq kutishga nisbatan 80% tejamkorlik"],presets:[{name:"Oshxona Kombayni Shesternasi",weightG:32,timeHrs:1.8,modelingFeeUZS:5e4},{name:"Konditsioner Jalyuzi Qisqichi",weightG:12,timeHrs:.8,modelingFeeUZS:3e4},{name:"Og‘ir Yuk Kronshteyni (Devorga)",weightG:75,timeHrs:3.5,modelingFeeUZS:4e4},{name:"Uskunalar Regulyator Tutqichi (Knob)",weightG:22,timeHrs:1.2,modelingFeeUZS:3e4}]},{id:"rapid-prototype",title:"Tezkor Prototip va Muhandislik Korpuslari",uzTitle:"Startaplar va Muhandislar Uchun",icon:"🚀",badge:"Muhandislik va Startap",badgeColor:"cyan",shortDesc:"IoT korpuslari, elektronika qutilari, dron romlari va robototexnika qismlarini seriyadan oldin sinash.",targetCustomer:"Apparat startaplari, muhandislar, mahsulot dizaynerlari, IoT dasturchilari",recommendedMaterial:"PLA-TOUGH",defaultInfill:30,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24–48 Soat",basePriceUZS:85e3,modelPreset:"drone-arm",features:["Qimmat metall qoliplar yasatishdan oldin 24 soat ichida sinov prototipi","Latun rezbali vtulka (heat-set insert) o‘rnatish imkoniyati","Platalar (PCB) va qisqichli birikmalar (snap-fit) uchun mos","Ergonomika va o‘lchamlarni minimal xarajat bilan tekshirish"],presets:[{name:"Dron (Kvadrkopter) Motor Yelkasi",weightG:48,timeHrs:2.5,modelingFeeUZS:6e4},{name:"Aqlli Uy Sensori Devor Qutisi",weightG:65,timeHrs:3.2,modelingFeeUZS:8e4},{name:"Qo‘l Diagnostika Qurilmasi Korpusi",weightG:95,timeHrs:4.5,modelingFeeUZS:9e4},{name:"DIN-Reyka Sanoat Rele Qutisi",weightG:55,timeHrs:2.8,modelingFeeUZS:5e4}]},{id:"architectural-model",title:"Arxitektura va Shaharsozlik Maketlari",uzTitle:"Bino va Loyihalar Taqdimoti",icon:"🏛️",badge:"Arxitektura va Qurilish",badgeColor:"amber",shortDesc:"Toshkent City turar-joy majmualari, zamonaviy villalar, master-reja va interyer masshtab maketlari.",targetCustomer:"Arxitektorlar, qurilish kompaniyalari, dizaynerlar, shaharsozlar",recommendedMaterial:"PLA-MATTE-WHITE",defaultInfill:15,defaultLayerHeight:.16,defaultQuantity:1,typicalTurnaround:"48–72 Soat",basePriceUZS:25e4,modelPreset:"tower",features:["Mukammal oppoq matoviy yuza va aniq fassad chiziqlari","1:100, 1:200, 1:500 masshtabdagi modulli yig‘iluvchi qismlar","Investorlar va shaharsozlik kengashi taqdimotlari uchun ideal","Bambu printeridan katta ob’ektlar uchun ko‘p qismli yig‘ish"],presets:[{name:"Zamonaviy Osmono‘par Bino (1:200)",weightG:210,timeHrs:9.5,modelingFeeUZS:15e4},{name:"Shahar Tashqarisidagi Villa Maketi",weightG:180,timeHrs:8,modelingFeeUZS:12e4},{name:"Turar-Joy Kvartali Bosh Rejasi",weightG:340,timeHrs:14,modelingFeeUZS:2e5},{name:"Xonadon Rejasi va Interyer Kesimi",weightG:130,timeHrs:6,modelingFeeUZS:1e5}]},{id:"educational-project",title:"Talabalar va Ta’lim Loyihalari (ToshTech)",uzTitle:"Robototexnika va Diplom Ishtirokchilari",icon:"🎓",badge:"20% Talabalar Chegirmasi",badgeColor:"purple",shortDesc:"Robot klublari shassisi, diplom va kurs ishlari detallari, anatomik va ilmiy o‘quv maketlari.",targetCustomer:"ToshTech, TATU, Turin, Inha, Vestminster talabalari va to‘garaklar",recommendedMaterial:"PLA",defaultInfill:25,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:35e3,modelPreset:"gripper",features:["Talaba guvohnomasi bilan barcha buyurtmalarga 20% chegirma","Xakatonlar va diplom topshirish muddatlarida tezkor navbat","3D chop etish uchun chizmani bepul optimallashtirish bo‘yicha maslahat","Universitet laboratoriyalari uchun paketli narxlar"],presets:[{name:"2-Barmoqli Robot Tutqichi (Servo Gripper)",weightG:45,timeHrs:2.2,modelingFeeUZS:3e4},{name:"Formula Student Aerodinamik Qanotchasi",weightG:60,timeHrs:3,modelingFeeUZS:4e4},{name:"Ko‘rgazmali Reduktor Mexanizmi",weightG:90,timeHrs:4.2,modelingFeeUZS:5e4},{name:"Biomeditsina Yurak Anatomik Maketi",weightG:70,timeHrs:3.8,modelingFeeUZS:4e4}]},{id:"custom-merch",title:"Esdalik Sovg‘alari, Art va Merch",uzTitle:"Shaxsiy Buyurtmalar va Korporativ Sovg‘a",icon:"🎨",badge:"Ijodiy va Chakana",badgeColor:"pink",shortDesc:"Stol aksessuarlari, anime figuralari, kompaniya logotipli breloklar, litofaniya fotosuratli tungi chiroqlar.",targetCustomer:"Aholisi, brendlar, sovg‘a izlovchilar, Instagram va Telegram xaridorlari",recommendedMaterial:"PLA-SILK-GOLD",defaultInfill:20,defaultLayerHeight:.16,defaultQuantity:1,typicalTurnaround:"24–48 Soat",basePriceUZS:4e4,modelPreset:"planter",features:["Tillarang ipak, marmarsimon va ikki rangli yaltiroq filamentlar","Buyum yuzasiga shaxsiy ism yoki kompaniya logotipini bosib chiqarish","Chiroyli qadoqlash va sovg‘a qutisi","Dona holatda ham buyurtma qabul qilinadi"],presets:[{name:"Low-Poly Geometrik Kaktus Idishi",weightG:50,timeHrs:2.4,modelingFeeUZS:25e3},{name:"Toshkent Teleminorasi Stol Suveniri",weightG:40,timeHrs:2,modelingFeeUZS:3e4},{name:"Litofaniya Fotosuratli Yorug‘lik Kubigi",weightG:85,timeHrs:4.8,modelingFeeUZS:4e4},{name:"10 dona Kompaniya Logotipli Brelok",weightG:90,timeHrs:3.6,modelingFeeUZS:3e4}]},{id:"b2b-batch",title:"Kichik Seriyali B2B Ishlab Chiqarish (10–100+ dona)",uzTitle:"Kichik Partiyada Tayyorlash",icon:"🏭",badge:"35% Gacha Ulgurji Chegirma",badgeColor:"blue",shortDesc:"50 million so‘mlik qimmat po‘lat qoliplarsiz plastmassa qismlarni tezkor seriyada chop etish.",targetCustomer:"Elektronika sexlari, mebel ishlab chiqaruvchilar, montajchilar",recommendedMaterial:"PETG",defaultInfill:40,defaultLayerHeight:.24,defaultQuantity:25,typicalTurnaround:"3–5 Kun",basePriceUZS:45e4,modelPreset:"gear",features:["Pillapoyali chegirma: 10-24 dona (-15%), 25-49 dona (-25%), 50+ dona (-35%)","Birinchi namuna bepul chop etilib, tasdiqlangach to‘liq partiya ishga tushadi","Barcha qismlarda rang va o‘lcham bir xilligi kafolatlanadi","Qolip tayyorlashga oylar sarflamay, ertagayoq ishlab chiqarishni boshlash"],presets:[{name:"25 dona Kabel Qisqichi (Clip)",weightG:250,timeHrs:11,modelingFeeUZS:4e4},{name:"50 dona Elektronika Prokladkasi",weightG:200,timeHrs:8.5,modelingFeeUZS:3e4},{name:"20 dona Dastgoh Uskunasi Tutqichi",weightG:600,timeHrs:22,modelingFeeUZS:5e4}]},{id:"cad-modeling-only",title:"3D Chizma va Revers-Injiniring Xizmati",uzTitle:"Faqat Chizma va Modellashtirish",icon:"📐",badge:"Muhandislik Chizmasi",badgeColor:"teal",shortDesc:"Faylingiz yo‘qmi? Singan detalni ustaxonamizga olib keling yoki fotosuratini yuboring — 3D model chizib beramiz.",targetCustomer:"3D modeli bo‘lmagan mijozlar, ustalar, kashfiyotchilar, korxonalar",recommendedMaterial:"PETG",defaultInfill:50,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:8e4,modelPreset:"gear",features:["Elektron shtangensirkul bilan mikron darajasida aniq o‘lchash",".STEP, .STL, .OBJ va SolidWorks formatlarida tayyor fayl berish","Kuchlanish va 3D bosmaga mosligini tahlil qilish","Ustaxonamizda 1 dona bepul sinov nusxasini chop etib tekshirish"],presets:[{name:"Oddiy Tutqich yoki Qopqoqni Modellashtirish",weightG:25,timeHrs:1,modelingFeeUZS:6e4},{name:"Singan Shesterna Tishlarini Qayta Tiklash",weightG:35,timeHrs:1.5,modelingFeeUZS:9e4},{name:"Murakkab Egri Chiziqli Korpus Chizmasi",weightG:70,timeHrs:3,modelingFeeUZS:15e4}]}],fs=[{id:"PETG",name:"PETG Mustahkam (Toshkent)",uzName:"PETG Muhandislik Polimeri",type:"Mustahkam Texnik Polimer",densityGcm3:1.27,costPerKgUZS:22e4,costPerGUZS:220,bestFor:"Shesternalar, kronshteynlar, tashqi detallar, 75°C gacha issiqqa chidamli",colors:[{name:"Signal Zarg‘aldoq",hex:"#ff6600",rough:.25},{name:"Yarim Shaffof Kulrang",hex:"#4a5568",rough:.2,transparent:!0,opacity:.85},{name:"Yaltiroq Qora",hex:"#111111",rough:.15},{name:"Sanoat Oqi",hex:"#e2e8f0",rough:.2}]},{id:"PLA",name:"PLA Standart (Sunlu / eSun)",uzName:"PLA Bioplastik",type:"Ekologik Toza Polimer",densityGcm3:1.24,costPerKgUZS:18e4,costPerGUZS:180,bestFor:"Prototip, ko‘rgazmali maketlar, talabalar loyihalari, dekorativ buyumlar",colors:[{name:"Qop-Qora",hex:"#1a1a1a",rough:.4},{name:"Opppoq Oq",hex:"#f0f0f0",rough:.3},{name:"Yorqin Moviy",hex:"#00c3ff",rough:.35},{name:"Qizil",hex:"#e62429",rough:.35}]},{id:"PLA-SILK",name:"Ipak PLA Metall Yaltiroq",uzName:"Ipak Yaltiroq Premium",type:"Dekorativ Premium",densityGcm3:1.25,costPerKgUZS:26e4,costPerGUZS:260,bestFor:"Sovg‘alar, mukofotlar, shaxsiy suvenirlar, Toshkent yodgorliklari",colors:[{name:"Zar Tillarang",hex:"#d4af37",metal:.6,rough:.25},{name:"Kumushrang",hex:"#c0c0c0",metal:.65,rough:.25},{name:"Misrang",hex:"#b76e79",metal:.55,rough:.28}]},{id:"TPU",name:"TPU 95A Egiluvchan Rezina",uzName:"Rezinasimon Elastomer",type:"Elastomer Rezina",densityGcm3:1.21,costPerKgUZS:32e4,costPerGUZS:320,bestFor:"Zichlagichlar, bamperlar, zarbani yutuvchi muftalar, elastik qismlar",colors:[{name:"Neon Yashil",hex:"#39ff14",rough:.4},{name:"Qora Rezina",hex:"#222222",rough:.5},{name:"Shaffof Rezina",hex:"#e0f2fe",rough:.2,transparent:!0,opacity:.7}]},{id:"ABS-P1S",name:"ABS / ASA Termobardosh (Bambu P1S)",uzName:"Yuqori Haroratga Chidamli",type:"Yopiq Kamera Polimeri",densityGcm3:1.05,costPerKgUZS:25e4,costPerGUZS:250,bestFor:"Avtomobil kapot osti detallari, 95°C gacha issiqqa chidamli qismlar",colors:[{name:"Matoviy Qora",hex:"#18181b",rough:.6},{name:"Texnik Kulrang",hex:"#64748b",rough:.55}]}],ms=[{id:"0.28",label:"0.28 mm — Tezkor Qoralama",speedMultiplier:.75,desc:"Eng tez bosish, o‘lchamlarni sinab ko‘rish uchun qulay"},{id:"0.20",label:"0.20 mm — Standart (Tavsiya etiladi)",speedMultiplier:1,desc:"Mustahkamlik, silliqlik va tezlikning ideal balansi"},{id:"0.12",label:"0.12 mm — Yuqori Aniqlik",speedMultiplier:1.5,desc:"Deyarli ko‘rinmas qatlamlar, mayda shesternalar va ko‘rgazmali buyumlar uchun"}],Pm=[{value:15,label:"15% — Yengil / Ko‘rgazmali",desc:"Haykalchalar, vizual arxitektura maketlari"},{value:30,label:"30% — Standart Prototip",desc:"Elektronika korpuslari, qutilar"},{value:60,label:"60% — Yuqori Mustahkam",desc:"Shesternalar, mexanik kronshteynlar, ehtiyot qismlar"},{value:100,label:"100% — Monolit Muhandislik",desc:"Og‘ir yuk tushadigan qismlar, kraniklar"}],Ps=12650;var Ws={};(function a(t,e,i,n){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!t.OffscreenCanvas)return!1;try{var w=new OffscreenCanvas(1,1),E=w.getContext("2d");E.fillRect(0,0,1,1);var $=w.transferToImageBitmap();E.createPattern($,"no-repeat")}catch{return!1}return!0}();function l(){}function c(w){var E=e.exports.Promise,$=E!==void 0?E:t.Promise;return typeof $=="function"?new $(w):(w(l,l),null)}var d=function(w,E){return{transform:function($){if(w)return $;if(E.has($))return E.get($);var k=new OffscreenCanvas($.width,$.height),D=k.getContext("2d");return D.drawImage($,0,0),E.set($,k),k},clear:function(){E.clear()}}}(o,new Map),h=function(){var w=Math.floor(16.666666666666668),E,$,k={},D=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(j){var et=Math.random();return k[et]=requestAnimationFrame(function tt(st){D===st||D+w-1<st?(D=st,delete k[et],j()):k[et]=requestAnimationFrame(tt)}),et},$=function(j){k[j]&&cancelAnimationFrame(k[j])}):(E=function(j){return setTimeout(j,w)},$=function(j){return clearTimeout(j)}),{frame:E,cancel:$}}(),p=function(){var w,E,$={};function k(D){function j(et,tt){D.postMessage({options:et||{},callback:tt})}D.init=function(tt){var st=tt.transferControlToOffscreen();D.postMessage({canvas:st},[st])},D.fire=function(tt,st,mt){if(E)return j(tt,null),E;var ht=Math.random().toString(36).slice(2);return E=c(function(_t){function R(ct){ct.data.callback===ht&&(delete $[ht],D.removeEventListener("message",R),E=null,d.clear(),mt(),_t())}D.addEventListener("message",R),j(tt,ht),$[ht]=R.bind(null,{data:{callback:ht}})}),E},D.reset=function(){D.postMessage({reset:!0});for(var tt in $)$[tt](),delete $[tt]}}return function(){if(w)return w;if(!i&&s){var D=["var CONFETTI, SIZE = {}, module = {};","("+a.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{w=new Worker(URL.createObjectURL(new Blob([D])))}catch(j){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",j),null}k(w)}return w}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(w,E){return E?E(w):w}function v(w){return w!=null}function u(w,E,$){return g(w&&v(w[E])?w[E]:m[E],$)}function f(w){return w<0?0:Math.floor(w)}function A(w,E){return Math.floor(Math.random()*(E-w))+w}function _(w){return parseInt(w,16)}function S(w){return w.map(O)}function O(w){var E=String(w).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:_(E.substring(0,2)),g:_(E.substring(2,4)),b:_(E.substring(4,6))}}function P(w){var E=u(w,"origin",Object);return E.x=u(E,"x",Number),E.y=u(E,"y",Number),E}function C(w){w.width=document.documentElement.clientWidth,w.height=document.documentElement.clientHeight}function X(w){var E=w.getBoundingClientRect();w.width=E.width,w.height=E.height}function b(w){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=w,E}function M(w,E,$,k,D,j,et,tt,st){w.save(),w.translate(E,$),w.rotate(j),w.scale(k,D),w.arc(0,0,1,et,tt,st),w.restore()}function F(w){var E=w.angle*(Math.PI/180),$=w.spread*(Math.PI/180);return{x:w.x,y:w.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:w.startVelocity*.5+Math.random()*w.startVelocity,angle2D:-E+(.5*$-Math.random()*$),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:w.color,shape:w.shape,tick:0,totalTicks:w.ticks,decay:w.decay,drift:w.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:w.gravity*3,ovalScalar:.6,scalar:w.scalar,flat:w.flat}}function V(w,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var $=E.tick++/E.totalTicks,k=E.x+E.random*E.tiltCos,D=E.y+E.random*E.tiltSin,j=E.wobbleX+E.random*E.tiltCos,et=E.wobbleY+E.random*E.tiltSin;if(w.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-$)+")",w.beginPath(),r&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))w.fill(W(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(j-k)*.1,Math.abs(et-D)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var tt=Math.PI/10*E.wobble,st=Math.abs(j-k)*.1,mt=Math.abs(et-D)*.1,ht=E.shape.bitmap.width*E.scalar,_t=E.shape.bitmap.height*E.scalar,R=new DOMMatrix([Math.cos(tt)*st,Math.sin(tt)*st,-Math.sin(tt)*mt,Math.cos(tt)*mt,E.x,E.y]);R.multiplySelf(new DOMMatrix(E.shape.matrix));var ct=w.createPattern(d.transform(E.shape.bitmap),"no-repeat");ct.setTransform(R),w.globalAlpha=1-$,w.fillStyle=ct,w.fillRect(E.x-ht/2,E.y-_t/2,ht,_t),w.globalAlpha=1}else if(E.shape==="circle")w.ellipse?w.ellipse(E.x,E.y,Math.abs(j-k)*E.ovalScalar,Math.abs(et-D)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):M(w,E.x,E.y,Math.abs(j-k)*E.ovalScalar,Math.abs(et-D)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var G=Math.PI/2*3,rt=4*E.scalar,Q=8*E.scalar,xt=E.x,gt=E.y,x=5,y=Math.PI/x;x--;)xt=E.x+Math.cos(G)*Q,gt=E.y+Math.sin(G)*Q,w.lineTo(xt,gt),G+=y,xt=E.x+Math.cos(G)*rt,gt=E.y+Math.sin(G)*rt,w.lineTo(xt,gt),G+=y;else w.moveTo(Math.floor(E.x),Math.floor(E.y)),w.lineTo(Math.floor(E.wobbleX),Math.floor(D)),w.lineTo(Math.floor(j),Math.floor(et)),w.lineTo(Math.floor(k),Math.floor(E.wobbleY));return w.closePath(),w.fill(),E.tick<E.totalTicks}function at(w,E,$,k,D){var j=E.slice(),et=w.getContext("2d"),tt,st,mt=c(function(ht){function _t(){tt=st=null,et.clearRect(0,0,k.width,k.height),d.clear(),D(),ht()}function R(){i&&!(k.width===n.width&&k.height===n.height)&&(k.width=w.width=n.width,k.height=w.height=n.height),!k.width&&!k.height&&($(w),k.width=w.width,k.height=w.height),et.clearRect(0,0,k.width,k.height),j=j.filter(function(ct){return V(et,ct)}),j.length?tt=h.frame(R):_t()}tt=h.frame(R),st=_t});return{addFettis:function(ht){return j=j.concat(ht),mt},canvas:w,promise:mt,reset:function(){tt&&h.cancel(tt),st&&st()}}}function U(w,E){var $=!w,k=!!u(E||{},"resize"),D=!1,j=u(E,"disableForReducedMotion",Boolean),et=s&&!!u(E||{},"useWorker"),tt=et?p():null,st=$?C:X,mt=w&&tt?!!w.__confetti_initialized:!1,ht=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,_t;function R(G,rt,Q){for(var xt=u(G,"particleCount",f),gt=u(G,"angle",Number),x=u(G,"spread",Number),y=u(G,"startVelocity",Number),B=u(G,"decay",Number),ot=u(G,"gravity",Number),lt=u(G,"drift",Number),nt=u(G,"colors",S),St=u(G,"ticks",Number),pt=u(G,"shapes"),Mt=u(G,"scalar"),Pt=!!u(G,"flat"),Nt=P(G),dt=xt,Bt=[],zt=w.width*Nt.x,Dt=w.height*Nt.y;dt--;)Bt.push(F({x:zt,y:Dt,angle:gt,spread:x,startVelocity:y,color:nt[dt%nt.length],shape:pt[A(0,pt.length)],ticks:St,decay:B,gravity:ot,drift:lt,scalar:Mt,flat:Pt}));return _t?_t.addFettis(Bt):(_t=at(w,Bt,st,rt,Q),_t.promise)}function ct(G){var rt=j||u(G,"disableForReducedMotion",Boolean),Q=u(G,"zIndex",Number);if(rt&&ht)return c(function(y){y()});$&&_t?w=_t.canvas:$&&!w&&(w=b(Q),document.body.appendChild(w)),k&&!mt&&st(w);var xt={width:w.width,height:w.height};tt&&!mt&&tt.init(w),mt=!0,tt&&(w.__confetti_initialized=!0);function gt(){if(tt){var y={getBoundingClientRect:function(){if(!$)return w.getBoundingClientRect()}};st(y),tt.postMessage({resize:{width:y.width,height:y.height}});return}xt.width=xt.height=null}function x(){_t=null,k&&(D=!1,t.removeEventListener("resize",gt)),$&&w&&(document.body.contains(w)&&document.body.removeChild(w),w=null,mt=!1)}return k&&!D&&(D=!0,t.addEventListener("resize",gt,!1)),tt?tt.fire(G,xt,x):R(G,xt,x)}return ct.reset=function(){tt&&tt.reset(),_t&&_t.reset()},ct}var q;function N(){return q||(q=U(null,{useWorker:!0,resize:!0})),q}function W(w,E,$,k,D,j,et){var tt=new Path2D(w),st=new Path2D;st.addPath(tt,new DOMMatrix(E));var mt=new Path2D;return mt.addPath(st,new DOMMatrix([Math.cos(et)*D,Math.sin(et)*D,-Math.sin(et)*j,Math.cos(et)*j,$,k])),mt}function K(w){if(!r)throw new Error("path confetti are not supported in this browser");var E,$;typeof w=="string"?E=w:(E=w.path,$=w.matrix);var k=new Path2D(E),D=document.createElement("canvas"),j=D.getContext("2d");if(!$){for(var et=1e3,tt=et,st=et,mt=0,ht=0,_t,R,ct=0;ct<et;ct+=2)for(var G=0;G<et;G+=2)j.isPointInPath(k,ct,G,"nonzero")&&(tt=Math.min(tt,ct),st=Math.min(st,G),mt=Math.max(mt,ct),ht=Math.max(ht,G));_t=mt-tt,R=ht-st;var rt=10,Q=Math.min(rt/_t,rt/R);$=[Q,0,0,Q,-Math.round(_t/2+tt)*Q,-Math.round(R/2+st)*Q]}return{type:"path",path:E,matrix:$}}function it(w){var E,$=1,k="#000000",D='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof w=="string"?E=w:(E=w.text,$="scalar"in w?w.scalar:$,D="fontFamily"in w?w.fontFamily:D,k="color"in w?w.color:k);var j=10*$,et=""+j+"px "+D,tt=new OffscreenCanvas(j,j),st=tt.getContext("2d");st.font=et;var mt=st.measureText(E),ht=Math.ceil(mt.actualBoundingBoxRight+mt.actualBoundingBoxLeft),_t=Math.ceil(mt.actualBoundingBoxAscent+mt.actualBoundingBoxDescent),R=2,ct=mt.actualBoundingBoxLeft+R,G=mt.actualBoundingBoxAscent+R;ht+=R+R,_t+=R+R,tt=new OffscreenCanvas(ht,_t),st=tt.getContext("2d"),st.font=et,st.fillStyle=k,st.fillText(E,ct,G);var rt=1/$;return{type:"bitmap",bitmap:tt.transferToImageBitmap(),matrix:[rt,0,0,rt,-ht*rt/2,-_t*rt/2]}}e.exports=function(){return N().apply(this,arguments)},e.exports.reset=function(){N().reset()},e.exports.create=U,e.exports.shapeFromPath=K,e.exports.shapeFromText=it})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ws,!1);const Rs=Ws.exports;Ws.exports.create;const Rm={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_ADMIN_CHAT_IDS:"8929216064",VITE_ADMIN_PIN_CODE:"083010",VITE_API_BASE_URL:"https://any3dcubic-bot.onrender.com",VITE_TELEGRAM_BOT_TOKEN:"9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI"},Lm=Rm&&"https://any3dcubic-bot.onrender.com"||(typeof window<"u"&&window.location.hostname.includes("github.io")?"https://any3dcubic-bot.onrender.com":"");function Ce(a){const t=a.startsWith("/")?a:`/${a}`;return`${Lm}${t}`}class km{constructor(t,e,i){this.mount=t,this.studio=e,this.onOrderSubmitted=i,this.state={orderTypeId:"functional-part",presetIndex:0,materialId:"PETG",colorHex:"#ff6600",infill:60,layerHeight:"0.20",quantity:1,modelingService:"none",turnaround:"standard",delivery:"pickup",isStudent:!1,studentId:"",currency:"UZS",customerName:"",customerPhone:"+998 ",customerTelegram:"",orderNotes:"",uploadedFileName:null,receiptImage:null,slicePercent:100,wireframe:!1},this.render()}getCurrentOrderType(){return ps.find(t=>t.id===this.state.orderTypeId)||ps[0]}getCurrentMaterial(){return fs.find(t=>t.id===this.state.materialId)||fs[0]}formatPrice(t){return this.state.currency==="USD"?`$${(t/Ps).toFixed(2)}`:`${t.toLocaleString("ru-RU")} so‘m`}calculatePricing(){const t=this.getCurrentOrderType(),e=this.getCurrentMaterial(),i=t.presets[this.state.presetIndex]||t.presets[0],n=ms.find(O=>O.id===this.state.layerHeight)||ms[1],s=.5+this.state.infill/100*.7,r=Math.round(i.weightG*s),o=r*e.costPerGUZS,l=+(i.timeHrs*n.speedMultiplier*s).toFixed(1),c=Math.round(l*2665),d=12e3;let h=0;this.state.modelingService==="broken-part"?h=i.modelingFeeUZS||8e4:this.state.modelingService==="sketch"&&(h=5e4);const p=o+c+d,m=Math.max(t.basePriceUZS,Math.round(p*2.3/5e3)*5e3);let g=0;this.state.quantity>=50?g=35:this.state.quantity>=25?g=25:this.state.quantity>=10&&(g=15);const v=Math.round(m*(1-g/100));let u=v*this.state.quantity,f=0;this.state.turnaround==="rush24"&&(f=Math.round(u*.25));let A=0;this.state.isStudent&&(A=Math.round(u*.2));const _=0,S=Math.max(0,u+h+f-A);return{estWeightG:r,estTimeHrs:l,rawMaterialCost:o,directUnitCost:p,baseUnitPrice:m,unitPriceAfterVolume:v,volumeDiscountPercent:g,partsSubtotal:u,designFee:h,rushSurcharge:f,studentDiscount:A,deliveryFee:_,grandTotalUZS:S}}setCurrency(t){this.state.currency=t,this.render()}selectOrderType(t){this.state.orderTypeId=t,this.state.presetIndex=0;const e=this.getCurrentOrderType();if(this.state.materialId=e.recommendedMaterial.startsWith("PLA")?"PLA":e.recommendedMaterial,e.recommendedMaterial==="PLA-SILK"&&(this.state.materialId="PLA-SILK"),e.recommendedMaterial==="ABS-P1S"&&(this.state.materialId="ABS-P1S"),this.state.infill=e.defaultInfill,this.state.layerHeight=e.defaultLayerHeight.toFixed(2),this.state.quantity=e.defaultQuantity,t==="educational-project"&&(this.state.isStudent=!0),this.studio){this.studio.loadModelPreset(e.modelPreset);const i=this.getCurrentMaterial();this.state.colorHex=i.colors[0].hex,this.studio.setMaterialType(this.state.materialId),this.studio.setColor(this.state.colorHex)}this.render()}render(){var s;const t=this.getCurrentOrderType(),e=this.getCurrentMaterial(),i=this.calculatePricing();this.mount.innerHTML=`
      <div class="configurator-wrapper">
        <!-- 1-Qadam: Buyurtma Turini Tanlash -->
        <section class="section-block" id="order-type-selection">
          <div class="section-header">
            <div class="step-tag"><span class="step-num">1-Qadam</span> Buyurtma Turini Tanlang</div>
            <h2 class="section-title">Sizga qanday 3D bosma xizmati kerak?</h2>
            <p class="section-subtitle">Toshkentdagi ehtiyojingizga mos maxsus materiallar, muhandislik parametrlari va shaffof narxlar.</p>
          </div>

          <div class="order-type-grid" id="order-types-container">
            ${ps.map(r=>`
              <div class="order-type-card ${r.id===this.state.orderTypeId?"active":""}" data-type-id="${r.id}">
                <div class="card-top-row">
                  <span class="type-icon">${r.icon}</span>
                  <span class="type-badge badge-${r.badgeColor}">${r.badge}</span>
                </div>
                <h3 class="type-title">${r.title}</h3>
                <div class="type-uz">${r.uzTitle}</div>
                <p class="type-desc">${r.shortDesc}</p>
                <div class="type-footer">
                  <div class="type-price">Boshlang‘ich: <strong>${this.formatPrice(r.basePriceUZS)}</strong></div>
                  <div class="type-turnaround">⏱️ ${r.typicalTurnaround}</div>
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
                ${t.presets.map((r,o)=>`
                  <button type="button" class="preset-pill ${o===this.state.presetIndex?"active":""}" data-preset-idx="${o}">
                    ${r.name}
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
                ${fs.map(r=>`
                  <div class="material-chip ${r.id===this.state.materialId?"active":""}" data-mat-id="${r.id}">
                    <div class="mat-name">${r.name.split(" (")[0]}</div>
                    <div class="mat-prop">${r.bestFor.split(",")[0]}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Rang Tanlash -->
            <div class="form-group">
              <label class="group-label">Filament Rangi (3D Modeldan Ko‘ring)</label>
              <div class="color-picker-row">
                ${e.colors.map(r=>`
                  <button type="button" class="color-dot ${r.hex===this.state.colorHex?"active":""}" 
                          data-color="${r.hex}" 
                          style="background-color: ${r.hex};" 
                          title="${r.name}">
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
                  ${Pm.map(r=>`
                    <button type="button" class="segment-btn ${r.value===this.state.infill?"active":""}" data-infill="${r.value}">
                      ${r.value}%
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
                  ${ms.map(r=>`
                    <button type="button" class="segment-btn ${r.id===this.state.layerHeight?"active":""}" data-layer="${r.id}">
                      ${r.id}
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
                    <div class="radio-desc">Singan namunani ustaxonamizga olib keling yoki fotosuratlarni yuboring</div>
                  </div>
                  <span class="fee-tag">+${this.formatPrice(((s=t.presets[this.state.presetIndex])==null?void 0:s.modelingFeeUZS)||8e4)}</span>
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
              <div class="group-header-row">
                <label class="group-label">Yetkazib Berish va Qabul Qilish Usuli</label>
                <span class="delivery-badge-note">💡 Kuryerga / Pochtaga to‘lanadi</span>
              </div>
              <div class="delivery-segmented-3">
                <button type="button" class="deliv-card-btn ${this.state.delivery==="pickup"?"active":""}" data-delivery="pickup">
                  <span class="deliv-icon">🏬</span>
                  <div class="deliv-meta">
                    <strong>Ustaxonadan Olib Ketish</strong>
                    <small>Ustaxonamizdan bepul olib ketish</small>
                  </div>
                </button>
                <button type="button" class="deliv-card-btn ${this.state.delivery==="yandex"?"active":""}" data-delivery="yandex">
                  <span class="deliv-icon">🛵</span>
                  <div class="deliv-meta">
                    <strong>Toshkent Ichida (Yandex)</strong>
                    <small>Yandex Go (Kuryerga to‘lanadi)</small>
                  </div>
                </button>
                <button type="button" class="deliv-card-btn ${this.state.delivery==="bts"?"active":""}" data-delivery="bts">
                  <span class="deliv-icon">📦</span>
                  <div class="deliv-meta">
                    <strong>Viloyatlarga (BTS Pochta)</strong>
                    <small>BTS / EMU (Pochtaga to‘lanadi)</small>
                  </div>
                </button>
              </div>

              <div class="delivery-notice-box">
                ${this.state.delivery==="bts"?"📦 <b>Viloyatlar bo‘ylab yetkazish:</b> Toshkentdan viloyatingizga BTS Pochta yoki EMU orqali 24 soat ichida yuboriladi. Pochta xarajati qabul qilib olinganda to‘lanadi (saytdagi hisobga qo‘shilmaydi).":this.state.delivery==="yandex"?"🛵 <b>Toshkent shahri bo‘ylab yetkazish:</b> Buyurtmangiz tayyor bo‘lgach Yandex Dostavka orqali manzilingizga tezkor jo‘natiladi. Yetkazib berish xarajati kuryerga qabul qilinganda to‘lanadi.":"📍 <b>Ustaxonamizdan bepul olib ketish:</b> Buyurtmangiz tayyor bo‘lishi bilan ustaxonamizdan bepul olib ketishingiz mumkin. Manzil: Toshkent shahri, Sergeli tumani, Yuqori Darxon mahallasi, Navro‘z 6-tor ko‘chasi, 3-uy (Lokatsiya: 41.235141, 69.207236)."}
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
                <span>Vazni: ~<strong>${i.estWeightG*this.state.quantity} gramm</strong></span>
                <span>Vaqti: ~<strong>${(i.estTimeHrs*this.state.quantity).toFixed(1)} soat</strong></span>
                <span>Qatlamlar: ~<strong>${Math.round(i.estTimeHrs*120)}</strong></span>
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
                  <span>Mahsulotni Chop Etish (${this.state.quantity} × ${this.formatPrice(i.unitPriceAfterVolume)})</span>
                  <span>${this.formatPrice(i.partsSubtotal)}</span>
                </div>
                ${i.volumeDiscountPercent>0?`
                  <div class="price-row discount-row">
                    <span>Ulgurji Chegirma (${i.volumeDiscountPercent}%)</span>
                    <span>-${i.volumeDiscountPercent}% Qo‘llandi</span>
                  </div>
                `:""}
                ${i.designFee>0?`
                  <div class="price-row">
                    <span>3D Muhandislik Chizmasi</span>
                    <span>+${this.formatPrice(i.designFee)}</span>
                  </div>
                `:""}
                ${i.rushSurcharge>0?`
                  <div class="price-row">
                    <span>Ekspress VIP 24 Soatlik Navbat</span>
                    <span>+${this.formatPrice(i.rushSurcharge)}</span>
                  </div>
                `:""}
                ${i.studentDiscount>0?`
                  <div class="price-row student-discount-row">
                    <span>🎓 Talaba Chegirmasi (-20%)</span>
                    <span class="neg-price">-${this.formatPrice(i.studentDiscount)}</span>
                  </div>
                `:""}
                ${i.deliveryFee>0?`
                  <div class="price-row">
                    <span>Yandex Go Kuryer Xizmati</span>
                    <span>+${this.formatPrice(i.deliveryFee)}</span>
                  </div>
                `:""}
              </div>

              <div class="grand-total-row">
                <div class="total-label-group">
                  <span class="total-label">Jami To‘lov:</span>
                  <span class="approx-usd">Taqriban ${(i.grandTotalUZS/Ps).toFixed(2)} USD</span>
                </div>
                <div class="total-amount">${this.formatPrice(i.grandTotalUZS)}</div>
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
              <p class="modal-desc">Buyurtma parametrlarini tasdiqlang va ustaxonamiz navbatiga qo‘shing.</p>
            </div>

            <div class="modal-body">
              <div class="order-invoice-preview" id="invoice-printable-area">
                <div class="invoice-top">
                  <div>
                    <h4 class="invoice-company">Toshkent 3D Bosma va Prototip Ustaxonasi</h4>
                    <div class="invoice-district">Toshkent shahri, Sergeli tumani, Yuqori Darxon (41.235141, 69.207236) | @any3DCubicc</div>
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
                    <strong class="inv-v">${i.estWeightG*this.state.quantity} gramm</strong>
                  </div>
                  <div class="inv-col">
                    <span class="inv-k">Tayyor Bo‘lish Vaqti:</span>
                    <strong class="inv-v">${this.state.turnaround==="rush24"?"⚡ Ekspress 24 Soat":"48 Soat Standart"}</strong>
                  </div>
                </div>

                <div class="invoice-total-box">
                  <span>Jami To‘lanadigan Summa:</span>
                  <strong class="inv-sum">${this.formatPrice(i.grandTotalUZS)}</strong>
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
                    <input type="text" id="cust-addr" placeholder="Toshkent bo‘ylab yoki Ustaxonadan olib ketish">
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

              <!-- 1. Administratorlar Tekshiruvi Ekrani (Verifying) -->
              <div class="order-verifying-card" id="order-verifying-screen" style="display: none;">
                <div class="verifying-radar-anim">
                  <div class="radar-ping"></div>
                  <div class="radar-core">🔍</div>
                </div>
                <div class="verifying-status-badge">🟡 ADMIN TEKSHIRUVI KUTILMOQDA</div>
                <h2 class="verifying-title">To‘lov chekingiz tekshirilmoqda...</h2>
                <div class="success-order-badge" id="verifying-order-num">#T3D-UZ-8492</div>
                
                <p class="verifying-desc">
                  Buyurtmangiz va to‘lov chekingiz Toshkent 3D Ustaxonasi administratorlariga yetkazildi. 
                  <b>Soxta (fake) to‘lovlarning oldini olish</b> maqsadida har bir chek xodimlarimiz tomonidan bank hisobimiz orqali tekshiriladi.
                </p>

                <div class="verifying-tip-box" style="margin: 10px 0; padding: 10px 12px; background: rgba(255, 170, 0, 0.08); border: 1px dashed rgba(255, 170, 0, 0.4); border-radius: 8px; font-size: 12.5px; color: #fbbf24; text-align: left;">
                  ℹ️ Shuningdek, Telegram botimizda (<a href="https://t.me/Any3dCubic_bot" target="_blank" style="color: #fbbf24; font-weight: bold; text-decoration: underline;">@Any3dCubic_bot</a>) buyurtmangiz raqamini yozib, holatni tekshirib turishingiz mumkin.
                </div>

                <div class="verification-steps-card">
                  <div class="vstep completed">
                    <div class="vstep-icon">✅</div>
                    <div class="vstep-info">
                      <strong>1. Chek va buyurtma yuborildi</strong>
                      <span>Telegram orqali adminlarga yetkazildi</span>
                    </div>
                  </div>
                  <div class="vstep active">
                    <div class="vstep-icon pulse">🟡</div>
                    <div class="vstep-info">
                      <strong>2. Admin tasdig‘i</strong>
                      <span id="vstep-admin-text">Hozirda chek haqiqiyligi tekshirilmoqda...</span>
                    </div>
                  </div>
                  <div class="vstep pending">
                    <div class="vstep-icon">🖨️</div>
                    <div class="vstep-info">
                      <strong>3. Dastgohda 3D chop etish</strong>
                      <span>Tasdiqlangandan so‘ng navbatga qo‘yiladi</span>
                    </div>
                  </div>
                </div>

                <div class="verifying-sub-note">
                  ⚡ <i>Odatda tekshiruv 1-3 daqiqa davom etadi. Administrator tasdiqlagan zahoti ekran avtomatik yangilanadi.</i>
                </div>
              </div>

              <!-- 2. Tasdiqlangan va Muvaffaqiyatli Qabul Qilindi Ekrani (Approved) -->
              <div class="order-success-card" id="order-success-screen" style="display: none;">
                <div class="success-icon-anim">🎉</div>
                <div class="approved-status-badge">✅ TO‘LOV TASDIQLANDI</div>
                <h2 class="success-title">Buyurtmangiz qabul qilindi!</h2>
                <div class="success-order-badge" id="success-order-num">#T3D-UZ-8492</div>
                <p class="success-sub">
                  To‘lov chekingiz administratorlarimiz tomonidan tekshirildi va haqiqiyligi tasdiqlandi. Buyurtmangiz Toshkent ustaxonamiz 3D dastgohida chop etishga tayyorlanmoqda!
                </p>
                
                <div class="live-bot-banner">
                  <span class="live-dot-pulse"></span>
                  <div class="live-banner-text">
                    <strong>Buyurtmangizni botda LIVE (jonli) ko‘ra olasiz!</strong>
                    <span>Dastgoh harorati, chop etish tezligi va tayyor bo‘lish vaqti real vaqtda yangilanadi.</span>
                  </div>
                </div>

                <div class="order-telegram-tip-box" id="success-tg-tip" style="margin: 14px 0 16px; padding: 12px 14px; background: rgba(0, 240, 255, 0.08); border: 1px dashed rgba(0, 240, 255, 0.4); border-radius: 10px; text-align: left; font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                  💡 <b>Mijozlar uchun qulaylik:</b> Telegram botimizda (<a href="https://t.me/Any3dCubic_bot" target="_blank" style="color: #00f0ff; font-weight: bold;">@Any3dCubic_bot</a>) shunchaki buyurtma raqamingizni (masalan: <b id="tip-order-digits" style="color: #00f0ff;">5452</b>) yuborsangiz, bot sizga to‘lov chekingiz, buyurtma kartangiz va tayyorlanish jarayonini bir zumda chiqarib beradi!
                </div>

                <div class="success-btn-group">
                  <button type="button" class="btn-success-tracker" id="btn-goto-tracker">
                    📦 Jonli Telemetriyani Ko‘rish (Saytda)
                  </button>
                  <a href="https://t.me/Any3dCubic_bot?start=live" target="_blank" class="btn-success-tg" id="btn-goto-bot">
                    🤖 Botda Live Ko‘rish (@Any3dCubic_bot)
                  </a>
                </div>
              </div>

              <!-- 3. Rad Etilgan Ekrani (Declined / Fake Check) -->
              <div class="order-declined-card" id="order-declined-screen" style="display: none;">
                <div class="declined-icon-anim">❌</div>
                <div class="declined-status-badge">🚫 BUYURTMA RAD ETILDI</div>
                <h2 class="declined-title">Buyurtmangiz atkaz qilindi</h2>
                <div class="declined-order-badge" id="declined-order-num">#T3D-UZ-8492</div>
                
                <div class="declined-reason-box">
                  <div class="reason-header">⚠️ To‘lov cheki tasdiqlanmadi</div>
                  <p class="reason-desc">
                    Yuborilgan to‘lov cheki soxta (fake) deb topildi yoki bank hisobimizga mablag‘ kelib tushmadi. Administratorlar ushbu buyurtmani qabul qilmadi.
                  </p>
                </div>

                <p class="declined-instruction">
                  Agar xatolik yuz bergan bo‘lsa, iltimos haqiqiy to‘lov skrinshotini qayta yuklang yoki bevosita ustaxona administratori bilan bog‘laning.
                </p>

                <div class="declined-btn-group">
                  <button type="button" class="btn-reupload-receipt" id="btn-reupload-receipt">
                    🔄 Qayta Haqiqiy Chek Yuklash
                  </button>
                  <a href="https://t.me/any3DCubicc" target="_blank" class="btn-contact-admin" id="btn-contact-admin">
                    💬 Bosh administrator bilan bog‘lanish (@any3DCubicc)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;const n=this.mount.querySelector("#three-viewport-mount");n&&this.studio&&this.studio.renderer&&(n.appendChild(this.studio.renderer.domElement),this.studio.onResize()),this.attachEventListeners()}attachEventListeners(){this.mount.querySelectorAll(".order-type-card").forEach(N=>{N.addEventListener("click",()=>{const W=N.getAttribute("data-type-id");this.selectOrderType(W)})}),this.mount.querySelectorAll(".preset-pill").forEach(N=>{N.addEventListener("click",()=>{this.state.presetIndex=parseInt(N.getAttribute("data-preset-idx"),10),this.render()})}),this.mount.querySelectorAll(".material-chip").forEach(N=>{N.addEventListener("click",()=>{const W=N.getAttribute("data-mat-id");this.state.materialId=W;const K=this.getCurrentMaterial();this.state.colorHex=K.colors[0].hex,this.studio&&(this.studio.setMaterialType(W),this.studio.setColor(this.state.colorHex)),this.render()})}),this.mount.querySelectorAll(".color-dot").forEach(N=>{N.addEventListener("click",()=>{const W=N.getAttribute("data-color");this.state.colorHex=W,this.studio&&this.studio.setColor(W),this.render()})}),this.mount.querySelectorAll("[data-infill]").forEach(N=>{N.addEventListener("click",()=>{this.state.infill=parseInt(N.getAttribute("data-infill"),10),this.render()})}),this.mount.querySelectorAll("[data-layer]").forEach(N=>{N.addEventListener("click",()=>{this.state.layerHeight=N.getAttribute("data-layer"),this.render()})}),this.mount.querySelectorAll('input[name="modeling"]').forEach(N=>{N.addEventListener("change",W=>{this.state.modelingService=W.target.value,this.render()})});const l=this.mount.querySelector("#btn-qty-minus"),c=this.mount.querySelector("#btn-qty-plus"),d=this.mount.querySelector("#qty-slider");l&&l.addEventListener("click",()=>{this.state.quantity>1&&(this.state.quantity--,this.render())}),c&&c.addEventListener("click",()=>{this.state.quantity++,this.render()}),d&&d.addEventListener("input",N=>{this.state.quantity=parseInt(N.target.value,10);const W=this.mount.querySelector(".qty-num");W&&(W.textContent=this.state.quantity),this.render()});const h=this.mount.querySelector("#student-toggle");h&&h.addEventListener("change",N=>{this.state.isStudent=N.target.checked,this.render()});const p=this.mount.querySelector("#rush-toggle");p&&p.addEventListener("change",N=>{this.state.turnaround=N.target.checked?"rush24":"standard",this.render()}),this.mount.querySelectorAll(".deliv-card-btn, .deliv-btn").forEach(N=>{N.addEventListener("click",()=>{this.state.delivery=N.getAttribute("data-delivery"),this.render()})});const g=this.mount.querySelector("#btn-toggle-wire");g&&g.addEventListener("click",()=>{this.state.wireframe=!this.state.wireframe,this.studio&&this.studio.toggleWireframe(this.state.wireframe),g.classList.toggle("active",this.state.wireframe)});const v=this.mount.querySelector("#btn-reset-cam");v&&v.addEventListener("click",()=>{this.studio&&this.studio.resetCamera()});const u=this.mount.querySelector("#stl-file-input");u&&u.addEventListener("change",N=>{const W=N.target.files[0];W&&this.studio&&(this.state.uploadedFileName=W.name,this.studio.loadSTLFile(W,()=>{alert(`✅ "${W.name}" fayli Bambu Lab stoliga muvaffaqiyatli yuklandi!`)}))});const f=this.mount.querySelector("#slicer-slider"),A=this.mount.querySelector("#slice-val-text");f&&f.addEventListener("input",N=>{const W=parseInt(N.target.value,10);this.state.slicePercent=W,A&&(A.textContent=`${W}%`),this.studio&&this.studio.updateSliceClipping(W)});const _=this.mount.querySelector("#btn-submit-order-flow"),S=this.mount.querySelector("#order-modal"),O=this.mount.querySelector("#modal-close");_&&S&&_.addEventListener("click",()=>{const N=Math.floor(1e3+Math.random()*9e3),W=this.mount.querySelector("#inv-order-num");W&&(W.textContent=`#T3D-UZ-${N}`),S.style.display="flex"}),O&&S&&O.addEventListener("click",()=>{S.style.display="none"});const P=this.mount.querySelector("#btn-print-inv");P&&P.addEventListener("click",()=>{window.print()});const C=this.mount.querySelector("#btn-copy-card");C&&C.addEventListener("click",()=>{var N;(N=navigator.clipboard)==null||N.writeText("8600490482197750"),C.textContent="✓ Nusxalandi!",setTimeout(()=>{C.textContent="📋 Karta Raqamini Nusxalash"},2e3)});const X=this.mount.querySelector("#btn-select-receipt"),b=this.mount.querySelector("#receipt-file-input"),M=this.mount.querySelector("#receipt-prompt-area"),F=this.mount.querySelector("#receipt-preview-area"),V=this.mount.querySelector("#receipt-img-preview"),at=this.mount.querySelector("#btn-clear-receipt");X&&b&&X.addEventListener("click",()=>b.click()),b&&b.addEventListener("change",N=>{const W=N.target.files[0];if(!W)return;const K=new FileReader;K.onload=it=>{const w=new Image;w.onload=()=>{const E=document.createElement("canvas");let $=w.width,k=w.height;const D=1e3;($>D||k>D)&&($>k?(k=Math.round(k*D/$),$=D):($=Math.round($*D/k),k=D)),E.width=$,E.height=k,E.getContext("2d").drawImage(w,0,0,$,k);const et=E.toDataURL("image/jpeg",.82);this.state.receiptImage=et,V&&(V.src=et),M&&(M.style.display="none"),F&&(F.style.display="flex")},w.src=it.target.result},K.readAsDataURL(W)}),at&&at.addEventListener("click",()=>{this.state.receiptImage=null,b&&(b.value=""),F&&(F.style.display="none"),M&&(M.style.display="block")});const U=this.mount.querySelector("#checkout-form");U&&U.addEventListener("submit",N=>{var gt,x,y,B,ot,lt;N.preventDefault();const W=(((gt=this.mount.querySelector("#cust-name"))==null?void 0:gt.value)||"").trim()||"Mijoz",K=(((x=this.mount.querySelector("#cust-phone"))==null?void 0:x.value)||"").trim();if(K.replace(/\D/g,"").length<9){alert("Iltimos, telefon raqamingizni to‘liq kiriting (masalan: +998 90 123 45 67).");return}const w=U.querySelector('button[type="submit"]');w&&(w.disabled=!0,w.textContent="⏳ Buyurtma yuborilmoqda...");const E=this.calculatePricing(),$=this.getCurrentOrderType(),k=((y=this.mount.querySelector("#inv-order-num"))==null?void 0:y.textContent)||"#T3D-UZ-8492";Rs({particleCount:120,spread:70,origin:{y:.6}});const D={orderId:k,customerName:W,customerPhone:K,customerTelegram:((B=this.mount.querySelector("#cust-tg"))==null?void 0:B.value)||"",deliveryAddress:((ot=this.mount.querySelector("#cust-addr"))==null?void 0:ot.value)||"",orderNotes:((lt=this.mount.querySelector("#cust-notes"))==null?void 0:lt.value)||"",orderTypeTitle:$.title,material:this.getCurrentMaterial().name,quantity:this.state.quantity,grandTotal:this.formatPrice(E.grandTotalUZS),turnaround:this.state.turnaround,deliveryMethod:this.state.delivery,deliveryMethodTitle:this.state.delivery==="bts"?"📦 Viloyatlarga BTS Pochta":this.state.delivery==="yandex"?"🛵 Toshkentda Yandex Dostavka":"🏬 Ustaxonadan Olib Ketish (Sergeli, Yuqori Darxon)",receiptImage:this.state.receiptImage,createdAt:new Date().toISOString()};(async()=>{var St;let nt=!1;try{const pt=await fetch(Ce("/api/submit-order"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});pt.ok&&(await pt.json()).ok&&(nt=!0)}catch{console.warn("Backend API vaqtincha javob bermadi, zaxira kanalga o‘tilmoqda...")}if(!nt){const pt="9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI",Mt="8929216064".split(",").map(Pt=>Pt.trim());{const Pt=(D.customerPhone||"").replace(/[^0-9+]/g,""),dt=`
🚨 <b>YANGI 3D BOSMA BUYURTMASI!</b> ${!!D.receiptImage?"🧾 (To‘lov cheki biriktirildi)":""}

🆔 <b>Buyurtma ID:</b> <code>${D.orderId}</code>
👤 <b>Mijoz:</b> ${D.customerName}
📞 <b>Telefon:</b> <a href="tel:${Pt}">${D.customerPhone}</a>
${D.customerTelegram?`💬 <b>Telegram:</b> ${D.customerTelegram}
`:""}${D.deliveryAddress?`📍 <b>Manzil:</b> ${D.deliveryAddress}
`:""}
📦 <b>Buyurtma turi:</b> ${D.orderTypeTitle}
🧵 <b>Material:</b> ${D.material}
🔢 <b>Soni:</b> ${D.quantity} dona
💰 <b>Jami to‘lov:</b> <b>${D.grandTotal}</b>
🚚 <b>Yetkazish:</b> ${D.deliveryMethodTitle||D.deliveryMethod}
⏱️ <b>Tayyorlanish:</b> ${D.turnaround==="rush24"?"⚡ 24 Soat Ekspress":"Standart 48 Soat"}
${D.orderNotes?`
📝 <b>Izoh:</b> <i>"${D.orderNotes}"</i>
`:""}
⚡ <i>Holat: 🟡 To‘lov cheki admin tasdig‘i kutilmoqda</i>
              `.trim(),Bt=D.customerTelegram?D.customerTelegram.startsWith("@")?D.customerTelegram:"@"+D.customerTelegram:"",zt={inline_keyboard:[[{text:"✅ Qabul qilish (Approve)",callback_data:`approve_${D.orderId}`},{text:"❌ Rad etish (Decline)",callback_data:`decline_${D.orderId}`}],[{text:"💬 Mijoz Telegrami",url:Bt?`https://t.me/${Bt.replace("@","")}`:`https://t.me/+${Pt.replace("+","")}`}]]};for(const Dt of Mt)try{let Rt=!1;if(D.receiptImage&&D.receiptImage.startsWith("data:image"))try{const Et=D.receiptImage.split(";base64,");if(Et.length===2){const L=Et[0].replace("data:","")||"image/jpeg",ft=atob(Et[1]);let Ct=ft.length;const At=new Uint8Array(Ct);for(;Ct--;)At[Ct]=ft.charCodeAt(Ct);const ut=new Blob([At],{type:L}),I=new FormData;I.append("chat_id",Dt),I.append("photo",ut,"receipt.jpg"),I.append("caption",dt.slice(0,1024)),I.append("parse_mode","HTML"),I.append("reply_markup",JSON.stringify(zt)),(await(await fetch(`https://api.telegram.org/bot${pt}/sendPhoto`,{method:"POST",body:I})).json()).ok&&(Rt=!0)}}catch(Et){console.warn("sendPhoto parsing error:",Et)}Rt||await fetch(`https://api.telegram.org/bot${pt}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:Dt,text:dt.slice(0,4096),parse_mode:"HTML",reply_markup:zt})})}catch(Rt){console.warn("Direct TG alert error:",Rt)}}}try{const pt=JSON.parse(localStorage.getItem("cached_admin_orders")||"[]");pt.unshift({...D,status:"pending"}),localStorage.setItem("cached_admin_orders",JSON.stringify(pt.slice(0,50)))}catch{}if((St=window.Telegram)!=null&&St.WebApp&&typeof window.Telegram.WebApp.sendData=="function")try{window.Telegram.WebApp.sendData(JSON.stringify({orderId:D.orderId,customerName:D.customerName,customerPhone:D.customerPhone,grandTotal:D.grandTotal}))}catch{}})();const et=this.mount.querySelector("#invoice-printable-area"),tt=this.mount.querySelector(".modal-header"),st=this.mount.querySelector("#order-verifying-screen"),mt=this.mount.querySelector("#order-success-screen"),ht=this.mount.querySelector("#order-declined-screen"),_t=this.mount.querySelector("#verifying-order-num"),R=this.mount.querySelector("#success-order-num"),ct=this.mount.querySelector("#declined-order-num");U&&(U.style.display="none"),et&&(et.style.display="none"),tt&&(tt.style.display="none"),_t&&(_t.textContent=k),st&&(st.style.display="block");const G=()=>{st&&(st.style.display="none"),ht&&(ht.style.display="none"),R&&(R.textContent=k),mt&&(mt.style.display="block");const nt=k.replace(/\D/g,""),St=this.mount.querySelector("#btn-goto-bot");St&&(St.href=`https://t.me/Any3dCubic_bot?start=${nt||"live"}`);const pt=this.mount.querySelector("#tip-order-digits");pt&&(pt.textContent=nt||"5452"),Rs({particleCount:140,spread:75,origin:{y:.6}});const Mt=this.mount.querySelector("#btn-goto-tracker");Mt&&(Mt.onclick=()=>{S&&(S.style.display="none"),this.onOrderSubmitted&&this.onOrderSubmitted(D)})},rt=()=>{st&&(st.style.display="none"),mt&&(mt.style.display="none"),ct&&(ct.textContent=k),ht&&(ht.style.display="block");const nt=this.mount.querySelector("#btn-reupload-receipt");nt&&(nt.onclick=()=>{ht&&(ht.style.display="none"),U&&(U.style.display="block"),et&&(et.style.display="block"),tt&&(tt.style.display="flex"),this.state.receiptImage=null,b&&(b.value=""),F&&(F.style.display="none"),M&&(M.style.display="block"),M==null||M.scrollIntoView({behavior:"smooth"})})};let Q=0;const xt=setInterval(async()=>{if(Q++,Q>180){clearInterval(xt);return}try{const St=await(await fetch(Ce(`/api/order-status?id=${encodeURIComponent(k)}`))).json();St.ok&&St.status&&(St.status==="approved"?(clearInterval(xt),G()):St.status==="declined"&&(clearInterval(xt),rt()))}catch{}},2e3)});const q=this.mount.querySelector("#btn-direct-telegram");q&&q.addEventListener("click",()=>{const N=this.calculatePricing(),W=this.getCurrentOrderType();encodeURIComponent(`Assalomu alaykum! 3D bosmaga buyurtma bermoqchiman:

• Buyurtma Turi: ${W.title}
• Material: ${this.getCurrentMaterial().name}
• Soni: ${this.state.quantity} dona
• Zichlik: ${this.state.infill}% | Qatlam: ${this.state.layerHeight}mm
• Taxminiy Summa: ${this.formatPrice(N.grandTotalUZS)}

Ustaxonangizda qachon tayyor bo‘ladi?`),window.open(`https://t.me/Any3dCubic_bot?start=order_${Date.now()}`,"_blank")})}}const Si={electricity:{tariffRatePerKwhUZS:1100},locations:[{id:"sergeli",name:"Sergeli tumani, Yuqori Darxon",uzName:"Sergeli tumani (Asosiy Ustaxona: 41.235141, 69.207236)",isRecommended:!0,tag:"Asosiy Ishlab Chiqarish Ustaxonasi",targetRentUZS:"2,500,000 – 3,500,000 so‘m / oy",spaceSize:"25 – 35 m²",pros:["Yuqori Darxon mahallasi, Navro‘z 6-tor ko‘chasi, 3-uy (Lokatsiya: 41.235141, 69.207236)","Toshkent bo‘ylab Yandex Go va BTS orqali buyurtmalarni tezkor yetkazib berish uchun qulay logistika tuguni","Sokin muhit, 3D printerlar va dastgohlar uchun to‘liq moslashtirilgan elektr quvvati","Mijozlar ustaxonadan bepul olib ketishlari uchun qulay marshrut"],cons:["Mijozlar kelishidan oldin lokatsiyani xaritadan ochib olishlari tavsiya etiladi"],verdict:"Barqaror ishlab chiqarish, qulay logistika va mustaqil ish joyining eng maqbul balansi."},{id:"mirzo-ulugbek",name:"Mirzo Ulug‘bek tumani",uzName:"Mirzo Ulug‘bek tumani (Talabalar markazi)",isRecommended:!1,tag:"IT va Universitetlar Qamrovi",targetRentUZS:"3,500,000 – 5,000,000 so‘m / oy",spaceSize:"20 – 30 m²",pros:["ToshTech, TATU, Inha va Turin universitetlariga yaqin","Sanoat 3D bosmachisi Additive Technology ham shu tumanda joylashgan","Muhandislik talabalarining bevosita oqimi"],cons:["Kvadrat metr uchun tijorat ijarasi ancha baland","Toshkent bo‘ylab kuryerlar harakati uchun tirbandlik yuqori"],verdict:"Universitetlar bilan rasmiy shartnomalar tuzilgach kengayish uchun ikkinchi bosqich."},{id:"yangihayot",name:"Yangihayot tumani",uzName:"Yangihayot tumani (Byudjet varianti)",isRecommended:!1,tag:"Minimal Doimiy Xarajat",targetRentUZS:"2,000,000 so‘m / oy (OLX dagi 20 m² ofis e’loni)",spaceSize:"20 m²",pros:["Eng past oylik ijara xarajati (oyiga 2 mln so‘m)","Barcha buyurtmalar 100% onlayn yetkazib berish orqali bo‘lsa, boshlang‘ich pulni tejaydi"],cons:["Xomashyo do‘konlari (3DShef) va talabalardan uzoq","Mijozlar uchun Yandex Go yetkazib berish narxi va vaqti oshadi"],verdict:"Boshlang‘ich grant yoki sarmoya 15 mln so‘mdan kam bo‘lsa zaxira varianti."}],swot:{strengths:[{title:"Kam Boshlang‘ich Sarmoya",desc:"Zamonaviy Bambu Lab printerlari hamyonbop: 15–20 mln so‘m bilan ish boshlash mumkin."},{title:"Yuqori Foyda Marjasi",desc:"Xomashyo 1 grammi 200 so‘m turadi; tayyor maxsus buyum 1,200–2,500 so‘m/grammga sotiladi."},{title:"Qolip Xarajatining Yo‘qligi",desc:"5,000 dollarlik metall qoliplarsiz 1 dona yoki 50 dona mahsulotni darhol chiqarish mumkin."},{title:"24–48 Soatlik Tezkorlik",desc:"Mijoz Xitoy yoki Turkiyadan 1 oy kutmasdan Toshkentda ertagayoq tayyor qismni oladi."}],weaknesses:[{title:"Qolipli Quyishga Nisbatan Sekinroq",desc:"FDM bosma 1 dona detal uchun 1 dan 4 soatgacha vaqt oladi, 200 tadan ortiq ommaviy seriyada cheklangan."},{title:"Texnik Xizmat va Kalibrlash",desc:"Aniq ±0.05 mm o‘lcham uchun soploni tozalash, tasmalar tarangligi va stol sathini doimiy sozlash kerak."},{title:"Qo‘lda Ishlov Berish",desc:"Qo‘llab-quvvatlovchi elementlarni (support) tozalash va yuzani silliqlash vaqt talab qiladi."},{title:"Qatlamlararo Bog‘liqlik",desc:"Z o‘qi bo‘yicha mustahkamlik bir oz pastroq, qism yo‘nalishini to‘g‘ri joylashtirish muhim."}],opportunities:[{title:"IT Park va ToshTech Rivoji",desc:"Toshkentda yangi texnologiya markazlari va universitet to‘garaklariga prototiplar zarur."},{title:"Ustaxonalar Bilan B2B Hamkorlik",desc:"Chilonzordagi maishiy texnika va avtoservislar bilan topilmaydigan shesternalarni yetkazish bo‘yicha shartnomalar."},{title:"Telegram va Instagram Orqali Sotuv",desc:"Shaxsiy buyurtmalar, anime figuralari va avtomobil klipslarini to‘g‘ridan-to‘g‘ri messenjerda sotish."},{title:"3D Modellashtirish Mahorat Darslari",desc:"Maktab o‘quvchilari va havaskorlar uchun dam olish kunlari 3D bosma to‘garaklari tashkil etish."}],threatsAndSolutions:[{threat:"Material Importi Kechikishi",detail:"Filament narxi va keltirilishi xalqaro yuk tashishga bog‘liq.",solution:"Chilonzordagi 3DShef orqali doimo 2 oylik xomashyo (PLA va PETG) zaxirasini saqlash."},{threat:"Elektr Energiyasidagi Kutilmagan Uzilishlar",detail:"Elektr o‘chishi 8 soatlik qimmat buyurtmani yaroqsiz qilib qo‘yishi mumkin.",solution:"1500VA quvvatli UPS batareyasi va Bambu Lab printerining elektr qaytganda davom ettirish funksiyasini qo‘llash."},{threat:"Yangi Havaskor Raqobatchilar",detail:"Har kim uyiga arzon printer sotib olib buyurtma olishga urinishi mumkin.",solution:"Biz professional CAD muhandislik chizmasi, kafolatlangan aniqlik va yuridik B2B shartnomalar bilan ajralib turamiz."}]},roadmap:[{month:"1-Oy",title:"Talabni Tekshirish va Sinov Buyurtmalari",icon:"🎯",actions:["Chilonzordagi 25 ta ustaxona va ToshTech talabalar to‘garaklari bilan yuzma-yuz suhbat o‘tkazish","Uzoq muddatli ijara shartnomasi tuzishdan oldin kamida 10 ta dastlabki pullik buyurtma olish","Tanlangan Chilonzor binosida elektr shartnomasini (1,100 so‘mlik tarif) tekshirish","Telegram buyurtma boti va Instagram portfoliolarini ishga tushirish"]},{month:"2-Oy",title:"Ustaxonani Jihozlash va Ishlab Chiqarish",icon:"🖨️",actions:["Mahalliy 3DShef dileridan 2 ta Bambu Lab A1 printeri va 15 kg filament sotib olish","1500VA UPS elektr himoya tizimi va maxsus tebranishga qarshi stellajlarni o‘rnatish","Buyurtmalarni 24 soat ichida topshirish sifat nazorati qoidalarini joriy qilish","Dastlabki 40 ta tijorat buyurtmasini 98% sifat ko‘rsatkichi bilan mijozlarga yetkazish"]},{month:"3-Oy",title:"Doimiy B2B Shartnomalar va Kengayish",icon:"📈",actions:["Toshkentdagi 5 ta yirik maishiy texnika servisi bilan doimiy ehtiyot qism yetkazish shartnomasini imzolash","ToshTech universiteti bilan diplom ishlari uchun 20% maxsus chegirma dasturini rasmiylashtirish","Zararsizlik chegarasiga erishish (oyiga 50+ buyurtma)","ABS/ASA qismlari uchun 3-printer (Bambu Lab P1S Yopiq Kamerali)ni xarid qilish"]}]};class Dm{constructor(t,e){this.mount=t,this.onSwitchToOrderPortal=e,this.simState={bambuA1Count:2,bambuP1SCount:1,filamentAllowanceUZS:22e5,pcAllowanceUZS:55e5,upsFurnitureUZS:18e5,dailyOperatingHours:8,printersActive:3,monthlyRentUZS:3e6,monthlyElectricityUZS:5e5,monthlyFilamentConsumablesUZS:2e6,monthlyMiscInternetUZS:5e5,monthlyMarketingUZS:8e5,avgContributionMarginPerOrderUZS:1e5,isSlideModalOpen:!1,currentSlideIndex:0},this.render()}formatPrice(t){return`${t.toLocaleString("ru-RU")} so‘m`}formatUSD(t){return`$${Math.round(t/Ps)}`}calculateCapex(){const t=this.simState.bambuA1Count*35e5,e=this.simState.bambuP1SCount*38e5,i=9e5,n=t+e+this.simState.filamentAllowanceUZS+i+this.simState.pcAllowanceUZS+this.simState.upsFurnitureUZS;return{a1Cost:t,p1sCost:e,toolsCost:i,totalCapexUZS:n}}calculateElectricity(){const t=Si.electricity.tariffRatePerKwhUZS,e=+(this.simState.printersActive*.15*this.simState.dailyOperatingHours).toFixed(2),i=+(e*26).toFixed(1),n=Math.round(i*t),s=n+35e4;return{dailyKwh:e,monthlyKwh:i,printerElecCostUZS:n,totalWorkshopElecUZS:s}}calculateBreakEven(){const t=this.simState.monthlyRentUZS+this.simState.monthlyElectricityUZS+this.simState.monthlyMiscInternetUZS+this.simState.monthlyMarketingUZS,e=Math.ceil(t/this.simState.avgContributionMarginPerOrderUZS),i=+(e/26).toFixed(1),n=e*12e4,s=Math.round(80*this.simState.avgContributionMarginPerOrderUZS-t);return{fixedExpensesUZS:t,breakEvenOrders:e,ordersPerDay:i,breakEvenRevenueUZS:n,targetProfitUZS:s}}render(){const t=this.calculateCapex(),e=this.calculateElectricity(),i=this.calculateBreakEven();this.mount.innerHTML=`
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
              <span class="ticker-val">${i.breakEvenOrders} ta Buyurtma</span>
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
            ${Si.locations.map(n=>`
              <div class="district-card ${n.isRecommended?"recommended":""}">
                <div class="district-top">
                  <div>
                    <h3 class="district-name">${n.name}</h3>
                    <div class="district-uz">${n.uzName}</div>
                  </div>
                  <span class="district-tag ${n.isRecommended?"tag-green":"tag-gray"}">${n.tag}</span>
                </div>
                <div class="district-rent">
                  Mo‘ljaldagi Ijara: <strong>${n.targetRentUZS}</strong> (${n.spaceSize})
                </div>
                <div class="district-pros-list">
                  <strong>Strategik Afzalliklari:</strong>
                  <ul>
                    ${n.pros.map(s=>`<li>${s}</li>`).join("")}
                  </ul>
                </div>
                <div class="district-verdict">
                  <strong>Xulosa:</strong> ${n.verdict}
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
                  <label>Ustaxona Ijarasi (Sergeli/Toshkent):</label>
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
                  <code>${this.formatPrice(i.fixedExpensesUZS)} ÷ ${this.formatPrice(this.simState.avgContributionMarginPerOrderUZS)} = <strong>${i.breakEvenOrders} ta buyurtma / oy</strong></code>
                </div>
              </div>

              <div class="be-metrics-row">
                <div class="be-metric-card primary">
                  <span class="bm-title">Oylik Zararsizlik Marrasi</span>
                  <div class="bm-num">${i.breakEvenOrders} ta buyurtma</div>
                  <span class="bm-sub">~${i.ordersPerDay} ta buyurtma kuniga</span>
                </div>
                <div class="be-metric-card">
                  <span class="bm-title">Jami Oylik Doimiy Xarajat</span>
                  <div class="bm-num">${this.formatPrice(i.fixedExpensesUZS)}</div>
                  <span class="bm-sub">Ijara + Elektr + Net + Mkt</span>
                </div>
                <div class="be-metric-card green">
                  <span class="bm-title">Oyiga 80 Ta Buyurtmada Sof Foyda</span>
                  <div class="bm-num">+${this.formatPrice(i.targetProfitUZS)}</div>
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
                ${Si.swot.strengths.map(n=>`
                  <li>
                    <strong>${n.title}:</strong> ${n.desc}
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="swot-quadrant q-weaknesses">
              <div class="swot-badge red">Salbiy & Ichki</div>
              <h3 class="swot-quad-title">Zaif Tomonlar (W)</h3>
              <ul class="swot-item-list">
                ${Si.swot.weaknesses.map(n=>`
                  <li>
                    <strong>${n.title}:</strong> ${n.desc}
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="swot-quadrant q-opportunities">
              <div class="swot-badge blue">Ijobiy & Tashqi</div>
              <h3 class="swot-quad-title">Imkoniyatlar (O) — Toshkentda O‘sish</h3>
              <ul class="swot-item-list">
                ${Si.swot.opportunities.map(n=>`
                  <li>
                    <strong>${n.title}:</strong> ${n.desc}
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="swot-quadrant q-threats">
              <div class="swot-badge orange">Salbiy & Tashqi</div>
              <h3 class="swot-quad-title">Xavflar (T) va Amaliy Yechimlar</h3>
              <div class="threat-solution-list">
                ${Si.swot.threatsAndSolutions.map(n=>`
                  <div class="threat-box">
                    <div class="threat-head">⚠️ ${n.threat}</div>
                    <div class="threat-detail">${n.detail}</div>
                    <div class="threat-solution">
                      <strong>Yechim:</strong> ${n.solution}
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
            ${Si.roadmap.map(n=>`
              <div class="roadmap-card">
                <div class="rm-header">
                  <span class="rm-icon">${n.icon}</span>
                  <div>
                    <span class="rm-month">${n.month}</span>
                    <h4 class="rm-title">${n.title}</h4>
                  </div>
                </div>
                <ul class="rm-actions">
                  ${n.actions.map(s=>`<li>${s}</li>`).join("")}
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
    `,this.attachEventListeners(),this.simState.isSlideModalOpen&&this.renderSlide(this.simState.currentSlideIndex)}attachEventListeners(){const t=this.mount.querySelector("#slider-a1-count");t&&t.addEventListener("input",u=>{this.simState.bambuA1Count=parseInt(u.target.value,10),this.render()});const e=this.mount.querySelector("#slider-p1s-count");e&&e.addEventListener("input",u=>{this.simState.bambuP1SCount=parseInt(u.target.value,10),this.render()});const i=this.mount.querySelector("#slider-filament-stock");i&&i.addEventListener("input",u=>{this.simState.filamentAllowanceUZS=parseInt(u.target.value,10),this.render()});const n=this.mount.querySelector("#slider-pc-cost");n&&n.addEventListener("input",u=>{this.simState.pcAllowanceUZS=parseInt(u.target.value,10),this.render()});const s=this.mount.querySelector("#slider-ups-cost");s&&s.addEventListener("input",u=>{this.simState.upsFurnitureUZS=parseInt(u.target.value,10),this.render()});const r=this.mount.querySelector("#slider-elec-hours");r&&r.addEventListener("input",u=>{this.simState.dailyOperatingHours=parseInt(u.target.value,10),this.render()});const o=this.mount.querySelector("#slider-be-rent");o&&o.addEventListener("input",u=>{this.simState.monthlyRentUZS=parseInt(u.target.value,10),this.render()});const l=this.mount.querySelector("#slider-be-margin");l&&l.addEventListener("input",u=>{this.simState.avgContributionMarginPerOrderUZS=parseInt(u.target.value,10),this.render()});const c=this.mount.querySelector("#slider-be-elec");c&&c.addEventListener("input",u=>{this.simState.monthlyElectricityUZS=parseInt(u.target.value,10),this.render()});const d=this.mount.querySelector("#slider-be-mkt");d&&d.addEventListener("input",u=>{this.simState.monthlyMarketingUZS=parseInt(u.target.value,10),this.render()});const h=this.mount.querySelector("#btn-switch-portal");h&&this.onSwitchToOrderPortal&&h.addEventListener("click",()=>{this.onSwitchToOrderPortal()});const p=this.mount.querySelector("#btn-launch-slides");p&&p.addEventListener("click",()=>{this.simState.isSlideModalOpen=!0,this.simState.currentSlideIndex=0,this.render()});const m=this.mount.querySelector("#btn-slide-close");m&&m.addEventListener("click",()=>{this.simState.isSlideModalOpen=!1,this.render()});const g=this.mount.querySelector("#btn-slide-prev"),v=this.mount.querySelector("#btn-slide-next");g&&g.addEventListener("click",()=>{this.simState.currentSlideIndex>0&&(this.simState.currentSlideIndex--,this.renderSlide(this.simState.currentSlideIndex))}),v&&v.addEventListener("click",()=>{this.simState.currentSlideIndex<9&&(this.simState.currentSlideIndex++,this.renderSlide(this.simState.currentSlideIndex))}),window.onkeydown=u=>{this.simState.isSlideModalOpen&&(u.key==="ArrowRight"||u.key===" "?this.simState.currentSlideIndex<9&&(this.simState.currentSlideIndex++,this.renderSlide(this.simState.currentSlideIndex)):u.key==="ArrowLeft"?this.simState.currentSlideIndex>0&&(this.simState.currentSlideIndex--,this.renderSlide(this.simState.currentSlideIndex)):u.key==="Escape"&&(this.simState.isSlideModalOpen=!1,this.render()))}}renderSlide(t){const e=this.mount.querySelector("#slide-stage"),i=this.mount.querySelector("#slide-num-text");if(i&&(i.textContent=`${t+1} dan 10`),!e)return;const n=[`
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
      `];e.innerHTML=n[t]}}class Um{constructor(t,e=null,i){this.mount=typeof t=="string"?document.querySelector(t):t,this.currentOrder=e||{orderId:"#T3D-UZ-8492",customerName:"Muhammad Rizo",customerPhone:"+998 90 123 45 67",orderTypeTitle:"Funktsional va Ehtiyot Qismlar (Oshxona Kombayni Shesternasi)",material:"PETG Mustahkam (Signal Zarg‘aldoq)",quantity:1,grandTotal:"75 000 so‘m",deliveryMethod:"yandex",deliveryMethodTitle:"🛵 Toshkentda Yandex Dostavka",turnaround:"standard",createdAt:new Date().toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})},this.onBackToConfigurator=i,this.chatMessages=[],this.chatPoller=null,this.init()}async init(){this.render(),await this.fetchMessages(),this.startChatPoller()}startChatPoller(){this.chatPoller&&clearInterval(this.chatPoller),this.chatPoller=setInterval(async()=>{await this.fetchMessages(!0)},2500)}destroy(){this.chatPoller&&clearInterval(this.chatPoller)}setOrder(t){this.currentOrder=t,this.render(),this.fetchMessages()}async fetchMessages(t=!1){const e=this.currentOrder.orderId;if(e)try{const n=await(await fetch(Ce(`/api/chat-messages?orderId=${encodeURIComponent(e)}`))).json();if(n.ok&&Array.isArray(n.messages))if(this.chatMessages=n.messages,!t)this.updateChatUI();else{const s=this.mount.querySelector("#cust-chat-messages-body");s&&n.messages.length>0&&(s.innerHTML=this.renderChatMessagesHTML(),s.scrollTop=s.scrollHeight)}}catch{try{const n=JSON.parse(localStorage.getItem(`chat_${e}`)||"[]");n.length>0&&this.chatMessages.length===0&&(this.chatMessages=n,this.updateChatUI())}catch{}}}updateChatUI(){const t=this.mount.querySelector("#cust-chat-messages-body");t&&(t.innerHTML=this.renderChatMessagesHTML(),t.scrollTop=t.scrollHeight)}renderChatMessagesHTML(){return this.chatMessages.length===0?`
        <div class="cchat-empty-hint">
          <span class="hint-icon">💬</span>
          <p>Hozircha xabarlar yo‘q. Ustaxona adminlariga buyurtma bo‘yicha har qanday savolingizni yozishingiz mumkin.</p>
        </div>
      `:this.chatMessages.map(t=>`
      <div class="cchat-bubble ${t.sender==="customer"?"cust":"admin"}">
        <div class="cchat-meta">
          <strong>${t.sender==="customer"?"👤 Siz":"👨‍💼 Any3D Ustaxona Admini"}</strong>
          <span>${new Date(t.timestamp).toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})}</span>
        </div>
        <div class="cchat-content">${t.text}</div>
      </div>
    `).join("")}render(){const t=this.currentOrder.deliveryMethodTitle||(this.currentOrder.deliveryMethod==="bts"?"📦 Viloyatlarga BTS Pochta (To‘lov qabulda)":this.currentOrder.deliveryMethod==="yandex"?"🛵 Toshkentda Yandex Dostavka (Kuryerga to‘lanadi)":"🏬 Ustaxonadan Bepul Olib Ketish");this.mount.innerHTML=`
      <div class="tracker-wrapper">
        <div class="tracker-header">
          <button type="button" class="btn-back-link" id="btn-tracker-back">
            ← Buyurtma Portali va Studiyaga Qaytish
          </button>
          <div class="tracker-title-row">
            <div>
              <div class="step-tag"><span class="step-num">Jonli Kuzatuv</span> Anycubic & Bambu Telemetriyasi</div>
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
            <span class="tss-lbl">Yetkazish:</span>
            <strong class="tss-val deliv-highlight">${t}</strong>
          </div>
          <div class="tss-item">
            <span class="tss-lbl">Ustaxona:</span>
            <strong class="tss-val">Any3D Ustaxonasi</strong>
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
                <p>${this.currentOrder.receiptImage?"To‘lov chekingiz administratorlarimiz tomonidan tekshirilib tasdiqlandi.":"Raqamli model tekshirildi va bosmaga yo‘naltirildi."}</p>
                <span class="t-time">Bajarildi: Bugun</span>
              </div>
            </div>

            <div class="t-step completed">
              <div class="t-circle">✓</div>
              <div class="t-content">
                <h4>2. Anycubic / Bambu Printeri Uchun G-kod Tayyorlandi</h4>
                <p>Slicer dasturida 0.20mm qatlam balandligi va 60% giroid to‘ldirish hisoblandi.</p>
                <span class="t-time">Navbatdagi o‘rni: #1</span>
              </div>
            </div>

            <div class="t-step current">
              <div class="t-circle pulse">⚡</div>
              <div class="t-content">
                <h4>3. Chop Etish Jarayoni Ketmoqda (Any3D Ustaxonasi)</h4>
                <p>Anycubic Kobra 2 Pro faol. 320 qatlamdan 214-qatlam bosilmoqda. Sirt sifati a’lo.</p>
                
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
                <h4>5. ${this.currentOrder.deliveryMethod==="bts"?"BTS Pochta Orqali Yuboriladi":this.currentOrder.deliveryMethod==="yandex"?"Yandex Go Kuryeriga Topshiriladi":"Ustaxonadan Olib Ketish (Sergeli, Yuqori Darxon)"}</h4>
                <p>${this.currentOrder.deliveryMethod==="bts"?"Viloyat pochtasiga topshirilib sizga kuzatuv trek-kodi beriladi.":this.currentOrder.deliveryMethod==="yandex"?"Yandex Go kuryeri orqali eshigingizgacha yetkaziladi (to‘lov kuryerga).":"Himoya qutisiga qadoqlanib tayyor holatda topshiriladi."}</p>
                <span class="t-time">Bugun 18:30 gacha kutilmoqda</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 💬 BUYURTMA BO'YICHA ADMIN BILAN JONLI CHAT -->
        <div class="customer-order-chat-card">
          <div class="cchat-header">
            <div class="cchat-title-group">
              <span class="cchat-icon">💬</span>
              <div>
                <h4>Ustaxona Administratorlari Bilan Jonli Chat</h4>
                <p>Buyurtma: <strong>${this.currentOrder.orderId}</strong> bo‘yicha savollar va tuzatishlarni bevosita yozing</p>
              </div>
            </div>
            <span class="cchat-live-badge"><span class="cchat-dot"></span> Admin Online</span>
          </div>

          <div class="cchat-messages-container" id="cust-chat-messages-body">
            ${this.renderChatMessagesHTML()}
          </div>

          <!-- Tezkor Savollar Shablonlari -->
          <div class="cchat-suggestions">
            <button type="button" class="csug-btn" data-sug="Qachon tayyor bo‘ladi?">⏱️ Qachon tayyor bo‘ladi?</button>
            <button type="button" class="csug-btn" data-sug="Detal rangini qora qilsak bo‘ladimi?">🎨 Rangini o‘zgartirish</button>
            <button type="button" class="csug-btn" data-sug="Yetkazib berish bo‘yicha manzilimni aniqlashtirmoqchiman">🛵 Yetkazish bo‘yicha</button>
          </div>

          <!-- Xabar Yuborish Maydoni -->
          <div class="cchat-input-bar">
            <input type="text" id="cust-chat-input" placeholder="Adminlarga xabar yozing (masalan: o'lcham, rang, yetkazish)...">
            <button type="button" class="btn-send-cust-msg" id="btn-send-cust-msg">Yuborish 🚀</button>
          </div>
        </div>

        <!-- 📍 LOKATSIYA VA XARITA KARTASI -->
        <div class="workshop-location-card">
          <div class="wlc-left">
            <div class="wlc-badge">📍 Jismoniy Ustaxona Lokatsiyasi</div>
            <h4 class="wlc-title">Any3D Bosma & Prototip Ustaxonasi</h4>
            <p class="wlc-address">🏬 Toshkent shahri, Sergeli tumani, Yuqori Darxon mahallasi, Navro‘z 6-tor ko‘chasi, 3-uy</p>
            <p class="wlc-landmarks">🎯 Mo‘ljal: Navro‘z 6-tor ko‘chasi, Yuqori Darxon (Lokatsiya: 41.235141, 69.207236)</p>
            <p class="wlc-hours">⏱️ Ish vaqti: Dushanba – Shanba, 09:00 – 20:00</p>
            <p class="wlc-phone">💬 Bog‘lanish: <a href="https://t.me/any3DCubicc" target="_blank">@any3DCubicc (Bosh Admin)</a></p>
          </div>

          <div class="wlc-right">
            <span class="wlc-hint">Telefoningizdagi xaritada marshrut chizish:</span>
            <div class="wlc-btn-group">
              <a href="https://www.google.com/maps/dir/?api=1&destination=41.235141,69.207236" target="_blank" class="wlc-map-btn google">
                🗺️ Google Maps'da Ochish
              </a>
              <a href="https://yandex.uz/maps/?rtext=~41.235141,69.207236&rtt=auto" target="_blank" class="wlc-map-btn yandex">
                📍 Yandex Maps'da Ochish
              </a>
              <a href="https://maps.apple.com/?daddr=41.235141,69.207236" target="_blank" class="wlc-map-btn apple">
                🍏 Apple Maps (iPhone)
              </a>
              <a href="https://t.me/Any3dCubic_bot" target="_blank" class="wlc-map-btn tg">
                ✈️ Telegram Bot (@Any3dCubic_bot)
              </a>
            </div>
          </div>
        </div>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){const t=this.mount.querySelector("#btn-tracker-back");t&&this.onBackToConfigurator&&t.addEventListener("click",()=>{this.onBackToConfigurator()});const e=this.mount.querySelector("#btn-lookup"),i=this.mount.querySelector("#track-id-input");e&&i&&e.addEventListener("click",async()=>{const l=i.value.trim();if(l&&!e.disabled){e.disabled=!0;const c=e.textContent;e.textContent="⏳ Tekshirilmoqda...";try{const h=await(await fetch(Ce(`/api/order-status?id=${encodeURIComponent(l)}`))).json();if(h.ok&&h.order)this.currentOrder=h.order;else{const p=JSON.parse(localStorage.getItem("cached_admin_orders")||"[]"),m=l.replace(/\D/g,""),g=p.find(v=>{if(!v.orderId)return!1;const u=v.orderId.replace(/\D/g,"");return v.orderId.toLowerCase()===l.toLowerCase()||m&&u.includes(m)});g?this.currentOrder=g:this.currentOrder.orderId=l.startsWith("#")?l:`#T3D-UZ-${l}`}}catch{this.currentOrder.orderId=l.startsWith("#")?l:`#T3D-UZ-${l}`}finally{e.disabled=!1,e.textContent=c}this.render(),this.fetchMessages()}});const n=this.mount.querySelector("#cust-chat-input"),s=this.mount.querySelector("#btn-send-cust-msg"),r=async()=>{var d;const l=(d=n==null?void 0:n.value)==null?void 0:d.trim();if(!l||s&&s.disabled)return;s&&(s.disabled=!0),n.value="";const c={orderId:this.currentOrder.orderId,sender:"customer",senderName:this.currentOrder.customerName||"Mijoz",text:l};try{if(!(await fetch(Ce("/api/send-message"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).ok)throw new Error("API unavailable");await this.fetchMessages()}catch{const p="9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI",m="8929216064".split(",").map(g=>g.trim());{const g=`
💬 <b>MIJOZDAN JONLI CHAT XABARI (Zaxira Kanal)!</b>

🆔 <b>Buyurtma:</b> <code>${this.currentOrder.orderId}</code>
👤 <b>Mijoz:</b> ${this.currentOrder.customerName||"Mijoz"}
✉️ <b>Xabar:</b> "${l}"
          `.trim();for(const v of m)fetch(`https://api.telegram.org/bot${p}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:v,text:g,parse_mode:"HTML"})}).catch(()=>{})}this.chatMessages.push({...c,id:"local_"+Date.now(),timestamp:new Date().toISOString()}),localStorage.setItem(`chat_${this.currentOrder.orderId}`,JSON.stringify(this.chatMessages)),this.updateChatUI()}finally{s&&(s.disabled=!1)}};s&&s.addEventListener("click",r),n&&n.addEventListener("keypress",l=>{l.key==="Enter"&&r()}),this.mount.querySelectorAll(".csug-btn").forEach(l=>{l.addEventListener("click",()=>{n&&(n.value=l.getAttribute("data-sug"),n.focus())})})}}class Im{constructor(t,e={}){this.mount=typeof t=="string"?document.querySelector(t):t,this.orders=[],this.filterStatus="all",this.searchQuery="",this.activeChatOrder=null,this.chatMessages=[],this.chatPoller=null,this.onViewChange=e.onViewChange||null,this.init()}async init(){await this.fetchOrders(),this.render(),this.startOrderPoller()}startOrderPoller(){this.orderPoller=setInterval(async()=>{await this.fetchOrders(!0)},4e3)}destroy(){this.orderPoller&&clearInterval(this.orderPoller),this.chatPoller&&clearInterval(this.chatPoller)}async fetchOrders(t=!1){try{const i=await(await fetch(Ce("/api/admin-orders"))).json();i.ok&&Array.isArray(i.orders)&&(this.orders=i.orders,t||this.render())}catch{try{const i=JSON.parse(localStorage.getItem("cached_admin_orders")||"[]");i.length>0&&this.orders.length===0&&(this.orders=i,t||this.render())}catch{}}}getFilteredOrders(){return this.orders.filter(t=>{if(this.filterStatus!=="all"&&(t.status||"pending")!==this.filterStatus)return!1;if(this.searchQuery.trim()){const e=this.searchQuery.toLowerCase();if(!`${t.orderId||""} ${t.customerName||""} ${t.customerPhone||""} ${t.orderTypeTitle||""}`.toLowerCase().includes(e))return!1}return!0})}render(){const t=this.orders.length,e=this.orders.filter(r=>!r.status||r.status==="pending").length,i=this.orders.filter(r=>r.status==="approved").length,n=this.orders.filter(r=>r.status==="declined").length,s=this.getFilteredOrders();this.mount.innerHTML=`
      <div class="admin-crm-wrapper">
        <!-- CRM Bosh Sarlavhasi -->
        <div class="crm-top-bar">
          <div class="crm-title-area">
            <div class="crm-badge">👑 YAGONA BOSH ADMINISTRATOR: @any3DCubicc</div>
            <h2 class="crm-main-title">Mijozlar Profili va Buyurtmalar Boshqaruvi</h2>
            <p class="crm-sub-text">
              Faqat <b>@any3DCubicc</b> uchun maxsus boshqaruv portali. Barcha buyurtmalarni tasdiqlash (Approve) va rad etish (Decline) vakolati faqat sizda.
            </p>
          </div>

          <div class="crm-quick-actions">
            <button type="button" class="btn-crm-shop" id="btn-crm-shop" style="background: rgba(0, 210, 106, 0.15); border: 1px solid rgba(0, 210, 106, 0.4); color: #00d26a; padding: 0.5rem 0.9rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem; font-weight: 700;">
              💎 Creality Modellar & Narxlar
            </button>
            <button type="button" class="btn-crm-refresh" id="btn-crm-refresh">🔄 Yangilash</button>
            <a href="https://t.me/Any3dCubic_bot" target="_blank" class="btn-crm-tg">
              🤖 Telegram Bot (@Any3dCubic_bot)
            </a>
            <button type="button" class="btn-crm-logout" id="btn-crm-logout" title="Admin paneldan chiqish" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; padding: 0.5rem 0.9rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem; font-weight: 700;">
              🔒 Chiqish
            </button>
          </div>
        </div>

        <!-- Statistika Ko'rsatkichlari -->
        <div class="crm-stats-grid">
          <div class="crm-stat-card total">
            <div class="stat-icon">📦</div>
            <div class="stat-meta">
              <span class="stat-num">${t}</span>
              <span class="stat-lbl">Jami Buyurtmalar</span>
            </div>
          </div>
          <div class="crm-stat-card pending">
            <div class="stat-icon">⏳</div>
            <div class="stat-meta">
              <span class="stat-num">${e}</span>
              <span class="stat-lbl">Admin Tasdig‘i Kutilmoqda</span>
            </div>
          </div>
          <div class="crm-stat-card approved">
            <div class="stat-icon">✅</div>
            <div class="stat-meta">
              <span class="stat-num">${i}</span>
              <span class="stat-lbl">Tasdiqlangan & Chop Etilmoqda</span>
            </div>
          </div>
          <div class="crm-stat-card declined">
            <div class="stat-icon">❌</div>
            <div class="stat-meta">
              <span class="stat-num">${n}</span>
              <span class="stat-lbl">Rad Etilgan (Fake cheklar)</span>
            </div>
          </div>
        </div>

        <!-- Filterlar va Qidiruv Qatori -->
        <div class="crm-filter-bar">
          <div class="crm-filter-pills">
            <button type="button" class="crm-pill ${this.filterStatus==="all"?"active":""}" data-filter="all">
              Barchasi (${t})
            </button>
            <button type="button" class="crm-pill pill-pend ${this.filterStatus==="pending"?"active":""}" data-filter="pending">
              🟡 Kutilmoqda (${e})
            </button>
            <button type="button" class="crm-pill pill-appr ${this.filterStatus==="approved"?"active":""}" data-filter="approved">
              🟢 Tasdiqlanganlar (${i})
            </button>
            <button type="button" class="crm-pill pill-decl ${this.filterStatus==="declined"?"active":""}" data-filter="declined">
              🔴 Rad Etilganlar (${n})
            </button>
          </div>

          <div class="crm-search-wrapper">
            <input type="text" id="crm-search-input" placeholder="Mijoz ismi, tel yoki buyurtma #..." value="${this.searchQuery}">
          </div>
        </div>

        <!-- Mijozlar Kartalari Ro'yxati -->
        <div class="crm-orders-grid">
          ${s.length===0?`
            <div class="crm-empty-state">
              <div class="empty-icon">📭</div>
              <h3>Hozircha buyurtmalar topilmadi</h3>
              <p>Mijozlar buyurtma berganda bu yerda ularning to‘liq profili va cheklari ko‘rinadi.</p>
            </div>
          `:s.map(r=>this.renderOrderCard(r)).join("")}
        </div>

        <!-- Admin Jonli Chat Paneli (Drawer / Modal) -->
        <div class="admin-chat-modal-backdrop" id="admin-chat-modal" style="${this.activeChatOrder?"display: flex;":"display: none;"}">
          ${this.activeChatOrder?this.renderChatDrawer():""}
        </div>
      </div>
    `,this.attachEventListeners()}renderOrderCard(t){const e=t.status||"pending",i=(t.customerPhone||"").replace(/[^0-9+]/g,""),n=!!t.receiptImage,s=t.deliveryMethodTitle||(t.deliveryMethod==="bts"?"📦 Viloyat (BTS Pochta)":t.deliveryMethod==="yandex"?"🛵 Toshkent (Yandex Go)":"🏬 Ustaxonadan Olib Ketish");return`
      <div class="crm-order-card status-${e}" data-order-id="${t.orderId}">
        <div class="order-card-header">
          <div class="order-id-badge">
            <strong>${t.orderId||"#T3D"}</strong>
            <span class="order-time">${t.createdAt?new Date(t.createdAt).toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"}):"Yangi"}</span>
          </div>

          <div class="order-status-tag tag-${e}">
            ${e==="approved"?"🟢 Tasdiqlangan":e==="declined"?"🔴 Rad Etilgan":"🟡 Kutilmoqda"}
          </div>
        </div>

        <div class="customer-profile-block">
          <div class="cust-avatar">👤</div>
          <div class="cust-info">
            <h4 class="cust-name">${t.customerName||"Mijoz"}</h4>
            <div class="cust-contact-links">
              <a href="tel:${i}" class="cust-phone-link">📞 ${t.customerPhone||"Tel kiritilmagan"}</a>
              ${t.customerTelegram?`<a href="https://t.me/${t.customerTelegram.replace("@","")}" target="_blank" class="cust-tg-link">💬 ${t.customerTelegram}</a>`:""}
            </div>
          </div>
        </div>

        <div class="order-specs-list">
          <div class="spec-row">
            <span class="sk">Mahsulot:</span>
            <strong class="sv">${t.orderTypeTitle||"3D Detal"}</strong>
          </div>
          <div class="spec-row">
            <span class="sk">Material & Soni:</span>
            <span class="sv">${t.material||"PETG"} • ${t.quantity||1} dona</span>
          </div>
          <div class="spec-row">
            <span class="sk">Umumiy Summa:</span>
            <strong class="sv price">${t.grandTotal||"0"}</strong>
          </div>
          <div class="spec-row">
            <span class="sk">Yetkazish Usuli:</span>
            <span class="sv deliv-val">${s}</span>
          </div>
          ${t.deliveryAddress?`
            <div class="spec-row">
              <span class="sk">Manzili:</span>
              <span class="sv address-val">📍 ${t.deliveryAddress}</span>
            </div>
          `:""}
          ${t.orderNotes?`
            <div class="spec-row notes">
              <span class="sk">Izoh:</span>
              <span class="sv">${t.orderNotes}</span>
            </div>
          `:""}
        </div>

        <!-- To'lov Cheki Skrinshoti -->
        <div class="receipt-admin-box">
          <div class="receipt-header">
            <span>To‘lov Kvitansiyasi:</span>
            ${n?'<span class="receipt-ok-tag">✅ Rasm mavjud</span>':'<span class="receipt-no-tag">⚠️ Rasm yo‘q</span>'}
          </div>
          ${n?`
            <div class="receipt-thumb-wrapper" data-thumb-order="${t.orderId}">
              <img src="${t.receiptImage}" alt="Chek" class="receipt-thumb-img">
              <span class="thumb-zoom-hint">🔍 Kattalashtirish</span>
            </div>
          `:`
            <div class="no-receipt-notice">Kuryerga / Qabul qilinganda to‘lash belgilangan</div>
          `}
        </div>

        <!-- Boshqaruv Tugmalari -->
        <div class="crm-card-actions">
          <button type="button" class="btn-crm-chat" data-chat-id="${t.orderId}">
            💬 Mijoz Bilan Chat
          </button>
          
          ${e==="pending"?`
            <div class="review-btn-pair">
              <button type="button" class="btn-crm-approve" data-approve-id="${t.orderId}">
                ✅ Tasdiqlash
              </button>
              <button type="button" class="btn-crm-decline" data-decline-id="${t.orderId}">
                ❌ Rad Etish
              </button>
            </div>
          `:e==="approved"?`
            <button type="button" class="btn-crm-revert" data-decline-id="${t.orderId}">
              ❌ Bekor Qilish (Atkaz)
            </button>
          `:`
            <button type="button" class="btn-crm-revert" data-approve-id="${t.orderId}">
              ✅ Qayta Tasdiqlash
            </button>
          `}
        </div>
      </div>
    `}renderChatDrawer(){const t=this.activeChatOrder;return t?`
      <div class="admin-chat-modal-box">
        <div class="adchat-header">
          <div class="adchat-title-group">
            <span class="adchat-avatar">👤</span>
            <div>
              <h3>${t.customerName||"Mijoz"} bilan Jonli Muloqot</h3>
              <p>Buyurtma ID: <strong>${t.orderId}</strong> • Tel: <a href="tel:${t.customerPhone}">${t.customerPhone}</a></p>
            </div>
          </div>
          <button type="button" class="adchat-close" id="btn-close-adchat">✕</button>
        </div>

        <div class="adchat-messages-body" id="adchat-messages-body">
          ${this.chatMessages.length===0?`
            <div class="adchat-empty">
              <span>💬</span>
              <p>Hozircha xabarlar yo‘q. Mijozga birinchi bo‘lib xabar yo‘llashingiz mumkin.</p>
            </div>
          `:this.chatMessages.map(e=>`
            <div class="chat-bubble ${e.sender==="admin"?"admin":"customer"}">
              <div class="bubble-sender">${e.sender==="admin"?"👨‍💼 Siz (Admin)":"👤 "+(e.senderName||"Mijoz")}</div>
              <div class="bubble-text">${e.text}</div>
              <div class="bubble-time">${new Date(e.timestamp).toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})}</div>
            </div>
          `).join("")}
        </div>

        <!-- Tezkor Javob Shablonlari -->
        <div class="adchat-quick-templates">
          <button type="button" class="ad-tpl-btn" data-tpl="Assalomu alaykum! Buyurtmangiz qabul qilindi, 3D chop etish boshlandi.">✅ Qabul qilindi</button>
          <button type="button" class="ad-tpl-btn" data-tpl="Mahsulotingiz tayyor bo‘ldi! Yandex kuryer orqali jo‘natamizmi?">🛵 Tayyor bo‘ldi</button>
          <button type="button" class="ad-tpl-btn" data-tpl="To‘lov chekingiz tasdiqlanmadi, iltimos haqiqiy chekni qayta yuboring.">⚠️ Chek xatosi</button>
        </div>

        <!-- Xabar Yozish Maydoni -->
        <div class="adchat-input-bar">
          <input type="text" id="adchat-input-field" placeholder="Mijozga xabar yozing...">
          <button type="button" class="btn-adchat-send" id="btn-adchat-send">Yuborish 🚀</button>
        </div>
      </div>
    `:""}attachEventListeners(){const t=this.mount.querySelector("#btn-crm-shop");t&&this.onViewChange&&t.addEventListener("click",()=>{this.onViewChange("shop")});const e=this.mount.querySelector("#btn-crm-refresh");e&&e.addEventListener("click",async()=>{e.textContent="Yuklanmoqda...",await this.fetchOrders(),e.textContent="🔄 Yangilash"});const i=this.mount.querySelector("#btn-crm-logout");i&&i.addEventListener("click",()=>{sessionStorage.removeItem("any3d_admin_auth"),window.location.href=window.location.pathname}),this.mount.querySelectorAll(".crm-pill").forEach(r=>{r.addEventListener("click",()=>{this.filterStatus=r.getAttribute("data-filter"),this.render()})});const s=this.mount.querySelector("#crm-search-input");s&&s.addEventListener("input",r=>{this.searchQuery=r.target.value;const o=this.getFilteredOrders(),l=this.mount.querySelector(".crm-orders-grid");l&&(l.innerHTML=o.length===0?`
            <div class="crm-empty-state">
              <div class="empty-icon">🔍</div>
              <h3>Mos buyurtmalar topilmadi</h3>
            </div>
          `:o.map(c=>this.renderOrderCard(c)).join(""),this.attachCardActionListeners())}),this.attachCardActionListeners()}attachCardActionListeners(){this.mount.querySelectorAll("[data-approve-id]").forEach(n=>{n.addEventListener("click",async()=>{if(n.disabled)return;n.disabled=!0,n.textContent;const s=n.getAttribute("data-approve-id");n.textContent="⏳ Tasdiqlanmoqda...";try{await fetch(Ce("/api/review-order"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:s,action:"approve"})})}catch(r){console.warn("Review order error:",r.message)}finally{await this.fetchOrders()}})}),this.mount.querySelectorAll("[data-decline-id]").forEach(n=>{n.addEventListener("click",async()=>{if(n.disabled)return;n.disabled=!0,n.textContent;const s=n.getAttribute("data-decline-id");n.textContent="⏳ Rad etilmoqda...";try{await fetch(Ce("/api/review-order"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:s,action:"decline"})})}catch(r){console.warn("Decline order error:",r.message)}finally{await this.fetchOrders()}})}),this.mount.querySelectorAll("[data-chat-id]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-chat-id"),r=this.orders.find(o=>o.orderId===s);r&&this.openAdminChat(r)})})}async openAdminChat(t){this.activeChatOrder=t,await this.fetchChatMessages(t.orderId),this.render(),this.chatPoller&&clearInterval(this.chatPoller),this.chatPoller=setInterval(async()=>{this.activeChatOrder&&await this.fetchChatMessages(this.activeChatOrder.orderId,!0)},2e3),this.attachChatDrawerListeners()}async fetchChatMessages(t,e=!1){try{const n=await(await fetch(Ce(`/api/chat-messages?orderId=${encodeURIComponent(t)}`))).json();if(n.ok&&Array.isArray(n.messages)&&(this.chatMessages=n.messages,!e)){const s=this.mount.querySelector("#adchat-messages-body");s&&(s.innerHTML=this.chatMessages.map(r=>`
              <div class="chat-bubble ${r.sender==="admin"?"admin":"customer"}">
                <div class="bubble-sender">${r.sender==="admin"?"👨‍💼 Siz (Admin)":"👤 "+(r.senderName||"Mijoz")}</div>
                <div class="bubble-text">${r.text}</div>
                <div class="bubble-time">${new Date(r.timestamp).toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})}</div>
              </div>
            `).join(""),s.scrollTop=s.scrollHeight)}}catch{}}attachChatDrawerListeners(){const t=this.mount.querySelector("#btn-close-adchat");t&&t.addEventListener("click",()=>{this.activeChatOrder=null,this.chatPoller&&clearInterval(this.chatPoller);const r=this.mount.querySelector("#admin-chat-modal");r&&(r.style.display="none")});const e=this.mount.querySelector("#adchat-input-field"),i=this.mount.querySelector("#btn-adchat-send"),n=async()=>{const r=e.value.trim();if(!(!r||!this.activeChatOrder)&&!(i&&i.disabled)){i&&(i.disabled=!0),e.value="";try{await fetch(Ce("/api/send-message"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:this.activeChatOrder.orderId,sender:"admin",senderName:"Any3D Admin",text:r})}),await this.fetchChatMessages(this.activeChatOrder.orderId)}catch(o){console.warn("Send admin message error:",o.message)}finally{i&&(i.disabled=!1)}}};i&&i.addEventListener("click",n),e&&e.addEventListener("keypress",r=>{r.key==="Enter"&&n()}),this.mount.querySelectorAll(".ad-tpl-btn").forEach(r=>{r.addEventListener("click",()=>{e&&(e.value=r.getAttribute("data-tpl"),e.focus())})})}}const Nm={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_ADMIN_CHAT_IDS:"8929216064",VITE_ADMIN_PIN_CODE:"083010",VITE_API_BASE_URL:"https://any3dcubic-bot.onrender.com",VITE_TELEGRAM_BOT_TOKEN:"9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI"};class Om{constructor(t,e={}){this.mount=typeof t=="string"?document.querySelector(t):t,this.currency=e.currency||"UZS",this.isAdmin=this.checkAdminAuth(),this.currentCategory="all",this.searchQuery="",this.products=[],this.activeProductForEdit=null,this.activeProductForOrder=null,this.onViewChange=e.onViewChange||null,this.init()}checkAdminAuth(){var s,r,o;const t=sessionStorage.getItem("any3d_admin_auth");if(t==="083010"||t==="any3DCubicc")return!0;const e=new URLSearchParams(window.location.search),i=e.get("pin")||e.get("admin");if(i==="083010"||i==="any3dcubicc")return sessionStorage.setItem("any3d_admin_auth","083010"),!0;const n=(o=(r=(s=window.Telegram)==null?void 0:s.WebApp)==null?void 0:r.initDataUnsafe)==null?void 0:o.user;return n&&(n.id===8929216064||(n.username||"").toLowerCase()==="any3dcubicc")?(sessionStorage.setItem("any3d_admin_auth","083010"),!0):!1}setCurrency(t){this.currency=t,this.render()}formatPrice(t,e){if(this.currency==="USD"){const i=e||Math.round(t/12700);return`$${Number(i).toLocaleString("en-US")}`}return`${Number(t).toLocaleString("uz-UZ").replace(/,/g," ")} so‘m`}async init(){await this.fetchProducts(),this.render()}async fetchProducts(){try{const t=await fetch(Ce("/api/products"));if(t.ok){const e=await t.json();if(e.ok&&Array.isArray(e.products)&&e.products.length>0){this.products=e.products,localStorage.setItem("cached_models_v5",JSON.stringify(this.products));return}}}catch{console.warn("API orqali modellarni olishda ogohlantirish, keshdan tekshirilmoqda...")}try{const t=JSON.parse(localStorage.getItem("cached_models_v5")||"[]");if(t.length>0){this.products=t;return}}catch{}this.products=this.getDefaultModels(),localStorage.setItem("cached_models_v5",JSON.stringify(this.products))}getDefaultModels(){return[{id:"model-crystal-dragon",category:"articulated",categoryTitle:"Bo‘g‘inli & Flexi",name:"Crystal Dragon (Print-in-Place)",subtitle:"Bo‘g‘inli harakatlanuvchi billur ajdaho (Yig‘ish talab etilmaydi)",priceUZS:75e3,priceUSD:6,oldPriceUZS:95e3,badge:"🔥 Dunyo Bo‘yicha #1 Trend",icon:"🐉",image:"models/crystal-dragon.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/popular",inStock:!0,stockStatus:"Ustaxonada tayyor (Toshkent)",specs:["Texnologiya: Print-in-Place (Yig'ish talab etilmaydi)","Vazni: ~110 gramm | Uzunligi: 45 sm","Bo'g'inlar soni: 28 ta harakatlanuvchi segment","Qatlam aniqligi: 0.16 mm (Silliq yuza)","Material: Ipaksimon Silk PLA","Chop etish vaqti: ~5.5 soat"],description:"Creality Cloud platformasidagi eng mashhur 3D model. Butun tanasi bo‘g‘inli, qo‘lda o‘ynash uchun mukammal antistress ajdaho.",updatedAt:"2026-11-16T07:40:38.788Z",dimensions:"45 × 8 × 6 sm",printTime:"5.5 soat",difficulty:"O'rta",materials:["Silk PLA (Kamalak)","Silk PLA (Oltin)","PLA+ (Qora)","PETG (Shaffof ko'k)"],useCases:["Antistress o'yinchoq","Ish stoli bezagi","Sovg'a"],images:["models/crystal-dragon.jpg","models/crystal-dragon-2.jpg","models/crystal-dragon-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-collapsible-katana",category:"articulated",categoryTitle:"Bo‘g‘inli & Flexi",name:"Teleskopik Yig‘iluvchan Katana Qilichi",subtitle:"Siltaganda 90 sm ga ochiluvchi teleskopik qilich",priceUZS:85e3,priceUSD:7,oldPriceUZS:11e4,badge:"⚔️ Viral Trend",icon:"🗡️",image:"models/katana.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/popular",inStock:!0,stockStatus:"Ustaxonada tayyor",specs:["Uzunligi: Yig'ilganda 24 sm, ochilganda 92 sm","Qavatlar soni: 5 bo'g'inli teleskopik pichoq","Material: Qattiq PETG yoki Hyper PLA","Dastasi: Sirpanmaydigan teksturali qoplama","Mustahkamlik: 3 devorli (Wall Loops) chop etish","Chop etish vaqti: ~6.5 soat"],description:"Bir siltash bilan ochiluvchi zamonaviy samuray qilichi. Bolalar va kattalar uchun eng qiziqarli interaktiv 3D model.",dimensions:"24 sm (yig'ilgan) / 92 sm (ochilgan)",printTime:"6.5 soat",difficulty:"O'rta",materials:["PETG (Qora/Qizil)","Hyper PLA (Kumush)","PLA+ (Oq/Oltin)"],useCases:["Kospley","Kolleksiya","Sovg'a"],images:["models/katana.jpg","models/katana-2.jpg","models/katana-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-ironman-bust",category:"characters",categoryTitle:"Figuralar & Anime",name:"Iron Man Mark 85 Kolleksion Büst",subtitle:"Ichki yoritgich (LED) o‘rnatish imkoni bilan",priceUZS:14e4,priceUSD:11,oldPriceUZS:18e4,badge:"🦸 Marvel Original",icon:"🤖",image:"models/ironman.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/character",inStock:!0,stockStatus:"Buyurtmaga (24 soat)",specs:["Balandligi: 18 sm | Og'irligi: ~180 gramm","Detalizatsiya: 0.12 mm Ultra-aniq qatlam","Ichki ko'z qismlari shaffof PETG (LED o'rnatishga mos)","Bo'yash: Qo'lda akril yoki ikki rangli chop etish","Taglik: Maxsus Stark Industries stendi bilan","Chop etish vaqti: ~8 soat"],description:"Marvel koinotining eng sevimli qahramoni b银sti. Ish stoli, javon va sovg‘a uchun juda nufuzli ko‘rinishga ega.",dimensions:"18 × 14 × 12 sm",printTime:"8 soat",difficulty:"Murakkab",materials:["PLA+ (Qizil/Oltin)","PETG (Shaffof ko'zlar)","Resin (Yuqori detal)"],useCases:["Kolleksiya","LED tungi chiroq","Geymer xonasi bezagi"],images:["models/ironman.jpg","models/ironman-2.jpg","models/ironman-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-cyberpunk-samurai",category:"characters",categoryTitle:"Figuralar & Anime",name:"Kiberpank Mecha Samuray Figuralari",subtitle:"Futuristik qurollangan robot-jangchi haykali",priceUZS:125e3,priceUSD:10,oldPriceUZS:16e4,badge:"⚡ Kiber Dizayn",icon:"🦾",image:"models/samurai.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/character",inStock:!0,stockStatus:"Tayyorlanish: 24 soat",specs:["Balandligi: 16 sm | Vazni: ~140 gramm","Modulli yig'ish: Qilich va orqa qanotlar ajraladi","Material: Mat qora PLA Pro + Neon ranglar","Detalizatsiya: 0.12 mm yuqori aniqlik","Taglik: Kiberpank uslubidagi maxsus platforma","Chop etish vaqti: ~7 soat"],description:"Kiberpank uslubidagi robot-samuray. Kompyuter stoli va geymerlar xonasi uchun ajoyib aksessuar.",dimensions:"16 × 10 × 9 sm",printTime:"7 soat",difficulty:"Murakkab",materials:["PLA+ (Mat qora)","Neon PLA (Pushti/Ko'k)","PETG"],useCases:["Geymer stoli bezagi","Kolleksiya","Sovg'a"],images:["models/samurai.jpg","models/samurai-2.jpg","models/samurai-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-planetary-gearbox",category:"mechanical",categoryTitle:"Muhandislik & Avto",name:"Planetar Reduktor & Tishli G‘ildirak Mexanizmi",subtitle:"Aylanuvchi sun'iy yo‘ldosh shesternalar tizimi (Ta'lim & Stress)",priceUZS:65e3,priceUSD:5,oldPriceUZS:85e3,badge:"⚙️ Muhandislik",icon:"⚙️",image:"models/gearbox.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/tools",inStock:!0,stockStatus:"Ustaxonada tayyor",specs:["Uzatish nisbati: 1:5 (Yuqori moment)","Tishli g'ildiraklar: Vintsimon (Helical) tishlar","Material: Ishqalanishga chidamli PETG/ABS","Aniqlik: 0.15 mm (Silliq aylanish)","Yig'ish: Podshipniksiz, to'g'ridan-to'g'ri ishlaydi","Chop etish vaqti: ~4.5 soat"],description:"Avtomobil va stanoklardagi tishli uzatmalar qanday ishlashini amalda ko‘rsatuvchi ajoyib mexanik model.",dimensions:"12 × 12 × 6 sm",printTime:"4.5 soat",difficulty:"O'rta",materials:["PETG (Mustahkam)","ABS (Issiqqa chidamli)","PLA+"],useCases:["Ta'lim va STEM","Mexanika namoyishi","Stol o'yinchog'i"],images:["models/gearbox.jpg","models/gearbox-2.jpg","models/gearbox-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-fpv-drone-frame",category:"mechanical",categoryTitle:"Muhandislik & Avto",name:"5 Dyuymli FPV Dron Romi & Motor Himoyasi",subtitle:"Yengil va zarbaga o‘ta chidamli aerodinamik karkas",priceUZS:95e3,priceUSD:7.5,oldPriceUZS:13e4,badge:"🚁 Dronlar",icon:"🛸",image:"models/drone.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/tools",inStock:!0,stockStatus:"Buyurtmaga (24 soat)",specs:["O'lcham: 5 dyuymli (220 mm) parraklar uchun","Material: Karbon tolali Neylon (PA-CF) / PETG-CF","Vazni: ~85 gramm (Yengil va zarbaga chidamli)","To'ldirish (Infill): 60-80% Giroid struktura","Moslik: Standart 30.5×30.5 mm FC/ESC steklar","Chop etish vaqti: ~5 soat"],description:"Dron ixlosmandlari uchun zarbaga bardoshli maxsus konstruksiya. Yiqilganda sinmaydigan elastik komponentlar bilan.",dimensions:"22 × 22 × 4 sm",printTime:"5 soat",difficulty:"Murakkab",materials:["PA-CF (Karbonli Neylon)","PETG-CF","TPU (Himoya qismlari)"],useCases:["FPV Dron yig'ish","Sport uchishlari","Ta'mirlash"],images:["models/drone.jpg","models/drone-2.jpg","models/drone-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-voronoi-moon-lamp",category:"decor",categoryTitle:"Uy Bezagi & Lampalar",name:"Oy Shaklidagi Tungi Lampa (3D Moon Lamp)",subtitle:"Oy kraterlari aniq relyefi va yog‘och taglik stendi bilan",priceUZS:11e4,priceUSD:9,oldPriceUZS:145e3,badge:"🌕 Top Sovg‘a",icon:"🏮",image:"models/moon-lamp.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/hobby",inStock:!0,stockStatus:"Omborda mavjud",specs:["Diametri: 15 sm | Og'irligi: ~160 gramm","Yorug'lik: E14 yoki USB LED chiroqqa mos","Struktura: Voronoi to'rsimon dizayn","Taglik: Yog'och effektli yoki qora stend","Xavfsizlik: Qizib ketmaydigan LED uchun mos","Chop etish vaqti: ~9 soat"],description:"Kechasi xonada yoqilganda xuddi haqiqiy to‘lin oydek mayin nur sochadi. Yaqinlar uchun eng nafis sovg‘a.",dimensions:"15 × 15 × 15 sm",printTime:"9 soat",difficulty:"O'rta",materials:["PLA (Oq mat)","Silk PLA (Issiq oq)","PETG"],useCases:["Yotoqxona chirog'i","Romantik sovg'a","Interyer bezagi"],images:["models/moon-lamp.jpg","models/moon-lamp-2.jpg","models/moon-lamp-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-controller-stand",category:"decor",categoryTitle:"Uy Bezagi & Lampalar",name:"PlayStation / Xbox Geympad va Naushnik Stendi",subtitle:"Kibersport va stolda tartib o‘rnatuvchi universal taglik",priceUZS:7e4,priceUSD:5.5,oldPriceUZS:9e4,badge:"🎮 Geymerlar Uchun",icon:"🎧",image:"models/stand.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/hobby",inStock:!0,stockStatus:"Omborda mavjud",specs:["Moslik: PS5, PS4, Xbox Series X/S va quloqchinlar","Material: Qattiq PLA+ (40% to'ldirish)","Kabel yo'li: Orqa tomonda zaryadlash teshigi","Barqarorlik: Og'irlashtirilgan keng taglik","Qatlam: 0.20 mm mustahkam qatlam","Chop etish vaqti: ~4 soat"],description:"Geympad va naushniklaringiz stol ustida sochilib yotmaydi. Tartibli va zamonaviy ko‘rinish bag‘ishlaydi.",dimensions:"14 × 11 × 18 sm",printTime:"4 soat",difficulty:"Oson",materials:["PLA+ (Qora/Oq)","PETG (Kuchaytirilgan)","Silk PLA"],useCases:["PS5 / Xbox geympad","Quloqchin ushlagich","Geymer stoli"],images:["models/stand.jpg","models/stand-2.jpg","models/stand-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-tashkent-tv-tower",category:"architecture",categoryTitle:"Arxitektura Maketlari",name:"Toshkent Teleminorasi Arxitektura Maketi",subtitle:"375 metrli mashhur teleminoraning 1:1000 masshtabdagi nusxasi",priceUZS:95e3,priceUSD:7.5,oldPriceUZS:125e3,badge:"🇺🇿 Toshkent Belgisi",icon:"🗼",image:"models/tv-tower.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/architecture",inStock:!0,stockStatus:"Tayyorlanish: 24 soat",specs:["Balandligi: 32 sm | Taglik: 10×10 sm","Aniqlik: 0.12 mm (Barcha balkon va antennalar aniq)","Material: Kumushrang Silk PLA","Yig'ish: 2 qismli mustahkam birikma","Baza: 'Tashkent' yozuvli maxsus taglik","Chop etish vaqti: ~6 soat"],description:"Markaziy Osiyodagi eng baland inshootlardan birining aniq arxitekturaviy nusxasi. Poytaxtimiz ramzi.",dimensions:"10 × 10 × 32 sm",printTime:"6 soat",difficulty:"O'rta",materials:["Silk PLA (Kumush/Oq)","PLA+ (Oltin)","Resin"],useCases:["Milliy suvenir","Ofis bezagi","Mehmonlarga sovg'a"],images:["models/tv-tower.jpg","models/tv-tower-2.jpg","models/tv-tower-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-modern-villa-cad",category:"architecture",categoryTitle:"Arxitektura Maketlari",name:"Zamonaviy Hay-Tek Villa Maketi (Ichki reja bilan)",subtitle:"Qavatma-qavat ochiluvchi 3D xonadon interyeri va hovli",priceUZS:16e4,priceUSD:13,oldPriceUZS:22e4,badge:"🏛️ Arxitektor Tanlovi",icon:"🏡",image:"models/villa.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/architecture",inStock:!0,stockStatus:"Buyurtmaga (24-48 soat)",specs:["Masshtab: 1:50 yoki 1:100 (Buyurtmaga qarab)","Material: Mat oq me'moriy PLA+","Detallar: Oynalar, basseyn, hovli va daraxtlar","Aniqlik: 0.16 mm toza devorlar","Fayl: Mijozning CAD/Revit/SketchUp chizmasidan","Chop etish vaqti: ~12 soat"],description:"Qurilish kompaniyalari, me'morlar va dizaynerlar uchun loyihani mijozga real ko‘rsatish vositasi.",dimensions:"25 × 20 × 12 sm",printTime:"12 soat",difficulty:"Murakkab",materials:["PLA+ (Oq me'moriy)","PLA (Kulrang/Yog'och)","PETG"],useCases:["Arxitektura taqdimoti","Qurilish loyihasi","Interyer maketi"],images:["models/villa.jpg","models/villa-2.jpg","models/villa-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-spiral-voronoi-vase",category:"decor",categoryTitle:"Uy Bezagi & Lampalar",name:"Spiral Voronoi Geometrik Gultuvak & Vaza",subtitle:"Parametrik dizayndagi zamonaviy guldon",priceUZS:55e3,priceUSD:4.5,oldPriceUZS:75e3,badge:"🌿 Eko Dizayn",icon:"🏺",image:"models/vase.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/hobby",inStock:!0,stockStatus:"Omborda mavjud",specs:["Balandligi: 22 sm | Diametri: 12 sm","Material: Suvga chidamli PETG yoki Silk PLA","Dizayn: Spiral burama va Voronoi teshiklari","Qatlam: 0.20 mm silliq spiral rejim","Vazni: ~130 gramm","Chop etish vaqti: ~5 soat"],description:"Matematik Voronoi algoritmlari bilan yaratilgan nafis gultuvak. Har qanday xonaga zamonaviy interyer bag‘ishlaydi.",dimensions:"12 × 12 × 22 sm",printTime:"5 soat",difficulty:"Oson",materials:["Silk PLA (Oltin/Zumrad)","PETG (Suv o'tkazmaydigan)","Marble PLA"],useCases:["Guldon","Zamonaviy uy bezagi","Sovg'a"],images:["models/vase.jpg","models/vase-2.jpg","models/vase-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-flexi-rex",category:"articulated",categoryTitle:"Bo‘g‘inli & Flexi",name:"Flexi-Rex (Harakatlanuvchi Tiranozavr)",subtitle:"Butun tanasi erkin tebranuvchi mashhur dinozavr",priceUZS:35e3,priceUSD:3,oldPriceUZS:5e4,badge:"🦖 Klassik Flexi",icon:"🦖",image:"models/flexi-rex.jpg",crealityUrl:"https://www.crealitycloud.com/ru/model-category/popular",inStock:!0,stockStatus:"Ustaxonada ko‘p miqdorda tayyor",specs:["Uzunligi: 18 sm | Vazni: ~55 gramm","Texnologiya: Print-in-Place (Bir marta chop etiladi)","Xavfsizlik: O'tkir qirralarsiz, ekologik toza PLA","Mustahkamlik: Bolalar o'ynashi uchun chidamli","Harakat: Bo'yni, tanasi va dumi egiladi","Chop etish vaqti: ~2.5 soat"],description:"3D bosma olamining eng qadimiy va eng mashhur ramzi. Stolda turishi va o‘ynash uchun ajoyib qulaylik.",dimensions:"18 × 6 × 9 sm",printTime:"2.5 soat",difficulty:"Oson",materials:["PLA+ (Yashil/To'q sariq)","Silk PLA (Ikki rangli)","PETG"],useCases:["Bolalar o'yinchog'i","Kalit ilgich (kichik)","Antistress"],images:["models/flexi-rex.jpg","models/flexi-rex-2.jpg","models/flexi-rex-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-gojo-satoru",category:"characters",categoryTitle:"Figuralar & Anime",name:"Gojo Satoru (Jujutsu Kaisen) Byust",subtitle:"Anime muxlislari uchun yuqori detallashgan kolleksiya haykali",priceUZS:135e3,priceUSD:11,oldPriceUZS:17e4,badge:"⚡ Anime Hit",icon:"🤞",image:"models/gojo-satoru.jpg",inStock:!1,stockStatus:"Buyurtmaga (24 soat)",dimensions:"19 × 12 × 11 sm",printTime:"7.5 soat",difficulty:"Murakkab",materials:["PLA+ (Oq/Qora)","Resin (Ultra detal)","Silk PLA"],useCases:["Anime kolleksiyasi","Xona bezagi","Sovg'a"],specs:["Balandligi: 19 sm | Vazni: ~190 gramm","Detalizatsiya: 0.12 mm yuz va soch teksturalari","Material: Yuqori sifatli PLA+ yoki Fotopolimer","Taglik: Maxsus 'Domain Expansion' stendi","Holati: Silliqlangan va gruntlangan","Chop etish vaqti: ~7.5 soat"],description:"Jujutsu Kaisen animesining eng mashhur qahramoni Gojo Satoruning 3D byusti. Soch tolalari va kiyim burmalari 0.12 mm aniqlikda chop etiladi.",images:["models/gojo-satoru.jpg","models/gojo-satoru-2.jpg","models/gojo-satoru-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-batman-bust",category:"characters",categoryTitle:"Figuralar & Anime",name:"Batman Dark Knight Byust",subtitle:"Gotem qahramonining mat qora kolleksiya haykali",priceUZS:145e3,priceUSD:11,oldPriceUZS:185e3,badge:"🦇 DC Kolleksiya",icon:"🦇",image:"models/batman-bust.jpg",inStock:!0,stockStatus:"Ustaxonada tayyor",dimensions:"20 × 15 × 12 sm",printTime:"8.5 soat",difficulty:"Murakkab",materials:["Mat Qora PLA+","PETG (Grafit)","Resin"],useCases:["Ofis stoli bezagi","DC muxlislari uchun","Sovg'a"],specs:["Balandligi: 20 sm | Vazni: ~210 gramm","Material: Mat qora PLA+ (Qatlamlar deyarli ko'rinmaydi)","Aniqlik: 0.12 mm yuqori detallashgan","Taglik: Ko'rshapalak logotipli baza","To'ldirish: 20% mustahkam struktura","Chop etish vaqti: ~8.5 soat"],description:"Kristofer Nolanning 'Dark Knight' uslubidagi Batman byusti. Mat qora plastikda chop etilganda xuddi quyma haykaldek ko'rinadi.",images:["models/batman-bust.jpg","models/batman-bust-2.jpg","models/batman-bust-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-mandalorian-helmet",category:"characters",categoryTitle:"Figuralar & Anime",name:"Mandalorian Dubulg'asi (Mini / 1:1)",subtitle:"Star Wars Beskar po'lati effektli kolleksiya dubulg'asi",priceUZS:16e4,priceUSD:13,oldPriceUZS:2e5,badge:"🚀 Star Wars",icon:"🪖",image:"models/mandalorian-helmet.jpg",inStock:!1,stockStatus:"Buyurtmaga (24 soat)",dimensions:"16 × 14 × 15 sm (Stol varianti)",printTime:"9 soat",difficulty:"Murakkab",materials:["Silk PLA (Kumush Beskar)","PETG","PLA+"],useCases:["Kolleksiya","Kospley (1:1 buyurtma)","Sovg'a"],specs:["O'lcham: 16 sm (Stol stendi bilan)","Material: Kumushrang metall effektli Silk PLA","Vizor: Qora yaltiroq akril yoki qora PETG","Aniqlik: 0.16 mm silliq yuza","Izoh: 1:1 kiyiladigan o'lchamda ham buyurtma berish mumkin","Chop etish vaqti: ~9 soat"],description:"Mashhur Mandalorian serialidagi Beskar dubulg'asi. Metallik kumush Silk PLA da chop etilgani uchun haqiqiy po'latdek jilvalanadi.",images:["models/mandalorian-helmet.jpg","models/mandalorian-helmet-2.jpg","models/mandalorian-helmet-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-phone-stand",category:"decor",categoryTitle:"Uy Bezagi & Lampalar",name:"Burchagi Sozlanadigan Telefon Ushlagich",subtitle:"45° va 90° burchakli buklanadigan cho'ntak stendi",priceUZS:35e3,priceUSD:3,oldPriceUZS:5e4,badge:"📱 Kundalik Qulaylik",icon:"📱",image:"models/phone-stand.jpg",inStock:!0,stockStatus:"Ustaxonada tayyor",dimensions:"10 × 7 × 1.5 sm (yig'ilgan)",printTime:"1.5 soat",difficulty:"Oson",materials:["PLA+ (Qora/Oq/Ko'k)","PETG (Mustahkam)"],useCases:["Video qo'ng'iroqlar","Kino ko'rish","Ofis stoli"],specs:["Moslik: Barcha iPhone, Samsung va planshetlar","Mexanizm: 6 bosqichli burchak sozlagich","Material: Qattiq PETG (Og'ir telefonlarni ham ko'taradi)","Zaryadlash: Kabel o'tkazish uchun maxsus tirqish","Vazni: ~45 gramm (Cho'ntakka sig'adi)","Chop etish vaqti: ~1.5 soat"],description:"Ish stolida yoki safarda telefonni qulay joylashtirish uchun yig'iladigan mustahkam 3D stend.",images:["models/phone-stand.jpg","models/phone-stand-2.jpg","models/phone-stand-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-mini-chess",category:"decor",categoryTitle:"Uy Bezagi & Lampalar",name:"Modernist Shaxmat To'plami (32 dona)",subtitle:"Minimalistik geometrik uslubdagi to'liq shaxmat figuralari",priceUZS:115e3,priceUSD:9,oldPriceUZS:15e4,badge:"♟️ Intellektual Sovg'a",icon:"♟️",image:"models/mini-chess.jpg",inStock:!0,stockStatus:"Ustaxonada tayyor",dimensions:"Shoh balandligi: 7.5 sm",printTime:"7 soat",difficulty:"O'rta",materials:["Marble PLA (Marmar) + Qora PLA+","Silk Oltin + Kumush"],useCases:["Shaxmat o'ynash","Mehmonxona bezagi","VIP Sovg'a"],specs:["To'plam: 16 ta oq/marmar + 16 ta qora/oltin figura","Shoh balandligi: 7.5 sm","Material: Marmar effektli PLA va Mat qora PLA+","Taglik: Og'irlashtirilgan barqaror baza","Dizayn: Zamonaviy Bauhaus geometriyasi","Chop etish vaqti: ~7 soat"],description:"Klassik shaxmatning zamonaviy geometrik talqini. Marmar va mat qora ranglar uyg'unligi har qanday interyerga ko'rk beradi.",images:["models/mini-chess.jpg","models/mini-chess-2.jpg","models/mini-chess-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-hex-planter",category:"decor",categoryTitle:"Uy Bezagi & Lampalar",name:"Olti Burchakli Modulli Gultuvak",subtitle:"Kaktus va sukkulentlar uchun suv to'plovchi taglikli tuvak",priceUZS:45e3,priceUSD:4,oldPriceUZS:6e4,badge:"🌵 Eko Dekor",icon:"🪴",image:"models/hex-planter.jpg",inStock:!0,stockStatus:"Ustaxonada tayyor",dimensions:"11 × 11 × 9 sm",printTime:"3.5 soat",difficulty:"Oson",materials:["Marble PLA","Wood PLA (Yog'och)","PETG (Suvga chidamli)"],useCases:["Kaktus va sukkulentlar","Ofis stoli","Oshxona bezagi"],specs:["O'lcham: 11 × 11 × 9 sm","Drenaj: Ortiqcha suv oqib chiqadigan teshik va taglik","Material: Suvga chidamli PETG yoki Marmar PLA","Modulli: Bir nechta tuvakni yonma-yon ulash mumkin","Vazni: ~95 gramm","Chop etish vaqti: ~3.5 soat"],description:"Sukkulent va kaktuslar uchun maxsus drenaj tizimiga ega zamonaviy olti burchakli gultuvak.",images:["models/hex-planter.jpg","models/hex-planter-2.jpg","models/hex-planter-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-cable-organizer",category:"mechanical",categoryTitle:"Muhandislik & Avto",name:"Stol Osti Kabel va USB Tartiblagich",subtitle:"Simlarni chigallashishdan saqlovchi magnitli va qisqichli tizim",priceUZS:4e4,priceUSD:3,oldPriceUZS:55e3,badge:"🔌 Ish Stoli Tartibi",icon:"🔌",image:"models/cable-organizer.jpg",inStock:!0,stockStatus:"Ustaxonada tayyor",dimensions:"15 × 4 × 3 sm (5 ta kanal)",printTime:"2 soat",difficulty:"Oson",materials:["PETG (Mustahkam)","PLA+ (Qora/Kulrang)"],useCases:["Kompyuter stoli","Zaryadlash stansiyasi","Avtomobil"],specs:["Kanallar soni: 5 ta (USB-C, Lightning, HDMI mos)","O'rnatish: Ikki tomonlama skotch yoki vint bilan","Material: Elastik va mustahkam PETG","Qo'shimcha: 4 ta SD karta va fleshka uyasi","Vazni: ~60 gramm","Chop etish vaqti: ~2 soat"],description:"Ish stolingizdagi barcha zaryadlovchi va kompyuter simlarini tartibga soluvchi amaliy 3D organayzer.",images:["models/cable-organizer.jpg","models/cable-organizer-2.jpg","models/cable-organizer-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-mini-turbine",category:"mechanical",categoryTitle:"Muhandislik & Avto",name:"Reaktiv Dvigatel (Jet Turbine) Maketi",subtitle:"Aylanuvchi parrakli aviatsiya dvigatelining o'quv modeli",priceUZS:13e4,priceUSD:10,oldPriceUZS:165e3,badge:"✈️ Aviatsiya Muhandisligi",icon:"⚙️",image:"models/mini-turbine.jpg",inStock:!1,stockStatus:"Buyurtmaga (24 soat)",dimensions:"20 × 13 × 14 sm",printTime:"10 soat",difficulty:"Murakkab",materials:["Silk PLA (Kumush/Qora)","PETG (Qizil/Ko'k)"],useCases:["Muhandislik talabalari","Ofis suveniri","Mexanika"],specs:["Uzunligi: 20 sm | Qismlar soni: 18 ta","Funksiyasi: Qo'lda aylantirganda barcha parraklar aylanadi","Kesim: Ichki kompressor ko'rinadigan ochiq korpus","Material: Kumush Silk PLA + Qora PETG","Taglik: Aviatsiya stendi bilan","Chop etish vaqti: ~10 soat"],description:"Haqiqiy reaktiv dvigatelning kichraytirilgan va ishlaydigan mexanik modeli. Muhandislar va aviatsiya ishqibozlari uchun ajoyib sovg'a.",images:["models/mini-turbine.jpg","models/mini-turbine-2.jpg","models/mini-turbine-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-fidget-spinner",category:"mechanical",categoryTitle:"Muhandislik & Avto",name:"Tishli G'ildirakli Antistress Spinner",subtitle:"Barmoqlar uchun planetar tishli mexanik o'yinchoq",priceUZS:3e4,priceUSD:2.5,oldPriceUZS:45e3,badge:"🌀 Antistress",icon:"🌀",image:"models/fidget-spinner.jpg",inStock:!0,stockStatus:"Ustaxonada tayyor",dimensions:"7 × 7 × 1.2 sm",printTime:"1.2 soat",difficulty:"Oson",materials:["Silk PLA (Oltin/Kamalak)","PETG (Neon)"],useCases:["Stressni kamaytirish","Diqqatni jamlash","Sovg'a"],specs:["Diametri: 7 sm | Vazni: ~35 gramm","Texnologiya: Print-in-Place (Podshipniksiz aylanadi)","Mexanizm: 6 ta ichki tishli g'ildirak","Material: Silliq Silk PLA","Qatlam: 0.16 mm aniq tolerans","Chop etish vaqti: ~1.2 soat"],description:"Bir qo'lda aylantiriladigan planetar tishli g'ildirakli antistress. Ish va o'qish paytida diqqatni jamlashga yordam beradi.",images:["models/fidget-spinner.jpg","models/fidget-spinner-2.jpg","models/fidget-spinner-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-flexi-octopus",category:"articulated",categoryTitle:"Bo‘g‘inli & Flexi",name:"Harakatlanuvchi Bo'g'inli Sakkizoyoq",subtitle:"8 ta egiluvchan paypaslagichli mashhur Flexi o'yinchoq",priceUZS:55e3,priceUSD:4.5,oldPriceUZS:75e3,badge:"🐙 Mashhur Flexi",icon:"🐙",image:"models/flexi-octopus.jpg",inStock:!0,stockStatus:"Ustaxonada tayyor",dimensions:"16 × 16 × 5 sm",printTime:"3.5 soat",difficulty:"Oson",materials:["Silk PLA (Kamalak/Binafsha)","PLA+ (To'q sariq)"],useCases:["Bolalar o'yinchog'i","Stol bezagi","Antistress"],specs:["O'lcham: 16 sm | Vazni: ~70 gramm","Texnologiya: Print-in-Place (Bir bo'lakda chop etiladi)","Paypaslagichlar: 8 ta to'liq egiluvchan bo'g'in","Material: Xavfsiz ekologik PLA / Silk PLA","Qatlam: 0.16 mm silliq yuza","Chop etish vaqti: ~3.5 soat"],description:"Dunyodagi eng mashhur Print-in-Place modellardan biri. Barcha 8 ta oyog'i erkin harakatlanadi va qo'lda yoqimli o'ynaladi.",images:["models/flexi-octopus.jpg","models/flexi-octopus-2.jpg","models/flexi-octopus-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-lithophane-lamp",category:"decor",categoryTitle:"Uy Bezagi & Lampalar",name:"Shaxsiy Suratli Litofan Fotolampa",subtitle:"Sizning suratingiz tushirilgan 3D yoritgich (Chiroq yoqilganda ko'rinadi)",priceUZS:11e4,priceUSD:9,oldPriceUZS:14e4,badge:"📸 Maxsus Buyurtma",icon:"🖼️",image:"models/lithophane-lamp.jpg",inStock:!1,stockStatus:"Buyurtmaga (24 soat)",dimensions:"14 × 14 × 16 sm",printTime:"11 soat",difficulty:"Murakkab",materials:["Oq Litofan PLA+","Issiq oq LED baza"],useCases:["Tug'ilgan kun sovg'asi","To'y/Yubiley","Oila surati"],specs:["O'lcham: 14 × 16 sm (Silindr yoki kub shaklida)","Suratlar: 1 dan 4 tagacha shaxsiy rasm joylash mumkin","Aniqlik: 0.12 mm HD foto-relef","Yoritish: USB orqali ishlaydigan issiq oq LED","Material: Yorug'likni ideal o'tkazuvchi oq PLA","Chop etish vaqti: ~11 soat"],description:"Oddiy holatda oq silindrdek ko'rinadi, lekin chiroq yoqilganda sizning suratingiz haqiqiy oq-qora fotosuratdek jonlanadi!",images:["models/lithophane-lamp.jpg","models/lithophane-lamp-2.jpg","models/lithophane-lamp-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]},{id:"model-registan-maket",category:"architecture",categoryTitle:"Arxitektura & Maket",name:"Samarqand Registon Maydoni Mini Maketi",subtitle:"3 ta madrasa majmuasining batafsil me'moriy 3D suveniri",priceUZS:15e4,priceUSD:12,oldPriceUZS:195e3,badge:"🕌 Milliy Meros",icon:"🕌",image:"models/registan-maket.jpg",inStock:!1,stockStatus:"Buyurtmaga (24 soat)",dimensions:"22 × 18 × 8 sm",printTime:"10 soat",difficulty:"Murakkab",materials:["Marble PLA (Marmar)","Silk PLA (Oltin/Firuza)","PLA+ (Oq)"],useCases:["Xorijiy mehmonlarga sovg'a","Ofis bezagi","Kolleksiya"],specs:["O'lcham: 22 × 18 × 8 sm","Tarkibi: Ulug'bek, Sherdor va Tillakori madrasalari","Aniqlik: 0.12 mm (Gumbaz va minoralar aniq)","Material: Marmar effektli PLA yoki Oq/Oltin PLA","Taglik: 'Samarkand - Registan' yozuvli baza","Chop etish vaqti: ~10 soat"],description:"O'zbekistonning faxri — Samarqand Registon majmuasining 3D bosma mini maketi. Mehmonlar va rahbarlar uchun eng munosib milliy sovg'a.",images:["models/registan-maket.jpg","models/registan-maket-2.jpg","models/registan-maket-3.jpg"],imageCaptions:["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"]}]}getFilteredProducts(){return this.products.filter(t=>{if(this.currentCategory!=="all"&&t.category!==this.currentCategory)return!1;if(this.searchQuery.trim()){const e=this.searchQuery.toLowerCase();if(!`${t.name} ${t.subtitle||""} ${t.categoryTitle||""} ${t.badge||""}`.toLowerCase().includes(e))return!1}return!0})}render(){const t=this.getFilteredProducts();this.mount.innerHTML=`
      <div class="creality-shop-container">
        <!-- Creality Cloud Hero Banner -->
        <div class="shop-hero-banner">
          <div class="shop-hero-glow"></div>
          <div class="shop-hero-content">
            <div class="shop-brand-row">
              <span class="shop-creality-badge">CREALITY CLOUD • TOP 3D MODELLAR</span>
              <div class="shop-admin-indicator">
                ${this.isAdmin?`
                  <span class="admin-unlocked-badge">👑 Admin Rejimi (PIN: 083010)</span>
                  <button type="button" class="btn-shop-add-prod" id="btn-add-product">➕ Yangi Model Qo‘shish</button>
                `:`
                  <button type="button" class="btn-shop-admin-login" id="btn-shop-pin-login">
                    🔐 Narxlarni Boshqarish (Admin PIN)
                  </button>
                `}
              </div>
            </div>

            <h1 class="shop-title">Creality Cloud 3D Modellar & STL Katalogi</h1>
            <p class="shop-desc">
              Dunyoga mashhur <b>Creality Cloud</b> (<a href="https://www.crealitycloud.com/ru" target="_blank" class="creality-link">www.crealitycloud.com/ru</a>) platformasidagi eng mashhur 3D modellar, harakatlanuvchi Flexi o‘yinchoqlar, qahramonlar, muhandislik detallari va uy bezaklari. 
              <b>Istalgan modelni tanlang — Toshkent ustaxonamizda professional 3D printerda sifatli chiqarib beramiz!</b>
            </p>

            <div class="shop-stats-strip">
              <div class="s-stat"><span class="s-val">500+</span><span class="s-lbl">Mashhur Modellar</span></div>
              <div class="s-stat"><span class="s-val">0.12 mm</span><span class="s-lbl">Ultra-Aniq Qatlam</span></div>
              <div class="s-stat"><span class="s-val">24 Soat</span><span class="s-lbl">Tayyor Bo‘lish Vaqti</span></div>
              <div class="s-stat"><span class="s-val">Toshkent</span><span class="s-lbl">Tezkor Yetkazish</span></div>
            </div>
          </div>
        </div>

        <!-- Filterlar va Qidiruv Paneli -->
        <div class="shop-toolbar">
          <div class="shop-categories-pills">
            <button type="button" class="cat-pill ${this.currentCategory==="all"?"active":""}" data-cat="all">
              🌐 Barcha Modellar (${this.products.length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="articulated"?"active":""}" data-cat="articulated">
              🐉 Bo‘g‘inli & Flexi (${this.products.filter(e=>e.category==="articulated").length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="characters"?"active":""}" data-cat="characters">
              🦸 Figuralar & Anime (${this.products.filter(e=>e.category==="characters").length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="mechanical"?"active":""}" data-cat="mechanical">
              ⚙️ Muhandislik & Avto (${this.products.filter(e=>e.category==="mechanical").length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="decor"?"active":""}" data-cat="decor">
              🏠 Uy Bezagi & Lampalar (${this.products.filter(e=>e.category==="decor").length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="architecture"?"active":""}" data-cat="architecture">
              🏛️ Arxitektura Maketlari (${this.products.filter(e=>e.category==="architecture").length})
            </button>
          </div>

          <div class="shop-search-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="shop-search-input" placeholder="Model qidirish (Ajdaho, Katana, Iron Man, Reduktor, Lampa...)" value="${this.searchQuery}">
            ${this.searchQuery?'<button type="button" class="btn-clear-search" id="btn-clear-search">✕</button>':""}
          </div>
        </div>

        <!-- Modellar Ro'yxati (Grid) -->
        <div class="shop-products-grid">
          ${t.length===0?`
            <div class="shop-empty-state">
              <div class="empty-icon">🔍</div>
              <h3>Model topilmadi</h3>
              <p>Qidiruv so‘rovingizni o‘zgartiring yoki boshqa toifani tanlang.</p>
              <button type="button" class="btn-reset-filters" id="btn-reset-filters">Barcha Modellarni Ko‘rsatish</button>
            </div>
          `:t.map(e=>`
            <div class="product-card ${e.category}" data-product-id="${e.id}">
              <div class="product-card-top">
                <span class="product-badge">${e.badge||"Creality Model"}</span>
                <span class="stock-pill ${e.inStock?"in-stock":"pre-order"}">
                  ${e.inStock?"🟢 Ustaxonada tayyor":"⏱️ 24 Soatda tayyor"}
                </span>
              </div>

              <!-- Model Vizual Qutisi -->
              <div class="product-visual-box" data-detail-trigger="${e.id}" title="Rasmlarni va to‘liq ma'lumotni ko‘rish uchun bosing">
                ${e.image?`
                  <img src="${e.image}" alt="${e.name}" class="product-img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                  <div class="product-icon-frame" style="display: none;">${e.icon||"💎"}</div>
                `:`
                  <div class="product-icon-frame">${e.icon||"💎"}</div>
                `}
                <div class="card-gallery-pill">📸 ${(e.images||[e.image]).length} ta rasm</div>
                <div class="product-category-tag">${e.categoryTitle||"Creality 3D"}</div>
              </div>

              <div class="product-info-body">
                <h3 class="product-name">${e.name}</h3>
                <p class="product-subtitle">${e.subtitle||""}</p>

                <!-- Qisqa Texnik Ma'lumotlar -->
                <div class="product-meta-pills">
                  ${e.dimensions?`<span class="meta-pill" title="O'lchami">📐 ${e.dimensions}</span>`:""}
                  ${e.printTime?`<span class="meta-pill" title="Chop etish vaqti">⏱️ ${e.printTime}</span>`:""}
                  ${e.difficulty?`<span class="meta-pill" title="Murakkablik">⚙️ ${e.difficulty}</span>`:""}
                </div>

                <!-- Texnik xususiyatlar ro'yxati -->
                <ul class="product-specs-list">
                  ${(e.specs||[]).slice(0,4).map(i=>`<li>• ${i}</li>`).join("")}
                </ul>

                ${e.materials&&e.materials.length>0?`
                  <div class="product-materials-row">
                    ${e.materials.slice(0,3).map(i=>`<span class="material-chip">${i}</span>`).join("")}
                  </div>
                `:""}

                <!-- Narxlar Maydoni -->
                <div class="product-pricing-box">
                  <div class="price-main">
                    <span class="price-val">${this.formatPrice(e.priceUZS,e.priceUSD)}</span>
                    ${e.oldPriceUZS?`<span class="price-old">${this.formatPrice(e.oldPriceUZS,Math.round(e.oldPriceUZS/12700))}</span>`:""}
                  </div>
                  <span class="stock-status-text">🖨️ ${e.stockStatus||"3D chop etish narxi"}</span>
                </div>

                <!-- Harakat Tugmalari -->
                <div class="product-card-actions">
                  <button type="button" class="btn-detail-product" data-detail-id="${e.id}">
                    ℹ️ Batafsil
                  </button>
                  <button type="button" class="btn-order-product" data-order-id="${e.id}">
                    🖨️ Buyurtma
                  </button>
                </div>

                ${this.isAdmin?`
                  <div class="admin-card-controls">
                    <button type="button" class="btn-admin-edit-price" data-edit-id="${e.id}">
                      ✏️ Narxni O‘zgartirish (Admin)
                    </button>
                  </div>
                `:""}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- 🔒 ADMIN NARXNI O'ZGARTIRISH MODALI -->
        <div class="shop-modal-backdrop" id="price-edit-modal" style="display: none;">
          <div class="shop-modal-card">
            <div class="shop-modal-header">
              <div class="s-modal-title">
                <span class="s-m-icon">✏️</span>
                <div>
                  <h3 id="edit-prod-title">Model Narxini Tahrirlash</h3>
                  <small id="edit-prod-sub">Faqat bosh administrator uchun (PIN: 083010)</small>
                </div>
              </div>
              <button type="button" class="shop-modal-close" id="btn-close-edit">✕</button>
            </div>

            <form class="edit-price-form" id="edit-price-form" onsubmit="return false;">
              <input type="hidden" id="edit-prod-id" value="">
              
              <div class="form-field">
                <label>Model Nomi:</label>
                <input type="text" id="edit-input-name" required>
              </div>

              <div class="form-row-dual">
                <div class="form-field">
                  <label>Chop Etish Narxi (SO‘M da) *</label>
                  <input type="number" id="edit-input-uzs" placeholder="75000" required>
                </div>
                <div class="form-field">
                  <label>Narxi (USD da) *</label>
                  <input type="number" id="edit-input-usd" placeholder="6" required>
                </div>
              </div>

              <div class="form-row-dual">
                <div class="form-field">
                  <label>Maxsus Nishon (Badge):</label>
                  <input type="text" id="edit-input-badge" placeholder="🔥 #1 Trend">
                </div>
                <div class="form-field">
                  <label>Holati:</label>
                  <select id="edit-select-stock">
                    <option value="true">🟢 Ustaxonada tayyor</option>
                    <option value="false">⏱️ 24 Soatda tayyor</option>
                  </select>
                </div>
              </div>

              <div class="form-field">
                <label>Holat Matni:</label>
                <input type="text" id="edit-input-stock-status" placeholder="Ustaxonada tayyor (Toshkent)">
              </div>

              <div class="shop-modal-actions">
                <button type="submit" class="btn-save-price" id="btn-save-price">
                  💾 Yangi Narxni Saqlash
                </button>
                <button type="button" class="btn-cancel-edit" id="btn-cancel-edit">
                  Bekor Qilish
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- 🛒 CHOP ETISHGA BUYURTMA BERISH MODALI -->
        <div class="shop-modal-backdrop" id="shop-order-modal" style="display: none;">
          <div class="shop-modal-card">
            <div class="shop-modal-header">
              <div class="s-modal-title">
                <span class="s-m-icon">🖨️</span>
                <div>
                  <h3 id="order-modal-prod-name">Modelni Chop Etishga Buyurtma</h3>
                  <small id="order-modal-prod-price">Toshkent 3D Ustaxonasi</small>
                </div>
              </div>
              <button type="button" class="shop-modal-close" id="btn-close-order">✕</button>
            </div>

            <form class="shop-order-form" id="shop-order-form" onsubmit="return false;">
              <input type="hidden" id="order-hidden-prod-id" value="">
              
              <div class="form-row-dual">
                <div class="form-field">
                  <label>Ism va Familiyangiz *</label>
                  <input type="text" id="shop-cust-name" placeholder="Ismingizni kiriting" required>
                </div>
                <div class="form-field">
                  <label>Telefon Raqamingiz *</label>
                  <input type="tel" id="shop-cust-phone" placeholder="+998 90 123 45 67" required>
                </div>
              </div>

              <div class="form-row-dual">
                <div class="form-field">
                  <label>Telegram Username (Ixtiyoriy):</label>
                  <input type="text" id="shop-cust-tg" placeholder="@username">
                </div>
                <div class="form-field">
                  <label>Yetkazib Berish Manzili:</label>
                  <input type="text" id="shop-cust-addr" placeholder="Toshkent bo‘ylab yoki Ustaxonadan olib ketish">
                </div>
              </div>

              <div class="form-field">
                <label>Rang yoki Qayta Ishlash Istagi (Ixtiyoriy):</label>
                <textarea id="shop-cust-notes" rows="2" placeholder="Masalan: Ipaksimon oltin rangda yoki qora mat PLA da chiqarib bering"></textarea>
              </div>

              <div class="order-summary-box">
                <div class="order-summary-model-preview" id="order-modal-img-preview" style="display: none; margin-bottom: 0.75rem; text-align: center;">
                  <img id="summary-prod-img" src="" alt="3D Model" style="max-height: 120px; border-radius: 8px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1);" />
                </div>
                <div class="o-sum-row">
                  <span>Tanlangan Model:</span>
                  <strong id="summary-prod-name">-</strong>
                </div>
                <div class="o-sum-row total">
                  <span>Chop Etish To‘lovi:</span>
                  <strong id="summary-prod-price" style="color: #00d26a;">-</strong>
                </div>
              </div>

              <div class="shop-modal-actions">
                <button type="submit" class="btn-submit-shop-order" id="btn-submit-shop-order">
                  🚀 Chop Etishga Tasdiqlash
                </button>
                <button type="button" class="btn-cancel-edit" id="btn-cancel-shop-order">
                  Bekor Qilish
                </button>
              </div>
            </form>

            <div class="shop-order-success" id="shop-order-success" style="display: none;">
              <div class="s-succ-icon">🎉</div>
              <h3>Buyurtmangiz Qabul Qilindi!</h3>
              <p id="shop-succ-num" class="succ-order-code">#SHOP-5452</p>
              <p class="succ-desc">
                Model Toshkent 3D Ustaxonasi navbatiga qo‘yildi va bosh administratorga (<b>@any3DCubicc</b>) yetkazildi. Tez orada dastgohda chop etish boshlanadi!
              </p>
              <div class="succ-btns">
                <a href="https://t.me/Any3dCubic_bot" target="_blank" class="btn-succ-bot">
                  🤖 Botda Holatni Ko‘rish (@Any3dCubic_bot)
                </a>
                <button type="button" class="btn-succ-close" id="btn-succ-close">
                  Modellar Katalogiga Qaytish
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ℹ️ MAHSULOT BATAFSIL MODALI -->
        <div class="shop-modal-backdrop" id="product-detail-modal" style="display: none;">
          <div class="shop-modal-card detail-modal-card">
            <div class="shop-modal-header">
              <div class="s-modal-title">
                <span class="s-m-icon" id="detail-modal-icon">📦</span>
                <div>
                  <h3 id="detail-modal-name">Model nomi</h3>
                  <small id="detail-modal-category">Kategoriya</small>
                </div>
              </div>
              <button type="button" class="shop-modal-close" id="btn-close-detail">✕</button>
            </div>

            <div class="detail-modal-body">
              <div class="detail-gallery-container">
                <div class="detail-main-img-box">
                  <img id="detail-modal-img" src="" alt="3D Model" />
                  <div id="detail-img-badge" class="detail-img-badge">1 / 3</div>
                  <button type="button" class="gallery-nav-btn prev" id="btn-gallery-prev" title="Oldingi rasm">‹</button>
                  <button type="button" class="gallery-nav-btn next" id="btn-gallery-next" title="Keyingi rasm">›</button>
                </div>
                <div id="detail-img-caption" class="detail-img-caption">
                  🖨️ 3D Chop etilgan asosiy namuna
                </div>
                <div id="detail-modal-thumbs" class="detail-thumbs-row"></div>
                <div class="detail-quality-notice">
                  💡 <b>Haqiqiy 3D bosma:</b> Rasmlarda modelning tuzilishi, harakatlanuvchi bo‘g‘inlari va Toshkent ustaxonamizda chiqadigan real sifati ko‘rsatilgan.
                </div>
              </div>

              <div class="detail-info-wrap">
                <p id="detail-modal-desc" class="detail-desc-text"></p>

                <div class="detail-meta-grid">
                  <div class="detail-meta-item">
                    <span class="dm-label">📐 O'lchami</span>
                    <strong id="detail-modal-dim">-</strong>
                  </div>
                  <div class="detail-meta-item">
                    <span class="dm-label">⏱️ Chop vaqti</span>
                    <strong id="detail-modal-time">-</strong>
                  </div>
                  <div class="detail-meta-item">
                    <span class="dm-label">⚙️ Murakkablik</span>
                    <strong id="detail-modal-diff">-</strong>
                  </div>
                  <div class="detail-meta-item">
                    <span class="dm-label">💰 Narxi</span>
                    <strong id="detail-modal-price" style="color: #00d26a;">-</strong>
                  </div>
                </div>

                <div class="detail-section">
                  <h4>🔧 Texnik Xususiyatlar</h4>
                  <ul id="detail-modal-specs" class="detail-specs-list"></ul>
                </div>

                <div class="detail-section">
                  <h4>🧵 Mavjud Materiallar</h4>
                  <div id="detail-modal-materials" class="product-materials-row"></div>
                </div>

                <div class="detail-section">
                  <h4>🎯 Qo'llanilish Sohalari</h4>
                  <div id="detail-modal-usecases" class="product-materials-row"></div>
                </div>

                <div class="shop-modal-actions" style="margin-top: 1rem;">
                  <button type="button" class="btn-submit-shop-order" id="btn-detail-order-now">
                    🖨️ Chop Etishga Buyurtma Berish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 🔐 ADMIN PIN MODAL -->
        <div class="shop-modal-backdrop" id="shop-pin-modal" style="display: none;">
          <div class="shop-modal-card pin-card">
            <div class="pin-badge">👑 NARX BOSHQARUVI</div>
            <h3>Admin PIN Kodini Kiriting</h3>
            <p>Model narxlarini tahrirlash huquqi faqat maxfiy PIN kodga ega bosh administratorga berilgan.</p>
            
            <form class="shop-pin-form" id="shop-pin-form" onsubmit="return false;">
              <input type="password" id="shop-pin-input" placeholder="6 xonali PIN" maxlength="10" autofocus>
              <div class="pin-error" id="shop-pin-error" style="display: none;">
                🚫 Noto‘g‘ri PIN kod!
              </div>
              <div class="pin-actions">
                <button type="submit" class="btn-submit-pin">🔓 Kirish</button>
                <button type="button" class="btn-cancel-pin" id="btn-cancel-shop-pin">Bekor Qilish</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `,this.attachEventListeners()}attachEventListeners(){this.mount.querySelectorAll(".cat-pill").forEach(k=>{k.addEventListener("click",()=>{this.currentCategory=k.getAttribute("data-cat")||"all",this.render()})});const e=this.mount.querySelector("#shop-search-input");e&&e.addEventListener("input",k=>{this.searchQuery=k.target.value,this.render();const D=this.mount.querySelector("#shop-search-input");D&&(D.focus(),D.selectionStart=D.selectionEnd=D.value.length)});const i=this.mount.querySelector("#btn-clear-search");i&&i.addEventListener("click",()=>{this.searchQuery="",this.render()});const n=this.mount.querySelector("#btn-reset-filters");n&&n.addEventListener("click",()=>{this.searchQuery="",this.currentCategory="all",this.render()});const s=this.mount.querySelector("#btn-shop-pin-login"),r=this.mount.querySelector("#shop-pin-modal"),o=this.mount.querySelector("#shop-pin-form"),l=this.mount.querySelector("#shop-pin-input"),c=this.mount.querySelector("#shop-pin-error"),d=this.mount.querySelector("#btn-cancel-shop-pin");s&&r&&s.addEventListener("click",()=>{r.style.display="flex",l&&(l.value="",l.focus()),c&&(c.style.display="none")}),o&&l&&o.addEventListener("submit",()=>{const k=l.value.trim().replace(/\s+/g,"");k==="083010"||k.toLowerCase()==="any3dcubicc"?(sessionStorage.setItem("any3d_admin_auth","083010"),this.isAdmin=!0,r&&(r.style.display="none"),this.render()):(c&&(c.style.display="block",c.textContent="🚫 Noto‘g‘ri PIN kod! Iltimos, to‘g‘ri kodni kiriting."),l.focus(),l.select())}),d&&r&&d.addEventListener("click",()=>{r.style.display="none"});const h=this.mount.querySelectorAll("[data-edit-id]"),p=this.mount.querySelector("#price-edit-modal"),m=this.mount.querySelector("#edit-price-form"),g=this.mount.querySelector("#btn-close-edit"),v=this.mount.querySelector("#btn-cancel-edit");h.forEach(k=>{k.addEventListener("click",()=>{const D=k.getAttribute("data-edit-id"),j=this.products.find(et=>et.id===D);j&&p&&(this.activeProductForEdit=j,this.mount.querySelector("#edit-prod-id").value=j.id,this.mount.querySelector("#edit-prod-title").textContent=`Narxni Tahrirlash: ${j.name}`,this.mount.querySelector("#edit-input-name").value=j.name,this.mount.querySelector("#edit-input-uzs").value=j.priceUZS,this.mount.querySelector("#edit-input-usd").value=j.priceUSD||Math.round(j.priceUZS/12700),this.mount.querySelector("#edit-input-badge").value=j.badge||"",this.mount.querySelector("#edit-select-stock").value=j.inStock?"true":"false",this.mount.querySelector("#edit-input-stock-status").value=j.stockStatus||(j.inStock?"Ustaxonada tayyor":"Tayyorlanish: 24 soat"),p.style.display="flex")})}),m&&m.addEventListener("submit",async()=>{const k=this.mount.querySelector("#edit-prod-id").value,D=this.mount.querySelector("#edit-input-name").value,j=Number(this.mount.querySelector("#edit-input-uzs").value),et=Number(this.mount.querySelector("#edit-input-usd").value),tt=this.mount.querySelector("#edit-input-badge").value,st=this.mount.querySelector("#edit-select-stock").value==="true",mt=this.mount.querySelector("#edit-input-stock-status").value,ht=this.products.findIndex(R=>R.id===k);ht!==-1&&(this.products[ht]={...this.products[ht],name:D,priceUZS:j,priceUSD:et,badge:tt,inStock:st,stockStatus:mt},localStorage.setItem("cached_models_v5",JSON.stringify(this.products)));const _t=Nm&&"083010"||"083010";try{await fetch(Ce("/api/update-product"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:_t,productId:k,name:D,priceUZS:j,priceUSD:et,badge:tt,inStock:st,stockStatus:mt})})}catch(R){console.warn("Serverga narx saqlashda ogohlantirish:",R.message)}p&&(p.style.display="none"),this.render()}),g&&p&&g.addEventListener("click",()=>{p.style.display="none"}),v&&p&&v.addEventListener("click",()=>{p.style.display="none"});const u=this.mount.querySelector("#product-detail-modal"),f=this.mount.querySelector("#btn-close-detail"),A=this.mount.querySelector("#btn-detail-order-now"),_=this.mount.querySelector("#btn-gallery-prev"),S=this.mount.querySelector("#btn-gallery-next"),O=this.mount.querySelector("#detail-modal-img"),P=this.mount.querySelector("#detail-img-badge"),C=this.mount.querySelector("#detail-img-caption"),X=this.mount.querySelector("#detail-modal-thumbs");let b=null,M=[],F=[],V=0;const at=()=>{!M.length||!O||(O.src=M[V],P&&(P.textContent=`${V+1} / ${M.length}`),C&&(C.textContent=F[V]||`Rasm ${V+1}`),X&&X.querySelectorAll(".detail-thumb").forEach((D,j)=>{j===V?D.classList.add("active"):D.classList.remove("active")}))},U=k=>{const D=this.products.find(j=>j.id===k);if(D&&u){b=D,M=D.images&&D.images.length>0?D.images:[D.image],F=D.imageCaptions||["🖨️ 3D Chop etilgan asosiy namuna","📐 O‘lchami va bo‘g‘inlari (Yaqindan ko‘rinishi)","⚙️ Ishlatish / interyer / rang varianti"],V=0,this.mount.querySelector("#detail-modal-icon").textContent=D.icon||"📦",this.mount.querySelector("#detail-modal-name").textContent=D.name,this.mount.querySelector("#detail-modal-category").textContent=D.categoryTitle||"3D Model",this.mount.querySelector("#detail-modal-desc").textContent=D.description||D.subtitle||"",this.mount.querySelector("#detail-modal-dim").textContent=D.dimensions||"Standart",this.mount.querySelector("#detail-modal-time").textContent=D.printTime||"4-6 soat",this.mount.querySelector("#detail-modal-diff").textContent=D.difficulty||"O'rta",this.mount.querySelector("#detail-modal-price").textContent=this.formatPrice(D.priceUZS,D.priceUSD);const j=this.mount.querySelector("#detail-modal-specs");j&&(j.innerHTML=(D.specs||[]).map(st=>`<li>• ${st}</li>`).join(""));const et=this.mount.querySelector("#detail-modal-materials");et&&(et.innerHTML=(D.materials||["PLA+","PETG"]).map(st=>`<span class="material-chip">${st}</span>`).join(""));const tt=this.mount.querySelector("#detail-modal-usecases");tt&&(tt.innerHTML=(D.useCases||["Sovg'a","Dekor"]).map(st=>`<span class="material-chip usecase-chip">${st}</span>`).join("")),X&&(X.innerHTML=M.map((st,mt)=>`
            <div class="detail-thumb ${mt===0?"active":""}" data-thumb-idx="${mt}">
              <img src="${st}" alt="Thumbnail ${mt+1}" />
            </div>
          `).join(""),X.querySelectorAll(".detail-thumb").forEach(st=>{st.addEventListener("click",()=>{V=parseInt(st.getAttribute("data-thumb-idx"),10)||0,at()})})),at(),u.style.display="flex"}};this.mount.querySelectorAll("[data-detail-id]").forEach(k=>{k.addEventListener("click",D=>{D.stopPropagation(),U(k.getAttribute("data-detail-id"))})}),this.mount.querySelectorAll("[data-detail-trigger]").forEach(k=>{k.addEventListener("click",()=>{U(k.getAttribute("data-detail-trigger"))})}),_&&_.addEventListener("click",k=>{k.stopPropagation(),V=(V-1+M.length)%M.length,at()}),S&&S.addEventListener("click",k=>{k.stopPropagation(),V=(V+1)%M.length,at()}),f&&u&&f.addEventListener("click",()=>{u.style.display="none"}),A&&u&&A.addEventListener("click",()=>{if(u.style.display="none",b){const k=this.mount.querySelector(`[data-order-id="${b.id}"]`);k&&k.click()}});const q=this.mount.querySelectorAll("[data-order-id]"),N=this.mount.querySelector("#shop-order-modal"),W=this.mount.querySelector("#shop-order-form"),K=this.mount.querySelector("#shop-order-success"),it=this.mount.querySelector("#btn-close-order"),w=this.mount.querySelector("#btn-cancel-shop-order"),E=this.mount.querySelector("#btn-succ-close");q.forEach(k=>{k.addEventListener("click",()=>{const D=k.getAttribute("data-order-id"),j=this.products.find(et=>et.id===D);if(j&&N){this.activeProductForOrder=j,this.mount.querySelector("#order-hidden-prod-id").value=j.id,this.mount.querySelector("#order-modal-prod-name").textContent=j.name,this.mount.querySelector("#order-modal-prod-price").textContent=`Chop etish narxi: ${this.formatPrice(j.priceUZS,j.priceUSD)}`,this.mount.querySelector("#summary-prod-name").textContent=j.name,this.mount.querySelector("#summary-prod-price").textContent=this.formatPrice(j.priceUZS,j.priceUSD);const et=this.mount.querySelector("#order-modal-img-preview"),tt=this.mount.querySelector("#summary-prod-img");j.image&&tt&&et?(tt.src=j.image,et.style.display="block"):et&&(et.style.display="none"),W&&(W.style.display="block"),K&&(K.style.display="none"),N.style.display="flex"}})}),W&&W.addEventListener("submit",async k=>{var rt,Q,xt,gt,x;k&&k.preventDefault&&k.preventDefault();const D=this.activeProductForOrder;if(!D)return;const j=(((rt=this.mount.querySelector("#shop-cust-name"))==null?void 0:rt.value)||"").trim()||"Mijoz",et=(((Q=this.mount.querySelector("#shop-cust-phone"))==null?void 0:Q.value)||"").trim();if(et.replace(/\D/g,"").length<9){alert("Iltimos, telefon raqamingizni to‘liq kiriting (masalan: +998 90 123 45 67).");return}const st=W.querySelector('button[type="submit"]');if(st&&st.disabled)return;st&&(st.disabled=!0,st.textContent="⏳ Buyurtma qabul qilinmoqda...");const mt=((xt=this.mount.querySelector("#shop-cust-tg"))==null?void 0:xt.value)||"",ht=((gt=this.mount.querySelector("#shop-cust-addr"))==null?void 0:gt.value)||"",_t=((x=this.mount.querySelector("#shop-cust-notes"))==null?void 0:x.value)||"",R="#3D-"+Math.floor(1e3+Math.random()*9e3),ct={orderId:R,productId:D.id,productName:D.name,priceUZS:D.priceUZS,priceUSD:D.priceUSD,customerName:j,customerPhone:et,customerTelegram:mt,deliveryAddress:ht,orderNotes:_t};let G=!1;try{(await fetch(Ce("/api/shop-order"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ct)})).ok&&(G=!0)}catch(y){console.warn("Shop-order API error:",y.message)}if(!G){const y="9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI",B="8929216064";{const ot=et.replace(/[^0-9+]/g,""),lt=`
💎 <b>CREALITY 3D MODELINI CHOP ETISHGA BUYURTMA!</b>

🆔 <b>Buyurtma ID:</b> <code>${R}</code>
📦 <b>Model:</b> ${D.name}
💰 <b>Chop etish narxi:</b> <b>${this.formatPrice(D.priceUZS,D.priceUSD)}</b>
👤 <b>Mijoz:</b> ${j}
📞 <b>Telefon:</b> <a href="tel:${ot}">${et}</a>
${mt?`💬 <b>Telegram:</b> ${mt}
`:""}${ht?`📍 <b>Manzil:</b> ${ht}
`:""}${_t?`📝 <b>Izoh / Rang:</b> <i>"${_t}"</i>
`:""}
⚡ <i>Holat: 🟡 Yangi model buyurtmasi — dastgohni tayyorlang!</i>
            `.trim(),St={inline_keyboard:[[{text:"💬 Mijoz Telegrami",url:mt?`https://t.me/${mt.replace(/[@\s]/g,"")}`:ot?`https://t.me/+${ot.replace("+","")}`:"https://t.me/Any3dCubic_bot"}]]};await fetch(`https://api.telegram.org/bot${y}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:B,text:lt,parse_mode:"HTML",reply_markup:St})}).catch(()=>{})}}Rs({particleCount:120,spread:70,origin:{y:.6}}),W&&(W.style.display="none"),K&&(this.mount.querySelector("#shop-succ-num").textContent=R,K.style.display="block")}),it&&N&&it.addEventListener("click",()=>{N.style.display="none"}),w&&N&&w.addEventListener("click",()=>{N.style.display="none"}),E&&N&&E.addEventListener("click",()=>{N.style.display="none"});const $=this.mount.querySelector("#btn-add-product");$&&p&&$.addEventListener("click",()=>{const k="custom-model-"+Date.now();this.mount.querySelector("#edit-prod-id").value=k,this.mount.querySelector("#edit-prod-title").textContent="Yangi 3D Model Qo‘shish",this.mount.querySelector("#edit-input-name").value="",this.mount.querySelector("#edit-input-uzs").value="50000",this.mount.querySelector("#edit-input-usd").value="4",this.mount.querySelector("#edit-input-badge").value="Yangi Model",this.mount.querySelector("#edit-select-stock").value="true",this.mount.querySelector("#edit-input-stock-status").value="Ustaxonada tayyor",p.style.display="flex"})}}class zm{constructor(){this.appContainer=document.querySelector("#app"),this.currency="UZS",this.isAdmin=this.checkAdminAuth();const t=new URLSearchParams(window.location.search);this.isAdmin&&t.get("admin")?this.currentView="admin":t.get("view")==="shop"||t.get("shop")?this.currentView="shop":this.currentView="configurator",this.threeStudio=null,this.configurator=null,this.pitchDeck=null,this.orderTracker=null,this.adminCRM=null,this.crealityShop=null,this.latestOrder=null,this.init()}checkAdminAuth(){var s,r,o;const t=(o=(r=(s=window.Telegram)==null?void 0:s.WebApp)==null?void 0:r.initDataUnsafe)==null?void 0:o.user;if(t){const l=(t.username||"").toLowerCase();if(t.id===8929216064||l==="any3dcubicc")return sessionStorage.setItem("any3d_admin_auth","083010"),!0}const e=new URLSearchParams(window.location.search),i=(e.get("pin")||e.get("admin")||"").trim();if(i==="083010"||i.toLowerCase()==="any3dcubicc")return sessionStorage.setItem("any3d_admin_auth","083010"),!0;const n=sessionStorage.getItem("any3d_admin_auth");return n==="083010"||n==="any3DCubicc"}init(){this.initTelegramWebApp(),this.renderShell(),this.mountView(),this.attachNavListeners()}initTelegramWebApp(){var t;if((t=window.Telegram)!=null&&t.WebApp)try{const e=window.Telegram.WebApp;e.ready(),e.expand(),typeof e.requestFullscreen=="function"&&e.requestFullscreen(),typeof e.enableClosingConfirmation=="function"&&e.enableClosingConfirmation(),typeof e.setHeaderColor=="function"&&e.setHeaderColor("#090e1a"),typeof e.setBackgroundColor=="function"&&e.setBackgroundColor("#090e1a")}catch(e){console.warn("Telegram WebApp init error:",e)}}renderShell(){this.appContainer.innerHTML=`
      <!-- Global Navigatsiya Paneli -->
      <nav class="app-navbar">
        <div class="brand-group" id="nav-brand">
          <div class="brand-icon">
            <img src="./logo_nav.png" alt="Any3DCubic" class="nav-logo-img">
          </div>
          <div class="brand-text">
            <h1>Toshkent 3D Ustaxonasi</h1>
            <div class="brand-sub">
              <span>●</span> Tezkor Mahalliy 3D Bosma & Prototip Xizmati
            </div>
          </div>
        </div>

        <!-- Rejimlar Almashinuvi (5 ta to'liq rejim) -->
        <div class="mode-switcher-nav">
          <button type="button" class="nav-tab-btn ${this.currentView==="configurator"?"active":""}" data-view="configurator" id="tab-config">
            <span class="tab-icon">🖨️</span>
            <span class="tab-text-full">3D Bosma Studiya</span>
            <span class="tab-text-short">3D Studiya</span>
          </button>
          <button type="button" class="nav-tab-btn ${this.currentView==="shop"?"active-shop":""}" data-view="shop" id="tab-shop">
            <span class="tab-icon">💎</span>
            <span class="tab-text-full">Creality 3D Modellar</span>
            <span class="tab-text-short">3D Modellar</span>
          </button>
          <button type="button" class="nav-tab-btn ${this.currentView==="pitch"?"active-pitch":""}" data-view="pitch" id="tab-pitch">
            <span class="tab-icon">💼</span>
            <span class="tab-text-full">Tanlov Pitchi & Moliyaviy Model</span>
            <span class="tab-text-short">Pitch</span>
          </button>
          <button type="button" class="nav-tab-btn ${this.currentView==="tracker"?"active":""}" data-view="tracker" id="tab-tracker">
            <span class="tab-icon">📦</span>
            <span class="tab-text-full">Buyurtmani Kuzatish & Chat</span>
            <span class="tab-text-short">Kuzatuv</span>
          </button>
          <button type="button" class="nav-tab-btn ${this.currentView==="admin"?"active-admin":""} ${this.isAdmin?"admin-verified":""}" data-view="admin" id="tab-admin">
            <span class="tab-icon">${this.isAdmin?"👑":"🛡️"}</span>
            <span class="tab-text-full">${this.isAdmin?"👑 Admin CRM (@any3DCubicc)":"Admin CRM"}</span>
            <span class="tab-text-short">${this.isAdmin?"👑 Admin":"Admin"}</span>
          </button>
        </div>

        <!-- O'ng Tomondagi Qo'shimcha Tugmalar -->
        <div class="header-right-tools">
          <button type="button" class="btn-location-pill" id="btn-open-location" title="Ustaxona lokatsiyasini xaritada ochish (Google / Yandex Maps)">
            <span class="loc-pin">📍</span>
            <span class="loc-name">Sergeli, Toshkent</span>
            <span class="loc-tag">Xarita</span>
          </button>
          <button type="button" class="btn-fullscreen-toggle" id="btn-fullscreen" title="Brauzer tepasini yashirish (To'liq ekran)">
            ⛶ <span>To‘liq Ekran</span>
          </button>
          <div class="currency-toggle">
            <button type="button" class="curr-btn ${this.currency==="UZS"?"active":""}" data-curr="UZS">SO‘M</button>
            <button type="button" class="curr-btn ${this.currency==="USD"?"active":""}" data-curr="USD">USD</button>
          </div>
        </div>
      </nav>

      <!-- Asosiy Dinamik Maydon -->
      <main id="main-content"></main>

      <!-- 📍 USTAXONA LOKATSIYASI VA XARITA MODALI -->
      <div class="location-modal-backdrop" id="location-modal" style="display: none;">
        <div class="location-modal-card">
          <div class="loc-modal-header">
            <div class="loc-modal-title-group">
              <span class="loc-modal-icon">📍</span>
              <div>
                <h3>Any3D Ustaxonasi Manzili & Lokatsiya</h3>
                <p>Toshkent shahri, Sergeli tumani</p>
              </div>
            </div>
            <button type="button" class="loc-modal-close" id="btn-close-location">✕</button>
          </div>

          <div class="loc-modal-body">
            <!-- Vizual Kiber Xarita Qutisi -->
            <div class="loc-visual-map-box">
              <div class="loc-map-glow"></div>
              <div class="loc-map-pin-pulse">
                <span class="pin-wave"></span>
                <div class="pin-badge">🖨️ Any3D Ustaxonasi</div>
              </div>
              <div class="loc-map-coordinates">41.235141° N, 69.207236° E • Sergeli, Yuqori Darxon</div>
            </div>

            <!-- Aniq Manzil Ma'lumotlari -->
            <div class="loc-address-details">
              <div class="loc-row">
                <span class="loc-k">🏬 Aniq Manzil:</span>
                <strong class="loc-v">Toshkent shahri, Sergeli tumani, Yuqori Darxon mahallasi, Navro‘z 6-tor ko‘chasi, 3-uy</strong>
              </div>
              <div class="loc-row">
                <span class="loc-k">🎯 Mo‘ljal:</span>
                <span class="loc-v">Yuqori Darxon mahallasi, Navro‘z 6-tor ko‘chasi (41.235141, 69.207236)</span>
              </div>
              <div class="loc-row">
                <span class="loc-k">⏱️ Ish Vaqti:</span>
                <span class="loc-v">Dushanba – Shanba: 09:00 dan 20:00 gacha (Yakshanba: Navbatdagi buyurtmalar)</span>
              </div>
              <div class="loc-row">
                <span class="loc-k">📞 Aloqa:</span>
                <strong class="loc-v"><a href="https://t.me/any3DCubicc" target="_blank">@any3DCubicc (Bosh Admin)</a></strong>
              </div>
            </div>

            <!-- Xaritalar Tugmalari -->
            <div class="loc-action-buttons">
              <a href="https://www.google.com/maps/dir/?api=1&destination=41.235141,69.207236" target="_blank" class="btn-map-app google-map-btn">
                <span class="map-icon">🗺️</span>
                <div class="map-btn-meta">
                  <strong>Google Maps orqali ochish</strong>
                  <small>Marshrut chizish va navigatsiya</small>
                </div>
              </a>

              <a href="https://yandex.uz/maps/?rtext=~41.235141,69.207236&rtt=auto" target="_blank" class="btn-map-app yandex-map-btn">
                <span class="map-icon">📍</span>
                <div class="map-btn-meta">
                  <strong>Yandex Maps / Go orqali ochish</strong>
                  <small>Avtomobil va piyoda navigatsiyasi</small>
                </div>
              </a>

              <a href="https://maps.apple.com/?daddr=41.235141,69.207236" target="_blank" class="btn-map-app apple-map-btn">
                <span class="map-icon">🍏</span>
                <div class="map-btn-meta">
                  <strong>Apple Maps orqali ochish</strong>
                  <small>iPhone / iPad navigatsiyasi</small>
                </div>
              </a>

              <button type="button" class="btn-copy-address" id="btn-copy-loc-addr">
                📋 Manzilni Nusxalash
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 🔒 ADMIN AUTHENTICATION GATE MODAL (@any3DCubicc) -->
      <div class="admin-auth-backdrop" id="admin-auth-modal" style="display: none;">
        <div class="admin-auth-card">
          <div class="auth-card-badge">👑 FAQAT @any3DCubicc UCHUN</div>
          <h3 class="auth-card-title">Bosh Administrator Portali</h3>
          <p class="auth-card-desc">
            Ushbu bo‘lim faqat ustaxona rahbari <b>@any3DCubicc</b> uchun himoyalangan.
            Barcha buyurtmalarni tasdiqlash, cheklarni tekshirish va rad etish vakolati faqat sizda mavjud.
          </p>

          <div class="auth-tg-box">
            <span class="auth-tg-label">Telegram orqali to‘g‘ridan-to‘g‘ri kirish:</span>
            <a href="https://t.me/Any3dCubic_bot?start=admin" target="_blank" class="btn-tg-auth-direct">
              🤖 Telegram Botda Ochish (@any3DCubicc)
            </a>
          </div>

          <div class="auth-divider"><span>yoki maxfiy PIN kodni kiriting</span></div>

          <form class="auth-pin-form" id="admin-pin-form" onsubmit="return false;">
            <div class="auth-input-group">
              <input type="password" id="admin-pin-input" placeholder="6 xonali PIN kod" inputmode="numeric" maxlength="10" autocomplete="current-password" autofocus>
              <button type="button" class="btn-toggle-pin-peek" id="btn-toggle-pin-peek" title="PIN kodni ko‘rsatish/yashirish" style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.15); color: #fff; padding: 0 0.85rem; border-radius: 8px; cursor: pointer; font-size: 0.95rem;">👁️</button>
              <button type="submit" class="btn-submit-pin" id="btn-submit-pin">🔓 Kirish</button>
            </div>
            <div class="auth-error-msg" id="admin-auth-error" style="display: none;">
              🚫 Noto‘g‘ri PIN-kod! Iltimos, to‘g‘ri 6 xonali kodni kiriting.
            </div>
          </form>

          <div class="auth-footer-actions">
            <button type="button" class="btn-cancel-auth" id="btn-cancel-auth">
              ✕ Bekor qilish (Saytga qaytish)
            </button>
          </div>
        </div>
      </div>
    `}mountView(){const t=this.appContainer.querySelector("#main-content");if(!t)return;if(t.innerHTML="",this.appContainer.querySelectorAll(".nav-tab-btn").forEach(i=>{const n=i.getAttribute("data-view");i.classList.remove("active","active-pitch","active-admin","active-shop"),n===this.currentView&&(n==="pitch"?i.classList.add("active-pitch"):n==="admin"?i.classList.add("active-admin"):n==="shop"?i.classList.add("active-shop"):i.classList.add("active"))}),this.currentView==="configurator"){const i=document.createElement("div");if(t.appendChild(i),!this.threeStudio){const n=document.createElement("div");this.threeStudio=new Cm(n,{initialMaterial:"PETG",initialColor:"#ff6600"})}this.configurator=new km(i,this.threeStudio,n=>{this.latestOrder=n,this.currentView="tracker",this.mountView()}),this.configurator.setCurrency(this.currency),setTimeout(()=>{this.threeStudio&&this.threeStudio.onResize()},50)}else if(this.currentView==="shop"){const i=document.createElement("div");t.appendChild(i),this.crealityShop=new Om(i,{currency:this.currency,onViewChange:n=>{this.currentView=n,this.mountView()}})}else if(this.currentView==="pitch"){const i=document.createElement("div");t.appendChild(i),this.pitchDeck=new Dm(i,()=>{this.currentView="configurator",this.mountView()})}else if(this.currentView==="tracker"){const i=document.createElement("div");t.appendChild(i),this.orderTracker=new Um(i,this.latestOrder,()=>{this.currentView="configurator",this.mountView()})}else if(this.currentView==="admin"){const i=document.createElement("div");t.appendChild(i),this.adminCRM=new Im(i,{onViewChange:n=>{this.currentView=n,this.mountView()}})}}attachNavListeners(){const t=this.appContainer.querySelector(".mode-switcher-nav");t&&t.addEventListener("click",v=>{const u=v.target.closest(".nav-tab-btn");if(u){const f=u.getAttribute("data-view");if(f==="admin"&&!this.checkAdminAuth()){const A=this.appContainer.querySelector("#admin-auth-modal"),_=this.appContainer.querySelector("#admin-pin-input"),S=this.appContainer.querySelector("#admin-auth-error");A&&(A.style.display="flex",S&&(S.style.display="none"),_&&(_.value="",_.focus()));return}f&&f!==this.currentView&&(this.currentView=f,this.mountView(),window.scrollTo({top:0,behavior:"smooth"}))}});const e=this.appContainer.querySelector("#admin-pin-form"),i=this.appContainer.querySelector("#admin-pin-input"),n=this.appContainer.querySelector("#admin-auth-error"),s=this.appContainer.querySelector("#admin-auth-modal"),r=this.appContainer.querySelector("#btn-cancel-auth");e&&i&&e.addEventListener("submit",()=>{const v=i.value.trim().replace(/\s+/g,"");v==="083010"||v.toLowerCase()==="any3dcubicc"?(sessionStorage.setItem("any3d_admin_auth","083010"),this.isAdmin=!0,s&&(s.style.display="none"),this.currentView="admin",this.renderShell(),this.mountView(),this.attachNavListeners()):(n&&(n.style.display="block",n.textContent="🚫 Noto‘g‘ri PIN-kod! Iltimos, to‘g‘ri 6 xonali kodni kiriting."),i.focus(),i.select())});const o=this.appContainer.querySelector("#btn-toggle-pin-peek");o&&i&&o.addEventListener("click",()=>{i.type==="password"?(i.type="text",o.textContent="🙈"):(i.type="password",o.textContent="👁️")}),r&&s&&r.addEventListener("click",()=>{s.style.display="none"});const l=this.appContainer.querySelector("#nav-brand");l&&l.addEventListener("click",()=>{this.currentView="configurator",this.mountView(),window.scrollTo({top:0,behavior:"smooth"})});const c=this.appContainer.querySelector(".currency-toggle");c&&c.addEventListener("click",v=>{const u=v.target.closest(".curr-btn");if(u){const f=u.getAttribute("data-curr");f&&f!==this.currency&&(this.currency=f,c.querySelectorAll(".curr-btn").forEach(_=>_.classList.remove("active")),u.classList.add("active"),this.currentView==="configurator"&&this.configurator&&this.configurator.setCurrency(f),this.currentView==="shop"&&this.crealityShop&&this.crealityShop.setCurrency(f))}});const d=this.appContainer.querySelector("#btn-open-location"),h=this.appContainer.querySelector("#location-modal"),p=this.appContainer.querySelector("#btn-close-location"),m=this.appContainer.querySelector("#btn-copy-loc-addr");d&&h&&d.addEventListener("click",()=>{h.style.display="flex"}),p&&h&&p.addEventListener("click",()=>{h.style.display="none"}),h&&h.addEventListener("click",v=>{v.target===h&&(h.style.display="none")}),m&&m.addEventListener("click",()=>{navigator.clipboard.writeText("Toshkent shahri, Sergeli tumani, Yuqori Darxon mahallasi, Navro‘z 6-tor ko‘chasi, 3-uy (Any3D Ustaxonasi, Lokatsiya: 41.235141, 69.207236)").then(()=>{m.textContent="✅ Manzil nusxalandi!",setTimeout(()=>{m.textContent="📋 Manzilni Nusxalash"},2500)})});const g=this.appContainer.querySelector("#btn-fullscreen");g&&(g.addEventListener("click",()=>{var v;if((v=window.Telegram)!=null&&v.WebApp)try{window.Telegram.WebApp.expand(),typeof window.Telegram.WebApp.requestFullscreen=="function"&&window.Telegram.WebApp.requestFullscreen()}catch{}document.fullscreenElement?(document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),g.innerHTML="⛶ <span>To‘liq Ekran</span>"):(document.documentElement.requestFullscreen().catch(()=>{}),g.innerHTML="🗗 <span>Oddiy Ekran</span>")}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?g.innerHTML="🗗 <span>Oddiy Ekran</span>":g.innerHTML="⛶ <span>To‘liq Ekran</span>"}))}}new zm;
