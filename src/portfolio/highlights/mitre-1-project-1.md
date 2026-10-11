---
associatedEntry: "mitre-1"
name: "PNT Defense & Threat Library"
displayOrder: 1
---

**Problem**

The <abbr title="Positioning, Navigation, and Timing">PNT</abbr> Defense & Threat Library is a framework implemented in [Python](https://www.python.org) for mapping out and visualizing the space of <abbr title="Positioning, Navigation, and Timing">PNT</abbr> threats & defenses. The user specifies defenses (and which threats they mitigate) and threats as well as the relationships between entries.

**Task**

We wanted a way to identify implicit mitigation links without the user having to specify every single relationship.

**Result**

Implemented a function to parse the library, look through the directed acyclic graph structure, and identify which threats are mitigated by a subset of selected threats.