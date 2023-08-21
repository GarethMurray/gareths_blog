module.exports = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-svelte'],
  tailwindConfig: './tailwind.config.cjs',
  semi: false,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' }
    }
  ]
}
