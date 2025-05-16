"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 wave-pattern">
      {/* 背景装飾 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[5%] h-[30%] w-[30%] rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="circle-decoration circle-decoration-1"></div>
      <div className="circle-decoration circle-decoration-2"></div>

      {/* 装飾パターン */}
      <div className="absolute top-0 right-0 h-60 w-60 opacity-10">
        <div className="relative h-full w-full image-bg-circuit"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <span className="block mb-2">
              <span className="text-primary">マニュアル</span>作成の時間を、
            </span>
            <span className="block text-primary">製品デザインへ。</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl ${
              isVisible ? "animate-fadeIn animate-delay-100" : "opacity-0"
            }`}
          >
            WikiWorksが、あなたのビジネスに
            <span className="text-primary font-medium">「時短革命」</span>
            をもたらし、 本来注力すべき
            <span className="text-primary font-medium">「製品のデザイン」</span>
            により多くの時間を費やすことを可能にします。
          </p>

          <h2
            className={`text-2xl md:text-3xl font-bold mb-10 ${
              isVisible ? "animate-fadeIn animate-delay-200" : "opacity-0"
            }`}
          >
            <span className="text-primary">No Manual</span>,{" "}
            <span className="text-primary">More Design</span>
          </h2>

          <div
            className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto ${
              isVisible ? "animate-fadeIn animate-delay-300" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-base relative overflow-hidden group"
            >
              <span className="relative z-10">詳細を見る</span>
              <span className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-base"
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>

      {/* 装飾セパレーター */}
      <div className="absolute left-0 right-0 bottom-0 h-12 bg-white"></div>
    </section>
  );
}
