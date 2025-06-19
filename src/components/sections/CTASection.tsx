// src/components/sections/CTASection.tsx

interface CTASectionProps {
  data: {
    headline: string
    description?: string // Optional based on Contentful model
    ctaText: string
    ctaLink: string
  }
}

export function CTASection({ data }: CTASectionProps) {
  const { headline, description, ctaText, ctaLink } = data

  return (
    <section className="py-16 px-6 bg-green-700 text-white text-center">
      <h2 className="text-3xl font-bold">{headline}</h2>
      {description && <p className="mt-3 text-lg">{description}</p>}
      {ctaLink && ctaText && (
        <a href={ctaLink}>
          <button className="mt-6 bg-white text-green-700 font-semibold px-6 py-3 rounded hover:bg-gray-100">
            {ctaText}
          </button>
        </a>
      )}
    </section>
  )
}
