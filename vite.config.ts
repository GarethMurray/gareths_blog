import { sveltekit } from '@sveltejs/kit/vite'
import dynamicImport from 'vite-plugin-dynamic-import'

const config = {
  plugins: [sveltekit(), dynamicImport()],
  server: {
    fs: {
      allow: ['..']
    }
  }
}

export default config
