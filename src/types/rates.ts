export interface RateInfo {
  buyRate: number;
  sellRate: number;
  buyChange: number;
  sellChange: number;
}

export interface Platform {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  isPopular?: boolean;
  buyRate: number;
  sellRate: number;
  buyTrend: "up" | "down";
  sellTrend: "up" | "down";
  buyChangePercent: number;
  sellChangePercent: number;
  processingTime: string;
  minMaxLimit: string;
  updatedAt: string;
}

export interface StatItem {
  label: string;
  value: string;
  subValue?: string;
  trend?: "up" | "down";
  trendValue?: string;
  icon: string;
  color: string;
}
