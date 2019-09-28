#pragma strict

function Start () 
{

}

function Update () 
{
	
}

function OnTriggerEnter2D (col : Collider2D) 
{
    Destroy(gameObject, 4);
}