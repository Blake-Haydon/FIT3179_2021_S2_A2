const VlSpec3 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title: "Australian Internet Connectivity over Time",
    width: 600,
    height: 450,
    data: {
        url: "data/connectivity/online_population.csv",
        format: {
            type: "csv"
        },
    },
    mark: 'line',
    encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Percent Connected', type: 'quantitative' },
        color: { field: "Country", type: "nominal" },
        tooltip: [
            { field: "Year", type: "ordinal", title: "Year" },
            { field: "Country", type: "nominal", title: "Country" },
            { field: "Percent Connected", type: "ordinal", title: "Percent Connected (\%)" },
        ]

    }
};

vegaEmbed('#vis3', VlSpec3);


