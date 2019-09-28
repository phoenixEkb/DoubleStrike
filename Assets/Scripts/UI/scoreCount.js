#pragma strict

var score = 0;
var players = [];
var tex : Texture2D;
var heartsCount = 0;
var maxHP = 0;

function Start () 
{
    score = 0;
    players = GameObject.FindGameObjectsWithTag("Player");
    var currentPlayer : GameObject;
    currentPlayer = players[0];
    maxHP = currentPlayer.GetComponent(characterController).HP;
}

function Update () 
{
    players = GameObject.FindGameObjectsWithTag("Player");
    var currentPlayer : GameObject;
    if(players.length != 0)
	{
        currentPlayer = players[0];
        var playerHP = currentPlayer.GetComponent(characterController).HP;
        if (playerHP > maxHP * 4 / 5)
            heartsCount = 5;
        else if (playerHP > maxHP * 3 / 5)
            heartsCount = 4;
        else if (playerHP > maxHP * 2 / 5)
            heartsCount = 3;
        else if (playerHP > maxHP * 1 / 5)
            heartsCount = 2;
        else if (playerHP > 0)
            heartsCount = 1;
        else
            heartsCount = 0;
    }
}

function OnGUI ()
{
    var style1 : GUIStyle = new GUIStyle();
    style1.fontSize = 16;
    style1.normal.textColor = Color.white;
    GUI.Label(new Rect(10, 0, 15, 10), "Score: " + score, style1); 
	
    for(var i = 0; i < heartsCount; ++i)
        GUI.Label(Rect(250 + i * 25, 0, 20, 20), tex);
}