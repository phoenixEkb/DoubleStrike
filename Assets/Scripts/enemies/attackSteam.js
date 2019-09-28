#pragma strict

var enemy : steam;

function Start () 
{

}

function Update () 
{

}

function Awake () 
{
    enemy = gameObject.GetComponentInParent(steam);
}

function OnTriggerStay2D (col : Collider2D) 
{
    if (col.gameObject.tag == "Player")
        enemy.Attack(); 
}