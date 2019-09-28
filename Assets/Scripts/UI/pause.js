#pragma strict

var menu : boolean = false;
var MainMenu : GUISkin;
var window : int = 1;

function Start () 
{
	window = 1;
}

function Update () 
{ 
    if (Input.GetKeyDown(KeyCode.Escape)) 
	{
        if (!menu) 
		{
            menu = true;
            return;
        }
        else 
		{ 
            menu = false;
            Time.timeScale = 1;
            return;
        }
    }
}

function OnGUI () 
{
    GUI.skin = MainMenu;
    var style1 : GUIStyle = new GUIStyle();
    style1.fontSize = 40;
    style1.normal.textColor = Color.white;
    
    var style2 : GUIStyle = new GUIStyle();
    style2.fontSize = 20;
    style2.normal.textColor = Color.white;
    
    GUI.BeginGroup (new Rect(Screen.width/2 - 300, Screen.height/2 - 300, 1000, 1000));
    if (menu) 
	{                
        Time.timeScale = 0;     
        if (window == 1) 
		{
        	GUI.Label(new Rect(50, 150, 400, 70), "            MENU", style1); 
        	if (GUI.Button(new Rect (130, 220, 350, 40), "Continue"))
        		window = 2;
        	if (GUI.Button (new Rect (130, 290, 350, 40), "Help"))
        		window = 3;
        	if (GUI.Button (new Rect(130, 360, 350, 40), "Start level over again"))
        		window = 4;
        	if (GUI.Button (new Rect (130, 430, 350, 40), "Exit in menu")) 
        		window = 5;
        }
        
        if (window == 2) 
		{
            menu = false;  
            Time.timeScale = 1;
            window = 1; 
        }
        
        if (window == 3) 
		{ 
            GUI.Label(new Rect(50, 150, 400, 70), "             Help", style1);
            GUI.Label(new Rect(50, 200, 400, 70), "\n\n   w, a, d - control keys\n   spacebar - change of character\n   f - hit Clementina or shoot Marsel\n   c - block Clementina\n   t, y - movement Marsel between the platforms\n   h - throw lamp", style2);
            if (GUI.Button (new Rect (130, 430, 350, 40), "Back"))
            	window = 1;               
        }
        
        if (window == 4) 
		{
            menu = false;
            Time.timeScale = 1;
            window = 1;
            Application.LoadLevel(Application.loadedLevel);
        }
            
        if (window == 5) 
		{ 
            menu = false;
            Time.timeScale = 1;
            window = 1;
            Application.LoadLevel("menu");
        }
    }  
    GUI.EndGroup();
}	
