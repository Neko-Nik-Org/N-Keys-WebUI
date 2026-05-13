import { useMemo } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

const CF_TURNSTILE_SITE_KEY = '0x4AAAAAAC8XWNeUpN0H3YZP'

function CfTurnstileWidget({
  token,
  onTokenChange,
  hiddenInputName = 'cfTurnstileToken',
  theme = 'light',
}) {
  return (
    <>
      <Turnstile
        siteKey={CF_TURNSTILE_SITE_KEY}
        options={{ theme }}
        onSuccess={(nextToken) => onTokenChange(nextToken)}
        onExpire={() => onTokenChange('')}
        onError={() => onTokenChange('')}
      />

      <input type="hidden" name={hiddenInputName} value={token} readOnly />
    </>
  )
}

export default CfTurnstileWidget