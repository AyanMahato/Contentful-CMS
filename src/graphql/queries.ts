export const GET_LANDING_PAGE = `
query GetLandingPage($slug: String!, $locale: String!) {
  landingPageCollection(where: { slug: $slug }, limit: 1, locale: $locale) {
    items {
      title
      slug
      sectionsCollection {
        items {
          __typename

          ... on HeroSection {
            sys { id }
            headline
            subHeadline
            backgroundImageCollection {
              items {
                url
                description
              }
            }
            ctaText
            ctaLink
          }

          ... on FeaturesSection {
            sys { id }
            title
            featureItemsCollection {
              items {
                icon
                title
                description
              }
            }
          }

          ... on TestimonialsSection {
            sys { id }
            sectionTitle
            testimonials {
              ... on TestimonialItem {
                quote
                authorName
                authorTitle
              }
            }
          }

          ... on CTASection {
            sys { id }
            headline
            description
            ctaText
            ctaLink
          }

          ... on FooterSection {
            sys { id }
            copyright
            socialLinks {
              icon
              url
            }
          }

          ... on ReusableCTABlock {
            sys { id }
            title
            description
            ctaText
            ctaLink
          }
        }
      }
    }
  }
}
`
