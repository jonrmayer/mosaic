import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "U.S. States",
    "description": "A map of U.S. states overlaid with computed centroids. Requires the DuckDB `spatial` extension.\n",
    "credit": "Adapted from an [Observable Plot example](https://observablehq.com/@observablehq/plot-state-centroids)."
  },
  "data": {
    "states": {
      "type": "spatial",
      "file": "data/us-counties-10m.json",
      "layer": "states"
    }
  },
  "plot": [
    {
      "mark": "geo",
      "data": {
        "from": "states"
      },
      "stroke": "currentColor",
      "strokeWidth": 1
    },
    {
      "mark": "dot",
      "data": {
        "from": "states"
      },
      "x": {
        "centroidX": "geom"
      },
      "y": {
        "centroidY": "geom"
      },
      "r": 2,
      "fill": "steelblue",
      "tip": true,
      "title": "name"
    }
  ],
  "margin": 0,
  "projectionType": "albers"
};
