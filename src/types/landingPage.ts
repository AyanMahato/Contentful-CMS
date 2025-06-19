export interface LandingPage {
  title: string
  slug: string
  sectionsCollection: {
    items: Section[]
  }
}

export type Section =
  | HeroSection
  | FeaturesSection
  | TestimonialsSection
  | CTASection
  | FooterSection
  | SharedCTA

interface Sys {
  id: string
}

interface ImageAsset {
  url: string
  description?: string
}

export interface HeroSection {
  __typename: 'HeroSection'
  sys: Sys
  headline: string
  subHeadline?: string
  backgroundImage: ImageAsset[]
  ctaText: string
  ctaLink: string
}

export interface FeaturesSection {
  __typename: 'FeaturesSection'
  sys: Sys
  title: string
  featureItemsCollection: {
    items: {
      icon: string
      title: string
      description: string
    }[]
  }
}

export interface TestimonialsSection {
  __typename: 'TestimonialsSection'
  sys: Sys
  sectionTitle: string
  testimonials: {
    quote: string
    authorName: string
    authorTitle: string
  }[]
}


export interface CTASection {
  __typename: 'CTASection'
  sys: Sys
  headline: string
  description: string
  ctaText: string
  ctaLink: string
}

export interface FooterSection {
  __typename: 'FooterSection'
  sys: Sys
  copyright: string
  socialLinksCollection: {
    items: {
      icon: string
      url: string
    }[]
  }
}

export interface SharedCTA {
  __typename: 'ReusableCTABlock'
  sys: Sys
  title: string
  description: string
  ctaText: string
  ctaLink: string
}
