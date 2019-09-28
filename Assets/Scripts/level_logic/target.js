#pragma strict

var connectedDoor : GameObject;

function Start () 
{

}

function Update () 
{

}

function OnTriggerEnter2D (col:Collider2D) 
{       
    if (col.gameObject.name == "bullet(Clone)") 
        Destroy(connectedDoor);
}