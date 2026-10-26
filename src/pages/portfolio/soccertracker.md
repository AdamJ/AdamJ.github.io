---
title: 'Soccer Game Tracker'
portfolioOrder: 8
card:
  title: "Soccer Game Tracker"
  summary: "A native iOS app, built by a coach, who needed fast and reliable game tracking without surrendering data to a third-party platform, designed for the sideline, built in Swift."
  badges: ["SwiftUI", "Mobile"]
  group: "Personal"
  featured: false
date: git Last Modified
abbreviation: 'soccertracker'
description: 'Native iOS app for coaches to track game data. Solo project, in active use.'
eleventyNavigation:
  key: CaseStudies
  parent: CaseStudies
  order: 2
layout: case-study.njk
motion: true
eyebrow: 'Case study · Native iOS app'
headline: 'Every sideline app wanted my data and an account, so I built a native one that keeps everything on the phone.'
deck: 'A native iOS app for coaches to track games: fast to set up, minimal during play, and with data the coach controls.'
facts:
  - { label: Role, value: 'Designer and developer' }
  - { label: Stack, value: 'SwiftUI' }
  - { label: Status, value: 'Work in progress, in active use this season' }
results:
  - { value: 'Native', label: 'Swift with local storage and no network dependency' }
  - { value: 'Solo', label: 'Design and implementation by one person' }
  - { value: 'In use', label: 'Tested on a real sideline, in real game conditions' }
camps:
  - { id: top, label: Trailhead }
  - { id: context, label: Context }
  - { id: decisions, label: Key decisions }
  - { id: final, label: Final design }
  - { id: impact, label: Impact }
---
<section id="context" class="cs-step">
<p class="cs-kicker">Step 1 &middot; Context</p>
<h2>Pen and paper is fast but leaves nothing useful, and third-party apps own your data.</h2>
<p>Coaching a youth soccer team generates a surprising amount of data: scores, substitutions, player minutes, goals, assists, saves, and cards. Capturing it is not the hard part. Every existing option forced a tradeoff I was not willing to make. Third-party apps are convenient, but they require accounts and are built for organizations, not individual coaches.</p>
<blockquote class="cs-quote"><span class="cs-label">Opportunity</span><p>How might a coach track a whole game with one thumb, and keep the data?</p></blockquote>
<div class="cs-figures cs-phones">
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-rosters.webp" alt="New game roster screen" loading="lazy" /><figcaption>Set the roster: starters and substitutes</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-newgame.webp" alt="New game setup screen" loading="lazy" /><figcaption>Add game info: team size, location, date, and time</figcaption></figure>
</div>
</section>

<section id="decisions" class="cs-step cs-band">
<p class="cs-kicker">Step 2 &middot; Key decisions</p>
<h2>I chose Swift and local storage because a sideline app has a performance contract: launch instantly, respond without lag, never drop data.</h2>
<p>A PWA or React Native wrapper would have been faster to build, and I have shipped both. Native with local storage satisfies all three requirements, with no sync, no account to authenticate, and no API that might be down at kickoff.</p>
<blockquote class="cs-quote"><p>Every decision went through one person: me.</p></blockquote>
<p>The constraint clarified scope. Without a backend, multi-device sync and shared rosters are off the table, and knowing what the app is not made it easier to build what it is.</p>
<p>The core design problem is attention. During a live game a coach is watching players, calling substitutions, and talking to parents, so the app gets a glance and a thumb tap.</p>
<div class="cs-cards">
<div class="cs-card"><h3>Pregame</h3><p>Setup handles the overhead up front: opposition, date, location, half duration, and roster selection. A Game or Scrimmage toggle keeps the history honest.</p></div>
<div class="cs-card"><h3>Scoreboard and quick actions</h3><p>The two largest tap targets are Team Goal and Opponent Goal. Correction actions are present but smaller and lighter, so they are harder to hit by accident.</p></div>
<div class="cs-card"><h3>Players and activity</h3><p>Tapping a player logs goals, assists, saves, shots, and cards. Each action is timestamped and tied to the half, so the post-game summary reads as a timeline.</p></div>
</div>
</section>

<section id="final" class="cs-step">
<p class="cs-kicker">Step 3 &middot; Final design</p>
<h2>A live game screen built for a glance, and substitutions that match how they really work.</h2>
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-livegame.webp" alt="Live Game screen showing scoreboard, timer, Quick Actions, and player list" loading="lazy" /><figcaption>Live Game screen showing scoreboard, timer, Quick Actions, and player list</figcaption></figure>
<p>Mid-game substitutions have a distinct &ldquo;substituted out&rdquo; state, separate from bench status, because a player who comes off is not the same as a player who never started. That distinction keeps per-player stats accurate.</p>
<div class="cs-figures cs-phones">
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-subs-02.webp" alt="View a player's stats and position before substituting" loading="lazy" /><figcaption>View stats and position before substituting</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-subs-01.webp" alt="Substitutes cannot accidentally have statistics assigned" loading="lazy" /><figcaption>Substitutes cannot accidentally have stats assigned</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-subs-03.webp" alt="Who subbed in and out by half" loading="lazy" /><figcaption>See who subbed in and out by half</figcaption></figure>
</div>
</section>

<section id="impact" class="cs-step cs-band">
<p class="cs-kicker">Step 4 &middot; Impact</p>
<h2>In use this season, with per-player stats informing lineups and substitution planning between games.</h2>
<p>As a coach, historical information shapes how I plan practices, set lineups, and choose strategy.</p>
<div class="cs-figures cs-phones">
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-history.webp" alt="Historical game data" loading="lazy" /><figcaption>History, with key info front and center</figcaption></figure>
<figure class="cs-figure"><img src="/assets/img/soccergametracker-phone-history-details.webp" alt="Player-by-player stats for a game" loading="lazy" /><figcaption>Zoom into any game for player-by-player stats</figcaption></figure>
</div>
<p>Real use has mostly surfaced sequencing. The move from pregame setup into the live view needs less friction, and the post-game summary is still being refined. Those are the next iterations, and an App Store release is planned once the rough edges are resolved.</p>
</section>
