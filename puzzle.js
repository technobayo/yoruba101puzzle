//Call function when page is loaded
window.onload = init;

//global variables
var suppliedAns1,suppliedAns2,suppliedAns3,suppliedAns4,suppliedAns5,suppliedAns6,suppliedAns7,
suppliedAns8,suppliedAns9,suppliedAns10,suppliedAns11,suppliedAns12;
var intCorrAns = 0;
var intWrongAns = 0;

function init()
{
	var btnid = document.getElementById("btneval");
	btnid.onclick = EvaluatePuzzle;
}

function EvaluatePuzzle()
{
	InitVars();

	v.TestAns();
	if(intCorrAns == 100)
	{
		v.DisplayResult("Score: Excellent!!!");
	}
	else
	{	
		v.DisplayResult("Score: "+intCorrAns+"/100");
	}
	
}

function InitVars()
{
	suppliedAns1 = [cellIds.id1[0].value,cellIds.id1[1].value,cellIds.id1[2].value,cellIds.id1[3].value,
	cellIds.id1[4].value,cellIds.id1[5].value,cellIds.id1[6].value,cellIds.id1[7].value];

	suppliedAns2 = [cellIds.id2[0].value,cellIds.id2[1].value,cellIds.id2[2].value,cellIds.id2[3].value,
	cellIds.id2[4].value,cellIds.id2[5].value,cellIds.id2[6].value,cellIds.id2[7].value];

	suppliedAns3 = [cellIds.id3[0].value,cellIds.id3[1].value,cellIds.id3[2].value,cellIds.id3[3].value,
	cellIds.id3[4].value,cellIds.id3[5].value,cellIds.id3[6].value,cellIds.id3[7].value,
	cellIds.id3[8].value,cellIds.id3[9].value];

	suppliedAns4 = [cellIds.id4[0].value,cellIds.id4[1].value,cellIds.id4[2].value,cellIds.id4[3].value,
	cellIds.id4[4].value,cellIds.id4[5].value,cellIds.id4[6].value,cellIds.id4[7].value,
	cellIds.id4[8].value];

	suppliedAns5 = [cellIds.id5[0].value,cellIds.id5[1].value,cellIds.id5[2].value,cellIds.id5[3].value,
	cellIds.id5[4].value,cellIds.id5[5].value,cellIds.id5[6].value,cellIds.id5[7].value,
	cellIds.id5[8].value,cellIds.id5[9].value];

	suppliedAns6 = [cellIds.id6[0].value,cellIds.id6[1].value,cellIds.id6[2].value,cellIds.id6[3].value,
	cellIds.id6[4].value,cellIds.id6[5].value,cellIds.id6[6].value,cellIds.id6[7].value];

	suppliedAns7 = [cellIds.id7[0].value,cellIds.id7[1].value,cellIds.id7[2].value,cellIds.id7[3].value,
	cellIds.id7[4].value,cellIds.id7[5].value,cellIds.id7[6].value,cellIds.id7[7].value];

	suppliedAns8 = [cellIds.id8[0].value,cellIds.id8[1].value,cellIds.id8[2].value,cellIds.id8[3].value,
	cellIds.id8[4].value,cellIds.id8[5].value,cellIds.id8[6].value];

	suppliedAns9 = [cellIds.id9[0].value,cellIds.id9[1].value,cellIds.id9[2].value,cellIds.id9[3].value,
	cellIds.id9[4].value,cellIds.id9[5].value];

	suppliedAns10 = [cellIds.id10[0].value,cellIds.id10[1].value,cellIds.id10[2].value,cellIds.id10[3].value,
	cellIds.id10[4].value,cellIds.id10[5].value,cellIds.id10[6].value,cellIds.id10[7].value,
	cellIds.id10[8].value,cellIds.id10[9].value];

	suppliedAns11 = [cellIds.id11[0].value,cellIds.id11[1].value,cellIds.id11[2].value,cellIds.id11[3].value,
	cellIds.id11[4].value,cellIds.id11[5].value,cellIds.id11[6].value];

	suppliedAns12 = [cellIds.id12[0].value,cellIds.id12[1].value,cellIds.id12[2].value,cellIds.id12[3].value,
	cellIds.id12[4].value,cellIds.id12[5].value,cellIds.id12[6].value,cellIds.id12[7].value,
	cellIds.id12[8].value];

	intCorrAns = 0;
	intWrongAns = 0;
}

//Array of Correct Answers
var correctAns = {
	correctAns1: ["Ọ","B","A","A","P","O","T","I"],
	correctAns2: ["Ọ","A","J","A","Y","Ẹ","T","I"],
	correctAns3: ["L","A","B","A","L","A","B","A","A","L"],
	correctAns4: ["Ọ","A","Y","A","K","O","E","D","E"],
	correctAns5: ["J","I","I","O","Ṣ","U","M","A","R","E"],
	correctAns6: ["A","Y","Ọ","I","A","I","Ṣ","E"],
	correctAns7: ["Ẹ","Ṣ","I","N","N","Ọ","L","A"],
	correctAns8: ["Ẹ","R","U","G","E","W","Ọ"],
	correctAns9: ["O","A","O","D","O","A"],
	correctAns10: ["I","Y","A","W","O","A","O","N","K","A"],
	correctAns11: ["Y","I","P","Ọ","R","B","Ọ"],
	correctAns12: ["Ọ","N","A","W","A","K","A","T","I"]
};

//Variable Object with variable arrays of the cell IDs
var cellIds = {
	id1: [document.getElementById("A02"),document.getElementById("A03"),document.getElementById("A04"),
	document.getElementById("A06"),document.getElementById("A07"),document.getElementById("A08"),
	document.getElementById("A09"),document.getElementById("A10")],
	id2: [document.getElementById("B01"),document.getElementById("B03"),document.getElementById("B04"),
	document.getElementById("B05"),document.getElementById("B10"),document.getElementById("B11"),
	document.getElementById("B12"),document.getElementById("B13")],
	id3: [document.getElementById("C01"),document.getElementById("C02"),document.getElementById("C03"),
	document.getElementById("C04"),document.getElementById("C05"),document.getElementById("C06"),
	document.getElementById("C07"),document.getElementById("C08"),document.getElementById("C10"),
	document.getElementById("C13")],
	id4: [document.getElementById("D01"),document.getElementById("D03"),document.getElementById("D04"),
	document.getElementById("D05"),document.getElementById("D08"),document.getElementById("D09"),
	document.getElementById("D11"),document.getElementById("D12"),document.getElementById("D13")],
	id5: [document.getElementById("E01"),document.getElementById("E02"),document.getElementById("E04"),
	document.getElementById("E06"),document.getElementById("E07"),document.getElementById("E08"),
	document.getElementById("E09"),document.getElementById("E10"),document.getElementById("E11"),
	document.getElementById("E12")],
	id6: [document.getElementById("F01"),document.getElementById("F02"),document.getElementById("F03"),
	document.getElementById("F05"),document.getElementById("F07"),document.getElementById("F09"),
	document.getElementById("F10"),document.getElementById("F11")],
	id7: [document.getElementById("G02"),document.getElementById("G03"),document.getElementById("G04"),
	document.getElementById("G05"),document.getElementById("G07"),document.getElementById("G10"),
	document.getElementById("G11"),document.getElementById("G12")],
	id8: [document.getElementById("H03"),document.getElementById("H04"),document.getElementById("H05"),
	document.getElementById("H07"),document.getElementById("H11"),document.getElementById("H12"),
	document.getElementById("H13")],
	id9: [document.getElementById("I02"),document.getElementById("I04"),document.getElementById("I07"),
	document.getElementById("I08"),document.getElementById("I09"),document.getElementById("I12")],
	id10: [document.getElementById("J01"),document.getElementById("J02"),document.getElementById("J03"),
	document.getElementById("J04"),document.getElementById("J05"),document.getElementById("J08"),
	document.getElementById("J10"),document.getElementById("J11"),document.getElementById("J12"),
	document.getElementById("J13")],
	id11: [document.getElementById("K01"),document.getElementById("K02"),document.getElementById("K03"),
	document.getElementById("K04"),document.getElementById("K08"),document.getElementById("K10"),
	document.getElementById("K12")],
	id12: [document.getElementById("L01"),document.getElementById("L02"),document.getElementById("L03"),
	document.getElementById("L05"),document.getElementById("L06"),document.getElementById("L07"),
	document.getElementById("L08"),document.getElementById("L09"),document.getElementById("L10")]
};


//Declare Object v with different functions
var v = {

	DisplayResult: function(msg){
		var stat = document.getElementById("status");
		stat.innerHTML = msg;
	},

	TestAns: function(){

		for(var i=0;i<suppliedAns1.length;i++)
		{
			if(suppliedAns1[i].toUpperCase() == correctAns.correctAns1[i])
			{
				//console.log(suppliedAns1[i]+" = Correct!");
				cellIds.id1[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns1[i]+" = Wrong!");
				cellIds.id1[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns2.length;i++)
		{
			if(suppliedAns2[i].toUpperCase() == correctAns.correctAns2[i])
			{
				//console.log(suppliedAns2[i]+" = Correct!");
				cellIds.id2[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns2[i]+" = Wrong!");
				cellIds.id2[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns3.length;i++)
		{
			if(suppliedAns3[i].toUpperCase() == correctAns.correctAns3[i])
			{
				//console.log(suppliedAns3[i]+" = Correct!");
				cellIds.id3[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns3[i]+" = Wrong!");
				cellIds.id3[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns4.length;i++)
		{
			if(suppliedAns4[i].toUpperCase() == correctAns.correctAns4[i])
			{
				//console.log(suppliedAns4[i]+" = Correct!");
				cellIds.id4[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns4[i]+" = Wrong!");
				cellIds.id4[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns5.length;i++)
		{
			if(suppliedAns5[i].toUpperCase() == correctAns.correctAns5[i])
			{
				//console.log(suppliedAns5[i]+" = Correct!");
				cellIds.id5[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns5[i]+" = Wrong!");
				cellIds.id5[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns6.length;i++)
		{
			if(suppliedAns6[i].toUpperCase() == correctAns.correctAns6[i])
			{
				//console.log(suppliedAns6[i]+" = Correct!");
				cellIds.id6[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns6[i]+" = Wrong!");
				cellIds.id6[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns7.length;i++)
		{
			if(suppliedAns7[i].toUpperCase() == correctAns.correctAns7[i])
			{
				//console.log(suppliedAns7[i]+" = Correct!");
				cellIds.id7[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns7[i]+" = Wrong!");
				cellIds.id7[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns8.length;i++)
		{
			if(suppliedAns8[i].toUpperCase() == correctAns.correctAns8[i])
			{
				//console.log(suppliedAns8[i]+" = Correct!");
				cellIds.id8[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns8[i]+" = Wrong!");
				cellIds.id8[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns9.length;i++)
		{
			if(suppliedAns9[i].toUpperCase() == correctAns.correctAns9[i])
			{
				//console.log(suppliedAns9[i]+" = Correct!");
				cellIds.id9[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns9[i]+" = Wrong!");
				cellIds.id9[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns10.length;i++)
		{
			if(suppliedAns10[i].toUpperCase() == correctAns.correctAns10[i])
			{
				//console.log(suppliedAns10[i]+" = Correct!");
				cellIds.id10[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns10[i]+" = Wrong!");
				cellIds.id10[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns11.length;i++)
		{
			if(suppliedAns11[i].toUpperCase() == correctAns.correctAns11[i])
			{
				//console.log(suppliedAns11[i]+" = Correct!");
				cellIds.id11[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns11[i]+" = Wrong!");
				cellIds.id11[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}

		for(var i=0;i<suppliedAns12.length;i++)
		{
			if(suppliedAns12[i].toUpperCase() == correctAns.correctAns12[i])
			{
				//console.log(suppliedAns12[i]+" = Correct!");
				cellIds.id12[i].setAttribute("class","correct");
				intCorrAns++;
			} 
			else
			{
				//console.log(suppliedAns12[i]+" = Wrong!");
				cellIds.id12[i].setAttribute("class","wrong");
				intWrongAns++;
			}
			
		}
	}
}
	
function ResetCells()
{

	for(var i = 0;i<cellIds.id1.length;i++){
		cellIds.id1[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id2.length;i++){
		cellIds.id2[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id3.length;i++){
		cellIds.id3[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id4.length;i++){
		cellIds.id4[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id5.length;i++){
		cellIds.id5[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id6.length;i++){
		cellIds.id6[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id7.length;i++){
		cellIds.id7[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id8.length;i++){
		cellIds.id8[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id9.length;i++){
		cellIds.id9[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id10.length;i++){
		cellIds.id10[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id11.length;i++){
		cellIds.id11[i].setAttribute("class","default");
	}

	for(var i = 0;i<cellIds.id12.length;i++){
		cellIds.id12[i].setAttribute("class","default");
	}

	init();
	v.DisplayResult("Score:");
}
