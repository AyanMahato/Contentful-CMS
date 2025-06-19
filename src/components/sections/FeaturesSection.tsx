// src/components/sections/FeaturesSection.tsx

interface FeatureItem {
  icon?: string
  title?: string
  description?: string
}

interface FeaturesSectionProps {
  data: {
    title?: string
    featureItems?: FeatureItem[]
  }
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
  const title = data?.title ?? 'Our Features'
  const features = data?.featureItems ?? []

  console.log('Feature items:', features)

  return (
    <section className="py-16 px-4 bg-gray-100 text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-10">{title}</h2>

      {features.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{item.icon || '⭐'}</div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title || 'Untitled'}
              </h3>
              <p className="text-gray-600">
                {item.description || 'No description provided.'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No features available.</p>
      )}
    </section>
  )
}
