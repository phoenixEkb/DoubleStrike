#pragma strict

var enemy : staticEnemy;

function Start () 
{

}

function Update () 
{

}

function Awake () 
{
    enemy = gameObject.GetComponentInParent(staticEnemy);
}

function OnTriggerStay2D (col : Collider2D) 
{
    if(col.gameObject.tag == "Player")
        enemy.Attack(); 
}