---
title: 'Giddy Up, Horse'
date: '2020-06-11'
tags: [ 'giddyup.horse', 'GitHub', 'Soundtrack' ]
featuredImage: '../images/giddyup-horse.png'
---

<img src="../images/giddyup-horse.png">

What the hell am I talking about?

This is a weird website idea I came up with recently, and it was relatively easy to code and implement, so, here we are. I'll keep this blog post brief, because there's not much to it, and I have some other cool (imo) projects I'll be posting about soon, hopefully.

# [giddyup.horse](https://giddyup.horse)

[giddyup.horse](https://giddyup.horse) is an open source website that is editable by anyone. The website is hosted using [GitHub Pages](https://pages.github.com/), so all the source code is available to look at and modify, but the key difference is that anyone on GitHub can become a contributor to this repo, in seconds, automatically. This means anybody can create branches and create or manage pull requests directly on this repo, which can make changes to the website live. You can even commit directly to the `master` branch, like a true psychopath. If you have time for a commit, you have time to deploy changes to giddyup.horse. More information can be found in the [GitHub repo](https://github.com/git-tee-up/horse) README.

I came up with this idea when I started thinking about creating an open source website, that was created and edited by anyone interested. This sort of thing already exists as open source code, but, as far as I know, only where the availability of the code is there, managed by a group or person, and you can fork off if you don't like it. The idea of literally *anyone* being able to completely modify a repo/website, *live*, is not something I think I've seen before (I'm probably wrong, would love to know some examples, though).

The actual functionality is pretty simple. GitHub has an [API](https://developer.github.com/v3/), which lets you manage repos and do a lot of cool stuff. One of the endpoints, documented [here](https://developer.github.com/v3/repos/collaborators/#add-a-repository-collaborator), allows for sending invites to add collaborators to a repository you have the proper permissions in. I created an AWS Lambda which uses [axios](https://www.npmjs.com/package/axios) to call out to that GitHub API endpoint using the username supplied in the body of the Lambda request. The only thing left to do was create another simple GitHub Pages site to allow users to invite themselves as contributors using the Lambda endpoint, so I created [Saddle](https://git-tee-up.github.io/saddle/).

The websites/repos are on a secondary GitHub account, for obvious reasons. There's a good chance the internet could completely destroy giddyup.horse in a manner not compliant with ToS, and I'd prefer to not have my personal account go down in flames. I would like to point out, that after I came up with this whackjob idea, I checked the [GitHub Pricing](https://github.com/pricing) page to see the limits on free tier accounts, and other details, and I saw this:

<img src="../images/github-collab.png">

It does say literally ***all GitHub members***, so hey, let's see if they honor that statement.

The name of the site was inspired by me trying to come up with some clever play on words using `git`, then remembering there was a `.horse` TLD, doing a search for `giddyup.horse`, and seeing it wasn't taken yet, which made me inexplicably happy.

## That's It

Not much else to say, I said I was keeping this post short. If you ever wanted to play with a GitHub Pages site, now's your chance.

## Soundtrack

Here's some tracks I've been listening to.

- [X Ambassadors - Boom](https://www.youtube.com/watch?v=mXLRy1cNMWs)
- [The Toxic Avenger - Make This Right](https://www.youtube.com/watch?v=1CGMk_roNaE)
- [Harry Nilsson - Spaceman](https://www.youtube.com/watch?v=fND5WUxwi_Y) (yeah, Space Force...)
- [The Drums - Heart Basel](https://www.youtube.com/watch?v=BUEn0QKJS20)
- [Peggy Lee - Why Don't You Do Right](https://www.youtube.com/watch?v=4uTcw_A80Bo) (bonus: [Gramophonedzie - Why Don't You](https://www.youtube.com/watch?v=uT8OEtf5r1U))
