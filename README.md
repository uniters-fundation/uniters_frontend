<a target="_blank" rel="noopener noreferrer" href="https://vercel.com?utm_source=https://github.com/uniters-fundation/uniters_frontend&utm_campaign=help-ukraine">
  <img
    alt="Powered by Vercel"
    style="margin-top: 8px"
    height="32"
    src="https://raw.githubusercontent.com/nextauthjs/next-auth/canary/www/static/img/powered-by-vercel.svg"
  />
</a>

# Project goals

Creating a found raiser portal in order to help Ukraine. Done on request of [Uniters (United Volunteers) ngo](https://spis.ngo.pl/355390-fundacja-uniters-united-volunteers).
Allowing end users to support Ukrainians in domain of their choice (food, medic kits, clothes)

# Technology

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

- node v12.22.12 (tested working version)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Environmental variables

For local development you can create a ".env.local" file in the project root.

!IMPORTANT! Please mind that in order for the variable to work on vercel on client side, it needs to be added in next.config.js as well. Vercel will NOT use variables on public despite them having a NEXT_PUBLIC_SUFIX

example of .env.local file needed for local development

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS= 'T-444444'
NEXT_PUBLIC_PAYPAL_CLIENT_ID= 'ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB'
PAYPAL_CLIENT_ID=  'ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB'
PAYPAL_CLIENT_SECRET=  'ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB-ABBBBBB'
VERCEL_ENV= "production"
```

example of exposing variables added to vercel on client side:
```js
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC,
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  },
```

#### Paypal env variables for local development
You can generate a custome app to test paypal development on this url:
https://developer.paypal.com/developer/accounts/


Guide how to do this
https://www.knowband.com/blog/pl/wskazowki/how-to-get-paypal-client-id-and-secret/

You can also generate a test account for testing payment process that will only work with your secret and client id

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Styling

- First iteration will use [Material UI](https://mui.com/) for rapid development. Explnation of [MUI implementation details](https://dev.to/hajhosein/nextjs-mui-v5-tutorial-2k35)
- Custome components styled with emotion/styled, using theming in case the project recives more UX/rebranding tips. [emotion](https://emotion.sh/docs/styled)

## Analytics

Google Analytics for basic analytics

## Branches

Gitflow as per default best practises:
http://danielkummer.github.io/git-flow-cheatsheet/

# Deployment

## Production
Any changed pushed to "master" branch will be deployed on vercel via pipline to domain:
https://uniters-ukraine-fe.vercel.app/

## Stage
Any change pushed to stage/rc will be deployed to stage enviroment
https://stage-env-uniters-ukraine-fe.vercel.app

# Design

First draft of the site:
https://drive.google.com/drive/folders/1fl7Xitxh3TnSYGLXbP0Vp3UXscwjO4xn?usp=sharing

Concept art/sprintes and other graphic can be found on:
https://drive.google.com/drive/folders/1fl7Xitxh3TnSYGLXbP0Vp3UXscwjO4xn

Design system used for project is Material Design.

In order to quickly wireframe a project in figma a ready library of figma components for MUI can be used:
https://www.figma.com/community/file/912837788133317724

# Backlog & Jira

Tasks are added into backlog at project
https://myrpg.atlassian.net/jira/your-work

# Agenda

## Meeting on 4/9/2022:

### Target iteration needs:

- site should be interactive, split into sections for those who would like to support soldiers and civilians. We would like users to see what their donations will buy i.e cloths, medikits etc.
- first idea is to create characters from sprites. End user would buy clothes for those and kits
- we will like to have mailings to thank our donators
- founds will be transfered by paypal
- we will use next.js for its potential growth potential, beeing a common known solution and also for our SSR needs due to SEO.
- App will be hosted on vercel
- Basket would be nice but is not a must now
- login and something like meta account would be nice but is not a must now
- site needs to be in english first. In future we may add other lang support
- timeline is ASAP
- backend: will be done in ROR providing rest API to frontend

### First iteration

- we want to have a simpler iteration without animations as quickly as possible
- this needs to have basic categories like civilian and soldier, but we can add a simple counter so that user can simply input how much they want

### things to decide/more info needed

- we need to know more about categories from the fundation. Their accounting needs to greenlight how the founds will be send and what info will be added to the payload. This is a need for backend

### concerns

- RODO, keeping our data. Who will be the processor of the data
- hosting and security
- contact with the ngo

# known errors
