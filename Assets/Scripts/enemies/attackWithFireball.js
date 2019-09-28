#pragma strict

var Enemy : enemy;

function Start () 
{

}

function Update () 
{

}

function Awake () 
{
    Enemy = gameObject.GetComponentInParent(enemy);
}

function OnTriggerStay2D (col : Collider2D) 
{
    if (!Enemy.isFrozen)
        if (col.gameObject.tag == "Player")
            Enemy.Attack();
}