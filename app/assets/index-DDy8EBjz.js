(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="160",Di={ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cl=0,Ka=1,Rl=2,Io=1,ko=2,Qe=3,fi=0,Te=1,Be=2,hi=0,en=1,Ja=2,Qa=3,tr=4,Pl=5,Mi=100,Ll=101,Ul=102,er=103,ir=104,Dl=200,Il=201,kl=202,Nl=203,ma=204,ga=205,Ol=206,zl=207,Fl=208,Bl=209,Hl=210,Gl=211,Vl=212,ql=213,Wl=214,Xl=0,$l=1,Yl=2,hs=3,jl=4,Zl=5,Kl=6,Jl=7,No=0,Ql=1,tc=2,ui=0,ec=1,ic=2,nc=3,sc=4,ac=5,rc=6,Oo=300,sn=301,an=302,va=303,ya=304,ys=306,_a=1e3,He=1001,ba=1002,xe=1003,nr=1004,Cs=1005,De=1006,oc=1007,Tn=1008,pi=1009,lc=1010,cc=1011,La=1012,zo=1013,ci=1014,di=1015,En=1016,Fo=1017,Bo=1018,Ei=1020,dc=1021,Ge=1023,hc=1024,uc=1025,Ai=1026,rn=1027,pc=1028,Ho=1029,fc=1030,Go=1031,Vo=1033,Rs=33776,Ps=33777,Ls=33778,Us=33779,sr=35840,ar=35841,rr=35842,or=35843,qo=36196,lr=37492,cr=37496,dr=37808,hr=37809,ur=37810,pr=37811,fr=37812,mr=37813,gr=37814,vr=37815,yr=37816,_r=37817,br=37818,xr=37819,Sr=37820,Mr=37821,Ds=36492,Tr=36494,Er=36495,mc=36283,Ar=36284,wr=36285,Cr=36286,Wo=3e3,wi=3001,gc=3200,vc=3201,Xo=0,yc=1,Ne="",fe="srgb",ii="srgb-linear",Ua="display-p3",_s="display-p3-linear",us="linear",Kt="srgb",ps="rec709",fs="p3",ki=7680,Rr=519,_c=512,bc=513,xc=514,$o=515,Sc=516,Mc=517,Tc=518,Ec=519,Pr=35044,Lr="300 es",xa=1035,ei=2e3,ms=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yn=Math.PI/180,Sa=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function Ac(s,t){return(s%t+t)%t}function Is(s,t,e){return(1-e)*s+e*t}function Ur(s){return(s&s-1)===0&&s!==0}function Ma(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wc={DEG2RAD:yn};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,n,a,r,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c)}set(t,e,i,n,a,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=n,d[2]=o,d[3]=e,d[4]=a,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],m=i[5],g=i[8],v=n[0],p=n[3],f=n[6],A=n[1],_=n[4],M=n[7],D=n[2],R=n[5],C=n[8];return a[0]=r*v+o*A+l*D,a[3]=r*p+o*_+l*R,a[6]=r*f+o*M+l*C,a[1]=c*v+d*A+h*D,a[4]=c*p+d*_+h*R,a[7]=c*f+d*M+h*C,a[2]=u*v+m*A+g*D,a[5]=u*p+m*_+g*R,a[8]=u*f+m*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*r*d-e*o*c-i*a*d+i*o*l+n*a*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*r-o*c,u=o*l-d*a,m=c*a-r*l,g=e*h+i*u+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(n*c-d*i)*v,t[2]=(o*i-n*r)*v,t[3]=u*v,t[4]=(d*e-n*l)*v,t[5]=(n*a-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(r*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ks.makeScale(t,e)),this}rotate(t){return this.premultiply(ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new Wt;function Yo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cc(){const s=gs("canvas");return s.style.display="block",s}const Dr={};function _n(s){s in Dr||(Dr[s]=!0,console.warn(s))}const Ir=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kr=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Un={[ii]:{transfer:us,primaries:ps,toReference:s=>s,fromReference:s=>s},[fe]:{transfer:Kt,primaries:ps,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_s]:{transfer:us,primaries:fs,toReference:s=>s.applyMatrix3(kr),fromReference:s=>s.applyMatrix3(Ir)},[Ua]:{transfer:Kt,primaries:fs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(kr),fromReference:s=>s.applyMatrix3(Ir).convertLinearToSRGB()}},Rc=new Set([ii,_s]),Zt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Rc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Un[t].toReference,n=Un[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Un[s].primaries},getTransfer:function(s){return s===Ne?us:Un[s].transfer}};function nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class jo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=gs("canvas")),Ni.width=t.width,Ni.height=t.height;const i=Ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=nn(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(nn(e[i]/255)*255):e[i]=nn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pc=0;class Zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=ln(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Os(n[r].image)):a.push(Os(n[r]))}else a=Os(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Os(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lc=0;class Ce extends Ui{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=He,n=He,a=De,r=Tn,o=Ge,l=pi,c=Ce.DEFAULT_ANISOTROPY,d=Ne){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=ln(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(_n("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===wi?fe:Ne),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _n("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?wi:Wo}set encoding(t){_n("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===wi?fe:Ne}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Oo;Ce.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,n=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(m+1)/2,D=(f+1)/2,R=(d+u)/4,C=(h+v)/4,H=(g+p)/4;return _>M&&_>D?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=R/i,a=C/i):M>D?M<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(M),i=R/n,a=H/n):D<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(D),i=C/a,n=H/a),this.set(i,n,a,e),this}let A=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(h-v)/A,this.z=(u-d)/A,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends Ui{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(_n("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wi?fe:Ne),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ce(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Uc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ko extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xe,this.minFilter=xe,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xe,this.minFilter=xe,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let l=i[n+0],c=i[n+1],d=i[n+2],h=i[n+3];const u=a[r+0],m=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==u||c!==m||d!==g){let p=1-o;const f=l*u+c*m+d*g+h*v,A=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const D=Math.sqrt(_),R=Math.atan2(D,f*A);p=Math.sin(p*R)/D,o=Math.sin(o*R)/D}const M=o*A;if(l=l*p+u*M,c=c*p+m*M,d=d*p+g*M,h=h*p+v*M,p===1-o){const D=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=D,c*=D,d*=D,h*=D}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],d=i[n+3],h=a[r],u=a[r+1],m=a[r+2],g=a[r+3];return t[e]=o*g+d*h+l*m-c*u,t[e+1]=l*g+d*u+c*h-o*m,t[e+2]=c*g+d*m+o*u-l*h,t[e+3]=d*g-o*h-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(n/2),h=o(a/2),u=l(i/2),m=l(n/2),g=l(a/2);switch(r){case"XYZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"YXZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"ZXY":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"ZYX":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"YZX":this._x=u*d*h+c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h-u*m*g;break;case"XZY":this._x=u*d*h-c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=i+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(r-n)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(a+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(a-c)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(r-n)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+r*o+n*c-a*l,this._y=n*d+r*l+a*o-i*c,this._z=a*d+r*c+i*l-n*o,this._w=r*d-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=r*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),d=2*(o*e-a*n),h=2*(a*i-r*e);return this.x=e+l*c+r*h-o*d,this.y=i+l*d+o*c-a*h,this.z=n+l*h+a*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new N,Nr=new Ri;class cn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Oe):Oe.fromBufferAttribute(a,r),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dn.copy(i.boundingBox)),Dn.applyMatrix4(t.matrixWorld),this.union(Dn)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fn),In.subVectors(this.max,fn),Oi.subVectors(t.a,fn),zi.subVectors(t.b,fn),Fi.subVectors(t.c,fn),ni.subVectors(zi,Oi),si.subVectors(Fi,zi),vi.subVectors(Oi,Fi);let e=[0,-ni.z,ni.y,0,-si.z,si.y,0,-vi.z,vi.y,ni.z,0,-ni.x,si.z,0,-si.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-si.y,si.x,0,-vi.y,vi.x,0];return!Fs(e,Oi,zi,Fi,In)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,Oi,zi,Fi,In))?!1:(kn.crossVectors(ni,si),e=[kn.x,kn.y,kn.z],Fs(e,Oi,zi,Fi,In))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $e=[new N,new N,new N,new N,new N,new N,new N,new N],Oe=new N,Dn=new cn,Oi=new N,zi=new N,Fi=new N,ni=new N,si=new N,vi=new N,fn=new N,In=new N,kn=new N,yi=new N;function Fs(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){yi.fromArray(s,a);const o=n.x*Math.abs(yi.x)+n.y*Math.abs(yi.y)+n.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),d=i.dot(yi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ic=new cn,mn=new N,Bs=new N;class bs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ic.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mn.subVectors(t,this.center);const e=mn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(mn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mn.copy(t.center).add(Bs)),this.expandByPoint(mn.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new N,Hs=new N,Nn=new N,ai=new N,Gs=new N,On=new N,Vs=new N;class Da{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.origin).addScaledVector(this.direction,e),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Hs.copy(t).add(e).multiplyScalar(.5),Nn.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Hs);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Nn),o=ai.dot(this.direction),l=-ai.dot(Nn),c=ai.lengthSq(),d=Math.abs(1-r*r);let h,u,m,g;if(d>0)if(h=r*l-o,u=r*o-l,g=a*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,m=h*(h+r*u+2*o)+u*(r*h+u+2*l)+c}else u=a,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-r*a+o)),u=h>0?-a:Math.min(Math.max(-a,-l),a),m=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+c):(h=Math.max(0,-(r*a+o)),u=h>0?a:Math.min(Math.max(-a,-l),a),m=-h*h+u*(u+2*l)+c);else u=r>0?-a:a,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Hs).addScaledVector(Nn,u),m}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const i=Ye.dot(this.direction),n=Ye.dot(Ye)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),d>=0?(a=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(a=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,i,n,a){Gs.subVectors(e,t),On.subVectors(i,t),Vs.crossVectors(Gs,On);let r=this.direction.dot(Vs),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ai.subVectors(this.origin,t);const l=o*this.direction.dot(On.crossVectors(ai,On));if(l<0)return null;const c=o*this.direction.dot(Gs.cross(ai));if(c<0||l+c>r)return null;const d=-o*ai.dot(Vs);return d<0?null:this.at(d/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,n,a,r,o,l,c,d,h,u,m,g,v,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c,d,h,u,m,g,v,p)}set(t,e,i,n,a,r,o,l,c,d,h,u,m,g,v,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Bi.setFromMatrixColumn(t,0).length(),a=1/Bi.setFromMatrixColumn(t,1).length(),r=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const u=r*d,m=r*h,g=o*d,v=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*d,m=l*h,g=c*d,v=c*h;e[0]=u+v*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*h,e[5]=r*d,e[9]=-o,e[2]=m*o-g,e[6]=v+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*d,m=l*h,g=c*d,v=c*h;e[0]=u-v*o,e[4]=-r*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*d,e[9]=v-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*d,m=r*h,g=o*d,v=o*h;e[0]=l*d,e[4]=g*c-m,e[8]=u*c+v,e[1]=l*h,e[5]=v*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,m=r*c,g=o*l,v=o*c;e[0]=l*d,e[4]=v-u*h,e[8]=g*h+m,e[1]=h,e[5]=r*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+g,e[10]=u-v*h}else if(t.order==="XZY"){const u=r*l,m=r*c,g=o*l,v=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+v,e[5]=r*d,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*d,e[10]=v*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kc,t,Nc)}lookAt(t,e,i){const n=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),ri.crossVectors(i,Ae),ri.lengthSq()===0&&(Math.abs(i.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),ri.crossVectors(i,Ae)),ri.normalize(),zn.crossVectors(Ae,ri),n[0]=ri.x,n[4]=zn.x,n[8]=Ae.x,n[1]=ri.y,n[5]=zn.y,n[9]=Ae.y,n[2]=ri.z,n[6]=zn.z,n[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],A=i[3],_=i[7],M=i[11],D=i[15],R=n[0],C=n[4],H=n[8],b=n[12],x=n[1],F=n[5],X=n[9],it=n[13],U=n[2],G=n[6],I=n[10],$=n[14],K=n[3],tt=n[7],w=n[11],E=n[15];return a[0]=r*R+o*x+l*U+c*K,a[4]=r*C+o*F+l*G+c*tt,a[8]=r*H+o*X+l*I+c*w,a[12]=r*b+o*it+l*$+c*E,a[1]=d*R+h*x+u*U+m*K,a[5]=d*C+h*F+u*G+m*tt,a[9]=d*H+h*X+u*I+m*w,a[13]=d*b+h*it+u*$+m*E,a[2]=g*R+v*x+p*U+f*K,a[6]=g*C+v*F+p*G+f*tt,a[10]=g*H+v*X+p*I+f*w,a[14]=g*b+v*it+p*$+f*E,a[3]=A*R+_*x+M*U+D*K,a[7]=A*C+_*F+M*G+D*tt,a[11]=A*H+_*X+M*I+D*w,a[15]=A*b+_*it+M*$+D*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15];return g*(+a*l*h-n*c*h-a*o*u+i*c*u+n*o*m-i*l*m)+v*(+e*l*m-e*c*u+a*r*u-n*r*m+n*c*d-a*l*d)+p*(+e*c*h-e*o*m-a*r*h+i*r*m+a*o*d-i*c*d)+f*(-n*o*d-e*l*h+e*o*u+n*r*h-i*r*u+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],A=h*p*c-v*u*c+v*l*m-o*p*m-h*l*f+o*u*f,_=g*u*c-d*p*c-g*l*m+r*p*m+d*l*f-r*u*f,M=d*v*c-g*h*c+g*o*m-r*v*m-d*o*f+r*h*f,D=g*h*l-d*v*l-g*o*u+r*v*u+d*o*p-r*h*p,R=e*A+i*_+n*M+a*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=A*C,t[1]=(v*u*a-h*p*a-v*n*m+i*p*m+h*n*f-i*u*f)*C,t[2]=(o*p*a-v*l*a+v*n*c-i*p*c-o*n*f+i*l*f)*C,t[3]=(h*l*a-o*u*a-h*n*c+i*u*c+o*n*m-i*l*m)*C,t[4]=_*C,t[5]=(d*p*a-g*u*a+g*n*m-e*p*m-d*n*f+e*u*f)*C,t[6]=(g*l*a-r*p*a-g*n*c+e*p*c+r*n*f-e*l*f)*C,t[7]=(r*u*a-d*l*a+d*n*c-e*u*c-r*n*m+e*l*m)*C,t[8]=M*C,t[9]=(g*h*a-d*v*a-g*i*m+e*v*m+d*i*f-e*h*f)*C,t[10]=(r*v*a-g*o*a+g*i*c-e*v*c-r*i*f+e*o*f)*C,t[11]=(d*o*a-r*h*a-d*i*c+e*h*c+r*i*m-e*o*m)*C,t[12]=D*C,t[13]=(d*v*n-g*h*n+g*i*u-e*v*u-d*i*p+e*h*p)*C,t[14]=(g*o*n-r*v*n-g*i*l+e*v*l+r*i*p-e*o*p)*C,t[15]=(r*h*n-d*o*n+d*i*l-e*h*l-r*i*u+e*o*u)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,d=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,d*o+i,d*l-n*r,0,c*l-n*o,d*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,d=r+r,h=o+o,u=a*c,m=a*d,g=a*h,v=r*d,p=r*h,f=o*h,A=l*c,_=l*d,M=l*h,D=i.x,R=i.y,C=i.z;return n[0]=(1-(v+f))*D,n[1]=(m+M)*D,n[2]=(g-_)*D,n[3]=0,n[4]=(m-M)*R,n[5]=(1-(u+f))*R,n[6]=(p+A)*R,n[7]=0,n[8]=(g+_)*C,n[9]=(p-A)*C,n[10]=(1-(u+v))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Bi.set(n[0],n[1],n[2]).length();const r=Bi.set(n[4],n[5],n[6]).length(),o=Bi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],ze.copy(this);const c=1/a,d=1/r,h=1/o;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=d,ze.elements[5]*=d,ze.elements[6]*=d,ze.elements[8]*=h,ze.elements[9]*=h,ze.elements[10]*=h,e.setFromRotationMatrix(ze),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=ei){const l=this.elements,c=2*a/(e-t),d=2*a/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n);let m,g;if(o===ei)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===ms)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=ei){const l=this.elements,c=1/(e-t),d=1/(i-n),h=1/(r-a),u=(e+t)*c,m=(i+n)*d;let g,v;if(o===ei)g=(r+a)*h,v=-2*h;else if(o===ms)g=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Bi=new N,ze=new ae,kc=new N(0,0,0),Nc=new N(1,1,1),ri=new N,zn=new N,Ae=new N,Or=new ae,zr=new Ri;class xs{constructor(t=0,e=0,i=0,n=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],d=n[9],h=n[2],u=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Or.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Or,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zr.setFromEuler(this),this.setFromQuaternion(zr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oc=0;const Fr=new N,Hi=new Ri,je=new ae,Fn=new N,gn=new N,zc=new N,Fc=new Ri,Br=new N(1,0,0),Hr=new N(0,1,0),Gr=new N(0,0,1),Bc={type:"added"},Hc={type:"removed"};class ge extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new N,e=new xs,i=new Ri,n=new N(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ae},normalMatrix:{value:new Wt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Br,t)}rotateY(t){return this.rotateOnAxis(Hr,t)}rotateZ(t){return this.rotateOnAxis(Gr,t)}translateOnAxis(t,e){return Fr.copy(t).applyQuaternion(this.quaternion),this.position.add(Fr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Br,t)}translateY(t){return this.translateOnAxis(Hr,t)}translateZ(t){return this.translateOnAxis(Gr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(je.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fn.copy(t):Fn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?je.lookAt(gn,Fn,this.up):je.lookAt(Fn,gn,this.up),this.quaternion.setFromRotationMatrix(je),n&&(je.extractRotation(n.matrixWorld),Hi.setFromRotationMatrix(je),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),je.multiply(t.parent.matrixWorld)),t.applyMatrix4(je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,t,zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,Fc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),u=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ge.DEFAULT_UP=new N(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fe=new N,Ze=new N,qs=new N,Ke=new N,Gi=new N,Vi=new N,Vr=new N,Ws=new N,Xs=new N,$s=new N;let Bn=!1;class Ie{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Fe.subVectors(t,e),n.cross(Fe);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){Fe.subVectors(n,e),Ze.subVectors(i,e),qs.subVectors(t,e);const r=Fe.dot(Fe),o=Fe.dot(Ze),l=Fe.dot(qs),c=Ze.dot(Ze),d=Ze.dot(qs),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,m=(c*l-o*d)*u,g=(r*d-o*l)*u;return a.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getUV(t,e,i,n,a,r,o,l){return Bn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bn=!0),this.getInterpolation(t,e,i,n,a,r,o,l)}static getInterpolation(t,e,i,n,a,r,o,l){return this.getBarycoord(t,e,i,n,Ke)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ke.x),l.addScaledVector(r,Ke.y),l.addScaledVector(o,Ke.z),l)}static isFrontFacing(t,e,i,n){return Fe.subVectors(i,e),Ze.subVectors(t,e),Fe.cross(Ze).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Ze.subVectors(this.a,this.b),Fe.cross(Ze).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return Bn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bn=!0),Ie.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ie.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;Gi.subVectors(n,i),Vi.subVectors(a,i),Ws.subVectors(t,i);const l=Gi.dot(Ws),c=Vi.dot(Ws);if(l<=0&&c<=0)return e.copy(i);Xs.subVectors(t,n);const d=Gi.dot(Xs),h=Vi.dot(Xs);if(d>=0&&h<=d)return e.copy(n);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),e.copy(i).addScaledVector(Gi,r);$s.subVectors(t,a);const m=Gi.dot($s),g=Vi.dot($s);if(g>=0&&m<=g)return e.copy(a);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Vi,o);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return Vr.subVectors(a,n),o=(h-d)/(h-d+(m-g)),e.copy(n).addScaledVector(Vr,o);const f=1/(p+v+u);return r=v*f,o=u*f,e.copy(i).addScaledVector(Gi,r).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function Ys(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Zt.workingColorSpace){if(t=Ac(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Ys(r,a,t+1/3),this.g=Ys(r,a,t),this.b=Ys(r,a,t-1/3)}return Zt.toWorkingColorSpace(this,n),this}setStyle(t,e=fe){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const i=Qo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nn(t.r),this.g=nn(t.g),this.b=nn(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Zt.fromWorkingColorSpace(_e.copy(this),t),Math.round(me(_e.r*255,0,255))*65536+Math.round(me(_e.g*255,0,255))*256+Math.round(me(_e.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(_e.copy(this),e);const i=_e.r,n=_e.g,a=_e.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(n-a)/h+(n<a?6:0);break;case n:l=(a-i)/h+2;break;case a:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=fe){Zt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,i=_e.g,n=_e.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Hn);const i=Is(oi.h,Hn.h,e),n=Is(oi.s,Hn.s,e),a=Is(oi.l,Hn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Xt;Xt.NAMES=Qo;let Gc=0;class dn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=en,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==en&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ma&&(i.blendSrc=this.blendSrc),this.blendDst!==ga&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vs extends dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new N,Gn=new mt;class Re{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gn.fromBufferAttribute(this,e),Gn.applyMatrix3(t),this.setXY(e,Gn.x,Gn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),a=Me(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pr&&(t.usage=this.usage),t}}class tl extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class el extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Vc=0;const Le=new ae,js=new ge,qi=new N,we=new cn,vn=new cn,he=new N;class Se extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yo(t)?el:tl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Wt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,i){return Le.makeTranslation(t,e,i),this.applyMatrix4(Le),this}scale(t,e,i){return Le.makeScale(t,e,i),this.applyMatrix4(Le),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];we.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];vn.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(we.min,vn.min),we.expandByPoint(he),he.addVectors(we.max,vn.max),we.expandByPoint(he)):(we.expandByPoint(vn.min),we.expandByPoint(vn.max))}we.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)he.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(he));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)he.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),he.add(qi)),n=Math.max(n,i.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,r=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let x=0;x<o;x++)c[x]=new N,d[x]=new N;const h=new N,u=new N,m=new N,g=new mt,v=new mt,p=new mt,f=new N,A=new N;function _(x,F,X){h.fromArray(n,x*3),u.fromArray(n,F*3),m.fromArray(n,X*3),g.fromArray(r,x*2),v.fromArray(r,F*2),p.fromArray(r,X*2),u.sub(h),m.sub(h),v.sub(g),p.sub(g);const it=1/(v.x*p.y-p.x*v.y);isFinite(it)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(it),A.copy(m).multiplyScalar(v.x).addScaledVector(u,-p.x).multiplyScalar(it),c[x].add(f),c[F].add(f),c[X].add(f),d[x].add(A),d[F].add(A),d[X].add(A))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let x=0,F=M.length;x<F;++x){const X=M[x],it=X.start,U=X.count;for(let G=it,I=it+U;G<I;G+=3)_(i[G+0],i[G+1],i[G+2])}const D=new N,R=new N,C=new N,H=new N;function b(x){C.fromArray(a,x*3),H.copy(C);const F=c[x];D.copy(F),D.sub(C.multiplyScalar(C.dot(F))).normalize(),R.crossVectors(H,F);const it=R.dot(d[x])<0?-1:1;l[x*4]=D.x,l[x*4+1]=D.y,l[x*4+2]=D.z,l[x*4+3]=it}for(let x=0,F=M.length;x<F;++x){const X=M[x],it=X.start,U=X.count;for(let G=it,I=it+U;G<I;G+=3)b(i[G+0]),b(i[G+1]),b(i[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const n=new N,a=new N,r=new N,o=new N,l=new N,c=new N,d=new N,h=new N;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,p),d.subVectors(r,a),h.subVectors(n,a),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)n.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),d.subVectors(r,a),h.subVectors(n,a),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let f=0;f<d;f++)u[g++]=c[m++]}return new Re(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=t(u,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(n[l]=d,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(e))}const a=t.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qr=new ae,_i=new Da,Vn=new bs,Wr=new N,Wi=new N,Xi=new N,$i=new N,Zs=new N,qn=new N,Wn=new mt,Xn=new mt,$n=new mt,Xr=new N,$r=new N,Yr=new N,Yn=new N,jn=new N;class ue extends ge{constructor(t=new Se,e=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){qn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(Zs.fromBufferAttribute(h,t),r?qn.addScaledVector(Zs,d):qn.addScaledVector(Zs.sub(e),d))}e.add(qn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vn.copy(i.boundingSphere),Vn.applyMatrix4(a),_i.copy(t.ray).recast(t.near),!(Vn.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Vn,Wr)===null||_i.origin.distanceToSquared(Wr)>(t.far-t.near)**2))&&(qr.copy(a).invert(),_i.copy(t.ray).applyMatrix4(qr),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const p=u[g],f=r[p.materialIndex],A=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=A,D=_;M<D;M+=3){const R=o.getX(M),C=o.getX(M+1),H=o.getX(M+2);n=Zn(this,f,t,i,c,d,h,R,C,H),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const A=o.getX(p),_=o.getX(p+1),M=o.getX(p+2);n=Zn(this,r,t,i,c,d,h,A,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const p=u[g],f=r[p.materialIndex],A=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=A,D=_;M<D;M+=3){const R=M,C=M+1,H=M+2;n=Zn(this,f,t,i,c,d,h,R,C,H),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const A=p,_=p+1,M=p+2;n=Zn(this,r,t,i,c,d,h,A,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function qc(s,t,e,i,n,a,r,o){let l;if(t.side===Te?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,t.side===fi,o),l===null)return null;jn.copy(o),jn.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(jn);return c<e.near||c>e.far?null:{distance:c,point:jn.clone(),object:s}}function Zn(s,t,e,i,n,a,r,o,l,c){s.getVertexPosition(o,Wi),s.getVertexPosition(l,Xi),s.getVertexPosition(c,$i);const d=qc(s,t,e,i,Wi,Xi,$i,Yn);if(d){n&&(Wn.fromBufferAttribute(n,o),Xn.fromBufferAttribute(n,l),$n.fromBufferAttribute(n,c),d.uv=Ie.getInterpolation(Yn,Wi,Xi,$i,Wn,Xn,$n,new mt)),a&&(Wn.fromBufferAttribute(a,o),Xn.fromBufferAttribute(a,l),$n.fromBufferAttribute(a,c),d.uv1=Ie.getInterpolation(Yn,Wi,Xi,$i,Wn,Xn,$n,new mt),d.uv2=d.uv1),r&&(Xr.fromBufferAttribute(r,o),$r.fromBufferAttribute(r,l),Yr.fromBufferAttribute(r,c),d.normal=Ie.getInterpolation(Yn,Wi,Xi,$i,Xr,$r,Yr,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};Ie.getNormal(Wi,Xi,$i,h.normal),d.face=h}return d}class Ue extends Se{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,a,4),g("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(h,2));function g(v,p,f,A,_,M,D,R,C,H,b){const x=M/C,F=D/H,X=M/2,it=D/2,U=R/2,G=C+1,I=H+1;let $=0,K=0;const tt=new N;for(let w=0;w<I;w++){const E=w*F-it;for(let z=0;z<G;z++){const O=z*x-X;tt[v]=O*A,tt[p]=E*_,tt[f]=U,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[p]=0,tt[f]=R>0?1:-1,d.push(tt.x,tt.y,tt.z),h.push(z/C),h.push(1-w/H),$+=1}}for(let w=0;w<H;w++)for(let E=0;E<C;E++){const z=u+E+G*w,O=u+E+G*(w+1),q=u+(E+1)+G*(w+1),et=u+(E+1)+G*w;l.push(z,O,et),l.push(O,q,et),K+=6}o.addGroup(m,K,b),m+=K,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function on(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function be(s){const t={};for(let e=0;e<s.length;e++){const i=on(s[e]);for(const n in i)t[n]=i[n]}return t}function Wc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function il(s){return s.getRenderTarget()===null?s.outputColorSpace:Zt.workingColorSpace}const Xc={clone:on,merge:be};var $c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$c,this.fragmentShader=Yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=on(t.uniforms),this.uniformsGroups=Wc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class nl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends nl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(yn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,ji=1;class jc extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ke(Yi,ji,t,e);n.layers=this.layers,this.add(n);const a=new ke(Yi,ji,t,e);a.layers=this.layers,this.add(a);const r=new ke(Yi,ji,t,e);r.layers=this.layers,this.add(r);const o=new ke(Yi,ji,t,e);o.layers=this.layers,this.add(o);const l=new ke(Yi,ji,t,e);l.layers=this.layers,this.add(l);const c=new ke(Yi,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,d),t.setRenderTarget(h,u,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sl extends Ce{constructor(t,e,i,n,a,r,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:sn,super(t,e,i,n,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zc extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(_n("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===wi?fe:Ne),this.texture=new sl(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ue(5,5,5),a=new Pi({name:"CubemapFromEquirect",uniforms:on(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Te,blending:hi});a.uniforms.tEquirect.value=e;const r=new ue(n,a),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=De),new jc(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}const Ks=new N,Kc=new N,Jc=new Wt;class ti{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ks.subVectors(i,e).cross(Kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ks),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Jc.getNormalMatrix(t),n=this.coplanarPoint(Ks).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new bs,Kn=new N;class Ia{constructor(t=new ti,e=new ti,i=new ti,n=new ti,a=new ti,r=new ti){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ei){const i=this.planes,n=t.elements,a=n[0],r=n[1],o=n[2],l=n[3],c=n[4],d=n[5],h=n[6],u=n[7],m=n[8],g=n[9],v=n[10],p=n[11],f=n[12],A=n[13],_=n[14],M=n[15];if(i[0].setComponents(l-a,u-c,p-m,M-f).normalize(),i[1].setComponents(l+a,u+c,p+m,M+f).normalize(),i[2].setComponents(l+r,u+d,p+g,M+A).normalize(),i[3].setComponents(l-r,u-d,p-g,M-A).normalize(),i[4].setComponents(l-o,u-h,p-v,M-_).normalize(),e===ei)i[5].setComponents(l+o,u+h,p+v,M+_).normalize();else if(e===ms)i[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Kn.x=n.normal.x>0?t.max.x:t.min.x,Kn.y=n.normal.y>0?t.max.y:t.min.y,Kn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Kn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function al(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Qc(s,t){const e=t.isWebGL2,i=new WeakMap;function n(c,d){const h=c.array,u=c.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,u),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,d,h){const u=d.array,m=d._updateRange,g=d.updateRanges;if(s.bindBuffer(h,c),m.count===-1&&g.length===0&&s.bufferSubData(h,0,u),g.length!==0){for(let v=0,p=g.length;v<p;v++){const f=g[v];e?s.bufferSubData(h,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):s.bufferSubData(h,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}d.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(s.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,n(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,c,d),h.version=c.version}}return{get:r,remove:o,update:l}}class ka extends Se{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,d=l+1,h=t/o,u=e/l,m=[],g=[],v=[],p=[];for(let f=0;f<d;f++){const A=f*u-r;for(let _=0;_<c;_++){const M=_*h-a;g.push(M,-A,0),v.push(0,0,1),p.push(_/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const _=A+c*f,M=A+c*(f+1),D=A+1+c*(f+1),R=A+1+c*f;m.push(_,M,R),m.push(M,D,R)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.widthSegments,t.heightSegments)}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Md=`#define PI 3.141592653589793
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
} // validated`,Td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ed=`vec3 transformedNormal = objectNormal;
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
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`
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
}`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
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
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#endif`,$d=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,th=`
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
#endif`,eh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dh=`#if defined( USE_POINTS_UV )
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
#endif`,hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ph=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fh=`#ifdef USE_MORPHNORMALS
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
#endif`,mh=`#ifdef USE_MORPHTARGETS
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
#endif`,gh=`#ifdef USE_MORPHTARGETS
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
#endif`,vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
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
#endif`,Mh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ch=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Ph=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ih=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zh=`float getShadowMask() {
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
}`,Fh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bh=`#ifdef USE_SKINNING
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
#endif`,qh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$h=`#ifdef USE_TRANSMISSION
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
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const Qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tu=`uniform sampler2D t2D;
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
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nu=`varying vec3 vWorldDirection;
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
}`,au=`#include <common>
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
}`,ru=`#if DEPTH_PACKING == 3200
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
}`,ou=`#define DISTANCE
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
}`,lu=`#define DISTANCE
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
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,du=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`uniform float scale;
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
}`,uu=`uniform vec3 diffuse;
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
}`,pu=`#include <common>
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
}`,fu=`uniform vec3 diffuse;
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
}`,mu=`#define LAMBERT
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
}`,gu=`#define LAMBERT
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
}`,vu=`#define MATCAP
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
}`,yu=`#define MATCAP
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
}`,_u=`#define NORMAL
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
}`,bu=`#define NORMAL
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
}`,xu=`#define PHONG
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
}`,Su=`#define PHONG
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
}`,Mu=`#define STANDARD
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
}`,Tu=`#define STANDARD
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
}`,Eu=`#define TOON
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
}`,Au=`#define TOON
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
}`,wu=`uniform float size;
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
}`,Cu=`uniform vec3 diffuse;
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
}`,Pu=`uniform vec3 color;
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
}`,Lu=`uniform float rotation;
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
}`,Uu=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:td,alphahash_pars_fragment:ed,alphamap_fragment:id,alphamap_pars_fragment:nd,alphatest_fragment:sd,alphatest_pars_fragment:ad,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:dd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:pd,bumpmap_pars_fragment:fd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:vd,clipping_planes_vertex:yd,color_fragment:_d,color_pars_fragment:bd,color_pars_vertex:xd,color_vertex:Sd,common:Md,cube_uv_reflection_fragment:Td,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Ad,displacementmap_vertex:wd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Rd,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Ud,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Id,envmap_pars_vertex:kd,envmap_physical_pars_fragment:$d,envmap_vertex:Nd,fog_vertex:Od,fog_pars_vertex:zd,fog_fragment:Fd,fog_pars_fragment:Bd,gradientmap_pars_fragment:Hd,lightmap_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:jd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Kd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:th,lights_fragment_maps:eh,lights_fragment_end:ih,logdepthbuf_fragment:nh,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:ah,logdepthbuf_vertex:rh,map_fragment:oh,map_pars_fragment:lh,map_particle_fragment:ch,map_particle_pars_fragment:dh,metalnessmap_fragment:hh,metalnessmap_pars_fragment:uh,morphcolor_vertex:ph,morphnormal_vertex:fh,morphtarget_pars_vertex:mh,morphtarget_vertex:gh,normal_fragment_begin:vh,normal_fragment_maps:yh,normal_pars_fragment:_h,normal_pars_vertex:bh,normal_vertex:xh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:Mh,clearcoat_normal_fragment_maps:Th,clearcoat_pars_fragment:Eh,iridescence_pars_fragment:Ah,opaque_fragment:wh,packing:Ch,premultiplied_alpha_fragment:Rh,project_vertex:Ph,dithering_fragment:Lh,dithering_pars_fragment:Uh,roughnessmap_fragment:Dh,roughnessmap_pars_fragment:Ih,shadowmap_pars_fragment:kh,shadowmap_pars_vertex:Nh,shadowmap_vertex:Oh,shadowmask_pars_fragment:zh,skinbase_vertex:Fh,skinning_pars_vertex:Bh,skinning_vertex:Hh,skinnormal_vertex:Gh,specularmap_fragment:Vh,specularmap_pars_fragment:qh,tonemapping_fragment:Wh,tonemapping_pars_fragment:Xh,transmission_fragment:$h,transmission_pars_fragment:Yh,uv_pars_fragment:jh,uv_pars_vertex:Zh,uv_vertex:Kh,worldpos_vertex:Jh,background_vert:Qh,background_frag:tu,backgroundCube_vert:eu,backgroundCube_frag:iu,cube_vert:nu,cube_frag:su,depth_vert:au,depth_frag:ru,distanceRGBA_vert:ou,distanceRGBA_frag:lu,equirect_vert:cu,equirect_frag:du,linedashed_vert:hu,linedashed_frag:uu,meshbasic_vert:pu,meshbasic_frag:fu,meshlambert_vert:mu,meshlambert_frag:gu,meshmatcap_vert:vu,meshmatcap_frag:yu,meshnormal_vert:_u,meshnormal_frag:bu,meshphong_vert:xu,meshphong_frag:Su,meshphysical_vert:Mu,meshphysical_frag:Tu,meshtoon_vert:Eu,meshtoon_frag:Au,points_vert:wu,points_frag:Cu,shadow_vert:Ru,shadow_frag:Pu,sprite_vert:Lu,sprite_frag:Uu},yt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},qe={basic:{uniforms:be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:be([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:be([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:be([yt.points,yt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:be([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:be([yt.common,yt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:be([yt.sprite,yt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:be([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:be([yt.lights,yt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};qe.physical={uniforms:be([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Jn={r:0,b:0,g:0};function Du(s,t,e,i,n,a,r){const o=new Xt(0);let l=a===!0?0:1,c,d,h=null,u=0,m=null;function g(p,f){let A=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),A=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ys)?(d===void 0&&(d=new ue(new Ue(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:on(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=Zt.getTransfer(_.colorSpace)!==Kt,(h!==_||u!==_.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,m=s.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ue(new ka(2,2),new Pi({name:"BackgroundMaterial",uniforms:on(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==Kt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(Jn,il(s)),i.buffers.color.setClear(Jn.r,Jn.g,Jn.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function Iu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||a!==null,o={},l=p(null);let c=l,d=!1;function h(U,G,I,$,K){let tt=!1;if(r){const w=v($,I,G);c!==w&&(c=w,m(c.object)),tt=f(U,$,I,K),tt&&A(U,$,I,K)}else{const w=G.wireframe===!0;(c.geometry!==$.id||c.program!==I.id||c.wireframe!==w)&&(c.geometry=$.id,c.program=I.id,c.wireframe=w,tt=!0)}K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(tt||d)&&(d=!1,H(U,G,I,$),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function m(U){return i.isWebGL2?s.bindVertexArray(U):a.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?s.deleteVertexArray(U):a.deleteVertexArrayOES(U)}function v(U,G,I){const $=I.wireframe===!0;let K=o[U.id];K===void 0&&(K={},o[U.id]=K);let tt=K[G.id];tt===void 0&&(tt={},K[G.id]=tt);let w=tt[$];return w===void 0&&(w=p(u()),tt[$]=w),w}function p(U){const G=[],I=[],$=[];for(let K=0;K<n;K++)G[K]=0,I[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:I,attributeDivisors:$,object:U,attributes:{},index:null}}function f(U,G,I,$){const K=c.attributes,tt=G.attributes;let w=0;const E=I.getAttributes();for(const z in E)if(E[z].location>=0){const q=K[z];let et=tt[z];if(et===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),q===void 0||q.attribute!==et||et&&q.data!==et.data)return!0;w++}return c.attributesNum!==w||c.index!==$}function A(U,G,I,$){const K={},tt=G.attributes;let w=0;const E=I.getAttributes();for(const z in E)if(E[z].location>=0){let q=tt[z];q===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));const et={};et.attribute=q,q&&q.data&&(et.data=q.data),K[z]=et,w++}c.attributes=K,c.attributesNum=w,c.index=$}function _(){const U=c.newAttributes;for(let G=0,I=U.length;G<I;G++)U[G]=0}function M(U){D(U,0)}function D(U,G){const I=c.newAttributes,$=c.enabledAttributes,K=c.attributeDivisors;I[U]=1,$[U]===0&&(s.enableVertexAttribArray(U),$[U]=1),K[U]!==G&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,G),K[U]=G)}function R(){const U=c.newAttributes,G=c.enabledAttributes;for(let I=0,$=G.length;I<$;I++)G[I]!==U[I]&&(s.disableVertexAttribArray(I),G[I]=0)}function C(U,G,I,$,K,tt,w){w===!0?s.vertexAttribIPointer(U,G,I,K,tt):s.vertexAttribPointer(U,G,I,$,K,tt)}function H(U,G,I,$){if(i.isWebGL2===!1&&(U.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const K=$.attributes,tt=I.getAttributes(),w=G.defaultAttributeValues;for(const E in tt){const z=tt[E];if(z.location>=0){let O=K[E];if(O===void 0&&(E==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),E==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),O!==void 0){const q=O.normalized,et=O.itemSize,lt=e.get(O);if(lt===void 0)continue;const Q=lt.buffer,ut=lt.type,_t=lt.bytesPerElement,ft=i.isWebGL2===!0&&(ut===s.INT||ut===s.UNSIGNED_INT||O.gpuType===zo);if(O.isInterleavedBufferAttribute){const bt=O.data,L=bt.stride,ct=O.offset;if(bt.isInstancedInterleavedBuffer){for(let W=0;W<z.locationSize;W++)D(z.location+W,bt.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let W=0;W<z.locationSize;W++)M(z.location+W);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let W=0;W<z.locationSize;W++)C(z.location+W,et/z.locationSize,ut,q,L*_t,(ct+et/z.locationSize*W)*_t,ft)}else{if(O.isInstancedBufferAttribute){for(let bt=0;bt<z.locationSize;bt++)D(z.location+bt,O.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let bt=0;bt<z.locationSize;bt++)M(z.location+bt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let bt=0;bt<z.locationSize;bt++)C(z.location+bt,et/z.locationSize,ut,q,et*_t,et/z.locationSize*bt*_t,ft)}}else if(w!==void 0){const q=w[E];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(z.location,q);break;case 3:s.vertexAttrib3fv(z.location,q);break;case 4:s.vertexAttrib4fv(z.location,q);break;default:s.vertexAttrib1fv(z.location,q)}}}}R()}function b(){X();for(const U in o){const G=o[U];for(const I in G){const $=G[I];for(const K in $)g($[K].object),delete $[K];delete G[I]}delete o[U]}}function x(U){if(o[U.id]===void 0)return;const G=o[U.id];for(const I in G){const $=G[I];for(const K in $)g($[K].object),delete $[K];delete G[I]}delete o[U.id]}function F(U){for(const G in o){const I=o[G];if(I[U.id]===void 0)continue;const $=I[U.id];for(const K in $)g($[K].object),delete $[K];delete I[U.id]}}function X(){it(),d=!0,c!==l&&(c=l,m(c.object))}function it(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:it,dispose:b,releaseStatesOfGeometry:x,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:M,disableUnusedAttributes:R}}function ku(s,t,e,i){const n=i.isWebGL2;let a;function r(d){a=d}function o(d,h){s.drawArrays(a,d,h),e.update(h,a,1)}function l(d,h,u){if(u===0)return;let m,g;if(n)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,d,h,u),e.update(h,a,u)}function c(d,h,u){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(d[g],h[g]);else{m.multiDrawArraysWEBGL(a,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];e.update(g,a,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Nu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,M=r||t.has("OES_texture_float"),D=_&&M,R=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:D,maxSamples:R}}function Ou(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new ti,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||n;return n=u,i=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=s.get(h);if(!n||g===null||g.length===0||a&&!p)a?d(null):c();else{const A=a?0:i,_=A*4;let M=f.clippingState||null;l.value=M,M=d(g,u,_,m);for(let D=0;D!==_;++D)M[D]=e[D];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,M=m;_!==v;++_,M+=4)r.copy(h[_]).applyMatrix4(A,o),r.normal.toArray(p,M),p[M+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function zu(s){let t=new WeakMap;function e(r,o){return o===va?r.mapping=sn:o===ya&&(r.mapping=an),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===va||o===ya)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Zc(l.height/2);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class rl extends nl{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ki=4,jr=[.125,.215,.35,.446,.526,.582],Ti=20,Js=new rl,Zr=new Xt;let Qs=null,ta=0,ea=0;const Si=(1+Math.sqrt(5))/2,Zi=1/Si,Kr=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Si,Zi),new N(0,Si,-Zi),new N(Zi,0,Si),new N(-Zi,0,Si),new N(Si,Zi,0),new N(-Si,Zi,0)];class Jr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Qs=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,ta,ea),t.scissorTest=!1,Qn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sn||t.mapping===an?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:De,minFilter:De,generateMipmaps:!1,type:En,format:Ge,colorSpace:ii,depthBuffer:!1},n=Qr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fu(a)),this._blurMaterial=Bu(a,t,e)}return n}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,i,n){const o=new ke(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Zr),d.toneMapping=ui,d.autoClear=!1;const m=new vs({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new ue(new Ue,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(Zr),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):A===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Qn(n,A*_,f>2?_:0,_,_),d.setRenderTarget(n),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===sn||t.mapping===an;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=to());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new ue(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Qn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Js)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Kr[(n-1)%Kr.length];this._blur(t,n-1,n,a,r)}e.autoClear=i}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ue(this._lodPlanes[n],c),u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),v=a/g,p=isFinite(a)?1+Math.floor(d*v):Ti;p>Ti&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ti}`);const f=[];let A=0;for(let C=0;C<Ti;++C){const H=C/v,b=Math.exp(-H*H/2);f.push(b),C===0?A+=b:C<p&&(A+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/A;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const M=this._sizeLods[n],D=3*M*(n>_-Ki?n-_+Ki:0),R=4*(this._cubeSize-M);Qn(e,D,R,3*M,2*M),l.setRenderTarget(e),l.render(h,Js)}}function Fu(s){const t=[],e=[],i=[];let n=s;const a=s-Ki+1+jr.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);e.push(o);let l=1/o;r>s-Ki?l=jr[r-s+Ki-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,v=3,p=2,f=1,A=new Float32Array(v*g*m),_=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,H=R>2?0:-1,b=[C,H,0,C+2/3,H,0,C+2/3,H+1,0,C,H,0,C+2/3,H+1,0,C,H+1,0];A.set(b,v*g*R),_.set(u,p*g*R);const x=[R,R,R,R,R,R];M.set(x,f*g*R)}const D=new Se;D.setAttribute("position",new Re(A,v)),D.setAttribute("uv",new Re(_,p)),D.setAttribute("faceIndex",new Re(M,f)),t.push(D),n>Ki&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Qr(s,t,e){const i=new Ci(s,t,e);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qn(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Bu(s,t,e){const i=new Float32Array(Ti),n=new N(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Na(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function to(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function eo(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function Hu(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===ya,d=l===sn||l===an;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Jr(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&n(h)){e===null&&(e=new Jr(s));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",a),u.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Gu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Vu(s,t,e,i){const n={},a=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}u.removeEventListener("dispose",r),delete n[u.id];const m=a.get(u);m&&(t.remove(m),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)t.update(v[p],s.ARRAY_BUFFER)}}function c(h){const u=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let _=0,M=A.length;_<M;_+=3){const D=A[_+0],R=A[_+1],C=A[_+2];u.push(D,R,R,C,C,D)}}else if(g!==void 0){const A=g.array;v=g.version;for(let _=0,M=A.length/3-1;_<M;_+=3){const D=_+0,R=_+1,C=_+2;u.push(D,R,R,C,C,D)}}else return;const p=new(Yo(u)?el:tl)(u,1);p.version=v;const f=a.get(h);f&&t.remove(f),a.set(h,p)}function d(h){const u=a.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function qu(s,t,e,i){const n=i.isWebGL2;let a;function r(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,g){s.drawElements(a,g,o,m*l),e.update(g,a,1)}function h(m,g,v){if(v===0)return;let p,f;if(n)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](a,g,o,m*l,v),e.update(g,a,v)}function u(m,g,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(a,g,0,o,m,0,v);let f=0;for(let A=0;A<v;A++)f+=g[A];e.update(f,a,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function Wu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Xu(s,t){return s[0]-t[0]}function $u(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Yu(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,r=new pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let p=a.get(d);if(p===void 0||p.count!==v){let G=function(){it.dispose(),a.delete(d),d.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const _=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,D=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let b=0;_===!0&&(b=1),M===!0&&(b=2),D===!0&&(b=3);let x=d.attributes.position.count*b,F=1;x>t.maxTextureSize&&(F=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const X=new Float32Array(x*F*4*v),it=new Ko(X,x,F,v);it.type=di,it.needsUpdate=!0;const U=b*4;for(let I=0;I<v;I++){const $=R[I],K=C[I],tt=H[I],w=x*F*4*I;for(let E=0;E<$.count;E++){const z=E*U;_===!0&&(r.fromBufferAttribute($,E),X[w+z+0]=r.x,X[w+z+1]=r.y,X[w+z+2]=r.z,X[w+z+3]=0),M===!0&&(r.fromBufferAttribute(K,E),X[w+z+4]=r.x,X[w+z+5]=r.y,X[w+z+6]=r.z,X[w+z+7]=0),D===!0&&(r.fromBufferAttribute(tt,E),X[w+z+8]=r.x,X[w+z+9]=r.y,X[w+z+10]=r.z,X[w+z+11]=tt.itemSize===4?r.w:1)}}p={count:v,texture:it,size:new mt(x,F)},a.set(d,p),d.addEventListener("dispose",G)}let f=0;for(let _=0;_<u.length;_++)f+=u[_];const A=d.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",u),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let v=i[d.id];if(v===void 0||v.length!==g){v=[];for(let M=0;M<g;M++)v[M]=[M,0];i[d.id]=v}for(let M=0;M<g;M++){const D=v[M];D[0]=M,D[1]=u[M]}v.sort($u);for(let M=0;M<8;M++)M<g&&v[M][1]?(o[M][0]=v[M][0],o[M][1]=v[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Xu);const p=d.morphAttributes.position,f=d.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const D=o[M],R=D[0],C=D[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&d.getAttribute("morphTarget"+M)!==p[R]&&d.setAttribute("morphTarget"+M,p[R]),f&&d.getAttribute("morphNormal"+M)!==f[R]&&d.setAttribute("morphNormal"+M,f[R]),n[M]=C,A+=C):(p&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),f&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),n[M]=0)}const _=d.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function ju(s,t,e,i){let n=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,h=t.get(l,d);if(n.get(h)!==c&&(t.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return h}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class ol extends Ce{constructor(t,e,i,n,a,r,o,l,c,d){if(d=d!==void 0?d:Ai,d!==Ai&&d!==rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ai&&(i=ci),i===void 0&&d===rn&&(i=Ei),super(null,n,a,r,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xe,this.minFilter=l!==void 0?l:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ll=new Ce,cl=new ol(1,1);cl.compareFunction=$o;const dl=new Ko,hl=new Dc,ul=new sl,io=[],no=[],so=new Float32Array(16),ao=new Float32Array(9),ro=new Float32Array(4);function hn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=io[n];if(a===void 0&&(a=new Float32Array(n),io[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function le(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ce(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ss(s,t){let e=no[t];e===void 0&&(e=new Int32Array(t),no[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Zu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ku(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2fv(this.addr,t),ce(e,t)}}function Ju(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;s.uniform3fv(this.addr,t),ce(e,t)}}function Qu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4fv(this.addr,t),ce(e,t)}}function tp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;ro.set(i),s.uniformMatrix2fv(this.addr,!1,ro),ce(e,i)}}function ep(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;ao.set(i),s.uniformMatrix3fv(this.addr,!1,ao),ce(e,i)}}function ip(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;so.set(i),s.uniformMatrix4fv(this.addr,!1,so),ce(e,i)}}function np(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2iv(this.addr,t),ce(e,t)}}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3iv(this.addr,t),ce(e,t)}}function rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4iv(this.addr,t),ce(e,t)}}function op(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2uiv(this.addr,t),ce(e,t)}}function cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3uiv(this.addr,t),ce(e,t)}}function dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4uiv(this.addr,t),ce(e,t)}}function hp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?cl:ll;e.setTexture2D(t||a,n)}function up(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||hl,n)}function pp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ul,n)}function fp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||dl,n)}function mp(s){switch(s){case 5126:return Zu;case 35664:return Ku;case 35665:return Ju;case 35666:return Qu;case 35674:return tp;case 35675:return ep;case 35676:return ip;case 5124:case 35670:return np;case 35667:case 35671:return sp;case 35668:case 35672:return ap;case 35669:case 35673:return rp;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return fp}}function gp(s,t){s.uniform1fv(this.addr,t)}function vp(s,t){const e=hn(t,this.size,2);s.uniform2fv(this.addr,e)}function yp(s,t){const e=hn(t,this.size,3);s.uniform3fv(this.addr,e)}function _p(s,t){const e=hn(t,this.size,4);s.uniform4fv(this.addr,e)}function bp(s,t){const e=hn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xp(s,t){const e=hn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sp(s,t){const e=hn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Mp(s,t){s.uniform1iv(this.addr,t)}function Tp(s,t){s.uniform2iv(this.addr,t)}function Ep(s,t){s.uniform3iv(this.addr,t)}function Ap(s,t){s.uniform4iv(this.addr,t)}function wp(s,t){s.uniform1uiv(this.addr,t)}function Cp(s,t){s.uniform2uiv(this.addr,t)}function Rp(s,t){s.uniform3uiv(this.addr,t)}function Pp(s,t){s.uniform4uiv(this.addr,t)}function Lp(s,t,e){const i=this.cache,n=t.length,a=Ss(e,n);le(i,a)||(s.uniform1iv(this.addr,a),ce(i,a));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||ll,a[r])}function Up(s,t,e){const i=this.cache,n=t.length,a=Ss(e,n);le(i,a)||(s.uniform1iv(this.addr,a),ce(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||hl,a[r])}function Dp(s,t,e){const i=this.cache,n=t.length,a=Ss(e,n);le(i,a)||(s.uniform1iv(this.addr,a),ce(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||ul,a[r])}function Ip(s,t,e){const i=this.cache,n=t.length,a=Ss(e,n);le(i,a)||(s.uniform1iv(this.addr,a),ce(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||dl,a[r])}function kp(s){switch(s){case 5126:return gp;case 35664:return vp;case 35665:return yp;case 35666:return _p;case 35674:return bp;case 35675:return xp;case 35676:return Sp;case 5124:case 35670:return Mp;case 35667:case 35671:return Tp;case 35668:case 35672:return Ep;case 35669:case 35673:return Ap;case 5125:return wp;case 36294:return Cp;case 36295:return Rp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Ip}}class Np{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mp(e.type)}}class Op{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kp(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function oo(s,t){s.seq.push(t),s.map[t.id]=t}function Fp(s,t,e){const i=s.name,n=i.length;for(ia.lastIndex=0;;){const a=ia.exec(i),r=ia.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){oo(e,c===void 0?new Np(o,s,t):new Op(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new zp(o),oo(e,h)),e=h}}}class cs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),r=t.getUniformLocation(e,a.name);Fp(a,r,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function lo(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Bp=37297;let Hp=0;function Gp(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function Vp(s){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s);let i;switch(t===e?i="":t===fs&&e===ps?i="LinearDisplayP3ToLinearSRGB":t===ps&&e===fs&&(i="LinearSRGBToLinearDisplayP3"),s){case ii:case _s:return[i,"LinearTransferOETF"];case fe:case Ua:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function co(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Gp(s.getShaderSource(t),r)}else return n}function qp(s,t){const e=Vp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Wp(s,t){let e;switch(t){case ec:e="Linear";break;case ic:e="Reinhard";break;case nc:e="OptimizedCineon";break;case sc:e="ACESFilmic";break;case rc:e="AgX";break;case ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function $p(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ji).join(`
`)}function Yp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function jp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Ji(s){return s!==""}function ho(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(s){return s.replace(Zp,Jp)}const Kp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jp(s,t){let e=Gt[t];if(e===void 0){const i=Kp.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function po(s){return s.replace(Qp,tf)}function tf(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function fo(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ef(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ko?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qe&&(t="SHADOWMAP_TYPE_VSM"),t}function nf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case sn:case an:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case an:t="ENVMAP_MODE_REFRACTION";break}return t}function af(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case No:t="ENVMAP_BLENDING_MULTIPLY";break;case Ql:t="ENVMAP_BLENDING_MIX";break;case tc:t="ENVMAP_BLENDING_ADD";break}return t}function rf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function of(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=ef(e),c=nf(e),d=sf(e),h=af(e),u=rf(e),m=e.isWebGL2?"":Xp(e),g=$p(e),v=Yp(a),p=n.createProgram();let f,A,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ji).join(`
`),f.length>0&&(f+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ji).join(`
`),A.length>0&&(A+=`
`)):(f=[fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),A=[m,fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ui?Wp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,qp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),r=Ta(r),r=ho(r,e),r=uo(r,e),o=Ta(o),o=ho(o,e),o=uo(o,e),r=po(r),o=po(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const M=_+f+r,D=_+A+o,R=lo(n,n.VERTEX_SHADER,M),C=lo(n,n.FRAGMENT_SHADER,D);n.attachShader(p,R),n.attachShader(p,C),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function H(X){if(s.debug.checkShaderErrors){const it=n.getProgramInfoLog(p).trim(),U=n.getShaderInfoLog(R).trim(),G=n.getShaderInfoLog(C).trim();let I=!0,$=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,R,C);else{const K=co(n,R,"vertex"),tt=co(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+K+`
`+tt)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(U===""||G==="")&&($=!1);$&&(X.diagnostics={runnable:I,programLog:it,vertexShader:{log:U,prefix:f},fragmentShader:{log:G,prefix:A}})}n.deleteShader(R),n.deleteShader(C),b=new cs(n,p),x=jp(n,p)}let b;this.getUniforms=function(){return b===void 0&&H(this),b};let x;this.getAttributes=function(){return x===void 0&&H(this),x};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(p,Bp)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}let lf=0;class cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new df(t),e.set(t,i)),i}}class df{constructor(t){this.id=lf++,this.code=t,this.usedTimes=0}}function hf(s,t,e,i,n,a,r){const o=new Jo,l=new cf,c=[],d=n.isWebGL2,h=n.logarithmicDepthBuffer,u=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function p(b,x,F,X,it){const U=X.fog,G=it.geometry,I=b.isMeshStandardMaterial?X.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||I),K=$&&$.mapping===ys?$.image.height:null,tt=g[b.type];b.precision!==null&&(m=n.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const w=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,E=w!==void 0?w.length:0;let z=0;G.morphAttributes.position!==void 0&&(z=1),G.morphAttributes.normal!==void 0&&(z=2),G.morphAttributes.color!==void 0&&(z=3);let O,q,et,lt;if(tt){const ne=qe[tt];O=ne.vertexShader,q=ne.fragmentShader}else O=b.vertexShader,q=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),lt=l.getFragmentShaderID(b);const Q=s.getRenderTarget(),ut=it.isInstancedMesh===!0,_t=it.isBatchedMesh===!0,ft=!!b.map,bt=!!b.matcap,L=!!$,ct=!!b.aoMap,W=!!b.lightMap,at=!!b.bumpMap,J=!!b.normalMap,Mt=!!b.displacementMap,gt=!!b.emissiveMap,S=!!b.metalnessMap,y=!!b.roughnessMap,B=b.anisotropy>0,nt=b.clearcoat>0,rt=b.iridescence>0,st=b.sheen>0,wt=b.transmission>0,vt=B&&!!b.anisotropyMap,St=nt&&!!b.clearcoatMap,Rt=nt&&!!b.clearcoatNormalMap,It=nt&&!!b.clearcoatRoughnessMap,ot=rt&&!!b.iridescenceMap,zt=rt&&!!b.iridescenceThicknessMap,Ft=st&&!!b.sheenColorMap,Dt=st&&!!b.sheenRoughnessMap,Ct=!!b.specularMap,Tt=!!b.specularColorMap,P=!!b.specularIntensityMap,dt=wt&&!!b.transmissionMap,Pt=wt&&!!b.thicknessMap,At=!!b.gradientMap,ht=!!b.alphaMap,k=b.alphaTest>0,pt=!!b.alphaHash,xt=!!b.extensions,kt=!!G.attributes.uv1,Ut=!!G.attributes.uv2,$t=!!G.attributes.uv3;let Yt=ui;return b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Yt=s.toneMapping),{isWebGL2:d,shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:O,fragmentShader:q,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:_t,instancing:ut,instancingColor:ut&&it.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ii,map:ft,matcap:bt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:K,aoMap:ct,lightMap:W,bumpMap:at,normalMap:J,displacementMap:u&&Mt,emissiveMap:gt,normalMapObjectSpace:J&&b.normalMapType===yc,normalMapTangentSpace:J&&b.normalMapType===Xo,metalnessMap:S,roughnessMap:y,anisotropy:B,anisotropyMap:vt,clearcoat:nt,clearcoatMap:St,clearcoatNormalMap:Rt,clearcoatRoughnessMap:It,iridescence:rt,iridescenceMap:ot,iridescenceThicknessMap:zt,sheen:st,sheenColorMap:Ft,sheenRoughnessMap:Dt,specularMap:Ct,specularColorMap:Tt,specularIntensityMap:P,transmission:wt,transmissionMap:dt,thicknessMap:Pt,gradientMap:At,opaque:b.transparent===!1&&b.blending===en,alphaMap:ht,alphaTest:k,alphaHash:pt,combine:b.combine,mapUv:ft&&v(b.map.channel),aoMapUv:ct&&v(b.aoMap.channel),lightMapUv:W&&v(b.lightMap.channel),bumpMapUv:at&&v(b.bumpMap.channel),normalMapUv:J&&v(b.normalMap.channel),displacementMapUv:Mt&&v(b.displacementMap.channel),emissiveMapUv:gt&&v(b.emissiveMap.channel),metalnessMapUv:S&&v(b.metalnessMap.channel),roughnessMapUv:y&&v(b.roughnessMap.channel),anisotropyMapUv:vt&&v(b.anisotropyMap.channel),clearcoatMapUv:St&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&v(b.sheenRoughnessMap.channel),specularMapUv:Ct&&v(b.specularMap.channel),specularColorMapUv:Tt&&v(b.specularColorMap.channel),specularIntensityMapUv:P&&v(b.specularIntensityMap.channel),transmissionMapUv:dt&&v(b.transmissionMap.channel),thicknessMapUv:Pt&&v(b.thicknessMap.channel),alphaMapUv:ht&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(J||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:kt,vertexUv2s:Ut,vertexUv3s:$t,pointsUvs:it.isPoints===!0&&!!G.attributes.uv&&(ft||ht),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:it.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:z,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ft&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===Kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Be,flipSided:b.side===Te,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xt&&b.extensions.derivatives===!0,extensionFragDepth:xt&&b.extensions.fragDepth===!0,extensionDrawBuffers:xt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)x.push(F),x.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(A(x,b),_(x,b),x.push(s.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function A(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function _(b,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function M(b){const x=g[b.type];let F;if(x){const X=qe[x];F=Xc.clone(X.uniforms)}else F=b.uniforms;return F}function D(b,x){let F;for(let X=0,it=c.length;X<it;X++){const U=c[X];if(U.cacheKey===x){F=U,++F.usedTimes;break}}return F===void 0&&(F=new of(s,x,b,a),c.push(F)),F}function R(b){if(--b.usedTimes===0){const x=c.indexOf(b);c[x]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:D,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:H}}function uf(){let s=new WeakMap;function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function e(a){s.delete(a)}function i(a,r,o){s.get(a)[r]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function pf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function mo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function go(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(h,u,m,g,v,p){let f=s[t];return f===void 0?(f={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},s[t]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=p),t++,f}function o(h,u,m,g,v,p){const f=r(h,u,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?n.push(f):e.push(f)}function l(h,u,m,g,v,p){const f=r(h,u,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?n.unshift(f):e.unshift(f)}function c(h,u){e.length>1&&e.sort(h||pf),i.length>1&&i.sort(u||mo),n.length>1&&n.sort(u||mo)}function d(){for(let h=t,u=s.length;h<u;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:d,sort:c}}function ff(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new go,s.set(i,[r])):n>=a.length?(r=new go,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function mf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Xt};break;case"SpotLight":e={position:new N,direction:new N,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function gf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let vf=0;function yf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _f(s,t){const e=new mf,i=gf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new N);const a=new N,r=new ae,o=new ae;function l(d,h){let u=0,m=0,g=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let v=0,p=0,f=0,A=0,_=0,M=0,D=0,R=0,C=0,H=0,b=0;d.sort(yf);const x=h===!0?Math.PI:1;for(let X=0,it=d.length;X<it;X++){const U=d[X],G=U.color,I=U.intensity,$=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=G.r*I*x,m+=G.g*I*x,g+=G.b*I*x;else if(U.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(U.sh.coefficients[tt],I);b++}else if(U.isDirectionalLight){const tt=e.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const w=U.shadow,E=i.get(U);E.shadowBias=w.bias,E.shadowNormalBias=w.normalBias,E.shadowRadius=w.radius,E.shadowMapSize=w.mapSize,n.directionalShadow[v]=E,n.directionalShadowMap[v]=K,n.directionalShadowMatrix[v]=U.shadow.matrix,M++}n.directional[v]=tt,v++}else if(U.isSpotLight){const tt=e.get(U);tt.position.setFromMatrixPosition(U.matrixWorld),tt.color.copy(G).multiplyScalar(I*x),tt.distance=$,tt.coneCos=Math.cos(U.angle),tt.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),tt.decay=U.decay,n.spot[f]=tt;const w=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,w.updateMatrices(U),U.castShadow&&H++),n.spotLightMatrix[f]=w.matrix,U.castShadow){const E=i.get(U);E.shadowBias=w.bias,E.shadowNormalBias=w.normalBias,E.shadowRadius=w.radius,E.shadowMapSize=w.mapSize,n.spotShadow[f]=E,n.spotShadowMap[f]=K,R++}f++}else if(U.isRectAreaLight){const tt=e.get(U);tt.color.copy(G).multiplyScalar(I),tt.halfWidth.set(U.width*.5,0,0),tt.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=tt,A++}else if(U.isPointLight){const tt=e.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity*x),tt.distance=U.distance,tt.decay=U.decay,U.castShadow){const w=U.shadow,E=i.get(U);E.shadowBias=w.bias,E.shadowNormalBias=w.normalBias,E.shadowRadius=w.radius,E.shadowMapSize=w.mapSize,E.shadowCameraNear=w.camera.near,E.shadowCameraFar=w.camera.far,n.pointShadow[p]=E,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=U.shadow.matrix,D++}n.point[p]=tt,p++}else if(U.isHemisphereLight){const tt=e.get(U);tt.skyColor.copy(U.color).multiplyScalar(I*x),tt.groundColor.copy(U.groundColor).multiplyScalar(I*x),n.hemi[_]=tt,_++}}A>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==v||F.pointLength!==p||F.spotLength!==f||F.rectAreaLength!==A||F.hemiLength!==_||F.numDirectionalShadows!==M||F.numPointShadows!==D||F.numSpotShadows!==R||F.numSpotMaps!==C||F.numLightProbes!==b)&&(n.directional.length=v,n.spot.length=f,n.rectArea.length=A,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=R+C-H,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=b,F.directionalLength=v,F.pointLength=p,F.spotLength=f,F.rectAreaLength=A,F.hemiLength=_,F.numDirectionalShadows=M,F.numPointShadows=D,F.numSpotShadows=R,F.numSpotMaps=C,F.numLightProbes=b,n.version=vf++)}function c(d,h){let u=0,m=0,g=0,v=0,p=0;const f=h.matrixWorldInverse;for(let A=0,_=d.length;A<_;A++){const M=d[A];if(M.isDirectionalLight){const D=n.directional[u];D.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(f),u++}else if(M.isSpotLight){const D=n.spot[g];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const D=n.rectArea[v];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),D.halfWidth.set(M.width*.5,0,0),D.halfHeight.set(0,M.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const D=n.point[m];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const D=n.hemi[p];D.direction.setFromMatrixPosition(M.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:n}}function vo(s,t){const e=new _f(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function r(h){i.push(h)}function o(h){n.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function bf(s,t){let e=new WeakMap;function i(a,r=0){const o=e.get(a);let l;return o===void 0?(l=new vo(s,t),e.set(a,[l])):r>=o.length?(l=new vo(s,t),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class xf extends dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sf extends dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tf=`uniform sampler2D shadow_pass;
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
}`;function Ef(s,t,e){let i=new Ia;const n=new mt,a=new mt,r=new pe,o=new xf({depthPacking:vc}),l=new Sf,c={},d=e.maxTextureSize,h={[fi]:Te,[Te]:fi,[Be]:Be},u=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Mf,fragmentShader:Tf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(R,C,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),X=s.state;X.setBlending(hi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const it=f!==Qe&&this.type===Qe,U=f===Qe&&this.type!==Qe;for(let G=0,I=R.length;G<I;G++){const $=R[G],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const tt=K.getFrameExtents();if(n.multiply(tt),a.copy(K.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/tt.x),n.x=a.x*tt.x,K.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/tt.y),n.y=a.y*tt.y,K.mapSize.y=a.y)),K.map===null||it===!0||U===!0){const E=this.type!==Qe?{minFilter:xe,magFilter:xe}:{};K.map!==null&&K.map.dispose(),K.map=new Ci(n.x,n.y,E),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const w=K.getViewportCount();for(let E=0;E<w;E++){const z=K.getViewport(E);r.set(a.x*z.x,a.y*z.y,a.x*z.z,a.y*z.w),X.viewport(r),K.updateMatrices($,E),i=K.getFrustum(),M(C,H,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===Qe&&A(K,H),K.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(b,x,F)};function A(R,C){const H=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ci(n.x,n.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,H,u,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,H,m,v,null)}function _(R,C,H,b){let x=null;const F=H.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)x=F;else if(x=H.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=x.uuid,it=C.uuid;let U=c[X];U===void 0&&(U={},c[X]=U);let G=U[it];G===void 0&&(G=x.clone(),U[it]=G,C.addEventListener("dispose",D)),x=G}if(x.visible=C.visible,x.wireframe=C.wireframe,b===Qe?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,H.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=s.properties.get(x);X.light=H}return x}function M(R,C,H,b,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Qe)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld);const it=t.update(R),U=R.material;if(Array.isArray(U)){const G=it.groups;for(let I=0,$=G.length;I<$;I++){const K=G[I],tt=U[K.materialIndex];if(tt&&tt.visible){const w=_(R,tt,b,x);R.onBeforeShadow(s,R,C,H,it,w,K),s.renderBufferDirect(H,null,it,w,R,K),R.onAfterShadow(s,R,C,H,it,w,K)}}}else if(U.visible){const G=_(R,U,b,x);R.onBeforeShadow(s,R,C,H,it,G,null),s.renderBufferDirect(H,null,it,G,R,null),R.onAfterShadow(s,R,C,H,it,G,null)}}const X=R.children;for(let it=0,U=X.length;it<U;it++)M(X[it],C,H,b,x)}function D(R){R.target.removeEventListener("dispose",D);for(const H in c){const b=c[H],x=R.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function Af(s,t,e){const i=e.isWebGL2;function n(){let k=!1;const pt=new pe;let xt=null;const kt=new pe(0,0,0,0);return{setMask:function(Ut){xt!==Ut&&!k&&(s.colorMask(Ut,Ut,Ut,Ut),xt=Ut)},setLocked:function(Ut){k=Ut},setClear:function(Ut,$t,Yt,te,ne){ne===!0&&(Ut*=te,$t*=te,Yt*=te),pt.set(Ut,$t,Yt,te),kt.equals(pt)===!1&&(s.clearColor(Ut,$t,Yt,te),kt.copy(pt))},reset:function(){k=!1,xt=null,kt.set(-1,0,0,0)}}}function a(){let k=!1,pt=null,xt=null,kt=null;return{setTest:function(Ut){Ut?_t(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(Ut){pt!==Ut&&!k&&(s.depthMask(Ut),pt=Ut)},setFunc:function(Ut){if(xt!==Ut){switch(Ut){case Xl:s.depthFunc(s.NEVER);break;case $l:s.depthFunc(s.ALWAYS);break;case Yl:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case jl:s.depthFunc(s.EQUAL);break;case Zl:s.depthFunc(s.GEQUAL);break;case Kl:s.depthFunc(s.GREATER);break;case Jl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){kt!==Ut&&(s.clearDepth(Ut),kt=Ut)},reset:function(){k=!1,pt=null,xt=null,kt=null}}}function r(){let k=!1,pt=null,xt=null,kt=null,Ut=null,$t=null,Yt=null,te=null,ne=null;return{setTest:function(jt){k||(jt?_t(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(jt){pt!==jt&&!k&&(s.stencilMask(jt),pt=jt)},setFunc:function(jt,re,Ve){(xt!==jt||kt!==re||Ut!==Ve)&&(s.stencilFunc(jt,re,Ve),xt=jt,kt=re,Ut=Ve)},setOp:function(jt,re,Ve){($t!==jt||Yt!==re||te!==Ve)&&(s.stencilOp(jt,re,Ve),$t=jt,Yt=re,te=Ve)},setLocked:function(jt){k=jt},setClear:function(jt){ne!==jt&&(s.clearStencil(jt),ne=jt)},reset:function(){k=!1,pt=null,xt=null,kt=null,Ut=null,$t=null,Yt=null,te=null,ne=null}}}const o=new n,l=new a,c=new r,d=new WeakMap,h=new WeakMap;let u={},m={},g=new WeakMap,v=[],p=null,f=!1,A=null,_=null,M=null,D=null,R=null,C=null,H=null,b=new Xt(0,0,0),x=0,F=!1,X=null,it=null,U=null,G=null,I=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,tt=0;const w=s.getParameter(s.VERSION);w.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(w)[1]),K=tt>=1):w.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),K=tt>=2);let E=null,z={};const O=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),et=new pe().fromArray(O),lt=new pe().fromArray(q);function Q(k,pt,xt,kt){const Ut=new Uint8Array(4),$t=s.createTexture();s.bindTexture(k,$t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<xt;Yt++)i&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(pt,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(pt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return $t}const ut={};ut[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ut[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(s.DEPTH_TEST),l.setFunc(hs),gt(!1),S(Ka),_t(s.CULL_FACE),J(hi);function _t(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function ft(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function bt(k,pt){return m[k]!==pt?(s.bindFramebuffer(k,pt),m[k]=pt,i&&(k===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=pt),k===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=pt)),!0):!1}function L(k,pt){let xt=v,kt=!1;if(k)if(xt=g.get(pt),xt===void 0&&(xt=[],g.set(pt,xt)),k.isWebGLMultipleRenderTargets){const Ut=k.texture;if(xt.length!==Ut.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let $t=0,Yt=Ut.length;$t<Yt;$t++)xt[$t]=s.COLOR_ATTACHMENT0+$t;xt.length=Ut.length,kt=!0}}else xt[0]!==s.COLOR_ATTACHMENT0&&(xt[0]=s.COLOR_ATTACHMENT0,kt=!0);else xt[0]!==s.BACK&&(xt[0]=s.BACK,kt=!0);kt&&(e.isWebGL2?s.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function ct(k){return p!==k?(s.useProgram(k),p=k,!0):!1}const W={[Mi]:s.FUNC_ADD,[Ll]:s.FUNC_SUBTRACT,[Ul]:s.FUNC_REVERSE_SUBTRACT};if(i)W[er]=s.MIN,W[ir]=s.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(W[er]=k.MIN_EXT,W[ir]=k.MAX_EXT)}const at={[Dl]:s.ZERO,[Il]:s.ONE,[kl]:s.SRC_COLOR,[ma]:s.SRC_ALPHA,[Hl]:s.SRC_ALPHA_SATURATE,[Fl]:s.DST_COLOR,[Ol]:s.DST_ALPHA,[Nl]:s.ONE_MINUS_SRC_COLOR,[ga]:s.ONE_MINUS_SRC_ALPHA,[Bl]:s.ONE_MINUS_DST_COLOR,[zl]:s.ONE_MINUS_DST_ALPHA,[Gl]:s.CONSTANT_COLOR,[Vl]:s.ONE_MINUS_CONSTANT_COLOR,[ql]:s.CONSTANT_ALPHA,[Wl]:s.ONE_MINUS_CONSTANT_ALPHA};function J(k,pt,xt,kt,Ut,$t,Yt,te,ne,jt){if(k===hi){f===!0&&(ft(s.BLEND),f=!1);return}if(f===!1&&(_t(s.BLEND),f=!0),k!==Pl){if(k!==A||jt!==F){if((_!==Mi||R!==Mi)&&(s.blendEquation(s.FUNC_ADD),_=Mi,R=Mi),jt)switch(k){case en:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFunc(s.ONE,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case en:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,D=null,C=null,H=null,b.set(0,0,0),x=0,A=k,F=jt}return}Ut=Ut||pt,$t=$t||xt,Yt=Yt||kt,(pt!==_||Ut!==R)&&(s.blendEquationSeparate(W[pt],W[Ut]),_=pt,R=Ut),(xt!==M||kt!==D||$t!==C||Yt!==H)&&(s.blendFuncSeparate(at[xt],at[kt],at[$t],at[Yt]),M=xt,D=kt,C=$t,H=Yt),(te.equals(b)===!1||ne!==x)&&(s.blendColor(te.r,te.g,te.b,ne),b.copy(te),x=ne),A=k,F=!1}function Mt(k,pt){k.side===Be?ft(s.CULL_FACE):_t(s.CULL_FACE);let xt=k.side===Te;pt&&(xt=!xt),gt(xt),k.blending===en&&k.transparent===!1?J(hi):J(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const kt=k.stencilWrite;c.setTest(kt),kt&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),B(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(k){X!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),X=k)}function S(k){k!==Cl?(_t(s.CULL_FACE),k!==it&&(k===Ka?s.cullFace(s.BACK):k===Rl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),it=k}function y(k){k!==U&&(K&&s.lineWidth(k),U=k)}function B(k,pt,xt){k?(_t(s.POLYGON_OFFSET_FILL),(G!==pt||I!==xt)&&(s.polygonOffset(pt,xt),G=pt,I=xt)):ft(s.POLYGON_OFFSET_FILL)}function nt(k){k?_t(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function rt(k){k===void 0&&(k=s.TEXTURE0+$-1),E!==k&&(s.activeTexture(k),E=k)}function st(k,pt,xt){xt===void 0&&(E===null?xt=s.TEXTURE0+$-1:xt=E);let kt=z[xt];kt===void 0&&(kt={type:void 0,texture:void 0},z[xt]=kt),(kt.type!==k||kt.texture!==pt)&&(E!==xt&&(s.activeTexture(xt),E=xt),s.bindTexture(k,pt||ut[k]),kt.type=k,kt.texture=pt)}function wt(){const k=z[E];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(k){et.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),et.copy(k))}function dt(k){lt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),lt.copy(k))}function Pt(k,pt){let xt=h.get(pt);xt===void 0&&(xt=new WeakMap,h.set(pt,xt));let kt=xt.get(k);kt===void 0&&(kt=s.getUniformBlockIndex(pt,k.name),xt.set(k,kt))}function At(k,pt){const kt=h.get(pt).get(k);d.get(pt)!==kt&&(s.uniformBlockBinding(pt,kt,k.__bindingPointIndex),d.set(pt,kt))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},E=null,z={},m={},g=new WeakMap,v=[],p=null,f=!1,A=null,_=null,M=null,D=null,R=null,C=null,H=null,b=new Xt(0,0,0),x=0,F=!1,X=null,it=null,U=null,G=null,I=null,et.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_t,disable:ft,bindFramebuffer:bt,drawBuffers:L,useProgram:ct,setBlending:J,setMaterial:Mt,setFlipSided:gt,setCullFace:S,setLineWidth:y,setPolygonOffset:B,setScissorTest:nt,activeTexture:rt,bindTexture:st,unbindTexture:wt,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:Ct,texImage3D:Tt,updateUBOMapping:Pt,uniformBlockBinding:At,texStorage2D:Ft,texStorage3D:Dt,texSubImage2D:Rt,texSubImage3D:It,compressedTexSubImage2D:ot,compressedTexSubImage3D:zt,scissor:P,viewport:dt,reset:ht}}function wf(s,t,e,i,n,a,r){const o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return m?new OffscreenCanvas(S,y):gs("canvas")}function v(S,y,B,nt){let rt=1;if((S.width>nt||S.height>nt)&&(rt=nt/Math.max(S.width,S.height)),rt<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const st=y?Ma:Math.floor,wt=st(rt*S.width),vt=st(rt*S.height);h===void 0&&(h=g(wt,vt));const St=B?g(wt,vt):h;return St.width=wt,St.height=vt,St.getContext("2d").drawImage(S,0,0,wt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+wt+"x"+vt+")."),St}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Ur(S.width)&&Ur(S.height)}function f(S){return o?!1:S.wrapS!==He||S.wrapT!==He||S.minFilter!==xe&&S.minFilter!==De}function A(S,y){return S.generateMipmaps&&y&&S.minFilter!==xe&&S.minFilter!==De}function _(S){s.generateMipmap(S)}function M(S,y,B,nt,rt=!1){if(o===!1)return y;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let st=y;if(y===s.RED&&(B===s.FLOAT&&(st=s.R32F),B===s.HALF_FLOAT&&(st=s.R16F),B===s.UNSIGNED_BYTE&&(st=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(st=s.R8UI),B===s.UNSIGNED_SHORT&&(st=s.R16UI),B===s.UNSIGNED_INT&&(st=s.R32UI),B===s.BYTE&&(st=s.R8I),B===s.SHORT&&(st=s.R16I),B===s.INT&&(st=s.R32I)),y===s.RG&&(B===s.FLOAT&&(st=s.RG32F),B===s.HALF_FLOAT&&(st=s.RG16F),B===s.UNSIGNED_BYTE&&(st=s.RG8)),y===s.RGBA){const wt=rt?us:Zt.getTransfer(nt);B===s.FLOAT&&(st=s.RGBA32F),B===s.HALF_FLOAT&&(st=s.RGBA16F),B===s.UNSIGNED_BYTE&&(st=wt===Kt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function D(S,y,B){return A(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==xe&&S.minFilter!==De?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function R(S){return S===xe||S===nr||S===Cs?s.NEAREST:s.LINEAR}function C(S){const y=S.target;y.removeEventListener("dispose",C),b(y),y.isVideoTexture&&d.delete(y)}function H(S){const y=S.target;y.removeEventListener("dispose",H),F(y)}function b(S){const y=i.get(S);if(y.__webglInit===void 0)return;const B=S.source,nt=u.get(B);if(nt){const rt=nt[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&x(S),Object.keys(nt).length===0&&u.delete(B)}i.remove(S)}function x(S){const y=i.get(S);s.deleteTexture(y.__webglTexture);const B=S.source,nt=u.get(B);delete nt[y.__cacheKey],r.memory.textures--}function F(S){const y=S.texture,B=i.get(S),nt=i.get(y);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),r.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(B.__webglFramebuffer[rt]))for(let st=0;st<B.__webglFramebuffer[rt].length;st++)s.deleteFramebuffer(B.__webglFramebuffer[rt][st]);else s.deleteFramebuffer(B.__webglFramebuffer[rt]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[rt])}else{if(Array.isArray(B.__webglFramebuffer))for(let rt=0;rt<B.__webglFramebuffer.length;rt++)s.deleteFramebuffer(B.__webglFramebuffer[rt]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let rt=0;rt<B.__webglColorRenderbuffer.length;rt++)B.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[rt]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let rt=0,st=y.length;rt<st;rt++){const wt=i.get(y[rt]);wt.__webglTexture&&(s.deleteTexture(wt.__webglTexture),r.memory.textures--),i.remove(y[rt])}i.remove(y),i.remove(S)}let X=0;function it(){X=0}function U(){const S=X;return S>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+n.maxTextures),X+=1,S}function G(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function I(S,y){const B=i.get(S);if(S.isVideoTexture&&Mt(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const nt=S.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(B,S,y);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function $(S,y){const B=i.get(S);if(S.version>0&&B.__version!==S.version){et(B,S,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function K(S,y){const B=i.get(S);if(S.version>0&&B.__version!==S.version){et(B,S,y);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function tt(S,y){const B=i.get(S);if(S.version>0&&B.__version!==S.version){lt(B,S,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const w={[_a]:s.REPEAT,[He]:s.CLAMP_TO_EDGE,[ba]:s.MIRRORED_REPEAT},E={[xe]:s.NEAREST,[nr]:s.NEAREST_MIPMAP_NEAREST,[Cs]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[oc]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},z={[_c]:s.NEVER,[Ec]:s.ALWAYS,[bc]:s.LESS,[$o]:s.LEQUAL,[xc]:s.EQUAL,[Tc]:s.GEQUAL,[Sc]:s.GREATER,[Mc]:s.NOTEQUAL};function O(S,y,B){if(B?(s.texParameteri(S,s.TEXTURE_WRAP_S,w[y.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,w[y.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,w[y.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,E[y.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,E[y.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==He||y.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,R(y.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==xe&&y.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,z[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===xe||y.minFilter!==Cs&&y.minFilter!==Tn||y.type===di&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===En&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(s.texParameterf(S,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function q(S,y){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",C));const nt=y.source;let rt=u.get(nt);rt===void 0&&(rt={},u.set(nt,rt));const st=G(y);if(st!==S.__cacheKey){rt[st]===void 0&&(rt[st]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),rt[st].usedTimes++;const wt=rt[S.__cacheKey];wt!==void 0&&(rt[S.__cacheKey].usedTimes--,wt.usedTimes===0&&x(y)),S.__cacheKey=st,S.__webglTexture=rt[st].texture}return B}function et(S,y,B){let nt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=s.TEXTURE_3D);const rt=q(S,y),st=y.source;e.bindTexture(nt,S.__webglTexture,s.TEXTURE0+B);const wt=i.get(st);if(st.version!==wt.__version||rt===!0){e.activeTexture(s.TEXTURE0+B);const vt=Zt.getPrimaries(Zt.workingColorSpace),St=y.colorSpace===Ne?null:Zt.getPrimaries(y.colorSpace),Rt=y.colorSpace===Ne||vt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const It=f(y)&&p(y.image)===!1;let ot=v(y.image,It,!1,n.maxTextureSize);ot=gt(y,ot);const zt=p(ot)||o,Ft=a.convert(y.format,y.colorSpace);let Dt=a.convert(y.type),Ct=M(y.internalFormat,Ft,Dt,y.colorSpace,y.isVideoTexture);O(nt,y,zt);let Tt;const P=y.mipmaps,dt=o&&y.isVideoTexture!==!0&&Ct!==qo,Pt=wt.__version===void 0||rt===!0,At=D(y,ot,zt);if(y.isDepthTexture)Ct=s.DEPTH_COMPONENT,o?y.type===di?Ct=s.DEPTH_COMPONENT32F:y.type===ci?Ct=s.DEPTH_COMPONENT24:y.type===Ei?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:y.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ai&&Ct===s.DEPTH_COMPONENT&&y.type!==La&&y.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ci,Dt=a.convert(y.type)),y.format===rn&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,y.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ei,Dt=a.convert(y.type))),Pt&&(dt?e.texStorage2D(s.TEXTURE_2D,1,Ct,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Ct,ot.width,ot.height,0,Ft,Dt,null));else if(y.isDataTexture)if(P.length>0&&zt){dt&&Pt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,P[0].width,P[0].height);for(let ht=0,k=P.length;ht<k;ht++)Tt=P[ht],dt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Tt.width,Tt.height,Ft,Dt,Tt.data):e.texImage2D(s.TEXTURE_2D,ht,Ct,Tt.width,Tt.height,0,Ft,Dt,Tt.data);y.generateMipmaps=!1}else dt?(Pt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,ot.width,ot.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,Ft,Dt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,ot.width,ot.height,0,Ft,Dt,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){dt&&Pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,P[0].width,P[0].height,ot.depth);for(let ht=0,k=P.length;ht<k;ht++)Tt=P[ht],y.format!==Ge?Ft!==null?dt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Tt.width,Tt.height,ot.depth,Ft,Tt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Ct,Tt.width,Tt.height,ot.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Tt.width,Tt.height,ot.depth,Ft,Dt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,Ct,Tt.width,Tt.height,ot.depth,0,Ft,Dt,Tt.data)}else{dt&&Pt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,P[0].width,P[0].height);for(let ht=0,k=P.length;ht<k;ht++)Tt=P[ht],y.format!==Ge?Ft!==null?dt?e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,Tt.width,Tt.height,Ft,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,Ct,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Tt.width,Tt.height,Ft,Dt,Tt.data):e.texImage2D(s.TEXTURE_2D,ht,Ct,Tt.width,Tt.height,0,Ft,Dt,Tt.data)}else if(y.isDataArrayTexture)dt?(Pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,ot.width,ot.height,ot.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Ft,Dt,ot.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,ot.width,ot.height,ot.depth,0,Ft,Dt,ot.data);else if(y.isData3DTexture)dt?(Pt&&e.texStorage3D(s.TEXTURE_3D,At,Ct,ot.width,ot.height,ot.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Ft,Dt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,ot.width,ot.height,ot.depth,0,Ft,Dt,ot.data);else if(y.isFramebufferTexture){if(Pt)if(dt)e.texStorage2D(s.TEXTURE_2D,At,Ct,ot.width,ot.height);else{let ht=ot.width,k=ot.height;for(let pt=0;pt<At;pt++)e.texImage2D(s.TEXTURE_2D,pt,Ct,ht,k,0,Ft,Dt,null),ht>>=1,k>>=1}}else if(P.length>0&&zt){dt&&Pt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,P[0].width,P[0].height);for(let ht=0,k=P.length;ht<k;ht++)Tt=P[ht],dt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Ft,Dt,Tt):e.texImage2D(s.TEXTURE_2D,ht,Ct,Ft,Dt,Tt);y.generateMipmaps=!1}else dt?(Pt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,ot.width,ot.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Dt,ot)):e.texImage2D(s.TEXTURE_2D,0,Ct,Ft,Dt,ot);A(y,zt)&&_(nt),wt.__version=st.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function lt(S,y,B){if(y.image.length!==6)return;const nt=q(S,y),rt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+B);const st=i.get(rt);if(rt.version!==st.__version||nt===!0){e.activeTexture(s.TEXTURE0+B);const wt=Zt.getPrimaries(Zt.workingColorSpace),vt=y.colorSpace===Ne?null:Zt.getPrimaries(y.colorSpace),St=y.colorSpace===Ne||wt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Rt=y.isCompressedTexture||y.image[0].isCompressedTexture,It=y.image[0]&&y.image[0].isDataTexture,ot=[];for(let ht=0;ht<6;ht++)!Rt&&!It?ot[ht]=v(y.image[ht],!1,!0,n.maxCubemapSize):ot[ht]=It?y.image[ht].image:y.image[ht],ot[ht]=gt(y,ot[ht]);const zt=ot[0],Ft=p(zt)||o,Dt=a.convert(y.format,y.colorSpace),Ct=a.convert(y.type),Tt=M(y.internalFormat,Dt,Ct,y.colorSpace),P=o&&y.isVideoTexture!==!0,dt=st.__version===void 0||nt===!0;let Pt=D(y,zt,Ft);O(s.TEXTURE_CUBE_MAP,y,Ft);let At;if(Rt){P&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Tt,zt.width,zt.height);for(let ht=0;ht<6;ht++){At=ot[ht].mipmaps;for(let k=0;k<At.length;k++){const pt=At[k];y.format!==Ge?Dt!==null?P?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k,0,0,pt.width,pt.height,Dt,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k,Tt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k,0,0,pt.width,pt.height,Dt,Ct,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k,Tt,pt.width,pt.height,0,Dt,Ct,pt.data)}}}else{At=y.mipmaps,P&&dt&&(At.length>0&&Pt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Tt,ot[0].width,ot[0].height));for(let ht=0;ht<6;ht++)if(It){P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ot[ht].width,ot[ht].height,Dt,Ct,ot[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Tt,ot[ht].width,ot[ht].height,0,Dt,Ct,ot[ht].data);for(let k=0;k<At.length;k++){const xt=At[k].image[ht].image;P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k+1,0,0,xt.width,xt.height,Dt,Ct,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k+1,Tt,xt.width,xt.height,0,Dt,Ct,xt.data)}}else{P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Dt,Ct,ot[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Tt,Dt,Ct,ot[ht]);for(let k=0;k<At.length;k++){const pt=At[k];P?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k+1,0,0,Dt,Ct,pt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,k+1,Tt,Dt,Ct,pt.image[ht])}}}A(y,Ft)&&_(s.TEXTURE_CUBE_MAP),st.__version=rt.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Q(S,y,B,nt,rt,st){const wt=a.convert(B.format,B.colorSpace),vt=a.convert(B.type),St=M(B.internalFormat,wt,vt,B.colorSpace);if(!i.get(y).__hasExternalTextures){const It=Math.max(1,y.width>>st),ot=Math.max(1,y.height>>st);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,st,St,It,ot,y.depth,0,wt,vt,null):e.texImage2D(rt,st,St,It,ot,0,wt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),J(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,rt,i.get(B).__webglTexture,0,at(y)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,rt,i.get(B).__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(S,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let nt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||J(y)){const rt=y.depthTexture;rt&&rt.isDepthTexture&&(rt.type===di?nt=s.DEPTH_COMPONENT32F:rt.type===ci&&(nt=s.DEPTH_COMPONENT24));const st=at(y);J(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,nt,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,st,nt,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){const nt=at(y);B&&J(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,y.width,y.height):J(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const nt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let rt=0;rt<nt.length;rt++){const st=nt[rt],wt=a.convert(st.format,st.colorSpace),vt=a.convert(st.type),St=M(st.internalFormat,wt,vt,st.colorSpace),Rt=at(y);B&&J(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,St,y.width,y.height):J(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,St,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,St,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),I(y.depthTexture,0);const nt=i.get(y.depthTexture).__webglTexture,rt=at(y);if(y.depthTexture.format===Ai)J(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(y.depthTexture.format===rn)J(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ft(S){const y=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");_t(y.__webglFramebuffer,S)}else if(B){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]=s.createRenderbuffer(),ut(y.__webglDepthbuffer[nt],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),ut(y.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(S,y,B){const nt=i.get(S);y!==void 0&&Q(nt.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ft(S)}function L(S){const y=S.texture,B=i.get(S),nt=i.get(y);S.addEventListener("dispose",H),S.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=y.version,r.memory.textures++);const rt=S.isWebGLCubeRenderTarget===!0,st=S.isWebGLMultipleRenderTargets===!0,wt=p(S)||o;if(rt){B.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[vt]=[];for(let St=0;St<y.mipmaps.length;St++)B.__webglFramebuffer[vt][St]=s.createFramebuffer()}else B.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let vt=0;vt<y.mipmaps.length;vt++)B.__webglFramebuffer[vt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(st)if(n.drawBuffers){const vt=S.texture;for(let St=0,Rt=vt.length;St<Rt;St++){const It=i.get(vt[St]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&J(S)===!1){const vt=st?y:[y];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let St=0;St<vt.length;St++){const Rt=vt[St];B.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[St]);const It=a.convert(Rt.format,Rt.colorSpace),ot=a.convert(Rt.type),zt=M(Rt.internalFormat,It,ot,Rt.colorSpace,S.isXRRenderTarget===!0),Ft=at(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,zt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,B.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),O(s.TEXTURE_CUBE_MAP,y,wt);for(let vt=0;vt<6;vt++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)Q(B.__webglFramebuffer[vt][St],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else Q(B.__webglFramebuffer[vt],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);A(y,wt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const vt=S.texture;for(let St=0,Rt=vt.length;St<Rt;St++){const It=vt[St],ot=i.get(It);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),O(s.TEXTURE_2D,It,wt),Q(B.__webglFramebuffer,S,It,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),A(It,wt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?vt=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,nt.__webglTexture),O(vt,y,wt),o&&y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)Q(B.__webglFramebuffer[St],S,y,s.COLOR_ATTACHMENT0,vt,St);else Q(B.__webglFramebuffer,S,y,s.COLOR_ATTACHMENT0,vt,0);A(y,wt)&&_(vt),e.unbindTexture()}S.depthBuffer&&ft(S)}function ct(S){const y=p(S)||o,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let nt=0,rt=B.length;nt<rt;nt++){const st=B[nt];if(A(st,y)){const wt=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=i.get(st).__webglTexture;e.bindTexture(wt,vt),_(wt),e.unbindTexture()}}}function W(S){if(o&&S.samples>0&&J(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,nt=S.height;let rt=s.COLOR_BUFFER_BIT;const st=[],wt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=i.get(S),St=S.isWebGLMultipleRenderTargets===!0;if(St)for(let Rt=0;Rt<y.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){st.push(s.COLOR_ATTACHMENT0+Rt),S.depthBuffer&&st.push(wt);const It=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(It===!1&&(S.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),St&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]),It===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[wt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[wt])),St){const ot=i.get(y[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,B,nt,0,0,B,nt,rt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let Rt=0;Rt<y.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]);const It=i.get(y[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function at(S){return Math.min(n.maxSamples,S.samples)}function J(S){const y=i.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(S){const y=r.render.frame;d.get(S)!==y&&(d.set(S,y),S.update())}function gt(S,y){const B=S.colorSpace,nt=S.format,rt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===xa||B!==ii&&B!==Ne&&(Zt.getTransfer(B)===Kt?o===!1?t.has("EXT_sRGB")===!0&&nt===Ge?(S.format=xa,S.minFilter=De,S.generateMipmaps=!1):y=jo.sRGBToLinear(y):(nt!==Ge||rt!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=U,this.resetTextureUnits=it,this.setTexture2D=I,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=bt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=J}function Cf(s,t,e){const i=e.isWebGL2;function n(a,r=Ne){let o;const l=Zt.getTransfer(r);if(a===pi)return s.UNSIGNED_BYTE;if(a===Fo)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Bo)return s.UNSIGNED_SHORT_5_5_5_1;if(a===lc)return s.BYTE;if(a===cc)return s.SHORT;if(a===La)return s.UNSIGNED_SHORT;if(a===zo)return s.INT;if(a===ci)return s.UNSIGNED_INT;if(a===di)return s.FLOAT;if(a===En)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===dc)return s.ALPHA;if(a===Ge)return s.RGBA;if(a===hc)return s.LUMINANCE;if(a===uc)return s.LUMINANCE_ALPHA;if(a===Ai)return s.DEPTH_COMPONENT;if(a===rn)return s.DEPTH_STENCIL;if(a===xa)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===pc)return s.RED;if(a===Ho)return s.RED_INTEGER;if(a===fc)return s.RG;if(a===Go)return s.RG_INTEGER;if(a===Vo)return s.RGBA_INTEGER;if(a===Rs||a===Ps||a===Ls||a===Us)if(l===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ps)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Us)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===sr||a===ar||a===rr||a===or)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===sr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ar)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===rr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===or)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===qo)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===lr||a===cr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===lr)return l===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===cr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===dr||a===hr||a===ur||a===pr||a===fr||a===mr||a===gr||a===vr||a===yr||a===_r||a===br||a===xr||a===Sr||a===Mr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===dr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ur)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===pr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===mr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===gr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===vr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===_r)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===br)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===xr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Sr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mr)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ds||a===Tr||a===Er)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===Ds)return l===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Tr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Er)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===mc||a===Ar||a===wr||a===Cr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Ds)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ar)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===wr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Cr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ei?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Rf extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qi extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Lf extends Ui{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,m=null,g=null;const v=e.getContextAttributes();let p=null,f=null;const A=[],_=[],M=new mt;let D=null;const R=new ke;R.layers.enable(1),R.viewport=new pe;const C=new ke;C.layers.enable(2),C.viewport=new pe;const H=[R,C],b=new Rf;b.layers.enable(1),b.layers.enable(2);let x=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=A[O];return q===void 0&&(q=new na,A[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=A[O];return q===void 0&&(q=new na,A[O]=q),q.getGripSpace()},this.getHand=function(O){let q=A[O];return q===void 0&&(q=new na,A[O]=q),q.getHandSpace()};function X(O){const q=_.indexOf(O.inputSource);if(q===-1)return;const et=A[q];et!==void 0&&(et.update(O.inputSource,O.frame,c||r),et.dispatchEvent({type:O.type,data:O.inputSource}))}function it(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",it),n.removeEventListener("inputsourceschange",U);for(let O=0;O<A.length;O++){const q=_[O];q!==null&&(_[O]=null,A[O].disconnect(q))}x=null,F=null,t.setRenderTarget(p),m=null,u=null,h=null,n=null,f=null,z.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(O){if(n=O,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",it),n.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(M),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,e,q),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ci(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,et=null,lt=null;v.depth&&(lt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=v.stencil?rn:Ai,et=v.stencil?Ei:ci);const Q={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:a};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(Q),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new Ci(u.textureWidth,u.textureHeight,{format:Ge,type:pi,depthTexture:new ol(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const ut=t.properties.get(f);ut.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),z.setContext(n),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(O){for(let q=0;q<O.removed.length;q++){const et=O.removed[q],lt=_.indexOf(et);lt>=0&&(_[lt]=null,A[lt].disconnect(et))}for(let q=0;q<O.added.length;q++){const et=O.added[q];let lt=_.indexOf(et);if(lt===-1){for(let ut=0;ut<A.length;ut++)if(ut>=_.length){_.push(et),lt=ut;break}else if(_[ut]===null){_[ut]=et,lt=ut;break}if(lt===-1)break}const Q=A[lt];Q&&Q.connect(et)}}const G=new N,I=new N;function $(O,q,et){G.setFromMatrixPosition(q.matrixWorld),I.setFromMatrixPosition(et.matrixWorld);const lt=G.distanceTo(I),Q=q.projectionMatrix.elements,ut=et.projectionMatrix.elements,_t=Q[14]/(Q[10]-1),ft=Q[14]/(Q[10]+1),bt=(Q[9]+1)/Q[5],L=(Q[9]-1)/Q[5],ct=(Q[8]-1)/Q[0],W=(ut[8]+1)/ut[0],at=_t*ct,J=_t*W,Mt=lt/(-ct+W),gt=Mt*-ct;q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(gt),O.translateZ(Mt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const S=_t+Mt,y=ft+Mt,B=at-gt,nt=J+(lt-gt),rt=bt*ft/y*S,st=L*ft/y*S;O.projectionMatrix.makePerspective(B,nt,rt,st,S,y),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function K(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(n===null)return;b.near=C.near=R.near=O.near,b.far=C.far=R.far=O.far,(x!==b.near||F!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),x=b.near,F=b.far);const q=O.parent,et=b.cameras;K(b,q);for(let lt=0;lt<et.length;lt++)K(et[lt],q);et.length===2?$(b,R,C):b.projectionMatrix.copy(R.projectionMatrix),tt(O,b,q)};function tt(O,q,et){et===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(et.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Sa*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let w=null;function E(O,q){if(d=q.getViewerPose(c||r),g=q,d!==null){const et=d.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let lt=!1;et.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let Q=0;Q<et.length;Q++){const ut=et[Q];let _t=null;if(m!==null)_t=m.getViewport(ut);else{const bt=h.getViewSubImage(u,ut);_t=bt.viewport,Q===0&&(t.setRenderTargetTextures(f,bt.colorTexture,u.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(f))}let ft=H[Q];ft===void 0&&(ft=new ke,ft.layers.enable(Q),ft.viewport=new pe,H[Q]=ft),ft.matrix.fromArray(ut.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ut.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(_t.x,_t.y,_t.width,_t.height),Q===0&&(b.matrix.copy(ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(ft)}}for(let et=0;et<A.length;et++){const lt=_[et],Q=A[et];lt!==null&&Q!==void 0&&Q.update(lt,q,c||r)}w&&w(O,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const z=new al;z.setAnimationLoop(E),this.setAnimationLoop=function(O){w=O},this.dispose=function(){}}}function Uf(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,il(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,A,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),h(p,f)):f.isMeshPhongMaterial?(a(p,f),d(p,f)):f.isMeshStandardMaterial?(a(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),v(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,A,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Te&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Te&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const A=t.get(f).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,A,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=_*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const A=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Df(s,t,e,i){let n={},a={},r=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,_){const M=_.program;i.uniformBlockBinding(A,M)}function c(A,_){let M=n[A.id];M===void 0&&(g(A),M=d(A),n[A.id]=M,A.addEventListener("dispose",p));const D=_.program;i.updateUBOMapping(A,D);const R=t.render.frame;a[A.id]!==R&&(u(A),a[A.id]=R)}function d(A){const _=h();A.__bindingPointIndex=_;const M=s.createBuffer(),D=A.__size,R=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,D,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function h(){for(let A=0;A<o;A++)if(r.indexOf(A)===-1)return r.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){const _=n[A.id],M=A.uniforms,D=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let R=0,C=M.length;R<C;R++){const H=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,x=H.length;b<x;b++){const F=H[b];if(m(F,R,b,D)===!0){const X=F.__offset,it=Array.isArray(F.value)?F.value:[F.value];let U=0;for(let G=0;G<it.length;G++){const I=it[G],$=v(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,X+U,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(A,_,M,D){const R=A.value,C=_+"_"+M;if(D[C]===void 0)return typeof R=="number"||typeof R=="boolean"?D[C]=R:D[C]=R.clone(),!0;{const H=D[C];if(typeof R=="number"||typeof R=="boolean"){if(H!==R)return D[C]=R,!0}else if(H.equals(R)===!1)return H.copy(R),!0}return!1}function g(A){const _=A.uniforms;let M=0;const D=16;for(let C=0,H=_.length;C<H;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,F=b.length;x<F;x++){const X=b[x],it=Array.isArray(X.value)?X.value:[X.value];for(let U=0,G=it.length;U<G;U++){const I=it[U],$=v(I),K=M%D;K!==0&&D-K<$.boundary&&(M+=D-K),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=$.storage}}}const R=M%D;return R>0&&(M+=D-R),A.__size=M,A.__cache={},this}function v(A){const _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),_}function p(A){const _=A.target;_.removeEventListener("dispose",p);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function f(){for(const A in n)s.deleteBuffer(n[A]);r=[],n={},a={}}return{bind:l,update:c,dispose:f}}class pl{constructor(t={}){const{canvas:e=Cc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=r;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const f=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;const _=this;let M=!1,D=0,R=0,C=null,H=-1,b=null;const x=new pe,F=new pe;let X=null;const it=new Xt(0);let U=0,G=e.width,I=e.height,$=1,K=null,tt=null;const w=new pe(0,0,G,I),E=new pe(0,0,G,I);let z=!1;const O=new Ia;let q=!1,et=!1,lt=null;const Q=new ae,ut=new mt,_t=new N,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return C===null?$:1}let L=i;function ct(T,V){for(let j=0;j<T.length;j++){const Z=T[j],Y=e.getContext(Z,V);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pa}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){const V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),L=ct(V,T),L===null)throw ct(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let W,at,J,Mt,gt,S,y,B,nt,rt,st,wt,vt,St,Rt,It,ot,zt,Ft,Dt,Ct,Tt,P,dt;function Pt(){W=new Gu(L),at=new Nu(L,W,t),W.init(at),Tt=new Cf(L,W,at),J=new Af(L,W,at),Mt=new Wu(L),gt=new uf,S=new wf(L,W,J,gt,at,Tt,Mt),y=new zu(_),B=new Hu(_),nt=new Qc(L,at),P=new Iu(L,W,nt,at),rt=new Vu(L,nt,Mt,P),st=new ju(L,rt,nt,Mt),Ft=new Yu(L,at,S),It=new Ou(gt),wt=new hf(_,y,B,W,at,P,It),vt=new Uf(_,gt),St=new ff,Rt=new bf(W,at),zt=new Du(_,y,B,J,st,u,l),ot=new Ef(_,st,at),dt=new Df(L,Mt,at,J),Dt=new ku(L,W,Mt,at),Ct=new qu(L,W,Mt,at),Mt.programs=wt.programs,_.capabilities=at,_.extensions=W,_.properties=gt,_.renderLists=St,_.shadowMap=ot,_.state=J,_.info=Mt}Pt();const At=new Lf(_,L);this.xr=At,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=W.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=W.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(G,I,!1))},this.getSize=function(T){return T.set(G,I)},this.setSize=function(T,V,j=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,I=V,e.width=Math.floor(T*$),e.height=Math.floor(V*$),j===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(G*$,I*$).floor()},this.setDrawingBufferSize=function(T,V,j){G=T,I=V,$=j,e.width=Math.floor(T*j),e.height=Math.floor(V*j),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(w)},this.setViewport=function(T,V,j,Z){T.isVector4?w.set(T.x,T.y,T.z,T.w):w.set(T,V,j,Z),J.viewport(x.copy(w).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(E)},this.setScissor=function(T,V,j,Z){T.isVector4?E.set(T.x,T.y,T.z,T.w):E.set(T,V,j,Z),J.scissor(F.copy(E).multiplyScalar($).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){J.setScissorTest(z=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(T=!0,V=!0,j=!0){let Z=0;if(T){let Y=!1;if(C!==null){const Et=C.texture.format;Y=Et===Vo||Et===Go||Et===Ho}if(Y){const Et=C.texture.type,Lt=Et===pi||Et===ci||Et===La||Et===Ei||Et===Fo||Et===Bo,Nt=zt.getClearColor(),Ot=zt.getClearAlpha(),Vt=Nt.r,Bt=Nt.g,Ht=Nt.b;Lt?(m[0]=Vt,m[1]=Bt,m[2]=Ht,m[3]=Ot,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Vt,g[1]=Bt,g[2]=Ht,g[3]=Ot,L.clearBufferiv(L.COLOR,0,g))}else Z|=L.COLOR_BUFFER_BIT}V&&(Z|=L.DEPTH_BUFFER_BIT),j&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),St.dispose(),Rt.dispose(),gt.dispose(),y.dispose(),B.dispose(),st.dispose(),P.dispose(),dt.dispose(),wt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ne),At.removeEventListener("sessionend",jt),lt&&(lt.dispose(),lt=null),re.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Mt.autoReset,V=ot.enabled,j=ot.autoUpdate,Z=ot.needsUpdate,Y=ot.type;Pt(),Mt.autoReset=T,ot.enabled=V,ot.autoUpdate=j,ot.needsUpdate=Z,ot.type=Y}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){const V=T.target;V.removeEventListener("dispose",xt),kt(V)}function kt(T){Ut(T),gt.remove(T)}function Ut(T){const V=gt.get(T).programs;V!==void 0&&(V.forEach(function(j){wt.releaseProgram(j)}),T.isShaderMaterial&&wt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,j,Z,Y,Et){V===null&&(V=ft);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=Tl(T,V,j,Z,Y);J.setMaterial(Z,Lt);let Ot=j.index,Vt=1;if(Z.wireframe===!0){if(Ot=rt.getWireframeAttribute(j),Ot===void 0)return;Vt=2}const Bt=j.drawRange,Ht=j.attributes.position;let se=Bt.start*Vt,Ee=(Bt.start+Bt.count)*Vt;Et!==null&&(se=Math.max(se,Et.start*Vt),Ee=Math.min(Ee,(Et.start+Et.count)*Vt)),Ot!==null?(se=Math.max(se,0),Ee=Math.min(Ee,Ot.count)):Ht!=null&&(se=Math.max(se,0),Ee=Math.min(Ee,Ht.count));const de=Ee-se;if(de<0||de===1/0)return;P.setup(Y,Z,Nt,j,Ot);let Xe,Jt=Dt;if(Ot!==null&&(Xe=nt.get(Ot),Jt=Ct,Jt.setIndex(Xe)),Y.isMesh)Z.wireframe===!0?(J.setLineWidth(Z.wireframeLinewidth*bt()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(Y.isLine){let qt=Z.linewidth;qt===void 0&&(qt=1),J.setLineWidth(qt*bt()),Y.isLineSegments?Jt.setMode(L.LINES):Y.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else Y.isPoints?Jt.setMode(L.POINTS):Y.isSprite&&Jt.setMode(L.TRIANGLES);if(Y.isBatchedMesh)Jt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Jt.renderInstances(se,de,Y.count);else if(j.isInstancedBufferGeometry){const qt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ts=Math.min(j.instanceCount,qt);Jt.renderInstances(se,de,Ts)}else Jt.render(se,de)};function $t(T,V,j){T.transparent===!0&&T.side===Be&&T.forceSinglePass===!1?(T.side=Te,T.needsUpdate=!0,Ln(T,V,j),T.side=fi,T.needsUpdate=!0,Ln(T,V,j),T.side=Be):Ln(T,V,j)}this.compile=function(T,V,j=null){j===null&&(j=T),p=Rt.get(j),p.init(),A.push(p),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),T!==j&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(_._useLegacyLights);const Z=new Set;return T.traverse(function(Y){const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Lt=0;Lt<Et.length;Lt++){const Nt=Et[Lt];$t(Nt,j,Y),Z.add(Nt)}else $t(Et,j,Y),Z.add(Et)}),A.pop(),p=null,Z},this.compileAsync=function(T,V,j=null){const Z=this.compile(T,V,j);return new Promise(Y=>{function Et(){if(Z.forEach(function(Lt){gt.get(Lt).currentProgram.isReady()&&Z.delete(Lt)}),Z.size===0){Y(T);return}setTimeout(Et,10)}W.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Yt=null;function te(T){Yt&&Yt(T)}function ne(){re.stop()}function jt(){re.start()}const re=new al;re.setAnimationLoop(te),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(T){Yt=T,At.setAnimationLoop(T),T===null?re.stop():re.start()},At.addEventListener("sessionstart",ne),At.addEventListener("sessionend",jt),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(V),V=At.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,V,C),p=Rt.get(T,A.length),p.init(),A.push(p),Q.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),O.setFromProjectionMatrix(Q),et=this.localClippingEnabled,q=It.init(this.clippingPlanes,et),v=St.get(T,f.length),v.init(),f.push(v),Ve(T,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(K,tt),this.info.render.frame++,q===!0&&It.beginShadows();const j=p.state.shadowsArray;if(ot.render(j,T,V),q===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(v,T),p.setupLights(_._useLegacyLights),V.isArrayCamera){const Z=V.cameras;for(let Y=0,Et=Z.length;Y<Et;Y++){const Lt=Z[Y];Wa(v,T,Lt,Lt.viewport)}}else Wa(v,T,V);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,V),P.resetDefaultState(),H=-1,b=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ve(T,V,j,Z){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||O.intersectsSprite(T)){Z&&_t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Lt=st.update(T),Nt=T.material;Nt.visible&&v.push(T,Lt,Nt,j,_t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||O.intersectsObject(T))){const Lt=st.update(T),Nt=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_t.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),_t.copy(Lt.boundingSphere.center)),_t.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(Nt)){const Ot=Lt.groups;for(let Vt=0,Bt=Ot.length;Vt<Bt;Vt++){const Ht=Ot[Vt],se=Nt[Ht.materialIndex];se&&se.visible&&v.push(T,Lt,se,j,_t.z,Ht)}}else Nt.visible&&v.push(T,Lt,Nt,j,_t.z,null)}}const Et=T.children;for(let Lt=0,Nt=Et.length;Lt<Nt;Lt++)Ve(Et[Lt],V,j,Z)}function Wa(T,V,j,Z){const Y=T.opaque,Et=T.transmissive,Lt=T.transparent;p.setupLightsView(j),q===!0&&It.setGlobalState(_.clippingPlanes,j),Et.length>0&&Ml(Y,Et,V,j),Z&&J.viewport(x.copy(Z)),Y.length>0&&Pn(Y,V,j),Et.length>0&&Pn(Et,V,j),Lt.length>0&&Pn(Lt,V,j),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ml(T,V,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Et=at.isWebGL2;lt===null&&(lt=new Ci(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")?En:pi,minFilter:Tn,samples:Et?4:0})),_.getDrawingBufferSize(ut),Et?lt.setSize(ut.x,ut.y):lt.setSize(Ma(ut.x),Ma(ut.y));const Lt=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(it),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=ui,Pn(T,j,Z),S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt);let Ot=!1;for(let Vt=0,Bt=V.length;Vt<Bt;Vt++){const Ht=V[Vt],se=Ht.object,Ee=Ht.geometry,de=Ht.material,Xe=Ht.group;if(de.side===Be&&se.layers.test(Z.layers)){const Jt=de.side;de.side=Te,de.needsUpdate=!0,Xa(se,j,Z,Ee,de,Xe),de.side=Jt,de.needsUpdate=!0,Ot=!0}}Ot===!0&&(S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt)),_.setRenderTarget(Lt),_.setClearColor(it,U),_.toneMapping=Nt}function Pn(T,V,j){const Z=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Et=T.length;Y<Et;Y++){const Lt=T[Y],Nt=Lt.object,Ot=Lt.geometry,Vt=Z===null?Lt.material:Z,Bt=Lt.group;Nt.layers.test(j.layers)&&Xa(Nt,V,j,Ot,Vt,Bt)}}function Xa(T,V,j,Z,Y,Et){T.onBeforeRender(_,V,j,Z,Y,Et),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(_,V,j,Z,T,Et),Y.transparent===!0&&Y.side===Be&&Y.forceSinglePass===!1?(Y.side=Te,Y.needsUpdate=!0,_.renderBufferDirect(j,V,Z,Y,T,Et),Y.side=fi,Y.needsUpdate=!0,_.renderBufferDirect(j,V,Z,Y,T,Et),Y.side=Be):_.renderBufferDirect(j,V,Z,Y,T,Et),T.onAfterRender(_,V,j,Z,Y,Et)}function Ln(T,V,j){V.isScene!==!0&&(V=ft);const Z=gt.get(T),Y=p.state.lights,Et=p.state.shadowsArray,Lt=Y.state.version,Nt=wt.getParameters(T,Y.state,Et,V,j),Ot=wt.getProgramCacheKey(Nt);let Vt=Z.programs;Z.environment=T.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(T.isMeshStandardMaterial?B:y).get(T.envMap||Z.environment),Vt===void 0&&(T.addEventListener("dispose",xt),Vt=new Map,Z.programs=Vt);let Bt=Vt.get(Ot);if(Bt!==void 0){if(Z.currentProgram===Bt&&Z.lightsStateVersion===Lt)return Ya(T,Nt),Bt}else Nt.uniforms=wt.getUniforms(T),T.onBuild(j,Nt,_),T.onBeforeCompile(Nt,_),Bt=wt.acquireProgram(Nt,Ot),Vt.set(Ot,Bt),Z.uniforms=Nt.uniforms;const Ht=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ht.clippingPlanes=It.uniform),Ya(T,Nt),Z.needsLights=Al(T),Z.lightsStateVersion=Lt,Z.needsLights&&(Ht.ambientLightColor.value=Y.state.ambient,Ht.lightProbe.value=Y.state.probe,Ht.directionalLights.value=Y.state.directional,Ht.directionalLightShadows.value=Y.state.directionalShadow,Ht.spotLights.value=Y.state.spot,Ht.spotLightShadows.value=Y.state.spotShadow,Ht.rectAreaLights.value=Y.state.rectArea,Ht.ltc_1.value=Y.state.rectAreaLTC1,Ht.ltc_2.value=Y.state.rectAreaLTC2,Ht.pointLights.value=Y.state.point,Ht.pointLightShadows.value=Y.state.pointShadow,Ht.hemisphereLights.value=Y.state.hemi,Ht.directionalShadowMap.value=Y.state.directionalShadowMap,Ht.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ht.spotShadowMap.value=Y.state.spotShadowMap,Ht.spotLightMatrix.value=Y.state.spotLightMatrix,Ht.spotLightMap.value=Y.state.spotLightMap,Ht.pointShadowMap.value=Y.state.pointShadowMap,Ht.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Bt,Z.uniformsList=null,Bt}function $a(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=cs.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Ya(T,V){const j=gt.get(T);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Tl(T,V,j,Z,Y){V.isScene!==!0&&(V=ft),S.resetTextureUnits();const Et=V.fog,Lt=Z.isMeshStandardMaterial?V.environment:null,Nt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ii,Ot=(Z.isMeshStandardMaterial?B:y).get(Z.envMap||Lt),Vt=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Bt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ht=!!j.morphAttributes.position,se=!!j.morphAttributes.normal,Ee=!!j.morphAttributes.color;let de=ui;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=_.toneMapping);const Xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Jt=Xe!==void 0?Xe.length:0,qt=gt.get(Z),Ts=p.state.lights;if(q===!0&&(et===!0||T!==b)){const Pe=T===b&&Z.id===H;It.setState(Z,T,Pe)}let ee=!1;Z.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ts.state.version||qt.outputColorSpace!==Nt||Y.isBatchedMesh&&qt.batching===!1||!Y.isBatchedMesh&&qt.batching===!0||Y.isInstancedMesh&&qt.instancing===!1||!Y.isInstancedMesh&&qt.instancing===!0||Y.isSkinnedMesh&&qt.skinning===!1||!Y.isSkinnedMesh&&qt.skinning===!0||Y.isInstancedMesh&&qt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qt.instancingColor===!1&&Y.instanceColor!==null||qt.envMap!==Ot||Z.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==It.numPlanes||qt.numIntersection!==It.numIntersection)||qt.vertexAlphas!==Vt||qt.vertexTangents!==Bt||qt.morphTargets!==Ht||qt.morphNormals!==se||qt.morphColors!==Ee||qt.toneMapping!==de||at.isWebGL2===!0&&qt.morphTargetsCount!==Jt)&&(ee=!0):(ee=!0,qt.__version=Z.version);let mi=qt.currentProgram;ee===!0&&(mi=Ln(Z,V,Y));let ja=!1,un=!1,Es=!1;const ve=mi.getUniforms(),gi=qt.uniforms;if(J.useProgram(mi.program)&&(ja=!0,un=!0,Es=!0),Z.id!==H&&(H=Z.id,un=!0),ja||b!==T){ve.setValue(L,"projectionMatrix",T.projectionMatrix),ve.setValue(L,"viewMatrix",T.matrixWorldInverse);const Pe=ve.map.cameraPosition;Pe!==void 0&&Pe.setValue(L,_t.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ve.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,un=!0,Es=!0)}if(Y.isSkinnedMesh){ve.setOptional(L,Y,"bindMatrix"),ve.setOptional(L,Y,"bindMatrixInverse");const Pe=Y.skeleton;Pe&&(at.floatVertexTextures?(Pe.boneTexture===null&&Pe.computeBoneTexture(),ve.setValue(L,"boneTexture",Pe.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(ve.setOptional(L,Y,"batchingTexture"),ve.setValue(L,"batchingTexture",Y._matricesTexture,S));const As=j.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&at.isWebGL2===!0)&&Ft.update(Y,j,mi),(un||qt.receiveShadow!==Y.receiveShadow)&&(qt.receiveShadow=Y.receiveShadow,ve.setValue(L,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(gi.envMap.value=Ot,gi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),un&&(ve.setValue(L,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&El(gi,Es),Et&&Z.fog===!0&&vt.refreshFogUniforms(gi,Et),vt.refreshMaterialUniforms(gi,Z,$,I,lt),cs.upload(L,$a(qt),gi,S)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cs.upload(L,$a(qt),gi,S),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ve.setValue(L,"center",Y.center),ve.setValue(L,"modelViewMatrix",Y.modelViewMatrix),ve.setValue(L,"normalMatrix",Y.normalMatrix),ve.setValue(L,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Pe=Z.uniformsGroups;for(let ws=0,wl=Pe.length;ws<wl;ws++)if(at.isWebGL2){const Za=Pe[ws];dt.update(Za,mi),dt.bind(Za,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function El(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Al(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,V,j){gt.get(T.texture).__webglTexture=V,gt.get(T.depthTexture).__webglTexture=j;const Z=gt.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const j=gt.get(T);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,j=0){C=T,D=V,R=j;let Z=!0,Y=null,Et=!1,Lt=!1;if(T){const Ot=gt.get(T);Ot.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1):Ot.__webglFramebuffer===void 0?S.setupRenderTarget(T):Ot.__hasExternalTextures&&S.rebindTextures(T,gt.get(T.texture).__webglTexture,gt.get(T.depthTexture).__webglTexture);const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Lt=!0);const Bt=gt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?Y=Bt[V][j]:Y=Bt[V],Et=!0):at.isWebGL2&&T.samples>0&&S.useMultisampledRTT(T)===!1?Y=gt.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?Y=Bt[j]:Y=Bt,x.copy(T.viewport),F.copy(T.scissor),X=T.scissorTest}else x.copy(w).multiplyScalar($).floor(),F.copy(E).multiplyScalar($).floor(),X=z;if(J.bindFramebuffer(L.FRAMEBUFFER,Y)&&at.drawBuffers&&Z&&J.drawBuffers(T,Y),J.viewport(x),J.scissor(F),J.setScissorTest(X),Et){const Ot=gt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ot.__webglTexture,j)}else if(Lt){const Ot=gt.get(T.texture),Vt=V||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,j||0,Vt)}H=-1},this.readRenderTargetPixels=function(T,V,j,Z,Y,Et,Lt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){J.bindFramebuffer(L.FRAMEBUFFER,Nt);try{const Ot=T.texture,Vt=Ot.format,Bt=Ot.type;if(Vt!==Ge&&Tt.convert(Vt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Bt===En&&(W.has("EXT_color_buffer_half_float")||at.isWebGL2&&W.has("EXT_color_buffer_float"));if(Bt!==pi&&Tt.convert(Bt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===di&&(at.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Z&&j>=0&&j<=T.height-Y&&L.readPixels(V,j,Z,Y,Tt.convert(Vt),Tt.convert(Bt),Et)}finally{const Ot=C!==null?gt.get(C).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(T,V,j=0){const Z=Math.pow(2,-j),Y=Math.floor(V.image.width*Z),Et=Math.floor(V.image.height*Z);S.setTexture2D(V,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,T.x,T.y,Y,Et),J.unbindTexture()},this.copyTextureToTexture=function(T,V,j,Z=0){const Y=V.image.width,Et=V.image.height,Lt=Tt.convert(j.format),Nt=Tt.convert(j.type);S.setTexture2D(j,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment),V.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Z,T.x,T.y,Y,Et,Lt,Nt,V.image.data):V.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Z,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Lt,V.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Z,T.x,T.y,Lt,Nt,V.image),Z===0&&j.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(T,V,j,Z,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=T.max.x-T.min.x+1,Lt=T.max.y-T.min.y+1,Nt=T.max.z-T.min.z+1,Ot=Tt.convert(Z.format),Vt=Tt.convert(Z.type);let Bt;if(Z.isData3DTexture)S.setTexture3D(Z,0),Bt=L.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)S.setTexture2DArray(Z,0),Bt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ht=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ee=L.getParameter(L.UNPACK_SKIP_PIXELS),de=L.getParameter(L.UNPACK_SKIP_ROWS),Xe=L.getParameter(L.UNPACK_SKIP_IMAGES),Jt=j.isCompressedTexture?j.mipmaps[Y]:j.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Jt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?L.texSubImage3D(Bt,Y,V.x,V.y,V.z,Et,Lt,Nt,Ot,Vt,Jt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Bt,Y,V.x,V.y,V.z,Et,Lt,Nt,Ot,Jt.data)):L.texSubImage3D(Bt,Y,V.x,V.y,V.z,Et,Lt,Nt,Ot,Vt,Jt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,de),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe),Y===0&&Z.generateMipmaps&&L.generateMipmap(Bt),J.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),J.unbindTexture()},this.resetState=function(){D=0,R=0,C=null,J.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ua?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===_s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?wi:Wo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===wi?fe:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class If extends pl{}If.prototype.isWebGL1Renderer=!0;class Oa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kf extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class za extends dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yo=new N,_o=new N,bo=new ae,sa=new Da,ts=new bs;class Nf extends ge{constructor(t=new Se,e=new za){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,a=e.count;n<a;n++)yo.fromBufferAttribute(e,n-1),_o.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=yo.distanceTo(_o);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(n),ts.radius+=a,t.ray.intersectsSphere(ts)===!1)return;bo.copy(n).invert(),sa.copy(t.ray).applyMatrix4(bo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,d=new N,h=new N,u=new N,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const f=Math.max(0,r.start),A=Math.min(g.count,r.start+r.count);for(let _=f,M=A-1;_<M;_+=m){const D=g.getX(_),R=g.getX(_+1);if(c.fromBufferAttribute(p,D),d.fromBufferAttribute(p,R),sa.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const H=t.ray.origin.distanceTo(u);H<t.near||H>t.far||e.push({distance:H,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,r.start),A=Math.min(p.count,r.start+r.count);for(let _=f,M=A-1;_<M;_+=m){if(c.fromBufferAttribute(p,_),d.fromBufferAttribute(p,_+1),sa.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(u);R<t.near||R>t.far||e.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}const xo=new N,So=new N;class fl extends Nf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,a=e.count;n<a;n+=2)xo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+xo.distanceTo(So);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class We{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(n),e.push(a),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-r,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===r)return n/(a-1);const d=i[n],u=i[n+1]-d,m=(r-d)/u;return(n+m)/(a-1)}getTangent(t,e){let n=t-1e-4,a=t+1e-4;n<0&&(n=0),a>1&&(a=1);const r=this.getPoint(n),o=this.getPoint(a),l=e||(r.isVector2?new mt:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new N,n=[],a=[],r=[],o=new N,l=new ae;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new N)}a[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const d=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),r[0].crossVectors(n[0],a[0]);for(let m=1;m<=t;m++){if(a[m]=a[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(n[m-1],n[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(me(n[m-1].dot(n[m]),-1,1));a[m].applyMatrix4(l.makeRotationAxis(o,g))}r[m].crossVectors(n[m],a[m])}if(e===!0){let m=Math.acos(me(a[0].dot(a[t]),-1,1));m/=t,n[0].dot(o.crossVectors(a[0],a[t]))>0&&(m=-m);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),r[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fa extends We{constructor(t=0,e=0,i=1,n=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new mt,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(r?a=0:a=n),this.aClockwise===!0&&!r&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*d-m*h+this.aX,c=u*h+m*d+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Of extends Fa{constructor(t,e,i,n,a,r){super(t,e,i,i,n,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ba(){let s=0,t=0,e=0,i=0;function n(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){n(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,d,h){let u=(r-a)/c-(o-a)/(c+d)+(o-r)/d,m=(o-r)/d-(l-r)/(d+h)+(l-o)/h;u*=d,m*=d,n(r,o,u,m)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+i*o}}}const es=new N,aa=new Ba,ra=new Ba,oa=new Ba;class zf extends We{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new N){const i=e,n=this.points,a=n.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,d;this.closed||o>0?c=n[(o-1)%a]:(es.subVectors(n[0],n[1]).add(n[0]),c=es);const h=n[o%a],u=n[(o+1)%a];if(this.closed||o+2<a?d=n[(o+2)%a]:(es.subVectors(n[a-1],n[a-2]).add(n[a-1]),d=es),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(d),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),aa.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,g,v,p),ra.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,g,v,p),oa.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,g,v,p)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),ra.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),oa.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return i.set(aa.calc(l),ra.calc(l),oa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new N().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mo(s,t,e,i,n){const a=(i-t)*.5,r=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+a+r)*l+(-3*e+3*i-2*a-r)*o+a*s+e}function Ff(s,t){const e=1-s;return e*e*t}function Bf(s,t){return 2*(1-s)*s*t}function Hf(s,t){return s*s*t}function bn(s,t,e,i){return Ff(s,t)+Bf(s,e)+Hf(s,i)}function Gf(s,t){const e=1-s;return e*e*e*t}function Vf(s,t){const e=1-s;return 3*e*e*s*t}function qf(s,t){return 3*(1-s)*s*s*t}function Wf(s,t){return s*s*s*t}function xn(s,t,e,i,n){return Gf(s,t)+Vf(s,e)+qf(s,i)+Wf(s,n)}class ml extends We{constructor(t=new mt,e=new mt,i=new mt,n=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new mt){const i=e,n=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(xn(t,n.x,a.x,r.x,o.x),xn(t,n.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xf extends We{constructor(t=new N,e=new N,i=new N,n=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new N){const i=e,n=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(xn(t,n.x,a.x,r.x,o.x),xn(t,n.y,a.y,r.y,o.y),xn(t,n.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gl extends We{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends We{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vl extends We{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){const i=e,n=this.v0,a=this.v1,r=this.v2;return i.set(bn(t,n.x,a.x,r.x),bn(t,n.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yf extends We{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){const i=e,n=this.v0,a=this.v1,r=this.v2;return i.set(bn(t,n.x,a.x,r.x),bn(t,n.y,a.y,r.y),bn(t,n.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yl extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const i=e,n=this.points,a=(n.length-1)*t,r=Math.floor(a),o=a-r,l=n[r===0?r:r-1],c=n[r],d=n[r>n.length-2?n.length-1:r+1],h=n[r>n.length-3?n.length-1:r+2];return i.set(Mo(o,l.x,c.x,d.x,h.x),Mo(o,l.y,c.y,d.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new mt().fromArray(n))}return this}}var Ea=Object.freeze({__proto__:null,ArcCurve:Of,CatmullRomCurve3:zf,CubicBezierCurve:ml,CubicBezierCurve3:Xf,EllipseCurve:Fa,LineCurve:gl,LineCurve3:$f,QuadraticBezierCurve:vl,QuadraticBezierCurve3:Yf,SplineCurve:yl});class jf extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ea[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let a=0;for(;a<n.length;){if(n[a]>=i){const r=n[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,a=this.curves;n<a.length;n++){const r=a[n],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Ea[n.type]().fromJSON(n))}return this}}class li extends jf{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new gl(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const a=new vl(this.currentPoint.clone(),new mt(t,e),new mt(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,a,r){const o=new ml(this.currentPoint.clone(),new mt(t,e),new mt(i,n),new mt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new yl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,a,r),this}absarc(t,e,i,n,a,r){return this.absellipse(t,e,i,i,n,a,r),this}ellipse(t,e,i,n,a,r,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,i,n,a,r,o,l),this}absellipse(t,e,i,n,a,r,o,l){const c=new Fa(t,e,i,n,a,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class An extends Se{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const d=[],h=[],u=[],m=[];let g=0;const v=[],p=i/2;let f=0;A(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(m,2));function A(){const M=new N,D=new N;let R=0;const C=(e-t)/i;for(let H=0;H<=a;H++){const b=[],x=H/a,F=x*(e-t)+t;for(let X=0;X<=n;X++){const it=X/n,U=it*l+o,G=Math.sin(U),I=Math.cos(U);D.x=F*G,D.y=-x*i+p,D.z=F*I,h.push(D.x,D.y,D.z),M.set(G,C,I).normalize(),u.push(M.x,M.y,M.z),m.push(it,1-x),b.push(g++)}v.push(b)}for(let H=0;H<n;H++)for(let b=0;b<a;b++){const x=v[b][H],F=v[b+1][H],X=v[b+1][H+1],it=v[b][H+1];d.push(x,F,it),d.push(F,X,it),R+=6}c.addGroup(f,R,0),f+=R}function _(M){const D=g,R=new mt,C=new N;let H=0;const b=M===!0?t:e,x=M===!0?1:-1;for(let X=1;X<=n;X++)h.push(0,p*x,0),u.push(0,x,0),m.push(.5,.5),g++;const F=g;for(let X=0;X<=n;X++){const U=X/n*l+o,G=Math.cos(U),I=Math.sin(U);C.x=b*I,C.y=p*x,C.z=b*G,h.push(C.x,C.y,C.z),u.push(0,x,0),R.x=G*.5+.5,R.y=I*.5*x+.5,m.push(R.x,R.y),g++}for(let X=0;X<n;X++){const it=D+X,U=F+X;M===!0?d.push(U,U+1,it):d.push(U+1,U,it),H+=3}c.addGroup(f,H,M===!0?1:2),f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ha extends An{constructor(t=1,e=1,i=32,n=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Ha(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const is=new N,ns=new N,la=new N,ss=new Ie;class Zf extends Se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),a=Math.cos(yn*e),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),u={},m=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:f}=ss;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),ss.getNormal(la),h[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,h[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,h[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const _=(A+1)%3,M=h[A],D=h[_],R=ss[d[A]],C=ss[d[_]],H=`${M}_${D}`,b=`${D}_${M}`;b in u&&u[b]?(la.dot(u[b].normal)<=a&&(m.push(R.x,R.y,R.z),m.push(C.x,C.y,C.z)),u[b]=null):H in u||(u[H]={index0:c[A],index1:c[_],normal:la.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:p}=u[g];is.fromBufferAttribute(o,v),ns.fromBufferAttribute(o,p),m.push(is.x,is.y,is.z),m.push(ns.x,ns.y,ns.z)}this.setAttribute("position",new ie(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ds extends li{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new li().fromJSON(n))}return this}}const Kf={triangulate:function(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let a=_l(s,0,n,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c,d,h,u,m;if(i&&(a=im(s,t,a,e)),s.length>80*e){o=c=s[0],l=d=s[1];for(let g=e;g<n;g+=e)h=s[g],u=s[g+1],h<o&&(o=h),u<l&&(l=u),h>c&&(c=h),u>d&&(d=u);m=Math.max(c-o,d-l),m=m!==0?32767/m:0}return wn(a,r,e,o,l,m,0),r}};function _l(s,t,e,i,n){let a,r;if(n===pm(s,t,e,i)>0)for(a=t;a<e;a+=i)r=To(a,s[a],s[a+1],r);else for(a=e-i;a>=t;a-=i)r=To(a,s[a],s[a+1],r);return r&&Ms(r,r.next)&&(Rn(r),r=r.next),r}function Li(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Ms(e,e.next)||Qt(e.prev,e,e.next)===0)){if(Rn(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function wn(s,t,e,i,n,a,r){if(!s)return;!r&&a&&om(s,i,n,a);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,a?Qf(s,i,n,a):Jf(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Rn(s),s=c.next,o=c.next;continue}if(s=c,s===o){r?r===1?(s=tm(Li(s),t,e),wn(s,t,e,i,n,a,2)):r===2&&em(s,t,e,i,n,a):wn(Li(s),t,e,i,n,a,1);break}}}function Jf(s){const t=s.prev,e=s,i=s.next;if(Qt(t,e,i)>=0)return!1;const n=t.x,a=e.x,r=i.x,o=t.y,l=e.y,c=i.y,d=n<a?n<r?n:r:a<r?a:r,h=o<l?o<c?o:c:l<c?l:c,u=n>a?n>r?n:r:a>r?a:r,m=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=d&&g.x<=u&&g.y>=h&&g.y<=m&&tn(n,o,a,l,r,c,g.x,g.y)&&Qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qf(s,t,e,i){const n=s.prev,a=s,r=s.next;if(Qt(n,a,r)>=0)return!1;const o=n.x,l=a.x,c=r.x,d=n.y,h=a.y,u=r.y,m=o<l?o<c?o:c:l<c?l:c,g=d<h?d<u?d:u:h<u?h:u,v=o>l?o>c?o:c:l>c?l:c,p=d>h?d>u?d:u:h>u?h:u,f=Aa(m,g,t,e,i),A=Aa(v,p,t,e,i);let _=s.prevZ,M=s.nextZ;for(;_&&_.z>=f&&M&&M.z<=A;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==n&&_!==r&&tn(o,d,l,h,c,u,_.x,_.y)&&Qt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==r&&tn(o,d,l,h,c,u,M.x,M.y)&&Qt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==n&&_!==r&&tn(o,d,l,h,c,u,_.x,_.y)&&Qt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=A;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==r&&tn(o,d,l,h,c,u,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function tm(s,t,e){let i=s;do{const n=i.prev,a=i.next.next;!Ms(n,a)&&bl(n,i,i.next,a)&&Cn(n,a)&&Cn(a,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(a.i/e|0),Rn(i),Rn(i.next),i=s=a),i=i.next}while(i!==s);return Li(i)}function em(s,t,e,i,n,a){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&dm(r,o)){let l=xl(r,o);r=Li(r,r.next),l=Li(l,l.next),wn(r,t,e,i,n,a,0),wn(l,t,e,i,n,a,0);return}o=o.next}r=r.next}while(r!==s)}function im(s,t,e,i){const n=[];let a,r,o,l,c;for(a=0,r=t.length;a<r;a++)o=t[a]*i,l=a<r-1?t[a+1]*i:s.length,c=_l(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(cm(c));for(n.sort(nm),a=0;a<n.length;a++)e=sm(n[a],e);return e}function nm(s,t){return s.x-t.x}function sm(s,t){const e=am(s,t);if(!e)return t;const i=xl(e,s);return Li(i,i.next),Li(e,e.next)}function am(s,t){let e=t,i=-1/0,n;const a=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=a&&u>i&&(i=u,n=e.x<e.next.x?e:e.next,u===a))return n}e=e.next}while(e!==t);if(!n)return null;const o=n,l=n.x,c=n.y;let d=1/0,h;e=n;do a>=e.x&&e.x>=l&&a!==e.x&&tn(r<c?a:i,r,l,c,r<c?i:a,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(a-e.x),Cn(e,s)&&(h<d||h===d&&(e.x>n.x||e.x===n.x&&rm(n,e)))&&(n=e,d=h)),e=e.next;while(e!==o);return n}function rm(s,t){return Qt(s.prev,s,t.prev)<0&&Qt(t.next,s,s.next)<0}function om(s,t,e,i){let n=s;do n.z===0&&(n.z=Aa(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,lm(n)}function lm(s){let t,e,i,n,a,r,o,l,c=1;do{for(e=s,s=null,a=null,r=0;e;){for(r++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:s=n,n.prevZ=a,a=n;e=i}a.nextZ=null,c*=2}while(r>1);return s}function Aa(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function tn(s,t,e,i,n,a,r,o){return(n-r)*(t-o)>=(s-r)*(a-o)&&(s-r)*(i-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(n-r)*(i-o)}function dm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!hm(s,t)&&(Cn(s,t)&&Cn(t,s)&&um(s,t)&&(Qt(s.prev,s,t.prev)||Qt(s,t.prev,t))||Ms(s,t)&&Qt(s.prev,s,s.next)>0&&Qt(t.prev,t,t.next)>0)}function Qt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ms(s,t){return s.x===t.x&&s.y===t.y}function bl(s,t,e,i){const n=rs(Qt(s,t,e)),a=rs(Qt(s,t,i)),r=rs(Qt(e,i,s)),o=rs(Qt(e,i,t));return!!(n!==a&&r!==o||n===0&&as(s,e,t)||a===0&&as(s,i,t)||r===0&&as(e,s,i)||o===0&&as(e,t,i))}function as(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function rs(s){return s>0?1:s<0?-1:0}function hm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&bl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Cn(s,t){return Qt(s.prev,s,s.next)<0?Qt(s,t,s.next)>=0&&Qt(s,s.prev,t)>=0:Qt(s,t,s.prev)<0||Qt(s,s.next,t)<0}function um(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&n<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function xl(s,t){const e=new wa(s.i,s.x,s.y),i=new wa(t.i,t.x,t.y),n=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function To(s,t,e,i){const n=new wa(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Rn(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wa(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pm(s,t,e,i){let n=0;for(let a=t,r=e-i;a<e;a+=i)n+=(s[r]-s[a])*(s[a+1]+s[r+1]),r=a;return n}class Sn{static area(t){const e=t.length;let i=0;for(let n=e-1,a=0;a<e;n=a++)i+=t[n].x*t[a].y-t[a].x*t[n].y;return i*.5}static isClockWise(t){return Sn.area(t)<0}static triangulateShape(t,e){const i=[],n=[],a=[];Eo(t),Ao(i,t);let r=t.length;e.forEach(Eo);for(let l=0;l<e.length;l++)n.push(r),r+=e[l].length,Ao(i,e[l]);const o=Kf.triangulate(i,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Eo(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ao(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Mn extends Se{constructor(t=new ds([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new ie(n,3)),this.setAttribute("uv",new ie(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:fm;let _,M=!1,D,R,C,H;f&&(_=f.getSpacedPoints(d),M=!0,u=!1,D=f.computeFrenetFrames(d,!1),R=new N,C=new N,H=new N),u||(p=0,m=0,g=0,v=0);const b=o.extractPoints(c);let x=b.shape;const F=b.holes;if(!Sn.isClockWise(x)){x=x.reverse();for(let L=0,ct=F.length;L<ct;L++){const W=F[L];Sn.isClockWise(W)&&(F[L]=W.reverse())}}const it=Sn.triangulateShape(x,F),U=x;for(let L=0,ct=F.length;L<ct;L++){const W=F[L];x=x.concat(W)}function G(L,ct,W){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ct,W)}const I=x.length,$=it.length;function K(L,ct,W){let at,J,Mt;const gt=L.x-ct.x,S=L.y-ct.y,y=W.x-L.x,B=W.y-L.y,nt=gt*gt+S*S,rt=gt*B-S*y;if(Math.abs(rt)>Number.EPSILON){const st=Math.sqrt(nt),wt=Math.sqrt(y*y+B*B),vt=ct.x-S/st,St=ct.y+gt/st,Rt=W.x-B/wt,It=W.y+y/wt,ot=((Rt-vt)*B-(It-St)*y)/(gt*B-S*y);at=vt+gt*ot-L.x,J=St+S*ot-L.y;const zt=at*at+J*J;if(zt<=2)return new mt(at,J);Mt=Math.sqrt(zt/2)}else{let st=!1;gt>Number.EPSILON?y>Number.EPSILON&&(st=!0):gt<-Number.EPSILON?y<-Number.EPSILON&&(st=!0):Math.sign(S)===Math.sign(B)&&(st=!0),st?(at=-S,J=gt,Mt=Math.sqrt(nt)):(at=gt,J=S,Mt=Math.sqrt(nt/2))}return new mt(at/Mt,J/Mt)}const tt=[];for(let L=0,ct=U.length,W=ct-1,at=L+1;L<ct;L++,W++,at++)W===ct&&(W=0),at===ct&&(at=0),tt[L]=K(U[L],U[W],U[at]);const w=[];let E,z=tt.concat();for(let L=0,ct=F.length;L<ct;L++){const W=F[L];E=[];for(let at=0,J=W.length,Mt=J-1,gt=at+1;at<J;at++,Mt++,gt++)Mt===J&&(Mt=0),gt===J&&(gt=0),E[at]=K(W[at],W[Mt],W[gt]);w.push(E),z=z.concat(E)}for(let L=0;L<p;L++){const ct=L/p,W=m*Math.cos(ct*Math.PI/2),at=g*Math.sin(ct*Math.PI/2)+v;for(let J=0,Mt=U.length;J<Mt;J++){const gt=G(U[J],tt[J],at);Q(gt.x,gt.y,-W)}for(let J=0,Mt=F.length;J<Mt;J++){const gt=F[J];E=w[J];for(let S=0,y=gt.length;S<y;S++){const B=G(gt[S],E[S],at);Q(B.x,B.y,-W)}}}const O=g+v;for(let L=0;L<I;L++){const ct=u?G(x[L],z[L],O):x[L];M?(C.copy(D.normals[0]).multiplyScalar(ct.x),R.copy(D.binormals[0]).multiplyScalar(ct.y),H.copy(_[0]).add(C).add(R),Q(H.x,H.y,H.z)):Q(ct.x,ct.y,0)}for(let L=1;L<=d;L++)for(let ct=0;ct<I;ct++){const W=u?G(x[ct],z[ct],O):x[ct];M?(C.copy(D.normals[L]).multiplyScalar(W.x),R.copy(D.binormals[L]).multiplyScalar(W.y),H.copy(_[L]).add(C).add(R),Q(H.x,H.y,H.z)):Q(W.x,W.y,h/d*L)}for(let L=p-1;L>=0;L--){const ct=L/p,W=m*Math.cos(ct*Math.PI/2),at=g*Math.sin(ct*Math.PI/2)+v;for(let J=0,Mt=U.length;J<Mt;J++){const gt=G(U[J],tt[J],at);Q(gt.x,gt.y,h+W)}for(let J=0,Mt=F.length;J<Mt;J++){const gt=F[J];E=w[J];for(let S=0,y=gt.length;S<y;S++){const B=G(gt[S],E[S],at);M?Q(B.x,B.y+_[d-1].y,_[d-1].x+W):Q(B.x,B.y,h+W)}}}q(),et();function q(){const L=n.length/3;if(u){let ct=0,W=I*ct;for(let at=0;at<$;at++){const J=it[at];ut(J[2]+W,J[1]+W,J[0]+W)}ct=d+p*2,W=I*ct;for(let at=0;at<$;at++){const J=it[at];ut(J[0]+W,J[1]+W,J[2]+W)}}else{for(let ct=0;ct<$;ct++){const W=it[ct];ut(W[2],W[1],W[0])}for(let ct=0;ct<$;ct++){const W=it[ct];ut(W[0]+I*d,W[1]+I*d,W[2]+I*d)}}i.addGroup(L,n.length/3-L,0)}function et(){const L=n.length/3;let ct=0;lt(U,ct),ct+=U.length;for(let W=0,at=F.length;W<at;W++){const J=F[W];lt(J,ct),ct+=J.length}i.addGroup(L,n.length/3-L,1)}function lt(L,ct){let W=L.length;for(;--W>=0;){const at=W;let J=W-1;J<0&&(J=L.length-1);for(let Mt=0,gt=d+p*2;Mt<gt;Mt++){const S=I*Mt,y=I*(Mt+1),B=ct+at+S,nt=ct+J+S,rt=ct+J+y,st=ct+at+y;_t(B,nt,rt,st)}}}function Q(L,ct,W){l.push(L),l.push(ct),l.push(W)}function ut(L,ct,W){ft(L),ft(ct),ft(W);const at=n.length/3,J=A.generateTopUV(i,n,at-3,at-2,at-1);bt(J[0]),bt(J[1]),bt(J[2])}function _t(L,ct,W,at){ft(L),ft(ct),ft(at),ft(ct),ft(W),ft(at);const J=n.length/3,Mt=A.generateSideWallUV(i,n,J-6,J-3,J-2,J-1);bt(Mt[0]),bt(Mt[1]),bt(Mt[3]),bt(Mt[1]),bt(Mt[2]),bt(Mt[3])}function ft(L){n.push(l[L*3+0]),n.push(l[L*3+1]),n.push(l[L*3+2])}function bt(L){a.push(L.x),a.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return mm(e,i,t)}static fromJSON(t,e){const i=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Ea[n.type]().fromJSON(n)),new Mn(i,t.options)}}const fm={generateTopUV:function(s,t,e,i,n){const a=t[e*3],r=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],d=t[n*3+1];return[new mt(a,r),new mt(o,l),new mt(c,d)]},generateSideWallUV:function(s,t,e,i,n,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],d=t[i*3+1],h=t[i*3+2],u=t[n*3],m=t[n*3+1],g=t[n*3+2],v=t[a*3],p=t[a*3+1],f=t[a*3+2];return Math.abs(o-d)<Math.abs(r-c)?[new mt(r,1-l),new mt(c,1-h),new mt(u,1-g),new mt(v,1-f)]:[new mt(o,1-l),new mt(d,1-h),new mt(m,1-g),new mt(p,1-f)]}};function mm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const a=s[i];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ga extends Se{constructor(t=.5,e=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],d=[];let h=t;const u=(e-t)/n,m=new N,g=new mt;for(let v=0;v<=n;v++){for(let p=0;p<=i;p++){const f=a+p/i*r;m.x=h*Math.cos(f),m.y=h*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,d.push(g.x,g.y)}h+=u}for(let v=0;v<n;v++){const p=v*(i+1);for(let f=0;f<i;f++){const A=f+p,_=A,M=A+i+1,D=A+i+2,R=A+1;o.push(_,M,R),o.push(M,D,R)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class os extends dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const wo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class gm{constructor(t,e,i){const n=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(d){o++,a===!1&&n.onStart!==void 0&&n.onStart(d,r,o),a=!0},this.itemEnd=function(d){r++,n.onProgress!==void 0&&n.onProgress(d,r,o),r===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(d){n.onError!==void 0&&n.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const vm=new gm;class Va{constructor(t){this.manager=t!==void 0?t:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,a){i.load(t,n,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Va.DEFAULT_MATERIAL_NAME="__DEFAULT";const Je={};class ym extends Error{constructor(t,e){super(t),this.response=e}}class _m extends Va{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=wo.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(Je[t]!==void 0){Je[t].push({onLoad:e,onProgress:i,onError:n});return}Je[t]=[],Je[t].push({onLoad:e,onProgress:i,onError:n});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Je[t],h=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=u?parseInt(u):0,g=m!==0;let v=0;const p=new ReadableStream({start(f){A();function A(){h.read().then(({done:_,value:M})=>{if(_)f.close();else{v+=M.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let R=0,C=d.length;R<C;R++){const H=d[R];H.onProgress&&H.onProgress(D)}f.enqueue(M),A()}})}}});return new Response(p)}else throw new ym(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(u);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{wo.add(t,c);const d=Je[t];delete Je[t];for(let h=0,u=d.length;h<u;h++){const m=d[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=Je[t];if(d===void 0)throw this.manager.itemError(t),c;delete Je[t];for(let h=0,u=d.length;h<u;h++){const m=d[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Sl extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ca=new ae,Co=new N,Ro=new N;class bm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Co.setFromMatrixPosition(t.matrixWorld),e.position.copy(Co),Ro.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ro),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xm extends bm{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class da extends Sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new xm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sm extends Sl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Po{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mm extends fl{constructor(t=10,e=10,i=4473924,n=8947848){i=new Xt(i),n=new Xt(n);const a=e/2,r=t/e,o=t/2,l=[],c=[];for(let u=0,m=0,g=-o;u<=e;u++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=u===a?i:n;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const d=new Se;d.setAttribute("position",new ie(l,3)),d.setAttribute("color",new ie(c,3));const h=new za({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);const Lo={type:"change"},ha={type:"start"},Uo={type:"end"},ls=new Da,Do=new ti,Tm=Math.cos(70*wc.DEG2RAD);class Em extends Ui{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Rt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Lo),i.update(),a=n.NONE},this.update=function(){const P=new N,dt=new Ri().setFromUnitVectors(t.up,new N(0,1,0)),Pt=dt.clone().invert(),At=new N,ht=new Ri,k=new N,pt=2*Math.PI;return function(kt=null){const Ut=i.object.position;P.copy(Ut).sub(i.target),P.applyQuaternion(dt),o.setFromVector3(P),i.autoRotate&&a===n.NONE&&X(x(kt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let $t=i.minAzimuthAngle,Yt=i.maxAzimuthAngle;isFinite($t)&&isFinite(Yt)&&($t<-Math.PI?$t+=pt:$t>Math.PI&&($t-=pt),Yt<-Math.PI?Yt+=pt:Yt>Math.PI&&(Yt-=pt),$t<=Yt?o.theta=Math.max($t,Math.min(Yt,o.theta)):o.theta=o.theta>($t+Yt)/2?Math.max($t,o.theta):Math.min(Yt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=w(o.radius):o.radius=w(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(Pt),Ut.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let te=!1;if(i.zoomToCursor&&R){let ne=null;if(i.object.isPerspectiveCamera){const jt=P.length();ne=w(jt*c);const re=jt-ne;i.object.position.addScaledVector(M,re),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const jt=new N(D.x,D.y,0);jt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),te=!0;const re=new N(D.x,D.y,0);re.unproject(i.object),i.object.position.sub(re).add(jt),i.object.updateMatrixWorld(),ne=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ne).add(i.object.position):(ls.origin.copy(i.object.position),ls.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ls.direction))<Tm?t.lookAt(i.target):(Do.setFromNormalAndCoplanarPoint(i.object.up,i.target),ls.intersectPlane(Do,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),te=!0);return c=1,R=!1,te||At.distanceToSquared(i.object.position)>r||8*(1-ht.dot(i.object.quaternion))>r||k.distanceToSquared(i.target)>0?(i.dispatchEvent(Lo),At.copy(i.object.position),ht.copy(i.object.quaternion),k.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",zt),i.domElement.removeEventListener("pointerdown",S),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",st),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Rt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const r=1e-6,o=new Po,l=new Po;let c=1;const d=new N,h=new mt,u=new mt,m=new mt,g=new mt,v=new mt,p=new mt,f=new mt,A=new mt,_=new mt,M=new N,D=new mt;let R=!1;const C=[],H={};let b=!1;function x(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function F(P){const dt=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*dt)}function X(P){l.theta-=P}function it(P){l.phi-=P}const U=function(){const P=new N;return function(Pt,At){P.setFromMatrixColumn(At,0),P.multiplyScalar(-Pt),d.add(P)}}(),G=function(){const P=new N;return function(Pt,At){i.screenSpacePanning===!0?P.setFromMatrixColumn(At,1):(P.setFromMatrixColumn(At,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Pt),d.add(P)}}(),I=function(){const P=new N;return function(Pt,At){const ht=i.domElement;if(i.object.isPerspectiveCamera){const k=i.object.position;P.copy(k).sub(i.target);let pt=P.length();pt*=Math.tan(i.object.fov/2*Math.PI/180),U(2*Pt*pt/ht.clientHeight,i.object.matrix),G(2*At*pt/ht.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(Pt*(i.object.right-i.object.left)/i.object.zoom/ht.clientWidth,i.object.matrix),G(At*(i.object.top-i.object.bottom)/i.object.zoom/ht.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function tt(P,dt){if(!i.zoomToCursor)return;R=!0;const Pt=i.domElement.getBoundingClientRect(),At=P-Pt.left,ht=dt-Pt.top,k=Pt.width,pt=Pt.height;D.x=At/k*2-1,D.y=-(ht/pt)*2+1,M.set(D.x,D.y,1).unproject(i.object).sub(i.object.position).normalize()}function w(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function E(P){h.set(P.clientX,P.clientY)}function z(P){tt(P.clientX,P.clientX),f.set(P.clientX,P.clientY)}function O(P){g.set(P.clientX,P.clientY)}function q(P){u.set(P.clientX,P.clientY),m.subVectors(u,h).multiplyScalar(i.rotateSpeed);const dt=i.domElement;X(2*Math.PI*m.x/dt.clientHeight),it(2*Math.PI*m.y/dt.clientHeight),h.copy(u),i.update()}function et(P){A.set(P.clientX,P.clientY),_.subVectors(A,f),_.y>0?$(F(_.y)):_.y<0&&K(F(_.y)),f.copy(A),i.update()}function lt(P){v.set(P.clientX,P.clientY),p.subVectors(v,g).multiplyScalar(i.panSpeed),I(p.x,p.y),g.copy(v),i.update()}function Q(P){tt(P.clientX,P.clientY),P.deltaY<0?K(F(P.deltaY)):P.deltaY>0&&$(F(P.deltaY)),i.update()}function ut(P){let dt=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?it(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),dt=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?it(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),dt=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),dt=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),dt=!0;break}dt&&(P.preventDefault(),i.update())}function _t(P){if(C.length===1)h.set(P.pageX,P.pageY);else{const dt=Tt(P),Pt=.5*(P.pageX+dt.x),At=.5*(P.pageY+dt.y);h.set(Pt,At)}}function ft(P){if(C.length===1)g.set(P.pageX,P.pageY);else{const dt=Tt(P),Pt=.5*(P.pageX+dt.x),At=.5*(P.pageY+dt.y);g.set(Pt,At)}}function bt(P){const dt=Tt(P),Pt=P.pageX-dt.x,At=P.pageY-dt.y,ht=Math.sqrt(Pt*Pt+At*At);f.set(0,ht)}function L(P){i.enableZoom&&bt(P),i.enablePan&&ft(P)}function ct(P){i.enableZoom&&bt(P),i.enableRotate&&_t(P)}function W(P){if(C.length==1)u.set(P.pageX,P.pageY);else{const Pt=Tt(P),At=.5*(P.pageX+Pt.x),ht=.5*(P.pageY+Pt.y);u.set(At,ht)}m.subVectors(u,h).multiplyScalar(i.rotateSpeed);const dt=i.domElement;X(2*Math.PI*m.x/dt.clientHeight),it(2*Math.PI*m.y/dt.clientHeight),h.copy(u)}function at(P){if(C.length===1)v.set(P.pageX,P.pageY);else{const dt=Tt(P),Pt=.5*(P.pageX+dt.x),At=.5*(P.pageY+dt.y);v.set(Pt,At)}p.subVectors(v,g).multiplyScalar(i.panSpeed),I(p.x,p.y),g.copy(v)}function J(P){const dt=Tt(P),Pt=P.pageX-dt.x,At=P.pageY-dt.y,ht=Math.sqrt(Pt*Pt+At*At);A.set(0,ht),_.set(0,Math.pow(A.y/f.y,i.zoomSpeed)),$(_.y),f.copy(A);const k=(P.pageX+dt.x)*.5,pt=(P.pageY+dt.y)*.5;tt(k,pt)}function Mt(P){i.enableZoom&&J(P),i.enablePan&&at(P)}function gt(P){i.enableZoom&&J(P),i.enableRotate&&W(P)}function S(P){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",y),i.domElement.addEventListener("pointerup",B)),Ft(P),P.pointerType==="touch"?It(P):nt(P))}function y(P){i.enabled!==!1&&(P.pointerType==="touch"?ot(P):rt(P))}function B(P){Dt(P),C.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(Uo),a=n.NONE}function nt(P){let dt;switch(P.button){case 0:dt=i.mouseButtons.LEFT;break;case 1:dt=i.mouseButtons.MIDDLE;break;case 2:dt=i.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case Di.DOLLY:if(i.enableZoom===!1)return;z(P),a=n.DOLLY;break;case Di.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;O(P),a=n.PAN}else{if(i.enableRotate===!1)return;E(P),a=n.ROTATE}break;case Di.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;E(P),a=n.ROTATE}else{if(i.enablePan===!1)return;O(P),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ha)}function rt(P){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;q(P);break;case n.DOLLY:if(i.enableZoom===!1)return;et(P);break;case n.PAN:if(i.enablePan===!1)return;lt(P);break}}function st(P){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(P.preventDefault(),i.dispatchEvent(ha),Q(wt(P)),i.dispatchEvent(Uo))}function wt(P){const dt=P.deltaMode,Pt={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(dt){case 1:Pt.deltaY*=16;break;case 2:Pt.deltaY*=100;break}return P.ctrlKey&&!b&&(Pt.deltaY*=10),Pt}function vt(P){P.key==="Control"&&(b=!0,document.addEventListener("keyup",St,{passive:!0,capture:!0}))}function St(P){P.key==="Control"&&(b=!1,document.removeEventListener("keyup",St,{passive:!0,capture:!0}))}function Rt(P){i.enabled===!1||i.enablePan===!1||ut(P)}function It(P){switch(Ct(P),C.length){case 1:switch(i.touches.ONE){case Ii.ROTATE:if(i.enableRotate===!1)return;_t(P),a=n.TOUCH_ROTATE;break;case Ii.PAN:if(i.enablePan===!1)return;ft(P),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Ii.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(P),a=n.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ct(P),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ha)}function ot(P){switch(Ct(P),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;W(P),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;at(P),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Mt(P),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;gt(P),i.update();break;default:a=n.NONE}}function zt(P){i.enabled!==!1&&P.preventDefault()}function Ft(P){C.push(P.pointerId)}function Dt(P){delete H[P.pointerId];for(let dt=0;dt<C.length;dt++)if(C[dt]==P.pointerId){C.splice(dt,1);return}}function Ct(P){let dt=H[P.pointerId];dt===void 0&&(dt=new mt,H[P.pointerId]=dt),dt.set(P.pageX,P.pageY)}function Tt(P){const dt=P.pointerId===C[0]?C[1]:C[0];return H[dt]}i.domElement.addEventListener("contextmenu",zt),i.domElement.addEventListener("pointerdown",S),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",st,{passive:!1}),document.addEventListener("keydown",vt,{passive:!0,capture:!0}),this.update()}}class Am extends Va{constructor(t){super(t)}load(t,e,i,n){const a=this,r=new _m(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{e(a.parse(o))}catch(l){n?n(l):console.error(l),a.manager.itemError(t)}},i,n)}parse(t){function e(c){const d=new DataView(c),h=32/8*3+32/8*3*3+16/8,u=d.getUint32(80,!0);if(80+32/8+u*h===d.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(g,d,v))return!1;return!0}function i(c,d,h){for(let u=0,m=c.length;u<m;u++)if(c[u]!==d.getUint8(h+u))return!1;return!0}function n(c){const d=new DataView(c),h=d.getUint32(80,!0);let u,m,g,v=!1,p,f,A,_,M;for(let F=0;F<70;F++)d.getUint32(F,!1)==1129270351&&d.getUint8(F+4)==82&&d.getUint8(F+5)==61&&(v=!0,p=new Float32Array(h*3*3),f=d.getUint8(F+6)/255,A=d.getUint8(F+7)/255,_=d.getUint8(F+8)/255,M=d.getUint8(F+9)/255);const D=84,R=12*4+2,C=new Se,H=new Float32Array(h*3*3),b=new Float32Array(h*3*3),x=new Xt;for(let F=0;F<h;F++){const X=D+F*R,it=d.getFloat32(X,!0),U=d.getFloat32(X+4,!0),G=d.getFloat32(X+8,!0);if(v){const I=d.getUint16(X+48,!0);I&32768?(u=f,m=A,g=_):(u=(I&31)/31,m=(I>>5&31)/31,g=(I>>10&31)/31)}for(let I=1;I<=3;I++){const $=X+I*12,K=F*3*3+(I-1)*3;H[K]=d.getFloat32($,!0),H[K+1]=d.getFloat32($+4,!0),H[K+2]=d.getFloat32($+8,!0),b[K]=it,b[K+1]=U,b[K+2]=G,v&&(x.set(u,m,g).convertSRGBToLinear(),p[K]=x.r,p[K+1]=x.g,p[K+2]=x.b)}}return C.setAttribute("position",new Re(H,3)),C.setAttribute("normal",new Re(b,3)),v&&(C.setAttribute("color",new Re(p,3)),C.hasColors=!0,C.alpha=M),C}function a(c){const d=new Se,h=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+v+v+v,"g"),f=new RegExp("normal"+v+v+v,"g"),A=[],_=[],M=[],D=new N;let R,C=0,H=0,b=0;for(;(R=h.exec(c))!==null;){H=b;const x=R[0],F=(R=m.exec(x))!==null?R[1]:"";for(M.push(F);(R=u.exec(x))!==null;){let U=0,G=0;const I=R[0];for(;(R=f.exec(I))!==null;)D.x=parseFloat(R[1]),D.y=parseFloat(R[2]),D.z=parseFloat(R[3]),G++;for(;(R=p.exec(I))!==null;)A.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),_.push(D.x,D.y,D.z),U++,b++;G!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),U!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const X=H,it=b-H;d.userData.groupNames=M,d.addGroup(X,it,C),C++}return d.setAttribute("position",new ie(A,3)),d.setAttribute("normal",new ie(_,3)),d}function r(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let h=0;h<c.length;h++)d[h]=c.charCodeAt(h)&255;return d.buffer||d}else return c}const l=o(t);return e(l)?n(l):a(r(t))}}class wm{constructor(t,e={}){this.container=t,this.options=e,this.currentMesh=null,this.wireframeMesh=null,this.nozzleGroup=null,this.infillGroup=null,this.currentBbox=new cn,this.slicePercent=100,this.isWireframe=!1,this.currentColor=e.initialColor||"#ff6600",this.currentMaterialType=e.initialMaterial||"PETG",this.init(),this.createBuildPlate(),this.createNozzleHead(),this.loadModelPreset("gear"),this.animate=this.animate.bind(this),this.animate(),window.addEventListener("resize",this.onResize.bind(this))}init(){const t=this.container.clientWidth||600,e=this.container.clientHeight||450;this.scene=new kf,this.scene.background=new Xt(725280),this.scene.fog=new Oa(725280,.0035),this.camera=new ke(45,t/e,1,2e3),this.camera.position.set(160,140,180),this.renderer=new pl({antialias:!0,alpha:!0}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ko,this.renderer.localClippingEnabled=!0,this.container.appendChild(this.renderer.domElement),this.controls=new Em(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2+.05,this.controls.minDistance=40,this.controls.maxDistance=500,this.controls.target.set(0,30,0);const i=new Sm(16777215,.7);this.scene.add(i);const n=new da(16777215,1.2);n.position.set(120,200,100),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.bias=-1e-4,this.scene.add(n);const a=new da(62206,1.5);a.position.set(-120,80,-120),this.scene.add(a);const r=new da(1096065,.6);r.position.set(0,-50,120),this.scene.add(r),this.clippingPlane=new ti(new N(0,-1,0),1e3)}createBuildPlate(){const e=new Ue(256,4,256),i=new os({color:1976635,roughness:.8,metalness:.2}),n=new ue(e,i);n.position.y=-2,n.receiveShadow=!0,this.scene.add(n);const a=new Mm(256,25.6,62206,3359061);a.position.y=.1,this.scene.add(a);const r=new Zf(new Ue(256,.5,256)),o=new za({color:3718648,linewidth:2}),l=new fl(r,o);l.position.y=.2,this.scene.add(l)}createNozzleHead(){this.nozzleGroup=new Qi;const t=new Ha(4,8,16),e=new os({color:16096779,metalness:.8,roughness:.2,emissive:16729088,emissiveIntensity:.4}),i=new ue(t,e);i.rotation.x=Math.PI,i.position.y=4,this.nozzleGroup.add(i);const n=new Ue(10,8,10),a=new os({color:9741240,metalness:.9,roughness:.2}),r=new ue(n,a);r.position.y=12,this.nozzleGroup.add(r);const o=new Ga(.5,6,32),l=new vs({color:62206,side:Be,transparent:!0,opacity:.8}),c=new ue(o,l);c.rotation.x=Math.PI/2,c.position.y=.1,this.nozzleGroup.add(c),this.nozzleGroup.visible=!1,this.scene.add(this.nozzleGroup)}getMaterial(t,e=!1){let i=.35,n=.1,a=!1,r=1;return this.currentMaterialType==="PETG"?(i=.25,n=.15):this.currentMaterialType==="PLA-SILK"?(i=.2,n=.65):this.currentMaterialType==="TPU"?(i=.5,a=!0,r=.88):this.currentMaterialType==="ABS-P1S"&&(i=.6,n=.05),new os({color:new Xt(t),roughness:i,metalness:n,transparent:a,opacity:r,wireframe:e,clippingPlanes:[this.clippingPlane],clipShadows:!0,side:Be})}loadModelPreset(t){let e;t==="gear"?e=this.generateGearGeometry(45,18,24,12,5):t==="drone-arm"?e=this.generateDroneArmGeometry():t==="tower"?e=this.generateTowerGeometry():t==="gripper"?e=this.generateGripperGeometry():t==="planter"?e=this.generatePlanterGeometry():e=this.generateGearGeometry(40,15,20,10,4),this.setModelGeometry(e)}setModelGeometry(t){this.currentMesh&&(this.scene.remove(this.currentMesh),this.currentMesh.geometry&&this.currentMesh.geometry.dispose(),this.currentMesh.material&&this.currentMesh.material.dispose()),this.wireframeMesh&&(this.scene.remove(this.wireframeMesh),this.wireframeMesh.geometry&&this.wireframeMesh.geometry.dispose(),this.wireframeMesh.material&&this.wireframeMesh.material.dispose()),t.computeVertexNormals(),t.center(),t.computeBoundingBox(),this.currentBbox.copy(t.boundingBox);const e=this.currentBbox.max.y-this.currentBbox.min.y,i=this.getMaterial(this.currentColor,!1);this.currentMesh=new ue(t,i),this.currentMesh.position.y=e/2,this.currentMesh.castShadow=!0,this.currentMesh.receiveShadow=!0,this.scene.add(this.currentMesh);const n=new vs({color:62206,wireframe:!0,transparent:!0,opacity:.25,clippingPlanes:[this.clippingPlane]});this.wireframeMesh=new ue(t,n),this.wireframeMesh.position.copy(this.currentMesh.position),this.wireframeMesh.visible=this.isWireframe,this.scene.add(this.wireframeMesh),this.updateSliceClipping(this.slicePercent)}generateGearGeometry(t,e,i,n,a){const r=new ds,o=Math.PI*2/i;for(let v=0;v<i;v++){const p=v*o,f=p,A=p+o*.25,_=p+o*.55,M=p+o*.8,D=t-n,R=t,C=Math.cos(f)*D,H=Math.sin(f)*D,b=Math.cos(A)*R,x=Math.sin(A)*R,F=Math.cos(_)*R,X=Math.sin(_)*R,it=Math.cos(M)*D,U=Math.sin(M)*D;v===0?r.moveTo(C,H):r.lineTo(C,H),r.lineTo(b,x),r.lineTo(F,X),r.lineTo(it,U)}r.closePath();const l=new li,c=e;l.absarc(0,0,c,0,Math.PI*2,!0);const d=c*.4,h=c*.3,u=new li;u.moveTo(-d/2,c-.5),u.lineTo(-d/2,c+h),u.lineTo(d/2,c+h),u.lineTo(d/2,c-.5),r.holes.push(l);const m={steps:2,depth:a,bevelEnabled:!0,bevelThickness:1.5,bevelSize:1,bevelSegments:3},g=new Mn(r,m);return g.rotateX(Math.PI/2),g}generateDroneArmGeometry(){const t=new ds;t.moveTo(-12,-45),t.lineTo(12,-45),t.lineTo(8,30),t.lineTo(18,45),t.absarc(0,45,18,0,Math.PI,!1),t.lineTo(-8,30),t.lineTo(-12,-45);const e=new li;e.absarc(0,45,8,0,Math.PI*2,!0),t.holes.push(e);const i=new li;i.moveTo(-4,-15),i.lineTo(4,-15),i.lineTo(3,10),i.lineTo(-3,10),i.closePath(),t.holes.push(i);const n=new li;n.moveTo(-6,-38),n.lineTo(6,-38),n.lineTo(5,-22),n.lineTo(-5,-22),n.closePath(),t.holes.push(n);const a={steps:1,depth:14,bevelEnabled:!0,bevelThickness:1.2,bevelSize:1,bevelSegments:2},r=new Mn(t,a);return r.rotateX(Math.PI/2),r}generateTowerGeometry(){const t=new Ue(45,40,45),e=new Ue(32,50,32),i=new Ue(20,40,20),n=new An(1,3,30,8);e.translate(0,45,0),i.translate(0,90,0),n.translate(0,125,0);const a=new Qi,r=new ue(t),o=new ue(e),l=new ue(i),c=new ue(n);return a.add(r),a.add(o),a.add(l),a.add(c),new Ue(42,110,42)}generateGripperGeometry(){const t=new ds;t.moveTo(-15,-20),t.lineTo(15,-20),t.lineTo(12,10),t.lineTo(25,35),t.lineTo(20,45),t.lineTo(5,25),t.lineTo(-5,25),t.lineTo(-20,45),t.lineTo(-25,35),t.lineTo(-12,10),t.closePath();const e=new li;e.absarc(0,-5,6,0,Math.PI*2,!0),t.holes.push(e);const i={steps:1,depth:16,bevelEnabled:!0,bevelThickness:1.5,bevelSize:1,bevelSegments:2},n=new Mn(t,i);return n.rotateX(Math.PI/2),n}generatePlanterGeometry(){const t=new An(26,18,48,6,4),e=t.attributes.position;for(let i=0;i<e.count;i++){const a=e.getY(i)/48*.6,r=e.getX(i),o=e.getZ(i);e.setX(i,r*Math.cos(a)-o*Math.sin(a)),e.setZ(i,r*Math.sin(a)+o*Math.cos(a))}return t.computeVertexNormals(),t}loadSTLFile(t,e,i){const n=new FileReader;n.onload=a=>{try{const o=new Am().parse(a.target.result);this.setModelGeometry(o),e&&e(o)}catch(r){console.error("Error parsing STL file:",r),i&&i(r)}},n.readAsArrayBuffer(t)}setColor(t){this.currentColor=t,this.currentMesh&&this.currentMesh.material.color.set(t)}setMaterialType(t){if(this.currentMaterialType=t,this.currentMesh){const e=this.getMaterial(this.currentColor,!1);this.currentMesh.material=e}}toggleWireframe(t){this.isWireframe=t,this.wireframeMesh&&(this.wireframeMesh.visible=t)}updateSliceClipping(t){if(this.slicePercent=t,!this.currentMesh)return;const e=this.currentBbox.max.y-this.currentBbox.min.y,i=t/100*e;this.clippingPlane.constant=i,t<99&&t>1?(this.nozzleGroup.visible=!0,this.nozzleGroup.position.set(0,i,0)):this.nozzleGroup.visible=!1}resetCamera(){this.camera.position.set(160,140,180),this.controls.target.set(0,30,0),this.controls.update()}onResize(){if(!this.container)return;const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}animate(){requestAnimationFrame(this.animate),this.controls.update(),this.nozzleGroup&&this.nozzleGroup.visible&&(this.nozzleGroup.position.x=Math.sin(Date.now()*.008)*12,this.nozzleGroup.position.z=Math.cos(Date.now()*.008)*12),this.renderer.render(this.scene,this.camera)}destroy(){window.removeEventListener("resize",this.onResize),this.renderer&&this.renderer.domElement&&this.container.removeChild(this.renderer.domElement)}}const ua=[{id:"functional-part",title:"Funktsional va Ehtiyot Qismlar",uzTitle:"Ta’mirlash va Nostandart Qismlar",icon:"⚙️",badge:"B2B Yuqori Talab",badgeColor:"emerald",shortDesc:"Singan shesternalar, kraniklar, kronshteynlar, uskunalar korpusi va avtomobil plastmassa detallari.",targetCustomer:"Ta’mirlash ustaxonalari, maishiy texnika egalari, avtomobil egalari, sexlar",recommendedMaterial:"PETG",defaultInfill:60,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:45e3,modelPreset:"gear",features:["Singan jismoniy qism yoki o‘lchamlardan qayta chizma (revers-injiniring)","PETG va Neylon orqali yuqori mustahkamlik va yeyilishga chidamlilik","Muhandislik aniqligi: ±0.05 mm gacha bardoshlik","Chet eldan qimmat va uzoq kutishga nisbatan 80% tejamkorlik"],presets:[{name:"Oshxona Kombayni Shesternasi",weightG:32,timeHrs:1.8,modelingFeeUZS:5e4},{name:"Konditsioner Jalyuzi Qisqichi",weightG:12,timeHrs:.8,modelingFeeUZS:3e4},{name:"Og‘ir Yuk Kronshteyni (Devorga)",weightG:75,timeHrs:3.5,modelingFeeUZS:4e4},{name:"Uskunalar Regulyator Tutqichi (Knob)",weightG:22,timeHrs:1.2,modelingFeeUZS:3e4}]},{id:"rapid-prototype",title:"Tezkor Prototip va Muhandislik Korpuslari",uzTitle:"Startaplar va Muhandislar Uchun",icon:"🚀",badge:"Muhandislik va Startap",badgeColor:"cyan",shortDesc:"IoT korpuslari, elektronika qutilari, dron romlari va robototexnika qismlarini seriyadan oldin sinash.",targetCustomer:"Apparat startaplari, muhandislar, mahsulot dizaynerlari, IoT dasturchilari",recommendedMaterial:"PLA-TOUGH",defaultInfill:30,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24–48 Soat",basePriceUZS:85e3,modelPreset:"drone-arm",features:["Qimmat metall qoliplar yasatishdan oldin 24 soat ichida sinov prototipi","Latun rezbali vtulka (heat-set insert) o‘rnatish imkoniyati","Platalar (PCB) va qisqichli birikmalar (snap-fit) uchun mos","Ergonomika va o‘lchamlarni minimal xarajat bilan tekshirish"],presets:[{name:"Dron (Kvadrkopter) Motor Yelkasi",weightG:48,timeHrs:2.5,modelingFeeUZS:6e4},{name:"Aqlli Uy Sensori Devor Qutisi",weightG:65,timeHrs:3.2,modelingFeeUZS:8e4},{name:"Qo‘l Diagnostika Qurilmasi Korpusi",weightG:95,timeHrs:4.5,modelingFeeUZS:9e4},{name:"DIN-Reyka Sanoat Rele Qutisi",weightG:55,timeHrs:2.8,modelingFeeUZS:5e4}]},{id:"architectural-model",title:"Arxitektura va Shaharsozlik Maketlari",uzTitle:"Bino va Loyihalar Taqdimoti",icon:"🏛️",badge:"Arxitektura va Qurilish",badgeColor:"amber",shortDesc:"Toshkent City turar-joy majmualari, zamonaviy villalar, master-reja va interyer masshtab maketlari.",targetCustomer:"Arxitektorlar, qurilish kompaniyalari, dizaynerlar, shaharsozlar",recommendedMaterial:"PLA-MATTE-WHITE",defaultInfill:15,defaultLayerHeight:.16,defaultQuantity:1,typicalTurnaround:"48–72 Soat",basePriceUZS:25e4,modelPreset:"tower",features:["Mukammal oppoq matoviy yuza va aniq fassad chiziqlari","1:100, 1:200, 1:500 masshtabdagi modulli yig‘iluvchi qismlar","Investorlar va shaharsozlik kengashi taqdimotlari uchun ideal","Bambu printeridan katta ob’ektlar uchun ko‘p qismli yig‘ish"],presets:[{name:"Zamonaviy Osmono‘par Bino (1:200)",weightG:210,timeHrs:9.5,modelingFeeUZS:15e4},{name:"Shahar Tashqarisidagi Villa Maketi",weightG:180,timeHrs:8,modelingFeeUZS:12e4},{name:"Turar-Joy Kvartali Bosh Rejasi",weightG:340,timeHrs:14,modelingFeeUZS:2e5},{name:"Xonadon Rejasi va Interyer Kesimi",weightG:130,timeHrs:6,modelingFeeUZS:1e5}]},{id:"educational-project",title:"Talabalar va Ta’lim Loyihalari (ToshTech)",uzTitle:"Robototexnika va Diplom Ishtirokchilari",icon:"🎓",badge:"20% Talabalar Chegirmasi",badgeColor:"purple",shortDesc:"Robot klublari shassisi, diplom va kurs ishlari detallari, anatomik va ilmiy o‘quv maketlari.",targetCustomer:"ToshTech, TATU, Turin, Inha, Vestminster talabalari va to‘garaklar",recommendedMaterial:"PLA",defaultInfill:25,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:35e3,modelPreset:"gripper",features:["Talaba guvohnomasi bilan barcha buyurtmalarga 20% chegirma","Xakatonlar va diplom topshirish muddatlarida tezkor navbat","3D chop etish uchun chizmani bepul optimallashtirish bo‘yicha maslahat","Universitet laboratoriyalari uchun paketli narxlar"],presets:[{name:"2-Barmoqli Robot Tutqichi (Servo Gripper)",weightG:45,timeHrs:2.2,modelingFeeUZS:3e4},{name:"Formula Student Aerodinamik Qanotchasi",weightG:60,timeHrs:3,modelingFeeUZS:4e4},{name:"Ko‘rgazmali Reduktor Mexanizmi",weightG:90,timeHrs:4.2,modelingFeeUZS:5e4},{name:"Biomeditsina Yurak Anatomik Maketi",weightG:70,timeHrs:3.8,modelingFeeUZS:4e4}]},{id:"custom-merch",title:"Esdalik Sovg‘alari, Art va Merch",uzTitle:"Shaxsiy Buyurtmalar va Korporativ Sovg‘a",icon:"🎨",badge:"Ijodiy va Chakana",badgeColor:"pink",shortDesc:"Stol aksessuarlari, anime figuralari, kompaniya logotipli breloklar, litofaniya fotosuratli tungi chiroqlar.",targetCustomer:"Aholisi, brendlar, sovg‘a izlovchilar, Instagram va Telegram xaridorlari",recommendedMaterial:"PLA-SILK-GOLD",defaultInfill:20,defaultLayerHeight:.16,defaultQuantity:1,typicalTurnaround:"24–48 Soat",basePriceUZS:4e4,modelPreset:"planter",features:["Tillarang ipak, marmarsimon va ikki rangli yaltiroq filamentlar","Buyum yuzasiga shaxsiy ism yoki kompaniya logotipini bosib chiqarish","Chiroyli qadoqlash va sovg‘a qutisi","Dona holatda ham buyurtma qabul qilinadi"],presets:[{name:"Low-Poly Geometrik Kaktus Idishi",weightG:50,timeHrs:2.4,modelingFeeUZS:25e3},{name:"Toshkent Teleminorasi Stol Suveniri",weightG:40,timeHrs:2,modelingFeeUZS:3e4},{name:"Litofaniya Fotosuratli Yorug‘lik Kubigi",weightG:85,timeHrs:4.8,modelingFeeUZS:4e4},{name:"10 dona Kompaniya Logotipli Brelok",weightG:90,timeHrs:3.6,modelingFeeUZS:3e4}]},{id:"b2b-batch",title:"Kichik Seriyali B2B Ishlab Chiqarish (10–100+ dona)",uzTitle:"Kichik Partiyada Tayyorlash",icon:"🏭",badge:"35% Gacha Ulgurji Chegirma",badgeColor:"blue",shortDesc:"50 million so‘mlik qimmat po‘lat qoliplarsiz plastmassa qismlarni tezkor seriyada chop etish.",targetCustomer:"Elektronika sexlari, mebel ishlab chiqaruvchilar, montajchilar",recommendedMaterial:"PETG",defaultInfill:40,defaultLayerHeight:.24,defaultQuantity:25,typicalTurnaround:"3–5 Kun",basePriceUZS:45e4,modelPreset:"gear",features:["Pillapoyali chegirma: 10-24 dona (-15%), 25-49 dona (-25%), 50+ dona (-35%)","Birinchi namuna bepul chop etilib, tasdiqlangach to‘liq partiya ishga tushadi","Barcha qismlarda rang va o‘lcham bir xilligi kafolatlanadi","Qolip tayyorlashga oylar sarflamay, ertagayoq ishlab chiqarishni boshlash"],presets:[{name:"25 dona Kabel Qisqichi (Clip)",weightG:250,timeHrs:11,modelingFeeUZS:4e4},{name:"50 dona Elektronika Prokladkasi",weightG:200,timeHrs:8.5,modelingFeeUZS:3e4},{name:"20 dona Dastgoh Uskunasi Tutqichi",weightG:600,timeHrs:22,modelingFeeUZS:5e4}]},{id:"cad-modeling-only",title:"3D Chizma va Revers-Injiniring Xizmati",uzTitle:"Faqat Chizma va Modellashtirish",icon:"📐",badge:"Muhandislik Chizmasi",badgeColor:"teal",shortDesc:"Faylingiz yo‘qmi? Singan detalni Chilonzor ustaxonamizga olib keling yoki fotosuratini yuboring — 3D model chizib beramiz.",targetCustomer:"3D modeli bo‘lmagan mijozlar, ustalar, kashfiyotchilar, korxonalar",recommendedMaterial:"PETG",defaultInfill:50,defaultLayerHeight:.2,defaultQuantity:1,typicalTurnaround:"24 Soat",basePriceUZS:8e4,modelPreset:"gear",features:["Elektron shtangensirkul bilan mikron darajasida aniq o‘lchash",".STEP, .STL, .OBJ va SolidWorks formatlarida tayyor fayl berish","Kuchlanish va 3D bosmaga mosligini tahlil qilish","Ustaxonamizda 1 dona bepul sinov nusxasini chop etib tekshirish"],presets:[{name:"Oddiy Tutqich yoki Qopqoqni Modellashtirish",weightG:25,timeHrs:1,modelingFeeUZS:6e4},{name:"Singan Shesterna Tishlarini Qayta Tiklash",weightG:35,timeHrs:1.5,modelingFeeUZS:9e4},{name:"Murakkab Egri Chiziqli Korpus Chizmasi",weightG:70,timeHrs:3,modelingFeeUZS:15e4}]}],pa=[{id:"PETG",name:"PETG Mustahkam (3DShef Chilonzor)",uzName:"PETG Muhandislik Polimeri",type:"Mustahkam Texnik Polimer",densityGcm3:1.27,costPerKgUZS:22e4,costPerGUZS:220,bestFor:"Shesternalar, kronshteynlar, tashqi detallar, 75°C gacha issiqqa chidamli",colors:[{name:"Signal Zarg‘aldoq",hex:"#ff6600",rough:.25},{name:"Yarim Shaffof Kulrang",hex:"#4a5568",rough:.2,transparent:!0,opacity:.85},{name:"Yaltiroq Qora",hex:"#111111",rough:.15},{name:"Sanoat Oqi",hex:"#e2e8f0",rough:.2}]},{id:"PLA",name:"PLA Standart (Sunlu / eSun)",uzName:"PLA Bioplastik",type:"Ekologik Toza Polimer",densityGcm3:1.24,costPerKgUZS:18e4,costPerGUZS:180,bestFor:"Prototip, ko‘rgazmali maketlar, talabalar loyihalari, dekorativ buyumlar",colors:[{name:"Qop-Qora",hex:"#1a1a1a",rough:.4},{name:"Opppoq Oq",hex:"#f0f0f0",rough:.3},{name:"Yorqin Moviy",hex:"#00c3ff",rough:.35},{name:"Qizil",hex:"#e62429",rough:.35}]},{id:"PLA-SILK",name:"Ipak PLA Metall Yaltiroq",uzName:"Ipak Yaltiroq Premium",type:"Dekorativ Premium",densityGcm3:1.25,costPerKgUZS:26e4,costPerGUZS:260,bestFor:"Sovg‘alar, mukofotlar, shaxsiy suvenirlar, Toshkent yodgorliklari",colors:[{name:"Zar Tillarang",hex:"#d4af37",metal:.6,rough:.25},{name:"Kumushrang",hex:"#c0c0c0",metal:.65,rough:.25},{name:"Misrang",hex:"#b76e79",metal:.55,rough:.28}]},{id:"TPU",name:"TPU 95A Egiluvchan Rezina",uzName:"Rezinasimon Elastomer",type:"Elastomer Rezina",densityGcm3:1.21,costPerKgUZS:32e4,costPerGUZS:320,bestFor:"Zichlagichlar, bamperlar, zarbani yutuvchi muftalar, elastik qismlar",colors:[{name:"Neon Yashil",hex:"#39ff14",rough:.4},{name:"Qora Rezina",hex:"#222222",rough:.5},{name:"Shaffof Rezina",hex:"#e0f2fe",rough:.2,transparent:!0,opacity:.7}]},{id:"ABS-P1S",name:"ABS / ASA Termobardosh (Bambu P1S)",uzName:"Yuqori Haroratga Chidamli",type:"Yopiq Kamera Polimeri",densityGcm3:1.05,costPerKgUZS:25e4,costPerGUZS:250,bestFor:"Avtomobil kapot osti detallari, 95°C gacha issiqqa chidamli qismlar",colors:[{name:"Matoviy Qora",hex:"#18181b",rough:.6},{name:"Texnik Kulrang",hex:"#64748b",rough:.55}]}],fa=[{id:"0.28",label:"0.28 mm — Tezkor Qoralama",speedMultiplier:.75,desc:"Eng tez bosish, o‘lchamlarni sinab ko‘rish uchun qulay"},{id:"0.20",label:"0.20 mm — Standart (Tavsiya etiladi)",speedMultiplier:1,desc:"Mustahkamlik, silliqlik va tezlikning ideal balansi"},{id:"0.12",label:"0.12 mm — Yuqori Aniqlik",speedMultiplier:1.5,desc:"Deyarli ko‘rinmas qatlamlar, mayda shesternalar va ko‘rgazmali buyumlar uchun"}],Cm=[{value:15,label:"15% — Yengil / Ko‘rgazmali",desc:"Haykalchalar, vizual arxitektura maketlari"},{value:30,label:"30% — Standart Prototip",desc:"Elektronika korpuslari, qutilar"},{value:60,label:"60% — Yuqori Mustahkam",desc:"Shesternalar, mexanik kronshteynlar, ehtiyot qismlar"},{value:100,label:"100% — Monolit Muhandislik",desc:"Og‘ir yuk tushadigan qismlar, kraniklar"}],Ca=12650;var qa={};(function s(t,e,i,n){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!t.OffscreenCanvas)return!1;try{var w=new OffscreenCanvas(1,1),E=w.getContext("2d");E.fillRect(0,0,1,1);var z=w.transferToImageBitmap();E.createPattern(z,"no-repeat")}catch{return!1}return!0}();function l(){}function c(w){var E=e.exports.Promise,z=E!==void 0?E:t.Promise;return typeof z=="function"?new z(w):(w(l,l),null)}var d=function(w,E){return{transform:function(z){if(w)return z;if(E.has(z))return E.get(z);var O=new OffscreenCanvas(z.width,z.height),q=O.getContext("2d");return q.drawImage(z,0,0),E.set(z,O),O},clear:function(){E.clear()}}}(o,new Map),h=function(){var w=Math.floor(16.666666666666668),E,z,O={},q=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(et){var lt=Math.random();return O[lt]=requestAnimationFrame(function Q(ut){q===ut||q+w-1<ut?(q=ut,delete O[lt],et()):O[lt]=requestAnimationFrame(Q)}),lt},z=function(et){O[et]&&cancelAnimationFrame(O[et])}):(E=function(et){return setTimeout(et,w)},z=function(et){return clearTimeout(et)}),{frame:E,cancel:z}}(),u=function(){var w,E,z={};function O(q){function et(lt,Q){q.postMessage({options:lt||{},callback:Q})}q.init=function(Q){var ut=Q.transferControlToOffscreen();q.postMessage({canvas:ut},[ut])},q.fire=function(Q,ut,_t){if(E)return et(Q,null),E;var ft=Math.random().toString(36).slice(2);return E=c(function(bt){function L(ct){ct.data.callback===ft&&(delete z[ft],q.removeEventListener("message",L),E=null,d.clear(),_t(),bt())}q.addEventListener("message",L),et(Q,ft),z[ft]=L.bind(null,{data:{callback:ft}})}),E},q.reset=function(){q.postMessage({reset:!0});for(var Q in z)z[Q](),delete z[Q]}}return function(){if(w)return w;if(!i&&a){var q=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{w=new Worker(URL.createObjectURL(new Blob([q])))}catch(et){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",et),null}O(w)}return w}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(w,E){return E?E(w):w}function v(w){return w!=null}function p(w,E,z){return g(w&&v(w[E])?w[E]:m[E],z)}function f(w){return w<0?0:Math.floor(w)}function A(w,E){return Math.floor(Math.random()*(E-w))+w}function _(w){return parseInt(w,16)}function M(w){return w.map(D)}function D(w){var E=String(w).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:_(E.substring(0,2)),g:_(E.substring(2,4)),b:_(E.substring(4,6))}}function R(w){var E=p(w,"origin",Object);return E.x=p(E,"x",Number),E.y=p(E,"y",Number),E}function C(w){w.width=document.documentElement.clientWidth,w.height=document.documentElement.clientHeight}function H(w){var E=w.getBoundingClientRect();w.width=E.width,w.height=E.height}function b(w){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=w,E}function x(w,E,z,O,q,et,lt,Q,ut){w.save(),w.translate(E,z),w.rotate(et),w.scale(O,q),w.arc(0,0,1,lt,Q,ut),w.restore()}function F(w){var E=w.angle*(Math.PI/180),z=w.spread*(Math.PI/180);return{x:w.x,y:w.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:w.startVelocity*.5+Math.random()*w.startVelocity,angle2D:-E+(.5*z-Math.random()*z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:w.color,shape:w.shape,tick:0,totalTicks:w.ticks,decay:w.decay,drift:w.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:w.gravity*3,ovalScalar:.6,scalar:w.scalar,flat:w.flat}}function X(w,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var z=E.tick++/E.totalTicks,O=E.x+E.random*E.tiltCos,q=E.y+E.random*E.tiltSin,et=E.wobbleX+E.random*E.tiltCos,lt=E.wobbleY+E.random*E.tiltSin;if(w.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-z)+")",w.beginPath(),r&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))w.fill($(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(et-O)*.1,Math.abs(lt-q)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var Q=Math.PI/10*E.wobble,ut=Math.abs(et-O)*.1,_t=Math.abs(lt-q)*.1,ft=E.shape.bitmap.width*E.scalar,bt=E.shape.bitmap.height*E.scalar,L=new DOMMatrix([Math.cos(Q)*ut,Math.sin(Q)*ut,-Math.sin(Q)*_t,Math.cos(Q)*_t,E.x,E.y]);L.multiplySelf(new DOMMatrix(E.shape.matrix));var ct=w.createPattern(d.transform(E.shape.bitmap),"no-repeat");ct.setTransform(L),w.globalAlpha=1-z,w.fillStyle=ct,w.fillRect(E.x-ft/2,E.y-bt/2,ft,bt),w.globalAlpha=1}else if(E.shape==="circle")w.ellipse?w.ellipse(E.x,E.y,Math.abs(et-O)*E.ovalScalar,Math.abs(lt-q)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):x(w,E.x,E.y,Math.abs(et-O)*E.ovalScalar,Math.abs(lt-q)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var W=Math.PI/2*3,at=4*E.scalar,J=8*E.scalar,Mt=E.x,gt=E.y,S=5,y=Math.PI/S;S--;)Mt=E.x+Math.cos(W)*J,gt=E.y+Math.sin(W)*J,w.lineTo(Mt,gt),W+=y,Mt=E.x+Math.cos(W)*at,gt=E.y+Math.sin(W)*at,w.lineTo(Mt,gt),W+=y;else w.moveTo(Math.floor(E.x),Math.floor(E.y)),w.lineTo(Math.floor(E.wobbleX),Math.floor(q)),w.lineTo(Math.floor(et),Math.floor(lt)),w.lineTo(Math.floor(O),Math.floor(E.wobbleY));return w.closePath(),w.fill(),E.tick<E.totalTicks}function it(w,E,z,O,q){var et=E.slice(),lt=w.getContext("2d"),Q,ut,_t=c(function(ft){function bt(){Q=ut=null,lt.clearRect(0,0,O.width,O.height),d.clear(),q(),ft()}function L(){i&&!(O.width===n.width&&O.height===n.height)&&(O.width=w.width=n.width,O.height=w.height=n.height),!O.width&&!O.height&&(z(w),O.width=w.width,O.height=w.height),lt.clearRect(0,0,O.width,O.height),et=et.filter(function(ct){return X(lt,ct)}),et.length?Q=h.frame(L):bt()}Q=h.frame(L),ut=bt});return{addFettis:function(ft){return et=et.concat(ft),_t},canvas:w,promise:_t,reset:function(){Q&&h.cancel(Q),ut&&ut()}}}function U(w,E){var z=!w,O=!!p(E||{},"resize"),q=!1,et=p(E,"disableForReducedMotion",Boolean),lt=a&&!!p(E||{},"useWorker"),Q=lt?u():null,ut=z?C:H,_t=w&&Q?!!w.__confetti_initialized:!1,ft=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,bt;function L(W,at,J){for(var Mt=p(W,"particleCount",f),gt=p(W,"angle",Number),S=p(W,"spread",Number),y=p(W,"startVelocity",Number),B=p(W,"decay",Number),nt=p(W,"gravity",Number),rt=p(W,"drift",Number),st=p(W,"colors",M),wt=p(W,"ticks",Number),vt=p(W,"shapes"),St=p(W,"scalar"),Rt=!!p(W,"flat"),It=R(W),ot=Mt,zt=[],Ft=w.width*It.x,Dt=w.height*It.y;ot--;)zt.push(F({x:Ft,y:Dt,angle:gt,spread:S,startVelocity:y,color:st[ot%st.length],shape:vt[A(0,vt.length)],ticks:wt,decay:B,gravity:nt,drift:rt,scalar:St,flat:Rt}));return bt?bt.addFettis(zt):(bt=it(w,zt,ut,at,J),bt.promise)}function ct(W){var at=et||p(W,"disableForReducedMotion",Boolean),J=p(W,"zIndex",Number);if(at&&ft)return c(function(y){y()});z&&bt?w=bt.canvas:z&&!w&&(w=b(J),document.body.appendChild(w)),O&&!_t&&ut(w);var Mt={width:w.width,height:w.height};Q&&!_t&&Q.init(w),_t=!0,Q&&(w.__confetti_initialized=!0);function gt(){if(Q){var y={getBoundingClientRect:function(){if(!z)return w.getBoundingClientRect()}};ut(y),Q.postMessage({resize:{width:y.width,height:y.height}});return}Mt.width=Mt.height=null}function S(){bt=null,O&&(q=!1,t.removeEventListener("resize",gt)),z&&w&&(document.body.contains(w)&&document.body.removeChild(w),w=null,_t=!1)}return O&&!q&&(q=!0,t.addEventListener("resize",gt,!1)),Q?Q.fire(W,Mt,S):L(W,Mt,S)}return ct.reset=function(){Q&&Q.reset(),bt&&bt.reset()},ct}var G;function I(){return G||(G=U(null,{useWorker:!0,resize:!0})),G}function $(w,E,z,O,q,et,lt){var Q=new Path2D(w),ut=new Path2D;ut.addPath(Q,new DOMMatrix(E));var _t=new Path2D;return _t.addPath(ut,new DOMMatrix([Math.cos(lt)*q,Math.sin(lt)*q,-Math.sin(lt)*et,Math.cos(lt)*et,z,O])),_t}function K(w){if(!r)throw new Error("path confetti are not supported in this browser");var E,z;typeof w=="string"?E=w:(E=w.path,z=w.matrix);var O=new Path2D(E),q=document.createElement("canvas"),et=q.getContext("2d");if(!z){for(var lt=1e3,Q=lt,ut=lt,_t=0,ft=0,bt,L,ct=0;ct<lt;ct+=2)for(var W=0;W<lt;W+=2)et.isPointInPath(O,ct,W,"nonzero")&&(Q=Math.min(Q,ct),ut=Math.min(ut,W),_t=Math.max(_t,ct),ft=Math.max(ft,W));bt=_t-Q,L=ft-ut;var at=10,J=Math.min(at/bt,at/L);z=[J,0,0,J,-Math.round(bt/2+Q)*J,-Math.round(L/2+ut)*J]}return{type:"path",path:E,matrix:z}}function tt(w){var E,z=1,O="#000000",q='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof w=="string"?E=w:(E=w.text,z="scalar"in w?w.scalar:z,q="fontFamily"in w?w.fontFamily:q,O="color"in w?w.color:O);var et=10*z,lt=""+et+"px "+q,Q=new OffscreenCanvas(et,et),ut=Q.getContext("2d");ut.font=lt;var _t=ut.measureText(E),ft=Math.ceil(_t.actualBoundingBoxRight+_t.actualBoundingBoxLeft),bt=Math.ceil(_t.actualBoundingBoxAscent+_t.actualBoundingBoxDescent),L=2,ct=_t.actualBoundingBoxLeft+L,W=_t.actualBoundingBoxAscent+L;ft+=L+L,bt+=L+L,Q=new OffscreenCanvas(ft,bt),ut=Q.getContext("2d"),ut.font=lt,ut.fillStyle=O,ut.fillText(E,ct,W);var at=1/z;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[at,0,0,at,-ft*at/2,-bt*at/2]}}e.exports=function(){return I().apply(this,arguments)},e.exports.reset=function(){I().reset()},e.exports.create=U,e.exports.shapeFromPath=K,e.exports.shapeFromText=tt})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),qa,!1);const Ra=qa.exports;qa.exports.create;class Rm{constructor(t,e,i){this.mount=t,this.studio=e,this.onOrderSubmitted=i,this.state={orderTypeId:"functional-part",presetIndex:0,materialId:"PETG",colorHex:"#ff6600",infill:60,layerHeight:"0.20",quantity:1,modelingService:"none",turnaround:"standard",delivery:"pickup",isStudent:!1,studentId:"",currency:"UZS",customerName:"",customerPhone:"+998 ",customerTelegram:"",orderNotes:"",uploadedFileName:null,receiptImage:null,slicePercent:100,wireframe:!1},this.render()}getCurrentOrderType(){return ua.find(t=>t.id===this.state.orderTypeId)||ua[0]}getCurrentMaterial(){return pa.find(t=>t.id===this.state.materialId)||pa[0]}formatPrice(t){return this.state.currency==="USD"?`$${(t/Ca).toFixed(2)}`:`${t.toLocaleString("ru-RU")} so‘m`}calculatePricing(){const t=this.getCurrentOrderType(),e=this.getCurrentMaterial(),i=t.presets[this.state.presetIndex]||t.presets[0],n=fa.find(D=>D.id===this.state.layerHeight)||fa[1],a=.5+this.state.infill/100*.7,r=Math.round(i.weightG*a),o=r*e.costPerGUZS,l=+(i.timeHrs*n.speedMultiplier*a).toFixed(1),c=Math.round(l*2665),d=12e3;let h=0;this.state.modelingService==="broken-part"?h=i.modelingFeeUZS||8e4:this.state.modelingService==="sketch"&&(h=5e4);const u=o+c+d,m=Math.max(t.basePriceUZS,Math.round(u*2.3/5e3)*5e3);let g=0;this.state.quantity>=50?g=35:this.state.quantity>=25?g=25:this.state.quantity>=10&&(g=15);const v=Math.round(m*(1-g/100));let p=v*this.state.quantity,f=0;this.state.turnaround==="rush24"&&(f=Math.round(p*.25));let A=0;this.state.isStudent&&(A=Math.round(p*.2));const _=0,M=Math.max(0,p+h+f-A);return{estWeightG:r,estTimeHrs:l,rawMaterialCost:o,directUnitCost:u,baseUnitPrice:m,unitPriceAfterVolume:v,volumeDiscountPercent:g,partsSubtotal:p,designFee:h,rushSurcharge:f,studentDiscount:A,deliveryFee:_,grandTotalUZS:M}}setCurrency(t){this.state.currency=t,this.render()}selectOrderType(t){this.state.orderTypeId=t,this.state.presetIndex=0;const e=this.getCurrentOrderType();if(this.state.materialId=e.recommendedMaterial.startsWith("PLA")?"PLA":e.recommendedMaterial,e.recommendedMaterial==="PLA-SILK"&&(this.state.materialId="PLA-SILK"),e.recommendedMaterial==="ABS-P1S"&&(this.state.materialId="ABS-P1S"),this.state.infill=e.defaultInfill,this.state.layerHeight=e.defaultLayerHeight.toFixed(2),this.state.quantity=e.defaultQuantity,t==="educational-project"&&(this.state.isStudent=!0),this.studio){this.studio.loadModelPreset(e.modelPreset);const i=this.getCurrentMaterial();this.state.colorHex=i.colors[0].hex,this.studio.setMaterialType(this.state.materialId),this.studio.setColor(this.state.colorHex)}this.render()}render(){var a;const t=this.getCurrentOrderType(),e=this.getCurrentMaterial(),i=this.calculatePricing();this.mount.innerHTML=`
      <div class="configurator-wrapper">
        <!-- 1-Qadam: Buyurtma Turini Tanlash -->
        <section class="section-block" id="order-type-selection">
          <div class="section-header">
            <div class="step-tag"><span class="step-num">1-Qadam</span> Buyurtma Turini Tanlang</div>
            <h2 class="section-title">Sizga qanday 3D bosma xizmati kerak?</h2>
            <p class="section-subtitle">Toshkentdagi ehtiyojingizga mos maxsus materiallar, muhandislik parametrlari va shaffof narxlar.</p>
          </div>

          <div class="order-type-grid" id="order-types-container">
            ${ua.map(r=>`
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
                ${pa.map(r=>`
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
                  ${Cm.map(r=>`
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
                  ${fa.map(r=>`
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
              <div class="group-header-row">
                <label class="group-label">Yetkazib Berish va Qabul Qilish Usuli</label>
                <span class="delivery-badge-note">💡 Kuryerga / Pochtaga to‘lanadi</span>
              </div>
              <div class="delivery-segmented-3">
                <button type="button" class="deliv-card-btn ${this.state.delivery==="pickup"?"active":""}" data-delivery="pickup">
                  <span class="deliv-icon">🏬</span>
                  <div class="deliv-meta">
                    <strong>Ustaxonadan Olib Ketish</strong>
                    <small>Chilonzor markazimizdan bepul</small>
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
                ${this.state.delivery==="bts"?"📦 <b>Viloyatlar bo‘ylab yetkazish:</b> Toshkentdan viloyatingizga BTS Pochta yoki EMU orqali 24 soat ichida yuboriladi. Pochta xarajati qabul qilib olinganda to‘lanadi (saytdagi hisobga qo‘shilmaydi).":this.state.delivery==="yandex"?"🛵 <b>Toshkent shahri bo‘ylab yetkazish:</b> Buyurtmangiz tayyor bo‘lgach Yandex Dostavka orqali manzilingizga tezkor jo‘natiladi. Yetkazib berish xarajati kuryerga qabul qilinganda to‘lanadi.":"📍 <b>Ustaxonamizdan bepul olib ketish:</b> Buyurtmangiz tayyor bo‘lishi bilan Chilonzor ustaxonamizdan bepul olib ketishingiz mumkin. Manzil: Chilonzor 9-mavze."}
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
                  <span class="approx-usd">Taqriban ${(i.grandTotalUZS/Ca).toFixed(2)} USD</span>
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
    `;const n=this.mount.querySelector("#three-viewport-mount");n&&this.studio&&this.studio.renderer&&(n.appendChild(this.studio.renderer.domElement),this.studio.onResize()),this.attachEventListeners()}attachEventListeners(){this.mount.querySelectorAll(".order-type-card").forEach(I=>{I.addEventListener("click",()=>{const $=I.getAttribute("data-type-id");this.selectOrderType($)})}),this.mount.querySelectorAll(".preset-pill").forEach(I=>{I.addEventListener("click",()=>{this.state.presetIndex=parseInt(I.getAttribute("data-preset-idx"),10),this.render()})}),this.mount.querySelectorAll(".material-chip").forEach(I=>{I.addEventListener("click",()=>{const $=I.getAttribute("data-mat-id");this.state.materialId=$;const K=this.getCurrentMaterial();this.state.colorHex=K.colors[0].hex,this.studio&&(this.studio.setMaterialType($),this.studio.setColor(this.state.colorHex)),this.render()})}),this.mount.querySelectorAll(".color-dot").forEach(I=>{I.addEventListener("click",()=>{const $=I.getAttribute("data-color");this.state.colorHex=$,this.studio&&this.studio.setColor($),this.render()})}),this.mount.querySelectorAll("[data-infill]").forEach(I=>{I.addEventListener("click",()=>{this.state.infill=parseInt(I.getAttribute("data-infill"),10),this.render()})}),this.mount.querySelectorAll("[data-layer]").forEach(I=>{I.addEventListener("click",()=>{this.state.layerHeight=I.getAttribute("data-layer"),this.render()})}),this.mount.querySelectorAll('input[name="modeling"]').forEach(I=>{I.addEventListener("change",$=>{this.state.modelingService=$.target.value,this.render()})});const l=this.mount.querySelector("#btn-qty-minus"),c=this.mount.querySelector("#btn-qty-plus"),d=this.mount.querySelector("#qty-slider");l&&l.addEventListener("click",()=>{this.state.quantity>1&&(this.state.quantity--,this.render())}),c&&c.addEventListener("click",()=>{this.state.quantity++,this.render()}),d&&d.addEventListener("input",I=>{this.state.quantity=parseInt(I.target.value,10);const $=this.mount.querySelector(".qty-num");$&&($.textContent=this.state.quantity),this.render()});const h=this.mount.querySelector("#student-toggle");h&&h.addEventListener("change",I=>{this.state.isStudent=I.target.checked,this.render()});const u=this.mount.querySelector("#rush-toggle");u&&u.addEventListener("change",I=>{this.state.turnaround=I.target.checked?"rush24":"standard",this.render()}),this.mount.querySelectorAll(".deliv-card-btn, .deliv-btn").forEach(I=>{I.addEventListener("click",()=>{this.state.delivery=I.getAttribute("data-delivery"),this.render()})});const g=this.mount.querySelector("#btn-toggle-wire");g&&g.addEventListener("click",()=>{this.state.wireframe=!this.state.wireframe,this.studio&&this.studio.toggleWireframe(this.state.wireframe),g.classList.toggle("active",this.state.wireframe)});const v=this.mount.querySelector("#btn-reset-cam");v&&v.addEventListener("click",()=>{this.studio&&this.studio.resetCamera()});const p=this.mount.querySelector("#stl-file-input");p&&p.addEventListener("change",I=>{const $=I.target.files[0];$&&this.studio&&(this.state.uploadedFileName=$.name,this.studio.loadSTLFile($,()=>{alert(`✅ "${$.name}" fayli Bambu Lab stoliga muvaffaqiyatli yuklandi!`)}))});const f=this.mount.querySelector("#slicer-slider"),A=this.mount.querySelector("#slice-val-text");f&&f.addEventListener("input",I=>{const $=parseInt(I.target.value,10);this.state.slicePercent=$,A&&(A.textContent=`${$}%`),this.studio&&this.studio.updateSliceClipping($)});const _=this.mount.querySelector("#btn-submit-order-flow"),M=this.mount.querySelector("#order-modal"),D=this.mount.querySelector("#modal-close");_&&M&&_.addEventListener("click",()=>{const I=Math.floor(1e3+Math.random()*9e3),$=this.mount.querySelector("#inv-order-num");$&&($.textContent=`#T3D-UZ-${I}`),M.style.display="flex"}),D&&M&&D.addEventListener("click",()=>{M.style.display="none"});const R=this.mount.querySelector("#btn-print-inv");R&&R.addEventListener("click",()=>{window.print()});const C=this.mount.querySelector("#btn-copy-card");C&&C.addEventListener("click",()=>{var I;(I=navigator.clipboard)==null||I.writeText("8600490482197750"),C.textContent="✓ Nusxalandi!",setTimeout(()=>{C.textContent="📋 Karta Raqamini Nusxalash"},2e3)});const H=this.mount.querySelector("#btn-select-receipt"),b=this.mount.querySelector("#receipt-file-input"),x=this.mount.querySelector("#receipt-prompt-area"),F=this.mount.querySelector("#receipt-preview-area"),X=this.mount.querySelector("#receipt-img-preview"),it=this.mount.querySelector("#btn-clear-receipt");H&&b&&H.addEventListener("click",()=>b.click()),b&&b.addEventListener("change",I=>{const $=I.target.files[0];if(!$)return;const K=new FileReader;K.onload=tt=>{const w=new Image;w.onload=()=>{const E=document.createElement("canvas");let z=w.width,O=w.height;const q=1e3;(z>q||O>q)&&(z>O?(O=Math.round(O*q/z),z=q):(z=Math.round(z*q/O),O=q)),E.width=z,E.height=O,E.getContext("2d").drawImage(w,0,0,z,O);const lt=E.toDataURL("image/jpeg",.82);this.state.receiptImage=lt,X&&(X.src=lt),x&&(x.style.display="none"),F&&(F.style.display="flex")},w.src=tt.target.result},K.readAsDataURL($)}),it&&it.addEventListener("click",()=>{this.state.receiptImage=null,b&&(b.value=""),F&&(F.style.display="none"),x&&(x.style.display="block")});const U=this.mount.querySelector("#checkout-form");U&&U.addEventListener("submit",I=>{var J,Mt,gt,S;I.preventDefault();const $=this.mount.querySelector("#cust-name").value||"Mijoz",K=this.mount.querySelector("#cust-phone").value||"+998",tt=this.calculatePricing(),w=this.getCurrentOrderType(),E=((J=this.mount.querySelector("#inv-order-num"))==null?void 0:J.textContent)||"#T3D-UZ-8492";Ra({particleCount:120,spread:70,origin:{y:.6}});const z={orderId:E,customerName:$,customerPhone:K,customerTelegram:((Mt=this.mount.querySelector("#cust-tg"))==null?void 0:Mt.value)||"",deliveryAddress:((gt=this.mount.querySelector("#cust-addr"))==null?void 0:gt.value)||"",orderNotes:((S=this.mount.querySelector("#cust-notes"))==null?void 0:S.value)||"",orderTypeTitle:w.title,material:this.getCurrentMaterial().name,quantity:this.state.quantity,grandTotal:this.formatPrice(tt.grandTotalUZS),turnaround:this.state.turnaround,deliveryMethod:this.state.delivery,deliveryMethodTitle:this.state.delivery==="bts"?"📦 Viloyatlarga BTS Pochta":this.state.delivery==="yandex"?"🛵 Toshkentda Yandex Dostavka":"🏬 Ustaxonadan Olib Ketish (Chilonzor)",receiptImage:this.state.receiptImage,createdAt:new Date().toISOString()};(async()=>{var B;let y=!1;try{const nt=await fetch("/api/submit-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});nt.ok&&(await nt.json()).ok&&(y=!0)}catch{console.warn("Backend API vaqtincha javob bermadi, zaxira kanalga o‘tilmoqda...")}if(!y){const nt="9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI",rt="8929216064".split(",").map(st=>st.trim());{const st=(z.customerPhone||"").replace(/[^0-9+]/g,""),vt=`
🚨 <b>YANGI 3D BOSMA BUYURTMASI!</b> ${!!z.receiptImage?"🧾 (To‘lov cheki biriktirildi)":""}

🆔 <b>Buyurtma ID:</b> <code>${z.orderId}</code>
👤 <b>Mijoz:</b> ${z.customerName}
📞 <b>Telefon:</b> <a href="tel:${st}">${z.customerPhone}</a>
${z.customerTelegram?`💬 <b>Telegram:</b> ${z.customerTelegram}
`:""}${z.deliveryAddress?`📍 <b>Manzil:</b> ${z.deliveryAddress}
`:""}
📦 <b>Buyurtma turi:</b> ${z.orderTypeTitle}
🧵 <b>Material:</b> ${z.material}
🔢 <b>Soni:</b> ${z.quantity} dona
💰 <b>Jami to‘lov:</b> <b>${z.grandTotal}</b>
🚚 <b>Yetkazish:</b> ${z.deliveryMethodTitle||z.deliveryMethod}
⏱️ <b>Tayyorlanish:</b> ${z.turnaround==="rush24"?"⚡ 24 Soat Ekspress":"Standart 48 Soat"}
${z.orderNotes?`
📝 <b>Izoh:</b> <i>"${z.orderNotes}"</i>
`:""}
⚡ <i>Holat: 🟡 To‘lov cheki admin tasdig‘i kutilmoqda</i>
              `.trim(),St=z.customerTelegram?z.customerTelegram.startsWith("@")?z.customerTelegram:"@"+z.customerTelegram:"",Rt={inline_keyboard:[[{text:"✅ Qabul qilish (Approve)",callback_data:`approve_${z.orderId}`},{text:"❌ Rad etish (Decline)",callback_data:`decline_${z.orderId}`}],[{text:"💬 Mijoz Telegrami",url:St?`https://t.me/${St.replace("@","")}`:`https://t.me/+${st.replace("+","")}`}]]};for(const It of rt)try{let ot=!1;if(z.receiptImage&&z.receiptImage.startsWith("data:image"))try{const zt=z.receiptImage.split(";base64,");if(zt.length===2){const Ft=zt[0].replace("data:","")||"image/jpeg",Dt=atob(zt[1]);let Ct=Dt.length;const Tt=new Uint8Array(Ct);for(;Ct--;)Tt[Ct]=Dt.charCodeAt(Ct);const P=new Blob([Tt],{type:Ft}),dt=new FormData;dt.append("chat_id",It),dt.append("photo",P,"receipt.jpg"),dt.append("caption",vt.slice(0,1024)),dt.append("parse_mode","HTML"),dt.append("reply_markup",JSON.stringify(Rt)),(await(await fetch(`https://api.telegram.org/bot${nt}/sendPhoto`,{method:"POST",body:dt})).json()).ok&&(ot=!0)}}catch(zt){console.warn("sendPhoto parsing error:",zt)}ot||await fetch(`https://api.telegram.org/bot${nt}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:It,text:vt.slice(0,4096),parse_mode:"HTML",reply_markup:Rt})})}catch(ot){console.warn("Direct TG alert error:",ot)}}}try{const nt=JSON.parse(localStorage.getItem("cached_admin_orders")||"[]");nt.unshift({...z,status:"pending"}),localStorage.setItem("cached_admin_orders",JSON.stringify(nt.slice(0,50)))}catch{}if((B=window.Telegram)!=null&&B.WebApp&&typeof window.Telegram.WebApp.sendData=="function")try{window.Telegram.WebApp.sendData(JSON.stringify({orderId:z.orderId,customerName:z.customerName,customerPhone:z.customerPhone,grandTotal:z.grandTotal}))}catch{}})();const q=this.mount.querySelector("#invoice-printable-area"),et=this.mount.querySelector(".modal-header"),lt=this.mount.querySelector("#order-verifying-screen"),Q=this.mount.querySelector("#order-success-screen"),ut=this.mount.querySelector("#order-declined-screen"),_t=this.mount.querySelector("#verifying-order-num"),ft=this.mount.querySelector("#success-order-num"),bt=this.mount.querySelector("#declined-order-num");U&&(U.style.display="none"),q&&(q.style.display="none"),et&&(et.style.display="none"),_t&&(_t.textContent=E),lt&&(lt.style.display="block");const L=()=>{lt&&(lt.style.display="none"),ut&&(ut.style.display="none"),ft&&(ft.textContent=E),Q&&(Q.style.display="block");const y=E.replace(/\D/g,""),B=this.mount.querySelector("#btn-goto-bot");B&&(B.href=`https://t.me/Any3dCubic_bot?start=${y||"live"}`);const nt=this.mount.querySelector("#tip-order-digits");nt&&(nt.textContent=y||"5452"),Ra({particleCount:140,spread:75,origin:{y:.6}});const rt=this.mount.querySelector("#btn-goto-tracker");rt&&(rt.onclick=()=>{M&&(M.style.display="none"),this.onOrderSubmitted&&this.onOrderSubmitted(z)})},ct=()=>{lt&&(lt.style.display="none"),Q&&(Q.style.display="none"),bt&&(bt.textContent=E),ut&&(ut.style.display="block");const y=this.mount.querySelector("#btn-reupload-receipt");y&&(y.onclick=()=>{ut&&(ut.style.display="none"),U&&(U.style.display="block"),q&&(q.style.display="block"),et&&(et.style.display="flex"),this.state.receiptImage=null,b&&(b.value=""),F&&(F.style.display="none"),x&&(x.style.display="block"),x==null||x.scrollIntoView({behavior:"smooth"})})};let W=0;const at=setInterval(async()=>{if(W++,W>180){clearInterval(at);return}try{const B=await(await fetch(`/api/order-status?id=${encodeURIComponent(E)}`)).json();B.ok&&B.status&&(B.status==="approved"?(clearInterval(at),L()):B.status==="declined"&&(clearInterval(at),ct()))}catch{}},2e3)});const G=this.mount.querySelector("#btn-direct-telegram");G&&G.addEventListener("click",()=>{const I=this.calculatePricing(),$=this.getCurrentOrderType();encodeURIComponent(`Assalomu alaykum! 3D bosmaga buyurtma bermoqchiman:

• Buyurtma Turi: ${$.title}
• Material: ${this.getCurrentMaterial().name}
• Soni: ${this.state.quantity} dona
• Zichlik: ${this.state.infill}% | Qatlam: ${this.state.layerHeight}mm
• Taxminiy Summa: ${this.formatPrice(I.grandTotalUZS)}

Chilonzor ustaxonangizda qachon tayyor bo‘ladi?`),window.open(`https://t.me/Any3dCubic_bot?start=order_${Date.now()}`,"_blank")})}}const xi={electricity:{tariffRatePerKwhUZS:1100},locations:[{id:"chilonzor",name:"Chilonzor tumani",uzName:"Chilonzor tumani (Tavsiya etiladi)",isRecommended:!0,tag:"Tavsiya Etiladigan Asosiy Markaz",targetRentUZS:"2,500,000 – 3,500,000 so‘m / oy",spaceSize:"25 – 35 m²",pros:["Chilonzorda 3DShef rasmiy shourumi joylashgan: material va ehtiyot qismlarni zudlik bilan, yetkazib berish kunini kutmasdan olish mumkin","Toshkent bo‘ylab Yandex Go va BTS orqali buyurtmalarni tezkor yetkazib berish uchun qulay logistika tuguni","Avtoservislar, maishiy texnika va elektronika ustaxonalarining yuqori zichligi","Shahar markazidagi savdo nuqtalariga nisbatan arzon va maqbul ijara"],cons:["Shartnoma imzolashdan oldin binoning elektr simlari quvvatini tekshirish lozim"],verdict:"Yetkazib beruvchi yaqinligi, past doimiy xarajat va tezkor logistikaning eng maqbul balansi."},{id:"mirzo-ulugbek",name:"Mirzo Ulug‘bek tumani",uzName:"Mirzo Ulug‘bek tumani (Talabalar markazi)",isRecommended:!1,tag:"IT va Universitetlar Qamrovi",targetRentUZS:"3,500,000 – 5,000,000 so‘m / oy",spaceSize:"20 – 30 m²",pros:["ToshTech, TATU, Inha va Turin universitetlariga yaqin","Sanoat 3D bosmachisi Additive Technology ham shu tumanda joylashgan","Muhandislik talabalarining bevosita oqimi"],cons:["Kvadrat metr uchun tijorat ijarasi ancha baland","Toshkent bo‘ylab kuryerlar harakati uchun tirbandlik yuqori"],verdict:"Universitetlar bilan rasmiy shartnomalar tuzilgach kengayish uchun ikkinchi bosqich."},{id:"yangihayot",name:"Yangihayot tumani",uzName:"Yangihayot tumani (Byudjet varianti)",isRecommended:!1,tag:"Minimal Doimiy Xarajat",targetRentUZS:"2,000,000 so‘m / oy (OLX dagi 20 m² ofis e’loni)",spaceSize:"20 m²",pros:["Eng past oylik ijara xarajati (oyiga 2 mln so‘m)","Barcha buyurtmalar 100% onlayn yetkazib berish orqali bo‘lsa, boshlang‘ich pulni tejaydi"],cons:["Xomashyo do‘konlari (3DShef) va talabalardan uzoq","Mijozlar uchun Yandex Go yetkazib berish narxi va vaqti oshadi"],verdict:"Boshlang‘ich grant yoki sarmoya 15 mln so‘mdan kam bo‘lsa zaxira varianti."}],swot:{strengths:[{title:"Kam Boshlang‘ich Sarmoya",desc:"Zamonaviy Bambu Lab printerlari hamyonbop: 15–20 mln so‘m bilan ish boshlash mumkin."},{title:"Yuqori Foyda Marjasi",desc:"Xomashyo 1 grammi 200 so‘m turadi; tayyor maxsus buyum 1,200–2,500 so‘m/grammga sotiladi."},{title:"Qolip Xarajatining Yo‘qligi",desc:"5,000 dollarlik metall qoliplarsiz 1 dona yoki 50 dona mahsulotni darhol chiqarish mumkin."},{title:"24–48 Soatlik Tezkorlik",desc:"Mijoz Xitoy yoki Turkiyadan 1 oy kutmasdan Toshkentda ertagayoq tayyor qismni oladi."}],weaknesses:[{title:"Qolipli Quyishga Nisbatan Sekinroq",desc:"FDM bosma 1 dona detal uchun 1 dan 4 soatgacha vaqt oladi, 200 tadan ortiq ommaviy seriyada cheklangan."},{title:"Texnik Xizmat va Kalibrlash",desc:"Aniq ±0.05 mm o‘lcham uchun soploni tozalash, tasmalar tarangligi va stol sathini doimiy sozlash kerak."},{title:"Qo‘lda Ishlov Berish",desc:"Qo‘llab-quvvatlovchi elementlarni (support) tozalash va yuzani silliqlash vaqt talab qiladi."},{title:"Qatlamlararo Bog‘liqlik",desc:"Z o‘qi bo‘yicha mustahkamlik bir oz pastroq, qism yo‘nalishini to‘g‘ri joylashtirish muhim."}],opportunities:[{title:"IT Park va ToshTech Rivoji",desc:"Toshkentda yangi texnologiya markazlari va universitet to‘garaklariga prototiplar zarur."},{title:"Ustaxonalar Bilan B2B Hamkorlik",desc:"Chilonzordagi maishiy texnika va avtoservislar bilan topilmaydigan shesternalarni yetkazish bo‘yicha shartnomalar."},{title:"Telegram va Instagram Orqali Sotuv",desc:"Shaxsiy buyurtmalar, anime figuralari va avtomobil klipslarini to‘g‘ridan-to‘g‘ri messenjerda sotish."},{title:"3D Modellashtirish Mahorat Darslari",desc:"Maktab o‘quvchilari va havaskorlar uchun dam olish kunlari 3D bosma to‘garaklari tashkil etish."}],threatsAndSolutions:[{threat:"Material Importi Kechikishi",detail:"Filament narxi va keltirilishi xalqaro yuk tashishga bog‘liq.",solution:"Chilonzordagi 3DShef orqali doimo 2 oylik xomashyo (PLA va PETG) zaxirasini saqlash."},{threat:"Elektr Energiyasidagi Kutilmagan Uzilishlar",detail:"Elektr o‘chishi 8 soatlik qimmat buyurtmani yaroqsiz qilib qo‘yishi mumkin.",solution:"1500VA quvvatli UPS batareyasi va Bambu Lab printerining elektr qaytganda davom ettirish funksiyasini qo‘llash."},{threat:"Yangi Havaskor Raqobatchilar",detail:"Har kim uyiga arzon printer sotib olib buyurtma olishga urinishi mumkin.",solution:"Biz professional CAD muhandislik chizmasi, kafolatlangan aniqlik va yuridik B2B shartnomalar bilan ajralib turamiz."}]},roadmap:[{month:"1-Oy",title:"Talabni Tekshirish va Sinov Buyurtmalari",icon:"🎯",actions:["Chilonzordagi 25 ta ustaxona va ToshTech talabalar to‘garaklari bilan yuzma-yuz suhbat o‘tkazish","Uzoq muddatli ijara shartnomasi tuzishdan oldin kamida 10 ta dastlabki pullik buyurtma olish","Tanlangan Chilonzor binosida elektr shartnomasini (1,100 so‘mlik tarif) tekshirish","Telegram buyurtma boti va Instagram portfoliolarini ishga tushirish"]},{month:"2-Oy",title:"Ustaxonani Jihozlash va Ishlab Chiqarish",icon:"🖨️",actions:["Mahalliy 3DShef dileridan 2 ta Bambu Lab A1 printeri va 15 kg filament sotib olish","1500VA UPS elektr himoya tizimi va maxsus tebranishga qarshi stellajlarni o‘rnatish","Buyurtmalarni 24 soat ichida topshirish sifat nazorati qoidalarini joriy qilish","Dastlabki 40 ta tijorat buyurtmasini 98% sifat ko‘rsatkichi bilan mijozlarga yetkazish"]},{month:"3-Oy",title:"Doimiy B2B Shartnomalar va Kengayish",icon:"📈",actions:["Toshkentdagi 5 ta yirik maishiy texnika servisi bilan doimiy ehtiyot qism yetkazish shartnomasini imzolash","ToshTech universiteti bilan diplom ishlari uchun 20% maxsus chegirma dasturini rasmiylashtirish","Zararsizlik chegarasiga erishish (oyiga 50+ buyurtma)","ABS/ASA qismlari uchun 3-printer (Bambu Lab P1S Yopiq Kamerali)ni xarid qilish"]}]};class Pm{constructor(t,e){this.mount=t,this.onSwitchToOrderPortal=e,this.simState={bambuA1Count:2,bambuP1SCount:1,filamentAllowanceUZS:22e5,pcAllowanceUZS:55e5,upsFurnitureUZS:18e5,dailyOperatingHours:8,printersActive:3,monthlyRentUZS:3e6,monthlyElectricityUZS:5e5,monthlyFilamentConsumablesUZS:2e6,monthlyMiscInternetUZS:5e5,monthlyMarketingUZS:8e5,avgContributionMarginPerOrderUZS:1e5,isSlideModalOpen:!1,currentSlideIndex:0},this.render()}formatPrice(t){return`${t.toLocaleString("ru-RU")} so‘m`}formatUSD(t){return`$${Math.round(t/Ca)}`}calculateCapex(){const t=this.simState.bambuA1Count*35e5,e=this.simState.bambuP1SCount*38e5,i=9e5,n=t+e+this.simState.filamentAllowanceUZS+i+this.simState.pcAllowanceUZS+this.simState.upsFurnitureUZS;return{a1Cost:t,p1sCost:e,toolsCost:i,totalCapexUZS:n}}calculateElectricity(){const t=xi.electricity.tariffRatePerKwhUZS,e=+(this.simState.printersActive*.15*this.simState.dailyOperatingHours).toFixed(2),i=+(e*26).toFixed(1),n=Math.round(i*t),a=n+35e4;return{dailyKwh:e,monthlyKwh:i,printerElecCostUZS:n,totalWorkshopElecUZS:a}}calculateBreakEven(){const t=this.simState.monthlyRentUZS+this.simState.monthlyElectricityUZS+this.simState.monthlyMiscInternetUZS+this.simState.monthlyMarketingUZS,e=Math.ceil(t/this.simState.avgContributionMarginPerOrderUZS),i=+(e/26).toFixed(1),n=e*12e4,a=Math.round(80*this.simState.avgContributionMarginPerOrderUZS-t);return{fixedExpensesUZS:t,breakEvenOrders:e,ordersPerDay:i,breakEvenRevenueUZS:n,targetProfitUZS:a}}render(){const t=this.calculateCapex(),e=this.calculateElectricity(),i=this.calculateBreakEven();this.mount.innerHTML=`
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
            ${xi.locations.map(n=>`
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
                    ${n.pros.map(a=>`<li>${a}</li>`).join("")}
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
                ${xi.swot.strengths.map(n=>`
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
                ${xi.swot.weaknesses.map(n=>`
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
                ${xi.swot.opportunities.map(n=>`
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
                ${xi.swot.threatsAndSolutions.map(n=>`
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
            ${xi.roadmap.map(n=>`
              <div class="roadmap-card">
                <div class="rm-header">
                  <span class="rm-icon">${n.icon}</span>
                  <div>
                    <span class="rm-month">${n.month}</span>
                    <h4 class="rm-title">${n.title}</h4>
                  </div>
                </div>
                <ul class="rm-actions">
                  ${n.actions.map(a=>`<li>${a}</li>`).join("")}
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
    `,this.attachEventListeners(),this.simState.isSlideModalOpen&&this.renderSlide(this.simState.currentSlideIndex)}attachEventListeners(){const t=this.mount.querySelector("#slider-a1-count");t&&t.addEventListener("input",p=>{this.simState.bambuA1Count=parseInt(p.target.value,10),this.render()});const e=this.mount.querySelector("#slider-p1s-count");e&&e.addEventListener("input",p=>{this.simState.bambuP1SCount=parseInt(p.target.value,10),this.render()});const i=this.mount.querySelector("#slider-filament-stock");i&&i.addEventListener("input",p=>{this.simState.filamentAllowanceUZS=parseInt(p.target.value,10),this.render()});const n=this.mount.querySelector("#slider-pc-cost");n&&n.addEventListener("input",p=>{this.simState.pcAllowanceUZS=parseInt(p.target.value,10),this.render()});const a=this.mount.querySelector("#slider-ups-cost");a&&a.addEventListener("input",p=>{this.simState.upsFurnitureUZS=parseInt(p.target.value,10),this.render()});const r=this.mount.querySelector("#slider-elec-hours");r&&r.addEventListener("input",p=>{this.simState.dailyOperatingHours=parseInt(p.target.value,10),this.render()});const o=this.mount.querySelector("#slider-be-rent");o&&o.addEventListener("input",p=>{this.simState.monthlyRentUZS=parseInt(p.target.value,10),this.render()});const l=this.mount.querySelector("#slider-be-margin");l&&l.addEventListener("input",p=>{this.simState.avgContributionMarginPerOrderUZS=parseInt(p.target.value,10),this.render()});const c=this.mount.querySelector("#slider-be-elec");c&&c.addEventListener("input",p=>{this.simState.monthlyElectricityUZS=parseInt(p.target.value,10),this.render()});const d=this.mount.querySelector("#slider-be-mkt");d&&d.addEventListener("input",p=>{this.simState.monthlyMarketingUZS=parseInt(p.target.value,10),this.render()});const h=this.mount.querySelector("#btn-switch-portal");h&&this.onSwitchToOrderPortal&&h.addEventListener("click",()=>{this.onSwitchToOrderPortal()});const u=this.mount.querySelector("#btn-launch-slides");u&&u.addEventListener("click",()=>{this.simState.isSlideModalOpen=!0,this.simState.currentSlideIndex=0,this.render()});const m=this.mount.querySelector("#btn-slide-close");m&&m.addEventListener("click",()=>{this.simState.isSlideModalOpen=!1,this.render()});const g=this.mount.querySelector("#btn-slide-prev"),v=this.mount.querySelector("#btn-slide-next");g&&g.addEventListener("click",()=>{this.simState.currentSlideIndex>0&&(this.simState.currentSlideIndex--,this.renderSlide(this.simState.currentSlideIndex))}),v&&v.addEventListener("click",()=>{this.simState.currentSlideIndex<9&&(this.simState.currentSlideIndex++,this.renderSlide(this.simState.currentSlideIndex))}),window.onkeydown=p=>{this.simState.isSlideModalOpen&&(p.key==="ArrowRight"||p.key===" "?this.simState.currentSlideIndex<9&&(this.simState.currentSlideIndex++,this.renderSlide(this.simState.currentSlideIndex)):p.key==="ArrowLeft"?this.simState.currentSlideIndex>0&&(this.simState.currentSlideIndex--,this.renderSlide(this.simState.currentSlideIndex)):p.key==="Escape"&&(this.simState.isSlideModalOpen=!1,this.render()))}}renderSlide(t){const e=this.mount.querySelector("#slide-stage"),i=this.mount.querySelector("#slide-num-text");if(i&&(i.textContent=`${t+1} dan 10`),!e)return;const n=[`
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
      `];e.innerHTML=n[t]}}class Lm{constructor(t,e=null,i){this.mount=typeof t=="string"?document.querySelector(t):t,this.currentOrder=e||{orderId:"#T3D-UZ-8492",customerName:"Muhammad Rizo",customerPhone:"+998 90 123 45 67",orderTypeTitle:"Funktsional va Ehtiyot Qismlar (Oshxona Kombayni Shesternasi)",material:"PETG Mustahkam (Signal Zarg‘aldoq)",quantity:1,grandTotal:"75 000 so‘m",deliveryMethod:"yandex",deliveryMethodTitle:"🛵 Toshkentda Yandex Dostavka",turnaround:"standard",createdAt:new Date().toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})},this.onBackToConfigurator=i,this.chatMessages=[],this.chatPoller=null,this.init()}async init(){this.render(),await this.fetchMessages(),this.startChatPoller()}startChatPoller(){this.chatPoller&&clearInterval(this.chatPoller),this.chatPoller=setInterval(async()=>{await this.fetchMessages(!0)},2500)}destroy(){this.chatPoller&&clearInterval(this.chatPoller)}setOrder(t){this.currentOrder=t,this.render(),this.fetchMessages()}async fetchMessages(t=!1){const e=this.currentOrder.orderId;if(e)try{const n=await(await fetch(`/api/chat-messages?orderId=${encodeURIComponent(e)}`)).json();if(n.ok&&Array.isArray(n.messages))if(this.chatMessages=n.messages,!t)this.updateChatUI();else{const a=this.mount.querySelector("#cust-chat-messages-body");a&&n.messages.length>0&&(a.innerHTML=this.renderChatMessagesHTML(),a.scrollTop=a.scrollHeight)}}catch{try{const n=JSON.parse(localStorage.getItem(`chat_${e}`)||"[]");n.length>0&&this.chatMessages.length===0&&(this.chatMessages=n,this.updateChatUI())}catch{}}}updateChatUI(){const t=this.mount.querySelector("#cust-chat-messages-body");t&&(t.innerHTML=this.renderChatMessagesHTML(),t.scrollTop=t.scrollHeight)}renderChatMessagesHTML(){return this.chatMessages.length===0?`
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
                <h4>3. Chop Etish Jarayoni Ketmoqda (Chilonzor Ustaxonasi)</h4>
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
                <h4>5. ${this.currentOrder.deliveryMethod==="bts"?"BTS Pochta Orqali Yuboriladi":this.currentOrder.deliveryMethod==="yandex"?"Yandex Go Kuryeriga Topshiriladi":"Chilonzor Ustaxonasidan Olib Ketish"}</h4>
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
            <p class="wlc-address">🏬 Toshkent shahri, Chilonzor tumani, 9-mavze, 12-bino</p>
            <p class="wlc-landmarks">🎯 Mo‘ljal: Chilonzor metro bekati, Chilonzor savdo markazi yaqinida</p>
            <p class="wlc-hours">⏱️ Ish vaqti: Dushanba – Shanba, 09:00 – 20:00</p>
            <p class="wlc-phone">📞 Telefon: <a href="tel:+998901234567">+998 (90) 123-45-67</a></p>
          </div>

          <div class="wlc-right">
            <span class="wlc-hint">Telefoningizdagi xaritada marshrut chizish:</span>
            <div class="wlc-btn-group">
              <a href="https://www.google.com/maps/dir/?api=1&destination=41.272145,69.204523" target="_blank" class="wlc-map-btn google">
                🗺️ Google Maps'da Ochish
              </a>
              <a href="https://yandex.com/maps/?rtext=~41.272145,69.204523&rtt=auto" target="_blank" class="wlc-map-btn yandex">
                📍 Yandex Maps'da Ochish
              </a>
              <a href="https://maps.apple.com/?daddr=41.272145,69.204523" target="_blank" class="wlc-map-btn apple">
                🍏 Apple Maps (iPhone)
              </a>
              <a href="https://t.me/Any3dCubic_bot" target="_blank" class="wlc-map-btn tg">
                ✈️ Telegram Bot (@Any3dCubic_bot)
              </a>
            </div>
          </div>
        </div>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){const t=this.mount.querySelector("#btn-tracker-back");t&&this.onBackToConfigurator&&t.addEventListener("click",()=>{this.onBackToConfigurator()});const e=this.mount.querySelector("#btn-lookup"),i=this.mount.querySelector("#track-id-input");e&&i&&e.addEventListener("click",async()=>{const l=i.value.trim();if(l){e.textContent="Tekshirilmoqda...";try{const d=await(await fetch(`/api/order-status?id=${encodeURIComponent(l)}`)).json();if(d.ok&&d.order)this.currentOrder=d.order;else{const h=JSON.parse(localStorage.getItem("cached_admin_orders")||"[]"),u=l.replace(/\D/g,""),m=h.find(g=>{if(!g.orderId)return!1;const v=g.orderId.replace(/\D/g,"");return g.orderId.toLowerCase()===l.toLowerCase()||u&&v.includes(u)});m?this.currentOrder=m:this.currentOrder.orderId=l.startsWith("#")?l:`#T3D-UZ-${l}`}}catch{this.currentOrder.orderId=l.startsWith("#")?l:`#T3D-UZ-${l}`}this.render(),this.fetchMessages()}});const n=this.mount.querySelector("#cust-chat-input"),a=this.mount.querySelector("#btn-send-cust-msg"),r=async()=>{var d;const l=(d=n==null?void 0:n.value)==null?void 0:d.trim();if(!l)return;n.value="";const c={orderId:this.currentOrder.orderId,sender:"customer",senderName:this.currentOrder.customerName||"Mijoz",text:l};try{if(!(await fetch("/api/send-message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).ok)throw new Error("API unavailable");await this.fetchMessages()}catch{const u="9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI",m="8929216064".split(",").map(g=>g.trim());{const g=`
💬 <b>MIJOZDAN JONLI CHAT XABARI (Zaxira Kanal)!</b>

🆔 <b>Buyurtma ID:</b> <code>${this.currentOrder.orderId}</code>
👤 <b>Mijoz:</b> ${this.currentOrder.customerName||"Mijoz"} (${this.currentOrder.customerPhone||"Tel yo‘q"})
✉️ <b>Xabar:</b> "${l}"
📅 <b>Vaqt:</b> ${new Date().toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})}
          `.trim();for(const v of m)fetch(`https://api.telegram.org/bot${u}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:v,text:g,parse_mode:"HTML"})}).catch(()=>{})}this.chatMessages.push({...c,id:"local_"+Date.now(),timestamp:new Date().toISOString()}),localStorage.setItem(`chat_${this.currentOrder.orderId}`,JSON.stringify(this.chatMessages)),this.updateChatUI()}};a&&a.addEventListener("click",r),n&&n.addEventListener("keypress",l=>{l.key==="Enter"&&r()}),this.mount.querySelectorAll(".csug-btn").forEach(l=>{l.addEventListener("click",()=>{n&&(n.value=l.getAttribute("data-sug"),n.focus())})})}}class Um{constructor(t,e={}){this.mount=typeof t=="string"?document.querySelector(t):t,this.orders=[],this.filterStatus="all",this.searchQuery="",this.activeChatOrder=null,this.chatMessages=[],this.chatPoller=null,this.onViewChange=e.onViewChange||null,this.init()}async init(){await this.fetchOrders(),this.render(),this.startOrderPoller()}startOrderPoller(){this.orderPoller=setInterval(async()=>{await this.fetchOrders(!0)},4e3)}destroy(){this.orderPoller&&clearInterval(this.orderPoller),this.chatPoller&&clearInterval(this.chatPoller)}async fetchOrders(t=!1){try{const i=await(await fetch("/api/admin-orders")).json();i.ok&&Array.isArray(i.orders)&&(this.orders=i.orders,t||this.render())}catch{try{const i=JSON.parse(localStorage.getItem("cached_admin_orders")||"[]");i.length>0&&this.orders.length===0&&(this.orders=i,t||this.render())}catch{}}}getFilteredOrders(){return this.orders.filter(t=>{if(this.filterStatus!=="all"&&(t.status||"pending")!==this.filterStatus)return!1;if(this.searchQuery.trim()){const e=this.searchQuery.toLowerCase();if(!`${t.orderId||""} ${t.customerName||""} ${t.customerPhone||""} ${t.orderTypeTitle||""}`.toLowerCase().includes(e))return!1}return!0})}render(){const t=this.orders.length,e=this.orders.filter(r=>!r.status||r.status==="pending").length,i=this.orders.filter(r=>r.status==="approved").length,n=this.orders.filter(r=>r.status==="declined").length,a=this.getFilteredOrders();this.mount.innerHTML=`
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
              🛍️ Creality Do‘kon Narxlari
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
          ${a.length===0?`
            <div class="crm-empty-state">
              <div class="empty-icon">📭</div>
              <h3>Hozircha buyurtmalar topilmadi</h3>
              <p>Mijozlar buyurtma berganda bu yerda ularning to‘liq profili va cheklari ko‘rinadi.</p>
            </div>
          `:a.map(r=>this.renderOrderCard(r)).join("")}
        </div>

        <!-- Admin Jonli Chat Paneli (Drawer / Modal) -->
        <div class="admin-chat-modal-backdrop" id="admin-chat-modal" style="${this.activeChatOrder?"display: flex;":"display: none;"}">
          ${this.activeChatOrder?this.renderChatDrawer():""}
        </div>
      </div>
    `,this.attachEventListeners()}renderOrderCard(t){const e=t.status||"pending",i=(t.customerPhone||"").replace(/[^0-9+]/g,""),n=!!t.receiptImage,a=t.deliveryMethodTitle||(t.deliveryMethod==="bts"?"📦 Viloyat (BTS Pochta)":t.deliveryMethod==="yandex"?"🛵 Toshkent (Yandex Go)":"🏬 Ustaxonadan Olib Ketish");return`
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
            <span class="sv deliv-val">${a}</span>
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
    `:""}attachEventListeners(){const t=this.mount.querySelector("#btn-crm-shop");t&&this.onViewChange&&t.addEventListener("click",()=>{this.onViewChange("shop")});const e=this.mount.querySelector("#btn-crm-refresh");e&&e.addEventListener("click",async()=>{e.textContent="Yuklanmoqda...",await this.fetchOrders(),e.textContent="🔄 Yangilash"});const i=this.mount.querySelector("#btn-crm-logout");i&&i.addEventListener("click",()=>{sessionStorage.removeItem("any3d_admin_auth"),window.location.href=window.location.pathname}),this.mount.querySelectorAll(".crm-pill").forEach(r=>{r.addEventListener("click",()=>{this.filterStatus=r.getAttribute("data-filter"),this.render()})});const a=this.mount.querySelector("#crm-search-input");a&&a.addEventListener("input",r=>{this.searchQuery=r.target.value;const o=this.getFilteredOrders(),l=this.mount.querySelector(".crm-orders-grid");l&&(l.innerHTML=o.length===0?`
            <div class="crm-empty-state">
              <div class="empty-icon">🔍</div>
              <h3>Mos buyurtmalar topilmadi</h3>
            </div>
          `:o.map(c=>this.renderOrderCard(c)).join(""),this.attachCardActionListeners())}),this.attachCardActionListeners()}attachCardActionListeners(){this.mount.querySelectorAll("[data-approve-id]").forEach(n=>{n.addEventListener("click",async()=>{const a=n.getAttribute("data-approve-id");n.textContent="Tasdiqlanmoqda...",await fetch("/api/review-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:a,action:"approve"})}).catch(()=>{}),await this.fetchOrders()})}),this.mount.querySelectorAll("[data-decline-id]").forEach(n=>{n.addEventListener("click",async()=>{const a=n.getAttribute("data-decline-id");n.textContent="Rad etilmoqda...",await fetch("/api/review-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:a,action:"decline"})}).catch(()=>{}),await this.fetchOrders()})}),this.mount.querySelectorAll("[data-chat-id]").forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-chat-id"),r=this.orders.find(o=>o.orderId===a);r&&this.openAdminChat(r)})})}async openAdminChat(t){this.activeChatOrder=t,await this.fetchChatMessages(t.orderId),this.render(),this.chatPoller&&clearInterval(this.chatPoller),this.chatPoller=setInterval(async()=>{this.activeChatOrder&&await this.fetchChatMessages(this.activeChatOrder.orderId,!0)},2e3),this.attachChatDrawerListeners()}async fetchChatMessages(t,e=!1){try{const n=await(await fetch(`/api/chat-messages?orderId=${encodeURIComponent(t)}`)).json();if(n.ok&&Array.isArray(n.messages)&&(this.chatMessages=n.messages,!e)){const a=this.mount.querySelector("#adchat-messages-body");a&&(a.innerHTML=this.chatMessages.map(r=>`
              <div class="chat-bubble ${r.sender==="admin"?"admin":"customer"}">
                <div class="bubble-sender">${r.sender==="admin"?"👨‍💼 Siz (Admin)":"👤 "+(r.senderName||"Mijoz")}</div>
                <div class="bubble-text">${r.text}</div>
                <div class="bubble-time">${new Date(r.timestamp).toLocaleTimeString("uz-UZ",{hour:"2-digit",minute:"2-digit"})}</div>
              </div>
            `).join(""),a.scrollTop=a.scrollHeight)}}catch{}}attachChatDrawerListeners(){const t=this.mount.querySelector("#btn-close-adchat");t&&t.addEventListener("click",()=>{this.activeChatOrder=null,this.chatPoller&&clearInterval(this.chatPoller);const r=this.mount.querySelector("#admin-chat-modal");r&&(r.style.display="none")});const e=this.mount.querySelector("#adchat-input-field"),i=this.mount.querySelector("#btn-adchat-send"),n=async()=>{const r=e.value.trim();if(!(!r||!this.activeChatOrder)){e.value="";try{await fetch("/api/send-message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:this.activeChatOrder.orderId,sender:"admin",senderName:"Any3D Admin",text:r})}),await this.fetchChatMessages(this.activeChatOrder.orderId)}catch{}}};i&&i.addEventListener("click",n),e&&e.addEventListener("keypress",r=>{r.key==="Enter"&&n()}),this.mount.querySelectorAll(".ad-tpl-btn").forEach(r=>{r.addEventListener("click",()=>{e&&(e.value=r.getAttribute("data-tpl"),e.focus())})})}}class Dm{constructor(t,e={}){this.mount=typeof t=="string"?document.querySelector(t):t,this.currency=e.currency||"UZS",this.isAdmin=this.checkAdminAuth(),this.currentCategory="all",this.searchQuery="",this.products=[],this.activeProductForEdit=null,this.activeProductForOrder=null,this.onViewChange=e.onViewChange||null,this.init()}checkAdminAuth(){var a,r,o;const t=sessionStorage.getItem("any3d_admin_auth");if(t==="083010"||t==="any3DCubicc")return!0;const e=new URLSearchParams(window.location.search),i=e.get("pin")||e.get("admin");if(i==="083010"||i==="any3dcubicc")return sessionStorage.setItem("any3d_admin_auth","083010"),!0;const n=(o=(r=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:r.initDataUnsafe)==null?void 0:o.user;return n&&(n.id===8929216064||(n.username||"").toLowerCase()==="any3dcubicc")?(sessionStorage.setItem("any3d_admin_auth","083010"),!0):!1}setCurrency(t){this.currency=t,this.render()}formatPrice(t,e){if(this.currency==="USD"){const i=e||Math.round(t/12700);return`$${Number(i).toLocaleString("en-US")}`}return`${Number(t).toLocaleString("uz-UZ").replace(/,/g," ")} so‘m`}async init(){await this.fetchProducts(),this.render()}async fetchProducts(){try{const t=await fetch("/api/products");if(t.ok){const e=await t.json();if(e.ok&&Array.isArray(e.products)&&e.products.length>0){this.products=e.products,localStorage.setItem("cached_products",JSON.stringify(this.products));return}}}catch{console.warn("API orqali mahsulotlarni olishda ogohlantirish, keshdan tekshirilmoqda...")}try{const t=JSON.parse(localStorage.getItem("cached_products")||"[]");if(t.length>0){this.products=t;return}}catch{}this.products=this.getDefaultProducts(),localStorage.setItem("cached_products",JSON.stringify(this.products))}getDefaultProducts(){return[{id:"creality-k1-max",category:"printers",categoryTitle:"3D Printerlar",name:"Creality K1 Max Flagship AI",subtitle:"Yuqori tezlikdagi CoreXY, Dual LiDAR & AI Kamera",priceUZS:108e5,priceUSD:850,oldPriceUZS:119e5,badge:"🔥 Top Flagman",image:"https://img.crealitycloud.com/product/k1max.png",icon:"🖨️",crealityUrl:"https://www.crealitycloud.com/ru/product/k1-max",inStock:!0,stockStatus:"Omborda mavjud (Toshkent)",specs:["Bosish tezligi: 600 mm/s (Tezlanish: 20 000 mm/s²)","Bosma hajmi: 300 × 300 × 300 mm","AI LiDAR & 1080p AI Kamera","Issiq stol: 120°C | Ekstruder: 300°C"]},{id:"creality-k1c",category:"printers",categoryTitle:"3D Printerlar",name:"Creality K1C Carbon Fiber Edition",subtitle:"Karbon tola & Muhandislik kompozitlari uchun maxsus",priceUZS:75e5,priceUSD:590,oldPriceUZS:82e5,badge:"⚡ Karbon Pro",image:"https://img.crealitycloud.com/product/k1c.png",icon:"🦾",crealityUrl:"https://www.crealitycloud.com/ru/product/k1c",inStock:!0,stockStatus:"Omborda mavjud (Toshkent)",specs:["Bosish tezligi: 600 mm/s","Bosma hajmi: 220 × 220 × 250 mm","Qattiqlashtirilgan po‘lat nozzl (PLA-CF, PETG-CF)","To‘liq metall korpus va AI kamera"]},{id:"creality-ender-3-v3",category:"printers",categoryTitle:"3D Printerlar",name:"Creality Ender-3 V3 (CoreXZ)",subtitle:"Inqilobiy CoreXZ kinematikasi, 600 mm/s tezlik",priceUZS:48e5,priceUSD:380,oldPriceUZS:53e5,badge:"🏆 2026 Bestseller",image:"https://img.crealitycloud.com/product/ender3v3.png",icon:"⚡",crealityUrl:"https://www.crealitycloud.com/ru/product/ender-3-v3",inStock:!0,stockStatus:"Omborda mavjud (Toshkent)",specs:["Bosish tezligi: 600 mm/s","Bosma hajmi: 220 × 220 × 250 mm","CoreXZ tizimi (Tebranishsiz aniq qatlamlar)","Avtomatik kalibrovka (1 bosish)"]},{id:"creality-ender-3-v3-ke",category:"printers",categoryTitle:"3D Printerlar",name:"Creality Ender-3 V3 KE (Smart OS)",subtitle:"Klipper asosli Creality OS, Sensorli ekran & 500 mm/s",priceUZS:36e5,priceUSD:285,oldPriceUZS:395e4,badge:"⭐ Xalq Tanlovi",image:"https://img.crealitycloud.com/product/ender3v3ke.png",icon:"📱",crealityUrl:"https://www.crealitycloud.com/ru/product/ender-3-v3-ke",inStock:!0,stockStatus:"Omborda mavjud (Toshkent)",specs:["Bosish tezligi: 500 mm/s","Bosma hajmi: 220 × 220 × 240 mm","Wi-Fi masofadan boshqaruv & Klipper","CR Touch avtomatik nivelirlash"]},{id:"creality-hyper-pla-1kg",category:"filaments",categoryTitle:"Filamentlar & Smola",name:"Creality Hyper Series PLA (1 kg)",subtitle:"600 mm/s yuqori tezlikka moslashtirilgan original filament",priceUZS:24e4,priceUSD:19,oldPriceUZS:27e4,badge:"🚀 600mm/s Tezkor",image:"https://img.crealitycloud.com/product/hyperpla.png",icon:"🧵",crealityUrl:"https://www.crealitycloud.com/ru/product/hyper-pla",inStock:!0,stockStatus:"Omborda barcha ranglar mavjud",specs:["Og‘irligi: 1 kg netto | Diametri: 1.75 mm","Tezlik: 50 – 600 mm/s gacha oqadi","Ranglar: Oq, Qora, Kulrang, Qizil, Ko‘k"]},{id:"creality-cr-petg-1kg",category:"filaments",categoryTitle:"Filamentlar & Smola",name:"Creality CR-PETG Yuqori Bardoshli (1 kg)",subtitle:"Mexanik mustahkam, namlikka va quyoshga chidamli plastik",priceUZS:22e4,priceUSD:17.5,oldPriceUZS:25e4,badge:"🛡️ Mustahkam",image:"https://img.crealitycloud.com/product/petg.png",icon:"🔩",crealityUrl:"https://www.crealitycloud.com/ru/product/cr-petg",inStock:!0,stockStatus:"Omborda mavjud",specs:["Og‘irligi: 1 kg | Diametri: 1.75 mm","Erish harorati: 230°C – 250°C","Kronshteynlar, korpuslar, texnik detallar uchun"]},{id:"creality-space-pi-dryer",category:"accessories",categoryTitle:"Aksessuarlar & Zapchastlar",name:"Creality Space Pi Filament Dryer",subtitle:"Filamentni 360° issiq havo bilan quritish kamerasi (PTC 80W)",priceUZS:68e4,priceUSD:54,oldPriceUZS:78e4,badge:"♨️ Top Aksessuar",image:"https://img.crealitycloud.com/product/dryer.png",icon:"📦",crealityUrl:"https://www.crealitycloud.com/ru/product/space-pi-dryer",inStock:!0,stockStatus:"Omborda mavjud",specs:["Harorat: 45°C – 70°C real vaqtda","Sensorli ekran va taymer","Namlik pufakchalarini yo‘qotadi"]},{id:"creality-nebula-smart-kit",category:"accessories",categoryTitle:"Aksessuarlar & Zapchastlar",name:"Creality Nebula Smart Kit (Display + AI Cam)",subtitle:"Ender-3 printerlarini tezlashtiruvchi Smart kamera va ekran",priceUZS:89e4,priceUSD:70,oldPriceUZS:99e4,badge:"👁️ Smart Upgrade",image:"https://img.crealitycloud.com/product/nebula.png",icon:"📷",crealityUrl:"https://www.crealitycloud.com/ru/product/nebula-smart-kit",inStock:!0,stockStatus:"Omborda mavjud",specs:["4.3 dyuym sensorli IPS displey","HD AI Kamera (Time-lapse video va masofaviy kuzatuv)","Wi-Fi & Creality Cloud integratsiyasi"]},{id:"creality-engineering-stl-bundle",category:"models",categoryTitle:"3D Modellar & STL",name:"Creality Cloud Premium: Muhandislik STL Arxiv Paketi",subtitle:"500+ sertifikatlangan CAD chizmalar, shesternalar, kronshteynlar",priceUZS:15e4,priceUSD:12,oldPriceUZS:25e4,badge:"📁 500+ Model",image:"https://img.crealitycloud.com/product/cadbundle.png",icon:"📐",crealityUrl:"https://www.crealitycloud.com/ru/model-category/engineering",inStock:!0,stockStatus:"Elektron formatda darhol yuklab olish",specs:["Fayl formatlari: STL, STEP, OBJ, 3MF","To‘liq chop etishga tayyor Creality Print profillari","Tijoriy ishlab chiqarish ruxsati bilan"]}]}getFilteredProducts(){return this.products.filter(t=>{if(this.currentCategory!=="all"&&t.category!==this.currentCategory)return!1;if(this.searchQuery.trim()){const e=this.searchQuery.toLowerCase();if(!`${t.name} ${t.subtitle||""} ${t.categoryTitle||""} ${t.badge||""}`.toLowerCase().includes(e))return!1}return!0})}render(){const t=this.getFilteredProducts();this.mount.innerHTML=`
      <div class="creality-shop-container">
        <!-- Creality Cloud Hero Banner -->
        <div class="shop-hero-banner">
          <div class="shop-hero-glow"></div>
          <div class="shop-hero-content">
            <div class="shop-brand-row">
              <span class="shop-creality-badge">CREALITY CLOUD • RASMIY HAMKOR</span>
              <div class="shop-admin-indicator">
                ${this.isAdmin?`
                  <span class="admin-unlocked-badge">👑 Admin Rejimi Faol (PIN: 083010)</span>
                  <button type="button" class="btn-shop-add-prod" id="btn-add-product">➕ Yangi Mahsulot</button>
                `:`
                  <button type="button" class="btn-shop-admin-login" id="btn-shop-pin-login">
                    🔐 Narxlarni Boshqarish (Admin)
                  </button>
                `}
              </div>
            </div>

            <h1 class="shop-title">Creality 3D Do‘koni & Uskunalar Markazi</h1>
            <p class="shop-desc">
              Dunyoga mashhur <b>Creality Cloud</b> (<a href="https://www.crealitycloud.com/ru" target="_blank" class="creality-link">www.crealitycloud.com/ru</a>) platformasining original 3D printerlari, tezyurar Hyper PLA filamentlari, aksessuarlari va eksklyuziv 3D modellari Toshkent omborida.
            </p>

            <div class="shop-stats-strip">
              <div class="s-stat"><span class="s-val">100%</span><span class="s-lbl">Original Creality</span></div>
              <div class="s-stat"><span class="s-val">600 mm/s</span><span class="s-lbl">Maksimal Tezlik</span></div>
              <div class="s-stat"><span class="s-val">Toshkent</span><span class="s-lbl">Tezkor Yetkazish</span></div>
              <div class="s-stat"><span class="s-val">Kafolat</span><span class="s-lbl">Rasmiy Texnik Ko‘mak</span></div>
            </div>
          </div>
        </div>

        <!-- Filterlar va Qidiruv Paneli -->
        <div class="shop-toolbar">
          <div class="shop-categories-pills">
            <button type="button" class="cat-pill ${this.currentCategory==="all"?"active":""}" data-cat="all">
              🌐 Barchasi (${this.products.length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="printers"?"active":""}" data-cat="printers">
              🖨️ 3D Printerlar (${this.products.filter(e=>e.category==="printers").length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="filaments"?"active":""}" data-cat="filaments">
              🧵 Filamentlar & Smola (${this.products.filter(e=>e.category==="filaments").length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="accessories"?"active":""}" data-cat="accessories">
              ⚙️ Aksessuarlar (${this.products.filter(e=>e.category==="accessories").length})
            </button>
            <button type="button" class="cat-pill ${this.currentCategory==="models"?"active":""}" data-cat="models">
              📐 3D Modellar & STL (${this.products.filter(e=>e.category==="models").length})
            </button>
          </div>

          <div class="shop-search-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="shop-search-input" placeholder="Mahsulot qidirish (K1 Max, Ender-3, PLA, Nozzl...)" value="${this.searchQuery}">
            ${this.searchQuery?'<button type="button" class="btn-clear-search" id="btn-clear-search">✕</button>':""}
          </div>
        </div>

        <!-- Mahsulotlar Ro'yxati (Grid) -->
        <div class="shop-products-grid">
          ${t.length===0?`
            <div class="shop-empty-state">
              <div class="empty-icon">🔍</div>
              <h3>Mahsulot topilmadi</h3>
              <p>Qidiruv so‘rovingizni o‘zgartiring yoki boshqa toifani tanlang.</p>
              <button type="button" class="btn-reset-filters" id="btn-reset-filters">Barcha Mahsulotlarni Ko‘rsatish</button>
            </div>
          `:t.map(e=>`
            <div class="product-card ${e.category}" data-product-id="${e.id}">
              <div class="product-card-top">
                <span class="product-badge">${e.badge||"Creality Original"}</span>
                <span class="stock-pill ${e.inStock?"in-stock":"pre-order"}">
                  ${e.inStock?"🟢 Mavjud":"🟡 Buyurtmaga"}
                </span>
              </div>

              <!-- Mahsulot Vizual Qutisi -->
              <div class="product-visual-box">
                <div class="product-icon-frame">${e.icon||"🖨️"}</div>
                <div class="product-category-tag">${e.categoryTitle||"Creality"}</div>
              </div>

              <div class="product-info-body">
                <h3 class="product-name">${e.name}</h3>
                <p class="product-subtitle">${e.subtitle||""}</p>

                <!-- Texnik xususiyatlar ro'yxati -->
                <ul class="product-specs-list">
                  ${(e.specs||[]).slice(0,3).map(i=>`<li>• ${i}</li>`).join("")}
                </ul>

                <!-- Narxlar Maydoni -->
                <div class="product-pricing-box">
                  <div class="price-main">
                    <span class="price-val">${this.formatPrice(e.priceUZS,e.priceUSD)}</span>
                    ${e.oldPriceUZS?`<span class="price-old">${this.formatPrice(e.oldPriceUZS,Math.round(e.oldPriceUZS/12700))}</span>`:""}
                  </div>
                  <span class="stock-status-text">${e.stockStatus||(e.inStock?"Omborda mavjud":"Yetkazish: 3-5 kun")}</span>
                </div>

                <!-- Harakat Tugmalari -->
                <div class="product-card-actions">
                  <button type="button" class="btn-order-product" data-order-id="${e.id}">
                    🛒 Buyurtma Berish
                  </button>
                  <a href="${e.crealityUrl||"https://www.crealitycloud.com/ru"}" target="_blank" class="btn-view-creality" title="Creality Cloud rasmiy sahifasini ochish">
                    🌐 Creality Cloud
                  </a>
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
                  <h3 id="edit-prod-title">Narxni Tahrirlash</h3>
                  <small id="edit-prod-sub">Faqat bosh administrator uchun</small>
                </div>
              </div>
              <button type="button" class="shop-modal-close" id="btn-close-edit">✕</button>
            </div>

            <form class="edit-price-form" id="edit-price-form" onsubmit="return false;">
              <input type="hidden" id="edit-prod-id" value="">
              
              <div class="form-field">
                <label>Mahsulot Nomi:</label>
                <input type="text" id="edit-input-name" required>
              </div>

              <div class="form-row-dual">
                <div class="form-field">
                  <label>Narxi (SO‘M da) *</label>
                  <input type="number" id="edit-input-uzs" placeholder="10800000" required>
                </div>
                <div class="form-field">
                  <label>Narxi (USD da) *</label>
                  <input type="number" id="edit-input-usd" placeholder="850" required>
                </div>
              </div>

              <div class="form-row-dual">
                <div class="form-field">
                  <label>Maxsus Nishon (Badge):</label>
                  <input type="text" id="edit-input-badge" placeholder="🔥 Top Flagman">
                </div>
                <div class="form-field">
                  <label>Ombor Holati:</label>
                  <select id="edit-select-stock">
                    <option value="true">🟢 Omborda mavjud</option>
                    <option value="false">🟡 Buyurtmaga (3-5 kun)</option>
                  </select>
                </div>
              </div>

              <div class="form-field">
                <label>Ombor Holati Matni:</label>
                <input type="text" id="edit-input-stock-status" placeholder="Omborda mavjud (Toshkent)">
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

        <!-- 🛒 BUYURTMA BERISH MODALI (CHECKOUT) -->
        <div class="shop-modal-backdrop" id="shop-order-modal" style="display: none;">
          <div class="shop-modal-card">
            <div class="shop-modal-header">
              <div class="s-modal-title">
                <span class="s-m-icon">🛍️</span>
                <div>
                  <h3 id="order-modal-prod-name">Mahsulotga Buyurtma</h3>
                  <small id="order-modal-prod-price">Toshkent bo‘yicha tezkor yetkazish</small>
                </div>
              </div>
              <button type="button" class="shop-modal-close" id="btn-close-order">✕</button>
            </div>

            <form class="shop-order-form" id="shop-order-form" onsubmit="return false;">
              <input type="hidden" id="order-hidden-prod-id" value="">
              
              <div class="form-row-dual">
                <div class="form-field">
                  <label>Ismingiz *</label>
                  <input type="text" id="shop-cust-name" placeholder="Ismingizni yozing" required>
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
                  <input type="text" id="shop-cust-addr" placeholder="Toshkent shahri yoki viloyat">
                </div>
              </div>

              <div class="form-field">
                <label>Qo‘shimcha Izoh:</label>
                <textarea id="shop-cust-notes" rows="2" placeholder="Rang yoki qulay vaqt..."></textarea>
              </div>

              <div class="order-summary-box">
                <div class="o-sum-row">
                  <span>Tanlangan Mahsulot:</span>
                  <strong id="summary-prod-name">-</strong>
                </div>
                <div class="o-sum-row total">
                  <span>To‘lov Summasi:</span>
                  <strong id="summary-prod-price" style="color: #00f0ff;">-</strong>
                </div>
              </div>

              <div class="shop-modal-actions">
                <button type="submit" class="btn-submit-shop-order" id="btn-submit-shop-order">
                  🚀 Buyurtmani Tasdiqlash
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
                Buyurtmangiz Toshkent 3D Ustaxonasi bosh administratori (<b>@any3DCubicc</b>) ga yetkazildi. Tez orada siz bilan bog‘lanamiz!
              </p>
              <div class="succ-btns">
                <a href="https://t.me/Any3dCubic_bot" target="_blank" class="btn-succ-bot">
                  🤖 Botda Holatni Ko‘rish (@Any3dCubic_bot)
                </a>
                <button type="button" class="btn-succ-close" id="btn-succ-close">
                  Do‘konga Qaytish
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 🔐 SHOP ADMIN PIN MODAL -->
        <div class="shop-modal-backdrop" id="shop-pin-modal" style="display: none;">
          <div class="shop-modal-card pin-card">
            <div class="pin-badge">👑 NARX BOSHQARUVI</div>
            <h3>Admin PIN Kodini Kiriting</h3>
            <p>Narxlarni tahrirlash huquqi faqat maxfiy PIN kodga ega bosh administratorga berilgan.</p>
            
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
    `,this.attachEventListeners()}attachEventListeners(){this.mount.querySelectorAll(".cat-pill").forEach(H=>{H.addEventListener("click",()=>{this.currentCategory=H.getAttribute("data-cat")||"all",this.render()})});const e=this.mount.querySelector("#shop-search-input");e&&e.addEventListener("input",H=>{this.searchQuery=H.target.value,this.mount.querySelector(".shop-products-grid"),this.render();const b=this.mount.querySelector("#shop-search-input");b&&(b.focus(),b.selectionStart=b.selectionEnd=b.value.length)});const i=this.mount.querySelector("#btn-clear-search");i&&i.addEventListener("click",()=>{this.searchQuery="",this.render()});const n=this.mount.querySelector("#btn-reset-filters");n&&n.addEventListener("click",()=>{this.searchQuery="",this.currentCategory="all",this.render()});const a=this.mount.querySelector("#btn-shop-pin-login"),r=this.mount.querySelector("#shop-pin-modal"),o=this.mount.querySelector("#shop-pin-form"),l=this.mount.querySelector("#shop-pin-input"),c=this.mount.querySelector("#shop-pin-error"),d=this.mount.querySelector("#btn-cancel-shop-pin");a&&r&&a.addEventListener("click",()=>{r.style.display="flex",l&&(l.value="",l.focus()),c&&(c.style.display="none")}),o&&l&&o.addEventListener("submit",()=>{const H=l.value.trim().replace(/\s+/g,"");H==="083010"||H.toLowerCase()==="any3dcubicc"?(sessionStorage.setItem("any3d_admin_auth","083010"),this.isAdmin=!0,r&&(r.style.display="none"),this.render()):(c&&(c.style.display="block",c.textContent="🚫 Noto‘g‘ri PIN kod! Iltimos, to‘g‘ri kodni kiriting."),l.focus(),l.select())}),d&&r&&d.addEventListener("click",()=>{r.style.display="none"});const h=this.mount.querySelectorAll("[data-edit-id]"),u=this.mount.querySelector("#price-edit-modal"),m=this.mount.querySelector("#edit-price-form"),g=this.mount.querySelector("#btn-close-edit"),v=this.mount.querySelector("#btn-cancel-edit");h.forEach(H=>{H.addEventListener("click",()=>{const b=H.getAttribute("data-edit-id"),x=this.products.find(F=>F.id===b);x&&u&&(this.activeProductForEdit=x,this.mount.querySelector("#edit-prod-id").value=x.id,this.mount.querySelector("#edit-prod-title").textContent=`Narxni Tahrirlash: ${x.name}`,this.mount.querySelector("#edit-input-name").value=x.name,this.mount.querySelector("#edit-input-uzs").value=x.priceUZS,this.mount.querySelector("#edit-input-usd").value=x.priceUSD||Math.round(x.priceUZS/12700),this.mount.querySelector("#edit-input-badge").value=x.badge||"",this.mount.querySelector("#edit-select-stock").value=x.inStock?"true":"false",this.mount.querySelector("#edit-input-stock-status").value=x.stockStatus||(x.inStock?"Omborda mavjud":"Buyurtmaga"),u.style.display="flex")})}),m&&m.addEventListener("submit",async()=>{const H=this.mount.querySelector("#edit-prod-id").value,b=this.mount.querySelector("#edit-input-name").value,x=Number(this.mount.querySelector("#edit-input-uzs").value),F=Number(this.mount.querySelector("#edit-input-usd").value),X=this.mount.querySelector("#edit-input-badge").value,it=this.mount.querySelector("#edit-select-stock").value==="true",U=this.mount.querySelector("#edit-input-stock-status").value,G=this.products.findIndex(I=>I.id===H);G!==-1&&(this.products[G]={...this.products[G],name:b,priceUZS:x,priceUSD:F,badge:X,inStock:it,stockStatus:U},localStorage.setItem("cached_products",JSON.stringify(this.products)));try{await fetch("/api/update-product",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:"083010",productId:H,name:b,priceUZS:x,priceUSD:F,badge:X,inStock:it,stockStatus:U})})}catch(I){console.warn("Serverga narx saqlashda ogohlantirish:",I.message)}u&&(u.style.display="none"),this.render()}),g&&u&&g.addEventListener("click",()=>{u.style.display="none"}),v&&u&&v.addEventListener("click",()=>{u.style.display="none"});const p=this.mount.querySelectorAll("[data-order-id]"),f=this.mount.querySelector("#shop-order-modal"),A=this.mount.querySelector("#shop-order-form"),_=this.mount.querySelector("#shop-order-success"),M=this.mount.querySelector("#btn-close-order"),D=this.mount.querySelector("#btn-cancel-shop-order"),R=this.mount.querySelector("#btn-succ-close");p.forEach(H=>{H.addEventListener("click",()=>{const b=H.getAttribute("data-order-id"),x=this.products.find(F=>F.id===b);x&&f&&(this.activeProductForOrder=x,this.mount.querySelector("#order-hidden-prod-id").value=x.id,this.mount.querySelector("#order-modal-prod-name").textContent=x.name,this.mount.querySelector("#order-modal-prod-price").textContent=`Narxi: ${this.formatPrice(x.priceUZS,x.priceUSD)}`,this.mount.querySelector("#summary-prod-name").textContent=x.name,this.mount.querySelector("#summary-prod-price").textContent=this.formatPrice(x.priceUZS,x.priceUSD),A&&(A.style.display="block"),_&&(_.style.display="none"),f.style.display="flex")})}),A&&A.addEventListener("submit",async()=>{var $,K,tt;const H=this.activeProductForOrder;if(!H)return;const b=this.mount.querySelector("#shop-cust-name").value||"Mijoz",x=this.mount.querySelector("#shop-cust-phone").value||"",F=(($=this.mount.querySelector("#shop-cust-tg"))==null?void 0:$.value)||"",X=((K=this.mount.querySelector("#shop-cust-addr"))==null?void 0:K.value)||"",it=((tt=this.mount.querySelector("#shop-cust-notes"))==null?void 0:tt.value)||"",U="#SHOP-"+Math.floor(1e3+Math.random()*9e3),G={orderId:U,productId:H.id,productName:H.name,priceUZS:H.priceUZS,priceUSD:H.priceUSD,customerName:b,customerPhone:x,customerTelegram:F,deliveryAddress:X,orderNotes:it};let I=!1;try{(await fetch("/api/shop-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)})).ok&&(I=!0)}catch{}if(!I){const w="9101464035:AAGwpN8Yb-1Ey2eQZ7hvhj3Y1_jM7uHUkLI",E="8929216064";{const z=x.replace(/[^0-9+]/g,""),O=`
🛍️ <b>CREALITY DO‘KONIDAN YANGI BUYURTMA!</b>

🆔 <b>Buyurtma ID:</b> <code>${U}</code>
📦 <b>Mahsulot:</b> ${H.name}
💰 <b>Narxi:</b> <b>${this.formatPrice(H.priceUZS,H.priceUSD)}</b>
👤 <b>Mijoz:</b> ${b}
📞 <b>Telefon:</b> <a href="tel:${z}">${x}</a>
${F?`💬 <b>Telegram:</b> ${F}
`:""}${X?`📍 <b>Manzil:</b> ${X}
`:""}${it?`📝 <b>Izoh:</b> <i>"${it}"</i>
`:""}
⚡ <i>Holat: 🟡 Yangi buyurtma — mijoz bilan bog‘laning!</i>
            `.trim(),q={inline_keyboard:[[{text:"💬 Mijoz Telegrami",url:F?`https://t.me/${F.replace("@","")}`:`https://t.me/+${z.replace("+","")}`}]]};await fetch(`https://api.telegram.org/bot${w}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:E,text:O,parse_mode:"HTML",reply_markup:q})}).catch(()=>{})}}Ra({particleCount:120,spread:70,origin:{y:.6}}),A&&(A.style.display="none"),_&&(this.mount.querySelector("#shop-succ-num").textContent=U,_.style.display="block")}),M&&f&&M.addEventListener("click",()=>{f.style.display="none"}),D&&f&&D.addEventListener("click",()=>{f.style.display="none"}),R&&f&&R.addEventListener("click",()=>{f.style.display="none"});const C=this.mount.querySelector("#btn-add-product");C&&u&&C.addEventListener("click",()=>{const H="custom-"+Date.now();this.mount.querySelector("#edit-prod-id").value=H,this.mount.querySelector("#edit-prod-title").textContent="Yangi Mahsulot Qo‘shish",this.mount.querySelector("#edit-input-name").value="",this.mount.querySelector("#edit-input-uzs").value="1000000",this.mount.querySelector("#edit-input-usd").value="80",this.mount.querySelector("#edit-input-badge").value="Yangi",this.mount.querySelector("#edit-select-stock").value="true",this.mount.querySelector("#edit-input-stock-status").value="Omborda mavjud",u.style.display="flex"})}}class Im{constructor(){this.appContainer=document.querySelector("#app"),this.currency="UZS",this.isAdmin=this.checkAdminAuth();const t=new URLSearchParams(window.location.search);this.isAdmin&&t.get("admin")?this.currentView="admin":t.get("view")==="shop"||t.get("shop")?this.currentView="shop":this.currentView="configurator",this.threeStudio=null,this.configurator=null,this.pitchDeck=null,this.orderTracker=null,this.adminCRM=null,this.crealityShop=null,this.latestOrder=null,this.init()}checkAdminAuth(){var a,r,o;const t=(o=(r=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:r.initDataUnsafe)==null?void 0:o.user;if(t){const l=(t.username||"").toLowerCase();if(t.id===8929216064||l==="any3dcubicc")return sessionStorage.setItem("any3d_admin_auth","083010"),!0}const e=new URLSearchParams(window.location.search),i=(e.get("pin")||e.get("admin")||"").trim();if(i==="083010"||i.toLowerCase()==="any3dcubicc")return sessionStorage.setItem("any3d_admin_auth","083010"),!0;const n=sessionStorage.getItem("any3d_admin_auth");return n==="083010"||n==="any3DCubicc"}init(){this.initTelegramWebApp(),this.renderShell(),this.mountView(),this.attachNavListeners()}initTelegramWebApp(){var t;if((t=window.Telegram)!=null&&t.WebApp)try{const e=window.Telegram.WebApp;e.ready(),e.expand(),typeof e.requestFullscreen=="function"&&e.requestFullscreen(),typeof e.enableClosingConfirmation=="function"&&e.enableClosingConfirmation(),typeof e.setHeaderColor=="function"&&e.setHeaderColor("#090e1a"),typeof e.setBackgroundColor=="function"&&e.setBackgroundColor("#090e1a")}catch(e){console.warn("Telegram WebApp init error:",e)}}renderShell(){this.appContainer.innerHTML=`
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
            <span class="tab-icon">🛍️</span>
            <span class="tab-text-full">Creality 3D Do‘koni</span>
            <span class="tab-text-short">Do‘kon</span>
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
            <span class="loc-name">Chilonzor, Toshkent</span>
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
                <p>Toshkent shahri, Chilonzor tumani</p>
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
                <div class="pin-badge">🖨️ Any3D Ustaxona (Chilonzor)</div>
              </div>
              <div class="loc-map-coordinates">41.272145° N, 69.204523° E • Chilonzor 9-mavze</div>
            </div>

            <!-- Aniq Manzil Ma'lumotlari -->
            <div class="loc-address-details">
              <div class="loc-row">
                <span class="loc-k">🏬 Aniq Manzil:</span>
                <strong class="loc-v">Toshkent shahri, Chilonzor tumani, 9-mavze, 12-bino</strong>
              </div>
              <div class="loc-row">
                <span class="loc-k">🎯 Mo‘ljal:</span>
                <span class="loc-v">Chilonzor metro bekati, Chilonzor Savdo Markazi yaqinida</span>
              </div>
              <div class="loc-row">
                <span class="loc-k">⏱️ Ish Vaqti:</span>
                <span class="loc-v">Dushanba – Shanba: 09:00 dan 20:00 gacha (Yakshanba: Navbatdagi buyurtmalar)</span>
              </div>
              <div class="loc-row">
                <span class="loc-k">📞 Telefon:</span>
                <strong class="loc-v"><a href="tel:+998901234567">+998 (90) 123-45-67</a></strong>
              </div>
            </div>

            <!-- Xaritalar Tugmalari -->
            <div class="loc-action-buttons">
              <a href="https://www.google.com/maps/dir/?api=1&destination=41.272145,69.204523" target="_blank" class="btn-map-app google-map-btn">
                <span class="map-icon">🗺️</span>
                <div class="map-btn-meta">
                  <strong>Google Maps orqali ochish</strong>
                  <small>Marshrut chizish va navigatsiya</small>
                </div>
              </a>

              <a href="https://yandex.com/maps/?rtext=~41.272145,69.204523&rtt=auto" target="_blank" class="btn-map-app yandex-map-btn">
                <span class="map-icon">📍</span>
                <div class="map-btn-meta">
                  <strong>Yandex Maps / Go orqali ochish</strong>
                  <small>Avtomobil va piyoda navigatsiyasi</small>
                </div>
              </a>

              <a href="https://maps.apple.com/?daddr=41.272145,69.204523" target="_blank" class="btn-map-app apple-map-btn">
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
    `}mountView(){const t=this.appContainer.querySelector("#main-content");if(!t)return;if(t.innerHTML="",this.appContainer.querySelectorAll(".nav-tab-btn").forEach(i=>{const n=i.getAttribute("data-view");i.classList.remove("active","active-pitch","active-admin","active-shop"),n===this.currentView&&(n==="pitch"?i.classList.add("active-pitch"):n==="admin"?i.classList.add("active-admin"):n==="shop"?i.classList.add("active-shop"):i.classList.add("active"))}),this.currentView==="configurator"){const i=document.createElement("div");if(t.appendChild(i),!this.threeStudio){const n=document.createElement("div");this.threeStudio=new wm(n,{initialMaterial:"PETG",initialColor:"#ff6600"})}this.configurator=new Rm(i,this.threeStudio,n=>{this.latestOrder=n,this.currentView="tracker",this.mountView()}),this.configurator.setCurrency(this.currency),setTimeout(()=>{this.threeStudio&&this.threeStudio.onResize()},50)}else if(this.currentView==="shop"){const i=document.createElement("div");t.appendChild(i),this.crealityShop=new Dm(i,{currency:this.currency,onViewChange:n=>{this.currentView=n,this.mountView()}})}else if(this.currentView==="pitch"){const i=document.createElement("div");t.appendChild(i),this.pitchDeck=new Pm(i,()=>{this.currentView="configurator",this.mountView()})}else if(this.currentView==="tracker"){const i=document.createElement("div");t.appendChild(i),this.orderTracker=new Lm(i,this.latestOrder,()=>{this.currentView="configurator",this.mountView()})}else if(this.currentView==="admin"){const i=document.createElement("div");t.appendChild(i),this.adminCRM=new Um(i,{onViewChange:n=>{this.currentView=n,this.mountView()}})}}attachNavListeners(){const t=this.appContainer.querySelector(".mode-switcher-nav");t&&t.addEventListener("click",v=>{const p=v.target.closest(".nav-tab-btn");if(p){const f=p.getAttribute("data-view");if(f==="admin"&&!this.checkAdminAuth()){const A=this.appContainer.querySelector("#admin-auth-modal"),_=this.appContainer.querySelector("#admin-pin-input"),M=this.appContainer.querySelector("#admin-auth-error");A&&(A.style.display="flex",M&&(M.style.display="none"),_&&(_.value="",_.focus()));return}f&&f!==this.currentView&&(this.currentView=f,this.mountView(),window.scrollTo({top:0,behavior:"smooth"}))}});const e=this.appContainer.querySelector("#admin-pin-form"),i=this.appContainer.querySelector("#admin-pin-input"),n=this.appContainer.querySelector("#admin-auth-error"),a=this.appContainer.querySelector("#admin-auth-modal"),r=this.appContainer.querySelector("#btn-cancel-auth");e&&i&&e.addEventListener("submit",()=>{const v=i.value.trim().replace(/\s+/g,"");v==="083010"||v.toLowerCase()==="any3dcubicc"?(sessionStorage.setItem("any3d_admin_auth","083010"),this.isAdmin=!0,a&&(a.style.display="none"),this.currentView="admin",this.renderShell(),this.mountView(),this.attachNavListeners()):(n&&(n.style.display="block",n.textContent="🚫 Noto‘g‘ri PIN-kod! Iltimos, to‘g‘ri 6 xonali kodni kiriting."),i.focus(),i.select())});const o=this.appContainer.querySelector("#btn-toggle-pin-peek");o&&i&&o.addEventListener("click",()=>{i.type==="password"?(i.type="text",o.textContent="🙈"):(i.type="password",o.textContent="👁️")}),r&&a&&r.addEventListener("click",()=>{a.style.display="none"});const l=this.appContainer.querySelector("#nav-brand");l&&l.addEventListener("click",()=>{this.currentView="configurator",this.mountView(),window.scrollTo({top:0,behavior:"smooth"})});const c=this.appContainer.querySelector(".currency-toggle");c&&c.addEventListener("click",v=>{const p=v.target.closest(".curr-btn");if(p){const f=p.getAttribute("data-curr");f&&f!==this.currency&&(this.currency=f,c.querySelectorAll(".curr-btn").forEach(_=>_.classList.remove("active")),p.classList.add("active"),this.currentView==="configurator"&&this.configurator&&this.configurator.setCurrency(f),this.currentView==="shop"&&this.crealityShop&&this.crealityShop.setCurrency(f))}});const d=this.appContainer.querySelector("#btn-open-location"),h=this.appContainer.querySelector("#location-modal"),u=this.appContainer.querySelector("#btn-close-location"),m=this.appContainer.querySelector("#btn-copy-loc-addr");d&&h&&d.addEventListener("click",()=>{h.style.display="flex"}),u&&h&&u.addEventListener("click",()=>{h.style.display="none"}),h&&h.addEventListener("click",v=>{v.target===h&&(h.style.display="none")}),m&&m.addEventListener("click",()=>{navigator.clipboard.writeText("Toshkent shahri, Chilonzor tumani, 9-mavze, 12-bino (Any3D Ustaxonasi)").then(()=>{m.textContent="✅ Manzil nusxalandi!",setTimeout(()=>{m.textContent="📋 Manzilni Nusxalash"},2500)})});const g=this.appContainer.querySelector("#btn-fullscreen");g&&(g.addEventListener("click",()=>{var v;if((v=window.Telegram)!=null&&v.WebApp)try{window.Telegram.WebApp.expand(),typeof window.Telegram.WebApp.requestFullscreen=="function"&&window.Telegram.WebApp.requestFullscreen()}catch{}document.fullscreenElement?(document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),g.innerHTML="⛶ <span>To‘liq Ekran</span>"):(document.documentElement.requestFullscreen().catch(()=>{}),g.innerHTML="🗗 <span>Oddiy Ekran</span>")}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?g.innerHTML="🗗 <span>Oddiy Ekran</span>":g.innerHTML="⛶ <span>To‘liq Ekran</span>"}))}}new Im;
