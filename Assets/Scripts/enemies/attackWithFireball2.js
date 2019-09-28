#pragma strict

var enemy : staticEnemyWithFire;

function Start () 
{

}

function Update () 
{

}

function Awake () 
{
    enemy = gameObject.GetComponentInParent(staticEnemyWithFire);
}

function OnTriggerStay2D (col : Collider2D) 
{
    if (col.gameObject.tag == "Player")
        enemy.Attack(); 
}