// TODO: ADD LABEL FOR WHEN THE LAWS CHANGED
// https://www.infrastructure.gov.au/media-technology-communications/internet/telecommunications-reform-package

const VlSpec4 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    title: 'NBN Speeds',
    data: {
        url: 'data/NBN_speeds/concat_nbn_speed_data.csv',
        format: {
            type: 'csv'
        }
    },
    mark: 'rect',
    encoding: {
        x: {
            field: 'Time',
            type: 'ordinal',
            sort: [
                '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am',
                '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am',
                '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm',
                '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm', '12:00 pm',
            ]
        },
        y: {
            field: 'Date',
            type: 'ordinal',
            sort: [
                'Mar-18', 'Jul-18', 'Nov-18',
                'Feb-19', 'May-19', 'Aug-19', 'Nov-19',
                'Feb-20', 'May-20', 'Sep-20', 'Dec-20',
                'Mar-21', 'Jun-21', 'Aug-21',
            ]
        },
        color: {
            field: 'Speed Difference',
            type: 'quantitative',
            scale: {
                scheme: 'lightorange',
            }
        },
        tooltip: [
            { field: 'Date', type: 'ordinal', title: 'Date' },
            { field: 'Time', type: 'ordinal', title: 'Time' },
            { field: 'Speed Difference', type: 'ordinal', title: 'Speed Difference' },
            { field: 'Speed Tier', type: 'string', title: 'Speed Tier' },
            { field: 'Actual Average Speed', type: 'quantitative', title: 'Actual Average Speed' },
        ]

    },
    config: {
        axis: {
            grid: true,
            tickBand: 'extent'
        },
    },

};

vegaEmbed('#vis4', VlSpec4);


