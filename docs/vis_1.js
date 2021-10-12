// TODO: ADD ZOOM

const VlSpec1 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title: 'Number of Cell Towers per Square Kilometer in Victoria 2021',
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
            mark: { type: "geoshape" },
            encoding: {
                color: {
                    field: "station_count_by_area",
                    type: "quantitative",
                    title: "Stations per Square Kilometer",
                    scale: {
                        type: "log",
                        domain: [1, 100000],
                        scheme: "plasma",
                    }
                },
                tooltip: [
                    { field: "suburb", type: "string", title: "Suburb" },
                    { field: "station_count", type: "quantitative", title: "Total Number of Stations" },
                    { field: "station_count_by_area", type: "quantitative", title: "Stations / Square Kilometer", format: ",.1f" },
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
                    fields: ["station_count_by_area", "suburb"]
                }
            },
            {
                // No stations
                filter: "datum.station_count_by_area == 0"
            }
            ],
            mark: {
                type: "geoshape",
                color: "black",
                tooltip: "Deadzone: There are no cell towers here",
            },
            projection: {
                type: 'mercator'
            }
        },
    ]
};


vegaEmbed('#vis1', VlSpec1);


