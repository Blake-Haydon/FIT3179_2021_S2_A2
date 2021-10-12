const VlSpec1 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title: 'Number of Cell Towers per Square Kilometre in Victoria 2021',
    width: 600,
    height: 450,
    params: [
        {
            name: "zoom_level",
            value: 7500,
            bind: {
                input: "range",
                min: 3000,
                max: 60000,
                step: 100,
                name: "Zoom: "
            }
        },
        {
            name: "center_to",
            value: [145, -37.95],
            bind: {
                input: "select",
                options: [
                    [145, -37.95],
                    [144.3, -38.1],
                    [143.84957, -37.56622],
                    [145.39867, -36.38047],

                ],
                labels: ["Melbourne CBD", "Geelong", "Ballarat", "Shepparton"],
                name: "Map Centre: "
            }
        }
    ],
    projection: {
        type: 'mercator',
        center: { expr: "center_to" },
        scale: { expr: "zoom_level" },
    },
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
                    fields: ["station_count_by_area", "station_count_by_area_plus_1", "station_count", "suburb"]
                }
            }],
            mark: { type: "geoshape" },
            encoding: {
                color: {
                    field: "station_count_by_area_plus_1",
                    type: "quantitative",
                    title: "Stations per Square Kilometre",
                    scale: {
                        type: "log",
                        domain: [1, 1000000],
                        scheme: "plasma",
                    }
                },
                tooltip: [
                    { field: "suburb", type: "string", title: "Suburb" },
                    { field: "station_count", type: "quantitative", title: "Total Number of Stations" },
                    { field: "station_count_by_area", type: "quantitative", title: "Stations / Square Kilometre", format: ",.1f" },
                ]
            },
        },
    ]
};


vegaEmbed('#vis1', VlSpec1);


