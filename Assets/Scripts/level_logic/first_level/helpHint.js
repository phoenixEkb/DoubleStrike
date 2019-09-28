#pragma strict

var isTriggered = false;
var triggerCount = 0;
var showTime : float = 20;
var showTimer : float = 0;

function Start () 
{

}

function Update () 
{
    if(isTriggered)
	{
        showTimer += Time.deltaTime;
        if (showTimer >= showTime)
		{
            showTimer = 0;
            isTriggered = false;
        }
    }
}

function OnTriggerStay2D (col: Collider2D)
{
    if(col.gameObject.tag == "Player")
	{
        if(!isTriggered)
		{
            isTriggered = true;
            triggerCount++;
        }
    }
}

function OnGUI()
{
    if(isTriggered)
        if(triggerCount <= 1)
		{
            GUI.Label(Rect(500, 30, 300, 20), "Movement:");
            GUI.Label(Rect(515, 50, 300, 20), "Left: left arrow or A");
            GUI.Label(Rect(515, 70, 300, 20), "Right: right arrow or D");
            GUI.Label(Rect(515, 90, 300, 20), "Jump: up arrow or W");
            GUI.Label(Rect(500, 110, 300, 20), "Fight: T");
            GUI.Label(Rect(500, 130, 300, 20), "Block (only Clementine): G");
            GUI.Label(Rect(500, 150, 300, 20), "Teleport (only Marsel):");
            GUI.Label(Rect(515, 170, 300, 20), "Up: T");
            GUI.Label(Rect(515, 190, 300, 20), "Down: Y");
            GUI.Label(Rect(500, 210, 300, 20), "Character Change: Space");
        }
}