#pragma strict


var text1 : String;
var text2 : String;
var text3 : String;
var text4 : String;
var text5 : String;
var timer : float = 0;
var col : GameObject;
var active = false;
var skin : GUISkin;

function Update () 
{ 
	if (!col) active = true;
	
	if (active)
		TextChanger();
}

function TextChanger ()
{
	timer += Time.deltaTime;
	if (timer >= 2) 
	{
    	text1="                                                                           ";
		text1=text2;
	}
	
	if (timer >= 4) 
	{
		text1="                                                                           ";
		text1=text3;
	}
	
	if (timer >= 6) 
	{
		text1="                                                                           ";
		text1=text4;
	}
	
	if (timer >= 8) 
	{
		text1="                                                                           ";
		text1=text5;
	}
	
	if (timer >= 10) 
	{
		text1="                                                                           ";
		Destroy(gameObject);
	}
}

function OnGUI ()
{
	GUI.skin = skin;
    var style1 : GUIStyle = new GUIStyle();
    style1.fontSize = 20;
    style1.normal.textColor = Color.white;
	
	if(active)
    	GUI.Box(Rect(10, Screen.height - 40, Screen.width - 10, Screen.height - 10), text1, style1);	
}