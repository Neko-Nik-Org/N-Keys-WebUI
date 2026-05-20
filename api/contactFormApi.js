export const contactFormApiUrl = 'https://api2.nekonik.com/forms/submit/contact-me'
export const contactFormSendTo = 'nyan@nekonik.com'

export async function submitContactForm(contactForm, cfToken) {
  const response = await fetch(contactFormApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CF-Token': cfToken,
    },
    body: JSON.stringify(contactForm),
  })

  const responseText = await response.text()

  if (!response.ok) {
    throw new Error(`Contact form submit failed (${response.status}): ${responseText || 'No response body'}`)
  }
  
  return { ok: true, raw: responseText }
}