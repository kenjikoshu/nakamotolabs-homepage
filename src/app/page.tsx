import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">

      {/* Hero Section */}
      <section className="hero-section w-full flex flex-col items-center justify-center" id="hero">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/NakamotoLogo.svg"
                alt="中本研究所"
                width={240}
                height={200}
                priority
                className="floaty-shadow"
              />
              <div className="flex flex-col h-12 items-center justify-center">
                <Image 
                    src="/icons/Line.svg" 
                    alt="Line" 
                    width={360} 
                    height={1}
                    priority
                  />
              </div>
              <div className="relative flex flex-col items-center justify-center">
                <div className="mission-bg">
                  <p className="mission-statement text-xl">
                    透過第一性原理分析與逆向思維 <br/> 深入探索比特幣的技術, 經濟原理, <br/>以及它對現實及未來世界的潛在影響
                  </p>
                </div>
              </div>
            </div>
      </section>

      {/* Research Section */}
      <section className="w-full max-w-6xl mx-auto pt-20 pb-16 px-4" id="research">
        <h2 className="section-title text-3xl md:text-4xl mb-10 text-right floaty-shadow">研究</h2>
        
        <div className="space-y-12">
          {/* YouTube Channel */}
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-6 items-center hover:opacity-90 transition-opacity">
              <div className="flex-shrink-0">
                <div className="rounded-full overflow-hidden bg-white p-1 floaty-shadow">
                  <Image 
                    src="/icons/TubeIcon.svg" 
                    alt="YouTube Channel" 
                    width={90} 
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex-grow bg-[#333333] bg-opacity-70 p-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <span className="item-title text-xl">中本研究所</span>
                    <span className="item-subtitle text-xl mx-2 hidden md:inline">|</span>
                    <span className="item-subtitle text-lg">Youtube 頻道</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Analyst Profile */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden bg-white p-1 floaty-shadow">
                <Image 
                  src="/icons/KenjiAvatar.svg" 
                  alt="Kenji" 
                  width={90} 
                  height={90}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex-grow bg-[#333333] bg-opacity-70 p-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <span className="item-title text-xl">謙持小集</span>
                  <span className="item-subtitle text-xl mx-2 hidden md:inline">|</span>
                  <span className="item-subtitle text-lg">資深分析師</span>
                </div>
                <div className="flex space-x-3">
                  <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/icons/xLogo.svg" 
                      alt="X" 
                      width={24} 
                      height={24}
                    />
                  </Link>
                  <Link href="https://threads.net" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/icons/ThreadsLogo.svg" 
                      alt="Threads" 
                      width={24} 
                      height={24}
                    />
                  </Link>
                </div>
              </div>
              <p className="item-description mt-3 text-base">
                曾任職於矽谷與紐約的軟件工程師。20 年獨立投資經驗 - 2011 年重注於 $AAPL、2015 年 $TSLA、2018 年 $BTC、2024 年 $MSTR。現透過中本研究所，專注於向中文圈推廣比特幣與投理念
              </p>
            </div>
          </div>

          {/* Research Journal */}
          <Link href="/journals" className="block">
            <div className="flex gap-6 items-center hover:opacity-90 transition-opacity">
              <div className="flex-shrink-0">
                <div className="rounded-full overflow-hidden bg-white p-1 floaty-shadow">
                  <Image 
                    src="/icons/JournalIcon.svg" 
                    alt="Research Journals" 
                    width={90} 
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex-grow bg-[#333333] bg-opacity-70 p-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <span className="item-title text-xl">研究文章</span>
                    <span className="item-subtitle text-xl mx-2 hidden md:inline">|</span>
                    <span className="item-subtitle text-lg">Research Journals</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Experiment Section */}
      <section className="w-full max-w-6xl mx-auto pt-12 pb-24 px-4" id="experiment">
        <h2 className="section-title text-3xl md:text-4xl mb-10 text-right floaty-shadow">實驗</h2>
        
        <div className="space-y-8">
          {/* Satoshis.forex */}
          <Link href="https://satoshis.forex" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-6 items-start hover:opacity-90 transition-opacity">
              <div className="flex-shrink-0">
                <div className="rounded-full overflow-hidden bg-white p-1 floaty-shadow">
                  <Image 
                    src="/icons/SatoshisForexIcon.svg" 
                    alt="Satoshis.forex" 
                    width={90} 
                    height={90}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex-grow bg-[#333333] bg-opacity-70 p-4">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <span className="satoshis-forex-title text-xl">satoshis.forex</span>
                  <span className="item-subtitle text-xl mx-2 hidden md:inline">|</span>
                  <span className="item-subtitle text-lg">聰本位匯率網站</span>
                </div>
                <p className="satoshis-forex-description mt-3 text-base">
                  Satoshis.forex offers a clean, intuitive dashboard for real-time monitoring and conversion of Bitcoin&apos;s native currency unit - the Satoshi, against major world currencies
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 px-4 bg-black bg-opacity-80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-3 md:mb-0">© 2025 中本研究所 ｜ Nakamoto Labs |</p>
          <div className="flex space-x-4">
            <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/icons/xLogo.svg" 
                alt="X" 
                width={20} 
                height={20}
              />
            </Link>
            <Link href="https://threads.net" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/icons/ThreadsLogo.svg" 
                alt="Threads" 
                width={20} 
                height={20}
              />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
} 