// LABEL FOR WHEN THE LAW CHANGED
// https://www.infrastructure.gov.au/media-technology-communications/internet/telecommunications-reform-package

const VlSpec4 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',

    width: 600,
    height: 450,

    hconcat: [
        {
            title: 'NBN Speeds',
            width: 500,
            height: 450,
            layer: [{
                data: {
                    url: 'data/NBN_speeds/concat_nbn_speed_data.csv',
                    format: {
                        type: 'csv'
                    }
                },
                mark: 'rect',
                encoding: {
                    x: {
                        field: 'Date',
                        type: 'ordinal',
                        sort: [
                            'Mar-18', 'Jul-18', 'Nov-18',
                            'Feb-19', 'May-19', 'Aug-19', 'Nov-19',
                            'Feb-20', 'May-20', 'Sep-20', 'Dec-20',
                            'Mar-21', 'Jun-21', 'Aug-21',
                        ]
                    },
                    y: {
                        field: 'Time',
                        type: 'ordinal',
                        sort: [
                            '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am',
                            '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am',
                            '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm',
                            '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm', '12:00 pm',
                        ]
                    },
                    color: {
                        field: 'Actual Average Speed',
                        title: 'Average Speed [Mbps]',
                        type: 'quantitative',
                        scale: {
                            scheme: "plasma", domain: [80, 100],
                        }
                    },
                    tooltip: [
                        { field: 'Speed Tier', type: 'string', title: 'Speed Tier' },
                        { field: 'Date', type: 'ordinal', title: 'Month' },
                        { field: 'Time', type: 'ordinal', title: 'Time' },
                        { field: 'Actual Average Speed', type: 'quantitative', title: 'Average Speed [Mbps]' },
                        { field: 'Speed Difference', type: 'ordinal', title: 'Speed Difference [Mbps]' },
                    ]
                }
            },
            {
                data: {
                    values: [{}]
                },
                encoding: {
                    x: { datum: 'Sep-20' }
                },
                layer: [{
                    mark: {
                        type: "rule",
                        strokeWidth: 5,
                        strokeDash: [8, 8],
                        color: "white",
                        tooltip: "The bill forced Telcom companies to deliver a minimum internet speed to consumers, increasing everyone's connection speed."
                    },
                }, {
                    mark: {
                        type: "text",
                        align: "left",
                        baseline: "top",
                        dx: +5,
                        dy: -240,
                        x: "width",
                        text: "Internet Reform Bill 2020",
                        tooltip: "The bill forced Telcom companies to deliver a minimum internet speed to consumers, increasing everyone's connection speed."
                    }
                }]
            }]
        },
        {
            width: 100,
            height: 450,
            data: {
                url: 'data/NBN_speeds/concat_nbn_speed_data.csv',
                format: {
                    type: 'csv'
                }
            },
            transform: [
                {
                    aggregate: [{
                        op: "mean",
                        field: "Actual Average Speed",
                        as: "calc_time_mean_speed"
                    }],
                    groupby: ["Time"]
                }
            ],
            mark: "bar",
            encoding: {
                y: {
                    field: 'Time',
                    type: 'ordinal',
                    sort: [
                        '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am',
                        '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am',
                        '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm',
                        '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm', '12:00 pm',
                    ]
                },
                x: {
                    field: 'calc_time_mean_speed',
                    title: 'Mean Speed [Mbps]',
                    type: "quantitative",
                    stack: "none",
                    scale: {
                        zero: false,
                    },
                },
                color: {
                    field: 'calc_time_mean_speed',
                    title: 'Average Speed [Mbps]',
                    type: 'quantitative',
                    scale: {
                        scheme: "plasma", domain: [80, 100]
                    }
                },
                tooltip: [
                    { field: 'Time', type: 'ordinal', title: 'Time' },
                    { field: 'calc_time_mean_speed', type: 'quantitative', title: 'Mean Speed [Mbps]', format: ",.1f" },
                ],
            }
        },
    ],
    config: {
        axis: {
            tickBand: 'extent'
        },
    },

};

vegaEmbed('#vis4', VlSpec4);


