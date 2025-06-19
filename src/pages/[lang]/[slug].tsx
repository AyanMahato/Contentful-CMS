import { GetStaticPropsContext } from 'next'
import { fetchContentfulEntries } from '@/lib/contentfulRest'
import { resolveEntryLinks, resolveAssetLinks } from '@/utils/contentfulHelpers'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { SharedCTA } from '@/components/sections/SharedCTA'
import { FooterSection } from '@/components/sections/FooterSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

interface LandingPageProps {
  sections: any[]
}

export default function LandingPage({ sections }: LandingPageProps) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.__typename) {
          case 'heroSection':
            return <HeroSection key={index} data={section} />
          case 'featuresSection':
            return <FeaturesSection key={index} data={section} />
          case 'ctaSection':
            return <SharedCTA key={index} data={section} />
          case 'footerSection':
            return <FooterSection key={index} data={section} />
          case 'testimonialsSection':
            return <TestimonialsSection key={index} data={section} />
          default:
            return null
        }
      })}
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.params?.locale as string
  const slug = context.params?.slug as string

  const json = await fetchContentfulEntries('landingPage', locale, slug)

  if (!json?.items?.length) {
    return { notFound: true }
  }

  const landingPage = json.items[0]
  const allEntries = json.includes?.Entry || []
  const allAssets = json.includes?.Asset || []

  const sections = (landingPage.fields.sections || []).map((link: any) => {
    const section = allEntries.find((e: any) => e.sys.id === link.sys.id)
    if (!section) return null

    const contentType = section.sys.contentType.sys.id
    const fields = section.fields

    switch (contentType) {
      case 'featuresSection':
        return {
          __typename: contentType,
          title: fields.title ?? '',
          featureItems: resolveEntryLinks(fields.featureItems, allEntries),
        }

      case 'heroSection':
        return {
          __typename: contentType,
          headline: fields.headline ?? '',
          subHeadline: fields.subHeadline ?? '',
          backgroundImage: resolveAssetLinks(fields.backgroundImage, allAssets),
          ctaText: fields.ctaText ?? '',
          ctaLink: fields.ctaLink ?? '',
        }

      case 'ctaSection':
      case 'reusableCTABlock':
        return {
          __typename: 'ctaSection',
          title: fields.headline || fields.title || '',
          description: fields.description ?? '',
          ctaText: fields.ctaText ?? '',
          ctaLink: fields.ctaLink ?? '',
        }

      case 'testimonialsSection':
        return {
          __typename: contentType,
          sectionTitle: fields.sectionTitle ?? '',
          testimonials: resolveEntryLinks(fields.testimonials, allEntries),
        }

      case 'footerSection':
        return {
          __typename: contentType,
          copyright: fields.copyright ?? '',
          socialLinks: resolveEntryLinks(fields.socialLinks, allEntries),
        }

      default:
        return null
    }
  }).filter(Boolean)

  return {
    props: {
      sections,
    },
  }
}

export async function getStaticPaths() {
  // Hardcoded slugs & locales — update if needed
  const locales = ['en', 'es']
  const slugs = ['eco-nova'] // Add more slugs if needed

  const paths = locales.flatMap(locale =>
    slugs.map(slug => ({
      params: { locale, slug }
    }))
  )

  return {
    paths,
    fallback: false,
  }
}
