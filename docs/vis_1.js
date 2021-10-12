const VlSpec1 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title: 'Normalised Cell Tower Stations per Suburb in Victoria',
    width: 600,
    height: 450,
    layer: [
        {
            data: {
                url: "data/cell_towers/victoria.topo.json",
                format: { type: "topojson", feature: "victoria" }
            },
            transform: [{
                lookup: "id",
                from: {
                    data: {
                        url: "data/cell_towers/id_to_num_stations.csv"
                    },
                    key: "id",
                    fields: ["station_count_by_area", "station_count", "suburb"]
                }
            }],
            mark: {
                type: "geoshape"
            },
            encoding: {
                color: {
                    field: "station_count_by_area",
                    type: "quantitative",
                    scale: {
                        type: "threshold",
                        domain: [50, 1000],
                        range: ["#b3cde3", "#8c96c6", "#88419d"],
                    }
                },
                tooltip: [
                    { field: "suburb", type: "string", title: "Suburb" },
                    { field: "station_count_by_area", type: "quantitative", title: "Number of Stations per Square Kilometer", format: ",.1f" },
                    { field: "station_count", type: "quantitative", title: "Total Number of Stations" },
                ]

            },
            projection: {
                type: 'mercator'
            },
        },
        {
            data: {
                url: "data/cell_towers/victoria.topo.json",
                format: { type: "topojson", feature: "victoria" }
            },
            transform: [{
                lookup: "id",
                from: {
                    data: {
                        url: "data/cell_towers/id_to_num_stations.csv"
                    },
                    key: "id",
                    fields: ["station_count_by_area"]
                }
            },
            {
                // No stations
                filter: "datum.station_count_by_area == 0"
            }
            ],
            mark: {
                type: "geoshape",
                color: "red",
                tooltip: "Deadzone: There are no cell towers here",
            },
            projection: {
                type: 'mercator'
            }
        },
    ]
};


vegaEmbed('#vis1', VlSpec1);


