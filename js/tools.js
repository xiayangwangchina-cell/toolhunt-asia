// ToolHunt Asia v2 – Tools Database (JP / KR / EN)
// Categories: 绘画, 视频剪辑, 办公文案, 翻译配音, 设计建模, 趣味AI
// tags: free-trial=免费试用, paid=付费, hot=热门, high-commission=高佣金

const TOOLS = {
  jp: {
    heroTitle: "最新AIツールをスマートに発見",
    heroDesc: "世界中のAIツールを日本語で厳選紹介。あなたの創作・仕事を加速します。",
    searchPlaceholder: "ツール名やカテゴリで検索…",
    all: "すべて",
    sections: {
      hot: "🔥 急上昇中のAIツール",
      highCommission: "💰 高還元Affiliateツール特集",
      freeTrial: "🎁 無料トライアル実施中",
      all: "📦 すべてのAIツール"
    },
    cats: ["🎨 画像生成","🎬 動画編集","✍️ 文章作成","🎵 翻訳音声","🏗️ デザイン3D","😄 おもしろAI"],
    sidebar: { hotTitle:"今週の注目", newTitle:"新着ツール" },
    cta: "公式サイトへ",
    ctaExclusive: "🎁 特典を見る",
    affiliateNote: "※専用リンクから登録で割引特典あり",
    notifyBar: "🆕 毎週新しいAIツールを追加中！ブックマークしてお見逃しなく →",
    footer: {
      about: "ToolHunt Asiaは、日本と韓国のユーザー向けに最新AIツールを厳選紹介するナビゲーションサイトです。",
      links: { privacy:"プライバシーポリシー", affiliate:"アフィリエイト開示", disclaimer:"免責事項" }
    }
  },
  kr: {
    heroTitle: "최신 AI 도구를 스마트하게 발견",
    heroDesc: "전 세계 AI 도구를 한국어로 엄선 소개합니다. 당신의 창작과 업무를 가속화하세요.",
    searchPlaceholder: "도구 이름이나 카테고리로 검색…",
    all: "전체",
    sections: {
      hot: "🔥 급상승 중인 AI 도구",
      highCommission: "💰 높은 수수료 Affiliate 도구",
      freeTrial: "🎁 무료 체험 진행 중",
      all: "📦 모든 AI 도구"
    },
    cats: ["🎨 이미지 생성","🎬 영상 편집","✍️ 글쓰기","🎵 번역 음성","🏗️ 디자인 3D","😄 재미있는 AI"],
    sidebar: { hotTitle:"이번 주 주목", newTitle:"신규 도구" },
    cta: "공식 사이트로",
    ctaExclusive: "🎁 혜택 보기",
    affiliateNote: "※전용 링크로 가입 시 할인 혜택",
    notifyBar: "🆕 매주 새로운 AI 도구 추가 중! 북마크하고 놓치지 마세요 →",
    footer: {
      about: "ToolHunt Asia는 일본과 한국 사용자를 위해 최신 AI 도구를 엄선 소개하는 내비게이션 사이트입니다.",
      links: { privacy:"개인정보처리방침", affiliate:"제휴사 공개", disclaimer:"면책 조항" }
    }
  },
  en: {
    heroTitle: "Discover AI Tools, Curated for Asia",
    heroDesc: "Handpicked AI tools for Japanese & Korean creators. Find, compare, and get exclusive deals.",
    searchPlaceholder: "Search tools or categories…",
    all: "All",
    sections: {
      hot: "🔥 Trending AI Tools",
      highCommission: "💰 High-Commission Affiliate Picks",
      freeTrial: "🎁 Free Trials Available",
      all: "📦 All AI Tools"
    },
    cats: ["🎨 Image Gen","🎬 Video Edit","✍️ Writing","🎵 Voice/Translation","🏗️ Design/3D","😄 Fun AI"],
    sidebar: { hotTitle:"Hot This Week", newTitle:"New Arrivals" },
    cta: "Visit Site",
    ctaExclusive: "🎁 Get Deal",
    affiliateNote: "※ Exclusive discount via our link",
    notifyBar: "🆕 New AI tools added weekly! Bookmark us →",
    footer: {
      about: "ToolHunt Asia curates the best AI tools for Japanese and Korean creators.",
      links: { privacy:"Privacy Policy", affiliate:"Affiliate Disclosure", disclaimer:"Disclaimer" }
    }
  }
};

// ── Tools Data ──
const TOOLS_DATA = [
  // ========== 🎨 画像生成 / 이미지 생성 ==========
  { id:1, name:"Midjourney", url:"https://www.midjourney.com", cat:"🎨 画像生成", catKR:"🎨 이미지 생성", catEN:"🎨 Image Gen",
    descJP:"テキストから芸術的な画像を生成するAI。写真級のクオリティでデザイナーやクリエイターに圧倒的支持。",
    descKR:"텍스트로 예술적인 이미지를 생성하는 AI. 사진급 품질로 디자이너와 크리에이터에게 압도적 지지.",
    descEN:"AI that generates artistic images from text. Photo-quality output loved by designers worldwide.",
    price:"$10/月〜", isFree:false, hot:true, highCommission:false, freeTrial:false },
  { id:2, name:"DALL·E 3", url:"https://openai.com/dall-e-3", cat:"🎨 画像生成", catKR:"🎨 이미지 생성", catEN:"🎨 Image Gen",
    descJP:"OpenAIの画像生成AI。ChatGPT内で直接利用可能、正確なプロンプト解釈が強み。",
    descKR:"OpenAI의 이미지 생성 AI. ChatGPT 내에서 직접 사용 가능, 정확한 프롬프트 해석이 강점.",
    descEN:"OpenAI's image generator built into ChatGPT. Accurate prompt interpretation.",
    price:"ChatGPT Plusに含む", isFree:false, hot:true, highCommission:false, freeTrial:false },
  { id:3, name:"Leonardo.ai", url:"https://leonardo.ai", cat:"🎨 画像生成", catKR:"🎨 이미지 생성", catEN:"🎨 Image Gen",
    descJP:"ゲーム・映画向け画像生成AI。キャラクターデザインや背景アートに特化。無料枠あり。",
    descKR:"게임·영화용 이미지 생성 AI. 캐릭터 디자인과 배경 아트 제작에 특화. 무료 플랜 있음.",
    descEN:"AI image gen for games & film. Specializes in character design and background art.",
    price:"無料〜", isFree:true, hot:false, highCommission:false, freeTrial:true },
  { id:4, name:"Canva AI", url:"https://www.canva.com", cat:"🎨 画像生成", catKR:"🎨 이미지 생성", catEN:"🎨 Image Gen",
    descJP:"AI搭載デザインツール。Magic Write、Magic Editでデザイン作業が驚くほど簡単に。",
    descKR:"AI 탑재 디자인 도구. Magic Write, Magic Edit으로 디자인 작업이 놀랍도록 간편.",
    descEN:"AI-powered design platform. Magic Write and Magic Edit make design effortless.",
    price:"無料/Pro $13/月", isFree:true, hot:true, highCommission:true, freeTrial:true },

  // ========== 🎬 動画編集 / 영상 편집 ==========
  { id:5, name:"Runway", url:"https://runwayml.com", cat:"🎬 動画編集", catKR:"🎬 영상 편집", catEN:"🎬 Video Edit",
    descJP:"動画生成・編集AIのトップランナー。Gen-3モデルでテキストから高品質な短編動画を作成。",
    descKR:"영상 생성·편집 AI의 선두주자. Gen-3 모델로 텍스트에서 고품질 숏폼 영상 제작.",
    descEN:"Leading AI video generation platform. Gen-3 creates high-quality clips from text.",
    price:"無料〜$15/月", isFree:true, hot:true, highCommission:false, freeTrial:true },
  { id:6, name:"Pika", url:"https://pika.art", cat:"🎬 動画編集", catKR:"🎬 영상 편집", catEN:"🎬 Video Edit",
    descJP:"シンプル操作の動画生成AI。テキストや画像から数秒の動画クリップを簡単生成。",
    descKR:"간단한 조작의 영상 생성 AI. 텍스트나 이미지로 몇 초 길이의 클립을 쉽게 생성.",
    descEN:"Simple AI video generator. Create short clips from text or images in seconds.",
    price:"無料〜", isFree:true, hot:false, highCommission:false, freeTrial:true },
  { id:7, name:"Descript", url:"https://www.descript.com", cat:"🎬 動画編集", catKR:"🎬 영상 편집", catEN:"🎬 Video Edit",
    descJP:"テキスト編集感覚で動画編集ができる画期的ツール。Podcast制作者に大人気。",
    descKR:"텍스트 편집하듯 영상 편집이 가능한 혁신적 도구. 팟캐스트 제작자에게 큰 인기.",
    descEN:"Revolutionary video editor that works like a doc. Huge among podcasters.",
    price:"無料〜$24/月", isFree:true, hot:false, highCommission:false, freeTrial:true },
  { id:8, name:"HeyGen", url:"https://www.heygen.com", cat:"🎬 動画編集", catKR:"🎬 영상 편집", catEN:"🎬 Video Edit",
    descJP:"AIアバターで多言語動画を量産。自分の顔をデジタルクローン化し、世界中に発信。",
    descKR:"AI 아바타로 다국어 영상 대량 제작. 내 얼굴을 디지털 클론으로 만들어 전 세계에 발신.",
    descEN:"Create multilingual videos with AI avatars. Clone yourself digitally and go global.",
    price:"$29/月〜", isFree:false, hot:true, highCommission:true, freeTrial:true },

  // ========== ✍️ 文章作成 / 글쓰기 ==========
  { id:9, name:"ChatGPT", url:"https://chat.openai.com", cat:"✍️ 文章作成", catKR:"✍️ 글쓰기", catEN:"✍️ Writing",
    descJP:"OpenAIの万能対話型AI。文章作成、翻訳、コーディング、アイデア出しまで何でもこなす。",
    descKR:"OpenAI의 만능 대화형 AI. 글쓰기, 번역, 코딩, 아이디어 발상까지 모두 해결.",
    descEN:"OpenAI's all-purpose AI assistant. Writing, coding, brainstorming — it does it all.",
    price:"無料/$20月", isFree:true, hot:true, highCommission:false, freeTrial:true },
  { id:10, name:"Claude", url:"https://claude.ai", cat:"✍️ 文章作成", catKR:"✍️ 글쓰기", catEN:"✍️ Writing",
    descJP:"Anthropicの高性能AI。200Kトークンの超長文処理と正確な分析が強み。",
    descKR:"Anthropic의 고성능 AI. 200K 토큰의 초장문 처리와 정확한 분석이 강점.",
    descEN:"Anthropic's high-perf AI. Handles 200K-token contexts with precise analysis.",
    price:"無料/$20月", isFree:true, hot:true, highCommission:false, freeTrial:true },
  { id:11, name:"Jasper", url:"https://www.jasper.ai", cat:"✍️ 文章作成", catKR:"✍️ 글쓰기", catEN:"✍️ Writing",
    descJP:"マーケター向けAI文章作成ツール。ブランドトーンを保ったブログ・広告コピーを自動生成。",
    descKR:"마케터를 위한 AI 글쓰기 도구. 브랜드 톤을 유지한 블로그·광고 카피 자동 생성.",
    descEN:"AI writing tool for marketers. Auto-generates brand-consistent copy and blog posts.",
    price:"$49/月〜", isFree:false, hot:false, highCommission:true, freeTrial:true },
  { id:12, name:"Notion AI", url:"https://www.notion.so/product/ai", cat:"✍️ 文章作成", catKR:"✍️ 글쓰기", catEN:"✍️ Writing",
    descJP:"Notionに統合されたAI。文書作成・要約・翻訳をアプリ内で完結。チーム利用に最適。",
    descKR:"Notion에 통합된 AI. 문서 작성·요약·번역을 앱 내에서 완결. 팀 사용에 최적.",
    descEN:"AI built into Notion. Writing, summaries, and translations — all in one workspace.",
    price:"$10/月追加", isFree:false, hot:true, highCommission:true, freeTrial:true },

  // ========== 🎵 翻訳音声 / 번역 음성 ==========
  { id:13, name:"DeepL", url:"https://www.deepl.com", cat:"🎵 翻訳音声", catKR:"🎵 번역 음성", catEN:"🎵 Voice/Trans",
    descJP:"業界最高精度の翻訳AI。日本語→英語は他を圧倒。文書ごと翻訳も可能。",
    descKR:"업계 최고 정밀도의 번역 AI. 한국어→영어는 타의 추종을 불허. 문서 전체 번역 가능.",
    descEN:"Industry-leading translation AI. Unmatched JP→EN quality. Full document translation.",
    price:"無料/$10.49月", isFree:true, hot:false, highCommission:false, freeTrial:true },
  { id:14, name:"ElevenLabs", url:"https://elevenlabs.io", cat:"🎵 翻訳音声", catKR:"🎵 번역 음성", catEN:"🎵 Voice/Trans",
    descJP:"超リアルな音声合成AI。日本語・韓国語対応、ナレーションや読み上げに最適。",
    descKR:"초현실적인 음성 합성 AI. 일본어·한국어 지원, 내레이션과 낭독에 최적.",
    descEN:"Ultra-realistic voice synthesis. Supports JP/KR — perfect for narration and TTS.",
    price:"無料〜$5/月", isFree:true, hot:true, highCommission:true, freeTrial:true },
  { id:15, name:"Suno", url:"https://suno.com", cat:"🎵 翻訳音声", catKR:"🎵 번역 음성", catEN:"🎵 Voice/Trans",
    descJP:"歌詞を入力するだけでボーカル付き楽曲が完成する音楽生成AI。J-POPやK-POP風も可能。",
    descKR:"가사만 입력하면 보컬이 포함된 완성곡이 나오는 음악 생성 AI. K-POP 스타일도 가능.",
    descEN:"AI music generator — input lyrics, get a full song with vocals. J-POP & K-POP styles.",
    price:"無料〜$10/月", isFree:true, hot:true, highCommission:false, freeTrial:true },

  // ========== 🏗️ デザイン3D / 디자인 3D ==========
  { id:16, name:"Framer AI", url:"https://www.framer.com/ai", cat:"🏗️ デザイン3D", catKR:"🏗️ 디자인 3D", catEN:"🏗️ Design/3D",
    descJP:"AIでWebサイトを自動生成。プロンプト1つで本格的なLPが数分で完成。",
    descKR:"AI로 웹사이트 자동 생성. 프롬프트 하나로 본격적인 랜딩페이지가 몇 분 만에 완성.",
    descEN:"Generate websites with AI. One prompt → a professional landing page in minutes.",
    price:"無料〜$10/月", isFree:true, hot:true, highCommission:true, freeTrial:true },
  { id:17, name:"Luma AI", url:"https://lumalabs.ai", cat:"🏗️ デザイン3D", catKR:"🏗️ 디자인 3D", catEN:"🏗️ Design/3D",
    descJP:"写真から3Dモデルを生成するAI。商品撮影やVRコンテンツ制作に革新をもたらす。",
    descKR:"사진으로 3D 모델을 생성하는 AI. 상품 촬영과 VR 콘텐츠 제작에 혁신을 가져옴.",
    descEN:"Generate 3D models from photos. Revolutionary for product shots and VR content.",
    price:"無料〜", isFree:true, hot:false, highCommission:false, freeTrial:true },
  { id:18, name:"Beautiful.ai", url:"https://www.beautiful.ai", cat:"🏗️ デザイン3D", catKR:"🏗️ 디자인 3D", catEN:"🏗️ Design/3D",
    descJP:"AIプレゼン作成ツール。デザイン知識不要でプロ級スライドを自動作成。",
    descKR:"AI 프레젠테이션 제작 도구. 디자인 지식 없이도 프로급 슬라이드 자동 생성.",
    descEN:"AI presentation maker. Pro-level slides without design skills — auto-layout magic.",
    price:"$12/月〜", isFree:false, hot:false, highCommission:true, freeTrial:true },

  // ========== 😄 おもしろAI / 재미있는 AI ==========
  { id:19, name:"Character.AI", url:"https://character.ai", cat:"😄 おもしろAI", catKR:"😄 재미있는 AI", catEN:"😄 Fun AI",
    descJP:"好きなキャラクターと会話できるAI。アニメキャラや有名人AIと自由にチャット。",
    descKR:"좋아하는 캐릭터와 대화할 수 있는 AI. 애니 캐릭터나 유명인 AI와 자유롭게 채팅.",
    descEN:"Chat with your favorite characters powered by AI. Anime, celebs — talk to anyone.",
    price:"無料", isFree:true, hot:true, highCommission:false, freeTrial:false },
  { id:20, name:"Remove.bg", url:"https://www.remove.bg", cat:"😄 おもしろAI", catKR:"😄 재미있는 AI", catEN:"😄 Fun AI",
    descJP:"画像の背景をワンクリックで削除。SNS用画像や商品写真の加工に必須ツール。",
    descKR:"이미지 배경을 원클릭으로 제거. SNS용 이미지나 상품 사진 편집에 필수 도구.",
    descEN:"Remove image backgrounds in 1 click. Essential for social media and product photos.",
    price:"無料/従量制", isFree:true, hot:false, highCommission:false, freeTrial:false },
  { id:21, name:"Perplexity", url:"https://www.perplexity.ai", cat:"😄 おもしろAI", catKR:"😄 재미있는 AI", catEN:"😄 Fun AI",
    descJP:"AI検索エンジン。出典付きで回答しリサーチが超効率化。学生・研究者の新定番。",
    descKR:"AI 검색 엔진. 출처와 함께 답변하여 리서치 효율이 획기적. 학생·연구자의 새 필수템.",
    descEN:"AI search engine with cited answers. Supercharges research — new go-to for students.",
    price:"無料/$20月", isFree:true, hot:true, highCommission:false, freeTrial:true },

  // ========== Additional high-value tools ==========
  { id:22, name:"GitHub Copilot", url:"https://github.com/features/copilot", cat:"✍️ 文章作成", catKR:"✍️ 글쓰기", catEN:"✍️ Writing",
    descJP:"コード補完AI。開発者の生産性を劇的向上。VS Codeなど主要エディタ対応。",
    descKR:"코드 자동완성 AI. 개발자 생산성을 획기적 향상. VS Code 등 주요 에디터 지원.",
    descEN:"AI code completion that supercharges developer productivity. Works in all major IDEs.",
    price:"$10/月", isFree:false, hot:true, highCommission:false, freeTrial:true },
  { id:23, name:"Gamma", url:"https://gamma.app", cat:"✍️ 文章作成", catKR:"✍️ 글쓰기", catEN:"✍️ Writing",
    descJP:"AIでプレゼン資料を自動生成。テーマ入力だけで美しいスライドが完成。",
    descKR:"AI로 프레젠테이션 자료 자동 생성. 테마만 입력하면 아름다운 슬라이드 완성.",
    descEN:"AI presentation generator. Input a topic → beautiful slide deck in minutes.",
    price:"無料〜$10/月", isFree:true, hot:false, highCommission:false, freeTrial:true },
  { id:24, name:"Cursor", url:"https://cursor.sh", cat:"✍️ 文章作成", catKR:"✍️ 글쓰기", catEN:"✍️ Writing",
    descJP:"AIファーストのコードエディタ。自然言語でコード編集ができ、開発速度が倍に。",
    descKR:"AI 퍼스트 코드 에디터. 자연어로 코드 편집이 가능하며 개발 속도가 두 배로.",
    descEN:"AI-first code editor. Edit code with natural language — 2x your development speed.",
    price:"無料/$20月", isFree:true, hot:true, highCommission:false, freeTrial:true },
];
