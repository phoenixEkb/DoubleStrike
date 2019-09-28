#pragma strict

function Start () 
{

}

function Update () 
{

}

function OnCollisionEnter2D (col : Collision2D) 
{
	if (col.gameObject.name == "boss" || col.gameObject.tag == "LevelBottom")
		Destroy(gameObject);
}