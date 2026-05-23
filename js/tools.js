// ToolHunt Asia — Tools Database (JP + KR)
const TOOLS_DATA = {
  jp: [
    {
      id: 1,
      name: "ChatGPT",
      url: "https://chat.openai.com",
      desc: "OpenAIが開発した対話型AI。文章作成、翻訳、コーディング、アイデア出しまで何でもこなす。",
      cat: "文章作成",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 2,
      name: "Claude",
      url: "https://claude.ai",
      desc: "Anthropicの高性能AIアシスタント。長文処理と分析が得意で、200Kトークンのコンテキスト処理が可能。",
      cat: "文章作成",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 3,
      name: "Midjourney",
      url: "https://www.midjourney.com",
      desc: "テキストから高品質な画像を生成するAI。芸術的なビジュアルやデザイン制作に最適。",
      cat: "画像生成",
      price: "有料",
      isFree: false
    },
    {
      id: 4,
      name: "DALL-E 3",
      url: "https://openai.com/dall-e-3",
      desc: "OpenAIの画像生成AI。ChatGPT内で直接使え、正確なプロンプト解釈が強み。",
      cat: "画像生成",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 5,
      name: "Stable Diffusion",
      url: "https://stability.ai",
      desc: "オープンソースの画像生成AI。無料で使え、カスタマイズ自由度が高い。",
      cat: "画像生成",
      price: "無料",
      isFree: true
    },
    {
      id: 6,
      name: "Canva AI",
      url: "https://www.canva.com",
      desc: "AI搭載のデザインツール。Magic Writeで文章作成、Magic Editで画像編集が可能。",
      cat: "デザイン",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 7,
      name: "Runway",
      url: "https://runwayml.com",
      desc: "動画生成・編集AI。テキストから短編動画を作成でき、Gen-3モデルが高評価。",
      cat: "動画制作",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 8,
      name: "Pika",
      url: "https://pika.art",
      desc: "使いやすい動画生成AI。テキストや画像から数秒の動画クリップを生成。",
      cat: "動画制作",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 9,
      name: "Suno",
      url: "https://suno.com",
      desc: "テキストから音楽を生成するAI。歌詞を入力するだけで、ボーカル付きの楽曲が完成。",
      cat: "音声/音楽",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 10,
      name: "ElevenLabs",
      url: "https://elevenlabs.io",
      desc: "超高品質な音声合成AI。日本語を含む多言語対応で、ナレーションや読み上げに最適。",
      cat: "音声/音楽",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 11,
      name: "GitHub Copilot",
      url: "https://github.com/features/copilot",
      desc: "コード補完AI。VS Codeなどでリアルタイムにコード提案。プログラマーの生産性を大幅向上。",
      cat: "コーディング",
      price: "有料",
      isFree: false
    },
    {
      id: 12,
      name: "Cursor",
      url: "https://cursor.sh",
      desc: "AIファーストのコードエディタ。コードベース全体を理解し、自然言語で編集指示が可能。",
      cat: "コーディング",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 13,
      name: "DeepL",
      url: "https://www.deepl.com",
      desc: "高精度の翻訳AI。日本語↔英語の翻訳品質は業界トップクラス。文書ごと翻訳も可能。",
      cat: "翻訳",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 14,
      name: "Notion AI",
      url: "https://www.notion.so/product/ai",
      desc: "Notionに統合されたAI。文書作成、要約、翻訳、アイデア出しをアプリ内で完結。",
      cat: "業務効率化",
      price: "有料",
      isFree: false
    },
    {
      id: 15,
      name: "Gamma",
      url: "https://gamma.app",
      desc: "AIでプレゼン資料を自動生成。テーマを入力するだけで美しいスライドが数分で完成。",
      cat: "業務効率化",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 16,
      name: "Perplexity",
      url: "https://www.perplexity.ai",
      desc: "AI検索エンジン。質問に対して出典付きで回答。リサーチ作業の効率が劇的に向上。",
      cat: "リサーチ",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 17,
      name: "Replit AI",
      url: "https://replit.com",
      desc: "ブラウザで動くAI開発環境。自然言語でアプリを作成でき、初心者でもすぐに公開可能。",
      cat: "コーディング",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 18,
      name: "Framer AI",
      url: "https://www.framer.com/ai",
      desc: "AIでWebサイトを自動生成。プロンプトを入力するだけで、本格的なランディングページが完成。",
      cat: "デザイン",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 19,
      name: "Descript",
      url: "https://www.descript.com",
      desc: "動画・ポッドキャスト編集AI。テキストを編集するように動画を編集できる革新的ツール。",
      cat: "動画制作",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 20,
      name: "Jasper",
      url: "https://www.jasper.ai",
      desc: "マーケティング特化の文章作成AI。ブログ記事、広告コピー、SNS投稿をブランドトーンで生成。",
      cat: "文章作成",
      price: "有料",
      isFree: false
    },
    {
      id: 21,
      name: "Whisper",
      url: "https://openai.com/whisper",
      desc: "OpenAIの音声認識AI。日本語の文字起こし精度が非常に高く、会議録やインタビューに最適。",
      cat: "音声/音楽",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 22,
      name: "Remove.bg",
      url: "https://www.remove.bg",
      desc: "AIで画像の背景を自動削除。1クリックで人物や物の切り抜きが完了。",
      cat: "画像生成",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 23,
      name: "Beautiful.ai",
      url: "https://www.beautiful.ai",
      desc: "AIプレゼン作成ツール。デザインの知識不要で、プロ級のスライドを自動レイアウト。",
      cat: "業務効率化",
      price: "有料",
      isFree: false
    },
    {
      id: 24,
      name: "Otter.ai",
      url: "https://otter.ai",
      desc: "AI会議議事録ツール。Zoom/Google Meetと連携し、リアルタイム文字起こし＋要約。",
      cat: "業務効率化",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 25,
      name: "Leonardo.ai",
      url: "https://leonardo.ai",
      desc: "ゲーム・映画向け画像生成AI。キャラクターデザインや背景アートの制作に特化。",
      cat: "画像生成",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 26,
      name: "Grammarly",
      url: "https://www.grammarly.com",
      desc: "英文校正AI。文法チェックだけでなく、トーンや明確さも改善。ビジネス英語に必須。",
      cat: "文章作成",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 27,
      name: "Luma AI",
      url: "https://lumalabs.ai",
      desc: "3D生成AI。写真から3Dモデルを作成できる。ゲーム開発やVRコンテンツ制作に。",
      cat: "動画制作",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 28,
      name: "Bolt.new",
      url: "https://bolt.new",
      desc: "AIでWebアプリをフルスタック生成。プロンプト1つでバックエンド含む完全なアプリが数分で完成。",
      cat: "コーディング",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 29,
      name: "Vercel v0",
      url: "https://v0.dev",
      desc: "UI生成AI。テキスト説明からReactコンポーネントを生成。Web開発の爆速化に貢献。",
      cat: "コーディング",
      price: "無料/有料",
      isFree: true
    },
    {
      id: 30,
      name: "HeyGen",
      url: "https://www.heygen.com",
      desc: "AIアバター動画生成。自分の顔のデジタルクローンを作り、多言語の動画コンテンツを量産。",
      cat: "動画制作",
      price: "有料",
      isFree: false
    }
  ],
  kr: [
    {
      id: 1,
      name: "ChatGPT",
      url: "https://chat.openai.com",
      desc: "OpenAI의 대화형 AI. 글쓰기, 번역, 코딩, 아이디어 발상까지 모든 것을 처리하는 만능 도우미.",
      cat: "글쓰기",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 2,
      name: "Claude",
      url: "https://claude.ai",
      desc: "Anthropic의 고성능 AI 어시스턴트. 장문 처리와 분석에 강하며 200K 토큰 컨텍스트를 지원.",
      cat: "글쓰기",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 3,
      name: "Midjourney",
      url: "https://www.midjourney.com",
      desc: "텍스트로 고품질 이미지를 생성하는 AI. 예술적인 비주얼과 디자인 제작에 최적.",
      cat: "이미지 생성",
      price: "유료",
      isFree: false
    },
    {
      id: 4,
      name: "DALL-E 3",
      url: "https://openai.com/dall-e-3",
      desc: "OpenAI의 이미지 생성 AI. ChatGPT 내에서 직접 사용 가능하며 정확한 프롬프트 해석이 강점.",
      cat: "이미지 생성",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 5,
      name: "Stable Diffusion",
      url: "https://stability.ai",
      desc: "오픈소스 이미지 생성 AI. 무료로 사용 가능하며 커스터마이징 자유도가 높음.",
      cat: "이미지 생성",
      price: "무료",
      isFree: true
    },
    {
      id: 6,
      name: "Canva AI",
      url: "https://www.canva.com",
      desc: "AI 탑재 디자인 도구. Magic Write로 글쓰기, Magic Edit로 이미지 편집이 가능.",
      cat: "디자인",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 7,
      name: "Runway",
      url: "https://runwayml.com",
      desc: "영상 생성·편집 AI. 텍스트로 짧은 영상을 만들 수 있으며 Gen-3 모델이 높은 평가를 받음.",
      cat: "영상 제작",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 8,
      name: "Pika",
      url: "https://pika.art",
      desc: "사용하기 쉬운 영상 생성 AI. 텍스트나 이미지로 몇 초 길이의 동영상 클립을 생성.",
      cat: "영상 제작",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 9,
      name: "Suno",
      url: "https://suno.com",
      desc: "텍스트로 음악을 생성하는 AI. 가사만 입력하면 보컬이 포함된 완성된 곡을 만들어냄.",
      cat: "음성/음악",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 10,
      name: "ElevenLabs",
      url: "https://elevenlabs.io",
      desc: "초고품질 음성 합성 AI. 한국어를 포함한 다국어 지원으로 내레이션과 낭독에 최적.",
      cat: "음성/음악",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 11,
      name: "GitHub Copilot",
      url: "https://github.com/features/copilot",
      desc: "코드 자동완성 AI. VS Code 등에서 실시간 코드 제안. 프로그래머의 생산성을 대폭 향상.",
      cat: "코딩",
      price: "유료",
      isFree: false
    },
    {
      id: 12,
      name: "Cursor",
      url: "https://cursor.sh",
      desc: "AI 퍼스트 코드 에디터. 코드베이스 전체를 이해하고 자연어로 편집 지시가 가능.",
      cat: "코딩",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 13,
      name: "DeepL",
      url: "https://www.deepl.com",
      desc: "고정밀 번역 AI. 한국어↔영어 번역 품질이 업계 최고 수준. 문서 전체 번역도 가능.",
      cat: "번역",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 14,
      name: "Notion AI",
      url: "https://www.notion.so/product/ai",
      desc: "Notion에 통합된 AI. 문서 작성, 요약, 번역, 아이디어 발상을 앱 내에서 완결.",
      cat: "업무 효율화",
      price: "유료",
      isFree: false
    },
    {
      id: 15,
      name: "Gamma",
      url: "https://gamma.app",
      desc: "AI로 프레젠테이션 자료 자동 생성. 테마만 입력하면 아름다운 슬라이드가 몇 분 만에 완성.",
      cat: "업무 효율화",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 16,
      name: "Perplexity",
      url: "https://www.perplexity.ai",
      desc: "AI 검색 엔진. 질문에 출처와 함께 답변. 리서치 작업 효율이 획기적으로 향상.",
      cat: "리서치",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 17,
      name: "Replit AI",
      url: "https://replit.com",
      desc: "브라우저에서 작동하는 AI 개발 환경. 자연어로 앱을 만들 수 있으며 초보자도 바로 공개 가능.",
      cat: "코딩",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 18,
      name: "Framer AI",
      url: "https://www.framer.com/ai",
      desc: "AI로 웹사이트 자동 생성. 프롬프트만 입력하면 본격적인 랜딩페이지가 완성.",
      cat: "디자인",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 19,
      name: "Descript",
      url: "https://www.descript.com",
      desc: "영상·팟캐스트 편집 AI. 텍스트를 편집하듯 영상을 편집할 수 있는 혁신적인 도구.",
      cat: "영상 제작",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 20,
      name: "Jasper",
      url: "https://www.jasper.ai",
      desc: "마케팅 특화 글쓰기 AI. 블로그 글, 광고 카피, SNS 게시물을 브랜드 톤으로 생성.",
      cat: "글쓰기",
      price: "유료",
      isFree: false
    },
    {
      id: 21,
      name: "Whisper",
      url: "https://openai.com/whisper",
      desc: "OpenAI의 음성 인식 AI. 한국어 받아쓰기 정확도가 매우 높아 회의록이나 인터뷰에 최적.",
      cat: "음성/음악",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 22,
      name: "Remove.bg",
      url: "https://www.remove.bg",
      desc: "AI로 이미지 배경 자동 제거. 원클릭으로 인물이나 사물 누끼 작업 완료.",
      cat: "이미지 생성",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 23,
      name: "Beautiful.ai",
      url: "https://www.beautiful.ai",
      desc: "AI 프레젠테이션 제작 도구. 디자인 지식 없이도 프로급 슬라이드를 자동 레이아웃.",
      cat: "업무 효율화",
      price: "유료",
      isFree: false
    },
    {
      id: 24,
      name: "Otter.ai",
      url: "https://otter.ai",
      desc: "AI 회의록 도구. Zoom/Google Meet과 연동하여 실시간 받아쓰기 + 요약.",
      cat: "업무 효율화",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 25,
      name: "Leonardo.ai",
      url: "https://leonardo.ai",
      desc: "게임·영화용 이미지 생성 AI. 캐릭터 디자인과 배경 아트 제작에 특화.",
      cat: "이미지 생성",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 26,
      name: "Grammarly",
      url: "https://www.grammarly.com",
      desc: "영문 교정 AI. 문법 체크뿐만 아니라 톤과 명확성도 개선. 비즈니스 영어에 필수.",
      cat: "글쓰기",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 27,
      name: "Luma AI",
      url: "https://lumalabs.ai",
      desc: "3D 생성 AI. 사진으로 3D 모델을 만들 수 있음. 게임 개발이나 VR 콘텐츠 제작에 활용.",
      cat: "영상 제작",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 28,
      name: "Bolt.new",
      url: "https://bolt.new",
      desc: "AI로 웹앱 풀스택 생성. 프롬프트 하나로 백엔드를 포함한 완전한 앱이 몇 분 만에 완성.",
      cat: "코딩",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 29,
      name: "Vercel v0",
      url: "https://v0.dev",
      desc: "UI 생성 AI. 텍스트 설명으로 React 컴포넌트를 생성. 웹 개발 속도를 획기적으로 단축.",
      cat: "코딩",
      price: "무료/유료",
      isFree: true
    },
    {
      id: 30,
      name: "HeyGen",
      url: "https://www.heygen.com",
      desc: "AI 아바타 영상 생성. 자신의 얼굴 디지털 클론을 만들어 다국어 영상 콘텐츠를 대량 생산.",
      cat: "영상 제작",
      price: "유료",
      isFree: false
    }
  ]
};
