

// function modifierValeur(where) {
// 		var avecProcs = false;
// 		var blocks = Blockly.getMainWorkspace().getAllBlocks();
// 		for (var i = 0; i < blocks.length; i++) {
// 			if (blocks[i].getProcedureDef) {
// 				var tuple = blocks[i].getProcedureDef();
// 				if (tuple) { // nom, arguments, estFonction
// 						var proc = blocks[i];
// 						var branch = Blockly.JavaScript.statementToCode(proc, 'STACK');
// 						var returnValue = Blockly.JavaScript.valueToCode(proc, 'RETURN', Blockly.JavaScript.ORDER_NONE) || '';
// 						if (returnValue) {
// 							if (where.indexOf(tuple[0]+"(") >=0) {
// 								avecProcs=true;
// 							}
// 						}
// 				}
// 			}
// 		}
// 		if (avecProcs) {
// 			return '"' + dgp_getAllProcs() + ';"' +  " + " + where;
// 		}
// 		return where;
// }

// function getBlocklyText() { // pour l'editeur DGPad
// 		// document.getElementById("id_run_editor").style.display = 'inline';
// 		// document.getElementById("id_run_editor_car").style.display = 'none';
// 		var code;
// 		var liste;
// 		var variableList;
// 		try {	
// 			// on récupère le code Javascript
// 			code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
// 			// on vire la ligne des variables globales
// 			liste=code.split("\n");
// 			for(var k=0; k<liste.length;k++) {
// 				if (liste[k].indexOf("var ")==0) { liste[k] = ""; break;}
// 			}
// 			code = liste.join("\n");
// 			// on intègre les sous-programmes dans les expressions et les points
// 			liste=code.split("\n");
// 			for(var k=0; k<liste.length;k++) {
// 				if (liste[k].indexOf("@")<0) continue;
// 				var tab = liste[k].split("@");
// 				if (tab[0].indexOf("Point(")>=0) {
// 					tab[1] = modifierValeur(tab[1]);
// 				}
// 				liste[k] = tab.join(", ");
// 			}
// 			code = liste.join("\n");
// 		} catch (e) {
// 			code = "// Blockly n'a pu etre traduit en Javascript";
// 			confirm(e.message);
// 		}
// 		return code;
// }


// function runBlockly(secuencia) {
// 	console.log(secuencia)
// 		effacerOutput();
// 		// Incrementar el contador
		
// 		if(secuencia==0){
// 			Swal.fire({
// 				title: '¡Bienvenido!',
// 				text: 'Utiliza los bloques de la izquierda para describir el desplazamiento que debe hacer el punto A para llegar al punto B. Luego oprime el botón  verificar ',
// 				icon: 'info',
// 				confirmButtonText: 'Entendido'
// 			  });
			  
// 		}
		
// 		var tablero="me.C.deleteAll();SetSystem(-6,20,8.5);GetCanvas().ctrl_show(false);p=Point('P','[-0.5,7.5]',0); Find(p).setHidden(1);me.mutant=true; me.ici='P';blk_turtle_exp_P = Expression('blk_turtle_exp_P', '', '', '', \"\"+\"me.setDegreeMode(true); TURTLE_INIT('',P); TURTLE_TURN(0.001);  for (var count2 = 0; count2 < 2; count2++) {    for (var count = 0; count < 9; count++) {      TURTLE_MV(8, false);      TURTLE_UP(true);      TURTLE_MV(-8, false);      TURTLE_TURN(-90);      TURTLE_MV(1, false);      TURTLE_TURN(90);      TURTLE_UP(false);    }    TURTLE_UP(true);    TURTLE_TURN(90);    TURTLE_MV(1, false);    TURTLE_UP(false);  };TURTLE_UP(true);TURTLE_FONT('Arial',50*parent.$U.escala,'normal','center');TURTLE_POINTS_WIDTH(1e-13);TURTLE_JOIN_PT(([3.5,8]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('N'));TURTLE_JOIN_PT(([8.5,3.5]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('E'));TURTLE_JOIN_PT(([3.5,-1.5]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('S'));TURTLE_JOIN_PT(([-1.5,3.5]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('O'));TURTLE_RESULT()\", '', '');blk_turtle_list_P = List('blk_turtle_list_P', blk_turtle_exp_P);STL(blk_turtle_exp_P,'h:1');STL(blk_turtle_list_P,'nmi:true;sg:1');p1=Point('A',0,0,0); Find(p1).setShowName(1);me.Z.trackManager.add(Find(p1), true);p1=Point('B',7,7,0); Find(p1).setShowName(1);";
		
// 		var code = getBlocklyText();
// 		code=code.split("window.alert(").join("Println(");
// 		code=code.split("…").join("");
// 		code=tablero+code;
// 		try {
// 			var can = $U.AllCanvas[0];
// 			can.runCode(code);
			
// 		}
// 		catch(ex) {
// 			confirm(ex);
// 		}
// 		if(secuencia==1){
// 			xA=can.getConstruction().find("A").getx();
// 			yA=can.getConstruction().find("A").gety();
// 			console.log(Math.abs(xA-7)>0.01||Math.abs(yA-7)>0.01)
// 			if(Math.abs(xA-7)>0.01||Math.abs(yA-7)>0.01){
// 				Swal.fire({
// 					title: '¡Lo siento!',
// 					text: 'El punto A no llegó hasta el punto B ',
// 					icon: 'info',
// 					confirmButtonText: 'Entendido'
// 				  });
// 			}else{
// 				Swal.fire({
// 					title: '¡Bravo!',
// 					text: 'Ahora describe otro recorrido para llegar a B',
// 					icon: 'info',
// 					confirmButtonText: 'Entendido'
// 				  });
				  
// 				  // Función para obtener el código de los bloques de índice impar
// 				  function getOddIndexedBlocklyCode() {
// 					var workspace = Blockly.getMainWorkspace();
// 					var allBlocks = workspace.getAllBlocks();
// 				console.log(allBlocks)
// 					var subcode = '';
// 					var code='';
// 					var newCode=[];
					
// 						var blockCode = Blockly.JavaScript.blockToCode(allBlocks[0]);
// 				console.log(blockCode)
// 						// Convertir blockCode a una cadena si es necesario
// 						if (Array.isArray(blockCode)) {
// 							blockCode = blockCode[0]; // Usar solo el primer elemento si es un array
// 						}
				
// 						// Asegurarse de que blockCode sea una cadena
// 						blockCode = String(blockCode);
				
// 						// Convertir números a negativos en el código de cada bloque
// 						blockCode = blockCode.replace(/(\d+)/g, function(match) {
// 							return -parseFloat(match);
// 						});
// 				var codeParts = blockCode.split(';');
// 				console.log(codeParts)
// 				for (i=0;i<codeParts.length-1; i+=3){
// 					subcode = codeParts[i]+';'+codeParts[i+1]+';'+codeParts[i+2]+';';
// 					newCode.push(subcode);
// 					console.log(newCode)
					
// 				}
// 					newCode.reverse()	
// 				code=newCode.join('');
// 					return code;
// 				}
				
// 				try {
// 					var code = getOddIndexedBlocklyCode();
// 					console.log(code)
// 					var can = $U.AllCanvas[0];
// 					can.runCode(code);
// 				} catch (ex) {
// 					confirm(ex);
// 				}
// 			}
// 		}
// 		if(secuencia==2){
// 			Blockly.getMainWorkspace().clear();
// 			var tablero="me.C.deleteAll();SetSystem(-6,20,8.5);GetCanvas().ctrl_show(false);p=Point('P','[-0.5,7.5]',0); Find(p).setHidden(1);me.mutant=true; me.ici='P';blk_turtle_exp_P = Expression('blk_turtle_exp_P', '', '', '', \"\"+\"me.setDegreeMode(true); TURTLE_INIT('',P); TURTLE_TURN(0.001);  for (var count2 = 0; count2 < 2; count2++) {    for (var count = 0; count < 9; count++) {      TURTLE_MV(8, false);      TURTLE_UP(true);      TURTLE_MV(-8, false);      TURTLE_TURN(-90);      TURTLE_MV(1, false);      TURTLE_TURN(90);      TURTLE_UP(false);    }    TURTLE_UP(true);    TURTLE_TURN(90);    TURTLE_MV(1, false);    TURTLE_UP(false);  };TURTLE_UP(true);TURTLE_FONT('Arial',50*parent.$U.escala,'normal','center');TURTLE_POINTS_WIDTH(1e-13);TURTLE_JOIN_PT(([3.5,8]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('N'));TURTLE_JOIN_PT(([8.5,3.5]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('E'));TURTLE_JOIN_PT(([3.5,-1.5]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('S'));TURTLE_JOIN_PT(([-1.5,3.5]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('O'));TURTLE_RESULT()\", '', '');blk_turtle_list_P = List('blk_turtle_list_P', blk_turtle_exp_P);STL(blk_turtle_exp_P,'h:1');STL(blk_turtle_list_P,'nmi:true;sg:1');p1=Point('A',0,0,0); Find(p1).setShowName(1);me.Z.trackManager.add(Find(p1), true);p1=Point('B',7,7,0); Find(p1).setShowName(1);deleteTrack();";
		
// 		var code = getBlocklyText();
// 		code=code.split("window.alert(").join("Println(");
// 		code=code.split("…").join("");
// 		code=tablero+code;
// 		try {
// 			var can = $U.AllCanvas[0];
// 			can.runCode(code);
			
// 		}
// 		catch(ex) {
// 			confirm(ex);
// 		}
// 		}
// }

let buttonState = 'Comenzar';

const style = document.createElement('style');
style.innerHTML = `
  .custom-swal {
    position: absolute;
    top: 10px; /* Mueve hacia la parte superior */
    left: 10px; /* Mueve hacia la derecha */
  }
`;
document.head.appendChild(style); // Agrega el estilo al documento

// function loadInitialBlocks() {
//   const workspace = Blockly.getMainWorkspace();
//   const xmlText = `
//       <xml xmlns="https://developers.google.com/blockly/xml">
//       <block type="movimiento_Coordenadas" x="10" y="10">
//         <field name="direccion">DIRECCIONES_HORIZONTAL</field>
//         <value name="avance">
//           <block type="math_number">
//             <field name="NUM">0</field>
//           </block>
//         </value>
// 		<field name="direccion">DIRECCIONES_VERTICAL</field>
//         <value name="avance">
//           <block type="math_number">
//             <field name="NUM">0</field>
//           </block>
//         </value>
        
//       </block>
//     </xml>
//   `;
//   const xml = Blockly.Xml.textToDom(xmlText);
//   Blockly.Xml.domToWorkspace(xml, workspace);
// }

function loadInitialBlocks() {
	const workspace = Blockly.getMainWorkspace();
	const xmlText = `
	  <xml xmlns="https://developers.google.com/blockly/xml">
		<block type="movimiento_Coordenadas" x="10" y="10">
		  <value name="x">
			<block type="math_number">
			  <field name="NUM">0</field>
			</block>
		  </value>
		  <value name="y">
			<block type="math_number">
			  <field name="NUM">0</field>
			</block>
		  </value>
		  <field name="direccion_horizontal">ESTE</field>
		  <field name="direccion_vertical">NORTE</field>
		</block>
	  </xml>
	`;
	const xml = Blockly.Xml.textToDom(xmlText);
	Blockly.Xml.domToWorkspace(xml, workspace);
  }
  



function handleButtonClick() {
  if (buttonState === 'Comenzar') {
    runBlockly(0);
    buttonState = 'Verificar';
    document.getElementById('btnAction').innerText = 'Verificar';
  } else if (buttonState === 'Verificar') {
    runBlockly(1);
  } else if (buttonState === 'Reiniciar') {
    runBlockly(2);
  }
}

function getBlocklyText() {
  var code;
  var liste;
  try {
    code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    liste = code.split("\n");
    for (var k = 0; k < liste.length; k++) {
      if (liste[k].indexOf("var ") == 0) {
        liste[k] = "";
        break;
      }
    }
    code = liste.join("\n");
    liste = code.split("\n");
    for (var k = 0; k < liste.length; k++) {
      if (liste[k].indexOf("@") < 0) continue;
      var tab = liste[k].split("@");
      if (tab[0].indexOf("Point(") >= 0) {
        tab[1] = modifierValeur(tab[1]);
      }
      liste[k] = tab.join(", ");
    }
    code = liste.join("\n");
  } catch (e) {
    code = "// Blockly n'a pu etre traduit en Javascript";
    confirm(e.message);
  }
  return code;
}

function runBlockly(secuencia) {
  var can = $U.AllCanvas[0];
  effacerOutput();
  
  if (secuencia == 0) {
    // Secuencia para comenzar
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Utiliza los bloques de la izquierda para describir el desplazamiento que debe hacer el punto A para llegar al punto B. ',
      icon: 'info',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'custom-swal'  // Aplica la clase personalizada
      }
    });

    // Inicializa el tablero y posiciones
    var tablero=`me.C.deleteAll();SetSystem(-6,17,4);GetCanvas().ctrl_show(false);SetCoordsStyle("isAxis:true;isGrid:true;isOx:true;isOy:true;isLockOx:true;isLockOy:true;centerZoom:false;onlyPositive:false;color:#111111;fontSize:18;axisWidth:1;gridWidth:0.1");cuadriculaTortuga=Expression("cuadriculaTortuga","","","","[[0,0]]","0","0");
    STL(cuadriculaTortuga,"c:#28254b;s:7;f:24;p:2;cL:200;cPT:YzojNzgwMDEzO2g6MTtzOjEwO2Y6MzA=");List1=List("List1",cuadriculaTortuga);STL(List1,"c:#0000b2;s:0;f:30;p:0;sg:6");
    p=Point('P','[-3.5,3.5]',0); Find(p).setHidden(1);me.mutant=true; me.ici='P';blk_turtle_exp_P = Expression('blk_turtle_exp_P', '', '', '', \"\"+\"me.setDegreeMode(true); TURTLE_INIT('',P); TURTLE_TURN(0.001);  TURTLE_UP(true);TURTLE_FONT('Arial',50*parent.$U.escala,'normal','center');TURTLE_POINTS_WIDTH(1e-13);TURTLE_JOIN_PT(([0,3.5]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('+'));TURTLE_JOIN_PT(([4,0]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('+'));TURTLE_JOIN_PT(([0,-4]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('_'));TURTLE_JOIN_PT(([-4,0]));TURTLE_RESET();TURTLE_PRINT(TURTLE_TEXT('_'));TURTLE_RESULT()\", '', '');blk_turtle_list_P = List('blk_turtle_list_P', blk_turtle_exp_P);STL(blk_turtle_exp_P,'h:1');STL(blk_turtle_list_P,'nmi:true;sg:1');p1=Point('A',0,0,0); Find(p1).setShowName(1);p2=Point('B',3,3,0); Find(p2).setShowName(1);Move("B",${Math.round(Math.random()*8-4)},${Math.round(Math.random()*8-4)})`;
    
    // var code = getBlocklyText();
    // code = code.split("window.alert(").join("Println(");
    // code = code.split("…").join("");
    code = tablero;

    try {
      can.runCode(code);
    } catch (ex) {
      confirm(ex.message);
      
    }
  }
  
  if (secuencia == 1) {
//     // Secuencia de verificación
//     var code = getBlocklyText();
//     code = code.split("window.alert(").join("Println(");
//     code = code.split("…").join("");
// console.log("rnmb",code)
var code = 'var lista = Find("cuadriculaTortuga").getValue();\n';
  code += getBlocklyText();
  console.log(code)
  code = code.split("window.alert(").join("Println(");
  code = code.split("…").join("");
  console.log("Código final:", code);
  
  

    try {
      can.runCode(code);
    } catch (ex) {
      confirm(ex.message);
    }

    var xA = can.getConstruction().find("A").getx();
    var yA = can.getConstruction().find("A").gety();
    var xB = can.getConstruction().find("B").getx();
    var yB = can.getConstruction().find("B").gety();
    var workspace = Blockly.getMainWorkspace();
    var allBlocks = workspace.getAllBlocks();
    var movimientos = allBlocks.length / 2;
    
    if (Math.abs(xA - xB) > 0.01 || Math.abs(yA - yB) > 0.01) {
      Swal.fire({
        title: '¡Lo siento!',
        text: 'El punto A no llegó hasta el punto B. Inténtalo nuevamente.',
        icon: 'info',
        confirmButtonText: 'Reiniciar',
        customClass: {
          popup: 'custom-swal'  // Aplica la clase personalizada
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Esta acción se ejecuta cuando el usuario cierra la alerta
          code = 'Move("A",0,0);SetExpressionValue("cuadriculaTortuga",[[0,0]]);';
          can.runCode(code);
          // Blockly.getMainWorkspace().clear();
        }
      });
      buttonState = 'Verificar';
      document.getElementById('btnAction').innerText = 'Verificar';
    } else {
      // Verifica los movimientos y actualiza el mensaje
      
      var mensaje = "";
      
          Swal.fire({
            title: '¡Bravo!',
            text: `Has propuesto un recorrido válido. Ahora se te propondrá una nueva meta.`,
            icon: 'info',
            confirmButtonText: 'Entendido',
            customClass: {
              popup: 'custom-swal'  // Aplica la clase personalizada
            }
          }).then((result) => {
            if (result.isConfirmed) {
              

          
          code = `Move("B",${Math.round(Math.random()*10-5)},${Math.round(Math.random()*10-5)});Move("A",0,0);SetExpressionValue("cuadriculaTortuga",[[0,0]]); `;
          can.runCode(code);
          // Cambia el botón de nuevo a verificar
          buttonState = 'Verificar';
          document.getElementById('btnAction').innerText = 'Verificar';
            }
          });
          
        }
      }

      
    
    // Blockly.getMainWorkspace().clear();
  
  
  if (secuencia == 2) {
    // Secuencia de reinicio
    console.log("reiniciando");
    // Blockly.getMainWorkspace().clear();
    
    var tablero = `Move("A",0,0);Move("B",${bPositions[bIndex][0]},${bPositions[bIndex][1]});SetExpressionValue("cuadriculaTortuga",[[0,0]])`;

    var code = getBlocklyText();
    code = code.split("window.alert(").join("Println(");
    code = code.split("…").join("");
    code = tablero + code;

    try {
      var can = $U.AllCanvas[0];
      can.runCode(code);
    } catch (ex) {
      confirm(ex.message);
    }

    document.getElementById('btnAction').innerText = 'Verificar';
    buttonState = 'Verificar';
  }
}




