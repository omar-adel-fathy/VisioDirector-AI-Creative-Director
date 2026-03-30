// ═══════════════════════════════════════════════════════════
// Mock Data — Brand profiles, concepts, keywords, prompts
// ═══════════════════════════════════════════════════════════

export const BRAND_PROFILES = {
    nike: {
        name: 'Nike',
        handle: '@nike',
        avatar: 'N',
        followers: '304M',
        posts: '1,247',
        engagement: '3.8%',
        aesthetic: 'Bold, Dynamic, Athletic',
        colors: ['#111111', '#ffffff', '#ff6b35', '#c4c4c4', '#1a1a2e'],
        themes: ['Athletic performance', 'Street culture', 'Empowerment', 'Urban lifestyle'],
        tone: 'Motivational, direct, empowering',
        visualStyle: 'High-contrast photography, motion blur, dramatic lighting, close-up product shots',
        contentMix: { photos: 60, videos: 30, reels: 10 },
        topHashtags: ['#JustDoIt', '#Nike', '#NikeRunning', '#AirMax', '#NikeFit'],
        brandPersonality: 'Champion of athletes at every level. Bold visual storytelling with focus on movement, sweat, and determination.',
    },
    zara: {
        name: 'Zara',
        handle: '@zara',
        avatar: 'Z',
        followers: '60.2M',
        posts: '3,891',
        engagement: '2.1%',
        aesthetic: 'Minimal, Editorial, Sophisticated',
        colors: ['#000000', '#f5f5f0', '#8b7355', '#c9b99a', '#2c2c2c'],
        themes: ['Editorial fashion', 'Minimalist luxury', 'Seasonal collections', 'Street style'],
        tone: 'Understated, refined, aspirational',
        visualStyle: 'Clean studio shots, editorial spreads, neutral tones, architectural backdrops',
        contentMix: { photos: 75, videos: 15, reels: 10 },
        topHashtags: ['#Zara', '#ZaraStyle', '#ZaraNewCollection', '#OOTD'],
        brandPersonality: 'Fast fashion meets editorial quality. Clean lines, sophisticated palettes, and effortlessly chic presentations.',
    },
    gucci: {
        name: 'Gucci',
        handle: '@gucci',
        avatar: 'G',
        followers: '52.8M',
        posts: '8,421',
        engagement: '1.9%',
        aesthetic: 'Maximalist, Eclectic, Luxurious',
        colors: ['#0a3622', '#c6a962', '#ff0000', '#f0e6d3', '#1a1a1a'],
        themes: ['Heritage luxury', 'Art & culture', 'Gender fluidity', 'Italian craftsmanship'],
        tone: 'Bold, artistic, provocative',
        visualStyle: 'Richly saturated colors, ornate settings, art-inspired compositions, cinematic framing',
        contentMix: { photos: 50, videos: 35, reels: 15 },
        topHashtags: ['#Gucci', '#GucciGang', '#GucciFW', '#AlessandroMichele'],
        brandPersonality: 'Boundary-pushing luxury. Baroque maximalism meets contemporary art. Every visual is a curated gallery piece.',
    },
    default: {
        name: 'Brand',
        handle: '@brand',
        avatar: 'B',
        followers: '12.5K',
        posts: '342',
        engagement: '4.2%',
        aesthetic: 'Modern, Clean, Versatile',
        colors: ['#1a1a2e', '#e94560', '#533483', '#0f3460', '#f5f5f5'],
        themes: ['Lifestyle', 'Product showcase', 'Community', 'Behind the scenes'],
        tone: 'Friendly, authentic, engaging',
        visualStyle: 'Natural lighting, lifestyle settings, warm tones, candid moments',
        contentMix: { photos: 55, videos: 25, reels: 20 },
        topHashtags: ['#Brand', '#NewDrop', '#StyleInspo'],
        brandPersonality: 'Approachable and authentic. Focuses on real moments and genuine connections with the audience.',
    }
};

export function getBrandProfile(handle) {
    const clean = handle.replace('@', '').toLowerCase().trim();
    return BRAND_PROFILES[clean] || {
        ...BRAND_PROFILES.default,
        name: clean.charAt(0).toUpperCase() + clean.slice(1),
        handle: `@${clean}`,
        avatar: clean.charAt(0).toUpperCase(),
    };
}

// ── Concept Templates ──
export const CONCEPT_TEMPLATES = [
    {
        id: 'urban-editorial',
        title: 'Urban Editorial',
        mood: 'Raw, authentic street fashion captured through iPhone lens. Models in real urban settings — concrete, graffiti, golden hour light.',
        styleDirection: 'Street photography, natural light, candid poses, urban textures',
        cameraStyle: 'iPhone 15 Pro, natural mode, shallow depth of field',
        gradientColors: ['#667eea', '#764ba2'],
        icon: '🏙️',
    },
    {
        id: 'studio-minimal',
        title: 'Studio Minimal',
        mood: 'Clean, high-fashion studio aesthetic. Stark white or solid color backgrounds. Focus entirely on garment and model expression.',
        styleDirection: 'Studio lighting, minimal set, fashion-forward poses, crisp detail',
        cameraStyle: 'iPhone 15 Pro, portrait mode, studio lighting preset',
        gradientColors: ['#f5f7fa', '#c3cfe2'],
        icon: '📷',
    },
    {
        id: 'lifestyle-golden',
        title: 'Golden Hour Lifestyle',
        mood: 'Warm, aspirational lifestyle moments. Models living their best life during magic hour. Effortless luxury meets everyday beauty.',
        styleDirection: 'Golden hour, warm tones, lifestyle moments, natural expressions',
        cameraStyle: 'iPhone 15 Pro, cinematic mode, warm tone filter',
        gradientColors: ['#f093fb', '#f5576c'],
        icon: '🌅',
    },
    {
        id: 'night-luxe',
        title: 'Night Luxe',
        mood: 'After-dark sophistication. Neon reflections, city lights, high contrast. The brand comes alive after sunset.',
        styleDirection: 'Night photography, neon accents, dramatic shadows, high contrast',
        cameraStyle: 'iPhone 15 Pro, night mode, long exposure',
        gradientColors: ['#0c0c1d', '#6366f1'],
        icon: '🌃',
    },
    {
        id: 'nature-organic',
        title: 'Nature Organic',
        mood: 'Fashion meets nature. Models in natural landscapes — forests, beaches, fields. Earthy tones, organic textures, environmental storytelling.',
        styleDirection: 'Nature photography, earth tones, wide shots, environmental context',
        cameraStyle: 'iPhone 15 Pro, landscape mode, HDR',
        gradientColors: ['#11998e', '#38ef7d'],
        icon: '🌿',
    },
    {
        id: 'retro-film',
        title: 'Retro Film Grain',
        mood: 'Nostalgic film aesthetic with modern fashion. Grain, warm color shift, vintage vibes. The past reimagined for today.',
        styleDirection: 'Film grain, vintage color grading, retro poses, analog feel',
        cameraStyle: 'iPhone 15 Pro with VSCO film preset, grain overlay',
        gradientColors: ['#c79081', '#dfa579'],
        icon: '🎞️',
    },
];

export function generateConcepts(brandProfile) {
    // Pick 3 concepts that best match the brand
    const shuffled = [...CONCEPT_TEMPLATES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3).map((concept, i) => ({
        ...concept,
        number: i + 1,
        brandColors: brandProfile.colors,
        adaptedMood: `${concept.mood} Adapted to ${brandProfile.name}'s ${brandProfile.aesthetic} aesthetic.`,
    }));
}

// ── Pinterest Keywords ──
export const KEYWORD_BANKS = {
    'urban-editorial': {
        primary: ['street fashion photography iPhone', 'urban editorial style', 'street style candid shots', 'concrete jungle fashion'],
        mood: ['raw authentic fashion shoot', 'graffiti wall fashion', 'golden hour street portrait', 'city fashion editorial'],
        pose: ['walking pose fashion', 'leaning wall model', 'candid street model', 'urban attitude pose'],
        reference: ['iPhone street photography inspiration', 'urban fashion moodboard', 'raw street fashion aesthetic'],
    },
    'studio-minimal': {
        primary: ['minimal studio fashion photography', 'white background fashion shoot', 'clean fashion editorial', 'high fashion studio portrait'],
        mood: ['minimalist fashion aesthetic', 'stark studio look', 'clean line fashion', 'simple elegant fashion shoot'],
        pose: ['fashion model studio pose', 'editorial stance', 'minimal movement fashion', 'geometric body pose'],
        reference: ['iPhone portrait mode studio', 'minimal fashion moodboard', 'studio lighting fashion reference'],
    },
    'lifestyle-golden': {
        primary: ['golden hour fashion photography', 'lifestyle brand photography', 'warm tone fashion shoot', 'magic hour portrait'],
        mood: ['aspirational lifestyle fashion', 'warm golden light portrait', 'effortless luxury lifestyle', 'sunset fashion editorial'],
        pose: ['natural lifestyle pose', 'candid laughing model', 'walking away shot golden hour', 'windblown hair fashion'],
        reference: ['golden hour photography moodboard', 'warm lifestyle aesthetic', 'iPhone golden hour portrait'],
    },
    'night-luxe': {
        primary: ['night fashion photography', 'neon light fashion shoot', 'after dark fashion editorial', 'city lights portrait'],
        mood: ['neon noir aesthetic', 'night club fashion', 'urban night luxury', 'dark moody fashion'],
        pose: ['dramatic shadow pose', 'neon reflection portrait', 'night street model', 'silhouette fashion'],
        reference: ['night photography moodboard', 'neon fashion aesthetic', 'iPhone night mode fashion'],
    },
    'nature-organic': {
        primary: ['nature fashion photography', 'outdoor fashion editorial', 'earthy tone fashion shoot', 'landscape fashion portrait'],
        mood: ['organic natural fashion', 'forest fashion shoot', 'beach editorial fashion', 'earth tone aesthetic'],
        pose: ['nature backdrop model', 'walking field fashion', 'sitting rock model', 'looking away nature'],
        reference: ['nature fashion moodboard', 'organic aesthetic Pinterest', 'outdoor editorial reference'],
    },
    'retro-film': {
        primary: ['film grain fashion photography', 'vintage fashion aesthetic', 'retro film look editorial', 'analog fashion shoot'],
        mood: ['70s fashion aesthetic', 'nostalgic fashion photography', 'warm vintage portrait', 'retro color grading fashion'],
        pose: ['vintage pose fashion model', 'retro stance editorial', 'classic model pose film', 'old school glamour'],
        reference: ['film photography moodboard', 'vintage fashion inspiration', 'analog aesthetic Pinterest'],
    },
};

export function getKeywordsForConcept(conceptId) {
    return KEYWORD_BANKS[conceptId] || KEYWORD_BANKS['urban-editorial'];
}

// ── Prompt Templates ──
export function buildPrompt(concept, brandProfile) {
    const brandName = brandProfile.name;
    const aesthetic = brandProfile.aesthetic;
    const colors = brandProfile.colors.slice(0, 3).join(', ');

    return {
        mainPrompt: `A hyper-realistic iPhone 15 Pro photograph of a fashion model wearing ${brandName} clothing. ${concept.adaptedMood}

Style: ${concept.styleDirection}
Camera: ${concept.cameraStyle}
Lighting: Natural, realistic, no artificial studio feel
Color palette influenced by: ${colors}
Brand aesthetic: ${aesthetic}

The image should look like it was taken by a professional photographer using only an iPhone — authentic, candid but intentionally composed. High realism, no AI artifacts, natural skin texture, real fabric draping.

Key details:
- Model should embody ${brandName}'s target demographic
- Clothing should be realistic, matching ${brandName}'s current collection style
- Environment should feel lived-in and authentic
- Composition follows rule of thirds
- Natural bokeh and depth of field`,

        negativePrompt: `cartoon, illustration, 3d render, fake looking, overly edited, plastic skin, unrealistic proportions, stock photo feel, watermark, text, logo overlay, oversaturated, HDR artifacts`,

        referenceNote: `Use the Pinterest reference images as style/mood guide in NanoAbanan 2. Upload 1-2 matching references alongside this prompt for best results.`,

        editInstructions: [
            `Swap generic clothing → actual ${brandName} pieces from latest collection`,
            `Match model pose/setting to brand's existing Instagram aesthetic`,
            `Ensure color grading aligns with ${brandName}'s visual identity (${aesthetic})`,
            `Add subtle brand elements if appropriate (accessories, bags, shoes)`,
            `Final edit: maintain iPhone realism — avoid over-processing`,
        ],
    };
}

// ── Agent Messages ──
export const AGENT_MESSAGES = {
    welcome: `Hey! 👋 I'm your AI Creative Director. Let's create some stunning visual concepts for your brand. Drop an Instagram handle below and I'll analyze the brand's aesthetic, then craft 3 unique visual concepts with everything you need to bring them to life.`,
    analyzing: `Analyzing the brand's Instagram presence... Looking at visual style, color palette, content themes, and overall aesthetic direction.`,
    analysisComplete: (brand) => `I've studied **${brand}'s** Instagram presence thoroughly. Here's what I found — their visual identity is ${brand === 'Nike' ? 'bold and athletic, driven by high-contrast imagery and empowerment narratives' : brand === 'Zara' ? 'minimal and editorial, with clean lines and sophisticated neutral tones' : brand === 'Gucci' ? 'maximalist and eclectic, rich with art-inspired visuals and heritage luxury' : 'clean and modern with a focus on authentic lifestyle content'}. Let me generate 3 concept directions based on this analysis.`,
    conceptsReady: `Here are 3 visual concept directions that align with the brand's aesthetic. Each concept is designed to feel authentic — like real iPhone footage shot by a creative team. Select the ones you want to develop further.`,
    referencesIntro: `Great choices! Now let's find the perfect reference images. Below are curated Pinterest search keywords for each concept. Search these on Pinterest, grab 1-2 images that match the vibe, and upload them here. These references will be used alongside the AI prompts.`,
    promptsReady: `Your AI generation prompts are ready! Each prompt is optimized for high-realism iPhone-style photography. Pair these with your Pinterest references in NanoAbanan 2 for the best results. After generation, we'll swap in the brand's actual clothing.`,
    deliveryReady: (brand) => `Here's your complete concept package for **${brand}**! 3 visual concepts, fully briefed with prompts, references, and edit instructions. Once the AI generates the base images, swap the clothing to match ${brand}'s actual pieces for the final deliverables. You're ready to present to the client! 🎯`,
};
