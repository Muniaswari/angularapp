export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
}

export interface PricingCardProps {
  plan: PricingPlan
  onSelect?: (planId: string) => void
}