interface SocialLink {
  icon: string
  url: string
}

interface FooterSectionProps {
  data: {
    copyright: string
    socialLinks: SocialLink[]
  }
}

export function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} {data?.copyright}</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {data.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.icon}
            >
              <span className="text-xl">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
