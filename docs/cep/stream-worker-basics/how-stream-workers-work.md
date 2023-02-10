---
sidebar_position: 10
title: How Stream Workers Work
---

Stream workers are _complex event processors_. They consume events, process them, and then send the data somewhere. This page explains that process more thoroughly, but still at a high level.

## Stream Worker Flow

When the stream worker is published, it:

1. Consumes data as individual, sequential events from many different types of sources.
2. Pipe the events to queries through various streams for processing to transform, enrich, and generate insights.
3. Generates new events based on the processing done at the queries.
4. Sends newly-generated events through output to streams, publishing them to many different types of sinks.

When published, stream workers also create any query workers, tables (collections), and streams included in the definition if they do not already exist.

## Stream Worker Flow Diagram

The following diagram depicts some of the key elements of stream worker and how events flow through them. For more information about parts of a stream worker, refer to [Stream Worker Elements](stream-worker-elements).

![Event Flow](/img/event-flow.png?raw=true "Event Flow")
