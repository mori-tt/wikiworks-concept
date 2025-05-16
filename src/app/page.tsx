import { RocketIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Section } from "@/components/section";
import { FeatureCard } from "@/components/feature-card";
import { YouTubeVideo } from "@/components/youtube-video";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* YouTubeセクション */}
        <Section className="py-10 md:py-16 bg-muted/30 noise-bg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
              Concept of WikiWorks
            </h2>
            <div className="glass-effect rounded-xl overflow-hidden p-1">
              <YouTubeVideo
                videoId="w9bFt013F8Q"
                className="shadow-xl rounded-xl overflow-hidden border border-primary/20"
              />
            </div>
          </div>
        </Section>

        {/* 課題提起セクション */}
        <Section
          id="problem"
          heading="マニュアル作成に、時間とコストを奪われていませんか？"
          className="relative overflow-hidden"
        >
          {/* 装飾要素 */}
          <div className="absolute inset-0 bg-muted/30 opacity-50"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="glass-effect p-8 rounded-xl">
              <p className="text-lg">
                製品開発において、マニュアル作成は避けて通れない重要な工程です。しかし、その作成に
                <span className="font-semibold text-primary">
                  時間とコストがかかりすぎていませんか?
                </span>
                煩雑な作業、終わりの見えない修正、多言語対応の壁...。これらの負担は、本来最も集中すべき
                <span className="font-semibold text-primary">
                  製品のデザイン
                </span>
                や品質向上から、大切な時間を奪っています。
              </p>
            </div>
          </div>
        </Section>

        {/* ソリューション提示セクション */}
        <Section
          id="solution"
          heading="WikiWorksが実現する、マニュアル作成の「時短革命」"
          className="bg-primary/5 image-bg-manual relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-lg">
                その課題、
                <span className="font-semibold text-primary">
                  WikiWorksなら解決可能です
                </span>
                。
                WikiWorksは、AIと先進技術を活用し、マニュアル作成プロセスを根本から変革します。
                時間のかかる手作業を自動化し、
                <span className="font-semibold text-primary">
                  WikiWorksで時短革命
                </span>
                を実現することで、
                あなたのビジネスに新たな可能性をもたらします。
              </p>
            </div>
          </div>
        </Section>

        {/* 機能セクション */}
        <Section
          id="features"
          heading="圧倒的な効率化を可能にするWikiWorksの機能"
          description="WikiWorksは、革新的な機能でマニュアル作成の効率を飛躍的に向上させます。"
          className="bg-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full grid-pattern"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <FeatureCard
              title="AIによる文章作成、構成自動化"
              icon={<RocketIcon className="h-10 w-10" />}
              accentColor="primary"
            >
              <b className="text-primary">AIが文章作成、構成も自動化</b>
              。ゼロから作成する手間を省き、短時間で高品質なドラフトを作成できます。
              構成も自動で最適化されるため、全体の整合性を保ちながら作業を進められます。
            </FeatureCard>

            <FeatureCard
              title="スピーディな多言語翻訳"
              icon={<GlobeIcon className="h-10 w-10" />}
              accentColor="primary"
            >
              <b className="text-primary">多言語翻訳もスピーディに</b>
              行えます。海外展開に不可欠な多言語マニュアルも、
              迅速かつ正確に対応。グローバル市場への展開を強力に後押しします。
            </FeatureCard>
          </div>
        </Section>

        {/* ベネフィットセクション */}
        <Section
          id="benefits"
          heading="WikiWorks導入で得られる未来"
          className="bg-primary/5 image-bg-docs"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              <span className="font-semibold text-primary">
                WikiWorksで時短革命
              </span>
              を実現することで、 あなたは
              <span className="font-semibold text-primary">
                もっと製品を作ろう
              </span>
              という本来の目標に、
              より多くのリソースを注ぐことができるようになります。
              <span className="font-semibold text-primary">
                製品のデザインにもっと時間をかけるべき
              </span>
              という理念を具現化し、
              競争力の高い製品開発に集中できます。マニュアル作成の負担から解放され、
              創造性と生産性を最大限に高めることが可能になります。
            </p>

            <Link
              href="https://wikiworks.kodnet.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white relative overflow-hidden"
              >
                <span className="relative z-10">詳細を見る</span>
                <span className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </Button>
            </Link>
          </div>
        </Section>

        {/* クロージングセクション */}
        <Section
          id="contact"
          heading="「No Manual, More Design」の実現へ"
          className="relative overflow-hidden"
        >
          {/* 装飾要素 */}
          <div className="absolute inset-0 bg-muted/30 opacity-50"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="glass-effect p-8 rounded-xl">
              <p className="text-lg mb-10">
                マニュアル作成の常識を変え、
                <span className="font-semibold text-primary">
                  製品のデザイン
                </span>
                に集中できる環境を創り出す。 それがWikiWorksの使命です。
                <span className="font-bold text-primary">ノーマニュアル</span>
                <span className="font-bold text-primary">モアーデザイン</span>。
                WikiWorksと共に、新たな価値創造の時代へ踏み出しましょう。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wikiworks.kodnet.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white relative overflow-hidden group"
                  >
                    <span className="relative z-10">今すぐ始める</span>
                    <span className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                  </Button>
                </Link>
                <Link
                  href="https://kodnet.co.jp/contact-form/?_gl=1*134pi6h*_ga*Njk5MjI2NzMuMTc0MzUwMDQ2OQ..*_ga_57ZPQGYY2H*czE3NDczODY5NTYkbzEzJGcwJHQxNzQ3Mzg2OTU2JGowJGwwJGgw*_ga_7KLZMWLQ3S*czE3NDczODY5NTYkbzEzJGcwJHQxNzQ3Mzg2OTU2JGo2MCRsMCRoMTE0NjQyMTU5MA.."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    お問い合わせ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
