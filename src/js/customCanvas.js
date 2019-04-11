var lc = LC.init(
    document.getElementsByClassName('my-drawing')[0],
    {imageURLPrefix: './src/js/canvas/img',
        tools: [LC.tools.Pencil, LC.tools.Eraser, LC.tools.Line, LC.tools.Rectangle, LC.tools.Ellipse, LC.tools.Polygon, LC.tools.Text, LC.tools.Pan, LC.tools.SelectShape, LC.tools.Eyedropper] }

);


var can = document.getElementsByClassName("literally")[0];
can.style.height = "1000px";

var can1 = document.getElementsByTagName("canvas")[0];
can1.height = "1000";

lc.respondToSizeChange();

$("[data-reactid='.0.1.0.2']").css('top', '20%');

// var can2 = document.getElementsByTagName("canvas")[1];
// can2.width = can1.height;
// can2.height = can1.width;

function addImage() {
    var newImage = new Image()
    newImage.src = 'data:image/jpeg;base64,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';
    lc.saveShape(LC.createShape('Image', {x: 10, y: 10, image: newImage}));
}

$(document).ready(function() {
    $('.controls.export [data-action=export-as-png]').click(function(e) {
        e.preventDefault();
        //console.log(lc.getImage());
        console.log(lc.getImage().toDataURL());
        // var image = lc.getImage().toDataURL().replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        // window.location.href=image;
    });
});


//select and delete shapes
const deleteButton = document.getElementById('button-delete');
const resizeButton = document.getElementById('button-resize');

resizeButton.addEventListener('click', function() {
    var canvas = lc;
    const selectedShape = canvas.tool.selectedShape;
    if(selectedShape) {
        var prevHeight = selectedShape.height;
        var prevWidth  = selectedShape.width;
        selectedShape.height = 50;
        selectedShape.width = 100;

        var ss = canvas.tool.selectedShape;
        var sid = canvas.tool.selectedShape.id;
        canvas.tool.selectedShape = null;
        /* Redraw the canvas with the shape now removed */
        canvas.repaintLayer('main');

        //Custom shapeDeleted event
        canvas.trigger('shapeResized', ss);

        //Add to undo/redo stack
        canvas.execute({'do':function(){
                //Del shape
                selectedShape.height = 500;
                selectedShape.width = 100;
                canvas.repaintLayer('main');

            },undo:function(){
                //ReAdd shape
                selectedShape.height = prevHeight;
                selectedShape.width = prevWidth;
                canvas.repaintLayer('main');
            }});

        canvas.setTool(new LC.tools.SelectShape(canvas));
    }
});

deleteButton.addEventListener('click', function() {
    var canvas = lc;
    const selectedShape = canvas.tool.selectedShape;

    /* Remove shape from shapes list*/

    if (selectedShape) {
        const selectedShapeIndex = canvas.shapes.indexOf(selectedShape);
        canvas.shapes.splice(selectedShapeIndex, 1);
        canvas.setShapesInProgress([]); /* Also removes selection box */

        /* Mimic actions of select tool:
             https://github.com/literallycanvas/literallycanvas/blob/884fc422604d7cf6e4159fb9415e735ac19bfba3/src/tools/SelectShape.coffee#L59
             */

        canvas.trigger('shapeMoved', { shape: selectedShape })
        canvas.trigger('drawingChange', {})

        /* Clear the selected shape (prevents second click on delete button deleting the shape now at the index of the old selected shape) */

        //--------------------------------- Undo/ReDo Support here ------------------------------------------------------
        var ss = canvas.tool.selectedShape;
        var sid = canvas.tool.selectedShape.id;
        canvas.tool.selectedShape = null;
        /* Redraw the canvas with the shape now removed */
        canvas.repaintLayer('main');

        //Custom shapeDeleted event
        canvas.trigger('shapeDeleted', ss);

        //Add to undo/redo stack
        canvas.execute({'do':function(){
                //Del shape
                for(var i=0;i!=canvas.shapes.length;i++){
                    if(canvas.shapes[i].id == sid){
                        canvas.shapes.splice(i, 1);
                        break;
                    }
                }
                canvas.repaintLayer('main');

            },undo:function(){
                //ReAdd shape
                canvas.shapes.push(ss);
                canvas.repaintLayer('main');
            }});
        //-------------------------------------------------END------------------------------------------------------
        /* Instantiate a new instance of the select tool so the user can select another shape immediately */

        canvas.setTool(new LC.tools.SelectShape(canvas));
    }
});
