// bad practice
const shapeconfig = {
    type : 'circle',
    width : 150,
    height : 200
    }

function createShape(config) {
    config.type = config.type || 'circle';
    config.width = config.width || 300;
    config.height = config.height || 300
    return config;
}

console.log(createShape(shapeconfig));


// good practice 

const shapeconfig2 = {
    type : 'circle',
    width : 150,
    height : 500
    // height take dilam nah
}


function createShape2(config) {
    config = Object.assign({
        // aita amr target output
        type : 'circle',
        width : 300,
        height : 300
    },
    // input object
    config)

    return config ;
}

console.log(createShape2(shapeconfig2));


