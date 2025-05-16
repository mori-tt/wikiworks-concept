import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/40 py-12 border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/logo.png"
              alt="WikiWorks Logo"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground">
              マニュアル作成の常識を変え、製品のデザインに集中できる環境を創り出します。
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  機能
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  メリット
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">お問い合わせ</h3>
            <address className="text-muted-foreground not-italic">
              <p>お気軽にお問い合わせください</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:info@wikiworks.example.com"
                  className="text-primary hover:underline"
                >
                  info@wikiworks.example.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <Separator className="bg-primary/20" />
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WikiWorks. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
