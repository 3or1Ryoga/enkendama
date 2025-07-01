"use client"

import { useEffect, useState } from "react"
import { Instagram, ShoppingCart, Menu, X } from "lucide-react"
import Image from "next/image"

export default function EnKendamaLanding() {
  const [introComplete, setIntroComplete] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("ja")

  // const content = {
  //   ja: {
  //     logoText: "えんけん玉",
  //     heroTitle: "ご縁、繋がる、けん玉、",
  //     heroSubtitle: "KENDAMA",
  //     conceptTitle: 'えんけん玉とは - What is "en-kendama"?',
  //     conceptText1: "えんけん玉は、日本の伝統的な玩具「けん玉」と「書道」を融合させた、新しい文化体験商品です。",
  //     conceptText2: "「縁」をテーマに、人と人、文化と文化を繋ぐ特別な体験を提供します。",
  //     conceptText3:
  //       'En-kendama fuses the traditional Japanese toy "kendama" with "shodo" (calligraphy), creating a unique cultural experience centered around the concept of "en" - the beautiful Japanese idea of fate, connection, and meaningful relationships.',
  //     galleryTitle: "世界と繋がる瞬間 - Moments of Connection",
  //     ctaTitle: 'あなただけの『縁』を手に入れる - Get Your Own "en"',
  //     productName: "えんけん玉 - En-Kendama",
  //     addToCart: "Add to Cart - カートに追加",
  //     copyright: "© 2025 en-kendama. All Rights Reserved.",
  //   },
  //   en: {
  //     logoText: "EN-KENDAMA",
  //     heroTitle: "Connection, Unity, Kendama,",
  //     heroSubtitle: "KENDAMA",
  //     conceptTitle: 'What is "en-kendama"?',
  //     conceptText1:
  //       'En-kendama is a new cultural experience product that fuses the traditional Japanese toy "kendama" with "shodo" (calligraphy).',
  //     conceptText2:
  //       'Themed around "en" (connection), it provides a special experience that connects people to people, and culture to culture.',
  //     conceptText3:
  //       "Experience the beautiful Japanese concept of fate, connection, and meaningful relationships through this unique fusion of traditional arts.",
  //     galleryTitle: "Moments of Connection",
  //     ctaTitle: 'Get Your Own "en"',
  //     productName: "En-Kendama",
  //     addToCart: "Add to Cart",
  //     copyright: "© 2025 en-kendama. All Rights Reserved.",
  //   },
  //   zh: {
  //     logoText: "缘剑玉",
  //     heroTitle: "缘分，连接，剑玉，",
  //     heroSubtitle: "KENDAMA",
  //     conceptTitle: '什么是"缘剑玉"？',
  //     conceptText1: '缘剑玉是融合了日本传统玩具"剑玉"和"书道"的全新文化体验产品。',
  //     conceptText2: '以"缘"为主题，提供连接人与人、文化与文化的特殊体验。',
  //     conceptText3: "通过这种传统艺术的独特融合，体验美丽的日本缘分、连接和有意义关系的概念。",
  //     galleryTitle: "连接世界的瞬间",
  //     ctaTitle: '获得属于您的"缘"',
  //     productName: "缘剑玉",
  //     addToCart: "添加到购物车",
  //     copyright: "© 2025 缘剑玉。保留所有权利。",
  //   },
  //   ko: {
  //     logoText: "엔켄다마",
  //     heroTitle: "인연, 연결, 켄다마,",
  //     heroSubtitle: "KENDAMA",
  //     conceptTitle: '"엔켄다마"란 무엇인가요?',
  //     conceptText1: '엔켄다마는 일본의 전통 장난감 "켄다마"와 "서예"를 융합한 새로운 문화 체험 상품입니다.',
  //     conceptText2: '"인연"을 테마로, 사람과 사람, 문화와 문화를 연결하는 특별한 경험을 제공합니다.',
  //     conceptText3:
  //       "이 독특한 전통 예술의 융합을 통해 아름다운 일본의 운명, 연결, 의미 있는 관계의 개념을 경험해보세요.",
  //     galleryTitle: "세계와 연결되는 순간",
  //     ctaTitle: '당신만의 "인연"을 얻으세요',
  //     productName: "엔켄다마",
  //     addToCart: "장바구니에 추가",
  //     copyright: "© 2025 엔켄다마. 모든 권리 보유.",
  //   },
  // }

  const content = {
    ja: {
      logoText: "えんけん玉",
      heroTitle: "ご縁、繋がる、けん玉",
      heroSubtitle: "KENDAMA",
      conceptTitle: 'えんけん玉とは - What is "en-kendama"?',
      conceptText1: "えんけん玉は、日本の伝統的な玩具「けん玉」と「書道」を融合させた、新しい文化体験商品です。",
      conceptText2: "「縁」をテーマに、人と人、文化と文化を繋ぐ特別な体験を提供します。",
      conceptText3:
        'En-kendama fuses the traditional Japanese toy "kendama" with "shodo" (calligraphy), creating a unique cultural experience centered around the concept of "en" - the beautiful Japanese idea of fate, connection, and meaningful relationships.',
      // === ここから追加 ===
      ninjaTitle: "交えるのは、剣ではなく。",
      ninjaText: "もし、かつて彼らが交えていたものが、剣ではなくけん玉だったら。争いの象徴は、遊びと創造の道具へと姿を変えます。えんけん玉が提案するのは、そんな新しい関係性の形。対立を乗り越え、一本のけん玉で心を通わせる。そこに生まれるのは、勝敗を超えた『縁』なのです。",
      // === ここまで追加 ===
      galleryTitle: "世界と繋がる瞬間 - Moments of Connection",
      ctaTitle: 'あなただけの『縁』を手に入れる - Get Your Own "en"',
      productName: "えんけん玉 - En-Kendama",
      addToCart: "Add to Cart - カートに追加",
      copyright: "© 2025 en-kendama. All Rights Reserved.",
    },
    en: {
      logoText: "EN-KENDAMA",
      heroTitle: "Connection, Unity, Kendama",
      heroSubtitle: "KENDAMA",
      conceptTitle: 'What is "en-kendama"?',
      conceptText1:
        'En-kendama is a new cultural experience product that fuses the traditional Japanese toy "kendama" with "shodo" (calligraphy).',
      conceptText2:
        'Themed around "en" (connection), it provides a special experience that connects people to people, and culture to culture.',
      conceptText3:
        "Experience the beautiful Japanese concept of fate, connection, and meaningful relationships through this unique fusion of traditional arts.",
      // === ここから追加 ===
      ninjaTitle: "Not Swords, But Kendama.",
      ninjaText: "What if they had crossed kendamas instead of swords? The symbol of conflict transforms into a tool for play and creativity. En-kendama proposes this new form of relationship: overcoming confrontation and connecting hearts with a single kendama. What is born from this is an 'en'—a connection that transcends victory or defeat.",
      // === ここまで追加 ===
      galleryTitle: "Moments of Connection",
      ctaTitle: 'Get Your Own "en"',
      productName: "En-Kendama",
      addToCart: "Add to Cart",
      copyright: "© 2025 en-kendama. All Rights Reserved.",
    },
    zh: {
      logoText: "缘剑玉",
      heroTitle: "缘分，连接，剑玉",
      heroSubtitle: "KENDAMA",
      conceptTitle: '什么是"缘剑玉"？',
      conceptText1: '缘剑玉是融合了日本传统玩具"剑玉"和"书道"的全新文化体验产品。',
      conceptText2: '以"缘"为主题，提供连接人与人、文化与文化的特殊体验。',
      conceptText3: "通过这种传统艺术的独特融合，体验美丽的日本缘分、连接和有意义关系的概念。",
      // === ここから追加 ===
      ninjaTitle: "交锋的，不再是刀剑。",
      ninjaText: "倘若，他们过去交锋的不是刀剑，而是剑玉。冲突的象征便化为游戏与创造的工具。缘剑玉所倡导的，正是这样一种崭新的关系形态。超越对立，用一支剑玉心意相通。于此诞生的，是超越胜负的‘缘’。",
      // === ここまで追加 ===
      galleryTitle: "连接世界的瞬间",
      ctaTitle: '获得属于您的"缘"',
      productName: "缘剑玉",
      addToCart: "添加到购物车",
      copyright: "© 2025 缘剑玉。保留所有权利。",
    },
    ko: {
      logoText: "엔켄다마",
      heroTitle: "인연, 연결, 켄다마",
      heroSubtitle: "KENDAMA",
      conceptTitle: '"엔켄다마"란 무엇인가요?',
      conceptText1: '엔켄다마는 일본의 전통 장난감 "켄다마"와 "서예"를 융합한 새로운 문화 체험 상품입니다.',
      conceptText2: '"인연"을 테마로, 사람과 사람, 문화와 문화를 연결하는 특별한 경험을 제공합니다.',
      conceptText3:
        "이 독특한 전통 예술의 융합을 통해 아름다운 일본의 운명, 연결, 의미 있는 관계의 개념을 경험해보세요.",
      // === ここから追加 ===
      ninjaTitle: "검이 아닌, 켄다마를 맞대다.",
      ninjaText: "만약, 과거 그들이 맞대었던 것이 검이 아닌 켄다마였다면 어땠을까요? 다툼의 상징은 놀이와 창조의 도구로 모습을 바꿉니다. 엔켄다마가 제안하는 것은 바로 그런 새로운 관계의 형태입니다. 대립을 넘어, 하나의 켄다마로 마음을 나누는 것. 그곳에서 태어나는 것은 승패를 초월한 '인연'입니다.",
      // === ここまで追加 ===
      galleryTitle: "세계와 연결되는 순간",
      ctaTitle: '당신만의 "인연"을 얻으세요',
      productName: "엔켄다마",
      addToCart: "장바구니에 추가",
      copyright: "© 2025 엔켄다마. 모든 권리 보유.",
    },
  };
  

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    // Intro animation sequence
    const timer1 = setTimeout(() => {
      document.getElementById("intro-overlay")?.classList.add("reveal")
    }, 1000)

    const timer2 = setTimeout(() => {
      document.getElementById("main-content")?.classList.add("fade-in")
      setIntroComplete(true)
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [introComplete])

  const languages = [
    { code: "ja", flag: "🇯🇵", file: "index.html" },
    { code: "en", flag: "🇺🇸", file: "en.html" },
    { code: "zh", flag: "🇨🇳", file: "zh.html" },
    { code: "ko", flag: "🇰🇷", file: "ko.html" },
  ]

  // 日本語
  // English
  // 中文
  // 한국어

  const galleryImages = [
    "/ken_with.jpg?height=300&width=300",
    // "/placeholder.svg?height=300&width=300",
    // "/placeholder.svg?height=300&width=300",
    // "/placeholder.svg?height=300&width=300",
    // "/placeholder.svg?height=300&width=300",
    // "/placeholder.svg?height=300&width=300",
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white relative overflow-x-hidden">
      {/* Washi Paper Background */}
      <div className="fixed inset-0 opacity-10 bg-washi-texture bg-fixed bg-cover bg-center pointer-events-none" />

      {/* Intro Animation Overlay */}
      <div id="intro-overlay" className="fixed inset-0 bg-black z-50 intro-overlay">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="en-character opacity-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="縁 (En) Calligraphy"
              width={400}
              height={400}
              className="filter invert"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="main-content" className="main-content opacity-0">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="logo-text text-2xl font-serif">{content[currentLanguage].logoText}</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`text-2xl hover:scale-110 transition-transform ${
                      currentLanguage === lang.code ? "ring-2 ring-white rounded" : ""
                    }`}
                    title={`Switch to ${lang.code.toUpperCase()}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/enkendama.jp?igsh=MTFpcDBtajhzYmg1Ng%3D%3D&utm_source=qr"
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://enkendama.base.shop/items/111563503"
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart size={24} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-white/10">
              <div className="container mx-auto px-4 py-4 space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`text-2xl hover:scale-110 transition-transform ${
                        currentLanguage === lang.code ? "ring-2 ring-white rounded" : ""
                      }`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} />
                  </a>
                  <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={24} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative pt-20">

          {/* 背景画像とオーバーレイ */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img
              src="/higanbana.jpg" // publicフォルダ内の画像パス
              alt="背景の彼岸花"
              className="object-cover w-full h-full filter brightness-50 saturate-75" // 画像を薄暗く、彩度を少し落とす
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> {/* 黒のオーバーレイでさらに薄暗くする */}
          </div>
          <div className="text-center z-10">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="縁 (En) Calligraphy Artwork"
                width={300}
                height={300}
                className="mx-auto filter invert opacity-80"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
              {content[currentLanguage].heroTitle}
              <br />
              <span className="text-white bg-black px-4 py-2 inline-block mt-2">
                {content[currentLanguage].heroSubtitle}
              </span>
            </h1>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-20 animate-on-scroll">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              {content[currentLanguage].conceptTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">{content[currentLanguage].conceptText1}</p>
                <p className="text-lg leading-relaxed">{content[currentLanguage].conceptText2}</p>
                <p className="text-lg leading-relaxed opacity-80">{content[currentLanguage].conceptText3}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/ken23_3.JPG?height=250&width=250"
                  alt="En-kendama Product"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
                <Image
                  src="/ken27_6.JPG?height=250&width=250"
                  alt="Calligraphy Experience"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Concept Section の閉じタグ </section> の直後に追加 */}

        {/* Ninja Concept Section */}
        <section className="py-20 animate-on-scroll">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* 画像エリア */}
              <div className="text-center">
                <Image
                  src="/ninja.png" // publicフォルダにあるninja.pngを指定
                  alt="剣の代わりにけん玉を構える忍者たち"
                  width={500}
                  height={500}
                  className="mx-auto filter invert opacity-90" // 既存のデザインに合わせて画像を白黒反転
                />
              </div>

              {/* テキストエリア */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-serif">
                  {content[currentLanguage].ninjaTitle}
                </h3>
                <p className="text-lg leading-relaxed japanese-text">
                  {content[currentLanguage].ninjaText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-black/30 animate-on-scroll">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              {content[currentLanguage].galleryTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action / Product Section */}
        <section className="py-20 animate-on-scroll">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-12">{content[currentLanguage].ctaTitle}</h2>
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="mb-6">
                {/* <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="En-kendama Product"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                /> */}
              </div>
              <h3 className="text-xl font-serif mb-4">{content[currentLanguage].productName}</h3>
              {/* <p className="text-2xl font-bold mb-4">Price: TBD</p> */}
              <p className="text-sm opacity-80 mb-6">Size: Standard | Premium Available</p>

              {/* Shopify Buy Button Container 
              <div id="shopify-buy-button" className="mb-4">
                <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {content[currentLanguage].addToCart}
                </button>
              </div>
              */}
              {/* BASE Product Embed Container */}
              <div id="base-embed-container" className="mb-4">
                <iframe
                  frameBorder="0"
                  width="100%"
                  height="420" // 高さはデザインに合わせて調整してください
                  src="https://enkendama.base.shop/items/111563503/widget"
                  style={{ maxWidth: '320px', margin: '0 auto' }} // 中央寄せと最大幅の調整
                ></iframe>
              </div>

              <p className="text-xs opacity-60">* Shopify integration will be added here</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center space-x-6 mb-6">
              <a
                href="https://instagram.com"
                className="hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://enkendama.base.shop/items/111563503"
                className="hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingCart size={24} />
              </a>
            </div>
            <p className="text-sm opacity-60">{content[currentLanguage].copyright}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
