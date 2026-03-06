---
sidebar_position: 1
slug: /
hide_title: true
sidebar_label: What is Tier0?
---

## Concept
Tier0 is an open-source industrial data integration platform built on the Unified Namespace (UNS) methodology, aiming to break data silos and data spaghetti, eventually build a single source of truth.

<img width={550} src="https://tier0saas1.oss-cn-hangzhou.aliyuncs.com/54.png" />


## Architecture

<img width={750} src="https://tier0saas1.oss-cn-hangzhou.aliyuncs.com/55.png" />

#### Source Flow
Node-RED as core, serves as the data collector of Tier0, which is necessary for building a unified namespace.

#### Namespace
The core of Tier0. Models your data into a folder-file structured tree map. With its embedded MQTT broker, your data is easily recognized and accessed through MQTT topics that exactly follow the data hierarchy.
:::info
For example, you have a CNC machine in your factory, workshop A, production line A, and the modeled topic could be `factory/workshopA/productionLineA/CNC`.
:::

#### Sink
The storage layer of Tier0, which enables efficient data querying and compression.
- TSDB is for real-time operational metrics.
- S3 is the system of record for all historical and analytical data.

#### Event Flow
Node-RED as core, completes event-driven data flows.
