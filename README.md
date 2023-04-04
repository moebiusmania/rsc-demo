# React Server Components Demo

My personal takes on learning how the RSC works in a simple application.

## How to use the repo
Follow this steps on your terminal

```bash
$ git clone https://github.com/moebiusmania/rsc-demo
$ cd rsc-demo
$ npm ci
$ npm run dev
```

then open `http://localhost:3000` in a browser

## Stuff in the project

- [Next.js 13](https://nextjs.org/)
  - experimental `/app` folder "activated"
  - it includes React 18
- [Prisma](https://www.prisma.io/) to setup and use a very small SQLite database embedded in the project
- [PicoCSS](https://picocss.com/) for adding quick and simple styling to the page

## Main takeaways

Some of the things here may be incorrect, I'm still learning about it.

- RSC aren't strictly meant to replace SSR
- You can implements RSC in a "vanilla" environment, but its quite tedious
- Next.js v13 with `/app` folder opt-in offers RSC out of the box
- Components are now server by default
- Server components can
  - be written out of `async` functions
  - directly connect to a DB, being with vanilla Node.js or with clients (_like Prisma_)
  - nest both other Server components or Client components
  - pass data to Client components as props
- Server components can't
  - use state or props
  - use hooks that have client specific capabilities
  - automagically refresh when data change (_so far we have to use `router.refresh()` but [they are working on a better mechanism](https://beta.nextjs.org/docs/data-fetching/mutating) to do it in a next iteration_)
- to "promote" a component to be Client (_and works as they did until yesterday_) just add a `"use client";` directive on top of the file
- Client components _can't_ have a Server component in their JSX markup, thus you can pass it as a child if the Client component itself is wrapped in a Server component
- **there isn't** a particular pattern to update a Server components from a Client one, so in the end you still need some REST/GraphQL APIs.

## License

Released under the [MIT license](LICENSE).
