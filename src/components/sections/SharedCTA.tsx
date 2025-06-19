interface ReusableCTABlockProps {
  data: {
    title: string
    description: string
    ctaText: string
    ctaLink: string
  }
}

export function SharedCTA({ data }: ReusableCTABlockProps) {
  return (
    <section className="py-12 px-4 bg-blue-700 text-white text-center">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="mt-2 text-lg">{data.description}</p>
      <a href={data.ctaLink}>
        <button className="mt-4 bg-white text-blue-700 px-5 py-2 rounded">
          {data.ctaText}
        </button>
      </a>
    </section>
  )
}
