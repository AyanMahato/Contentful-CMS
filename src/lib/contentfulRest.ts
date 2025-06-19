// src/lib/contentfulRest.ts
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!

export async function fetchContentfulEntries(contentType: string, locale: string, slug: string) {
  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=${contentType}&fields.slug=${slug}&locale=${locale}&include=10`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`[Contentful REST] Failed to fetch ${contentType}: ${res.statusText}`)
  }

  return res.json()
}
