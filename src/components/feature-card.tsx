import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  accentColor?: "primary" | "accent";
}

export function FeatureCard({
  title,
  children,
  icon,
  accentColor = "primary",
}: FeatureCardProps) {
  const accentClass =
    accentColor === "accent" ? "border-t-accent" : "border-t-primary";

  return (
    <Card
      className={`h-full card-hover border-t-4 ${accentClass} transition-all`}
    >
      <CardHeader className="pb-2">
        {icon && (
          <div className={`mb-4 text-${accentColor} text-3xl`}>{icon}</div>
        )}
        <CardTitle className="text-xl">
          <span className={`text-${accentColor}`}>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{children}</p>
      </CardContent>
    </Card>
  );
}
