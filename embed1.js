(function(){
/* \ub370\uc774\ud130\uc13c\ud130\ub97c \ub458\ub7ec\uc2fc \uc138 \uac00\uc9c0 \ubcc0\uc218 \u2014 \uae30\uc0ac \ubcf8\ubb38 \uc0bd\uc785\uc6a9 (v0.49, 2026-11-16). index.html \uc5d0\uc11c \uc790\ub3d9 \uc0dd\uc131 */
var VN_CSS=":host{all:initial;display:block}\n.vn,.vn *{overflow-anchor:none}\n.vn{position:relative;isolation:isolate;display:block;line-height:normal;text-align:left;font-size:16px;-webkit-text-size-adjust:100%}\n.pin{position:absolute;left:0;top:0;width:100%;height:100vh;height:100lvh;pointer-events:none;overflow:hidden}\n.pin.back{z-index:0}.pin.front{z-index:5}.pin.front #rail{pointer-events:auto}\n.fin{position:absolute;left:0;top:0;width:100%;height:100%}\n.vn.fx .pin{position:fixed}\n.vn.end .pin{top:auto;bottom:0}\n.vn.sk .pin{position:-webkit-sticky;position:sticky;top:0;bottom:auto}\n.vn.sk .pin.front{height:0!important;overflow:visible}\n.vn.sk.end .pin.front{visibility:hidden}\n\n*{box-sizing:border-box}\n\n.vn{margin:0;background:#070b10;color:#eef3f6;font-family:\"Noto Sans KR\",\"Apple SD Gothic Neo\",\"Malgun Gothic\",sans-serif;word-break:keep-all}\n\n/* \uace0\uc815 \ub808\uc774\uc5b4 */\n#stage{position:absolute;left:0;top:0;width:100%;height:100%;z-index:0;background:radial-gradient(120% 90% at 50% 100%,#0f2430 0%,#061018 60%)}\n#stage canvas{display:block;width:100%;height:100%}\n#shade{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(7,11,16,.55) 0%,rgba(7,11,16,0) 22%,rgba(7,11,16,0) 70%,rgba(7,11,16,.6) 100%)}\n#labels{position:absolute;inset:0;z-index:2;pointer-events:none;overflow:hidden}\n.lbl{position:absolute;left:0;top:0;opacity:0;transition:opacity .35s ease;will-change:transform}\n.lbl i{position:absolute;left:-4px;top:-4px;width:8px;height:8px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px rgba(94,242,200,.35),0 0 14px #5ef2c8}\n.lbl b{position:absolute;left:0;bottom:16px;width:1px;height:26px;background:#5ef2c8}\n.lbl span{position:absolute;left:0;bottom:44px;transform:translateX(-50%);white-space:nowrap;padding:6px 10px;border-radius:4px;background:rgba(8,14,20,.9);border:1px solid #5ef2c8;font-size:13px;font-weight:700;color:#fff}\n.lbl.cy i{box-shadow:0 0 0 4px rgba(111,183,255,.35),0 0 14px #6fb7ff}\n.lbl.cy b{background:#6fb7ff}.lbl.cy span{border-color:#6fb7ff}\n.lbl.rd i{box-shadow:0 0 0 4px rgba(255,122,89,.35),0 0 14px #ff7a59}\n.lbl.rd b{background:#ff7a59}.lbl.rd span{border-color:#ff7a59}\n\n/* \uc9c4\ud589 \ud45c\uc2dc */\n#bar{position:absolute;left:0;top:0;z-index:6;height:3px;width:100%;background:rgba(255,255,255,.08)}\n#bar u{display:block;height:100%;width:0;background:linear-gradient(90deg,#5ef2c8,#6fb7ff)}\n#rail{position:absolute;z-index:5;right:18px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:14px;opacity:0;transition:opacity .4s}\n#rail.on{opacity:1}\n#rail a{display:flex;align-items:center;justify-content:flex-end;gap:8px;text-decoration:none;color:rgba(238,243,246,.5);font-size:11px;font-weight:700;cursor:pointer}\n#rail a em{font-style:normal;opacity:0;transition:opacity .25s}\n#rail a:before{content:\"\";order:2;width:8px;height:8px;border-radius:50%;border:1.5px solid rgba(238,243,246,.55)}\n#rail a.on{color:#fff}#rail a.on em{opacity:1}\n#rail a.on:before{background:#5ef2c8;border-color:#5ef2c8;box-shadow:0 0 10px #5ef2c8}\n@media(max-width:819px){#rail{display:none}}\n\n/* \uc2a4\ud06c\ub864 \ubcf8\ubb38 */\n#story{position:relative;z-index:4}\n.step{position:relative;height:calc(var(--h,160) * 1vh);display:flex;align-items:center;padding:0 clamp(16px,6vw,96px)}\n.step.r{justify-content:flex-end}\n.step.c{justify-content:center;text-align:center}\n.cap{max-width:440px;padding:22px 24px 24px;background:rgba(9,15,21,.86);border-left:3px solid var(--ac,#5ef2c8);border-radius:2px;box-shadow:0 16px 50px rgba(0,0,0,.45);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}\n.cap .eb{display:block;margin-bottom:10px;font-size:12px;font-weight:700;letter-spacing:.12em;color:var(--ac,#5ef2c8)}\n.cap h2{margin:0 0 12px;font-size:clamp(24px,2.6vw,34px);font-weight:900;line-height:1.25;letter-spacing:-.03em}\n.cap p{margin:0;font-size:clamp(16px,1.3vw,18px);line-height:1.75;letter-spacing:-.01em;color:#dbe4ea}\n.cap p+p{margin-top:14px}\n.cap p b{font-weight:700;color:#fff;background:linear-gradient(transparent 60%,rgba(255,122,89,.5) 0)}\n.cap .tmp{margin-top:14px;font-size:12px;color:#8fa1ad}\n.cap ol{margin:14px 0 0;padding:0;list-style:none;text-align:left}\n.cap ol li{display:flex;gap:12px;align-items:baseline;padding:12px 0;border-top:1px solid rgba(255,255,255,.12);font-size:16px;line-height:1.6;color:#dbe4ea}\n.cap ol li b{flex:none;color:#5ef2c8;font-weight:900;font-size:16px;min-width:4.4em}\n.step.hero .cap{max-width:720px;background:none;border:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;padding:0}\n.step.hero h1{margin:0 0 18px;font-size:clamp(38px,6.4vw,84px);font-weight:900;line-height:1.12;letter-spacing:-.045em;text-shadow:0 4px 30px rgba(0,0,0,.7)}\n.step.hero p{font-size:clamp(17px,1.6vw,21px);color:#eef3f6;text-shadow:0 2px 14px rgba(0,0,0,.8)}\n.chip{display:inline-flex;gap:10px;align-items:baseline;margin-top:22px;padding:8px 14px;border:1px solid rgba(255,255,255,.28);border-radius:99px;background:rgba(8,14,20,.6);font-size:13px;color:#c9d4db}\n.chip b{font-size:17px;color:#fff}.chip i{font-style:normal;font-weight:700}\n.chip i.up{color:#ff7a59}.chip i.dn{color:#5aa8ff}\n.hint{margin-top:34px;font-size:12px;letter-spacing:.2em;color:#9fb0bb;animation:bob 1.8s ease-in-out infinite}\n@keyframes bob{50%{transform:translateY(6px)}}\n.idx{display:block;width:100%;height:auto;margin-top:16px}\n.credit{font-size:12px;line-height:1.7;color:#8fa1ad;margin-top:18px;text-align:left}\n#nogl{display:none;position:absolute;z-index:3;left:50%;bottom:18px;transform:translateX(-50%);padding:8px 12px;font-size:12px;color:#c9d4db;background:rgba(8,14,20,.85);border:1px solid rgba(255,255,255,.2);border-radius:4px}\n.no-webgl #nogl{display:block}\n@media(max-width:819px){\n  .step,.step.r{justify-content:center}\n  .cap{max-width:none;width:100%;padding:18px 18px 20px;margin-top:48vh}\n  .step.hero .cap,.step.c .cap{margin-top:0}\n  .lbl span{font-size:12px;padding:5px 8px}\n}\n@media(prefers-reduced-motion:reduce){.hint{animation:none}}\n\n.bars{margin-top:16px}\n.bars .bl{display:block;margin:14px 0 8px;font-size:13px;font-weight:700;color:#9fb0bb}\n.bars .br{display:flex;align-items:center;gap:10px;margin:6px 0;font-size:14px}\n.bars .br em{flex:none;width:3.4em;font-style:normal;color:#dbe4ea}\n.bars .br .tr{flex:1;height:14px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden}\n.bars .br .tr i{display:block;height:100%;background:#6b7c88}\n.bars .br.hi .tr i{background:#5ef2c8}\n.bars .br b{flex:none;min-width:6.6em;text-align:right;font-weight:700;color:#fff}\n.bars .br.hi b{color:#5ef2c8}\n.chk{display:inline-block;margin-top:12px;padding:3px 8px;font-size:12px;font-weight:700;color:#07100d;background:#ffd166;border-radius:3px}\n.step.fin{height:auto;min-height:calc(var(--h,160) * 1vh);flex-direction:column;justify-content:center;gap:34px;padding-top:30vh;padding-bottom:16vh}\n.relwrap{width:100%;max-width:1120px;pointer-events:auto;text-align:left}\n.relh{display:block;margin-bottom:14px;font-size:14px;font-weight:700;letter-spacing:.14em;color:#5ef2c8;text-shadow:0 2px 10px rgba(0,0,0,.8)}\n.relgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}\n.rcard{display:flex;flex-direction:column;background:rgba(9,15,21,.92);border-radius:4px;overflow:hidden;text-decoration:none;color:#eef3f6;box-shadow:0 16px 50px rgba(0,0,0,.45);transition:transform .2s}\n.rcard:hover{transform:translateY(-4px)}\n.rcard img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:#fff}\n.rtx{display:flex;flex-direction:column;flex:1;padding:14px 16px 18px}\n.rtx em{font-style:normal;font-size:12px;font-weight:700;letter-spacing:.1em;color:#5ef2c8;margin-bottom:6px}\n.rtx strong{font-size:17px;line-height:1.45;font-weight:700;letter-spacing:-.02em;margin-bottom:16px}\n.rbtn{margin-top:auto;align-self:flex-start;display:inline-flex;align-items:center;gap:7px;padding:8px 16px;border-radius:999px;background:#5ef2c8;color:#08131a;font-size:13px;font-weight:700}\n@media(max-width:819px){\n  .relgrid{grid-template-columns:1fr;gap:10px}\n  .rcard{flex-direction:row}\n  .rcard img{width:112px;flex:none;aspect-ratio:auto;height:auto;min-height:104px}\n  .rtx{padding:12px 14px}.rtx strong{font-size:15px;margin-bottom:10px}\n  .rbtn{padding:0;background:none;color:#5ef2c8;font-size:12px}\n}\n.bsrc{display:block;margin-top:10px;font-size:12px;color:#93a3ae}\n.cap.pcard .ph .two.three img{height:150px}\n@media(max-width:819px){.cap.pcard .ph .two.three{flex-direction:column}.cap.pcard .ph .two.three img{width:100%;height:124px}}\n.rel{margin-top:20px;text-align:left;border-top:1px solid rgba(255,255,255,.14);padding-top:14px}\n.rel span{display:block;margin-bottom:8px;font-size:12px;font-weight:700;letter-spacing:.1em;color:#5ef2c8}\n.rel a{display:block;padding:7px 0;font-size:15px;line-height:1.5;color:#eef3f6;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.08)}\n.rel a:hover{color:#5ef2c8}\n@media(max-width:819px){.cap p{font-size:15.5px;line-height:1.7}.cap h2{font-size:22px}.cap ol li{font-size:15px;padding:9px 0}}\n.ch-art{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0;background:center/cover no-repeat;will-change:opacity}\n.ch-art:after{content:\"\";position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(4,12,19,.62),rgba(4,12,19,.3) 60%,rgba(4,12,19,.5))}\n.ch-art span{position:absolute;right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:1;padding:5px 8px;background:rgba(4,12,19,.75);color:#e1eaf0;font-size:11px}\n#lead-art{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0;background:68% center/cover no-repeat}\n#lead-art:after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,12,19,.83),rgba(4,12,19,.34) 52%,transparent 85%),linear-gradient(0deg,rgba(4,12,19,.55),transparent 45%)}\n.vn.has-cover #lead-art{opacity:1}\n#lead-credit{position:absolute;right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:1;padding:5px 8px;background:rgba(4,12,19,.75);color:#e1eaf0;font-size:11px}\n.step.hero{justify-content:flex-start;text-align:left}\n.step.hero p b{background:none;color:#7ff0d6;font-weight:800;white-space:nowrap}\n@media(max-width:819px){br.pc{display:none}}\n.step.hero .cap{max-width:570px}\n.step.hero .eb{letter-spacing:.08em;color:#a3ebe2}\n.cap{border-radius:6px;background:rgba(9,15,21,.9)}\n@media(max-width:819px){#lead-art{background-position:72% center}#lead-art:after{background:linear-gradient(180deg,rgba(4,12,19,.76),rgba(4,12,19,.2) 62%,rgba(4,12,19,.52))}.step.hero{align-items:flex-start;padding-top:20vh}.step.hero .cap{max-width:380px}}\n.step.chap .cap{max-width:860px;width:100%;background:radial-gradient(closest-side,rgba(4,12,19,.82),rgba(4,12,19,.5) 60%,rgba(4,12,19,0));border:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;padding:70px 30px;margin-top:0;text-align:center}\n.step.chap .cn{display:inline-block;margin-bottom:16px;padding:6px 16px;border:1px solid var(--ac,#5ef2c8);border-radius:99px;font-size:14px;font-weight:700;letter-spacing:.18em;color:var(--ac,#5ef2c8);background:rgba(6,16,24,.55)}\n.step.chap h2{font-size:clamp(34px,5.4vw,68px);letter-spacing:-.045em;text-shadow:0 4px 30px rgba(0,0,0,.75)}\n.cap .aft{margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,.14);text-align:left}\n.cap.hasph{max-width:500px}\n.cap .ph{margin:-22px -24px 18px;overflow:hidden;border-radius:6px 6px 0 0}\n.cap .ph img{display:block;width:100%;height:230px;object-fit:cover}\n.cap .ph figcaption{padding:8px 24px 0;font-size:12.5px;line-height:1.5;color:#aebcc6}\n.cap .ph figcaption em{display:block;font-style:normal;color:#7f909c}\n.cap .ph figcaption a{color:#9fb3c2;text-decoration:underline}\n@media(max-width:819px){.cap.hasph{margin-top:30vh}.cap .ph{margin:-18px -18px 12px}.cap .ph img{height:112px}.cap .ph figcaption{padding:6px 18px 0;font-size:11.5px}}\n.cap .ph .two{display:flex;gap:2px}.cap .ph .two img{width:50%}.cap .ph .two.three img{width:33.34%}\n/* \uc0ac\uc9c4\uc774 \uc788\ub294 \uad6c\uac04: \uae00 \uce74\ub4dc\uac00 \uba3c\uc800 \uc9c0\ub098\uac00\uace0, \ub354 \ub0b4\ub9ac\uba74 \uc0ac\uc9c4 \uce74\ub4dc\uac00 \ub530\ub85c \ub098\uc628\ub2e4 */\n.step.ph2{flex-direction:column;justify-content:center;gap:58vh;height:calc((var(--h,160) + 125) * 1vh)}\n.step.solo>.cap:not(.pcard){display:none}.step.ph2.solo{height:calc(var(--h,160) * 1vh)}\n.step.ph2.l{align-items:flex-start}.step.ph2.r{align-items:flex-end}\n.cap.pcard{max-width:560px;width:100%;padding:0;border-left:0;border-radius:6px;overflow:hidden}\n.cap.pcard .ph{margin:0;border-radius:0}\n.cap.pcard .ph img{height:350px}\n.cap.pcard .ph figcaption{padding:12px 18px 15px;font-size:15px;line-height:1.55;color:#e3eaef}\n.cap.pcard .ph figcaption em{margin-top:4px;font-size:12px;color:#8496a2}\n@media(max-width:819px){\n  .step.ph2,.step.ph2.l,.step.ph2.r{align-items:center;gap:46vh}\n  .cap.pcard{margin-top:0}\n  .cap.pcard .ph{margin:0}\n  .cap.pcard .ph img{height:230px}\n  .cap.pcard .ph figcaption{padding:10px 14px 13px;font-size:14px}\n}\n.cap .ph .two.stack{flex-direction:column;background:#fff}\n.cap.pcard .ph .two.stack img{width:100%;height:178px;object-fit:contain;background:#fff}\n@media(max-width:819px){.cap.pcard .ph .two.stack img{height:118px}}\n@media(max-width:819px),(pointer:coarse){.cap{-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(9,15,21,.93)}}\n\n\n";
var VN_HTML="<div class=\"vn\"><div class=\"pin back\"><div id=\"stage\"></div><div id=\"lead-art\" aria-hidden=\"true\"><span id=\"lead-credit\">AI \uc0dd\uc131 \ucf58\uc149\ud2b8 \uc774\ubbf8\uc9c0</span></div><div id=\"shade\"></div><div id=\"labels\"></div><div id=\"nogl\">3D\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\ub294 \ud658\uacbd\uc785\ub2c8\ub2e4. \ubcf8\ubb38\uc740 \uadf8\ub300\ub85c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</div></div><div class=\"pin front\"><div class=\"fin\"><div id=\"bar\"><u></u></div><nav id=\"rail\" aria-label=\"\uad6c\uac04\"></nav></div></div><main id=\"story\"></main></div>";
function vnApp(ROOT,VN,BASE,TOPOFF,vnScroll){
(function(){
"use strict";

/* =====================================================================
   CONFIG \u2014 \uc5ec\uae30\ub9cc \uace0\uce58\uba74 \ub41c\ub2e4
   - market : \uccab \ud654\uba74 \uc2dc\uc138 \uce69 (\uc5c6\uc73c\uba74 null)
   - bars   : \ub9c9\ub300 \ube44\uad50 [{label,rows:[[\uc774\ub984,\uac12,\ud45c\uae30,\uac15\uc870]]}], check=\ub178\ub780 \ud655\uc778 \ub531\uc9c0
   - related: \ub9e8 \ub05d \uad00\ub828 \uae30\uc0ac [[\uc81c\ubaa9,URL]] (\uc790\uc0ac \uae30\uc0ac\ub9cc)
   - steps  : \uad6c\uac04. h=\uc2a4\ud06c\ub864 \uae38\uc774(vh), side=l/r/c, ac=\uac15\uc870\uc0c9,
              cam=[{p:[\uce74\uba54\ub77c \uc704\uce58], t:[\ubc14\ub77c\ubcf4\ub294 \uacf3]}] (\uc5ec\ub7ec \uac1c\uba74 \uad6c\uac04 \uc548\uc5d0\uc11c \uc21c\uc11c\ub300\ub85c \uc774\ub3d9)
              labels=[{at:[x,y,z], text, c:''|'cy'|'rd', k:\uba87 \ubc88\uc9f8 cam\uc5d0\uc11c\ub9cc \ubcf4\uc77c\uc9c0(\uc0dd\ub7b5 \uac00\ub2a5)}]
   ===================================================================== */
var CONFIG={
  market:null,
  steps:[
    {id:"hero",nav:"\ucc98\uc74c",h:115,side:"c",hero:true,
     eb:"\uc8fc\u672b\uba38\ub2c8 \u00b7 \ube44\uc8fc\uc5bc\ub274\uc2a4",
     title:"\ub370\uc774\ud130\uc13c\ud130\uac00 \ub9c9\ud788\uc790<br>\ubc8c\uc5b4\uc9c4 \uc138 \uac00\uc9c0",
     body:["\ubbf8\uad6d \uc911\uac04\uc120\uac70\uac00 \ub05d\ub09c \ub4a4 \ub370\uc774\ud130\uc13c\ud130 \uc9d3\uae30\uac00 \uae4c\ub2e4\ub85c\uc6cc\uc84c\uc5b4\uc694. \uadf8 \ud2c8\uc5d0\uc11c \uc2dc\uc7a5\uc774 \ucc3e\uc544\ub0b8 \uae38 \uc138 \uac08\ub798\ub97c \ub530\ub77c\uac00 \ubd24\uc2b5\ub2c8\ub2e4."],
     cam:[{p:[-92,62,64],t:[15,0,-15]}]},

    /* ---------- \ubc1c\ub2e8 ---------- */
    {id:"bill",nav:"\ubc1c\ub2e8",h:180,side:"l",ac:"#ff7a59",
     eb:"\ubc1c\ub2e8",
     title:"\ucc57\ubd07\uc740 \ubc18\uac11\uc9c0\ub9cc, \uc804\uae30\ub8cc\ub294 \ub2e4\ub978 \uc598\uae30",
     body:["\ucc57\ubd07\uc758 \ub611\ub611\ud55c \ub2f5\ubcc0\uc740 \ubc18\uac11\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uadf8 \ub4a4\uc5d0 \uc120 \uac70\ub300\ud55c \ub370\uc774\ud130\uc13c\ud130\uac00 \uc6b0\ub9ac \uc9d1 \uc804\uae30\ub8cc\ub97c \uc62c\ub9b0\ub2e4\uba74 \uc598\uae30\uac00 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4.",
           "\uc804\uae30\ub97c \uc794\ub729 \uc4f0\ub294 \uc2dc\uc124\uc774 \ub4e4\uc5b4\uc624\ub294\ub370 \uc65c \uc8fc\ubbfc\uae4c\uc9c0 \ube44\uc6a9\uc744 \ub098\ub220 \ub0b4\uc57c \ud558\ub290\ub0d0. \ubbf8\uad6d \uc911\uac04\uc120\uac70\uc5d0\uc11c \ubd88\uac70\uc9c4 \ub370\uc774\ud130\uc13c\ud130 \ubc18\ub300 \uc5ec\ub860\uc740 \uc774 \ubb3c\uc74c\uc5d0\uc11c \ub098\uc654\uc2b5\ub2c8\ub2e4."],
     labels:[{at:[-160,9,45],text:"\uc8fc\ud0dd\uac00"},{at:[-30,16,0],text:"\ub370\uc774\ud130\uc13c\ud130",c:"cy"}],
     cam:[{p:[-214,10,92],t:[-120,9,18]}]},

    {id:"issue",h:180,side:"r",ac:"#ff7a59",
     eb:"\uc7c1\uc810",
     title:"\ub530\uc9c8 \uac83\uc740 \uc804\uae30\uc640 \ubb3c\uc785\ub2c8\ub2e4",
     body:["\uc120\uac70\ub294 \ubbfc\uc8fc\ub2f9\uc758 \uc555\uc2b9, \uc774\ub978\ubc14 '\ube14\ub8e8\uc6e8\uc774\ube0c'\ub85c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4. \ud55c\uad6d\ud22c\uc790\uc99d\uad8c \uae40\uac74\uc6b0 \uc5f0\uad6c\uc6d0\uc740 \ub370\uc774\ud130\uc13c\ud130 \uac74\uc124\uc774 \uc5b4\ub824\uc6cc\uc9c8 \uac83\uc73c\ub85c \ubd24\uc2b5\ub2c8\ub2e4.",
           "\uaddc\uc81c\ub97c \ub2e4\uc2dc \uc9dc\uba74\uc11c \ub2e4\ub904\uc9c8 \ubb38\uc81c\ub85c\ub294 \ub450 \uac00\uc9c0\uac00 \uaf3d\ud799\ub2c8\ub2e4. \uc9c0\uc5ed\uc758 \ubb3c\uc744 \uc5bc\ub9c8\ub098 \uc4f0\uac8c \ud560\uc9c0, \uc624\ub978 \uc804\uae30\uc694\uae08\uc740 \ub204\uac00 \ucc45\uc784\uc9c8\uc9c0\uc785\ub2c8\ub2e4."],
     labels:[{at:[-56,9,0],text:"\uc804\uae30 \u00b7 \ubcc0\uc804 \uc124\ube44"},{at:[-12,24,5],text:"\ubb3c \u00b7 \ub0c9\uac01 \uc124\ube44",c:"cy"},{at:[-42,8,27],text:"\ubb3c\ud0f1\ud06c",c:"cy"}],
     cam:[{p:[-108,34,58],t:[-6,4,0]}]},

    {id:"market",h:180,side:"l",ac:"#ff7a59",
     eb:"\uc2dc\uc7a5 \ubc18\uc751",
     title:"\uacf5\uc0ac\uac00 \uaf2c\uc774\uc790 \uc8fc\uac00\uac00 \uba3c\uc800 \ube60\uc84c\uc2b5\ub2c8\ub2e4",
     body:["\ub370\uc774\ud130\uc13c\ud130\uac00 \ub2a6\uc5b4\uc9c0\uba74 \uadf8 \uc548\uc5d0 \ub4e4\uc5b4\uac08 \ubc18\ub3c4\uccb4 \uc8fc\ubb38\ub3c4 \ubc00\ub9bd\ub2c8\ub2e4. \uc120\uac70 \uc9c1\ud6c4 \ucf54\uc2a4\ud53c\ub294 \ud558\ub8e8\uc5d0 5% \ub118\uac8c \ub5a8\uc5b4\uc84c\uace0, \uc774\ud2bf\ub0a0\uc5d0\ub294 \uc7a5\uc911 5000\uc120\uc744 \ub0b4\uc92c\uc2b5\ub2c8\ub2e4.",
           "\uadf8 \ub4a4 \uc99d\uad8c\uac00 \ubcf4\uace0\uc11c\ub294 \uc138 \ubc29\ud5a5\uc73c\ub85c \uac08\ub838\uc2b5\ub2c8\ub2e4. \uc804\uae30\ub97c \uc9c1\uc811 \ub9cc\ub4dc\ub294 \ucabd, \ubc18\ub3c4\uccb4\ub97c \ub2e4\uc2dc \ub530\uc838\ubcf4\ub294 \ucabd, \uc544\uc608 \ub545\uc744 \ub5a0\ub098\ub294 \ucabd\uc785\ub2c8\ub2e4."],
     labels:[{at:[82,13,0],text:"\uba48\ucd98 \uacf5\uc0ac",c:"rd"}],
     cam:[{p:[48,30,48],t:[80,6,0]}]},

    /* ---------- \ubcc0\uc218 1 ---------- */
    {id:"c1",nav:"\ubcc0\uc218 1",h:130,art:BASE+"photos/ch-fuelcell.jpg",artPos:"30% center",side:"c",chapter:"\ubcc0\uc218 1",ac:"#5ef2c8",
     title:"\uc804\uae30\ub97c \uc9c1\uc811 \ub9cc\ub4e0\ub2e4",
     cam:[{p:[-96,62,-176],t:[0,0,-58]}]},

    {id:"ms",h:200,side:"r",ac:"#5ef2c8",
     eb:"",title:"",body:[],
     labels:[{at:[-6,15,-112],text:"\uc804\uc6a9 \uac00\uc2a4\ubc1c\uc804\uc18c"},{at:[-58,6,-112],text:"\uac00\uc2a4 \ubc30\uad00",c:"cy"},{at:[0,14,-54],text:"\ub370\uc774\ud130\uc13c\ud130",c:"cy"}],
     cam:[{p:[-62,24,-162],t:[-4,8,-96]}]},

    {id:"google",h:200,side:"l",ac:"#5ef2c8",
     eb:"",title:"",body:[],
     diagram:"demand",
     labels:[{at:[-100,23,-14],text:"\uc1a1\uc804\uc120"},{at:[-56,7,0],text:"\ubcc0\uc804 \uc124\ube44"}],
     cam:[{p:[-122,20,46],t:[-62,9,-22]}]},

    {id:"sofc",h:200,side:"l",ac:"#5ef2c8",
     eb:"\uc5f0\ub8cc\uc804\uc9c0",
     title:"\ub0c9\uac01\ud0d1\uc774 \uc5c6\ub294 \ubc1c\uc804\uae30",
     body:["\ub370\uc774\ud130\uc13c\ud130 \ub9c8\ub2f9\uc5d0 \ub193\uace0 \uadf8 \uc790\ub9ac\uc5d0\uc11c \uc804\uae30\ub97c \ub9cc\ub4dc\ub294 \uc124\ube44\uac00 \uace0\uccb4\uc0b0\ud654\ubb3c\uc5f0\ub8cc\uc804\uc9c0(SOFC)\uc785\ub2c8\ub2e4. \uc5f0\ub8cc\ub97c \ud0dc\uc6b0\ub294 \ub300\uc2e0 \uc804\uae30\ud654\ud559 \ubc18\uc751\uc73c\ub85c \uc804\uae30\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ubbf8\uad6d \ube14\ub8f8\uc5d0\ub108\uc9c0 \uc81c\ud488\uc785\ub2c8\ub2e4.",
           "\uae40 \uc5f0\uad6c\uc6d0\uc740 \uc774 \uc124\ube44\uac00 \uae30\uc874 \ubc1c\uc804\uc18c\uc640 \ub2ec\ub9ac \ub0c9\uac01\ud0d1\uc774 \ud544\uc694 \uc5c6\uace0, \ubb3c\uc740 \uc5f0\ub8cc\ub97c \ubc14\uafb8\ub294 \uacfc\uc815\uc5d0\uc11c\ub9cc \uc870\uae08 \uc4f4\ub2e4\uace0 \uc124\uba85\ud588\uc2b5\ub2c8\ub2e4. \uad11\uc5ed \uc804\ub825\ub9dd\uc744 \uac70\uce58\uc9c0 \uc54a\uc73c\ub2c8 \uc9c0\uc5ed \uc804\uae30\uc694\uae08\uc5d0\ub3c4 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac81\ub2c8\ub2e4.",
           "\ubb3c\uacfc \uc804\uae30\ub8cc, \uc120\uac70\uc5d0\uc11c \ubd88\uac70\uc9c4 \ub450 \uc7c1\uc810\uc744 \ube44\ucf1c \uac00\ub294 \uc148\uc785\ub2c8\ub2e4."],
     labels:[{at:[-14,5,42],text:"\uc5f0\ub8cc\uc804\uc9c0 \uc124\ube44"}],
     cam:[{p:[-31,6.5,55],t:[-13,2,42]}]},

    {id:"dec",h:170,side:"r",ac:"#5ef2c8",
     eb:"\ub2e4\uc74c \uc77c\uc815",
     title:"12\uc6d4 10\uc77c\uc744 \ubd10\uc57c \ud569\ub2c8\ub2e4",
     body:["\ud14d\uc0ac\uc2a4 \uc804\ub825\ub9dd \uc6b4\uc601\uae30\uad00(ERCOT)\uacfc \uc218\uc790\uc6d0\uac1c\ubc1c\uc704\uc6d0\ud68c(TWDB)\ub294 12\uc6d4 10\uc77c\uae4c\uc9c0 \ub370\uc774\ud130\uc13c\ud130 \uc778\ud5c8\uac00 \uac10\uc0ac \uacb0\uacfc\uc640 \ucd5c\uc885 \ubcf4\uace0\uc11c\ub97c \ub0b4\ub193\uc2b5\ub2c8\ub2e4.",
           "\uaddc\uc81c\uc758 \uc724\uacfd\uc774 \ucc98\uc74c \ub4dc\ub7ec\ub098\ub294 \uc790\ub9ac\uc785\ub2c8\ub2e4."],
     cam:[{p:[-62,30,74],t:[0,6,12]}]},

    /* ---------- \ubcc0\uc218 2 ---------- */
    {id:"c2",nav:"\ubcc0\uc218 2",h:130,art:BASE+"photos/ch-chip.jpg",artPos:"62% center",side:"c",chapter:"\ubcc0\uc218 2",ac:"#6fb7ff",
     title:"\uadf8\ub798\uc11c \ud55c\uad6d \ubc18\ub3c4\uccb4\ub294",
     cam:[{p:[14,40,74],t:[0,4,0]}]},

    {id:"delay",h:190,side:"l",ac:"#6fb7ff",
     eb:"\uaddc\ubaa8",
     title:"\ub2a6\uc5b4\uc9c8 \ubfd0 \uc0ac\ub77c\uc9c0\uc9c4 \uc54a\ub294\ub2e4",
     body:["\ubbf8\ub798\uc5d0\uc14b\uc99d\uad8c\uc740 \uaddc\uc81c \uc601\ud5a5\uc744 \ubc1b\uc744 \uc218 \uc788\ub294 \ub370\uc774\ud130\uc13c\ud130\ub97c \ucd5c\ub300 13GW\ub85c \ucd94\uc0b0\ud588\uc2b5\ub2c8\ub2e4. 2035\ub144\uae4c\uc9c0 \ub298\uc5b4\ub0a0 \uac83\uc73c\ub85c \ubcf4\ub294 150GW\uc758 9%\ucbe4\uc785\ub2c8\ub2e4.",
           "\ubcf4\uace0\uc11c\ub294 AI \ud22c\uc790\uac00 \uc0ac\ub77c\uc9c0\uae30\ubcf4\ub2e4 \uc9d1\ud589 \uc2dc\uc810\uc774 \ubc00\ub9b4 \uac00\ub2a5\uc131\uc5d0 \ubb34\uac8c\ub97c \ub480\uc2b5\ub2c8\ub2e4. \ud55c\uad6d\u00b7\uc77c\ubcf8\ucc98\ub7fc \ubbf8\uad6d \ubc16\uc5d0\uc11c \ub370\uc774\ud130\uc13c\ud130 \ud22c\uc790\uac00 \ube68\ub77c\uc9c8 \uac00\ub2a5\uc131\ub3c4 \uc81c\uc2dc\ud588\uc2b5\ub2c8\ub2e4."],
     cam:[{p:[-30,24,74],t:[2,5,2]}]},

    {id:"calc",h:120,side:"r",ac:"#6fb7ff",
     eb:"",title:"",body:[],
     diagram:"capacity",
     cam:[{p:[30,15,56],t:[2,6,2]}]},

    {id:"korea",h:180,side:"l",ac:"#6fb7ff",
     eb:"",title:"",body:[],
     cam:[{p:[58,30,62],t:[4,5,-6]}]},

    {id:"inside",h:270,side:"r",ac:"#6fb7ff",
     eb:"\ube45\ud14c\ud06c\uc758 \uc0ac\uc815",
     title:"\ub9c8\ub0e5 \ubbf8\ub8f0 \uc218\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4",
     body:["\uc124\ube44\ud22c\uc790\ub97c \uc870\uae08 \ub2a6\ucd94\uba74 \ube45\ud14c\ud06c\ub294 \ud604\uae08 \uc0ac\uc815\uc774 \ub098\uc544\uc9c0\uace0 \ube5a\uc744 \ub0bc \ubd80\ub2f4\ub3c4 \uc904\uc5b4\ub4ed\ub2c8\ub2e4.",
           "\ud558\uc9c0\ub9cc \uc774\ubbf8 \ubc1b\uc544\ub454 \ud074\ub77c\uc6b0\ub4dc \uc8fc\ubb38\uc774 \uc313\uc5ec \uc788\uace0 \ub9e4\ucd9c\ub3c4 \ube60\ub974\uac8c \ub298\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uacc4\uc18d \ubbf8\ub8e8\uae30\ub294 \uc5b4\ub835\ub2e4\ub294 \uac8c \ubcf4\uace0\uc11c\uc758 \ud310\ub2e8\uc785\ub2c8\ub2e4."],
     labels:[{at:[0,5.2,18.4],text:"\ucd9c\uc785\uad6c",k:0},{at:[-2.4,2.9,-4],text:"\uc11c\ubc84 \ub799",c:"cy",k:1}],
     cam:[{p:[0,5,40],t:[0,3,0]},{p:[0,2.2,10.5],t:[0,1.7,-10]}]},

    {id:"hbm",h:190,side:"l",ac:"#6fb7ff",
     eb:"\uc0bc\uc804\ub2c9\uc2a4",
     title:"HBM\uc740 \uacc4\uc57d\uc73c\ub85c \ubb36\uc5ec \uc788\uc2b5\ub2c8\ub2e4",
     body:["\ud55c\uad6d \ubc18\ub3c4\uccb4\uc8fc\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc740 \uc81c\ud488\ubcc4\ub85c \ub098\ub220 \ubd10\uc57c \ud55c\ub2e4\ub294 \uac8c \ubbf8\ub798\uc5d0\uc14b\uc99d\uad8c\uc758 \uc124\uba85\uc785\ub2c8\ub2e4.",
           "\uad8c\uc601\ubc30\u00b7\uae40\uc601\uac74 \uc5f0\uad6c\uc6d0\uc740 \"\uc7a5\uae30\uacc4\uc57d(LTA)\uc73c\ub85c \uc218\uc694\uac00 \ubb36\uc778 \uace0\ub300\uc5ed\ud3ed\uba54\ubaa8\ub9ac(HBM)\ub294 \ube44\uad50\uc801 \uc548\uc815\uc801\uc77c \uac83\"\uc774\ub77c\uace0 \uc9da\uc5c8\uc2b5\ub2c8\ub2e4."],
     labels:[{node:"HBM",at:[0,2.0,3.0],text:"HBM"}],
     cam:[{p:[-0.5,3.0,5.5],t:[0,1.75,3.0]}]},

    {id:"dram",h:190,side:"r",ac:"#6fb7ff",
     eb:"\ubc94\uc6a9 \uba54\ubaa8\ub9ac",
     title:"D\ub7a8\uacfc SSD\ub294 \ub354 \ubbfc\uac10\ud558\uc9c0\ub9cc",
     body:["CPU\uc640 \ud568\uaed8 \uc4f0\uc774\ub294 \ubc94\uc6a9 D\ub7a8\uacfc SSD\ub294 \uac74\uc124 \uc9c0\uc5f0\uc5d0 \ub354 \ubbfc\uac10\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
           "\ub450 \uc5f0\uad6c\uc6d0\uc740 \"HBM \uc804\ud658\uc73c\ub85c \ubc94\uc6a9 D\ub7a8 \uacf5\uae09\uc774 \ub354 \ube60\ub4ef\ud574\uc9c0\ub294 \uc810\uc744 \uace0\ub824\ud558\uba74 \uc6b0\ub824 \uc694\uc778\uc740 \uc544\ub2c8\ub2e4\"\ub77c\uace0 \ubd24\uc2b5\ub2c8\ub2e4."],
     labels:[{node:"DRAM",at:[0.3,1.9,3.2],text:"\ubc94\uc6a9 D\ub7a8",c:"cy"},{node:"SSD",at:[0,1.4,3.9],text:"SSD",c:"cy"}],
     cam:[{p:[0.9,2.9,5.3],t:[0.05,1.7,3.0]}]},

    /* ---------- \ubcc0\uc218 3 ---------- */
    {id:"c3",nav:"\ubcc0\uc218 3",h:130,art:BASE+"photos/ch-fdc.jpg",artPos:"70% center",side:"c",chapter:"\ubcc0\uc218 3",ac:"#5ef2c8",
     title:"\uc544\uc608 \ubc14\ub2e4\ub85c",
     cam:[{p:[8,34,44],t:[8,6,112]}]},

    {id:"sea",h:200,side:"l",ac:"#5ef2c8",
     eb:"\ubd80\uc720\uc2dd \ub370\uc774\ud130\uc13c\ud130",
     title:"\ubc30\ucc98\ub7fc \ub9cc\ub4e4\uc5b4 \ubb3c\uc5d0 \ub744\uc6c1\ub2c8\ub2e4",
     body:["\ub545\uc5d0\uc11c \ud5c8\uac00\ubc1b\uae30 \uc5b4\ub835\ub2e4\uba74 \ubb3c \uc704\ub294 \uc5b4\ub5a8\uae4c. \ud55c\uad6d\ud22c\uc790\uc99d\uad8c \uac15\uacbd\ud0dc \uc5f0\uad6c\uc6d0\uc740 \uc120\uac70 \ub4a4 \ub5a0\uc624\ub978 \ub300\uc548\uc73c\ub85c \ubd80\uc720\uc2dd \ub370\uc774\ud130\uc13c\ud130(FDC)\ub97c \uaf3d\uc558\uc2b5\ub2c8\ub2e4.",
           "\uc11c\ubc84\uc640 \uc804\ub825\u00b7\ub0c9\uac01 \uc124\ube44\ub97c \ub5a0 \uc788\ub294 \uad6c\uc870\ubb3c\uc5d0 \uc2e4\uc740 \uc2dc\uc124\uc785\ub2c8\ub2e4. \uc870\uc120\uc18c\uc5d0\uc11c \ub9cc\ub4e4\uc5b4 \ub04c\uace0 \uc640 \ubb3c\uac00\uc5d0 \ubb36\uc5b4 \ub461\ub2c8\ub2e4."],
     labels:[{at:[7,14,104],text:"\ubd80\uc720\uc2dd \ub370\uc774\ud130\uc13c\ud130"}],
     cam:[{p:[-86,30,150],t:[4,5,104]}]},

    {id:"fdc",h:190,side:"r",ac:"#5ef2c8",
     eb:"\uccab \uacc4\uc57d",
     title:"50\u33bf\uae09 2\uae30\uac00 \ubcf8\uacc4\uc57d\uc744 \uc55e\ub480\uc2b5\ub2c8\ub2e4",
     body:["\uc0bc\uc131\uc911\uacf5\uc5c5\uc740 \ubbf8\uad6d \ub370\uc774\ud130\uc13c\ud130 \uac1c\ubc1c\uc0ac \ubb34\uc2a4\ud14c\ub9ac\uc548\uacfc 50\u33bf\uae09 FDC 2\uae30\ub97c \uc124\uacc4\ubd80\ud130 \uc2dc\uacf5\uae4c\uc9c0 \ub9e1\ub294 \ubcf8\uacc4\uc57d\uc744 \uc62c\ud574 4\ubd84\uae30 \uc548\uc5d0 \ub9fa\uc744 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4.",
           "\uac15 \uc5f0\uad6c\uc6d0\uc740 \"\uad00\ub828 \uc778\ud5c8\uac00 \uc694\uac74\ub4e4\uc774 \uc2e4\uc9c8\uc801\uc73c\ub85c \ud574\uc18c\ub410\uc74c\uc744 \uc758\ubbf8\ud55c\ub2e4\"\uba70 \uacc4\uc57d\uc774 \uc131\uc0ac\ub418\uba74 \uc138\uacc4 FDC \uc2dc\uc7a5\uc758 \ucd08\uc11d\uc774 \ub420 \uac83\uc73c\ub85c \ub0b4\ub2e4\ubd24\uc2b5\ub2c8\ub2e4."],
     labels:[{at:[-30,13.5,104],text:"1\ud638\uae30"},{at:[44,13.5,104],text:"2\ud638\uae30"}],
     cam:[{p:[23,51,218],t:[36,0,99],mobile:[8,65,288],mobileTarget:[8,4,104]}]},

    {id:"rule",h:190,side:"l",ac:"#6fb7ff",
     eb:"\uc65c \ubc14\ub2e4\uc778\uac00",
     title:"\ub118\uc5b4\uc57c \ud560 \uaddc\uc81c\uc758 \uc131\uaca9\uc774 \ub2e4\ub985\ub2c8\ub2e4",
     body:["FDC\ub3c4 \ub530\ub85c \uaddc\uc81c\ub97c \ud1b5\uacfc\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e4\ub9cc \uac15 \uc5f0\uad6c\uc6d0\uc740 \uc774\uac83\uc774 \uc720\uad8c\uc790\uc778 \uc8fc\ubbfc\uacfc \uc5bd\ud78c \ubb38\uc81c\uc640\ub294 \ub2e4\ub974\uace0, \uc721\uc0c1\ubcf4\ub2e4 \ud480\uae30 \uc27d\ub2e4\uace0 \ubd84\uc11d\ud588\uc2b5\ub2c8\ub2e4.",
           "\uac1c\ubc1c\uc0ac\ub294 \ub9c8\uc2e4 \ubb3c\uc744 \uc4f0\uc9c0 \uc54a\ub294 \ub0c9\uac01 \ubc29\uc2dd\uc744 \ub0b4\uc138\uc6c1\ub2c8\ub2e4. \uc124\uacc4\uc5d0\ub294 \uc790\uccb4 \ubc1c\uc804 \uc124\ube44\ub3c4 \ub4e4\uc5b4\uac11\ub2c8\ub2e4."],
     labels:[],
     cam:[{p:[-84,17,80],t:[-36,6,104]}]},

    {id:"how",h:210,side:"l",ac:"#6fb7ff",
     eb:"",title:"",body:[],
     labels:[{at:[100,37,58],text:"\uae30\uc874 \ubc1c\uc804\uc18c"},{at:[76,9,82],text:"\uc804\uae30"},{at:[44,12,118],text:"\ub0c9\uac01 \ubc30\uad00 \u00b7 \uc99d\ubc1c \uc5c6\uc74c",c:"cy"}],
     cam:[{p:[26,27,162],t:[82,5,82]}]},

    {id:"cost",h:190,side:"r",ac:"#5ef2c8",
     eb:"\uacbd\uc81c\uc131",
     title:"\uc9d3\ub294 \ub3c8\ub3c4 \uad74\ub9ac\ub294 \ub3c8\ub3c4 \ub35c \ub4e0\ub2e4\ub294 \uacc4\uc0b0",
     body:["\uac15 \uc5f0\uad6c\uc6d0\uc740 FDC\uac00 \uc0ac\uc5c5\ube44\uc640 \uc6b4\uc601\ube44 \uc591\ucabd\uc5d0\uc11c \uc721\uc0c1 \ub370\uc774\ud130\uc13c\ud130\ubcf4\ub2e4 \uacbd\uc81c\uc131\uc774 \ub0ab\ub2e4\uace0 \ubd24\uc2b5\ub2c8\ub2e4."],
     bars:[{label:"\ucd1d \uac1c\ubc1c\ube44 (100\u33bf \uae30\uc900)",rows:[["\uc721\uc0c1",17.11,"17\uc5b51100\ub9cc\ub2ec\ub7ec"],["\ubd80\uc720\uc2dd",9.35,"9\uc5b53500\ub9cc\ub2ec\ub7ec",1]]},
           {label:"\uc5f0\uac04 \uc6b4\uc601\ube44",rows:[["\uc721\uc0c1",34,"3400\ub9cc\ub2ec\ub7ec"],["\ubd80\uc720\uc2dd",17,"1700\ub9cc\ub2ec\ub7ec",1]]}],
     barsrc:"100\u33bf \uaddc\ubaa8 \uae30\uc900 \ucd94\uc0b0 \u00b7 \uc790\ub8cc: \ud55c\uad6d\ud22c\uc790\uc99d\uad8c",
     cam:[{p:[96,22,136],t:[44,6,104]}]},

    {id:"yard",h:190,side:"l",ac:"#ff7a59",
     eb:"\ub204\uac00 \ub9cc\ub4dc\ub098",
     title:"2010\ub144\uc758 \ub4dc\ub9b4\uc2ed\ucc98\ub7fc",
     body:["\uace0\uc720\uac00\ub85c \uc2ec\ud574 \uc720\uc804 \uac1c\ubc1c\uc774 \ubd90\uc744 \uc774\ub8ec 2010\ub144, \ud55c\uad6d \uc870\uc120\uc0ac\ub4e4\uc740 \ub4dc\ub9b4\uc2ed \uac74\uc870 \uc2dc\uc7a5\uc744 \ub3c5\uc2dd\ud588\uc2b5\ub2c8\ub2e4.",
           "\uac15 \uc5f0\uad6c\uc6d0\uc740 FDC \uc2dc\uc7a5\uc5d0\uc11c\ub3c4 \uc0bc\uc131\uc911\uacf5\uc5c5\u00b7\ud55c\ud654\uc624\uc158\u00b7HD\ud604\ub300\uc911\uacf5\uc5c5\uc774 \ud575\uc2ec \uacf5\uae09\uc790\ub85c \ub5a0\uc624\ub97c \uc7a0\uc7ac\ub825\uc774 \uc788\ub2e4\uace0 \ud3c9\uac00\ud588\uc2b5\ub2c8\ub2e4."],
     labels:[{at:[200,50,40],text:"\uace8\ub9ac\uc557 \ud06c\ub808\uc778",c:"rd"}],
     cam:[{p:[128,44,150],t:[204,12,48]}]},

    {id:"yard2",h:190,side:"r",ac:"#ff7a59",
     eb:"\uc870\uc120 3\uc0ac",
     title:"",body:[],
     labels:[{at:[186,9,44],text:"\uac74\uc870 \uc911\uc778 \uc120\uccb4"}],
     cam:[{p:[176,26,122],t:[202,9,44]}]},

    {id:"end",nav:"\uc815\ub9ac",h:170,side:"c",ac:"#5ef2c8",
     eb:"\uc815\ub9ac",
     title:"\ud55c \ubc88\uc758 \uc120\uac70, \uc138 \uac08\ub798 \uae38",
     list:[["\uc804\uae30","\uc9c1\uc811 \ub9cc\ub4e4\uac70\ub098, \ub9ce\uc774 \uc4f0\ub294 \uc2dc\uac04\uc744 \ud53c\ud55c\ub2e4"],
           ["\ubc18\ub3c4\uccb4","\ucde8\uc18c\ubcf4\ub2e4 \uc9c0\uc5f0\uc5d0 \ubb34\uac8c, HBM\uc740 \uc7a5\uae30\uacc4\uc57d\uc73c\ub85c \ubb36\uc5ec \uc788\ub2e4"],
           ["\ubc14\ub2e4","\uc721\uc0c1\uc758 \ub300\uc548\uc73c\ub85c \ubd80\uc720\uc2dd \ub370\uc774\ud130\uc13c\ud130\uac00 \ub5a0\uc624\ub978\ub2e4"]],
     after:"\uc138 \ubcf4\uace0\uc11c\ub294 \ud55c \uac00\uc9c0 \uc804\uc81c\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. \ub370\uc774\ud130\uc13c\ud130 \ud22c\uc790\ub294 \uae38\uc744 \ubc14\uafd4\uc11c\ub77c\ub3c4 \uc774\uc5b4\uc9c4\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4.",
     related:[["\ubcc0\uc218 1","\u7f8e \ube14\ub8e8\uc6e8\uc774\ube0c \ub355\ubd84\uc5d0 \ub4a4\uc5d0\uc11c \uc6c3\ub294 \uc8fc\uc2dd\uc774 \uc788\ub2e4?","https://view.asiae.co.kr/article/2026110515494360956",BASE+"photos/ch-fuelcell.jpg","30% 60%"],
              ["\ubcc0\uc218 2","\u7f8e\ub370\uc774\ud130\uc13c\ud130 \uaddc\uc81c\uc5d0\ub3c4 '\uc0bc\uc804\ub2c9\uc2a4'\ub294 \ub044\ub5a1\uc5c6\ub2e4\uace0?","https://view.asiae.co.kr/article/2026110516252508375",BASE+"photos/ch-chip.jpg","60% 50%"],
              ["\ubcc0\uc218 2","\u97d3 \ub370\uc774\ud130\uc13c\ud130 \uc99d\uc124 \uac00\ub2a5\uc131\u2191\u2026\"\ud1b5\uc2e03\uc0ac \uc8fc\ubaa9\"","https://www.asiae.co.kr/article/2026110516521932516",BASE+"photos/ch-telecom.jpg","62% 50%"],
              ["\ubcc0\uc218 3","\ub370\uc774\ud130\uc13c\ud130\uac00 \ubc14\ub2e4\uc5d0 \ub465\ub465\u2026\uc9c0\uae08 \u25cb\u25cb\u25cb \uc0ac\uc57c\ud560 \ub54c","https://view.asiae.co.kr/article/2026111215230359867",BASE+"photos/ch-fdc.jpg","72% 60%"]],
     credit:"\uc790\ub8cc: \ubbf8\ub798\uc5d0\uc14b\uc99d\uad8c, \ud55c\uad6d\ud22c\uc790\uc99d\uad8c, \uc170\ube0c\ub860, \uad6c\uae00, \ubbf8\uad6d\uc120\uae09(ABS), \ubb34\uc2a4\ud14c\ub9ac\uc548<br>3D \uacf5\uac04\uc740 \uc77c\ubc18\uc801 \uc694\uc18c\ub97c \uc870\ud569\ud55c \uac00\uc0c1 \uc2dc\uc124\uc774\uba70 \ud2b9\uc815 \uae30\uc5c5\uc758 \uc124\uacc4\ub97c \uc7ac\ud604\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud45c\uc9c0\uc640 \ubcc0\uc218\ubcc4 \uc774\ubbf8\uc9c0, \uad00\ub828 \uae30\uc0ac \uc774\ubbf8\uc9c0\ub294 AI \uc0dd\uc131 \ucf58\uc149\ud2b8 \uc774\ubbf8\uc9c0\uc774\uba70, 3D \ubaa8\ub378\ub3c4 AI\ub85c \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4.",
     cam:[{p:[40,150,270],t:[70,0,66]}]}
  ]
};

/* =====================================================================
   COPY \u2014 \uae00\ub9cc \uace0\uce60 \ub54c\ub294 \uc5ec\uae30\ub9cc \ubcf8\ub2e4 (\uad6c\uac04 id\ubcc4 \uc81c\ubaa9\u00b7\ubcf8\ubb38). CONFIG\uc758 \uae00\uc744 \ub36e\uc5b4\uc4f4\ub2e4.
   ===================================================================== */
var COPY={
  hero:{title:"\ub370\uc774\ud130\uc13c\ud130\ub97c \ub458\ub7ec\uc2fc<br>\uc138 \uac00\uc9c0 \ubcc0\uc218",
    body:["\ubbf8\uad6d \uc911\uac04\uc120\uac70 \uc774\ud6c4<br class=\"pc\"> <b>\ub370\uc774\ud130\uc13c\ud130</b> \uc99d\uc124\uc774 \uc5b4\ub824\uc6cc\uc9c8 \uac83\uc774\ub780 \uc804\ub9dd\uc774 \ub098\uc635\ub2c8\ub2e4.<br class=\"pc\"> \uc2dc\uc7a5\uc774 \ub208\uc5ec\uaca8\ubcf8 <b>\ubcc0\uc218 \uc138 \uac00\uc9c0</b>\ub97c \ub530\ub77c\uac00 \ubd24\uc2b5\ub2c8\ub2e4."]},

  bill:{photo:{src:BASE+"photos/datacenter-ashburn.jpg",cap:"\ubbf8\uad6d \ubc84\uc9c0\ub2c8\uc544\uc8fc \uc560\uc288\ubc88\uc758 \ub370\uc774\ud130\uc13c\ud130 \ub2e8\uc9c0.",credit:"\uc0ac\uc9c4=Theodore Christopher / <a href='https://commons.wikimedia.org/wiki/File:Data_centers_in_Ashburn.jpg' target='_blank' rel='noopener'>Wikimedia Commons</a> / <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.ko' target='_blank' rel='noopener'>CC0</a> / \uc77c\ubd80 \uc798\ub77c \uc0ac\uc6a9",pos:"50% 62%"},
    title:"\ucc57\ubd07\uc740 OK, \uc804\uae30\ub8cc\ub294 \uae00\uc384\uc694?",
    body:["\ucc57\ubd07\uc758 \ub611\ub611\ud55c \ub2f5\ubcc0\uc740 \ubc18\uac11\uc2b5\ub2c8\ub2e4.",
          "\ud558\uc9c0\ub9cc \uc6b0\ub9ac \uc9d1 \uc804\uae30\ub8cc\ub97c \uc62c\ub9b0\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694?",
          "\uc804\uae30 \uba39\ub294 \ud558\ub9c8\uac00 \ub4e4\uc5b4\uc624\ub294\ub370 \uc65c \uc8fc\ubbfc\uc774 \ube44\uc6a9\uc744 \ub0b4\uc57c \ud558\ub290\ub0d0.<br>\ubbf8\uad6d \uc911\uac04\uc120\uac70\uc5d0\uc11c \ud654\ub450\uac00 \ub41c \uc5ec\ub860\uc740 \uc774 \ubb3c\uc74c\uc5d0\uc11c \ub098\uc654\uc2b5\ub2c8\ub2e4."]},

  issue:{title:"\uc7c1\uc810\uc740 \ub531 \ub450 \uac00\uc9c0, \uc804\uae30\uc640 \ubb3c",
    body:["\uc120\uac70\ub294 \ubbfc\uc8fc\ub2f9\uc758 \uc555\uc2b9\uc73c\ub85c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4. \uc774\ub978\ubc14 '\ube14\ub8e8\uc6e8\uc774\ube0c'\uc785\ub2c8\ub2e4.",
          "\ud55c\uad6d\ud22c\uc790\uc99d\uad8c \uae40\uac74\uc6b0 \uc5f0\uad6c\uc6d0\uc740 \ub370\uc774\ud130\uc13c\ud130 \uc9d3\uae30\uac00 \uc5b4\ub824\uc6cc\uc9c8 \uac83\uc73c\ub85c \ubd24\uc2b5\ub2c8\ub2e4.",
          "\ub370\uc774\ud130\uc13c\ud130\ub294 \ubcc0\uc804 \uc124\ube44\ub85c \uc804\uae30\ub97c \ub04c\uc5b4\uc635\ub2c8\ub2e4. \uc11c\ubc84\uac00 \ub0b4\ubfdc\ub294 \uc5f4\uc740 \ub0c9\uac01 \uc124\ube44\uac00 \ubb3c\ub85c \uc2dd\ud799\ub2c8\ub2e4.",
          "\uaddc\uc81c\ub97c \uc190\ubcfc \ub54c \ub3c4\ub9c8\uc5d0 \uc624\ub97c \uac83\ub3c4 \uc774 \ub450 \uac00\uc9c0\uc785\ub2c8\ub2e4.<br>\uc9c0\uc5ed \ubb3c\uc744 \uc5bc\ub9c8\ub098 \uc4f0\uac8c \ud560\uc9c0, \uc624\ub978 \uc804\uae30\uc694\uae08\uc740 \ub204\uac00 \ucc45\uc784\uc9c8\uc9c0."]},

  market:{title:"\ubc18\ub3c4\uccb4\ubd80\ud130 \uc8fc\uac00\uac00 \ud754\ub4e4\ub838\uc2b5\ub2c8\ub2e4",
    body:["<b>\ub370\uc774\ud130\uc13c\ud130 \uac74\uc124\uc774 \ub2a6\uc5b4\uc9c0\uba74 \uadf8 \uc548\uc5d0 \ub4e4\uc5b4\uac08 \ubc18\ub3c4\uccb4 \uc8fc\ubb38\ub3c4 \ubc00\ub824 \ud0c0\uaca9\uc744 \uc785\uac8c \ub429\ub2c8\ub2e4.</b>",
          "\uc120\uac70 \uc9c1\ud6c4 \ucf54\uc2a4\ud53c\ub294 \ud558\ub8e8 \ub9cc\uc5d0 5% \ub118\uac8c \ube60\uc84c\uc2b5\ub2c8\ub2e4. \uc774\ud2bf\ub0a0\uc5d4 \uc7a5\uc911 5000\uc120\ub3c4 \uae68\uc84c\uc2b5\ub2c8\ub2e4.",
          "\uc99d\uad8c\uac00\ub294 \uc138 \uac00\uc9c0\ub97c \ub530\uc838 \ubd24\uc2b5\ub2c8\ub2e4.<br>\uc804\uae30\ub294 \uc5b4\ub514\uc11c \uad6c\ud558\ub098, \ud55c\uad6d \ubc18\ub3c4\uccb4\ub294 \uad1c\ucc2e\ub098, \ub545 \ub9d0\uace0 \uc9c0\uc744 \uacf3\uc740 \uc5c6\ub098."]},

  c1:{title:"\uc804\uae30\ubd80\ud130 \ud574\uacb0\ud55c\ub2e4"},

  ms:{eb:"\ud574\ubc95 \u2460 \uc9c1\uc811 \ub9c8\ub828",
    title:"\ub9c8\uc774\ud06c\ub85c\uc18c\ud504\ud2b8\ub294 \ubc1c\uc804\uc18c\ub97c \uc606\uc5d0 \ub461\ub2c8\ub2e4",
    body:["\ube45\ud14c\ud06c\uc758 \ud574\ubc95\uc740 \uc758\uc678\ub85c \ub2e8\uc21c\ud569\ub2c8\ub2e4. \ud544\uc694\ud55c \uc804\uae30\ub294 \uc9c1\uc811 \ub9c8\ub828\ud558\uace0, \ub0a8\ub4e4\uc774 \ub9ce\uc774 \uc4f8 \ub54c\ub294 \uc7a0\uc2dc \ub35c \uc4f0\uaca0\ub2e4\ub294 \uac81\ub2c8\ub2e4.",
          "\ub9c8\uc774\ud06c\ub85c\uc18c\ud504\ud2b8\ub294 \ud14d\uc0ac\uc2a4 \ub370\uc774\ud130\uc13c\ud130\uc5d0 \uc4f8 \uc804\uae30\ub97c 20\ub144\uac04 \ub530\ub85c \ubc1b\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4.",
          "\uc170\ube0c\ub860\uc774 \ub370\uc774\ud130\uc13c\ud130 \ubc14\ub85c \uc606\uc5d0 \uc804\uc6a9 \uac00\uc2a4\ubc1c\uc804\uc18c\ub97c \uc9c0\uc744 \uacc4\ud68d\uc785\ub2c8\ub2e4. \ud544\uc694\ud55c \uc804\uae30\ub97c \ub530\ub85c \ub9c8\ub828\ud574 \uc9c0\uc5ed \uc804\ub825\ub9dd\uc758 \ubd80\ub2f4\uc744 \uc904\uc774\uaca0\ub2e4\ub294 \uad6c\uc0c1\uc785\ub2c8\ub2e4."]},

  google:{eb:"\ud574\ubc95 \u2461 \ub35c \uc4f0\uae30",
    title:"\uad6c\uae00\uc740 \uc804\uae30\ub97c \ub9ce\uc774 \uc4f0\ub294 \uc2dc\uac04\uc744 \ud53c\ud574 \uac11\ub2c8\ub2e4",
    body:["\uad6c\uae00\uc740 \uc804\ub825\ud68c\uc0ac\ub4e4\uacfc \ucd1d 1GW \uaddc\ubaa8\uc758 \uc804\ub825 \uc218\uc694 \uc870\uc808 \uacc4\uc57d\uc744 \ub9fa\uc5c8\uc2b5\ub2c8\ub2e4.",
          "\uc804\uae30 \uc0ac\uc6a9\ub7c9\uc774 \ud06c\uac8c \ub298\uc5b4\ub098\ub294 \uc2dc\uac04\uc5d0\ub294 \uae09\ud558\uc9c0 \uc54a\uc740 AI \uc791\uc5c5\uc744 \ub4a4\ub85c \ubbf8\ub8f9\ub2c8\ub2e4."],
    figcap:"\uc804\uae30 \uc0ac\uc6a9\ub7c9\uc774 \ud06c\uac8c \ub298\uc5b4\ub098\ub294 \uc2dc\uac04\uc5d0 \ub370\uc774\ud130\uc13c\ud130\uac00 \uc0ac\uc6a9\ub7c9\uc744 \uc904\uc774\ub294 \ubc29\uc2dd.",figcredit:"\uac1c\ub150\ub3c4"},

  sofc:{photo:{src:BASE+"photos/bloom-server.jpg",cap:"\uc774\ubca0\uc774 \ubcf8\uc0ac \uc55e\uc5d0 \ub193\uc778 \ube14\ub8f8\uc5d0\ub108\uc9c0 \uc5f0\ub8cc\uc804\uc9c0(2010\ub144).",credit:"\uc0ac\uc9c4=Bloom Energy(Jakub Mosur \ucd2c\uc601) / <a href='https://commons.wikimedia.org/wiki/File:Bloom_Energy_Servers_at_eBay_HQ_-_4405533596.jpg' target='_blank' rel='noopener'>Wikimedia Commons</a> / <a href='https://creativecommons.org/licenses/by/2.0/deed.ko' target='_blank' rel='noopener'>CC BY 2.0</a> / \uc77c\ubd80 \uc798\ub77c \uc0ac\uc6a9",pos:"35% 88%"},
    title:"\ub0c9\uac01\ud0d1 \uc5c6\ub294 \ubc1c\uc804\uae30\uac00 \uc788\ub2e4\uace0\uc694?",
    body:["\ub370\uc774\ud130\uc13c\ud130 \ub9c8\ub2f9\uc5d0 \ub193\uace0 \uadf8 \uc790\ub9ac\uc5d0\uc11c \uc804\uae30\ub97c \ub9cc\ub4dc\ub294 \uc124\ube44\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uace0\uccb4\uc0b0\ud654\ubb3c\uc5f0\ub8cc\uc804\uc9c0(SOFC)\uc785\ub2c8\ub2e4. \ubbf8\uad6d \ube14\ub8f8\uc5d0\ub108\uc9c0\uac00 \ub9cc\ub4ed\ub2c8\ub2e4.",
          "\uae40 \uc5f0\uad6c\uc6d0 \uc124\uba85\uc740 \uc774\ub807\uc2b5\ub2c8\ub2e4. \uae30\uc874 \ubc1c\uc804\uc18c\uc640 \ub2ec\ub9ac \ub0c9\uac01\ud0d1\uc774 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4. \ubb3c\uc740 \uc5f0\ub8cc\ub97c \ucc98\ub9ac\ud558\ub294 \uacfc\uc815\uc5d0\uc11c\ub9cc \uc870\uae08 \uc4f4\ub2e4\ub294 \uc124\uba85\uc785\ub2c8\ub2e4.",
          "\uc804\ub825\ub9dd\uc744 \uac70\uce58\uc9c0 \uc54a\uc73c\ub2c8 \uc9c0\uc5ed \uc804\ub825\ub9dd\uc5d0\uc11c \ub04c\uc5b4 \uc4f8 \uc804\uae30\ub3c4 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]},

  dec:{title:"\ub2e4\uc74c \uace0\ube44\ub294 12\uc6d4 10\uc77c",
    body:["\ud14d\uc0ac\uc2a4\uc8fc\ub294 \ub370\uc774\ud130\uc13c\ud130\uac00 \uc804\ub825\ub9dd\uacfc \uc9c0\uc5ed \ubb3c \uc0ac\uc6a9\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \uc870\uc0ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "\uc804\ub825\ub9dd \uc6b4\uc601\uae30\uad00(ERCOT)\uc774 12\uc6d4 10\uc77c\uae4c\uc9c0 \ucd5c\uc885 \ubcf4\uace0\uc11c\ub97c \ub0c5\ub2c8\ub2e4. \uc55e\uc73c\ub85c \uaddc\uc81c\uac00 \uc5b4\ub514\ub85c \uac08\uc9c0 \uac00\ub2a0\ud560 \uc790\ub8cc\uc785\ub2c8\ub2e4."]},

  c2:{title:"\ud55c\uad6d \ubc18\ub3c4\uccb4\ub294 \uad1c\ucc2e\uc744\uae4c?"},

  delay:{eb:"\uaddc\ubaa8",
    title:"AI \ud22c\uc790, \ucde8\uc18c\ubcf4\ub2e4 \uc9c0\uc5f0\ub420 \uac00\ub2a5\uc131",
    body:["\uaddc\uc81c\uac00 \uc138\uc9c0\uba74 AI \ud22c\uc790\uac00 \uc544\uc608 \uba48\ucd94\ub294 \uac74 \uc544\ub2d0\uae4c\uc694?",
          "\ubbf8\ub798\uc5d0\uc14b\uc99d\uad8c\uc774 \ub530\uc838 \ubcf4\ub2c8 \uaddc\uc81c\uc5d0 \uac78\ub9b4 \uc218 \uc788\ub294 \ub370\uc774\ud130\uc13c\ud130 \uc6a9\ub7c9\uc740 \ucd5c\ub300 13GW. 2035\ub144\uae4c\uc9c0 \ub298\uc5b4\ub0a0 150GW\uc758 9%\ucbe4\uc785\ub2c8\ub2e4.",
          "\uadf8\ub798\uc11c AI \ud22c\uc790\uac00 \ucde8\uc18c\ub418\uae30\ubcf4\ub2e4 \uc9c0\uc5f0\ub420 \uac00\ub2a5\uc131\uc774 \ud06c\ub2e4\uace0 \ubd24\uc2b5\ub2c8\ub2e4."]},

  calc:{solo:true,
    figcap:"\ubbf8\uad6d \ub370\uc774\ud130\uc13c\ud130 \uc124\uce58 \uc6a9\ub7c9. 2035\ub144\uae4c\uc9c0 150GW\uac00 \ucd94\uac00\ub420 \uc804\ub9dd\uc774\uace0, \uaddc\uc81c \uc601\ud5a5\uad8c\uc740 \uadf8\uc911 \ucd5c\ub300 13GW\uc785\ub2c8\ub2e4.",figcredit:"\uc790\ub8cc: \uc544\ub9ac\uc2a4\ud0c0(OCP \uae00\ub85c\ubc8c \uc11c\ubc0b 2026), \ubbf8\ub798\uc5d0\uc14b\uc99d\uad8c \ub9ac\uc11c\uce58\uc13c\ud130 \u00b7 2026~2035\ub144\uc740 \ube14\ub8f8\ubc84\uadf8NEF \uc804\ub9dd"},

  korea:{eb:"\ubbf8\uad6d \ubc16",
    title:"\ud55c\uad6d\uc5d0 \ub354 \uc9c0\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4",
    body:["\ud55c\uad6d \ub4f1 \ubbf8\uad6d \uc678 \uc9c0\uc5ed\uc5d0 \uc99d\uc124\ud560 \uac00\ub2a5\uc131\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",
          "\ucd5c\uc720\uc9c4 \ubbf8\ub798\uc5d0\uc14b\uc99d\uad8c \uc5f0\uad6c\uc6d0\uc740 \ube45\ud14c\ud06c\uc758 \uc2e0\uaddc \ud22c\uc790\uac00 \uc544\uc2dc\uc544\ub85c \ubd84\uc0b0\ub420 \uac00\ub2a5\uc131\uc5d0 \uc8fc\ubaa9\ud588\uc2b5\ub2c8\ub2e4.",
          "\uc2f1\uac00\ud3ec\ub974\u00b7\ub3c4\ucfc4\u00b7\ud64d\ucf69\uc740 \ub300\uaddc\ubaa8 \uc804\ub825\uacfc \ub113\uc740 \ubd80\uc9c0\ub97c \ud655\ubcf4\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \ud55c\uad6d\uc740 \ub458 \ub2e4 \ud655\ubcf4\ud560 \uc218 \uc788\ub294 \uacf3\uc73c\ub85c \uaf3d\ud614\uc2b5\ub2c8\ub2e4.",
          "\ub370\uc774\ud130\uc13c\ud130\uc640 \ud574\uc800\ucf00\uc774\ube14\uc744 \ud568\uaed8 \uac00\uc9c4 \uad6d\ub0b4 \ud1b5\uc2e0 3\uc0ac\uac00 \uc218\ud61c\ub97c \ubcfc \uc218 \uc788\ub2e4\ub294 \ubd84\uc11d\uc785\ub2c8\ub2e4."]},

  inside:{title:"\ub9c8\ub0e5 \ubbf8\ub8f0 \uc218\ub3c4 \uc5c6\ub294 \uc0ac\uc815",
    body:["\ub370\uc774\ud130\uc13c\ud130 \ud22c\uc790\ub97c \ub2a6\ucd94\uba74 \ube45\ud14c\ud06c\ub3c4 \ub2f9\uc7a5 \ub098\uac08 \ub3c8\uc774 \uc904\uace0, \uc0c8\ub85c \ube5a\uc744 \ub0bc \ubd80\ub2f4\ub3c4 \ub35c \uc218 \uc788\uaca0\uc8e0.",
          "\ud558\uc9c0\ub9cc \uc774\ubbf8 \uace0\uac1d\uc0ac\uc640 \ub9fa\uc5b4 \ub454 \ud074\ub77c\uc6b0\ub4dc \uacc4\uc57d\uc774 \ub9ce\uc2b5\ub2c8\ub2e4. \uc57d\uc18d\uc744 \uc9c0\ud0a4\ub824\uba74 \ub370\uc774\ud130\uc13c\ud130\ub97c \uc9c0\uc5b4\uc57c \ud569\ub2c8\ub2e4.",
          "\uac8c\ub2e4\uac00 \uc218\uc694\ub294 \uacc4\uc18d \ub298\uace0, \ud074\ub77c\uc6b0\ub4dc \ub9e4\ucd9c\ub3c4 \ud06c\uac8c \ub6f0\uace0 \uc788\ub294 \uc0c1\ud669.",
          "\uadf8\ub7f0 \ub9cc\ud07c \uacc4\uc18d \ubbf8\ub8e8\uae30\ub294 \uc5b4\ub835\ub2e4\ub294 \uac8c \ubcf4\uace0\uc11c\uc758 \ud310\ub2e8\uc785\ub2c8\ub2e4."]},

  hbm:{photo:{src:BASE+"photos/samsung-hbm.jpg",src2:BASE+"photos/skhynix-hbm.jpg",stack:true,cap:"\uc0bc\uc131\uc804\uc790(\uc704)\uc640 SK\ud558\uc774\ub2c9\uc2a4\uc758 HBM4.",credit:"\uac01 \uc0ac \uc81c\uacf5"},
    title:"HBM\uc740 \uacc4\uc57d\uc73c\ub85c \ubb36\uc5ec \uc788\uc2b5\ub2c8\ub2e4",
    body:["\ud55c\uad6d \ubc18\ub3c4\uccb4\uc8fc\ub294 \uc81c\ud488\ubcc4\ub85c \ub098\ub220 \ubd10\uc57c \ud569\ub2c8\ub2e4.",
          "\uad8c\uc601\ubc30\u00b7\uae40\uc601\uac74 \ubbf8\ub798\uc5d0\uc14b\uc99d\uad8c \uc5f0\uad6c\uc6d0\uc740 \"\uc7a5\uae30\uacc4\uc57d(LTA)\uc73c\ub85c \uc218\uc694\uac00 \ubb36\uc778 \uace0\ub300\uc5ed\ud3ed\uba54\ubaa8\ub9ac(HBM)\ub294 \ube44\uad50\uc801 \uc548\uc815\uc801\uc77c \uac83\"\uc774\ub77c\uace0 \uc9da\uc5c8\uc2b5\ub2c8\ub2e4."]},

  dram:{title:"\ubc94\uc6a9 D\ub7a8\uacfc SSD\ub294 \uc5b4\ub5a8\uae4c\uc694?",
    body:["\ubc94\uc6a9 D\ub7a8\uacfc SSD\ub294 CPU\uc640 \ud568\uaed8 \uc11c\ubc84\uc5d0 \ub4e4\uc5b4\uac11\ub2c8\ub2e4. \uc11c\ubc84\ub97c \ub193\uc744 \ub370\uc774\ud130\uc13c\ud130\uac00 \ub2a6\uc5b4\uc9c0\uba74 \uc8fc\ubb38\ub3c4 \ub530\ub77c \ubc00\ub9b4 \uc218 \uc788\uaca0\uc8e0.",
          "\ub2e4\ub9cc, \uac71\uc815\ud560 \uc815\ub3c4\ub294 \uc544\ub2c8\ub77c\ub294 \uac8c \ub450 \uc5f0\uad6c\uc6d0\uc758 \uacb0\ub860\uc785\ub2c8\ub2e4.",
          "\"HBM \uc804\ud658\uc73c\ub85c \ubc94\uc6a9 D\ub7a8 \uacf5\uae09\uc774 \ub354 \ube60\ub4ef\ud574\uc9c0\ub294 \uc810\uc744 \uace0\ub824\ud558\uba74 \uc6b0\ub824 \uc694\uc778\uc740 \uc544\ub2c8\ub2e4\"\ub77c\ub294 \uac81\ub2c8\ub2e4.",
          "\ubc18\ub3c4\uccb4 \ud68c\uc0ac\ub4e4\uc774 \uc0dd\uc0b0 \ub77c\uc778\uc744 HBM \ucabd\uc73c\ub85c \ub3cc\ub9ac\uba74\uc11c \ubc94\uc6a9 D\ub7a8\uc740 \ub9cc\ub4e4 \uc218 \uc788\ub294 \uc591\uc774 \uc904\uc5b4\ub4e0 \uc0c1\ud669. \uc8fc\ubb38\uc774 \uc870\uae08 \ubc00\ub824\ub3c4 \uacf5\uae09\uc774 \ube60\ub4ef\ud574 \ucda9\uaca9\uc740 \ud06c\uc9c0 \uc54a\ub2e4\ub294 \uc598\uae30\uc785\ub2c8\ub2e4."]},

  c3:{title:"\ub545\uc774 \uc548 \ub418\uba74 \ubc14\ub2e4\ub85c"},

  sea:{title:"\ub370\uc774\ud130\uc13c\ud130\uac00 \ubc14\ub2e4\uc5d0 \ub465\ub465",
    body:["\ub545\uc5d0\uc11c \ud5c8\uac00\ubc1b\uae30 \uc5b4\ub835\ub2e4\uba74 \ubb3c \uc704\ub294 \uc5b4\ub5a8\uae4c\uc694?",
          "\ud55c\uad6d\ud22c\uc790\uc99d\uad8c \uac15\uacbd\ud0dc \uc5f0\uad6c\uc6d0\uc774 \uaf3d\uc740 \ub300\uc548\uc774 \ubd80\uc720\uc2dd \ub370\uc774\ud130\uc13c\ud130(FDC)\uc785\ub2c8\ub2e4.",
          "\uc11c\ubc84\uc640 \uc804\ub825\u00b7\ub0c9\uac01 \uc124\ube44\ub97c \ud1b5\uc9f8\ub85c \ubb3c\uc5d0 \ub744\uc6b4 \uc2dc\uc124\uc785\ub2c8\ub2e4. \uc870\uc120\uc18c\uc5d0\uc11c \ub9cc\ub4e4\uc5b4 \ub04c\uace0 \uc640 \ubb3c\uac00\uc5d0 \ubb36\uc5b4 \ub461\ub2c8\ub2e4."]},

  fdc:{photo:{src:BASE+"photos/shi-fdc-model.jpg",cap:"\ub370\uc774\ud130\uc13c\ud130\uc6d4\ub4dc\uc5d0 \uc804\uc2dc\ub41c \uc0bc\uc131\uc911\uacf5\uc5c5 FDC \ubaa8\ud615.",credit:"\uc0bc\uc131\uc911\uacf5\uc5c5 \uc81c\uacf5",pos:"60% 62%"},
    title:"50\u33bf\uae09 2\uae30, \ubcf8\uacc4\uc57d\uc774 \ub208\uc55e",
    body:["\uc0bc\uc131\uc911\uacf5\uc5c5\uc774 \ubbf8\uad6d \ub370\uc774\ud130\uc13c\ud130 \uac1c\ubc1c\uc0ac \ubb34\uc2a4\ud14c\ub9ac\uc548\uacfc \ubcf8\uacc4\uc57d\uc744 \uc55e\ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "50\u33bf\uae09 FDC 2\uae30\ub97c \uc124\uacc4\ubd80\ud130 \uc2dc\uacf5\uae4c\uc9c0 \ub9e1\ub294 \uacc4\uc57d\uc785\ub2c8\ub2e4. \uc62c\ud574 4\ubd84\uae30 \uc548\uc5d0 \uccb4\uacb0\ub420 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4.",
          "\uac15 \uc5f0\uad6c\uc6d0\uc740 \ubcf8\uacc4\uc57d\uc774 \uc131\uc0ac\ub418\uba74 \"\uad00\ub828 \uc778\ud5c8\uac00 \uc694\uac74\ub4e4\uc774 \uc2e4\uc9c8\uc801\uc73c\ub85c \ud574\uc18c\ub410\uc74c\uc744 \uc758\ubbf8\ud55c\ub2e4\"\uba70 \uc138\uacc4 FDC \uc2dc\uc7a5\uc758 \ucd08\uc11d\uc774 \ub420 \uac83\uc73c\ub85c \ub0b4\ub2e4\ubd24\uc2b5\ub2c8\ub2e4."]},

  rule:{title:"\uc8fc\ubbfc\uacfc \ubd80\ub52a\uce60 \uc77c\uc774 \uc801\uc2b5\ub2c8\ub2e4",
    body:["\ubb3c\ub860 \ubc14\ub2e4\uc5d0 \ub744\uc6b4\ub2e4\uace0 \uaddc\uc81c\uac00 \uc0ac\ub77c\uc9c0\ub294 \uac74 \uc544\ub2c8\uc8e0. FDC\ub3c4 \uaddc\uc81c\ub97c \ud1b5\uacfc\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "\ud558\uc9c0\ub9cc \uc721\uc0c1 \ub370\uc774\ud130\uc13c\ud130\uac00 \ub9c9\ud78c \uc774\uc720\ub294 \ubb3c\uacfc \uc804\uae30\uc694\uae08\uc744 \ub458\ub7ec\uc2fc \uc8fc\ubbfc \ubc18\ubc1c\uc774\uc5c8\uc2b5\ub2c8\ub2e4.",
          "\ubc14\ub2e4 \uc704 \uc2dc\uc124\uc740 \uc8fc\ubbfc \uc0dd\ud65c\uacfc \uc9c1\uc811 \ubd80\ub52a\uce60 \uc77c\uc774 \uc801\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub9cc\ud07c \uc721\uc0c1\ubcf4\ub2e4 \ud480\uae30 \uc27d\ub2e4\ub294 \uac8c \uac15 \uc5f0\uad6c\uc6d0\uc758 \ud310\ub2e8\uc785\ub2c8\ub2e4."]},

  how:{eb:"\ubb3c\uacfc \uc804\uae30",
    title:"\ubb3c\uc740 \uc544\ub07c\uace0, \uc804\uae30\ub294 \uadfc\ucc98\uc5d0\uc11c \ubc14\ub85c \uc5bb\uc2b5\ub2c8\ub2e4",
    body:["\uc721\uc0c1 \ub370\uc774\ud130\uc13c\ud130\ub294 \ud754\ud788 \ubb3c\uc744 \uc99d\ubc1c\uc2dc\ucf1c \uc5f4\uc744 \uc2dd\ud799\ub2c8\ub2e4. \uadf8\ub9cc\ud07c \uc9c0\uc5ed\uc758 \ubb3c\uc774 \uc904\uc5b4\ub4ed\ub2c8\ub2e4.",
          "\uac1c\ubc1c\uc0ac \ubb34\uc2a4\ud14c\ub9ac\uc548\uc740 \ubb3c\uc744 \uc99d\ubc1c\uc2dc\ud0a4\uc9c0 \uc54a\ub294 \ub0c9\uac01 \ubc29\uc2dd\uc744 \uc4f4\ub2e4\uace0 \ubc1d\ud614\uc2b5\ub2c8\ub2e4. \ub9c8\uc2e4 \uc218 \uc788\ub294 \ubb3c\uc744 \ub04c\uc5b4\ub2e4 \uc4f0\uc9c0 \uc54a\uace0, \uc4f0\uace0 \ub09c \ubb3c\uc744 \uac15\uc774\ub098 \ubc14\ub2e4\uc5d0 \ud758\ub824\ubcf4\ub0b4\uc9c0\ub3c4 \uc54a\ub294\ub2e4\ub294 \uc124\uba85\uc785\ub2c8\ub2e4.",
          "\uc804\uae30\ub294 \uc774\ubbf8 \ub3cc\uc544\uac00\ub294 \ubc1c\uc804\uc18c \ubc14\ub85c \uc55e \ubb3c \uc704\uc5d0 FDC\ub97c \ub300\uace0 \ubc1b\uc2b5\ub2c8\ub2e4. \ub113\uc740 \ub545\uc744 \ub530\ub85c \uad6c\ud558\uc9c0 \uc54a\uc544\ub3c4 \ubc1c\uc804\uc18c \uc804\uae30\ub97c \uac00\uae4c\uc774\uc11c \uc4f8 \uc218 \uc788\ub2e4\ub294 \uac8c \uac1c\ubc1c\uc0ac\uc758 \uc124\uba85\uc785\ub2c8\ub2e4.",
          "\uc120\uac70\uc5d0\uc11c \ubd88\uac70\uc9c4 \ub450 \uc7c1\uc810, \ubb3c\uacfc \uc804\uae30\ub97c \ube44\ucf1c \uac00\ub294 \uc124\uacc4\uc785\ub2c8\ub2e4."]},

  cost:{title:"\uc9d3\ub294 \ub3c8\ub3c4, \uad74\ub9ac\ub294 \ub3c8\ub3c4 \ub35c \ub4e0\ub2e4",
    body:["\uac15 \uc5f0\uad6c\uc6d0\uc740 FDC\uac00 \uc0ac\uc5c5\ube44\uc640 \uc6b4\uc601\ube44 \ubaa8\ub450 \uc721\uc0c1 \ub370\uc774\ud130\uc13c\ud130\ubcf4\ub2e4 \ub0ab\ub2e4\uace0 \ubd24\uc2b5\ub2c8\ub2e4."]},

  yard:{photo:{src:BASE+"photos/drillship.jpg",pos:"50% 55%",src2:BASE+"photos/drillship-ds11.jpg",pos2:"52% 50%",src3:BASE+"photos/drillship-champion.jpg",pos3:"53% 50%",cap:"\uc0bc\uc131\uc911\uacf5\uc5c5\uc774 \uc9c0\uc740 '\uc5d4\uc2a4\ucf54 DS-6', \ud55c\ud654\uc624\uc158(\uc61b \ub300\uc6b0\uc870\uc120\ud574\uc591)\uc758 '\uc5d4\uc2a4\ucf54 DS-11', HD\ud604\ub300\uc911\uacf5\uc5c5\uc758 '\ub525\uc6cc\ud130 \ucc54\ud53c\uc5b8'(\uc67c\ucabd\u00b7\uc704\ubd80\ud130).",credit:"\uc0ac\uc9c4=George E. Koronaios / <a href='https://commons.wikimedia.org/wiki/File:The_drilling_ship_ENSCO_DS-6_in_the_Saronic_Gulf_on_July_27,_2021.jpg' target='_blank' rel='noopener'>Wikimedia Commons</a> / <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.ko' target='_blank' rel='noopener'>CC BY-SA 4.0</a>, Wolfgang Fricke / <a href='https://commons.wikimedia.org/wiki/File:Ensco_DS-11_IMO_9626170_O_Las_Palmas_15-02-2025.jpg' target='_blank' rel='noopener'>Wikimedia Commons</a> / <a href='https://creativecommons.org/licenses/by/3.0/deed.ko' target='_blank' rel='noopener'>CC BY 3.0</a>, Michael Elleray / <a href='https://commons.wikimedia.org/wiki/File:Deepwater_Champion_(5443740072).jpg' target='_blank' rel='noopener'>Wikimedia Commons</a> / <a href='https://creativecommons.org/licenses/by/2.0/deed.ko' target='_blank' rel='noopener'>CC BY 2.0</a> / \uc77c\ubd80 \uc798\ub77c \uc0ac\uc6a9"},
    title:"2010\ub144 \ub4dc\ub9b4\uc2ed, \uae30\uc5b5\ud558\uc2dc\ub098\uc694?",
    body:["\ub4dc\ub9b4\uc2ed\uc740 \uae4a\uc740 \ubc14\ub2e4 \ubc11 \uc720\uc804\uc744 \ub6ab\ub294 \ubc30\uc785\ub2c8\ub2e4.",
          "\uace0\uc720\uac00\ub85c \uc2ec\ud574 \uc720\uc804 \uac1c\ubc1c\uc774 \ubd90\uc774\ub358 2010\ub144, \ud55c\uad6d \uc870\uc120\uc0ac\ub4e4\uc774 \uc774 \uc2dc\uc7a5\uc744 \ub3c5\uc2dd\ud588\uc2b5\ub2c8\ub2e4."]},

  yard2:{title:"\uc774\ubc88\uc5d0\ub3c4 \ud55c\uad6d \uc870\uc120\uc774 \uc120\ud0dd\ubc1b\uc744\uae4c\uc694?",
    body:["\uac15 \uc5f0\uad6c\uc6d0\uc740 FDC\uc5d0\uc11c\ub3c4 \uac00\ub2a5\uc131\uc774 \uc788\ub2e4\uace0 \ubd05\ub2c8\ub2e4.",
          "\uc0bc\uc131\uc911\uacf5\uc5c5\u00b7\ud55c\ud654\uc624\uc158\u00b7HD\ud604\ub300\uc911\uacf5\uc5c5\uc774 \ud575\uc2ec \uacf5\uae09\uc790\ub85c \ub5a0\uc624\ub97c \uc7a0\uc7ac\ub825\uc774 \uc788\ub2e4\ub294 \ud3c9\uac00\uc785\ub2c8\ub2e4."]},

  end:{title:"\uc120\uac70\uac00 \ubc14\uafbc \ub370\uc774\ud130\uc13c\ud130,<br>\uc138 \uac00\uc9c0 \ubcc0\uc218",
    after:"\uc99d\uad8c\uac00\uc758 \uc2dc\uac01\uc740 \ud55c\uacf3\uc73c\ub85c \ubaa8\uc785\ub2c8\ub2e4. \uaddc\uc81c\uac00 \uc138\uc838\ub3c4 \ub370\uc774\ud130\uc13c\ud130 \ud22c\uc790\ub294 \uae38\uc744 \ubc14\uafd4 \uacc4\uc18d\ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uac71\uc815\ub9cc \ud560 \uc0c1\ud669\uc740 \uc544\ub2c8\ub77c\ub294 \uc598\uae30\uc785\ub2c8\ub2e4."}
};
(function(){
  for(var i=0;i<CONFIG.steps.length;i++){
    var st=CONFIG.steps[i],c=COPY[st.id];
    if(!c)continue;
    for(var k in c)if(c.hasOwnProperty(k))st[k]=c[k];
  }
})();

/* ---------- \ubcf8\ubb38 DOM \uc0dd\uc131 ---------- */
var story=ROOT.getElementById("story"),rail=ROOT.getElementById("rail"),labelsEl=ROOT.getElementById("labels");
var stepEls=[],navEls=[],labelItems=[];

function capacitySVG(){
  // \ubbf8\uad6d \ub370\uc774\ud130\uc13c\ud130 \uc124\uce58 \uc6a9\ub7c9(GW). 2010~2025 \uc2e4\uc801, 2026~2035 \uc804\ub9dd. \ub9c9\ub300 \ub192\uc774\ub294 \ubcf4\uace0\uc11c \uadf8\ub9bc\uc5d0\uc11c \uc77d\uc740 \uadfc\uc0bf\uac12.
  var v=[4,5,5,6,7,8,9,10,12,14,17,21,23,27,38,48,56,70,86,102,118,135,153,167,181,193];
  var W=560,H=392,x0=46,x1=532,yb=236,yt=30,n=v.length,bw=(x1-x0)/n,i,s;
  function Y(g){return yb-(yb-yt)*g/200;}
  s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="\ubbf8\uad6d \ub370\uc774\ud130\uc13c\ud130 \uc124\uce58 \uc6a9\ub7c9\uacfc \uaddc\uc81c \uc601\ud5a5\uad8c" style="display:block;width:100%;height:auto;background:#0b151d">';
  var gs=[0,50,100,150,200];
  for(i=0;i<gs.length;i++){
    s+='<line x1="'+x0+'" y1="'+Y(gs[i])+'" x2="'+x1+'" y2="'+Y(gs[i])+'" stroke="rgba(255,255,255,'+(i?0.08:0.3)+')"/>';
    s+='<text x="'+(x0-8)+'" y="'+(Y(gs[i])+4)+'" text-anchor="end" font-size="12" fill="#8fa1ad">'+gs[i]+'</text>';
  }
  s+='<text x="'+(x0-8)+'" y="18" text-anchor="end" font-size="12" fill="#8fa1ad">GW</text>';
  for(i=0;i<n;i++){
    var x=x0+i*bw+bw*0.16,fc=i<=15?"#7f8c96":"#f0a95a";
    s+='<rect x="'+x.toFixed(1)+'" y="'+Y(v[i]).toFixed(1)+'" width="'+(bw*0.68).toFixed(1)+'" height="'+(yb-Y(v[i])).toFixed(1)+'" fill="'+fc+'"/>';
  }
  var xs=[[0,"2010"],[5,"2015"],[10,"2020"],[15,"2025"],[20,"2030"],[25,"2035"]];
  for(i=0;i<xs.length;i++)s+='<text x="'+(x0+(xs[i][0]+0.5)*bw).toFixed(1)+'" y="'+(yb+18)+'" text-anchor="middle" font-size="12" fill="#8fa1ad">'+xs[i][1]+'</text>';
  s+='<text x="'+x1+'" y="22" text-anchor="end" font-size="15" font-weight="900" fill="#fff">2035\ub144\uae4c\uc9c0 150GW \ucd94\uac00</text>';
  s+='<rect x="'+x0+'" y="'+(yb+34)+'" width="10" height="10" fill="#7f8c96"/><text x="'+(x0+15)+'" y="'+(yb+43)+'" font-size="12" fill="#c3ced6">\uc2e4\uc801</text>';
  s+='<rect x="'+(x0+52)+'" y="'+(yb+34)+'" width="10" height="10" fill="#f0a95a"/><text x="'+(x0+67)+'" y="'+(yb+43)+'" font-size="12" fill="#c3ced6">\uc804\ub9dd</text>';
  // \uc0c8\ub85c \uc0dd\uae38 150GW \uac00\uc6b4\ub370 13GW
  var by=yb+70,bh=26,full=x1-x0,part=full*13/150;
  s+='<text x="'+x0+'" y="'+(by-8)+'" font-size="13" font-weight="700" fill="#e3eaef">\uc0c8\ub85c \uc0dd\uae38 150GW</text>';
  s+='<rect x="'+x0+'" y="'+by+'" width="'+full+'" height="'+bh+'" fill="#f0a95a"/>';
  s+='<rect x="'+x0+'" y="'+by+'" width="'+part.toFixed(1)+'" height="'+bh+'" fill="#ff5a3c"/>';
  s+='<line x1="'+(x0+part/2).toFixed(1)+'" y1="'+(by+bh)+'" x2="'+(x0+part/2).toFixed(1)+'" y2="'+(by+bh+10)+'" stroke="#ff7a59"/>';
  s+='<text x="'+x0+'" y="'+(by+bh+26)+'" font-size="14" font-weight="900" fill="#ff7a59">\uaddc\uc81c \uc601\ud5a5\uad8c \ucd5c\ub300 13GW \u00b7 \uc57d 9%</text>';
  return s+"</svg>";
}
function demandSVG(){
  // \ud558\ub8e8 \uc804\ub825 \uc218\uc694(\ud68c\uc0c9)\uc640 \ub370\uc774\ud130\uc13c\ud130 \uc0ac\uc6a9\ub7c9(\ubbfc\ud2b8) \uac1c\ub150\ub3c4
  var W=560,H=300,x0=44,x1=536,y0=250,i,p="",q="";
  function X(h){return x0+(x1-x0)*h/24;}
  function D(h){return 0.42+0.2*Math.exp(-Math.pow((h-9)/3.2,2))+0.5*Math.exp(-Math.pow((h-18.5)/2.4,2));}
  function U(h){var d=Math.max(0,1-Math.abs(h-18.5)/2.6);return 0.5-0.26*(d>0?Math.min(1,d*1.8):0);}
  for(i=0;i<=96;i++){var h=i/4;p+=(i?"L":"M")+X(h).toFixed(1)+" "+(y0-D(h)*190).toFixed(1);q+=(i?"L":"M")+X(h).toFixed(1)+" "+(y0-U(h)*190).toFixed(1);}
  var s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="\uc804\ub825 \uc218\uc694\uac00 \ubab0\ub9ac\ub294 \uc2dc\uac04\uc5d0 \ub370\uc774\ud130\uc13c\ud130\uac00 \uc0ac\uc6a9\ub7c9\uc744 \uc904\uc774\ub294 \uac1c\ub150\ub3c4" style="display:block;width:100%;height:auto;background:#0b151d">';
  s+='<rect x="'+X(16)+'" y="26" width="'+(X(21)-X(16))+'" height="'+(y0-26)+'" fill="rgba(255,122,89,.14)"/>';
  s+='<text x="'+X(18.5)+'" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#ff9d84">\uc804\uae30\ub97c \ub9ce\uc774 \uc4f0\ub294 \uc2dc\uac04</text>';
  s+='<path d="'+p+'L'+x1+' '+y0+'L'+x0+' '+y0+'Z" fill="rgba(160,178,190,.16)"/><path d="'+p+'" fill="none" stroke="#9fb0bb" stroke-width="2"/>';
  s+='<path d="'+q+'" fill="none" stroke="#5ef2c8" stroke-width="3.5" stroke-linejoin="round"/>';
  s+='<line x1="'+x0+'" y1="'+y0+'" x2="'+x1+'" y2="'+y0+'" stroke="#55687a"/>';
  var ticks=[0,6,12,18,24];
  for(i=0;i<ticks.length;i++)s+='<text x="'+X(ticks[i])+'" y="'+(y0+20)+'" text-anchor="middle" font-size="13" fill="#8fa1ad">'+ticks[i]+'\uc2dc</text>';
  s+='<text x="'+X(8.6)+'" y="'+(y0-D(9)*190-12)+'" text-anchor="middle" font-size="14" fill="#c3ced6">\uc9c0\uc5ed \uc804\uccb4 \uc804\ub825 \uc218\uc694</text>';
  s+='<text x="'+X(3.2)+'" y="'+(y0-0.5*190-12)+'" text-anchor="middle" font-size="14" font-weight="700" fill="#5ef2c8">\ub370\uc774\ud130\uc13c\ud130 \uc0ac\uc6a9\ub7c9</text>';
  s+='<text x="'+X(18.5)+'" y="'+(y0-0.24*190+24)+'" text-anchor="middle" font-size="13" font-weight="700" fill="#5ef2c8">\uc7a0\uc2dc \uc904\uc784</text>';
  return s+"</svg>";
}
function chartSVG(){
  var d=CONFIG.index,W=380,H=150,pl=8,pr=8,pt=26,pb=30,i,min=1e9,max=-1e9;
  for(i=0;i<d.length;i++){if(d[i].v<min)min=d[i].v;if(d[i].v>max)max=d[i].v;}
  var pad=(max-min)*0.12;min-=pad;max+=pad;
  var pts=[],s='<svg class="idx" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="\ucf54\uc2a4\ud53c \ud750\ub984">';
  for(i=0;i<d.length;i++){
    var x=pl+(W-pl-pr)*((i+0.5)/d.length),y=pt+(H-pt-pb)*(1-(d[i].v-min)/(max-min));
    pts.push([x,y]);
  }
  var path="";
  for(i=0;i<pts.length;i++)path+=(i?"L":"M")+pts[i][0].toFixed(1)+" "+pts[i][1].toFixed(1);
  s+='<path d="'+path+'" fill="none" stroke="#ff6b5e" stroke-width="2.5" stroke-linejoin="round"/>';
  for(i=0;i<pts.length;i++){
    var m=d[i].mark;
    s+='<circle cx="'+pts[i][0].toFixed(1)+'" cy="'+pts[i][1].toFixed(1)+'" r="'+(m?5.5:3.5)+'" fill="'+(m?"#ff6b5e":"#0a1016")+'" stroke="#ff6b5e" stroke-width="2"/>';
    s+='<text x="'+pts[i][0].toFixed(1)+'" y="'+(pts[i][1]-11).toFixed(1)+'" text-anchor="middle" font-size="'+(m?15:12.5)+'" font-weight="'+(m?900:700)+'" fill="#fff">'+Math.round(d[i].v)+'</text>';
    s+='<text x="'+pts[i][0].toFixed(1)+'" y="'+(H-8)+'" text-anchor="middle" font-size="11.5" fill="#9fb0bb">'+d[i].d+'</text>';
  }
  return s+"</svg>";
}

(function build(){
  var i,j,st,sec,html,a;
  for(i=0;i<CONFIG.steps.length;i++){
    st=CONFIG.steps[i];
    sec=document.createElement("section");
    sec.className="step "+(st.side||"l")+(st.hero?" hero":"")+(st.chapter?" chap":"")+((st.photo||st.diagram)?" ph2":"")+(st.solo?" solo":"");
    sec.id="s-"+st.id;
    sec.style.setProperty("--h",st.h);
    if(st.ac)sec.style.setProperty("--ac",st.ac);
    html='<div class="cap">';
    if(st.chapter)html+='<span class="cn">'+st.chapter+"</span>";
    if(st.eb)html+='<span class="eb">'+st.eb+"</span>";
    html+=(st.hero?"<h1>":"<h2>")+st.title+(st.hero?"</h1>":"</h2>");
    if(st.body)for(j=0;j<st.body.length;j++)html+="<p>"+st.body[j]+"</p>";
    if(st.chart)html+=chartSVG();
    if(st.list){html+="<ol>";for(j=0;j<st.list.length;j++)html+="<li><b>"+st.list[j][0]+"</b><span>"+st.list[j][1]+"</span></li>";html+="</ol>";}
    if(st.bars){
      html+='<div class="bars">';
      for(j=0;j<st.bars.length;j++){
        var bg=st.bars[j],mx=0,q;
        for(q=0;q<bg.rows.length;q++)if(bg.rows[q][1]>mx)mx=bg.rows[q][1];
        html+='<span class="bl">'+bg.label+"</span>";
        for(q=0;q<bg.rows.length;q++)html+='<div class="br'+(bg.rows[q][3]?" hi":"")+'"><em>'+bg.rows[q][0]+'</em><div class="tr"><i style="width:'+(100*bg.rows[q][1]/mx).toFixed(1)+'%"></i></div><b>'+bg.rows[q][2]+"</b></div>";
      }
      html+="</div>";
    }
    if(st.barsrc)html+='<span class="bsrc">'+st.barsrc+"</span>";
    if(st.check)html+='<span class="chk">'+st.check+"</span>";
    if(st.after)html+='<p class="aft">'+st.after+"</p>";
    if(st.hero){
      var m=CONFIG.market;
      if(m)html+='<div class="chip">'+m.label+" <b>"+m.value+'</b><i class="'+(m.up?"up":"dn")+'">'+m.change+"</i> "+m.date+"</div>";
      html+='<div class="hint">SCROLL</div>';
    }
    if(st.credit)html+='<div class="credit">'+st.credit+"</div>";
    html+="</div>";
    if(st.related){
      var AR='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M6 3H3v10h10v-3M9 3h4v4M13 3L7 9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      html+='<div class="relwrap"><span class="relh">\uad00\ub828 \uae30\uc0ac</span><div class="relgrid">';
      for(j=0;j<st.related.length;j++){
        var rl=st.related[j];
        html+='<a class="rcard" href="'+rl[2]+'" target="_blank" rel="noopener"><img src="'+rl[3]+'" alt="" loading="lazy" style="object-position:'+rl[4]+'"><div class="rtx"><em>'+rl[0]+'</em><strong>'+rl[1]+'</strong><span class="rbtn">\uae30\uc0ac \uc6d0\ubb38 \ubcf4\uae30'+AR+'</span></div></a>';
      }
      html+="</div></div>";
      sec.className+=" fin";
    }
    if(st.diagram){
      html+='<div class="cap pcard"><figure class="ph">'+(st.diagram==="capacity"?capacitySVG():demandSVG())+'<figcaption>'+(st.figcap||"")+' <em>'+(st.figcredit||"")+'</em></figcaption></figure></div>';
    }
    if(st.photo){
      var ph=st.photo,hide="this.closest('.pcard').style.display='none'";
      var im1='<img src="'+ph.src+'" alt="" loading="lazy" style="object-position:'+(ph.pos||"50% 50%")+'" onerror="'+hide+'">';
      if(ph.src2)im1='<div class="two'+(ph.stack?" stack":"")+(ph.src3?" three":"")+'">'+im1+'<img src="'+ph.src2+'" alt="" loading="lazy" style="object-position:'+(ph.pos2||"50% 50%")+'" onerror="'+hide+'">'+(ph.src3?'<img src="'+ph.src3+'" alt="" loading="lazy" style="object-position:'+(ph.pos3||"50% 50%")+'" onerror="'+hide+'">':'')+'</div>';
      html+='<div class="cap pcard"><figure class="ph">'+im1+'<figcaption>'+ph.cap+' <em>'+ph.credit+'</em></figcaption></figure></div>';
    }
    sec.innerHTML=html;
    story.appendChild(sec);
    stepEls.push(sec);

    if(st.nav){
      a=document.createElement("a");
      a.innerHTML="<em>"+st.nav+"</em>";
      a.setAttribute("data-i",i);
      a.onclick=function(){var k=+this.getAttribute("data-i");var r=stepEls[k].getBoundingClientRect();window.scrollTo({top:window.pageYOffset+r.top+r.height/2-window.innerHeight/2,behavior:"smooth"});};
      rail.appendChild(a);navEls.push({el:a,step:i});
    }

    if(st.labels)for(j=0;j<st.labels.length;j++){
      var el=document.createElement("div");
      el.className="lbl "+(st.labels[j].c||"");
      el.innerHTML="<i></i><b></b><span>"+st.labels[j].text+"</span>";
      labelsEl.appendChild(el);
      labelItems.push({el:el,at:st.labels[j].at,node:st.labels[j].node,step:i,k:st.labels[j].k});
    }
  }
})();

/* ---------- \uc2a4\ud06c\ub864 \u2192 \uc9c4\ud589\uac12 ---------- */
var keys=[];            // {y:\uc2a4\ud06c\ub864 \uc704\uce58, p:Vector3, t:Vector3, step}
var barU=ROOT.querySelector("#bar u");
function layout(){
  keys=[];
  var i,j,st,top,h,n,sy=-VN.getBoundingClientRect().top,vh=window.innerHeight-TOPOFF;
  for(i=0;i<stepEls.length;i++){
    st=CONFIG.steps[i];
    var r=stepEls[i].getBoundingClientRect();
    top=r.top+sy;h=r.height;n=st.cam.length;
    for(j=0;j<n;j++)keys.push({y:top+h*((j+0.5)/n)-vh/2,p:st.cam[j].p,mobile:st.cam[j].mobile,mobileTarget:st.cam[j].mobileTarget,t:st.cam[j].t,step:i,k:j});
  }
}
function smooth(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x);}
function sample(sy){
  var n=keys.length,i;
  if(sy<=keys[0].y)return{a:keys[0],b:keys[0],u:0};
  if(sy>=keys[n-1].y)return{a:keys[n-1],b:keys[n-1],u:0};
  for(i=0;i<n-1;i++)if(sy<keys[i+1].y)break;
  var u=(sy-keys[i].y)/(keys[i+1].y-keys[i].y);
  // \uad6c\uac04 \uac00\uc6b4\ub370\uc11c\ub294 \uc7a0\uc2dc \uba38\ubb38\ub2e4
  return{a:keys[i],b:keys[i+1],u:smooth((u-0.18)/0.64)};
}

/* ---------- WebGL ---------- */
var THREE=window.THREE,stage=ROOT.getElementById("stage");
var renderer=null;
var leadArt=ROOT.getElementById("lead-art");
var cover=new Image();
cover.onload=function(){leadArt.style.backgroundImage="url("+cover.src+")";VN.classList.add("has-cover");};
cover.src=BASE+"photos/ch-land.jpg";
var chArts=[];
(function(){
  for(var i=0;i<CONFIG.steps.length;i++){
    var st=CONFIG.steps[i];if(!st.art)continue;
    var d=document.createElement("div");d.className="ch-art";d.setAttribute("aria-hidden","true");
    d.style.backgroundImage="url("+st.art+")";if(st.artPos)d.style.backgroundPosition=st.artPos;
    d.innerHTML="<span>AI \uc0dd\uc131 \ucf58\uc149\ud2b8 \uc774\ubbf8\uc9c0</span>";
    leadArt.parentNode.insertBefore(d,leadArt.nextSibling);
    chArts.push({el:d,step:i,o:-1});
  }
})();
function updateLead(s){
  for(var ci=0;ci<chArts.length;ci++){
    var ca=chArts[ci],co=0;
    if(s.a.step===ca.step&&s.b.step===ca.step)co=1;
    else if(s.a.step===ca.step)co=1-smooth(s.u/0.55);
    else if(s.b.step===ca.step)co=smooth((s.u-0.45)/0.55);
    if(co!==ca.o){ca.o=co;ca.el.style.opacity=co;}
  }
  var full=false;for(var cj=0;cj<chArts.length;cj++)if(chArts[cj].o>=1)full=true;
  var opacity=s.a.step===0?(s.b.step===0?1:1-smooth(s.u*2.3)):0;
  if(typeof artFull!=="undefined")artFull=full||(opacity>=1&&VN.classList.contains("has-cover"));
  leadArt.style.opacity=VN.classList.contains("has-cover")?opacity:0;
}
try{
  if(!THREE)throw 0;
  renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:"high-performance"});
}catch(e){renderer=null;}
if(!renderer){
  VN.classList.add("no-webgl");
  function updateFallback(){
    layout();
    var max=VN.offsetHeight-(window.innerHeight-TOPOFF);
    barU.style.width=(max>0?100*Math.max(0,vnScroll())/max:0)+"%";
    updateLead(sample(vnScroll()));
  }
  cover.addEventListener("load",updateFallback);
  window.addEventListener("scroll",updateFallback,{passive:true});
  window.addEventListener("resize",updateFallback);
  updateFallback();
  return;
}

var lite=(window.matchMedia&&window.matchMedia("(pointer:coarse)").matches)||Math.min(screen.width||9999,screen.height||9999)<820;
var pxr=Math.min(window.devicePixelRatio||1,lite?1.25:1.6);
renderer.setPixelRatio(pxr);
var onScreen=true,artFull=false,slowN=0,ema=16,lastNow=0,tick=0;
if(window.IntersectionObserver){try{new IntersectionObserver(function(en){onScreen=en[en.length-1].isIntersecting;}).observe(stage);}catch(e){}}
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.08;
stage.appendChild(renderer.domElement);
var scene=new THREE.Scene();
scene.background=new THREE.Color(0x061018);
scene.fog=new THREE.Fog(0x43576a,145,640);
var camera=new THREE.PerspectiveCamera(48,1,0.1,1400);

var hemi=new THREE.HemisphereLight(0xbdd6ef,0x546070,1.55);scene.add(hemi);
var moon=new THREE.DirectionalLight(0xffd6ae,2.75);moon.position.set(-155,95,285);scene.add(moon);
var fill=new THREE.DirectionalLight(0xa9cdff,0.94);fill.position.set(180,100,-300);scene.add(fill);
var sky=new THREE.Mesh(new THREE.SphereGeometry(1000,32,16),new THREE.ShaderMaterial({
  side:THREE.BackSide,depthWrite:false,fog:false,
  vertexShader:"varying vec3 world; void main(){world=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
  fragmentShader:[
    "varying vec3 world;",
    "void main(){",
    "vec3 ray=normalize(world-cameraPosition);",
    "float height=max(ray.y,0.);",
    "vec3 sky=mix(vec3(.285,.365,.455),vec3(.037,.071,.128),pow(smoothstep(0.,.7,height),.6));",
    "float glow=pow(max(dot(ray,normalize(vec3(-.5,.05,1.))),0.),7.)*exp(-height*7.);",
    "float haze=exp(-abs(ray.y)*19.);",
    "vec3 horizon=vec3(.32,.395,.47)+glow*vec3(.16,.07,.025);",
    "gl_FragColor=vec4(mix(sky+glow*vec3(.23,.105,.045),horizon,haze*.48),1.);",
    "}"
  ].join("\n")
}));
sky.frustumCulled=false;sky.renderOrder=-5;scene.add(sky);

function lam(c,o){return new THREE.MeshLambertMaterial(Object.assign({color:c},o||{}));}
function bas(c,o){return new THREE.MeshBasicMaterial(Object.assign({color:c},o||{}));}
function coated(c,roughness,metalness){
  return new THREE.MeshStandardMaterial({color:c,roughness:roughness,metalness:metalness});
}
function batch(parent,geometry,material,parts){
  if(!parts.length)return;
  var group=new THREE.InstancedMesh(geometry,material,parts.length);
  var node=new THREE.Object3D();
  parts.forEach(function(p,i){
    node.position.set(p[0],p[1],p[2]);
    node.scale.set(p[3],p[4],p[5]);
    node.rotation.y=p[6]||0;
    node.updateMatrix();group.setMatrixAt(i,node.matrix);
  });
  group.instanceMatrix.needsUpdate=true;
  parent.add(group);
}
var unitBox=new THREE.BoxGeometry(1,1,1);
function box(w,h,d,mat,x,y,z,parent){var m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);(parent||scene).add(m);return m;}

var AMBER=0xffb23e,CYAN=0x4fe3ff,RED=0xff7a59,MINT=0x5ef2c8,SHORE=78;
var HALL={w:64,h:12,d:36};

/* \ubaa8\ub378 \ub85c\ub354: \ub2e8\uc77c \ud30c\uc77c \ubbf8\ub9ac\ubcf4\uae30\ub294 window.__MODELS(base64), \ub808\ud3ec\ub294 ./models/*.glb */
var gltfLoader=new THREE.GLTFLoader();
function loadModel(name,cb){
  var emb=window.__MODELS&&window.__MODELS[name];
  function done(g){
    g.scene.traverse(function(o){
      if(o.isMesh&&o.material){
        var n=o.material.name;
        if(n==="glass"){o.material.emissive=new THREE.Color(0xffc98a);o.material.emissiveIntensity=1.1;}
        if(n==="lamp"){o.material.emissive=new THREE.Color(0xff4a30);o.material.emissiveIntensity=2.2;}
        if(n==="yellow"){o.material.emissive=new THREE.Color(0x6b3a05);o.material.emissiveIntensity=0.45;}
        o.material.roughness=n==="glass"?0.35:0.61;o.material.metalness=0.16;
      }
    });
    cb(g.scene);
  }
  if(emb){
    var bin=atob(emb),u=new Uint8Array(bin.length),i;for(i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
    gltfLoader.parse(u.buffer,"",done,function(e){console.error("model",name,e);});
  }else gltfLoader.load(BASE+"models/"+name+".glb",done,undefined,function(e){console.error("model",name,e);});
}
function hasModel(name){return !!(window.__MODELS&&window.__MODELS[name]);}
function placeOr(name,list,fallback,after){
  // \ub2e8\uc77c \ud30c\uc77c \ubbf8\ub9ac\ubcf4\uae30\uc5d0\uc11c \ubaa8\ub378\uc774 \uc544\uc9c1 \uc5c6\uc73c\uba74 \ucf54\ub4dc\ub85c \ub9cc\ub4e0 \uc784\uc2dc \ubaa8\ud615\uc744 \uc4f4\ub2e4
  if(window.__MODELS&&!hasModel(name)){for(var i=0;i<list.length;i++)fallback(list[i],i);return;}
  var done=false;
  function fb(){if(done)return;done=true;for(var i=0;i<list.length;i++)fallback(list[i],i);}
  var emb=hasModel(name);
  if(!emb){
    gltfLoader.load(BASE+"models/"+name+".glb",function(g){
      if(done)return;done=true;tune(g.scene);
      for(var i=0;i<list.length;i++){var c=i?g.scene.clone(true):g.scene,p=list[i];c.position.set(p[0],p[1],p[2]);c.rotation.y=p[3]||0;if(p[4])c.scale.setScalar(p[4]);scene.add(c);if(after)after(c,i);}
    },undefined,fb);
  }else place(name,list,after);
}
function tune(root){
  root.traverse(function(o){
    if(o.isMesh&&o.material){
      var n=o.material.name;
      if(n==="glass"){o.material.emissive=new THREE.Color(0xffc98a);o.material.emissiveIntensity=1.1;}
      if(n==="lamp"){o.material.emissive=new THREE.Color(0xff4a30);o.material.emissiveIntensity=2.2;}
      if(n==="yellow"){o.material.emissive=new THREE.Color(0x6b3a05);o.material.emissiveIntensity=0.45;}
      o.material.roughness=n==="glass"?0.35:0.61;o.material.metalness=0.16;
    }
  });
}
function place(name,list,after){
  loadModel(name,function(m){
    for(var i=0;i<list.length;i++){
      var c=i?m.clone(true):m,p=list[i];
      c.position.set(p[0],p[1],p[2]);c.rotation.y=p[3]||0;if(p[4])c.scale.setScalar(p[4]);
      scene.add(c);if(after)after(c,i);
    }
  });
}
var dolphinSlots=[];

/* \ub545\u00b7\ub3c4\ub85c (z=SHORE \uc5d0\uc11c \ubc14\ub2e4 \uc2dc\uc791) */
(function(){
  var g=new THREE.Mesh(new THREE.PlaneGeometry(1400,640),lam(0x46515b));g.rotation.x=-Math.PI/2;g.position.set(60,0,SHORE-320);scene.add(g);
  var road=lam(0x24313d);
  box(520,0.06,7,road,60,0.03,-25);box(520,0.06,7,road,60,0.03,27);
  box(7,0.06,220,road,41,0.03,-34);box(7,0.06,220,road,-38,0.03,-34);box(7,0.06,220,road,134,0.03,-34);
  // \uc548\ubcbd
  box(1400,3,2.4,lam(0x3b4954),60,-1.2,SHORE+1.2);
  box(1400,0.5,0.5,bas(0x55687a),60,0.45,SHORE+2.1);
})();

var shellMats=[],shell=new THREE.Group(),fans=[],ledSets=[];

/* \ubcc0\uc804 \uc124\ube44\u00b7\uc1a1\uc804\uc120 */
var drops=[],vapors=[],waterG=new THREE.Group();scene.add(waterG);
(function(){
  var pm=lam(0x3f8fc4),tm=lam(0x5a7f99),i;
  var vc=document.createElement("canvas");vc.width=vc.height=128;var vx=vc.getContext("2d"),vg=vx.createRadialGradient(64,64,0,64,64,64);
  vg.addColorStop(0,"rgba(255,255,255,1)");vg.addColorStop(0.45,"rgba(255,255,255,.45)");vg.addColorStop(1,"rgba(255,255,255,0)");
  vx.fillStyle=vg;vx.fillRect(0,0,128,128);var vaporTex=new THREE.CanvasTexture(vc);
  var tank=new THREE.Mesh(new THREE.CylinderGeometry(3.4,3.4,6.5,20),tm);tank.position.set(-42,3.25,27);waterG.add(tank);
  var cap=new THREE.Mesh(new THREE.CylinderGeometry(3.6,3.6,0.4,20),lam(0x6fb7e0));cap.position.set(-42,6.7,27);waterG.add(cap);
  var P=[[-42,1.3,27],[-24,1.3,27],[-24,1.3,18.9],[-24,12.9,18.9],[-24,12.9,6],[-10,12.9,6]];
  var path=new THREE.CurvePath();
  for(i=0;i<P.length-1;i++){
    var a=new THREE.Vector3(P[i][0],P[i][1],P[i][2]),b=new THREE.Vector3(P[i+1][0],P[i+1][1],P[i+1][2]);
    path.add(new THREE.LineCurve3(a,b));
    var len=a.distanceTo(b),m=new THREE.Mesh(new THREE.CylinderGeometry(0.42,0.42,len+0.4,10),pm);
    m.position.copy(a).add(b).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),b.clone().sub(a).normalize());
    waterG.add(m);
  }
  var dg=new THREE.SphereGeometry(0.62,10,8),dm=bas(0x7fdcff);
  for(i=0;i<9;i++){var d=new THREE.Mesh(dg,dm);waterG.add(d);drops.push({m:d,c:path,o:i/9});}
  var vp=[[-20,4],[-14,7],[-9,5],[-16,2],[-6,8],[-12,4]];
  for(i=0;i<12;i++){
    var mat=new THREE.SpriteMaterial({map:vaporTex,color:0xe9f4fb,transparent:true,depthWrite:false,opacity:0});
    var sp=new THREE.Sprite(mat);waterG.add(sp);
    vapors.push({s:sp,x:vp[i%6][0],z:vp[i%6][1],o:i/12+(i%6)*0.07});
  }
})();
var pulses=[];
(function(){
  var cx=-56,steel=lam(0x6b7a86),i,j;
  // \uc1a1\uc804\ud0d1
  function pylon(x,z){
    var h=26;box(0.5,h,0.5,steel,x-1.4,h/2,z-1.4);box(0.5,h,0.5,steel,x+1.4,h/2,z-1.4);box(0.5,h,0.5,steel,x-1.4,h/2,z+1.4);box(0.5,h,0.5,steel,x+1.4,h/2,z+1.4);
    for(var k=0;k<5;k++)box(3.3,0.25,3.3,steel,x,4+k*5,z);
    box(0.4,0.4,15,steel,x,22,z);box(0.4,0.4,11,steel,x,25.6,z);
  }
  pylon(-80,-6);pylon(-122,-22);
  var lineM=new THREE.LineBasicMaterial({color:0x8fa3b3});
  var dotG=new THREE.SphereGeometry(0.42,10,8),dotM=bas(AMBER);
  function wire(a,b,sag,n){
    var mid=new THREE.Vector3().addVectors(a,b).multiplyScalar(0.5);mid.y-=sag;
    var cv=new THREE.QuadraticBezierCurve3(a,mid,b);
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(cv.getPoints(24)),lineM));
    for(var k=0;k<n;k++){var d=new THREE.Mesh(dotG,dotM);scene.add(d);pulses.push({m:d,c:cv,o:k/n});}
  }
  for(i=-1;i<=1;i++){
    wire(new THREE.Vector3(-122,22,-22+i*7),new THREE.Vector3(-80,22,-6+i*7),5,2);
    wire(new THREE.Vector3(-80,22,-6+i*7),new THREE.Vector3(cx-10,8.2,i*10),3,2);
  }
  // \ubcc0\uc804 \u2192 \ubcf8\uad00
  for(i=0;i<2;i++)wire(new THREE.Vector3(cx+8,3,-4+i*8),new THREE.Vector3(-HALL.w/2,5,-4+i*8),1.2,2);
})();

/* \uc9d3\ub2e4 \ub9cc \ub3d9(C): \uc810\uc120 \ud14c\ub450\ub9ac\ub9cc \ucf54\ub4dc (\ucca0\uace8\u00b7\ud0c0\uc6cc\ud06c\ub808\uc778\uc740 \ubaa8\ub378) */
var jib;
(function(){
  var cx=82;
  var pts=[new THREE.Vector3(cx-34,0.2,-20),new THREE.Vector3(cx+34,0.2,-20),new THREE.Vector3(cx+34,0.2,20),new THREE.Vector3(cx-34,0.2,20),new THREE.Vector3(cx-34,0.2,-20)];
  var ln=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineDashedMaterial({color:RED,dashSize:2,gapSize:1.4}));ln.computeLineDistances();scene.add(ln);
})();

/* \ube5b \ubc88\uc9d0 \uc2a4\ud504\ub77c\uc774\ud2b8 */
var glowTex=(function(){
  var c=document.createElement("canvas");c.width=c.height=64;var x=c.getContext("2d"),g=x.createRadialGradient(32,32,0,32,32,32);
  g.addColorStop(0,"rgba(255,255,255,.94)");g.addColorStop(0.22,"rgba(255,255,255,.38)");g.addColorStop(0.55,"rgba(255,255,255,.09)");g.addColorStop(1,"rgba(255,255,255,0)");
  x.fillStyle=g;x.fillRect(0,0,64,64);return new THREE.CanvasTexture(c);
})();
var glowMats={};
function glow(x,y,z,col,size,parent,nofog){
  var k=col+"_"+(nofog?1:0);
  if(!glowMats[k])glowMats[k]=new THREE.SpriteMaterial({map:glowTex,color:col,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,fog:!nofog});
  var sp=new THREE.Sprite(glowMats[k]);sp.position.set(x,y,z);sp.scale.set(size,size,1);(parent||scene).add(sp);return sp;
}

/* FDC 2\ud638\uae30: \uc606 \ubc1c\uc804\uc18c\uc5d0\uc11c \ubc1b\ub294 \uc804\uae30, \ub2eb\ud78c \ub0c9\uac01 \ubc30\uad00 */
var loops=[];
(function(){
  var a=new THREE.Vector3(92,9,70),b=new THREE.Vector3(62,7,92),mid=new THREE.Vector3().addVectors(a,b).multiplyScalar(0.5),i;mid.y-=2.5;
  var dg=new THREE.SphereGeometry(0.5,10,8),am=bas(AMBER);
  for(i=-1;i<=1;i+=2){
    var o=new THREE.Vector3(i*1.2,0,i*0.9),cv=new THREE.QuadraticBezierCurve3(a.clone().add(o),mid.clone().add(o),b.clone().add(o));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(cv.getPoints(24)),new THREE.LineBasicMaterial({color:0xd9b46a})));
    for(var k=0;k<3;k++){var d=new THREE.Mesh(dg,am);scene.add(d);pulses.push({m:d,c:cv,o:k/3});}
  }
  box(0.6,9,0.6,lam(0x6b7a86),92,4.5,70);box(4,0.4,0.6,lam(0x6b7a86),92,9,70);
  var P=[[26,9.6,117.7],[26,0.9,117.7],[62,0.9,117.7],[62,9.6,117.7]],pm=lam(0x3f8fc4),path=new THREE.CurvePath();
  for(i=0;i<4;i++){
    var p=new THREE.Vector3(P[i][0],P[i][1],P[i][2]),q=new THREE.Vector3(P[(i+1)%4][0],P[(i+1)%4][1],P[(i+1)%4][2]);
    path.add(new THREE.LineCurve3(p,q));
    var len=p.distanceTo(q),m=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,len+0.4,10),pm);
    m.position.copy(p).add(q).multiplyScalar(0.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),q.clone().sub(p).normalize());scene.add(m);
  }
  var wm=bas(0x7fdcff),g2=new THREE.SphereGeometry(0.6,10,8);
  for(i=0;i<12;i++){var e=new THREE.Mesh(g2,wm);scene.add(e);loops.push({m:e,c:path,o:i/12});}
})();

/* \ubcc4\u00b7\ub2ec */
(function(){
  var pos=[],i;
  for(i=0;i<135;i++){
    var th=Math.random()*Math.PI*2,ph=Math.random()*0.42*Math.PI,r=780;
    pos.push(Math.cos(th)*Math.cos(ph)*r+60,Math.sin(ph)*r+30,Math.sin(th)*Math.cos(ph)*r+80);
  }
  var g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));
  scene.add(new THREE.Points(g,new THREE.PointsMaterial({color:0xcfe6ff,size:1.6,sizeAttenuation:false,fog:false,transparent:true,opacity:0.24})));

})();

/* \ubc14\ub2e4 */
var waterU=THREE.UniformsUtils.merge([THREE.UniformsLib.fog,{uTime:{value:0},uL:{value:new THREE.Vector3(-120,40,320).normalize()}}]);
(function(){
  var geo=new THREE.PlaneGeometry(1600,700,220,96);geo.rotateX(-Math.PI/2);
  var mat=new THREE.ShaderMaterial({uniforms:waterU,fog:true,
    vertexShader:[
      "uniform float uTime;varying vec3 vW;varying vec3 vN;",
      "#include <fog_pars_vertex>",
      "float wv(vec2 p,vec2 d,float k,float sp,float a,out vec2 g){float ph=dot(p,d)*k+uTime*sp;g=d*k*a*cos(ph);return a*sin(ph);}",
      "void main(){",
      " vec4 wp=modelMatrix*vec4(position,1.0);vec2 p=wp.xz;vec2 g1;vec2 g2;vec2 g3;",
      " float h=wv(p,normalize(vec2(1.0,0.6)),0.09,0.9,0.38,g1)+wv(p,normalize(vec2(-0.4,1.0)),0.17,1.3,0.2,g2)+wv(p,normalize(vec2(0.8,-0.3)),0.31,1.9,0.09,g3);",
      " wp.y+=h;vec2 g=g1+g2+g3;vN=normalize(vec3(-g.x,1.0,-g.y));vW=wp.xyz;",
      " vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;",
      " #include <fog_vertex>",
      "}"].join("\n"),
    fragmentShader:[
      "uniform float uTime;uniform vec3 uL;varying vec3 vW;varying vec3 vN;",
      "#include <fog_pars_fragment>",
      "void main(){",
      " vec2 p=vW.xz;",
      " float dist=length(cameraPosition-vW);",
      " float detail=1.-smoothstep(35.,150.,dist);",
      " float shimmer=sin(dot(p,vec2(1.35,.71))+sin(p.y*.57+uTime*.73)+uTime*1.15);",
      " float crossRipple=cos(dot(p,vec2(-.64,1.76))-uTime*1.23);",
      " vec3 n=normalize(vN+detail*vec3(shimmer*.033+crossRipple*.018,0.,crossRipple*.032-shimmer*.017));",
      " vec3 v=normalize(cameraPosition-vW);",
      " float fr=pow(1.0-max(dot(n,v),0.0),4.5);",
      " vec3 col=mix(vec3(.036,.089,.126),vec3(.267,.344,.432),fr);",
      " vec3 hv=normalize(uL+v);float nh=max(dot(n,hv),0.0);",
      " float broad=pow(nh,30.)*.16;",
      " float glint=pow(nh,118.)*mix(.21,.45,detail);",
      " col+=broad*vec3(.48,.59,.70)+glint*vec3(.93,.79,.62);",
      " col+=detail*(shimmer*.56+crossRipple*.44)*vec3(.008,.013,.018);",
      " float shoreDistance=max(p.y-79.4,0.);",
      " float wash=exp(-shoreDistance*.55);",
      " float foam=smoothstep(.45,.87,.57*sin(p.x*.49+p.y*3.-uTime)+.43*sin(p.x*1.7-p.y*3.9+uTime*.82));",
      " col=mix(col,vec3(.38,.47,.52),wash*(.09+foam*detail*.24));",
      " gl_FragColor=vec4(col,1.0);",
      " #include <fog_fragment>",
      "}"].join("\n")});
  var m=new THREE.Mesh(geo,mat);m.position.set(60,-1.25,SHORE+350);scene.add(m);
})();

/* \ubb3c\uac00\uc758 \uae30\uc874 \ubc1c\uc804\uc18c: \ubaa8\ub378 */
var shoreCables=[];

/* \ubd80\uc720\uc2dd \ub370\uc774\ud130\uc13c\ud130 2\uae30 (\uc77c\ubc18\ud615 \ubc14\uc9c0) */
var fdcs=[];
var fdcSlots=[],dockSlots=[];
function buildFDC(x,z){
  var g=new THREE.Group();g.position.set(x,0,z);scene.add(g);
  var cs=[[-30.5,12],[30.5,12],[-30.5,-12],[30.5,-12]],i;
  for(i=0;i<4;i++)glow(cs[i][0],3.6,cs[i][1],0xffe9c4,5,g);
  glow(26,11.2,0,RED,4,g);
  fdcs.push(g);fdcSlots.push(g);return g;
}
loadModel("fdc",function(m){
  var i;
  for(i=0;i<fdcSlots.length;i++)fdcSlots[i].add(m.clone(true));
  for(i=0;i<dockSlots.length;i++){
    var c=m.clone(true),d=dockSlots[i];
    c.traverse(function(o){
      var nm=(o.name||"").replace(/_/g," ");
      if(d.stage===0&&(nm==="Roof cooling"))o.visible=false;
      if(d.stage===1&&(nm==="Roof cooling"||nm==="Server hall"||nm==="Service modules"||nm==="Deck fittings"))o.visible=false;
    });
    c.rotation.y=Math.PI/2;c.position.set(d.x,4.9,d.z);scene.add(c);
  }
});
(function(){
  var zs=104,xs=[-30,44],i,j,pile=lam(0x6b7a86),deck=lam(0x33414c);
  for(i=0;i<2;i++){
    buildFDC(xs[i],zs);
    // \uc5f0\uacb0 \uc794\uad50
    box(4.5,0.5,(zs-13)-(SHORE+2),deck,xs[i]+8,1.6,(SHORE+2+zs-13)/2);
    // \uacc4\ub958 \ub9d0\ub69d
    for(j=0;j<4;j++){
      var px=xs[i]+(j%2?35.5:-35.5),pz=zs+(j<2?-9:9);
      dolphinSlots.push([px,-1.2,pz]);
    }
    // \uc721\uc0c1 \uc804\ub825\u00b7\ud1b5\uc2e0 \ucf00\uc774\ube14
    box(0.35,0.2,(zs-13)-(SHORE+2),bas(AMBER),xs[i]+6.4,1.95,(SHORE+2+zs-13)/2);
    box(0.35,0.2,(zs-13)-(SHORE+2),bas(MINT),xs[i]+9.6,1.95,(SHORE+2+zs-13)/2);
  }
  // \uc548\ubcbd \uc704 \ucf00\uc774\ube14 \uac04\uc120 (\ubc1c\uc804\uc18c \u2192 \uc794\uad50)
  box(126,0.2,0.35,bas(AMBER),41,0.22,SHORE-3);box(0.35,0.2,13,bas(AMBER),104,0.22,SHORE-9.5);
  box(74,0.2,0.35,bas(MINT),16.6,0.22,SHORE-5);
})();

/* \uc870\uc120\uc18c: \ub3c4\ud06c + \uace8\ub9ac\uc557 \ud06c\ub808\uc778 */
var trolley;
(function(){
  var cx=200,cz=42,i,j;
  var basin=new THREE.Mesh(new THREE.PlaneGeometry(66,74),lam(0x0a141b));basin.rotation.x=-Math.PI/2;basin.position.set(cx,0.07,cz-1);scene.add(basin);
  var rim=lam(0x4a5a66);
  box(2,1.2,74,rim,cx-34,0.6,cz-1);box(2,1.2,74,rim,cx+34,0.6,cz-1);box(70,1.2,2,rim,cx,0.6,cz-38);
  // \uac74\uc870 \uc911\uc778 \uc120\uccb4 2\uae30 (\ubaa8\ub378\uc744 \ub2e8\uacc4\ubcc4\ub85c \uc77c\ubd80\ub9cc \ubcf4\uc774\uac8c)
  for(i=0;i<2;i++){
    var hx=cx-15.5+i*31;
    dockSlots.push({x:hx,z:cz,stage:i});
    for(j=0;j<7;j++)box(1.6,0.5,20,lam(0x55636e),hx,0.3,cz-27+j*9);
    for(j=0;j<6;j++)box(0.25,9,0.25,lam(0x8fa1ad),hx-14.2,4.5,cz-28+j*11.2);
  }
  var zc=cz-2;
  glow(cx-41,49,zc,RED,8);glow(cx+41,49,zc,RED,8);
  // \uc57c\ub4dc: \uacf5\uc7a5\ub3d9\u00b7\ube14\ub85d\u00b7\ud22c\uad11\ub4f1
  for(i=0;i<9;i++)box(6+Math.random()*6,3+Math.random()*4,6+Math.random()*5,lam(i%2?0x6b5348:0x41525f),cx-70+Math.random()*26,2.5,cz+2+Math.random()*30);
  var lp=[[cx-36,cz+34],[cx+36,cz+34],[cx-36,cz-36],[cx+36,cz-36],[cx,cz-40]];
  for(i=0;i<lp.length;i++){box(0.5,26,0.5,lam(0x6b7a86),lp[i][0],13,lp[i][1]);glow(lp[i][0],26.5,lp[i][1],0xffe2ad,8);}
})();

/* \ubaa8\ub378 \ubc30\uce58 (\uc6d0\uc810=\ubc14\ub2e5 \uc911\uc559) */
place("land-datacenter",[[0,0,0],[0,0,-54],[82,0,-54],[-82,0,-58]],function(c,i){
  if(i)return;
  // \ubcf8\uad00\ub9cc \uc7ac\uc9c8\uc744 \ub530\ub85c \ubcf5\uc81c\ud574, \uce74\uba54\ub77c\uac00 \ub4e4\uc5b4\uac08 \ub54c \ubcbd\uc774 \ud22c\uba85\ud574\uc9c0\uac8c \ud55c\ub2e4
  c.traverse(function(o){if(o.isMesh){o.material=o.material.clone();o.material.transparent=true;shellMats.push(o.material);}});
  shell=c;
});

/* ----- \ubcc0\uc218 1: \uc5f0\ub8cc\uc804\uc9c0 \uc124\ube44 ----- */
placeOr("fuel-cell-yard",[[-14,0,42]],function(p){
  var g=new THREE.Group();g.position.set(p[0],p[1],p[2]);scene.add(g);
  var pad=new THREE.Mesh(new THREE.PlaneGeometry(30,14),lam(0x59656e));pad.rotation.x=-Math.PI/2;pad.position.y=0.08;g.add(pad);
  var unit=coated(0xc9d2d6,.6,.15),i,j;
  for(i=0;i<6;i++)for(j=0;j<2;j++){
    box(4.5,1.2,2.2,unit,-12+i*4.8,0.7,-3.2+j*6.4,g);
    box(4.52,0.14,2.22,bas(MINT),-12+i*4.8,1.0,-3.2+j*6.4,g);
  }
  box(30,0.9,0.1,lam(0x7d8a93),0,0.45,7,g);
});
box(0.3,0.12,17,bas(AMBER),-20,0.1,26.5);box(0.3,0.12,17,bas(AMBER),-8,0.1,26.5);
placeOr("lng-pipe-rack",[[-40,0,42],[-50,0,-112],[-70,0,-112],[-90,0,-112]],function(){});

/* ----- \ubc1c\ub2e8: \uc8fc\ud0dd\uac00 ----- */
placeOr("house-row",[[-160,0,34],[-160,0,56,Math.PI],[-160,0,-64]],function(p,i){
  var g=new THREE.Group();g.position.set(p[0],p[1],p[2]);g.rotation.y=p[3]||0;scene.add(g);
  var cols=[0xd8cbb8,0xb9c4c9,0xcdb9a8,0xc3ccb9,0xd6d0c4],roofs=[0x6a4a40,0x4a5560,0x5c4a3c,0x3f4c55,0x6b5348],k;
  for(k=0;k<5;k++){
    var x=-24+k*12;
    box(8,4.4,8,coated(cols[k],.8,.02),x,2.2,0,g);
    var roof=new THREE.Mesh(new THREE.ConeGeometry(6.6,3,4),coated(roofs[k],.8,.02));roof.rotation.y=Math.PI/4;roof.position.set(x,5.9,0);g.add(roof);
    box(1.6,1.3,0.1,bas(0xffd9a0),x-1.6,2.6,4.06,g);box(1.6,1.3,0.1,bas(0xffd9a0),x+1.8,2.6,4.06,g);
  }
});

/* ----- \ubcc0\uc218 2: \ubcf8\uad00 \ub0b4\ubd80 ----- */
placeOr("data-hall-interior",[[0,0,0]],function(){
  var floor=new THREE.Mesh(new THREE.PlaneGeometry(30,24),lam(0x6a747c));floor.rotation.x=-Math.PI/2;floor.position.y=0.06;scene.add(floor);
  var rowsX=[-10.2,-9,-5.4,-4.2,-1.8+0,1.8,4.2,5.4,9,10.2],n=0,i,j;
  var racks=new THREE.InstancedMesh(new THREE.BoxGeometry(1.2,2.2,0.6),coated(0x2c3640,.6,.3),rowsX.length*34),m4=new THREE.Matrix4();
  var pos=[],col=[],c=new THREE.Color();
  for(i=0;i<rowsX.length;i++)for(j=0;j<34;j++){
    var z=-10.9+j*0.66;
    m4.makeTranslation(rowsX[i],1.1,z);racks.setMatrixAt(n++,m4);
    for(var k=0;k<5;k++){
      pos.push(rowsX[i]+(Math.random()<0.5?-0.62:0.62),0.3+Math.random()*1.8,z-0.25+Math.random()*0.5);
      var r=Math.random();c.set(r<0.7?0x6fb7ff:r<0.9?0x7dffa8:0xffb23e);col.push(c.r,c.g,c.b);
    }
  }
  racks.instanceMatrix.needsUpdate=true;scene.add(racks);
  var g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));g.setAttribute("color",new THREE.Float32BufferAttribute(col,3));
  var pm=new THREE.PointsMaterial({size:0.07,vertexColors:true,transparent:true,depthWrite:false});scene.add(new THREE.Points(g,pm));ledSets.push(pm);
  for(i=-9;i<=9;i+=3.6)box(0.25,0.06,22,bas(0xdff0ff),i,5.6,0);
});

/* ----- \ubcc0\uc218 2: \uaebc\ub0b4 \ub4e0 \uc11c\ubc84 \ud55c \ub300 (3\ubc30 \ud655\ub300 \uc804\uc2dc) ----- */
placeOr("server-node",[[0,1.35,3.0]],function(p){
  var g=new THREE.Group();g.position.set(p[0],p[1],p[2]);g.rotation.x=0.95;g.scale.setScalar(2.6);scene.add(g);
  box(0.48,0.02,0.9,coated(0x14403a,.6,.1),0,0.01,0,g);
  var i,hb=new THREE.Group();hb.name="HBM";g.add(hb);
  for(i=0;i<4;i++){box(0.09,0.05,0.2,coated(0x8d99a3,.4,.6),-0.165+i*0.11,0.045,-0.12,g);box(0.09,0.012,0.045,bas(0xffb23e),-0.165+i*0.11,0.03,0.02,hb);}
  var dr=new THREE.Group();dr.name="DRAM";g.add(dr);
  for(i=0;i<16;i++)box(0.012,0.035,0.14,coated(0x2f6f66,.5,.2),-0.2+i*0.0265,0.04,0.2,dr);
  var sd=new THREE.Group();sd.name="SSD";g.add(sd);
  for(i=0;i<4;i++)box(0.09,0.02,0.07,coated(0x3b4954,.5,.4),-0.165+i*0.11,0.03,0.38,sd);
  for(i=0;i<6;i++)box(0.06,0.06,0.03,coated(0x10161b,.6,.2),-0.19+i*0.076,0.05,-0.41,g);
},function(c){c.rotation.x=0.95;c.scale.setScalar(2.6);});
place("steel-frame",[[82,0,0]]);
place("tower-crane",[[104,0,25]],function(c){jib=c.getObjectByName("Jib");});
place("substation",[[-56,0,0]]);
place("power-plant",[[100,0,58],[-10,0,-112]]);
box(0.3,0.12,26,bas(AMBER),0,0.1,-85);box(0.3,0.12,26,bas(AMBER),8,0.1,-85);
place("goliath-crane",[[200,0,40]],function(c){trolley=c.getObjectByName("Trolley");});
place("shipyard-shop",[[268,0,60],[268,0,26],[268,0,-8]]);
place("mooring-dolphin",dolphinSlots);

/* ---------- \ud504\ub808\uc784 ---------- */
var vA=new THREE.Vector3(),vB=new THREE.Vector3(),vP=new THREE.Vector3(),vT=new THREE.Vector3(),vL=new THREE.Vector3();
var curP=new THREE.Vector3(),curT=new THREE.Vector3(),first=true,W=1,H=1,portrait=false,activeStep=-1;
var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches;

function resize(){
  W=stage.clientWidth;H=stage.clientHeight;
  renderer.setSize(W,H,false);
  portrait=W/H<0.8;
  camera.aspect=W/H;camera.fov=portrait?66:48;camera.updateProjectionMatrix();
  layout();
}
window.addEventListener("resize",resize);
window.addEventListener("load",layout);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(layout);

function frame(now){
  requestAnimationFrame(frame);
  var t=now*0.001,sy=vnScroll(),i;
  var s=sample(sy);
  vA.fromArray(portrait&&s.a.mobile?s.a.mobile:s.a.p);vB.fromArray(portrait&&s.b.mobile?s.b.mobile:s.b.p);vP.lerpVectors(vA,vB,s.u);
  vA.fromArray(portrait&&s.a.mobileTarget?s.a.mobileTarget:s.a.t);vB.fromArray(portrait&&s.b.mobileTarget?s.b.mobileTarget:s.b.t);vT.lerpVectors(vA,vB,s.u);
  if(first||reduce){curP.copy(vP);curT.copy(vT);first=false;}
  else{curP.lerp(vP,0.12);curT.lerp(vT,0.12);}
  camera.position.copy(curP);
  // \uc138\ub85c \ud654\uba74\uc5d0\uc11c\ub294 \ub300\uc0c1\uc744 \uc870\uae08 \uc704\ub85c \uc62c\ub824 \ucea1\uc158\uacfc \uacb9\uce58\uc9c0 \uc54a\uac8c
  camera.lookAt(curT);
  if(portrait)camera.rotateX(-0.11);

  // \ubcf8\uad00 \uaecd\uc9c8 \ud22c\uba85\ub3c4
  var dx=Math.max(Math.abs(curP.x)-HALL.w/2,0),dy=Math.max(curP.y-HALL.h,0),dz=Math.max(Math.abs(curP.z)-HALL.d/2,0);
  var d=Math.sqrt(dx*dx+dy*dy+dz*dz),op=smooth((d-2)/11);
  for(i=0;i<shellMats.length;i++){shellMats[i].opacity=op;shellMats[i].depthWrite=op>0.95;}
  shell.visible=op>0.01;
  scene.fog.near=d<2?35:130;scene.fog.far=d<2?150:580;hemi.intensity=1.38+(1-op)*1.07;

  waterG.visible=op>0.5;
  for(i=0;i<drops.length;i++)drops[i].c.getPointAt(reduce?drops[i].o:(t*0.11+drops[i].o)%1,drops[i].m.position);
  for(i=0;i<vapors.length;i++){
    var vu=reduce?vapors[i].o%1:(t*0.09+vapors[i].o)%1,vs=vapors[i].s;
    vs.position.set(vapors[i].x+Math.sin(vu*5+i)*1.2+vu*3,13.6+vu*15,vapors[i].z);
    vs.scale.set(4+vu*9,4+vu*9,1);vs.material.opacity=Math.sin(vu*Math.PI)*0.6*op;
  }
  for(i=0;i<loops.length;i++)loops[i].c.getPointAt(reduce?loops[i].o:(t*0.07+loops[i].o)%1,loops[i].m.position);
  // \uc6c0\uc9c1\uc784
  if(!reduce){
    for(i=0;i<fans.length;i++)fans[i].rotation.y=t*5+i;
    for(i=0;i<pulses.length;i++){var u=(t*0.22+pulses[i].o)%1;pulses[i].c.getPoint(u,pulses[i].m.position);}
    if(jib)jib.rotation.y=Math.sin(t*0.15)*0.5+0.4;
  }else{
    for(i=0;i<pulses.length;i++)pulses[i].c.getPoint(pulses[i].o,pulses[i].m.position);
  }
  for(i=0;i<ledSets.length;i++)ledSets[i].opacity=reduce?1:0.45+0.55*Math.abs(Math.sin(t*(1.3+i*0.9)+i*2));

  waterU.uTime.value=reduce?0:t;
  if(!reduce){
    for(i=0;i<fdcs.length;i++){fdcs[i].position.y=Math.sin(t*0.6+i*1.7)*0.16;fdcs[i].rotation.x=Math.sin(t*0.45+i*2.1)*0.005;}
    if(trolley)trolley.position.x=Math.sin(t*0.12)*22;
  }
  updateLead(s);
  var moving=curP.distanceToSquared(vP)>0.0004||curT.distanceToSquared(vT)>0.0004;
  tick++;
  if(lastNow){var dt=now-lastNow;if(dt<200)ema=ema*0.9+dt*0.1;}
  lastNow=now;
  if(ema>27&&pxr>0.76){if(++slowN>45){pxr=Math.max(0.75,pxr-0.25);renderer.setPixelRatio(pxr);renderer.setSize(W,H,false);slowN=0;ema=16;}}else slowN=0;
  if(onScreen&&!VN.__off&&!document.hidden&&!artFull&&(!lite||moving||tick%2===0))renderer.render(scene,camera);

  // \uc9c4\ud589 \ud45c\uc2dc
  var max=VN.offsetHeight-(window.innerHeight-TOPOFF);
  barU.style.width=(max>0?100*Math.min(1,Math.max(0,sy/max)):0)+"%";
  var near=s.u<0.5?s.a:s.b,cur=near.step,settle=s.a===s.b?1:Math.abs(s.u-0.5)*2;
  if(cur!==activeStep){
    activeStep=cur;
    var on=-1;for(i=0;i<navEls.length;i++)if(navEls[i].step<=cur)on=i;
    for(i=0;i<navEls.length;i++)navEls[i].el.className=i===on?"on":"";
    rail.className=cur>0?"on":"";
  }
  // \ub77c\ubca8
  var stNow=CONFIG.steps[cur],dimF=(stNow&&stNow.id==="google"&&!reduce)?0.2+0.8*Math.pow(Math.abs(Math.sin(t*0.55)),2):1;
  for(i=0;i<shellMats.length;i++)if(shellMats[i].name==="glass")shellMats[i].emissiveIntensity=1.1*dimF;
  for(i=0;i<labelItems.length;i++){
    var L=labelItems[i],show=L.step===cur&&settle>0.55&&(L.k===undefined||L.k===near.k);
    if(show){
      if(L.node&&!L.found){
        var ob=scene.getObjectByName(L.node);
        if(ob){var bx=new THREE.Box3().setFromObject(ob),ctr=bx.getCenter(new THREE.Vector3());L.at=[ctr.x,bx.max.y,ctr.z];L.found=true;}
      }
      vL.fromArray(L.at).project(camera);
      if(vL.z>1||vL.z<-1)show=false;
      else L.el.style.transform="translate("+((vL.x*0.5+0.5)*W).toFixed(1)+"px,"+((-vL.y*0.5+0.5)*H).toFixed(1)+"px)";
    }
    L.el.style.opacity=show?1:0;
  }
}
resize();
requestAnimationFrame(frame);

// \ud14c\uc2a4\ud2b8\u00b7\uc784\ubca0\ub4dc\uc6a9 \ud6c5
window.__vn={config:CONFIG,keys:function(){return keys;}};
})();

}

(function(){
  var cs=document.currentScript;
  if(!cs){var all=document.getElementsByTagName("script");for(var i=all.length-1;i>=0;i--)if(/datacenter-3d-visual-2026\/embed1\.js/.test(all[i].src)){cs=all[i];break;}}
  var BASE=cs&&cs.src?cs.src.replace(/[^\/]*(\?.*)?$/,""):"https://mjiae-svg.github.io/datacenter-3d-visual-2026/";
  var host=document.getElementById((cs&&cs.getAttribute("data-target"))||"vn1116dc3d");
  if(!host){host=document.createElement("div");if(cs&&cs.parentNode)cs.parentNode.insertBefore(host,cs);else document.body.appendChild(host);}
  if(host.__vn)return;host.__vn=1;
  var TOPOFF=+(host.getAttribute("data-top")||0)||0;
  if(!document.getElementById("vn-font-notokr")){var lk=document.createElement("link");lk.id="vn-font-notokr";lk.rel="stylesheet";lk.href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap";document.head.appendChild(lk);}
  /* \uae30\uc0ac \ubcf8\ubb38 \uc790\ub9ac\uc5d0 \uadf8\ub300\ub85c \ub123\ub294\ub2e4. \ud654\uba74 \uace0\uc815\uc740 \ube0c\ub77c\uc6b0\uc800\uc758 sticky \ub97c \uba3c\uc800 \uc4f4\ub2e4(\uc2a4\ud06c\ub864\uacfc \uac19\uc774 \uc6c0\uc9c1\uc5ec \ub5a8\ub9ac\uc9c0 \uc54a\uc74c).
     \uae30\uc0ac \ud2c0\uc774 \ub118\uce58\ub294 \ubd80\ubd84\uc744 \uc798\ub77c\ub0b4\uba74(overflow) sticky \uc640 \uc804\uccb4 \ud3ed\uc774 \ub9c9\ud788\ubbc0\ub85c, \uc2a4\ud06c\ub864 \uc0c1\uc790\uac00 \uc544\ub2cc \uc870\uc0c1\ub9cc \ud480\uc5b4 \uc900\ub2e4. */
  var ROOT=host.attachShadow?host.attachShadow({mode:"open"}):host;
  ROOT.innerHTML="<style>"+VN_CSS+"</style>"+VN_HTML;
  if(!ROOT.getElementById)ROOT.getElementById=function(id){return ROOT.querySelector("#"+id);};
  var VN=ROOT.querySelector(".vn"),pins=ROOT.querySelectorAll(".pin"),story=ROOT.querySelector("#story"),fin=ROOT.querySelector(".fin"),mode="sticky",state="?";
  host.style.cssText="display:block;position:relative;max-width:none;margin:0;padding:0;border:0;overflow-anchor:none;transform:none;background:#070b10";
  function unlock(){
    var a=host.parentElement,n=0,cs,oy;
    while(a&&a!==document.body&&a!==document.documentElement&&n<14){
      try{
        cs=getComputedStyle(a);oy=cs.overflowY;
        if(cs.overflowX!=="visible"||oy!=="visible"){
          if((oy==="auto"||oy==="scroll")&&a.scrollHeight>a.clientHeight+2)break;
          a.style.setProperty("overflow","visible","important");
        }
      }catch(e){}
      a=a.parentElement;n++;
    }
  }
  function bleed(){
    unlock();
    var cw=document.documentElement.clientWidth,clip=false,a=host.parentElement,x;
    while(a&&a!==document.body&&a!==document.documentElement){var ox=getComputedStyle(a).overflowX;if(ox&&ox!=="visible"){clip=true;break;}a=a.parentElement;}
    host.style.left="0px";
    if(clip){host.style.width="100%";}
    else{host.style.width=cw+"px";x=host.getBoundingClientRect().left;if(Math.abs(x)>0.5)host.style.left=(-x)+"px";}
    for(var i=0;i<pins.length;i++)pins[i].style.height=TOPOFF?"calc(100vh - "+TOPOFF+"px)":"";
  }
  function vnScroll(){return TOPOFF-VN.getBoundingClientRect().top;}
  function setCls(st){VN.className=VN.className.replace(/ ?\b(fx|end|sk)\b/g,"")+(mode==="sticky"?" sk":"")+(st?" "+st:"");}
  function clearPins(){for(var i=0;i<pins.length;i++){pins[i].style.top="";pins[i].style.width="";pins[i].style.left="";}story.style.marginTop="";fin.style.height="";}
  function applySticky(){
    var ph=pins[0].offsetHeight;
    for(var i=0;i<pins.length;i++)pins[i].style.top=TOPOFF+"px";
    story.style.marginTop=(-ph)+"px";fin.style.height=ph+"px";
  }
  function pin(){
    var sy=vnScroll(),ph=pins[0].offsetHeight,max=VN.offsetHeight-ph,st=sy<=0?"":sy>=max?"end":"fx",i,t,hl;
    if(mode==="sticky"&&st!==state){
      state=st;setCls(st==="end"?"end":"");applySticky();
      ph=pins[0].offsetHeight;sy=vnScroll();max=VN.offsetHeight-ph;
      if(sy>4&&sy<max-4){t=pins[0].getBoundingClientRect();if(Math.abs(t.top-TOPOFF)>3){mode="fixed";clearPins();setCls("");state="?";}}
    }
    if(mode==="fixed"&&st!==state){
      state=st;setCls(st);hl=host.getBoundingClientRect();
      for(i=0;i<pins.length;i++){pins[i].style.top=st==="fx"?TOPOFF+"px":"";pins[i].style.width=st==="fx"?hl.width+"px":"";pins[i].style.left=st==="fx"?hl.left+"px":"";}
      if(st==="fx"){t=pins[0].getBoundingClientRect();if(Math.abs(t.top-TOPOFF)>3||Math.abs(t.left-hl.left)>3){mode="abs";clearPins();setCls("");state="?";}}
    }
    if(mode==="abs"){var y=Math.max(0,Math.min(max,sy));for(i=0;i<pins.length;i++)pins[i].style.top=y+"px";}
  }
  function redo(){bleed();state="?";pin();}
  redo();
  window.addEventListener("scroll",pin,{passive:true,capture:true});
  window.addEventListener("resize",redo);window.addEventListener("load",redo);setTimeout(redo,400);setTimeout(redo,1500);
  (function loop(){pin();requestAnimationFrame(loop);})();
  function start(){try{vnApp(ROOT,VN,BASE,TOPOFF,vnScroll);}catch(e){if(window.console)console.error("[vn]",e);}redo();}
  if(window.THREE&&window.THREE.GLTFLoader)start();
  else{var sc=document.createElement("script");sc.src=BASE+"three-bundle.js";sc.onload=start;sc.onerror=start;document.head.appendChild(sc);}
})();

})();
