define(function() {var keywords=[{w:"Greece",p:["p0"]},{w:"Italy",p:["p1"]},{w:"Kitchen",p:["p2"]},{w:"safety",p:["p2"]},{w:"What",p:["p3"]},{w:"is",p:["p3"]},{w:"Mediterranean",p:["p3","p5"]},{w:"Cuisine",p:["p3","p5"]},{w:"style?",p:["p3"]},{w:"Glossary",p:["p4"]},{w:"Countries",p:["p5"]},{w:"with",p:["p5"]},{w:"Making",p:["p6","p7","p9"]},{w:"Italian",p:["p6","p7"]},{w:"Meatballs",p:["p6"]},{w:"Tomato",p:["p7"]},{w:"Sauce",p:["p7"]},{w:"Greek",p:["p8","p9"]},{w:"Salad",p:["p8"]},{w:"Yoghurt",p:["p9"]}];
var ph={};
ph["p0"]=[0];
ph["p1"]=[1];
ph["p2"]=[2, 3];
ph["p3"]=[4, 5, 6, 7, 8];
ph["p4"]=[9];
ph["p5"]=[10, 11, 6, 7];
ph["p6"]=[12, 13, 14];
ph["p7"]=[12, 13, 15, 16];
ph["p8"]=[17, 18];
ph["p9"]=[12, 17, 19];
     return {
         keywords: keywords,
         ph: ph
     }
});
