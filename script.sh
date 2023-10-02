#!/bin/bash

# Check if /docs directory exists. If not, create it.
if [ ! -d "docs" ]; then
  mkdir docs
fi

# Navigate to /docs directory
cd docs

# Protocol Overview
echo '---
id: protocol-overview
title: Protocol Overview
sidebar_position: 1
---

This page provides a comprehensive overview of Bryan Johnson's Blueprint protocol. More detailed breakdowns for each category can be found in the respective sections.

Coming soon...
' > protocol-overview.md

# Diet
echo '---
id: diet
title: Diet
sidebar_position: 2
---

Explore the intricacies of Bryan Johnson's dietary choices and the rationale behind them.

- List of Foods
- Supplements and their intended benefits
- Beverage choices and their timings

Detailed content coming soon...
' > diet.md

# Measurements
echo '---
id: measurements
title: Measurements
sidebar_position: 3
---

A deep dive into the various metrics and measurements that Bryan Johnson tracks.

- Biomarkers
- Body Composition 
- Other important metrics

Full breakdown coming soon...
' > measurements.md

# Fitness
echo '---
id: fitness
title: Fitness
sidebar_position: 4
---

Discover the exercises, routines, and regimens that form an essential part of Bryan Johnson's Blueprint.

- Exercise routines
- Cardio vs. Strength training details
- Recovery processes

Detailed workout plans coming soon...
' > fitness.md

# Sleep
echo '---
id: sleep
title: Sleep
sidebar_position: 5
---

Understanding the importance of sleep in Bryan Johnson's Blueprint.

- Sleep hygiene practices
- Tracking and optimization tools 
- Sleep duration and quality 

More on sleep strategies coming soon...
' > sleep.md

echo "Markdown files created successfully!"

