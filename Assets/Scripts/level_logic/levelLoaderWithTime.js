#pragma strict

var nextLevel : String;

function Start () 
{
	yield WaitForSeconds(5);
	Application.LoadLevelAsync(nextLevel);
}

function Update () 
{

}