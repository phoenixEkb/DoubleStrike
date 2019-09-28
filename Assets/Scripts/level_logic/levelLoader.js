#pragma strict

var nextLevel : String;

function Start () 
{

}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.Space))
		Application.LoadLevelAsync(nextLevel);
}