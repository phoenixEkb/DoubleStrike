#pragma strict

var connectedKey : GameObject;
var enemy : GameObject;
var amount : int;
var enemySpawnPoint : Transform;
var noMoreEnemies : boolean = false;

function Start () 
{

}

function Update () 
{

}

function OnTriggerEnter2D (col : Collider2D)
{
    if (!connectedKey&&col.gameObject.tag == "Player"&&(!noMoreEnemies))	
	{
        var newEnemy:GameObject=null;
		
        while(amount > 0)
		{
            if (!GameObject.Find(enemy.name + "(Clone)"))
			{
                newEnemy = Instantiate(enemy, enemySpawnPoint.position, enemySpawnPoint.rotation);
                newEnemy.SetActive(true);
                amount = amount - 1;
            }
            yield WaitForSeconds(1);
        }
		
        while (GameObject.Find(enemy.name + "(Clone)"))
        {
            yield WaitForSeconds(1);
        }
        noMoreEnemies = true;
    }	
}