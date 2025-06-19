interface Testimonial {
  quote: string
  authorName: string
  authorTitle?: string
}

interface TestimonialsSectionProps {
  data: {
    sectionTitle?: string
    testimonialsCollection?: {
      items?: Testimonial[]
    }
  }
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const title = data?.sectionTitle ?? 'Testimonials'
  const testimonials = data?.testimonialsCollection?.items ?? []

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

      {testimonials.length > 0 ? (
        <div className="max-w-4xl mx-auto space-y-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="italic text-lg text-gray-800">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-3 font-semibold text-gray-700">
                {testimonial.authorName}
                {testimonial.authorTitle ? `, ${testimonial.authorTitle}` : ''}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No testimonials available.</p>
      )}
    </section>
  )
}
