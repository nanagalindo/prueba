// -----------------------------------------------
// Menu Sofus
// ------------------------------------------------







// Blockly.JavaScript['movimiento_Coordenadas'] = function(block) {
//   var abscisa = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
//   var ordenada = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
//   var direccionVertical = block.getFieldValue('direccion_vertical');
//   var direccionHorizontal = block.getFieldValue('direccion_horizontal');
  
//   // Verificar si 'avance' es un número válido
//   // if (isNaN(value_avance)) {
//   //     value_avance = 0; // Valor por defecto si no es numérico
//   // }
  
//   var code = 'var punto = Find("A");\n';
//   if (direccionHorizontal === 'OESTE') {
//     code += 'Move(\'A\', Find("A").getx()- ' + abscisa +', Find("A").gety());\n';
//   } else {
//     code += 'Move(\'A\', Find("A").getx()+ ' + abscisa +', Find("A").gety());\n';
//   }
  
//   code += 'computeAll();\n';
//   if (direccionVertical === 'NORTE') {
//       code += 'Move(\'A\', Find("A").getx(), Find("A").gety() + ' + ordenada + ');\n';
//   } else {
//     code += 'Move(\'A\', Find("A").getx(), Find("A").gety() - ' + ordenada + ');\n';
//   } 
//   code += 'computeAll();\n';
  
  
//   return code;
// };

Blockly.JavaScript['movimiento_Coordenadas'] = function(block) {
  var abscisa = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var ordenada = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var direccionVertical = block.getFieldValue('direccion_vertical');
  var direccionHorizontal = block.getFieldValue('direccion_horizontal');
  
  // Obtener las coordenadas actuales
  var code = 'var punto = Find("A");\n';
  code += 'var lista=Find("cuadriculaTortuga").getValue();';
  var nuevaX = 'Find("A").getx()';
  var nuevaY = 'Find("A").gety()';

  // Ajustar las coordenadas según la dirección horizontal
  if (direccionHorizontal === 'OESTE') {
    nuevaX += ' - ' + abscisa;
  } else {
    nuevaX += ' + ' + abscisa;
  }
  code += 'lista.push([' + nuevaX + ',' + nuevaY + ']);';
  code += 'SetExpressionValue("cuadriculaTortuga",lista);';
  // Ajustar las coordenadas según la dirección vertical
  if (direccionVertical === 'NORTE') {
    nuevaY += ' + ' + ordenada;
  } else {
    nuevaY += ' - ' + ordenada;
  }
  
   
    code += 'lista.push([' + nuevaX + ',' + nuevaY + ']);';
    code += 'SetExpressionValue("cuadriculaTortuga",lista);';
  // Mover a las nuevas coordenadas calculadas
  code += 'Move("A", ' + nuevaX + ', ' + nuevaY + ');\n';
  
  // Recalcular todas las expresiones
  code += 'computeAll();\n';
console.log(code)
  return code;
};


