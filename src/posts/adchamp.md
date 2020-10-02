---
title: 'AdChamp'
date: '2020-10-01'
tags: [ 'AdChamp', 'Twitch', 'Advertising', 'Soundtrack' ]
featuredImage: '../images/adchamp.png'
---

<img src="../images/adchamp.png">

Add a browser source to your streaming software and start making extra money!

That's the idea, at least, behind [AdChamp](https://adchamp.live), the latest project of mine. AdChamp is a new advertising platform built specifically for Twitch live streams. AdChamp lets streamers decide when and where ads appear on their stream, and gives them control over their own ad revenue stream.

## How AdChamp Works

When a streamer signs up and gets approved to AdChamp, they're given a unique URL to add to their streaming software as a browser source. When the streamer goes live on Twitch with that source in their scene, there's a chance an ad will appear, and the streamer will earn some money based on how many viewers are currently watching. This is basically a sponsored ad banner similar to the ones a lot of bigger streamers have, but completed automated and easy to use.

Advertisers have the ability to target specific categories and tags on Twitch and set time and date ranges as well. Advertisers bid for space on streams and pay per hour of ad view time per viewer. Ads right now are banner type ads with dimensions of 728x90 pixels. The best part about AdChamp for advertisers is the fact that ads are embedded directly into streams using the streamer's own software, which means they can't be blocked by viewers in any way. Even though viewers are unable to block these ads, I think these passive, non-intrusive ads are a better alternative to the pre-roll and mid-roll video ads that Twitch continues to use, which still affect the majority of viewers on Twitch and actually interrupt content.

## Why AdChamp Exists (Pre-Roll and Mid-Roll Ads Suck!)

AdChamp was inspired by a [Reddit post](https://www.reddit.com/r/Twitch/comments/hhy485/i_am_in_the_top_02_of_twitch_in_terms_of_average/) I saw in the Twitch subreddit. In that post, a streamer claims they are in the top 0.02% of Twitch in average concurrent viewers, but they're having trouble finding sponsors and monetizing their viewership. It seemed crazy to me that someone in the top 0.02% of average viewers on the largest live streaming platform in the world would have trouble monetizing. To be fair, a lot of comments were saying this might be a problem of the streamer not reaching out or putting themselves out there enough, but it feels like there should be an easier way for streamers to make money using their streams. Monetizing popular websites and mobile apps with advertisements can be as simple as signing up for an account and dropping a few lines of code in, so why can't it be that simple for live streamers to do the same? It is now with AdChamp.

Another big reason for creating AdChamp was the lack of innovation from Twitch when it comes to advertising. Recently, Twitch started [testing pre-roll and mid-roll ads](https://www.theverge.com/2020/9/15/21437787/twitch-midroll-ad-affiliate-partner-cpm) that are not controllable by streamers. Twitch is a live streaming website, and pre-roll and mid-roll ads can and do interrupt live content as it's happening. Pre-recorded videos and music can be paused, interrupted for ads, and resumed with no loss of content, and even live sports events can have designated ad breaks for TV and radio. Twitch continues to drive forward with this mindset of using ads like they're a regular video website like YouTube or Hulu, but live content is a different beast entirely, in my opinion, and I think we should be thinking more about how we approach ads for it.

Ads suck, plain and simple, but they're a necessary evil of the free internet, unfortunately. Not everyone can afford to pay to support a website or streamer and ads are a good way to help offset that. It's my personal opinion that I'd rather see a simple image banner ad appear on someone's stream in an unimportant part of the screen, than have to watch a pre-roll or mid-roll video ad. Many big streamers already have rotating sponsor ad banners embedded into their streams, and I don't mind them at all, but I can tell you several of the brands off the top of my head because I see them all the time. I wish Twitch would try different advertising methods instead of just sticking more video ads down everyone's throats, and that's definitely another incentive for creating AdChamp.

## The Stack

The AdChamp backend takes care of matching streams with ad campaigns, displaying ads, tracking viewer count and online status, and logging it all in the database. AdChamp is using a NextJS front-end hosted on Vercel, talking to a NodeJS backend hosted on Heroku. Sendgrid is used to send transactional emails, Firebase is handling signups and authentication, and websockets are used to serve ads to the private URLs. Stripe handles all the payment processing.

## Soundtrack

Ahhhhh, I love music. Here's some tunes:

- [Logic - Dadbod](https://www.youtube.com/watch?v=9u5w44l16eI)
- [Danny Baranowsky - Crypteque](https://www.youtube.com/watch?v=gIr4C5Ztlcg)
- [Ashes - Stellar](https://www.youtube.com/watch?v=wH3JmLBOnMU)
- [gianni & kyle - 5 shots](https://www.youtube.com/watch?v=yt7PNBND508)
- [Breakbot - Baby I'm Yours feat. Irfane](https://www.youtube.com/watch?v=6okxuiiHx2w)
- [Lil Wayne - Shoes](https://www.youtube.com/watch?v=2JqHU-NXNuY)
- [Day Wave - Starting Again](https://www.youtube.com/watch?v=4nXOSNy6HAI)
- [Yung Gravy - Gravy For Pope](https://www.youtube.com/watch?v=skwfetcwkR8)
- [Kylie Minogue - Can't Get You Out Of My Head](https://www.youtube.com/watch?v=c18441Eh_WE)
