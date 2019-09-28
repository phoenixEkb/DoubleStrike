#pragma strict

var off : float = 1;
var MainMenu : GUISkin;

function Start () 
{
	
}

function Update () 
{

}

function OnGUI ()
{
	GUI.skin = MainMenu;
    var style1 : GUIStyle = new GUIStyle();
    style1.fontSize = 20;
    style1.normal.textColor = Color.red;
    
	GUI.BeginGroup (new Rect(Screen.width/2 - 300, Screen.height/2 - 300, 1000, 1000)); 
	off -= (Time.deltaTime*15);
	GUI.Label(new Rect(0, 600 + off, 1000, 1000), "      DOUBLE STRIKE\nCreated by The cake is undefined\nIRIT-RTF, RI-330901\nIvanaev Stanislav\nLanitina Marina\nOstrovsky Sergey\nKharisov Valery\n\nTo exit the menu, press the SPACEBAR", style1);
	
	if(Input.GetKeyDown(KeyCode.Space)) 
	{
		Application.LoadLevel("menu");
	}
	
	GUI.EndGroup();
}