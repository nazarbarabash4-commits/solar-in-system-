import {
  C as Be,
  R as Rn,
  S as ye,
  T as Nn,
  N as On,
  a as ze,
  D as Qt,
  A as Ot,
  b as Ct,
  M as X,
  c as rt,
  B as pt,
  d as mt,
  e as Fn,
  L as Bt,
  f as un,
  V as U,
  W as Hn,
  g as $n,
  h as hn,
  P as pn,
  O as Un,
  i as Gn,
  j as Kn,
  G as et,
  k as jn,
  H as qn,
  E as Vn,
  l as Wn,
  U as Yn,
  m as mn,
  n as Xn,
  o as xt,
  p as fn,
  q as yn,
  r as $t,
  s as zt,
  t as gn,
  u as Qn,
  v as Je,
  w as $e,
  x as Vt,
  y as Zn,
  z as ts,
  F as es,
  I as ns,
  J as ss
} from "./three-C6AoC6lm.js";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver(o => {
    for (const a of o)
      if (a.type === "childList")
        for (const r of a.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function e(o) {
    const a = {};
    return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
  }

  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = e(o);
    fetch(o.href, a)
  }
})();
const ne = Math.PI * 2;

function os(s) {
  return s = (s % ne + ne) % ne, s > Math.PI ? s - ne : s
}

function Re(s, t, e = 1e-12) {
  if (s = os(s), t === 0) return s;
  let n;
  if (t < .8) n = s + t * Math.sin(s);
  else {
    const r = Math.cbrt(6 * s);
    n = Math.abs(s) < .5 ? r : Math.PI * Math.sign(s || 1)
  }
  for (let r = 0; r < 60; r++) {
    const i = n - t * Math.sin(n) - s;
    if (Math.abs(i) < e) return n;
    const l = 1 - t * Math.cos(n),
      c = i / l;
    n -= Math.abs(c) > 1 ? Math.sign(c) : c
  }
  let o = -Math.PI,
    a = Math.PI;
  for (let r = 0; r < 90; r++) {
    const i = (o + a) / 2;
    i - t * Math.sin(i) - s > 0 ? a = i : o = i
  }
  return (o + a) / 2
}

function Ft(s, t, e) {
  return [s * (Math.cos(e) - t), s * Math.sqrt(1 - t * t) * Math.sin(e)]
}

function St(s, t, e, n, o) {
  const a = Math.cos(e),
    r = Math.sin(e),
    i = Math.cos(n),
    l = Math.sin(n),
    c = Math.cos(o),
    u = Math.sin(o),
    h = a * s - r * t,
    p = r * s + a * t,
    y = i * p,
    g = l * p;
  return [c * h - u * y, u * h + c * y, g]
}

function as(s, t, e = 1e-12) {
  if (s === 0) return 0;
  const n = s < 0 ? -1 : 1,
    o = Math.abs(s);
  let a = o > 6 * t ? Math.log(2 * o / t + 1.8) : o / (t - 1);
  (!isFinite(a) || a <= 0) && (a = Math.min(o, 1));
  for (let l = 0; l < 100; l++) {
    const c = t * Math.sinh(a) - a - o;
    if (Math.abs(c) < e * Math.max(1, o)) return n * a;
    const u = t * Math.cosh(a) - 1;
    let h = c / u;
    Math.abs(h) > 1 && (h = Math.sign(h)), a -= h, a <= 0 && (a = e)
  }
  let r = 0,
    i = 1;
  for (; t * Math.sinh(i) - i < o;) i *= 2;
  for (let l = 0; l < 200; l++) {
    const c = (r + i) / 2;
    t * Math.sinh(c) - c > o ? i = c : r = c
  }
  return n * ((r + i) / 2)
}
const is = 2451545,
  bn = 864e5;

function dt(s) {
  return s.getTime() / bn + 24405875e-1
}

function $(s) {
  return new Date((s - 24405875e-1) * bn)
}

function te(s) {
  return (s - is) / 36525
}

function Pt(s) {
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!t) return null;
  const e = new Date(Date.UTC(+t[1], +t[2] - 1, +t[3]));
  return +t[1] < 100 && e.setUTCFullYear(+t[1]), isNaN(e.getTime()) || e.getUTCMonth() + 1 !== +t[2] || e.getUTCDate() !== +t[3] ? null : e
}

function F(s) {
  const t = s.getUTCFullYear(),
    e = (t < 0 ? "-" : "") + String(Math.abs(t)).padStart(4, "0"),
    n = String(s.getUTCMonth() + 1).padStart(2, "0"),
    o = String(s.getUTCDate()).padStart(2, "0");
  return `${e}-${n}-${o}`
}

function rs(s) {
  return s.getUTCFullYear() < 1583 ? "proleptic Gregorian calendar" : null
}
const Q = Math.PI / 180,
  pe = {
    Mercury: {
      el: [.38709927, .20563593, 7.00497902, 252.2503235, 77.45779628, 48.33076593],
      rate: [37e-8, 1906e-8, -.00594749, 149472.67411175, .16047689, -.12534081]
    },
    Venus: {
      el: [.72333566, .00677672, 3.39467605, 181.9790995, 131.60246718, 76.67984255],
      rate: [39e-7, -4107e-8, -7889e-7, 58517.81538729, .00268329, -.27769418]
    },
    Earth: {
      el: [1.00000261, .01671123, -1531e-8, 100.46457166, 102.93768193, 0],
      rate: [562e-8, -4392e-8, -.01294668, 35999.37244981, .32327364, 0]
    },
    Mars: {
      el: [1.52371034, .0933941, 1.84969142, -4.55343205, -23.94362959, 49.55953891],
      rate: [1847e-8, 7882e-8, -.00813131, 19140.30268499, .44441088, -.29257343]
    },
    Jupiter: {
      el: [5.202887, .04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909],
      rate: [-11607e-8, -13253e-8, -.00183714, 3034.74612775, .21252668, .20469106]
    },
    Saturn: {
      el: [9.53667594, .05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448],
      rate: [-.0012506, -50991e-8, .00193609, 1222.49362201, -.41897216, -.28867794]
    },
    Uranus: {
      el: [19.18916464, .04725744, .77263783, 313.23810451, 170.9542763, 74.01692503],
      rate: [-.00196176, -4397e-8, -.00242939, 428.48202785, .40805281, .04240589]
    },
    Neptune: {
      el: [30.06992276, .00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574],
      rate: [26291e-8, 5105e-8, 35372e-8, 218.45945325, -.32241464, -.00508664]
    },
    Pluto: {
      el: [39.48211675, .2488273, 17.14001206, 238.92903833, 224.06891629, 110.30393684],
      rate: [-31596e-8, 517e-7, 4818e-8, 145.20780515, -.04062942, -.01183482]
    }
  },
  wn = {
    Mercury: {
      el: [.38709843, .20563661, 7.00559432, 252.25166724, 77.45771895, 48.33961819],
      rate: [0, 2123e-8, -.00590158, 149472.67486623, .15940013, -.12214182]
    },
    Venus: {
      el: [.72332102, .00676399, 3.39777545, 181.9797085, 131.76755713, 76.67261496],
      rate: [-26e-8, -5107e-8, 43494e-8, 58517.8156026, .05679648, -.27274174]
    },
    Earth: {
      el: [1.00000018, .01673163, -54346e-8, 100.46691572, 102.93005885, -5.11260389],
      rate: [-3e-8, -3661e-8, -.01337178, 35999.37306329, .3179526, -.24123856]
    },
    Mars: {
      el: [1.52371243, .09336511, 1.85181869, -4.56813164, -23.91744784, 49.71320984],
      rate: [97e-8, 9149e-8, -.00724757, 19140.29934243, .45223625, -.26852431]
    },
    Jupiter: {
      el: [5.20248019, .0485359, 1.29861416, 34.33479152, 14.27495244, 100.29282654],
      rate: [-2864e-8, 18026e-8, -.00322699, 3034.90371757, .18199196, .13024619],
      extra: {
        b: -12452e-8,
        c: .0606406,
        s: -.35635438,
        f: 38.35125
      }
    },
    Saturn: {
      el: [9.54149883, .05550825, 2.49424102, 50.07571329, 92.86136063, 113.63998702],
      rate: [-3065e-8, -32044e-8, .00451969, 1222.11494724, .54179478, -.25015002],
      extra: {
        b: 25899e-8,
        c: -.13434469,
        s: .87320147,
        f: 38.35125
      }
    },
    Uranus: {
      el: [19.18797948, .0468574, .77298127, 314.20276625, 172.43404441, 73.96250215],
      rate: [-20455e-8, -155e-7, -.00180155, 428.49512595, .09266985, .05739699],
      extra: {
        b: 58331e-8,
        c: -.97731848,
        s: .17689245,
        f: 7.67025
      }
    },
    Neptune: {
      el: [30.06952752, .00895439, 1.7700552, 304.22289287, 46.68158724, 131.78635853],
      rate: [6447e-8, 818e-8, 224e-6, 218.46515314, .01009938, -.00606302],
      extra: {
        b: -41348e-8,
        c: .68346318,
        s: -.10162547,
        f: 7.67025
      }
    },
    Pluto: {
      el: [39.48686035, .24885238, 17.1410426, 238.96535011, 224.09702598, 110.30167986],
      rate: [.00449751, 6016e-8, 501e-8, 145.18042903, -.00968827, -.00809981],
      extra: {
        b: -.01262724,
        c: 0,
        s: 0,
        f: 0
      }
    }
  },
  ft = Object.keys(pe),
  Rt = -2,
  Nt = .5,
  ls = -50,
  cs = 10;

function me(s) {
  const t = te(s);
  return t >= Rt && t <= Nt ? "high" : t >= ls && t <= cs ? "good" : "extrapolated"
}

function lt(s, t) {
  const e = te(t),
    n = .1;
  if (e > Rt - n && e < Rt) {
    const o = (e - (Rt - n)) / n;
    return Ue(Ut(s, e, !1), Ut(s, e, !0), o)
  }
  if (e > Nt && e < Nt + n) {
    const o = (e - Nt) / n;
    return Ue(Ut(s, e, !0), Ut(s, e, !1), o)
  }
  return Ut(s, e, e >= Rt && e <= Nt)
}

function Ue(s, t, e) {
  return [s[0] + (t[0] - s[0]) * e, s[1] + (t[1] - s[1]) * e, s[2] + (t[2] - s[2]) * e]
}

function Ut(s, t, e) {
  const n = (e ? pe : wn)[s];
  if (!n) throw new Error(`Unknown planet: ${s}`);
  const o = n.el[0] + n.rate[0] * t,
    a = n.el[1] + n.rate[1] * t,
    r = (n.el[2] + n.rate[2] * t) * Q,
    i = n.el[3] + n.rate[3] * t,
    l = n.el[4] + n.rate[4] * t,
    c = (n.el[5] + n.rate[5] * t) * Q,
    u = l * Q - c;
  let h = i - l;
  if (!e && n.extra) {
    const {
      b: f,
      c: w,
      s: k,
      f: b
    } = n.extra;
    h += f * t * t + w * Math.cos(b * t * Q) + k * Math.sin(b * t * Q)
  }
  const p = Re(h * Q, a),
    [y, g] = Ft(o, a, p);
  return St(y, g, u, r, c)
}
const vn = {
  Ceres: {
    a: 2.76649,
    e: .07838,
    i: 10.583,
    Om: 80.494,
    w: 73.923,
    M0: 6.07,
    epoch: 24515445e-1,
    period: 1680.7
  },
  Eris: {
    a: 68.13996,
    e: .4325,
    i: 43.74,
    Om: 36.129,
    w: 150.845,
    M0: 194.289,
    epoch: 24515445e-1,
    period: 205447.7
  },
  Makemake: {
    a: 45.3719,
    e: .16453,
    i: 29,
    Om: 79.275,
    w: 296.28,
    M0: 139.72,
    epoch: 24515445e-1,
    period: 111629.5
  },
  Halley: {
    a: 17.834,
    e: .96714,
    i: 162.262,
    Om: 58.42,
    w: 111.33,
    M0: 0,
    epoch: 24464709e-1,
    period: 27509
  }
};

function Ge(s, t) {
  const e = vn[s];
  if (!e) throw new Error(`Unknown small body: ${s}`);
  const n = e.M0 * Q + 2 * Math.PI * (t - e.epoch) / e.period,
    o = Re(n, e.e),
    [a, r] = Ft(e.a, e.e, o);
  return St(a, r, e.w * Q, e.i * Q, e.Om * Q)
}

function se(s, t, e = 256) {
  const n = s in pe,
    o = [];
  if (n) {
    const a = te(t),
      i = (a >= Rt && a <= Nt ? pe : wn)[s],
      l = i.el[0] + i.rate[0] * a,
      c = i.el[1] + i.rate[1] * a,
      u = (i.el[2] + i.rate[2] * a) * Q,
      h = i.el[4] + i.rate[4] * a,
      p = (i.el[5] + i.rate[5] * a) * Q,
      y = h * Q - p;
    for (let g = 0; g <= e; g++) {
      const f = g / e * 2 * Math.PI,
        [w, k] = Ft(l, c, f);
      o.push(St(w, k, y, u, p))
    }
  } else {
    const a = vn[s];
    for (let r = 0; r <= e; r++) {
      const i = r / e * 2 * Math.PI,
        [l, c] = Ft(a.a, a.e, i);
      o.push(St(l, c, a.w * Q, a.i * Q, a.Om * Q))
    }
  }
  return o
}
const kn = JSON.parse(`[{"id":"1","key":"Ceres","alias":"1","name":"1 Ceres (A801 AA)","kind":"dwarf","note":"Largest object in the asteroid belt and the only dwarf planet inside Neptune’s orbit.","e":0.07969229514816586,"a":2.765552595034094,"q":2.545159361382861,"i":10.58802780183462,"om":80.24862682043221,"w":73.29421453021587,"ma":274.4193463761342,"tp":2461599.841466614,"period":1679.853119758983,"epoch":2461200.5,"diameterKm":939.4,"albedo":0.09,"H":3.34},{"id":"136199","key":"Eris","alias":"136199","name":"136199 Eris (2003 UB313)","kind":"dwarf","note":"More massive than Pluto; its discovery in 2005 forced the debate that redefined “planet”.","e":0.4382385347971672,"a":67.93394687853566,"q":38.16267353549761,"i":43.9258279471791,"om":36.00477044417249,"w":150.7949235840312,"ma":211.774434275007,"tp":2545407.716847013,"period":204516.6629430732,"epoch":2461200.5,"diameterKm":null,"albedo":null,"H":-1.26},{"id":"136472","key":"Makemake","alias":"136472","name":"136472 Makemake (2005 FY9)","kind":"dwarf","note":"A bright Kuiper Belt world named for the Rapa Nui creator deity.","e":0.1588889953992523,"a":45.57093317300052,"q":38.33021338173601,"i":29.02785603743067,"om":79.2948338209406,"w":297.0922733397207,"ma":169.9379962048232,"tp":2408158.6940986165,"period":112364.8068762869,"epoch":2461200.5,"diameterKm":null,"albedo":null,"H":-0.25},{"id":"1P","key":"Halley","alias":"1P","name":"1P/Halley","kind":"comet","note":"The most famous periodic comet — last seen in 1986, next due around 2061.","e":0.9679359956953211,"a":17.92863504856923,"q":0.5748638313743413,"i":162.1905300439129,"om":59.09894720612437,"w":112.2414314637764,"ma":274.3823371366792,"tp":2446469.9736161465,"period":27728.04608790421,"epoch":2439875.5,"diameterKm":11,"albedo":0.04,"H":null},{"id":"99942","key":null,"alias":"99942","name":"99942 Apophis (2004 MN4)","kind":"neo","note":"Passes inside geostationary orbit on 13 April 2029 — the closest approach by an object this size in recorded history.","e":0.1911492279663492,"a":0.9223592206975018,"q":0.7460509677535309,"i":3.340996879880978,"om":203.8936514240762,"w":126.6795706895841,"ma":175.3304026592739,"tp":2461042.919201488,"period":323.5553366891694,"epoch":2461200.5,"diameterKm":0.34,"albedo":0.35,"H":19.09},{"id":"101955","key":null,"alias":"101955","name":"101955 Bennu (1999 RQ36)","kind":"neo","note":"OSIRIS-REx collected a sample here in 2020 and dropped it over Utah in 2023.","e":0.2037450762416414,"a":1.126391025894812,"q":0.8968944004459729,"i":6.03494377024794,"om":2.06086619569642,"w":66.22306084084298,"ma":101.703952002457,"tp":2455439.1419408727,"period":436.6487281120201,"epoch":2455562.5,"diameterKm":0.48444,"albedo":0.044,"H":20.21},{"id":"433","key":null,"alias":"433","name":"433 Eros (A898 PA)","kind":"neo","note":"The first asteroid to be orbited and landed on, by NEAR Shoemaker in 2000–2001.","e":0.2228779627700761,"a":1.458243716760167,"q":1.133233327946397,"i":10.82854410314273,"om":304.2679713350896,"w":178.9181319135911,"ma":62.51145501986792,"tp":2461088.8134940397,"period":643.1963890927677,"epoch":2461200.5,"diameterKm":16.84,"albedo":0.25,"H":10.4},{"id":"25143","key":null,"alias":"25143","name":"25143 Itokawa (1998 SF36)","kind":"neo","note":"Hayabusa returned the first grains of an asteroid surface from here in 2010.","e":0.2801776414987972,"a":1.324052284342771,"q":0.9530824380945183,"i":1.620940810523569,"om":69.07449749929083,"w":162.8409022415483,"ma":170.653905937934,"tp":2460936.702994477,"period":556.4884171058932,"epoch":2461200.5,"diameterKm":0.33,"albedo":null,"H":19.26},{"id":"162173","key":null,"alias":"162173","name":"162173 Ryugu (1999 JU3)","kind":"neo","note":"Hayabusa2 dropped landers, fired an impactor, and brought samples home in 2020.","e":0.1910730046480051,"a":1.190918932702464,"q":0.9633664739388087,"i":5.866442486408568,"om":251.2897123995624,"w":211.608993811871,"ma":62.34067409463987,"tp":2461118.2964223134,"period":474.7027265420688,"epoch":2461200.5,"diameterKm":0.896,"albedo":0.045,"H":19.55},{"id":"65803","key":null,"alias":"65803","name":"65803 Didymos (1996 GT)","kind":"neo","note":"DART struck its moonlet Dimorphos in 2022 — the first test of deflecting an asteroid.","e":0.3831233242624545,"a":1.642709608529702,"q":1.013349242511927,"i":3.413876519313629,"om":72.9858236207145,"w":319.5807001349104,"ma":260.8612886320632,"tp":2461412.2777801678,"period":769.0235207660371,"epoch":2461200.5,"diameterKm":0.78,"albedo":null,"H":18.11},{"id":"3200","key":null,"alias":"3200","name":"3200 Phaethon (1983 TB)","kind":"neo","note":"Sheds the dust that becomes the Geminid meteor shower every December.","e":0.8896722843692159,"a":1.271464620920411,"q":0.1402777871315099,"i":22.31052728047163,"om":265.0988060455101,"w":322.300168483426,"ma":301.4858235833354,"tp":2461285.6164384843,"period":523.6665664767817,"epoch":2461200.5,"diameterKm":6.25,"albedo":0.1066,"H":14.38},{"id":"1566","key":null,"alias":"1566","name":"1566 Icarus (1949 MA)","kind":"neo","note":"Dives nearer the Sun than Mercury, then swings back out past Mars.","e":0.8270188506567441,"a":1.077994212612045,"q":0.1864726778830097,"i":22.80164022873813,"om":87.94856454873877,"w":31.44439446567389,"ma":329.1826621295523,"tp":2461235.495780981,"period":408.8114685994854,"epoch":2461200.5,"diameterKm":1,"albedo":0.51,"H":16.53},{"id":"4","key":null,"alias":"4","name":"4 Vesta (A807 FA)","kind":"belt","note":"Second-most massive body in the belt; Dawn orbited it in 2011–2012.","e":0.09020374382834395,"a":2.361365965127599,"q":2.148361914524259,"i":7.143925545058711,"om":103.701293265032,"w":151.4686478221564,"ma":81.19015607686903,"tp":2460901.587379843,"period":1325.389042911101,"epoch":2461200.5,"diameterKm":522.77,"albedo":0.4228,"H":3.25},{"id":"2","key":null,"alias":"2","name":"2 Pallas (A802 FA)","kind":"belt","note":"Third-largest belt object, on a steeply tilted 34° orbit.","e":0.2307000995648547,"a":2.769559010737709,"q":2.130621471209779,"i":34.93279321851542,"om":172.8866193357694,"w":310.9699161652136,"ma":254.2496521742734,"tp":2461695.0311643826,"period":1683.504809564834,"epoch":2461200.5,"diameterKm":513,"albedo":0.155,"H":4.12},{"id":"10","key":null,"alias":"10","name":"10 Hygiea (A849 GA)","kind":"belt","note":"Fourth-largest, and the only one of the big four that is not a dwarf planet.","e":0.1067092741240963,"a":3.150974033963701,"q":2.814735882015559,"i":3.829529946447122,"om":283.1198927508594,"w":312.4242387344704,"ma":252.0344242359649,"tp":2461813.2008286817,"period":2042.987283349627,"epoch":2461200.5,"diameterKm":407.12,"albedo":0.0717,"H":5.65},{"id":"16","key":null,"alias":"16","name":"16 Psyche (A852 FA)","kind":"belt","note":"A metal-rich world that NASA’s Psyche mission reaches in 2029.","e":0.1349324738201893,"a":2.925720466462538,"q":2.53094576621639,"i":3.098749116151128,"om":149.9753859305033,"w":230.0326782748359,"ma":79.76939505329617,"tp":2460795.4753370755,"period":1827.87996016922,"epoch":2461200.5,"diameterKm":222,"albedo":0.1203,"H":6.2},{"id":"2P","key":null,"alias":"2P","name":"2P/Encke","kind":"comet","note":"The shortest period of any known comet — it returns every 3.3 years.","e":0.8475034197640028,"a":2.219671347799601,"q":0.3384922897872659,"i":11.3868073505599,"om":334.1498910332493,"w":187.1740630668253,"ma":256.1941744229795,"tp":2460239.797748443,"period":1207.901278589101,"epoch":2459891.5,"diameterKm":4.8,"albedo":0.046,"H":null},{"id":"67P","key":null,"alias":"67P","name":"67P/Churyumov-Gerasimenko","kind":"comet","note":"Rosetta orbited it and Philae landed on it in 2014.","e":0.6409081306555051,"a":3.462249489765068,"q":1.243265641416762,"i":7.040294906760007,"om":50.13557380441372,"w":12.79824973415729,"ma":8.859927418758764,"tp":2457247.5886578634,"period":2353.076067532089,"epoch":2457305.5,"diameterKm":3.4,"albedo":null,"H":null},{"id":"1995 O1","key":null,"alias":"C/1995 O1","name":"C/1995 O1 (Hale-Bopp)","kind":"comet","note":"The Great Comet of 1997 — visible to the naked eye for a record 18 months.","e":0.9949810027633206,"a":177.4333839117583,"q":0.890537663547794,"i":89.28759424740302,"om":282.7334213961641,"w":130.4146670659176,"ma":3.878386339423241,"tp":2450537.134907144,"period":863279.5034870314,"epoch":2459837.5,"diameterKm":60,"albedo":0.04,"H":null},{"id":"2020 F3","key":null,"alias":"C/2020 F3","name":"C/2020 F3 (NEOWISE)","kind":"comet","note":"NEOWISE — the brightest comet in northern skies since 1997.","e":0.9991780262531292,"a":358.4679565529321,"q":0.2946512493809196,"i":128.9375027594809,"om":61.01042818536988,"w":37.2786584481257,"ma":0.0003370720801246702,"tp":2459034.1788980444,"period":2478985.217997125,"epoch":2459036.5,"diameterKm":null,"albedo":null,"H":null},{"id":"2017 U1","key":null,"alias":"1I","name":"'Oumuamua (A/2017 U1)","kind":"interstellar","note":"'Oumuamua — the first object confirmed to have come from outside the Solar System.","e":1.201133796102373,"a":-1.27234500742808,"q":0.2559115812959116,"i":122.7417062847286,"om":24.59690955523242,"w":241.8105360304898,"ma":51.1576197938249,"tp":2458006.0073213754,"period":null,"epoch":2458080.5,"diameterKm":null,"albedo":null,"H":22.08},{"id":"2019 Q4","key":null,"alias":"2I","name":"C/2019 Q4 (Borisov)","kind":"interstellar","note":"Borisov — the first unambiguously interstellar comet.","e":3.356475782676596,"a":-0.8514922551937886,"q":2.006520878500843,"i":44.05264247909138,"om":308.1477292269942,"w":209.1236864378081,"ma":34.4294703072178,"tp":2458826.052845906,"period":null,"epoch":2458853.5,"diameterKm":null,"albedo":null,"H":null}]`),
  Lt = Math.PI / 180,
  ds = .0002959122082855911,
  Ne = kn,
  de = new Map,
  xn = new Map;
for (const s of kn) xn.set(s.id, s), s.key && de.set(s.key, s), s.alias && de.set(s.alias, s), de.set(s.name, s);

function ge(s) {
  return de.get(s) || xn.get(s) || null
}
const _t = s => s.e >= 1;

function Zt(s, t) {
  const e = typeof s == "string" ? ge(s) : s;
  if (!e) throw new Error(`Unknown small body: ${s}`);
  const n = e.w * Lt,
    o = e.i * Lt,
    a = e.om * Lt;
  if (_t(e)) {
    const h = e.a,
      y = Math.sqrt(ds / Math.abs(h) ** 3) * (t - e.tp),
      g = as(y, e.e),
      f = h * (Math.cosh(g) - e.e),
      w = -h * Math.sqrt(e.e * e.e - 1) * Math.sinh(g);
    return St(f, w, n, o, a)
  }
  const r = 2 * Math.PI / e.period,
    i = e.ma != null ? e.ma * Lt + r * (t - e.epoch) : r * (t - e.tp),
    l = Re(i, e.e),
    [c, u] = Ft(e.a, e.e, l);
  return St(c, u, n, o, a)
}

function us(s, t) {
  const e = typeof s == "string" ? ge(s) : s;
  return Math.abs(t - e.epoch) / 365.25
}

function hs(s, t = 512, e = 60) {
  const n = typeof s == "string" ? ge(s) : s,
    o = n.w * Lt,
    a = n.i * Lt,
    r = n.om * Lt,
    i = [];
  if (_t(n)) {
    const l = n.a,
      c = Math.acosh(Math.min(50, e / Math.abs(l) + n.e));
    for (let u = 0; u <= t; u++) {
      const h = -c + 2 * c * u / t,
        p = l * (Math.cosh(h) - n.e),
        y = -l * Math.sqrt(n.e * n.e - 1) * Math.sinh(h);
      i.push(St(p, y, o, a, r))
    }
    return i
  }
  for (let l = 0; l <= t; l++) {
    const c = l / t * 2 * Math.PI,
      [u, h] = Ft(n.a, n.e, c);
    i.push(St(u, h, o, a, r))
  }
  return i
}
const q = {
    Mercury: {
      pole: {
        lon: 318.2,
        lat: 83
      },
      texture: "2k_mercury.jpg",
      color: 11903894,
      size: 1.25,
      axialTilt: .03,
      radiusKm: 2439.7,
      rotationHours: 1407.6,
      facts: {
        mass: "3.30 × 10²³ kg",
        distance: "0.39 AU",
        day: "1408 h (58.6 Earth days)",
        year: "88 Earth days",
        moons: "0",
        temp: "167 °C avg"
      },
      blurb: "Smallest planet, closest to the Sun, with the most extreme temperature swings of any planet."
    },
    Venus: {
      pole: {
        lon: 210.2,
        lat: -88.8
      },
      texture: "2k_venus_atmosphere.jpg",
      color: 15256994,
      size: 1.9,
      axialTilt: 177.4,
      radiusKm: 6051.8,
      rotationHours: -5832.5,
      facts: {
        mass: "4.87 × 10²⁴ kg",
        distance: "0.72 AU",
        day: "5832 h — rotates backwards",
        year: "225 Earth days",
        moons: "0",
        temp: "464 °C avg"
      },
      blurb: "Hottest planet thanks to a runaway greenhouse atmosphere; spins backwards relative to its orbit."
    },
    Earth: {
      pole: {
        lon: 90,
        lat: 66.6
      },
      texture: "2k_earth_daymap.jpg",
      color: 5084395,
      size: 1.95,
      axialTilt: 23.44,
      radiusKm: 6371,
      rotationHours: 23.9,
      atmo: {
        color: 7321599,
        opacity: .22
      },
      facts: {
        mass: "5.97 × 10²⁴ kg",
        distance: "1.00 AU",
        day: "23.9 h",
        year: "365.25 days",
        moons: "1",
        temp: "15 °C avg"
      },
      blurb: "The only known world with liquid surface water and life. Axial tilt of 23.4° drives the seasons."
    },
    Mars: {
      pole: {
        lon: 352.9,
        lat: 63.3
      },
      texture: "2k_mars.jpg",
      color: 12665870,
      size: 1.5,
      axialTilt: 25.19,
      radiusKm: 3389.5,
      rotationHours: 24.6,
      atmo: {
        color: 14256714,
        opacity: .07
      },
      facts: {
        mass: "6.42 × 10²³ kg",
        distance: "1.52 AU",
        day: "24.6 h",
        year: "687 Earth days",
        moons: "2",
        temp: "−63 °C avg"
      },
      blurb: "The Red Planet — rusted iron dust covers the surface. Home to the largest volcano in the solar system, Olympus Mons."
    },
    Jupiter: {
      pole: {
        lon: 247.8,
        lat: 87.8
      },
      texture: "2k_jupiter.jpg",
      color: 14267276,
      size: 4.4,
      axialTilt: 3.13,
      radiusKm: 69911,
      rotationHours: 9.9,
      facts: {
        mass: "1.90 × 10²⁷ kg",
        distance: "5.20 AU",
        day: "9.9 h",
        year: "11.9 Earth years",
        moons: "≈97 confirmed",
        temp: "−110 °C avg"
      },
      blurb: "Largest planet — a gas giant with a Great Red Spot storm wider than Earth, raging for centuries."
    },
    Saturn: {
      pole: {
        lon: 79.5,
        lat: 61.9
      },
      texture: "2k_saturn.jpg",
      color: 14928271,
      size: 3.9,
      ring: !0,
      axialTilt: 26.73,
      radiusKm: 58232,
      rotationHours: 10.7,
      facts: {
        mass: "5.68 × 10²⁶ kg",
        distance: "9.54 AU",
        day: "10.7 h",
        year: "29.4 Earth years",
        moons: "≈274 (most of any planet)",
        temp: "−140 °C avg"
      },
      blurb: "Famous for its bright ring system made of ice and rock. Less dense than water — it would float in a big enough tub."
    },
    Uranus: {
      pole: {
        lon: 77.6,
        lat: -7.7
      },
      texture: "2k_uranus.jpg",
      color: 10476006,
      size: 2.9,
      axialTilt: 97.77,
      radiusKm: 25362,
      rotationHours: -17.2,
      facts: {
        mass: "8.68 × 10²⁵ kg",
        distance: "19.19 AU",
        day: "17.2 h — rotates on its side",
        year: "84 Earth years",
        moons: "29",
        temp: "−195 °C avg"
      },
      blurb: "Tipped on its side (98° tilt), likely from an ancient collision — its poles take turns facing the Sun."
    },
    Neptune: {
      pole: {
        lon: 319.2,
        lat: 62
      },
      texture: "2k_neptune.jpg",
      color: 5996512,
      size: 2.9,
      axialTilt: 28.32,
      radiusKm: 24622,
      rotationHours: 16.1,
      facts: {
        mass: "1.02 × 10²⁶ kg",
        distance: "30.07 AU",
        day: "16.1 h",
        year: "164.8 Earth years",
        moons: "16",
        temp: "−200 °C avg"
      },
      blurb: "Windiest planet — supersonic storms reach 2,100 km/h. Discovered by mathematical prediction before it was ever seen."
    },
    Pluto: {
      pole: {
        lon: 137.4,
        lat: -22.8
      },
      color: 13220008,
      size: .9,
      axialTilt: 122.53,
      radiusKm: 1188.3,
      rotationHours: -153.3,
      facts: {
        mass: "1.30 × 10²² kg",
        distance: "39.48 AU",
        day: "153.3 h — rotates backwards",
        year: "247.9 Earth years",
        moons: "5",
        temp: "−225 °C avg"
      },
      blurb: "Reclassified as a dwarf planet in 2006. Its large moon Charon is over half its size — they orbit a point between them."
    }
  },
  yt = {
    Ceres: {
      texture: "2k_ceres_fictional.jpg",
      color: 11049610,
      size: .55,
      radiusKm: 469.7,
      facts: {
        mass: "9.38 × 10²⁰ kg",
        distance: "2.77 AU",
        day: "9.1 h",
        year: "4.6 Earth years",
        moons: "0",
        temp: "−105 °C avg"
      },
      blurb: "Largest object in the asteroid belt, reclassified as a dwarf planet in 2006. Has water ice beneath its crust."
    },
    Eris: {
      texture: "2k_eris_fictional.jpg",
      color: 14209736,
      size: .6,
      radiusKm: 1163,
      facts: {
        mass: "1.66 × 10²² kg",
        distance: "68 AU avg",
        day: "25.9 h",
        year: "558 Earth years",
        moons: "1",
        temp: "−231 °C avg"
      },
      blurb: "More massive than Pluto — its discovery in 2005 triggered the debate that redefined what counts as a planet."
    },
    Makemake: {
      texture: "2k_makemake_fictional.jpg",
      color: 13216133,
      size: .5,
      radiusKm: 715,
      facts: {
        mass: "3.1 × 10²¹ kg",
        distance: "45.8 AU avg",
        day: "22.5 h",
        year: "306 Earth years",
        moons: "1",
        temp: "−239 °C avg"
      },
      blurb: "Named after a Rapa Nui creation deity. One of the largest known Kuiper Belt objects after Pluto and Eris."
    }
  },
  Mt = {
    color: 14676735,
    size: .5,
    radiusKm: 5.5,
    facts: {
      mass: "2.2 × 10¹⁴ kg",
      distance: "0.59 – 35.1 AU (highly eccentric)",
      day: "~2.2 days (nucleus)",
      year: "~76 Earth years",
      moons: "—",
      temp: "varies drastically with distance"
    },
    blurb: "The most famous periodic comet — visible from Earth roughly every 76 years. Last seen in 1986, next expected around 2061."
  },
  ut = {
    Moon: {
      texture: "2k_moon.jpg",
      parent: "Earth",
      orbitMult: 2.6,
      periodDays: 27.3,
      color: 14277081,
      size: .42,
      radiusKm: 1737.4,
      facts: {
        mass: "7.35 × 10²² kg",
        distance: "384,400 km from Earth",
        day: "27.3 days (tidally locked)",
        year: "27.3 days (orbit)",
        temp: "−53 °C avg"
      },
      blurb: "Earth's only natural satellite. Always shows the same face to us — the far side wasn't seen until 1959."
    },
    Io: {
      parent: "Jupiter",
      orbitMult: 1.7,
      periodDays: 1.77,
      color: 15258234,
      size: .34,
      radiusKm: 1821.6,
      facts: {
        mass: "8.93 × 10²² kg",
        distance: "421,700 km from Jupiter",
        day: "1.77 days (tidally locked)",
        year: "1.77 days (orbit)",
        temp: "−130 °C avg"
      },
      blurb: "The most volcanically active body in the Solar System, driven by tidal heating from Jupiter's immense gravity."
    },
    Europa: {
      parent: "Jupiter",
      orbitMult: 2.1,
      periodDays: 3.55,
      color: 13351316,
      size: .32,
      radiusKm: 1560.8,
      facts: {
        mass: "4.80 × 10²² kg",
        distance: "671,000 km from Jupiter",
        day: "3.55 days (tidally locked)",
        year: "3.55 days (orbit)",
        temp: "−160 °C avg"
      },
      blurb: "An icy shell likely hides a liquid water ocean beneath — one of the best candidates for life beyond Earth."
    },
    Ganymede: {
      parent: "Jupiter",
      orbitMult: 2.6,
      periodDays: 7.15,
      color: 10259315,
      size: .38,
      radiusKm: 2634.1,
      facts: {
        mass: "1.48 × 10²³ kg",
        distance: "1,070,000 km from Jupiter",
        day: "7.15 days (tidally locked)",
        year: "7.15 days (orbit)",
        temp: "−163 °C avg"
      },
      blurb: "The largest moon in the Solar System — bigger than Mercury, and the only moon known to have its own magnetic field."
    },
    Callisto: {
      parent: "Jupiter",
      orbitMult: 3.2,
      periodDays: 16.7,
      color: 8221284,
      size: .36,
      radiusKm: 2410.3,
      facts: {
        mass: "1.08 × 10²³ kg",
        distance: "1,883,000 km from Jupiter",
        day: "16.7 days (tidally locked)",
        year: "16.7 days (orbit)",
        temp: "−139 °C avg"
      },
      blurb: "The most heavily cratered object in the Solar System — its ancient surface has barely changed in billions of years."
    },
    Titan: {
      parent: "Saturn",
      orbitMult: 3.1,
      periodDays: 15.9,
      color: 14727531,
      size: .37,
      radiusKm: 2574.7,
      facts: {
        mass: "1.35 × 10²³ kg",
        distance: "1,222,000 km from Saturn",
        day: "15.9 days (tidally locked)",
        year: "15.9 days (orbit)",
        temp: "−179 °C avg"
      },
      blurb: "Saturn's largest moon — the only moon with a dense atmosphere, and the only other world with rivers, lakes and rain (of liquid methane)."
    }
  },
  gt = {
    color: 16773811,
    radius: 3.4,
    facts: {
      mass: "1.989 × 10³⁰ kg",
      distance: "—",
      day: "~27 Earth days (equator)",
      year: "—",
      moons: "8 planets orbit it",
      temp: "~5,500 °C surface"
    },
    blurb: "A G-type main-sequence star containing 99.8% of the Solar System's mass. Powers everything here through nuclear fusion."
  },
  Tt = {
    "Voyager 1": {
      color: 14132991,
      waypoints: [
        ["1977-09-05", 1, 0, 0],
        ["1979-03-05", 5.2, 1, -3],
        ["1980-11-12", 9.5, 2.5, -5],
        ["2012-08-25", 20, 15, -10],
        ["2050-01-01", 60, 55, -25],
        ["2120-01-01", 140, 140, -60]
      ],
      facts: {
        launch: "September 5, 1977",
        flybys: "Jupiter (1979), Saturn (1980)",
        status: "In interstellar space since 2012 — the farthest human-made object from Earth.",
        speed: "≈17 km/s relative to the Sun"
      },
      blurb: "Carries the Golden Record — a phonograph disc with sounds, images and greetings from Earth, made for any spacefaring civilization that might one day find it."
    },
    "Voyager 2": {
      color: 10147839,
      waypoints: [
        ["1977-08-20", 1, 0, .3],
        ["1979-07-09", 5.2, -1, 3],
        ["1981-08-25", 9.5, -2, 5.5],
        ["1986-01-24", 19.2, -4, 10],
        ["1989-08-25", 30, -6, 14],
        ["2018-11-05", 60, -14, 26],
        ["2100-01-01", 120, -30, 55]
      ],
      facts: {
        launch: "August 20, 1977 (launched before Voyager 1)",
        flybys: "Jupiter (1979), Saturn (1981), Uranus (1986), Neptune (1989)",
        status: "In interstellar space since 2018 — the only spacecraft to have visited all four giant planets.",
        speed: "≈15 km/s relative to the Sun"
      },
      blurb: "Its flybys of Uranus and Neptune remain the only close-up spacecraft data humanity has ever gathered from those two planets."
    },
    "New Horizons": {
      color: 16764810,
      waypoints: [
        ["2006-01-19", 1, 0, -.2],
        ["2007-02-28", 5.2, .4, -1],
        ["2012-01-01", 15, 1, -3],
        ["2015-07-14", 32, 1.6, -5],
        ["2019-01-01", 39, 1.8, -6],
        ["2035-01-01", 44, 2, -7],
        ["2060-01-01", 60, 2.5, -9]
      ],
      facts: {
        launch: "January 19, 2006",
        flybys: "Jupiter (2007, gravity assist), Pluto (2015), Arrokoth (2019)",
        status: "Continuing outward through the Kuiper Belt.",
        speed: "≈14 km/s relative to the Sun"
      },
      blurb: "Gave humanity its first close-up images of Pluto and Charon in July 2015, then flew past the most distant object ever explored, Arrokoth, in 2019."
    }
  };

function Me(s) {
  return "#" + s.toString(16).padStart(6, "0")
}

function ps(s) {
  return s === "Sun" ? {
    kind: "Star",
    color: gt.color,
    facts: gt.facts,
    blurb: gt.blurb
  } : q[s] ? {
    kind: s === "Pluto" ? "Dwarf planet" : "Planet",
    color: q[s].color,
    facts: q[s].facts,
    blurb: q[s].blurb
  } : yt[s] ? {
    kind: "Dwarf planet",
    color: yt[s].color,
    facts: yt[s].facts,
    blurb: yt[s].blurb
  } : ut[s] ? {
    kind: "Moon",
    color: ut[s].color,
    facts: ut[s].facts,
    blurb: ut[s].blurb
  } : s === "Halley's Comet" ? {
    kind: "Comet",
    color: Mt.color,
    facts: Mt.facts,
    blurb: Mt.blurb
  } : Tt[s] ? {
    kind: "Space mission (illustrative path)",
    color: Tt[s].color,
    facts: Tt[s].facts,
    blurb: Tt[s].blurb,
    factLabels: fs
  } : null
}
const ms = {
    mass: "Mass",
    distance: "Distance from Sun",
    day: "Day length",
    year: "Year length",
    moons: "Moons",
    temp: "Avg. temperature"
  },
  fs = {
    launch: "Launch date",
    flybys: "Key flybys",
    status: "Current status",
    speed: "Speed"
  },
  ys = {
    diam: "Estimated diameter",
    hazard: "Potentially hazardous",
    approach: "Close approach date",
    miss: "Miss distance",
    speed: "Relative speed"
  },
  R = 224,
  O = 112;

function Mn(s) {
  let t = s >>> 0;
  return function() {
    t |= 0, t = t + 1831565813 | 0;
    let e = Math.imul(t ^ t >>> 15, 1 | t);
    return e = e + Math.imul(e ^ e >>> 7, 61 | e) ^ e, ((e ^ e >>> 14) >>> 0) / 4294967296
  }
}

function oe(s, t, e) {
  const n = Math.sin(s * 127.1 + t * 311.7 + e * 74.7) * 43758.5453;
  return n - Math.floor(n)
}

function Sn(s, t, e) {
  const n = Math.floor(s),
    o = Math.floor(t),
    a = s - n,
    r = t - o,
    i = oe(n, o, e),
    l = oe(n + 1, o, e),
    c = oe(n, o + 1, e),
    u = oe(n + 1, o + 1, e),
    h = a * a * (3 - 2 * a),
    p = r * r * (3 - 2 * r);
  return i * (1 - h) * (1 - p) + l * h * (1 - p) + c * (1 - h) * p + u * h * p
}

function Et(s, t, e, n) {
  let o = 0,
    a = .5,
    r = 1,
    i = 0;
  for (let l = 0; l < n; l++) o += a * Sn(s * r, t * r, e + l * 17.13), i += a, a *= .5, r *= 2;
  return o / i
}

function ct(s, t, e) {
  return e = Math.max(0, Math.min(1, e)), [s[0] + (t[0] - s[0]) * e, s[1] + (t[1] - s[1]) * e, s[2] + (t[2] - s[2]) * e]
}

function Yt(s) {
  return [s >> 16 & 255, s >> 8 & 255, s & 255]
}

function gs() {
  const s = document.createElement("canvas");
  return s.width = R, s.height = O, s
}

function bs(s) {
  const t = new Be(s);
  return t.wrapS = Rn, t.colorSpace = ye, t
}

function ht(s, t, e, n, o, a) {
  const r = Mn(a * 7919 + 17),
    i = Yt(t),
    l = Yt(e),
    c = Yt(n),
    u = s.createImageData(R, O);
  for (let h = 0; h < O; h++)
    for (let p = 0; p < R; p++) {
      const y = Et(p / R * 6, h / O * 6, a, 4),
        g = y < .45 ? ct(l, i, y / .45) : ct(i, c, (y - .45) / .55),
        f = (h * R + p) * 4;
      u.data[f] = g[0], u.data[f + 1] = g[1], u.data[f + 2] = g[2], u.data[f + 3] = 255
    }
  s.putImageData(u, 0, 0);
  for (let h = 0; h < o; h++) {
    const p = r() * R,
      y = r() * O,
      g = 2 + r() * r() * 16,
      f = s.createRadialGradient(p - g * .3, y - g * .3, g * .1, p, y, g);
    f.addColorStop(0, "rgba(255,255,255,0.10)"), f.addColorStop(.55, "rgba(0,0,0,0.22)"), f.addColorStop(.85, "rgba(255,255,255,0.10)"), f.addColorStop(1, "rgba(0,0,0,0)"), s.fillStyle = f, s.beginPath(), s.ellipse(p, y, g, g * .88, 0, 0, Math.PI * 2), s.fill()
  }
}

function Ke(s, t, e, n, o) {
  const a = t.map(i => ({
      t: i.t,
      rgb: Yt(i.color)
    })),
    r = s.createImageData(R, O);
  for (let i = 0; i < O; i++)
    for (let l = 0; l < R; l++) {
      const c = Et(l / R * n, i / O * n, e, o || 4);
      let u = a[a.length - 1].rgb;
      for (let p = 0; p < a.length - 1; p++)
        if (c >= a[p].t && c <= a[p + 1].t) {
          u = ct(a[p].rgb, a[p + 1].rgb, (c - a[p].t) / (a[p + 1].t - a[p].t));
          break
        } const h = (i * R + l) * 4;
      r.data[h] = u[0], r.data[h + 1] = u[1], r.data[h + 2] = u[2], r.data[h + 3] = 255
    }
  s.putImageData(r, 0, 0)
}

function ws(s, t, e) {
  const n = Mn(e * 104729 + 3);
  s.strokeStyle = "rgba(150,90,70,0.35)", s.lineWidth = 1;
  for (let o = 0; o < t; o++) {
    let a = n() * R,
      r = n() * O;
    const i = 5 + Math.floor(n() * 6);
    let l = n() * Math.PI * 2;
    s.beginPath(), s.moveTo(a, r);
    for (let c = 0; c < i; c++) l += (n() - .5) * 1.1, a += Math.cos(l) * (8 + n() * 10), r += Math.sin(l) * (8 + n() * 10), s.lineTo(a, r);
    s.stroke()
  }
}

function Jt(s, t, e, n, o) {
  const a = t.map(Yt),
    r = s.createImageData(R, O);
  for (let i = 0; i < O; i++)
    for (let l = 0; l < R; l++) {
      const c = (Et(l / R * 3, i / O * 7, e, 3) - .5) * n * O,
        u = (Sn(l / R * 40, i / O * 40, e + 5) - .5) * 10;
      let h = (i + c + u) / O * a.length;
      h = Math.max(0, Math.min(a.length - 1.001, h));
      const p = Math.floor(h),
        y = h - p,
        g = ct(a[p], a[Math.min(p + 1, a.length - 1)], y),
        f = (i * R + l) * 4;
      r.data[f] = g[0], r.data[f + 1] = g[1], r.data[f + 2] = g[2], r.data[f + 3] = 255
    }
  if (s.putImageData(r, 0, 0), o) {
    const i = R * .62,
      l = O * .58,
      c = R * .065,
      u = s.createRadialGradient(i, l, 0, i, l, c);
    u.addColorStop(0, o), u.addColorStop(.7, o), u.addColorStop(1, "rgba(0,0,0,0)"), s.fillStyle = u, s.beginPath(), s.ellipse(i, l, c, c * .62, 0, 0, Math.PI * 2), s.fill()
  }
}

function vs(s, t) {
  const e = [10, 30, 68],
    n = [24, 60, 112],
    o = [56, 90, 46],
    a = [124, 110, 76],
    r = [232, 238, 244],
    i = s.createImageData(R, O);
  for (let l = 0; l < O; l++)
    for (let c = 0; c < R; c++) {
      const u = c / R * 4,
        h = l / O * 4,
        p = Et(u, h, t, 4),
        y = Math.abs(l / O - .5) * 2;
      let g;
      y > .85 ? g = ct(o, r, (y - .85) / .15) : p > .55 ? g = ct(o, a, Math.min(1, (p - .55) / .22)) : g = ct(e, n, Math.min(1, p / .55));
      const f = Et(u * 1.8 + 50, h * 1.8 + 50, t + 99, 4);
      f > .56 && (g = ct(g, [255, 255, 255], Math.min(1, (f - .56) / .24) * .85));
      const w = (l * R + c) * 4;
      i.data[w] = g[0], i.data[w + 1] = g[1], i.data[w + 2] = g[2], i.data[w + 3] = 255
    }
  s.putImageData(i, 0, 0)
}

function ks(s, t) {
  const e = [193, 96, 60],
    n = [120, 55, 34],
    o = [238, 232, 222],
    a = s.createImageData(R, O);
  for (let r = 0; r < O; r++)
    for (let i = 0; i < R; i++) {
      const l = Et(i / R * 5, r / O * 5, t, 4),
        c = Math.abs(r / O - .5) * 2;
      let u = ct(n, e, l);
      c > .88 && (u = ct(u, o, (c - .88) / .12));
      const h = (r * R + i) * 4;
      a.data[h] = u[0], a.data[h + 1] = u[1], a.data[h + 2] = u[2], a.data[h + 3] = 255
    }
  s.putImageData(a, 0, 0)
}

function xs(s, t) {
  const e = [255, 236, 160],
    n = [255, 190, 90],
    o = [255, 250, 220],
    a = s.createImageData(R, O);
  for (let r = 0; r < O; r++)
    for (let i = 0; i < R; i++) {
      const l = Et(i / R * 14, r / O * 14, t, 4),
        c = Et(i / R * 3, r / O * 3, t + 30, 3);
      let u = ct(n, e, l);
      u = ct(u, o, Math.max(0, c - .6) * 1.5);
      const h = (r * R + i) * 4;
      a.data[h] = u[0], a.data[h + 1] = u[1], a.data[h + 2] = u[2], a.data[h + 3] = 255
    }
  s.putImageData(a, 0, 0)
}

function Ms(s) {
  const t = O * .35,
    e = O * .09,
    n = s.createLinearGradient(0, t - e, 0, t + e);
  n.addColorStop(0, "rgba(0,0,0,0)"), n.addColorStop(.5, "rgba(20,15,5,0.38)"), n.addColorStop(1, "rgba(0,0,0,0)"), s.fillStyle = n, s.fillRect(0, t - e, R, e * 2)
}

function Gt(s) {
  const t = gs(),
    e = t.getContext("2d"),
    n = [...s].reduce((o, a) => o + a.charCodeAt(0), 0);
  switch (s) {
    case "__sun__":
      xs(e, n);
      break;
    case "Mercury":
      ht(e, 11575702, 7299673, 14208708, 55, n);
      break;
    case "Venus":
      Jt(e, [15260072, 15918781, 14666127, 15786670, 14930588], n, .55, null);
      break;
    case "Earth":
      vs(e, n);
      break;
    case "Mars":
      ks(e, n);
      break;
    case "Jupiter":
      Jt(e, [14270873, 12159582, 15260088, 11105612, 14468252, 13081195, 15720898], n, .1, "rgba(178,86,58,0.75)");
      break;
    case "Saturn":
      Jt(e, [15127971, 15853250, 14206095, 15720627, 14470042], n, .07, null), Ms(e);
      break;
    case "Uranus":
      Jt(e, [11460838, 13102319, 10738658], n, .03, null);
      break;
    case "Neptune":
      Jt(e, [3956674, 5075670, 3362974, 5930969], n, .06, "rgba(30,45,90,0.55)");
      break;
    case "Pluto":
      ht(e, 13350558, 9402982, 15260873, 18, n);
      break;
    case "Moon":
      ht(e, 12105910, 7171435, 14474458, 65, n);
      break;
    case "Io":
      Ke(e, [{
        t: 0,
        color: 5909018
      }, {
        t: .3,
        color: 11754014
      }, {
        t: .55,
        color: 15246908
      }, {
        t: .78,
        color: 15978874
      }, {
        t: 1,
        color: 16642504
      }], n, 7, 4);
      break;
    case "Europa":
      Ke(e, [{
        t: 0,
        color: 11106623
      }, {
        t: .35,
        color: 14207400
      }, {
        t: .7,
        color: 15659760
      }, {
        t: 1,
        color: 16777215
      }], n, 4, 3), ws(e, 22, n);
      break;
    case "Ganymede":
      ht(e, 9405815, 5853770, 11774620, 50, n);
      break;
    case "Callisto":
      ht(e, 7037529, 3946291, 9208181, 140, n);
      break;
    case "Titan":
      Jt(e, [14061386, 15251575, 14263650, 15780237, 14395498], n, .16, null);
      break;
    case "Ceres":
      ht(e, 10260870, 6051148, 12761516, 55, n);
      break;
    case "Eris":
      ht(e, 14209736, 10327692, 15986665, 20, n);
      break;
    case "Makemake":
      ht(e, 11568997, 7097398, 14333076, 32, n);
      break;
    case "Halley's Comet":
      ht(e, 4868164, 2105117, 7170660, 28, n);
      break;
    default:
      ht(e, 11184810, 7829367, 13421772, 40, n)
  }
  return bs(t)
}

function je(s, t, e = !1) {
  const n = document.createElement("canvas");
  n.width = e ? s / 4 : s, n.height = s;
  const o = n.getContext("2d"),
    a = e ? o.createLinearGradient(0, 0, 0, s) : o.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  for (const [r, i] of t) a.addColorStop(r, i);
  return o.fillStyle = a, o.fillRect(0, 0, n.width, n.height), new Be(n)
}
const En = new Nn;

function ae(s, t, {
  anisotropy: e = 4
} = {}) {
  t && En.load(`./textures/${t}`, n => {
    n.colorSpace = ye, n.anisotropy = e;
    const o = s.map;
    s.map = n, s.needsUpdate = !0, o && o !== n && o.dispose()
  }, void 0, () => {})
}

function qe(s, t = {}) {
  return new Promise(e => {
    En.load(`./textures/${s}`, n => {
      n.colorSpace = t.linear ? On : ye, n.anisotropy = t.anisotropy ?? 4, e(n)
    }, void 0, () => e(null))
  })
}

function Ss(s, t, e = 1) {
  const n = new ze({
    uniforms: {
      uColor: {
        value: new Ct(t)
      },
      uIntensity: {
        value: e
      }
    },
    vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      varying float vRim;
      void main() {
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vec3 viewDir = normalize(-mvPos.xyz);
        vec3 n = normalize(normalMatrix * normal);
        // 0 facing the camera, 1 at the limb
        vRim = 1.0 - abs(dot(viewDir, n));
        gl_Position = projectionMatrix * mvPos;
        #include <logdepthbuf_vertex>
      }
    `,
    fragmentShader: `
      #include <logdepthbuf_pars_fragment>
      uniform vec3 uColor;
      uniform float uIntensity;
      varying float vRim;
      void main() {
        float rim = pow(vRim, 2.6);
        gl_FragColor = vec4(uColor, rim * uIntensity);
        #include <logdepthbuf_fragment>
      }
    `,
    transparent: !0,
    depthWrite: !1,
    blending: Ot,
    side: Qt
  });
  return new X(new rt(s, 48, 48), n)
}
class Ve {
  constructor(t, e, n = 512) {
    this.capacity = n * 4, this.windowDays = e, this.minSpacing = e / n, this.jds = new Float64Array(this.capacity), this.start = 0, this.end = 0, this.lastJd = -1 / 0, this.geometry = new pt, this.attr = new mt(new Float32Array(this.capacity * 3), 3), this.attr.setUsage(Fn), this.geometry.setAttribute("position", this.attr), this.geometry.setDrawRange(0, 0), this.line = new Bt(this.geometry, new un({
      color: t,
      transparent: !0,
      opacity: .55
    })), this.line.frustumCulled = !1
  }
  push(t, e, n, o) {
    if (t - this.lastJd < this.minSpacing) return;
    this.lastJd = t, this.end >= this.capacity && this._compact();
    const a = this.end;
    for (this.jds[a] = t, this.attr.array[a * 3] = e, this.attr.array[a * 3 + 1] = n, this.attr.array[a * 3 + 2] = o, this.end++; this.start < this.end - 2 && t - this.jds[this.start] > this.windowDays;) this.start++
  }
  _compact() {
    const t = this.end - this.start;
    this.attr.array.copyWithin(0, this.start * 3, this.end * 3), this.jds.copyWithin(0, this.start, this.end), this.start = 0, this.end = t
  }
  commit() {
    this.attr.needsUpdate = !0, this.geometry.setDrawRange(this.start, this.end - this.start)
  }
  trimAfter(t) {
    for (; this.end > this.start && this.jds[this.end - 1] > t;) this.end--;
    this.lastJd = this.end > this.start ? this.jds[this.end - 1] : -1 / 0
  }
  reset() {
    this.start = 0, this.end = 0, this.lastJd = -1 / 0, this.geometry.setDrawRange(0, 0)
  }
  dispose() {
    this.geometry.dispose(), this.line.material.dispose()
  }
}
const nt = 46,
  ue = "solar.nasaKey";

function Es() {
  try {
    return localStorage.getItem(ue) || ""
  } catch {
    return ""
  }
}
const Kt = {
  high: {
    stars: 6e3,
    belt: 2200,
    pixelRatioCap: 1.5,
    samples: 2,
    bloomScale: .5
  },
  low: {
    stars: 1200,
    belt: 500,
    pixelRatioCap: 1,
    samples: 0,
    bloomScale: .5
  }
};

function Cs() {
  const s = matchMedia("(max-width: 640px)").matches,
    t = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : !1;
  return s || t ? "low" : "high"
}
const he = new Map,
  d = {
    startJd: 0,
    endJd: 0,
    currentJd: 0,
    playing: !0,
    reverse: !1,
    daysPerSecond: 30,
    trails: !0,
    belt: !0,
    moons: !1,
    stars: !0,
    labels: !0,
    minor: !1,
    comet: !1,
    missions: !1,
    neo: !1,
    smallBodies: !1,
    trueScale: !1,
    quality: "high",
    topView: !1,
    follow: null,
    mode: "orrery",
    chromeHidden: !1,
    observer: "Earth",
    lat: 48.21,
    lon: 16.37,
    accuracy: "high"
  };

function I(s) {
  const t = [];
  for (const [e, n] of Object.entries(s)) d[e] !== n && (d[e] = n, t.push(e));
  for (const e of t) {
    const n = he.get(e);
    if (n)
      for (const o of n) o(d[e], d)
  }
}

function V(s, t) {
  for (const e of [].concat(s)) he.has(e) || he.set(e, new Set), he.get(e).add(t);
  return t
}
const Cn = ["trails", "belt", "moons", "stars", "labels", "minor", "comet", "missions", "neo", "smallBodies", "trueScale"];

function An(s, t, e) {
  const n = new URL(location.href);
  n.search = "";
  const o = n.searchParams;
  o.set("start", s), o.set("end", t), e && o.set("at", e);
  const a = Cn.filter(r => d[r]).join(".");
  return o.set("layers", a || "none"), d.follow && o.set("follow", d.follow), d.mode !== "orrery" && o.set("mode", d.mode), o.set("dps", String(d.daysPerSecond)), n.toString()
}

function As() {
  const s = new URLSearchParams(location.search),
    t = /^\d{4}-\d{2}-\d{2}$/,
    e = {
      launch: !1
    };
  if (t.test(s.get("start") || "") && t.test(s.get("end") || "")) {
    if (e.launch = !0, e.start = s.get("start"), e.end = s.get("end"), t.test(s.get("at") || "") && (e.at = s.get("at")), s.get("layers")) {
      const o = new Set(s.get("layers") === "none" ? [] : s.get("layers").split("."));
      for (const a of Cn) d[a] = o.has(a)
    }
    s.get("follow") && (e.follow = s.get("follow")), ["orrery", "sky", "atlas"].includes(s.get("mode")) && (d.mode = s.get("mode"));
    const n = parseFloat(s.get("dps"));
    isFinite(n) && n > 0 && (d.daysPerSecond = Math.min(1e5, n), e.dpsSet = !0)
  }
  return e
}

function We(s, t) {
  I({
    startJd: dt(s),
    endJd: dt(t),
    currentJd: dt(s)
  })
}
const ie = new U,
  Ls = 1495978707e-1,
  Ye = Math.PI / 180;

function it(s, t) {
  return t.set(s[0] * nt, s[2] * nt, -s[1] * nt), t
}

function Xe(s) {
  const t = s.getBoundingClientRect(),
    e = Math.round(t.width),
    n = Math.round(t.height);
  return e > 1 && n > 1 ? {
    w: e,
    h: n
  } : innerWidth > 1 && innerHeight > 1 ? {
    w: innerWidth,
    h: innerHeight
  } : {
    w: 1280,
    h: 720
  }
}

function Ts(s) {
  const t = s.lon * Ye,
    e = s.lat * Ye;
  return new U(Math.cos(e) * Math.cos(t), Math.sin(e), -Math.cos(e) * Math.sin(t)).normalize()
}

function vt(s, t = "") {
  const e = document.createElement("div");
  e.className = "body-label" + (t ? " " + t : ""), e.textContent = s;
  const n = new Vt(e);
  return n.center.set(-.06, 1.15), n
}
class Ps {
  constructor(t, e) {
    this.renderer = new Hn({
      canvas: t,
      antialias: !0,
      powerPreference: "high-performance",
      logarithmicDepthBuffer: !0
    });
    const n = Xe(t);
    this.renderer.setSize(n.w, n.h, !1), this.labelRenderer = new $n({
      element: e
    }), this.labelRenderer.setSize(n.w, n.h), this.scene = new hn, this.maxOrbit = 39.5 * (1 + .25) * nt, this.camera = new pn(50, n.w / n.h, .4, this.maxOrbit * 9), this.camera.position.set(this.maxOrbit * .22, this.maxOrbit * .16, this.maxOrbit * .22), this.controls = new Un(this.camera, t), this.controls.enableDamping = !0, this.controls.dampingFactor = .06, this.controls.minDistance = 2, this.controls.maxDistance = this.maxOrbit * 3, this.scene.add(new Gn(4210768, 1.6));
    const o = new Kn(16773836, 2.6, 0, 0);
    this.scene.add(o), this._v = new U, this.bodies = new Map, this._buildSun(), this._buildPlanets(), this._buildMoons(), this._buildDwarfs(), this._buildComet(), this._buildMissions(), this._buildSmallBodies(), this._buildStarsAndBelt(Kt[d.quality]), this.neoGroup = new et, this.neoGroup.visible = !1, this.scene.add(this.neoGroup), this.neoData = [];
    const a = this.renderer.getPixelRatio(),
      r = new jn(Math.round(n.w * a), Math.round(n.h * a), {
        type: qn,
        samples: Kt[d.quality].samples
      });
    this.composer = new Vn(this.renderer, r), this.composer.setPixelRatio(a), this.composer._width = n.w, this.composer._height = n.h, this.renderPass = new Wn(this.scene, this.camera), this.composer.addPass(this.renderPass), this.activeScene = this.scene, this.activeCamera = this.camera, this.bloomScale = Kt[d.quality].bloomScale, this.bloomPass = new Yn(new mn(n.w * a * this.bloomScale, n.h * a * this.bloomScale), .5, .7, .82);
    const i = this.bloomPass.setSize.bind(this.bloomPass);
    this.bloomPass.setSize = (l, c) => i(Math.max(1, Math.round(l * this.bloomScale)), Math.max(1, Math.round(c * this.bloomScale))), this.composer.addPass(this.bloomPass), this.composer.addPass(new Xn), this.bloomPass.enabled = d.quality === "high", this.hovered = null, this._appliedSize = {
      w: n.w,
      h: n.h,
      pr: a
    }, this._resizeQueued = !1, this._wireStateSync(), this._applyCurrentState(), addEventListener("resize", () => this._queueResize()), typeof ResizeObserver < "u" && (this._ro = new ResizeObserver(() => this._queueResize()), this._ro.observe(t))
  }
  _queueResize() {
    this._resizeQueued || (this._resizeQueued = !0, requestAnimationFrame(() => {
      this._resizeQueued = !1, this._onResize()
    }))
  }
  viewportSize() {
    return {
      ...this._appliedSize
    }
  }
  setHovered(t) {
    if (t === this.hovered) return;
    const e = this.hovered && this.bodies.get(this.hovered);
    e?.mesh?.material && e.savedEmissive !== void 0 && (e.mesh.material.emissiveIntensity = e.savedEmissive, e.savedEmissive = void 0), this.hovered = t;
    const n = t && this.bodies.get(t);
    n?.mesh?.material?.emissiveIntensity !== void 0 && (n.savedEmissive = n.mesh.material.emissiveIntensity, n.mesh.material.emissiveIntensity = n.savedEmissive + .12), this.renderer.domElement.style.cursor = t ? "pointer" : "", n?.label?.element.classList.add("label-hover"), e?.label?.element.classList.remove("label-hover")
  }
  _applyCurrentState() {
    this.starGroup.visible = d.stars, this.beltPoints.visible = d.belt, this.moonGroup.visible = d.moons, this.dwarfGroup.visible = d.minor, this.cometGroup.visible = d.comet, this.missionGroup.visible = d.missions, this.neoGroup.visible = d.neo, this.smallGroup.visible = d.smallBodies;
    for (const t of this.trails.values()) t.line.visible = d.trails;
    this._applyLabelVisibility(), d.trueScale && this._applyTrueScale(!0)
  }
  _buildSun() {
    const t = new et,
      e = new X(new rt(gt.radius, 48, 48), new xt({
        map: Gt("__sun__")
      }));
    t.add(e), ae(e.material, "2k_sun.jpg");
    const n = new fn(new yn({
      map: je(256, [
        [0, "rgba(255,235,180,0.55)"],
        [.35, "rgba(255,200,120,0.22)"],
        [1, "rgba(255,200,120,0)"]
      ]),
      transparent: !0,
      depthWrite: !1,
      blending: Ot
    }));
    n.scale.set(gt.radius * 14, gt.radius * 14, 1), t.add(n);
    const o = vt("Sun");
    t.add(o), this.scene.add(t), this.sunMesh = e, this.bodies.set("Sun", {
      group: t,
      mesh: e,
      label: o,
      size: gt.radius,
      kind: "sun"
    })
  }
  _buildPlanets() {
    this.orbitLines = new et, this.orbitLineMap = new Map, this.trails = new Map;
    const t = dt(new Date);
    this.orbitLinesJd = t;
    for (const e of ft) {
      const n = q[e],
        o = se(e, t, 256).map(h => it(h, new U)),
        a = new Bt(new pt().setFromPoints(o), new $t({
          color: n.color,
          dashSize: 1.6,
          gapSize: 1.1,
          transparent: !0,
          opacity: .4
        }));
      a.computeLineDistances(), a.renderOrder = 1, this.orbitLines.add(a), this.orbitLineMap.set(e, a);
      const r = new et,
        i = new et;
      i.quaternion.setFromUnitVectors(new U(0, 1, 0), Ts(n.pole)), r.add(i);
      const l = new X(new rt(n.size, 48, 48), new zt({
        map: Gt(e),
        roughness: .75,
        metalness: .05,
        emissive: n.color,
        emissiveIntensity: .045
      }));
      if (i.add(l), ae(l.material, n.texture), n.ring && this._buildRing(e, n, i), n.atmo) {
        const h = Ss(n.size * 1.16, n.atmo.color, n.atmo.opacity * 5);
        r.add(h), this.bodies.set(e + "/atmo", {
          group: h
        })
      }
      e === "Earth" && this._buildEarthClouds(n, i);
      const c = vt(e);
      r.add(c), this.scene.add(r);
      const u = new Ve(n.color, _s(e));
      u.line.material.depthWrite = !1, u.line.renderOrder = 2, this.scene.add(u.line), this.trails.set(e, u), this.bodies.set(e, {
        group: r,
        mesh: l,
        tiltMesh: l,
        label: c,
        size: n.size,
        kind: "planet"
      })
    }
    this.scene.add(this.orbitLines)
  }
  _buildRing(t, e, n) {
    const o = e.size * 1.24,
      a = e.size * 2.32,
      r = new gn(o, a, 96, 1),
      i = r.getAttribute("position"),
      l = r.getAttribute("uv"),
      c = new U;
    for (let p = 0; p < i.count; p++) {
      c.fromBufferAttribute(i, p);
      const y = (c.length() - o) / (a - o);
      l.setXY(p, y, .5)
    }
    const u = new xt({
        color: 14207140,
        side: Qt,
        transparent: !0,
        opacity: .5,
        depthWrite: !1
      }),
      h = new X(r, u);
    h.rotation.x = -Math.PI / 2, n.add(h), this.bodies.set(t + "/ring", {
      group: h,
      mesh: h
    }), qe("2k_saturn_ring_alpha.png").then(p => {
      p && (u.map = p, u.color.set(16777215), u.opacity = .92, u.needsUpdate = !0)
    })
  }
  _buildEarthClouds(t, e) {
    qe("2k_earth_clouds.jpg").then(n => {
      if (!n) return;
      const o = new X(new rt(t.size * 1.02, 48, 48), new zt({
        map: n,
        transparent: !0,
        opacity: .5,
        blending: Ot,
        depthWrite: !1,
        roughness: 1
      }));
      e.add(o), this.earthClouds = o, d.trueScale && this._applyTrueScale(!0)
    })
  }
  _buildMoons() {
    this.moonGroup = new et, this.moonGroup.visible = !1;
    for (const [t, e] of Object.entries(ut)) {
      const n = new X(new rt(e.size, 24, 24), new zt({
        map: Gt(t),
        roughness: .8,
        metalness: .04
      }));
      ae(n.material, e.texture);
      const o = vt(t, "label-sm");
      n.add(o), this.moonGroup.add(n), this.bodies.set(t, {
        group: n,
        mesh: n,
        label: o,
        size: e.size,
        kind: "moon"
      })
    }
    this.scene.add(this.moonGroup)
  }
  _buildDwarfs() {
    this.dwarfGroup = new et, this.dwarfGroup.visible = !1;
    const t = dt(new Date);
    for (const [e, n] of Object.entries(yt)) {
      const o = se(e, t, 256).map(l => it(l, new U)),
        a = new Bt(new pt().setFromPoints(o), new $t({
          color: n.color,
          dashSize: 1.2,
          gapSize: 1.4,
          transparent: !0,
          opacity: .3
        }));
      a.computeLineDistances(), this.dwarfGroup.add(a);
      const r = new X(new rt(n.size, 24, 24), new zt({
        map: Gt(e),
        roughness: .85,
        metalness: .03,
        emissive: n.color,
        emissiveIntensity: .05
      }));
      ae(r.material, n.texture);
      const i = vt(e, "label-sm");
      r.add(i), this.dwarfGroup.add(r), this.bodies.set(e, {
        group: r,
        mesh: r,
        label: i,
        size: n.size,
        kind: "dwarf"
      })
    }
    this.scene.add(this.dwarfGroup)
  }
  _buildComet() {
    this.cometGroup = new et, this.cometGroup.visible = !1;
    const t = new X(new rt(Mt.size, 16, 16), new zt({
        map: Gt("Halley's Comet"),
        roughness: .9,
        emissive: 2762788,
        emissiveIntensity: .25
      })),
      e = vt("Halley's Comet", "label-sm");
    t.add(e), this.cometGroup.add(t), this.cometTail = new X(new Qn(1.4, 1, 1, 1), new xt({
      map: je(256, [
        [0, "rgba(220,240,255,0.85)"],
        [1, "rgba(220,240,255,0)"]
      ], !0),
      transparent: !0,
      depthWrite: !1,
      side: Qt,
      blending: Ot
    })), this.cometTail.geometry.translate(0, .5, 0), this.cometGroup.add(this.cometTail);
    const n = dt(new Date),
      o = se("Halley", n, 512).map(r => it(r, new U)),
      a = new Bt(new pt().setFromPoints(o), new $t({
        color: Mt.color,
        dashSize: 2,
        gapSize: 2.4,
        transparent: !0,
        opacity: .22
      }));
    a.computeLineDistances(), a.renderOrder = 1, this.cometGroup.add(a), this.scene.add(this.cometGroup), this.bodies.set("Halley's Comet", {
      group: t,
      mesh: t,
      label: e,
      size: Mt.size,
      kind: "comet"
    })
  }
  _buildMissions() {
    this.missionGroup = new et, this.missionGroup.visible = !1, this.missions = new Map;
    for (const [t, e] of Object.entries(Tt)) {
      const n = e.waypoints.map(l => {
          const [c, u, h] = l[0].split("-").map(Number);
          return {
            jd: Date.UTC(c, u - 1, h) / 864e5 + 24405875e-1,
            pos: new U(l[1] * nt, l[2] * nt, l[3] * nt)
          }
        }),
        o = new pt;
      o.setAttribute("position", new mt(new Float32Array(n.length * 3 + 3), 3)), o.setDrawRange(0, 0);
      const a = new Bt(o, new $t({
        color: e.color,
        dashSize: 3,
        gapSize: 2,
        transparent: !0,
        opacity: .55
      }));
      a.frustumCulled = !1, this.missionGroup.add(a);
      const r = new X(new rt(1.1, 12, 12), new xt({
          color: e.color
        })),
        i = vt(t, "label-sm");
      r.add(i), r.visible = !1, this.missionGroup.add(r), this.missions.set(t, {
        wp: n,
        line: a,
        marker: r,
        label: i
      }), this.bodies.set(t, {
        group: r,
        mesh: r,
        label: i,
        size: 1.1,
        kind: "mission"
      })
    }
    this.scene.add(this.missionGroup)
  }
  _buildSmallBodies() {
    this.smallGroup = new et, this.smallGroup.visible = !1, this.smallBodies = [];
    const t = {
      neo: 14723197,
      belt: 10526888,
      comet: 14676735,
      interstellar: 9090303
    };
    for (const e of Ne) {
      if (e.key) continue;
      const n = t[e.kind] || 11579576,
        o = e.kind === "belt" ? .42 : .3,
        a = new X(new rt(o, 12, 12), new zt({
          color: n,
          roughness: .9,
          metalness: .02,
          emissive: n,
          emissiveIntensity: .14
        })),
        r = vt(e.name.replace(/\s*\(.*\)$/, ""), "label-sm");
      a.add(r), this.smallGroup.add(a);
      const i = hs(e, _t(e) ? 220 : 320, 55).map(p => it(p, new U)),
        l = new Bt(new pt().setFromPoints(i), new $t({
          color: n,
          dashSize: 1.4,
          gapSize: 1.8,
          transparent: !0,
          opacity: _t(e) ? .34 : .2
        }));
      l.computeLineDistances(), l.frustumCulled = !1, l.renderOrder = 1, this.smallGroup.add(l);
      const c = e.a ?? e.q / (1 - e.e),
        u = _t(e) ? 1500 : Math.min(365.25 * Math.pow(Math.abs(c), 1.5), 365.25 * 40),
        h = new Ve(n, u, 384);
      h.line.material.depthWrite = !1, h.line.material.opacity = .5, h.line.renderOrder = 2, h.line.visible = d.trails, this.smallGroup.add(h.line), this.smallBodies.push({
        data: e,
        mesh: a,
        line: l,
        label: r,
        trail: h
      }), this.bodies.set(e.name, {
        group: a,
        mesh: a,
        label: r,
        size: o,
        kind: "small"
      })
    }
    this.scene.add(this.smallGroup)
  }
  setRenderView(t, e) {
    this.renderPass.scene = t, this.renderPass.camera = e, this.activeScene = t, this.activeCamera = e
  }
  _buildStarsAndBelt(t) {
    if (this.starGroup) {
      this.scene.remove(this.starGroup);
      for (const e of this.starGroup.children) e.geometry.dispose(), e.material.dispose()
    }
    this.beltPoints && (this.scene.remove(this.beltPoints), this.beltPoints.geometry.dispose(), this.beltPoints.material.dispose());
    {
      this.starGroup = new et;
      const e = [{
        count: Math.round(t.stars * .8),
        size: .0013,
        opacity: .62
      }, {
        count: Math.round(t.stars * .2),
        size: .0026,
        opacity: .95
      }];
      for (const n of e) {
        const o = new Float32Array(n.count * 3),
          a = new Float32Array(n.count * 3),
          r = new Ct;
        for (let l = 0; l < n.count; l++) {
          const c = this.maxOrbit * (1.15 + Math.random() * 4.2),
            u = Math.random() * Math.PI * 2,
            h = Math.acos(2 * Math.random() - 1);
          o[l * 3] = c * Math.sin(h) * Math.cos(u), o[l * 3 + 1] = c * Math.cos(h), o[l * 3 + 2] = c * Math.sin(h) * Math.sin(u);
          const p = Math.random();
          p < .12 ? r.setRGB(.72, .82, 1) : p < .3 ? r.setRGB(1, .88, .72) : r.setRGB(1, 1, 1), a[l * 3] = r.r, a[l * 3 + 1] = r.g, a[l * 3 + 2] = r.b
        }
        const i = new pt;
        i.setAttribute("position", new mt(o, 3)), i.setAttribute("color", new mt(a, 3)), this.starGroup.add(new Je(i, new $e({
          vertexColors: !0,
          size: this.maxOrbit * n.size,
          sizeAttenuation: !0,
          transparent: !0,
          opacity: n.opacity,
          depthWrite: !1
        })))
      }
      this.starGroup.visible = d.stars, this.scene.add(this.starGroup)
    } {
      const e = new Float32Array(t.belt * 3),
        n = 2.06,
        o = 4.27;
      for (let r = 0; r < t.belt; r++) {
        const i = n + Math.random() * (o - n),
          l = Math.random() * Math.PI * 2;
        e[r * 3] = i * Math.cos(l) * nt, e[r * 3 + 1] = (Math.random() - .5) * .045 * nt, e[r * 3 + 2] = i * Math.sin(l) * nt
      }
      const a = new pt;
      a.setAttribute("position", new mt(e, 3)), this.beltPoints = new Je(a, new $e({
        color: 9079434,
        size: .32,
        transparent: !0,
        opacity: .65,
        depthWrite: !1
      })), this.beltPoints.visible = d.belt, this.scene.add(this.beltPoints)
    }
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, t.pixelRatioCap))
  }
  setNeoData(t) {
    for (const e of [...this.neoGroup.children]) e.traverse(n => {
      n.isCSS2DObject && n.element.remove()
    }), this.neoGroup.remove(e), e.geometry?.dispose(), e.material?.dispose();
    for (const e of this.neoData) this.bodies.delete(e.name);
    this.neoData = t;
    for (const e of t) {
      const n = Math.random() * Math.PI * 2,
        o = (Math.random() - .5) * .7,
        a = Math.max(3, Math.min(38, e.missDistanceAU * nt * .4));
      e.offset = new U(Math.cos(n) * a, Math.sin(o) * a * .5, Math.sin(n) * a);
      const r = .22 + Math.min(1.1, e.diameterKm / 2),
        i = new X(new rt(r, 8, 8), new xt({
          color: e.hazardous ? 14701898 : 10132122
        })),
        l = vt(e.name, "label-sm");
      i.add(l), this.neoGroup.add(i), this.bodies.set(e.name, {
        group: i,
        mesh: i,
        label: l,
        size: r,
        kind: "neo"
      })
    }
  }
  _wireStateSync() {
    V("stars", t => {
      this.starGroup.visible = t
    }), V("belt", t => {
      this.beltPoints.visible = t
    }), V("moons", t => {
      this.moonGroup.visible = t
    }), V("minor", t => {
      this.dwarfGroup.visible = t
    }), V("comet", t => {
      this.cometGroup.visible = t
    }), V("missions", t => {
      this.missionGroup.visible = t
    }), V("neo", t => {
      this.neoGroup.visible = t
    }), V("smallBodies", t => {
      this.smallGroup.visible = t
    }), V("labels", () => this._applyLabelVisibility()), V("trails", t => {
      for (const e of this.trails.values()) e.line.visible = t;
      for (const e of this.smallBodies) e.trail.line.visible = t
    }), V("quality", t => {
      const e = Kt[t];
      this._buildStarsAndBelt(e), this.bloomPass.enabled = t === "high";
      const n = Math.min(devicePixelRatio, e.pixelRatioCap);
      this.composer.setPixelRatio(n), this.composer.setSize(this._appliedSize.w, this._appliedSize.h), this._appliedSize.pr = n, this.composer.renderTarget1.samples !== e.samples && (this.composer.renderTarget1.samples = e.samples, this.composer.renderTarget2.samples = e.samples, this.composer.renderTarget1.dispose(), this.composer.renderTarget2.dispose())
    }), V("trueScale", t => this._applyTrueScale(t))
  }
  _applyLabelVisibility() {
    const t = d.labels;
    document.getElementById("labels-root").style.display = t ? "" : "none"
  }
  _applyTrueScale(t) {
    const e = (n, o, a, r) => {
      const i = o / Ls * nt;
      r.scale.setScalar(t ? Math.max(i / a, 1e-4) : 1)
    };
    for (const n of ft) {
      e(n, q[n].radiusKm, q[n].size, this.bodies.get(n).mesh);
      const o = this.bodies.get(n + "/ring");
      o && e(n, q[n].radiusKm, q[n].size, o.mesh);
      const a = this.bodies.get(n + "/atmo");
      a && (a.group.visible = !t), n === "Earth" && this.earthClouds && e(n, q[n].radiusKm, q[n].size, this.earthClouds)
    }
    for (const [n, o] of Object.entries(ut)) e(n, o.radiusKm, o.size, this.bodies.get(n).mesh);
    for (const [n, o] of Object.entries(yt)) e(n, o.radiusKm, o.size, this.bodies.get(n).mesh);
    e("Halley's Comet", Mt.radiusKm, Mt.size, this.bodies.get("Halley's Comet").mesh)
  }
  _onResize() {
    const {
      w: t,
      h: e
    } = Xe(this.renderer.domElement), n = Math.min(devicePixelRatio, Kt[d.quality].pixelRatioCap), o = this._appliedSize;
    o.w === t && o.h === e && o.pr === n || (this._appliedSize = {
      w: t,
      h: e,
      pr: n
    }, this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.onResizeExtra?.(t, e), o.pr !== n && this.renderer.setPixelRatio(n), this.renderer.setSize(t, e, !1), this.composer.setPixelRatio(n), this.composer.setSize(t, e), this.labelRenderer.setSize(t, e), this.render())
  }
  update(t, e, n) {
    const o = this._v;
    if (Math.abs(t - this.orbitLinesJd) > 18262) {
      this.orbitLinesJd = t;
      for (const a of ft) {
        const r = this.orbitLineMap.get(a),
          i = se(a, t, 256).map(l => it(l, new U));
        r.geometry.setFromPoints(i), r.computeLineDistances()
      }
    }
    for (const a of ft) {
      const r = this.bodies.get(a);
      if (it(lt(a, t), o), r.group.position.copy(o), d.trails) {
        const l = this.trails.get(a);
        if (t < l.lastJd) l.trimAfter(t);
        else if (t > e) {
          const c = t - Math.max(e, t - l.windowDays),
            u = Math.min(64, Math.max(1, Math.floor(c / l.minSpacing)));
          for (let h = u; h >= 1; h--) {
            const p = t - c * h / u;
            p - l.lastJd < l.minSpacing || (it(lt(a, p), o), l.push(p, o.x, o.y, o.z))
          }
          it(lt(a, t), o), l.push(t, o.x, o.y, o.z)
        }
        l.commit()
      }
      const i = q[a].rotationHours;
      r.tiltMesh.rotation.y += n * (.9 / Math.sqrt(Math.abs(i)))
    }
    if (this.sunMesh.rotation.y += n * .03, this.earthClouds && (this.earthClouds.rotation.y += n * .012), d.moons)
      for (const [a, r] of Object.entries(ut)) {
        const i = this.bodies.get(r.parent).group.position,
          l = 2 * Math.PI * (t / r.periodDays % 1),
          c = q[r.parent].size * r.orbitMult;
        this.bodies.get(a).group.position.set(i.x + c * Math.cos(l), i.y, i.z + c * Math.sin(l))
      }
    if (d.minor)
      for (const a of Object.keys(yt)) it(Ge(a, t), o), this.bodies.get(a).group.position.copy(o);
    if (d.comet) {
      it(Ge("Halley", t), o), this.bodies.get("Halley's Comet").group.position.copy(o);
      const r = o.length(),
        i = Math.max(0, 1 - r / (17.8 * nt * .6)),
        l = 4 + i * 46;
      this.cometTail.position.copy(o), this.cometTail.scale.set(.6 + i * 1.6, l, 1);
      const c = r > .001 ? o.clone().normalize() : new U(1, 0, 0);
      this.cometTail.quaternion.setFromUnitVectors(new U(0, 1, 0), c), this.cometTail.material.opacity = .25 + i * .6
    }
    if (d.smallBodies)
      for (const a of this.smallBodies) {
        if (it(Zt(a.data, t), o), a.mesh.position.copy(o), !d.trails) continue;
        const r = a.trail;
        if (t < r.lastJd) r.trimAfter(t);
        else if (t > e) {
          const i = t - Math.max(e, t - r.windowDays),
            l = Math.min(48, Math.max(1, Math.floor(i / r.minSpacing)));
          for (let c = l; c >= 1; c--) {
            const u = t - i * c / l;
            u - r.lastJd < r.minSpacing || (it(Zt(a.data, u), ie), r.push(u, ie.x, ie.y, ie.z))
          }
          r.push(t, o.x, o.y, o.z)
        }
        r.commit()
      }
    if (d.missions && this._updateMissions(t), d.neo && this.neoData.length) {
      const a = this.bodies.get("Earth").group.position;
      for (const r of this.neoData) {
        const i = this.bodies.get(r.name);
        i && i.group.position.copy(a).add(r.offset)
      }
    }
  }
  _updateMissions(t) {
    for (const [, e] of this.missions) {
      const n = e.wp,
        o = t >= n[0].jd;
      if (e.marker.visible = o, e.line.visible = o, !o) continue;
      let a;
      if (t >= n[n.length - 1].jd) {
        const l = n[n.length - 2],
          c = n[n.length - 1],
          u = c.pos.clone().sub(l.pos).divideScalar(c.jd - l.jd || 1);
        a = c.pos.clone().add(u.multiplyScalar(t - c.jd))
      } else {
        let l = 0;
        for (let h = 0; h < n.length - 1; h++)
          if (t >= n[h].jd && t <= n[h + 1].jd) {
            l = h;
            break
          } const c = n[l],
          u = n[l + 1];
        a = c.pos.clone().lerp(u.pos, Math.min(1, Math.max(0, (t - c.jd) / (u.jd - c.jd || 1))))
      }
      e.marker.position.copy(a);
      const r = e.line.geometry.getAttribute("position");
      let i = 0;
      for (const l of n) {
        if (l.jd > t) break;
        r.array[i * 3] = l.pos.x, r.array[i * 3 + 1] = l.pos.y, r.array[i * 3 + 2] = l.pos.z, i++
      }
      r.array[i * 3] = a.x, r.array[i * 3 + 1] = a.y, r.array[i * 3 + 2] = a.z, i++, r.needsUpdate = !0, e.line.geometry.setDrawRange(0, i), e.line.computeLineDistances()
    }
  }
  resetTrails() {
    for (const t of this.trails.values()) t.reset();
    for (const t of this.smallBodies) t.trail.reset()
  }
  render() {
    this.activeScene === this.scene && this.controls.update(), this.composer.render(), d.labels && this.labelRenderer.render(this.activeScene, this.activeCamera)
  }
  positionOf(t) {
    const e = this.bodies.get(t);
    return e ? e.group.position : null
  }
  sizeOf(t) {
    return this.bodies.get(t)?.size ?? 1
  }
}

function _s(s) {
  return {
    Mercury: 88,
    Venus: 225,
    Earth: 365.25,
    Mars: 687,
    Jupiter: 4333,
    Saturn: 10759,
    Uranus: 30687,
    Neptune: 60190,
    Pluto: 90560
  } [s]
}
const Se = .9,
  Qe = s => s * s * (3 - 2 * s);
class Is {
  constructor(t) {
    this.s = t, this.anchor = new U, this.flyFrom = null, this.flyFromTarget = null, this.flyElapsed = 0, this.prevPos = null, this.prevTarget = null, this.returning = null
  }
  follow(t) {
    if (d.follow === t) {
      this.unfollow();
      return
    }
    const e = this.s.positionOf(t);
    if (!e) return;
    this.returning = null, this.prevPos = this.s.camera.position.clone(), this.prevTarget = this.s.controls.target.clone(), I({
      follow: t
    });
    const n = this.s.sizeOf(t);
    this.dist = Math.max(6, n * 20);
    const o = this.s.camera.position.clone().sub(this.s.controls.target);
    o.lengthSq() < 1e-6 && o.set(.6, .4, .6), this.dir = o.normalize(), this.anchor.copy(e), this.flyFrom = this.s.camera.position.clone(), this.flyFromTarget = this.s.controls.target.clone(), this.flyElapsed = 0
  }
  unfollow() {
    I({
      follow: null
    })
  }
  canReturn() {
    return !!this.prevPos
  }
  returnToPrevious() {
    this.prevPos && (I({
      follow: null
    }), this.returning = {
      fromPos: this.s.camera.position.clone(),
      fromTarget: this.s.controls.target.clone(),
      toPos: this.prevPos.clone(),
      toTarget: this.prevTarget.clone(),
      t: 0
    }, this.prevPos = null, this.prevTarget = null)
  }
  cinematicIntro(t = 2.2) {
    const e = this.s.camera.position.clone(),
      n = this.s.controls.target.clone(),
      o = e.clone().multiplyScalar(1.85).add(new U(0, e.y * .7, 0));
    this.s.camera.position.copy(o), this.returning = {
      fromPos: o,
      fromTarget: n.clone(),
      toPos: e,
      toTarget: n,
      t: 0,
      duration: t
    }
  }
  toggleTopView() {
    this.returning = null;
    const t = !d.topView;
    I({
      topView: t
    });
    const e = this.s.camera.position.distanceTo(this.s.controls.target),
      n = this.s.controls.target;
    t ? this.s.camera.position.set(n.x + 1e-4, n.y + e, n.z + 1e-4) : this.s.camera.position.set(n.x + e * .62, n.y + e * .45, n.z + e * .62), this.s.controls.update()
  }
  update(t) {
    if (this.returning) {
      const n = this.returning,
        o = n.duration || Se;
      n.t += t;
      const a = Math.min(1, n.t / o),
        r = n.duration ? 1 - Math.pow(1 - a, 3) : Qe(a);
      this.s.camera.position.lerpVectors(n.fromPos, n.toPos, r), this.s.controls.target.lerpVectors(n.fromTarget, n.toTarget, r), n.t >= o && (this.returning = null);
      return
    }
    if (!d.follow) return;
    const e = this.s.positionOf(d.follow);
    if (!e) {
      I({
        follow: null
      });
      return
    }
    if (this.flyElapsed < Se) {
      this.flyElapsed += t;
      const n = Qe(Math.min(1, this.flyElapsed / Se)),
        o = e.clone().add(this.dir.clone().multiplyScalar(this.dist));
      this.s.camera.position.lerpVectors(this.flyFrom, o, n), this.s.controls.target.lerpVectors(this.flyFromTarget, e, n)
    } else {
      const n = e.clone().sub(this.anchor);
      this.s.camera.position.add(n), this.s.controls.target.add(n)
    }
    this.anchor.copy(e)
  }
}
const st = Math.PI / 180,
  Ht = 180 / Math.PI,
  Ze = 23.4392911 * st,
  zs = 1495978707e-1;

function Ee([s, t, e]) {
  const n = Math.cos(Ze),
    o = Math.sin(Ze);
  return [s, t * n - e * o, t * o + e * n]
}

function Ce([s, t, e]) {
  const n = Math.hypot(s, t, e);
  let o = Math.atan2(t, s) * Ht;
  return o < 0 && (o += 360), {
    ra: o,
    dec: Math.asin(e / n) * Ht,
    dist: n
  }
}

function Oe(s) {
  const t = te(s);
  let e = 280.46061837 + 360.98564736629 * (s - 2451545) + 387933e-9 * t * t - t * t * t / 3871e4;
  return e %= 360, e < 0 ? e + 360 : e
}

function De(s, t, e, n, o) {
  const r = (((Oe(o) + n) % 360 - s + 540) % 360 - 180) * st,
    i = t * st,
    l = e * st,
    c = Math.sin(i) * Math.sin(l) + Math.cos(i) * Math.cos(l) * Math.cos(r),
    u = Math.asin(Math.max(-1, Math.min(1, c)));
  let h = Math.atan2(-Math.sin(r) * Math.cos(i), Math.sin(i) * Math.cos(l) - Math.cos(i) * Math.sin(l) * Math.cos(r)) * Ht;
  return h = (h + 360) % 360, {
    alt: u * Ht,
    az: h
  }
}
const Js = [
    [0, 0, 1, 0, 6288774, -20905355],
    [2, 0, -1, 0, 1274027, -3699111],
    [2, 0, 0, 0, 658314, -2955968],
    [0, 0, 2, 0, 213618, -569925],
    [0, 1, 0, 0, -185116, 48888],
    [0, 0, 0, 2, -114332, -3149],
    [2, 0, -2, 0, 58793, 246158],
    [2, -1, -1, 0, 57066, -152138],
    [2, 0, 1, 0, 53322, -170733],
    [2, -1, 0, 0, 45758, -204586],
    [0, 1, -1, 0, -40923, -129620],
    [1, 0, 0, 0, -34720, 108743],
    [0, 1, 1, 0, -30383, 104755],
    [2, 0, 0, -2, 15327, 10321],
    [0, 0, 1, 2, -12528, 0],
    [0, 0, 1, -2, 10980, 79661],
    [4, 0, -1, 0, 10675, -34782],
    [0, 0, 3, 0, 10034, -23210],
    [4, 0, -2, 0, 8548, -21636],
    [2, 1, -1, 0, -7888, 24208],
    [2, 1, 0, 0, -6766, 30824],
    [1, 0, -1, 0, -5163, -8379],
    [1, 1, 0, 0, 4987, -16675],
    [2, -1, 1, 0, 4036, -12831],
    [2, 0, 2, 0, 3994, -10445],
    [4, 0, 0, 0, 3861, -11650],
    [2, 0, -3, 0, 3665, 14403],
    [0, 1, -2, 0, -2689, -7003],
    [2, 0, -1, 2, -2602, 0],
    [2, -1, -2, 0, 2390, 10056],
    [1, 0, 1, 0, -2348, 6322],
    [2, -2, 0, 0, 2236, -9884],
    [0, 1, 2, 0, -2120, 5751],
    [0, 2, 0, 0, -2069, 0],
    [2, -2, -1, 0, 2048, -4950],
    [2, 0, 1, -2, -1773, 4130],
    [2, 0, 0, 2, -1595, 0],
    [4, -1, -1, 0, 1215, -3958],
    [0, 0, 2, 2, -1110, 0],
    [3, 0, -1, 0, -892, 3258]
  ],
  Ds = [
    [0, 0, 0, 1, 5128122],
    [0, 0, 1, 1, 280602],
    [0, 0, 1, -1, 277693],
    [2, 0, 0, -1, 173237],
    [2, 0, -1, 1, 55413],
    [2, 0, -1, -1, 46271],
    [2, 0, 0, 1, 32573],
    [0, 0, 2, 1, 17198],
    [2, 0, 1, -1, 9266],
    [0, 0, 2, -1, 8822],
    [2, -1, 0, -1, 8216],
    [2, 0, -2, -1, 4324],
    [2, 0, 1, 1, 4200],
    [2, 1, 0, -1, -3359],
    [2, -1, -1, 1, 2463],
    [2, -1, 0, 1, 2211],
    [2, -1, -1, -1, 2065],
    [0, 1, -1, -1, -1870],
    [4, 0, -1, -1, 1828],
    [0, 1, 0, 1, -1794],
    [0, 0, 0, 3, -1749]
  ];

function Bs(s) {
  const t = te(s),
    e = 218.3164477 + 481267.88123421 * t - .0015786 * t * t + t ** 3 / 538841 - t ** 4 / 65194e3,
    n = 297.8501921 + 445267.1114034 * t - .0018819 * t * t + t ** 3 / 545868 - t ** 4 / 113065e3,
    o = 357.5291092 + 35999.0502909 * t - 1536e-7 * t * t + t ** 3 / 2449e4,
    a = 134.9633964 + 477198.8675055 * t + .0087414 * t * t + t ** 3 / 69699 - t ** 4 / 14712e3,
    r = 93.272095 + 483202.0175233 * t - .0036539 * t * t - t ** 3 / 3526e3 + t ** 4 / 86331e4,
    i = 1 - .002516 * t - 74e-7 * t * t;
  let l = 0,
    c = 0,
    u = 0;
  for (const [f, w, k, b, S, T] of Js) {
    const M = (f * n + w * o + k * a + b * r) * st,
      B = Math.abs(w) === 1 ? i : Math.abs(w) === 2 ? i * i : 1;
    l += S * B * Math.sin(M), c += T * B * Math.cos(M)
  }
  for (const [f, w, k, b, S] of Ds) {
    const T = (f * n + w * o + k * a + b * r) * st,
      M = Math.abs(w) === 1 ? i : Math.abs(w) === 2 ? i * i : 1;
    u += S * M * Math.sin(T)
  }
  const h = 1.396971 * t + 3086e-7 * t * t,
    p = (e + l / 1e6 - h) * st,
    y = u / 1e6 * st,
    g = (385000.56 + c / 1e3) / zs;
  return [g * Math.cos(y) * Math.cos(p), g * Math.cos(y) * Math.sin(p), g * Math.sin(y)]
}
const tn = {
  Mercury: -.42,
  Venus: -4.4,
  Mars: -1.52,
  Jupiter: -9.4,
  Saturn: -8.88,
  Uranus: -7.19,
  Neptune: -6.87,
  Pluto: -1
};

function Xt(s, t, e = "Earth") {
  const n = lt(e, t);
  if (s === "Sun") return Ce(Ee([-n[0], -n[1], -n[2]]));
  if (s === "Moon") return Ce(Ee(Bs(t)));
  const o = lt(s, t);
  return Ce(Ee([o[0] - n[0], o[1] - n[1], o[2] - n[2]]))
}

function Ln(s, t = "Earth") {
  const e = [];
  e.push({
    name: "Sun",
    kind: "sun",
    ...Xt("Sun", s, t),
    mag: -26.7
  }), t === "Earth" && e.push({
    name: "Moon",
    kind: "moon",
    ...Xt("Moon", s, t),
    mag: -12.7
  });
  for (const n of ft) {
    if (n === t) continue;
    const o = Xt(n, s, t),
      a = lt(n, s),
      r = Math.hypot(a[0], a[1], a[2]),
      i = tn[n] != null ? tn[n] + 5 * Math.log10(Math.max(1e-6, r * o.dist)) : 10;
    e.push({
      name: n,
      kind: "planet",
      ...o,
      mag: Math.round(i * 10) / 10
    })
  }
  return e
}
const en = {
    Sun: -.8333,
    Moon: .125,
    default: -.5667
  },
  Rs = 360.98564736629,
  Ae = s => (s % 1 + 1) % 1;

function nn(s, t, e, n, {
  observer: o = "Earth",
  h0Deg: a
} = {}) {
  const r = a ?? en[s] ?? en.default,
    i = r * st,
    l = t * st,
    c = b => Xt(s, b, o),
    u = (b, S) => ((Oe(b) + e - S) % 360 + 540) % 360 - 180;
  let h = .5;
  for (let b = 0; b < 6; b++) {
    const S = n + h,
      {
        ra: T
      } = c(S),
      M = u(S, T);
    if (h = Ae(h - M / Rs), Math.abs(M) < 1e-4) break
  }
  const p = n + h,
    {
      dec: y
    } = c(p),
    g = y * st,
    f = (Math.sin(i) - Math.sin(l) * Math.sin(g)) / (Math.cos(l) * Math.cos(g));
  if (f < -1) return {
    rise: null,
    transit: p,
    set: null,
    status: "circumpolar",
    h0: r
  };
  if (f > 1) return {
    rise: null,
    transit: p,
    set: null,
    status: "never",
    h0: r
  };
  const w = Math.acos(f) * Ht,
    k = b => {
      for (let S = 0; S < 6; S++) {
        b = Ae(b);
        const T = n + b,
          {
            ra: M,
            dec: B
          } = c(T),
          N = u(T, M) * st,
          K = B * st,
          Z = Math.sin(l) * Math.sin(K) + Math.cos(l) * Math.cos(K) * Math.cos(N),
          bt = Math.asin(Math.max(-1, Math.min(1, Z))),
          ot = 360 * Math.cos(K) * Math.cos(l) * Math.sin(N);
        if (Math.abs(ot) < 1e-6) break;
        const W = (bt - i) * Ht / ot;
        if (b += W, Math.abs(W) < 1e-6) break
      }
      return Ae(b)
    };
  return {
    rise: n + k(h - w / 360),
    transit: p,
    set: n + k(h + w / 360),
    status: "normal",
    h0: r
  }
}

function Wt(s, t, e, n, o = {}) {
  const a = Math.floor(n - .5) + .5,
    r = [nn(s, t, e, a, o), nn(s, t, e, a + 1, o)],
    i = p => {
      const y = r.map(g => g[p]).filter(g => g != null && g > n);
      return y.length ? Math.min(...y) : null
    },
    {
      ra: l,
      dec: c
    } = Xt(s, n, o.observer ?? "Earth"),
    {
      alt: u,
      az: h
    } = De(l, c, t, e, n);
  return {
    alt: u,
    az: h,
    up: u > r[0].h0,
    rise: i("rise"),
    transit: i("transit"),
    set: i("set"),
    status: r[0].status
  }
}
const At = Math.PI / 180,
  tt = 100;

function Dt(s, t, e = new U) {
  const n = s * At,
    o = t * At;
  return e.set(Math.cos(o) * Math.cos(n), Math.cos(o) * Math.sin(n), Math.sin(o))
}
let jt = null;

function Ns() {
  if (jt) return jt;
  const s = 128,
    t = document.createElement("canvas");
  t.width = t.height = s;
  const e = t.getContext("2d"),
    n = e.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  return n.addColorStop(0, "rgba(255,255,255,1)"), n.addColorStop(.25, "rgba(255,255,255,0.55)"), n.addColorStop(.6, "rgba(255,255,255,0.12)"), n.addColorStop(1, "rgba(255,255,255,0)"), e.fillStyle = n, e.fillRect(0, 0, s, s), jt = new Be(t), jt.colorSpace = ye, jt
}

function Os(s) {
  const t = Math.max(0, Math.min(1, (s + .4) / 2)),
    e = .62 + .38 * t,
    n = .74 + .24 * (1 - Math.abs(t - .5) * 2) * .6 + .1 * (1 - t),
    o = 1 - .42 * t;
  return [e, Math.min(1, n), o]
}
class Fs {
  constructor() {
    this.scene = new hn, this.camera = new pn(62, 1, .1, 400), this.camera.position.set(0, 0, 0), this.yaw = Math.PI, this.pitch = .42, this.fov = 62, this.equatorial = new et, this.scene.add(this.equatorial), this._buildDome(), this._buildHorizon(), this._planetMarkers = new Map, this._warm = new Ct(.96, .6, .36), this._dayBlue = new Ct(.25, .48, .86), this._dayGround = new Ct(.11, .13, .17), this.day = 0, this._v = new U, this.ready = !1, this.loadError = null
  }
  async load(t = "./") {
    if (!(this.ready || this._loading)) {
      this._loading = !0;
      try {
        const e = await fetch(`${t}data/sky.json`);
        if (!e.ok) throw new Error(`sky.json: HTTP ${e.status}`);
        const n = await e.json();
        this._buildStars(n.stars), this._buildFigures(n.constellations), this._buildStarNames(n.named), this.ready = !0
      } catch (e) {
        this.loadError = e.message || String(e)
      } finally {
        this._loading = !1
      }
    }
  }
  _buildStars(t) {
    const e = t.length,
      n = new Float32Array(e * 3),
      o = new Float32Array(e * 3),
      a = new Float32Array(e),
      r = new U;
    for (let c = 0; c < e; c++) {
      const [u, h, p, y] = t[c];
      Dt(u, h, r).multiplyScalar(tt), n[c * 3] = r.x, n[c * 3 + 1] = r.y, n[c * 3 + 2] = r.z;
      const [g, f, w] = Os(y), k = Math.max(.12, Math.min(1, (6.6 - p) / 6.2));
      o[c * 3] = g * (.55 + .45 * k), o[c * 3 + 1] = f * (.55 + .45 * k), o[c * 3 + 2] = w * (.55 + .45 * k), a[c] = .22 + k * k * 2.6
    }
    const i = new pt;
    i.setAttribute("position", new mt(n, 3)), i.setAttribute("color", new mt(o, 3)), i.setAttribute("aSize", new mt(a, 1));
    const l = new ze({
      transparent: !0,
      depthWrite: !1,
      blending: Ot,
      uniforms: {
        uScale: {
          value: 1
        },
        uDim: {
          value: 1
        }
      },
      vertexShader: `
        #include <common>
        #include <logdepthbuf_pars_vertex>
        attribute float aSize;
        varying vec3 vColor;
        uniform float uScale;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aSize * uScale;
          #include <logdepthbuf_vertex>
        }`,
      fragmentShader: `
        #include <logdepthbuf_pars_fragment>
        varying vec3 vColor;
        uniform float uDim;
        void main() {
          vec2 d = gl_PointCoord - vec2(0.5);
          float r = length(d);
          if (r > 0.5) discard;
          float a = smoothstep(0.5, 0.06, r);
          gl_FragColor = vec4(vColor, a * uDim);
          #include <logdepthbuf_fragment>
        }`,
      vertexColors: !0
    });
    this.starPoints = new Je(i, l), this.starPoints.frustumCulled = !1, this.equatorial.add(this.starPoints)
  }
  _buildFigures(t) {
    const e = [],
      n = new U;
    for (const a of t)
      for (const r of a.segs)
        for (let i = 0; i < r.length - 1; i++) Dt(r[i][0], r[i][1], n).multiplyScalar(tt * .995), e.push(n.x, n.y, n.z), Dt(r[i + 1][0], r[i + 1][1], n).multiplyScalar(tt * .995), e.push(n.x, n.y, n.z);
    const o = new pt;
    o.setAttribute("position", new mt(new Float32Array(e), 3)), this.figures = new Zn(o, new un({
      color: 9090303,
      transparent: !0,
      opacity: .22,
      depthWrite: !1
    })), this.figures.frustumCulled = !1, this.equatorial.add(this.figures), this.figureLabels = [];
    for (const a of t) {
      const r = new U;
      let i = 0;
      for (const u of a.segs)
        for (const [h, p] of u) r.add(Dt(h, p, n)), i++;
      if (!i) continue;
      r.divideScalar(i).normalize().multiplyScalar(tt * .96);
      const l = document.createElement("div");
      l.className = "body-label label-sm sky-const", l.textContent = a.name;
      const c = new Vt(l);
      c.position.copy(r), this.equatorial.add(c), this.figureLabels.push(c)
    }
  }
  _buildStarNames(t) {
    this.starLabels = [];
    const e = new U;
    for (const n of t) {
      const o = document.createElement("div");
      o.className = "body-label label-sm sky-star", o.textContent = n.n;
      const a = new Vt(o);
      a.position.copy(Dt(n.ra, n.dec, e).multiplyScalar(tt * .97)), this.equatorial.add(a), this.starLabels.push(a)
    }
  }
  _buildDome() {
    this.domeMat = new ze({
      side: ts,
      transparent: !0,
      depthWrite: !1,
      uniforms: {
        uDay: {
          value: 0
        },
        uHorizon: {
          value: new Ct(.62, .71, .84)
        },
        uZenith: {
          value: new Ct(.12, .2, .44)
        }
      },
      vertexShader: `
        #include <common>
        #include <logdepthbuf_pars_vertex>
        varying float vY;
        void main() {
          vY = position.y / ${tt.toFixed(1)};
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          #include <logdepthbuf_vertex>
        }`,
      fragmentShader: `
        #include <logdepthbuf_pars_fragment>
        uniform float uDay; uniform vec3 uHorizon; uniform vec3 uZenith;
        varying float vY;
        void main() {
          float t = smoothstep(-0.04, 0.6, vY);
          gl_FragColor = vec4(mix(uHorizon, uZenith, t), uDay);
          #include <logdepthbuf_fragment>
        }`
    }), this.dome = new X(new rt(tt * 1.06, 40, 20), this.domeMat), this.dome.renderOrder = -1, this.dome.frustumCulled = !1, this.scene.add(this.dome)
  }
  _buildHorizon() {
    const t = new X(new gn(tt * .985, tt * 1.02, 128), new xt({
      color: 9090303,
      transparent: !0,
      opacity: .16,
      side: Qt,
      depthWrite: !1
    }));
    t.rotation.x = -Math.PI / 2, this.scene.add(t);
    const e = new X(new es(tt * .99, 96), new xt({
      color: 328970,
      transparent: !0,
      opacity: .82,
      side: Qt,
      depthWrite: !1
    }));
    e.rotation.x = Math.PI / 2, e.position.y = -.4, this.scene.add(e), this.ground = e;
    const n = [
      ["N", 0],
      ["E", 90],
      ["S", 180],
      ["W", 270]
    ];
    for (const [o, a] of n) {
      const r = document.createElement("div");
      r.className = "sky-cardinal", r.textContent = o;
      const i = new Vt(r),
        l = a * At;
      i.position.set(Math.sin(l) * tt * .98, 1.5, -Math.cos(l) * tt * .98), this.scene.add(i)
    }
  }
  attach(t) {
    this.dom = t;
    let e = !1,
      n = 0,
      o = 0;
    this._onDown = a => {
      d.mode === "sky" && (e = !0, n = a.clientX, o = a.clientY, t.setPointerCapture?.(a.pointerId))
    }, this._onMove = a => {
      if (!e || d.mode !== "sky") return;
      const r = this.fov / 62 * .0032;
      this.yaw -= (a.clientX - n) * r, this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch + (a.clientY - o) * r)), n = a.clientX, o = a.clientY
    }, this._onUp = () => {
      e = !1
    }, this._onWheel = a => {
      d.mode === "sky" && (a.preventDefault(), this.fov = Math.max(12, Math.min(95, this.fov + Math.sign(a.deltaY) * 4)))
    }, t.addEventListener("pointerdown", this._onDown), addEventListener("pointermove", this._onMove), addEventListener("pointerup", this._onUp), t.addEventListener("wheel", this._onWheel, {
      passive: !1
    })
  }
  lookAt(t, e) {
    this.yaw = t * At, this.pitch = e * At
  }
  update(t) {
    const e = (Oe(t) + d.lon) * At,
      n = d.lat * At,
      o = new U(Math.cos(n) * Math.cos(e), Math.cos(n) * Math.sin(e), Math.sin(n)),
      a = new U(0, 0, 1),
      r = a.clone().addScaledVector(o, -a.dot(o)).normalize(),
      i = r.clone().cross(o).normalize(),
      l = new ns().makeBasis(i, o, r.clone().negate());
    l.transpose(), this.equatorial.quaternion.setFromRotationMatrix(l);
    const c = Ln(t, d.observer),
      u = c.find(k => k.kind === "sun"),
      h = De(u.ra, u.dec, d.lat, d.lon, t).alt,
      p = Math.max(0, Math.min(1, (h + 18) / 24)),
      y = p * p * (3 - 2 * p),
      g = 1 - Math.min(1, Math.abs(h) / 9);
    this.day = y, this.sunAlt = h, this.domeMat.uniforms.uDay.value = y * .97, this.domeMat.uniforms.uHorizon.value.setRGB(.62, .71, .84).lerp(this._warm, g * .85), this.domeMat.uniforms.uZenith.value.setRGB(.12, .2, .44).lerp(this._dayBlue, Math.max(0, Math.min(1, (h + 2) / 14))), this.starPoints && (this.starPoints.material.uniforms.uDim.value = 1 - y), this.figures && (this.figures.material.opacity = .22 * (1 - y)), this.ground.material.color.setRGB(.02, .02, .04).lerp(this._dayGround, y);
    for (const k of c) {
      let b = this._planetMarkers.get(k.name);
      b || (b = this._makeMarker(k), this._planetMarkers.set(k.name, b), this.equatorial.add(b.group)), Dt(k.ra, k.dec, this._v).multiplyScalar(tt * .99), b.group.position.copy(this._v);
      const S = k.kind === "sun" ? 3.4 : k.kind === "moon" ? 2.8 : Math.max(.7, 2.4 - k.mag * .28);
      b.mesh.scale.setScalar(S), b.label.element.textContent = k.name;
      const {
        alt: T
      } = De(k.ra, k.dec, d.lat, d.lon, t), M = T < -1 ? .22 : 1, B = k.kind === "planet" ? 1 - y * .85 : 1, N = M * B;
      b.mesh.material.opacity = N, b.halo.material.opacity = .28 * N, b.halo.scale.setScalar(k.kind === "sun" ? 6 + 12 * y : 6), b.label.element.style.opacity = N < .3 ? "0.4" : "1"
    }
    this.camera.fov = this.fov, this.camera.updateProjectionMatrix();
    const f = Math.cos(this.pitch);
    this.camera.lookAt(Math.sin(this.yaw) * f * 10, Math.sin(this.pitch) * 10, -Math.cos(this.yaw) * f * 10), this.starPoints && (this.starPoints.material.uniforms.uScale.value = 62 / this.fov * (innerHeight / 900 + .4)), this.figures && (this.figures.visible = d.skyFigures !== !1);
    const w = y < .6;
    for (const k of this.figureLabels || []) k.visible = d.labels && d.skyFigures !== !1 && w;
    for (const k of this.starLabels || []) k.visible = d.labels && this.fov < 70 && w
  }
  _makeMarker(t) {
    const e = new et,
      n = t.kind === "sun" ? 16767370 : t.kind === "moon" ? 14606046 : q[t.name]?.color ?? 16777215,
      o = new X(new rt(1, 16, 16), new xt({
        color: n,
        transparent: !0
      }));
    e.add(o);
    const a = new fn(new yn({
      map: Ns(),
      color: n,
      transparent: !0,
      opacity: .28,
      depthWrite: !1,
      blending: Ot
    }));
    a.scale.setScalar(6), e.add(a);
    const r = document.createElement("div");
    r.className = "body-label sky-planet", r.textContent = t.name;
    const i = new Vt(r);
    return i.position.set(0, 2.4, 0), e.add(i), {
      group: e,
      mesh: o,
      halo: a,
      label: i
    }
  }
  setAspect(t, e) {
    this.camera.aspect = t / e, this.camera.updateProjectionMatrix()
  }
  dispose() {
    this.dom?.removeEventListener("pointerdown", this._onDown), removeEventListener("pointermove", this._onMove), removeEventListener("pointerup", this._onUp), this.dom?.removeEventListener("wheel", this._onWheel)
  }
}

function sn(s) {
  const t = ["Sun", ...ft];
  if (d.moons && t.push(...Object.keys(ut)), d.minor && t.push(...Object.keys(yt)), d.comet && t.push("Halley's Comet"), d.missions)
    for (const [n, o] of s.missions) o.marker.visible && t.push(n);
  d.neo && t.push(...s.neoData.map(n => n.name));
  const e = [];
  for (const n of t) {
    const o = s.bodies.get(n);
    o?.mesh && (o.mesh.userData.pickName = n, e.push(o.mesh));
    const a = s.bodies.get(n + "/ring");
    a && (a.mesh.userData.pickName = n, e.push(a.mesh))
  }
  return e
}

function Hs(s, t, {
  enabled: e = () => !0
} = {}) {
  const n = new ss,
    o = new mn;
  let a = null;
  const r = s.renderer.domElement;
  r.addEventListener("pointerdown", l => {
    a = {
      x: l.clientX,
      y: l.clientY
    }
  });
  let i = !1;
  r.addEventListener("pointermove", l => {
    if (l.pointerType === "touch" || i || a) return;
    i = !0, setTimeout(() => {
      i = !1
    }, 70);
    const c = r.getBoundingClientRect();
    o.x = (l.clientX - c.left) / c.width * 2 - 1, o.y = -((l.clientY - c.top) / c.height) * 2 + 1, n.setFromCamera(o, s.camera);
    const u = n.intersectObjects(sn(s), !1);
    s.setHovered(u.length ? u[0].object.userData.pickName : null)
  }), r.addEventListener("pointerleave", () => s.setHovered(null)), r.addEventListener("pointerup", l => {
    if (!a || !e()) return;
    const c = Math.hypot(l.clientX - a.x, l.clientY - a.y);
    if (a = null, c > 5) return;
    const u = sn(s),
      h = r.getBoundingClientRect();
    o.x = (l.clientX - h.left) / h.width * 2 - 1, o.y = -((l.clientY - h.top) / h.height) * 2 + 1, n.setFromCamera(o, s.camera);
    const p = n.intersectObjects(u, !1);
    p.length && t(p[0].object.userData.pickName)
  })
}
const on = "solarSim.start",
  an = "solarSim.end",
  $s = ["apophis-2029", "oumuamua-2017", "great-conjunction", "two-millennia"];

function Us({
  onLaunch: s,
  stories: t = [],
  onStory: e
}) {
  const n = document.getElementById("start-overlay"),
    o = document.getElementById("date-start"),
    a = document.getElementById("date-end"),
    r = document.getElementById("start-error");
  try {
    const c = sessionStorage.getItem(on),
      u = sessionStorage.getItem(an);
    c && (o.value = c), u && (a.value = u)
  } catch {}
  const i = document.getElementById("start-stories");
  for (const c of $s) {
    const u = t.find(k => k.id === c);
    if (!u) continue;
    const h = document.createElement("button");
    h.type = "button", h.className = "start-story";
    const p = document.createElement("span");
    p.className = "ss-when", p.textContent = u.when;
    const y = document.createElement("span");
    y.className = "ss-mid";
    const g = document.createElement("span");
    g.className = "ss-title", g.textContent = u.title;
    const f = document.createElement("span");
    f.className = "ss-sub", f.textContent = u.sub, y.append(g, f);
    const w = document.createElement("span");
    w.className = "ss-go", w.textContent = "→", h.append(p, y, w), h.addEventListener("click", () => {
      u.id, e(u)
    }), i.appendChild(h)
  }
  for (const c of [o, a]) c.addEventListener("click", () => {
    try {
      c.showPicker()
    } catch {}
  });
  for (const c of document.querySelectorAll(".chip")) c.addEventListener("click", () => {
    o.value = c.dataset.start, a.value = c.dataset.end, r.textContent = ""
  });
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) try {
    document.getElementById("orrery-bg").pauseAnimations()
  } catch {}

  function l() {
    const c = Pt(o.value),
      u = Pt(a.value);
    if (!c || !u) return r.textContent = "That date does not exist — check the month and day.", !1;
    if (u <= c) return r.textContent = "The end date has to come after the start date.", !1;
    r.textContent = "";
    try {
      sessionStorage.setItem(on, o.value), sessionStorage.setItem(an, a.value)
    } catch {}
    return n.style.display = "none", s(c, u), !0
  }
  return document.getElementById("btn-launch").addEventListener("click", l), {
    launchWith(c, u) {
      return o.value = typeof c == "string" ? c : F(c), a.value = typeof u == "string" ? u : F(u), l()
    }
  }
}
const Le = {
  high: {
    text: "JPL fit · arcminutes",
    cls: "",
    title: "Inside the 1800–2050 high-precision fit."
  },
  good: {
    text: "long fit · ±1°",
    cls: "good",
    title: "Long-range fit, 3000 BC – 3000 AD: about a degree at the extremes."
  },
  extrapolated: {
    text: "beyond fit · schematic",
    cls: "extrapolated",
    title: "Outside every published fit — positions are schematic."
  }
};

function Gs() {
  const s = document.getElementById("ro-date"),
    t = document.getElementById("ro-calendar"),
    e = document.getElementById("ro-accuracy");
  let n = "",
    o = "";
  return function() {
    const r = $(d.currentJd),
      i = F(r);
    if (i !== n) {
      n = i, s.textContent = i;
      const c = rs(r);
      t.textContent = c ? "proleptic Gregorian" : ""
    }
    const l = me(d.currentJd);
    l !== o && (o = l, e.textContent = Le[l].text, e.className = "ro-acc " + Le[l].cls, e.title = Le[l].title, I({
      accuracy: l
    }))
  }
}

function Ks() {
  const s = document.getElementById("scrim"),
    t = [];

  function e(o) {
    for (const r of t) r.panel !== o && (r.panel.classList.remove("open"), r.button.classList.remove("on"), r.button.setAttribute("aria-expanded", "false"));
    const a = t.some(r => r.panel.classList.contains("open"));
    s.classList.toggle("on", a)
  }

  function n(o, a, r) {
    const i = document.getElementById(o),
      l = document.getElementById(a);
    t.push({
      button: i,
      panel: l
    }), i.addEventListener("click", c => {
      c.stopPropagation();
      const u = !l.classList.contains("open");
      e(u ? l : null), l.classList.toggle("open", u), i.classList.toggle("on", u), i.setAttribute("aria-expanded", String(u)), s.classList.toggle("on", u), u && r?.()
    }), l.addEventListener("click", c => c.stopPropagation())
  }
  return s.addEventListener("click", () => e(null)), {
    register: n,
    closeAll: () => e(null)
  }
}

function js({
  onNeo: s,
  onSmallBodies: t
}) {
  const e = (o, a, r) => {
    const i = document.getElementById(o);
    i && (i.checked = !!d[a], i.addEventListener("change", () => {
      I({
        [a]: i.checked
      }), r?.(i.checked), i.checked
    }), V(a, l => {
      i.checked = l
    }))
  };
  e("chk-trails", "trails"), e("chk-belt", "belt"), e("chk-moons", "moons"), e("chk-stars", "stars"), e("chk-labels", "labels"), e("chk-minor", "minor"), e("chk-comet", "comet"), e("chk-missions", "missions"), e("chk-neows", "neo", o => o && s()), e("chk-smallbodies", "smallBodies", o => o && t()), e("chk-truescale", "trueScale");
  const n = document.getElementById("chk-lowdetail");
  n.checked = d.quality === "low", n.addEventListener("change", () => I({
    quality: n.checked ? "low" : "high"
  }))
}

function qs(s) {
  const t = [...document.querySelectorAll("#modes .mode")];

  function e(n) {
    I({
      mode: n
    });
    for (const o of t) o.setAttribute("aria-selected", String(o.dataset.mode === n));
    document.body.classList.toggle("mode-atlas", n === "atlas"), document.body.classList.toggle("mode-sky", n === "sky"), s(n)
  }
  for (const n of t) n.addEventListener("click", () => e(n.dataset.mode));
  return {
    apply: e
  }
}

function Vs() {
  const s = document.getElementById("btn-chrome"),
    t = document.createElement("div");
  t.id = "chrome-hint", t.textContent = "press C to bring the interface back", document.body.appendChild(t);
  let e = null;

  function n(o) {
    I({
      chromeHidden: o
    }), document.body.classList.toggle("chrome-hidden", o), s.classList.toggle("on", o), o || document.body.classList.remove("chrome-peek")
  }
  return s.addEventListener("click", () => n(!d.chromeHidden)), addEventListener("pointermove", o => {
    !d.chromeHidden || !(o.clientY < 70 || o.clientY > innerHeight - 90) || (document.body.classList.add("chrome-peek"), clearTimeout(e), e = setTimeout(() => document.body.classList.remove("chrome-peek"), 2200))
  }), {
    setHidden: n,
    toggle: () => n(!d.chromeHidden)
  }
}
let rn = null;

function G(s, t = 4200) {
  const e = document.getElementById("toast");
  e.textContent = s, e.classList.add("show"), clearTimeout(rn), rn = setTimeout(() => e.classList.remove("show"), t)
}
const ln = s => s < 1 ? `${(s*24).toFixed(1)} h/s` : s < 365 ? `${s<10?s.toFixed(1):Math.round(s)} d/s` : `${(s/365.25).toFixed(s<3653?1:0)} yr/s`;

function Ws({
  onJump: s
}) {
  const t = document.getElementById("timeline"),
    e = document.getElementById("btn-play"),
    n = document.getElementById("btn-reverse"),
    o = document.getElementById("speed-slider"),
    a = document.getElementById("speed-value"),
    r = document.getElementById("btn-today"),
    i = () => document.body.classList.toggle("paused", !d.playing),
    l = () => n.classList.toggle("on", d.reverse);
  e.addEventListener("click", () => {
    I({
      playing: !d.playing
    }), i()
  }), n.addEventListener("click", () => {
    I({
      reverse: !d.reverse
    }), l()
  });
  const c = document.createElement("div");
  c.id = "timeline-tip", t.parentElement.appendChild(c);
  let u = null,
    h = !1,
    p = null;
  const y = () => {
      const M = t.valueAsNumber / 1e4;
      c.textContent = F($(d.startJd + (d.endJd - d.startJd) * M)), c.style.left = `${t.getBoundingClientRect().width*M}px`, c.classList.add("show")
    },
    g = () => c.classList.remove("show"),
    f = () => {
      u !== null && (I({
        playing: u
      }), u = null, i())
    };
  t.addEventListener("input", () => {
    u === null && (u = d.playing, I({
      playing: !1
    }), i());
    const M = t.valueAsNumber / 1e4;
    I({
      currentJd: d.startJd + (d.endJd - d.startJd) * M
    }), y(), h || (clearTimeout(p), p = setTimeout(() => {
      f(), g()
    }, 900))
  }), t.addEventListener("pointerdown", () => {
    h = !0
  }), t.addEventListener("pointerup", () => {
    h = !1, f(), g(), t.blur()
  }), t.addEventListener("pointercancel", () => {
    h = !1, f(), g()
  });
  const w = () => {
    o.value = String(Math.log10(d.daysPerSecond)), a.textContent = ln(d.daysPerSecond)
  };
  o.addEventListener("input", () => {
    I({
      daysPerSecond: Math.pow(10, parseFloat(o.value))
    }), a.textContent = ln(d.daysPerSecond)
  }), document.getElementById("btn-reset").addEventListener("click", () => {
    I({
      currentJd: d.startJd,
      playing: !0,
      reverse: !1
    }), i(), l(), s()
  }), r.addEventListener("click", () => {
    const M = dt(new Date);
    M < d.startJd || M > d.endJd || (I({
      currentJd: M,
      playing: !1
    }), i(), s())
  });

  function k() {
    const M = document.getElementById("tr-ticks");
    M.textContent = "";
    const B = d.endJd - d.startJd,
      N = B / 365.25,
      K = N <= 3 ? 1 : N <= 30 ? 5 : N <= 300 ? 50 : N <= 1200 ? 200 : 500,
      Z = $(d.startJd).getUTCFullYear(),
      bt = $(d.endJd).getUTCFullYear();
    for (let ot = Math.ceil(Z / K) * K; ot <= bt; ot += K) {
      const W = new Date(Date.UTC(2e3, 0, 1));
      W.setUTCFullYear(ot);
      const m = (dt(W) - d.startJd) / B;
      if (m < .01 || m > .99) continue;
      const E = document.createElement("div");
      E.className = "tr-tick" + (ot % (K * 5) === 0 ? " major" : ""), E.style.left = `${m*100}%`, M.appendChild(E)
    }
  }

  function b() {
    const M = (d.currentJd - d.startJd) / (d.endJd - d.startJd || 1),
      B = Math.round(M * 1e4);
    t.valueAsNumber !== B && !h && u === null && (t.valueAsNumber = B)
  }
  b.cancelScrub = () => {
    clearTimeout(p), u = null, h = !1, g()
  }, b.syncAll = () => {
    i(), l(), w(), k()
  };
  const S = dt(new Date);
  r.style.display = S >= d.startJd && S <= d.endJd ? "" : "none";
  const T = () => {
    const M = Math.round(document.getElementById("transport").getBoundingClientRect().height);
    M > 0 && document.documentElement.style.setProperty("--transport-h", `${M}px`)
  };
  return typeof ResizeObserver < "u" && new ResizeObserver(T).observe(document.getElementById("transport")), addEventListener("resize", T), T(), b.syncAll(), b
}
const Tn = 12e3;
async function Pn(s) {
  const t = new AbortController,
    e = setTimeout(() => t.abort(), Tn);
  try {
    const n = await fetch(s, {
      signal: t.signal
    });
    if (n.status === 429) throw new Error("NASA rate limit reached — add your own free key from the command palette.");
    if (!n.ok) throw new Error(`NASA API error ${n.status}`);
    return await n.json()
  } catch (n) {
    throw n.name === "AbortError" ? new Error("NASA request timed out — try again in a moment.") : n
  } finally {
    clearTimeout(e)
  }
}
let qt = "unknown";
async function Fe(s, t) {
  const e = Es();
  if (!e && qt !== "absent") try {
    const o = new URL("/api/nasa", location.origin);
    o.searchParams.set("path", s);
    for (const [l, c] of Object.entries(t)) o.searchParams.set(l, c);
    const a = new AbortController,
      r = setTimeout(() => a.abort(), Tn);
    let i;
    try {
      i = await fetch(o, {
        signal: a.signal
      })
    } finally {
      clearTimeout(r)
    }
    if (i.ok) return qt = "ok", i.json();
    if (i.status === 404 || i.status === 503) qt = "absent";
    else {
      if (i.status === 429) throw new Error("NASA rate limit reached — add your own free key from the command palette.");
      qt = "absent"
    }
  } catch (o) {
    if (o.message && o.message.includes("rate limit")) throw o;
    qt = "absent"
  }
  const n = new URL(`https://api.nasa.gov/${s}`);
  for (const [o, a] of Object.entries(t)) n.searchParams.set(o, a);
  return n.searchParams.set("api_key", e || "DEMO_KEY"), Pn(n.toString())
}
let re = null;
async function Ys() {
  if (re) return re;
  const s = new Date,
    t = s.toISOString().slice(0, 10),
    e = new Date(s.getTime() + 6 * 864e5).toISOString().slice(0, 10),
    n = await Fe("neo/rest/v1/feed", {
      start_date: t,
      end_date: e
    }),
    o = [];
  for (const a of Object.keys(n.near_earth_objects || {}))
    for (const r of n.near_earth_objects[a]) {
      const i = r.close_approach_data && r.close_approach_data[0];
      if (!i) continue;
      const l = (r.estimated_diameter.kilometers.estimated_diameter_min + r.estimated_diameter.kilometers.estimated_diameter_max) / 2,
        c = parseFloat(i.miss_distance.astronomical);
      o.push({
        name: r.name.replace(/[()]/g, ""),
        diameterKm: l,
        hazardous: r.is_potentially_hazardous_asteroid,
        missDistanceAU: c,
        approachEpoch: Number(i.epoch_date_close_approach),
        velocityKmS: parseFloat(i.relative_velocity.kilometers_per_second),
        facts: {
          diam: `${Math.round(l*1e3)} m (avg. estimate)`,
          hazard: r.is_potentially_hazardous_asteroid ? "Yes — potentially hazardous" : "No",
          approach: i.close_approach_date,
          miss: `${c.toFixed(4)} AU (${Math.round(c*1495978707e-1).toLocaleString("en-US")} km)`,
          speed: `${parseFloat(i.relative_velocity.kilometers_per_second).toFixed(1)} km/s`
        },
        blurb: "A real near-Earth object from NASA’s NeoWs feed for this week. Its distance, size, speed and approach date are real; the direction it is drawn from is illustrative."
      })
    }
  return o.sort((a, r) => a.missDistanceAU - r.missDistanceAU), re = o.slice(0, 12), re
}
let le;
async function Xs() {
  if (le !== void 0) return le;
  try {
    const s = new Date,
      t = new Date(s.getTime() - 30 * 864e5),
      e = o => o.toISOString().slice(0, 10),
      n = await Fe("DONKI/FLR", {
        startDate: e(t),
        endDate: e(s)
      });
    return le = Array.isArray(n) && n.length ? {
      classType: n[n.length - 1].classType,
      peakTime: n[n.length - 1].peakTime
    } : null, le
  } catch {
    return "error"
  }
}
const Te = new Map;
async function Qs(s) {
  if (Te.has(s)) return Te.get(s);
  let t = null;
  try {
    if (s >= "2015-06-13") {
      const e = await Pn(`https://epic.gsfc.nasa.gov/api/natural/date/${s}`);
      if (Array.isArray(e) && e.length) {
        const n = e[Math.floor(e.length / 2)],
          [o, a, r] = s.split("-");
        t = {
          url: `https://epic.gsfc.nasa.gov/archive/natural/${o}/${a}/${r}/jpg/${n.image}.jpg`,
          caption: n.caption,
          date: n.date,
          count: e.length
        }
      }
    }
  } catch {
    t = "error"
  }
  return Te.set(s, t), t
}
const Pe = new Map;
async function Zs(s) {
  if (Pe.has(s)) return Pe.get(s);
  let t = null;
  try {
    if (s >= "1995-06-16" && s <= new Date().toISOString().slice(0, 10)) {
      const e = await Fe("planetary/apod", {
        date: s,
        thumbs: "true"
      });
      t = {
        title: e.title,
        explanation: e.explanation,
        mediaType: e.media_type,
        url: e.media_type === "image" ? e.url || "" : e.thumbnail_url || "",
        hdurl: e.hdurl || e.url || "",
        copyright: e.copyright || null,
        link: `https://apod.nasa.gov/apod/ap${s.slice(2,4)}${s.slice(5,7)}${s.slice(8,10)}.html`
      }
    }
  } catch {
    t = "error"
  }
  return Pe.set(s, t), t
}
const to = 1495978707e-1,
  eo = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
  no = s => eo[Math.round((s % 360 + 360) % 360 / 45) % 8],
  kt = s => $(s).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

function so() {
  try {
    return new Date().toLocaleTimeString([], {
      timeZoneName: "short"
    }).split(" ").pop()
  } catch {
    return "local time"
  }
}
const x = (s, t, e) => {
  const n = document.createElement(s);
  return t && (n.className = t), e != null && (n.textContent = e), n
};

function oo({
  rig: s,
  scene: t,
  getNeo: e,
  onSelect: n
}) {
  const o = document.getElementById("insp-body"),
    a = document.getElementById("insp-eyebrow"),
    r = document.getElementById("insp-title");
  let i = {
      kind: "overview"
    },
    l = [],
    c = 0;
  document.getElementById("insp-close").addEventListener("click", () => document.body.classList.add("insp-closed")), document.getElementById("insp-open").addEventListener("click", () => document.body.classList.remove("insp-closed"));

  function u() {
    i = {
      kind: "overview"
    }, a.textContent = "The system", r.textContent = F($(d.currentJd)), o.textContent = "", l = [];
    const m = x("div", "body-list"),
      E = (D, A, z) => {
        const J = x("button", "body-row");
        J.type = "button", J.dataset.body = D;
        const H = x("span", "dot");
        H.style.background = A;
        const L = x("span", "nm", D),
          j = x("span", "val", z());
        J.append(H, L, j), J.addEventListener("click", () => n(D)), m.appendChild(J), l.push({
          el: j,
          getValue: z
        })
      };
    E("Sun", Me(gt.color), () => "—");
    for (const D of ft) E(D, Me(q[D].color), () => {
      const A = lt(D, d.currentJd);
      return `${Math.hypot(A[0],A[1],A[2]).toFixed(2)} AU`
    });
    o.appendChild(m), bt();
    const C = x("div", "insp-section");
    C.appendChild(x("h3", null, "On this date"));
    const P = x("div");
    P.appendChild(x("div", "img-loading", "Looking for imagery…")), C.appendChild(P), o.appendChild(C), h(P)
  }
  async function h(m) {
    const E = ++c,
      C = F($(d.currentJd)),
      P = await Zs(C);
    if (E !== c || !m.isConnected) return;
    if (m.textContent = "", P === "error") {
      m.appendChild(x("div", "note", "Imagery unavailable right now."));
      return
    }
    if (!P) {
      m.appendChild(x("div", "note", C < "1995-06-16" ? "NASA’s picture-of-the-day archive begins on 16 June 1995." : "No picture published for this date yet."));
      return
    }
    const D = x("figure", "img-card");
    if (P.url) {
      const J = x("img");
      J.src = P.url, J.alt = P.title, J.loading = "lazy", D.appendChild(J)
    }
    const A = x("figcaption");
    A.append(x("b", null, P.title)), A.append(document.createTextNode(` — NASA APOD, ${C}${P.copyright?` · © ${P.copyright.trim()}`:""}`)), D.appendChild(A), m.appendChild(D);
    const z = x("button", "insp-action", "Read the full caption");
    z.addEventListener("click", () => {
      window.open(P.link, "_blank", "noopener")
    }), m.appendChild(z)
  }

  function p(m) {
    const E = ge(m);
    if (E) return g(E);
    const C = ps(m);
    if (!C) {
      const A = e().find(z => z.name === m);
      return A ? f(A) : u()
    }
    i = {
      kind: "body",
      name: m
    }, l = [], a.textContent = C.kind, r.textContent = m, o.textContent = "", C.blurb && o.appendChild(x("p", "blurb", C.blurb));
    const P = x("dl", "facts"),
      D = C.factLabels || ms;
    for (const [A, z] of Object.entries(D)) C.facts[A] && P.append(x("dt", null, z), x("dd", null, C.facts[A]));
    if (o.appendChild(P), q[m]) {
      const A = x("div", "insp-section");
      A.appendChild(x("h3", null, "Right now"));
      const z = x("dl", "facts"),
        J = x("dd"),
        H = x("dd");
      z.append(x("dt", null, "From the Sun"), J), m !== "Earth" && z.append(x("dt", null, "From Earth"), H), A.appendChild(z), o.appendChild(A), l.push({
        el: J,
        getValue: () => {
          const L = lt(m, d.currentJd);
          return `${Math.hypot(L[0],L[1],L[2]).toFixed(3)} AU`
        }
      }), m !== "Earth" && l.push({
        el: H,
        getValue: () => {
          const L = lt(m, d.currentJd),
            j = lt("Earth", d.currentJd),
            wt = Math.hypot(L[0] - j[0], L[1] - j[1], L[2] - j[2]);
          return `${wt.toFixed(3)} AU · ${Math.round(wt*499.005).toLocaleString("en-US")} light-s`
        }
      })
    }
    ut[m] && o.appendChild(N("This moon is drawn on a circular orbit scaled to the planet’s artistic size, so it stays visible. Its distance and period above are real; the geometry on screen is not.")), Tt[m] && o.appendChild(N("Mission paths are interpolated between real historical waypoints, not integrated trajectories. The dates and flybys are real; the curve between them is illustrative.")), m === "Sun" && K(), m === "Earth" && Z(), d.mode === "sky" && (m === "Sun" || m === "Moon" || q[m]) && o.appendChild(M(m)), o.appendChild(y())
  }

  function y() {
    const m = d.mode === "sky",
      E = x("button", "insp-action", m ? "Back to the sky" : "Back to the system");
    return E.addEventListener("click", () => {
      s.unfollow(), d.mode === "sky" ? T() : u()
    }), E
  }

  function g(m) {
    i = {
      kind: "small",
      name: m.name
    }, l = [], a.textContent = m.kind === "interstellar" ? "Interstellar visitor" : m.kind === "comet" ? "Comet" : m.kind === "dwarf" ? "Dwarf planet" : "Asteroid", r.textContent = m.name, o.textContent = "", m.note && o.appendChild(x("p", "blurb", m.note));
    const E = x("dl", "facts"),
      C = (L, j) => E.append(x("dt", null, L), x("dd", null, j));
    m.diameterKm && C("Diameter", m.diameterKm >= 1 ? `${m.diameterKm} km` : `${Math.round(m.diameterKm*1e3)} m`), C("Eccentricity", m.e.toFixed(4) + (_t(m) ? " — unbound" : "")), C("Perihelion", `${m.q.toFixed(3)} AU`), _t(m) || (C("Aphelion", `${(m.a*(1+m.e)).toFixed(3)} AU`), C("Period", m.period > 700 ? `${(m.period/365.25).toFixed(1)} years` : `${Math.round(m.period)} days`)), C("Inclination", `${m.i.toFixed(1)}°${m.i>90?" — retrograde":""}`), o.appendChild(E);
    const P = x("div", "insp-section");
    P.appendChild(x("h3", null, "Right now"));
    const D = x("dl", "facts"),
      A = x("dd"),
      z = x("dd");
    D.append(x("dt", null, "From the Sun"), A, x("dt", null, "From Earth"), z), P.appendChild(D), o.appendChild(P), l.push({
      el: A,
      getValue: () => `${Math.hypot(...Zt(m,d.currentJd)).toFixed(3)} AU`
    }, {
      el: z,
      getValue: () => {
        const L = Zt(m, d.currentJd),
          j = lt("Earth", d.currentJd),
          wt = Math.hypot(L[0] - j[0], L[1] - j[1], L[2] - j[2]);
        return wt < .02 ? `${Math.round(wt*to).toLocaleString("en-US")} km` : `${wt.toFixed(3)} AU`
      }
    });
    const J = us(m, d.currentJd);
    o.appendChild(N(`Propagated from a single set of JPL osculating elements published for ${F($(m.epoch))} — ${J<1?"this date is close to that epoch":`about ${Math.round(J)} years from this date`}. Two-body propagation drifts the further you go from the epoch, so treat distant dates as approximate.`));
    const H = x("button", "insp-action", "Track it");
    H.addEventListener("click", () => n(m.name)), o.appendChild(H), o.appendChild(y())
  }

  function f(m) {
    i = {
      kind: "neo",
      name: m.name
    }, l = [], a.textContent = "Near-Earth object · NASA live", r.textContent = m.name, o.textContent = "", o.appendChild(x("p", "blurb", m.blurb));
    const E = x("dl", "facts");
    for (const [C, P] of Object.entries(ys)) m.facts[C] && E.append(x("dt", null, P), x("dd", null, m.facts[C]));
    o.appendChild(E), o.appendChild(y())
  }

  function w(m) {
    const E = m.alt < .5 ? "on the horizon" : `up ${Math.round(m.alt)}°`;
    return m.status === "circumpolar" ? `${E} · never sets` : m.status === "never" ? "below the horizon all day" : m.up ? m.set ? `${E} · sets ${kt(m.set)}` : E : m.rise ? `rises ${kt(m.rise)}` : "below the horizon"
  }
  const k = m => Wt(m, d.lat, d.lon, d.currentJd, {
      observer: d.observer
    }),
    b = m => w(k(m));

  function S() {
    const m = Wt("Sun", d.lat, d.lon, d.currentJd, {
      observer: d.observer,
      h0Deg: -18
    });
    return m.status === "circumpolar" ? "No full darkness tonight: the Sun never gets 18° below the horizon here at this time of year." : m.status === "never" ? "Fully dark all day: the Sun stays more than 18° below the horizon." : m.up ? `Full darkness from ${kt(m.set)} to ${kt(m.rise)}.` : `Fully dark now, until ${kt(m.rise)}.`
  }

  function T() {
    i = {
      kind: "sky"
    }, l = [], a.textContent = `Sky from ${d.observer}`, r.textContent = "What is up there", o.textContent = "";
    const m = d.currentJd,
      E = Ln(m, d.observer),
      C = new Map(E.map(A => [A.name, Wt(A.name, d.lat, d.lon, m, {
        observer: d.observer
      })]));
    E.sort((A, z) => {
      const J = C.get(A.name),
        H = C.get(z.name);
      return J.up !== H.up ? J.up ? -1 : 1 : J.up ? H.alt - J.alt : (J.rise ?? 1 / 0) - (H.rise ?? 1 / 0)
    });
    const P = x("div", "body-list");
    for (const A of E) {
      const z = x("button", "body-row");
      z.type = "button", z.dataset.body = A.name, C.get(A.name).up || z.classList.add("is-down");
      const J = x("span", "dot");
      J.style.background = A.kind === "moon" ? "#d9d9d9" : Me((q[A.name] || gt).color);
      const H = x("span", "val", b(A.name));
      z.append(J, x("span", "nm", A.name), H), z.addEventListener("click", () => n(A.name)), P.appendChild(z), l.push({
        el: H,
        getValue: () => {
          const L = k(A.name);
          return z.classList.toggle("is-down", !L.up), w(L)
        }
      })
    }
    o.appendChild(P);
    const D = x("div", "note dark-note", S());
    l.push({
      el: D,
      getValue: S
    }), o.appendChild(D), o.appendChild(B()), o.appendChild(N(`Times are in ${so()}, your device's clock. Rise and set times include refraction and are good to a few minutes. Magnitudes ignore phase, so Venus and Mercury are indicative.`))
  }

  function M(m) {
    const E = x("div", "insp-section");
    E.appendChild(x("h3", null, "From here"));
    const C = x("dl", "facts"),
      P = x("dd"),
      D = x("dd"),
      A = x("dd"),
      z = x("dd");
    C.append(x("dt", null, "Altitude · azimuth"), P, x("dt", null, "Rises"), D, x("dt", null, "Highest"), A, x("dt", null, "Sets"), z), E.appendChild(C);
    const J = () => Wt(m, d.lat, d.lon, d.currentJd, {
        observer: d.observer
      }),
      H = [{
        el: P,
        getValue: () => {
          const L = J();
          return `${L.alt.toFixed(1)}° · ${no(L.az)} ${Math.round(L.az)}°`
        }
      }, {
        el: D,
        getValue: () => {
          const L = J();
          return L.status === "normal" ? kt(L.rise) : L.status === "circumpolar" ? "never sets" : "never rises"
        }
      }, {
        el: A,
        getValue: () => {
          const L = J();
          return L.transit ? kt(L.transit) : "—"
        }
      }, {
        el: z,
        getValue: () => {
          const L = J();
          return L.status === "normal" ? kt(L.set) : "—"
        }
      }];
    for (const L of H) L.el.textContent = L.getValue(), l.push(L);
    return E
  }

  function B() {
    const m = x("div", "insp-section");
    m.appendChild(x("h3", null, "Observing from"));
    const E = x("div", "latlon"),
      C = (D, A, z, J) => {
        const H = x("label", "latlon-field");
        H.appendChild(x("span", null, D));
        const L = document.createElement("input");
        return L.type = "number", L.step = "0.01", L.min = String(z), L.max = String(J), L.value = d[A].toFixed(2), L.addEventListener("change", () => {
          const j = parseFloat(L.value);
          if (!isFinite(j) || j < z || j > J) {
            L.value = d[A].toFixed(2);
            return
          }
          I({
            [A]: j
          }), T()
        }), H.appendChild(L), H
      };
    E.append(C("Latitude", "lat", -90, 90), C("Longitude", "lon", -180, 180)), m.appendChild(E);
    const P = x("button", "insp-action", "Use my location");
    return P.addEventListener("click", () => {
      if (!navigator.geolocation) {
        P.textContent = "Location is unavailable in this browser";
        return
      }
      P.textContent = "Asking the browser…", navigator.geolocation.getCurrentPosition(D => {
        I({
          lat: +D.coords.latitude.toFixed(4),
          lon: +D.coords.longitude.toFixed(4)
        }), T()
      }, () => {
        P.textContent = "Location permission was declined"
      }, {
        timeout: 1e4,
        maximumAge: 6e5
      })
    }), m.appendChild(P), m
  }

  function N(m) {
    const E = x("div", "note");
    return E.textContent = m, E
  }

  function K() {
    const m = x("div", "insp-section");
    m.appendChild(x("h3", null, "Solar activity · NASA live"));
    const E = x("div", "blurb", "Loading…");
    m.appendChild(E), o.appendChild(m), Xs().then(C => {
      i.name !== "Sun" || !E.isConnected || (E.textContent = C === "error" ? "Flare data unavailable right now." : C ? `Most recent flare: class ${C.classType} on ${(C.peakTime||"").slice(0,10)}.` : "No major flares recorded in the last 30 days.")
    })
  }

  function Z() {
    const m = F($(d.currentJd)),
      E = x("div", "insp-section");
    E.appendChild(x("h3", null, "Earth on this date · DSCOVR"));
    const C = x("div");
    C.appendChild(x("div", "img-loading", "Looking for a full-disc image…")), E.appendChild(C), o.appendChild(E), Qs(m).then(P => {
      if (i.name !== "Earth" || !C.isConnected) return;
      if (C.textContent = "", P === "error") {
        C.appendChild(N("EPIC imagery unavailable right now."));
        return
      }
      if (!P) {
        C.appendChild(N(m < "2015-06-13" ? "DSCOVR reached its orbit in June 2015 — there is no full-disc image of Earth for this date." : "No image was published for this date."));
        return
      }
      const D = x("figure", "img-card"),
        A = x("img");
      A.src = P.url, A.alt = `Earth on ${m} from DSCOVR/EPIC`, A.loading = "lazy";
      const z = x("figcaption", null, `${P.count} frames that day · NASA EPIC / DSCOVR`);
      D.append(A, z), C.appendChild(D)
    })
  }

  function bt() {
    for (const m of o.querySelectorAll(".body-row")) m.classList.toggle("active", m.dataset.body === d.follow)
  }
  V("follow", bt);
  let ot = 0;

  function W(m) {
    if (!(m - ot < 250)) {
      ot = m;
      for (const E of l) {
        const C = E.getValue();
        E.el.textContent !== C && (E.el.textContent = C)
      }
      if (i.kind === "overview") {
        const E = F($(d.currentJd));
        r.textContent !== E && (r.textContent = E)
      }
    }
  }
  return {
    show(m) {
      document.body.classList.remove("insp-closed"), m ? p(m) : u()
    },
    overview: u,
    sky: T,
    refresh() {
      i.kind === "overview" ? u() : i.kind === "sky" && T()
    },
    update: W,
    get context() {
      return i
    }
  }
}

function cn(s, t) {
  const e = s.toLowerCase(),
    n = t.toLowerCase();
  if (!e) return 0;
  if (n.startsWith(e)) return 1e3 - n.length;
  const o = n.indexOf(e);
  if (o >= 0) return 600 - o - n.length * .1;
  let a = 0,
    r = 0,
    i = 0;
  for (let l = 0; l < n.length && a < e.length; l++) n[l] === e[a] ? (a++, i++, r += i * 2) : i = 0;
  return a === e.length ? r : -1
}

function ao({
  onSelect: s,
  onCommand: t,
  getStories: e
}) {
  const n = document.getElementById("palette"),
    o = document.getElementById("pal-input"),
    a = document.getElementById("pal-results");
  let r = [],
    i = 0;

  function l() {
    const f = [],
      w = (b, S) => ({
        group: "Bodies",
        icon: "◍",
        title: b,
        detail: S,
        run: () => s(b)
      });
    f.push(w("Sun", "star"));
    for (const b of Object.keys(q)) f.push(w(b, b === "Pluto" ? "dwarf planet" : "planet"));
    for (const b of Object.keys(yt)) f.push(w(b, "dwarf planet"));
    for (const b of Object.keys(ut)) f.push(w(b, `moon of ${ut[b].parent}`));
    for (const b of Object.keys(Tt)) f.push(w(b, "mission"));
    for (const b of Ne) f.push({
      group: "Small bodies",
      icon: b.kind === "comet" ? "☄" : b.kind === "interstellar" ? "⇢" : "·",
      title: b.name,
      detail: b.kind === "interstellar" ? "interstellar" : b.kind,
      keywords: `${b.id} ${b.alias||""}`,
      run: () => {
        I({
          smallBodies: !0
        }), s(b.name)
      }
    });
    for (const b of e()) f.push({
      group: "Stories",
      icon: "▶",
      title: b.title,
      detail: b.when,
      run: () => t("story", b.id)
    });
    const k = (b, S) => ({
      group: "Layers",
      icon: "◇",
      title: S,
      detail: () => d[b] ? "on" : "off",
      run: () => {
        I({
          [b]: !d[b]
        }), G(`${S}: ${d[b]?"on":"off"}`)
      }
    });
    return f.push(k("trails", "Orbit trails"), k("belt", "Asteroid belt"), k("moons", "Moons"), k("minor", "Dwarf planets"), k("comet", "Halley's Comet"), k("smallBodies", "Real asteroids"), k("neo", "Near-Earth objects this week"), k("missions", "Mission paths"), k("stars", "Starfield"), k("labels", "Labels"), k("trueScale", "True-to-scale sizes")), f.push({
      group: "View",
      icon: "◎",
      title: "Orrery view",
      detail: "from above",
      run: () => t("mode", "orrery")
    }, {
      group: "View",
      icon: "✦",
      title: "Sky view",
      detail: "from the ground",
      run: () => t("mode", "sky")
    }, {
      group: "View",
      icon: "❑",
      title: "Atlas",
      detail: "read the system",
      run: () => t("mode", "atlas")
    }, {
      group: "View",
      icon: "⇱",
      title: "Top / side view",
      run: () => t("topview")
    }, {
      group: "View",
      icon: "◐",
      title: "Hide the interface",
      detail: "C",
      run: () => t("chrome")
    }, {
      group: "Export",
      icon: "⇩",
      title: "Save a poster (PNG)",
      run: () => t("export", "poster")
    }, {
      group: "Export",
      icon: "⇩",
      title: "Record a clip (WebM)",
      run: () => t("export", "video")
    }, {
      group: "Export",
      icon: "⇩",
      title: "Download positions (CSV)",
      run: () => t("export", "csv")
    }, {
      group: "Export",
      icon: "⇩",
      title: "Download positions (JSON)",
      run: () => t("export", "json")
    }, {
      group: "Export",
      icon: "⧉",
      title: "Copy a link to this view",
      run: () => t("export", "link")
    }, {
      group: "Export",
      icon: "⧉",
      title: "Copy an embed snippet",
      run: () => t("export", "embed")
    }, {
      group: "Time",
      icon: "⏱",
      title: "Play / pause",
      detail: "space",
      run: () => t("play")
    }, {
      group: "Time",
      icon: "⏱",
      title: "Jump to today",
      run: () => t("today")
    }, {
      group: "Help",
      icon: "?",
      title: "How it works",
      run: () => t("guide")
    }, {
      group: "Help",
      icon: "⚿",
      title: "Set a NASA API key",
      detail: "for live data",
      run: () => t("nasakey")
    }), f
  }
  let c = [];

  function u(f) {
    a.textContent = "", r = [];
    const w = Pt(f.trim());
    if (w) {
      const S = dt(w),
        T = S >= d.startJd && S <= d.endJd;
      r.push({
        group: "Jump",
        icon: "→",
        title: `Go to ${F(w)}`,
        detail: T ? "" : "outside the current range",
        run: () => {
          if (!T) {
            G(`${F(w)} is outside ${F($(d.startJd))} → ${F($(d.endJd))}.`);
            return
          }
          t("jump", S)
        }
      })
    }
    const k = [];
    for (const S of c) {
      if (!f) {
        k.push({
          e: S,
          s: 0
        });
        continue
      }
      const T = Math.max(cn(f, S.title), S.keywords ? cn(f, S.keywords) - 50 : -1);
      T > -1 && k.push({
        e: S,
        s: T
      })
    }
    if (f && k.sort((S, T) => T.s - S.s), r.push(...k.slice(0, 40).map(S => S.e)), !r.length) {
      a.appendChild(Object.assign(document.createElement("div"), {
        className: "pal-empty",
        textContent: "Nothing matches that."
      }));
      return
    }
    let b = null;
    r.forEach((S, T) => {
      if (S.group !== b) {
        b = S.group;
        const Z = document.createElement("div");
        Z.className = "pal-group", Z.textContent = b, a.appendChild(Z)
      }
      const M = document.createElement("button");
      M.type = "button", M.className = "pal-row", M.setAttribute("role", "option"), M.setAttribute("aria-selected", String(T === i));
      const B = document.createElement("span");
      B.className = "pr-ic", B.textContent = S.icon;
      const N = document.createElement("span");
      N.className = "pr-t", N.textContent = S.title;
      const K = document.createElement("span");
      K.className = "pr-d", K.textContent = typeof S.detail == "function" ? S.detail() : S.detail || "", M.append(B, N, K), M.addEventListener("click", () => p(T)), M.addEventListener("pointermove", () => {
        i = T, h()
      }), a.appendChild(M)
    }), h()
  }

  function h() {
    const f = [...a.querySelectorAll(".pal-row")];
    f.forEach((w, k) => w.setAttribute("aria-selected", String(k === i))), f[i]?.scrollIntoView({
      block: "nearest"
    })
  }

  function p(f) {
    const w = r[f];
    w && (g(), w.title, w.run())
  }

  function y() {
    c = l(), i = 0, o.value = "", u(""), n.classList.add("open"), o.focus()
  }

  function g() {
    n.classList.remove("open")
  }
  return o.addEventListener("input", () => {
    i = 0, u(o.value)
  }), o.addEventListener("keydown", f => {
    f.key === "ArrowDown" ? (f.preventDefault(), i = Math.min(i + 1, r.length - 1), h()) : f.key === "ArrowUp" ? (f.preventDefault(), i = Math.max(i - 1, 0), h()) : f.key === "Enter" ? (f.preventDefault(), p(i)) : f.key === "Escape" && (f.preventDefault(), g())
  }), n.addEventListener("click", f => {
    f.target === n && g()
  }), document.getElementById("btn-search").addEventListener("click", y), {
    open: y,
    close: g,
    isOpen: () => n.classList.contains("open")
  }
}
const fe = [{
  id: "apophis-2029",
  when: "2029",
  title: "The asteroid that comes inside our satellites",
  sub: "Apophis, 340 m across, passes closer to Earth than the geostationary belt.",
  range: ["2029-03-20", "2029-05-05"],
  at: "2029-04-10",
  follow: "99942 Apophis (2004 MN4)",
  layers: {
    smallBodies: !0,
    trails: !0,
    moons: !0
  },
  dps: .6,
  beats: [{
    t: 0,
    text: "April 2029. A rock the size of a cruise ship is closing on Earth."
  }, {
    t: 7,
    text: "JPL puts the closest approach on 13 April 2029 at about 31,600 km from Earth’s centre. This app, propagating the published elements itself, gets close to that."
  }, {
    t: 15,
    text: "Geostationary satellites orbit at 42,164 km. Apophis passes beneath them — and will be visible to the naked eye from Europe and Africa."
  }, {
    t: 24,
    text: "It was discovered in 2004 and briefly carried the highest impact risk ever recorded, before better observations ruled 2029 out entirely."
  }]
}, {
  id: "oumuamua-2017",
  when: "2017",
  title: "Something arrived from outside",
  sub: "1I/'Oumuamua — the first object confirmed to come from another star.",
  range: ["2017-07-01", "2018-03-01"],
  at: "2017-09-05",
  follow: "'Oumuamua (A/2017 U1)",
  layers: {
    smallBodies: !0,
    trails: !0
  },
  dps: 1.6,
  beats: [{
    t: 0,
    text: "In October 2017 a survey telescope in Hawaii caught something moving too fast to belong here."
  }, {
    t: 8,
    text: "Its orbit has an eccentricity of 1.20. Above 1.0 an orbit no longer closes — this one is an open curve, a single pass through the Solar System."
  }, {
    t: 16,
    text: "It rounded the Sun on 9 September 2017 and passed 0.16 AU from Earth on 14 October, already on its way out."
  }, {
    t: 25,
    text: "It is still leaving, and will never come back."
  }]
}, {
  id: "halley-1986",
  when: "1986",
  title: "Halley, the last time",
  sub: "The most famous comet swings through the inner system and five spacecraft go to meet it.",
  range: ["1985-09-01", "1986-08-01"],
  at: "1985-12-01",
  follow: "Halley's Comet",
  layers: {
    comet: !0,
    trails: !0
  },
  dps: 1.2,
  beats: [{
    t: 0,
    text: "Halley returns every 76 years. In 1986 humanity was finally able to send hardware to meet it."
  }, {
    t: 8,
    text: "Perihelion came on 9 February 1986 — closer to the Sun than Venus."
  }, {
    t: 16,
    text: "On 14 March, Giotto flew through the coma and photographed the nucleus from 596 km away: a dark, peanut-shaped body about 15 km long."
  }, {
    t: 25,
    text: "Its orbit runs backwards around the Sun — inclination 162°, which is why it meets the planets head-on."
  }]
}, {
  id: "halley-2061",
  when: "2061",
  title: "Waiting for Halley",
  sub: "The next perihelion — the first return most people alive today will see.",
  range: ["2060-06-01", "2062-06-01"],
  at: "2061-01-01",
  follow: "Halley's Comet",
  layers: {
    comet: !0,
    trails: !0
  },
  dps: 2.4,
  beats: [{
    t: 0,
    text: "Halley is due back around July 2061, and this time it will be far better placed than in 1986."
  }, {
    t: 9,
    text: "The elements driving this scene were published in 1968, so the app’s own timing drifts by months against the modern prediction. The inspector says so rather than hiding it."
  }, {
    t: 18,
    text: "Watch it fall in from beyond Neptune’s distance, round the Sun, and climb back out."
  }]
}, {
  id: "voyager-tour",
  when: "1977–89",
  title: "The Grand Tour",
  sub: "A planetary alignment that recurs every 176 years, and the two probes that used it.",
  range: ["1977-06-01", "1992-01-01"],
  at: "1977-08-20",
  layers: {
    missions: !0,
    trails: !0
  },
  dps: 30,
  beats: [{
    t: 0,
    text: "The outer planets lined up in a way that repeats roughly every 176 years. Voyager 2 launched on 20 August 1977 to use it."
  }, {
    t: 9,
    text: "Jupiter in 1979, Saturn in 1981, Uranus in 1986, Neptune in 1989 — the only spacecraft ever to visit all four."
  }, {
    t: 20,
    text: "The paths drawn here are interpolated between real historical waypoints. The dates are real; the curve between them is illustrative."
  }]
}, {
  id: "great-conjunction",
  when: "2020",
  title: "Jupiter and Saturn, a tenth of a degree apart",
  sub: "The closest great conjunction since 1623 — the two giants almost touching in the sky.",
  range: ["2020-10-01", "2021-03-01"],
  at: "2020-12-10",
  layers: {
    trails: !0
  },
  dps: .9,
  mode: "sky",
  beats: [{
    t: 0,
    text: "Jupiter laps Saturn about every twenty years. In December 2020 they came closer than they had since 1623."
  }, {
    t: 9,
    text: "This app computes the minimum separation at 0.10° — roughly a fifth of the width of a full Moon."
  }, {
    t: 18,
    text: "They were never actually near each other: Jupiter sat around 5 AU away, Saturn around 10. Only the line of sight lined up."
  }]
}, {
  id: "mars-2027",
  when: "2027",
  title: "Mars at its closest",
  sub: "Opposition on 19 February 2027 — Earth passes between Mars and the Sun.",
  range: ["2026-09-01", "2027-08-01"],
  at: "2027-01-10",
  follow: "Mars",
  layers: {
    trails: !0,
    moons: !0
  },
  dps: 1.4,
  beats: [{
    t: 0,
    text: "Earth catches up with Mars about every 26 months. The overtaking moment is opposition."
  }, {
    t: 8,
    text: "This app puts it on 19 February 2027, with Mars almost exactly opposite the Sun in our sky."
  }, {
    t: 16,
    text: "Watch from above and the retrograde loop makes sense: Mars only appears to move backwards because we are passing it on the inside."
  }]
}, {
  id: "two-millennia",
  when: "1 → 2027",
  title: "Two thousand years in two minutes",
  sub: "The whole system, wound forward from the first century to now.",
  range: ["0001-01-01", "2027-01-01"],
  at: "0001-01-01",
  layers: {
    trails: !0,
    minor: !0
  },
  dps: 6e3,
  beats: [{
    t: 0,
    text: "Two thousand years of orbits, at about sixteen years a second."
  }, {
    t: 10,
    text: "The outer planets barely move: Neptune needs 165 years for a single lap, so it manages twelve in the whole run."
  }, {
    t: 20,
    text: "The readout keeps saying which accuracy regime you are in. Out here it is the long fit — good to about a degree, not to the arcminute."
  }]
}];

function io({
  onPlay: s
}) {
  const t = document.getElementById("stories"),
    e = document.getElementById("st-list"),
    n = document.getElementById("narration"),
    o = document.getElementById("nar-text");
  let a = null,
    r = 0,
    i = 0;

  function l() {
    e.textContent = "";
    for (const g of fe) {
      const f = document.createElement("button");
      f.type = "button", f.className = "st-item";
      const w = document.createElement("div");
      w.className = "si-when", w.textContent = g.when;
      const k = document.createElement("div");
      k.className = "si-title", k.textContent = g.title;
      const b = document.createElement("div");
      b.className = "si-sub", b.textContent = g.sub, f.append(w, k, b), f.addEventListener("click", () => {
        u(), s(g)
      }), e.appendChild(f)
    }
  }

  function c() {
    t.classList.add("open"), document.body.classList.add("stories-open")
  }

  function u() {
    t.classList.remove("open"), document.body.classList.remove("stories-open")
  }
  document.getElementById("btn-stories").addEventListener("click", () => {
    t.classList.contains("open") ? u() : c()
  }), document.getElementById("st-close").addEventListener("click", u), document.getElementById("nar-stop").addEventListener("click", () => p());

  function h(g) {
    !g.beats || !g.beats.length || (a = g.beats, r = 0, i = 0, document.body.classList.add("narrating"), o.textContent = a[0].text, r = 1, g.id, void 0)
  }

  function p() {
    a = null, document.body.classList.remove("narrating")
  }

  function y(g) {
    if (a) {
      for (i += g; r < a.length && i >= a[r].t;) o.textContent = a[r].text, n.animate?.([{
        opacity: .35
      }, {
        opacity: 1
      }], {
        duration: 320,
        easing: "cubic-bezier(0.16,1,0.3,1)"
      }), r++;
      r >= a.length && i > a[a.length - 1].t + 14 && p()
    }
  }
  return l(), {
    open: c,
    close: u,
    startNarration: h,
    stopNarration: p,
    updateNarration: y,
    get(g) {
      return fe.find(f => f.id === g)
    }
  }
}

function _e(s) {
  return {
    start: Pt(s.range[0]),
    end: Pt(s.range[1]),
    atJd: s.at ? dt(Pt(s.at)) : null
  }
}
const dn = "solar.tourSeen",
  ce = [{
    target: "#transport",
    place: "above",
    title: "Time lives here",
    text: "Play, run backwards, drag to any date. The speed is in real units — hours per second up to about ten years per second."
  }, {
    target: "#inspector",
    place: "left",
    title: "Click anything",
    text: "Pick a planet in the scene or in this list and it becomes the subject: real distances, real facts, and the image NASA published on that date."
  }, {
    target: "#modes",
    place: "below",
    title: "Three ways to look",
    text: "Orrery is the view from above. Sky turns it inside out and shows the constellations as they actually stood. Atlas reads the system chapter by chapter."
  }, {
    target: "#btn-search",
    place: "below",
    title: "Everything is one key away",
    text: "Press ⌘K (or ctrl K) to search every body, jump to a date, toggle a layer, play a story or run an export."
  }];

function ro() {
  const s = document.getElementById("tour");
  let t = 0;

  function e() {
    try {
      return localStorage.getItem(dn) === "1"
    } catch {
      return !0
    }
  }

  function n() {
    try {
      localStorage.setItem(dn, "1")
    } catch {}
  }

  function o() {
    const r = ce[t],
      i = document.querySelector(r.target);
    if (!i) {
      a();
      return
    }
    const l = i.getBoundingClientRect();
    s.textContent = "";
    const c = document.createElement("div");
    c.className = "tour-spot";
    const u = 6;
    c.style.left = `${l.left-u}px`, c.style.top = `${l.top-u}px`, c.style.width = `${l.width+u*2}px`, c.style.height = `${l.height+u*2}px`, s.appendChild(c);
    const h = document.createElement("div");
    h.className = "tour-card";
    const p = document.createElement("div");
    p.className = "tour-step", p.textContent = `Step ${t+1} of ${ce.length}`;
    const y = document.createElement("div");
    y.className = "tour-title", y.textContent = r.title;
    const g = document.createElement("div");
    g.className = "tour-text", g.textContent = r.text;
    const f = document.createElement("div");
    f.className = "tour-foot";
    const w = document.createElement("button");
    w.className = "tour-skip", w.textContent = "Skip", w.addEventListener("click", a);
    const k = document.createElement("button");
    k.className = "tour-next", k.textContent = t === ce.length - 1 ? "Got it" : "Next", k.addEventListener("click", () => {
      t++, t >= ce.length ? a() : o()
    }), f.append(w, k), h.append(p, y, g, f), s.appendChild(h);
    const b = 262,
      S = h.offsetHeight || 160,
      T = 14;
    let M = l.left,
      B = l.bottom + T;
    r.place === "above" ? (B = l.top - S - T, M = l.left + l.width / 2 - b / 2) : r.place === "left" ? (M = l.left - b - T, B = l.top) : r.place === "below" && (M = l.left + l.width / 2 - b / 2), h.style.left = `${Math.max(12,Math.min(M,innerWidth-b-12))}px`, h.style.top = `${Math.max(12,Math.min(B,innerHeight-S-12))}px`
  }

  function a() {
    s.classList.remove("open"), s.textContent = "", n()
  }
  return addEventListener("resize", () => {
    s.classList.contains("open") && o()
  }), {
    maybeStart() {
      return e() ? !1 : matchMedia("(prefers-reduced-motion: reduce)").matches ? (n(), !1) : (t = 0, s.classList.add("open"), setTimeout(o, 700), !0)
    },
    start() {
      t = 0, s.classList.add("open"), o()
    },
    finish: a
  }
}
const Ie = [{
  id: "sun",
  follow: "Sun",
  layers: {},
  title: "One star, and the rounding error around it",
  paras: ["The Sun holds <b>99.86%</b> of all the mass in the Solar System. Everything else — every planet, moon, asteroid and comet — divides the remaining fraction of a percent between them.", "Jupiter takes most of what is left. If you removed it, the rest of the planets together would not add up to half its mass."],
  stats: [
    ["Share of system mass", "99.86%"],
    ["Surface temperature", "5,500 °C"]
  ]
}, {
  id: "inner",
  follow: "Mercury",
  layers: {
    trails: !0
  },
  title: "Four worlds made of rock",
  paras: ["Mercury, Venus, Earth and Mars formed close enough to the young Sun that ice could not survive there. What was left to build with was metal and silicate — so the inner planets are small, dense and slow to change.", "They are also crowded together. All four orbit inside 1.6 AU; the gap between Mars and Jupiter alone is wider than everything that came before it."],
  stats: [
    ["Mercury year", "88 days"],
    ["Venus day", "243 days"]
  ]
}, {
  id: "belt",
  follow: "Ceres",
  layers: {
    belt: !0,
    minor: !0,
    smallBodies: !0
  },
  title: "The belt is mostly empty",
  paras: ["The asteroid belt looks dense in every illustration, including this one. It is not. Spread across a ring two astronomical units wide, the typical separation between objects is on the order of a million kilometres.", "Every spacecraft sent to the outer planets has crossed it without a single close call. The total mass of the belt is about <b>4%</b> of the Moon."],
  stats: [
    ["Belt mass vs the Moon", "≈4%"],
    ["Largest body", "Ceres, 940 km"]
  ]
}, {
  id: "jupiter",
  follow: "Jupiter",
  layers: {
    moons: !0
  },
  title: "A planet that nearly became a star",
  paras: ["Jupiter is 318 times the mass of Earth and still nowhere near enough. Fusion needs roughly <b>80 times</b> Jupiter’s mass; it fell short by two orders of magnitude and settled for being a planet.", "Its four largest moons were the first objects seen orbiting something other than Earth. Galileo watched them move over four nights in 1610 and the geocentric model never recovered."],
  stats: [
    ["Mass vs Earth", "318×"],
    ["Day length", "9.9 hours"]
  ]
}, {
  id: "saturn",
  follow: "Saturn",
  layers: {
    moons: !0
  },
  title: "Rings thinner than they have any right to be",
  paras: ["Saturn’s rings span about 280,000 km and are, in most places, no more than <b>ten metres</b> thick. Scaled to the width of a football pitch, they would be far thinner than a sheet of paper.", "They are also young. Cassini’s measurements suggest they formed within the last few hundred million years — long after the dinosaurs’ ancestors appeared, and possibly on their way out again."],
  stats: [
    ["Ring span", "≈280,000 km"],
    ["Ring thickness", "≈10 m"]
  ]
}, {
  id: "ice",
  follow: "Uranus",
  layers: {
    trails: !0
  },
  title: "Two planets almost nobody has visited",
  paras: ["Uranus and Neptune have each been seen up close exactly once, by Voyager 2 in 1986 and 1989. Everything else we know comes from telescopes.", "Uranus rolls on its side at a <b>98° tilt</b>, so each pole spends 42 years in continuous sunlight and 42 in darkness. Neptune, further out and colder, drives the fastest winds in the Solar System at around 2,100 km/h."],
  stats: [
    ["Uranus axial tilt", "98°"],
    ["Neptune winds", "2,100 km/h"]
  ]
}, {
  id: "beyond",
  follow: "Pluto",
  layers: {
    minor: !0
  },
  title: "Where the planets run out",
  paras: ["Beyond Neptune the Kuiper Belt begins: a broad disc of icy bodies of which Pluto is only the best known. Finding Eris out there in 2005 — more massive than Pluto — forced the question of what counts as a planet.", "Pluto’s orbit is tilted <b>17°</b> and eccentric enough that it spent 1979 to 1999 inside Neptune’s. They will never collide: they are locked in a resonance, three Neptune orbits for every two of Pluto’s."],
  stats: [
    ["Pluto year", "248 years"],
    ["Orbital resonance", "3:2 with Neptune"]
  ]
}, {
  id: "visitors",
  follow: "'Oumuamua (A/2017 U1)",
  layers: {
    comet: !0,
    smallBodies: !0
  },
  title: "And the things passing through",
  paras: ["Comets fall in from the cold, brighten as they round the Sun, and leave again. Halley does it every 76 years; Encke every 3.3.", "Twice now we have caught something on a path that does not close at all. <b>1I/’Oumuamua</b> in 2017 and <b>2I/Borisov</b> in 2019 came in from interstellar space, rounded the Sun once, and left for good — the only two visitors we have ever confirmed from another star."],
  stats: [
    ["'Oumuamua eccentricity", "1.20"],
    ["Borisov eccentricity", "3.36"]
  ]
}];

function lo({
  onChapter: s,
  onExit: t
}) {
  const e = document.getElementById("atlas");
  let n = !1,
    o = null;

  function a() {
    e.textContent = "";
    const i = document.createElement("div");
    i.className = "at-inner";
    const l = document.createElement("button");
    l.type = "button", l.className = "at-exit", l.textContent = "← Back to the orrery", l.addEventListener("click", () => t()), i.appendChild(l);
    const c = document.createElement("div");
    c.className = "at-lead";
    const u = document.createElement("h2");
    u.textContent = "Eight chapters, one system";
    const h = document.createElement("p");
    h.textContent = "The simulation keeps running behind this column. Scroll, and it moves with you.", c.append(u, h), i.appendChild(c), Ie.forEach((g, f) => {
      const w = document.createElement("section");
      w.className = "at-chapter", w.dataset.id = g.id;
      const k = document.createElement("div");
      k.className = "at-num", k.textContent = String(f + 1).padStart(2, "0");
      const b = document.createElement("h3");
      b.textContent = g.title, w.append(k, b);
      for (const S of g.paras) {
        const T = document.createElement("p");
        for (const M of S.split(/(<b>.*?<\/b>)/g))
          if (M)
            if (M.startsWith("<b>")) {
              const B = document.createElement("b");
              B.textContent = M.slice(3, -4), T.appendChild(B)
            } else T.appendChild(document.createTextNode(M));
        w.appendChild(T)
      }
      if (g.stats) {
        const S = document.createElement("div");
        S.className = "at-stat";
        for (const [T, M] of g.stats) {
          const B = document.createElement("div"),
            N = document.createElement("span");
          N.textContent = T;
          const K = document.createElement("b");
          K.textContent = M, B.append(N, K), S.appendChild(B)
        }
        w.appendChild(S)
      }
      i.appendChild(w)
    });
    const p = document.createElement("div");
    p.className = "at-end", p.textContent = "That is the tour. Take the controls back whenever you like.", i.appendChild(p);
    const y = document.createElement("button");
    y.type = "button", y.className = "insp-action", y.style.maxWidth = "260px", y.textContent = "Back to the orrery", y.addEventListener("click", () => t()), i.appendChild(y), e.appendChild(i), n = !0
  }

  function r() {
    const i = innerHeight * .42;
    let l = null,
      c = 1 / 0;
    for (const u of e.querySelectorAll(".at-chapter")) {
      const h = u.getBoundingClientRect(),
        p = Math.abs(h.top + h.height / 2 - i);
      p < c && (c = p, l = u)
    }
    for (const u of e.querySelectorAll(".at-chapter")) u.classList.toggle("active", u === l);
    if (l && l.dataset.id !== o) {
      o = l.dataset.id;
      const u = Ie.find(h => h.id === o);
      u && (u.layers && I(u.layers), s(u), u.id, void 0)
    }
  }
  return e.addEventListener("scroll", r, {
    passive: !0
  }), {
    enter() {
      n || a(), e.scrollTop = 0, o = null, setTimeout(r, 60)
    },
    exit() {
      o = null
    },
    chapters: Ie
  }
}

function co() {
  return !0
}
const uo = {
  high: "JPL short fit · arcminute-level",
  good: "JPL long fit · about a degree",
  extrapolated: "beyond the published fits · schematic"
};

function be(s, t) {
  const e = URL.createObjectURL(s),
    n = document.createElement("a");
  n.href = e, n.download = t, n.click(), setTimeout(() => URL.revokeObjectURL(e), 4e3)
}

function _n(s, t) {
  const e = document.getElementById("labels-root");
  if (!(!e || getComputedStyle(e).display === "none")) {
    s.save(), s.textBaseline = "alphabetic";
    for (const n of e.querySelectorAll(".body-label")) {
      const o = n.getBoundingClientRect();
      if (!o.width) continue;
      const a = n.classList.contains("label-sm");
      s.font = `500 ${(a?10:11.5)*t}px Inter, system-ui, sans-serif`, s.fillStyle = a ? "rgba(235,235,238,0.72)" : "rgba(235,235,238,0.9)", s.shadowColor = "rgba(0,0,0,0.9)", s.shadowBlur = 5 * t, s.fillText(n.textContent, o.left * t, (o.top + o.height * .8) * t)
    }
    s.restore()
  }
}
async function ho(s) {
  const {
    w: t,
    h: e,
    pr: n
  } = s.viewportSize(), o = Math.min(8192, s.renderer.capabilities.maxTextureSize || 8192), a = co() ? 2 : 1, r = Math.max(1, Math.min(a, o / (t * n), o / (e * n)));
  r !== 1 && (s.renderer.setSize(t * r, e * r, !1), s.composer.setSize(t * r, e * r), s.camera.updateProjectionMatrix()), s.composer.render();
  const i = Math.round(t * r * n),
    l = Math.round(e * r * n),
    c = Math.round(96 * r * n),
    u = document.createElement("canvas");
  u.width = i, u.height = l + c;
  const h = u.getContext("2d");
  h.fillStyle = "#050506", h.fillRect(0, 0, u.width, u.height), h.drawImage(s.renderer.domElement, 0, 0, i, l), h.save(), h.scale(n * r, n * r), _n(h, 1), h.restore();
  const p = F($(d.currentJd)),
    y = r * n;
  h.fillStyle = "#050506", h.fillRect(0, l, u.width, c), h.fillStyle = "rgba(255,255,255,0.10)", h.fillRect(Math.round(28 * y), l, u.width - Math.round(56 * y), Math.max(1, Math.round(y))), h.fillStyle = "#f2f2f0", h.font = `600 ${Math.round(26*y)}px "Space Mono", ui-monospace, monospace`, h.fillText(p, Math.round(28 * y), l + Math.round(46 * y)), h.fillStyle = "#74747e", h.font = `400 ${Math.round(12*y)}px Inter, system-ui, sans-serif`, h.fillText(`Heliocentric positions · ${uo[me(d.currentJd)]}`, Math.round(28 * y), l + Math.round(70 * y));
  const g = "Solar System in Motion · orbits from JPL SSD · maps CC BY 4.0 Solar System Scope";
  h.textAlign = "right", h.fillText(g, u.width - Math.round(28 * y), l + Math.round(70 * y)), h.textAlign = "left", r !== 1 && (s.renderer.setSize(t, e, !1), s.composer.setSize(t, e), s.camera.updateProjectionMatrix(), s.composer.render()), await new Promise(f => u.toBlob(w => {
    be(w, `solar-system-${p}.png`), f()
  }, "image/png")), G("Poster saved.")
}

function po(s, {
  onDone: t
}) {
  if (typeof MediaRecorder > "u") return G("This browser cannot record video."), null;
  const {
    w: e,
    h: n,
    pr: o
  } = s.viewportSize(), a = Math.round(e * o), r = Math.round(n * o), i = document.createElement("canvas");
  i.width = a, i.height = r;
  const l = i.getContext("2d"),
    c = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"].find(w => MediaRecorder.isTypeSupported(w));
  if (!c) return G("This browser cannot record WebM."), null;
  const u = i.captureStream(0),
    h = u.getVideoTracks()[0],
    p = new MediaRecorder(u, {
      mimeType: c,
      videoBitsPerSecond: 12e6
    }),
    y = [];
  p.ondataavailable = w => {
    w.data.size && y.push(w.data)
  }, p.onstop = () => {
    const w = new Blob(y, {
      type: "video/webm"
    });
    be(w, `solar-system-${F($(d.currentJd))}.webm`), t?.(w)
  }, p.start();
  let g = 0,
    f = !1;
  return {
    captureFrame() {
      return f ? 0 : (l.drawImage(s.renderer.domElement, 0, 0, a, r), l.save(), l.scale(o, o), _n(l, 1), l.restore(), h.requestFrame?.(), ++g)
    },
    get frames() {
      return g
    },
    stop() {
      f || (f = !0, p.state !== "inactive" && p.stop())
    }
  }
}

function In(s) {
  const t = [],
    e = ft.slice(),
    n = d.smallBodies ? Ne.filter(r => r.kind !== "dwarf") : [],
    o = d.endJd - d.startJd,
    a = Math.min(2e4, Math.max(1, Math.floor(o / s)));
  for (let r = 0; r <= a; r++) {
    const i = d.startJd + r * s;
    if (i > d.endJd) break;
    const l = F($(i));
    for (const c of e) {
      const u = lt(c, i);
      t.push({
        date: l,
        jd: i,
        body: c,
        x: u[0],
        y: u[1],
        z: u[2],
        r: Math.hypot(u[0], u[1], u[2])
      })
    }
    for (const c of n) {
      const u = Zt(c, i);
      t.push({
        date: l,
        jd: i,
        body: c.name,
        x: u[0],
        y: u[1],
        z: u[2],
        r: Math.hypot(u[0], u[1], u[2])
      })
    }
  }
  return t
}
const zn = () => {
  const s = d.endJd - d.startJd;
  return s <= 400 ? 1 : s <= 4e3 ? 7 : s <= 4e4 ? 30 : Math.ceil(s / 4e3)
};

function mo() {
  const s = zn(),
    t = In(s),
    e = "date,julian_date,body,x_au,y_au,z_au,r_au",
    n = t.map(a => `${a.date},${a.jd.toFixed(4)},"${a.body}",${a.x.toFixed(8)},${a.y.toFixed(8)},${a.z.toFixed(8)},${a.r.toFixed(8)}`),
    o = ["# Solar System in Motion — heliocentric ecliptic J2000 coordinates, AU", `# range ${F($(d.startJd))} to ${F($(d.endJd))}, step ${s} day(s)`, "# planets: JPL approximate elements with secular rates (Standish)", "# small bodies: JPL SBDB osculating elements, two-body propagation"];
  be(new Blob([
    [...o, e, ...n].join(`
`)
  ], {
    type: "text/csv"
  }), `solar-positions-${F($(d.startJd))}.csv`), G(`${t.length.toLocaleString("en-US")} rows exported at ${s}-day steps.`)
}

function fo() {
  const s = zn(),
    t = In(s),
    e = {
      generator: "Solar System in Motion",
      frame: "heliocentric ecliptic J2000",
      units: "AU",
      range: {
        start: F($(d.startJd)),
        end: F($(d.endJd)),
        stepDays: s
      },
      model: {
        planets: "JPL approximate positions (Standish) with secular rates",
        smallBodies: "JPL SBDB osculating elements, two-body propagation",
        accuracyAtStart: me(d.startJd),
        accuracyAtEnd: me(d.endJd)
      },
      rows: t
    };
  be(new Blob([JSON.stringify(e, null, 1)], {
    type: "application/json"
  }), `solar-positions-${F($(d.startJd))}.json`), G(`${t.length.toLocaleString("en-US")} rows exported at ${s}-day steps.`)
}
async function yo() {
  const s = An(F($(d.startJd)), F($(d.endJd)), F($(d.currentJd)));
  await Jn(s, "Link copied — it restores dates, layers, camera target and speed.")
}
async function go() {
  const t = `<iframe src="${An(F($(d.startJd)),F($(d.endJd)),F($(d.currentJd)))}" width="960" height="600" style="border:0;border-radius:12px" title="Solar System in Motion" loading="lazy" allowfullscreen></iframe>`;
  await Jn(t, "Embed snippet copied.")
}
async function Jn(s, t) {
  try {
    await navigator.clipboard.writeText(s), G(t)
  } catch {
    const e = document.getElementById("exp-status");
    if (e) {
      e.textContent = "";
      const n = document.createElement("textarea");
      n.className = "exp-fallback", n.readOnly = !0, n.value = s, e.appendChild(n), n.focus(), n.select()
    }
    G("Clipboard blocked — select and copy the text in the export panel.")
  }
}

function Dn(s) {
  const t = document.getElementById("fatal");
  t.textContent = s, t.style.display = "flex"
}
window.WebGLRenderingContext ? bo() : Dn("This simulator needs WebGL, which this browser does not support.");

function bo() {
  d.quality = Cs(), wo();
  const s = As(),
    t = Us({
      onLaunch: o,
      stories: fe,
      onStory: n
    });
  let e = null;

  function n(a) {
    e = a;
    const {
      start: r,
      end: i
    } = _e(a);
    t.launchWith(F(r), F(i))
  }
  s.launch && t.launchWith(s.start, s.end);

  function o(a, r) {
    We(a, r), document.body.classList.add("running");
    let i;
    try {
      i = new Ps(document.getElementById("scene-canvas"), document.getElementById("labels-root"))
    } catch (v) {
      console.error(v), Dn("Could not start the 3D renderer. Try another browser, or turn off battery-saver GPU settings.");
      return
    }
    const l = new Is(i),
      c = new Fs;
    c.attach(i.renderer.domElement), i.onResizeExtra = (v, _) => c.setAspect(v, _);
    const u = i.viewportSize();
    c.setAspect(u.w, u.h);
    const h = Gs(),
      p = Ks(),
      y = oo({
        rig: l,
        scene: i,
        getNeo: () => i.neoData,
        onSelect: v => g(v)
      });

    function g(v) {
      if (d.mode === "sky") {
        if (y.show(v), v === "Sun" || v === "Moon" || ft.includes(v)) {
          const _ = Wt(v, d.lat, d.lon, d.currentJd, {
            observer: d.observer
          });
          c.lookAt(_.az, Math.max(_.alt, -6))
        }
        return
      }
      l.follow(v), y.show(v)
    }
    const f = Ws({
      onJump: w
    });

    function w() {
      f.cancelScrub?.(), i.resetTrails(), i.update(d.currentJd, d.currentJd, 0), y.refresh()
    }
    const k = async () => {
      try {
        i.setNeoData(await Ys()), y.refresh()
      } catch (v) {
        G(v.message || "NASA request failed — try again later."), I({
          neo: !1
        })
      }
    };
    js({
      onNeo: k,
      onSmallBodies: () => i.update(d.currentJd, d.currentJd, 0)
    }), p.register("btn-layers", "layers-panel"), d.neo && k(), V("trails", v => {
      v && w()
    }), V("trueScale", v => {
      v && G("True scale: the planets become almost invisible dots. That is the point.")
    });
    const b = {
      moon: "moons",
      dwarf: "minor",
      comet: "comet",
      mission: "missions",
      neo: "neo",
      small: "smallBodies"
    };
    V(["moons", "minor", "comet", "missions", "neo", "smallBodies"], () => {
      if (!d.follow) return;
      const v = b[i.bodies.get(d.follow)?.kind];
      v && !d[v] && l.unfollow()
    });
    let S = !1;
    const T = lo({
        onChapter: v => {
          v.follow && (l.follow(v.follow), y.show(v.follow))
        },
        onExit: () => M.apply("orrery")
      }),
      M = qs(async v => {
        if (v === "sky") {
          if (!c.ready && (G("Loading the star catalogue…", 2e3), await c.load(), c.loadError)) {
            G(`Star catalogue unavailable: ${c.loadError}`), M.apply("orrery");
            return
          }
          i.setRenderView(c.scene, c.camera), y.sky(), S || (S = !0, G("Drag to look around, scroll to zoom. Set where you are standing in the panel.", 5200))
        } else i.setRenderView(i.scene, i.camera), v === "atlas" ? T.enter() : T.exit(), y.refresh()
      }),
      B = Vs(),
      N = io({
        onPlay: P
      }),
      K = ro(),
      Z = ao({
        onSelect: g,
        getStories: () => fe,
        onCommand: (v, _) => bt(v, _)
      });

    function bt(v, _) {
      switch (v) {
        case "story": {
          const Y = N.get(_);
          Y && P(Y);
          break
        }
        case "mode":
          M.apply(_);
          break;
        case "topview":
          l.toggleTopView();
          break;
        case "chrome":
          B.toggle();
          break;
        case "play":
          I({
            playing: !d.playing
          }), f.syncAll();
          break;
        case "today":
          document.getElementById("btn-today").click();
          break;
        case "jump":
          I({
            currentJd: _,
            playing: !1
          }), f.syncAll(), w();
          break;
        case "guide":
          document.getElementById("guide-overlay").classList.add("open");
          break;
        case "nasakey":
          ot();
          break;
        case "export":
          C(_);
          break
      }
    }

    function ot() {
      let v = "";
      try {
        v = localStorage.getItem(ue) || ""
      } catch {}
      const _ = prompt("NASA API key (leave empty to use the shared DEMO_KEY, 30 requests/hour):", v);
      if (_ !== null) try {
        _.trim() ? localStorage.setItem(ue, _.trim()) : localStorage.removeItem(ue), G(_.trim() ? "Key saved in this browser only." : "Using the shared DEMO_KEY.")
      } catch {
        G("Could not write to local storage.")
      }
    }
    let W = null;
    m(), p.register("btn-export", "export-panel");

    function m() {
      const v = document.getElementById("export-items");
      v.textContent = "";
      const _ = [
        ["poster", "⇩", "Poster (PNG)", "The scene plus a caption with the date and accuracy"],
        ["video", "⏺", "Record a clip (WebM)", "Captures the canvas with labels drawn in"],
        ["csv", "⇩", "Positions (CSV)", "Every body across the range, in AU"],
        ["json", "⇩", "Positions (JSON)", "The same data with the model described"],
        ["link", "⧉", "Copy link to this view", "Restores dates, layers, camera and speed"],
        ["embed", "⧉", "Copy embed snippet", "An iframe for a blog post or lesson"]
      ];
      for (const [Y, at, ee, Bn] of _) {
        const It = document.createElement("button");
        It.type = "button", It.className = "exp-item", It.dataset.export = Y;
        const we = document.createElement("span");
        we.className = "ei-ic", we.textContent = at;
        const ve = document.createElement("span");
        ve.className = "ei-wrap";
        const ke = document.createElement("span");
        ke.className = "ei-t", ke.textContent = ee;
        const xe = document.createElement("span");
        xe.className = "ei-d", xe.textContent = Bn, ve.append(ke, xe), It.append(we, ve), It.addEventListener("click", () => C(Y)), v.appendChild(It)
      }
    }

    function E(v, _) {
      const Y = document.getElementById("exp-status");
      if (!Y) return;
      Y.textContent = v || "", Y.classList.toggle("rec", !!_);
      const at = document.querySelector('[data-export="video"] .ei-t');
      at && (at.textContent = _ ? "Stop recording" : "Record a clip (WebM)")
    }
    async function C(v) {
      switch (v) {
        case "poster":
          G("Rendering poster…", 1200), await ho(i);
          break;
        case "csv":
          mo();
          break;
        case "json":
          fo();
          break;
        case "link":
          await yo();
          break;
        case "embed":
          await go();
          break;
        case "video": {
          if (W) {
            W.stop(), W = null, E("", !1);
            break
          }
          W = po(i, {
            onDone: () => {
              W = null, E("", !1), G("Clip saved.")
            }
          }), W && (E("recording · 0 frames", !0), G("Recording. Choose “Stop recording” to finish and save."));
          break
        }
      }
    }

    function P(v) {
      const {
        atJd: _
      } = _e(v), {
        start: Y,
        end: at
      } = _e(v);
      We(Y, at), _ && I({
        currentJd: _
      }), v.layers && I(v.layers), v.dps && I({
        daysPerSecond: v.dps
      }), I({
        playing: !0,
        reverse: !1
      }), M.apply(v.mode || "orrery"), f.syncAll(), w(), v.follow ? (l.follow(v.follow), y.show(v.follow)) : (l.unfollow(), y.overview()), N.startNarration(v), v.id
    }
    if (Hs(i, g, {
        enabled: () => d.mode === "orrery"
      }), document.getElementById("btn-home").addEventListener("click", () => {
        location.href = location.pathname
      }), addEventListener("keydown", v => {
        const _ = v.target instanceof Element && v.target.matches("input, textarea, select");
        if ((v.key === "k" || v.key === "K") && (v.metaKey || v.ctrlKey)) {
          v.preventDefault(), Z.open();
          return
        }
        if (!_) switch (v.key) {
          case " ":
            v.preventDefault(), I({
              playing: !d.playing
            }), f.syncAll();
            break;
          case "ArrowRight":
            I({
              currentJd: Math.min(d.endJd, d.currentJd + (v.shiftKey ? 30 : 1)),
              playing: !1
            }), f.syncAll(), w();
            break;
          case "ArrowLeft":
            I({
              currentJd: Math.max(d.startJd, d.currentJd - (v.shiftKey ? 30 : 1)),
              playing: !1
            }), f.syncAll(), w();
            break;
          case "c":
          case "C":
            B.toggle();
            break;
          case "i":
          case "I":
            document.body.classList.toggle("insp-closed");
            break;
          case "1":
            M.apply("orrery");
            break;
          case "2":
            M.apply("sky");
            break;
          case "3":
            M.apply("atlas");
            break;
          case "Escape": {
            const Y = document.getElementById("guide-overlay");
            if (Y.classList.contains("open")) {
              Y.classList.remove("open");
              break
            }
            if (Z.isOpen()) {
              Z.close();
              break
            }
            if (document.getElementById("tour").classList.contains("open")) {
              K.finish();
              break
            }
            if (document.querySelector(".popover.open")) {
              p.closeAll();
              break
            }
            if (document.getElementById("stories").classList.contains("open")) {
              N.close();
              break
            }
            if (d.mode !== "orrery") {
              M.apply("orrery");
              break
            }
            if (d.follow || ["body", "small", "neo"].includes(y.context.kind)) {
              l.unfollow(), d.mode === "sky" ? y.sky() : y.overview();
              break
            }
            d.chromeHidden && B.setHidden(!1);
            break
          }
        }
      }), s.at) {
      const v = Pt(s.at);
      if (v) {
        const _ = dt(v);
        _ >= d.startJd && _ <= d.endJd && I({
          currentJd: _,
          playing: !1
        })
      }
    }
    if (!s.dpsSet) {
      const v = d.endJd - d.startJd;
      I({
        daysPerSecond: Math.min(3650, Math.max(1, v / 120))
      })
    }
    f.syncAll();
    const D = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (D && I({
        playing: !1
      }), y.overview(), s.follow && g(s.follow), d.mode !== "orrery" && M.apply(d.mode), e) {
      const v = e;
      e = null, P(v)
    } else !D && !s.at && !s.follow && l.cinematicIntro();
    !s.launch && !e && K.maybeStart();
    let A = performance.now(),
      z = !1,
      J = 16.7,
      H = 0,
      L = !1;
    const j = performance.now();

    function wt(v, _) {
      if (!(L || d.quality === "low")) {
        if (_ - j < 6e3 || v >= .099 || document.hidden) {
          H = 0;
          return
        }
        J = J * .9 + v * 1e3 * .1, J > 24 ? H ? _ - H > 2500 && (L = !0, I({
          quality: "low"
        }), G("Rendering was struggling, so detail was reduced. Turn “Low detail” off in Layers to override.", 6e3)) : H = _ : H = 0
      }
    }
    i.update(d.currentJd, d.currentJd, 0), h();

    function He(v) {
      requestAnimationFrame(He);
      const _ = Math.min(.1, (v - A) / 1e3);
      A = v;
      const Y = d.currentJd;
      if (d.playing) {
        const at = d.reverse ? -1 : 1,
          ee = Math.min(d.endJd, Math.max(d.startJd, d.currentJd + at * d.daysPerSecond * _));
        ee !== d.currentJd ? (I({
          currentJd: ee
        }), z = !1) : z || (z = !0, I({
          playing: !1
        }), f.syncAll(), G(at > 0 ? "Reached the end of the range." : "Reached the start of the range."))
      }
      if (i.update(d.currentJd, Y, _), d.mode === "sky" && c.ready && c.update(d.currentJd), l.update(_), h(), f(), y.update(v), N.updateNarration(_), i.render(), wt(_, v), W) {
        const at = W.captureFrame();
        at % 15 === 0 && E(`recording · ${at} frames`, !0)
      }
    }
    requestAnimationFrame(He)
  }
}

function wo() {
  const s = document.getElementById("guide-overlay");
  document.getElementById("btn-guide")?.addEventListener("click", () => s.classList.add("open")), document.getElementById("guide-close").addEventListener("click", () => s.classList.remove("open")), s.addEventListener("click", t => {
    t.target === s && s.classList.remove("open")
  })
}
//# sourceMappingURL=index-hSt5yHll.js.map