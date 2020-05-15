---
title: 'Hello World'
date: '2020-05-15'
tags: [ 'blackhole.dev', 'Gatsby', 'StreamE', 'Twitch', 'Mixer', 'YouTube', 'Airtable', 'TestingJavascript.com', 'NodeCG', 'Soundtrack' ]
featuredImage: '../images/hello-world.gif'
---

<img src="../images/hello-world.gif">

The world never says hello back... but I will. Hi :)

LUL-blog-in-2020-wtf-why? Surprisingly, a blog still seems like a pretty good option for getting news, opinions, bits of trivia, and whatever-else, out into the internet. They can outlast social media and, since I wrote this blog ([details below](#blackholedev)), it's completely customizable. I only follow a handful of blogs specifically, but I can't tell you how many I've stumbled across when searching for things on Google that have saved my sanity for the day. If you're reading this, you're why I made this blog, random Google search user. I hope you find whatever it is you're looking for (and if you're from Bing, please go back to where you came from. haha jk. unless..?).

I'm looking forward to sharing bits of my knowledge and repaying my Internet dues. I tend to keep myself pretty busy with side projects, and that's a lot of what I'll be posting about. This means mostly web sites, but sometimes mobile/desktop apps, code snippets, tools, games, graphics, and whatever else strikes my fancy. My goal is to make roughly one post a month, maybe two. Quality over quantity, and what-not :) The best way to get updates about blog posts for now, would be to follow my Twitter, [@rickjerrity](https://twitter.com/rickjerrity). With all that said, buckle up, strap on, err.. in, and let's get started!

## blackhole.dev

Why blackhole.dev?

Because you suck.

Gotemmm. Seriously though, I just didn't want a generic sounding blog name, and was pretty blown away that this domain was still open.

I wrote this blog using [Gatsby](https://www.gatsbyjs.org/) and it is currently hosted on [Netlify](https://www.netlify.com/). I've been a fan of React for a while now and had messed with Gatsby once before, but this was my first chance to deep-dive into Gatsby, and I've enjoyed it quite a bit. I decided to go with Gatsby over [NextJS](https://nextjs.org/) for a couple reasons, but mostly I wanted an excuse to play with a GraphQL API a little more, and, after glancing through the setup docs for both, it seemed like I would prefer Gatsby's overall configuration and structure a little more.

The documentation on the Gatsby website is fairly good, but there is a _lot_ of content and it can feel a little overwhelming. To hit the ground running quick, I basically just used the [Quick Start](https://www.gatsbyjs.org/docs/quick-start/) and then went to this [Tutorial](https://www.gatsbyjs.org/tutorial/). If you're already familiar with React and have had experience with other frameworks, you can probably skip to part four or five of the tutorial, and get to the guts of Gatsby (the gutsby, if you will). Here's some other tutorials and references I found useful:

- [https://www.gatsbyjs.org/docs/recipes/pages-layouts/](https://www.gatsbyjs.org/docs/recipes/pages-layouts/)
- [https://www.gatsbyjs.org/docs/working-with-images-in-markdown/](https://www.gatsbyjs.org/docs/working-with-images-in-markdown/)
- [https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/)
- [https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/](https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/)

The source for this blog is hosted on [GitHub](https://github.com/rickjerrity/blackholeDev) also, so you can check out all the code there (copy + paste your way to a blog, today!).

## [StreamE.tv](https://streame.tv/)

This is another project I've been working on, a by-product of quarantine lockdown. I've been watching live streamers for entertainment for a few years. There's a nice variety of content and I never feel like I really miss anything if I'm not paying full attention, which makes it great for background noise when working on things or just hanging out.

About a year ago, I was exclusively watching streamers on [Twitch](https://twitch.tv/), but then something happened. Ninja, one of the biggest Twitch streamers at the time, [left Twitch](https://techcrunch.com/2019/08/01/ninja-is-leaving-twitch-for-microsofts-mixer/) for [Mixer](https://mixer.com), a rival streaming platform, August of last year, shortly followed by Shroud, another huge Twitch streamer. Since then, a whole [slew of streamers](https://www.tubefilter.com/2020/01/13/youtube-livestreaming-deal-lazarbeam-muselk-valkyrae/) have been making deals of their own, and shaking up platforms. There's now a decent chance a live streamer you used to watch on the platform of your choice, is now streaming on another platform. That's what happened with me.

I was getting frustrated having to switch between different websites, just to keep up with who I wanted to watch. Switching back and forth between user interfaces is confusing and having to switch tabs or websites is cumbersome and annoying. This also results in completely forgetting to check other platforms, because they are out of sight and out of mind when you're currently viewing someone. I created StreamE to solve this problem.

StreamE lets you find and watch live streamers on Twitch, Mixer, and [YouTube](https://youtube.com/) all in one place, with one user interface. I had found similar products/services when searching, but the ones I found were browser extensions, which I didn't want to mess with, and/or required OAuth logins, which I also did not feel comfortable with for something so trivial.

I had fun working on StreamE, and plan to keep updating it and adding features. I wrote StreamE completely in vanilla Javascript, HTML, and CSS, partially as a little test of my abilities, and partially to keep it fast and compatible with many browsers. This was my first time using heavy amounts of CSS Grid and media-queries, which, combined with flexbox, made for a pretty responsive website with no frameworks required. StreamE is hosted on [Github Pages](https://github.com/rickjerrity/StreamE), so all of the front-end code can be easily viewed. I wrote a couple AWS Lambda endpoints for StreamE to use, which hit the various platform APIs, and those are not publically available at the moment.

## Other cool stuff

Here's some cool stuff I've been using or playing with recently, in no particular order:

[Airtable](https://airtable.com/) - Spreadsheets as databases. If you need a database for a proof of concept, this is a great option. Quickly access and edit data online, and use their API/SDK to pull data into applications. You won't have to mess with database software, migrations, servers, or an API, just store and read data. I've been using this when spinning up projects recently and am a big fan of how quick it lets me get going and figure out what a real database would look like later. Not to mention, their free tier is surprisingly reasonable.

[TestingJavascript.com](https://testingjavascript.com/) - Javascript has always been a pretty big pain in the ass to test or debug. [Kent C. Dodds](https://twitter.com/kentcdodds) has put together this excellent course on testing Javascript, and I'm looking forward to completing it very much. I'm on section four, about half-way done, but the content has been fantastic so far. I'll be posting an update on my experience with this course when I'm done.

[NodeCG](https://nodecg.com/) - Nifty little NodeJS project working to make broadcast graphics (sometimes referred to as "character generation", hence the "CG") easier for everybody. With live streaming becoming more necessary and accessible than ever, tools like this can help take your stream or videos to another level. I actually found out about NodeCG through [Games Done Quick](https://gamesdonequick.com/), which is an amazing charity organization, and they have hosted a few of their NodeCG bundles on their GitHub (2019 AGDQ can be found [here](https://github.com/GamesDoneQuick/agdq19-layouts), for example). I've been dabbling with this on a project which I'll hopefully be discussing on here in the near future.

## Soundtrack

Yes, I'm bringing this back. Some of what I've been jamming during the quarantine and has been getting me through these times.

- [Kid Cudi - Leader of the Delinquents](https://www.youtube.com/watch?v=02PAOONYxpY)
- [Oh Wonder - Dazzle](https://www.youtube.com/watch?v=Wz5R1rmxzIs)
- [SAINt JHN - Roses (Imanbek Remix)](https://www.youtube.com/watch?v=ele2DMU49Jk)
- [Arctic Monkeys - 505](https://www.youtube.com/watch?v=MrmPDUvKyLs)
- [Jinjer - Pisces](https://www.youtube.com/watch?v=SQNtGoM3FVU)
- [Raimu - Ancient Bond](https://www.youtube.com/watch?v=7q-S61--Wqc)
- [Ehrling - Champagne Ocean](https://www.youtube.com/watch?v=do0oIs31Huw)
