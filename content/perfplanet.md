# Fast by Default

After 25 years building sites for global brands, I kept seeing the same pattern appear. A team ships new features, users quietly begin to struggle, and only later do the bug reports start trickling in. Someone finally checks the metrics, panic spreads, and feature development is put on hold so the team can patch problems already affecting thousands of people. The fixes help for a while, but a month later another slowdown appears and the cycle begins again. The team spends much of its time firefighting instead of building.

I call this repeating sequence of _ship, complain, panic, patch_ the **Performance Decay Cycle**. Sadly, it’s the default state for many teams and it drains morale fast.

There has to be a better way.

When I stepped into tech-lead roles, I started experimenting. What if performance was something we protected from the start rather than something we cleaned up afterward? What if the entire team shared responsibility instead of relying on a single performance-minded engineer to swoop in and fix things? And what if the system itself made performance visible early, long before issues hit production?

Across several teams and many iterations, a different pattern began to emerge. I now call it **Fast by Default**.

Fast by Default is the practice of embedding performance into every stage of development so speed becomes the natural outcome, not a late rescue mission. It involves everyone in the team, not just engineers.

## Fixing It Later Never Works

Most organizations treat performance as something to address when it hurts, or they schedule a bug-fix sprint every few months. Both approaches are expensive, unreliable, and almost always too late.

By the time a slowdown is noticeable, the causes are already baked into the rendering strategy, the data-fetching sequence, and the component boundaries. These decisions define a ceiling on how fast your system can ever be. You can tune within that ceiling, but without a rebuild, you can’t break through it.

Meanwhile, the baseline slowly drifts. Slow builds and sluggish interactions become expected. What felt unacceptable in week 1 feels normal by month 6.

And once a feature ships, the attention shifts. Performance work competes with new ideas and roadmap pressure. Most teams never return to clean things up.

## How Performance Problems Grow

Performance regressions rarely announce themselves through one dramatic failure. They accumulate quietly, through dozens of reasonable decisions.

A feature adds a little more JavaScript, a new dependency brings a hidden transitive load, and a design tweak introduces layout movement. A single page load still feels fine, but interactions begin to feel heavier. More features are added, more code ships, and slowly the slow path becomes the normal path.

It shows up most clearly at the dependency level:

```javascript
// Looks harmless enough...

import { format } from 'date-fns';  // about 67KB
import { debounce } from 'lodash';  // about 71KB
import { Chart } from 'chart.js';   // about 188KB

// ...but 6 months later the bundle is 2MB and nobody remembers why
```

Each import made sense in isolation and passed through code review. No single decision broke the experience; the combination did.

This is why prevention always beats the cure.

## The Shift In Thinking

If you want to avoid returning to a culture of whack-a-mole fixes, you need to change the incentives so fast outcomes happen naturally.

The core idea is simple: **make the fast path easier than the slow path.**

Once you do that, performance stops depending on vigilance or heroics. You create systems and workflows that quietly pull the team toward fast decisions without friction.

Here’s what this looks like day-to-day:

### Architecture choices should raise the performance ceiling

If your starting point is a client-rendered SPA, you’re already fighting uphill. Server-first rendering with selective hydration (often called the Islands Architecture) gives you a performance margin that doesn’t require constant micro-optimization to maintain. It also helps clarify how much of your SPA truly needs to be a SPA.

### Tooling should make performance visible during development

When dependency size appears directly in your IDE, bundle size and budget checks run automatically in CI, and hydration warnings surface in local development, developers see the cost of their changes immediately and fix issues while the context is still fresh.

### Defaults should favor lightweight choices

Reaching for utility-first libraries, choosing smaller dependencies, and cultivating a culture where the first question is "do we need this?" rather than "why not?" keeps complexity from compounding.

### Code review should act as a guardrail

When reviewers consistently ask how a change affects render time or memory pressure, the entire team levels up. The question becomes part of the craft rather than an afterthought, and eventually it appears in every pull request.

## Shared Responsibility, Not Specialists

Teams that stay fast don’t succeed because they have more performance experts; they succeed because they distribute ownership.

Designers think about layout stability, product managers scope work with speed in mind, and engineers treat performance budgets as part of correctness rather than a separate concern. Everyone understands that shipping fast code is as important as shipping correct code.

For this to work, regressions need to surface early. That requires continuous measurement, clear ownership, and tooling that highlights problems before users do. Once the system pulls in the right direction with minimal resistance, performance becomes self-sustaining.

## The Compounding Effect

A team with fast defaults ships fast software in month 1, and they’re still shipping fast software in month 12 and month 36 because small advantages accumulate in their favor.

A team living in the Performance Decay Cycle may start with acceptable performance, but by month 12 they find themselves planning a dedicated performance sprint, and by month 36 they’re discussing a rewrite.

The difference isn’t expertise or effort; it’s the approach they started from.

Speed is leverage because it builds trust, sharpens design, and accelerates development. Once you lose it, you lose more than seconds: you lose users, revenue, and confidence in your own system.

Fast by Default is how teams break this cycle and build systems that stay fast as they grow.

For more on this model, see https://fastbydefault.com.

---

Den Odell is a Staff Engineer at Canva building data visualizations at scale. He is the author of two books on JavaScript (Apress) and writes at https://denodell.com. Connect with him on [LinkedIn](https://www.linkedin.com/in/denodell).
