#pragma strict

var enemy : attractiveEnemy;

function Start () 
{

}

function Update () 
{

}

function Awake () 
{
    enemy = gameObject.GetComponentInParent(attractiveEnemy);
}

function OnTriggerStay2D (col : Collider2D) 
{
    if(col.gameObject.tag == "Player")
        enemy.Attack();
}
