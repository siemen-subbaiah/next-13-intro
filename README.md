## Rendering Patterns

### SSG (Build Time)

- By default all pages are statically rendered, even the react server components are statically rendered. Only if certain dynamic functions are being used in the server component, then that particular route will be server side rendered

- Even ISR can be applied to all the `fetch` functions with the revalidate property.

- Using the `generateStaticParams` function in the build time the unique pages can be rendered

### SSR (Request Time)

- This type of rendering will be applied if:

  - The `fetch` function uses any dynamic functions such as `cookies` or `headers`

  - In the unique pages, if the `generateStaticParams` function is not being used.
