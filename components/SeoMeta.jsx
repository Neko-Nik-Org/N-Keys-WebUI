import { useEffect } from 'react'

function ensureMeta(name, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  return element
}

function SeoMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | N-Keys` : 'N-Keys'
    document.title = fullTitle

    const descriptionTag = ensureMeta('description')
    descriptionTag.setAttribute('content', description)

    const ogTitle = ensureMeta('og:title', 'property')
    ogTitle.setAttribute('content', fullTitle)

    const ogDescription = ensureMeta('og:description', 'property')
    ogDescription.setAttribute('content', description)

    const twitterTitle = ensureMeta('twitter:title')
    twitterTitle.setAttribute('content', fullTitle)

    const twitterDescription = ensureMeta('twitter:description')
    twitterDescription.setAttribute('content', description)
  }, [description, title])

  return null
}

export default SeoMeta