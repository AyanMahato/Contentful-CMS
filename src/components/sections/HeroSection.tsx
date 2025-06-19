interface ImageAsset {
  url: string
  description?: string
}

interface HeroSectionProps {
  data: {
    headline: string
    subHeadline?: string
    backgroundImage: ImageAsset[]
    ctaText: string
    ctaLink: string
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  const bgImage = data.backgroundImage?.[0]?.url || ''

  return (
    <section
      className="text-white py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: '#111',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.headline}</h1>
        {data.subHeadline && (
          <p className="text-lg md:text-xl mb-6">{data.subHeadline}</p>
        )}
        <a
          href={data.ctaLink}
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          {data.ctaText}
        </a>
      </div>
    </section>
  )
}
