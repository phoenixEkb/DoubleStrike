#pragma strict

var nextLevel:String;

function Start () 
{

}

function Update () 
{

}

function OnCollisionEnter2D (col : Collision2D) 
{
    if (col.gameObject.name == "bullet(Clone)")
        WaitForSeconds(3);
	Application.LoadLevel(nextLevel);
}