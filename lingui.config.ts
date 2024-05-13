import type { LinguiConfig } from '@lingui/conf'

const config: LinguiConfig = {
  locales: ['en', 'zh-CN', 'ja-JP'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src'],
    },
  ],
}

export default config
