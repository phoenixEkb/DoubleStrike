#pragma strict

var window : int = 1;
var MainMenu : GUISkin;
private var password : String= "passwd";

function Start () 
{
	window = 1;
}

function Update () 
{

}

function OnGUI ()
{
    
    GUI.skin = MainMenu;
    var style1 : GUIStyle = new GUIStyle();
    style1.fontSize = 40;
    style1.normal.textColor = Color.white;
    
    var style2 : GUIStyle = new GUIStyle();
    style2.fontSize = 15;
    style2.normal.textColor = Color.white;

    var style3 : GUIStyle = new GUIStyle();
    style3.fontSize = 30;
    style3.normal.textColor = Color.white;
    style3.border = GUI.skin.button.border;
    
    GUI.BeginGroup (new Rect(Screen.width/2 - 300, Screen.height/2 - 300, 1000, 1000));
    GUI.Label(new Rect(110, 70, 300, 70), "DOUBLE STRIKE", style1);
    if (window == 1) 
    { 
        GUI.Label(new Rect(50, 150, 400, 70), "           MENU", style1); 
        if (GUI.Button(new Rect (130, 250, 350, 55), "New game")) 
            window = 2;   
        if (GUI.Button (new Rect (130, 350, 350, 55), "Level select")) 
            window = 3; 
    } 
    
    if (window == 2) 
    { 
        Application.LoadLevel("Level0");
    }

    if (window == 3) 
    { 
        GUI.Label(new Rect(50, 150, 400, 70), "     Input password", style1);   
        password = GUI.TextField(new Rect(200, 320, 400, 55), password, 6, style3);
        if (GUI.Button (new Rect (130, 370, 350, 55), "Confirm"))
        {
            if (password == "UNPACK")
                Application.LoadLevel("Level1_scene1");
            else if (password == "NEURON")
                Application.LoadLevel("Level2_scene1");
            else if (password == "FHTAGN")
                Application.LoadLevel("Level3_scene1");
            else if (password == "BRAINS")
                Application.LoadLevel("Level4_scene1");
            else if (password == "CANDLE")
                Application.LoadLevel("Level5");
            else
                password="Wrong!";
        }
        if (GUI.Button (new Rect (130, 470, 350, 55), "Back")) 
            window = 1;   
    }
    
    GUI.EndGroup();
}