#pragma strict

var deadTime : int;

function Start () 
{
	yield WaitForSeconds(deadTime);
    Destroy(gameObject);
}

function Update () 
{

}

function OnTriggerEnter2D (col : Collider2D) 
{
    if (col.gameObject.tag == "Player")   
        Destroy(gameObject);
}

