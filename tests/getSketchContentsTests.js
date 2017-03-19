const getSketchContents = require('../getSketchContents')
const fs = require('fs')

module.exports = [
  {
    description: 'provides the document data',
    test: check => {
      fs.readFile(__dirname + '/fixtures/simple.sketch', (error, data) => {
        getSketchContents(data)
          .map(({document}) => {
            check(document)
          })
          .run()
      })
    },
    shouldEqual: {"_class":"document","do_objectID":"9A448235-0DD9-4D1A-8ECF-E22FA074B710","assets":{"_class":"assetCollection","colors":[],"gradients":[],"imageCollection":{"_class":"imageCollection","images":{}},"images":[]},"currentPageIndex":1,"enableLayerInteraction":true,"enableSliceInteraction":true,"foreignSymbols":[],"layerStyles":{"_class":"sharedStyleContainer","objects":[]},"layerSymbols":{"_class":"symbolContainer","objects":[]},"layerTextStyles":{"_class":"sharedTextStyleContainer","objects":[]},"pages":[{"_class":"MSJSONFileReference","_ref_class":"MSImmutablePage","_ref":"pages\/0F364A54-A488-4D6F-BAA4-F93FB057C5A3"},{"_class":"MSJSONFileReference","_ref_class":"MSImmutablePage","_ref":"pages\/7BEBFBF7-DD75-41E2-8882-51A6E354169A"}]}
  },
  {
    description: 'provides the meta data',
    test: check => {
      fs.readFile(__dirname + '/fixtures/simple.sketch', (error, data) => {
        getSketchContents(data)
          .map(({meta}) => {
            check(meta)
          })
          .run()
      })
    },
    shouldEqual: {"commit":"839c310bc9b166440aab19d887eb2aa6f18049d7","appVersion":"43","build":38976,"app":"com.bohemiancoding.sketch3.beta","pagesAndArtboards":{"7BEBFBF7-DD75-41E2-8882-51A6E354169A":{"name":"Page 2","artboards":{"F8A0B4CA-D6D0-437A-B981-916117DD2D11":{"name":"Artboard"}}},"0F364A54-A488-4D6F-BAA4-F93FB057C5A3":{"name":"Page 1","artboards":{"6A7B057C-5BCD-48D5-A0E9-E43B9799335C":{"name":"Artboard"}}}},"fonts":[],"created":{"app":"com.bohemiancoding.sketch3.beta","commit":"839c310bc9b166440aab19d887eb2aa6f18049d7","build":38976,"appVersion":"43","variant":"BETA","version":88},"version":88,"saveHistory":["BETA.38976"],"autosaved":0,"variant":"BETA"}
  },
  {
    description: 'provides the user data',
    test: check => {
      fs.readFile(__dirname + '/fixtures/simple.sketch', (error, data) => {
        getSketchContents(data)
          .map(({user}) => {
            check(user)
          })
          .run()
      })
    },
    shouldEqual: {"9A448235-0DD9-4D1A-8ECF-E22FA074B710":{"pageListHeight":110},"7BEBFBF7-DD75-41E2-8882-51A6E354169A":{"scrollOrigin":"{345, 192}","zoomValue":1},"0F364A54-A488-4D6F-BAA4-F93FB057C5A3":{"scrollOrigin":"{0, 0}","zoomValue":1}}
  },
  {
    description: 'provides the pages data',
    test: check => {
      fs.readFile(__dirname + '/fixtures/simple.sketch', (error, data) => {
        getSketchContents(data)
          .map(({pages}) => {
            check(pages)
          })
          .run()
      })
    },
    shouldEqual: {
      '0F364A54-A488-4D6F-BAA4-F93FB057C5A3': {"_class":"page","do_objectID":"0F364A54-A488-4D6F-BAA4-F93FB057C5A3","exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"frame":{"_class":"rect","constrainProportions":false,"height":300,"width":300,"x":0,"y":0},"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"name":"Page 1","nameIsFixed":false,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false,"style":{"_class":"style","endDecorationType":0,"miterLimit":10,"startDecorationType":0},"hasClickThrough":true,"layers":[{"_class":"artboard","do_objectID":"6A7B057C-5BCD-48D5-A0E9-E43B9799335C","exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"frame":{"_class":"rect","constrainProportions":false,"height":265,"width":267,"x":231,"y":163},"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"name":"Artboard","nameIsFixed":false,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false,"style":{"_class":"style","endDecorationType":0,"miterLimit":10,"startDecorationType":0},"hasClickThrough":false,"layers":[],"backgroundColor":{"_class":"color","alpha":1,"blue":1,"green":1,"red":1},"hasBackgroundColor":false,"horizontalRulerData":{"_class":"rulerData","base":0,"guides":[]},"includeBackgroundColorInExport":true,"includeInCloudUpload":true,"verticalRulerData":{"_class":"rulerData","base":0,"guides":[]}}],"horizontalRulerData":{"_class":"rulerData","base":0,"guides":[]},"includeInCloudUpload":true,"verticalRulerData":{"_class":"rulerData","base":0,"guides":[]}},
      '7BEBFBF7-DD75-41E2-8882-51A6E354169A': {"_class":"page","do_objectID":"7BEBFBF7-DD75-41E2-8882-51A6E354169A","exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"frame":{"_class":"rect","constrainProportions":false,"height":300,"width":300,"x":0,"y":0},"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"name":"Page 2","nameIsFixed":false,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false,"style":{"_class":"style","endDecorationType":0,"miterLimit":10,"startDecorationType":0},"hasClickThrough":true,"layers":[{"_class":"artboard","do_objectID":"F8A0B4CA-D6D0-437A-B981-916117DD2D11","exportOptions":{"_class":"exportOptions","exportFormats":[],"includedLayerIds":[],"layerOptions":0,"shouldTrim":false},"frame":{"_class":"rect","constrainProportions":false,"height":203,"width":356,"x":-84,"y":-76},"isFlippedHorizontal":false,"isFlippedVertical":false,"isLocked":false,"isVisible":true,"layerListExpandedType":0,"name":"Artboard","nameIsFixed":false,"resizingType":0,"rotation":0,"shouldBreakMaskChain":false,"style":{"_class":"style","endDecorationType":0,"miterLimit":10,"startDecorationType":0},"hasClickThrough":false,"layers":[],"backgroundColor":{"_class":"color","alpha":1,"blue":1,"green":1,"red":1},"hasBackgroundColor":false,"horizontalRulerData":{"_class":"rulerData","base":0,"guides":[]},"includeBackgroundColorInExport":true,"includeInCloudUpload":true,"verticalRulerData":{"_class":"rulerData","base":0,"guides":[]}}],"horizontalRulerData":{"_class":"rulerData","base":-346,"guides":[]},"includeInCloudUpload":true,"verticalRulerData":{"_class":"rulerData","base":-193,"guides":[]}}
    }
  }
]
