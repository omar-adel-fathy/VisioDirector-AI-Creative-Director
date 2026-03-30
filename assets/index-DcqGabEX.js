(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const w={nike:{name:"Nike",handle:"@nike",avatar:"N",followers:"304M",posts:"1,247",engagement:"3.8%",aesthetic:"Bold, Dynamic, Athletic",colors:["#111111","#ffffff","#ff6b35","#c4c4c4","#1a1a2e"],themes:["Athletic performance","Street culture","Empowerment","Urban lifestyle"],tone:"Motivational, direct, empowering",visualStyle:"High-contrast photography, motion blur, dramatic lighting, close-up product shots",contentMix:{photos:60,videos:30,reels:10},topHashtags:["#JustDoIt","#Nike","#NikeRunning","#AirMax","#NikeFit"],brandPersonality:"Champion of athletes at every level. Bold visual storytelling with focus on movement, sweat, and determination."},zara:{name:"Zara",handle:"@zara",avatar:"Z",followers:"60.2M",posts:"3,891",engagement:"2.1%",aesthetic:"Minimal, Editorial, Sophisticated",colors:["#000000","#f5f5f0","#8b7355","#c9b99a","#2c2c2c"],themes:["Editorial fashion","Minimalist luxury","Seasonal collections","Street style"],tone:"Understated, refined, aspirational",visualStyle:"Clean studio shots, editorial spreads, neutral tones, architectural backdrops",contentMix:{photos:75,videos:15,reels:10},topHashtags:["#Zara","#ZaraStyle","#ZaraNewCollection","#OOTD"],brandPersonality:"Fast fashion meets editorial quality. Clean lines, sophisticated palettes, and effortlessly chic presentations."},gucci:{name:"Gucci",handle:"@gucci",avatar:"G",followers:"52.8M",posts:"8,421",engagement:"1.9%",aesthetic:"Maximalist, Eclectic, Luxurious",colors:["#0a3622","#c6a962","#ff0000","#f0e6d3","#1a1a1a"],themes:["Heritage luxury","Art & culture","Gender fluidity","Italian craftsmanship"],tone:"Bold, artistic, provocative",visualStyle:"Richly saturated colors, ornate settings, art-inspired compositions, cinematic framing",contentMix:{photos:50,videos:35,reels:15},topHashtags:["#Gucci","#GucciGang","#GucciFW","#AlessandroMichele"],brandPersonality:"Boundary-pushing luxury. Baroque maximalism meets contemporary art. Every visual is a curated gallery piece."},default:{name:"Brand",handle:"@brand",avatar:"B",followers:"12.5K",posts:"342",engagement:"4.2%",aesthetic:"Modern, Clean, Versatile",colors:["#1a1a2e","#e94560","#533483","#0f3460","#f5f5f5"],themes:["Lifestyle","Product showcase","Community","Behind the scenes"],tone:"Friendly, authentic, engaging",visualStyle:"Natural lighting, lifestyle settings, warm tones, candid moments",contentMix:{photos:55,videos:25,reels:20},topHashtags:["#Brand","#NewDrop","#StyleInspo"],brandPersonality:"Approachable and authentic. Focuses on real moments and genuine connections with the audience."}};function k(t){const e=t.replace("@","").toLowerCase().trim();return w[e]||{...w.default,name:e.charAt(0).toUpperCase()+e.slice(1),handle:`@${e}`,avatar:e.charAt(0).toUpperCase()}}const A=[{id:"urban-editorial",title:"Urban Editorial",mood:"Raw, authentic street fashion captured through iPhone lens. Models in real urban settings — concrete, graffiti, golden hour light.",styleDirection:"Street photography, natural light, candid poses, urban textures",cameraStyle:"iPhone 15 Pro, natural mode, shallow depth of field",gradientColors:["#667eea","#764ba2"],icon:"🏙️"},{id:"studio-minimal",title:"Studio Minimal",mood:"Clean, high-fashion studio aesthetic. Stark white or solid color backgrounds. Focus entirely on garment and model expression.",styleDirection:"Studio lighting, minimal set, fashion-forward poses, crisp detail",cameraStyle:"iPhone 15 Pro, portrait mode, studio lighting preset",gradientColors:["#f5f7fa","#c3cfe2"],icon:"📷"},{id:"lifestyle-golden",title:"Golden Hour Lifestyle",mood:"Warm, aspirational lifestyle moments. Models living their best life during magic hour. Effortless luxury meets everyday beauty.",styleDirection:"Golden hour, warm tones, lifestyle moments, natural expressions",cameraStyle:"iPhone 15 Pro, cinematic mode, warm tone filter",gradientColors:["#f093fb","#f5576c"],icon:"🌅"},{id:"night-luxe",title:"Night Luxe",mood:"After-dark sophistication. Neon reflections, city lights, high contrast. The brand comes alive after sunset.",styleDirection:"Night photography, neon accents, dramatic shadows, high contrast",cameraStyle:"iPhone 15 Pro, night mode, long exposure",gradientColors:["#0c0c1d","#6366f1"],icon:"🌃"},{id:"nature-organic",title:"Nature Organic",mood:"Fashion meets nature. Models in natural landscapes — forests, beaches, fields. Earthy tones, organic textures, environmental storytelling.",styleDirection:"Nature photography, earth tones, wide shots, environmental context",cameraStyle:"iPhone 15 Pro, landscape mode, HDR",gradientColors:["#11998e","#38ef7d"],icon:"🌿"},{id:"retro-film",title:"Retro Film Grain",mood:"Nostalgic film aesthetic with modern fashion. Grain, warm color shift, vintage vibes. The past reimagined for today.",styleDirection:"Film grain, vintage color grading, retro poses, analog feel",cameraStyle:"iPhone 15 Pro with VSCO film preset, grain overlay",gradientColors:["#c79081","#dfa579"],icon:"🎞️"}];function x(t){return[...A].sort(()=>Math.random()-.5).slice(0,3).map((a,s)=>({...a,number:s+1,brandColors:t.colors,adaptedMood:`${a.mood} Adapted to ${t.name}'s ${t.aesthetic} aesthetic.`}))}const $={"urban-editorial":{primary:["street fashion photography iPhone","urban editorial style","street style candid shots","concrete jungle fashion"],mood:["raw authentic fashion shoot","graffiti wall fashion","golden hour street portrait","city fashion editorial"],pose:["walking pose fashion","leaning wall model","candid street model","urban attitude pose"],reference:["iPhone street photography inspiration","urban fashion moodboard","raw street fashion aesthetic"]},"studio-minimal":{primary:["minimal studio fashion photography","white background fashion shoot","clean fashion editorial","high fashion studio portrait"],mood:["minimalist fashion aesthetic","stark studio look","clean line fashion","simple elegant fashion shoot"],pose:["fashion model studio pose","editorial stance","minimal movement fashion","geometric body pose"],reference:["iPhone portrait mode studio","minimal fashion moodboard","studio lighting fashion reference"]},"lifestyle-golden":{primary:["golden hour fashion photography","lifestyle brand photography","warm tone fashion shoot","magic hour portrait"],mood:["aspirational lifestyle fashion","warm golden light portrait","effortless luxury lifestyle","sunset fashion editorial"],pose:["natural lifestyle pose","candid laughing model","walking away shot golden hour","windblown hair fashion"],reference:["golden hour photography moodboard","warm lifestyle aesthetic","iPhone golden hour portrait"]},"night-luxe":{primary:["night fashion photography","neon light fashion shoot","after dark fashion editorial","city lights portrait"],mood:["neon noir aesthetic","night club fashion","urban night luxury","dark moody fashion"],pose:["dramatic shadow pose","neon reflection portrait","night street model","silhouette fashion"],reference:["night photography moodboard","neon fashion aesthetic","iPhone night mode fashion"]},"nature-organic":{primary:["nature fashion photography","outdoor fashion editorial","earthy tone fashion shoot","landscape fashion portrait"],mood:["organic natural fashion","forest fashion shoot","beach editorial fashion","earth tone aesthetic"],pose:["nature backdrop model","walking field fashion","sitting rock model","looking away nature"],reference:["nature fashion moodboard","organic aesthetic Pinterest","outdoor editorial reference"]},"retro-film":{primary:["film grain fashion photography","vintage fashion aesthetic","retro film look editorial","analog fashion shoot"],mood:["70s fashion aesthetic","nostalgic fashion photography","warm vintage portrait","retro color grading fashion"],pose:["vintage pose fashion model","retro stance editorial","classic model pose film","old school glamour"],reference:["film photography moodboard","vintage fashion inspiration","analog aesthetic Pinterest"]}};function E(t){return $[t]||$["urban-editorial"]}function z(t,e){const a=e.name,s=e.aesthetic,n=e.colors.slice(0,3).join(", ");return{mainPrompt:`A hyper-realistic iPhone 15 Pro photograph of a fashion model wearing ${a} clothing. ${t.adaptedMood}

Style: ${t.styleDirection}
Camera: ${t.cameraStyle}
Lighting: Natural, realistic, no artificial studio feel
Color palette influenced by: ${n}
Brand aesthetic: ${s}

The image should look like it was taken by a professional photographer using only an iPhone — authentic, candid but intentionally composed. High realism, no AI artifacts, natural skin texture, real fabric draping.

Key details:
- Model should embody ${a}'s target demographic
- Clothing should be realistic, matching ${a}'s current collection style
- Environment should feel lived-in and authentic
- Composition follows rule of thirds
- Natural bokeh and depth of field`,negativePrompt:"cartoon, illustration, 3d render, fake looking, overly edited, plastic skin, unrealistic proportions, stock photo feel, watermark, text, logo overlay, oversaturated, HDR artifacts",referenceNote:"Use the Pinterest reference images as style/mood guide in NanoAbanan 2. Upload 1-2 matching references alongside this prompt for best results.",editInstructions:[`Swap generic clothing → actual ${a} pieces from latest collection`,"Match model pose/setting to brand's existing Instagram aesthetic",`Ensure color grading aligns with ${a}'s visual identity (${s})`,"Add subtle brand elements if appropriate (accessories, bags, shoes)","Final edit: maintain iPhone realism — avoid over-processing"]}}const g={welcome:"Hey! 👋 I'm your AI Creative Director. Let's create some stunning visual concepts for your brand. Drop an Instagram handle below and I'll analyze the brand's aesthetic, then craft 3 unique visual concepts with everything you need to bring them to life.",analyzing:"Analyzing the brand's Instagram presence... Looking at visual style, color palette, content themes, and overall aesthetic direction.",analysisComplete:t=>`I've studied **${t}'s** Instagram presence thoroughly. Here's what I found — their visual identity is ${t==="Nike"?"bold and athletic, driven by high-contrast imagery and empowerment narratives":t==="Zara"?"minimal and editorial, with clean lines and sophisticated neutral tones":t==="Gucci"?"maximalist and eclectic, rich with art-inspired visuals and heritage luxury":"clean and modern with a focus on authentic lifestyle content"}. Let me generate 3 concept directions based on this analysis.`,conceptsReady:"Here are 3 visual concept directions that align with the brand's aesthetic. Each concept is designed to feel authentic — like real iPhone footage shot by a creative team. Select the ones you want to develop further.",referencesIntro:"Great choices! Now let's find the perfect reference images. Below are curated Pinterest search keywords for each concept. Search these on Pinterest, grab 1-2 images that match the vibe, and upload them here. These references will be used alongside the AI prompts.",promptsReady:"Your AI generation prompts are ready! Each prompt is optimized for high-realism iPhone-style photography. Pair these with your Pinterest references in NanoAbanan 2 for the best results. After generation, we'll swap in the brand's actual clothing.",deliveryReady:t=>`Here's your complete concept package for **${t}**! 3 visual concepts, fully briefed with prompts, references, and edit instructions. Once the AI generates the base images, swap the clothing to match ${t}'s actual pieces for the final deliverables. You're ready to present to the client! 🎯`};function h(t,e,a=18){return new Promise(s=>{const n=e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");t.innerHTML="",t.style.opacity="1";const r=document.createElement("div");r.innerHTML=n;const i=[];function l(c){if(c.nodeType===3)for(const m of c.textContent)i.push({char:m,wrapper:null});else if(c.nodeType===1){const m=c.tagName.toLowerCase();for(const u of c.textContent)i.push({char:u,wrapper:m})}}r.childNodes.forEach(l);let d=0,p=null,v=null;function o(){if(d<i.length){const{char:c,wrapper:m}=i[d];m!==p&&(m?(v=document.createElement(m),t.appendChild(v)):v=null,p=m),v?v.textContent+=c:t.appendChild(document.createTextNode(c)),d++,setTimeout(o,a)}else s()}o()})}function y(t,e,a=80){t.querySelectorAll(e).forEach((n,r)=>{n.style.opacity="0",n.style.transform="translateY(16px)",n.style.transition=`all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${r*a}ms`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="translateY(0)"})})})}function L(t,e=400,a=0){t.style.opacity="0",t.style.transform="translateY(24px)",t.style.transition=`all ${e}ms cubic-bezier(0.16, 1, 0.3, 1) ${a}ms`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.style.opacity="1",t.style.transform="translateY(0)"})})}function b(t){return new Promise(e=>setTimeout(e,t))}function M(t,e,a){t.innerHTML=`
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 1</span>
        <h1 class="panel-title">Brand Analysis</h1>
        <p class="panel-description">Enter an Instagram handle to analyze the brand's visual identity, aesthetic, and content strategy.</p>
      </div>

      <!-- Agent Welcome Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">🎨</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="welcome-text"></div>
        </div>
      </div>

      <!-- Input -->
      <div class="card-glass slide-up stagger-2" style="margin-bottom: var(--space-xl);">
        <div class="input-row">
          <div class="input-group">
            <label class="input-label">Instagram Handle</label>
            <input type="text" class="input-field" id="ig-handle-input" 
                   placeholder="@brandname (try @nike, @zara, or @gucci)"
                   value="${e.brandHandle||""}" />
          </div>
          <button class="btn btn-primary btn-lg" id="analyze-btn">
            <span>⚡</span> Analyze Brand
          </button>
        </div>
      </div>

      <!-- Analysis Results (hidden initially) -->
      <div id="analysis-results" style="display: none;"></div>
    </div>
  `;const s=t.querySelector("#welcome-text");h(s,g.welcome,12);const n=t.querySelector("#analyze-btn"),r=t.querySelector("#ig-handle-input");if(r.addEventListener("keydown",i=>{i.key==="Enter"&&n.click()}),n.addEventListener("click",async()=>{const i=r.value.trim();if(!i){r.style.borderColor="#ef4444",setTimeout(()=>r.style.borderColor="",1e3);return}e.brandHandle=i,e.brandProfile=k(i),n.disabled=!0,n.innerHTML='<span class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></span> Analyzing...';const l=t.querySelector("#analysis-results");l.style.display="block",l.innerHTML=`
      <div class="agent-message" id="analysis-msg">
        <div class="agent-avatar">🔍</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="analysis-text"></div>
        </div>
      </div>
      <div id="profile-card-area"></div>
    `,L(l.querySelector("#analysis-msg"));const d=l.querySelector("#analysis-text");await b(500),await h(d,g.analyzing,15),await b(1200),d.innerHTML="",await h(d,g.analysisComplete(e.brandProfile.name),12),await b(400);const p=l.querySelector("#profile-card-area");S(p,e.brandProfile),y(p,".reveal-item",100),n.disabled=!1,n.innerHTML="<span>→</span> Generate Concepts",n.onclick=()=>a()}),e.brandProfile){const i=t.querySelector("#analysis-results");i.style.display="block",S(i,e.brandProfile),n.innerHTML="<span>→</span> Generate Concepts",n.onclick=()=>a()}}function S(t,e){t.innerHTML=`
    <div class="card-gradient reveal-item" style="margin-bottom: var(--space-lg);">
      <div style="display: flex; align-items: center; gap: var(--space-lg); margin-bottom: var(--space-xl);">
        <div class="brand-avatar" style="width: 56px; height: 56px; font-size: 1.4rem;">${e.avatar}</div>
        <div>
          <h3 style="margin-bottom: 2px;">${e.name}</h3>
          <span style="color: var(--text-tertiary); font-size: 0.85rem;">${e.handle}</span>
        </div>
        <div style="margin-left: auto; display: flex; gap: var(--space-xl);">
          <div class="stat-card" style="padding: var(--space-sm);">
            <div class="stat-value" style="font-size: 1.2rem;">${e.followers}</div>
            <div class="stat-label">Followers</div>
          </div>
          <div class="stat-card" style="padding: var(--space-sm);">
            <div class="stat-value" style="font-size: 1.2rem;">${e.posts}</div>
            <div class="stat-label">Posts</div>
          </div>
          <div class="stat-card" style="padding: var(--space-sm);">
            <div class="stat-value" style="font-size: 1.2rem;">${e.engagement}</div>
            <div class="stat-label">Engagement</div>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="grid-2 reveal-item" style="gap: var(--space-xl);">
        <div>
          <div class="info-row">
            <span class="info-label">Aesthetic</span>
            <span class="info-value">${e.aesthetic}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Tone</span>
            <span class="info-value">${e.tone}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Content Mix</span>
            <span class="info-value">📸 ${e.contentMix.photos}% · 🎬 ${e.contentMix.videos}% · 🎥 ${e.contentMix.reels}%</span>
          </div>
        </div>
        <div>
          <div style="margin-bottom: var(--space-md);">
            <span class="info-label" style="display: block; margin-bottom: var(--space-sm);">Color Palette</span>
            <div class="color-palette">
              ${e.colors.map(a=>`<div class="color-swatch" style="background: ${a};" title="${a}"></div>`).join("")}
            </div>
          </div>
          <div>
            <span class="info-label" style="display: block; margin-bottom: var(--space-sm);">Themes</span>
            <div class="tag-list">
              ${e.themes.map(a=>`<span class="badge">${a}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-glass reveal-item">
      <h4 style="margin-bottom: var(--space-sm);">📝 Visual Style Summary</h4>
      <p style="font-size: 0.9rem; line-height: 1.7;">${e.visualStyle}</p>
      <div class="divider"></div>
      <h4 style="margin-bottom: var(--space-sm);">🎯 Brand Personality</h4>
      <p style="font-size: 0.9rem; line-height: 1.7;">${e.brandPersonality}</p>
    </div>
  `}function C(t,e,a){(!e.concepts||e.concepts.length===0)&&(e.concepts=x(e.brandProfile)),e.selectedConcepts||(e.selectedConcepts=new Set),t.innerHTML=`
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 2</span>
        <h1 class="panel-title">Visual Concepts</h1>
        <p class="panel-description">3 unique creative directions tailored to ${e.brandProfile.name}'s visual identity. Select the ones to develop.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">💡</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="concepts-text"></div>
        </div>
      </div>

      <!-- Concepts Grid -->
      <div class="grid-3" id="concepts-grid" style="margin-bottom: var(--space-xl);">
        ${e.concepts.map((l,d)=>T(l,d,e.selectedConcepts.has(d))).join("")}
      </div>

      <!-- Selection Info -->
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span id="selection-count" style="font-size: 0.85rem; color: var(--text-tertiary);">
            ${e.selectedConcepts.size>0?`${e.selectedConcepts.size} concept${e.selectedConcepts.size>1?"s":""} selected`:"Click cards to select concepts"}
          </span>
        </div>
        <div style="display: flex; gap: var(--space-md);">
          <button class="btn btn-secondary" id="shuffle-btn">
            <span>🔄</span> New Concepts
          </button>
          <button class="btn btn-primary btn-lg" id="continue-concepts-btn" ${e.selectedConcepts.size===0?"disabled":""}>
            <span>→</span> Find References
          </button>
        </div>
      </div>
    </div>
  `;const s=t.querySelector("#concepts-text");h(s,g.conceptsReady,12),setTimeout(()=>{y(t.querySelector("#concepts-grid"),".concept-card",120)},200);const n=t.querySelectorAll(".concept-card"),r=t.querySelector("#selection-count"),i=t.querySelector("#continue-concepts-btn");n.forEach((l,d)=>{l.addEventListener("click",()=>{e.selectedConcepts.has(d)?(e.selectedConcepts.delete(d),l.classList.remove("selected")):(e.selectedConcepts.add(d),l.classList.add("selected"));const p=e.selectedConcepts.size;r.textContent=p>0?`${p} concept${p>1?"s":""} selected`:"Click cards to select concepts",i.disabled=p===0})}),t.querySelector("#shuffle-btn").addEventListener("click",()=>{e.concepts=x(e.brandProfile),e.selectedConcepts=new Set,C(t,e,a)}),i.addEventListener("click",()=>a())}function T(t,e,a){const s=`linear-gradient(135deg, ${t.gradientColors[0]}, ${t.gradientColors[1]})`;return`
    <div class="card concept-card ${a?"selected":""}" data-index="${e}" style="opacity: 0;">
      <div class="concept-card-image" style="background: ${s};">
        <div class="concept-number">${t.number}</div>
        <div style="position: absolute; bottom: var(--space-lg); left: var(--space-lg); z-index: 2;">
          <span style="font-size: 2rem;">${t.icon}</span>
        </div>
      </div>
      <div class="concept-card-body">
        <h4>${t.title}</h4>
        <p>${t.mood}</p>
        <div style="margin-bottom: var(--space-md);">
          <span class="badge badge-accent">${t.styleDirection.split(",")[0]}</span>
        </div>
        <div style="margin-bottom: var(--space-sm);">
          <span class="info-label" style="font-size: 0.72rem;">Camera</span>
        </div>
        <p style="font-size: 0.78rem; color: var(--text-tertiary); margin-bottom: 0;">${t.cameraStyle}</p>
      </div>
    </div>
  `}function I(t,e,a){const n=Array.from(e.selectedConcepts||[]).map(o=>e.concepts[o]);e.uploadedRefs||(e.uploadedRefs={}),t.innerHTML=`
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 3</span>
        <h1 class="panel-title">Reference Board</h1>
        <p class="panel-description">Find the perfect mood reference images on Pinterest using these curated keywords.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">🔎</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="ref-text"></div>
        </div>
      </div>

      <!-- Keywords per concept -->
      <div id="keywords-sections">
        ${n.map((o,c)=>R(o,c)).join("")}
      </div>

      <!-- Upload Section -->
      <div class="section" style="margin-top: var(--space-xl);">
        <h3 class="section-title">📎 Reference Images</h3>
        <p style="font-size: 0.88rem; color: var(--text-tertiary); margin-bottom: var(--space-lg);">
          Grab images from Pinterest using the keywords above, then drop them here. These references will be paired with your AI prompts.
        </p>
        
        <div class="upload-zone" id="upload-zone">
          <div class="upload-zone-icon">📁</div>
          <div class="upload-zone-text">Drop reference images here</div>
          <div class="upload-zone-hint">or click to browse · PNG, JPG up to 10MB</div>
          <input type="file" id="file-input" multiple accept="image/*" style="display: none;" />
        </div>

        <div class="ref-images-grid" id="ref-images-grid" style="margin-top: var(--space-lg);"></div>
      </div>

      <!-- Continue -->
      <div style="display: flex; justify-content: flex-end; margin-top: var(--space-xl);">
        <button class="btn btn-primary btn-lg" id="continue-ref-btn">
          <span>→</span> Build Prompts
        </button>
      </div>
    </div>
  `;const r=t.querySelector("#ref-text");h(r,g.referencesIntro,12),setTimeout(()=>{y(t.querySelector("#keywords-sections"),".keyword-section",150)},300);const i=t.querySelector("#upload-zone"),l=t.querySelector("#file-input"),d=t.querySelector("#ref-images-grid");i.addEventListener("click",()=>l.click()),i.addEventListener("dragover",o=>{o.preventDefault(),i.style.borderColor="var(--accent-primary)",i.style.background="var(--accent-glow)"}),i.addEventListener("dragleave",()=>{i.style.borderColor="",i.style.background=""}),i.addEventListener("drop",o=>{o.preventDefault(),i.style.borderColor="",i.style.background="",p(o.dataTransfer.files)}),l.addEventListener("change",()=>{p(l.files)});function p(o){Array.from(o).forEach(c=>{if(!c.type.startsWith("image/"))return;const m=new FileReader;m.onload=u=>{const f=Date.now()+Math.random();e.uploadedRefs.images||(e.uploadedRefs.images=[]),e.uploadedRefs.images.push({id:f,src:u.target.result,name:c.name}),v()},m.readAsDataURL(c)})}function v(){if(!e.uploadedRefs.images||e.uploadedRefs.images.length===0){d.innerHTML="";return}d.innerHTML=e.uploadedRefs.images.map(o=>`
      <div class="ref-image-card" data-id="${o.id}">
        <img src="${o.src}" alt="${o.name}" />
        <button class="remove-btn" title="Remove">✕</button>
      </div>
    `).join(""),d.querySelectorAll(".remove-btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();const m=o.closest(".ref-image-card"),u=parseFloat(m.dataset.id);e.uploadedRefs.images=e.uploadedRefs.images.filter(f=>f.id!==u),v()})})}v(),t.querySelectorAll(".chip").forEach(o=>{o.addEventListener("click",()=>{navigator.clipboard.writeText(o.textContent.trim()).then(()=>{const c=o.innerHTML;o.innerHTML="✓ Copied!",o.classList.add("selected"),setTimeout(()=>{o.innerHTML=c,o.classList.remove("selected")},1500)})})}),t.querySelector("#continue-ref-btn").addEventListener("click",()=>a())}function R(t,e){const a=E(t.id),s=[{label:"🔑 Primary Search",key:"primary"},{label:"🎭 Mood & Atmosphere",key:"mood"},{label:"🧍 Pose & Composition",key:"pose"},{label:"📌 Reference Style",key:"reference"}];return`
    <div class="card-gradient keyword-section" style="margin-bottom: var(--space-lg); opacity: 0;">
      <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
        <span style="font-size: 1.5rem;">${t.icon}</span>
        <div>
          <h3 style="margin-bottom: 2px;">Concept ${e+1}: ${t.title}</h3>
          <p style="font-size: 0.82rem; margin-bottom: 0;">Pinterest search keywords for this visual direction</p>
        </div>
      </div>

      ${s.map(n=>`
        <div style="margin-bottom: var(--space-md);">
          <div class="keyword-section-title">${n.label}</div>
          <div class="keywords-grid">
            ${(a[n.key]||[]).map(r=>`
              <span class="chip" title="Click to copy">🔍 ${r}</span>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `}function N(t,e,a){const n=Array.from(e.selectedConcepts||[]).map(i=>e.concepts[i]);e.prompts=n.map(i=>({concept:i,prompt:z(i,e.brandProfile)})),t.innerHTML=`
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 4</span>
        <h1 class="panel-title">AI Prompt Builder</h1>
        <p class="panel-description">Optimized prompts for hyper-realistic iPhone-style brand photography. Use with NanoAbanan 2 + your Pinterest references.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">⚡</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="prompt-text"></div>
        </div>
      </div>

      <!-- Prompt Blocks -->
      <div id="prompt-blocks">
        ${e.prompts.map((i,l)=>D(i,l)).join("")}
      </div>

      <!-- Usage Instructions -->
      <div class="card-glass" style="margin-top: var(--space-xl); margin-bottom: var(--space-xl);">
        <h4 style="margin-bottom: var(--space-md);">📋 How to Use These Prompts</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg);">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: var(--space-sm);">1️⃣</div>
            <h5 style="font-size: 0.85rem; margin-bottom: var(--space-xs);">Grab References</h5>
            <p style="font-size: 0.82rem;">Use the Pinterest keywords from Step 3 to find 1-2 matching reference images.</p>
          </div>
          <div>
            <div style="font-size: 1.5rem; margin-bottom: var(--space-sm);">2️⃣</div>
            <h5 style="font-size: 0.85rem; margin-bottom: var(--space-xs);">Generate in NanoAbanan 2</h5>
            <p style="font-size: 0.82rem;">Upload references + paste the prompt. Use the reference images as style guide for realistic output.</p>
          </div>
          <div>
            <div style="font-size: 1.5rem; margin-bottom: var(--space-sm);">3️⃣</div>
            <h5 style="font-size: 0.85rem; margin-bottom: var(--space-xs);">Swap & Edit</h5>
            <p style="font-size: 0.82rem;">Replace generic clothing with actual ${e.brandProfile.name} pieces. Match the brand's collection.</p>
          </div>
        </div>
      </div>

      <!-- Continue -->
      <div style="display: flex; justify-content: flex-end;">
        <button class="btn btn-primary btn-lg" id="continue-prompt-btn">
          <span>→</span> View Final Delivery
        </button>
      </div>
    </div>
  `;const r=t.querySelector("#prompt-text");h(r,g.promptsReady,12),setTimeout(()=>{y(t.querySelector("#prompt-blocks"),".prompt-block",200)},300),t.querySelectorAll(".copy-btn").forEach(i=>{i.addEventListener("click",()=>{const d=i.closest(".prompt-block").querySelector(".prompt-text").textContent;navigator.clipboard.writeText(d).then(()=>{i.classList.add("copied"),i.innerHTML="✓ Copied!",setTimeout(()=>{i.classList.remove("copied"),i.innerHTML="📋 Copy Prompt"},2e3)})})}),t.querySelector("#continue-prompt-btn").addEventListener("click",()=>a())}function D(t,e){const{concept:a,prompt:s}=t,n=s.mainPrompt.replace(/(iPhone 15 Pro)/g,'<span class="highlight">$1</span>').replace(/(NanoAbanan 2)/g,'<span class="highlight">$1</span>').replace(/(hyper-realistic)/gi,'<span class="param">$1</span>').replace(/(natural skin texture|real fabric draping)/g,'<span class="param">$1</span>');return`
    <div class="prompt-block" style="opacity: 0;">
      <div class="prompt-block-header">
        <div class="prompt-block-title">
          <span>${a.icon}</span>
          Concept ${e+1}: ${a.title}
        </div>
        <button class="copy-btn">📋 Copy Prompt</button>
      </div>
      <div class="prompt-block-body">
        <div style="margin-bottom: var(--space-md);">
          <span class="badge badge-accent" style="margin-bottom: var(--space-sm);">Main Prompt</span>
        </div>
        <div class="prompt-text">${n}</div>

        <div class="divider"></div>

        <div style="margin-bottom: var(--space-md);">
          <span class="badge" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); color: #f87171;">Negative Prompt</span>
        </div>
        <div class="prompt-text" style="color: var(--text-tertiary); font-size: 0.78rem;">${s.negativePrompt}</div>

        <div class="divider"></div>

        <div style="display: flex; align-items: flex-start; gap: var(--space-md); padding: var(--space-md); background: var(--accent-glow); border-radius: var(--radius-md); border: 1px solid var(--border-active);">
          <span style="font-size: 1.2rem;">💡</span>
          <div>
            <h5 style="font-size: 0.82rem; font-weight: 600; margin-bottom: 4px; color: var(--accent-tertiary);">Reference Note</h5>
            <p style="font-size: 0.82rem; margin-bottom: 0; color: var(--text-secondary);">${s.referenceNote}</p>
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <h5 style="font-size: 0.82rem; font-weight: 600; margin-bottom: var(--space-sm); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em;">Post-Generation Edit Steps</h5>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-sm);">
            ${s.editInstructions.map(r=>`
              <li style="font-size: 0.82rem; color: var(--text-secondary); padding-left: var(--space-lg); position: relative;">
                <span style="position: absolute; left: 0; color: var(--accent-tertiary);">→</span>
                ${r}
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `}function H(t,e){const s=Array.from(e.selectedConcepts||[]).map(i=>e.concepts[i]),n=e.brandProfile.name;t.innerHTML=`
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge" style="background: var(--success-glow); border-color: var(--success); color: var(--success);">✓ Step 5</span>
        <h1 class="panel-title">Concept Delivery</h1>
        <p class="panel-description">Your complete visual concept package for ${n}. Ready to present to the client.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up" style="border-color: var(--success); background: var(--success-glow);">
        <div class="agent-avatar" style="background: linear-gradient(135deg, #22c55e, #16a34a);">🎯</div>
        <div class="agent-content">
          <div class="agent-name" style="color: var(--success);">VisioDirector AI</div>
          <div class="agent-text" id="delivery-text"></div>
        </div>
      </div>

      <!-- Summary Stats -->
      <div class="grid-3" style="margin-bottom: var(--space-2xl);">
        <div class="card-glass stat-card slide-up stagger-1">
          <div class="stat-value">${s.length}</div>
          <div class="stat-label">Visual Concepts</div>
        </div>
        <div class="card-glass stat-card slide-up stagger-2">
          <div class="stat-value">${s.length*4}</div>
          <div class="stat-label">Keyword Sets</div>
        </div>
        <div class="card-glass stat-card slide-up stagger-3">
          <div class="stat-value">${s.length}</div>
          <div class="stat-label">AI Prompts</div>
        </div>
      </div>

      <!-- Brand Brief Header -->
      <div class="card-gradient" style="margin-bottom: var(--space-2xl); text-align: center; padding: var(--space-2xl);">
        <div style="font-size: 3rem; margin-bottom: var(--space-md);">
          ${e.brandProfile.avatar}
        </div>
        <h2 style="margin-bottom: var(--space-sm);">${n} — Visual Concept Brief</h2>
        <p style="margin-bottom: var(--space-md);">Creative Direction by VisioDirector AI</p>
        <div class="tag-list" style="justify-content: center;">
          <span class="badge badge-accent">iPhone Realism</span>
          <span class="badge badge-accent">NanoAbanan 2</span>
          <span class="badge badge-accent">${e.brandProfile.aesthetic}</span>
        </div>
      </div>

      <!-- Concept Deliverables -->
      <div id="deliverables-grid">
        ${s.map((i,l)=>q(i,l,e)).join("")}
      </div>

      <!-- Final Workflow Summary -->
      <div class="card-glass" style="margin-top: var(--space-2xl); margin-bottom: var(--space-xl);">
        <h4 style="margin-bottom: var(--space-lg);">🔄 Execution Workflow Summary</h4>
        <div class="workflow-steps">
          ${B(n)}
        </div>
      </div>

      <!-- Actions -->
      <div style="display: flex; justify-content: center; gap: var(--space-md); margin-top: var(--space-xl);">
        <button class="btn btn-secondary btn-lg" id="restart-btn">
          <span>🔄</span> New Brand Analysis
        </button>
        <button class="btn btn-primary btn-lg" id="export-btn">
          <span>📄</span> Export Brief
        </button>
      </div>
    </div>
  `;const r=t.querySelector("#delivery-text");h(r,g.deliveryReady(n),12),setTimeout(()=>{y(t.querySelector("#deliverables-grid"),".delivery-card",200)},400),t.querySelector("#restart-btn").addEventListener("click",()=>{e.currentStep=0,e.brandHandle="",e.brandProfile=null,e.concepts=[],e.selectedConcepts=new Set,e.uploadedRefs={},e.prompts=[],window.dispatchEvent(new CustomEvent("app:restart"))}),t.querySelector("#export-btn").addEventListener("click",()=>{G(e,s)})}function q(t,e,a){var r;const s=a.prompts[e];return`
    <div class="delivery-card" style="margin-bottom: var(--space-xl); opacity: 0;">
      <div style="display: flex;">
        <div class="delivery-card-image" style="background: ${`linear-gradient(135deg, ${t.gradientColors[0]}80, ${t.gradientColors[1]}80)`}; width: 280px; min-height: 350px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
          <div style="text-align: center; z-index: 2; position: relative;">
            <div style="font-size: 3rem; margin-bottom: var(--space-md);">${t.icon}</div>
            <div style="font-size: 0.85rem; font-weight: 700; padding: var(--space-sm) var(--space-lg); background: rgba(0,0,0,0.4); backdrop-filter: blur(10px); border-radius: var(--radius-full);">
              Concept ${e+1}
            </div>
          </div>
        </div>
        <div class="delivery-card-body" style="flex: 1; padding: var(--space-xl);">
          <span class="badge badge-accent" style="margin-bottom: var(--space-md);">${t.styleDirection.split(",")[0]}</span>
          <h3 style="margin-bottom: var(--space-sm);">${t.title}</h3>
          <p style="margin-bottom: var(--space-lg);">${t.adaptedMood||t.mood}</p>

          <div class="grid-2" style="margin-bottom: var(--space-lg);">
            <div>
              <span class="info-label" style="display: block; font-size: 0.7rem; margin-bottom: 4px;">Camera Style</span>
              <span style="font-size: 0.85rem;">${t.cameraStyle}</span>
            </div>
            <div>
              <span class="info-label" style="display: block; font-size: 0.7rem; margin-bottom: 4px;">Brand Colors</span>
              <div class="color-palette">
                ${(t.brandColors||a.brandProfile.colors).slice(0,4).map(i=>`<div class="color-swatch" style="background: ${i}; width: 22px; height: 22px;"></div>`).join("")}
              </div>
            </div>
          </div>

          <div class="delivery-instructions">
            <h5>Post-Generation Edits</h5>
            <ul>
              ${(((r=s==null?void 0:s.prompt)==null?void 0:r.editInstructions)||[`Swap clothing to ${a.brandProfile.name} pieces`,"Match brand aesthetic and color grading","Maintain iPhone realism throughout"]).map(i=>`<li>${i}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function B(t){return`
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg);">
      ${[{icon:"🔍",title:"Search Pinterest",desc:"Use the curated keywords to find 1-2 matching reference images per concept"},{icon:"📎",title:"Pair References",desc:"Upload references alongside the AI prompt in NanoAbanan 2"},{icon:"🤖",title:"Generate Images",desc:"Run the prompt with references for hyper-realistic iPhone-style output"},{icon:"👗",title:"Swap Clothing",desc:`Replace generic clothing with actual ${t} pieces from the collection`},{icon:"🎨",title:"Color Grade",desc:`Adjust color grading to match ${t}'s Instagram visual identity`},{icon:"✅",title:"Final Review",desc:"Ensure consistency across all 3 concepts before client presentation"}].map((a,s)=>`
        <div style="display: flex; gap: var(--space-md); align-items: flex-start;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--accent-glow); border: 1px solid var(--border-active); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1rem;">
            ${a.icon}
          </div>
          <div>
            <h5 style="font-size: 0.82rem; font-weight: 600; margin-bottom: 2px;">${a.title}</h5>
            <p style="font-size: 0.78rem; margin-bottom: 0; color: var(--text-tertiary);">${a.desc}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `}function G(t,e){const a=t.brandProfile.name;let s=`═══════════════════════════════════════
`;s+=`  ${a} — Visual Concept Brief
`,s+=`  Creative Direction by VisioDirector AI
`,s+=`═══════════════════════════════════════

`,s+=`BRAND ANALYSIS
`,s+=`─────────────
`,s+=`Handle: ${t.brandProfile.handle}
`,s+=`Aesthetic: ${t.brandProfile.aesthetic}
`,s+=`Tone: ${t.brandProfile.tone}
`,s+=`Visual Style: ${t.brandProfile.visualStyle}

`,e.forEach((l,d)=>{const p=t.prompts[d];s+=`
CONCEPT ${d+1}: ${l.title.toUpperCase()}
`,s+=`─────────────
`,s+=`Mood: ${l.mood}
`,s+=`Style: ${l.styleDirection}
`,s+=`Camera: ${l.cameraStyle}

`,s+=`AI PROMPT:
${p.prompt.mainPrompt}

`,s+=`NEGATIVE PROMPT:
${p.prompt.negativePrompt}

`,s+=`EDIT STEPS:
`,p.prompt.editInstructions.forEach(v=>{s+=`  → ${v}
`}),s+=`
`});const n=new Blob([s],{type:"text/plain"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=`${a.toLowerCase()}_concept_brief.txt`,i.click(),URL.revokeObjectURL(r)}const P=[{id:"analyze",title:"Analyze Brand",subtitle:"Instagram study",icon:"🔍"},{id:"concepts",title:"Visual Concepts",subtitle:"3 creative directions",icon:"💡"},{id:"references",title:"Find References",subtitle:"Pinterest keywords",icon:"📌"},{id:"prompts",title:"Build Prompts",subtitle:"AI generation",icon:"⚡"},{id:"deliver",title:"Final Delivery",subtitle:"Client presentation",icon:"🎯"}];class F{constructor(e){this.root=e,this.state={currentStep:0,brandHandle:"",brandProfile:null,concepts:[],selectedConcepts:new Set,uploadedRefs:{},prompts:[]},window.addEventListener("app:restart",()=>{this.state={currentStep:0,brandHandle:"",brandProfile:null,concepts:[],selectedConcepts:new Set,uploadedRefs:{},prompts:[]},this.render()})}render(){this.root.innerHTML=`
      ${this.renderHeader()}
      <div class="app-body">
        ${this.renderSidebar()}
        <main class="main-content" id="main-content"></main>
      </div>
    `,this.renderCurrentPanel(),this.bindSidebarEvents()}renderHeader(){return`
      <header class="app-header">
        <div class="app-logo">
          <div class="app-logo-icon">✦</div>
          <span class="app-logo-text">VisioDirector</span>
          <span class="app-logo-badge">AI Creative Director</span>
        </div>
        <div class="app-header-right">
          ${this.state.brandProfile?`
            <div class="sidebar-brand-preview" style="padding: 6px 12px;">
              <div class="brand-avatar" style="width: 28px; height: 28px; font-size: 0.8rem;">${this.state.brandProfile.avatar}</div>
              <div class="brand-preview-info">
                <div class="brand-preview-name" style="font-size: 0.78rem;">${this.state.brandProfile.name}</div>
              </div>
            </div>
          `:""}
          <div class="progress-bar" style="width: 120px;">
            <div class="progress-fill" style="width: ${(this.state.currentStep+1)/P.length*100}%;"></div>
          </div>
        </div>
      </header>
    `}renderSidebar(){return`
      <aside class="sidebar">
        <div class="sidebar-section-title">Workflow Steps</div>
        <ul class="sidebar-steps">
          ${P.map((e,a)=>`
            <li class="sidebar-step ${a===this.state.currentStep?"active":""} ${a<this.state.currentStep?"completed":""}"
                data-step="${a}"
                ${a>this.state.currentStep?'style="opacity: 0.4; pointer-events: none;"':""}>
              <div class="step-indicator">
                ${a<this.state.currentStep?"✓":a+1}
              </div>
              <div class="step-info">
                <span class="step-title">${e.title}</span>
                <span class="step-subtitle">${e.subtitle}</span>
              </div>
            </li>
          `).join("")}
        </ul>

        ${this.state.brandProfile?`
          <div class="sidebar-footer">
            <div class="sidebar-brand-preview">
              <div class="brand-avatar">${this.state.brandProfile.avatar}</div>
              <div class="brand-preview-info">
                <div class="brand-preview-name">${this.state.brandProfile.name}</div>
                <div class="brand-preview-handle">${this.state.brandProfile.handle}</div>
              </div>
            </div>
          </div>
        `:`
          <div class="sidebar-footer">
            <div style="text-align: center; padding: var(--space-md); color: var(--text-tertiary); font-size: 0.78rem;">
              No brand selected yet
            </div>
          </div>
        `}
      </aside>
    `}renderCurrentPanel(){const e=this.root.querySelector("#main-content");if(!e)return;[()=>M(e,this.state,()=>this.goToStep(1)),()=>C(e,this.state,()=>this.goToStep(2)),()=>I(e,this.state,()=>this.goToStep(3)),()=>N(e,this.state,()=>this.goToStep(4)),()=>H(e,this.state)][this.state.currentStep]()}goToStep(e){this.state.currentStep=e,this.render();const a=this.root.querySelector("#main-content");a&&(a.scrollTop=0)}bindSidebarEvents(){this.root.querySelectorAll(".sidebar-step").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.step);s<=this.state.currentStep&&this.goToStep(s)})})}}const j=document.getElementById("app"),U=new F(j);U.render();
