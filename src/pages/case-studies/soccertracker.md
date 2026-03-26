---
layout: markdown.njk
title: 'Soccer Game Tracker'
date: git Last Modified
abbreviation: 'soccertracker'
description: 'Native iOS app for coaches to track game data. Solo project, in active use.'
eleventyNavigation:
  key: CaseStudies
  parent: CaseStudies
  order: 2
containers: true
---

:::section

  ## Project Overview

  > A native iOS app, built by a coach, who needed fast and reliable game tracking without surrendering data to a third-party platform — designed for the sideline, built in Swift.

  :::card

  **ROLE**: Designer & Developer

  **STACK**: SwiftUI

  **STATUS**: Work in progress

:::

::::section

## Introduction

  Coaching a youth soccer team generates a surprising amount of data. Scores, substitutions, player minutes, goals, assists, saves, cards. The problem isn't that the data is hard to capture — it's that every existing option forces a tradeoff I wasn't willing to make. Pen and paper is fast but produces nothing useful afterward. Third-party apps are convenient but own your data, require accounts, and are built for organizations, not individual coaches. I wanted something purpose-built for how I actually work on a sideline: fast to set up, minimal interaction during play, and with data I control entirely.

  <div class="row justify-content-around no-wrap mt-3 mb-5">
    <div class="card-shadow">
      <div class="card-body">
        <figure>
          <img
            alt="New Game setup screen"
            src="{{ '/assets/img/soccergametracker-phone-rosters.webp' | url }}"
            style="width: 300px; max-width: 300px;"
          />
          <figcaption>set the roster - starters and substitutes</figcaption>
        </figure>
      </div>
    </div>
    <div class="card-shadow">
      <div class="card-body">
        <figure>
          <img
            alt="New Game setup screen"
            src="{{ '/assets/img/soccergametracker-phone-newgame.webp' | url }}"
            style="width: 300px; max-width: 300px;"
          />
          <figcaption>add game info - team size, location, date & time</figcaption>
        </figure>
      </div>
    </div>
  </div>
::::

::::section
## The harder right choice

  I built SoccerGameTracker as a native iOS app in Swift — solo, from scratch. The easier path would have been a PWA or React Native wrapper; I've shipped both, and they're faster to build. I chose Swift because a sideline app has a specific performance contract: launch instantly, respond without lag when a goal gets scored, never drop data if the phone gets pocketed. Native with local storage and no network dependency satisfies all three. No sync to worry about, no account to authenticate, no API that might be down at kickoff.

  > every decision went through one person - me

  **Constraint clarified scope**. Without a backend, multi-device sync and shared rosters aren't on the table — and that's fine. Knowing what the app isn't made it easier to build what it is. I handled both the design and implementation entirely, which meant every decision — from interaction model to data structure — went through one person. That's mostly an advantage when you need to move fast and stay opinionated.
::::

::::section

  ## Designing for the sideline

  > The core design problem is attention.

  During a live game, a coach is watching players, calling substitutions, talking to parents. The app gets a glance and a thumb tap, not focused interaction. Every decision on the Live Game screen follows from that.

  <div class="card">
    <div class="card-header text-h5">Pregame</div>
    <div class="card-body">
      The pre-game setup flow handles the overhead up front.
      <br/>New Game collects opposition, date, location, and half duration — everything you'd put on a physical scoresheet — plus roster selection from a pre-built player list with jersey number and position.
      <br/>The Game vs. Scrimmage toggle is a small but deliberate decision: scrimmages have different stakes and different lineup dynamics, and I wanted the history to reflect that distinction clearly.
    </div>
  </div>

  <div class="card">
    <div class="card-header text-h5">Scoreboard & Quick Actions</div>
    <div class="card-body">
      The scoreboard and half timer sit at the top, readable in a second. The Quick Actions section — Team Goal and Opponent Goal — are the two largest tap targets in the app, sized and colored for immediate recognition in any lighting. Correction actions (Remove Team Goal, Subtract Goal) are present but visually subordinate: same area, smaller, lighter. Reachable when you need them, harder to hit by accident.
    </div>
  </div>

  <div class="card">
    <div class="card-header text-h5">Players & Activity</div>
    <div class="card-body">
      Below the quick actions is where the app earns its depth. Each player in the active roster is tappable, opening a detail view where you can log individual stats in real time: goals, assists, saves, shots, yellow cards, red cards. Every action is timestamped and tied to the game half — building a full action log that the post-game summary renders as a timeline. That's the data that makes post-game review actually useful: not just who won, but who contributed, when, and how often.
    </div>
  </div>

  <div class="card-shadow">
    <div class="card-body">
      <figure style="text-align: center;">
        <img
          alt="Live Game screen showing scoreboard, timer, Quick Actions, and player list"
          src="{{ '/assets/img/soccergametracker-phone-livegame.webp' | url }}"
          class="figure-img img-fluid rounded"
          style="width: 300px; max-width: 300px;"
        />
        <figcaption>Live Game screen showing scoreboard, timer, Quick Actions, and player list</figcaption>
      </figure>
    </div>
  </div>
  <br/>

  ### Substitutions

  :::card
  Substitutions were a meaningful product decision. Mid-game sub support — with a distinct "substituted out" state separate from bench status — reflects how substitutions actually work: a player who comes off isn't the same as a player who never started. Getting that distinction right matters for per-player stats to be accurate.
  :::

  <div class="row justify-content-around no-wrap mt-3 mb-5">
    <div class="card-shadow">
      <div class="card-body">
        <figure style="text-align: center;">
          <img
            alt="View a player's stats and position before substituting them on or off"
            src="{{ '/assets/img/soccergametracker-phone-subs-02.webp' | url }}"
            style="width: 300px; max-width: 300px;"
          />
          <figcaption>View a player's stats and position before substituting them on or off</figcaption>
        </figure>
      </div>
    </div>
    <div class="card-shadow">
      <div class="card-body">
        <figure style="text-align: center;">
          <img
            alt="Substitutes cannot accidentally have statistics assigned"
            src="{{ '/assets/img/soccergametracker-phone-subs-01.webp' | url }}"
            style="width: 300px; max-width: 300px;"
          />
          <figcaption>Substitutes cannot accidentally have statistics assigned</figcaption>
        </figure>
      </div>
    </div>
    <div class="card-shadow">
      <div class="card-body">
        <figure style="text-align: center;">
          <img
            alt="View who subbed in and out of the game by half"
            src="{{ '/assets/img/soccergametracker-phone-subs-03.webp' | url }}"
            style="width: 300px; max-width: 300px;"
          />
          <figcaption>View who subbed in and out of the game by half</figcaption>
        </figure>
      </div>
    </div>
  </div>
::::

::::section

  ## After the game

  > As a coach, being able to view historical information is a key part in planning practices, setting lineups, and determining strategy.

  ### History

  <div class="row justify-content-around no-wrap mt-3 mb-5">
    <div class="card-shadow">
      <div class="card-body">
        <figure style="text-align: center;">
          <img
            alt="View historical game data, zooming in to see each game's details"
            src="{{ '/assets/img/soccergametracker-phone-history.webp' | url }}"
            style="width: 300px; max-width: 300px;"
          />
          <figcaption>View historical game data, with key info front and center</figcaption>
        </figure>
      </div>
    </div>
    <div class="card-shadow">
      <div class="card-body">
        <figure style="text-align: center;">
          <img
            alt="View historical game data, zooming in to see each game's details"
            src="{{ '/assets/img/soccergametracker-phone-history-details.webp' | url }}"
            style="width: 300px; max-width: 300px;"
          />
          <figcaption>Zooming into any game shows player-by-player stats</figcaption>
        </figure>
      </div>
    </div>
  </div>
::::

::::section
  ## Where it stands

  :::card
  The app is in active use this season, tested against the real constraint it was built for: a sideline, in real game conditions. Feedback from that use has been indispensable, with the per-player stats used between games to inform lineup and substitution planning. That's the outcome I was building toward.

  What real use has surfaced is mostly sequencing: the transition from pre-game setup into the live view needs less friction, and the post-game summary screen is still being refined. **Those are the next iterations.**
  :::

  > An App Store release is planned once the final rough edges are resolved. The app does one thing, does it reliably, and doesn't ask for anything it doesn't need.
::::
