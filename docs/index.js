var yourVlSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    data: {
        values: [
            { a: 'A', b: 28 },
            { a: 'B', b: 55 },
            { a: 'C', b: 43 },
            { a: 'D', b: 91 },
            { a: 'E', b: 81 },
            { a: 'F', b: 53 },
            { a: 'G', b: 19 },
            { a: 'H', b: 87 },
            { a: 'I', b: 52 }
        ]
    },
    mark: 'bar',
    encoding: {
        x: { field: 'a', type: 'ordinal' },
        y: { field: 'b', type: 'quantitative' }
    }
};

var yourVlSpec2 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    data: {
        values: [
            { a: 'A', b: 28 },
            { a: 'B', b: 55 },
            { a: 'H', b: 87 },
            { a: 'I', b: 52 }
        ]
    },
    mark: 'bar',
    encoding: {
        x: { field: 'a', type: 'ordinal' },
        y: { field: 'b', type: 'quantitative' }
    }
};

vegaEmbed('#vis', yourVlSpec);





let waypoint = new Waypoint({
    element: document.getElementById('test-thing'),
    handler: function (direction) {
        console.log(this.id + ' hit')
        vegaEmbed('#vis', yourVlSpec);

    }
})

let waypoint2 = new Waypoint({
    element: document.getElementById('test-thing-2'),
    handler: function (direction) {
        console.log(this.id + ' hit')
        vegaEmbed('#vis', yourVlSpec2);
    }
})

